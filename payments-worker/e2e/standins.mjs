/**
 * Stand-ins for the services the Workers call, for the local end-to-end runs.
 *
 *  - Supabase (one server, like the real project URL): the Auth endpoints the
 *    sign-in flow uses (email link with PKCE, token exchange, user lookup) and
 *    a Data API backed by a throwaway local Postgres carrying the real
 *    migrations. Every query runs AS the role the request's key implies
 *    (secret key -> service_role, publishable key + a user's token ->
 *    authenticated with that user's id), so a missing grant or policy fails
 *    here exactly as it would on the real project.
 *  - Paddle: customers, transactions and customer portal sessions (each with
 *    its own key), recording every call. GET /portal/... is the "portal" a
 *    redirect lands on.
 *
 * Test infrastructure only. Needs `psql` and the PG* environment variables.
 */
import http from "node:http";
import crypto from "node:crypto";
import { spawnSync } from "node:child_process";

export const SB_SECRET = "sb_secret_E2E_ONLY_abcdef";
export const SB_PUBLISHABLE = "sb_publishable_E2E_ONLY_abcdef";
export const PADDLE_CHECKOUT_KEY = "pdl_sdbx_apikey_CHECKOUT_E2E_ONLY";
export const PADDLE_RECONCILE_KEY = "pdl_sdbx_apikey_E2E_ONLY";
export const PADDLE_PORTAL_KEY = "pdl_sdbx_apikey_PORTAL_E2E_ONLY";

export const psql = (sql) => {
  const r = spawnSync("psql", ["-X", "-q", "-A", "-t", "-v", "ON_ERROR_STOP=1"], { input: sql, encoding: "utf8" });
  return { ok: r.status === 0, out: r.stdout.trim(), err: r.stderr.trim() };
};
export const lit = (v) => (v === null || v === undefined ? "null" : `'${String(v).replace(/'/g, "''")}'`);
export const q = (sql) => psql(sql).out;

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
const b64u = (o) => Buffer.from(typeof o === "string" ? o : JSON.stringify(o)).toString("base64url");
const listen = (server, port) => new Promise((ok) => server.listen(port, "127.0.0.1", ok));
const readBody = (req) => new Promise((r) => { let d = ""; req.on("data", (c) => (d += c)); req.on("end", () => r(d)); });

const APPLY_PARAMS = [
  ["p_event_id", "text"], ["p_event_type", "text"], ["p_occurred_at", "timestamptz"], ["p_user_id", "uuid"],
  ["p_subscription_id", "text"], ["p_customer_id", "text"], ["p_status", "text"], ["p_price_id", "text"],
  ["p_product_id", "text"], ["p_started_at", "timestamptz"], ["p_canceled_at", "timestamptz"],
  ["p_scheduled_action", "text"], ["p_scheduled_effective_at", "timestamptz"],
];

