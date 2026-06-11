# Capybara Go!

**ID:** capybara-go
**Category:** Casual / Roguelite RPG
**Type:** Game
**Platform analyzed:** iOS
**Analysis date:** 12 May 2026 (Session 1), 13 May 2026 (Session 2), 15 May 2026 (Session 3)
**Last updated:** 15 May 2026
**Session state:** Session 1 — first install, first run from Day 1 to defeat at Day 40, followed by home screen exploration. Session 2 — returning user 24+ hours later, second run reaching Day 59. Session 3 — third session, completed Chapter 1 (survive 60 days), unlocked Chapter 2, played into Chapter 3 and Tower Challenge content.

---

## Overview

Capybara Go! is a roguelite idle RPG published by Habby (Archero, Survivor.io). A capybara character auto-battles through numbered days on a procedurally generated journey, encountering narrative events with branching choices, combat encounters, and random rewards. Runs end when the capybara is defeated or survives the chapter's day threshold. Between runs, persistent progression systems (talents, equipment, pets, mounts, collectibles, artifacts) carry over and grow. The game progressively unlocks features and content systems as chapters are cleared, creating a long expansion arc that extends well beyond the initial roguelite experience.

---

## First impression

The app opens with a notification permission request, a loading screen displaying Lunar New Year assets (from a past seasonal event that had already ended), a tracking permission dialog, and an ~86 MB asset download. There is no account creation or onboarding quiz. The game drops the player directly into a run with a moving capybara on day 1, showing combat stats (HP 400, Attack 100, Defense 25) and day-progression text events immediately. The entire first session plays out inside a single run before the home screen is seen.

---

## Core activity

The core loop runs in two phases. **During a run:** the capybara advances through numbered days automatically, with the player making branching choices at narrative events (pray to the goddess, sign a pact, search the hut vs. rest) and watching auto-battles in combat encounters. Skills are chosen at level-up moments. The run ends on defeat or chapter survival. **Between runs:** the player upgrades persistent talents with gold coins, equips and enhances equipment, manages pets, opens chests, and navigates an expanding set of permanent features (Tower Challenge, dungeons, black market, guild). Currency earned during runs funds the between-run upgrades. Each run starts fresh for skills but carries persistent stat boosts from talents and equipment.

---

## Mechanics observed

### Variable Reward (`variable-reward`) · Core

**What was observed:**
Variable rewards appear across multiple surfaces throughout the game.

**In-run spin wheel:** A forest maiden encounter triggers an optional spin wheel with outcomes: skill, experience points (30 XP), 100 attack, +10% health restore, or lose 15% HP. The player can choose to spin or leave. In Session 1, the first spin resulted in the lose-15%-HP outcome. In Session 2, the same encounter produced a favorable result. The wheel has approximately five segments — four wins and one loss.

**Equipment chests:** Multiple chest types with disclosed probabilities were observed:
- Adventure Supply Crate: common or great equipment. Guaranteed great in 9 opens. Free once, then 80 gems or watch 3 ads.
- Hero Supply Crate: great, rare, or epic equipment. Epic in 10 opens. 1 ad or a hero key.
- Limited Secret Chest (Event Chest): S epic equipment probability without guaranteed rate: 0.65%. Epic: 3%. Rare: 9%. Great: 25%. Common: 62.35%. 320 gems per pull, 2,980 gems for 10. Guaranteed rate mechanic described but not fully explained.
- Gold Chest, Silver Chest, Pet Chest: probability tables disclosed when tapping the chest info button.

**Pet eggs:** Hatching pet eggs produces random pets. In Session 3, opening eggs produced a parrot, mushroom, onion, frog, and others. Three ads can substitute for 300 gems to hatch one egg batch.

**In-run treasure mini-games:** Two mini-games observed: (1) "Spin to get treasure" — a wheel with no loss segment ("without being able to lose anything to get a power up"). (2) "Dig for treasure / Flip three identical cards to win rewards" — a card flip matching game for small treasure, big treasure, or gold.

**Skill choices at level-up:** Each level-up presents three random skills drawn from a pool, color-coded by rarity: common (purple), legendary (gold), mythic (implied top tier). In Session 1, the first two level-ups produced legendary skills, then subsequent ones offered common skills. Encountering elite enemies at day 25 produced mythic skill choices. The rarity distribution appears to shift based on combat milestones rather than purely on level.

**How it is presented:**
The in-run spin wheel appears as a narrative event (forest maiden, Forest Sprite). Equipment chests are in the equipment shop and opened with an animation. Pet eggs are hatched in the pets section. Skill choices appear as full-screen overlays at level-up moments.

**What is notable:**
The in-run spin wheel with a loss segment (lose 15% HP) is the only variable reward observed across the library that has a negative outcome rather than just a low-value positive one. The skill selection at level-up is technically a "choice from a random pool" rather than a pure pull — the player can see all three options before committing — which distinguishes it from most variable reward implementations.

