# Subway Surfers

**ID:** subway-surfers
**Category:** Casual / Endless Runner
**Type:** Game
**Platform analyzed:** iOS
**Analysis date:** 07 May 2026
**Last updated:** 15 May 2026
**Session state:** Session 1 — first install. Session 2 — returning user (ad strategies and cosmetics focus).

---

## Overview

Subway Surfers is an endless runner where a character sprints through a subway environment collecting coins and items while evading a pursuing inspector. The game is structured around a score multiplier system advanced through mission completion, with a large cosmetics catalogue (characters, hoverboards, upgrades) funded by two in-game currencies. Rewarded video ads are embedded throughout nearly every reward surface in the game.

---

## First impression

Session 1 opens with an age entry slider, then an Apple tracking permission dialog, then immediately drops the player into the gameplay with on-screen arrow guides showing swipe controls. A double-tap hoverboard tutorial is shown mid-run. On failing the first run, the player lands on the home screen where a prize popup appears (1,000 coins), with an offer to watch an ad to double it to 2,000 coins. The first thing the home screen presents after the initial run is a 500-coin ad reward banner and an add-friends prompt.

There is no narrative or character introduction, no tutorial menus, no onboarding quiz. The player is running within seconds of opening the app.

---

## Core activity

The player runs through a procedurally generated subway environment, swiping left/right to change lanes and up/down to jump or roll, collecting coins and power-ups while avoiding trains and barriers. Runs end either on collision or by using a key to continue. Between runs, the player visits the home screen to collect queued rewards, watch ads for bonuses, check missions, manage cosmetics, and use accumulated coins and keys on upgrades and store items. The score multiplier — increased by completing mission sets — is the primary progression axis.

---

## Mechanics observed

### Ads (`ads`) · Core

**What was observed:**
Rewarded video ads appear across more surfaces in Subway Surfers than in any other app analyzed. The following ad placements were observed:

**Home screen:**
- Post-run prize popup: 1,000 coins awarded; watching an ad doubles it to 2,000 coins.
- Persistent 500-coin banner on the home screen: "get 500 coins by watching an ad."
- Three-key reward banner at the bottom of the home screen: "get three keys by watching an ad."
- "Coins galore" exclusive deal: watch 3 ads to earn 20,000 coins. Countdown: 7 hours 48 minutes. Progress counter: 0 out of 3 watched.

**Store (Store tab):**
- Daily gift: first one free, second can be acquired by watching an ad.
- Token box: can be unlocked by watching a video ad.
- Three blue keys: available by watching a video ad.
- Hoverboard: 300 coins or watch an ad.
- Score booster: 3,000 coins or watch an ad.
- Head start: 2,000 coins or watch an ad.

**Daily Rewards:**
- Five daily rewards are each unlocked by watching an ad. The screen states "watch more ads to earn all the rewards before time runs out."
- Missed daily login rewards can be claimed by watching an ad or spending 5 keys.

**Missions:**
- Mission "Jump 15 times": completable by playing, or by watching an ad to skip it immediately.

**Mystery Box Mania:**
- Watch 10 ads anywhere in the game to unlock rewards. A counter tracks progress (0 out of 10 at time of observation). Surfaced in both the store and the daily rewards screen.

**Ad tickets (paid ad bypass):**
- "Ad tickets get you instant rewards without watching ads." Priced at $2.99 for 10 tickets, $4.99 for 25 tickets, $9.99 for 60 tickets.
- "No more forced ads" offer: $1.99 for 5 ad tickets, 20 hoverboards, 15 keys.
- "Skip ads" limited deal: $19.99 for 180 ad tickets + 10 hoverboards + 3 fire speed-ups + 3 blue stars. $39.99 for 420 ad tickets + 20 hoverboards + 5 fire speed-ups + 5 blue stars.
- Getting any purchase unlocks Boombot (a robot cosmetic character) and removes pop-up ads: "Get Boombot for free with any purchase. No more pop-up ads."

**How it is presented:**
Rewarded ads are surfaced as an alternative to coin/key payment at every major spending point — often positioned side-by-side with the currency cost so the player sees "300 coins OR watch an ad" simultaneously. The daily rewards screen is entirely structured around ad watching, with five ad slots to fill. The Mystery Box Mania counter aggregates ad watches from anywhere in the game into a 10-watch reward milestone. The ad ticket system creates a secondary monetization layer specifically for players who want ad rewards without watching.