export function createSupabaseStandin({ port }) {
  const state = {
    otps: [], hashes: new Map(), codes: new Map(), users: new Map(), access: new Map(), refresh: new Map(),
    log: [], down: false, expiresIn: 3600,
  };

  const userFor = (email) => {
    if (!state.users.has(email)) {
      const id = crypto.randomUUID();
      state.users.set(email, id);
      psql(`insert into auth.users (id, email) values (${lit(id)}, ${lit(email)}) on conflict do nothing;`);
    }
    return { id: state.users.get(email), email };
  };
  const session = (email) => {
    const u = userFor(email);
    const exp = Math.floor(Date.now() / 1000) + state.expiresIn;
    const access_token = `${b64u({ alg: "HS256", typ: "JWT" })}.${b64u({ sub: u.id, email, role: "authenticated", aud: "authenticated", exp })}.${b64u("sig")}.${crypto.randomBytes(4).toString("hex")}`;
    const refresh_token = crypto.randomBytes(8).toString("hex");
    state.access.set(access_token, u);
    state.refresh.set(refresh_token, u);
    return {
      access_token, token_type: "bearer", expires_in: state.expiresIn, expires_at: exp, refresh_token,
      user: { id: u.id, aud: "authenticated", role: "authenticated", email, email_confirmed_at: new Date().toISOString(), app_metadata: {}, user_metadata: {}, created_at: new Date().toISOString() },
    };
  };
  const whoIs = (req) => state.access.get((req.headers.authorization ?? "").replace(/^Bearer /, ""));

  /** Run SQL as the role the request's key implies; null when the key is not recognised. */
  const asRole = (req, sql) => {
    const key = req.headers.apikey;
    if (key === SB_SECRET) return psql(`set role service_role; ${sql}`);
    if (key === SB_PUBLISHABLE) {
      const u = whoIs(req);
      if (!u) return null;
      return psql(`set role authenticated; select set_config('request.jwt.claim.sub', ${lit(u.id)}, false); ${sql}`);
    }
    return null;
  };
  const lastLine = (out) => out.split("\n").filter(Boolean).pop();

  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://127.0.0.1:${port}`);
    const raw = await readBody(req);
    let body = {};
    try { body = raw ? JSON.parse(raw) : {}; } catch { /* not JSON */ }
    state.log.push({ method: req.method, path: url.pathname, query: url.search.replace(/^\?/, ''), apikey: req.headers.apikey, authorization: req.headers.authorization });
    const send = (code, b) => { res.writeHead(code, { "content-type": "application/json" }); res.end(b === undefined ? "" : JSON.stringify(b)); };
    const redirect = (to) => { res.writeHead(303, { location: to }); res.end(); };

    // controls (not part of any real API)
    if (url.pathname === "/__last") return send(200, state.otps.at(-1) ?? null);
    if (url.pathname === "/__log") return send(200, state.log);

    if (state.down && url.pathname.startsWith("/rest/")) return send(503, { message: "down" });

    // ---- Auth
    if (url.pathname === "/auth/v1/otp" && req.method === "POST") {
      const token_hash = "hash" + crypto.randomBytes(12).toString("hex");
      state.hashes.set(token_hash, { email: body.email, challenge: body.code_challenge });
      state.otps.push({ email: body.email, redirect_to: url.searchParams.get("redirect_to"), token_hash });
      userFor(body.email);
      return send(200, {});
    }
    // the link in Supabase's default email: verify, then redirect with a one-time code
    if (url.pathname === "/auth/v1/verify" && req.method === "GET") {
      const dest = new URL(url.searchParams.get("redirect_to"));
      const rec = state.hashes.get(url.searchParams.get("token"));
      if (!rec) {
        dest.searchParams.set("error", "access_denied");
        dest.searchParams.set("error_code", "otp_expired");
        return redirect(dest.href);
      }
      state.hashes.delete(url.searchParams.get("token"));
      const code = crypto.randomUUID();
      state.codes.set(code, rec);
      dest.searchParams.set("code", code);
      return redirect(dest.href);
    }
    if (url.pathname === "/auth/v1/token" && url.searchParams.get("grant_type") === "pkce") {
      const rec = state.codes.get(body.auth_code);
      if (!rec) return send(404, { code: 404, error_code: "flow_state_not_found", msg: "no flow state" });
      const challenge = crypto.createHash("sha256").update(String(body.code_verifier ?? "")).digest("base64url");
      if (!rec.challenge || challenge !== rec.challenge) return send(400, { code: 400, error_code: "flow_state_not_found", msg: "verifier mismatch" });
      state.codes.delete(body.auth_code);
      return send(200, session(rec.email));
    }
    if (url.pathname === "/auth/v1/token" && url.searchParams.get("grant_type") === "refresh_token") {
      const u = state.refresh.get(body.refresh_token);
      if (!u) return send(400, { code: 400, error_code: "refresh_token_not_found", msg: "no" });
      state.refresh.delete(body.refresh_token);
      return send(200, session(u.email));
    }
    if (url.pathname === "/auth/v1/user" && req.method === "GET") {
      const u = whoIs(req);
      if (!u) return send(401, { code: 401, error_code: "bad_jwt", msg: "invalid JWT" });
      return send(200, { id: u.id, aud: "authenticated", role: "authenticated", email: u.email, email_confirmed_at: new Date().toISOString(), app_metadata: {}, user_metadata: {}, created_at: new Date().toISOString() });
    }
    if (url.pathname === "/auth/v1/logout") return send(204);

    // ---- Data API
    if (req.method === "POST" && url.pathname === "/rest/v1/rpc/apply_subscription_event") {
      const args = APPLY_PARAMS.map(([n, t]) => `${n} => ${lit(body[n])}::${t}`).join(", ");
      const r = asRole(req, `select public.apply_subscription_event(${args});`);
      if (!r) return send(401, { message: "Invalid API key" });
      return r.ok ? send(200, lastLine(r.out)) : send(400, { message: "function raised" });
    }
    if (req.method === "POST" && url.pathname === "/rest/v1/rpc/entitlement_of") {
      if (!UUID_RE.test(body.p_user_id ?? "")) return send(400, { message: "bad id" });
      const r = asRole(req, `select public.entitlement_of(${lit(body.p_user_id)}::uuid);`);
      if (!r) return send(401, { message: "Invalid API key" });
      return r.ok ? send(200, lastLine(r.out)) : send(403, { message: "permission denied" });
    }
    if (req.method === "POST" && url.pathname === "/rest/v1/rpc/current_entitlement") {
      const r = asRole(req, "select public.current_entitlement();");
      if (!r) return send(401, { message: "Invalid API key or no session" });
      return r.ok ? send(200, lastLine(r.out)) : send(403, { message: "permission denied" });
    }
    if (req.method === "GET" && url.pathname === "/rest/v1/subscriptions") {
      const cols = (url.searchParams.get("select") ?? "*").split(",");
      if (!cols.every((c) => /^[a-z_]+$/.test(c))) return send(400, { message: "bad select" });
      const where = [];
      const userEq = /^eq\.(.+)$/.exec(url.searchParams.get("user_id") ?? "");
      if (userEq) { if (!UUID_RE.test(userEq[1])) return send(400, { message: "bad id" }); where.push(`user_id = ${lit(userEq[1])}::uuid`); }
      const order = /^([a-z_]+)(\.desc)?$/.exec(url.searchParams.get("order") ?? "paddle_subscription_id");
      if (!order) return send(400, { message: "bad order" });
      const limit = Math.min(Number(url.searchParams.get("limit") ?? 100), 500);
      const offset = Number(url.searchParams.get("offset") ?? 0);
      const sql = `select coalesce(jsonb_agg(to_jsonb(t)), '[]'::jsonb)::text from (select ${cols.join(",")} from public.subscriptions ${where.length ? "where " + where.join(" and ") : ""} order by ${order[1]}${order[2] ? " desc" : ""} limit ${limit} offset ${offset}) t;`;
      const r = asRole(req, sql);
      if (!r) return send(401, { message: "Invalid API key" });
      return r.ok ? send(200, JSON.parse(lastLine(r.out))) : send(403, { message: "permission denied" });
    }
    return send(404, { message: "not found" });
  });

  return {
    state,
    start: () => listen(server, port),
    stop: () => server.close(),
    /** The email link as Supabase's default template builds it (our /auth/callback via Supabase's verify). */
    defaultLink: (otp) => `http://127.0.0.1:${port}/auth/v1/verify?` + new URLSearchParams({ token: otp.token_hash, type: "magiclink", redirect_to: otp.redirect_to }),
    userId: (email) => state.users.get(email),
  };
}

