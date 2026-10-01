/**
 * Server-side checkout: the only place a Paddle transaction is created.
 *
 * Called by the site Worker through a service binding (entrypoint.mjs) with the
 * visitor's access token and a plan name, nothing else. The token is checked
 * with Supabase here, so the user id and the email come from Supabase and not
 * from the caller: even a bug in the site Worker cannot make this create a
 * transaction for someone else.
 *
 * The browser later receives only the transaction id, the client-side token
 * and the environment name.
 */
import { paddleBase, paddleCall } from "./paddle-api.mjs";
import { baseUrl, entitlementOf, readUserSubscriptions, verifyAccessToken } from "./supabase.mjs";
import { logError, logInfo } from "./log.mjs";

export const PLANS = Object.freeze(["quarterly", "yearly"]);
const PRICE_VARS = { quarterly: "PADDLE_PRICE_QUARTERLY", yearly: "PADDLE_PRICE_YEARLY" };
const TXN_ID_RE = /^txn_[a-z0-9]+$/;
const CUSTOMER_ID_RE = /^ctm_[a-z0-9]+$/;
const PRICE_ID_RE = /^pri_[a-z0-9]+$/;

/** The price for a plan name, from the server-side allow-list. Anything else is null. */
export function priceFor(env, plan) {
  if (typeof plan !== "string" || !Object.prototype.hasOwnProperty.call(PRICE_VARS, plan)) return null;
  const id = env[PRICE_VARS[plan]];
  return typeof id === "string" && PRICE_ID_RE.test(id) ? id : null;
}

/** What a transaction is made of. Nothing in it comes from the browser except which plan. */
export function buildTransactionBody({ priceId, userId, customerId }) {
  return {
    items: [{ price_id: priceId, quantity: 1 }],
    customer_id: customerId,
    custom_data: { supabase_user_id: userId },
    collection_mode: "automatic",
  };
}

/**
 * Whether a checkout may start. Never a second one for someone who has, or is
 * about to have, a subscription.
 *   entitled          full access (a subscription or a manual entitlement)
 *   scheduled_cancel  full access that ends on a date already chosen
 *   past_due          a payment failed; a new subscription would double up
 *   paused            paused; resuming belongs to the customer portal
 *   ready             checkout may start
 * @returns {{ state: string, until?: string }}
 */
export function eligibility({ entitlement, subscriptions }, now = Date.now()) {
  if (entitlement === "full") {
    const dates = subscriptions
      .filter((s) => s?.cancel_effective_at && Date.parse(s.cancel_effective_at) > now)
      .map((s) => s.cancel_effective_at)
      .sort();
    return dates.length ? { state: "scheduled_cancel", until: dates[dates.length - 1] } : { state: "entitled" };
  }
  if (entitlement === "past_due") return { state: "past_due" };
  if (subscriptions.some((s) => s?.status === "paused")) return { state: "paused" };
  return { state: "ready" };
}

const configuredForState = (env) => Boolean(baseUrl(env.SUPABASE_URL) && env.SUPABASE_SECRET_KEY && env.SUPABASE_PUBLISHABLE_KEY);
const configuredForCreate = (env) =>
  configuredForState(env) &&
  Boolean(paddleBase(env) && env.PADDLE_CHECKOUT_API_KEY && env.PADDLE_CLIENT_TOKEN && priceFor(env, "quarterly") && priceFor(env, "yearly"));

async function loadState(env, userId, deps) {
  const [entitlement, subscriptions] = await Promise.all([
    entitlementOf(env, userId, deps.fetch),
    readUserSubscriptions(env, userId, deps.fetch),
  ]);
  return { entitlement, subscriptions };
}

/**
 * Where this visitor stands, for the checkout page to render. No Paddle call and
 * no transaction. @returns {Promise<{ ok: true, state: string, until?: string } | { ok: false, reason: string }>}
 */
