#!/usr/bin/env node
/**
 * End-to-end run of the real Worker under `wrangler dev` (workerd), against
 *   - a throwaway local Postgres carrying the real migrations (e2e/setup.sql, then supabase/migrations/*), and
 *   - stand-ins for the two HTTP APIs it calls: Supabase's Data API (which runs
 *     the SQL AS service_role, so a missing grant fails here exactly as it
 *     would on the real project) and Paddle's subscriptions API.
 *
 * Not part of CI (it needs a local Postgres). Prepare once:
 *   createdb payments_test; psql -d payments_test -f e2e/setup.sql
 *   psql -d payments_test -f ../supabase/migrations/20261001000000_payments_schema.sql
 *   psql -d payments_test -f ../supabase/migrations/20261001000100_payments_hardening.sql   (needs pg_cron)
 * Then: PGHOST=127.0.0.1 PGPORT=54329 PGUSER=postgres PGDATABASE=payments_test npm run e2e
 */
import http from "node:http";
import { spawn, spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHmac, randomUUID } from "node:crypto";
import { buildRequest } from "../scripts/send-test-event.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const WORKER_PORT = 8799;
const DATA_PORT = 54398;
const PADDLE_PORT = 54397;
const SECRET = "pdl_ntfset_E2E_ONLY_0123456789";
const SB_KEY = "sb_secret_E2E_ONLY_abcdef";
const PADDLE_KEY = "pdl_sdbx_apikey_E2E_ONLY";
const PRODUCT = "pro_e2e";
const PRICE = "pri_e2e_quarterly";

let failures = 0;
const check = (name, ok, extra = "") => {
  if (!ok) failures++;
  console.log((ok ? "PASS  " : "FAIL  ") + name + (!ok && extra ? `   [${extra}]` : ""));
};

// ------------------------------------------------------------------ database
const psql = (sql) => {
  const r = spawnSync("psql", ["-X", "-q", "-A", "-t", "-v", "ON_ERROR_STOP=1"], { input: sql, encoding: "utf8" });
  return { ok: r.status === 0, out: r.stdout.trim(), err: r.stderr.trim() };
};
const lit = (v) => (v === null || v === undefined ? "null" : `'${String(v).replace(/'/g, "''")}'`);
const q = (sql) => psql(sql).out;
const count = (table, where = "true") => Number(q(`select count(*) from public.${table} where ${where}`));

// ----------------------------------------------- stand-in Supabase Data API
const dataLog = [];
let dataDown = false;
const dataServer = http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  let raw = "";
  req.on("data", (c) => (raw += c));
  req.on("end", () => {
    dataLog.push({ method: req.method, path: url.pathname, apikey: req.headers.apikey, authorization: req.headers.authorization });
    const send = (code, body) => { res.writeHead(code, { "content-type": "application/json" }); res.end(JSON.stringify(body)); };
    if (dataDown) return send(503, { message: "down" });
    if (req.headers.apikey !== SB_KEY) return send(401, { message: "Invalid API key" });
    if (req.method === "POST" && url.pathname === "/rest/v1/rpc/apply_subscription_event") {
      const p = JSON.parse(raw);
      const names = ["p_event_id", "p_event_type", "p_occurred_at", "p_user_id", "p_subscription_id", "p_customer_id", "p_status", "p_price_id", "p_product_id", "p_started_at", "p_canceled_at", "p_scheduled_action", "p_scheduled_effective_at"];
      const types = ["text", "text", "timestamptz", "uuid", "text", "text", "text", "text", "text", "timestamptz", "timestamptz", "text", "timestamptz"];
      const args = names.map((n, i) => `${n} => ${lit(p[n])}::${types[i]}`).join(", ");
      const r = psql(`set role service_role; select public.apply_subscription_event(${args});`);
      if (!r.ok) return send(400, { message: "function raised" });
      const outcome = r.out.split("\n").filter(Boolean).pop();
      return send(200, outcome);
    }
    if (req.method === "GET" && url.pathname === "/rest/v1/subscriptions") {
      const cols = url.searchParams.get("select").split(",");
      if (!cols.every((c) => /^[a-z_]+$/.test(c))) return send(400, { message: "bad select" });
      const limit = Number(url.searchParams.get("limit"));
      const offset = Number(url.searchParams.get("offset"));
      const r = psql(`set role service_role; select coalesce(jsonb_agg(to_jsonb(t)), '[]'::jsonb)::text from (select ${cols.join(",")} from public.subscriptions order by paddle_subscription_id limit ${limit} offset ${offset}) t;`);
      return r.ok ? send(200, JSON.parse(r.out.split("\n").filter(Boolean).pop())) : send(400, { message: "read failed" });
    }
    return send(404, { message: "not found" });
  });
});