**What is notable:**
The ad ticket product inverts the typical rewarded ad model: players pay real money to skip the act of watching ads while still collecting the rewards those ads would have granted. Mission completion by ad watch means a player can skip gameplay requirements with an ad rather than a purchase. The "no more pop-up ads" framing implies non-rewarded interstitial ads also exist, separate from the rewarded video system — the $1.99 purchase eliminates those.

**Screenshot suggestions:**

`[Store tab showing the daily gift, token box, and three-key reward all with "watch ad" buttons side by side with coin/key costs]`
*Documents the density of rewarded ad placements within a single store view.*

`[The "coins galore" exclusive deal showing 0/3 ads watched, the 20,000 coin reward, and the 7:48 countdown]`
*Documents the time-limited ad-watch accumulation offer as a distinct ad placement type.*

`[Ad ticket pricing screen showing $2.99/10, $4.99/25, $9.99/60 with "get instant rewards without watching ads" copy]`
*Documents the paid ad-bypass mechanic — a second monetization layer built on top of the rewarded ad system.*

---

### Daily Login Reward (`daily-login-reward`) · Core

**What was observed:**
Two separate daily reward systems were observed.

**Daily Login Calendar:** Appears as a popup when opening the app. "Check in daily to get rewards. Claim missed days to catch up." A multi-day calendar is shown. The milestone reward for 20 total logins is the Freebird hoverboard ("login 20 times to get free bird"). At time of observation: 0 out of 20 logins completed. Missed days can be claimed retrospectively by paying 5 keys or watching an ad per missed day: "claim the missed rewards — you can claim these 1,000 coins by [5 keys or watch an ad]."

**Daily Rewards (ad-based):** A separate daily reward track with 5 slots, each unlocked by watching a rewarded video ad. The screen states "watch more ads to earn all the rewards before time runs out." The Mystery Box Mania offer (10 ads total across the game for a reward package) is displayed alongside this screen, framing the daily ad-watch track as one component of a larger ad accumulation goal.

**Bonus Keys Trail:** A 10-day daily key delivery offer, triggered by purchasing the first day's set. Day 1 purchase: 40 keys for $7.99. Subsequent days (no additional purchase required): 20 keys / 5 keys / 10 keys / 20 keys / 10 keys / 55 keys / 10 keys / 10 keys / 20 keys. Limited-time trigger: 15 hours 14 minutes remaining at time of observation.

**How it is presented:**
The login calendar popup appears on app open. The daily ad-based reward screen appears in the store. The Bonus Keys Trail appears as a timed offer on the home screen. All three are described as separate surfaces rather than a unified daily reward hub.

**What is notable:**
The missed-day catch-up mechanic removes the penalty for missing the daily login by making any missed reward claimable for 5 keys or an ad watch. This eliminates streak pressure while keeping the user return incentive. The Freebird hoverboard as the 20-login milestone is a cosmetic reward that requires no purchase — purely attendance-based.

**Screenshot suggestions:**

`[Daily login calendar showing the 20-login structure with Freebird hoverboard as the milestone reward and a missed-day "catch up" bubble on one entry]`
*Documents the calendar structure, the cosmetic milestone reward, and the catch-up mechanic.*

`[Daily Rewards screen showing five ad-watch slots, the "watch more ads to earn all rewards before time runs out" message, and the Mystery Box Mania counter below]`
*Documents the ad-based daily reward track and how it connects to the Mystery Box Mania accumulation goal.*

---

### Cosmetics (`cosmetics`) · Core

**What was observed:**
The Me section of the game contains four tabs: Characters, Boards, Upgrades, and Collections.

**Characters:** A large catalogue of character skins. Acquisition methods observed:
- Purchase with coins (in-game soft currency).
- Purchase with keys (in-game hard currency).
- Purchase with event coins (event-specific currency — 30,000 event coins for specific event characters, or 459 keys as an alternative).
- Direct purchase with real money: characters at $9.99 each, cosmetics at $2.99 each, mentioned.
- Bundle purchase: the Party Bundle (24-hour timer) includes 2 characters, 1 board, 5 blue star score boosters, 10 hoverboards.
- Earned through events and showdowns.
- Earned by adding a friend: adding a friend unlocks Dino, Dino Portrait, and grants 5,000 coins.
- Boombot: unlocked free with any store purchase.

Some characters have exclusive running animations. Some are time-limited and unavailable outside their window. Some are collected by gathering specific in-game items (hats, tape recorders, flying saucers).

