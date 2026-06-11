# Chrome Valley Customs

**ID:** chrome-valley-customs
**Category:** Casual / Puzzle + Meta (Car Restoration)
**Type:** Game
**Platform analyzed:** iOS
**Analysis date:** 03 Mar 2026
**Last updated:** 19 May 2026
**Session state:** First install — played from first launch through completion of Episode 1 and opening of Episode 2

---

## Overview

Chrome Valley Customs is a match-3 puzzle game published by Offroad Games, wrapped in a car restoration and customization meta-game. Players complete match-3 levels to earn coins, which fund a sequence of named restoration tasks on a specific car. Each task involves a three-option customization choice (e.g., stock vs. flared vs. vented arches), and the completed car is revealed in a cinematic at the episode's end. A cast of named characters — Uncle Hank (garage owner), Donna (engine specialist), Big Rig (mechanic), Gabby (deal maker), Angelo (paint expert) — provides narrative continuity and commentary. The game has 52 episodes visible at launch, 89,000 App Store ratings at 4.7, and is rated 9+.

---

## First impression

The app opens horizontal. The first screen is a data consent notice ("we collect central data to run our game — accept our terms of service and privacy policy"), followed by an Apple tracking permission dialog. The home screen shows a character illustration with a dog carrying an Olympic torch (a Winter Games seasonal reference at time of recording) and two buttons: Play and Save Progress. No account creation is required to play. Save Progress requires sign-in via Google or X — no Apple sign-in option.

Tapping Play begins an asset download, then a cinematic introduces the narrative: Uncle Hank (garage owner) and Donna (engine specialist) explain that the garage was robbed by a character named Greasy Jo and that the player has been hired to help save it. The player names their character (1–60 characters, letters and numbers only). The first task is immediately assigned: "strip down and assess the car — costs 50 coins." Free coins are already in the wallet to cover the first task, demonstrating the core loop before any match-3 is required.

---

## Core activity

Players complete named restoration tasks on a car (strip, replace panels, fit rims, install engine, paint, add decals) to advance an episode. Each task costs coins. When the coin balance runs short, the player drops into a match-3 level to earn more. Restoration tasks present three customization options for each component, with character commentary on the player's choice. Completing all tasks in an episode reveals the finished car in a cinematic, the client reacts with personalized dialogue, and the next episode begins. Simultaneously, a limited-time event (Rig's Road Trip) runs in parallel, collecting gas cans dropped during match-3 play.

---

## Mechanics observed

### Passive Construction Meta (`passive-construction-meta`) · Core

**What was observed:**
Each episode is a linear sequence of named restoration tasks — strip down and assess, replace front fenders, fix quarter panel, fit new rims, change rim color, change tires, remove engine, replace engine, fit back bumper, clean rust, fit headlights, fit tail lights, fit interior, choose seats, select trim color, select dash color, fit steering wheel, add window tint, paint, polish, add decals, reveal car — approximately 22 named tasks in Episode 1. Each task shows the car model updating visually after completion, with a progress bar in the top-left corner advancing from 0% to 100%.

Each customization task presents three named options with character notes (e.g., "factory stock panels are perfect for authentic restoration" vs. "rolling out the wheel arches is a classic custom car mod" vs. "custom flares give the car real track stance"). After the choice is made, characters respond in character-specific ways: Big Rig comments on mechanics, Angelo on aesthetics, Donna on engineering, Gabby on sourcing. The client (Taylor) also responds at the episode's end with dialogue that references specific choices the player made.

At 100% task completion, a car reveal cinematic plays (3D model, interior and exterior views, engine audio), and the episode's client delivers custom dialogue tied to the player's customization choices.

**How it is presented:**
Tasks are listed in a task panel (top-left corner icon). Each completed task updates the car model visibly. A progress bar shows percentage completion. The player can scroll around the car at any point using a photo mode with 3D rotation. Any customization choice can be revised at any time during and after the episode — players are not locked into decisions.