// ------------------------------------------------------- stand-in Paddle API
let paddleSubs = [];
const paddleLog = [];
const paddleServer = http.createServer((req, res) => {
  const url = new URL(req.url, "http://x");
  paddleLog.push({ path: url.pathname, authorization: req.headers.authorization });
  res.writeHead(200, { "content-type": "application/json" });
  if (req.headers.authorization !== `Bearer ${PADDLE_KEY}`) { res.statusCode = 401; return res.end("{}"); }
  const perPage = Number(url.searchParams.get("per_page") ?? 200);
  const page = Number(url.searchParams.get("page") ?? 0);
  const slice = paddleSubs.slice(page * perPage, (page + 1) * perPage);
  const more = (page + 1) * perPage < paddleSubs.length;
  res.end(JSON.stringify({ data: slice, meta: { pagination: { per_page: perPage, next: more ? `http://127.0.0.1:${PADDLE_PORT}/subscriptions?per_page=${perPage}&page=${page + 1}` : null, has_more: more } } }));
});

const listen = (server, port) => new Promise((ok) => server.listen(port, "127.0.0.1", ok));

// ----------------------------------------------------------------- the Worker
const devVars = path.join(root, ".dev.vars");
let worker;
const workerLines = [];
async function startWorker() {
  fs.writeFileSync(
    devVars,
    [
      `SUPABASE_URL=http://127.0.0.1:${DATA_PORT}`,
      `SUPABASE_SECRET_KEY=${SB_KEY}`,
      "PADDLE_ENVIRONMENT=sandbox",
      `PADDLE_WEBHOOK_SECRET_SANDBOX=${SECRET}`,
      "PADDLE_WEBHOOK_SECRET_LIVE=pdl_ntfset_E2E_ONLY_LIVE_NOT_USED",
      `PADDLE_API_KEY=${PADDLE_KEY}`,
      `PADDLE_API_BASE_URL=http://127.0.0.1:${PADDLE_PORT}`,
      `PADDLE_PRODUCT_ID=${PRODUCT}`,
    ].join("\n") + "\n"
  );
  // A leftover server from an earlier run would answer the readiness probe and
  // make this run test the wrong code, so refuse to start over one.
  try {
    await fetch(`http://127.0.0.1:${WORKER_PORT}/nothing`);
    throw new Error(`Something is already listening on port ${WORKER_PORT}. Stop the old wrangler dev first.`);
  } catch (e) {
    if (String(e.message).startsWith("Something is already")) throw e;
  }
  // Own process group, so the whole tree (wrangler, esbuild, workerd) can be stopped at the end.
  worker = spawn("npx", ["wrangler", "dev", "--local", "--test-scheduled", "--port", String(WORKER_PORT)], {
    cwd: root,
    detached: true,
    env: { ...process.env, WRANGLER_SEND_METRICS: "false", NO_COLOR: "1" },
  });
  for (const s of [worker.stdout, worker.stderr]) s.on("data", (d) => workerLines.push(String(d)));
  for (let i = 0; i < 90; i++) {
    try {
      const r = await fetch(`http://127.0.0.1:${WORKER_PORT}/nothing`);
      if (r.status === 404) return;
    } catch { /* not up yet */ }
    await new Promise((r) => setTimeout(r, 1000));
  }
  throw new Error("wrangler dev did not start:\n" + workerLines.join(""));
}

// ----------------------------------------------------------------- the checks
const URL_ = `http://127.0.0.1:${WORKER_PORT}/paddle/webhook`;
const email = "e2e.person@example.invalid";

function request(args, userId, extraEnv = {}) {
  return buildRequest(
    { WEBHOOK_URL: URL_, PADDLE_WEBHOOK_SECRET: SECRET, TEST_USER_ID: userId, PADDLE_PRODUCT_ID: PRODUCT, PADDLE_PRICE_ID: PRICE, ...extraEnv },
    args
  );
}
/** The same event body signed again with a fresh timestamp, as Paddle does for a retry. */
function resign(r) {
  const ts = Math.floor(Date.now() / 1000);
  const h1 = createHmac("sha256", SECRET).update(`${ts}:`).update(r.body).digest("hex");
  return { ...r, headers: { ...r.headers, "paddle-signature": `ts=${ts};h1=${h1}` } };
}
async function send(r) {
  const res = await fetch(r.url, { method: "POST", headers: r.headers, body: r.body });
  return { status: res.status, body: await res.json().catch(() => null) };
}
const row = (sub) => JSON.parse(q(`select coalesce(jsonb_agg(to_jsonb(t)), '[]'::jsonb)::text from (select * from public.subscriptions where paddle_subscription_id = ${lit(sub)}) t`))[0];

