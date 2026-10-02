import test from "node:test";
import assert from "node:assert/strict";
import { CONFIRM_WORD, FRESH_MS, LIVE_STATUSES, deleteAccount, isFresh, ownedLive } from "../src/account-delete.mjs";
import { deleteAuthUser } from "../src/supabase.mjs";
import { USER_ID, baseEnv } from "./fixtures.mjs";

const TOKEN = "eyJ.fake-access-token-for-tests.signature";
const EMAIL = "someone@example.invalid";
const NOW = Date.parse("2026-10-02T12:00:00Z");
const FRESH = "2026-10-02T11:55:00Z";
const STALE = "2026-10-02T11:40:00Z";
const OTHER_USER = "11111111-2222-4333-8444-555555555555";

const env = () => ({
  ...baseEnv(),
  SUPABASE_PUBLISHABLE_KEY: "sb_publishable_TESTONLY_abc",
  PADDLE_CHECKOUT_API_KEY: "pdl_sdbx_apikey_CHECKOUT_TESTONLY",
  PADDLE_CANCEL_API_KEY: "pdl_sdbx_apikey_CANCEL_TESTONLY",
});

const row = (over = {}) => ({ status: "active", cancel_effective_at: null, paddle_customer_id: "ctm_01abc", paddle_subscription_id: "sub_01one", ...over });
const sub = (over = {}) => ({ id: "sub_01one", status: "active", customer_id: "ctm_01abc", custom_data: { supabase_user_id: USER_ID }, ...over });

/**
 * One fetch stand-in for Supabase Auth (user lookup and admin delete), the Data
 * API (the user's rows), and Paddle (customers, the subscription list, cancel).
 * Records every call in order. `paddle` is the set of subscriptions Paddle holds;
 * a cancel flips one to "canceled" unless told to fail.
 */
function world(over = {}) {
  const w = {
    user: { id: USER_ID, email: EMAIL, email_confirmed_at: "2026-10-01T00:00:00Z", last_sign_in_at: FRESH },
    userStatus: 200,
    rows: [row()],
    paddle: [sub()],
    customers: [],                 // GET /customers?email=
    cancelStatus: 200,
    cancelEffect: true,            // does a 200 cancel really change the status
    adminStatus: 200,
    dbStatus: 200,
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
      if (call.method === "DELETE" && u.pathname === `/auth/v1/admin/users/${USER_ID}`) return new Response(null, { status: w.adminStatus });
      if (w.dbStatus !== 200) return json(w.dbStatus, { message: "down" });
      if (u.pathname === "/rest/v1/subscriptions") return json(200, w.rows);
    }
    if (u.host === "sandbox-api.paddle.com") {
      if (w.paddleDown) throw new Error("network");
      if (call.method === "GET" && u.pathname === "/customers") return json(200, { data: w.customers });
      if (call.method === "GET" && u.pathname === "/subscriptions") {
        const ids = (u.searchParams.get("customer_id") ?? "").split(",");
        return json(200, { data: w.paddle.filter((s) => ids.includes(s.customer_id)), meta: { pagination: { next: null } } });
      }
      const m = /^\/subscriptions\/(sub_[a-z0-9_]+)\/cancel$/.exec(u.pathname);
      if (call.method === "POST" && m) {
        if (w.cancelStatus === 200 && w.cancelEffect) for (const s of w.paddle) if (s.id === m[1]) s.status = "canceled";
        return json(w.cancelStatus, w.cancelStatus === 200 ? { data: { id: m[1] } } : { error: { code: "x" } });
      }
    }
    return new Response("unexpected " + url, { status: 500 });
  };
  return w;
}
const run = (w, input = { accessToken: TOKEN, confirm: "DELETE" }, e = env()) => deleteAccount(e, input, { fetch: w.fetch, now: () => NOW });
const kinds = (w) => w.calls.map((c) => `${c.method} ${c.host}${c.path}`);
const paddleWrites = (w) => w.calls.filter((c) => c.host === "sandbox-api.paddle.com" && c.method !== "GET");
const adminDeletes = (w) => w.calls.filter((c) => c.method === "DELETE");

// ------------------------------------------------------------- pure pieces

