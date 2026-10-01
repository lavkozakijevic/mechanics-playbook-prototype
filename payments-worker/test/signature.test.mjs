import test from "node:test";
import assert from "node:assert/strict";
import { MAX_SKEW_SECONDS, parseSignatureHeader, verifySignature } from "../src/signature.mjs";
import { NOW_MS, NOW_S, OTHER_SECRET, SECRET, h1For, signedHeader, toBytes } from "./fixtures.mjs";

const BODY = '{"event_id":"evt_1","data":{"note":"héllo ✓ \\u00e9"}}';
const check = (over = {}) =>
  verifySignature({ rawBody: toBytes(BODY), header: signedHeader(BODY), secret: SECRET, nowMs: NOW_MS, ...over });

test("a correctly signed body passes", async () => {
  assert.deepEqual(await check(), { ok: true });
});

test("the window is five seconds", () => {
  assert.equal(MAX_SKEW_SECONDS, 5);
});

test("signed five seconds ago passes, six seconds ago does not", async () => {
  assert.equal((await check({ header: signedHeader(BODY, { ts: NOW_S - 5 }) })).ok, true);
  assert.deepEqual(await check({ header: signedHeader(BODY, { ts: NOW_S - 6 }) }), { ok: false, reason: "stale_timestamp" });
});

test("the window applies in the other direction too", async () => {
  assert.equal((await check({ header: signedHeader(BODY, { ts: NOW_S + 5 }) })).ok, true);
  assert.deepEqual(await check({ header: signedHeader(BODY, { ts: NOW_S + 6 }) }), { ok: false, reason: "stale_timestamp" });
});

test("a body changed by one byte fails", async () => {
  const tampered = toBytes(BODY.replace("evt_1", "evt_2"));
  assert.deepEqual(await check({ rawBody: tampered }), { ok: false, reason: "bad_signature" });
});

test("a body is verified as bytes, not as text that was parsed and re-serialised", async () => {
  // Same JSON value, different bytes (spacing): the signature covers the bytes.
  const spaced = toBytes(BODY.replace(":", ": "));
  assert.deepEqual(await check({ rawBody: spaced }), { ok: false, reason: "bad_signature" });
});

test("the wrong secret fails (sandbox secret against a live-signed request)", async () => {
  const header = signedHeader(BODY, { secret: OTHER_SECRET });
  assert.deepEqual(await check({ header }), { ok: false, reason: "bad_signature" });
});

test("a timestamp that was not the one signed fails", async () => {
  const header = `ts=${NOW_S + 1};h1=${h1For(SECRET, NOW_S, BODY)}`;
  assert.deepEqual(await check({ header }), { ok: false, reason: "bad_signature" });
});

test("several h1 values: passes when any one matches, wherever it sits", async () => {
  const wrong = h1For(OTHER_SECRET, NOW_S, BODY);
  const right = h1For(SECRET, NOW_S, BODY);
  for (const header of [`ts=${NOW_S};h1=${wrong};h1=${right}`, `ts=${NOW_S};h1=${right};h1=${wrong}`, `h1=${wrong};ts=${NOW_S};h1=${right}`]) {
    assert.equal((await check({ header })).ok, true, header);
  }
});

test("several h1 values: fails when none matches", async () => {
  const header = `ts=${NOW_S};h1=${h1For(OTHER_SECRET, NOW_S, BODY)};h1=${"0".repeat(64)}`;
  assert.deepEqual(await check({ header }), { ok: false, reason: "bad_signature" });
});

test("malformed headers are refused", async () => {
  const good = h1For(SECRET, NOW_S, BODY);
  const bad = [
    null, undefined, "", "garbage", `h1=${good}`, `ts=${NOW_S}`, `ts=abc;h1=${good}`, `ts=${NOW_S};h1=short`,
    `ts=${NOW_S};h1=${"z".repeat(64)}`, `ts=${NOW_S};ts=${NOW_S};h1=${good}`, `ts=-5;h1=${good}`, `ts=${NOW_S};h1=${good}`.padEnd(2000, "x"),
    `ts=${NOW_S};` + Array(9).fill(`h1=${good}`).join(";"),
  ];
  for (const header of bad) {
    assert.deepEqual(await check({ header }), { ok: false, reason: "malformed_signature" }, String(header).slice(0, 60));
  }
});

test("parseSignatureHeader reads ts and every h1, ignores unknown keys, lower-cases hex", () => {
  const a = "A".repeat(64);
  const b = "b".repeat(64);
  assert.deepEqual(parseSignatureHeader(`ts=1700000000;h1=${a};zz=1;h1=${b}`), { ts: 1700000000, h1s: [a.toLowerCase(), b] });
  assert.equal(parseSignatureHeader("ts=1;h1="), null);
});

test("an upper-case h1 is accepted (hex is case-insensitive)", async () => {
  const header = `ts=${NOW_S};h1=${h1For(SECRET, NOW_S, BODY).toUpperCase()}`;
  assert.equal((await check({ header })).ok, true);
});

test("an empty body can be verified like any other", async () => {
  const header = signedHeader("");
  assert.equal((await verifySignature({ rawBody: new Uint8Array(0), header, secret: SECRET, nowMs: NOW_MS })).ok, true);
});
