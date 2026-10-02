/**
 * Everything about the account page and the billing link that can be decided
 * without a request: paths, the words shown, which payments Worker answers
 * become redirects or pages. Pure, so node --test covers it.
 *
 * Nothing here knows a Paddle key, a customer id or a portal URL before the
 * payments Worker hands one over. The browser names, at most, one of two
 * targets; the payments Worker decides what that opens.
 */
import { CONTACT_EMAIL } from "./contact.mjs";

export const ACCOUNT_PATH = "/account/";
export const BILLING_PATH = "/account/billing/";
export const BILLING_PAYMENT_PATH = "/account/billing/?to=payment";

/** "payment" or "general". Anything else, or nothing, is the general link. */
export function parsePortalTarget(raw) {
  return raw === "payment" ? "payment" : "general";
}

/**
 * A browser asking for billing from another site is refused. Opening it from a
 * link here, typing it in or following a bookmark is fine; a header that is
 * absent (older browsers, tools) is not treated as hostile, since the request
 * only ever leads to the visitor's own billing page.
 */
export function fetchSiteAllowed(secFetchSite) {
  return secFetchSite === null || secFetchSite === undefined || ["same-origin", "same-site", "none"].includes(secFetchSite);
}

const LOOPBACK = new Set(["127.0.0.1", "localhost", "[::1]"]);

/** A URL this site may redirect to: https, or loopback http (the local test setup). The payments Worker has already checked the host. */
export function isRedirectUrl(raw) {
  if (typeof raw !== "string" || raw.length > 2000) return false;
  try {
    const u = new URL(raw);
    if (u.username || u.password) return false;
    return u.protocol === "https:" || (u.protocol === "http:" && LOOPBACK.has(u.hostname));
  } catch {
    return false;
  }
}

/** The words on /account/. */
export const ACCOUNT_COPY = Object.freeze({
  title: "Your account",
  heading: "Your account",
  emailLabel: "Email",
  billingLabel: "Billing",
  billingNote: "Update your card, cancel or download invoices.",
  billingUnavailable: "Billing isn't available right now. Try again in a moment.",
  signOut: "Sign out",
  back: { href: "/case-studies/", label: "Back to the case studies" },
  unavailable: "Your account isn't available right now. Try again in a moment.",
});

const toAccount = { href: ACCOUNT_PATH, label: "Back to your account" };

/** What /account/billing/ says when it cannot send the visitor to Paddle. */
export function billingMessage(kind) {
  switch (kind) {
    case "no_customer":
      return { status: 404, heading: "No billing to manage", body: "You don't have a paid subscription on this account.", link: toAccount };
    case "ambiguous":
      return { status: 409, heading: "We can't open billing", body: `Contact us at ${CONTACT_EMAIL} and we'll sort it out.`, link: toAccount };
    case "rate_limited":
      return { status: 429, heading: "Too many attempts", body: "Wait a minute and try again.", link: toAccount };
    case "forbidden":
      return { status: 403, heading: "That link didn't work", body: "Open billing from your account page.", link: toAccount };
    case "bad_request":
      return { status: 400, heading: "That link didn't work", body: "Open billing from your account page.", link: toAccount };
    default:
      return { status: 503, heading: "Billing isn't available right now", body: "Try again in a moment.", link: toAccount };
  }
}

/**
 * What /account/billing/ does with the payments Worker's answer.
 * @returns {{ kind: "redirect", url: string } | { kind: "login" } | { kind: "page", status: number, heading: string, body: string, link: object }}
 */
export function portalOutcome(result) {
  if (result?.ok === true && isRedirectUrl(result.url)) return { kind: "redirect", url: result.url };
  const reason = result?.reason;
  if (reason === "unauthorized") return { kind: "login" };
  if (reason === "no_customer" || reason === "ambiguous") return { kind: "page", ...billingMessage(reason) };
  return { kind: "page", ...billingMessage("unavailable") };
}
