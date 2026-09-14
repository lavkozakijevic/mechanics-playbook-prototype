# Appservatory: content model and page spec

**Version:** 6, 14 September 2026
**Status:** agreed. Section 2.1 revised after comparing Dave's assembled mechanic blocks against Strava's composed ones.

This spec defines what the site holds and what each page renders under the v4 analysis model. It deliberately says nothing about visual design. The order is content model, then template, then design.

---

## 1. The content model

### 1.1 The atomic unit is the observation

An observation is one thing an app does that shapes user behavior. It is recorded whether or not the library has a name for it.

Fields:

| Field | Description |
|---|---|
| `id` | Stable identifier within the app, e.g. `O11` |
| `name` | Short name, e.g. "Roundup savings" |
| `section` | One of the nine sections. Exactly one home section |
| `observed` | What was seen, in prose |
| `detail` | List of supporting points: defaults, thresholds, wording, what is reversible, what is permanent |
| `evidence` | Directly observed, strongly supported, plausible, or unresolved |
| `tags` | Zero or more library entries, each with its own confidence |
| `crossRefs` | Other sections this observation also belongs to |
| `screenshots` | Zero or more captures |

An observation with no tags is normal and publishes exactly like any other.

### 1.2 The nine sections

Fixed, in this order, on every app:

1. Onboarding and first run
2. Core loop and automation
3. Goals and progression
4. Access and eligibility
5. Earning and utility
6. Social
7. Growth
8. Money
9. Return triggers

Every section renders even when empty. An empty section shows a single line stating the app does nothing in this area. This is informative rather than a gap: Dave having almost no social layer tells a finance PM something real.

### 1.3 Tags

Tags are library entries applied to observations. The 33 approved entries become tags. They no longer gate what is recorded.

**Publishing bar.** Observations always publish, because they are factual records of what was seen. Tags publish only at confirmed or strongly supported. A plausible tag stays in the analysis file and does not create an entry in the index. The index is a claim that a pattern is present, and that claim keeps the old standard.

### 1.4 The implementation

An implementation is one app's observations carrying one tag. Dave plus Piggy Bank is an implementation, made of observations O11, O12, O18, O20 and O22.

This is the new published unit that the mechanics index browses. It is derived, not authored: no separate content to maintain.

### 1.5 System view

Per app. How the pieces feed each other and which observations depend on which. Narrative comes from the analysis. Node positions and connection pairs continue to come from `system.html`.

### 1.6 Proposed tags

Recorded per app, not rendered. They are input to library decisions, not published content.

---

### 1.7 Two files per app

This is the distinction the first build got wrong, and it is the most important rule in the spec.

**The analysis** at `sources/analyses/{app}.md` is the internal record. Evidence tiers, observation numbers, cross-references, rejected entries, unresolved items, proposed tags, the reasoning behind every claim. It is never published, and no sentence from it reaches a reader unchanged.

**The content** at `sources/content/{app}.md` is what publishes. Produced by Stage 2 from the analysis, under the writing rules in `stage2-website-content.md`. Same structure and the same observation ids as anchors, but reader-facing prose throughout: short plain labels instead of analysis titles, the app as the subject of the sentence, no tiers, no observation numbers, no cross-references, no regulatory furniture, no analyst-facing language.

The parser reads the content file for everything that renders, and the analysis file only for the applied tags and their confidence, since the publishing bar lives there.

Section lead-ins live in the content file, not in a separate metadata map. They are written prose and they belong with the rest of the written prose.

If the content file is missing for an app, that app does not render. It does not fall back to the analysis.

## 2. Case study, two layers

A full analysis runs to roughly 10,000 words across 83 observations. That is reference material, not an article. It is navigated like documentation: the reader arrives with a question and needs to reach the answer, not read from the top. Presenting it as one continuous page is the failure mode.

So a case study is a summary page plus one page per section.

### 2.1 The summary page

URL: `/case-studies/{app}/`

**Above the gate, visible to everyone:** app icon, category, name, and the app description. Nothing else. No mechanic chips, no section list, no teaser of the body.