**Screenshot suggestions:**

`[In-run spin wheel showing five segments including the lose 15% HP segment, the forest maiden framing, and the spin/leave choice]`
*Documents the negative-outcome variant of the spin wheel — unique in the library.*

`[Limited Secret Chest probability disclosure showing S epic 0.65%, Epic 3%, Rare 9%, Great 25%, Common 62.35% and the pity mechanic note]`
*Documents the disclosed probability table for the highest-stakes chest in the game.*

---

### XP Leveling (`xp-leveling`) · Core

**What was observed:**
Two distinct leveling systems were observed: one within runs (in-run level-ups) and one persistent across runs (talent rank progression).

**In-run level-ups:** Experience accumulates from combat victories, narrative events, and environmental encounters during each run. Reaching a threshold triggers a level-up and a skill choice screen. Levels observed within the first run: levels 2, 3, 4, 5, and 6 at various day milestones. No cap on in-run levels was described. These levels reset with each new run.

**Talent rank progression (persistent):** The Talent system tracks cumulative talent upgrade levels across all runs. A progress bar shows advancement through named ranks:
- Apprentice (starting rank)
- Apprentice 2 (reached during Session 3 — attack +12, defense +1, HP +48)
- Apprentice 3 (at 60 points)
- Adventurer (at 90 points)
- ... scaling through Elite → Master → Warrior → Hero → Elite Legacy
- Hero tier begins at approximately 2,709 points; Elite Legacy not shown

Each talent point is earned by spending gold coins on individual talent upgrades (health points, attack, defense). Talent levels cost increasing amounts of coins — early upgrades cost 240 coins each, later upgrades more. Milestone rewards at talent track thresholds: 10 points earns 720 coins; 20 points earns the Adventure Badge.

The talent rank (displayed as "Apprentice," "Adventurer," etc.) is shown on the player's profile icon on the home screen and in the sidebar profile view, making it a visible identity marker.

**How it is presented:**
In-run level-ups appear as a full-screen overlay mid-run. The talent system is highlighted with a "new feature" prompt on first unlock, with a pointing finger directing the player to upgrade. An "Evolution Tree" preview button shows the full rank progression from Apprentice to Elite Legacy.

**What is notable:**
The two-layer leveling system (in-run progression that resets, persistent talent progression that accumulates) is the defining structural feature of the roguelite genre: each run contributes to permanent power even if the run itself ends in defeat. The first defeat (Day 40, Session 1) immediately triggered the talent unlock, framing the loss as a progression milestone rather than a setback.

**Screenshot suggestions:**

`[Talent screen showing the three talent categories (HP, Attack, Defense), the current rank bar (Apprentice, 6/10 points), and the 720-coin milestone reward]`
*Documents the persistent progression system and the named rank display.*

`[Evolution Tree preview showing the full rank ladder from Apprentice through Hero to Elite Legacy with point thresholds]`
*Documents the long-term progression map and the named rank identity system.*

---

### Energy-Lives (`energy-lives`) · Core

**What was observed:**
Energy (called "stamina" in some in-game messages) is consumed at a rate of 5 per run. The maximum capacity is 30. Energy regenerates over time — a countdown timer appeared showing approximately 2 minutes per unit at one observation point. A full refill from 0 to 30 would take approximately 60 minutes at this rate.

Multiple energy acquisition paths were observed:
- Natural regeneration (passive, over time)
- Daily free claim: 10 energy free, refreshes in 5 hours (observed in Session 2)
- Watch ad: 15 energy, up to 2 times per day
- Buy with gems: 15 energy per purchase, up to 4 times per day, costs 90 gems
- Mail inbox: overflow energy from natural recovery that exceeded the cap was reissued as inbox messages — in Session 3, the mailbox contained multiple energy parcels (60, 17, 60, 60...) from times when the cap was exceeded and the game stored the overflow

Energy overflow reissue (mail parcels) was the first thing shown on opening the app in Session 3 after completing Chapter 2 — the Capybara Protection Association sent messages with overflow stamina to claim.

**How it is presented:**
Energy is displayed in the top bar of the home screen with a countdown timer. Tapping it opens an acquisition overlay showing all purchase paths simultaneously. A "!" exclamation mark appears next to the energy icon when there are unclaimed inbox parcels.

**What is notable:**
The overflow reissuance mechanic via mail is genuinely novel — rather than simply losing regenerated energy above the cap (the standard implementation), the game stores it as inbox messages claimable for up to 6 days. This rewards returning players who missed sessions without punishing them for the missed time. In Session 3, the player had 249 energy available in the inbox from overflow.

**Screenshot suggestions:**

`[Energy acquisition overlay showing all four paths: daily free (10 energy, 5hr refresh), watch ad (15 energy, 2 chances left), buy with gems (15 energy, 4 chances, 90 gems), and the refill option]`
*Documents all four energy acquisition paths side by side.*