**Boards:** Hoverboards with visual variants. Acquisition methods observed:
- Free: one board always available for free.
- In-game currencies (coins or keys).
- Bundle purchases.
- Login milestone: Freebird board unlocked at 20 login days.
- Timed offers.

**Upgrades:** Permanently increase pickup duration for in-game power-ups. Four upgrades listed, each at 500 coins: Jetpack (flies into sky, collects bonus coins), Super Sneakers (jump higher than normal), Coin Magnet (collects all nearby coins, 2x range), Multiplier (doubles score while power-up is active).

**Collections:** Unlocks at score multiplier level 7. Not accessible during this session beyond the requirement note.

**How it is presented:**
Accessed via the Me tab on the home screen. Characters and boards are displayed in a scrollable catalogue with price tags, timer badges on limited items, and bundle callouts. The Subway Surfer Studio allows taking photos with unlocked characters and backgrounds, which can be shared as PNGs.

**What is notable:**
Cosmetics have no gameplay benefit beyond the Upgrades tab (which provides functional benefits — longer power-up duration, coin magnet range). The character and board catalogue separates purely visual items from functional upgrades. The friend-unlock cosmetic (Dino) is the only social-gated item described.

**Screenshot suggestions:**

`[Characters tab showing a mix of coin-priced, key-priced, event-coin-priced, timed, and bundle characters in the catalogue with their distinct price badges]`
*Documents the multiplicity of acquisition methods for cosmetics in a single view.*

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Core

**What was observed:**
The missions system is the primary progression mechanic for the score multiplier. Missions are structured in sets of three. The current mission set observed had three objectives: pick up 100 coins in one run, jump 15 times, pick up 2 pogo sticks. Each mission can be completed by playing, by paying coins to skip (1,700 coins each), or by watching an ad to skip (for the jump mission at minimum).

Completing mission sets increases the score multiplier. The multiplier affects the player's in-game score: "finish missions to increase your score multiplier. Higher multipliers increase your score."

Score multiplier levels gate content: score multiplier 4 unlocks quests, score multiplier 7 unlocks collections. The bundle offer — "permanent score boost" at $4.99 — instantly adds 5 levels to the score multiplier, plus 50,000 coins, 20 keys, and 5 score multiplier upgrades.

**How it is presented:**
Accessed via the Missions tab on the home screen. The missions popup explains the multiplier connection upfront. Skip options (coins and ad) are displayed per mission. A separate quests tab is shown as locked until multiplier level 4, with missions as the path to unlock it.

**What is notable:**
Missions are completable three ways simultaneously — gameplay, coins, or an ad watch — all presented with equal visual weight. The score multiplier as the sole output of mission completion means missions function as a progression gate (to unlock quests and collections) rather than a standalone reward track. Watching an ad to skip a mission is the clearest example of an ad placement replacing gameplay.

**Screenshot suggestions:**

`[Mission set screen showing three active missions each with their gameplay requirement, 1,700-coin skip option, and watch-ad skip option side by side]`
*Documents the three parallel completion paths and the score multiplier as the reward output.*

---

### Variable Reward (`variable-reward`) · Supporting

**What was observed:**
The Mystery Box is available in the store for 500 coins. The token box in the store can be opened by watching an ad or by spending keys. Contents of either box were not described in detail — the transcript noted "we're collecting some stuff" on opening the token box.

Card packs in the collections system are tiered by the score multiplier level: the transcript from Session 1 referenced "purple packs for first two options... silverish pack... golden" tied to purchase tiers in the store. Store purchases at higher credit tiers include different pack quality (purple packs at 11k–30k credit range, silver pack at 110k, golden at higher). Contents of packs are not described beyond being related to the collections album system (which unlocks at multiplier level 7 — not reached in session).

Letter collection during runs (collecting letters that spell a word tied to the current day — "Thursday" during the observed session) was described as a passive collection mechanic mid-run. What completing the word yields was not described.

**How it is presented:**
Mystery Box has a fixed coin price with unknown contents. Token box requires an ad or keys. Pack tiers are visible in the store tied to credit bundle sizes.

**What is notable:**
Variable reward is present but underdeveloped in the session evidence — the mystery box was purchased and described only as "collecting some stuff," and the collections system (the main card pack destination) was not accessible due to the multiplier level gate. The mechanic exists but its full implementation was not covered.

**Screenshot suggestions:**