**The gate:** for apps requiring a subscription, the subscribe card sits directly under the description and the page ends. Apps marked free render the full body in place of the gate.

**Below the gate, in order:**

1. **System view.** One short paragraph: how complex the system is, and the spine it hangs from. Then a link to `/systems/{app}/`, where the diagram and the full account live. The summary page does not carry the full system narrative. A wall of text with no diagram is the systems page done badly, and the systems page already exists.
2. **Mechanics.** One block per applied tag, **composed, not assembled.** Each block is a written piece about that mechanic in this app, in the same four parts the v3 case studies use: what was observed, how it is presented, what is worth noting, key findings. It is written from the observations carrying that tag, not by reproducing them. The block also carries the mechanic name linking to its reference page, its category chip, and screenshots.

   This is the difference between a page that reads and a page that lists. The observations themselves are not lost: they appear in full on their section pages. The summary page is where someone reads about the mechanic; the section pages are where someone checks the record.
3. **The full record.** Nine section cards, each with its name and a one-line description. No counts: "16 observations" is internal vocabulary and a reader does not know what an observation is. These cards are an invitation to explore, not an index. Empty sections show as such and are not linked.

Target length: around 1,500 words. It reads as a page, it has images, and it ends with a clear route deeper.

### 2.2 Section pages

URL: `/case-studies/{app}/{section}/`, for example `/case-studies/dave/onboarding/`.

One page per non-empty section. Each renders a lead-in and then every observation in that section, expanded. No tap-to-reveal: at this volume it hides more than it helps and it costs indexability.

**Navigation:** a sticky sidebar listing all nine sections with the current one marked, and previous and next controls at the foot.

Sections vary from one observation to twenty-six. That range is acceptable for documentation pages.

Section pages carry the same gate as their summary page. A gated section page shows the app name, the section name, and the subscribe card.

**Lead-ins orient, they do not argue.** Two or three sentences saying what this part of the app covers. Any judgement about what the app is doing belongs in the system view, where the analysis supports it.

### 2.3 An observation on the page

- Title as a heading
- The observed prose
- Supporting detail as a bulleted list
- Its tags as chips, each linking to the mechanic reference page
- Screenshots where they exist

Observations are not numbered in the reading view. The `id` stays in the data as the anchor and the screenshot key.

Everything rendered here comes from the content file. Nothing on a published page is taken from the analysis except the tags and their confidence.

Observations appear in exactly one place: their section page. Mechanic blocks on the summary page are composed prose written from those observations, not a second rendering of them.

## 3. Mechanics index

### 3.0 Scope

**The index covers apps analysed under the current model only.** Apps still on the older format have no observations, so they cannot produce implementation cards, and rendering their fused write-ups alongside would put two content models on one screen. Every app will be re-analysed in time and its mechanics will find their place then.

Nothing goes to main until every app in the library is re-analysed, so this page is built for that end state rather than for whatever coverage exists mid-migration.

**A tag with no implementations does not render.** Not as an empty tag, not as a disabled one. This is a permanent rule, not a migration workaround: at full coverage it hides only mechanics no app in the library actually uses, which is the correct thing to hide. Mid-migration it hides more, and that is expected. The mechanic's reference page still exists and is still reachable.

Search and filters operate over the same set.

### 3.1 Layout

- Header: title and intro copy
- Left sidebar: search and filters
- Right column: tags across the top, cards below

Mechanic cards are removed from this page. Tags replace them.

### 3.2 Landing state

One card per mechanic, showing the first implementation of that mechanic. A reader arriving cold sees the breadth of the library rather than depth in one mechanic.

"First implementation" means first in the list. No curation field. This makes list order a content decision, since whatever sits first becomes the public face of that mechanic.

### 3.3 Tag selected

Cards below become every implementation of that mechanic across apps. The first is open. The rest are locked, each showing the app name and a subscribe prompt.

Until authentication exists this is what every visitor sees. When authentication ships, subscribers see all cards unlocked and nothing else about the page changes.

