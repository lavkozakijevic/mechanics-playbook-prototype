# Repo notes — for a session picking this up cold

This is the operational picture: how the pipeline runs, what the parsers
expect, what's checked and why, what nothing checks, and what has already
gone wrong once. It does not restate the writing rules
(`sources/prompts/stage2-website-content.md`), the standing import rules
(`CLAUDE.md`), the merge-specific bookkeeping (`sources/taxonomy-map.md`),
or the content model and page spec (`sources/page-spec.md`) — read those
directly. This is the layer underneath them: why the pipeline is shaped the
way it is, so the next change doesn't relearn it by breaking it.

`sources/page-spec.md` (committed 15 Sep 2026, previously living only in
chat and reconstructed from code comments once already — see the mechanics
index rebuild, 14 Sep 2026) is canonical. When a spec decision changes,
update that file in the same piece of work that makes the change, rather
than letting it live only in a prompt again.

## Two coexisting sources of truth, not one being replaced by the other

`data.js` (repo root) is a hand-written set of JS array literals —
`MECHANICS`, `APPS`, `SYSTEMS`, `GLOSSARY`, `CHEATSHEETS`, `SCREENSHOTS`,
`RICH_DESCRIPTIONS` — that predates the Astro rewrite and still serves the
static prototype pages at the repo root (`mechanics.html`, `case-study.html`,
`system.html`, etc.) directly, loaded as plain `<script>` tags. Nobody has
removed those pages; they are a separate, older site living in the same repo.

`site/` is the Astro rewrite. Its build script,
`site/scripts/convert-content.mjs`, loads `data.js` with `vm.runInContext`
(so it can read the arrays without `import`-ing a non-module script) and
combines it with `sources/analyses/*.md` and `sources/content/*.md` to
produce the Astro content collections under `site/src/content/`. So `data.js`
is not legacy — it is still one of the two live inputs to the current build,
and a large fraction of the ids that matter (every site mechanic id, every
`SYSTEMS` diagram) are defined there and nowhere else. Editing a mechanic
means editing `data.js`; editing an app's case study means editing
`sources/`. Confusing the two, or forgetting that `data.js` also drives the
old static pages, is the most common way to leave something half-fixed.

## Build pipeline, in order (`cd site && npm run build`)

1. `node scripts/convert-content.mjs` — reads `data.js` + `sources/`,
   writes `site/src/content/{mechanics,apps,cheatsheets,glossary,
   categories,shortcasts,settings}/*.json`. Per-collection regeneration goes
   through `beginRegenerate(name)` / `commitRegenerate(name)`: writes land in
   a `.{name}.tmp` sibling directory and only get swapped in on success. This
   exists because the script used to clear the real output directory before
   parsing anything, so a parse failure partway through a run — which will
   happen mid-migration, by construction — left the live directory empty
   until someone noticed and restored from git. Never write a collection any
   other way; the crash safety is only as good as everyone going through
   `write()`.
2. `node scripts/validate-content.mjs` — checks the *generated* JSON against
   itself (see the checks list below). Hard-fails the build.
3. `astro build` — the actual static site generation.
4. `node scripts/check-report-leak.mjs` — confirms nothing tagged
   `report-only` reached `dist/`. Hard-fails.
5. `node scripts/check-analysis-leak.mjs` — scans the rendered HTML for
   analysis-process vocabulary. Currently warns only (see below).

If you're debugging a single app, `node scripts/convert-content.mjs` alone
is a fast way to see the console warnings without waiting on `astro build`.

## The two analysis formats convert-content.mjs understands

`detectAnalysisFormat(file)` looks for a `# Pass one:` heading. If it's
there, the file is v4.1 and goes through `parseAnalysisV41` /
`parseContentV41`. If not, it's v3 and goes through `parseAnalysisV3`. There
is no third format and no version field — the heading's presence *is* the
version marker. 28 of the 34 files in `sources/analyses/` are still v3.

