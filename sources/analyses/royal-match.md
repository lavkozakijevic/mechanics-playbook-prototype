# Royal Match

**ID:** royal-match
**Category:** Casual / Puzzle
**Type:** Game
**Platform analyzed:** iOS
**Analysis date:** 03 Apr 2026
**Last updated:** 15 May 2026
**Session state:** First install — played from level 1 to approximately level 41 in a single extended session

---

## Overview

Royal Match is a match-3 puzzle game where players clear boards to earn stars, which are spent to decorate and restore a castle and its rooms. A cast of characters — most prominently King Robert — provides narrative framing. The game introduces mechanics progressively as levels are completed, layering a large number of parallel systems (team tournaments, limited-time events, a battle pass, collections, mini-games) on top of the core match-3 loop. The session reached level 41, which was sufficient to encounter most major mechanic systems.

---

## First impression

The Apple tracking permission dialog appears first. There is no account creation or sign-in prompt — the game begins immediately. The first tutorial move is shown (make a match next to a box to break it), followed immediately by a prompt to build a castle using the first earned star. The player is constructing a Disney-like castle from the first seconds of play. No onboarding screen explains the economy or mechanics — everything is introduced through play.

There is no timer on puzzle levels — only a move count. Boosters are shown but locked. The game treats the player as someone who already knows match-3, with difficulty scaling gradually rather than spending excessive time on basics.

---

## Core activity

Players complete match-3 puzzle levels to earn gold stars. Stars are spent to complete construction and decoration tasks across named rooms of a castle. Each room has multiple tasks (install gazebos, plant bushes, lay carpet, hang a chandelier) that cost increasing numbers of stars. Completing all tasks in a room unlocks a new room, a reward chest, and a celebratory animation of the king. Puzzle difficulty increases across levels while new booster types are unlocked periodically.

---

## Mechanics observed

### Energy-Lives (`energy-lives`) · Core

**What was observed:**
Players start with 5 hearts. Each failed level costs one heart. Hearts regenerate at a rate of one every approximately 25 minutes ("24 minutes 25 minutes to restore a single heart" noted after spending hearts around level 19). When all hearts are depleted, a "more lives" screen appears showing: time to next life, a free lives request option (request from teammates), and a refill option costing 900 gold coins.

Around level 19–20, the session noted the first heart spending: "when we get to three moves, the king looks worried" — a visual cue of dwindling lives pressure. At this point hearts became a meaningful constraint for the first time.

After joining a team, a new option appeared in the lives screen: "free lives — total free lives zero — there are no lives in your inbox — ask your teammates — request." A button sends a life request to the team, which is available for 4 hours. The Easter Pass upgrade changes the heart cap from 5 to 8.

**How it is presented:**
Hearts are displayed as five icons in the top bar of the home screen from the start. The "refill" option (900 gold coins) appears on the lives screen alongside the free request option. When lives run low during a level, the king character visually expresses concern. After failing a level with no hearts, the game prompts continuation options.

**What is notable:**
The lives request mechanic connects the energy system directly to the team/clans-guilds mechanic — players who join an active team have access to a free life regeneration channel not available to solo players. The Easter Pass's heart cap increase (5 → 8) is one of the three stated functional benefits of purchasing the pass.

**Screenshot suggestions:**

`[Lives screen showing 3/5 hearts, "time to next life: 7:30," the "free lives" request button, and the 900-coin refill option]`
*Documents the energy mechanic, the regeneration timer, the free request path, and the coin refill path simultaneously.*

---

### Limited-Time Events (`limited-time-events`) · Core

**What was observed:**
Multiple simultaneous limited-time events were introduced progressively as levels were completed, rather than all at once. Five distinct events were observed:

**Propeller Madness (introduced around level 27–28, 2 days remaining):**
A multi-stage achievement track triggered by collecting propeller power-ups during normal levels. Stages: Collect 5 propellers → collect 100 coins → progressively harder targets. Grand prize: 10,000 gold coins. Progress was visible on screen and updated after each level. The track rewards at each stage, building toward the grand prize.