`[Store showing the Mystery Box (500 coins) and token box (ad or keys) side by side with their acquisition paths]`
*Documents the two variable reward entry points visible in the store.*

---

### Achievements (`achievements`) · Supporting

**What was observed:**
An achievements section is described as accessible in the game. "We can see different achievements that we have and what they bring for us as we get these achievements — we see what we're going to get in the end, for example, some in-game currency." Named achievement categories or individual achievement names were not described in detail. The observation confirms the mechanic exists as named, permanent progress markers with described rewards.

Profile stats visible on the player card include score, coins, and level displayed persistently. Missions completion feeds the score multiplier, which is itself a permanent accumulated stat.

**How it is presented:**
Accessible from the home screen navigation. Rewards for achievements are in-game currency.

---

### Leaderboards (`leaderboards`) · Supporting

**What was observed:**
Top Run is a weekly competitive mode accessible from the home screen. "Compete against your friends and foes. Climb the ranks, earn medals and rewards. New chance to compete every week." A minimum score of 25,000 is required to enter the current week's Top Run. Two ranking views are available: friends leaderboard and country leaderboard. At the time of observation, the player had not added friends yet — the friends tab was empty. The country leaderboard shows ranked scores against other players in the same country with the player's position visible.

**How it is presented:**
Accessible via the Top Run button on the home screen. Weekly reset creates a recurring competitive window. Medal and reward outcomes tied to final rank.

**What is notable:**
The minimum score requirement (25,000) gates entry — players below this threshold cannot participate. This implies the leaderboard is competitive rather than participatory, and connects to the score multiplier system (higher multiplier = higher score = better leaderboard performance).

**Screenshot suggestions:**

`[Top Run screen showing the country leaderboard with ranked scores, the weekly reset timer, and the 25,000 minimum score entry requirement]`
*Documents the ranked structure, the named metric (score), and the user's visible position.*

---

### Limited-Time Events (`limited-time-events`) · Supporting

**What was observed:**
Season of Sakura Tokyo was visible in Session 1 as an active seasonal event accessible from the home screen. The session noted "season of Sakura Tokyo — we'll need to restart there, there's a free one we can get, and we have to watch an ad again." Event coins are a distinct currency used to purchase event-specific characters (30,000 event coins for a character observed in Session 1, with 459 keys as an alternative). The Events tab on the home screen is described as locked and "locks at 4 stars level 4."

In Session 2, the Bonus Keys Trail was a 10-day limited offer with 15 hours 14 minutes until expiry on the purchase window for Day 1. The Party Bundle (2 characters, 1 board, 5 score boosters, 10 hoverboards) had a 24-hour countdown.

**How it is presented:**
The Events tab on the home screen is the primary event surface. Timed deals appear as banners on the home screen and inside the store. Event currency (event coins) is separate from standard coins and keys and is earned specifically through event participation.

**What is notable:**
Events are locked behind a stars/level progression gate (4 stars, level 4) that was not reached in either session. The evidence for this mechanic is therefore limited to what was visible before the gate — the season name, event currency, event-priced characters, and the locked Events tab indicator.

---

## Mechanics not observed

**Streak:** No consecutive-day counter with a reset and protection mechanic was described. The login calendar catch-up feature explicitly removes streak consequences by making missed days claimable.

**Energy-Lives:** No cap on the number of runs per time window was described. Players appear to be able to start new runs immediately after failing.

**Season Pass:** No dual-tier reward track with free and paid tiers advanced through in-app actions was described. The Bonus Keys Trail has a purchase trigger for Day 1 and then delivers free keys for 9 subsequent days — closer to a purchase-ladder than a season pass.

**Piggy Bank:** No accumulate-while-playing, purchase-to-unlock mechanic was described.

**Clans-Guilds:** No structured cooperative group with shared goals or collective rewards was described. Social features are limited to friends leaderboard comparison.

**Set Collection:** The collections tab (unlocks at score multiplier 7) was referenced but not accessible. Letter collection during runs was mentioned without describing a completion reward. Insufficient evidence to log this mechanic.

---

## How mechanics connect

**Ads and daily login reward converge.** The daily rewards screen is entirely structured around watching ads. The login calendar and the ad-based daily reward track are separate systems, but both are presented in close proximity and both feed the Mystery Box Mania counter. A player maximizing daily engagement watches ads to complete the daily rewards track, checks in for the login reward, and accumulates toward the 10-ad Mystery Box Mania milestone simultaneously.

