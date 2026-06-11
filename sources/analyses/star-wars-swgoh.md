# Star Wars: Galaxy of Heroes

**ID:** swgoh
**Category:** Collectible RPG / Turn-Based Strategy
**Type:** Game
**Platform analyzed:** iOS
**Analysis date:** 05 Apr 2026 (Session 1), 06 Apr 2026 (Sessions 2 & 3)
**Last updated:** 19 May 2026
**Session state:** Session 1 — first install, played from first launch through player level 16. Session 2 — continuing play at level 18 with allies unlocked. Session 3 — continuing play focusing on the allies system and borrowing mechanic.

---

## Overview

Star Wars: Galaxy of Heroes (SWGoH) is a turn-based collectible RPG developed by Capital Games / EA. Players collect character cards (shards), assemble squads from the Star Wars universe, and battle across PvE campaigns, challenges, events, and PvP modes. The game is built around a deep character collection and upgrade system — each of 300+ characters has stars (rarity), gear level, ability level, and mod slots — with social elements (guilds, ally system, arena) layered on top. The game operates on a freemium model with crystals as the primary premium currency, a monthly login reward calendar, and an Episode Pass (seasonal battle pass).

---

## First impression

The first screen asks: "Do you have an account already?" with options for Import Account (EA Connect) or New Player. After selecting New Player, a loading cinematic shows Star Wars environments. The player is immediately dropped into a guided battle tutorial with Anakin Skywalker and Ahsoka Tano. The guide character (an alien woman, never named) provides all tutorial narration. A birth date entry prompt appeared mid-session (after two battles), followed by a character name selection ("this information will be visible to other players"). No paywall appeared during the tutorial — the first purchase offer appeared after name selection.