`[Mail inbox showing multiple Capybara Protection Association parcels with overflow stamina (60, 17, 60, 60) with claim-all button and 6-day expiry]`
*Documents the overflow reissuance mechanic — unique in the library.*

---

### Season Pass (`season-pass`) · Supporting

**What was observed:**
The Battle Pass is one of several "fund" products but the only one with a timer. Observed in Session 3:

- **Season:** Season 1
- **Mechanic label in-game:** "Bad guys — complete daily tasks to gain pass experience"
- **End time:** 15 days 2 hours remaining at time of observation
- **Status:** Inactive (not purchased)
- **Free vs. paid tiers:** Free rewards always 1 item; Battle Pass rewards always 2 items — a simple 1:2 ratio across all 30 steps
- **Advancement:** Completing daily tasks generates Pass XP that advances the track
- **Total steps:** 30 rewards

The Battle Pass was shown under the Growth Fund section of the sidebar, alongside six other fund products (Talent Fund, Tower Challenge Fund, Dungeon Fund, Adventure Fund, Guru Fund, Mythic Treasure Fund). Of these seven, only Battle Pass and Main Quest Fund had countdown timers — the others did not appear to be time-limited.

**How it is presented:**
Accessible from the Growth Fund button on the left sidebar panel (which appears after completing Chapter 1). The Battle Pass is listed first in the featured section of Growth Fund, above the other funds.

**What is notable:**
The fund system is unusual — six products labeled "funds" sit alongside the Battle Pass in the same section, all with free-tier rewards and paid multiplied rewards, but most without timers. This creates a de facto set of parallel season passes, each gated on a different in-game activity (talent upgrades, dungeon clears, tower clears, main quests, etc.). The Battle Pass is simply the one with a seasonal timer. The reward ratio (1:2 free:paid) is the simplest multiplier observed in any season pass in the library.

**Screenshot suggestions:**

`[Battle Pass screen showing Season 1, the 15-day countdown, 30 reward steps with 1:2 free-to-paid ratio, and the "inactive" status with purchase prompt]`
*Documents the pass structure, timer, and the straightforward 1:2 reward ratio.*

`[Growth Fund featured tab showing all four funds — Battle Pass, Talent Fund, Tower Challenge Fund, Dungeon Fund — with timer on Battle Pass and "inactive" badges on all]`
*Documents the fund system as a family of parallel pass products under one navigation entry.*

---

### Daily Login Reward (`daily-login-reward`) · Supporting

**What was observed:**
A "Seven Day Sign-In Event" appeared in Session 3 after unlocking the third stage (completing Chapter 2). It did not exist in Sessions 1 or 2. The rewards are:
- Day 1: 50 gems (immediately claimable on discovery)
- Day 2: 5x Snowy Pet + 3 Legendary Keys
- Day 3: Gold Chest
- Day 4: 60 Pet Eggs
- Day 5: 100 Gems
- Day 6: (not fully described)
- Day 7: Flash (a Mythic Pet) + Amethyst Chest

The transcript explicitly noted: "the sign in daily login mechanic appears only after the user has completed the second stage and gone on to the third." The Day 1 reward was claimed immediately in Session 3.

A separate daily benefit exists in the Privilege Card section: a daily collectible reward was observed with a countdown until end of day, after which it refreshes. The specific items were not described.

**How it is presented:**
The Seven Day Sign-In event appears in the Login section of the sidebar, which unlocks after clearing Chapter 2. The Privilege Card daily benefit is accessed from the Privilege Card panel on the left sidebar.

**What is notable:**
The daily login mechanic being locked behind Chapter 2 completion (which requires surviving 60+ days in Chapter 1, then clearing Chapter 2) means it is not part of the new-user experience at all — it is a mid-game engagement mechanic for players who have demonstrated sufficient investment. Day 7's Mythic Pet reward is among the most valuable rewards observed in any daily login system in the library.

**Screenshot suggestions:**

`[Seven Day Sign-In screen showing all 7 days with reward previews — Day 1 (50 gems, claimed), through Day 7 (Mythic Pet + Amethyst Chest)]`
*Documents the escalating reward structure and the Mythic Pet as the milestone reward.*

---

### Ads (`ads`) · Supporting

**What was observed:**
Rewarded video ads appear across multiple surfaces:

- **Energy:** Watch ad for 15 energy, up to 2 times per day
- **Adventure Supply Crate:** Watch 3 ads to open a crate (normally 80 gems); refreshes every 13.5 hours
- **Hero Supply Crate:** Watch 1 ad to open (normally a hero key); shown once per refresh
- **Pet eggs:** Watch 3 ads instead of spending 300 gems to hatch an egg batch
- **Dragon's Lair tickets:** Watch up to 2 ads per day to get dungeon tickets
- **Video Rewards (sidebar):** Dedicated video section accessible from the sidebar (no videos available during Session 2)
- **Black Market:** Watch ad to get gold in the black market

