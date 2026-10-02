import test from "node:test";
import assert from "node:assert/strict";
import { TARGETS, createPortalLink, hasCustomer, isPortalUrl, linkFrom, pastDueSubscription, pickCustomer } from "../src/portal.mjs";
import { USER_ID, baseEnv } from "./fixtures.mjs";

const TOKEN = "eyJ.fake-access-token-for-tests.signature";
const EMAIL = "someone@example.invalid";
const OVERVIEW = "https://sandbox-customer-portal.paddle.com/cpl_01abc?token=t_general";
const PAYMENT = "https://sandbox-customer-portal.paddle.com/cpl_01abc/subscriptions/sub_01due/update-payment-method?token=t_pay";

const env = () => ({
  ...baseEnv(),
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_TESTONLY_abc",
  PADDLE_PORTAL_API_KEY: "pdl_sdbx_apikey_PORTAL_TESTONLY",
  PADDLE_CHECKOUT_API_KEY: "pdl_sdbx_apikey_CHECKOUT_TESTONLY",
});

const row = (over = {}) => ({ status: "active", cancel_effective_at: null, paddle_customer_id: "ctm_01abc", paddle_subscription_id: "sub_01one", ...over });

/** One fetch stand-in for Supabase Auth, the Data API and Paddle's portal-sessions endpoint. */
function world(over = {}) {
  const w = {
    user: { id: USER_ID, email: EMAIL, email_confirmed_at: "2026-10-01T00:00:00Z" },
    userStatus: 200,
    subscriptions: [row()],
    dbStatus: 200,
    portal: { status: 201, data: { id: "cpls_01", urls: { general: { overview: OVERVIEW }, subscriptions: [{ id: "sub_01due", update_subscription_payment_method: PAYMENT, cancel_subscription: "https://sandbox-customer-portal.paddle.com/cancel" }] } } },
    paddleDown: false,
    calls: [],
    ...over,
  };
  w.fetch = async (url, init = {}) => {
    const u = new URL(url);
    const call = { method: init.method ?? "GET", host: u.host, path: u.pathname, search: u.search, headers: init.headers ?? {}, body: init.body ? JSON.parse(init.body) : undefined };
    w.calls.push(call);
    const json = (status, body) => new Response(JSON.stringify(body), { status, headers: { "content-type": "application/json" } });
    if (u.host === "project.supabase.example") {
      if (u.pathname === "/auth/v1/user") return w.userStatus === 200 ? json(200, w.user) : json(w.userStatus, { msg: "no" });
      if (w.dbStatus !== 200) return json(w.dbStatus, { message: "down" });
      if (u.pathname === "/rest/v1/subscriptions") return json(200, w.subscriptions);
    }
    if (u.host === "sandbox-api.paddle.com") {
      if (w.paddleDown) throw new Error("network");
      if (call.method === "POST" && /^\/customers\/ctm_[a-z0-9]+\/portal-sessions$/.test(u.pathname)) return json(w.portal.status, w.portal.status < 300 ? { data: w.portal.data } : { error: { code: "x" } });
    }
    return new Response("unexpected " + url, { status: 500 });
  };
  return w;
}
const paddleCalls = (w) => w.calls.filter((c) => c.host === "sandbox-api.paddle.com");
const link = (w, input = { accessToken: TOKEN }, e = env()) => createPortalLink(e, input, { fetch: w.fetch });

// ------------------------------------------------------------ pure pieces

test("the targets are exactly general and payment", () => {
  assert.deepEqual([...TARGETS], ["general", "payment"]);
});