**King's Nightmare (mini-game, recurring throughout):**
A distinct mini-game mode appearing between levels, framed as the king having a dream. Two variants observed: (1) carry water to a sprinkler using pipes, 20 moves, (2) rescue the king by breaking all boxes before time runs out, 30 moves. Reward: 50 gold coins. The player can play or skip. The transcript noted this mirrors gameplay shown in Royal Match advertisements: "gameplay that's shown in the ad is not the actual gameplay in the game — it is included as a minigame." Appeared at levels 9, 15, 28, and implied to recur.

**Easter Treasure (limited offer, introduced around level 34, 2 days 12 hours remaining):**
A chain of free and paid reward claims presented as a sequence. Structure: free hammer → free 100 coins → free chest → $2.99 offer (1 TNT, 3,000 coins, 1 hammer) → free 200 coins → free bow and arrow → free double boosters → free cannon → free jester → [implied further free items]. New items revealed as prior items are claimed. The $2.99 offer sits mid-chain — free items on both sides. To access free items after the paid offer, the paid offer must be purchased.

**Egg Hunt (introduced around level 39, 2 days 12 hours remaining):**
Beat levels to smash eggs, earning toward basket rewards. "Beat levels — smash 25 more eggs to smash the next basket." Triggered by completing level 38. Tapping "play" on the egg hunt screen simply launched the next regular level, meaning egg hunt progress accumulates automatically through normal play.

**Team Tournament (introduced around level 22, ongoing):**
Described separately under Clans-Guilds. Also functions as a limited-time event — operates within a defined tournament window.

**How it is presented:**
Events are introduced one at a time through popup interruptions between levels. The pacing of event introductions is deliberate — the transcript observed: "they're slowly being introduced into the game instead of all at once to clutter the screen and then are activated over time and added when the player might start experiencing fatigue from playing the same thing." Events appear as icons on the home screen and as pop-ups after level completion.

**What is notable:**
The Easter Treasure chain uses a free-paid-free structure where free rewards sit on the far side of a paywall — users must purchase one item to unlock the subsequent free items. The King's Nightmare mini-game is notable as an in-game recreation of the game's own advertising format: the chaotic puzzle-rescue gameplay shown in Royal Match ads is not the actual match-3 gameplay but is implemented as an optional side mode. The Egg Hunt feeds directly into normal level progress — there is no separate egg hunt mode, just additional rewards layered onto normal play.

**Screenshot suggestions:**

`[Propeller Madness event screen showing the multi-stage reward track with current progress, grand prize (10,000 gold coins), and the 2-day countdown]`
*Documents the progressive reward track structure and the countdown-gated design.*

`[Easter Treasure chain showing free → free → free → $2.99 → free → free sequence, with claimed items lit and the paid offer mid-chain]`
*Documents the free-paid-free chain structure as a distinct limited-time offer format.*

`[King's Nightmare mini-game opening screen showing the rescue scenario, 50 gold coin reward, and the Play/Skip options]`
*Documents the recurring ad-gameplay mini-game mechanic.*

---

### Clans-Guilds (`clans-guilds`) · Core

**What was observed:**
Teams are structured cooperative groups with shared competitive goals, contribution tracking, and both individual and collective rewards.

**Access requirements:** Teams require level 21 to join. The session reached level 21 after approximately the third area. Joining is done from the Leaderboard tab → Teams, or from the home screen prompt. Teams have a name, badge, score, capacity (up to 50 members), required level, and open/closed status.

**Team Tournament:** The primary shared goal mechanic. After joining a first team (13 members, insufficient for a tournament), the session noted a popup: "after level 22 we got a pop-up about team tournament — notification that we need at least 10 members in our group to participate." After switching to a larger team, the tournament interface appeared: teams are ranked by position; the user's team started at position 9. Progress is tracked in "lances" contributed per member.