**Ad-Free Card:** A permanent ad removal purchase exists at $9.99. Description: "permanent ad free privilege — receive immediately after purchase 2,400 gems — daily collectible 50 gems." This framing goes beyond simply removing ads — it adds ongoing daily gem income, making the ad removal purchase also a daily reward mechanic. The offer appears in the equipment shop as a persistent banner underneath each chest that normally requires ad-watching, and is also listed in the Privilege Card section.

**How it is presented:**
Every rewarded ad surface shows a "Watch Ad" button alongside the alternative (gem cost, key cost, or free cooldown). The Ad-Free Card appears immediately below any surface with an ad option, visible from the first session.

**What is notable:**
The Ad-Free Card's dual framing — remove ads AND gain daily gems — is a stronger pitch than simple ad removal. It converts the ad-watching economy into a daily income stream for paying players. The daily 50-gem income from the Ad-Free Card matches the daily income from the Privilege Card, suggesting both are calibrated to the same daily gem value benchmark.

**Screenshot suggestions:**

`[Adventure Supply Crate screen showing "open for free" (on cooldown) alongside "80 gems" and "watch 3 ads" options, with the Ad-Free Card banner below]`
*Documents the three-path structure of rewarded ad placements and the immediate ad-removal upsell.*

---

### Leaderboards (`leaderboards`) · Supporting

**What was observed:**
Three distinct leaderboards were observed:

**Chapter Ranking (sidebar → Ranking):** Shows all players ranked by their longest run in the current chapter. In Session 2, the player was ranked 3,092nd globally. Displays the chapter each player is on and their best result. The top players in the ranking list had not accessed hard chapters (which require surviving 1 day in Chapter 51 — not yet reached by anyone observed).

**Tower Challenge Leaderboard:** Within the Tower of Explorers, a leaderboard shows the highest floor reached by players. The player starts unranked. Observed in Session 3 after beginning tower challenges.

**Pet Auspice and Stage Growth Leaderboards:** Two separate leaderboards within the timed pet growth event (Pet Auspice and Stage Growth), each with ranking reward tiers: 1st place → top-tier cosmetic frame + items; positions 101–9,999 → 200 gems + 10 gold horseshoes "just for existing, just for being a part of this." Both leaderboards have 12 named reward bands from 1st place down to 9,999th.

**How it is presented:**
Chapter ranking is in the sidebar under Ranking. Tower leaderboard is within the Tower Challenge screen. Pet event leaderboards are within the Pet Auspice and Stage Growth event screens.

**What is notable:**
The 101–9,999 reward band in the pet leaderboards gives everyone who participates a meaningful reward — the transcript explicitly noted "you basically get rewards here for the rank that you have — just for existing." This design removes the exclusivity of leaderboard rewards and makes participation itself rewarding rather than only top-place finishers.

---

### Limited-Time Events (`limited-time-events`) · Supporting

**What was observed:**
Multiple time-limited events were observed across sessions, introduced progressively as chapters were cleared:

**Newbie Gifts (7-day event, visible from Session 1):** A popup for the Limited Secret Chest guarantee mechanic — "guaranteed current up equipment in 180 pulls." Shown once per day (a "do not show again today" button exists). Event duration was 7 more days at time of first observation.

**Seven Day Carnival (10 days remaining in Session 3):** A 7-day event with a progress bar from 0 to 150 points, milestone chests at 30/60/90/120/150, and daily tasks for each of 12 stages. Tasks include: complete main story stage 3, clear Tower of Explorers 3, open 10 chests, draw equipment 10 times. Each task grants Activity Points. Daily pack tab within the carnival shows free daily gifts plus purchasable packs that rotate each day (equipment packs on day 1, pet packs on day 2, chest packs on day 3, energy supply packs on day 4, etc.).

**Pet Auspice (5 days, ending in 1 day at time of Session 3):** A pet-focused event with four rounds, tasks to open pet eggs (500 / 1,000 / 2,000 / 3,000 / 4,000), and rewards of divine hammers, pet eggs, and gems. Includes its own leaderboard and ranking rewards. Also contains a Growth Shop where special pets can be purchased with event-specific tickets (Gold Moon Tickets).

**Stage Growth (5 days):** A parallel pet growth event running simultaneously with Pet Auspice, also with a leaderboard and ranking rewards. Reached 4 tabs: reward, leaderboard, packs, additional.

**Timed Purchase Offers:** After completing Chapter 2, a "Weapon Special Offer Pack" appeared with a 2:51 countdown (approximately 2 hours 51 minutes). Included an S rank weapon selection box (choose 1 of 7 S-rank weapons) and 600 gems for $4.99.

**How it is presented:**
Events appear on the left sidebar panel as expandable tabs (Privilege Card, Growth Fund, Seven Days, Newbie Gifts, Timed Growth). Each can be minimized or expanded. Events are introduced progressively — Newbie Gifts from Session 1, Seven Day Carnival from chapter completion, Timed Growth and Pet events after unlocking pets.

