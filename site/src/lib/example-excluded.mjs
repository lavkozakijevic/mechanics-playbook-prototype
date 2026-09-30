/**
 * Apps barred from appearing as mechanic-page examples (owner ruling, 17 Jun
 * 2026). Dave cleared (owner ruling, since) once it became a complete v4.1
 * app with a full case study — the other five haven't been re-run yet: the
 * report-only finance set never renders as a worked example, and starling-
 * bank/orbit/george are barred on the same ground. cleo and acorns are
 * published as finance hero logos / case studies but must not surface as
 * examples until the owner says otherwise.
 *
 * Plain .mjs with no astro:content dependency (moved out of props.ts, 30 Sep
 * 2026), the same reason canonical-mechanic-ids.mjs and
 * held-back-mechanic-ids.mjs already live outside it: this needs to be
 * importable from tests/smoke.spec.ts too, which computes its own expected
 * mechanics-library counts and can't pull in props.ts without dragging in
 * astro:content outside Astro's own runtime.
 */
export const EXAMPLE_EXCLUDED = new Set([
  "cleo",
  "acorns",
  "starling-bank",
  "orbit",
  "george-app-erste-serbia",
]);