The onboarding keeps the player engaged in guided combat through the full first session, progressively revealing the cantina hub (the game's main navigation), the quest system, the store, and the character collection. Most hub features are locked behind player level thresholds and reveal themselves through level-up notifications as play continues.

---

## Core activity

Players battle in turn-based squad combat across multiple campaign modes (Light Side, Dark Side, Cantina Battles) to collect character shards, credits, gear, and other upgrade materials. Between battles, players upgrade characters (level, gear, ability, star promotion), manage squads, complete daily and journey quests, and participate in the Episode Track (season pass). Social modes (arena, guild events, challenges) unlock progressively as the player reaches higher levels.

---

## Mechanics observed

### Set Collection (`set-collection`) · Core

**What was observed:**
The character collection is the game's entire organizational structure. 300+ characters are organized into named factions (Galactic Republic, Rebel, 501st, Jedi, Bounty Hunter, Sith, First Order, Resistance, etc.) with named characters belonging to multiple factions simultaneously. Each character has:

- A star level (1–7 stars) determined by collecting character shards
- A gear level (1–13+) requiring specific gear items to advance
- An ability level (1–8 per ability, 4+ abilities per character)
- Mod slots (unlocked at gear tier thresholds)
- Relic Amplifier levels (unlocked at gear tier 13)

Characters observed during the session: Anakin Skywalker, Ahsoka Tano, Obi Wan Kenobi (Old Ben), Luke Skywalker (Farm Boy), Darth Vader, Kylo Ren (Unmasked), Princess Leia, Count Dooku, Royal Guard, Dark Trooper, Moff Gideon, Ray (Scavenger).

Shard acquisition sources: campaign battles (Normal and Hard mode, up to 5 runs/day on Hard), store shipments (spending crystals or credits), Chromium data cards (variable reward pulls), quest rewards, and inbox gifts.

Set completion incentives: the Journey Guide system (visible at player level 27) rewards completing faction-specific character collections. Unit synergies between faction members are displayed on each character's profile screen.

**How it is presented:**
The Collection tab (accessible from the cantina's main navigation) shows all characters in an inventory grid — both unlocked and locked characters with "Find" functionality showing which battles, packs, or shipments provide each character's shards. Faction tags on character profiles are tappable and filter the inventory. Characters with items to equip or upgrades available show notification badges.

**What is notable:**
The "Find" mechanic for any character — tapping it shows every possible acquisition source including which specific battles drop shards, which store packs contain the character, and which bundles are available — creates a complete transparency layer for the collection economy. Players can target specific characters and know exactly what to do to acquire them.

**Screenshot suggestions:**

`[Character inventory grid showing unlocked characters (Anakin, Ahsoka, Obi Wan, Luke, Darth Vader) alongside locked character silhouettes, with star levels and gear levels visible]`
*Documents the full collection display with both owned and unowned characters visible simultaneously.*

`[Character profile for Obi Wan Kenobi showing faction tags (Jedi, Galactic Republic, Rebel), star level 3, gear level 2, six gear slots with equipped and available items, and the Find button]`
*Documents the character profile depth and the gear slot system.*

---

### Variable Reward (`variable-reward`) · Core

**What was observed:**
Three distinct variable reward surfaces were observed:

**Bronzium Data Card:** Free every 10 minutes (up to 10 per day), purchasable for 250 ally points beyond the free limit. Each card produces either an item or a character shard from a pool of 33+ possible characters and 200+ possible items. Observed result: Teebo character shards (2 out of 25 needed to unlock). The card opens with an animation showing the card being revealed. The store listing shows all possible items and characters before purchase.

**Chromium Mega Pack (Light Side / Dark Side):** Costs 2,520 crystals for 8 cards. Guarantees one character (not a character shard set) per pack. Per-card probabilities: 20% chance of a full character, 80% chance of a character shard set. Shard set probabilities: 1.57% for 5 shards, 2.35% for 8 shards, 45.49% for 10 shards, 4.71% for 12 shards, 14.90% for 15 shards, 6.27% for 20 shards, 4.71% for 25 shards. 120 possible characters, 120 possible character shard sets. Full probability disclosure provided in store.

**Chromium Data Card:** 350 crystals per pull. No guaranteed character. 200+ possible character shard sets. No probability disclosure quoted for this tier.

**Credit Data Cards / Training Droid Data Cards:** Lower-tier pulls in the Supplies tab costing crystals or credits. Variable quantity outcomes (30,000 to 90,000 credits for the Credit Data Card depending on draw).

**How it is presented:**
Bronzium data card is in the store's Featured tab with a countdown timer ("free in 8 minutes 52 seconds"). Chromium packs are in the same tab with probability disclosures accessible by expanding the card detail. The Cantina Gift Pack (Luke Skywalker Farm Boy) was awarded as a one-time free tutorial reward during the session, delivered by the guide character with narrative framing.

**What is notable:**
Probability disclosures for the Chromium Mega Pack were described in full in the transcript — a rare case of complete transparency in a gacha system. The Bronzium data card's 10-times-daily limit with a 10-minute refresh is the most frequent variable reward surface observed in the library, creating return incentives every 10 minutes.

**Screenshot suggestions:**

`[Chromium Mega Pack store listing showing the full probability table — 20% character, 80% shard set, with all shard quantity probabilities listed — and the 2,520 crystal cost]`
*Documents the complete probability disclosure and the gacha economics of the premium pull.*

`[Bronzium data card being opened showing the card reveal animation and the "free in 10 minutes" countdown on the free daily limit]`
*Documents the frequent free variable reward surface and its 10-minute refresh cycle.*

---

### Daily Login Reward (`daily-login-reward`) · Core

**What was observed:**
Three distinct daily login reward systems were observed operating simultaneously:

**April Login Rewards (monthly calendar):** A 30-day calendar that appeared as a popup when the game was opened for the second time (Session 1, after completing four battles). Each day awards a set of items: Day 1 (20,000 credits), Day 28 (150,000 credits), Day 29 (Ability Material Omega), Day 30 (120 crystals + other materials). Rewards are not tied to specific calendar dates — they advance each day the player logs in, regardless of which calendar date it is. Missed days are unrecoverable ("missed rewards cannot be reclaimed"). Rewards reset at the beginning of each month. A player who started mid-month could collect only 24 of 30 rewards (no time to collect the final 6). The month's rewards include credits, crystals, training droids, ability materials, and a character shard progression track (a character reaching a specific level after 26 days of login).

**Jump to 85 Hyper Calendar (secondary calendar):** A separate 30-day calendar containing training droids and character shards awarded daily. Appeared as a free "guaranteed drop" in the store's Featured tab. A purchasable variant (Ultimate Starter Calendar, $4.99) offers 30 days of enhanced rewards. A third variant (Phoenix Squad Calendar, limited-time, 7 days remaining) was also available. Rewards described as persisting "until all are claimed or the calendar is replaced."

**Bronzium Data Card (10-minute refresh):** While not strictly a "login" reward, the Bronzium data card functions as a frequent daily reward: free 10 times per day on a 10-minute refresh cycle, described under the Variable Reward mechanic.

**How it is presented:**
The monthly April Login Rewards appeared as a popup on second app open. The Hyper Calendar appeared as a store item. Both require navigating to different surfaces (inbox/home for the login calendar, store for the Hyper Calendar). The login calendar's daily reward claim is a single tap.

**What is notable:**
Three simultaneous daily reward calendars — monthly login calendar, Hyper Calendar, and purchasable Phoenix Squad Calendar — create up to four daily reward collection moments (including the Bronzium card) for active players. The "missed rewards cannot be reclaimed" policy for the monthly calendar creates a daily return imperative without an explicit streak mechanic. The purchasable calendars ($4.99 Ultimate Starter, limited-time Phoenix) extend the daily login reward system into a monetizable category.

**Screenshot suggestions:**

`[April Login Rewards calendar showing the 30-day strip with Day 1 (20,000 credits) claimed, Days 2–30 visible with escalating reward icons, and the "rewards reset at beginning of each month" notice]`
*Documents the monthly calendar structure, the missed-day penalty, and the escalating reward value.*

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Core

**What was observed:**
Four distinct quest systems were observed, all accessed from the same Quests tab (each unlocking at different player levels):

**Journey Quests (available from start):** Sequential named objectives that advance the player through the game's tutorial arc. Examples: "Win Light Side Battle 1A," "Train Ahsoka Tano to Level 2," "Activate Obi Wan Kenobi," "Reach Player Level 6 to unlock daily quests," "Buy 4 Featured Shipments." Each completed quest is replaced by a new one. Journey quests reward shards, credits, crystals, and gear.

**Daily Quests (unlock at player level 6):** Seven tasks resetting at midnight each day ("reset in 21 hours 58 minutes" at time of observation). Examples: "Use 100 energy or cantina energy," "Finish 3 Light Side battles," "Finish 3 Hard battles," "Finish 10 battles," "Open 1 data card in the store," "Buy 3 store shipments." Completing all seven daily quests unlocks the Daily Activity Prize Box — variable contents including crystals, credits, training droids, sim tickets, ally points, and XP.

**Episode Quests (unlock at player level 10, tied to Episode/season):** Daily episode quests that award Episode Points (EP) for the Episode Track (battle pass). Some episode quests are free; others require the Episode Pass purchase to claim rewards. The notification badge appears on unclaimed episode quests regardless of whether the player has the pass — creating a persistent "something to collect" sensation even for non-paying players who discover the quest is pass-gated only on clicking it.

**Character Quests (unlock alongside episode quests):** Episode-specific quests tied to a featured "Marquee" character (the era's new character). Completing battles with and promoting the Marquee character generates Episode Points. Promotes engagement with a specific character rather than free squad choice.

**How it is presented:**
All four quest types appear in the Quests tab via subtabs. Journey quests are always visible. Daily quests appear after level 6. Achievements appeared as a fifth subtab (unlocking at player level 5) — these are Apple Game Center achievements.

**What is notable:**
The episode quest badge behavior — showing a notification for episode quests that are pass-gated, which only reveals itself as pass-gated after clicking — was explicitly identified in the session as a deliberate design choice: "they're prompting us with a notification that there is something to collect there but then when you go there you realize oh, this was going to do this the battle pass." The session described this as "very interesting" rather than deceitful.

**Screenshot suggestions:**

`[Quests tab showing four subtabs — Daily, Journey, Episode, Character — with notification badges on multiple tabs and the daily quest list showing 7 tasks with progress counters (18/100 energy)]`
*Documents the four parallel quest systems and the daily reset mechanic.*

---

### Season Pass (`season-pass`) · Core

**What was observed:**
The Episode Track unlocked at player level 10, introduced with the "Era of Andor" seasonal event. Structure:

- **Free track:** 50 milestone rewards available to all players
- **Episode Pass ($19.99):** Same milestones with enhanced rewards — "unlock premium rewards," "claim exclusive Episode Quests for faster progress"
- **Episode Pass+ ($49.99):** All Episode Pass benefits, plus immediately grants 50,000 Episode Points and unlocks 10 milestones instantly ("unlock 24 rewards, claim rewards instantly")

Episode Points (EP) are earned through: completing episode quests (primary source, "biggest source of EP"), completing character quests (tied to Marquee character), and participating in the Coliseum (era-exclusive game mode).

The Episode Pass also grants exclusive episode quests that non-pass players cannot complete — creating additional daily quest actions only available to paying players.

A "complete the Episode Track to earn repeatable bonus rewards until the Episode ends" mechanic exists beyond the 50-milestone track, providing ongoing rewards for players who complete it.

**How it is presented:**
The Episode Track is accessible from a dedicated button next to the Quests tab. It appeared on the cantina home screen with a notification when unlocked at level 10. Reward comparison between free and paid tiers is visible on the track itself, with paid rewards shown in highlighted colors adjacent to free rewards.

**What is notable:**
The $49.99 option — more than twice the price of the standard pass — is positioned as an "instant progress" offer: 50,000 EP and 10 milestones granted immediately at purchase. This is the most explicit pay-to-skip-to-milestone offer observed in the library. The pass-gated episode quest notification badge (described under Daily-Weekly Quests) extends the pass's influence beyond the track itself into the quest notification system.

**Screenshot suggestions:**

`[Episode Track showing free tier rewards alongside Episode Pass tier rewards for the first 10 milestones, with the $19.99 and $49.99 purchase buttons visible]`
*Documents the dual-tier structure, the reward differential, and the two price points.*

---

### Energy-Lives (`energy-lives`) · Core

**What was observed:**
Three distinct energy pools were observed, each governing a different battle type:

**Regular Energy (Lightning bolt icon):** Used for Light Side and Dark Side campaign battles. Started at 60 max, increased to 61 after first battle level-up ("max energy increased — you have earned 20 bonus energy"). Observed at 158 at one point (more than double max) due to bonus energy granted by level-ups and play rewards. Costs 6–8 energy per battle.

**Cantina Energy:** Used specifically for Cantina Battles. Unlocked at player level 8. Regenerates 1 point every 12 minutes ("your cantina energy will refresh by one point in 12 minutes"). Can be purchased for 100 crystals per refill.

**Ship Energy:** Used for Fleet Battles (unlocks at player level 60 — not reached in session). Described in the currency explanation screen.

Energy bonuses from level-ups: each player level-up granted 20 bonus energy, supplementing the natural regeneration and keeping the player well-stocked during the first session.

**How it is presented:**
Energy is displayed in the top bar alongside coins and crystals. Tapping the energy icon opens an explanation screen with the full currency description and purchase option. The "75 energy out of 61" display (more than maximum) confirms that level-up bonus energy can exceed the cap without being lost.

**What is notable:**
The three-pool energy system (Regular, Cantina, Ship) creates three separate daily consumption limits across three different game modes. Level-up bonus energy (20 per level) kept the player well above the cap throughout the first 16 levels, effectively removing energy as a blocking mechanic during the new player experience. This is a deliberate design choice: new players are given abundant energy to experience the full breadth of the game before the cap becomes a genuine constraint.

---

### Achievements (`achievements`) · Supporting

**What was observed:**
Achievements appear as a subtab in the Quests section, unlocking at player level 5. The guide introduced them: "you unlocked achievements — gain gear, credits and other valuable items each time you complete an achievement." Five achievements were completed and claimable at the time of discovery. Each achievement is individually claimable and provides specific rewards (gear, credits, other items). The full achievement list was not described in detail.

The achievements system routes through Apple Game Center — the session noted the achievements open as Apple Game Center's interface when accessed.

**How it is presented:**
Accessed via the Quests tab → Achievements subtab. Individual claim buttons on each completed achievement. Apple Game Center handles the display backend.

---

### Leaderboards (`leaderboards`) · Supporting

**What was observed:**
Three distinct leaderboard systems were described:

**Squad Arena:** A PvP ranking mode with a leaderboard of players ranked by arena battles. Unlocks at player level 28 (not reached). The cantina character next to the arena table said "no autographs please — reach player level 28 to unlock this feature."

**Fleet Arena:** PvP fleet battles with its own leaderboard. Unlocks at player level 60.

**Championships:** A competitive mode with leaderboard rankings. Unlocks at player level 85 — the game's current maximum level.

No in-game leaderboard surface was accessed during the session — all three were locked behind level requirements significantly higher than the session's player level 16–18.

**How it is presented:**
The cantina hub shows leaderboard-adjacent modes as locked icons. Characters standing next to each locked mode deliver dismissal lines ("no autographs please"). Level unlock requirements are visible on tapping any locked icon.

**What is notable:**
All three major competitive ranking modes were locked during this entire analysis period. The leaderboard mechanic exists but was not accessible, making this the only game in the library where leaderboards are a long-term content unlock rather than an immediately available feature.

---

### Clans-Guilds (`clans-guilds`) · Supporting

**What was observed:**
Guilds unlock at player level 22. The cantina character next to the guild table: "you look like you just got here — when you're ready to commit to a guild, come back and see me." Not reached during the session.

However, the Gifts tab in the store is explicitly described as a guild-gated feature: "feature locked — get to player level 22 and join a guild to access this feature." Guild Activities as a quest subtab was visible from the start (showing 0 out of 600) but remained locked throughout.

The newsletter feature in the inbox unlocked at player level 5.

**What is notable:**
Guilds appear to be a significant system (600 guild activity points as the visible quest count) but were locked behind a level threshold not reached in any session. The guild gift store tab — visible but locked — provides a persistent visual teaser for the guild system throughout the pre-level-22 experience.

---

### Limited-Time Events (`limited-time-events`) · Supporting

**What was observed:**
Multiple simultaneous limited-time events and offers were observed:

**Era of Andor (seasonal era):** A named seasonal content period introduced via popup at Session 1 start: "a new era has begun — Era of Andor — New Era Journey: Cassian Andor." The era introduced new characters (Cassian Andor, Andor era units), era-exclusive game modes (Coliseum, Major Partigaz), era currency, and the Episode Track (season pass). Era units are received automatically by logging in during the era ("you receive era units automatically as they arrive, just by logging in while the era is running"). The era collection shows 7 characters and tracks "Total Era Level" with a dedicated era currency as the progression metric.

**Coliseum:** An era-exclusive PvP mode with a countdown ("Coliseum: 20 hours 5 minutes remaining"). Unlocks at player level 20. Not reached.

**Major Partigaz arena:** Another era-exclusive event with its own character and unlock conditions.

**Limited-time character bundles (timed offers in store):** Multiple named character bundles with 6–7 day expiry windows appeared across both sessions:
- Darth Vader Lightspeed bundle: $9.99, 4 stars, gear level 6, 14 days 8 hours remaining
- Bounty Hunter Starter Bundle (Boba Fett): $4.99, 30 days remaining
- Administrator Lando Starter Bundle: $4.99, 7 days
- Phoenix Squadron: $7.99, 7 days
- Purge of Jedi Starter Bundle: $7.99, 6 days 13 hours
- Pedro de Romero Bundle (Andor era): $29.99, 30 days

Every time the player navigated away from the store and returned to the cantina, a new starter bundle popup appeared. The session documented this pattern explicitly: "every time we go out of the cantina somewhere else and we come back, we're getting offers for these starter deals."

**What is notable:**
The era system creates a meta-event layer where the season's narrative, characters, currency, game modes, and quest system are all unified under a named banner. This is the most structurally integrated limited-time event system observed in the library — not a parallel event running alongside the core game but a complete seasonal skin that modifies the quest system, store, collection, and competitive modes simultaneously.

**Screenshot suggestions:**

`[Era of Andor era collection screen showing total era level, era currency, 7 collectible era characters, and the Coliseum and Major Partigaz access points]`
*Documents the era system as a unified seasonal framework covering multiple game systems.*

---

### Social Feed / Allies (`social-feed`) · Shallow

**What was observed:**
The Allies system unlocked at player level 18 (Session 2). Structure: up to 50 allies, acquired by sending ally codes to friends or accepting suggested players. Allies' characters fill a sixth squad slot in battles. Using an ally's hero earns Ally Points (9–18 per battle observed), which fund Bronzium data card purchases (250 ally points per card beyond the free daily limit).

After winning a battle using a borrowed ally hero, the game prompts sending a friend request to that player — showing their name, guild, and the specific hero used. Session 3 noted that three consecutive suggested ally players all had "last activity" timestamps of 2,291, 3,028, and 3,400 days ago (6–9 years inactive). The session noted: "this is something that is very odd and feels very odd and feels that I will never get this person as an ally."

A messaging system exists (accessible from ally profiles): individual messages and group chats can be created. Player profiles show arena stats (Squad Arena, Fleet Arena, Championships — all unlocked or not).

**How it is presented:**
Allies is a navigation item in the cantina hub, unlocking at level 18. The borrow mechanic appears as a prompt before each battle after the ally system is unlocked. Ally suggestions are provided without filtering for active players.

**What is notable:**
The suggested allies appearing active but actually being inactive for nearly a decade is the most significant UX gap observed in Session 3. The session speculated the game may be using inactive player suggestions as a reactivation mechanism — the inactive player receives a notification that someone wants to be their ally — but the result for the active player is an empty ally roster and a misleading sense of social activity.

---

## Mechanics not observed

**Streak:** No consecutive-day counter with a named streak display and reset mechanic was described. The monthly login calendar creates a daily return incentive but does not display a streak counter.

**Piggy Bank:** Not observed.

**Cosmetics:** No avatar customization, profile frame, or purchasable visual items were described. Character appearance is fixed by their canonical Star Wars design.

---

## How mechanics connect

**Character shards connect variable reward to set collection.** Every pull from a data card, every campaign battle, every shipment purchase produces character shards. Shards fund star promotions. Star promotions increase power. Power determines competitive viability in arena and guild events. The entire variable reward economy feeds the collection system.

**Daily quests and episode quests both feed the Episode Track.** Completing daily quests generates general rewards. Episode quests generate Episode Points specifically. Both systems direct daily play toward the same battle activities (campaign runs, cantina battles, specific character battles) while rewarding differently — daily quests with general resources, episode quests with EP for the pass.

**The Bronzium card connects ally points to variable rewards.** Using allies generates ally points. Ally points purchase Bronzium cards. Bronzium cards generate character shards and gear. Character shards feed collection. This chain makes the social mechanics (allies) a contributor to the collection mechanics (set collection) through the variable reward surface (Bronzium card).

**Energy gates all battle modes, which gates all downstream systems.** Without energy, no battles can be fought. Without battles, no shards, gear, credits, or quest progress can be earned. The three-pool energy system (regular, cantina, ship) ensures no single pool bottlenecks the entire game — different pool exhaustions gate different game modes independently.

**The era system unifies seasonal content.** The Era of Andor's era currency, era characters, era quests, episode track, and Coliseum are all interdependent. Era currency is earned from era-specific modes. Era characters are acquired through the episode track. The Marquee character's quests generate episode points. The Season Pass (Episode Pass) monetizes engagement with all of these simultaneously.

---

## Session rhythm

**Session 1 duration:** Very long — approximately 2–3 hours based on transcript length, covering levels 1 through 16.

**Session 2:** Brief — focused on level 18 allies unlock.

**Session 3:** Focused on allies mechanic, approximately 30 minutes.

**Return pressure:** Monthly login calendar (daily, unrecoverable if missed), Bronzium data card (every 10 minutes, 10 times per day), daily quests (reset at midnight), episode quests (daily), Hard mode battle limits (5 per battle per day), cantina energy regeneration (1 per 12 minutes), episode track advancement.

**Level-up unlock cadence:** Content unlocks occurred at every level from 5 to 16+. At each level-up, new features were announced by popup: daily quests (level 6), shipments (level 7), cantina battles (level 8), episode track (level 10), squad saves (level 16), challenges (level 15), events (level 20), guilds (level 22), player profile (level 14), chat (level 18), newsletter (level 5), allies (level 18), Dark Side battles (level 12), arena (level 28), fleets (level 60), championships (level 85).

**Auto battle:** Available from combat UI — characters fight automatically at the set speed (1x, 2x, 4x). Used extensively in later battles ("let's do auto and let's increase speed as well so it goes very fast"). Sim tickets allow completing mastered battles (three-star completed) instantly without playing, consuming both a sim ticket and energy.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Ultimate First Order Starter Deal | $1.99 | 5 characters (Kylo Ren Unmasked, Kylo Ren, General Hux, Captain Phasma, First Order Stormtrooper) all at 4 stars, 500 crystals, millions of credits, training droids, gear/ability materials (85 items total) |
| Ultimate Empire Starter Deal | $1.99 | Similar scope for Empire faction characters |
| Ultimate Resistance Starter Deal | $1.99 | Resistance faction characters |
| Ultimate Phoenix Starter Deal | $1.99 | Phoenix Squadron characters |
| Ultimate Geonosian Starter Deal | $1.99 | Geonosian faction characters |
| Ultimate Jedi Starter Deal | $1.99 | Jedi faction characters |
| Ultimate Bounty Hunter Starter Deal | $1.99 | Bounty Hunter faction characters |
| Bounty Hunter Starter Bundle (Boba Fett) | $4.99 | 80 shards of Boba Fett, 1 million credits, 20 training droids (level 4), 30–66 gear items, 27 other items, 300 energy, 150 cantina energy; 7 days remaining |
| Administrator Lando Starter Bundle | $4.99 | Lando Calrissian faction; 7 days remaining |
| Purge of Jedi Starter Bundle | $7.99 | Jedi faction; 6 days 13 hours remaining |
| Phoenix Squadron | $7.99 | Phoenix faction; 7 days remaining |
| Darth Vader Lightspeed (limited) | $9.99 | Darth Vader at 4 stars, gear level 6, level 19; 14 days remaining |
| Padawan's Ability Bundle (new player offer) | $4.99 | Ability materials and credits; purchase limit 2; price revealed only after tapping "purchase" |
| Hyperdrive Bundle (one-time offer) | $9.99 | Upgrades for up to 73 characters and 20 ships; gear, resources, 85 player levels of activity access |
| Pedro de Romero Bundle (Andor era) | $29.99 | Era character upgrade; 30 days remaining |
| New Hope Bundle | $49.99 | Luke Skywalker and era characters; Jedi squad bundle also $49.99 |
| Episode Pass | $19.99 | Premium rewards on Episode Track + exclusive episode quests |
| Episode Pass+ | $49.99 | All Episode Pass benefits + 50,000 EP immediately + 10 milestones unlocked + 24 rewards claimed instantly |
| Large Galactic Enhancement Kit (one-time) | $14.99 | Gear and ability materials bundle |
| Bag of Crystals | $4.99 | 610 crystals |
| Box of Crystals | $9.99 | 1,340 crystals |
| Chest of Crystals | $19.99 | 2,800 crystals |
| Crate of Crystals | $49.99 | 7,370 crystals |
| Vault of Crystals | $99.99 | 15,710 crystals |
| Credit Data Card | 80 crystals | 30,000–90,000 credits (variable) |
| Credit Megapack (8x) | 560 crystals | 24,000–720,000 credits |
| Training Droid Data Card (10x Tier 3) | 27 crystals | 10 training droids |
| Training Droid Megapack (30x) | 74 crystals | 30 training droids |
| Chromium Mega Pack (Light/Dark) | 2,520 crystals | 8 cards; 1 guaranteed character; probabilities fully disclosed |
| Chromium Data Pack (4x) | 1,330 crystals | 4 cards; no guarantee |
| Chromium Data Card | 350 crystals | 1 card; no guarantee |
| Ultimate Starter Calendar | $4.99 | 30 days of training droids, character shards, upgrade materials |
| Phoenix Squad Calendar (limited, 7 days) | not stated | 30 days of Phoenix-faction-specific rewards |
| Cantina Energy Refill | 100 crystals | 120 cantina energy |

---

## What stood out

1. **The game has over 300 characters and every one of them is visible to the player from the start — with a "Find" button showing exactly how to acquire each one.** Unlike games that hide unearned content, SWGoH shows the complete collection inventory including locked characters, their faction tags, their acquisition paths, and which bundles contain them. This radical transparency turns the collection into a permanent goal map rather than a mystery.

2. **The price is hidden on multiple store offers — revealed only when the purchase button is tapped.** Starter deals appear with character descriptions and a "Go" button. Only after tapping "purchase" does the price appear in the payment dialog. The Padawan's Ability Bundle explicitly confirmed this: "they don't tell you how much you're gonna pay — they just sell it to you on the value principle and then get you to consider that you just purchased this." This is the most consistent price-concealment pattern observed across the library.

3. **Every return to the cantina from another screen triggered a new starter bundle popup.** Navigating from the store back to the cantina produced a new offer. Then from campaigns back to the cantina, another. The session accumulated 7+ distinct starter bundle popups across a single session — each with different factions, different characters, and no price listed. The pattern was explicit enough that the session noted it by name.

4. **The ally suggestion system surfaces players who haven't logged in for 6–9 years.** After unlocking allies at level 18, three consecutive ally suggestions showed "last activity" timestamps of 2,291, 3,028, and 3,400 days ago. A new player building their social layer is being directed toward a dead player base. The session noted this may be a deliberate reactivation mechanism, but the effect for the active player is an ally system that cannot deliver its core promise (characters to borrow from active players).

---

## Analysis notes

Three sessions across two days. Session 1 (April 5–6) was very long — covering first launch through player level 16. Session 2 (April 6) covered the level 18 allies unlock. Session 3 (April 6) focused on the allies borrowing mechanic. Many features observed in this analysis were encountered only as locked content with visible level requirements — the full depth of SWGoH (guilds, arena, fleet, championships, Galactic Legend characters, Conquest mode) requires sustained play well beyond the scope of a three-session analysis. The Era of Andor content was the active seasonal era at time of recording. The "New note" session ID `91b509ce-e2c1-43f3-b077-82f4be0fcd5f` from March 26, visible in the listing, may contain additional SWGoH content — this session was not retrieved as its title does not confirm it.

---

## Category context

No explicit comparisons to other collectible RPGs were made in the transcripts. The game's Star Wars license is the primary differentiator — the session noted "more than 300 characters to unlock — fascinating" and described the roster as including characters from across the full Star Wars timeline.

---

## Unrecognized mechanics

### `shard-unlock-system`
**What was observed:** Characters are not unlocked by finding a single item or completing a single action — they are unlocked by collecting a defined number of character-specific "shards" from multiple sources. Each character requires a different shard count to unlock at 1 star (typically 10–30 shards) and additional shards to promote to higher star levels (7 stars is maximum). Shards are acquired from: specific campaign battles (Normal or Hard mode, limited to 3–5 attempts per day per battle node), store shipments (rotating, purchasable with credits or crystals), data card pulls (random, with disclosed probabilities), quest rewards, and inbox gifts. Each character's shard sources are fully disclosed via the "Find" mechanic. A character with 24 of 25 required shards appears in the inventory as "almost unlocked" with a visual progress indicator.
**Why it does not map to an existing mechanic:** Not `set-collection` as defined — the shard system is the acquisition mechanic for the collection, not the collection structure itself. Not `variable-reward` — shards are the reward type, not the mechanic. The shard-unlock system is a deliberate friction design: requiring many small acquisitions from multiple sources over days or weeks (rather than a single pull) to unlock each character. It converts every battle and every store interaction into a micro-progress event toward a character goal, making short sessions feel productive. This is the primary engagement design of the gacha-collectible RPG genre.
**Worth adding to library:** Yes — the shard/fragment unlock mechanic (collect N pieces from multiple sources over time to unlock a character or item) is distinct from both set-collection and variable-reward and is the organizing acquisition design of the collectible RPG genre. Worth naming as its own mechanic.

### `auto-battle` / `sim-ticket`
**What was observed:** Two automation mechanics were observed. Auto battle: a toggle in combat UI that makes characters fight without player input, at selectable speeds (1x, 2x, 4x). Used extensively once early-game content became easy. Sim tickets: consumable items that allow instant completion of a previously mastered (3-star) battle node, consuming a sim ticket and energy simultaneously. "Multi-sim" allows simulating 1, 5, 10, or 20 runs at once. Sim tickets are earned from battles, level-up rewards, and store purchases. "Each hard mode battle can be completed five times per day to earn its rewards" — sim tickets allow doing all five in seconds rather than playing each.
**Why it does not map to an existing mechanic:** Not `energy-lives` — sim tickets are a consumption mechanic, not a regenerating resource. Not `variable-reward` — the outcome of simmed battles is fixed (the same rewards as if played). Auto battle and sim tickets together represent a combat automation system: play a battle once to establish the 3-star outcome, then automate future runs. This reduces the late-game repetitive grind without removing the content. It is a design pattern in gacha RPGs and progression-heavy mobile games worth naming.
**Worth adding to library:** Possibly — combat automation mechanics (auto-battle and instant-complete for mastered content) appear broadly in the gacha RPG genre and represent a deliberate design choice about the relationship between player effort and reward access.

### `hard-currency` (Crystals)
**What was observed:** Crystals are purchased directly with real money ($4.99–$99.99 for 610–15,710 crystals) and spent directly on store items — data card pulls, energy refills, shipment refreshes. No intermediate conversion step.
**Worth adding to library:** Flagged as a known library gap.

### `soft-currency` (Credits, Ally Points, Episode Points, Cantina Battle Tokens, Era Currency, Ship Building Materials, Sim Tickets, Training Droids, Gear)
**What was observed:** An extensive set of named soft currencies, each earned from specific activities and spent on specific items. Credits: earned from battles, spent on character activation, leveling, promotion, ability upgrades, and store purchases. Ally Points: earned from using borrowed ally heroes, spent on Bronzium data cards. Episode Points: earned from episode quests and character quests, advance the Episode Track. Cantina Battle Tokens: earned from cantina battles, spent in cantina shipments. Era Currency: earned from era-specific game modes, tracks era level progression. Ship Building Materials: earned from fleet battles, used to upgrade ships. Sim Tickets: earned from battles and packs, used to instantly complete mastered battles. Training Droids (multiple star levels): earned from battles and packs, spent to level up characters. Gear (hundreds of specific items): earned from specific battles and packs, equipped to character gear slots.
**Worth adding to library:** Flagged as a known library gap. SWGoH's currency count rivals Capybara Go! as the highest in the library.