### 3.4 Filters and search

**Two filters, doing different jobs.**

**Role** filters the cards. Roles are recorded per implementation, so a role filter answers what a reader actually arrives with: show me mechanics doing engagement work, or monetization work, in real apps. The same mechanic can appear under different roles in different apps, which is the point.

**Category** narrows which tags appear. Category is a property of the mechanic rather than of its use, so it belongs on the tag row rather than on the cards.

Search runs across mechanic names, definitions, and implementation content.

### 3.5 An implementation card

- App icon and name
- Mechanic name
- The observations carrying that tag for that app, in the app's section order
- The role that mechanic plays in that app
- A link through to that app's case study

Locked cards show the app name and the subscribe prompt only.

### 3.6 Held-back mechanics

Some applied tags resolve to mechanics that are held back pending a merge split, so they have a tag and no reference page. Those implementations still exist and still belong in the index. The card renders, the mechanic name renders unlinked, per the same `mechanicHref()` rule the case study pages use.

---

## 4. Mechanic reference pages

These become **public**. Structure is unchanged from today: definition, "best for" and context chips, how it works with principle and watch-out callouts, structural variants, lifecycle placement, and the sidebar of pairings and player types.

One change: "Seen in the wild" now lists implementations under the same open-first, locked-rest rule as the index.

**Work these need before going public:**

- The three stubs carrying `toWrite: true` (`hard-currency`, `soft-currency`, `passive-construction-meta`) need writing out to the full structure, or holding back until they are written.
- The stale old-workflow prose in the older pages needs the planned fix: the Socializer typology and the merged taxonomy references.

---

## 5. What is removed

- The four-part `RICH_DESCRIPTIONS` write-up per mechanic per app. Observations replace it.
- Mechanic cards on the index page.
- The "mechanics observed" chip row above the gate on case studies.
- The `mechanics` array on APPS entries. It already plays no role in the build.
- The `EXAMPLE_EXCLUDED` list in `props.ts`, once every app has been re-run under v4.
- The dead "key takeaways" section, which is built in code but always passed null.

---

## 6. What has to change in the build

### 6.1 The parser

`convert-content.mjs` currently parses mechanic headings with depth and confidence out of the analysis files. It needs to parse the v4 format instead: nine sections, observations with their fields, tags with per-observation confidence, proposed tags, and the system view.

This is the largest single piece of work in the spec.

### 6.2 Screenshot keys

Screenshots currently key on `{mechanicId}_{appId}`. Under this model they attach to observations, so the key becomes `{appId}_{observationId}`, for example `dave_O11`.

Existing screenshots need re-keying as each app is re-run.

### 6.3 The tag index

Derived at build time: for every mechanic, the list of apps that carry it and the observations involved. Nothing hand-maintained.

### 6.4 Taxonomy consolidation

The category label and colour mapping is currently hardcoded in at least four places (`lib/content.ts`, `CaseStudyDetail.jsx`, `MechanicsLibrary.jsx`, `mechanics/index.astro`). Player types have the same problem. Both move to a single definition.

Context tags are currently freeform with no fixed list. Either they get a fixed list or they are dropped from the filters.

---

## 7. Build order

1. Parser handles the v4 format.
2. Case study summary page and section pages render, unstyled.
3. Dave goes through end to end as the test case.
4. Mechanics index rebuilt as tags plus implementation cards.
5. Mechanic pages made public, after the stubs and stale prose are fixed.
6. Remaining apps re-run and republished, one at a time.
7. Taxonomy consolidation.
8. Design, once there is real content to design against.
9. Authentication, when Paddle gives the green light.

---

## 8. Open question

The mechanic reference page and the index tag view show the same implementation list from the same data. That is deliberate: the reference page is where someone lands from search, the index is where a subscriber browses.

The alternative is that tapping a tag on the index navigates to the mechanic page, which removes the cards from the index entirely and halves what gets built.

The spec above keeps both. Worth confirming that is what you want before implementation, since it is the one place where the design carries duplication on purpose.
