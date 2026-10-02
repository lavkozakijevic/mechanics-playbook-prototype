/**
 * Everything about the checkout pages that can be decided without a request:
 * which plans exist, the words shown for each state, the Content-Security-Policy
 * and how the payments Worker's answers become HTTP answers. Pure, so
 * node --test covers it.
 *
 * Nothing here knows a price id, a Paddle key or a token: the browser names a
 * plan, and the payments Worker (the only holder of Paddle's configuration)
 * decides what that plan costs.
 */

import { BILLING_PATH, BILLING_PAYMENT_PATH } from "./account.mjs";
import { CONTACT_EMAIL } from "./contact.mjs";

export const PLAN_IDS = Object.freeze(["quarterly", "yearly"]);

/** What a visitor reads for each plan. The amounts Paddle charges are set in Paddle. */
export const PLAN_COPY = Object.freeze({
  quarterly: { name: "Quarterly", price: "$25/month, billed $75 every 3 months" },
  yearly: { name: "Yearly", price: "$250/year" },
});

/** A plan name from the browser: exactly one of ours, or null. */
export function parsePlan(raw) {
  return typeof raw === "string" && PLAN_IDS.includes(raw) ? raw : null;
}

export const checkoutPath = (plan) => `/checkout/?plan=${plan}`;
export const SUCCESS_PATH = "/checkout/success/";
export const loginRedirect = (next) => `/login/?next=${encodeURIComponent(next)}`;

/**
 * Content-Security-Policy for the checkout page, and only that page (it is the
 * only one that loads Paddle.js). Sent as Report-Only while the hosts Paddle's
 * checkout really needs are confirmed in the sandbox; enforcing it is a later
 * change of header name. The Paddle hosts are the ones Paddle documents for
 * Paddle.js and its checkout frame; check the browser console on a sandbox
 * purchase for anything this misses.
 */
export const CHECKOUT_CSP_HEADER = "Content-Security-Policy-Report-Only";
export const CHECKOUT_CSP = [
  "default-src 'self'",
  "script-src 'self' https://cdn.paddle.com",
  "frame-src https://*.paddle.com",
  "connect-src 'self' https://*.paddle.com",
  "img-src 'self' data: https://*.paddle.com",
  "style-src 'self' 'unsafe-inline' https://*.paddle.com",
  "font-src 'self' data: https://*.paddle.com",
  "object-src 'none'",
  "base-uri 'none'",
  "form-action 'self'",
].join("; ");

export function formatDate(iso) {
  const t = Date.parse(iso);
  if (Number.isNaN(t)) return "";
  return new Date(t).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

/**
 * What to say instead of checkout. Never offers a second subscription.
 * `billing` is whether a Paddle customer is on record: only then is there a
 * billing page to link to. A link is { href, label }; `secondary` is a smaller
 * one beneath the button.
 */
export function stateCopy(state, until, billing = false) {
  const library = { href: "/case-studies/", label: "Go to the library" };
  const manage = billing ? { href: BILLING_PATH, label: "Manage billing" } : undefined;
  switch (state) {
    case "entitled":
      return { heading: "You already have access", body: "Your subscription is active, so there's nothing more to buy.", link: library, ...(manage ? { secondary: manage } : {}) };
    case "scheduled_cancel": {
      const date = formatDate(until);
      return {
        heading: date ? `Your subscription is active until ${date}` : "Your subscription is active",
        body: "You've chosen to cancel, and you keep full access until then. You can subscribe again after that date.",
        link: library,
        ...(manage ? { secondary: manage } : {}),
      };
    }
    case "past_due":
      return {
        heading: "Your last payment didn't go through",
        body: "You still have access for now. Update your payment method to keep it.",
        ...(billing ? { link: { href: BILLING_PAYMENT_PATH, label: "Update payment method" }, secondary: library } : { link: library }),
      };
    case "paused":
      return {
        heading: "Your subscription is paused",
        body: `You can't start a new subscription while this one exists. To resume it, contact us at ${CONTACT_EMAIL}.`,
        link: { href: `mailto:${CONTACT_EMAIL}`, label: "Email us" },
      };
    default:
      return null;
  }
}

/** The payments Worker's refusal reasons that mean "no checkout, show a message". */
export const STATE_REASONS = Object.freeze(["entitled", "scheduled_cancel", "past_due", "paused"]);

/**
 * POST /api/checkout's HTTP answer for a payments Worker result.
 * @returns {{ status: number, body: object }}
 */
export function checkoutResponse(result) {
  if (result?.ok === true) {
    return { status: 200, body: { transactionId: result.transactionId, clientToken: result.clientToken, environment: result.environment } };
  }
  const reason = result?.reason;
  if (reason === "unauthorized") return { status: 401, body: { error: "unauthorized" } };
  if (reason === "invalid_plan") return { status: 400, body: { error: "invalid_plan" } };
  if (STATE_REASONS.includes(reason)) return { status: 409, body: { error: reason, ...(result.until ? { until: result.until } : {}) } };
  return { status: 503, body: { error: "unavailable" } };
}

/**
 * What the polling endpoint tells the browser. Only whether access exists; the
 * browser never receives, and never decides, anything else. 'past_due' keeps
 * access, so it counts as active here.
 */
export function entitlementState(answer) {
  return answer === "full" || answer === "past_due" ? "active" : "pending";
}