**What is notable:**
The event introduction pacing mirrors what was observed in Royal Match — systems are added one at a time rather than presented simultaneously at the start. The Seven Day Carnival's rotating daily pack structure (different pack types on different days) creates a reason to check the carnival tab each day rather than just purchasing once.

---

### Achievements (`achievements`) · Supporting

**What was observed:**
The Talent Rank progression functions as a named achievement ladder — Apprentice → Adventurer → Elite → Master → Warrior → Hero → Elite Legacy — each displayed on the player's profile icon. Session 3 observed reaching Apprentice 2 from Apprentice 1, with attribute boosts displayed (attack +12, defense +1, HP +48). The milestone rewards at talent track thresholds (720 coins at 10 points, Adventure Badge at 20 points) function as named achievement rewards.

The first defeat in Session 1 triggered an immediate "longest journey: 40 days" stat display, framing the run result as a personal record. Session 2's best run reached Day 59, establishing a new personal record.

Tasks available after Chapter 2 (daily and weekly task system) generate achievement-style progress toward named reward milestones visible on a track — "daily tasks that you've completed and tasks that remain to be done" with a daily reward claim and a compounding weekly track.

**How it is presented:**
Talent rank displayed on profile icon on home screen. Personal best run stats displayed at defeat screen. Task progress visible in the task sidebar section (unlocks after clearing Chapter 2).

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Supporting

**What was observed:**
After clearing Chapter 2, a Tasks section became available in the sidebar. Two tracks observed:

**Daily tasks:** Individual tasks with specific objectives: make one purchase in the Black Market, open three chests, clear Phantom Sword Island 1 time, challenge Arena 1 time. Tasks reset — "tasks reset in an hour" was noted at the time of observation (possibly a within-day reset tied to server time rather than a 24-hour cycle). Completing tasks generates points toward a daily reward claim track.

**Weekly tasks:** Daily task completions compound toward a weekly milestone track. The weekly and daily tracks are described as parallel — "daily tasks collected also compound for the weekly rewards — you have a week to collect to reach certain levels so that you can get a reward."

The Seven Day Carnival also has daily task assignments per day (different tasks for each of its 7 days), which overlap with the persistent daily task system.

**How it is presented:**
Tasks section is in the sidebar under the hamburger menu. A daily/weekly tab toggle switches between the two tracks. The Seven Day Carnival task tabs are within the Carnival event screen.

---

### Clans-Guilds (`clans-guilds`) · Shallow

**What was observed:**
Guilds unlock after clearing Chapter 3. A guild tab was observed in the Black Market interface — "you have to be a member of a guild to be able to be part of it." Guild content was not accessible during any session because Chapter 3 had only just been reached. The guild unlock requirement (Chapter 3) was stated. No other guild features were described.

**How it is presented:**
Referenced in the Black Market as a locked tab. Listed in the sidebar navigation as locked with the Chapter 3 requirement.

---

## Mechanics not observed

**Streak:** No consecutive-day counter with a named streak number and reset mechanic was described.

**Set Collection:** No named sets with defined membership and completion rewards were described. Equipment and pets are collected and upgraded, but not organized into named completion sets.

**Piggy Bank:** Not observed.

**Social Feed / Community Groups:** No activity feed or community group feature was described beyond the ranking leaderboard.

---

## How mechanics connect

**Energy gates runs; runs generate everything.** Every resource in the game — gold coins, gems, equipment, pets, skill upgrades — is produced by completing runs. Energy consumption (5 per run) regulates how many runs a player can take per session. The energy overflow reissuance mechanic ensures returning players always have runs available after a break, maximizing the chance of engagement at return.

**Runs feed talents; talents improve runs.** Gold and experience earned during runs are spent on talent upgrades between runs. Higher talents increase in-run stats, which extend how far each run reaches. Longer runs produce more gold and better equipment drops, which fund more talent upgrades. This feedback loop is the central engagement cycle.

**Equipment and pets add layers to the run output.** Equipment persists across runs and directly modifies combat stats. Pets participate in combat. Both require materials (power stones, pet food, eggs) earned from runs and dungeon content. As Chapter content unlocks, new dungeons produce different materials, extending the upgrade surface without requiring new run content.

**The fund/pass system monetizes the activity the player is already doing.** Each fund is paired with an activity the player must perform anyway — clearing towers (Tower Challenge Fund), upgrading talents (Talent Fund), clearing dungeons (Dungeon Fund), completing quests (Main Quest Fund). Purchasing a fund does not redirect the player to new activities; it multiplies the rewards for activities already in progress, making every fund purchase feel low-friction.

**The progressive chapter unlock creates sustained content revelation.** Each chapter completion unlocks new features: Chapter 1 → equipment shop, talents, equip, newbie gifts. Chapter 2 → mail, backpack, black market, login (7-day sign-in), tasks, friends. Chapter 3 → guild, Phantom Sword Island, pets (via tower), additional dungeons. This feature drip extends the discovery phase across multiple weeks of play.