Contribution mechanic: "convert tokens to lances and contribute to your team." Tokens are earned by playing normal levels. The "not getting reward without contribution" consequence was explicitly described: "many of us who have zero — not getting reward without contribution." The rank display shows armor icon for each player — the armor color changes from silver to gold as contribution increases. The session observed the armor changing to gold at level 34 after sufficient contribution.

**Team Tournament purchase offers (Bronze/Silver/Gold Team Gift Offers, 2 days 13 hours remaining):**
- Bronze Team Gift Offer: $9.99 — player gets 5,000 gold coins, 1 hour infinite power-ups and boosters; team members each get 15 minutes of infinite hearts.
- Silver Team Gift Offer: $19.99 — player gets 10,000 gold coins, 12 hours infinite boosters, 2x power-ups; team gets 30 minutes infinite hearts.
- Gold Team Gift Offer: $39.99 — player gets 25,000 gold coins, 6 hours infinite hearts, 4x power-ups, 24 hours infinite boosters; team gets 1 hour infinite hearts.
Purchase limit: one per offer type. Surfaced in the shop at the very top position above all other offers throughout the tournament window.

**Life sharing within teams:** Team members can send lives to each other. Life requests are visible for 4 hours. "Send a request and we can send a message — we sent life and for that life we got five coins back from this person." Players can request cards (from the set collection system) with a 24-hour request window.

**How it is presented:**
Teams are suggested from the home screen immediately at level 20 ("just got hard — we saw lives running out — now being prompted to join a team to get free lives — free rewards"). The pitch at this exact moment — when energy is depleted and difficulty has spiked — is deliberate. The team gift offers appear in the shop at the top position above all other offers for the full tournament duration.

**What is notable:**
The team purchase mechanic is unique in the library: the primary monetary benefit goes to the purchaser (coins, infinite resources), but a portion of the reward (infinite hearts for a defined duration) is distributed to all team members. This turns a personal purchase into a group benefit, creating social pressure from the team's perspective (members may notice who contributed and who did not, since contribution rankings are visible).

**Screenshot suggestions:**

`[Team tournament screen showing team position (9th), member contribution list with lance counts, armor color indicators, and the reward tiers for top positions]`
*Documents the shared goal, individual contribution visibility, consequence for non-contribution, and rank-based reward structure.*

`[Team Gift Offers screen showing all three tiers (Bronze $9.99 / Silver $19.99 / Gold $39.99) with the split between personal rewards and team rewards for each]`
*Documents the personal-purchase-with-team-benefit mechanic.*

---

### Season Pass (`season-pass`) · Core

**What was observed:**
The Easter Pass is introduced at level 37 with 27 days 12 hours remaining. "Welcome to the Easter Pass — here is your first reward" — a TNT is immediately given on accessing it.

**Structure:** 30 rewards total. Each reward has a free tier item and a paid tier item in gold coloring. Examples:
- Step 1: Free: 1 TNT / Paid: 8 lives + golden frame + golden username + gift for teammates
- Step 2: Free: 1 colored candy / Paid: 15 minutes infinite health
- Final chest: Free: 3x power-ups and boosters / Paid: 1 hour infinite boosters + 1,000 coins

Advancement mechanic: "beat levels, collect keys, unlock rewards." Keys drop from completing levels — no separate action required. The paid Easter Pass is $9.99.

**Functional paid-tier benefits beyond cosmetics:**
- 8 lives instead of 5 (increased energy cap)
- Golden profile picture frame
- Golden username
- Gift for teammates (one-time team benefit at purchase)

**Bonus Bank:** Described as appearing at the very bottom of the pass's stage list — "activate Easter Pass to unlock the bonus bank at the end of the stages." The bonus bank was not visible until the player had scrolled through all 30 stages of the free tier. "There was no hint of its existence — not even in the pass itself — it is located all the way down at the very bottom."

