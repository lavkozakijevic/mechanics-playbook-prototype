# Taxonomy map — site mechanics ↔ mechanics library

## Why these two taxonomies differ, and why the split is deferred

The site's mechanic library was written by hand, one page per concept,
before the 36-entry mechanics library existed as a formal classification
document. The library now keeps as separate, strictly-bounded entries —
each with its own required conditions, non-required conditions, exclusion
conditions, and ruled-on borderline cases — several concepts the site
originally wrote up together on one page, because at the time nothing
forced the distinction. Energy and Lives are both "what happens when
attempts run out"; Season Content Pass and Seasonal Progression Pass are
both battle-pass shapes; Achievement and Milestone are both permanent
progress markers. Five site mechanics still carry this kind of fused
writing today, together covering two or three library entries apiece.

Splitting a merged page is not a formatting exercise. The existing prose
leans on whichever side of the merge the original app analyses actually
supported, and typically says little or nothing about the other side (see
the per-mechanic notes below). Writing the missing side now, ahead of the
apps that would evidence it being re-analysed under the current model,
would mean writing content that gets rewritten again once that evidence
exists. So the split is deferred until more apps are re-analysed, and this
document exists so that, when it happens, splitting is a lookup against a
known mapping rather than a rediscovery of which entries were fused and why.

**Evidence key:** *confirmed* means the mapping was already forced by a real
reviewed analysis file using that library name as a heading, and lived in
`CANONICAL_MECHANIC_IDS` (`site/scripts/convert-content.mjs`) before this
document and the completed map were written. *Inferred* means the mapping
was derived from the library entry's own name, definition, and
required/non-required conditions against the site mechanic's tagline,
description, and variants — no analysis file has needed to resolve that
name yet. `CANONICAL_MECHANIC_IDS` was completed for all 36 entries
alongside this document (11 Sep 2026), so every mapping below is now
resolvable in code either way; that code change does not change which
mappings were empirically forced versus reasoned out, which is what
"confirmed" and "inferred" track here.

## Site mechanic → library entry mapping (34 site mechanics)

| site mechanic (`id`) | library entry / entries covered | evidence |
|---|---|---|
| streak | Streak | confirmed |
| energy-lives | Energy, Lives | inferred |
| daily-login-reward | Daily Login Rewards | inferred |
| loot-box | Loot Box | confirmed |
| variable-reward | Variable Reward Outcome | confirmed |
| daily-weekly-quests | Daily / Weekly Quests | confirmed |
| set-collection | Set Collection | inferred |
| achievement | Achievement | confirmed |
| milestone | Milestone | confirmed |
| challenges | Challenge | confirmed |
| experience-points | Experience Points | confirmed |
| leveling | Leveling | confirmed |
| season-pass | Season Content Pass, Seasonal Progression Pass | inferred |
| piggy-bank | Piggy Bank | inferred |
| first-purchase-bonus | First-Purchase Bonus | inferred |
| monthly-card | Daily Claim Pack | inferred |
| credits-tokens | Spendable Credits and Tokens | inferred |
| cosmetics | Cosmetic Customization | inferred |
| ads | Rewarded Advertisement | inferred |
| social-feed | Social Feed | confirmed |
| community-groups | Community Space, Group Membership | confirmed (Group Membership); inferred (Community Space) |
| clans-guilds | Clan / Guild | inferred |
| leaderboards | Leaderboard, Comparative Rank | confirmed |
| gifting | Gifting | inferred |
| hard-currency | Hard Currency | inferred |
| soft-currency | Soft Currency | inferred |
| passive-construction | Passive Construction | inferred |
| referral-boost | Referral Boost | inferred |
| earning-tasks | Earning Tasks | inferred |
| personal-data-reflection | Personal Data Reflection | inferred |
| companion | Companion | inferred |
| progression-fund | Progression Fund | inferred |
| shareable-win | Shareable Win | confirmed |
| expert-guidance | Expert Guidance | confirmed |

28 site mechanics, not 27 — `personal-data-reflection` was added in the
step immediately before this one, closing what was then the library's only
orphaned entry. It is a clean, one-to-one mapping and is not one of the
merged mechanics held back below.

30 site mechanics, not 28 — `companion` and `progression-fund` were added
as new library entries with no prior site mechanic. Both are clean,
one-to-one mappings and neither is one of the merged mechanics held back
below.

