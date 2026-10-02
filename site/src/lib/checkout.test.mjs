import test from "node:test";
import assert from "node:assert/strict";
import {
  CHECKOUT_CSP, CHECKOUT_CSP_HEADER, PLAN_COPY, PLAN_IDS, STATE_REASONS, checkoutPath, checkoutResponse,
  entitlementState, formatDate, loginRedirect, parsePlan, stateCopy,
} from "./checkout.mjs";

test("two plans, and a plan name from the browser must be exactly one of them", () => {
  assert.deepEqual([...PLAN_IDS], ["quarterly", "yearly"]);
  assert.equal(parsePlan("quarterly"), "quarterly");
  assert.equal(parsePlan("yearly"), "yearly");
  for (const bad of ["monthly", "annual", "QUARTERLY", " yearly", "", null, undefined, 5, ["yearly"], "pri_01abc", "constructor", "__proto__"]) {
    assert.equal(parsePlan(bad), null, String(bad));
  }
});

test("the plan copy: quarterly shows the monthly figure and the real charge; yearly is $250/year", () => {
  assert.equal(PLAN_COPY.quarterly.price, "$25/month, billed $75 every 3 months");
  assert.equal(PLAN_COPY.yearly.price, "$250/year");
  assert.equal(JSON.stringify(PLAN_COPY).includes("15%"), false);
  assert.equal(JSON.stringify(PLAN_COPY).toLowerCase().includes("monthly"), false);
});

test("paths", () => {
  assert.equal(checkoutPath("yearly"), "/checkout/?plan=yearly");
  assert.equal(loginRedirect("/checkout/?plan=yearly"), "/login/?next=%2Fcheckout%2F%3Fplan%3Dyearly");
  // what the login page sends back survives a round trip through safeNext's rules
  assert.equal(decodeURIComponent(loginRedirect("/checkout/?plan=yearly").split("next=")[1]), "/checkout/?plan=yearly");
});

test("the CSP is report-only, names Paddle, and allows no inline script", () => {
  assert.equal(CHECKOUT_CSP_HEADER, "Content-Security-Policy-Report-Only");
  assert.match(CHECKOUT_CSP, /script-src 'self' https:\/\/cdn\.paddle\.com(;|$)/);
  assert.match(CHECKOUT_CSP, /frame-src https:\/\/\*\.paddle\.com/);
  assert.equal(/script-src[^;]*unsafe-inline/.test(CHECKOUT_CSP), false);
  assert.equal(/script-src[^;]*unsafe-eval/.test(CHECKOUT_CSP), false);
  assert.match(CHECKOUT_CSP, /object-src 'none'/);
  assert.match(CHECKOUT_CSP, /base-uri 'none'/);
});

test("every refusal state has copy and a way on; none offers a second checkout", () => {
  for (const state of STATE_REASONS) {
    const c = stateCopy(state, "2026-11-01T00:00:00Z");
    assert.ok(c.heading && c.body && c.link.href && c.link.label, state);
    assert.equal(c.link.href.startsWith("/checkout"), false, state);
    assert.equal(/subscribe now|choose a plan/i.test(c.body), false, state);
  }
  assert.equal(stateCopy("ready"), null);
  assert.equal(stateCopy("scheduled_cancel", "2026-11-01T00:00:00Z").heading, "Your subscription is active until 1 November 2026");
  assert.equal(stateCopy("scheduled_cancel", "garbage").heading, "Your subscription is active");
  assert.equal(formatDate("2026-11-01T23:59:00Z"), "1 November 2026");
});

test("the state pages link to billing only when a Paddle customer is on record", () => {
  for (const state of ["entitled", "scheduled_cancel"]) {
    const without = stateCopy(state, "2026-11-01T00:00:00Z", false);
    assert.equal(without.secondary, undefined, state);
    assert.equal(without.link.href, "/case-studies/", state);
    const withBilling = stateCopy(state, "2026-11-01T00:00:00Z", true);
    assert.deepEqual(withBilling.secondary, { href: "/account/billing/", label: "Manage billing" }, state);
    assert.equal(withBilling.link.href, "/case-studies/", state);
  }
  const due = stateCopy("past_due", undefined, true);
  assert.deepEqual(due.link, { href: "/account/billing/?to=payment", label: "Update payment method" });
  assert.deepEqual(due.secondary, { href: "/case-studies/", label: "Go to the library" });
  assert.equal(stateCopy("past_due", undefined, false).link.href, "/case-studies/");
  assert.equal(stateCopy("past_due", undefined, false).secondary, undefined);
  // paused asks the user to get in touch, and never links to billing, with or without a customer
  for (const billing of [true, false]) {
    const paused = stateCopy("paused", undefined, billing);
    assert.equal(paused.link.href, "mailto:lav@gamebizconsulting.com");
    assert.equal(paused.secondary, undefined);
    assert.ok(paused.body.includes("lav@gamebizconsulting.com"));
    assert.equal(paused.heading, "Your subscription is paused");
    assert.equal(paused.body, "To resume it, email us at lav@gamebizconsulting.com.");
    assert.equal(paused.link.label, "Email us");
    assert.equal(JSON.stringify(paused).includes("/account/billing"), false);
  }
});

test("payments Worker results become HTTP answers", () => {
  assert.deepEqual(checkoutResponse({ ok: true, transactionId: "txn_1", clientToken: "test_x", environment: "sandbox", extra: "dropped" }),
    { status: 200, body: { transactionId: "txn_1", clientToken: "test_x", environment: "sandbox" } });
  assert.deepEqual(checkoutResponse({ ok: false, reason: "unauthorized" }), { status: 401, body: { error: "unauthorized" } });
  assert.deepEqual(checkoutResponse({ ok: false, reason: "invalid_plan" }), { status: 400, body: { error: "invalid_plan" } });
  for (const reason of STATE_REASONS) assert.equal(checkoutResponse({ ok: false, reason }).status, 409, reason);
  assert.deepEqual(checkoutResponse({ ok: false, reason: "scheduled_cancel", until: "2026-11-01T00:00:00Z" }),
    { status: 409, body: { error: "scheduled_cancel", until: "2026-11-01T00:00:00Z" } });
  // anything unrecognised, or no answer at all, is "unavailable" and carries no detail
  for (const odd of [{ ok: false, reason: "customer_ambiguous" }, { ok: false }, null, undefined, "boom", { ok: "yes" }]) {
    assert.deepEqual(checkoutResponse(odd), { status: 503, body: { error: "unavailable" } }, JSON.stringify(odd));
  }
});

test("the polling answer carries only whether access exists", () => {
  assert.equal(entitlementState("full"), "active");
  assert.equal(entitlementState("past_due"), "active");
  for (const other of ["none", "", null, undefined, "paused", "FULL", 1]) assert.equal(entitlementState(other), "pending");
});
