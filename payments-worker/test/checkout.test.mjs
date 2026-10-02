import test from "node:test";
import assert from "node:assert/strict";
import { PLANS, buildTransactionBody, checkoutStatus, createCheckout, eligibility, priceFor } from "../src/checkout.mjs";
import { verifyAccessToken } from "../src/supabase.mjs";
import { USER_ID, baseEnv } from "./fixtures.mjs";

const TOKEN = "eyJ.fake-access-token-for-tests.signature";
const EMAIL = "someone@example.invalid";
const PRICES = { quarterly: "pri_01quarterly", yearly: "pri_01yearly" };
const NOW = Date.parse("2026-10-02T12:00:00Z");

const env = () => ({
  ...baseEnv(),
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_TESTONLY_abc",
  PADDLE_CHECKOUT_API_KEY: "pdl_sdbx_apikey_CHECKOUT_TESTONLY",
  PADDLE_CLIENT_TOKEN: "test_clienttokentestonly0123456789",
  PADDLE_PRICE_QUARTERLY: PRICES.quarterly,
  PADDLE_PRICE_YEARLY: PRICES.yearly,
});

/**
 * One fetch stand-in for everything the checkout code calls: Supabase Auth
 * (/auth/v1/user), the Data API (entitlement_of, subscriptions) and Paddle
 * (customers, transactions). Records every call.
 */
function world(over = {}) {
  const w = {
    user: { id: USER_ID, email: EMAIL, email_confirmed_at: "2026-10-01T00:00:00Z" },
    userStatus: 200,
    entitlement: "none",
    subscriptions: [],
    customers: [],           // what GET /customers returns
    customerCreate: { status: 201, id: "ctm_01created" },
    transaction: { status: 201, id: "txn_01abc" },
    paddleDown: false,
    dbStatus: 200,
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
      if (u.pathname === "/rest/v1/rpc/entitlement_of") return json(200, w.entitlement);
      if (u.pathname === "/rest/v1/subscriptions") return json(200, w.subscriptions);
    }
    if (u.host === "sandbox-api.paddle.com") {
      if (w.paddleDown) throw new Error("network");
      if (call.method === "GET" && u.pathname === "/customers") return json(200, { data: w.customers });
      if (call.method === "POST" && u.pathname === "/customers") return w.customerCreate.status < 300 ? json(w.customerCreate.status, { data: { id: w.customerCreate.id } }) : json(w.customerCreate.status, { error: { code: "customer_already_exists" } });
      if (call.method === "POST" && u.pathname === "/transactions") return w.transaction.status < 300 ? json(w.transaction.status, { data: { id: w.transaction.id, checkout: { url: "https://x" } } }) : json(w.transaction.status, { error: { code: "bad" } });
    }
    return new Response("unexpected " + url, { status: 500 });
  };
  return w;
}
const paddleCalls = (w) => w.calls.filter((c) => c.host === "sandbox-api.paddle.com");
const create = (w, plan = "quarterly", e = env()) => createCheckout(e, { accessToken: TOKEN, plan }, { fetch: w.fetch, now: () => NOW });
const status = (w, e = env()) => checkoutStatus(e, { accessToken: TOKEN }, { fetch: w.fetch, now: () => NOW });

// ------------------------------------------------------------ the allow-list

test("only the two plan names map to a price, and only from server-side configuration", () => {
  assert.deepEqual([...PLANS], ["quarterly", "yearly"]);
  assert.equal(priceFor(env(), "quarterly"), PRICES.quarterly);
  assert.equal(priceFor(env(), "yearly"), PRICES.yearly);
  for (const bad of ["monthly", "annual", "", null, undefined, 5, "QUARTERLY", "constructor", "__proto__", "toString", PRICES.quarterly, "pri_anything", ["quarterly"]]) {
    assert.equal(priceFor(env(), bad), null, String(bad));
  }
  assert.equal(priceFor({ ...env(), PADDLE_PRICE_QUARTERLY: "not-a-price" }, "quarterly"), null, "a malformed configured id is refused");
  assert.equal(priceFor({}, "quarterly"), null);
});

test("the transaction body is exactly: one item, the customer, the user in custom data", () => {
  assert.deepEqual(buildTransactionBody({ priceId: "pri_1", userId: USER_ID, customerId: "ctm_1" }), {
    items: [{ price_id: "pri_1", quantity: 1 }],
    customer_id: "ctm_1",
    custom_data: { supabase_user_id: USER_ID },
    collection_mode: "automatic",
  });
});

// -------------------------------------------------------------- eligibility