**What is notable:**
The passive-construction meta here is driven by spending coins (earned from match-3) rather than real-world behavior (as in Fortune City) or in-game soft currency earned through passive idle mechanics (as in Royal Match). The car is the visual output of all match-3 activity — every coin earned and spent produces a visible change to a 3D object the player is authoring. The client's personalized response at episode end ("I'm glad you kept the factory springs — keep it classic, baby") specifically references the player's choices, making the outcome feel authored rather than generic.

**Screenshot suggestions:**

`[Task panel showing approximately 8 active tasks with progress bar at 52%, alongside the partially restored car model]`
*Documents the task list structure, the progress bar, and the car model as the visual output of task completion.*

`[Car reveal cinematic showing the finished Episode 1 car with client Taylor and his personalized dialogue referencing specific chosen parts]`
*Documents the episode-completion cinematic and the customized client response as the payoff for the construction meta.*

---

### Energy-Lives (`energy-lives`) · Core

**What was observed:**
Players start with 5 hearts. Each failed match-3 level costs one heart. Hearts are displayed in the top bar. The game reached a state where infinite hearts were active (30 minutes of infinite health awarded from Rig's Road Trip event completion), and the timer counted down visibly on screen. During this window, failed levels did not consume hearts.

The heart system was not encountered as a hard blocker during this session because the event reward granted temporary infinite hearts before the natural limit was hit. However, the hearts were visible throughout and described as the standard energy mechanic.

**How it is presented:**
Hearts displayed in the top bar alongside coins and gems. When infinite health is active, a countdown timer shows the remaining duration. Multiple sources of infinite health were observed: from the Rig's Road Trip event rewards (30 minutes), from store bundle purchases (1 hour, 6 hours, 18 hours), and from store packages.

**What is notable:**
The game grants infinite health through event participation rather than depleting and then gating — the session never reached a hard heart block, partly because the event reward preceded exhaustion. This is a softer energy mechanic presentation compared to Royal Match (where heart depletion triggers the team join prompt) or Solitaire Grand Harvest (where Peggy appears when lives run low).

---

### Variable Reward (`variable-reward`) · Core

**What was observed:**
Match-3 levels produce variable rewards at completion. Each completed level awards:
- Coins (primary currency for restoration tasks)
- Gems (secondary currency for store purchases)
- Gas cans (event currency for Rig's Road Trip)
- Occasionally: power-ups, toolboxes, infinite health timers

The exact quantity of each reward was not precisely stated per level, but the session described "perfect restoration" reward moments delivering coins and gems simultaneously. Toolboxes were awarded with disclosed contents shown before opening: "a toolbox which shows us what we're going to get in that toolbox as a reward."

In-level power-ups (hammer, rockets, bombs) appear as randomly placed board elements and as purchasable boosters selected before a level starts. Their positions and effectiveness vary by level layout.

**How it is presented:**
Reward delivery after each level uses a collection animation before returning to the car. The toolbox is a named container with disclosed contents (removing the variable reward element for that item). The event reward milestones (Rig's Road Trip) also disclose upcoming rewards: "the next reward is gems, then x2 multipliers, then 30 minutes of infinite health."

**What is notable:**
The match-3 level itself is the primary variable reward surface — each level run produces an unknown quantity of coins and gems, with the "perfect restoration" rating appearing to affect yield. The session reached level 10 during Episode 1, suggesting a sustained match-3 session is required to fund the full restoration sequence.

---

### Limited-Time Events (`limited-time-events`) · Supporting

**What was observed:**
Rig's Road Trip appeared as a popup mid-episode, approximately at the point when the first match-3 game was completed. Display: "collect 50 gas cans to get rewards — grand prize 10,000 coins — 2 days 9 hours remaining." The popup included a progress bar and a milestone reward visible: "30 minutes of infinite health" for reaching 50 gas cans.

After dismissal, the event appeared as a persistent banner in the center-top of the home screen, showing current progress (0/50 gas cans) and time remaining. Gas cans were collected automatically during match-3 play — no separate action was required.

The event reward structure was more complex than initially presented: 25 total milestones, not just the 50-gas-can gate. The rewards revealed progressively: gas cans → gems → x2 multipliers → 30 minutes infinite health → toolbox → additional loot boxes → 10,000 coins grand prize at milestone 25.

The session accumulated 228 gas cans through normal match-3 play by the time Episode 1 was complete, unlocking two milestone rewards (150 gems and a further reward) beyond the initial 30-minute infinite health.

**How it is presented:**
Popup introduction mid-episode at a natural break point. Persistent banner on home screen showing live progress. Rewards are surfaced progressively as milestones are crossed — the full reward list was not disclosed upfront, with the "25 total milestones" structure only becoming clear as play continued.

**What is notable:**
The event collects currency (gas cans) as a by-product of the core match-3 activity — no separate gameplay mode or action required. This is the same pattern observed in Royal Match (Egg Hunt) and Solitaire Grand Harvest (multiple events collecting items through normal play). The session explicitly noted: "new elements are being slowly added to the screen so that we are not overloaded with the number of things that are there" — the event appears at a point in the session where the player is familiar enough with the core loop to handle the additional layer.

**Screenshot suggestions:**

`[Rig's Road Trip event popup showing "collect 50 gas cans — grand prize 10,000 coins — 2 days 9 hours remaining" with progress bar and 30-minute infinite health milestone reward]`
*Documents the event structure, the milestone reward, the urgency timer, and the passive collection mechanic.*

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Supporting

**What was observed:**
The task panel (top-left corner icon) serves as the quest surface. Tasks are assigned narratively — characters instruct the player what to work on next ("rig reckons we should clean up some of this rust next" → a new task appears). Tasks cost coins to complete. Each task advances episode completion percentage.

This is more accurately described as a narrative quest system rather than a recurring daily quest system — tasks are episode-specific and do not reset on a daily cadence. However, the task panel functions mechanically as a quest list: named objectives, coin costs, visible progress, and rewards on completion.

The task panel also shows the leaderboard as a secondary tab after Episode 1 completes — indicating the task panel is a multi-function hub.

Logged at Supporting with a note that the evidence is for a narrative task system rather than a strictly daily/weekly reset quest mechanic. A recurring daily quest structure may exist at higher levels but was not observed in this session.

---

### Leaderboards (`leaderboards`) · Supporting

**What was observed:**
A global leaderboard appeared in the task panel after Episode 1 was completed. Two views:
- **Global leaderboard:** ranked by level (match-3 level reached) and a secondary metric (described as "trophies or whatever they might have"). Top 100+ players visible.
- **Country leaderboard:** ranked within Serbia (the player's location), showing level and trophy count for top local players.

The leaderboard appeared without prior announcement — it was not introduced during onboarding or the first episode. It appeared as a tab alongside the task list in the panel.

**How it is presented:**
Accessed through the task panel icon on the home screen. Two tabs: tasks and leaderboard. Country filtering is automatic based on device location.

**What is notable:**
The leaderboard uses match-3 level reached as the primary ranking metric — a pure skill/persistence measure rather than a social activity metric (unlike Strava's kudos count) or a currency metric. Players are ranked by how far they have progressed through the match-3 game, making the leaderboard a direct competitive expression of the core gameplay mechanic.

---

### Cosmetics (`cosmetics`) · Supporting

**What was observed:**
Car customization choices (panel styles, rim designs, rim colors, tire types, interior setups, seat materials, trim colors, dash colors, steering wheel styles, window tint levels, decal designs, paint color) are the primary cosmetic output of the game. These are not purchasable visual items applied to a player avatar — they are authoring choices made during the restoration meta that determine the appearance of the episode's car.

A photo mode allows the player to rotate the car model 360°, take photos from any angle, and add them to a scrapbook or share them directly. The showroom displays completed cars from past episodes.

**How it is presented:**
Customization choices appear as three-option selections during restoration tasks. The car is viewable at any time via the photo button (top-right corner). The showroom stores completed cars as a permanent gallery. Photos can be shared via standard iOS share sheet.

**What is notable:**
The sharing mechanic is embedded in the photo mode — sharing a car photo is described as the game's primary social moment. Unlike conventional cosmetics (purchased avatar skins), these are player-authored 3D objects that are shared as photos. This is closer to the social sharing of a created artifact than to cosmetic display in a social context.

---

### Achievements (`achievements`) · Shallow

**What was observed:**
No dedicated achievement system with named badges and a display surface was described in the session. Episode completion (Episode 1 complete — 100% progress bar) functions as a milestone marker but does not produce a named badge. The "perfect restoration" rating on match-3 levels may imply a rating system but was not confirmed as an achievement display.

The session noted episode completion rewards explicitly: "250 coins, 1000 gems, and 30 minutes of infinite health — episode complete." These are functional rewards, not named permanent achievement markers.

Logged at Shallow due to insufficient evidence. A named achievement system may exist at higher levels but was not encountered.

---

## Mechanics not observed

**Streak:** No consecutive-day counter or streak mechanic was described.

**Season Pass:** No dual-tier advancement track with free and paid tiers progressed through in-app actions was described.

**Set Collection:** 52 episodes are listed as a visible catalogue, but these are not organized into named sets with defined membership and completion rewards — they are a sequential content queue.

**Clans-Guilds / Community Groups:** No group or social community feature beyond car photo sharing was described.

**Ads:** No ad units — rewarded, interstitial, or otherwise — were described during the session. App Store reviews from two years ago specifically praise the game as "no ads." More recent reviews suggest this may have changed, but no ads were encountered in this session.

**Piggy Bank / Daily Login Reward:** None observed.

---

## How mechanics connect

**Match-3 funds the restoration meta.** The entire episode structure is: play match-3 → earn coins → spend coins on tasks → advance episode completion. The match-3 game and the car restoration are in a direct economic relationship — every level played directly funds a specific named restoration action.

**Events collect from match-3 automatically.** Rig's Road Trip gas cans dropped during normal match-3 play without any player action. The event reward (infinite health) fed back into match-3 by removing heart costs for 30 minutes, allowing more levels to be completed, which funded more restoration tasks.

**Energy gates match-3, which gates restoration.** If hearts are exhausted, match-3 cannot be played. If match-3 cannot be played, coins cannot be earned. If coins cannot be earned, restoration tasks cannot be completed. The energy system is the ultimate gate for all downstream activity.

**Narrative keeps players invested in the restoration output.** Each customization choice is commented on by a specific character in a consistent voice. The client's final response references specific choices made. This narrative investment makes the car the player is restoring feel authored rather than procedurally generated — raising the stakes for the match-3 activity that funds it.

---

## Session rhythm

**Session length:** The full Episode 1 playthrough — from first launch to episode completion and Episode 2 start — was described as taking approximately 30–40 minutes based on transcript length. Match-3 levels averaged 15–30 seconds each. Approximately 10 levels were played during Episode 1.

**Task-to-level ratio:** The session played approximately 10 match-3 levels across approximately 22 restoration tasks. Levels became necessary when coin balance fell below the next task cost. The ratio increased over the episode as task costs escalated — early tasks used pre-granted coins, later tasks (paint: 200 coins, reveal: 250 coins) required multiple level completions to fund.

**Return pressure:** Rig's Road Trip event (2 days 9 hours), infinite health timer (30 minutes countdown visible on screen), task list (multiple tasks pending).

**Session-end triggers:** The natural session end is episode completion. Within an episode, heart exhaustion is the session-end trigger. Coin scarcity within tasks creates micro-interruptions (drop to match-3) rather than hard stops.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Driver Bundle (Cold — car-specific, 6 days 23 hrs) | $2.99 (reduced from $5.99) | 1,500 gems, 2x each power-up, 15 min infinite health |
| Driver Bundle (Hot — car-specific, 6 days 23 hrs) | $4.79 (reduced from $15.99) | 5,000 gems, 3x each power-up, 15 min infinite health |
| 1,000 gems | $1.99 | 1,000 gems |
| 5,000 gems | $7.99 | 5,000 gems |
| 12,000 gems | $15.99 | 12,000 gems |
| Starter Sale (More Offers tab) | $1.99 (reduced from $9.99) | 2,000 gems, power-ups, infinite boosters for match-3, 1 hr infinite health |
| Second Starter Package | $5.99 | 2,000 gems, 3x boosters |
| Turbo Package (popular) | $9.99 | 5,000 gems, 1x boosters, hammer add-on, 1 hr infinite health |
| Track Package | not stated | — |
| Performance Package | not stated | — |
| Luxury Package | not stated | — |
| Executive Package | $99.99 | 65,000 gems, 13x boost add-ons, infinite boosters for 4 days, 18 hrs infinite health |
| 100,000 gems (gems-only store) | $19.99 | 100,000 gems |

The Driver Bundle is car-specific — it is named after the current episode's car ("Cold Driver Bundle") and appears mid-episode at the first paywall prompt, positioned as contextually relevant to the car being restored. Two tiers of the bundle are offered simultaneously.

The Starter Sale ($1.99) appears only under "More Offers" and offers significantly better value than the standard gem store — 2,000 gems + power-ups + 1 hr infinite health vs. 1,000 gems for $1.99 in the standard store. New users who do not discover the More Offers tab will pay more for fewer items.

---

## What stood out

1. **The client's episode-end dialogue references specific customization choices.** Taylor says "I'm glad you kept the factory springs — keep it classic, baby" in direct response to the panel style the player chose. This is not generic congratulations — it is NPC dialogue customized to the player's specific decisions, making the car feel personally authored and the episode completion feel earned rather than procedural.

2. **Match-3 levels lasted 15–30 seconds each, and the game required approximately 10 levels to fund one full episode.** The session noted this explicitly. This means a full episode playthrough involves roughly 3–5 minutes of match-3 play spread across ~22 restoration tasks. The match-3 levels are deliberately short, maintaining the feeling that they are interruptions in the restoration flow rather than the primary activity — even though they are mechanically the primary activity.

3. **The paywall appeared for the first time as a car-specific bundle mid-episode.** The first purchase prompt was the "Cold Driver Bundle" — named after the specific car being restored in Episode 1, appearing mid-episode when the session had generated investment in completing that car. The bundle's timing (after multiple levels of play and with the car significantly advanced toward completion) is a deliberate high-investment moment for the first conversion attempt.

4. **The More Offers store tab contains a Starter Sale with dramatically better value than the standard store.** 2,000 gems + power-ups + 1 hour infinite health for $1.99 in the More Offers tab vs. 1,000 gems for $1.99 in the standard store. The superior offer is hidden behind an extra tab — the same information asymmetry pattern observed in PicsArt's Plus plan and Strava's web-vs-app pricing.

---

## Analysis notes

One session. First install through Episode 1 completion and Episode 2 start. The session was recorded on March 3, 2026, with a Winter Games seasonal event visible (dog with Olympic torch on home screen, "Winter Game Event" in App Store listing). This event had ended by time of transcript review. App Store reviews indicate the game has changed significantly over the past two years — early reviews praise the absence of ads; more recent reviews cite aggressive monetization and increased difficulty after earning the Twin Turbo power-up. Neither ads nor the Twin Turbo mechanic were encountered in this first-install session. The showroom (completed car gallery) was noted but not explored. Episode 2 began with a new character (Christo), a new car (Japanese import), and a new story thread (the Greasy Jo antagonist introduced in Episode 1 is implied in Episode 2's setup), but the session ended at the start of Episode 2's power wash task without exploring further.

---

## Category context

The session noted the game's App Store category listing as "puzzle" — consistent with the match-3 mechanic being the category-defining gameplay. The meta-game (car restoration) is positioned as the differentiating feature. One review quoted in the session described it as "a puzzle game like Candy Crush, and you win levels to gain coins to restore and customize vehicles" — an accurate summary of the mechanic loop.

A second session titled "Match Creek Motors FTUE" was recorded on March 5 — this appears to be an analysis of a similar or competing title. That session is not included here.

---

## Unrecognized mechanics

### `narrative-npc-cast`
**What was observed:** Five named NPCs with distinct roles and personalities provide continuous commentary throughout the episode: Uncle Hank (garage owner, mentor figure, notes on car history and authenticity), Donna (engine specialist, focused on mechanical quality), Big Rig (mechanic, comments on the player's choices with mechanical insight), Gabby (deal maker, sourcing character who introduces new parts and makes jokes about sourcing channels), Angelo (paint and interior expert, aesthetic sensibility, introduced for the paint and interior phase). Each NPC speaks only within their domain of expertise — Donna does not comment on paint choices; Angelo does not comment on mechanical choices. The client (Taylor in Episode 1, Christo in Episode 2) responds at the episode end with dialogue that references specific customization decisions the player made. NPCs are introduced progressively across the episode as their domain becomes relevant.
**Why it does not map to an existing mechanic:** Not `passive-construction-meta` — the NPC cast is the narrative layer on top of the construction meta, not the mechanic itself. Not `achievements` — NPC responses are not reward markers. Not `cosmetics` — NPCs are story characters, not player cosmetic options. The narrative NPC cast is a character-driven storytelling mechanic that sustains engagement across the restoration sequence by providing consistent, domain-specific, personality-driven reactions to player choices. It is the primary mechanism preventing the restoration task sequence from feeling like a generic progress bar — each task completion produces a character reaction that advances the story and confirms the choice.
**Worth adding to library:** Possibly — the persistent NPC cast with domain-specific expertise commentary is a distinct engagement mechanic in meta-game-wrapped puzzle games (also present in Gardenscapes, Homescapes, and Royal Match's King Robert). Worth naming as a category-level pattern for the casual-meta game genre.

### `car-specific-bundle`
**What was observed:** The first store offer presented to the player was the "Cold Driver Bundle" — named specifically after the car being restored in Episode 1 and introduced mid-episode when investment in completing that car was highest. Two tiers at $2.99 and $4.79. The bundle name changed from "Cold Driver Bundle" to potentially different names for different cars in subsequent episodes (implied but not confirmed). The bundle appearance timing — mid-episode, after several levels of play and with the car noticeably advanced — is deliberate.
**Why it does not map to an existing mechanic:** Not `limited-time-events` — the bundle is a store product, not an engagement event. Not `first-purchase-bonus` — it is not specifically targeting the first purchase. The car-specific bundle is a contextually named purchase offer that is explicitly tied to the current episode's car, appearing at high-investment moments in the episode. The naming creates a pseudo-personalization effect (the offer appears to be made for this specific player's current project) while the timing maximizes conversion likelihood. Similar to the Royal Match "Easter Treasure" chain (an offer embedded at a natural high-engagement moment), but with context-specific naming rather than a time-limited structure.
**Worth adding to library:** Possibly — contextually named bundles that appear at high-investment moments in a narrative meta-game (tied to the specific car/project being worked on) are a distinct store mechanic worth noting as a monetization pattern for the casual-meta game genre.

### `soft-currency` (Coins, Gems, Gas Cans)
**What was observed:** Three distinct in-game currencies. Coins: earned from match-3 level completion, spent on restoration tasks (50–250 coins per task). Gems (described as emeralds in the transcript): earned from match-3 completion and event milestones, spent in the store on bundles and standalone gem purchases. Gas cans: event-specific currency collected automatically during match-3 play, spent implicitly by crossing Rig's Road Trip milestone thresholds (not a direct spend mechanic — milestones trigger automatically on accumulation).
**Why it does not map to an existing mechanic:** Not `hard-currency` — gems can be purchased directly with real money but are also earned through play. Coins appear to be purely earned (not purchasable directly). Gas cans are purely event-earned. The multi-currency structure separates the restoration economy (coins) from the store economy (gems) and the event economy (gas cans), preventing fungibility between content layers.
**Worth adding to library:** Flagged as a known library gap.
