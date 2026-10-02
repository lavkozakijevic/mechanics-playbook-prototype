import test from "node:test";
import assert from "node:assert/strict";
import { MAX_APPLY_PER_RUN, differs, reconcile } from "../src/reconcile.mjs";
import { MAX_PAGES, paddleBase } from "../src/paddle-api.mjs";
import { baseUrl } from "../src/supabase.mjs";
import { PRODUCT_ID, USER_ID, baseEnv, subscriptionData } from "./fixtures.mjs";

/** One fetch stand-in for both APIs: Paddle's list (pages) and Supabase's read and RPC. */
function world({ paddlePages, ours = [], rpcAnswer = "applied", paddleStatus = 200 }) {
  const calls = { paddle: [], read: [], rpc: [] };
  const fn = async (url, init = {}) => {
    const u = new URL(url);
    if (u.hostname === "sandbox-api.paddle.com") {
      calls.paddle.push({ url: String(url), auth: init.headers?.authorization });
      if (paddleStatus !== 200) return new Response("no", { status: paddleStatus });
      const page = Number(u.searchParams.get("page") ?? 0);
      const next = page + 1 < paddlePages.length ? `https://sandbox-api.paddle.com/subscriptions?per_page=200&page=${page + 1}` : null;
      return Response.json({ data: paddlePages[page], meta: { pagination: { per_page: 200, next, has_more: !!next } } });
    }
    if (u.pathname === "/rest/v1/subscriptions") {
      calls.read.push({ url: String(url), apikey: init.headers?.apikey });
      return Response.json(ours);
    }
    if (u.pathname === "/rest/v1/rpc/apply_subscription_event") {
      calls.rpc.push(JSON.parse(init.body));
      return Response.json(rpcAnswer);
    }
    return new Response("unexpected " + url, { status: 500 });
  };
  fn.calls = calls;
  return fn;
}

const entity = (over = {}) => subscriptionData({ updated_at: "2026-10-01T10:00:00.000000Z", ...over });
const row = (over = {}) => ({
  paddle_subscription_id: "sub_01testsubscription", user_id: USER_ID, status: "active", price_id: "pri_01quarterly",
  product_id: PRODUCT_ID, canceled_at: null, cancel_effective_at: null, ...over,
});

test("a subscription we do not have is applied, with Paddle's updated_at as occurred_at", async () => {
  const f = world({ paddlePages: [[entity()]] });
  const s = await reconcile(baseEnv(), { fetch: f });
  assert.equal(f.calls.rpc.length, 1);
  const sent = f.calls.rpc[0];
  assert.equal(sent.p_occurred_at, "2026-10-01T10:00:00.000000Z");
  assert.equal(sent.p_event_id, "reconcile:sub_01testsubscription:2026-10-01T10:00:00.000000Z");
  assert.equal(sent.p_event_type, "reconcile");
  assert.deepEqual([s.read, s.differing, s.applied], [1, 1, 1]);
});

test("a subscription that already matches is not applied at all", async () => {
  const f = world({ paddlePages: [[entity()]], ours: [row()] });
  const s = await reconcile(baseEnv(), { fetch: f });
  assert.equal(f.calls.rpc.length, 0);
  assert.deepEqual([s.read, s.differing, s.applied], [1, 0, 0]);
});

test("a missed cancellation is applied", async () => {
  const f = world({ paddlePages: [[entity({ status: "canceled", canceled_at: "2026-10-01T09:00:00Z" })]], ours: [row()] });
  await reconcile(baseEnv(), { fetch: f });
  assert.equal(f.calls.rpc.length, 1);
  assert.equal(f.calls.rpc[0].p_status, "canceled");
});

test("differences are detected field by field", () => {
  const base = { p_user_id: USER_ID, p_status: "active", p_price_id: "pri_01quarterly", p_product_id: PRODUCT_ID, p_canceled_at: null, p_scheduled_action: null, p_scheduled_effective_at: null };
  assert.equal(differs(row(), base), false);
  assert.equal(differs(undefined, base), true);
  assert.equal(differs(row({ status: "past_due" }), base), true);
  assert.equal(differs(row({ price_id: "pri_01yearly" }), base), true);
  assert.equal(differs(row({ canceled_at: "2026-10-01T09:00:00+00:00" }), base), true);
  assert.equal(differs(row({ user_id: "11111111-1111-4111-8111-111111111111" }), base), true);
  // the same instant written two ways is not a difference
  assert.equal(differs(row({ canceled_at: "2026-10-01T09:00:00+00:00" }), { ...base, p_canceled_at: "2026-10-01T09:00:00Z" }), false);
  // a scheduled cancellation matters; a scheduled pause does not
  assert.equal(differs(row(), { ...base, p_scheduled_action: "cancel", p_scheduled_effective_at: "2027-01-01T00:00:00Z" }), true);
  assert.equal(differs(row({ cancel_effective_at: "2027-01-01T00:00:00+00:00" }), { ...base, p_scheduled_action: "cancel", p_scheduled_effective_at: "2027-01-01T00:00:00Z" }), false);
  assert.equal(differs(row(), { ...base, p_scheduled_action: "pause", p_scheduled_effective_at: "2027-01-01T00:00:00Z" }), false);
});