**v3** is a single file per app, no separate content file. A mechanic
relationship is either an inline heading, `` ### Name (`mechanic-id`) ·
Depth ``, optionally `· Thin`, or — for a "reviewed" file — a heading with no
backtick id at all, `### Name · Depth`, resolved by looking `Name` up in
`CANONICAL_MECHANIC_IDS` (`site/src/lib/canonical-mechanic-ids.mjs`). A file
only tries the reviewed form if the inline-id regex finds nothing at all, so
a file can't accidentally mix both forms for different headings. v3 also
harvests two special cases from its own `### \`id\`` "unrecognized mechanic"
headings — `hard-currency` and `soft-currency` get pulled in automatically
if the file names them, everything else in that bucket is dropped unless
`ADDITIONS` explicitly opts it in.

**v4.1** is two files: `sources/analyses/<app>.md` (the full record — Pass
one observations grouped into the nine fixed sections, Pass two tagging with
confidence/role/rationale/variants per applied library entry, Pass three
proposed new tags, and a closing `# Close: system view` narrative) and
`sources/content/<app>.md` (the published case study — teaser, description,
one-paragraph system view, one composed prose block per *applied* tag, then
the nine section pages restated for a reader in plain language, no analysis
vocabulary, no observation-tier language). `parseContentV41` reads the
second file; `parseAnalysisV41` reads the first for the header dates and the
Pass two tag→observation mapping. The published page comes entirely from
the content file — the analysis file contributes dates and tags, nothing
else renders from it directly.

## Why the analysis file's own section headings are never parsed for placement

The content file's `## <Section>` headings are matched by exact string
against `V41_SECTIONS` (`site/src/lib/v41-sections.mjs`) — the single
ordered list of the nine section slugs and names, imported by both
`convert-content.mjs` and `content.config.ts` so they can't drift apart from
each other the way they used to when each kept its own copy. No aliasing:
an unrecognized or misspelled section name in the content file throws.

The analysis file also has nine `## <Section>` headings under its own
`# Pass one:` — but they are read only to *compare* against the canonical
names (the drift check, below), never to decide where a published
observation lands. The content file is the only place section placement is
enforced, on purpose: during a re-derivation (moving an app's observations
onto the current nine-section definitions), the content file gets rewritten
first and correctly, but bringing the analysis file's own prose into exact
sync — especially its dense, cross-reference-heavy `Close: system view` — is
slower and riskier work that lags behind by design while several apps are
mid-migration at once. Enforcing hard consistency on the analysis side too
would block a correct content file on a stale analysis file that just
hasn't been re-derived yet.

The nine sections' own boundary definitions (what belongs in Access vs.
Core loop, the three fixed non-judged placements — leaderboards always
Social, rating prompts always Return triggers, rate limiters always Core
loop and automation) are at `sources/section-definitions.md`. The
canonical copy lives in `app-analysis-prompt-v4.1.md`, outside this repo —
that external copy governs if the two ever disagree — but the committed
copy here is what a session working in this repo should read, since it
was reviewed and applied across every re-derivation this repo has done.

## Every check, what it catches, why it exists

In `convert-content.mjs`, inside the v4.1 branch of the per-app loop, in
the order they run:

- **sectionCards key validator** (throw). Every key in
  `V41_APP_META[app].sectionCards` must be a slug currently in
  `V41_SECTIONS`. Added because a stale or misspelled key doesn't error
  anywhere else — `content.config.ts` types `sectionCards` as a free-form
  record, not the section enum, specifically so lead-ins can be authored
  incrementally section by section — so a rename silently rendered an empty
  card with no signal at all until this check existed.
- **Analysis/content section-name drift** (warn). Compares the analysis
  file's own Pass-one headings against the canonical nine. Warn, not throw,
  because the content file already hard-rejects a wrong name on its own
  side — this check exists purely to flag an analysis file that hasn't
  caught up yet, which is expected mid-migration, not a content bug.
- **Tag→observation id check** (throw). Every observation id a Pass-two tag
  claims must exist in the content file's own observations. Catches a
  renumbering slip immediately rather than shipping a tag pointing at
  nothing.
