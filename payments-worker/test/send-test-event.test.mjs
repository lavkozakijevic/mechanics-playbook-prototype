import test from "node:test";
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { buildRequest, cleanupSql, parseArgs } from "../scripts/send-test-event.mjs";
import { verifySignature } from "../src/signature.mjs";
import { mapEvent } from "../src/mapping.mjs";
import { NOW_MS, PRODUCT_ID, USER_ID } from "./fixtures.mjs";

const ENV = {
  WEBHOOK_URL: "https://payments.example/paddle/webhook",
  PADDLE_WEBHOOK_SECRET: "pdl_ntfset_TESTONLY_0123456789abcdef",
  TEST_USER_ID: USER_ID,
  PADDLE_PRODUCT_ID: PRODUCT_ID,
};
const build = (args = {}, env = ENV) => buildRequest(env, args, { nowMs: NOW_MS, random: () => "abc123def456" });

test("the script's signature is one the Worker's check accepts, and its payload maps cleanly", async () => {
  const r = build();
  const check = await verifySignature({ rawBody: new TextEncoder().encode(r.body), header: r.headers["paddle-signature"], secret: ENV.PADDLE_WEBHOOK_SECRET, nowMs: NOW_MS });
  assert.equal(check.ok, true);
  const mapped = mapEvent(JSON.parse(r.body), { productId: PRODUCT_ID });
  assert.equal(mapped.kind, "apply");
  assert.equal(mapped.params.p_user_id, USER_ID);
  assert.equal(mapped.params.p_subscription_id, "sub_test_abc123def456");
  assert.match(r.eventId, /^evt_test_/);
});

test("--tamper and --stale produce requests the Worker's check refuses", async () => {
  for (const flag of ["tamper", "stale"]) {
    const r = build({ [flag]: true });
    const check = await verifySignature({ rawBody: new TextEncoder().encode(r.body), header: r.headers["paddle-signature"], secret: ENV.PADDLE_WEBHOOK_SECRET, nowMs: NOW_MS });
    assert.equal(check.ok, false, flag);
  }
});

test("options shape the event", () => {
  const r = JSON.parse(build({ type: "subscription.canceled", status: "canceled", "scheduled-cancel": "2027-01-01T00:00:00Z", sub: "sub_test_zzz999" }).body);
  assert.equal(r.event_type, "subscription.canceled");
  assert.equal(r.data.status, "canceled");
  assert.ok(r.data.canceled_at);
  assert.equal(r.data.id, "sub_test_zzz999");
  assert.deepEqual(r.data.scheduled_change, { action: "cancel", effective_at: "2027-01-01T00:00:00Z", resume_at: null });
});

test("missing or wrong settings are refused, naming the setting and never echoing a value", () => {
  for (const key of ["WEBHOOK_URL", "PADDLE_WEBHOOK_SECRET", "TEST_USER_ID", "PADDLE_PRODUCT_ID"]) {
    const env = { ...ENV };
    delete env[key];
    assert.throws(() => build({}, env), new RegExp(key));
  }
  assert.throws(() => build({}, { ...ENV, WEBHOOK_URL: "http://payments.example/x" }), /https/);
  assert.throws(() => build({}, { ...ENV, PADDLE_WEBHOOK_SECRET: "wrong" }), /pdl_ntfset_/);
  assert.throws(() => build({}, { ...ENV, TEST_USER_ID: "someone@example.com" }), /UUID/);
  assert.throws(() => build({ type: "transaction.completed" }), /--type/);
  assert.throws(() => build({ sub: "sub_real_123" }), /sub_test_/);
  assert.throws(() => parseArgs(["nonsense"]), /Unrecognised/);
});

test("run for real with a missing setting: exits with 2 and prints no secret", () => {
  const r = spawnSync(process.execPath, ["scripts/send-test-event.mjs"], { env: { PATH: process.env.PATH, PADDLE_WEBHOOK_SECRET: ENV.PADDLE_WEBHOOK_SECRET }, encoding: "utf8" });
  assert.equal(r.status, 2);
  assert.match(r.stderr, /WEBHOOK_URL/);
  assert.equal((r.stdout + r.stderr).includes(ENV.PADDLE_WEBHOOK_SECRET), false);
});

test("the cleanup SQL only touches test rows", () => {
  const sql = cleanupSql();
  assert.match(sql, /sub_test_%/);
  assert.match(sql, /evt_test_%/);
  assert.equal(/where\s*;/.test(sql), false);
  assert.equal((sql.match(/delete from/g) ?? []).length, 2);
  assert.equal((sql.match(/where/g) ?? []).length, 2);
});
