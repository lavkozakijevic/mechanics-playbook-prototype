import test from "node:test";
import assert from "node:assert/strict";
import { MAX_BODY_BYTES, handleWebhook } from "../src/handler.mjs";
import {
  NOW_MS, OTHER_SECRET, PRODUCT_ID, SECRET, USER_ID, baseEnv, fakeRpc, h1For, signedHeader,
  subscriptionData, subscriptionEvent, webhookRequest,
} from "./fixtures.mjs";

const run = (request, { env = baseEnv(), fetch = fakeRpc("applied") } = {}) =>
  handleWebhook(request, env, { fetch, nowMs: () => NOW_MS });

// ------------------------------------------------------------ the response table

test("each database outcome answers 200 with that outcome (nothing for Paddle to retry)", async () => {
  for (const outcome of ["applied", "stale", "duplicate", "rejected_user"]) {
    const res = await run(webhookRequest(subscriptionEvent()), { fetch: fakeRpc(outcome) });
    assert.equal(res.status, 200, outcome);
    assert.deepEqual(await res.json(), { ok: true, outcome });
  }
});

test("a database or network failure answers 503 so Paddle retries", async () => {
  for (const answer of [500, 502, 400, 401, new Error("network down")]) {
    const res = await run(webhookRequest(subscriptionEvent()), { fetch: fakeRpc(answer) });
    assert.equal(res.status, 503, String(answer));
    assert.equal(res.headers.get("retry-after"), "30");
  }
});

test("an answer the function cannot give is treated as a failure, not as success", async () => {
  for (const answer of ["maybe", 7, null, { outcome: "applied" }]) {
    const res = await run(webhookRequest(subscriptionEvent()), { fetch: fakeRpc(answer) });
    assert.equal(res.status, 503, JSON.stringify(answer));
  }
});

test("a bad signature, an old timestamp or a missing header answers 401 and touches nothing", async () => {
  const event = subscriptionEvent();
  const body = JSON.stringify(event);
  const rpc = fakeRpc();
  const cases = [
    webhookRequest(event, { secret: OTHER_SECRET }),
    webhookRequest(event, { ts: Math.floor(NOW_MS / 1000) - 30 }),
    webhookRequest(event, { header: "ts=1;h1=nothex" }),
    new Request("https://payments.example/paddle/webhook", { method: "POST", body }),
    webhookRequest(event, { header: signedHeader(body + " ") }),
  ];
  for (const req of cases) {
    const res = await run(req, { fetch: rpc });
    assert.equal(res.status, 401);
    assert.deepEqual(await res.json(), { error: "unauthorized" });
  }
  assert.equal(rpc.calls.length, 0, "no database call before the signature passes");
});

test("a valid signature over invalid JSON answers 400", async () => {
  const res = await run(webhookRequest(null, { rawBody: "{not json" }));
  assert.equal(res.status, 400);
});

test("invalid UTF-8 under a valid signature answers 400, not a guess", async () => {
  const bytes = new Uint8Array([0x7b, 0xff, 0xfe, 0x7d]);
  const ts = Math.floor(NOW_MS / 1000);
  const header = `ts=${ts};h1=${h1For(SECRET, ts, bytes)}`;
  const res = await run(new Request("https://payments.example/paddle/webhook", { method: "POST", headers: { "paddle-signature": header }, body: bytes }));
  assert.equal(res.status, 400);
});

test("only POST is accepted", async () => {
  for (const method of ["GET", "PUT", "DELETE", "PATCH"]) {
    const res = await run(new Request("https://payments.example/paddle/webhook", { method }));
    assert.equal(res.status, 405, method);
    assert.equal(res.headers.get("allow"), "POST");
  }
});

test("an oversized body answers 413, declared or not, before anything is verified", async () => {
  const big = "x".repeat(MAX_BODY_BYTES + 1);
  const rpc = fakeRpc();
  const declared = await run(new Request("https://payments.example/paddle/webhook", { method: "POST", body: big, headers: { "content-length": String(big.length) } }), { fetch: rpc });
  assert.equal(declared.status, 413);
  const stream = new ReadableStream({ start(c) { c.enqueue(new TextEncoder().encode(big)); c.close(); } });
  const undeclared = await run(new Request("https://payments.example/paddle/webhook", { method: "POST", body: stream, duplex: "half" }), { fetch: rpc });
  assert.equal(undeclared.status, 413);
  assert.equal(rpc.calls.length, 0);
});

test("missing configuration answers 503 so Paddle retries once it is fixed", async () => {
  for (const drop of ["PADDLE_WEBHOOK_SECRET_SANDBOX", "PADDLE_PRODUCT_ID", "SUPABASE_SECRET_KEY", "SUPABASE_URL", "PADDLE_ENVIRONMENT"]) {
    const env = baseEnv();
    delete env[drop];
    const res = await run(webhookRequest(subscriptionEvent()), { env });
    assert.equal(res.status, 503, drop);
    assert.deepEqual(await res.json(), { error: "not_configured" });
  }
  assert.equal((await run(webhookRequest(subscriptionEvent()), { env: { ...baseEnv(), SUPABASE_URL: "http://project.supabase.example" } })).status, 503, "plain http is refused");
});

test("only the active environment's secret is used", async () => {
  const live = { ...baseEnv(), PADDLE_ENVIRONMENT: "live" };
  const signedWithSandbox = await run(webhookRequest(subscriptionEvent()), { env: live });
  assert.equal(signedWithSandbox.status, 401, "sandbox-signed request refused when live is active");
  const signedWithLive = await run(webhookRequest(subscriptionEvent(), { secret: OTHER_SECRET }), { env: live });
  assert.equal(signedWithLive.status, 200);
  // and a live secret alone is not enough while sandbox is active
  const sandbox = baseEnv();
  assert.equal((await run(webhookRequest(subscriptionEvent(), { secret: OTHER_SECRET }), { env: sandbox })).status, 401);
});