test("the confirmation word and the window are what was decided", () => {
  assert.equal(CONFIRM_WORD, "DELETE");
  assert.equal(FRESH_MS, 10 * 60 * 1000);
  assert.deepEqual([...LIVE_STATUSES], ["active", "trialing", "past_due", "paused"]);
});

test("a sign-in is fresh within ten minutes, and a missing or future time is not fresh", () => {
  assert.equal(isFresh("2026-10-02T11:50:01Z", NOW), true);
  assert.equal(isFresh("2026-10-02T11:50:00Z", NOW), true);
  assert.equal(isFresh("2026-10-02T11:49:59Z", NOW), false);
  assert.equal(isFresh(STALE, NOW), false);
  for (const bad of [null, undefined, "", "garbage", 5, {}, "2026-10-02T13:00:00Z"]) assert.equal(isFresh(bad, NOW), false, String(bad));
});

test("whose live subscriptions: in the user's rows, or carrying the user's id; never someone else's", () => {
  const found = [
    sub({ id: "sub_01mine", custom_data: {} }),                                   // in rows, no custom data
    sub({ id: "sub_01tagged", custom_data: { supabase_user_id: USER_ID.toUpperCase() } }), // tagged, not in rows
    sub({ id: "sub_01theirs", custom_data: { supabase_user_id: OTHER_USER } }),    // shared customer, someone else's
    sub({ id: "sub_01blank", custom_data: null }),
    sub({ id: "sub_01done", status: "canceled", custom_data: { supabase_user_id: USER_ID } }),
    sub({ id: "../x", custom_data: { supabase_user_id: USER_ID } }),
  ];
  const rows = [row({ paddle_subscription_id: "sub_01mine" })];
  assert.deepEqual(ownedLive(found, USER_ID, rows).map((s) => s.id), ["sub_01mine", "sub_01tagged"]);
  for (const status of LIVE_STATUSES) assert.equal(ownedLive([sub({ status })], USER_ID, []).length, 1, status);
  assert.equal(ownedLive([sub({ status: "weird" })], USER_ID, []).length, 0);
});

// ------------------------------------------------------------- the order

test("subscribed: cancels now, reads back, and only then deletes the user, in that order", async () => {
  const w = world();
  const out = await run(w);
  assert.deepEqual(out, { ok: true, cancelled: 1 });
  assert.deepEqual(kinds(w), [
    "GET project.supabase.example/auth/v1/user",
    "GET project.supabase.example/rest/v1/subscriptions",
    "GET sandbox-api.paddle.com/subscriptions",
    "POST sandbox-api.paddle.com/subscriptions/sub_01one/cancel",
    "GET sandbox-api.paddle.com/subscriptions",
    `DELETE project.supabase.example/auth/v1/admin/users/${USER_ID}`,
  ]);
  const cancel = paddleWrites(w)[0];
  assert.deepEqual(cancel.body, { effective_from: "immediately" });
  assert.equal(cancel.headers.authorization, "Bearer pdl_sdbx_apikey_CANCEL_TESTONLY");
  const admin = adminDeletes(w)[0];
  assert.deepEqual(admin.body, { should_soft_delete: false }, "a hard delete");
  assert.equal(admin.headers.apikey, "sb_secret_TESTONLY_abcdef");
  assert.equal(admin.headers.authorization, undefined, "the secret key goes in apikey only");
});

test("reads use the read key, only the cancel uses the cancel key, and the key goes to Paddle's host only", async () => {
  const w = world();
  await run(w);
  for (const c of w.calls.filter((x) => x.host === "sandbox-api.paddle.com")) {
    const auth = c.headers.authorization;
    if (c.method === "GET") assert.equal(auth, "Bearer pdl_sdbx_apikey_TESTONLY", c.path);
    else assert.equal(auth, "Bearer pdl_sdbx_apikey_CANCEL_TESTONLY", c.path);
  }
  assert.ok(!w.calls.some((c) => c.host !== "sandbox-api.paddle.com" && JSON.stringify(c.headers).includes("CANCEL_TESTONLY")));
});

