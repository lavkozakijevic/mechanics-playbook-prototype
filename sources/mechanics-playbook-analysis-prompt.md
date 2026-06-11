# Mechanics Playbook — App Analysis Instructions

*Paste this document into a new chat and name the app you want analyzed. Claude will retrieve the Granola transcript and produce a structured analysis file.*

---

## What you are doing

You are producing an in-depth analysis of an app or game for Mechanics Playbook, a library of game and app mechanics by GameBiz Consulting. This analysis will be used in future chats or tools to generate content for the Mechanics Playbook website — case study pages, mechanic entries, system maps, and category reports.

Your job has two steps:

1. Retrieve the Granola transcript for the named app. Search across all available Granola sessions. If multiple sessions exist for the same app, retrieve all of them and treat them as a single body of evidence.
2. Produce the structured analysis file using only what the transcript contains. Do not invent observations. Do not fill gaps with general knowledge. If something is not in the transcript, leave the section blank or mark it as not covered.

---

## Tone and language

- Observational throughout. Describe what was seen, not what was intended.
- Specific over general. "The energy cap depletes after 5 failed attempts and surfaces a purchase prompt immediately" not "the energy system creates monetization pressure."
- No filler. If a section has no evidence, leave it blank. Do not write sentences that pad space.
- No editorial judgement. Do not describe mechanics as good, bad, clever, or manipulative unless that exact word appeared in the transcript.
- No em dashes.
- Conversational and direct. Write as a knowledgeable colleague reporting observations, not as a consultant producing a deliverable.
- Numbers exactly as mentioned in the transcript. Do not round, estimate, or convert.

---

## Mapping rules

These rules govern how transcript observations become mechanic entries. Apply them before writing any entry.

**Rule 1: Evidence first.**
A mechanic only appears in the file if the transcript contains direct evidence of it — a named screen, a specific trigger, a described interaction, a stated number. If you are inferring that a mechanic exists from context rather than observation, it does not belong in the mechanics observed section. It may belong in the unrecognized mechanics section with an honest description of what was actually seen.

**Rule 2: Fit the definition, not the shape.**
Each mechanic has a definition with boundary conditions (see below). An observation that resembles a mechanic but does not meet the definition does not get mapped to that mechanic. It is either absent, or it is an unrecognized mechanic. Do not stretch definitions to fill entries.

**Rule 3: Absence is a valid answer.**
If none of the 25 mechanics are present, say so. If only one is present, document one. An analysis with three honest entries is more useful than one with eight forced ones.

**Rule 4: Unrecognized mechanics get their own section.**
If something interesting is happening in the app that does not fit any of the 25 definitions, do not map it to the nearest library mechanic. Document it in the Unrecognized Mechanics section with a neutral description of what was observed and why it might be worth naming.

**Rule 5: Check yourself before each entry.**
Before writing any mechanic entry, answer these three questions. If any answer is no, do not write the entry.
- Is there a specific moment in the transcript — a screen, a trigger, a number, an interaction — that confirms this mechanic exists?
- Does the evidence fit the mechanic definition including its boundary conditions, not just its name?
- If this mechanic were removed from the app, would the engagement or retention pattern change?

---

## The 25 mechanics — definitions and boundary conditions

Each mechanic below includes what it is, what it is not, and the minimum evidence required to log it.

**Retention**

`streak`
A counter that tracks consecutive completions of a defined action — typically daily logins or daily workouts — and resets to zero when the player misses a day. The streak number itself is displayed and treated as a value worth protecting.
Not this: a win-streak within a single session that resets at session end. Not this: a purchase chain labeled "streak." Minimum evidence: a visible counter that tracks consecutive days and a described reset or protection mechanic.

`energy-lives`
A cap on the number of attempts or sessions a user can take within a time window. Depletes through use. Regenerates automatically over time or via purchase. The cap is the gating mechanism — without it, the user could play indefinitely.
Not this: a daily pack limit that resets every 15 hours but does not gate core gameplay (that may be `daily-login-reward` or a variant). Not this: a credit entry fee that can be bypassed by earning more currency. Minimum evidence: a named cap with a depletion and regeneration mechanic described in the transcript.

`daily-login-reward`
A reward granted for opening the app each day, where the trigger is the login or app open itself — not a specific action taken inside the app. Includes free daily packs, daily gift calendars, and daily resource claims where the act of opening the app (or returning to it each day) is what triggers the reward.
Not this: a reward earned by completing a specific task or action inside the app. Not this: a reward earned by scanning a physical product. Minimum evidence: a described reward that appears on app open or daily return, independent of any specific in-app action.