test("a customer comes from the user's own rows: none, one (however many rows), or ambiguous", () => {
  assert.deepEqual(pickCustomer([]), { ok: false, reason: "no_customer" }, "a manual entitlement has no rows");
  assert.deepEqual(pickCustomer([row({ paddle_customer_id: "not-an-id" })]), { ok: false, reason: "no_customer" });
  assert.deepEqual(pickCustomer([row(), row({ status: "canceled", paddle_subscription_id: "sub_01old" })]), { ok: true, customerId: "ctm_01abc" });
  assert.deepEqual(pickCustomer([row({ status: "canceled" })]), { ok: true, customerId: "ctm_01abc" }, "a canceled customer still gets a link");
  assert.deepEqual(pickCustomer([row(), row({ paddle_customer_id: "ctm_01other" })]), { ok: false, reason: "ambiguous" });
  assert.equal(hasCustomer([row()]), true);
  assert.equal(hasCustomer([]), false);
  assert.equal(hasCustomer(undefined), false);
});

test("the payment deep link needs exactly one past_due row with a well-formed id", () => {
  assert.equal(pastDueSubscription([row({ status: "past_due", paddle_subscription_id: "sub_01due" })]), "sub_01due");
  assert.equal(pastDueSubscription([row({ status: "past_due", paddle_subscription_id: "sub_01due" }), row({ status: "canceled" })]), "sub_01due");
  assert.equal(pastDueSubscription([row()]), null);
  assert.equal(pastDueSubscription([]), null);
  assert.equal(pastDueSubscription([row({ status: "past_due", paddle_subscription_id: "sub_01a" }), row({ status: "past_due", paddle_subscription_id: "sub_01b" })]), null);
  assert.equal(pastDueSubscription([row({ status: "past_due", paddle_subscription_id: "../x" })]), null);
  assert.equal(pastDueSubscription([row({ status: "past_due", paddle_subscription_id: "sub_test_ab12" })]), "sub_test_ab12", "the test events' ids work too");
  assert.equal(pastDueSubscription([row({ status: "past_due", paddle_subscription_id: "sub_01a/../b" })]), null);
});

test("a link must be https on paddle.com, with no credentials in it", () => {
  for (const ok of [OVERVIEW, "https://customer-portal.paddle.com/x", "https://paddle.com/x"]) assert.equal(isPortalUrl(env(), ok), true, ok);
  for (const bad of ["http://customer-portal.paddle.com/x", "https://evilpaddle.com/x", "https://paddle.com.evil.example/x", "https://customer-portal.paddle.com@evil.example/x", "https://user:pw@customer-portal.paddle.com/x", "javascript:alert(1)", "//customer-portal.paddle.com/x", "/relative", "", null, undefined, 5, "https://x.paddle.com/" + "a".repeat(2000)]) {
    assert.equal(isPortalUrl(env(), bad), false, String(bad));
  }
});

test("linkFrom: the deep link only for the subscription asked for, else the general one, else nothing", () => {
  const data = world().portal.data;
  assert.equal(linkFrom(env(), data, null), OVERVIEW);
  assert.equal(linkFrom(env(), data, "sub_01due"), PAYMENT);
  assert.equal(linkFrom(env(), data, "sub_01other"), OVERVIEW, "no entry for that subscription: general");
  assert.equal(linkFrom(env(), { urls: { subscriptions: data.urls.subscriptions } }, "sub_01due"), PAYMENT);
  assert.equal(linkFrom(env(), { urls: { general: { overview: "https://evil.example/x" } } }, null), null);
  assert.equal(linkFrom(env(), { urls: { general: { overview: "https://evil.example/x" }, subscriptions: [{ id: "sub_01due", update_subscription_payment_method: "https://evil.example/y" }] } }, "sub_01due"), null);
  assert.equal(linkFrom(env(), {}, null), null);
  assert.equal(linkFrom(env(), null, null), null);
});

// ----------------------------------------------------------- the happy path

