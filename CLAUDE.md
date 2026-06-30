# CLAUDE.md — Mechanics Playbook

Stage 4 of the migration brief will write the full weekly import workflow
here. Until then, this file records standing rules the import workflow MUST
encode. Do not remove or weaken these when Stage 4 fleshes this file out.

## Standing rules for the weekly import

### Two free case studies — one fixed, one rotating (final owner ruling, 11 Jun 2026)

- **strava is the permanent free case study. It never flips.** Its homepage
  spotlight (`spotlightApp`) and free system page are equally permanent.
- **The most recently added app is always open as the second, rotating free
  case study.** Exactly two case studies are public at any time: Strava
  plus the newest addition.
- **The rotating slot carries three things together:** the free case study,
  the free system page (`freeSystemApps`), and the homepage system map
  showcase (`showcaseSystem`). All three follow the slot holder so the
  showcase never links into the paywall.
- **Every weekly import must include a system map** — the imported app
  immediately takes the showcase, and `validate-content.mjs` fails the build
  if the rotating app has none.
- **On every import:** set `ROTATING_FREE_APP` in
  `site/scripts/convert-content.mjs` to the newly imported app's id. That is
  the whole step — one operation, no manual steps: the convert script writes
  the showcase and free-system-page settings from the same constant, the
  previous holder flips back to subscriber automatically by no longer being
  named, and `validate-content.mjs` fails the build if the exactly-two
  invariant, the spotlight, the showcase, or the free system pages drift
  (so a missed flip cannot deploy).

### Thin apps awaiting write-up backfill (owner ruling, 11 Jun 2026)

ladder, fiton, freeletics, liftoff, gymverse, clash-of-clans stay
`subscriber` until their write-ups are backfilled. They must not hold the
rotating free slot; if an import would hand the slot to one of them, stop
and ask the owner instead.