**How it is presented:**
Easter Pass activates at level 37, after 3 areas and ~37 levels of play. At this point the player has experienced energy pressure, team mechanics, and multiple limited-time events. The pass's first free reward (TNT) is immediately claimed on entry. The paid option is $9.99 with a button labeled "activate." The pass icon appears in the shop directly below the team gift offers.

**What is notable:**
The functional benefits of the paid tier (extra lives, profile frame, golden username) are mixed in a single purchase: the lives are gameplay-relevant, the frame and username are cosmetic. The Bonus Bank is deliberately hidden at the bottom of the 30-stage list — it functions as a late-discovery upsell within the pass itself, only encountered by a player who has engaged deeply enough with the free tier to reach the end. The transcript explicitly noted the absence of any prior indication it existed.

**Screenshot suggestions:**

`[Easter Pass free vs. paid tier comparison showing Step 1 (TNT vs. 8 lives + golden frame + golden username + team gift) and the 30-step track with 27-day countdown]`
*Documents the free/paid tier structure, the functional vs. cosmetic mix, and the event duration.*

`[Bonus Bank screen at the very bottom of the pass, with the note that it is accessible only after scrolling through all 30 free-tier stages]`
*Documents the deliberately hidden upsell mechanic at the end of the pass.*

---

### Set Collection (`set-collection`) · Supporting

**What was observed:**
Culinary Collection is introduced at level 41 with 27 days 12 hours remaining. "New collection started — here's your first card pack to get started — tap to open." Four cards were received: rolling pin, falafel, marshmallow, sorbet.

**Structure:** 15 named sets — Frozen, Street Foods, Sweets, Garnishes, Tools, Dairy, Pastries, Spices, Cuisines, Snacks, Market, Coffee, Drinks, Dining, Breakfast. Each set contains 9 cards. Total: 135 cards across 15 sets. Completing each set earns a reward (boosters, coins, items specific to that set). Completing all 15 sets earns the grand prize: 10,000 gold coins, a Chef badge, and 10x boosters.

**Card acquisition:** Cards are earned from event participation, reward chests, area completion chests, and card requests from teammates. After the collection was introduced, a card request option appeared in the team interface alongside the life request. Card requests have a 24-hour window. Duplicate cards generate "card stars" which can be used to open additional chests.

**How it is presented:**
Culinary Collection appears as a new navigation tab (the cards icon in the bottom bar, previously shown as "reach level 41 to unlock collection"). On unlocking, a large prompt directs the player to the collection screen. Individual card slots are shown with blank spaces for missing cards, clearly displaying what is needed.

**What is notable:**
The Solitaire Grand Harvest analysis made a comparison to Royal Match collections explicitly: "similar to Royal Match has this collection." Both use food-themed named card sets. The set collection's grand prize (Chef badge) is a named cosmetic marker — the same design pattern as Strava's trophy case — connecting set completion to profile display. Card requesting from teammates creates a second daily interaction channel between team members beyond life sharing.

**Screenshot suggestions:**

`[Culinary Collection overview showing all 15 named food sets, the Chef badge grand prize, completion rewards per set, and the current 4 collected / 135 total status]`
*Documents the named set structure, the completion reward per set, and the grand prize milestone.*

---

### Achievements (`achievements`) · Supporting

**What was observed:**
The Trophy Case on the player profile contains milestone trophies for activity counts. Trophies observed: First Activity, Third Activity, Fifth Activity, Tenth Activity, extending to 1,000 Activity (implied — the full ladder was described as going "up to a thousand activity").

The Butler's Gift mechanic introduces a performance achievement: "beat levels on your first try to start the next level with power-ups." This is a temporary streak of first-try completions that grants a functional reward (power-up on level start). The butler's gift was described as remaining "active on two out of three" after several levels, suggesting it tracks a consecutive first-try streak.

The profile shows general stats: level, first-try wins, helps received, areas completed, collections completed, sets completed.

