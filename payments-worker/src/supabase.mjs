/**
 * The two calls this Worker makes to Supabase's Data API, with fetch only (no
 * client library, so no session handling and nothing else to call by accident):
 *   POST /rest/v1/rpc/apply_subscription_event   the only write path
 *   GET  /rest/v1/subscriptions                  read, for reconciliation
 * Both authenticate with the secret key in the apikey header. The key is not a
 * JWT, so it is not sent as a Bearer token.
 */

export const RPC_OUTCOMES = Object.freeze(["applied", "stale", "duplicate", "rejected_user"]);
const TIMEOUT_MS = 4000;
const PAGE_SIZE = 500;

const LOOPBACK = new Set(["127.0.0.1", "localhost", "[::1]"]);

/** https only, apart from loopback (the local test setup). Returns a clean origin or null. */
export function baseUrl(raw) {
  if (typeof raw !== "string") return null;
  let u;
  try {
    u = new URL(raw);
  } catch {
    return null;
  }
  const ok = u.protocol === "https:" || (u.protocol === "http:" && LOOPBACK.has(u.hostname));
  return ok ? u.origin : null;
}

function headers(env) {
  return { apikey: env.SUPABASE_SECRET_KEY, accept: "application/json" };
}

/**
 * @returns {Promise<{ ok: true, outcome: string } | { ok: false, reason: string }>}
 * Any failure means "retry may help": the function writes nothing unless it
 * succeeds, so a failed call leaves no trace.
 */
