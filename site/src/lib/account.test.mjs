import test from "node:test";
import assert from "node:assert/strict";
import {
  ACCOUNT_COPY, ACCOUNT_PATH, BILLING_PATH, BILLING_PAYMENT_PATH, CONFIRM_WORD, DELETED_PATH, DELETE_COPY, DELETE_ERRORS, DELETE_PATH, FRESH_MS,
  billingMessage, deleteResponse, deleteSituation, fetchSiteAllowed, isFreshSignIn, isRedirectUrl, parsePortalTarget, portalOutcome,
} from "./account.mjs";
import { CONTACT_EMAIL } from "./contact.mjs";
import { loginRedirect } from "./checkout.mjs";
import { safeNext } from "./auth-config.mjs";

test("paths, and the login round trip for them", () => {
  assert.equal(ACCOUNT_PATH, "/account/");
  assert.equal(BILLING_PATH, "/account/billing/");
  assert.equal(BILLING_PAYMENT_PATH, "/account/billing/?to=payment");
  for (const p of [ACCOUNT_PATH, BILLING_PATH, BILLING_PAYMENT_PATH]) {
    const back = decodeURIComponent(loginRedirect(p).split("next=")[1]);
    assert.equal(back, p);
    assert.equal(safeNext(back), p, "the login page's own check keeps the destination");
  }
});

test("the target is payment or general, and anything else is general", () => {
  assert.equal(parsePortalTarget("payment"), "payment");
  for (const other of ["general", "cancel", "PAYMENT", " payment", "", null, undefined, 5, ["payment"], "__proto__"]) {
    assert.equal(parsePortalTarget(other), "general", String(other));
  }
});

test("a request from another site is refused; one from here, a typed address or a tool is not", () => {
  for (const ok of ["same-origin", "same-site", "none", null, undefined]) assert.equal(fetchSiteAllowed(ok), true, String(ok));
  for (const bad of ["cross-site", "", "weird"]) assert.equal(fetchSiteAllowed(bad), false, String(bad));
});

test("only an https URL, or loopback http for local tests, is ever redirected to", () => {
  assert.equal(isRedirectUrl("https://customer-portal.paddle.com/x?token=t"), true);
  assert.equal(isRedirectUrl("http://127.0.0.1:54397/portal/x"), true);
  for (const bad of ["http://customer-portal.paddle.com/x", "javascript:alert(1)", "data:text/html,x", "//evil.example", "/relative", "https://u:p@paddle.com/x", "", null, undefined, 5, "https://x.example/" + "a".repeat(2000)]) {
    assert.equal(isRedirectUrl(bad), false, String(bad));
  }
});

test("the payments Worker's answers become a redirect, a login, or a page", () => {
  assert.deepEqual(portalOutcome({ ok: true, url: "https://customer-portal.paddle.com/x", extra: "dropped" }), { kind: "redirect", url: "https://customer-portal.paddle.com/x" });
  assert.deepEqual(portalOutcome({ ok: false, reason: "unauthorized" }), { kind: "login" });
  assert.equal(portalOutcome({ ok: false, reason: "no_customer" }).status, 404);
  assert.equal(portalOutcome({ ok: false, reason: "ambiguous" }).status, 409);
  // an OK answer with a URL we would not redirect to, an unknown reason, or no answer at all: "unavailable", no detail
  for (const odd of [{ ok: true, url: "javascript:alert(1)" }, { ok: true }, { ok: false, reason: "unavailable" }, { ok: false, reason: "invalid_target" }, { ok: false }, null, undefined, "boom"]) {
    const out = portalOutcome(odd);
    assert.equal(out.kind, "page", JSON.stringify(odd));
    assert.equal(out.status, 503, JSON.stringify(odd));
  }
});

test("every message has a heading, a body and a way back, and none shows a URL, an id or a token", () => {
  for (const kind of ["no_customer", "ambiguous", "rate_limited", "forbidden", "bad_request", "unavailable", "anything else"]) {
    const m = billingMessage(kind);
    assert.ok(m.status >= 400 && m.heading && m.body && m.link.href === "/account/" && m.link.label, kind);
    assert.equal(/https?:|ctm_|sub_|token/i.test(JSON.stringify(m)), false, kind);
  }
  assert.ok(billingMessage("ambiguous").body.includes(CONTACT_EMAIL));
});

test("the account page copy: address the reader as you, never 'players', no em dash", () => {
  const all = JSON.stringify([ACCOUNT_COPY, ["no_customer", "ambiguous", "rate_limited", "forbidden", "unavailable"].map(billingMessage)]);
  assert.equal(/player|the user|—/i.test(all), false);
  assert.equal(ACCOUNT_COPY.billingLabel, "Billing");
});

