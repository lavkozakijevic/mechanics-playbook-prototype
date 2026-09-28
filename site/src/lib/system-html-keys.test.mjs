/**
 * Regression tests for system-html-keys.mjs.
 *
 * This scanner was written on 16 Sep 2026 specifically to catch a repeated
 * app-id key in system.html's CONNECTIONS/POSITIONS literals — and then sat
 * silently broken for twelve days: an apostrophe inside a `//` comment
 * desynced its string-tracking for the rest of the file, so it was finding
 * almost no keys at all, quoted or bareword, and reporting zero duplicates
 * regardless of what was actually in the file. A real build against real
 * content never surfaced this, because a check that never fires looks
 * exactly like a check that passes. These tests exercise the scanner
 * directly against small synthetic literals, so a future regression here
 * fails on its own rather than waiting to be noticed.
 *
 * Run with: node --test src/lib/system-html-keys.test.mjs
 */
import { test } from "node:test";
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { extractObjectLiteral, topLevelKeys, findDuplicateKeys, assertNoDuplicateKeys } from "./system-html-keys.mjs";

const here = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(here, "../../..");

test("topLevelKeys finds every quoted key, ignoring nested fields", () => {
  const src = `{
  "alpha": [
    { from: "x", to: "y", title: "t" },
  ],
  "beta": [],
}`;
  assert.deepEqual(topLevelKeys(src), ["alpha", "beta"]);
});

test("topLevelKeys finds bareword keys alongside quoted ones", () => {
  const src = `{
  "alpha": [],
  beta: [],
  gamma: {},
}`;
  assert.deepEqual(topLevelKeys(src), ["alpha", "beta", "gamma"]);
});

test("a bareword duplicate shadowing an earlier quoted key is detected (the calm/uptime shape)", () => {
  // This is exactly the bug shape found in system.html twice: a fresh,
  // correct quoted entry, and a stale bareword entry with the same app id
  // sitting later in the object, silently winning because a JS object
  // literal keeps only the last copy of a repeated key.
  const src = `{
  "calm": [
    { from: "check-in", to: "streak", title: "current" },
  ],
  "other-app": [],
  calm: [
    { from: "daily-login-reward", to: "streak", title: "stale" },
  ],
}`;
  const dupes = findDuplicateKeys(src);
  assert.deepEqual(dupes, [["calm", 2]]);
  assert.throws(() => assertNoDuplicateKeys("CONNECTIONS", src), /DUPLICATE APP-ID KEY.*"calm" \(2 times\)/s);
});

test("a repeated quoted key is detected the same way as a bareword repeat", () => {
  const src = `{
  "alpha": [],
  "alpha": [],
}`;
  assert.deepEqual(findDuplicateKeys(src), [["alpha", 2]]);
});

test("assertNoDuplicateKeys does not throw on a clean literal", () => {
  const src = `{
  "alpha": [],
  beta: [],
}`;
  assert.doesNotThrow(() => assertNoDuplicateKeys("CONNECTIONS", src));
});

test("an apostrophe inside a // comment does not desync scanning of the keys after it", () => {
  // The actual 28 Sep bug: the scanner treated a bare apostrophe as a
  // string delimiter identical to " and `, assuming it would only ever
  // bracket a real string. It doesn't — every comment in system.html is
  // full of contractions and possessives ("doordash's", "wispr-flow's") —
  // so the first comment's apostrophe was read as opening a string, and the
  // scanner hunted for the next apostrophe anywhere in the file as the
  // close, corrupting depth-tracking for everything after it. A fixed
  // scanner must find both real keys below despite the leading comment.
  const src = `{
  // doordash's CONNECTIONS entry was removed here (owner ruling)
  "alpha": [
    { from: "x", to: "y", title: "t", desc: "The app's own copy doesn't change." },
  ],
  beta: [],
}`;
  assert.deepEqual(topLevelKeys(src), ["alpha", "beta"]);
});

test("contractions, possessives, and nested quotation marks inside a value never register as keys", () => {
  const src = `{
  "alpha": [
    { from: "x", to: "y", title: "It's the user's own record", desc: "Calm's copy says 'you're saving time' right on the screen; it doesn't change afterward." },
  ],
}`;
  assert.deepEqual(topLevelKeys(src), ["alpha"]);
});

test("regression fixture: the exact system.html snippet that broke the old scanner", () => {
  // Reproduces the literal shape of the real bug: a leading comment with an
  // apostrophe, followed by several real app entries, one of which (calm)
  // has a later bareword duplicate. The pre-fix scanner found 4 stray
  // "keys" total on input shaped like this (mostly prose words) and missed
  // the duplicate entirely; this asserts the fixed scanner does not.
  const src = `{
  // doordash's CONNECTIONS entry was removed here (owner ruling, 16 Sep
  // 2026): the new three-publishable-tag minimum.
  "picsart": [
    { from: "community-groups", to: "challenges", title: "A Space owner can run their own challenge", desc: "A user who owns a Space can start a challenge inside it, in addition to PicsArt's own challenges.", effect: "Space membership isn't required to start one." },
  ],
  "calm": [
    { from: "check-in", to: "streak", title: "A completed check-in is what moves the streak", desc: "The streak responds only to a completed check-in, not to the app's paid catalogue." },
  ],
  calm: [
    { from: "daily-login-reward", to: "streak", title: "stale v3 edge", desc: "This shouldn't win, but a literal keeps only the last copy of a repeated key." },
  ],
  "tripsy": [],
}`;
  assert.deepEqual(topLevelKeys(src), ["picsart", "calm", "calm", "tripsy"]);
  assert.deepEqual(findDuplicateKeys(src), [["calm", 2]]);
});

test("live check: system.html's real CONNECTIONS and POSITIONS carry no duplicate app-id key", () => {
  const systemHtmlSrc = fs.readFileSync(path.join(repoRoot, "system.html"), "utf8");
  const connectionsSrc = extractObjectLiteral(systemHtmlSrc, "CONNECTIONS");
  const positionsSrc = extractObjectLiteral(systemHtmlSrc, "POSITIONS");
  assert.doesNotThrow(() => assertNoDuplicateKeys("CONNECTIONS", connectionsSrc));
  assert.doesNotThrow(() => assertNoDuplicateKeys("POSITIONS", positionsSrc));
  // Sanity floor so this test can't pass by the scanner silently finding
  // nothing again — the real file currently carries dozens of app entries
  // in each literal.
  assert.ok(topLevelKeys(connectionsSrc).length > 10, "CONNECTIONS scan found suspiciously few keys");
  assert.ok(topLevelKeys(positionsSrc).length > 10, "POSITIONS scan found suspiciously few keys");
});
