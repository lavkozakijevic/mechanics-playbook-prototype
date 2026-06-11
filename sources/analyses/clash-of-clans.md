# Clash of Clans

**ID:** clash-of-clans
**Category:** Strategy / Base Building
**Type:** Game
**Platform analyzed:** iOS
**Analysis date:** 02 Apr 2026 (Sessions 1–2), 03 Apr 2026 (Sessions 3–4)
**Last updated:** 20 May 2026
**Session state:** First install — played from first launch through Town Hall Level 6 across four sessions

---

## Overview

Clash of Clans is a base-building strategy game by Supercell where players construct and defend a village, train armies, and attack goblin camps and other players to loot resources. Two parallel villages exist: the Home Village (the primary progression track) and the Builder Base (a separate island unlocked at Town Hall Level 5). Progress is gated behind Town Hall upgrades, which unlock new buildings, troops, and game modes, and which take increasingly long real-time durations to complete.

---

## First impression

The first screen after consent and age entry drops the player directly into a guided tutorial narrated by a girl character (unnamed throughout the sessions). The tutorial covers placing a cannon, defending against a goblin attack, launching a counter-attack with three wizards, building resource collectors, and training troops — all before any free navigation is available. The first mechanic moment is the shop, which opens as the tutorial's first instruction and reveals the full building catalogue before the player has any currency to spend. No account creation is required to start. Supercell ID is surfaced later as an optional step with a notable reward incentive (100 XP and 50 gems vs. 10 XP and 5 gems for standard achievements).

---

## Core activity

The loop is build, attack, upgrade — repeated at increasing cost and time investment. The player spends gold and elixir (earned from attacking and from passive collectors) on buildings and upgrades, which take real-time minutes to hours to complete. While upgrades run, the player attacks goblins (single player) or other players (multiplayer) to collect more resources. Town Hall upgrades are the primary progression gate, unlocking new buildings, troops, content, and game modes at each level. Two builders work simultaneously; additional Builder Huts allow more parallel construction.

---

## Mechanics observed

### Passive Construction Meta (`passive-construction-meta`) · Core

**What was observed:**
The entire game is organized around spending earned currencies (gold, elixir) on named construction and upgrade tasks across the village. Each building has a name, a cost, a build time, and an upgrade path. The player arranges buildings on an isometric grid, choosing placement strategically. Completed buildings change the visual state of the village and increase its defensive or offensive capability. Town Hall upgrades are a specific type of construction task that unlocks new content: Town Hall 2 opened new buildings; Town Hall 4 opened traps, army camp upgrades, cosmetics, and new store offers; Town Hall 5 unlocked the Builder Base and war league participation; Town Hall 6 prompted "you need a million coins" for the next level.

A warning screen appeared before Town Hall upgrades: "upgrading your town hall will bring stronger opponents — consider upgrading your attack strength before upgrading your town hall." This gates progression behind both resource accumulation and strategic readiness.

The Builder Base is a second, separate village that uses its own currencies (gold squares, purple droplets) earned only from Builder Base battles. It functions as a parallel construction meta with its own Builder Hall, Builder Barracks, and upgrade tree.

**How it is presented:**
The shop is the primary interface — organized into tabs (Army, Resources, Defenses, Traps, Decorations, Buildings) and available from the first tutorial screen. Suggested upgrades appear as a persistent indicator (two out of two at Town Hall 4). Buildings under construction show a builder character actively working and can be completed instantly using gems.

**What is notable:**
The suggested upgrade system adapts dynamically — as the player completes one suggested upgrade, a new one appears. The system never leaves the player without a visible next action. The build timer (30 minutes for Town Hall 2, 12 hours for Town Hall 5) is the primary return mechanic.

**Screenshot suggestions:**

`[Village map at Town Hall 4 showing multiple buildings under simultaneous construction by two builders, with the suggested upgrade indicator showing "2 out of 2" and the gem-to-finish option visible]`
*Documents the dual-builder system, the suggested upgrade guidance, and the gem speedup mechanic as interconnected elements of the construction meta.*