test("who may start a checkout", () => {
  const future = "2026-11-01T00:00:00Z";
  const past = "2026-09-01T00:00:00Z";
  const e = (entitlement, subscriptions = []) => eligibility({ entitlement, subscriptions }, NOW);
  assert.deepEqual(e("none"), { state: "ready" });
  assert.deepEqual(e("none", [{ status: "canceled", cancel_effective_at: null }]), { state: "ready" });
  assert.deepEqual(e("none", [{ status: "canceled", cancel_effective_at: past }]), { state: "ready" });
  assert.deepEqual(e("full", []), { state: "entitled" }, "a manual entitlement has no subscription rows");
  assert.deepEqual(e("full", [{ status: "active", cancel_effective_at: null }]), { state: "entitled" });
  assert.deepEqual(e("full", [{ status: "trialing" }]), { state: "entitled" });
  assert.deepEqual(e("full", [{ status: "active", cancel_effective_at: future }]), { state: "scheduled_cancel", until: future });
  assert.deepEqual(e("past_due", [{ status: "past_due" }]), { state: "past_due" });
  assert.deepEqual(e("none", [{ status: "paused" }]), { state: "paused" });
  assert.deepEqual(e("none", [{ status: "canceled" }, { status: "paused" }]), { state: "paused" });
});

// ---------------------------------------------------- the happy path, in order

test("quarterly: verifies the token, checks entitlement, resolves the customer, creates one transaction", async () => {
  const w = world({ customers: [] });
  const out = await create(w, "quarterly");
  assert.deepEqual(out, { ok: true, transactionId: "txn_01abc", clientToken: env().PADDLE_CLIENT_TOKEN, environment: "sandbox" });
  const order = w.calls.map((c) => `${c.method} ${c.host}${c.path}`);
  assert.equal(order[0], "GET project.supabase.example/auth/v1/user", "the token is verified first");
  assert.deepEqual(order.slice(-3), ["GET sandbox-api.paddle.com/customers", "POST sandbox-api.paddle.com/customers", "POST sandbox-api.paddle.com/transactions"]);
  const txn = paddleCalls(w).at(-1).body;
  assert.deepEqual(txn, buildTransactionBody({ priceId: PRICES.quarterly, userId: USER_ID, customerId: "ctm_01created" }));
});

test("yearly uses the yearly price", async () => {
  const w = world();
  await create(w, "yearly");
  assert.equal(paddleCalls(w).at(-1).body.items[0].price_id, PRICES.yearly);
});

test("the user id and email come from Supabase's answer, never from the caller", async () => {
  const w = world();
  const out = await createCheckout(env(), { accessToken: TOKEN, plan: "quarterly", userId: "11111111-1111-4111-8111-111111111111", email: "attacker@example.invalid", priceId: "pri_free", customerId: "ctm_other" }, { fetch: w.fetch, now: () => NOW });
  assert.equal(out.ok, true);
  const created = paddleCalls(w).find((c) => c.method === "POST" && c.path === "/customers").body;
  assert.equal(created.email, EMAIL);
  assert.equal(created.custom_data.supabase_user_id, USER_ID);
  const txn = paddleCalls(w).find((c) => c.path === "/transactions").body;
  assert.equal(txn.custom_data.supabase_user_id, USER_ID);
  assert.equal(txn.items[0].price_id, PRICES.quarterly);
  assert.equal(txn.customer_id, "ctm_01created");
  assert.equal(JSON.stringify(w.calls).includes("attacker@example.invalid"), false);
});

test("the Paddle checkout key goes to Paddle only, and the secret key to Supabase's Data API only", async () => {
  const w = world();
  await create(w);
  for (const c of w.calls) {
    const auth = c.headers.authorization ?? "";
    if (c.host === "sandbox-api.paddle.com") assert.equal(auth, `Bearer ${env().PADDLE_CHECKOUT_API_KEY}`);
    else assert.equal(auth.includes(env().PADDLE_CHECKOUT_API_KEY), false);
    assert.equal(JSON.stringify(c.headers).includes(env().PADDLE_API_KEY), false, "the reconcile key is not used here");
    if (c.path === "/auth/v1/user") {
      assert.equal(c.headers.apikey, "sb_publishable_TESTONLY_abc");
      assert.equal(auth, `Bearer ${TOKEN}`);
    } else if (c.host.startsWith("project.")) {
      assert.equal(c.headers.apikey, env().SUPABASE_SECRET_KEY);
    }
  }
});

// ---------------------------------------------------------- the customer