**Score multiplier connects missions to all downstream systems.** Completing missions raises the score multiplier. A higher multiplier produces a higher in-run score. A higher score enables Top Run leaderboard entry and competitive ranking. Score multiplier level 4 unlocks quests; level 7 unlocks collections. Missions are therefore the gateway mechanic for leaderboards, quests, and collections.

**Ads and currency are interchangeable at most spending points.** Watching an ad is explicitly offered as an alternative to coin or key payment for hoverboards, score boosters, head starts, mission skips, and daily gift access. This creates a choice architecture where the free-to-play path and the ad-viewing path occupy the same visual space, and the paid path (ad tickets) sits alongside both.

**Cosmetics and currency are deeply interlinked.** Characters and boards can be acquired through coins, keys, event coins, real money, bundles, event completion, friend-adding, or purchase-gated unlocks (Boombot). No single acquisition path dominates — the catalogue is accessible at multiple spend levels simultaneously.

---

## Session rhythm

**Session 1** was a first-install session focused on the initial run experience and home screen discovery. **Session 2** was a deliberate audit of ad placements and the cosmetics system by a returning player — described explicitly as "focusing on ads and cosmetics."

**In-run session length:** Runs end on collision. A key extends the run ("use a key to continue"). No time limit on runs was described.

**Return pressure:** Daily login calendar (daily), daily ad-based rewards (daily, time-limited), Coins Galore exclusive deal (7 hours 48 minutes), Top Run weekly reset, Bonus Keys Trail (10-day streak with daily delivery), timed bundle offers (24 hours for Party Bundle, 15 hours for Skip Ads offer).

**Post-run moment:** On returning to the home screen after a run, the player is presented with a prize popup (1,000 coins with a 2x ad-watch offer) before seeing anything else. This post-run return moment is the highest-traffic ad placement in the game.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| 10 ad tickets | $2.99 | 10 instant rewards without watching ads |
| 25 ad tickets | $4.99 | 25 instant rewards without watching ads |
| 60 ad tickets | $9.99 | 60 instant rewards without watching ads |
| No more forced ads | $1.99 | 5 ad tickets, 20 hoverboards, 15 keys |
| Skip ads (limited) | $19.99 | 180 ad tickets, 10 hoverboards, 3 fire speed-ups, 3 blue stars |
| Skip ads (limited) | $39.99 | 420 ad tickets, 20 hoverboards, 5 fire speed-ups, 5 blue stars |
| Skip 30 ads (1 day 23 hrs) | not stated | 10 hoverboards, 3 blue keys, 5 fire speed-ups, 30 ad tickets |
| Bonus Keys Trail Day 1 | $7.99 | 40 keys; then 9 days of free key deliveries (total: 160 additional keys) |
| Party Bundle (24 hrs) | not stated | 2 characters, 1 board, 5 blue star score boosters, 10 hoverboards |
| Permanent score boost bundle | $4.99 | +5 score multiplier levels, 50,000 coins, 20 keys, 5 multiplier upgrades |
| Character (direct purchase) | $9.99 | One character skin |
| Cosmetic (direct purchase) | $2.99 | One cosmetic item |
| 7,500 coins | $0.99 | 7,500 coins |
| 40,000 coins | $4.99 | 40,000 coins |
| 90,000 coins | $9.99 | 90,000 coins |
| 200,000 coins | $19.99 | 200,000 coins |
| 550,000 coins | $49.99 | 550,000 coins |
| 1,250,000 coins | $99.99 | 1,250,000 coins |
| 25 keys | $4.99 | 25 keys |
| 55 keys | $9.99 | 55 keys |
| 125 keys | $19.99 | 125 keys |
| 350 keys | $49.99 | 350 keys |
| 800 keys | $99.99 | 800 keys |

---

## What stood out

1. **Ad watching is offered as an alternative to gameplay completion for missions.** The jump-15-times mission can be skipped by watching an ad — not by paying coins, but by watching an ad. This is the most direct instance of an ad replacing a gameplay action observed across any app in this library. It positions ad watching as equivalent in value to actual play.

2. **The ad ticket system monetizes ad-watching behavior itself.** Players who have grown accustomed to watching ads for rewards can purchase ad tickets to continue receiving those rewards without the ads. This creates a second monetization surface built entirely on top of the rewarded ad system — players pay to replicate the reward structure of watching ads without the friction of watching them.

