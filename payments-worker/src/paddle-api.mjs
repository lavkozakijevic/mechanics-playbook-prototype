/**
 * The Paddle API calls this Worker makes, each with its own key:
 *   GET /subscriptions (reconciliation)         PADDLE_API_KEY, subscription read only
 *   customers and transactions (checkout)       PADDLE_CHECKOUT_API_KEY
 *   POST /customers/{id}/portal-sessions        PADDLE_PORTAL_API_KEY, portal session only
 *   POST /subscriptions/{id}/cancel             PADDLE_CANCEL_API_KEY, subscriptions write (account deletion)
 */
import { baseUrl } from "./supabase.mjs";

export const PADDLE_HOSTS = Object.freeze({
  sandbox: "https://sandbox-api.paddle.com",
  live: "https://api.paddle.com",
});
const TIMEOUT_MS = 8000;
const PER_PAGE = 200;
export const MAX_PAGES = 5;

/** The API origin for the configured environment, or null. */
export function paddleBase(env) {
  const host = PADDLE_HOSTS[env.PADDLE_ENVIRONMENT];
  if (!host) return null;
  // Only the local test setup may point this elsewhere, and only at loopback.
  if (env.PADDLE_API_BASE_URL) {
    const override = baseUrl(env.PADDLE_API_BASE_URL);
    return override?.startsWith("http://") ? override : null;
  }
  return host;
}

/**
 * @returns {Promise<{ subscriptions: object[], truncated: boolean }>}
 * Throws with a short code on any failure; the caller logs the code only.
 */
export async function listSubscriptions(env, fetchImpl = fetch, { customerIds } = {}) {
  const base = paddleBase(env);
  if (!base || !env.PADDLE_API_KEY) throw new Error("not_configured");
  const subscriptions = [];
  // Every status. Optionally only these customers' subscriptions (ids are checked by the caller).
  const filter = Array.isArray(customerIds) && customerIds.length ? `&customer_id=${customerIds.map(encodeURIComponent).join(",")}` : "";
  let url = `${base}/subscriptions?per_page=${PER_PAGE}${filter}`;
  for (let page = 0; page < MAX_PAGES; page++) {
    const res = await fetchImpl(url, {
      headers: { authorization: `Bearer ${env.PADDLE_API_KEY}`, accept: "application/json" },
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
    if (!res.ok) {
      try { await res.arrayBuffer(); } catch { /* drain only */ }
      throw new Error(`paddle_${res.status}`);
    }
    const body = await res.json();
    if (!Array.isArray(body?.data)) throw new Error("paddle_unexpected");
    subscriptions.push(...body.data);
    const next = body?.meta?.pagination?.next;
    if (!next) return { subscriptions, truncated: false };
    // The API key must never be sent anywhere but Paddle's own host.
    let nextUrl;
    try {
      nextUrl = new URL(next);
    } catch {
      throw new Error("paddle_unexpected");
    }
    if (nextUrl.origin !== base) throw new Error("paddle_unexpected");
    url = nextUrl.href;
  }
  return { subscriptions, truncated: true };
}

/**
 * One Paddle call with the given key. Returns the status and parsed JSON, or
 * { status: 0 } when Paddle could not be reached. The key is sent to the API
 * origin for the configured environment only.
 */
async function send(env, key, method, path, body, fetchImpl) {
  const base = paddleBase(env);
  if (!base || !key) throw new Error("not_configured");
  let res;
  try {
    res = await fetchImpl(`${base}${path}`, {
      method,
      headers: {
        authorization: `Bearer ${key}`,
        accept: "application/json",
        ...(body === undefined ? {} : { "content-type": "application/json" }),
      },
      body: body === undefined ? undefined : JSON.stringify(body),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    });
  } catch {
    return { status: 0, json: null };
  }
  let json = null;
  try {
    json = await res.json();
  } catch { /* an error answer without a body */ }
  return { status: res.status, json };
}

/** A call with the checkout key (customers and transactions). */
export function paddleCall(env, method, path, body, fetchImpl = fetch) {
  return send(env, env.PADDLE_CHECKOUT_API_KEY, method, path, body, fetchImpl);
}

/**
 * A call with the customer portal key, which holds the portal-session
 * permission and nothing else. Separate from the checkout key on purpose: a
 * portal link lets whoever holds it cancel and read invoices for any customer.
 */
export function paddlePortalCall(env, method, path, body, fetchImpl = fetch) {
  return send(env, env.PADDLE_PORTAL_API_KEY, method, path, body, fetchImpl);
}

/**
 * A call with the cancel key (subscriptions write; Paddle offers no narrower
 * permission). Used for one thing: cancelling a subscription when its owner
 * deletes their account. Reads use PADDLE_API_KEY, never this one.
 */
export function paddleCancelCall(env, method, path, body, fetchImpl = fetch) {
  return send(env, env.PADDLE_CANCEL_API_KEY, method, path, body, fetchImpl);
}