- **Applied-tag-needs-a-composed-block** (throw). Every tag that actually
  ends up attached to ≥1 observation must have a matching prose block under
  `## Mechanics` in the content file. A tag with no write-up would otherwise
  render as a chip linking to nothing on the summary page.
- **Composed-block-with-no-applied-tag** (warn, reverse of the above). A
  write-up exists but nothing tags it — normally stale content left behind
  by a re-derivation, not a broken page, so it warns rather than blocking.
  It also fires for a tag that never cleared the confidence gate and so
  never became "applied" at all — Canva's Group Membership does this on
  every build right now (see the confidence gate note just below) — which
  is the same warning text but a different cause; the fix in that case is
  to drop the block, not to treat the warning as describing intended
  behavior.
- **Confidence gate** (`tagPublishes`). A tag needs at least one Pass-two
  block that clears "strongly supported" or better to become an *applied*
  tag at all. "Plausible" and "unresolved" alone don't clear it — and a
  tag that doesn't clear it isn't partially published: `tagsById` skips it
  entirely (`if (!passing.length) continue`), so it never reaches any
  observation's `tags`, never becomes an applied-tag name, and correctly
  gets no composed block either — a sub-bar tag should have no page
  presence at all, chip or prose. Tiimo's Personal Data Reflection (Pass
  two confidence `plausible`) is the clean example: `tiimo.md` has no
  Personal Data Reflection block, and `mechanicWriteups` in the generated
  JSON has exactly the 5 entries that match its 5 applied tags, not 6.
  Canva's Group Membership sits at the same confidence and is just as
  unpublished — but `canva.md` still carries a written Group Membership
  block despite that, which isn't a second sanctioned shape for a sub-bar
  tag, it's exactly the case the check just above warns about. Don't take
  Canva's page as a model for how a sub-bar tag is supposed to render;
  Tiimo's is.
- **Multi-block consolidation** (warn on disagreement). One tag name can
  span several Pass-two blocks (an entry that came up more than once with
  different confidence each time). Blocks are unioned if they clear the
  gate; if their `Role:` fields disagree, both are kept and joined rather
  than one being silently chosen, with a loud warning naming the
  disagreement so it gets resolved in the source analysis, not papered over
  in the build.
- **Cross-name collision note** (info only, not a problem). Two different
  library entries resolving to the same site mechanic id — reported, never
  merged; each keeps its own tag, its own block, its own observations. This
  is exactly the state a merge lives in until its split condition fires (see
  below), and it is also how you find out a split condition *has* fired: the
  note names both library entries every time it happens, so grep the build
  log for `applies 2 library entries onto one site mechanic` after adding a
  new v4.1 app.
- **`assertNoDuplicateKeys`** on `system.html`'s `CONNECTIONS` and
  `POSITIONS` object literals (warn only, deliberately not a throw yet).
  A duplicate top-level app-id key in either object silently keeps only the
  last one at runtime — plain JS object literal semantics. This is warn-only
  because turning the check on surfaced six apps (ladder, fiton, freeletics,
  liftoff, gymverse, clash-of-clans) that already had two genuinely
  different, non-accidental connection sets authored under the same key,
  with the second silently winning and the first invisible on the live site
  the whole time. Deciding how to reconcile two real authored accounts isn't
  something this check can do; promote it to a throw only once those six are
  actually resolved, so a *new* accidental duplicate can't slip in the same
  way.

In `validate-content.mjs`, against the generated collections: required
fields and valid `visibility` values on every app and mechanic; every
mechanic id referenced anywhere — an app's relationships, a cheatsheet's
`mechanics`, a glossary term's `related`, a system map's node roles — must
exist in the mechanics collection; every screenshot/icon/hero-image path
must exist under `site/public`; a system map's `CONNECTIONS` endpoints must
be nodes that are actually on that map, and it must have a center; a
report-only app must carry no icon or screenshots; homepage settings
(`spotlightApp`, `showcaseSystem`, `freeSystemApps`, `featuredMechanics`)
must point at real, non-report-only content; and, unless
`REVIEW_WINDOW_OPEN` is true (below), exactly two apps are public —
Strava, permanently, and whichever app `ROTATING_FREE_APP` names.

