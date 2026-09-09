/**
 * Temporary public review window: every app and mechanic's computed
 * visibility is overridden to "public" (report-only content excepted —
 * that stays fully excluded regardless, it is a content-safety gate, not a
 * paywall) so the full case study, section, and mechanic pages render for
 * every visitor while this is true.
 *
 * This is the ONLY switch. Set it back to false to close the window: every
 * app and mechanic returns to exactly the visibility value already computed
 * for it elsewhere in convert-content.mjs — nothing else to edit, no
 * per-app changes, because nothing about that underlying computation is
 * touched, only overridden on top of it.
 *
 * validate-content.mjs's "exactly two public case studies" rule is
 * suspended while this is true (see the block guarded by this same flag
 * there) and resumes, unweakened, the moment this goes back to false.
 *
 * The noindex additions made alongside opening this window (Base.astro's
 * meta tag, public/_headers, public/robots.txt) are deliberately NOT wired
 * to this flag. Closing the window here does not remove noindex — that is
 * a separate, later, deliberate step.
 */
export const REVIEW_WINDOW_OPEN = true;