**How it is presented:**
Profile stats are accessed by tapping the profile icon. Trophy Case is shown at the bottom of the profile page. Butler's Gift activates as a passive overlay visible on the level select screen.

**What is notable:**
Butler's Gift is the most dynamic achievement mechanic observed — it actively rewards skill (first-try completion) with a functional benefit on the immediate next level. This creates an incentive to invest effort into any given level beyond simply passing it, because a sloppy win that uses power-ups forfeits the butler's bonus on the next level.

**Screenshot suggestions:**

`[Trophy Case on profile showing earned milestones (First Activity) alongside future milestone markers]`
*Documents the permanent achievement ladder with future targets visible.*

`[Butler's Gift overlay on a level with "2/3" active status showing the ongoing first-try streak and the power-up bonus it provides]`
*Documents the skill-based performance achievement and its functional reward.*

---

### Variable Reward (`variable-reward`) · Supporting

**What was observed:**
Reward chests are earned at multiple points: after completing an area, during event participation, and at bonus levels. Chest contents are not disclosed before opening — they are revealed through an animation. At the first area completion chest, the reward was "250 gold coins and four different kinds of boosters/power-ups." The contents varied and were not predictable from the chest's appearance.

The Culinary Collection card packs are a direct variable reward: "here's your first card pack — tap to open — we got rolling pin, falafel, marshmallow, sorbet." Card identity is unknown before opening; the player knows they will receive food-themed cards but not which specific ones or from which sets.

Bonus levels (at levels 20 and 40) are described as: "collect as many coins as possible in 20 moves" — the amount collected varies based on play performance rather than a random pull, but the level structure (starting with TNTs, abundant coin drops) is set up to feel like a jackpot moment.

**How it is presented:**
Chests open with an animation before revealing contents. Card packs open with a tap. Bonus levels are marked distinctly on the level map with a gold/crown icon.

**What is notable:**
The card pack mechanic in the set collection system creates a direct variable reward loop — completing areas produces chests that contain both coins and card packs, and card packs contain unknown collection cards that may or may not complete needed sets. Duplicate cards convert to card stars rather than being wasted.

---

### Daily Login Reward (`daily-login-reward`) · Shallow

**What was observed:**
No explicit daily login calendar or named daily login reward was described in the session. However, the Easter Pass is noted as rewarding keys for beating levels — a passive progression mechanic tied to daily engagement with the game. The Butler's Gift mechanic also creates implicit daily return pressure through the ongoing consecutive first-try streak.

The session was a first-install single sitting, so return-day login mechanics may exist that were not encountered. The evidence is insufficient to confirm this mechanic.

---

### Leaderboards (`leaderboards`) · Supporting

**What was observed:**
The Leaderboard tab (golden cup icon in the bottom navbar) contains three views: Friends (requires Facebook connection), Players (world leaderboard), and Teams.

**World player leaderboard:** Shows player names, profile photos, levels, and crown counts. Top players observed at level 13,401. The leaderboard is ranked by number of crowns — "we can see who are leaders in the world and which levels they're on — there are people who have 11,000 crowns." Country filter available: "we can see our country — who are people who are top players in the country."

**Teams leaderboard:** Shows team names, badges, member counts (capacity up to 50), and scores. Highest team score observed: 700,033. Country filter also available. Top teams are described as "usually filled up all the way with players."

**Team Tournament leaderboard (within the tournament):** Shows the user's team position (started at 9, noted as improving) with individual member contribution rankings visible within the team.

**How it is presented:**
The Leaderboard tab is the second item in the bottom navigation bar. Facebook connection is required for the Friends tab but not for world or teams views. Crown counts are the ranking metric for individual players.

---

### Cosmetics (`cosmetics`) · Shallow

