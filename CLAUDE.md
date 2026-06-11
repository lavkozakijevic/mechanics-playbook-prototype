# CLAUDE.md — Mechanics Playbook

Stage 4 of the migration brief will write the full weekly import workflow
here. Until then, this file records standing rules the import workflow MUST
encode. Do not remove or weaken these when Stage 4 fleshes this file out.

## Standing rules for the weekly import

### Two free case studies — one fixed, one rotating (owner ruling, 11 Jun 2026)

- **royal-match is the permanent free case study. It never flips.**
- **The most recently added app is always open as the second, rotating free
  case study.** Exactly two case studies are public at any time: Royal Match
  plus the newest addition.
- **On every import:** set `ROTATING_FREE_APP` in
  `site/scripts/convert-content.mjs` to the newly imported app's id. That is
  the whole step — the previous holder flips back to subscriber automatically
  by no longer being named, and `validate-content.mjs` fails the build if the
  exactly-two invariant breaks (so a missed flip cannot deploy).
- Strava's system page remains a free sample (`freeSystemApps` in the
  homepage settings, written by the convert script). The homepage system map
  showcase is unchanged by rotation.

### Thin apps awaiting write-up backfill (owner ruling, 11 Jun 2026)

ladder, fiton, freeletics, liftoff, gymverse, clash-of-clans stay
`subscriber` until their write-ups are backfilled. They must not hold the
rotating free slot; if an import would hand the slot to one of them, stop
and ask the owner instead.