`[Builder Base village showing the separate currency display (gold squares, purple droplets), the Builder Hall, and the Master Builder character — contrasting the visual and economic separation from the Home Village]*
*Documents the second village as a parallel construction meta with distinct currencies and character.*

---

### Clans-Guilds (`clans-guilds`) · Core

**What was observed:**
Clans are cooperative groups unlocked by rebuilding the Clan Castle (cost: 10,000 elixir). Joining a clan requires finding one through the clan browser (filterable by language, location, war frequency, league, labels, minimum town hall) or searching by name. The session joined "Cape Town Gangster" (2 of 15 members online at the time).

After joining, clan mechanics became accessible: clan war participation (the player was assigned as a "war spectator" in the active war because they had not been selected by the clan leader), troop donations from and to clan members, clan chat (the session observed what appeared to be spam messages), and clan war league participation requiring a minimum of 15 members.

Clan war mechanics: each war runs for two days — one preparation day (troop donations, scouting) and one battle day (attacks). The war is scored by stars. Bonus loot is delivered to the treasury on war end; winning adds clan XP. War replays are viewable after the war ends.

Creating a clan costs 40,000 gold. Creation options include: name, description, badge design, open/invite-only, war frequency, required league, required minimum town hall, location, chat language, family-friendly toggle, and labels (talkative, competitive, farming, clan games, base designer, etc.).

Gifting within clans: troops and spells can be donated to clanmates who request them. The session noted "request reinforcements" as an achievement task, creating an explicit link between the achievement system and clan participation.

**How it is presented:**
Clan access is via the Join button on the home screen (left side), unlocked after rebuilding the Clan Castle. The clan screen has tabs for members, war, and the notice board. Clan War League is a separate mode visible from the war zone area on the home screen.

**What is notable:**
The clan creation cost (40,000 gold) provides a sustained play incentive for players who want to own rather than join. The achievement "request reinforcements" creates a mechanic loop: achievements push players toward clan participation, which pushes players toward troop quality and donation behavior, which push players toward upgrading barracks and troops.

**Screenshot suggestions:**

`[Clan browser showing filter options (language, location, war frequency, league, required town hall, labels) and a list of available clans with member counts and locations]`
*Documents the clan discovery system and the specificity of the matching parameters.*

`[Clan war overview screen showing team star counts (24 vs. 3), the war spectator notice, and the action options available to non-participating members]*
*Documents the war participation mechanic and the spectator state for new clan members.*

---

### Achievements (`achievements`) · Supporting

**What was observed:**
The achievements system is accessible from the profile screen (player icon in the top-right). Achievements are organized by village (Home Village, Builder Base, Clan Capital) and by category: buildings upgraded, troops unlocked, wars won, trophies earned, troops donated, heroes obtained, spells obtained, siege machines obtained, guardian and pet progression, and account security (connecting Supercell ID).

Each achievement has three stars, with rewards scaling per star. Example rewards: "connect your account to Supercell ID for safekeeping" awards 100 XP and 50 gems for the three-star completion. "Bigger and Better" (upgrade Town Hall to level 3) awards 10 XP and 5 gems — ten times less than the account-linking achievement. "Discover new troops" (unlock the Archer in the barracks) awards 100 XP and 10 gems.

Five achievements were completed during the first session by the time the game was re-entered after the Supercell ID setup. The Supercell ID connection achievement awarded its reward automatically on the next login after the ID was connected.

**How it is presented:**
Accessed through the player profile. The achievement list is organized into named categories. Completed stars are shown alongside uncompleted ones, making the full progression visible. The achievement tab is separated from the social tab (friends, search players) on the same profile screen.

**What is notable:**
The Supercell ID achievement pays 10x more than most other achievements, creating a very strong incentive to connect accounts early. This is the highest single-achievement reward visible in the sessions.

**Screenshot suggestions:**

`[Achievement list showing the Supercell ID achievement (100 XP, 50 gems) alongside "Bigger and Better" (10 XP, 5 gems), with three-star indicators and claimed/unclaimed states visible]`
*Documents the achievement reward differential that makes account connection uniquely incentivized.*

---

### Leaderboards (`leaderboards`) · Supporting

**What was observed:**
The leaderboard is accessed from the bar icon on the home screen (described as appearing at Town Hall 2+). Four tabs were described: My League, My Town Hall, Top Players, Top Clans. The Top Players tab shows global and local (country) rankings. Global top players observed: position 1 at 88 attacks and 5,814 cups. Local (Serbia) top player at approximately 5,000 cups.

The Top Clans tab shows clans ranked globally, locally, and by clan war league. A clan war league tournament visible at the time of the session showed rewards for top three clans: 45,000 gems (first), 30,000 gems (second), 15,000 gems (third), divided equally among the top 30 players of the clan.