export function createPaddleStandin({ port }) {
  const state = { customers: [], transactions: [], calls: [], portalSessions: [], customerSeq: 0, txnSeq: 0, portalSeq: 0, down: false, portalStatus: 201 };
  const server = http.createServer(async (req, res) => {
    const url = new URL(req.url, `http://127.0.0.1:${port}`);
    const raw = await readBody(req);
    let body = {};
    try { body = raw ? JSON.parse(raw) : {}; } catch { /* not JSON */ }
    const send = (code, b) => { res.writeHead(code, { "content-type": "application/json" }); res.end(JSON.stringify(b)); };
    // What a portal link lands on (a browser follows the redirect here).
    if (req.method === "GET" && url.pathname.startsWith("/portal/")) { res.writeHead(200, { "content-type": "text/html" }); return res.end("<h1>Paddle portal stand-in</h1>"); }
    state.calls.push({ method: req.method, path: url.pathname, authorization: req.headers.authorization });
    if (state.down) return send(503, {});
    // Customer portal sessions need the portal key and nothing else does.
    const portal = /^\/customers\/(ctm_[a-z0-9]+)\/portal-sessions$/.exec(url.pathname);
    if (req.method === "POST" && portal) {
      if (req.headers.authorization !== `Bearer ${PADDLE_PORTAL_KEY}`) return send(403, { error: { code: "forbidden" } });
      if (state.portalStatus >= 300) return send(state.portalStatus, { error: { code: "x" } });
      const n = ++state.portalSeq;
      const origin = `http://127.0.0.1:${port}`;
      const ids = Array.isArray(body.subscription_ids) ? body.subscription_ids : [];
      state.portalSessions.push({ customer: portal[1], body });
      return send(201, { data: { id: `cpls_e2e${n}`, customer_id: portal[1], urls: {
        general: { overview: `${origin}/portal/tok_general_${n}` },
        subscriptions: ids.map((id) => ({ id, cancel_subscription: `${origin}/portal/tok_cancel_${n}`, update_subscription_payment_method: `${origin}/portal/tok_payment_${n}/update-payment-method` })),
      } } });
    }
    if (req.headers.authorization !== `Bearer ${PADDLE_CHECKOUT_KEY}`) return send(403, { error: { code: "forbidden" } });
    if (req.method === "GET" && url.pathname === "/customers") {
      const email = (url.searchParams.get("email") ?? "").toLowerCase();
      return send(200, { data: state.customers.filter((c) => c.email.toLowerCase() === email), meta: { pagination: { next: null } } });
    }
    if (req.method === "POST" && url.pathname === "/customers") {
      const id = `ctm_e2e${++state.customerSeq}`;
      state.customers.push({ id, email: body.email, status: "active", custom_data: body.custom_data });
      return send(201, { data: { id, email: body.email } });
    }
    if (req.method === "POST" && url.pathname === "/transactions") {
      const id = `txn_e2e${++state.txnSeq}`;
      state.transactions.push({ id, body });
      return send(201, { data: { id, checkout: { url: "https://example.invalid/pay" } } });
    }
    return send(404, {});
  });
  return { state, start: () => listen(server, port), stop: () => server.close() };
}
