import test from "node:test";
import assert from "node:assert/strict";
import { sanitize } from "../src/log.mjs";

test("only allow-listed keys are logged", () => {
  assert.deepEqual(sanitize({ evt: "webhook", user_id: "u", email: "a@b.cd", body: "{}", secret: "x", outcome: "applied" }), { evt: "webhook", outcome: "applied" });
});

test("a value that is not short and plain is replaced", () => {
  for (const v of ["has space", "a@b.cd", "x".repeat(81), 'quote"', "line\nbreak", "{json}"]) {
    assert.equal(sanitize({ reason: v }).reason, "[redacted]", JSON.stringify(v));
  }
  assert.equal(sanitize({ event_id: "evt_01abc:def.ghi-jkl" }).event_id, "evt_01abc:def.ghi-jkl");
});

test("numbers and booleans pass, objects and arrays do not", () => {
  assert.deepEqual(sanitize({ read: 3, truncated: true, status: { a: 1 }, errors: [1], applied: NaN }), { read: 3, truncated: true });
});