async function main() {
  await listen(dataServer, DATA_PORT);
  await listen(paddleServer, PADDLE_PORT);
  const userId = randomUUID();
  q(`delete from public.subscriptions; delete from public.webhook_events; delete from auth.users;`);
  q(`insert into auth.users (id, email) values (${lit(userId)}, ${lit(email)});`);
  await startWorker();

  const T0 = Date.parse("2026-10-01T10:00:00Z");
  const at = (s) => new Date(T0 + s * 1000).toISOString();

  // 1. created -> applied
  let r = request({ "occurred-at": at(0) }, userId);
  let out = await send(r);
  check("created: 200 applied", out.status === 200 && out.body?.outcome === "applied", JSON.stringify(out));
  const sub = r.subId;
  check("created: subscription row stored for the right user, active", row(sub)?.user_id === userId && row(sub)?.status === "active" && row(sub)?.price_id === PRICE);
  check("created: one dedupe row", count("webhook_events", `event_id = ${lit(r.eventId)}`) === 1);

  // 2. the same delivery again -> duplicate, nothing changes
  const before = count("webhook_events");
  out = await send(r);
  check("replay of the same delivery: 200 duplicate", out.status === 200 && out.body?.outcome === "duplicate", JSON.stringify(out));
  check("replay: nothing new recorded", count("webhook_events") === before);

  // 3. out of order: a later update, then an older one
  out = await send(request({ type: "subscription.updated", status: "past_due", sub, "occurred-at": at(60) }, userId));
  check("later update: applied, now past_due", out.body?.outcome === "applied" && row(sub).status === "past_due", JSON.stringify(out));
  out = await send(request({ type: "subscription.activated", status: "active", sub, "occurred-at": at(30) }, userId));
  check("older event arriving late: 200 stale", out.status === 200 && out.body?.outcome === "stale", JSON.stringify(out));
  check("stale event did not overwrite the newer state", row(sub).status === "past_due");

  // 4. scheduled cancellation, then the cancellation itself
  out = await send(request({ type: "subscription.updated", status: "active", sub, "occurred-at": at(120), "scheduled-cancel": at(86400) }, userId));
  check("scheduled cancel: applied, effective date kept, still active", out.body?.outcome === "applied" && row(sub).status === "active" && Date.parse(row(sub).cancel_effective_at) === Date.parse(at(86400)));
  out = await send(request({ type: "subscription.canceled", status: "canceled", sub, "occurred-at": at(180) }, userId));
  check("canceled: applied, status canceled with canceled_at", out.body?.outcome === "applied" && row(sub).status === "canceled" && row(sub).canceled_at !== null);

  // 5. unknown user -> rejected_user, no subscription row, never retried
  const ghost = request({ "occurred-at": at(0) }, randomUUID());
  out = await send(ghost);
  check("unknown user id: 200 rejected_user", out.status === 200 && out.body?.outcome === "rejected_user", JSON.stringify(out));
  check("unknown user id: no subscription row", row(ghost.subId) === undefined);

  // 6. signature failures leave no trace
  const rowsBefore = count("webhook_events");
  const tampered = await send(request({ tamper: true }, userId));
  const stale = await send(request({ stale: true }, userId));
  const wrongSecret = await send(request({}, userId, { PADDLE_WEBHOOK_SECRET: "pdl_ntfset_someone_elses" }));
  check("tampered body: 401", tampered.status === 401);
  check("signature 60 s old: 401", stale.status === 401);
  check("wrong secret: 401", wrongSecret.status === 401);
  check("signature failures wrote nothing", count("webhook_events") === rowsBefore);

  // 7. not ours
  const elsewhere = await send(request({ type: "subscription.created" }, userId, { PADDLE_PRODUCT_ID: "pro_someone_else" }));
  check("another product: 200 ignored, nothing written", elsewhere.status === 200 && elsewhere.body?.outcome === "ignored" && count("webhook_events") === rowsBefore);

  // 8. database down: 503, nothing recorded, and the retry works
  const retryable = request({ "occurred-at": at(500) }, userId);
  dataDown = true;
  out = await send(retryable);
  check("database down: 503 so Paddle retries", out.status === 503, JSON.stringify(out));
  check("database down: nothing recorded", count("webhook_events", `event_id = ${lit(retryable.eventId)}`) === 0);
  dataDown = false;
  out = await send(resign(retryable));
  check("Paddle's retry of the same event, once the database is back: applied", out.status === 200 && out.body?.outcome === "applied", JSON.stringify(out));

  // 9. reconciliation
  const T1 = "2026-10-01T11:00:00.000000Z";
  const entity = (id, over = {}) => ({
    id, status: "active", customer_id: "ctm_e2e", started_at: "2026-10-01T09:00:00Z", canceled_at: null, scheduled_change: null,
    updated_at: T1, items: [{ status: "active", price: { id: PRICE, product_id: PRODUCT }, product: { id: PRODUCT } }],
    custom_data: { supabase_user_id: userId }, ...over,
  });
  // a live subscription we hold as active whose cancellation Paddle sent but we missed
  const missed = request({ "occurred-at": at(1000) }, userId);
  await send(missed);
  // one we have never heard of
  const unheard = "sub_test_unheard01";
  // one where our state is NEWER than what Paddle's entity says (a late webhook already applied)
  const newer = request({ "occurred-at": at(7200), status: "past_due" }, userId);
  await send(newer);
  paddleSubs = [
    entity(missed.subId, { status: "canceled", canceled_at: "2026-10-01T10:59:00Z" }),
    entity(unheard),
    entity(newer.subId, { status: "active", updated_at: "2026-10-01T10:00:30.000000Z" }),
  ];
  const rpcBefore = dataLog.filter((l) => l.path.includes("/rpc/")).length;
  const sched = await fetch(`http://127.0.0.1:${WORKER_PORT}/__scheduled?cron=17+*+*+*+*`);
  await new Promise((ok) => setTimeout(ok, 1500));
  check("cron trigger ran", sched.status === 200);
  check("reconcile: the missed cancellation was applied", row(missed.subId).status === "canceled");
  check("reconcile: a subscription we had never heard of was created", row(unheard)?.status === "active" && row(unheard)?.user_id === userId);
  check("reconcile: Paddle's older state did NOT overwrite our newer one", row(newer.subId).status === "past_due");
  const rpcFirst = dataLog.filter((l) => l.path.includes("/rpc/")).length - rpcBefore;
  await fetch(`http://127.0.0.1:${WORKER_PORT}/__scheduled?cron=17+*+*+*+*`);
  await new Promise((ok) => setTimeout(ok, 1500));
  const rpcSecond = dataLog.filter((l) => l.path.includes("/rpc/")).length - rpcBefore - rpcFirst;
  check("reconcile: a second run applies only what still differs (the one stale case)", rpcFirst === 3 && rpcSecond === 1, `first ${rpcFirst}, second ${rpcSecond}`);
  check("reconcile: Paddle was called with the read-only key as a Bearer token", paddleLog.length >= 2 && paddleLog.every((l) => l.authorization === `Bearer ${PADDLE_KEY}` && l.path === "/subscriptions"));

  // 10. what the Worker was allowed to reach
  const paths = [...new Set(dataLog.map((l) => `${l.method} ${l.path}`))].sort();
  check("the Worker called only the RPC and the subscriptions read", paths.join("|") === "GET /rest/v1/subscriptions|POST /rest/v1/rpc/apply_subscription_event", paths.join("|"));
  check("every Supabase call carried the secret key in apikey and no Authorization header", dataLog.every((l) => l.apikey === SB_KEY && l.authorization === undefined));

  // 11. logs
  await new Promise((ok) => setTimeout(ok, 500));
  const logs = workerLines.join("");
  if (process.env.E2E_SHOW_LOGS) console.log(logs);
  const secrets = [SECRET, SB_KEY, PADDLE_KEY, userId, email, "ctm_e2e", "supabase_user_id", "paddle-signature"];
  check("worker output has the event lines", /"event_id":"evt_test_/.test(logs) && /"outcome":"applied"/.test(logs) && /"evt":"reconcile"/.test(logs));
  check("worker output contains no secret, user id, address or customer id", secrets.every((s) => !logs.includes(s)), secrets.filter((s) => logs.includes(s)).join(","));
}

try {
  await main();
} catch (e) {
  failures++;
  console.error("ERROR", e);
} finally {
  if (worker?.pid) {
    try { process.kill(-worker.pid, "SIGTERM"); } catch { /* already gone */ }
  }
  dataServer.close();
  paddleServer.close();
  fs.rmSync(devVars, { force: true });
  console.log(`\n${failures === 0 ? "ALL PASS" : "FAILURES: " + failures}`);
  process.exit(failures === 0 ? 0 : 1);
}