3. **Any purchase removes pop-up ads and unlocks a cosmetic character (Boombot).** This is the clearest non-ad-ticket monetization incentive — a single purchase of any product eliminates interstitial ads for the remainder of the game. The $1.99 "no more forced ads" pack is the lowest-cost entry point to this benefit. This structures the entire non-rewarded ad experience as a paywall: free players see forced ads; any paying player does not.

4. **The daily rewards screen has no free option.** All five daily reward slots require watching an ad. There is no free daily reward on this screen — the free login calendar is a separate system. Players who open the app daily and do not watch ads receive only the login calendar reward, not the daily rewards track. The entire daily rewards track is an ad monetization surface.

---

## Analysis notes

Two sessions. Session 1 was a first-install run, covering the core gameplay and home screen. Session 2 was a deliberate returning-user audit of ad placements and the cosmetics system — the session title ("Subway Surfers ad strategies") and the transcript framing ("we're focusing on ads and cosmetics here") indicate this was not a natural play session but a directed analysis of specific systems. As a result, the ad and cosmetics observations are comprehensive while systems like events, collections, quests, and the full store were only partially covered. The Events tab was locked behind stars/level 4 and not accessed in either session.

---

## Category context

No explicit comparisons to other games were made in either transcript.

---

## Unrecognized mechanics

### `ad-bypass-purchase`
**What was observed:** Ad tickets are sold in the store at $2.99 / $4.99 / $9.99 for 10 / 25 / 60 tickets respectively. Each ticket grants "instant rewards without watching ads" — meaning the player receives the same reward a rewarded video ad would have granted, without watching anything. Multiple ad bypass bundles also exist at $19.99 and $39.99 with large ticket quantities included. Separately, any purchase in the store removes pop-up (non-rewarded interstitial) ads permanently and unlocks the Boombot character.
**Why it does not map to an existing mechanic:** Not `ads` — this is the inverse of ads: paying to receive ad rewards without ads, and paying to remove non-rewarded ads. Not `cosmetics` — the Boombot unlock is a side effect of an ad-removal purchase, not a cosmetic purchase. Not `first-purchase-bonus` — the Boombot and ad removal apply to any purchase at any time, not specifically the first. This is a distinct monetization layer that treats the ad-watching behavior itself as a product, selling access to ad rewards and ad-free experience as purchasable states.
**Worth adding to library:** Yes

### `score-multiplier-progression`
**What was observed:** The score multiplier starts at 1x and increases by completing sets of three missions. Each multiplier level permanently increases the score earned in runs. The multiplier also gates content: multiplier 4 unlocks quests, multiplier 7 unlocks collections. A $4.99 bundle instantly adds 5 levels to the multiplier. The multiplier is a permanent account stat — it does not reset between runs or sessions.
**Why it does not map to an existing mechanic:** Not `xp-leveling` — there is no XP accumulation and no threshold level unlocks through XP. Not `daily-weekly-quests` — missions are the input, not the mechanic itself. The score multiplier is the output of mission completion and the input to leaderboard performance and content gating. It is a permanent account-level stat that grows through mission completion and directly scales in-run rewards, functioning as a distinct progression axis separate from account level, currency balance, or cosmetic ownership.
**Worth adding to library:** Yes

### `hard-currency` (Keys)
**What was observed:** Keys are purchased directly with real money (25 keys for $4.99, up to 800 keys for $99.99) and spent directly on in-game items — continuing a run after failure, purchasing characters (459 keys for a specific event character), unlocking token boxes, claiming missed login rewards (5 keys per missed day). No intermediate conversion step between real money and keys.
**Why it does not map to an existing mechanic:** Not `credits-tokens` — no conversion layer. Keys are purchased and spent directly.
**Worth adding to library:** Flagged as a known library gap.

### `soft-currency` (Coins, Event Coins)
**What was observed:** Coins are earned through runs (collecting in-game coins), post-run prize popups, daily login rewards, watching ads, mission completion rewards, and friend-adding bonuses. Coins are spent on characters, boards, upgrades (500 coins each), mystery boxes (500 coins), hoverboards (300 coins), score boosters (3,000 coins), and head starts (2,000 coins). Event coins are a separate currency earned through event participation and spent on event-specific characters (30,000 event coins per character). Event coins are not described as purchasable.
**Why it does not map to an existing mechanic:** Coins are a standard soft currency. Event coins are a time-limited event-specific soft currency that expires or becomes irrelevant when the event ends. Neither is purchased with real money; both are earned through play.
**Worth adding to library:** Flagged as a known library gap.