export async function applyEvent(env, params, fetchImpl = fetch) {
  const base = baseUrl(env.SUPABASE_URL);
  if (!base || !env.SUPABASE_SECRET_KEY) return { ok: false, reason: "not_configured" };
  let res;
  try {
    res = await fetchImpl(`${base}/rest/v1/rpc/apply_subscription_event`, {
      method: "POST",
      headers: { ...headers(env), "content-type": "application/json" },
      body: JSON.stringify(params),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch {
    return { ok: false, reason: "rpc_unreachable" };
  }
  if (!res.ok) {
    try { await res.arrayBuffer(); } catch { /* drain only; the body is never read or logged */ }
    return { ok: false, reason: `rpc_${res.status}` };
  }
  let outcome;
  try {
    outcome = await res.json();
  } catch {
    return { ok: false, reason: "rpc_unreadable" };
  }
  return RPC_OUTCOMES.includes(outcome) ? { ok: true, outcome } : { ok: false, reason: "rpc_unexpected" };
}

const COLUMNS = "paddle_subscription_id,user_id,status,price_id,product_id,canceled_at,cancel_effective_at";

/** Every row of public.subscriptions, as { paddle_subscription_id -> row }. */
export async function readSubscriptions(env, fetchImpl = fetch) {
  const base = baseUrl(env.SUPABASE_URL);
  if (!base || !env.SUPABASE_SECRET_KEY) throw new Error("not_configured");
  const rows = new Map();
  for (let offset = 0; ; offset += PAGE_SIZE) {
    const url = `${base}/rest/v1/subscriptions?select=${COLUMNS}&order=paddle_subscription_id&limit=${PAGE_SIZE}&offset=${offset}`;
    const res = await fetchImpl(url, { headers: headers(env), signal: AbortSignal.timeout(TIMEOUT_MS) });
    if (!res.ok) {
      try { await res.arrayBuffer(); } catch { /* drain only */ }
      throw new Error(`read_${res.status}`);
    }
    const page = await res.json();
    if (!Array.isArray(page)) throw new Error("read_unexpected");
    for (const row of page) rows.set(row.paddle_subscription_id, row);
    if (page.length < PAGE_SIZE) return rows;
  }
}

const UUID_RE = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
export const isUuid = (v) => typeof v === "string" && UUID_RE.test(v);

/**
 * Who a user's access token belongs to, asked of Supabase itself. The caller's
 * own claims about the user are never used: the id and the email come from
 * Supabase's answer. The publishable key is the right apikey for this call (it
 * is what the browser-facing client uses); the visitor's token is the Bearer.
 *
 * @returns {Promise<{ ok: true, user: { id: string, email: string } } | { ok: false, reason: "unauthorized" | "unavailable" }>}
 */
export async function verifyAccessToken(env, accessToken, fetchImpl = fetch) {
  const base = baseUrl(env.SUPABASE_URL);
  if (!base || !env.SUPABASE_PUBLISHABLE_KEY) return { ok: false, reason: "unavailable" };
  if (typeof accessToken !== "string" || accessToken.length < 20 || accessToken.length > 4096 || /\s/.test(accessToken)) {
    return { ok: false, reason: "unauthorized" };
  }
  let res;
  try {
    res = await fetchImpl(`${base}/auth/v1/user`, {
      headers: { apikey: env.SUPABASE_PUBLISHABLE_KEY, authorization: `Bearer ${accessToken}`, accept: "application/json" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch {
    return { ok: false, reason: "unavailable" };
  }
  if (res.status === 401 || res.status === 403) {
    try { await res.arrayBuffer(); } catch { /* drain only */ }
    return { ok: false, reason: "unauthorized" };
  }
  if (!res.ok) {
    try { await res.arrayBuffer(); } catch { /* drain only */ }
    return { ok: false, reason: "unavailable" };
  }
  let body;
  try {
    body = await res.json();
  } catch {
    return { ok: false, reason: "unavailable" };
  }
  const email = typeof body?.email === "string" ? body.email.trim().toLowerCase() : "";
  // The address is only ever fixed into a checkout once Supabase has confirmed
  // it (the sign-in link proves the visitor controls the inbox).
  const confirmed = Boolean(body?.email_confirmed_at || body?.confirmed_at);
  if (!isUuid(body?.id) || !email || !confirmed) return { ok: false, reason: "unauthorized" };
  return { ok: true, user: { id: body.id.toLowerCase(), email } };
}

/** 'full' | 'past_due' | 'none' from public.entitlement_of, the one definition of access. */
export async function entitlementOf(env, userId, fetchImpl = fetch) {
  const base = baseUrl(env.SUPABASE_URL);
  if (!base || !env.SUPABASE_SECRET_KEY || !isUuid(userId)) throw new Error("not_configured");
  const res = await fetchImpl(`${base}/rest/v1/rpc/entitlement_of`, {
    method: "POST",
    headers: { ...headers(env), "content-type": "application/json" },
    body: JSON.stringify({ p_user_id: userId }),
    signal: AbortSignal.timeout(TIMEOUT_MS),
  });
  if (!res.ok) {
    try { await res.arrayBuffer(); } catch { /* drain only */ }
    throw new Error(`entitlement_${res.status}`);
  }
  const answer = await res.json();
  if (!["full", "past_due", "none"].includes(answer)) throw new Error("entitlement_unexpected");
  return answer;
}

/** This user's subscription rows, newest first: status, scheduled cancellation, Paddle customer and subscription ids. */
export async function readUserSubscriptions(env, userId, fetchImpl = fetch) {
  const base = baseUrl(env.SUPABASE_URL);
  if (!base || !env.SUPABASE_SECRET_KEY || !isUuid(userId)) throw new Error("not_configured");
  const url = `${base}/rest/v1/subscriptions?select=status,cancel_effective_at,paddle_customer_id,paddle_subscription_id&user_id=eq.${userId}&order=created_at.desc&limit=50`;
  const res = await fetchImpl(url, { headers: headers(env), signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) {
    try { await res.arrayBuffer(); } catch { /* drain only */ }
    throw new Error(`read_${res.status}`);
  }
  const rows = await res.json();
  if (!Array.isArray(rows)) throw new Error("read_unexpected");
  return rows;
}