test("every live status is cancelled, several at once, and a cancelled one is left alone", async () => {
  const w = world({
    rows: [row({ paddle_subscription_id: "sub_01a" }), row({ paddle_subscription_id: "sub_01b" }), row({ paddle_subscription_id: "sub_01c" }), row({ paddle_subscription_id: "sub_01d" }), row({ paddle_subscription_id: "sub_01e", status: "canceled" })],
    paddle: [sub({ id: "sub_01a", status: "active" }), sub({ id: "sub_01b", status: "trialing" }), sub({ id: "sub_01c", status: "past_due" }), sub({ id: "sub_01d", status: "paused" }), sub({ id: "sub_01e", status: "canceled" })],
  });
  assert.deepEqual(await run(w), { ok: true, cancelled: 4 });
  assert.deepEqual(paddleWrites(w).map((c) => c.path), ["a", "b", "c", "d"].map((x) => `/subscriptions/sub_01${x}/cancel`));
  assert.equal(adminDeletes(w).length, 1);
});

test("the sandbox's own scheduled-cancel subscription is cancelled now too", async () => {
  const w = world({ paddle: [sub({ status: "active", scheduled_change: { action: "cancel", effective_at: "2026-11-01T00:00:00Z" } })] });
  assert.deepEqual(await run(w), { ok: true, cancelled: 1 });
});

// ------------------------------------------------------------- who has what

test("a user with no rows and no Paddle customer: no cancel, just the delete", async () => {
  const w = world({ rows: [], paddle: [], customers: [] });
  assert.deepEqual(await run(w), { ok: true, cancelled: 0 });
  assert.equal(paddleWrites(w).length, 0);
  assert.ok(kinds(w).includes("GET sandbox-api.paddle.com/customers"), "with no rows Paddle is asked who it has under the verified email");
  assert.equal(adminDeletes(w).length, 1);
});

test("a manual entitlement only is the same: nothing to cancel, the delete cascades the entitlement away", async () => {
  const w = world({ rows: [], paddle: [] });
  assert.deepEqual(await run(w), { ok: true, cancelled: 0 });
  assert.equal(paddleWrites(w).length, 0);
});

test("no rows, but Paddle has a customer under the verified email with a live subscription tagged with this user: cancelled", async () => {
  const w = world({
    rows: [],
    customers: [{ id: "ctm_01found", email: "Someone@Example.invalid" }, { id: "ctm_01other", email: "someone.else@example.invalid" }],
    paddle: [sub({ id: "sub_01tagged", customer_id: "ctm_01found" }), sub({ id: "sub_01theirs", customer_id: "ctm_01found", custom_data: { supabase_user_id: OTHER_USER } })],
  });
  assert.deepEqual(await run(w), { ok: true, cancelled: 1 });
  assert.deepEqual(paddleWrites(w).map((c) => c.path), ["/subscriptions/sub_01tagged/cancel"]);
  const list = w.calls.find((c) => c.path === "/subscriptions");
  assert.ok(list.search.includes("customer_id=ctm_01found") && !list.search.includes("ctm_01other"), "only the customer whose email matches exactly");
});

test("with rows, Paddle is not asked about the email at all", async () => {
  const w = world();
  await run(w);
  assert.equal(w.calls.some((c) => c.path === "/customers"), false);
});

test("a customer shared with someone else: their subscription is not cancelled", async () => {
  const w = world({ paddle: [sub(), sub({ id: "sub_01theirs", custom_data: { supabase_user_id: OTHER_USER } })] });
  assert.deepEqual(await run(w), { ok: true, cancelled: 1 });
  assert.deepEqual(paddleWrites(w).map((c) => c.path), ["/subscriptions/sub_01one/cancel"]);
});

test("only the user's own customers are asked about", async () => {
  const w = world({ rows: [row(), row({ paddle_customer_id: "ctm_01second", paddle_subscription_id: "sub_01two" })], paddle: [sub(), sub({ id: "sub_01two", customer_id: "ctm_01second" }), sub({ id: "sub_01x", customer_id: "ctm_01stranger" })] });
  assert.deepEqual(await run(w), { ok: true, cancelled: 2 });
  assert.ok(!JSON.stringify(w.calls).includes("ctm_01stranger"));
});

// ------------------------------------------------------------- stopping

