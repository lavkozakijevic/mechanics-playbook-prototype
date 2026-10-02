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
  delete: "Delete account",
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

// ---------------------------------------------------------------------------
// Account deletion

export const DELETE_PATH = "/account/delete/";
export const DELETED_PATH = "/account/deleted/";
/** What the user types to confirm. The payments Worker checks it again. */
export const CONFIRM_WORD = "DELETE";
/** How recent a sign-in must be to delete an account. The payments Worker checks it again. */
export const FRESH_MS = 10 * 60 * 1000;

/** Whether this sign-in is recent enough. A missing or unreadable time is not. */
export function isFreshSignIn(lastSignInAt, now = Date.now()) {
  const t = typeof lastSignInAt === "string" ? Date.parse(lastSignInAt) : NaN;
  return Number.isFinite(t) && now - t <= FRESH_MS && t - now < 60 * 1000;
}

/** The Paddle states in which a user has a subscription that deleting would cancel. */
const SUBSCRIBED_STATES = ["entitled", "scheduled_cancel", "past_due", "paused"];

/**
 * What the delete page says, from what the payments Worker reports.
 * `subscription`: a Paddle subscription is live. `manual`: access but no
 * subscription (set by hand). `billing`: there is a Paddle customer, so there
 * are invoices to download first.
 */
export function deleteSituation(status) {
  const billing = status?.billing === true;
  const state = status?.state;
  return {
    billing,
    subscription: billing && SUBSCRIBED_STATES.includes(state),
    manual: !billing && state === "entitled",
  };
}

/** The words on /account/delete/ and /account/deleted/. */
export const DELETE_COPY = Object.freeze({
  title: "Delete account",
  heading: "Delete your account",
  lead: "This deletes your account and can't be undone.",
  subscriptionBefore: "Your subscription is cancelled immediately and your access ends now. Unused time isn't refunded automatically. See the ",
  refundLabel: "Refund Policy",
  refundHref: "/refund-policy/",
  subscriptionAfter: ".",
  manual: "Your access ends with your account.",
  invoicesBefore: "Download any invoices first from ",
  invoicesLabel: "Billing",
  invoicesAfter: ".",
  confirmLabel: `Type ${CONFIRM_WORD} to confirm`,
  submit: "Delete my account",
  keep: "Keep my account",
  freshLead: "For your security, confirm it's you first. We'll email you a link that brings you back here.",
  freshSubmit: "Email me a confirmation link",
  freshSent: "Check your email for the link.",
  unavailable: "Deletion isn't available right now. Your account is still here. Try again in a moment.",
  deleted: { title: "Account deleted", heading: "Your account has been deleted", body: "Your account and its data have been removed. Any subscription has been cancelled.", link: { href: "/", label: "Back to the home page" } },
});

/** What the page tells the user for each way a deletion can fail. Rendered into the page, so the words live here and nowhere else. */
export const DELETE_ERRORS = Object.freeze({
  confirm: `Type ${CONFIRM_WORD} exactly as shown.`,
  reauth_required: "Confirm it's you first.",
  cancel_failed: `We couldn't cancel your subscription, so your account is still here. Some subscriptions may already be cancelled. Try again, or email us at ${CONTACT_EMAIL}.`,
  delete_failed: `We couldn't finish deleting your account. Any subscription is already cancelled. Try again, or email us at ${CONTACT_EMAIL}.`,
  unavailable: "Deletion isn't available right now. Your account is still here. Try again in a moment.",
  rate_limited: "Too many attempts. Wait a minute and try again.",
  network: "Something went wrong. Try again.",
  send_failed: "We couldn't send the email. Try again in a moment.",
});

/**
 * POST /api/account/delete's HTTP answer for a payments Worker result.
 * @returns {{ status: number, body: object }}
 */
export function deleteResponse(result) {
  if (result?.ok === true) return { status: 200, body: { ok: true } };
  switch (result?.reason) {
    case "unauthorized": return { status: 401, body: { error: "unauthorized" } };
    case "confirm": return { status: 400, body: { error: "confirm" } };
    case "reauth_required": return { status: 403, body: { error: "reauth_required" } };
    case "cancel_failed": return { status: 502, body: { error: "cancel_failed" } };
    case "delete_failed": return { status: 502, body: { error: "delete_failed" } };
    default: return { status: 503, body: { error: "unavailable" } };
  }
}