test("a customer we already know from this user's subscriptions is reused, with no Paddle lookup", async () => {
  const w = world({ subscriptions: [{ status: "canceled", cancel_effective_at: null, paddle_customer_id: "ctm_01known" }] });
  const out = await create(w);
  assert.equal(out.ok, true);
  assert.equal(paddleCalls(w).length, 1);
  assert.equal(paddleCalls(w)[0].body.customer_id, "ctm_01known");
});

test("otherwise a Paddle customer with exactly this email is reused, and none is created", async () => {
  const w = world({ customers: [{ id: "ctm_01theirs", email: EMAIL.toUpperCase(), status: "active" }, { id: "ctm_01other", email: "else@example.invalid" }] });
  await create(w);
  assert.equal(paddleCalls(w).filter((c) => c.method === "POST" && c.path === "/customers").length, 0);
  assert.equal(paddleCalls(w).at(-1).body.customer_id, "ctm_01theirs");
  assert.match(paddleCalls(w)[0].search, /email=someone%40example\.invalid/);
});

test("two Paddle customers with this email: refuse rather than guess", async () => {
  const w = world({ customers: [{ id: "ctm_01a", email: EMAIL }, { id: "ctm_01b", email: EMAIL }] });
  assert.deepEqual(await create(w), { ok: false, reason: "unavailable" });
  assert.equal(paddleCalls(w).some((c) => c.path === "/transactions"), false);
});

test("a customer created by someone else a moment ago (409) is looked up and used", async () => {
  let looked = 0;
  const w = world({ customerCreate: { status: 409 } });
  const base = w.fetch;
  w.fetch = async (url, init) => {
    const u = new URL(url);
    if (u.host === "sandbox-api.paddle.com" && (init?.method ?? "GET") === "GET" && u.pathname === "/customers") {
      looked++;
      w.customers = looked > 1 ? [{ id: "ctm_01raced", email: EMAIL }] : [];
    }
    return base(url, init);
  };
  const out = await create(w);
  assert.equal(out.ok, true);
  assert.equal(paddleCalls(w).at(-1).body.customer_id, "ctm_01raced");
});

// ------------------------------------------------------- never a second checkout

test("entitled, scheduled to cancel, past due and paused each answer with their state and make no Paddle call", async () => {
  const future = "2026-11-01T00:00:00Z";
  const cases = [
    [{ entitlement: "full", subscriptions: [] }, { ok: false, reason: "entitled" }],
    [{ entitlement: "full", subscriptions: [{ status: "active", cancel_effective_at: future }] }, { ok: false, reason: "scheduled_cancel", until: future }],
    [{ entitlement: "past_due", subscriptions: [{ status: "past_due" }] }, { ok: false, reason: "past_due" }],
    [{ entitlement: "none", subscriptions: [{ status: "paused" }] }, { ok: false, reason: "paused" }],
  ];
  for (const [state, want] of cases) {
    const w = world(state);
    assert.deepEqual(await create(w), want);
    assert.equal(paddleCalls(w).length, 0);
  }
});

// ---------------------------------------------------------- refusals and failures

test("an unknown plan is refused before anything is called", async () => {
  for (const plan of ["monthly", "pri_01quarterly", "", undefined, { plan: "yearly" }]) {
    const w = world();
    // called directly: create()'s own default would turn undefined into "quarterly"
    assert.deepEqual(await createCheckout(env(), { accessToken: TOKEN, plan }, { fetch: w.fetch }), { ok: false, reason: "invalid_plan" });
    assert.equal(w.calls.length, 0);
  }
});

test("a token Supabase rejects, or an unconfirmed address, is unauthorized and nothing else is called", async () => {
  const bad = world({ userStatus: 401 });
  assert.deepEqual(await create(bad), { ok: false, reason: "unauthorized" });
  assert.equal(bad.calls.length, 1);
  const unconfirmed = world({ user: { id: USER_ID, email: EMAIL } });
  assert.deepEqual(await create(unconfirmed), { ok: false, reason: "unauthorized" });
  const noEmail = world({ user: { id: USER_ID, email_confirmed_at: "x" } });
  assert.deepEqual(await create(noEmail), { ok: false, reason: "unauthorized" });
  const notUuid = world({ user: { id: "1 or 1=1", email: EMAIL, email_confirmed_at: "x" } });
  assert.deepEqual(await create(notUuid), { ok: false, reason: "unauthorized" });
  for (const accessToken of [undefined, "", "short", "has spaces in the token value here", "x".repeat(5000), 7, { a: 1 }]) {
    const w = world();
    assert.deepEqual(await createCheckout(env(), { accessToken, plan: "yearly" }, { fetch: w.fetch }), { ok: false, reason: "unauthorized" });
    assert.equal(w.calls.length, 0);
  }
});