test("a cancel that fails stops the run with the user still there", async () => {
  const w = world({ cancelStatus: 500 });
  const lines = [];
  const real = console.error;
  console.error = (...a) => lines.push(a.join(" "));
  try {
    assert.deepEqual(await run(w), { ok: false, reason: "cancel_failed" });
  } finally {
    console.error = real;
  }
  assert.equal(adminDeletes(w).length, 0, "the Auth user was not deleted");
  assert.ok(lines.some((l) => l.includes("cancel_500")) && lines.some((l) => l.includes("still_live")));
});

test("one of two cancels failing stops the run; a retry then finishes it, as the first is already cancelled", async () => {
  const w = world({
    rows: [row({ paddle_subscription_id: "sub_01a" }), row({ paddle_subscription_id: "sub_01b" })],
    paddle: [sub({ id: "sub_01a" }), sub({ id: "sub_01b" })],
  });
  const realFetch = w.fetch;
  let failB = true;
  w.fetch = async (url, init) => {
    if (failB && String(url).includes("/subscriptions/sub_01b/cancel")) { w.calls.push({ method: "POST", host: "sandbox-api.paddle.com", path: "/subscriptions/sub_01b/cancel", headers: init.headers, body: {} }); return new Response("{}", { status: 500 }); }
    return realFetch(url, init);
  };
  assert.deepEqual(await run(w), { ok: false, reason: "cancel_failed" });
  assert.equal(adminDeletes(w).length, 0);
  assert.equal(w.paddle.find((s) => s.id === "sub_01a").status, "canceled", "the first stays cancelled");
  failB = false;
  assert.deepEqual(await run(w), { ok: true, cancelled: 1 });
  assert.equal(adminDeletes(w).length, 1);
});

test("a cancel that answers an error because it was already cancelled is fine once Paddle shows it cancelled", async () => {
  const w = world({ cancelStatus: 409, cancelEffect: false });
  // the subscription is cancelled by the time we read back
  const realFetch = w.fetch;
  w.fetch = async (url, init) => {
    const res = await realFetch(url, init);
    if (String(url).includes("/cancel")) w.paddle[0].status = "canceled";
    return res;
  };
  assert.deepEqual(await run(w), { ok: true, cancelled: 0 });
  assert.equal(adminDeletes(w).length, 1);
});

test("a cancel Paddle accepts but that does not take effect still stops the run", async () => {
  const w = world({ cancelEffect: false });
  assert.deepEqual(await run(w), { ok: false, reason: "cancel_failed" });
  assert.equal(adminDeletes(w).length, 0);
});

test("Paddle unreachable before anything is cancelled: unavailable, nothing changed", async () => {
  const w = world({ paddleDown: true });
  assert.deepEqual(await run(w), { ok: false, reason: "unavailable" });
  assert.equal(paddleWrites(w).length, 0);
  assert.equal(adminDeletes(w).length, 0);
});

test("the database unreachable before anything is cancelled: unavailable, nothing changed", async () => {
  const w = world({ dbStatus: 500 });
  assert.deepEqual(await run(w), { ok: false, reason: "unavailable" });
  assert.equal(paddleWrites(w).length, 0);
  assert.equal(adminDeletes(w).length, 0);
});

test("the Auth delete failing after the cancels: delete_failed, and a retry is safe", async () => {
  const w = world({ adminStatus: 500 });
  assert.deepEqual(await run(w), { ok: false, reason: "delete_failed" });
  assert.equal(w.paddle[0].status, "canceled");
  w.adminStatus = 200;
  assert.deepEqual(await run(w), { ok: true, cancelled: 0 }, "nothing live to cancel the second time");
});

test("an Auth user that is already gone (404) counts as deleted", async () => {
  const w = world({ adminStatus: 404 });
  assert.deepEqual(await run(w), { ok: true, cancelled: 1 });
  const e = env();
  assert.deepEqual(await deleteAuthUser(e, USER_ID, async () => new Response(null, { status: 404 })), { ok: true });
  assert.deepEqual(await deleteAuthUser(e, USER_ID, async () => new Response(null, { status: 500 })), { ok: false, reason: "delete_500" });
  assert.deepEqual(await deleteAuthUser(e, USER_ID, async () => { throw new Error("net"); }), { ok: false, reason: "delete_unreachable" });
  assert.deepEqual(await deleteAuthUser(e, "not-a-uuid", async () => new Response(null, { status: 200 })), { ok: false, reason: "not_configured" });
});