test("general: verifies the token, reads the user's rows, asks Paddle for one session, returns one URL", async () => {
  const w = world();
  const out = await link(w);
  assert.deepEqual(out, { ok: true, url: OVERVIEW });
  assert.deepEqual(Object.keys(out).sort(), ["ok", "url"]);

  const kinds = w.calls.map((c) => `${c.method} ${c.host}${c.path}`);
  assert.deepEqual(kinds, [
    "GET project.supabase.example/auth/v1/user",
    "GET project.supabase.example/rest/v1/subscriptions",
    "POST sandbox-api.paddle.com/customers/ctm_01abc/portal-sessions",
  ]);
  assert.equal(w.calls[0].headers.authorization, `Bearer ${TOKEN}`);
  const sessions = paddleCalls(w);
  assert.equal(sessions.length, 1);
  assert.deepEqual(sessions[0].body, {}, "no subscription ids for the general link");
  assert.equal(sessions[0].headers.authorization, "Bearer pdl_sdbx_apikey_PORTAL_TESTONLY", "the portal key, not the checkout key");
  assert.ok(w.calls[1].search.includes(`user_id=eq.${USER_ID}`), "the rows are this user's");
});

test("payment: one past_due row gives that subscription's update-payment-method link", async () => {
  const w = world({ subscriptions: [row({ status: "past_due", paddle_subscription_id: "sub_01due" })] });
  const out = await link(w, { accessToken: TOKEN, target: "payment" });
  assert.deepEqual(out, { ok: true, url: PAYMENT });
  assert.deepEqual(paddleCalls(w)[0].body, { subscription_ids: ["sub_01due"] });
});

test("payment with no past_due row, or two, falls back to the general link and names no subscription", async () => {
  for (const subscriptions of [[row()], [row({ status: "past_due", paddle_subscription_id: "sub_01a" }), row({ status: "past_due", paddle_subscription_id: "sub_01b" })]]) {
    const w = world({ subscriptions });
    assert.deepEqual(await link(w, { accessToken: TOKEN, target: "payment" }), { ok: true, url: OVERVIEW });
    assert.deepEqual(paddleCalls(w)[0].body, {});
  }
});

test("a canceled customer gets the general link, for invoices", async () => {
  const w = world({ subscriptions: [row({ status: "canceled" })] });
  assert.deepEqual(await link(w), { ok: true, url: OVERVIEW });
});

// ------------------------------------------------- who gets nothing, and why

test("no rows (a manual entitlement, or never subscribed): no customer, and Paddle is never called", async () => {
  const w = world({ subscriptions: [] });
  assert.deepEqual(await link(w), { ok: false, reason: "no_customer" });
  assert.equal(paddleCalls(w).length, 0);
});

test("two distinct customers on one user: refused, logged, Paddle never called", async () => {
  const lines = [];
  const real = console.error;
  console.error = (...a) => lines.push(a.join(" "));
  try {
    const w = world({ subscriptions: [row(), row({ paddle_customer_id: "ctm_01other", paddle_subscription_id: "sub_01two" })] });
    assert.deepEqual(await link(w), { ok: false, reason: "ambiguous" });
    assert.equal(paddleCalls(w).length, 0);
  } finally {
    console.error = real;
  }
  assert.ok(lines.some((l) => l.includes("customer_ambiguous")));
  assert.ok(!lines.join("\n").includes("ctm_"), "no customer id in a log line");
});

test("the client cannot name a customer, a subscription or an email", async () => {
  const w = world();
  const out = await link(w, { accessToken: TOKEN, target: "general", customerId: "ctm_01victim", customer_id: "ctm_01victim", subscriptionId: "sub_01victim", subscription_ids: ["sub_01victim"], email: "victim@example.invalid", userId: "00000000-0000-4000-8000-000000000000" });
  assert.deepEqual(out, { ok: true, url: OVERVIEW });
  const [session] = paddleCalls(w);
  assert.equal(session.path, "/customers/ctm_01abc/portal-sessions");
  assert.deepEqual(session.body, {});
  assert.ok(!JSON.stringify(w.calls).includes("victim"));
  assert.equal(w.calls.some((c) => c.host === "sandbox-api.paddle.com" && c.path.startsWith("/customers") && c.method === "GET"), false, "never a customer lookup by email");
});

