/**
 * Server-side customer portal links: the only place a Paddle portal session is
 * created.
 *
 * Called by the site Worker through the same service binding as checkout
 * (entrypoint.mjs) with the visitor's access token and a target, nothing else.
 * The token is checked with Supabase here, and the Paddle customer comes only
 * from this user's rows in our own database. Nothing the browser sends can name
 * a customer, and there is no lookup by email: a portal link lets its holder
 * cancel and read invoices, so it is never made for a customer we did not
 * record against this user.
 *
 * A portal session is temporary, so one is made per click and never kept. The
 * answer carries one URL and nothing else.
 */
import { paddleBase, paddlePortalCall } from "./paddle-api.mjs";
import { baseUrl, readUserSubscriptions, verifyAccessToken } from "./supabase.mjs";
import { logError, logInfo } from "./log.mjs";

export const TARGETS = Object.freeze(["general", "payment"]);
const CUSTOMER_ID_RE = /^ctm_[a-z0-9]+$/;
// Paddle ids are sub_ plus lower-case letters and digits; the test events use sub_test_...
const SUB_ID_RE = /^sub_[a-z0-9_]+$/;
const LOOPBACK = new Set(["127.0.0.1", "localhost", "[::1]"]);

/** Whether this user has a Paddle customer on record, for deciding if a Billing link is worth showing. */
export function hasCustomer(subscriptions) {
  return distinctCustomers(subscriptions).length > 0;
}

function distinctCustomers(subscriptions) {
  const ids = new Set();
  for (const s of subscriptions ?? []) {
    if (typeof s?.paddle_customer_id === "string" && CUSTOMER_ID_RE.test(s.paddle_customer_id)) ids.add(s.paddle_customer_id);
  }
  return [...ids];
}

/**
 * The one customer behind this user's rows. Two distinct customers on one user
 * is refused rather than guessed at, as checkout does.
 * @returns {{ ok: true, customerId: string } | { ok: false, reason: "no_customer" | "ambiguous" }}
 */
export function pickCustomer(subscriptions) {
  const ids = distinctCustomers(subscriptions);
  if (ids.length === 0) return { ok: false, reason: "no_customer" };
  if (ids.length > 1) return { ok: false, reason: "ambiguous" };
  return { ok: true, customerId: ids[0] };
}

/** The subscription to deep-link to: only when exactly one of this user's rows is past due. */
export function pastDueSubscription(subscriptions) {
  const due = (subscriptions ?? []).filter((s) => s?.status === "past_due");
  if (due.length !== 1) return null;
  const id = due[0].paddle_subscription_id;
  return typeof id === "string" && SUB_ID_RE.test(id) ? id : null;
}

/**
 * A URL we may send a visitor to: https on Paddle's own domain. (The local
 * test setup points the API at a loopback stand-in; there, only that origin.)
 */
export function isPortalUrl(env, raw) {
  if (typeof raw !== "string" || raw.length > 2000) return false;
  let u;
  try {
    u = new URL(raw);
  } catch {
    return false;
  }
  if (u.username || u.password) return false;
  const testBase = paddleBase(env);
  if (testBase?.startsWith("http://") && LOOPBACK.has(u.hostname)) return u.origin === testBase;
  return u.protocol === "https:" && (u.hostname === "paddle.com" || u.hostname.endsWith(".paddle.com"));
}

/** The link in a portal session answer: the payment deep link if asked for and present, else the general one. */
export function linkFrom(env, data, subscriptionId) {
  const urls = data?.urls;
  if (subscriptionId && Array.isArray(urls?.subscriptions)) {
    const entry = urls.subscriptions.find((s) => s?.id === subscriptionId);
    const deep = entry?.update_subscription_payment_method;
    if (isPortalUrl(env, deep)) return deep;
  }
  const general = urls?.general?.overview;
  return isPortalUrl(env, general) ? general : null;
}

const configured = (env) =>
  Boolean(baseUrl(env.SUPABASE_URL) && env.SUPABASE_SECRET_KEY && env.SUPABASE_PUBLISHABLE_KEY && paddleBase(env) && env.PADDLE_PORTAL_API_KEY);

/**
 * @param {object} env
 * @param {{ accessToken: string, target?: string }} input  target: "general" (default) or "payment"
 * @returns {Promise<{ ok: true, url: string }
 *                 | { ok: false, reason: "unauthorized" | "invalid_target" | "no_customer" | "ambiguous" | "unavailable" }>}
 */
export async function createPortalLink(env, input, deps = {}) {
  if (!configured(env)) {
    logError({ evt: "portal", reason: "not_configured" });
    return { ok: false, reason: "unavailable" };
  }
  const target = input?.target ?? "general";
  if (!TARGETS.includes(target)) return { ok: false, reason: "invalid_target" };

  const who = await verifyAccessToken(env, input?.accessToken, deps.fetch);
  if (!who.ok) return { ok: false, reason: who.reason };

  let rows;
  try {
    rows = await readUserSubscriptions(env, who.user.id, deps.fetch);
  } catch (e) {
    logError({ evt: "portal", reason: String(e?.message ?? "failed") });
    return { ok: false, reason: "unavailable" };
  }

  const picked = pickCustomer(rows);
  if (!picked.ok) {
    if (picked.reason === "ambiguous") logError({ evt: "portal", reason: "customer_ambiguous" });
    else logInfo({ evt: "portal", target, outcome: "refused", reason: picked.reason });
    return { ok: false, reason: picked.reason };
  }

  const subscriptionId = target === "payment" ? pastDueSubscription(rows) : null;
  const body = subscriptionId ? { subscription_ids: [subscriptionId] } : {};
  const made = await paddlePortalCall(env, "POST", `/customers/${picked.customerId}/portal-sessions`, body, deps.fetch);
  const url = made.status === 200 || made.status === 201 ? linkFrom(env, made.json?.data, subscriptionId) : null;
  if (!url) {
    logError({ evt: "portal", target, reason: `portal_${made.status}` });
    return { ok: false, reason: "unavailable" };
  }
  logInfo({ evt: "portal", target, outcome: "created", state: subscriptionId ? "deep" : "general" });
  return { ok: true, url };
}
