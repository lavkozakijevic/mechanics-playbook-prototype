/**
 * Who sees what, decided in one place. Pure (no Supabase, no Cloudflare), so
 * node --test covers it.
 *
 * Content that is not free is rendered on request by the site Worker and never
 * written to a static file. For each such request the Worker works out:
 *   - is the review window open? (the REVIEW_WINDOW variable, below)
 *   - is the app free? (declared public: strava and the rotating free slot)
 *   - is there a session cookie?
 *   - what does Supabase say this visitor is entitled to?
 * and this module turns those answers into one of three views.
 */

/**
 * The review window: a runtime variable on the site Worker, set in the
 * Cloudflare dashboard. Exactly "open" opens it; anything else (missing, empty,
 * "closed", "OPEN", "true") is closed, so a missing or mistyped value fails
 * closed. While open, every visitor gets full content and no entitlement check
 * is made. It does not touch what is built: protected content is never static.
 */
export function isReviewWindowOpen(value) {
  return value === "open";
}

/** What Supabase's current_entitlement() can say, plus the two ways of not knowing. */
export const ENTITLEMENT_ANSWERS = Object.freeze(["full", "past_due", "none"]);

/**
 * @param {{ windowOpen: boolean, free: boolean, hasSession: boolean, entitlement?: string }} input
 *   entitlement: "full" | "past_due" | "none" from Supabase; "signed_out" when
 *   Supabase refused the visitor's token; anything else (or undefined) means the
 *   answer could not be had.
 * @returns {{ view: "full" | "gate" | "unavailable", pastDue: boolean, signedIn: boolean }}
 *   view "full": render the content. "gate": render the name, summary and the
 *   subscribe card only. "unavailable": render nothing but a plain 503 message.
 *   signedIn: the gate offers "Log in" only when this is false.
 */
export function decideAccess({ windowOpen, free, hasSession, entitlement }) {
  if (windowOpen === true || free === true) return { view: "full", pastDue: false, signedIn: Boolean(hasSession) };
  if (!hasSession) return { view: "gate", pastDue: false, signedIn: false };
  switch (entitlement) {
    case "full":
      return { view: "full", pastDue: false, signedIn: true };
    case "past_due":
      return { view: "full", pastDue: true, signedIn: true };
    case "none":
      return { view: "gate", pastDue: false, signedIn: true };
    case "signed_out":
      return { view: "gate", pastDue: false, signedIn: false };
    default:
      // Supabase down, a surprising answer, no answer: never content.
      return { view: "unavailable", pastDue: false, signedIn: true };
  }
}

/** Whether the Worker needs to ask Supabase at all for this request. */
export function needsEntitlementCheck({ windowOpen, free, hasSession }) {
  return windowOpen !== true && free !== true && hasSession === true;
}

/**
 * Headers on every protected response, whatever the status (page, gate,
 * redirect, image, 503). private + no-store keeps it out of every shared cache,
 * Vary: Cookie covers any cache that ignores that, noindex is the site-wide
 * pre-launch rule.
 */
export const PROTECTED_HEADERS = Object.freeze({
  "Cache-Control": "private, no-store",
  Vary: "Cookie",
  "X-Robots-Tag": "noindex",
});

/** A same-site path for "Log in", returning the visitor to where they were. */
export function loginHrefFor(pathname) {
  const safe = typeof pathname === "string" && pathname.startsWith("/") && !pathname.startsWith("//") && pathname.length <= 200 ? pathname : "/";
  return `/login/?next=${encodeURIComponent(safe)}`;
}

/** The URL path of a protected thing -> what it is, or null. */
export function parseProtectedPath(pathname) {
  const parts = String(pathname).split("/").filter(Boolean);
  if (parts[0] === "case-studies" && parts.length === 2) return { kind: "case-study", id: parts[1] };
  if (parts[0] === "case-studies" && parts.length === 3) return { kind: "section", id: parts[1], section: parts[2] };
  if (parts[0] === "systems" && parts.length === 2) return { kind: "system", id: parts[1] };
  return null;
}

/** An app id from a URL: lower-case letters, digits and hyphens only. */
export const isAppId = (v) => typeof v === "string" && /^[a-z0-9][a-z0-9-]{0,60}$/.test(v);