---

## Session rhythm

**Run duration:** Sessions 1 and 2 each involved a single extended run (40 days and 59 days respectively). The transcript noted approximately 20 minutes of uninterrupted play before the first defeat screen appeared in Session 1.

**Between-run duration:** Session 1's post-defeat home screen exploration covered equipment, shop, talents, and store in a single sitting. Session 3 covered chapter completion, new feature unlocks, tower challenges, and pet hatching in an extended sitting.

**Return pressure:** Energy regeneration (approximately 60 minutes to full from zero), daily free energy claim (refreshes in 5 hours), Seven Day Carnival daily gift (rotating daily packs), Seven Day Sign-In event (daily), Pet Auspice event (ending in 1 day at time of Session 3), Black Market reset (1 hour 13 minutes remaining at observation), daily tasks reset, tower challenge voucher accumulation.

**Session-end triggers:** Run defeat (natural endpoint — the defeat screen shows coins earned and personal best). Energy depletion after multiple runs. Chapter completion triggers a transition screen and new feature unlocks that may extend the session.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Chapter 1 Pack | $2.99 | 5 legendary keys, 150 power stones, 10,000 gold coins, 100 gems; labeled "10x value" |
| Little El Pack 1 | $2.99 | 360 gems, 5 little elves (pets), 100 boons (pet food) |
| Little El Pack 2 | $4.99 | 600 gems, 10 elves, 30 pet eggs |
| Equipment Enhance Pack 1 | $9.99 | 1,200 gems, 40 equipment designs |
| Equipment Enhance Pack 2 | $29.99 | 3,600 gems, 120 equipment designs |
| Dungeon Pack | $0.99 | Dragon ticket, tree ticket, island ticket, dungeon dive voucher; "20x value" |
| Energy Pack | $2.99 | 200 energy, 360 gems |
| Key Pack | $4.99 | 3 keys, 10 blueprints, 600 gems |
| Mount Pack | $9.99 | 120 gold horseshoes, 1,200 gems |
| Chest Pack | $9.99 | 10 silver chests, 3 gold chests, 1 pet chest, 1,200 gems |
| Pet Egg Pack | $4.99 | 240 pet eggs, 600 gems |
| Weekly Pickaxe Pack (limit 3) | $19.99 | 1,000 pickaxes, 3,600 gems |
| Artifact Weekly Pack (limit 2) | $29.99 | 240 divine hammers, 3,600 gems |
| Weekly Chest Pack (limit 3) | $29.99 | 30 gold chests, 2,400 gems |
| Homeland Coin Pack (monthly, limit 3) | $14.99 | 2,500 homestead coins, 1,800 gems |
| Chest Monthly Pack (monthly, limit 3) | $29.99 | 30 pet chests, 6,000 gems |
| Pet Food Monthly Pack (monthly, limit 3) | $49.99 | 30,000 pet food, 6,000 gems |
| 3-Day Deluxe Pack | $0.99 | Day 1: magic ring, 10 silver keys, 5,000 coins, 120 gems; Day 2: yellow duck cosmetic, 10 silver keys; Day 3: 10 silver keys, 20,000 coins |
| Weapon Special Offer Pack (2hr 51min timer) | $4.99 | S rank weapon selection box (choose 1 of 7), 600 gems |
| Pet Growth Pack 1 (limit 1) | $4.99 | 300 pet eggs, 600 gems |
| Pet Growth Pack 2 (limit 2) | $9.99 | 600 pet eggs, 1,200 gems |
| Pet Growth Pack 3 (limit 5) | $19.99 | 1,000 pet eggs, 2,400 gems |
| Pet Growth Pack 4 (limit 10) | $49.99 | 2,500 pet eggs, 6,000 gems |
| Pet Growth Pack 5 (limit 0 of?) | $99.99 | 5,000 pet eggs, 12,000 gems |
| Ad-Free Card | $9.99 | Permanent ad removal + 2,400 gems immediately + 50 gems/day ongoing |
| Monthly Card | $4.99 | 30 days: 4x battle speed, Dragon's Nest/Celestial Tree daily access, +1 chance; 600 gems immediately + 50 energy and 200 gems/day |
| Lifetime Card | $29.99 | Permanent: +1 daily dungeon chance, +10% gold gain; 3,600 gems immediately + 50 energy and 200 gems/day |
| Battle Pass (Season 1) | Not stated | 30 rewards, 1:2 free:paid ratio, 15 days remaining |
| Talent Fund | $19.99 | 15 paid rewards (1,000 gems each) unlocked by upgrading talents, vs 15 free rewards (100 gems each); total 74,000 gems |
| Tower Challenge Fund | $9.99 | 12 paid rewards (3–10 legendary keys each) unlocked by clearing tower floors; total 125 legendary keys |
| Dungeon Fund | $29.99 | 11 paid rewards (500 gold horseshoes each) unlocked by clearing dungeons; total 5,610 gold horseshoes |
| Main Quest Fund | $9.99 | 30 paid rewards (chests, gold, energy) unlocked by completing main quests; ends in 8 days |
| Adventure Fund | $19.99 | Paid rewards (1,000–5,000 gems) unlocked by clearing hard mode stages; total 74,900 gems |
| Guru Fund | $19.99 | Paid rewards (10–15 gem keys each) unlocked by using guru exploration tickets; total 150 gem keys |
| Mythic Treasure Fund | $19.99 | Paid rewards (10–15 secret treasure keys) + legendary mythic treasure selection box; total 135 keys |
| 120 gems | $0.99 | 120 gems (first top-up doubles to 240) |
| 600 gems | $4.99 | 600 gems (first top-up doubles to 1,200) |
| 1,800 gems | $14.99 | 1,800 gems |
| 3,600 gems | $29.99 | 3,600 gems |
| 6,000 gems | $49.99 | 6,000 gems |
| 12,000 gems | $99.99 | 12,000 gems |
| 100 jade stones | $0.99 | 100 jade stones |
| 500 jade stones | $4.99 | 500 jade stones |
| 1,500 jade stones | $14.99 | 1,500 jade stones |
| 3,000 jade stones | $29.99 | 3,000 jade stones |
| 5,000 jade stones | $49.99 | 5,000 jade stones |
| 10,000 jade stones | $99.99 | 10,000 jade stones |