test("other products and unusable entities are skipped; unusable ones count as errors", async () => {
  const other = entity({ id: "sub_other" });
  other.items[0].price.product_id = "pro_other";
  const broken = entity({ id: "sub_broken", status: "weird" });
  const f = world({ paddlePages: [[other, broken]] });
  const s = await reconcile(baseEnv(), { fetch: f });
  assert.equal(f.calls.rpc.length, 0);
  assert.deepEqual([s.skipped, s.errors], [2, 1]);
});

test("pages are followed, and the Paddle key goes only to Paddle's host", async () => {
  const f = world({ paddlePages: [[entity({ id: "sub_a" })], [entity({ id: "sub_b" })]] });
  const s = await reconcile(baseEnv(), { fetch: f });
  assert.equal(f.calls.paddle.length, 2);
  assert.equal(s.read, 2);
  assert.ok(f.calls.paddle.every((c) => c.auth === `Bearer ${baseEnv().PADDLE_API_KEY}`));
  assert.ok(f.calls.read.every((c) => c.apikey === baseEnv().SUPABASE_SECRET_KEY));

  const hostile = async (url) => Response.json({ data: [entity()], meta: { pagination: { next: "https://evil.example/steal" } } });
  await assert.rejects(() => reconcile(baseEnv(), { fetch: hostile }), /paddle_unexpected/);
});

test("at most five pages are read, and the run says so", async () => {
  const pages = Array.from({ length: MAX_PAGES + 2 }, (_, i) => [entity({ id: `sub_p${i}` })]);
  const f = world({ paddlePages: pages, ours: pages.map((p) => row({ paddle_subscription_id: p[0].id })) });
  const s = await reconcile(baseEnv(), { fetch: f });
  assert.equal(f.calls.paddle.length, MAX_PAGES);
  assert.equal(s.truncated, 1);
});

test("no more than the per-run limit is applied; the rest wait for the next hour", async () => {
  const many = Array.from({ length: MAX_APPLY_PER_RUN + 5 }, (_, i) => entity({ id: `sub_n${i}` }));
  const f = world({ paddlePages: [many] });
  const s = await reconcile(baseEnv(), { fetch: f });
  assert.equal(f.calls.rpc.length, MAX_APPLY_PER_RUN);
  assert.deepEqual([s.differing, s.truncated], [MAX_APPLY_PER_RUN + 5, 1]);
});

test("a failed apply is counted and the run carries on", async () => {
  const f = world({ paddlePages: [[entity({ id: "sub_a" }), entity({ id: "sub_b" })]], rpcAnswer: "nonsense" });
  const s = await reconcile(baseEnv(), { fetch: f });
  assert.equal(s.errors, 2);
  assert.equal(f.calls.rpc.length, 2);
});

test("a Paddle failure fails the run, so the dashboard shows it", async () => {
  for (const paddleStatus of [401, 403, 429, 500]) {
    await assert.rejects(() => reconcile(baseEnv(), { fetch: world({ paddlePages: [[]], paddleStatus }) }), new RegExp(`paddle_${paddleStatus}`));
  }
});

test("missing configuration fails the run", async () => {
  for (const drop of ["PADDLE_API_KEY", "SUPABASE_SECRET_KEY", "PADDLE_ENVIRONMENT"]) {
    const env = baseEnv();
    delete env[drop];
    await assert.rejects(() => reconcile(env, { fetch: world({ paddlePages: [[]] }) }), /not_configured/, drop);
  }
});

test("rows only we have are counted, never touched", async () => {
  const f = world({ paddlePages: [[]], ours: [row()] });
  const s = await reconcile(baseEnv(), { fetch: f });
  assert.equal(s.only_ours, 1);
  assert.equal(f.calls.rpc.length, 0);
});