The My League tab shows the player's current league. Leagues are named (Skeleton, Barbarian, Archer, all the way to Legend) and unlock at Town Hall Level 7. The league system provides a "league bonus" — additional resources awarded for winning multiplayer attacks at higher leagues.

**How it is presented:**
Persistent icon in the home screen navigation bar. Country filtering applied automatically based on device location. The player's own position was not described as visible in the Top Players tab during the session (the player had not yet competed in multiplayer ranked battles).

---

### Variable Reward (`variable-reward`) · Supporting

**What was observed:**
Two variable reward surfaces were observed.

The League Shop sells items purchasable with league medals (a currency earned only from clan war league participation). Items include gear, characters, and upgrades — all with displayed costs but without visible probability tables. The shop requires significant investment in clan war league play before having league medals to spend.

Magic items are reward containers that appear in achievement rewards, challenge rewards, and limited-time offers. The "builder's byte" was one received during the challenge rewards — described as a magic item that makes builders work twice as fast for one hour. Contents of magic item rewards were not disclosed in advance in the transcript; they were revealed on claiming the challenge milestone.

A star bonus mechanic also appeared during multiplayer attacks: "start bonus received — your current league star bonus loot is in your treasury." The specific amount was variable and not fully described.

**How it is presented:**
League Shop is a tab in the main store. Magic items appear in the magic items inventory (accessible from a box icon on the home screen). Challenge milestone rewards contain magic items revealed on claim.

**What is notable:**
The League Shop is effectively a time-gated variable reward surface — the items available rotate on a schedule, and accessing them requires first earning league medals through clan war participation. It is not a simple pull mechanic but a sustained engagement reward.

---

### Limited-Time Events (`limited-time-events`) · Supporting

**What was observed:**
Multiple simultaneous events were visible from the in-game calendar (calendar icon in the home screen):