test("events that are not ours are acknowledged and ignored without a database call", async () => {
  const rpc = fakeRpc();
  const other = await run(webhookRequest(subscriptionEvent({ type: "transaction.completed" })), { fetch: rpc });
  assert.deepEqual(await other.json(), { ok: true, outcome: "ignored" });
  const otherProduct = subscriptionData();
  otherProduct.items[0].price.product_id = "pro_elsewhere";
  const res = await run(webhookRequest(subscriptionEvent({ data: otherProduct })), { fetch: rpc });
  assert.deepEqual(await res.json(), { ok: true, outcome: "ignored" });
  assert.equal(rpc.calls.length, 0);
});

test("a payload nobody can apply answers 200 (a retry would change nothing) and is logged", async () => {
  const rpc = fakeRpc();
  const res = await run(webhookRequest(subscriptionEvent({ data: subscriptionData({ status: "weird" }) })), { fetch: rpc });
  assert.equal(res.status, 200);
  assert.deepEqual(await res.json(), { ok: true, outcome: "bad_payload" });
  assert.equal(rpc.calls.length, 0);
});

test("a subscription with no user id still reaches the function, which records it as rejected_user", async () => {
  const rpc = fakeRpc("rejected_user");
  const res = await run(webhookRequest(subscriptionEvent({ data: subscriptionData({ custom_data: null }) })), { fetch: rpc });
  assert.equal(res.status, 200);
  assert.equal(JSON.parse(rpc.calls[0].init.body).p_user_id, null);
});

// ---------------------------------------------------- what is sent to Supabase

test("one call: the RPC endpoint, the secret key in apikey only, the mapped parameters", async () => {
  const rpc = fakeRpc("applied");
  const env = baseEnv();
  await run(webhookRequest(subscriptionEvent()), { env, fetch: rpc });
  assert.equal(rpc.calls.length, 1);
  const { url, init } = rpc.calls[0];
  assert.equal(url, "https://project.supabase.example/rest/v1/rpc/apply_subscription_event");
  assert.equal(init.method, "POST");
  assert.equal(init.headers.apikey, env.SUPABASE_SECRET_KEY);
  assert.equal(Object.keys(init.headers).some((h) => h.toLowerCase() === "authorization"), false, "the secret key is not a Bearer token");
  const sent = JSON.parse(init.body);
  assert.equal(sent.p_user_id, USER_ID);
  assert.equal(sent.p_product_id, PRODUCT_ID);
  assert.equal(Object.keys(sent).length, 13);
});

test("a replayed delivery is two identical calls; deduplication is the function's job", async () => {
  const rpc = fakeRpc("duplicate");
  const req = () => webhookRequest(subscriptionEvent());
  await run(req(), { fetch: rpc });
  await run(req(), { fetch: rpc });
  assert.equal(rpc.calls.length, 2);
  assert.equal(rpc.calls[0].init.body, rpc.calls[1].init.body);
});

// -------------------------------------------------------------------- logging

test("nothing secret or personal reaches the logs, on success or on any failure", async () => {
  const lines = [];
  const real = { log: console.log, error: console.error, warn: console.warn, info: console.info };
  for (const k of Object.keys(real)) console[k] = (...a) => lines.push(a.map(String).join(" "));
  const env = baseEnv();
  const email = "private.person@example.invalid";
  const marker = "SENTINEL-NAME-9f31";
  const data = subscriptionData({ custom_data: { supabase_user_id: USER_ID, email, note: marker } });
  data.items[0].price.description = marker;
  const event = subscriptionEvent({ data });
  const header = signedHeader(JSON.stringify(event));
  try {
    await run(webhookRequest(event), { env });                                                   // applied
    await run(webhookRequest(event), { env, fetch: fakeRpc("rejected_user") });                   // rejected_user
    await run(webhookRequest(event), { env, fetch: fakeRpc(500) });                               // database down
    await run(webhookRequest(event, { secret: OTHER_SECRET }), { env });                          // bad signature
    await run(webhookRequest(event, { header: header.replace("ts=", "ts=1") }), { env });         // stale
    await run(webhookRequest(null, { rawBody: `{"event_type":"${marker}` }), { env });           // bad json
    await run(webhookRequest(subscriptionEvent({ data: subscriptionData({ status: marker, custom_data: { email } }) })), { env }); // bad payload
    await run(webhookRequest(event), { env: { ...env, SUPABASE_SECRET_KEY: "" } });               // not configured
  } finally {
    Object.assign(console, real);
  }
  assert.ok(lines.length >= 8, "the cases above do log something");
  const all = lines.join("\n");
  for (const secret of [
    env.SUPABASE_SECRET_KEY, env.PADDLE_WEBHOOK_SECRET_SANDBOX, env.PADDLE_WEBHOOK_SECRET_LIVE, env.PADDLE_API_KEY,
    USER_ID, email, marker, "ctm_01testcustomer", "paddle-signature", header, h1For(SECRET, Math.floor(NOW_MS / 1000), JSON.stringify(event)),
    "supabase_user_id", "apikey", "authorization",
  ]) {
    assert.equal(all.includes(secret), false, `a log line contains ${secret.slice(0, 12)}…`);
  }
  // what is logged is the event id, type and outcome
  assert.match(all, /"event_id":"evt_01testevent"/);
  assert.match(all, /"outcome":"applied"/);
});