`variable-reward`
A reward system where the outcome is uncertain at the time of opening or pulling. The player does not know what they will receive before receiving it. Includes gacha pulls, loot boxes, spin wheels, chests with unknown contents.
Not this: a reward with disclosed, fixed contents (e.g. "you will receive exactly 200 credits"). Not this: a pack that guarantees specific items by category (e.g. "9 missing Cosmic stickers" — the identity is unknown but the category and count are fixed; assess whether genuine uncertainty exists). Minimum evidence: a described pull or open mechanic where the outcome is not known in advance.

`daily-weekly-quests`
Structured objectives that reset on a daily or weekly cadence and direct the user toward specific in-app actions. The reset creates recurring engagement pressure.
Not this: one-time onboarding tasks that do not recur. Not this: permanent achievement targets. Minimum evidence: a described set of objectives with a named reset cadence (daily, weekly) observed in the transcript.

`set-collection`
Items organized into named sets where completing a full set unlocks an additional reward, status, or milestone. The set structure — not just having many items — is what defines this mechanic.
Not this: a general inventory of items with no set grouping. Not this: a single collection without named subsets and a completion reward per set. Minimum evidence: named sets with defined membership and a described completion reward per set.

`limited-time-events`
Temporary content, challenges, or reward tracks that expire on a fixed deadline, where the deadline is a meaningful constraint on the player's ability to access the content.
Not this: the app itself having an end date (that is a product constraint, not an engagement mechanic). Not this: a purchase window on a bundle. Minimum evidence: a named event with a described deadline and content that expires.

`achievements`
Named, permanent markers of progress or behavior. Earned once and retained. Displayed to the user and often to others. The permanence and naming are what distinguish achievements from quest completions.
Not this: a progress bar that resets. Not this: a quest that completes and disappears. Minimum evidence: named badges, titles, or milestones described in the transcript that are permanently retained and displayable.

`challenges`
Structured objectives with a visible endpoint that users opt into, often with social or competitive dimensions. Distinct from daily quests in that they are not automatically assigned — the user chooses to participate. Often tied to a specific theme or event.
Not this: standard daily quests automatically assigned to all users. Not this: permanent achievement targets. Minimum evidence: a described opt-in structure with a visible endpoint and reward, distinct from the app's standard quest system.

`xp-leveling`
Experience points that accumulate through actions and cross named thresholds (levels) that unlock content, rewards, or status. Both the accumulation mechanic and the threshold unlock must be present.
Not this: a progress bar with no named levels or threshold unlocks. Not this: a farm or meta level that unlocks areas but has no XP accumulation described. Minimum evidence: a described XP or equivalent accumulation mechanic with named levels and described unlocks at those levels.

`passive-construction-meta`
A persistent construction or restoration layer where the output of the core activity — currency, completions, or time — is invested into visibly building something that accumulates across sessions: a village, a car, a city, a farm. The constructed object is the long-term destination of play, and its progress may also advance in real time while the user is away (build timers, builders).
Not this: cosmetics (visual items without cumulative construction progress). Not this: xp-leveling (numeric advancement without a constructed object). Not this: set-collection (completing named sets rather than building a persistent object). Minimum evidence: a described construction or restoration layer with visible cumulative progress fed by the core activity and persisting across sessions.

**Monetization**

`season-pass`
A time-limited reward track with at least two tiers — one free, one paid — where users advance through the track by completing in-app actions. The paid tier delivers meaningfully better rewards than the free tier.
Not this: a one-time bundle purchase. Not this: a subscription. Not this: a free-only reward track with no paid tier. Minimum evidence: a described dual-tier track with a purchase option for the paid tier and advancement through in-app actions.

`piggy-bank`
A mechanic that accumulates in-game currency passively as the user plays — win or lose — and requires a purchase to unlock and collect the accumulated amount. The accumulated value is visible to the user before purchase.
Not this: a standard currency wallet. Not this: a daily login reward. Minimum evidence: a described accumulation mechanic that fills passively, a visible accumulated amount, and a purchase required to collect it.

`first-purchase-bonus`
A disproportionately enhanced reward specifically tied to the user's first real-money transaction, designed to lower the barrier to initial payment by making the first purchase dramatically more valuable than subsequent ones.
Not this: a sale or discounted bundle that is available to all users. Not this: a welcome bonus for registering. Minimum evidence: a described offer explicitly framed as a first-purchase or new-user bonus with a notably higher value than comparable regular purchases.

`monthly-card`
A single upfront payment that provides a daily drip of currency or resources over approximately 30 days. The defining feature is the daily delivery mechanism over an extended period from a single purchase.
Not this: a one-time bundle. Not this: a subscription with monthly charges. Minimum evidence: a single purchase price with a described daily delivery of resources over a multi-week period.