---

## What stood out

1. **The energy overflow reissuance mechanic is unique in the library.** Rather than losing regenerated energy that exceeded the cap, the game stores overflow as inbox messages claimable for up to 6 days. On returning after Chapter 2, the player had 249 units of energy waiting in the inbox — equivalent to nearly 50 runs — meaning no returning player is ever energy-starved. This inverts the standard energy mechanic: instead of punishing absence, the game rewards it.

2. **Feature unlocks are gated behind chapter progression in a long staggered sequence.** Chapter 1 → talents, equipment, shop. Chapter 2 → mail, black market, tasks, daily login, friends. Chapter 3 → guilds, additional dungeons, pets (via towers). Chapter 4+ → arena, mounts. This is the longest feature drip across all games analyzed — features that other games give in the first session are held back for weeks of play here. The player cannot see most of the game's content systems until they have invested sufficient time.

3. **The fund system wraps standard season pass economics around activity-specific milestones.** Seven "funds" plus one Battle Pass all share the same free-tier / paid-tier structure, but each fund is paired with a different activity (talent upgrades, tower clears, dungeon clears, quest completion, main story, etc.). Purchasing a fund does not create new activity — it monetizes activity the player is already doing, making every fund purchase feel proportionate and low-stakes relative to its actual $9.99–$29.99 price.

4. **The in-run spin wheel has a loss outcome.** Unlike every other variable reward spin observed in the library, the Forest Maiden spin wheel includes a segment that reduces the player's HP by 15%. The wheel is optional (the player chooses to pray or leave), and the loss is framed as the Forest Goddess delivering punishment for bad luck. This is both narratively coherent and mechanically honest — the player accepted the risk. It is the only variable reward mechanism in the library with a genuinely negative possible outcome.

---

## Analysis notes

Three sessions across four days. Session 1 was a first-install run to Day 40 defeat, followed by full home screen exploration. Session 2 was a return after 24+ hours, reaching Day 59. Session 3 completed Chapter 1 (survive 60 days), cleared Chapter 2, and explored Tower Challenges, pets, and the expanded post-Chapter 2 feature set. Several features referenced in session 3 were locked behind further chapter progression and not explored: guilds (Chapter 3), mounts (Chapter 4), arena (Chapter 4), Goo Mine (Chapter 31), hard chapters (Chapter 51). The game's full content depth extends well beyond what three sessions covered. The Lunar New Year assets visible on the loading screen suggest the game had not received an update recently — the game's current seasonal event context may differ.

---

## Category context

Capybara Go! shares a publisher (Habby) with Archero and Survivor.io. The roguelite run structure, auto-battle combat, and skill selection mechanic are common across Habby's catalogue. No explicit comparisons to other games were made in the transcripts.

---

## Unrecognized mechanics

### `pets` (combat companion system)
**What was observed:** Pets are collectible animal companions that participate in combat alongside the capybara. They are hatched from pet eggs (variable reward), fed with pet food to level up, enhanced with additional copies of the same pet, and slotted into up to 3 active positions (more slots unlock at higher talent levels). Each pet has its own stats (HP, attack, defense) and named battle skills that unlock at pet level milestones. Pets are visible in combat, attacking enemies alongside the main character. Pet food, pet eggs, and pet-specific currencies (divine hammers, gold horseshoes) are distinct resource types earned from dungeons, event rewards, and ad watching. A pet synthesis mechanic converts surplus pet fragments into new pets. The Pet Auspice and Stage Growth events are entirely structured around pet acquisition. The narrator explicitly flagged this: "please note this mechanic, the pet mechanic — it is something that we could add to engagement mechanics."
**Why it does not map to an existing mechanic:** Not `set-collection` (pets are not organized into named sets with defined membership). Not `variable-reward` (pet eggs are the variable reward surface; the pets themselves are the persistent companion system). Not `cosmetics` (pets provide combat stats and battle skills, not just visual appearance). The pet system is a persistent companion progression layer — collect pets, level them, deploy them — that is orthogonal to the player character's own progression. It is common enough across RPGs and strategy games to warrant a library entry.
**Worth adding to library:** Yes — the narrator explicitly requested it.