`check-report-leak.mjs` confirms no report-only content or asset reached
`dist/` at all, regardless of how it might have gotten referenced.

`check-analysis-leak.mjs` scans the *visible text* of every rendered page
(script/style bodies and comments stripped, then all tags stripped) for a
short list of bare words — `narrator`, `session`, `recorded`, `recording`,
`observed` — and two exact phrases, `was not shown` and `in this review`,
with two fixed-chrome exemptions (`What was observed`, the schema's own
field label; `Nothing observed here`, the empty-section placeholder) and
two sanctioned scope-statement phrases (`in this analysis`, `during this
analysis` — the permitted first-person-plural coverage statement carved out
from the mechanics-vocabulary ban; see `stage2-website-content.md`'s rule
on scope vs. mechanics). `HARD_FAIL` is `false` — it warns loudly but does
not stop the build — because it was added after the leak had already
happened silently on all four apps live at the time, and a first pass
against the *entire* site (including every pre-v4.1 page) turns up a long
tail of legitimate uses of these words in ordinary app-behavior prose
("Strava only needs to ask for that single action," "a focus session," a
video's own "narrator" in some completely unrelated cheatsheet). Flip it to
`throw` once a clean build actually happens with zero hits — until then it
would block on content nobody has reviewed yet, most of it unrelated to the
four apps the rule was written for. In practice, every hit this session
actually caused on new content turned out cheaper to reword away from (a
focus "session" became a focus "block," a "guided session" became a "guided
video") than to special-case.

## What nothing enforces — manual, by design or by omission

- **`ROTATING_FREE_APP`** (`convert-content.mjs`) — validate-content.mjs
  enforces the *invariant* (exactly two public case studies, Strava plus
  whichever id this names), but nothing checks that the id you set is
  actually the newest addition, or that it isn't one of the thin apps
  `CLAUDE.md` says must never hold the slot. That's a human call every
  time, by that file's own standing rule.
- **`REVIEW_WINDOW_OPEN`** (`site/src/lib/review-window.mjs`) — currently
  `true`. While true, every app and mechanic (report-only excepted) renders
  public regardless of its own declared visibility, and the two-public-
  case-studies rule is suspended. It is one boolean, and closing it later
  is the only step — nothing else needs editing when it flips back to
  `false`, by design. It does *not* control `noindex` (`Base.astro`'s meta
  tag, `public/_headers`, `public/robots.txt`) — those were added alongside
  opening the window but are a separate, deliberately un-linked step, so
  closing the window does not by itself make the site indexable again.
- **`V41_APP_META[app].sectionCards`** — the key names are checked (see
  above), the prose is not. Nothing catches a lead-in that's gone stale
  after a re-derivation, or a blurb that quietly describes content that
  moved to a different section. That's a manual re-read, every time, and
  it's been wrong before (five stale lead-ins on one app in one pass).
- **`SYSTEMS` entries (`data.js`) and `system.html`'s diagram data** are
  entirely hand-authored per app and never derived from the analysis file.
  Nothing checks that a `SYSTEMS.mechanics[]` id still matches what that
  app's analysis actually applies as a tag, or that a node's `role` text
  still describes the right concept after a mechanic splits. This is how a
  stale reference survives indefinitely — see the achievements split notes
  below.
- **The Stage 2 writing pass itself** (analysis → published content file)
  is unchecked beyond the two structural things the build validates
  (section names, tag/observation consistency). Register, faithfulness to
  the analysis, whether every observation actually made it in unmerged and
  unsplit — none of that is machine-checked. It's caught, if at all, by the
  count-diff verification habit used when renumbering (below), or by a
  human re-read.
- **Corrections found during content review go directly into
  `sources/analyses/<app>.md`**, and the behavioral-design copy is updated
  to match in the same sitting — this is what `stage2-website-content.md`'s
  own footnote now says, and it's been the actual practice across six apps.
  It used to say something else: an earlier pipeline order reviewed the
  analysis before Stage 2 and wrote corrections to a separate
  `analysis-reviewed.md`, but that file never existed in this repo even
  when the footnote described it, because reviewing moved to the content
  stage before this repo's Stage 2 apps existed. Nothing enforces that a
  correction actually gets carried back into the analysis file, or that the
  behavioral-design copy is kept in sync with it — that's still a human
  step, just an accurately described one now.
- **Two prompt generations exist, at different lifecycle stages.**
  `sources/prompts/superseded/website-content-rules.md` is the older prompt
  for the v3 fused-writeup model (references `/library/approved`, writes
  into `RICH_DESCRIPTIONS`-shaped output). It's filed alongside the old
  analysis prompt in `superseded/`, but that doesn't mean it's dead: apps
  still in v3 format haven't been re-run against `stage2-website-content.md`
  yet, so `website-content-rules.md` is still the accurate description of
  how their existing write-ups were produced — check which format the
  target app's analysis file is in before assuming `stage2-website-content.md`
  applies. There is no v4.1 *analysis*-writing prompt in this repo at all
  (only the v4.1 *content* prompt, `stage2-website-content.md`) — analyses
  arrive already written, from outside this repo.

## Traps that have already bitten

- **A trailing period on `**Confidence:**`** breaks the exact-match parser
  — it expects the literal value (`directly observed`, `strongly
  supported`, `plausible`, `unresolved`) and nothing else on the line. An
  uploaded analysis with `**Confidence:** directly observed.` corrupted
  parsing across the whole tag block, not just that line.
- **Missing blank lines between Pass Two `**Field:**` lines** is worse than
  it sounds: without a blank line separating `**Confidence:**` from
  `**Role:**` from the prose paragraph from `**Rationale:**`, the field
  parser's greedy match for the confidence value swallows everything up to
  the *next* recognized field marker, which can be several fields later.
  The established v4.1 format puts a blank line after every single line in
  a Pass Two block, including after `**Tag:**` itself — an uploaded file
  that's single-spaced needs reformatting before it will parse at all, and
  the resulting error message (an "unrecognized confidence value" that's
  actually five fields of prose) doesn't obviously point at the real cause.
- **Renumbering observations wrong.** Any time observations move across a
  section boundary (a re-derivation, or moving one observation like Canva's
  O18), cross-references have to be renumbered too. The failure mode that
  actually happened: renumbering a block's own header through the same
  old→new lookup table used for its body's cross-reference citations
  double-remaps the header, since the newly-assigned number gets
  reinterpreted as an *old* number on a second pass. Fix is mechanical:
  split header from body before renumbering, run the lookup only on the
  body. Verify with an exact count-diff (every `O<n>` occurrence, old file
  vs. new, remapped through the same table, excluding each file's own
  Pass-one index list) — spot-checking alone missed this the first time it
  happened.
- **`suggestedShots` keyed by the wrong id.** Screenshot suggestions parsed
  from a v3 analysis file's own bracketed text are stored keyed by that
  file's *literal* heading id, but were being looked up by the *post-REMAPS*
  id. The moment any split (xp-leveling, then achievements) remapped an id,
  every remapped app's suggested screenshots silently went empty — the
  xp-leveling split's own code comments named this failure mode without
  fixing it; the achievements split finally did, by carrying the original
  id alongside the remapped one specifically for that one lookup.
- **The homepage's hardcoded hero carousel assumes the v3 shape.**
  `CAROUSEL_PAIRINGS` in `index.astro` calls `app.mechanics.find(...)`,
  which only exists on v3 apps — v4.1 apps carry `observations`, not
  `mechanics`, and have no such field at all. The first v4.1 app added to
  that list (Canva) crashed the *entire* homepage build with "cannot read
  properties of undefined," not just that one card. Fixed with a guard
  (`!app.mechanics` → skip silently), which is now needed protection for
  the carousel's other four entries too, whenever any of them migrates.
- **Two `SYSTEMS` entries for the same app id throws.** If an app already
  has an old, pre-v4.1 `SYSTEMS` entry in `data.js` and a new one is added
  for its v4.1 migration without removing the old one, the build throws a
  hard duplicate-`app_id` error. This has happened twice (Canva, Tiimo) —
  always grep for the app's id in `SYSTEMS` before adding a new entry, don't
  assume a fresh app has no prior entry.
- **REMAPS is single-valued, always, per app.** It maps one literal old id
  to exactly one new id per app — there is no way to express "this file's
  heading covers both halves of the split." A v3 file using the *reviewed
  canonical-name* heading form instead of the inline-id form doesn't go
  through REMAPS at all (it resolves through `CANONICAL_MECHANIC_IDS`
  directly, earlier in the same function) — which is what let Strava's
  file, which had independent `### Achievement` and `### Milestone`
  headings, silently lose whichever one its own name-based dedupe saw
  second for as long as both collapsed onto one id. Splitting the map
  fixed it for free, without a REMAPS entry, because that code path was
  never REMAPS's to fix in the first place. When deciding whether a file
  needs a REMAPS entry, check which heading form it actually uses — don't
  assume every old file needing translation looks the same.
- **Composite keys (`RICH_DESCRIPTIONS`, `SCREENSHOTS` in `data.js`,
  keyed `<mechanicId>_<appId>`) have zero validation tying them to real
  ids.** Unlike a glossary term's `related` array or a cheatsheet's
  `mechanics` array — both hard-checked by `validate-content.mjs` — a
  composite key referencing a since-removed or since-split mechanic id
  simply stops matching and returns nothing, forever, with no warning at
  build time or anywhere else. This is deliberate (that content is fused
  prose that needs a real rewrite once the owning app is re-run, not a
  mechanical id fix), but it means these two objects are the one place in
  the repo that can go silently, permanently stale and nothing will ever
  say so.

## The merge-split procedure (recurs — do this the same way each time)

A site mechanic that fuses two or three library entries lives in
`sources/taxonomy-map.md`'s merge table and in `HELD_BACK_MECHANIC_IDS`
(`site/src/lib/content.ts`) — held back from getting its own page because
publishing one page under a taxonomy the library has already moved past
would be worse than no page. It splits once **at least two apps analysed
under the current (v4.1) model apply both library entries as separate,
independently-evidenced tags** — not both inferred from one write-up, and
not from a v3 file, however suggestive. `taxonomy-map.md`'s own "When each
merge splits" section is the live tracker for how close each remaining
merge is; check it before assuming a split condition hasn't fired yet.

Once it has, in this order (both `xp-leveling`→`experience-points`+
`leveling` and `achievements`→`achievement`+`milestone` were done this
way; the second is the fuller worked example since it hit more of the
edge cases below):

1. Draft both new `MECHANICS` entries fresh from each library entry's own
   text — never split the old fused prose, it was never actually divided
   along this line to begin with. Match the register and field set of a
   few recent entries, not the oldest ones (the earliest entries in
   `MECHANICS` are noticeably terser than the current standard).
2. Pick names a product person would say. Usually that's just the library
   entry's own name, pluralized to match house style — only depart from it
   when the library name is more technical than common usage (`Comparative
   Rank` → absorbed into `Leaderboards`, not given its own product-facing
   name).
3. Cut variants hard. A library entry can list fifteen-plus; a site page
   should show four or five that are genuine structural forks. Drop: pure
   format/medium choices, the unmarked default pole of a binary axis (keep
   "Hidden," drop "Visible"), anything that's really a different,
   co-occurring mechanic rather than a variant of this one, and anything
   that would just restate the other new entry's own subject matter —
   split the variant list itself along the same line the mechanics split
   on, don't duplicate an axis across both new pages.
4. `apps: []` on each new entry copies the *old merged entry's* app list
   **unchanged**, to both new entries. Don't try to redistribute which app
   goes to which new mechanic from old, thin v3 evidence — that needs
   re-reading the analysis, which is exactly what "re-run under the
   current model" is for. Mint fresh `n` values at the end of the sequence
   for both; never reuse the retired id or its old `n` for either.
5. Fix every `paired: []` array elsewhere in `MECHANICS` that named the old
   id — pick whichever new id actually fits that pairing's own logic.
6. Fix every `APPS[].mechanics[]` array naming the old id. Unlike REMAPS,
   this is a plain array with no one-value limit — list both new ids where
   an app genuinely exhibits both, one where it clearly leans one way. If
   an app's own analysis gives *zero* support for either (this happened —
   Steam's `mechanics[]` said `achievements`, but `steam.md` never
   mentions achievements or milestones anywhere), drop it outright rather
   than inventing a classification.
7. Fix every `SYSTEMS[].mechanics[]` entry naming the old id, and the
   matching `system.html` `POSITIONS`/`CONNECTIONS` entries. Where an
   app's own v4.1 tags evidence both new concepts, split it into two nodes
   with a connection between them if the two concepts are actually
   coupled (Tiimo's marker row: the threshold and the preserved badge are
   the same object at the same moment) — otherwise a single swap is
   enough. Judge each `CONNECTIONS` entry on its own title/desc text, not
   by blindly reapplying whatever you decided for that app's flat
   `mechanics[]` list — the two don't have to agree, and forcing them to
   can misdescribe a specific connection to stay "consistent."
8. Split the two `CANONICAL_MECHANIC_IDS` entries
   (`site/src/lib/canonical-mechanic-ids.mjs`) that collapsed onto the old
   id.
9. Add per-app `REMAPS` entries (`convert-content.mjs`) for every v3 file
   still using the literal old inline id, decided from that file's own
   text using the same test the library entries draw (a discrete criterion
   preserved once satisfied, vs. a recognized point within an ongoing
   measure). First check whether the file uses the inline-id form at all —
   a file using the reviewed canonical-name heading form needs no REMAPS
   entry, it resolves through the map from step 8 directly (see the Strava
   trap above).
10. Remove the old id from `HELD_BACK_MECHANIC_IDS` — both new mechanics
    are clean one-to-one mappings and neither is held back.
11. Update `sources/taxonomy-map.md`: the mapping table, every prose count
    of "how many mechanics are merged" (there are several, and at least
    one was already stale before this split from a *previous* split not
    being fully propagated — check `mechanics/[id].astro`'s own comment
    too), add a new `## The <name> split` section modeled on the previous
    split's, and drop the now-split merge from "When each merge splits."
12. `data.js`'s `GLOSSARY[].related` and `CHEATSHEETS[].mechanics` arrays
    naming the old id are **not** the same case as `RICH_DESCRIPTIONS`/
    `SCREENSHOTS` (step 14) even though they all live in `data.js`: these
    are plain id arrays with nothing to divide, and `validate-content.mjs`
    hard-fails the build on a stale one, same as any other mechanic-id
    reference. Fix these as plain swaps; give both ids where a term or
    cheatsheet genuinely covers both concepts, since these arrays (unlike
    REMAPS) aren't limited to one value.
13. Build. Confirm: the mechanic count went up by exactly one net; nothing
    outside historical prose/comments still names the old id; the app(s)
    that drove the split now show two separate tag blocks with no
    collision note between them; and the old `/mechanics/<old-id>/` page
    is genuinely gone from `dist/` (404, not redirected — the page didn't
    move, it split into two different things, so nothing "the same content
    at a new address" exists to redirect to).
14. Leave `RICH_DESCRIPTIONS` and `SCREENSHOTS` (the `<id>_<app>` composite
    keys) alone. That's fused prose written for the old, single merged
    concept — it needs an actual rewrite once each app is re-run under the
    current model, not an id substitution, and there is nothing checking
    it in the meantime (see the trap above).