`credits-tokens`
A virtual currency layer that mediates between real money and in-app spending — an abstraction layer where real money is first converted to credits or tokens, which are then spent on items. The abstraction is the defining feature, not the currency itself.
Not this: hard currency (purchased directly with real money and spent directly on items — that is `hard-currency`). Not this: soft currency (earned through play). Minimum evidence: a described conversion step between real money and a currency that is then spent separately on items.

`cosmetics`
Purely visual items that alter the user's appearance, profile, or environment without affecting capability, performance, or progression.
Not this: items that also provide gameplay benefits (e.g. a profile frame that also grants extra lives). Minimum evidence: a described item category that is explicitly visual-only with no stated gameplay effect.

`ads`
Advertising integrated as a revenue mechanism — rewarded video (opt-in, grants reward), interstitials (non-optional, between actions), or offerwalls (complete third-party offers for rewards).
Not this: a sponsorship logo or brand placement. Not this: a physical product scan that grants in-app content (that is a product integration, not an ad mechanic). Minimum evidence: a described ad unit with a defined type (rewarded, interstitial, offerwall) and a described reward or placement.

`hard-currency`
Premium currency purchased directly with real money and spent directly on in-app items or actions. The purchase-to-spend path has no intermediate conversion step.
Not this: credits-tokens (which involve a conversion step). Not this: soft currency (earned through play). Minimum evidence: a named currency with described real-money purchase options and direct spend surfaces.

`soft-currency`
In-game currency earned through play, not purchased. Spent on in-app items, upgrades, or actions.
Not this: hard currency (purchased with real money). Not this: credits-tokens (conversion layer). Minimum evidence: a named currency earned through gameplay with described spend surfaces.

**Social**

`social-feed`
A stream of user-generated activity — posts, completions, achievements, scores — that is visible to followers or the broader community in a feed format.
Not this: a leaderboard (ranked list, not a feed). Not this: a public profile (individual display, not a stream). Minimum evidence: a described feed of activity from multiple users visible in a scrollable stream.

`community-groups`
Named groups with a shared identity that users join voluntarily and return to as members — without the structured cooperative goals and roles of clans/guilds. Forums, fan groups, topic-based communities.
Not this: clans/guilds (which have structured roles and collective rewards). Not this: a friends list. Clubs with their own feeds, events, and even member leaderboards still map here unless collective reward tracks and contribution mechanics are present — belonging is community, cooperation toward shared rewards is clans/guilds. Minimum evidence: a described group with a name, voluntary membership, and shared identity visible to members.

`clans-guilds`
Structured cooperative groups with internal membership, shared goals or collective reward tracks, and consequences for individual contribution (or lack of it) to the group.
Not this: a simple friends team with no shared goals or collective mechanics. Not this: a community group without structured rewards. Minimum evidence: a described group structure with shared goals or reward tracks and described contribution mechanics.

`leaderboards`
A ranked list ordered by a performance metric where individual standing is visible and directly comparable to others. The ranking and the metric must both be present and meaningful.
Not this: a public profile showing personal stats (no ranking). Not this: a team member list showing completion percentages (no ranking against others). Not this: a friends list sorted by level. Minimum evidence: a described ranked list with a named metric where the user's position among others is explicitly shown.

`gifting`
Sending items, currency, or resources to another user unilaterally — the sender gives, the recipient receives, with no required reciprocal exchange.
Not this: trading or swapping (bilateral exchange where both parties give and receive). Not this: a shared reward that all team members claim (not directed from one user to another). Minimum evidence: a described mechanic where one user sends a specific item or resource to another user with no required return.

---

## Development level

For each mechanic observed, assign one of these:

- **Core** — central to the experience, prominently surfaced, present throughout
- **Supporting** — present and functional, contributes but not central
- **Shallow** — technically present but underdeveloped or easy to miss
- **Unusual** — present but applied differently from standard implementation

---

## Output format

Produce the analysis as a markdown document using this exact structure.