31 site mechanics, not 30 — `xp-leveling` split into `experience-points`
and `leveling` on 13 Sep 2026 (see "The xp-leveling split" below), a
one-into-two split that adds one to the total while removing one merge.
Both new mechanics are clean, one-to-one mappings and neither is held back.

32 site mechanics, not 31 — `achievements` split into `achievement` and
`milestone` on 13 Sep 2026 (see "The achievements split" below), the same
one-into-two shape as the xp-leveling split. Both new mechanics are clean,
one-to-one mappings and neither is held back.

34 site mechanics, not 32 — Shareable Win and Expert Guidance are now in
the table above. Both are brand-new one-to-one mappings, the same shape as
Companion and Progression Fund: no prior site mechanic, no merge involved.
Both are *confirmed* rather than *inferred*: Canva applies Shareable Win
and Tiimo applies Expert Guidance, each as its own tag under the current
(v4.1) model. An earlier version of this document flagged their absence
from the table as a known gap rather than closing it; this entry replaces
that flag.

35 site mechanics, not 34 — `variable-reward` split into `loot-box` and
`variable-reward` on 14 Sep 2026 (see "The variable-reward split" below), a
one-into-two split that adds one to the total while removing one merge,
the same shape as the xp-leveling and achievements splits. Both new
mechanics are *confirmed* rather than *inferred*: Capybara Go and FC
Mobile each apply Loot Box and Variable Reward Outcome as separate,
independently-evidenced tags under the current (v4.1) model.

## The four merged mechanics (split deferred)