export async function checkoutStatus(env, input, deps = {}) {
  if (!configuredForState(env)) {
    logError({ evt: "checkout_status", reason: "not_configured" });
    return { ok: false, reason: "unavailable" };
  }
  const who = await verifyAccessToken(env, input?.accessToken, deps.fetch);
  if (!who.ok) return { ok: false, reason: who.reason };
  try {
    const state = eligibility(await loadState(env, who.user.id, deps), deps.now?.());
    return { ok: true, ...state };
  } catch (e) {
    logError({ evt: "checkout_status", reason: String(e?.message ?? "failed") });
    return { ok: false, reason: "unavailable" };
  }
}

/** The Paddle customer for this user: ours if we have one, else theirs by email, else a new one. */
async function resolveCustomer(env, user, subscriptions, deps) {
  const known = subscriptions.map((s) => s?.paddle_customer_id).find((id) => typeof id === "string" && CUSTOMER_ID_RE.test(id));
  if (known) return known;

  const find = async () => {
    const r = await paddleCall(env, "GET", `/customers?email=${encodeURIComponent(user.email)}&status=active`, undefined, deps.fetch);
    if (r.status !== 200 || !Array.isArray(r.json?.data)) throw new Error(`customers_${r.status}`);
    const matches = r.json.data.filter((c) => typeof c?.email === "string" && c.email.toLowerCase() === user.email && CUSTOMER_ID_RE.test(c?.id));
    // Two customers with one address: guessing would attach this purchase to
    // the wrong record.
    if (matches.length > 1) throw new Error("customer_ambiguous");
    return matches[0]?.id ?? null;
  };

  const existing = await find();
  if (existing) return existing;

  const created = await paddleCall(env, "POST", "/customers", { email: user.email, custom_data: { supabase_user_id: user.id } }, deps.fetch);
  if (created.status === 201 || created.status === 200) {
    const id = created.json?.data?.id;
    if (typeof id === "string" && CUSTOMER_ID_RE.test(id)) return id;
    throw new Error("customer_unexpected");
  }
  // Someone else created it between our lookup and now: use it.
  if (created.status === 409) {
    const raced = await find();
    if (raced) return raced;
  }
  throw new Error(`customer_create_${created.status}`);
}

/**
 * @param {object} env
 * @param {{ accessToken: string, plan: string }} input
 * @returns {Promise<{ ok: true, transactionId: string, clientToken: string, environment: string }
 *                 | { ok: false, reason: string, until?: string }>}
 */
export async function createCheckout(env, input, deps = {}) {
  if (!configuredForCreate(env)) {
    logError({ evt: "checkout", reason: "not_configured" });
    return { ok: false, reason: "unavailable" };
  }
  const priceId = priceFor(env, input?.plan);
  if (!priceId) return { ok: false, reason: "invalid_plan" };

  const who = await verifyAccessToken(env, input?.accessToken, deps.fetch);
  if (!who.ok) return { ok: false, reason: who.reason };
  const { user } = who;

  let loaded;
  try {
    loaded = await loadState(env, user.id, deps);
  } catch (e) {
    logError({ evt: "checkout", reason: String(e?.message ?? "failed") });
    return { ok: false, reason: "unavailable" };
  }
  const verdict = eligibility(loaded, deps.now?.());
  if (verdict.state !== "ready") {
    logInfo({ evt: "checkout", plan: input.plan, outcome: "refused", state: verdict.state });
    return { ok: false, reason: verdict.state, ...(verdict.until ? { until: verdict.until } : {}) };
  }

  try {
    const customerId = await resolveCustomer(env, user, loaded.subscriptions, deps);
    const made = await paddleCall(env, "POST", "/transactions", buildTransactionBody({ priceId, userId: user.id, customerId }), deps.fetch);
    const id = made.json?.data?.id;
    if ((made.status !== 201 && made.status !== 200) || typeof id !== "string" || !TXN_ID_RE.test(id)) {
      throw new Error(`transaction_${made.status}`);
    }
    logInfo({ evt: "checkout", plan: input.plan, outcome: "created" });
    return { ok: true, transactionId: id, clientToken: env.PADDLE_CLIENT_TOKEN, environment: env.PADDLE_ENVIRONMENT };
  } catch (e) {
    logError({ evt: "checkout", plan: input.plan, reason: String(e?.message ?? "failed") });
    return { ok: false, reason: "unavailable" };
  }
}