// ------------------------------------------------------------ account deletion

test("the delete paths, and the login round trip for the delete page", () => {
  assert.equal(DELETE_PATH, "/account/delete/");
  assert.equal(DELETED_PATH, "/account/deleted/");
  const back = decodeURIComponent(loginRedirect(DELETE_PATH).split("next=")[1]);
  assert.equal(back, DELETE_PATH);
  assert.equal(safeNext(back), DELETE_PATH, "the login page's own check keeps the destination (the fresh email link returns here)");
});

test("the confirmation word and the window match what the payments Worker checks", () => {
  assert.equal(CONFIRM_WORD, "DELETE");
  assert.equal(FRESH_MS, 10 * 60 * 1000);
  const NOW = Date.parse("2026-10-02T12:00:00Z");
  assert.equal(isFreshSignIn("2026-10-02T11:55:00Z", NOW), true);
  assert.equal(isFreshSignIn("2026-10-02T11:49:59Z", NOW), false);
  for (const bad of [null, undefined, "", "garbage", 5, "2026-10-02T13:00:00Z"]) assert.equal(isFreshSignIn(bad, NOW), false, String(bad));
});

test("what the delete page says depends on what the payments Worker reports", () => {
  for (const state of ["entitled", "scheduled_cancel", "past_due", "paused"]) {
    assert.deepEqual(deleteSituation({ ok: true, state, billing: true }), { billing: true, subscription: true, manual: false }, state);
  }
  assert.deepEqual(deleteSituation({ ok: true, state: "entitled", billing: false }), { billing: false, subscription: false, manual: true }, "access set by hand: no subscription, no invoices");
  assert.deepEqual(deleteSituation({ ok: true, state: "ready", billing: false }), { billing: false, subscription: false, manual: false }, "never subscribed");
  assert.deepEqual(deleteSituation({ ok: true, state: "ready", billing: true }), { billing: true, subscription: false, manual: false }, "a cancelled subscriber still has invoices to download");
  assert.deepEqual(deleteSituation(null), { billing: false, subscription: false, manual: false });
});

test("the payments Worker's answers become HTTP answers, and unknown ones carry no detail", () => {
  assert.deepEqual(deleteResponse({ ok: true, cancelled: 2, extra: "dropped" }), { status: 200, body: { ok: true } });
  assert.deepEqual(deleteResponse({ ok: false, reason: "unauthorized" }), { status: 401, body: { error: "unauthorized" } });
  assert.deepEqual(deleteResponse({ ok: false, reason: "confirm" }), { status: 400, body: { error: "confirm" } });
  assert.deepEqual(deleteResponse({ ok: false, reason: "reauth_required" }), { status: 403, body: { error: "reauth_required" } });
  assert.deepEqual(deleteResponse({ ok: false, reason: "cancel_failed" }), { status: 502, body: { error: "cancel_failed" } });
  assert.deepEqual(deleteResponse({ ok: false, reason: "delete_failed" }), { status: 502, body: { error: "delete_failed" } });
  for (const odd of [{ ok: false, reason: "unavailable" }, { ok: false, reason: "customer_ambiguous" }, { ok: false }, null, undefined, "boom", { ok: "yes" }]) {
    assert.deepEqual(deleteResponse(odd), { status: 503, body: { error: "unavailable" } }, JSON.stringify(odd));
  }
});

test("every error the delete page can show has words, and the two that need the contact address carry it", () => {
  for (const code of ["confirm", "reauth_required", "cancel_failed", "delete_failed", "unavailable", "rate_limited", "network", "send_failed"]) {
    assert.ok(typeof DELETE_ERRORS[code] === "string" && DELETE_ERRORS[code].length > 10, code);
  }
  for (const code of ["cancel_failed", "delete_failed"]) assert.ok(DELETE_ERRORS[code].includes(CONTACT_EMAIL), code);
  assert.ok(DELETE_ERRORS.cancel_failed.includes("still here"), "a failed cancel says nothing was deleted");
});

test("the delete copy: you, users, no em dash, a plain refund line, and the policy link", () => {
  const all = JSON.stringify([DELETE_COPY, DELETE_ERRORS]);
  assert.equal(/player|the user|—/i.test(all), false);
  assert.equal(DELETE_COPY.subscriptionBefore + DELETE_COPY.refundLabel + DELETE_COPY.subscriptionAfter,
    "Your subscription is cancelled immediately and your access ends now. Unused time isn't refunded automatically. See the Refund Policy.");
  assert.equal(DELETE_COPY.refundHref, "/refund-policy/");
  assert.equal(DELETE_COPY.deleted.heading, "Your account has been deleted");
  assert.equal(ACCOUNT_COPY.delete, "Delete account");
});
