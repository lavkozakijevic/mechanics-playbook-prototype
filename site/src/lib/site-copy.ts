/**
 * Reader-facing copy that's repeated across more than one component or
 * page. Centralized here (voice-rewrite prep, Step 2, 30 Sep 2026) so the
 * coming copy rewrite changes each sentence once, instead of hunting across
 * every file that happened to carry its own copy of it.
 *
 * Wording is unchanged from whichever existing instance was kept as
 * canonical — this step consolidates duplicates, it doesn't rewrite them.
 * Where two instances had drifted into slightly different wording, the one
 * kept is the one on the page a visitor is most likely to see; see the
 * commit message for the exact variant each shared string replaced.
 *
 * Importable from both .astro and .jsx files (plain Vite/Astro ESM, no
 * astro:content dependency), the same reason lib/props.ts is plain .ts.
 */

// The core site tagline. Kept in the wording used on the homepage's own
// <title> (the page a visitor is most likely to see first) — shorter than
// the "of how real apps build engagement" phrasing the exit popup and the
// subscribe page had each drifted into independently. No trailing period,
// so it composes cleanly into a heading, a title, or a full sentence alike;
// callers that need it as a standalone sentence add their own period.
export const SITE_TAGLINE = "Documented breakdowns of real apps, mechanic by mechanic";

// The weekly-newsletter pitch, shown in the footer's NewsletterBlock (every
// page) and in ExitIntentPopup. Kept in NewsletterBlock's wording — the
// unconditional, always-rendered instance — over the exit-intent popup's,
// which had drifted to "the most interesting ones" instead of "mechanics
// from each".
export const NEWSLETTER_PITCH =
  "Each week we add three fresh breakdowns of how successful apps implement game mechanics. Get the most interesting mechanics from each, straight into your inbox.";

// The newsletter consent checkbox label — identical in both places already,
// simply centralized.
export const NEWSLETTER_CONSENT =
  "I agree to receive occasional relevant emails from Appservatory about behavioral design and engagement mechanics.";

// The paid-tier CTA label, repeated verbatim across the category landing
// template and the gamification pillar page.
export const ACCESS_LIBRARY_CTA = "Access the library";

// The generic locked-card CTA label used on every index/grid page (case
// studies, systems, cheatsheets, mechanic "seen in the wild" cards).
export const SUBSCRIBE_TO_EXPLORE_CTA = "Subscribe to explore";

// ---- Subscribe-gate copy -------------------------------------------------
// Every full-page paywall gate (a locked case study, section, or system)
// shares the same eyebrow and the same closing clause ("Subscribe to
// unlock this and every other X in the library"), each naming what it's
// hiding. GATE_HEADING is a template per kind, not a plain string, since
// each kind's heading has its own shape ("Read the full X breakdown" vs
// "Explore the X system map"); GATE_DETAIL is a plain string per kind
// except "section", which needs the app name inline mid-sentence.

export const GATE_EYEBROW = "Subscribers only";

export const GATE_HEADING = {
  breakdown: (appName: string) => `Read the full ${appName} breakdown`,
  system: (appName: string) => `Explore the ${appName} system map`,
} as const;

// "breakdown" is kept in CaseStudySummaryV41.astro's wording (the v4.1
// page every live app renders) over CaseStudyDetail.jsx's own, which
// described "every mechanic in the loop with annotated screenshots" —
// CaseStudyDetail.jsx is the v3-only legacy path no public app reaches
// today (see EXAMPLE_EXCLUDED, lib/props.ts).
export const GATE_DETAIL = {
  breakdown:
    "The complete case study walks every observation behind each mechanic, with the system view and the full record of every section. Subscribe to unlock this and every other breakdown in the library.",
  system:
    "The full system map draws every mechanic in the loop and the connections that carry the most weight, with the design logic behind each one. Subscribe to unlock this and every other system in the library.",
  section: (appName: string) =>
    `This section is part of the full ${appName} breakdown. Subscribe to unlock it and every other section in the library.`,
} as const;