**What was observed:**
Profile customization is described: profile photo (Facebook import or avatar selection), username, avatar frame, and username color. The Easter Pass paid tier specifically provides a "golden profile picture frame" and "golden username" — visual differentiators that signal paid status to other players. The Chef badge from completing the Culinary Collection is displayed on the profile.

These cosmetics are described but not explored in detail. The avatar selection, frame, and username color options were seen but not examined exhaustively.

**How it is presented:**
Accessed by tapping the profile icon in the top-left. The golden frame and username from the Easter Pass are described as letting the player "stand out, look different to all other users — a cosmetic to show other users that we are premium user."

---

## Mechanics not observed

**Streak:** No consecutive-day login counter with a described reset mechanic was found. Butler's Gift tracks consecutive first-try wins within a session but resets differently and serves a functional (not retention) purpose.

**Piggy Bank:** No described accumulate-while-playing, purchase-to-unlock currency mechanic was observed, though the game's gold coin economy and refill purchases share surface similarities.

**Daily-Weekly Quests:** No recurring auto-assigned daily task list with a named reset cadence and defined reward was described. The limited-time events (Propeller Madness, Egg Hunt) have multi-day durations and progressive reward tracks but are not daily-reset quest systems.

**Ads:** No rewarded video or interstitial ad units were described anywhere in the session.

**Social Feed / Community Groups:** No activity feed or topic-based community feature was described.

---

## How mechanics connect

**Energy connects to teams, which connects to purchases.** Hearts (energy) deplete through failed levels. At exactly the point when difficulty spikes (level 19–20) and hearts are running low, the join-a-team prompt appears — pitching free lives from teammates as the solution. Joining a team opens the team tournament, which surfaces the team gift purchase offers. The energy problem → team solution → tournament context → team purchase is a deliberate funnel.

**Limited-time events feed currency, currency feeds events.** Every limited-time event rewards gold coins on completion. Gold coins fund level retries (900 coins per refill), booster purchases, and the team gift offers. Playing levels to advance in events also earns coins through normal gameplay. The economy is circular: play to get coins, spend coins to continue playing, continue playing to advance in events, advance in events to get more coins.

**The season pass absorbs multiple mechanics.** The Easter Pass's rewards include: extra hearts (energy mechanic), team gift (clans-guilds mechanic), cosmetics (cosmetics mechanic), and power-ups (in-level booster economy). Purchasing it affects five separate mechanic systems simultaneously, making it the highest-leverage purchase in the game.

**Set collection and team cooperation share a request channel.** After the Culinary Collection unlocked at level 41, card requests were added to the team interface alongside life requests. A single daily interaction with the team now covers two needs — lives and collection cards — making the team interface a multi-mechanic daily touch point.

**Events are introduced to match player fatigue cycles.** The transcript explicitly noted: events "are slowly being introduced into the game instead of all at once — they're activated over time and added when the player might start experiencing fatigue." Propeller Madness at level 27, Egg Hunt at level 39, Culinary Collection at level 41 — each introduces a new engagement layer precisely when the previous one might be feeling routine.

---

## Session rhythm

**Session structure:** Play levels → earn stars → spend stars on construction tasks → watch castle improve → unlock new room → play more levels → encounter events → contribute to team tournament → encounter shop offers.

**Level-based unlock schedule:**
- Level 6–7: Royal Hammer unlocked (first booster)
- Level 14: Arrow booster unlocked
- Level 17: Cannon booster unlocked
- Level 18: Shuffle booster unlocked
- Level 20: Bonus level / team join prompt
- Level 21: Team access unlocked
- Level 22: Team Tournament visible
- Level 27–28: Propeller Madness event
- Level 34: Easter Treasure event
- Level 37: Easter Pass introduced
- Level 39: Egg Hunt event
- Level 40: Bonus level
- Level 41: Culinary Collection unlocked

**Session-end pressure:** Heart depletion at approximately level 19–20 was the first natural session-end moment. The game responded with a team join prompt rather than a hard stop. The 900-coin refill option and teammate life requests are both presented at the point of heart exhaustion.