- Clan War Leagues: "time left 8 days 9 hours — wage war against seven other clans to earn glory bonus loot, clan XP, and league medals — clan leaders have two days to sign up."
- Raid Weekend: "starts in 8 hours 58 minutes."
- April season calendar showing: April 1 CWL and 7-day medal event, April 8–29 clan games, April 22–28 clan games, "Clash on treasure hunt."
- "Sound of Clash" seasonal scenery event: a rock music themed cosmetic (the active session's current season) available to purchase for $4.99. The event was also featured on the App Store listing and referenced in a YouTube video linked from the in-game news feed.

The news feed showed the Sound of Clash season with a countdown and featured posts, YouTube creator content, and esports links.

**How it is presented:**
Events accessible from the calendar icon on the home screen. News and creator content accessible from a separate news icon. The season's visual theme (rock concert) applied to the overall home screen aesthetic.

**What is notable:**
The season pass was expected to appear but did not appear during the four sessions, which reached Town Hall Level 6. The transcript explicitly noted this: "We need Town Hall 7 to get the season pass — that's gonna take a lot of work." The session actively looked for the season pass and confirmed it was locked behind a specific Town Hall level.

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Supporting

**What was observed:**
Starter Challenges appeared as a mechanic introduced by the girl character after the player tapped the shield icon on the home screen (visible from Town Hall 2). The challenge list showed:

- Active challenges with point values: Wall Builder (get 25 wall pieces from shop) = 50 points; Bigger Coffers (upgrade gold storage to level 12) = 25 points; Destroy Anything (destroy 50 buildings in multiplayer battles) = 125 points; upgrade elixir collectors to level 4 = 150 points.
- Total available from active challenges: 1,050 of the green challenge points.
- Rewards unlocked at milestone thresholds: 100 points = 2,000 gold; 200 points = 2,000 elixir; continuing to escalate up to 5,000 points = a Builder's Byte (magic item).

New challenges unlocked by upgrading the Town Hall: "unlock more starter challenges by upgrading your town hall" was the stated gate.

The challenge system was distinct from achievements — challenges are tied to the current season/progression phase and have milestone rewards, while achievements are permanent.

**How it is presented:**
Accessed from the shield icon on the home screen (described as appearing after Town Hall 2 with a pulsating visual). The challenge list shows active challenges and a rewards track simultaneously. Progress updates automatically as the player completes relevant actions.

---

### XP Leveling (`xp-leveling`) · Supporting

**What was observed:**
A player level (distinct from Town Hall level) was described. The player was at level 1 at session start and reached level 2 after completing early challenges, then level 3, and level 4. Each level-up was described with a visible rank counter and a progression bar "halfway through to number two."

Player level is shown at the top of the home screen. Achievements award XP toward this level (the Supercell ID achievement awards 100 XP; other achievements award 10 XP). Battles also award XP.

The transcript noted at the end of Session 1 that it had been playing "more than two hours" and was at Town Hall 4 with player level 4, suggesting the player level progresses faster than the Town Hall.

**How it is presented:**
Player level displayed as a number next to the player's avatar icon on the home screen. Level-up is visible as a rank threshold crossing during play.

**What is notable:**
Player level is separate from Town Hall level, trophy count, and league rank — four parallel progress indicators exist simultaneously for the same player.

---

### Cosmetics (`cosmetics`) · Shallow

**What was observed:**
Cosmetics are available in the shop under a dedicated Cosmetics tab, unlocking at Town Hall 4. Sceneries observed: Clashy Constructs, Pirate Scenery, Epic Winter Scenery, Hog Mountain Scenery, Epic Jungle Scenery — each at $3.49. Special seasonal cosmetics: Clash of Dragons and Year of the Snake, each at $16.99. The active season cosmetic (Sound of Clash) was $4.99 and appeared in both the offers tab and the shop.

Decorations are also purchasable in the shop: torches, flags, flower beds, and statues using elixir (500 to 15,000), gold (500,000 to 1,000,000), or gems (500). Some high-value decorations require player level 75 or Town Hall 17 to purchase despite having gem costs — meaning even paying users cannot access them without meeting progression requirements.

The Builder Base has its own cosmetics: skins for the Battle Machine (e.g., "Battle Machine of the North") and the boat (e.g., "Boat copter").

**How it is presented:**
Cosmetics tab in the main shop. Scenery changes the visual theme of the entire Home Village. Decorations are placed on the grid alongside buildings.

---

## Mechanics not observed

**Season Pass:** Confirmed as unlocking at Town Hall 7. The four sessions reached Town Hall 6. The transcript explicitly looked for the season pass and confirmed it had not appeared.

**Piggy Bank:** Explicitly checked for at session end. "Piggy bank is a long-term savings mechanic — piggy bank, no, didn't get anything yet." Not observed.

**First-Purchase Bonus:** Not described. The builder pack ($0.99 for a Builder Hut and 200 gems) was the first purchase option shown, but no "first purchase doubles value" framing was described.

**Ads:** Not observed across four sessions. No rewarded video, interstitial, or offerwall was described.

**Streak:** No consecutive-day streak counter was described. The magic shield (two-day protection from attacks) creates return pressure but is not a streak in the library definition.

---

## How mechanics connect

The construction meta is the economic engine for everything else. Resources (gold, elixir) fund buildings and upgrades. Buildings improve the village's offensive and defensive capability. Better capability enables attacking stronger opponents for more loot. More loot funds faster construction. The loop is self-reinforcing.

Challenges accelerate this loop by directing the player toward specific high-value actions (upgrade storage, destroy buildings) and rewarding them with resources that feed back into construction. The challenge rewards were directly used to fund construction tasks that the player could not otherwise afford in the first session.

Clan mechanics create a parallel economic dimension: troops can be donated to and received from clanmates, providing reinforcement that would otherwise require building more barracks. Clan war leagues generate league medals, which fund the League Shop. The achievement to "request reinforcements" creates an explicit link between the achievement progression system and clan participation.

Town Hall upgrades serve as the master gate for all other mechanics: new challenges unlock per Town Hall level, new shop items unlock, the season pass unlocks at Town Hall 7, and the Builder Base unlocked at Town Hall 5. Every mechanic the game wants players to engage with is behind a Town Hall level, making Town Hall progression the organizing goal of the entire game.

---

## Session rhythm

Session 1 lasted "more than two hours" according to the transcript, reaching Town Hall 4 from the first launch. Sessions 2 and 3 were shorter — Session 2 was described as a "second visit" focused on the war zone and Builder Base. Session 3 described the Builder Base in detail and the second village economy.

Return pressure comes from build timers (30 minutes for early Town Hall upgrades; 12 hours for Town Hall 5 upgrade), the magic shield (2-day protection counting down on screen at all times), raid weekend starting in under 9 hours (visible on calendar), clan war league sign-up window (8 days), and the challenge reward track (progress updated as the player plays, creating visible near-term goals).

The two-day magic shield is a push-return mechanic: it prevents attacks on the player's village for two days, which means the player has two days before they need to return to manage defenses and collect resources. It functions as both a protection benefit and a natural session-return interval.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Builder Pack (timed) | $0.99 | 1 Builder Hut + 200 gems |
| Hero Pride (timed) | $0.99 | 3 hero potions |
| Handful of Gems | $0.39 | 60 gems |
| Pocket Full of Gems | $0.49 | 80 gems |
| Pile of Gems | $2.49 | 500 gems |
| Bag of Gems | $4.99 | 1,200 gems |
| Sack of Gems | $9.99 | 2,500 gems |
| Box of Gems | $24.99 | 6,500 gems |
| Chest of Gems | $49.99 | 14,000 gems |
| 1,000 Gems | $2.49 | 1,000 gems (post-first-purchase builder pack replacement) |
| Hero Pride (recurring) | $0.99 | 3 hero potions |
| Town Hall 4 Pack | $1.49 | 1 million gold, 1 million elixir, 2 builder potions; 5-day window |
| Town Hall 5 Pack | appeared in store | (contents not described) |
| Town Hall 6 Pack | appeared in store | (contents not described) |
| Dynamic Duo | $2.99 | 500,000 gold, 100,000 elixir, Book of Everything, 3 builder potions; 2-day window |
| Everything Must Go | $1.99 | 4 builder potions, 4 research potions; 2-day window |
| Fight Night | $0.99 | 3 resource potions; 2-day window |
| Sound of Clash Scenery | $4.99 | Seasonal visual theme for Home Village |
| Clash of Dragons Scenery | $16.99 | Cosmetic scenery |
| Year of the Snake Scenery | $16.99 | Cosmetic scenery |
| Individual sceneries | $3.49 each | Pirate, Epic Winter, Hog Mountain, Epic Jungle, Clashy Constructs |
| 1-Day Magic Shield | 100 gems | 24-hour protection from attacks |
| 2-Day Magic Shield | 150 gems | 48-hour protection |
| 1-Week Magic Shield | 250 gems | 7-day protection |
| Giant Gauntlet (League Shop) | 750 league medals | Powerful hero equipment |
| 2.5 million gold (League Shop) | 15 league medals | Resource purchase |

---

## What stood out

1. The Supercell ID achievement rewards 100 XP and 50 gems — ten times more than a standard achievement like Town Hall upgrade (10 XP, 5 gems). The disparity makes account linking the single most rewarded action available in the achievement system, which is unusual given that it primarily benefits Supercell's cross-device tracking rather than the player's gameplay.

2. A survey appeared during Session 1, mid-gameplay, asking "which of the following are most important for you in a game?" with twelve options including chatting with others, competing against others, becoming as powerful as possible, collecting everything, strategic decision-making, and being immersed in a rich story. Players could select up to three. A second question asked what they were "most looking forward to in Clash of Clans" with ten options covering attacks, achievements, league ranking, leveling up, mastering strategy, customizing with skins, playing with their clan, and experimenting with different compositions. The survey appeared inside the game without prior notice and linked to an external URL.

3. The season pass does not appear until Town Hall 7. The sessions explicitly noted this threshold ("we need to be Town Hall 7 to get the season pass — it's not gonna be easy") and confirmed it had not appeared by Town Hall 6. This means a new player can spend many hours in the game before the season pass becomes available as a purchase option.

4. The Builder Base is a fully separate village with separate currencies, separate buildings, separate troops, and a separate progression track — all accessed by boarding a boat from the home village. The two villages do not share resources, troops, or upgrade materials. The session discovered it mid-game ("we've got two villages — we gotta pay attention to both").

---

## Analysis notes

Four sessions covering first install through Town Hall Level 6. The season pass, piggy bank, and first-purchase bonus were all explicitly checked for and confirmed absent within the sessions' scope. The session in Session 4 was not retrieved due to a rate limit at the time of analysis — sessions 1 through 3 form the primary evidence base. Session 1 was very long (2+ hours). Sessions 2 and 3 were shorter focused reviews of specific features (war zone, Builder Base). The player joined a real clan during Session 1 ("Cape Town Gangster") and observed that the first visible clan chat message appeared to be a spam advertisement.

---

## Category context

No explicit comparisons to other games were made in the transcripts.

---

## Unrecognized mechanics

### `base-layout-editor`
**What was observed:** After reaching Town Hall 3, a layout editor unlocked. The player can move buildings freely on the grid, rearrange defenses, and switch between different saved layouts (described as "active village layout" with multiple options). The layout editor can be used to redesign the war base separately from the home village during preparation day of a clan war. The transcript noted: "you can edit our village which is very important if you're not doing a good work in building." The editor functions as a strategic planning tool for defense arrangement — changing which buildings are exposed to attack paths.
**Why it does not map to an existing mechanic:** Not `cosmetics` — the layout editor changes strategic capability, not appearance. Not `clans-guilds` — it is an individual mechanic used within clan war preparation but is not the clan mechanic itself. The base layout editor is a spatial strategy tool that separates "what buildings you own" from "how they are arranged," giving the player ongoing strategic agency over their defensive configuration.
**Worth adding to library:** Possibly — as a category-level pattern in base-building games where spatial arrangement is a strategic variable.

### `magic-shield`
**What was observed:** A magic shield appears automatically on the home screen from early in the game (2 days 23 hours countdown visible from Town Hall 2). The shield prevents other players from attacking the player's village in regular multiplayer battles. An 8-hour magic shield is awarded automatically after the village is attacked. Shields can also be purchased (1-day for 100 gems, 2-day for 150, 1-week for 250). The shield duration counts down continuously and is always visible on the home screen. The shield does not affect ranked (legend league) battles. Buying multiple shields combines their durations.
**Why it does not map to an existing mechanic:** Not `energy-lives` — the shield doesn't gate the player's own gameplay but prevents opponents from attacking. Not `cosmetics` — it provides a gameplay benefit. The magic shield is a temporal protection mechanic: a time-limited defense against PvP attacks that creates a natural return rhythm (the player knows when their shield expires and when they become vulnerable).
**Worth adding to library:** Possibly — the "protection window" mechanic (limited-duration immunity from opponent action, creating a known vulnerability deadline) appears in multiple strategy games and creates a distinct return cadence.

### `dual-village-structure`
**What was observed:** Clash of Clans contains two entirely separate villages: the Home Village (primary, unlocked from start) and the Builder Base (secondary, unlocked at Town Hall 5 by repairing a boat). Each village has its own currencies (gold/elixir for Home Village; gold squares/purple droplets for Builder Base), its own buildings, its own troops, its own battle mechanic (Home Village uses asymmetric attack/defense; Builder Base uses simultaneous head-to-head battles), its own progression track, its own shop items, and its own league system. Navigating between them requires tapping the boat on the Home Village map. Resources and materials do not transfer between villages.
**Why it does not map to an existing mechanic:** Not `passive-construction-meta` in duplicate — the two villages have different battle mechanics, different economies, and different social structures. The dual-village structure is a game architecture decision: two parallel games within one app, each with a complete progression system, sharing only the gem currency and some achievement tracks.
**Worth adding to library:** Possibly — as a structural observation for strategy games that use parallel progression systems to extend engagement surface without requiring the player to reach a single high-level endpoint.

### `soft-currency` (Gold, Elixir, Dark Elixir, Builder Base Gold, Builder Base Elixir, League Medals, Green Challenge Points, Clan XP)
**What was observed:** Multiple distinct soft currencies were described across the sessions. Gold and Elixir are the primary Home Village currencies, earned from mines/collectors and from attacking, spent on buildings and troops. Dark Elixir (unlocks at a later Town Hall level — not reached in sessions) was referenced as the third Home Village currency. Builder Base Gold and Builder Base Elixir are separate currencies earned only in the Builder Base, spent only on Builder Base buildings and troops. League Medals are earned through clan war league participation and spent in the League Shop. Green challenge points (unnamed in the transcript, described as "green droplets") are earned by completing challenges and unlocked as rewards on the challenge reward track. Clan XP is a shared clan resource earned through war wins and other clan activities, advancing the clan's level.
**Worth adding to library:** Flagged as a known library gap. The proliferation of specialized currencies (each tied to a specific content area and unusable in others) is notable even by the standards of the library's other games.

### `hard-currency` (Gems)
**What was observed:** Gems are purchased with real money ($0.49 for 80 gems up to $49.99 for 14,000 gems) and spent directly in the game on: speeding up build timers, refilling army capacity, purchasing magic shields, buying decorations, and unlocking certain items in the shop. No intermediate conversion step between real money and gems.
**Worth adding to library:** Flagged as a known library gap.