test("an unknown target is refused before anything is called", async () => {
  for (const target of ["cancel", "overview", "", null, 5, "GENERAL", "__proto__", ["payment"]]) {
    const w = world();
    const out = await link(w, { accessToken: TOKEN, target });
    // null falls back to the default, everything else is refused
    if (target === null) assert.equal(out.ok, true);
    else assert.deepEqual(out, { ok: false, reason: "invalid_target" }, String(target));
    if (target !== null) assert.equal(w.calls.length, 0);
  }
});

test("a bad or expired token, or an unconfirmed address, gets nothing", async () => {
  assert.deepEqual(await link(world({ userStatus: 401 })), { ok: false, reason: "unauthorized" });
  assert.deepEqual(await link(world(), { accessToken: "short" }), { ok: false, reason: "unauthorized" });
  assert.deepEqual(await link(world(), {}), { ok: false, reason: "unauthorized" });
  const w = world({ user: { id: USER_ID, email: EMAIL } });
  assert.deepEqual(await link(w), { ok: false, reason: "unauthorized" });
  assert.equal(paddleCalls(w).length, 0);
});

// ---------------------------------------------------------------- failures

test("Supabase down, Paddle down, a Paddle error and a link on another host all read as unavailable", async () => {
  assert.deepEqual(await link(world({ dbStatus: 500 })), { ok: false, reason: "unavailable" });
  assert.deepEqual(await link(world({ paddleDown: true })), { ok: false, reason: "unavailable" });
  assert.deepEqual(await link(world({ portal: { status: 404, data: null } })), { ok: false, reason: "unavailable" });
  assert.deepEqual(await link(world({ portal: { status: 403, data: null } })), { ok: false, reason: "unavailable" });
  const evil = { id: "cpls_x", urls: { general: { overview: "https://evil.example/phish" } } };
  assert.deepEqual(await link(world({ portal: { status: 201, data: evil } })), { ok: false, reason: "unavailable" });
});

test("missing configuration, including the portal key, fails closed without a call", async () => {
  for (const drop of ["PADDLE_PORTAL_API_KEY", "SUPABASE_SECRET_KEY", "SUPABASE_PUBLISHABLE_KEY", "SUPABASE_URL", "PADDLE_ENVIRONMENT"]) {
    const e = env();
    delete e[drop];
    const w = world();
    assert.deepEqual(await link(w, { accessToken: TOKEN }, e), { ok: false, reason: "unavailable" }, drop);
    assert.equal(w.calls.length, 0, drop);
  }
  const e = env();
  e.PADDLE_PORTAL_API_KEY = "";
  assert.deepEqual(await link(world(), { accessToken: TOKEN }, e), { ok: false, reason: "unavailable" });
});

test("the checkout key alone is not enough: the portal call never falls back to it", async () => {
  const e = env();
  delete e.PADDLE_PORTAL_API_KEY;
  const w = world();
  await link(w, { accessToken: TOKEN }, e);
  assert.equal(paddleCalls(w).length, 0);
});

test("the portal key goes to Paddle's host only, and no log line carries a URL, a token or an id", async () => {
  const lines = [];
  const real = { log: console.log, error: console.error };
  console.log = (...a) => lines.push(a.join(" "));
  console.error = (...a) => lines.push(a.join(" "));
  let w;
  try {
    w = world();
    await link(w);
    await link(world({ portal: { status: 500, data: null } }));
  } finally {
    console.log = real.log;
    console.error = real.error;
  }
  for (const c of w.calls) {
    const auth = c.headers.authorization ?? "";
    if (auth.includes("PORTAL_TESTONLY")) assert.equal(c.host, "sandbox-api.paddle.com");
  }
  const all = lines.join("\n");
  for (const secret of ["paddle.com/", "t_general", TOKEN, "ctm_", "sub_", "PORTAL_TESTONLY", USER_ID, EMAIL]) assert.ok(!all.includes(secret), secret);
  assert.ok(lines.some((l) => l.includes('"outcome":"created"')));
});