test("the API host follows the environment; an override must be loopback http", () => {
  assert.equal(paddleBase({ PADDLE_ENVIRONMENT: "sandbox" }), "https://sandbox-api.paddle.com");
  assert.equal(paddleBase({ PADDLE_ENVIRONMENT: "live" }), "https://api.paddle.com");
  assert.equal(paddleBase({ PADDLE_ENVIRONMENT: "staging" }), null);
  assert.equal(paddleBase({ PADDLE_ENVIRONMENT: "sandbox", PADDLE_API_BASE_URL: "http://127.0.0.1:9999" }), "http://127.0.0.1:9999");
  assert.equal(paddleBase({ PADDLE_ENVIRONMENT: "sandbox", PADDLE_API_BASE_URL: "https://evil.example" }), null);
  assert.equal(paddleBase({ PADDLE_ENVIRONMENT: "live", PADDLE_API_BASE_URL: "http://evil.example" }), null);
});

test("the Supabase address must be https, except loopback for local tests", () => {
  assert.equal(baseUrl("https://abc.supabase.co"), "https://abc.supabase.co");
  assert.equal(baseUrl("https://abc.supabase.co/"), "https://abc.supabase.co");
  assert.equal(baseUrl("http://127.0.0.1:54321"), "http://127.0.0.1:54321");
  for (const bad of ["http://abc.supabase.co", "ftp://x", "nope", "", undefined, null, 5]) assert.equal(baseUrl(bad), null);
});

// ------------------------------------------------- accounts that no longer exist

const captureErrors = async (fn) => {
  const lines = [];
  const real = console.error;
  console.error = (...a) => lines.push(a.join(" "));
  try {
    return { result: await fn(), lines };
  } finally {
    console.error = real;
  }
};

test("a cancelled subscription we do not have is skipped: no call to the function, nothing recreated", async () => {
  const f = world({ paddlePages: [[entity({ status: "canceled", canceled_at: "2026-10-01T09:00:00Z" })]], ours: [] });
  const s = await reconcile(baseEnv(), { fetch: f });
  assert.equal(f.calls.rpc.length, 0);
  assert.deepEqual([s.read, s.differing, s.applied, s.skipped, s.orphans], [1, 0, 0, 1, 0]);
});

test("many deleted users' cancelled subscriptions cannot use up the run's allowance", async () => {
  const gone = Array.from({ length: MAX_APPLY_PER_RUN + 10 }, (_, i) => entity({ id: `sub_01gone${i}`, status: "canceled", canceled_at: "2026-10-01T09:00:00Z" }));
  const f = world({ paddlePages: [[...gone, entity({ id: "sub_01real", status: "active" })]], ours: [] });
  const s = await reconcile(baseEnv(), { fetch: f });
  assert.equal(f.calls.rpc.length, 1, "only the live one is applied");
  assert.equal(f.calls.rpc[0].p_subscription_id, "sub_01real");
  assert.equal(s.truncated, 0);
});

test("a cancelled subscription we DO have still reconciles", async () => {
  const f = world({ paddlePages: [[entity({ status: "canceled", canceled_at: "2026-10-01T09:00:00Z" })]], ours: [row()] });
  await reconcile(baseEnv(), { fetch: f });
  assert.equal(f.calls.rpc.length, 1);
});

test("a live subscription whose user is gone is logged as an orphan, on the first run and on every run after", async () => {
  for (const outcome of ["rejected_user", "duplicate"]) {
    const f = world({ paddlePages: [[entity({ status: "active" })]], ours: [], rpcAnswer: outcome });
    const { result: s, lines } = await captureErrors(() => reconcile(baseEnv(), { fetch: f }));
    assert.equal(s.orphans, 1, outcome);
    const line = lines.find((l) => l.includes("orphan_subscription"));
    assert.ok(line, outcome);
    assert.ok(line.includes('"evt":"reconcile_orphan"') && line.includes('"status":"active"'), line);
    assert.ok(!line.includes("sub_") && !line.includes("ctm_"), "no id in the log line");
    assert.equal(f.calls.rpc.length, 1, "nothing is cancelled or created, only the function's own record");
  }
});

test("an ordinary applied subscription is not an orphan", async () => {
  const f = world({ paddlePages: [[entity()]], ours: [], rpcAnswer: "applied" });
  const { result: s, lines } = await captureErrors(() => reconcile(baseEnv(), { fetch: f }));
  assert.equal(s.orphans, 0);
  assert.ok(!lines.some((l) => l.includes("orphan")));
});

test("a subscription we hold that Paddle now reports with a different user is not logged as an orphan", async () => {
  const f = world({ paddlePages: [[entity()]], ours: [row({ user_id: "99999999-9999-4999-8999-999999999999" })], rpcAnswer: "rejected_user" });
  const { result: s } = await captureErrors(() => reconcile(baseEnv(), { fetch: f }));
  assert.equal(s.orphans, 0);
});
