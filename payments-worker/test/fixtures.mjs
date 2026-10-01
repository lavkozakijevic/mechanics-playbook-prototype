import { createHmac } from "node:crypto";

export const SECRET = "pdl_ntfset_TESTONLY_0123456789abcdef";
export const OTHER_SECRET = "pdl_ntfset_TESTONLY_fedcba9876543210";
export const PRODUCT_ID = "pro_01testproduct";
export const USER_ID = "0b9f3c52-6a3e-4c8c-9d59-2d8f6f1d7a10";

export const NOW_MS = Date.parse("2026-10-01T12:00:00Z");
export const NOW_S = Math.floor(NOW_MS / 1000);

/** The h1 value Paddle would compute: HMAC-SHA256 of `ts:body`, hex. Uses node:crypto, independent of the code under test. */
export function h1For(secret, ts, body) {
  return createHmac("sha256", secret).update(`${ts}:`).update(body).digest("hex");
}

export function signedHeader(body, { secret = SECRET, ts = NOW_S, extraH1 = [] } = {}) {
  return [`ts=${ts}`, `h1=${h1For(secret, ts, body)}`, ...extraH1.map((h) => `h1=${h}`)].join(";");
}

/** A subscription as Paddle's notification carries it (snake_case, per the Node SDK's types). */
export function subscriptionData(overrides = {}) {
  return {
    id: "sub_01testsubscription",
    status: "active",
    customer_id: "ctm_01testcustomer",
    address_id: "add_01testaddress",
    business_id: null,
    currency_code: "USD",
    created_at: "2026-10-01T11:59:00.123456Z",
    updated_at: "2026-10-01T11:59:30.654321Z",
    started_at: "2026-10-01T11:59:00.123456Z",
    first_billed_at: "2026-10-01T11:59:00.123456Z",
    next_billed_at: "2027-01-01T11:59:00.123456Z",
    paused_at: null,
    canceled_at: null,
    collection_mode: "automatic",
    billing_cycle: { interval: "month", frequency: 3 },
    current_billing_period: { starts_at: "2026-10-01T11:59:00.123456Z", ends_at: "2027-01-01T11:59:00.123456Z" },
    scheduled_change: null,
    items: [
      {
        status: "active",
        quantity: 1,
        recurring: true,
        price: { id: "pri_01quarterly", product_id: PRODUCT_ID, description: "Quarterly", status: "active" },
        product: { id: PRODUCT_ID, name: "Appservatory", status: "active" },
      },
    ],
    custom_data: { supabase_user_id: USER_ID },
    ...overrides,
  };
}

export function subscriptionEvent({ type = "subscription.created", id = "evt_01testevent", occurredAt = "2026-10-01T11:59:30.654321Z", data = subscriptionData() } = {}) {
  return { event_id: id, event_type: type, occurred_at: occurredAt, notification_id: "ntf_01testnotification", data };
}

export const toBytes = (obj) => new TextEncoder().encode(typeof obj === "string" ? obj : JSON.stringify(obj));

/** A request the way Paddle sends it. */
export function webhookRequest(event, { secret = SECRET, ts = NOW_S, header, method = "POST", rawBody } = {}) {
  const body = rawBody ?? JSON.stringify(event);
  return new Request("https://payments.example/paddle/webhook", {
    method,
    headers: { "content-type": "application/json", "paddle-signature": header ?? signedHeader(body, { secret, ts }) },
    body: method === "POST" ? body : undefined,
  });
}

export const baseEnv = () => ({
  PADDLE_ENVIRONMENT: "sandbox",
  PADDLE_WEBHOOK_SECRET_SANDBOX: SECRET,
  PADDLE_WEBHOOK_SECRET_LIVE: OTHER_SECRET,
  PADDLE_PRODUCT_ID: PRODUCT_ID,
  PADDLE_API_KEY: "pdl_sdbx_apikey_TESTONLY",
  SUPABASE_URL: "https://project.supabase.example",
  SUPABASE_SECRET_KEY: "sb_secret_TESTONLY_abcdef",
});

/** A fetch stand-in for the Data API: records calls, answers with `outcome` or a failure. */
export function fakeRpc(answer = "applied") {
  const calls = [];
  const fn = async (url, init) => {
    calls.push({ url: String(url), init });
    if (answer instanceof Error) throw answer;
    if (typeof answer === "number") return new Response("boom", { status: answer });
    return new Response(JSON.stringify(answer), { status: 200, headers: { "content-type": "application/json" } });
  };
  fn.calls = calls;
  return fn;
}
