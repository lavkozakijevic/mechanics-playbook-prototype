# Stage 0 Report: Map of the Current State

*Prepared for confirmation before any migration work begins. Everything below is observation — nothing in the site has been changed.*

This report covers the four items the migration brief asks for:

1. [How the current site (v44) is built](#part-1-how-the-current-site-v44-is-built)
2. [What content the site contains](#part-2-content-inventory)
3. [What the Claude Design bundle provides](#part-3-design-bundle-template-inventory)
4. [Questions that need your answers](#part-4-questions)

A note on method: the counts and cross-reference checks in Part 2 were produced by running the actual data file through a script, not by reading and counting by hand, so they are exact.

---

## Part 1: How the current site (v44) is built

### The pages

The site is 22 HTML pages. Twelve are the library; ten are the finance report.

| Page | What it shows | Where its content comes from |
|---|---|---|
| index.html | Homepage: hero carousel, app logo strip, stats, featured items | Mostly `data.js`, but several parts hand-picked in the page itself (see "Duplications" below) |
| mechanics.html | All 22 mechanics, filterable | `data.js` |
| mechanic.html | One mechanic in detail (`?id=` in the address picks which) | `data.js` |
| case-studies.html | All 25 apps as a grid | `data.js` |
| case-study.html | One app in detail | `data.js` |
| systems.html | All 25 system maps as a list | `data.js` |
| system.html | One app's interactive system map | `data.js` **plus its own private data** (the split, below) |
| cheatsheets.html / cheatsheet.html | The 6 cheatsheets, list and detail | `data.js` |
| glossary.html / glossary-item.html | The 15 glossary terms, list and detail | `data.js` |
| reports-finance.html | Finance report landing page | Self-contained |
| report-finance.html, report-finance-full.html, and 7 chapter pages | The finance report itself | Self-contained — written directly into the HTML, no connection to `data.js` |

Every library page is empty until the visitor's browser runs JavaScript to fill it in. That is the "client-side rendering" problem the brief names: search engines see mostly blank pages. The new build fixes this by writing the finished pages out ahead of time.

### The data file (`data.js`)

One file holds all library content in seven collections:

- **MECHANICS** — 22 mechanics, each with: number, name, category, one-line definition, long description, psychology principle, player types, a warning, variants, lifecycle note, paired mechanics, list of example apps, context tags, and motivation tags.
- **APPS** — 25 apps, each with: name, category, type (game/app), list of mechanics it uses, and a summary paragraph.
- **SYSTEMS** — 25 systems, exactly one per app, each with: tagline, overview, a written walkthrough of the loop, the mechanics involved (each with a written "role"), a key insight, and "what makes it work".
- **CHEATSHEETS** — 6 cheatsheets, each with title, description, related mechanics and apps, and 5 steps.
- **GLOSSARY** — 15 terms, each with a definition and related mechanics.
- **RICH_DESCRIPTIONS** — 117 long write-ups, one per mechanic-app pairing (e.g. "how Strava uses Challenges"). Each is a single block of text with four bold headings inside: *How X uses Y / How they present it / Why it works / Key findings*.
- **SCREENSHOTS** — a list of which screenshot files belong to which mechanic-app pairing. Only 2 entries exist.

The file also contains small helpers and, notably, the **navigation menu and footer as text**, which pages insert at load time.

### The system.html data split (confirmed, and worse than described)

`system.html` keeps two private datasets that exist nowhere else:

- **CONNECTIONS** — for each system, the arrows on the map: which mechanic connects to which, with a title and two paragraphs explaining the connection.
- **POSITIONS** — for each system, where each mechanic sits on the map (coordinates).

All 25 systems are covered. But six systems — **Ladder, FitOn, Freeletics, Liftoff, Gymverse, and Clash of Clans** — are defined *twice* in CONNECTIONS and *three times* in POSITIONS, and the copies are not identical. When the same name is defined more than once, the browser silently keeps only the last copy. I checked the last copies against the system data in `data.js`, and for five of the six they disagree:

| System | Problem on the live map |
|---|---|
| Ladder | Map places an "Achievements" node that isn't in the system's mechanics list |
| Clash of Clans | Map places "Leaderboards", "Variable Reward", "Cosmetics" nodes not in its mechanics list |
| FitOn | "Limited-Time Events" and "Challenges" are in the system but have no position — they can't be drawn. Map also places "Social Feed", which isn't in the system |
| Freeletics | "XP / Leveling" is in the system but has no position |
| Liftoff | "Variable Reward" and "Achievements" have no position; map places "Daily/Weekly Quests" and "Credits/Tokens", which aren't in the system |

This is the breakage the brief warned about, in concrete form. These same six apps also have the thinnest content elsewhere (see Part 2) — they look like a batch added later and never finished.

### Other duplications and hand-maintained pieces

- **Navigation and footer** are pasted into roughly twenty pages individually. Changing a menu item means editing every page.
- **Homepage hand-picked content:** the hero carousel is a fixed list of 8 slides; only the first (Royal Match) has an image — the other 7 images exist in the repository under matching names but were never connected, so those slides show colored initials instead. The app logo strip is a fixed list of 12 of the 25 apps. The four "featured" cards (Strava case study, streak cheatsheet, Strava system, Season Pass mechanic) are hand-picked. The stats numbers, by contrast, are computed correctly.
- **The free-tier list** lives in `auth.js` as a fixed list (see next section).

### Login and gating (current state)

`auth.js` implements a single shared password (`gamebiz2026`, readable by anyone who views the code) stored in the visitor's browser after login. Free without login: the **Streak** mechanic, the **Royal Match** case study and system, and the **Launching a Streak** cheatsheet. The glossary is not gated. Everything else shows a lock and a login prompt.

Two important caveats:

- The gating is **cosmetic only**. All content is delivered to every visitor's browser regardless; the lock is drawn afterwards. This matches the brief's plan (visibility field now, real paywall later).
- The **finance report pages are not gated at all**, and the hosting configuration (`wrangler.jsonc`) publishes the entire repository folder as the website — so the full report, the data file, and even the password inside `auth.js` are all publicly fetchable. This confirms the brief's third known problem.

### Assets

- **Icons:** one icon file per app, named by app ID. All 25 library apps have icons. There are also 9 icons for finance-report apps (Monzo, Wise, Monefy, EveryDollar, Intesa, George, Yettel, Finelo, Copilot) that are not in the library, and Fortune City has two icon files (.png and .webp).
- **Screenshots:** the registry in `data.js` lists 5 file paths, of which **only 1 exists on disk** (one Clash of Clans image). On disk but *not* registered: 4 Subway Surfers ad screenshots, and 8 Duolingo streak screenshots — Duolingo is not an app in the library at all. A README documents an intended structure of 102 screenshot folders that was never built.
- **Loose images:** 8 hero images sit in the repository root; 7 of them are unused (the never-connected carousel slides mentioned above).

---

## Part 2: Content inventory

### Counts

| Collection | Count |
|---|---|
| Mechanics | 22 |
| Apps | 25 (one system map each, so Systems = 25) |
| Cheatsheets | 6 |
| Glossary terms | 15 |
| Rich descriptions (mechanic-app write-ups) | 117 |
| Registered screenshot sets | 2 (one of which points at a missing file) |

### The 22 mechanics

| # | Mechanic | Category | Example apps |
|---|---|---|---|
| 01 | Streak / Streak Bonus | Retention | 11 |
| 02 | Energy / Lives | Retention | 3 |
| 03 | Daily Login Reward | Retention | 10 |
| 04 | Variable Reward Schedule | Retention | 10 |
| 05 | Daily / Weekly Quests | Retention | 10 |
| 06 | Set Collection / Completion | Retention | 6 |
| 07 | Limited-Time Events | Retention | 8 |
| 08 | Achievements / Milestones | Retention | 19 |
| 09 | Challenges | Retention | 10 |
| 10 | XP / Leveling | Retention | 7 |
| 11 | Season Pass / Battle Pass | Monetization | 3 |
| 12 | Piggy Bank | Monetization | 1 |
| 13 | First-Purchase Bonus | Monetization | 2 |
| 14 | Monthly Card | Monetization | 1 |
| 15 | Credits / Tokens | Monetization | 4 |
| 16 | Cosmetics | Monetization | 5 |
| 17 | Ads | Monetization | 6 |
| 18 | Social Feed | Social | 7 |
| 19 | Community / Groups | Social | 4 |
| 20 | Clans / Guilds | Social | 5 |
| 21 | Leaderboards | Social | 8 |
| 22 | Gifting | Social | 6 |

### The 25 apps

Games: Royal Match, FC Mobile, Capybara Go!, Subway Surfers, Solitaire Grand Harvest, Clash of Clans, Chrome Valley Customs, Match Creek Motors, Star Wars: Galaxy of Heroes.

Apps: FIFA Panini Collection, Strava, Canva, Wispr Flow, PicsArt, Insight Timer, Calm, Steam (iOS), Fortune City, Tiimo, Uptime, Ladder, FitOn, Freeletics, Liftoff, Gymverse.

### The 6 cheatsheets

1. Launching a Streak Mechanic
2. Designing a Season Pass That Works
3. Solving the Social Cold Start
4. Designing a Daily Login Reward
5. Designing an Achievement System That Travels
6. Designing Variable Rewards That Feel Fair

Every cheatsheet's mechanic and app references point at things that exist. ✓

### The 15 glossary terms

Loss Aversion, Variable Ratio Reinforcement, FOMO, Sunk Cost Fallacy, Social Proof, Endowment Effect, Scarcity Bias, Zeigarnik Effect, Reciprocity, Bartle Taxonomy, Core Loop, Metagame, Freemium, Paywall, Session Pacing.

All "related mechanic" links point at real mechanics. Two terms (Bartle Taxonomy, Core Loop) relate to no mechanics, which appears intentional. ✓

### Cross-reference health check

Apps and mechanics reference each other in both directions, and the two directions are supposed to agree. They mostly do, with **18 exceptions**:

**7 cases where the app lists a mechanic, the mechanic doesn't list the app back — but a full write-up exists**, so the relationship is clearly real and the mechanic's side is just stale:

- Fortune City ↔ Clans/Guilds; Chrome Valley Customs ↔ Energy/Lives; Match Creek Motors ↔ Energy/Lives; Star Wars: Galaxy of Heroes ↔ Variable Reward, Season Pass, Energy/Lives, and Clans/Guilds.

**11 cases the other way round** (mechanic claims the app, app doesn't list the mechanic back, no write-up exists):

- Streak → Freeletics; Daily Login Reward → FitOn and Clash of Clans; Limited-Time Events → Strava; Challenges → Clash of Clans; XP/Leveling → Gymverse; Credits/Tokens → Liftoff; Ads → Chrome Valley Customs and Match Creek Motors; Gifting → Star Wars: Galaxy of Heroes and Clash of Clans.

**Write-up coverage:** of 146 mechanic-app relationships claimed on the mechanics' side, 110 have a full write-up. The 36 without one belong almost entirely to the same six late-batch apps: Clash of Clans (6 of its 8 mechanics lack write-ups), Liftoff (7 of 9), FitOn (4 of 7), Ladder (3 of 7), Freeletics (3 of 6), Gymverse (2 of 3), plus the two Ads write-ups for Chrome Valley Customs and Match Creek Motors. The new design shows a structured breakdown per mechanic on each case study page, so these gaps will be visible.

---

## Part 3: Design bundle template inventory

The bundle ("gameBiz Design System.zip") contains finished page designs, reusable components, the design's colors/typography/spacing rules, fonts, and logos. The designs were built with sample content (Duolingo, Snapchat, etc. — apps not in the library), exactly as the brief says.

### Page coverage — all 17 page types are present and finished

| Design template | Covers | Status |
|---|---|---|
| Homepage | index | ✓ Finished |
| Mechanics library + Mechanic detail | mechanics list/detail | ✓ Finished (sample: Streak) |
| Case studies + Case study detail | apps list/detail | ✓ Finished (sample: Royal Match) |
| Systems + System detail | systems list/detail | ✓ Finished (sample: Duolingo) |
| Cheatsheets + Cheatsheet detail | cheatsheets list/detail | ✓ Finished (sample: streak cheatsheet) |
| Glossary + Glossary detail | glossary list/detail | ✓ Finished (sample: Loss Aversion) |
| Report landing + Report chapter | report pages | ✓ Finished (sample: Finance) |
| **Work With Us** | consulting page | ✓ **Finished — the brief said this was missing, but it's here** |
| **Subscribe** | signup page | ✓ **Finished — same** |
| **Login** | sign-in page | ✓ **Finished — same** |
| Locked state | gated-content view | ✓ Finished |

The only page type with no design anywhere: a **"page not found" (404) page** — what a visitor sees at a dead address. Minor, but static sites normally have one. Per the brief, this would be designed in Claude Design, not improvised.

### What the templates expect from the content

Almost everything the templates need, v44's content has. The genuine mismatches are listed as questions in Part 4. The highlights:

- **Mechanic detail** expects: number, name, category, definition, "how it works" text, core principle box, "watch out for" box, variants, lifecycle, paired mechanics, example apps with screenshots, related glossary terms. → v44 has all of this; related glossary terms can be computed by reversing the glossary's links. ✓
- **Case study detail** expects: app identity with **date analyzed**, overview, mechanics list, then per mechanic four labeled sections (*What we observed / How it's presented / Worth noting / Key findings*) with **annotated screenshots**, then connections, key insight, takeaways. → v44's write-ups contain almost exactly these four sections but as one text block with slightly different headings; v44 has **no dates** and **almost no screenshots**, and no annotation data (the numbered pins on screenshots).
- **System detail** expects a map of nodes and connections — matching exactly the data that needs rescuing from `system.html`. The shapes line up well: positions → node coordinates, connection texts → the popup. One small difference: the design distinguishes line *types* visually (spine vs. category lines); v44's data has no type field, but it can be derived from mechanic categories.
- **Mechanics library** filter panel shows category, product-context, and player-type filters. The design's sample context values (onboarding, habit, progression, growth, status) **don't match v44's real values** (activation, retention, monetization, referral).
- **Homepage** expects library stats with a "last updated" date, a "New this week" section with dated entries, and featured content. → v44 content has **no dates anywhere**, so "new this week" and "date analyzed" cannot be computed from it today.
- **Cards everywhere** show Free / "For subscribers" badges → this maps to the new visibility field, which v44 content doesn't have yet (the free list currently lives in `auth.js`).
- **Subscribe page** shows library counts — these will be computed from real content (the design's sample numbers are placeholders).

### Components and design rules (brief summary)

Ten reusable components (buttons, badges, cards, the system map, the annotated screenshot frame, the locked-content notice, etc.), a complete set of design tokens (colors, two typefaces — Sora and DM Sans — spacing, motion), and a guidance file stating the design philosophy ("the analyst's archive": paper background, ink text, red used only as the analyst's pen) with explicit prohibitions (no trophies, gradients, mascots, dark mode, emoji). The navigation in the design is: **Library / Case studies / Reports / Work with us**, plus Log in and Subscribe buttons — this differs from v44's menu, and per the rule of two sources, the design's navigation wins.

---

## Part 4: Questions

Each question has a recommendation so you can answer with "agree" or a correction. Nothing proceeds until all are answered.

### A. Inputs and scope

**Q1. Is the design bundle in this repository the current, approved one?** The brief says Work With Us, Subscribe, and Login designs don't exist — but the bundle contains finished versions of all three. I'd like to confirm the bundle is newer than the brief and is the approved source of truth, rather than a version you haven't reviewed.

**Q2. What happens to the finance report on the new site?** The brief says report content must be removed from the deployed output entirely. But the design bundle includes report page templates, and the page guide describes a Reports page that *sells* the report with a sample excerpt. My reading: the new site gets a Reports *marketing* page (what a report is, who it's for, request action) with no actual report content, and the report chapters themselves are excluded from the build until the paywall project. Is that right? And should the 9 finance-app icons (Monzo, Wise, etc.) also be excluded from the published output?

**Q3. Should a 404 "page not found" design be requested from Claude Design?** It's the only missing page type. Recommendation: yes, request it there; I won't improvise one.

### B. Content model

**Q4. Dates.** The design shows "date analyzed" on every app, "last updated" on the homepage, and a dated "New this week" section. v44 content has no dates at all. Recommendation: during conversion I add a date field to every content item, pre-filling from the file history where it gives a plausible answer, and give you the list to correct. "New this week" and "last updated" then compute themselves. Agree?

**Q5. Visibility defaults.** Recommendation: convert the current reality — everything `subscriber` except the four currently-free items (Streak mechanic, Royal Match case study + system, Launching a Streak cheatsheet), with the glossary `public` (it's ungated today). All mechanics/apps/systems/cheatsheets *list pages* stay public with locked cards, as the design shows. Report content gets `report-only`. Agree, or different defaults?

**Q6. The 18 mismatched cross-references** (Part 2). Under the new architecture, each app's file becomes the single source of truth and mechanic pages compute their examples from it — so each mismatch needs one decision: does the app use the mechanic or not? Recommendation: the 7 cases backed by an existing write-up are real (keep, fixing the mechanic side automatically). The 11 unbacked ones I'd drop unless you say otherwise — please scan that list of 11 in Part 2 and flag any that are genuinely true and just missing their write-up.

**Q7. The six inconsistent system maps** (Ladder, FitOn, Freeletics, Liftoff, Gymverse, Clash of Clans). Their map data exists in multiple differing copies, and the surviving copy disagrees with the system's own mechanics list (table in Part 1). I cannot tell which version reflects your intent. Options: (a) you tell me the correct node list per app, (b) I prepare a side-by-side comparison of the copies for each of the six and you pick, or (c) treat the system's mechanics list in `data.js` as truth and I flag exactly which positions/connections are missing and need writing. My recommendation is (b) — it's the safest way to recover work that may exist in the earlier copies.

**Q8. Missing write-ups.** 36 mechanic-app relationships have no rich write-up (mostly the same six apps). The new case study design gives each mechanic a structured section, so the gaps will show. Recommendation: migrate as-is, render gracefully (the design has a pattern for shorter entries), and give you a to-write list — content authoring stays out of the migration. Agree?

### C. Design-content fit

**Q9. Mechanics filter values.** The design's sample filter values (onboarding, habit, progression, growth, status) don't match the content's real ones (activation, retention, monetization, referral). Content questions are answered by v44, so I'd use the real values rendered in the design's filter style — but this is exactly the kind of structural conflict the brief says to ask about. Confirm, or should the content adopt new context categories?

**Q10. Write-up headings.** v44's per-mechanic write-ups use headings *How X uses Y / How they present it / Why it works / Key findings*; the design's case study sections are labeled *What we observed / How it's presented / Worth noting / Key findings*. Recommendation: split the v44 text into its four parts and present them under the design's labels — content unchanged, presentation per design. Agree?

**Q11. Screenshots.** The design expects annotated screenshots (with labels, dates, numbered pins) throughout; v44 has one usable screenshot file, a few unregistered ones, and no annotation data. Recommendation: build full support for the design's screenshot treatment, register the few real screenshots that exist (Clash of Clans ×1, Subway Surfers ads ×4), show the design's placeholder style elsewhere, and treat adding screenshots as ongoing content work via the weekly import flow. The 8 Duolingo screenshots belong to no app in the library — confirm they should be left out. Agree?

**Q12. Hand-picked homepage content.** The design's homepage features a case study spotlight (Royal Match — fixed, per the page guide), a featured mechanics/apps preview, and one showcased system map. v44 hand-picks Strava-heavy features. Recommendation: spotlight and showcase stay editorial choices stored as a small, clearly-editable setting (defaulting to Royal Match per the page guide), everything countable computes itself. Which system map should the homepage showcase?

**Q13. Cheatsheets "coming soon" list.** The design's cheatsheets page has a "More coming soon" section listing six planned topics (sample text). Is there a real list of planned cheatsheets, or should that section be dropped until there is?

---

*End of Stage 0 report. Stage 1 (the vertical slice — one app end to end on Astro with a preview URL) starts only after you confirm Parts 1–3 match your understanding and answer the questions in Part 4.*
