import test from "node:test";
import assert from "node:assert/strict";
import {
  PROTECTED_HEADERS, decideAccess, isAppId, isReviewWindowOpen, loginHrefFor, needsEntitlementCheck, parseProtectedPath,
} from "./access.mjs";

const base = { windowOpen: false, free: false, hasSession: true };

test("the review window is open only for exactly 'open'; everything else fails closed", () => {
  assert.equal(isReviewWindowOpen("open"), true);
  for (const v of [undefined, null, "", "closed", "OPEN", "Open", "true", "1", " open", "open ", true, 1, {}, ["open"]]) {
    assert.equal(isReviewWindowOpen(v), false, JSON.stringify(v));
  }
});

test("an open window or a free app is full content with no question asked", () => {
  for (const hasSession of [true, false]) {
    assert.deepEqual(decideAccess({ ...base, windowOpen: true, hasSession }), { view: "full", pastDue: false, signedIn: hasSession });
    assert.deepEqual(decideAccess({ ...base, free: true, hasSession }), { view: "full", pastDue: false, signedIn: hasSession });
    // the window ignores a stale past_due answer: no banner while it is open
    assert.equal(decideAccess({ ...base, windowOpen: true, hasSession, entitlement: "past_due" }).pastDue, false);
  }
  assert.equal(needsEntitlementCheck({ ...base, windowOpen: true }), false);
  assert.equal(needsEntitlementCheck({ ...base, free: true }), false);
});

test("no session cookie: the gate, and Supabase is not asked", () => {
  assert.deepEqual(decideAccess({ ...base, hasSession: false }), { view: "gate", pastDue: false, signedIn: false });
  // whatever an answer says, without a session there is no content
  for (const entitlement of ["full", "past_due", "none"]) {
    assert.equal(decideAccess({ ...base, hasSession: false, entitlement }).view, "gate", entitlement);
  }
  assert.equal(needsEntitlementCheck({ ...base, hasSession: false }), false);
  assert.equal(needsEntitlementCheck(base), true);
});

test("full and past_due render the content (past_due with the banner); none and signed_out render the gate", () => {
  assert.deepEqual(decideAccess({ ...base, entitlement: "full" }), { view: "full", pastDue: false, signedIn: true });
  assert.deepEqual(decideAccess({ ...base, entitlement: "past_due" }), { view: "full", pastDue: true, signedIn: true });
  assert.deepEqual(decideAccess({ ...base, entitlement: "none" }), { view: "gate", pastDue: false, signedIn: true });
  assert.deepEqual(decideAccess({ ...base, entitlement: "signed_out" }), { view: "gate", pastDue: false, signedIn: false });
});

test("anything we cannot read as a clear yes is never content", () => {
  for (const entitlement of [undefined, null, "", "FULL", "active", "yes", true, 1, {}, "unavailable", "full ", ["full"]]) {
    const r = decideAccess({ ...base, entitlement });
    assert.equal(r.view, "unavailable", JSON.stringify(entitlement));
    assert.equal(r.pastDue, false);
  }
});

test("only a strict true opens the window or marks an app free", () => {
  for (const v of ["true", 1, "yes", {}, [], "open"]) {
    assert.equal(decideAccess({ ...base, windowOpen: v, entitlement: "none" }).view, "gate", `windowOpen ${JSON.stringify(v)}`);
    assert.equal(decideAccess({ ...base, free: v, entitlement: "none" }).view, "gate", `free ${JSON.stringify(v)}`);
  }
});

test("protected headers: never cacheable by anyone else, noindex, varies by cookie", () => {
  assert.deepEqual({ ...PROTECTED_HEADERS }, { "Cache-Control": "private, no-store", Vary: "Cookie", "X-Robots-Tag": "noindex" });
  assert.equal(Object.isFrozen(PROTECTED_HEADERS), true);
  assert.equal(/public|s-maxage|max-age/i.test(PROTECTED_HEADERS["Cache-Control"]), false);
});

test("the gate's Log in link returns to the page the visitor was on, and only ever a same-site path", () => {
  assert.equal(loginHrefFor("/case-studies/royal-match/"), "/login/?next=%2Fcase-studies%2Froyal-match%2F");
  for (const bad of ["//evil.example", "https://evil.example/", "javascript:alert(1)", "", null, undefined, 5, "/" + "a".repeat(300)]) {
    assert.equal(loginHrefFor(bad), "/login/?next=%2F", String(bad));
  }
});

test("URL paths map to protected things, and only those", () => {
  assert.deepEqual(parseProtectedPath("/case-studies/royal-match/"), { kind: "case-study", id: "royal-match" });
  assert.deepEqual(parseProtectedPath("/case-studies/royal-match"), { kind: "case-study", id: "royal-match" });
  assert.deepEqual(parseProtectedPath("/case-studies/royal-match/goals/"), { kind: "section", id: "royal-match", section: "goals" });
  assert.deepEqual(parseProtectedPath("/systems/royal-match/"), { kind: "system", id: "royal-match" });
  for (const other of ["/case-studies/", "/", "/systems/", "/case-studies/a/b/c/", "/mechanics/streak/", "/protected/x.webp"]) {
    assert.equal(parseProtectedPath(other), null, other);
  }
});

test("app ids from a URL are plain slugs", () => {
  for (const ok of ["royal-match", "fc-mobile", "a1", "george-app-erste-serbia"]) assert.equal(isAppId(ok), true, ok);
  for (const bad of ["", "-x", "Royal", "a b", "a/b", "..", "a.b", "x".repeat(80), null, undefined, 5]) assert.equal(isAppId(bad), false, String(bad));
});