**leaderboards** — Leaderboard, Comparative Rank. The tagline is pure
list-framing (*"a ranked list... publicly comparable"*), but the
description shifts into personal-rank/loss-aversion framing (*"Rank is
identity... the threat of falling creates persistent return pressure"*) —
the Comparative Rank side. Every listed variant (global, friend,
clan/league, weekly-reset leaderboard) is leaderboard-shaped, though; none
represents standing without a visible list.

**community-groups** — Community Space, Group Membership. Tagline covers
both, but the description and all four variants (public clubs, private
groups, interest-based communities, local groups) describe group types and
belonging, not the shared venue itself. Community Space has no independent
content to draw from.

**energy-lives** — Energy, Lives. The description is entirely about the
energy-resource economy (units, regeneration, depletion as purchase
trigger). Of three variants, two are energy-specific and only one ("Lives
lost on failure") represents Lives.

**season-pass** — Season Content Pass, Seasonal Progression Pass. Tagline
and description both frame this as a progression/reward-track system
(*"advances the user along a progression of rewards"*), matching Seasonal
Progression Pass. Nothing in the text represents a content-delivery framing
(Season Content Pass).

## Library entries with no site mechanic

**Variable Reward Schedule.** Retired from the `variable-reward` merge
table on 14 Sep 2026 rather than carried forward as a permanently
unmeetable open item: no app under the current model, v3 or v4.1, has ever
applied it, and a schedule page with no evidence, no remap source and no
app list would be worse than an empty page with a tested definition. It
becomes a page when an app under the current model carries it. Personal
Data Reflection was the prior case in this section and now has a page
(`personal-data-reflection`).

## Site mechanics with no library entry

None. Limited-Time Events was the only site mechanic not traceable to a
library entry (see the retirement note below); every remaining site
mechanic now maps to at least one library entry, per the table above.

## Note on Limited-Time Events (retired 15 Sep 2026)

Limited-Time Events has been retired from the site and moved to the
archive. It is no longer an approved mechanic, and no future analysis will
apply it. Unlike Advertisement Exposure below, this was never a
library-level retirement — the page predated the 36-entry library and had
no library entry to begin with, which made it the only site mechanic not
traceable to one. Retiring the page rather than writing a library entry
for it closes that gap by removing the exception instead of resolving it.

The case for retirement rather than write-up: its own `apps` list named
eight carriers. Four (strava, fc-mobile, royal-match, clash-of-clans) have
since been re-analysed under the current model, and none of the four
carries it — in three of them, Seasonal Progression Pass absorbed the
seasonal/event framing the old page claimed. Zero confirmed carriers
survived re-analysis. The page's own copy also asserted outcomes no
analysis ever supported: that missing an event creates a permanent gap in
standing, that it overrides low-motivation days, that the event's expiry
does psychological work permanent content cannot — the same kind of
outcome-claiming language already stripped from every other mechanic page
on the site.

The remaining four apps on its old `apps` list (solitaire-grand-harvest,
chrome-valley-customs, swgoh, fiton) are still on the old (pre-v4.1)
model and were not part of the four re-analysed above. If one of them, on
re-analysis, turns out to carry a genuine timed-event pattern that Seasonal
Progression Pass does not already cover, it returns as a Pass Three
proposal against the library, backed by that evidence — not as this entry
restored. The retired entry's full original text is preserved as a dated
comment in `data.js`, in place of the live entry, so the original thinking
stays visible even though the page is gone.

References to it have been removed from: the `paired` arrays of
`challenges`, `season-pass`, `clans-guilds`, and `passive-construction`;
the legacy `mechanics` lists of the eight apps that named it; the `related`
arrays of the `fomo`, `scarcity-bias`, and `present-bias` glossary entries
(the `fomo` definition's own outcome-claiming sentence was also rewritten);
the four system-view `mechanics` nodes and the matching `system.html`
positions and connection edges for solitaire-grand-harvest, fiton,
chrome-valley-customs, and swgoh; the five now-unreachable
`RICH_DESCRIPTIONS` app-detail blocks keyed to it; the `DROPS` entry
`limited-time-events|strava` and the `featuredMechanics` homepage list in
`site/scripts/convert-content.mjs`. `CANONICAL_MECHANIC_IDS` never had an
entry for it — there was no library name for it to resolve to, so there is
nothing to null out there, unlike Advertisement Exposure.

## Note on Advertisement Exposure (retired 13 Sep 2026)

Advertisement Exposure has been retired from the mechanics library and
moved to the archive. It is no longer an approved entry, and no future
analysis will apply it. `ads` now maps to a single library entry, Rewarded
Advertisement, and is no longer a merged mechanic — it has come out of the
held-back set above, and its split condition no longer applies because
there is nothing left on the other side to split out.

`CANONICAL_MECHANIC_IDS` already mapped `"Advertisement Exposure": null`
before this retirement. That mapping was written for one app (Wakeout),
whose partner cross-promotions and subscription upsell don't count as an ad
unit under the content rules, and it was left provisional: a future app
whose analysis genuinely observed generic ad exposure would have needed the
mapping revisited, since as written it resolved to "not published" rather
than to `ads`. That question is now closed rather than open. The null is
permanently correct: there is no entry left for the name to resolve to, so
any analysis that names it, past or future, correctly renders unpublished.

One existing case is affected: Strava's analysis, still in the old (v3)
format, carries an active Advertisement Exposure tag applied under the
entry before its retirement. That tag now resolves to nothing, which is
correct rather than a gap to fix — the entry it named no longer exists.
This resolves on its own once Strava is re-run under the current (v4.1)
model, since a fresh analysis has no route to apply a retired entry.

## The xp-leveling split (13 Sep 2026)

`xp-leveling` split into two clean, one-to-one mechanics: `experience-points`
(Experience Points) and `leveling` (Leveling). The split condition below
fired on real evidence: Capybara Go and Clash of Clans each apply
Experience Points and Leveling as separate, independently-evidenced tags
under the current (v4.1) model — Capybara Go's analysis carries both as
distinct applied tags with their own observations, and Clash of Clans'
does too once it is staged. Two apps meeting the condition independently is
what moved both mappings from *inferred* to *confirmed* in the table above.

The old fused page never separated "the value that accumulates" from "the
state it moves you into," so the two new pages were written fresh against
each library entry's own definition rather than divided from the old
prose (full reasoning and the two entries themselves were shown for review
before writing). Both new mechanics carry the old fused entry's app list
unchanged, since only Capybara Go and Clash of Clans have real per-tag
evidence separating the two; for the rest (fc-mobile, fortune-city,
freeletics, liftoff, gymverse) no analysis narrows which specific one
applies, so neither entry's list overclaims a distinction that isn't
evidenced.

Older v3 analysis files still carry the literal `xp-leveling` inline id in
a `### ... (\`xp-leveling\`) · Depth` heading, unrewritten: clash-of-clans,
fc-mobile, gymverse, and liftoff resolve to `leveling`;
solitaire-grand-harvest and tiimo resolve to `experience-points`. Each was
decided from that file's own observed text (a named, assigned level or
rank state versus a running accumulation toward a threshold with no named
level), and is handled by a per-app entry in `REMAPS`
(`site/scripts/convert-content.mjs`) rather than by editing the analysis
files — REMAPS exists exactly for this case, an id split after the file
was written. Without it, any of these would throw "unknown mechanic
xp-leveling" the moment the id stopped being registered. Wakeout's
analysis was not one of these: it already uses the reviewed canonical name
"Experience Points" rather than the inline id, which resolves through
`CANONICAL_MECHANIC_IDS` directly and needed no remap. Capybara Go was not
one of these either — its analysis was migrated to the v4.1 format and
never reaches the v3 parsing path at all.

Freeletics was one of these, resolving to `leveling`, until its own
migration to v4.1 (18 Sep 2026): its fresh analysis confirms the same
disposition the old remap assumed — a named, displayed level shown on the
user's own profile and on every other athlete's, strongly supported — so
unlike Steam's case, the original assignment held up on the merits. Its
`REMAPS` entry has been removed anyway, since freeletics.md is now v4.1
and never reaches this path regardless of the entry's value.

Steam was originally in the `experience-points` bucket above, on the same
"accumulation with no named level" reasoning, until its own migration to
v4.1 (18 Sep 2026) found that reasoning wrong on the merits as well as
moot: the fresh analysis shows a named, displayed profile level (Leveling,
strongly supported) alongside a separate, thinner XP value (Experience
Points, plausible only), so the original file's write-up was read too
narrowly when the remap was first decided. Steam's `REMAPS` entry has been
removed rather than corrected in place, since steam.md is now v4.1 and
never reaches this path regardless of what the entry says.
Solitaire-grand-harvest's own write-up shows the same pattern, named farm
and solitaire levels with stated unlock thresholds, not bare accumulation,
but it hasn't been migrated to v4.1 yet and its `REMAPS` entry is still
live, so correcting it is left for that app's own migration rather than
folded into Steam's.

The old `/mechanics/xp-leveling/` URL 404s rather than redirects. Nothing
is indexed there yet, so there is no inbound-link cost to weigh, and a
redirect would assert that one of the two new pages is "the same content
at a new address," which isn't true of either — the page didn't move, it
split into two different things.

## The achievements split (13 Sep 2026)

`achievements` split into two clean, one-to-one mechanics: `achievement`
(Achievement) and `milestone` (Milestone). The split condition fired on
real evidence: Clash of Clans and Tiimo each apply Achievement and
Milestone as separate, independently-evidenced tags under the current
(v4.1) model — Clash of Clans' analysis carries the achievement list and
trophy leagues as distinct observations under distinct tags, and Tiimo's
carries its marker row tagged with both, the badge state and the
threshold recognition landing on the exact same object at the exact same
moment. Two apps meeting the condition independently is what moved both
mappings from *inferred* to *confirmed* in the table above.

The old fused page treated the two as synonyms rather than separating
them (*"Each completed milestone is a named, permanent record of
accomplishment"* uses "milestone" to define what an achievement is), so
the two new pages were written fresh against each library entry's own
definition rather than divided from the old prose (both entries were
shown for review before writing, including the reasoning for which of
each library entry's 16 variants earned a page). Both new mechanics carry
the old fused entry's app list unchanged, since re-deriving which of the
19 already-listed apps exhibited which specific concept would mean
re-reading each analysis, which is out of scope for an id split; it
resolves the same way the xp-leveling split's app list did, as each app
is re-run.

Older v3 analysis files still carry the literal `achievements` inline id
in a `### Achievements (\`achievements\`) · Depth` heading, unrewritten:
calm, gymverse, fc-mobile, liftoff, swgoh, uptime, fiton,
fortune-city, match-creek-motors, fifa-panini-collection, and
subway-surfers resolve to `achievement`; insight-timer,
chrome-valley-customs, acorns, royal-match, wispr-flow, and
solitaire-grand-harvest resolve to `milestone`. Each was decided from that
file's own observed text (a discrete criterion preserved once satisfied,
apart from whatever activity produced it, versus a recognized point within
an ongoing measure), and is handled by a per-app entry in `REMAPS`
(`site/scripts/convert-content.mjs`) rather than by editing the analysis
files. Several of these describe both shapes at once (fc-mobile, uptime,
fifa-panini-collection); the remap follows whichever framing the file's
own words lead with, since REMAPS can only carry one id per app per
heading. Without it, any of these would throw "unknown mechanic
achievements" the moment the id stopped being registered.

Ladder was one of these, resolving to `achievement`, until its own
migration to v4.1 (18 Sep 2026): its fresh analysis uses the reviewed
canonical name "Achievement" directly, and confirms the same disposition
the old remap assumed, a badge awarded on a stated criterion. Its
`REMAPS` entry has been removed rather than left in place, since ladder.md
is now v4.1 and never reaches this path regardless of what the entry says
— the same retirement already applied to royal-match, gymverse, fc-mobile
and acorns above.

Freeletics was also one of these, resolving to `achievement`, until its
own migration to v4.1 (18 Sep 2026) — but unlike Ladder's, its old
assignment does not hold up: the fresh analysis leaves Achievement
unresolved rather than applying it ("no achievement, criterion, locked
entry or attained state is narrated on an account that has done no
workouts"). The old remap was never a settled case, just an inline id
force-mapped onto whichever of the two split concepts the v3 write-up
leaned toward. Its `REMAPS` entry has been removed for the same mootness
reason as the others.

Strava's and Wakeout's analyses were not among the 19: both use the
reviewed canonical-name heading form (`### Milestone · ...`, `###
Achievement · ...`) rather than the inline id, resolved through
`CANONICAL_MECHANIC_IDS` directly. This incidentally fixes a live bug
rather than just avoiding a new one: Strava's analysis carries both
headings, and because both collapsed onto the single id `achievements`
before this split, the parser's own dedupe silently dropped whichever one
it saw second — Strava's Achievement evidence was being discarded on the
published page. Splitting the map recovers it with no other change
needed. Neither Clash of Clans, Canva, Tiimo, Capybara Go, Dave, nor Cleo
appears in `REMAPS` for this split — all six are v4.1 and never reach the
v3 parsing path at all; Canva applies Achievement only (no Milestone),
and Capybara Go applies Milestone only (no Achievement), per each app's
own v4.1 tags.

A separate, longstanding bug surfaced while tracing this split rather
than being caused by it: the per-app `suggestedShots` (screenshot
suggestions parsed from an analysis file's own bracketed text) were being
looked up by the post-remap id, while they're stored keyed by the file's
literal pre-remap heading id — silently returning empty for every
remapped app, the same failure mode the xp-leveling split's own comments
already named but didn't fix. Fixed in the same pass by keeping the
original id alongside the remapped one specifically for that lookup
(`site/scripts/convert-content.mjs`). The composite-keyed `RICH_DESCRIPTIONS`
and `SCREENSHOTS` entries (`data.js`, keyed `achievements_<app>`) are a
different, larger gap left deliberately alone: those need the fused prose
itself rewritten per app, not just a lookup key changed, and that's what
each app's own v4.1 re-run handles.

The old `/mechanics/achievements/` URL 404s rather than redirects, for the
same reason as `/mechanics/xp-leveling/`: the page didn't move, it split
into two different things, and neither successor is "the same content at
a new address."

## The variable-reward split (14 Sep 2026)

`variable-reward` fused three library entries: Variable Reward Schedule,
Variable Reward Outcome, and Loot Box. The split condition fired on real
evidence: Capybara Go and FC Mobile each apply Loot Box and Variable
Reward Outcome as separate, independently-evidenced tags under the current
(v4.1) model. Before writing anything, the shape question had to be
answered first: was this a two-way or three-way split? Variable Reward
Schedule has no evidence in any app under the current model, v3 or v4.1 —
confirmed by an exhaustive search across every analysis file for both the
canonical-name heading and the applied tag, turning up zero instances. The
split is two-way: `loot-box` (Loot Box) and `variable-reward` (Variable
Reward Outcome). Variable Reward Schedule is retired rather than given an
empty third page (see "Library entries with no site mechanic" above).

The old fused page fused uncertainty of outcome (Variable Reward Outcome)
with uncertainty of timing (Variable Reward Schedule) and with the
container that delivers them (Loot Box) into one indivisible mechanism
(*"slot machines... unpredictability"*), so very little of it survived —
both new pages were written fresh against each library entry's own
definition rather than divided from the old prose (both entries, the name
choices, and the REMAPS classifications were shown for review before
writing). Names are what a product person would say: **Loot Box** takes
its library entry's name directly, the same way `companion` and
`progression-fund` did as brand-new mechanics; **Variable Reward** drops
the library's "Outcome" suffix, the same pattern as `cosmetics` (Cosmetic
Customization) and `credits-tokens` (Spendable Credits and Tokens) above —
a shorter, product-register name on the site while `libraryEntries` keeps
the fuller library name for internal tracking.

Unlike the xp-leveling and achievements splits, this one does not give
both successors fresh ids: `variable-reward` keeps the old fused entry's
exact id, since "Variable Reward" is the name a product person would use
and that name's natural id collides with the id the fused mechanic already
holds. This is a deliberate, flagged departure from the "old URL 404s
rather than redirects" pattern those two splits established:
`/mechanics/variable-reward/` does not 404, it silently repoints to
different (though genuinely rewritten) content. The alternative, a fresh
id for the kept entry, was considered and rejected — it would have meant
either an artificial id divorced from the display name, or "Variable
Reward Outcome" as the display name itself, which is exactly the
taxonomist register the site-name-vs-library-name precedent above exists
to avoid.

Both new mechanics carry the old fused entry's app list, but not
unchanged: unlike the xp-leveling and achievements splits, direct reads of
every listed app's own analysis were available and used, rather than
copying the list blindly across both successors. `fortune-city` and
`clash-of-clans` are dropped from both entirely — fortune-city's analysis
never mentions any of the three concepts, and clash-of-clans' analysis
explicitly considers and rejects all three in its own "Entries considered
and not applied" section; both were stale carryovers on the old fused
entry's app list rather than real evidence. `royal-match`,
`solitaire-grand-harvest`, `chrome-valley-customs`, and
`match-creek-motors` carry `variable-reward` only, evidenced by
non-acquisitive outcome variance (a concealed sequential offer, a
duplicate-to-crown conversion, a per-level currency yield). `capybara-go`
and `fc-mobile` carry both, the two apps whose evidence cleared the split
condition. `subway-surfers`, `liftoff`, and `swgoh` carry `loot-box` only,
each evidenced by a value commitment (coins, keys, eggs, crystals, or ally
points) made before a discrete container's contents are known.

Eight older v3 analysis files still carry the literal `variable-reward`
inline id in a `### Variable Reward (\`variable-reward\`) · Depth`
heading, unrewritten. Because the kept id, `variable-reward`, is still a
registered mechanic, five of the eight need no remap at all and simply
fall through unchanged: acorns, chrome-valley-customs, match-creek-motors,
and solitaire-grand-harvest, each decided from that file's own observed
text the same way the app list above was (solitaire-grand-harvest's $2.99
second spin is loot-box-shaped on its own, but its free first spin and
free Crop Master pick dominate the section, and REMAPS carries only one id
per app). The fifth, fifa-panini-collection, has no observed text under
this heading at all ("Write-up pending") — rather than invent evidence or
leave the id unmapped, it defaults to the kept id, flagged explicitly in
`REMAPS` as an unevidenced default pending its own write-up, not a real
classification decision. Only the remaining three needed an actual entry
in `REMAPS` (`site/scripts/convert-content.mjs`), since their evidence
belongs to the other successor: liftoff (paying eggs to refresh Store
deals with unknown contents), swgoh (Bronzium/Chromium pulls paid in ally
points or crystals), and subway-surfers (the coin-priced Mystery Box and
the ad-or-key-gated token box). Without a `loot-box` entry, these three
would silently fall through to the kept id, `variable-reward`, by the same
default-resolution mechanism as the five above — no build error, since
`variable-reward` is still a registered id, just a wrong classification
for evidence that belongs to the other successor. Neither royal-match,
capybara-go, nor fc-mobile appears in `REMAPS` for this split — all three
are v4.1 and never reach the v3 parsing path at all.

## When each merge splits

A merged page splits when at least two apps analysed under the current
model (v4.1) carry both sides of the merge distinctly — as separate,
independently-evidenced observations, not both inferred from the same
write-up. Until then, it stays merged and held back. This is a structural
condition, not a threshold picked for its own sake: these pages are fused
writing, not divided content, so splitting from the library's definitions
alone, without real implementations to draw the dividing line from, would
produce two new pages that get rewritten again the moment real evidence
arrives. Two independent v4.1 observations turn the split into a lookup
against actual analysis rather than a guess. Each pair unlocks on its own
evidence — the four do not move together.

`variable-reward` cleared this condition on 14 Sep 2026 (see "The
variable-reward split" above) once Capybara Go and FC Mobile each applied
Loot Box and Variable Reward Outcome as separate, independently-evidenced
tags — the third merge to split out of this set, after xp-leveling and
achievements. As of this document, one app analysed under
the current model, Capybara Go, carries several of the remaining four
merged ids — Leaderboard (leaderboards), Energy (energy-lives), and
Seasonal Progression Pass (season-pass) — but none of the four has cleared
its split condition yet, since that needs two apps each independently
carrying both sides distinctly, and each merge so far has only one side
evidenced by Capybara Go. Every other occurrence below is from the old
(v3) model, and none of it counts toward the threshold; it is recorded
here so that checking progress, once v4.1 re-analysis reaches these apps,
is a lookup rather than a recount.

**leaderboards** (Leaderboard, Comparative Rank) — 11 apps: capybara-go
(v4.1, Leaderboard only), and 10 more, all v3: chrome-valley-customs,
clash-of-clans, fc-mobile, freeletics, liftoff, match-creek-motors,
royal-match, strava, subway-surfers, swgoh.

**community-groups** (Community Space, Group Membership) — 7 apps, all v3:
fifa-panini-collection, fiton, insight-timer, ladder, picsart, steam,
strava.

**energy-lives** (Energy, Lives) — 7 apps: capybara-go (v4.1, Energy
only), and 6 more, all v3: chrome-valley-customs, fifa-panini-collection,
fortune-city, match-creek-motors, royal-match, swgoh.

**season-pass** (Season Content Pass, Seasonal Progression Pass) — 5 apps:
capybara-go (v4.1, Seasonal Progression Pass only), and 4 more, all v3:
fc-mobile, royal-match, solitaire-grand-harvest, swgoh.

## Visibility, pending the split

This is deliberately not a visibility distinction. All mechanics,
including the four still-merged ones, carry declared visibility `public` — the
same as before this work. Publishing a merged page would assert a taxonomy
the library has already moved past, which has nothing to do with
subscriptions: declaring a merge `subscriber` instead would only make its
page locked rather than absent once `REVIEW_WINDOW_OPEN`
(`site/src/lib/review-window.mjs`) closes and the site re-locks, letting a
subscriber read a page that isn't supposed to exist at all yet (an earlier
draft of this work made exactly that mistake and was corrected before
shipping).

Instead, the four merged mechanics are excluded outright from
`getStaticPaths` in `mechanics/[id].astro`, against `HELD_BACK_MECHANIC_IDS`
(`site/src/lib/content.ts`) — a plain set of the four ids, unconditional
and independent of both each mechanic's own declared visibility and of
`REVIEW_WINDOW_OPEN`. The page does not exist, in either window state,
until the merge clears the split condition above; verified directly by
building with the window both open and closed and confirming zero links to
any of the four in either output. Real gating (a locked page like
subscriber apps and case studies get) was considered and rejected: it's
auth-adjacent work that would be discarded the moment a merge splits and
both sides go public, and shipping the pages live-but-unlinked would leave
the fused content readable at its direct URL regardless — exactly what
holding them back is meant to avoid.

Every other page that can reference one of the four (the 27 v3 case
studies, the mechanics index, paired-mechanic sidebars on glossary and
cheatsheet pages, the homepage's featured-mechanics strip, v4.1 case study
tag chips and system-map nodes) resolves its href through the same shared
helper, `mechanicHref()` (`site/src/lib/content.ts`) — the one place this
decision is made, reused everywhere a mechanic gets linked so a held-back id
can't be missed in one spot and linked from another. It renders the
reference unlinked — the name and category still show, there's simply no
link to click — reusing the fallback already built for a mechanic with no
reference page at all, rather than a broken link or a misleading
`/subscribe/` CTA. The other 31 mechanics — the 19 original clean
one-to-one mappings, `personal-data-reflection`, `companion`,
`progression-fund`, and `ads` now that Advertisement Exposure's retirement
has left it a clean one-to-one mapping too, `experience-points` and
`leveling` now that the xp-leveling split has left them clean one-to-one
mappings as well, `achievement` and `milestone` now that the achievements
split has done the same, `shareable-win` and `expert-guidance`, two
more one-to-one mappings added alongside that split, and `loot-box` and
`variable-reward` now that the variable-reward split has done the same —
are unaffected. A merge gets
its own page back, for both sides, once it clears the split condition
above.

## Public display names (owner ruling, 11 Sep 2026)

Readers now see one name per mechanic everywhere — the chip, the map node,
the mechanic's own page, the sidebar — all read the same `name` field in
`data.js` (see the taxonomy-audit findings that led here: chips and the
system map used to resolve through separate paths and could disagree; both
now resolve through `resolveMechanicId()`, `site/src/lib/canonical-
mechanic-ids.mjs`, and display `name` field directly). That makes `name` a
public-facing decision, not an internal label, and it does not have to
match the library's own name for that entry.

Six site mechanics were renamed to their library name, where the site's old
name was carrying an artifact of a taxonomy the library no longer has —
either a second term bolted on with a slash that isn't one of the 36 (a
holdover from before the library existed), or a plural/singular mismatch:

- `streak`: "Streak / Streak Bonus" → "Streak". Streak Bonus is not a
  library entry.
- `challenges`: "Challenges" → "Challenge".
- `set-collection`: "Set Collection / Completion" → "Set Collection".
  Completion is not a library entry.
- `daily-login-reward`: "Daily Login Reward" → "Daily Login Rewards".
- `monthly-card`: "Monthly Card" → "Monthly Reward Card" → "Daily Claim
  Pack" (11 Sep 2026, following the library entry's own rename and
  widening away from a fixed monthly period).
- `clans-guilds`: "Clans / Guilds" → "Clan / Guild".

Two were deliberately left as they are, against the library name:

- `cosmetics` keeps "Cosmetics" rather than "Cosmetic Customization".
- `credits-tokens` keeps "Credits / Tokens" rather than "Spendable Credits
  and Tokens".

The rule is that a public mechanic's name is what a product person would
call it, not what a taxonomist would. "Cosmetic Customization" and
"Spendable Credits and Tokens" are precise classification labels, built to
disambiguate against neighboring entries in a 36-entry library — exactly
the register the library needs and the site doesn't. Nobody building a
product says either phrase. This is recorded here so a future pass doesn't
"correct" these two to match the library on the assumption that the other
six renames established a blanket rule that site names should always match
library names — they don't; each of the eight was judged on its own name,
not on a rule that public copy must track the library's taxonomy.

The four held-back merged mechanics (`leaderboards`,
`community-groups`, `energy-lives`, `season-pass`) keep
their current names for now. `ads` came out of this set on 13 Sep 2026
when Advertisement Exposure was retired, but its name was not revisited as
part of that change — it wasn't one of the six renamed or two
deliberately-kept names above either, so it stands untouched pending a
future look. A merged mechanic's
name is inherently a compromise across two or three library entries; the
right name for each resolves naturally once that merge splits and each side
gets its own page and its own name, so renaming them now would mean
renaming them again later. `limited-time-events` was the other mechanic
with no library name to reconcile against; it did not get to keep that
exception, since it was retired outright on 15 Sep 2026 rather than named
against a merge (see the retirement note above).

`xp-leveling` also came out of this set on 13 Sep 2026, but by splitting
rather than by losing a merged side the way `ads` did. Its two successors,
`experience-points` and `leveling`, aren't renames of anything — each
takes its library entry's own name directly, the same way `companion` and
`progression-fund` did as brand-new mechanics, so neither belongs on the
six-renamed or two-kept-as-is lists above. `achievement` and `milestone`,
the achievements split's two successors, are the same shape.

`variable-reward` came out of this set on 14 Sep 2026, splitting rather
than losing a side, the same shape as `xp-leveling` and `achievements` —
but its two successors split across both naming patterns above rather than
just one. `loot-box` takes its library entry's name directly, like
`experience-points` and `leveling` before it. `variable-reward` does not:
it keeps the old fused id (see "The variable-reward split" above for why)
and its name drops the library's "Outcome" suffix, the same deliberate
site-name-vs-library-name departure as `cosmetics` and `credits-tokens`
above, so it belongs on neither the six-renamed nor the two-kept-as-is
lists either — it was never renamed away from an old site name, and it
isn't keeping an old site name against the library's, it's a new name
chosen fresh at the moment of the split.