**Return pressure:** Team tournament window (2 days 13 hours), Easter Treasure (2 days 12 hours), Easter Pass (27 days 12 hours), Propeller Madness (2 days), Egg Hunt (2 days 12 hours), Culinary Collection (27 days 12 hours). Multiple overlapping countdowns create perpetual return pressure at different cadences.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Special offer (timed, appears early) | $1.99 | ~2,000 gold coins, 1 hour endless boosters, power-ups |
| Princess Treasure | $9.99 | 5,000 gold coins, 1 hour endless boosters, power-ups |
| Queen's Treasure ("popular") | $19.99 | 10,000 gold coins, 12 hours endless boosters, power-ups |
| King's Treasure | $39.99 | 25,000 gold coins, 4x power-ups, 24 hours endless boosters, 6 hours endless hearts |
| Royal Treasure | $79.99 | 50,000 gold coins, 10x power-ups, 72 hours endless boosters, 12 hours endless hearts |
| Superior Treasure ("best value") | $99.99 | 65,000 gold coins, 13x power-ups, 100 hours endless boosters, 18 hours endless hearts |
| 1,000 gold coins | $1.99 | 1,000 gold coins |
| 5,000 gold coins | $7.99 | 5,000 gold coins |
| 10,000 gold coins | $14.99 | 10,000 gold coins |
| 25,000 gold coins | $29.99 | 25,000 gold coins |
| 50,000 gold coins | $54.99 | 50,000 gold coins |
| 100,000 gold coins | $99.99 | 100,000 gold coins |
| Bronze Team Gift Offer | $9.99 | Player: 5,000 coins, 1hr infinite power-ups/boosters; Team: 15 min infinite hearts each |
| Silver Team Gift Offer | $19.99 | Player: 10,000 coins, 12hr infinite boosters, 2x power-ups; Team: 30 min infinite hearts each |
| Gold Team Gift Offer | $39.99 | Player: 25,000 coins, 6hr infinite hearts, 4x power-ups, 24hr infinite boosters; Team: 1hr infinite hearts each |
| Easter Treasure mid-chain offer | $2.99 | 1 TNT, 3,000 gold coins, 1 hammer (unlocks remaining free chain items) |
| Easter Pass | $9.99 | 30 paid-tier rewards over 27 days: 8 hearts (vs 5), golden frame, golden username, team gift, boosters, coins |

---

## What stood out

1. **The team join prompt appears at the precise moment the energy system first becomes painful.** Around level 19–20, difficulty spikes, hearts run low, and the "join a team to get free lives" prompt appears. This sequencing is not coincidental — the game surfaces the solution to the energy problem at the moment the player first experiences that problem acutely, making the team mechanic feel like a natural remedy rather than a feature to discover.

2. **King's Nightmare is an in-game recreation of the game's own advertising format.** Royal Match's ads famously show rescue puzzle gameplay that is not the actual match-3 game. Rather than leaving this as a disconnect, the game implements it as a recurring optional mini-game — King's Nightmare — making the advertised gameplay real, just optional. Players who discovered the game through its ads encounter familiar gameplay within the actual product.

3. **The Easter Treasure chain uses a free-paid-free structure.** Consecutive free items lead to a $2.99 required purchase, after which free items resume. The entire sequence is visible — players can see the free rewards waiting on the far side of the paid item before deciding whether to pay. This is a distinct paywall design: the reward for paying is not the item itself but the resumption of a free reward chain.

4. **The Bonus Bank in the Easter Pass is hidden at the bottom of 30 stages with no prior indication.** A player who completes all 30 free-tier stages discovers an additional mechanic (bonus bank) that was never mentioned in the pass's initial description or any popup. It functions as a late-session discovery reward — a surprise for engaged players who fully explore the free tier, while also serving as a subtle reason to purchase the pass (since the bonus bank only activates with the paid tier).

---

## Analysis notes