### `roguelite-run-structure`
**What was observed:** Each run begins fresh for skills — no skills carry between runs. Persistent upgrades (talents, equipment, pets, mounts) carry across runs. The player chooses skills from random pools during the run, accumulates them in a skill book, and loses all skills on defeat. Gold and experience earned during runs are the primary currency for between-run upgrades. Runs have a defined "chapter survival" threshold (60 days for Chapter 1) — surviving to that threshold completes the chapter; defeat before it ends the run with partial rewards. Each defeat screen shows personal best run length, framing every run as a score-attack against the player's own record.
**Why it does not map to an existing mechanic:** Not `energy-lives` (the run structure is not about attempt limits; it is about the roguelite loop of fresh-run-skills plus persistent-cross-run-upgrades). Not `xp-leveling` (XP leveling within runs is one component of the structure, not the structure itself). The roguelite run structure — fresh in-run progression + persistent cross-run progression + defeat as progress — is a genre-level mechanic that creates its own specific engagement pattern (one more run psychology, loss framing as progress) worth naming in the library.
**Worth adding to library:** Yes — particularly relevant for any game in the roguelite/roguelite-adjacent category.

### `fund-pass` (parallel activity-gated season passes)
**What was observed:** Six products labeled "funds" (Talent Fund, Tower Challenge Fund, Dungeon Fund, Adventure Fund, Guru Fund, Mythic Treasure Fund) each follow the same structure as a season pass: free rewards at defined activity milestones, paid rewards (5–10x larger) at the same milestones for subscribers, a fixed number of steps (11–30), and a purchase price ($9.99–$29.99). Unlike the Battle Pass, most funds do not have countdown timers — they appear to run indefinitely or for the chapter's duration. Each fund is paired with a specific activity type. Purchasing a fund unlocks the paid-tier rewards for all future milestones of that activity type.
**Why it does not map to an existing mechanic:** Structurally identical to `season-pass` in its free/paid tier design. The distinction worth noting is: funds are activity-specific (each tied to one mechanic), non-timed (most have no countdown), and exist in multiples (six simultaneously). A player who purchases all seven pass-type products has a paid-tier multiplier on every major activity in the game simultaneously. This is a more systematic monetization of the season pass structure than any other game in the library and may warrant a named variant of the season pass entry.
**Worth adding to library:** Map to `season-pass` with a note flagging the multi-fund parallel variant as a distinct implementation pattern.

### `soft-currency` (Gold Coins, Gems, Jade Stones, Energy, Pet Eggs, Pet Food, Power Stones, Equipment Designs, Legendary Keys, Gold Horseshoes, Divine Hammers, Dragon Tickets, Pickaxes, Darkmoon Tickets, Gold Moon Tickets, Homestead Coins)
**What was observed:** An extremely high number of named soft currencies were observed across three sessions, each with specific earn and spend surfaces. Gold Coins: earned from runs and milestones, spent on talent upgrades and black market. Gems: earned from events and chests, spent on equipment draws, pet eggs, and energy top-ups. Jade Stones: a separate premium soft currency purchased via top-up. Energy (Stamina): earned via regeneration, ads, and daily claims, spent at 5 per run. Pet Eggs: earned from events and packs, spent to hatch pets. Pet Food: earned from dungeons, spent to level pets. Power Stones: earned from chests and events, spent to enhance equipment. Equipment Designs: earned from packs, spent in the workshop. Legendary Keys: earned from packs and tower rewards, spent to open legend chests. Gold Horseshoes: earned from mount-related content, spent on mount upgrades. Divine Hammers: earned from artifact content, spent on artifact upgrades. Dragon Tickets: earned from daily dungeons and ads, spent to enter Dragon's Lair. Pickaxes: earned from packs, used in Goblin Miner. Homestead Coins: purchased via store pack, spent on homestead buildings.
**Why it does not map to an existing mechanic:** The sheer number and specialization of currencies in Capybara Go! exceeds every other game in the library. Each currency is activity-specific, preventing fungibility between content types. This fragmentation creates multiple parallel resource accumulation tracks and prevents any single currency from becoming the universal bottleneck.
**Worth adding to library:** Flagged as a known library gap. The degree of currency fragmentation (15+ named currencies) is an extreme implementation of the soft-currency pattern worth noting as a design observation.
