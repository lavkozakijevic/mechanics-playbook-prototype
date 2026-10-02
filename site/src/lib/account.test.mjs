import test from "node:test";
import assert from "node:assert/strict";
import {
  ACCOUNT_COPY, ACCOUNT_PATH, BILLING_PATH, BILLING_PAYMENT_PATH, billingMessage, fetchSiteAllowed, isRedirectUrl, parsePortalTarget, portalOutcome,
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