test("Supabase or Paddle failing answers unavailable, with no detail", async () => {
  assert.deepEqual(await create(world({ userStatus: 500 })), { ok: false, reason: "unavailable" });
  assert.deepEqual(await create(world({ dbStatus: 503 })), { ok: false, reason: "unavailable" });
  assert.deepEqual(await create(world({ paddleDown: true })), { ok: false, reason: "unavailable" });
  assert.deepEqual(await create(world({ transaction: { status: 400 } })), { ok: false, reason: "unavailable" });
  assert.deepEqual(await create(world({ transaction: { status: 201, id: "not-a-transaction" } })), { ok: false, reason: "unavailable" });
  assert.deepEqual(await create(world({ customerCreate: { status: 500 } })), { ok: false, reason: "unavailable" });
});

test("missing configuration answers unavailable", async () => {
  for (const drop of ["PADDLE_CHECKOUT_API_KEY", "PADDLE_CLIENT_TOKEN", "PADDLE_PRICE_QUARTERLY", "PADDLE_PRICE_YEARLY", "SUPABASE_PUBLISHABLE_KEY", "SUPABASE_SECRET_KEY", "PADDLE_ENVIRONMENT"]) {
    const e = env();
    delete e[drop];
    const w = world();
    assert.deepEqual(await create(w, "quarterly", e), { ok: false, reason: "unavailable" }, drop);
    assert.equal(w.calls.length, 0);
  }
});

// ----------------------------------------------------------------- the status

test("status reports where the visitor stands and never touches Paddle or returns the client token", async () => {
  const w = world();
  assert.deepEqual(await status(w), { ok: true, state: "ready", billing: false });
  assert.equal(paddleCalls(w).length, 0);
  assert.deepEqual(await status(world({ entitlement: "full" })), { ok: true, state: "entitled", billing: false }, "a manual entitlement has no Paddle customer");
  assert.deepEqual(
    await status(world({ entitlement: "full", subscriptions: [{ status: "active", cancel_effective_at: null, paddle_customer_id: "ctm_01abc" }] })),
    { ok: true, state: "entitled", billing: true },
  );
  assert.equal((await status(world({ subscriptions: [{ status: "canceled", paddle_customer_id: "ctm_01abc" }] }))).billing, true, "a canceled customer still has invoices");
  assert.deepEqual(await status(world({ userStatus: 401 })), { ok: false, reason: "unauthorized" });
  assert.deepEqual(await status(world({ dbStatus: 500 })), { ok: false, reason: "unavailable" });
  const e = env();
  delete e.PADDLE_CHECKOUT_API_KEY;
  assert.equal((await status(world(), e)).ok, true, "status needs no Paddle configuration");
  assert.equal(JSON.stringify(await status(world())).includes("test_clienttoken"), false);
});

// ------------------------------------------------------------------- verifier

test("verifyAccessToken: the Bearer is the visitor's token, the id is lower-cased", async () => {
  const w = world({ user: { id: USER_ID.toUpperCase(), email: " Someone@Example.INVALID ", confirmed_at: "2026-10-01T00:00:00Z" } });
  const r = await verifyAccessToken(env(), TOKEN, w.fetch);
  assert.deepEqual(r, { ok: true, user: { id: USER_ID, email: EMAIL, lastSignInAt: null } });
});

// -------------------------------------------------------------------- logging

test("checkout logs name the plan and the outcome only", async () => {
  const lines = [];
  const real = { log: console.log, error: console.error };
  console.log = (...a) => lines.push(a.join(" "));
  console.error = (...a) => lines.push(a.join(" "));
  try {
    await create(world());
    await create(world({ entitlement: "full" }));
    await create(world({ paddleDown: true }));
  } finally {
    Object.assign(console, real);
  }
  const all = lines.join("\n");
  for (const secret of [USER_ID, EMAIL, TOKEN, env().PADDLE_CHECKOUT_API_KEY, env().SUPABASE_SECRET_KEY, "ctm_01created", "txn_01abc", env().PADDLE_CLIENT_TOKEN]) {
    assert.equal(all.includes(secret), false, `a log line contains ${secret.slice(0, 10)}…`);
  }
  assert.match(all, /"evt":"checkout"/);
  assert.match(all, /"outcome":"created"/);
  assert.match(all, /"state":"entitled"/);
});