```markdown
# [App Name]

**ID:** [app-id — lowercase, hyphenated, e.g. fc-mobile]
**Category:** [e.g. Sports Game / Fitness / Finance / Food Delivery]
**Type:** App / Game
**Platform analyzed:** iOS / Android
**Analysis date:** [DD Month YYYY — from transcript if available, otherwise leave blank]
**Last updated:** [DD Month YYYY — today's date]
**Session state:** [First install / Returning user — day X / Subscribed / Free tier]

---

## Overview

[2–3 sentences. What this app or game is. What it primarily tries to get the user to do.
Observational — no editorial judgement. Written from what the transcript describes.]

---

## First impression

[What the onboarding experience looks like based on the transcript. What the app asks of
the user before showing its value. What the first mechanic moment is. Only include what
the transcript covers.]

---

## Core activity

[Start with one sentence giving the overall character of the experience as observed.
Then describe what the user does inside the app. Strictly observational.]

---

## Mechanics observed

[One entry per mechanic found in the transcript. Order by development level — Core first.
If no mechanics from the 24 are present, write: "No mechanics from the 24-mechanic
framework were observed in this session."]

### [Mechanic Name] (`mechanic-id`) · [development level]

**What was observed:**
[Specific description from the transcript. Numbers exactly as mentioned. Screen names,
trigger moments, reward amounts, timing. No interpretation.]

**How it is presented:**
[Where in the app it appears. How it is framed to the user. Visual treatment if described.]

**What is notable:**
[What this implementation does that is worth noting — specific to this app's approach.
Skip this section entirely if the transcript contains nothing distinctive about this mechanic.]

**Screenshot suggestions:**
[Generate suggestions for moments worth capturing visually. Base suggestions only on
screens the transcript actually described. Each suggestion is a bracketed description
of the exact moment to capture, followed by one sentence on why it matters for
documenting this mechanic.]

`[Screenshot showing X]`
*Why this moment matters for documenting this mechanic.*

---

[Repeat for each mechanic observed]

---

## Mechanics not observed

[Mechanics from the 24 that appear absent, only where absence is notable — either because
the category typically uses them or because the app seems like a natural fit for them.
Do not list mechanics that simply do not apply to the app type.]

---

## How mechanics connect

[Only for apps with more than 3 mechanics. How mechanics reinforce each other based on
what the transcript shows. Factual — describe relationships, not outcomes.]

---

## Session rhythm

[Session length, return pressure, and session-end or return-trigger moments from
the transcript.]

---

## Monetization observed

[Purchase options, timing, and pricing exactly as mentioned in the transcript.
If no monetization was observed, write: "No monetization was observed in this session."]

| Product | Price | What it delivers |
|---|---|---|
| [name] | [price] | [description] |

---

## What stood out

[2–4 specific observations from the transcript that were surprising or notable.
Named screens, specific numbers, specific interactions. Not general impressions.]

---

## Analysis notes

[Anything affecting how this analysis should be used: subscribed account, mid-event
session, regional variant, gaps in transcript coverage.]

---

## Category context

[Only if the transcript contains explicit comparisons to other apps in the same category.
Leave blank otherwise.]

---

## Unrecognized mechanics

[Any engagement mechanic observed in the transcript that does not fit any of the 25
definitions above. Document each one with:
- A working name in backticks
- What was observed (specific, from the transcript)
- Why it does not map to an existing library mechanic
- Whether it seems worth adding to the library

If nothing unrecognized was observed, write: "None observed."]

### `[working-name]`
**What was observed:** [specific description]
**Why it does not map to an existing mechanic:** [brief explanation]
**Worth adding to library:** Yes / Possibly / No
```

---

## Before producing the output

Run this checklist before writing. Do not skip it.

**Sourcing**
- [ ] Every mechanic entry has at least one specific moment from the transcript — a screen name, a trigger, a number, an interaction — that confirms it exists
- [ ] No observation has been imported from general knowledge of the app or genre
- [ ] If multiple Granola sessions existed for this app, all were retrieved and used

**Mapping accuracy**
- [ ] Every mechanic uses its library ID, not a freeform label
- [ ] Every mechanic entry was checked against its definition and boundary conditions before being written
- [ ] No gameplay mechanic has been included (auto-play, crafting chains, tutorial systems, push notification prompts, core controls)
- [ ] `leaderboards` was only logged if a ranked list with a named metric and visible user position was described — not a profile, not a team member list, not a stats page
- [ ] `gifting` was only logged if a unilateral send mechanic was described — not a swap, not a trade, not a shared team reward
- [ ] `daily-login-reward` was only logged if the trigger is app open or daily return, not a specific in-app action
- [ ] `clans-guilds` was only logged if shared goals or collective reward mechanics were described, not just a group or team feature
- [ ] `passive-construction-meta` was only logged if a persistent constructed object with cumulative visible progress was described, not a task list alone
- [ ] `hard-currency`, `soft-currency`, and `credits-tokens` were distinguished by the conversion test: credits-tokens requires a described conversion step between real money and a currency spent separately; direct purchase-to-spend is hard currency; earned through play is soft currency

**Completeness**
- [ ] Development levels reflect how prominently each mechanic featured in the transcript
- [ ] Screenshot suggestions are grounded in screens the transcript actually described
- [ ] Anything interesting that does not fit the 25 mechanics is in the Unrecognized Mechanics section
- [ ] Absent mechanics are only listed where absence is notable, not as a complete inventory of everything not present
