/**
 * Account deletion, server side: the only place a user's Paddle subscriptions
 * are cancelled and their Auth user is deleted.
 *
 * Called by the site Worker through the service binding (entrypoint.mjs) with
 * the visitor's access token and the word they typed, nothing else. The token
 * is checked with Supabase here, so the user id comes from Supabase and not from
 * the caller: no request can delete anyone but the person it signs in as.
 *
 * Order, and why:
 *   1. the typed word and a sign-in from the last ten minutes (an open session
 *      on a shared computer is not enough);
 *   2. every live Paddle subscription of this user is cancelled immediately;
 *   3. Paddle is read again, and if any is still live the run stops here;
 *   4. only then the Auth user is deleted, which removes our rows with it.
 * A failure at any step stops the run with the Auth user still there. A cancel
 * that already went through cannot be undone, so a retry must be safe: every
 * step is idempotent (a cancelled subscription is no longer live; a deleted user
 * is a 404, counted as done).
 *
 * Whose subscriptions: those under this user's Paddle customers (from their own
 * rows; or, when they have no rows, the customers Paddle has under their
 * verified email) that are either in their rows or carry their
 * supabase_user_id. A customer shared with someone else cannot pull that
 * person's subscription in.
 */
import { listSubscriptions, paddleBase, paddleCall, paddleCancelCall } from "./paddle-api.mjs";
import { baseUrl, deleteAuthUser, readUserSubscriptions, verifyAccessToken } from "./supabase.mjs";
import { logError, logInfo } from "./log.mjs";

export const CONFIRM_WORD = "DELETE";
/** How recent the user's sign-in must be. */
export const FRESH_MS = 10 * 60 * 1000;
/** The Paddle statuses that still bill, or could resume to. */
export const LIVE_STATUSES = Object.freeze(["active", "trialing", "past_due", "paused"]);

const CUSTOMER_ID_RE = /^ctm_[a-z0-9]+$/;
const SUB_ID_RE = /^sub_[a-z0-9_]+$/;
const MAX_CUSTOMERS = 10;

const configured = (env) =>
  Boolean(
    baseUrl(env.SUPABASE_URL) && env.SUPABASE_SECRET_KEY && env.SUPABASE_PUBLISHABLE_KEY &&
    paddleBase(env) && env.PADDLE_API_KEY && env.PADDLE_CANCEL_API_KEY && env.PADDLE_CHECKOUT_API_KEY,
  );

/** Whether a sign-in time is within the window. A missing or unreadable time is not fresh. */
export function isFresh(lastSignInAt, now = Date.now()) {
  const t = typeof lastSignInAt === "string" ? Date.parse(lastSignInAt) : NaN;
  return Number.isFinite(t) && now - t <= FRESH_MS && t - now < 60 * 1000;
}

function customerIdsFrom(rows) {
  const ids = new Set();
  for (const r of rows ?? []) {
    if (typeof r?.paddle_customer_id === "string" && CUSTOMER_ID_RE.test(r.paddle_customer_id)) ids.add(r.paddle_customer_id);
  }
  return [...ids];
}

/** Paddle customers under this verified email: active ones whose email matches exactly. */
async function customersByEmail(env, email, deps) {
  const r = await paddleCall(env, "GET", `/customers?email=${encodeURIComponent(email)}&status=active`, undefined, deps.fetch);
  if (r.status !== 200 || !Array.isArray(r.json?.data)) throw new Error(`customers_${r.status}`);
  return r.json.data
    .filter((c) => typeof c?.email === "string" && c.email.toLowerCase() === email && CUSTOMER_ID_RE.test(c?.id))
    .map((c) => c.id);
}

/**
 * The live subscriptions among `found` that belong to this user: in their rows,
 * or carrying their id in custom data.
 */
export function ownedLive(found, userId, rows) {
  const mine = new Set((rows ?? []).map((r) => r?.paddle_subscription_id).filter((v) => typeof v === "string"));
  return (found ?? []).filter(
    (s) =>
      typeof s?.id === "string" && SUB_ID_RE.test(s.id) && LIVE_STATUSES.includes(s.status) &&
      (mine.has(s.id) || String(s?.custom_data?.supabase_user_id ?? "").toLowerCase() === userId),
  );
}

/**
 * @param {object} env
 * @param {{ accessToken: string, confirm: string }} input
 * @returns {Promise<{ ok: true, cancelled: number }
 *                 | { ok: false, reason: "unauthorized" | "confirm" | "reauth_required" | "cancel_failed" | "delete_failed" | "unavailable" }>}
 */
export async function deleteAccount(env, input, deps = {}) {
  if (!configured(env)) {
    logError({ evt: "account_delete", reason: "not_configured" });
    return { ok: false, reason: "unavailable" };
  }
  if (typeof input?.confirm !== "string" || input.confirm.trim() !== CONFIRM_WORD) return { ok: false, reason: "confirm" };

  const who = await verifyAccessToken(env, input?.accessToken, deps.fetch);
  if (!who.ok) return { ok: false, reason: who.reason };
  const { user } = who;
  if (!isFresh(user.lastSignInAt, deps.now?.() ?? Date.now())) {
    logInfo({ evt: "account_delete", outcome: "refused", reason: "reauth_required" });
    return { ok: false, reason: "reauth_required" };
  }

  let rows;
  let customers;
  let live;
  try {
    rows = await readUserSubscriptions(env, user.id, deps.fetch);
    customers = customerIdsFrom(rows);
    // No rows: a purchase may be paid for and not yet recorded, so ask Paddle who
    // it has under this verified email.
    if (rows.length === 0) customers = await customersByEmail(env, user.email, deps);
    customers = customers.slice(0, MAX_CUSTOMERS);
    live = customers.length ? ownedLive((await listSubscriptions(env, deps.fetch, { customerIds: customers })).subscriptions, user.id, rows) : [];
  } catch (e) {
    logError({ evt: "account_delete", reason: String(e?.message ?? "failed") });
    return { ok: false, reason: "unavailable" };
  }

  // Cancel every live one now. Not stopping at the first failure: the
  // read-back below is what decides, so an "already cancelled" answer is fine.
  let cancelled = 0;
  for (const sub of live) {
    const r = await paddleCancelCall(env, "POST", `/subscriptions/${sub.id}/cancel`, { effective_from: "immediately" }, deps.fetch);
    if (r.status === 200) cancelled++;
    else logError({ evt: "account_delete", reason: `cancel_${r.status}` });
  }

  if (live.length) {
    try {
      const again = ownedLive((await listSubscriptions(env, deps.fetch, { customerIds: customers })).subscriptions, user.id, rows);
      if (again.length) {
        logError({ evt: "account_delete", reason: "still_live" });
        return { ok: false, reason: "cancel_failed" };
      }
    } catch (e) {
      logError({ evt: "account_delete", reason: String(e?.message ?? "failed") });
      return { ok: false, reason: "cancel_failed" };
    }
  }

  const deleted = await deleteAuthUser(env, user.id, deps.fetch);
  if (!deleted.ok) {
    logError({ evt: "account_delete", reason: deleted.reason });
    return { ok: false, reason: "delete_failed" };
  }
  logInfo({ evt: "account_delete", outcome: "deleted", cancelled });
  return { ok: true, cancelled };
}