One session. First install to level 41 in a single extended sitting. The session covered the full mechanic stack that Royal Match surfaces in its first 41 levels. Areas not covered: the Leaderboard's Friends tab (requires Facebook), the Collection feature beyond its introduction, the full Royal League feature (tapping it produced no response at the time), and what happens after the team tournament concludes. The "x2 countdown" that appeared next to level 33 with a 15-minute timer was not fully explained — the transcript noted "rewards will be doubled for the next 15 minutes" suggesting it may be a timed double-reward mechanic triggered by an event milestone, but its origin was not confirmed.

---

## Category context

Solitaire Grand Harvest explicitly compared its collection mechanic to Royal Match: "similar to Royal Match has this collection." Both use food-themed named card sets as the set collection content. This is worth noting in any category report on casual puzzle games.

---

## Unrecognized mechanics

### `passive-construction-meta`
**What was observed:** Stars earned from match-3 levels are spent on named construction and decoration tasks across named rooms of a castle. Each room has 4–9 tasks (install gazebos, plant bushes, lay carpet, hang chandelier, install glass, etc.) each costing 1–2+ stars. Completing all tasks in a room triggers an area completion animation, a reward chest, and unlocks the next room. The rooms are themed — exterior castle → throne room → dining room → garden. The king character reacts to construction progress with expressions of pleasure, worry, or excitement depending on context. This meta-loop runs parallel to the match-3 loop and is the primary aesthetic reward system.
**Why it does not map to an existing mechanic:** Not `set-collection` — construction tasks are not organized into named sets with defined members and a completion reward per set. Not `xp-leveling` — there is no accumulating XP bar; progress is task-by-task. Not `achievements` — construction tasks are not permanent named markers but sequential consumable objectives. The passive-construction meta (earn currency through gameplay, spend currency on named decoration tasks to visually improve a space, unlock new spaces) is a distinct progression pattern in casual games — most commonly called a "meta-game" or "decoration meta." It appeared in Solitaire Grand Harvest's farm rebuilding and connects to broader patterns in games like Township, Gardenscapes, and Homescapes.
**Worth adding to library:** Yes — the decoration/construction meta-game (spend earned currency on named visual improvement tasks, unlock new spaces, receive narrative-character reactions to progress) is a mechanic pattern distinct enough from the 24 existing mechanics to warrant its own library entry.

### `soft-currency` (Gold Coins, Stars, Crowns)
**What was observed:** Three in-game currencies were observed. Gold coins are earned through level completion, bonus levels, chests, and event rewards; spent on level retries (900 coins per heart refill), booster purchases, and are given as event prizes. Stars are earned by completing levels (1 star per win); spent exclusively on construction tasks (1–2+ stars per task). Crowns are the leaderboard ranking metric — described as something players accumulate to appear on the world leaderboard, with top players having 11,000 crowns. How crowns are earned was not explicitly described.
**Why it does not map to an existing mechanic:** Not `hard-currency` — no currency is purchased directly with real money. Store purchases deliver gold coins as part of bundles alongside booster items, but coins can also be earned through play. Stars cannot be purchased. Crowns appear to be purely earned. These are three distinct soft currencies with separate earn and spend surfaces.
**Worth adding to library:** Flagged as a known library gap.

### `hard-currency` (Gold Coins, when purchased)
**What was observed:** Gold coins are available for direct purchase ($1.99 for 1,000 coins, scaling to $99.99 for 100,000 coins). When purchased, coins are spent directly on level retries, booster purchases, and in-store items. The purchase-to-spend path has no intermediate conversion step.
**Why it does not map to an existing mechanic:** Not `credits-tokens` — no conversion layer exists. Gold coins purchased are spent directly. However, gold coins are also earnable through play, making them simultaneously a soft currency (earned) and a hard currency (purchased). This dual-nature is common in casual games and worth flagging.
**Worth adding to library:** Flagged as a known library gap.