// ------------------------------------------------------------- who may

test("the typed word must be exactly DELETE (spaces around it are fine), and nothing is called without it", async () => {
  for (const confirm of ["", "delete", "Delete", "DELETE ME", "DELET", null, undefined, 5, ["DELETE"], {}]) {
    const w = world();
    assert.deepEqual(await run(w, { accessToken: TOKEN, confirm }), { ok: false, reason: "confirm" }, String(confirm));
    assert.equal(w.calls.length, 0, String(confirm));
  }
  const w = world();
  assert.deepEqual(await run(w, { accessToken: TOKEN, confirm: "  DELETE\n" }), { ok: true, cancelled: 1 });
});

test("a sign-in older than ten minutes, or none on record, needs a fresh email link first", async () => {
  for (const last of [STALE, null]) {
    const w = world({ user: { id: USER_ID, email: EMAIL, email_confirmed_at: "2026-10-01T00:00:00Z", ...(last ? { last_sign_in_at: last } : {}) } });
    assert.deepEqual(await run(w), { ok: false, reason: "reauth_required" }, String(last));
    assert.equal(paddleWrites(w).length + adminDeletes(w).length, 0);
    assert.equal(w.calls.length, 1, "only the token check ran");
  }
});

test("a bad token, or an unconfirmed address, deletes nothing", async () => {
  assert.deepEqual(await run(world({ userStatus: 401 })), { ok: false, reason: "unauthorized" });
  assert.deepEqual(await run(world(), { accessToken: "short", confirm: "DELETE" }), { ok: false, reason: "unauthorized" });
  const w = world({ user: { id: USER_ID, email: EMAIL, last_sign_in_at: FRESH } });
  assert.deepEqual(await run(w), { ok: false, reason: "unauthorized" });
  assert.equal(paddleWrites(w).length + adminDeletes(w).length, 0);
});

test("the client cannot name a user, a customer or a subscription", async () => {
  const w = world();
  const out = await run(w, { accessToken: TOKEN, confirm: "DELETE", userId: OTHER_USER, user_id: OTHER_USER, customerId: "ctm_01victim", subscriptionId: "sub_01victim", email: "victim@example.invalid" });
  assert.deepEqual(out, { ok: true, cancelled: 1 });
  assert.equal(adminDeletes(w)[0].path, `/auth/v1/admin/users/${USER_ID}`);
  assert.ok(!JSON.stringify(w.calls).includes("victim") && !JSON.stringify(w.calls).includes(OTHER_USER));
  assert.equal(adminDeletes(w).length, 1, "exactly one user is deleted");
});

test("missing configuration, including the cancel key, fails closed without a call", async () => {
  for (const drop of ["PADDLE_CANCEL_API_KEY", "PADDLE_API_KEY", "PADDLE_CHECKOUT_API_KEY", "SUPABASE_SECRET_KEY", "SUPABASE_PUBLISHABLE_KEY", "SUPABASE_URL", "PADDLE_ENVIRONMENT"]) {
    const e = env();
    delete e[drop];
    const w = world();
    assert.deepEqual(await run(w, { accessToken: TOKEN, confirm: "DELETE" }, e), { ok: false, reason: "unavailable" }, drop);
    assert.equal(w.calls.length, 0, drop);
  }
});

test("no log line carries an address, an id, a token or a key", async () => {
  const lines = [];
  const real = { log: console.log, error: console.error };
  console.log = (...a) => lines.push(a.join(" "));
  console.error = (...a) => lines.push(a.join(" "));
  try {
    await run(world());
    await run(world({ cancelStatus: 500 }));
    await run(world({ adminStatus: 500 }));
    await run(world({ user: { id: USER_ID, email: EMAIL, email_confirmed_at: "x", last_sign_in_at: STALE } }));
  } finally {
    console.log = real.log;
    console.error = real.error;
  }
  const all = lines.join("\n");
  for (const secret of [EMAIL, USER_ID, TOKEN, "ctm_", "sub_", "CANCEL_TESTONLY", "sb_secret", "project.supabase"]) assert.ok(!all.includes(secret), secret);
  assert.ok(lines.some((l) => l.includes('"outcome":"deleted"')) && lines.some((l) => l.includes("reauth_required")));
});
