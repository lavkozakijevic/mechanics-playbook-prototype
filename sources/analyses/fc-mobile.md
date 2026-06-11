# FC Mobile

**ID:** fc-mobile
**Category:** Sports Game
**Type:** Game
**Platform analyzed:** iOS
**Analysis date:** 06 Apr 2026 – 15 May 2026
**Last updated:** 15 May 2026
**Session state:** Sessions 1–5 cover first install through approximately day 4–5 of play. Sessions 6–7 are returning-user sessions recorded in May.

---

## Overview

FC Mobile is EA Sports' mobile football game built around building an "Ultimate Team" — a squad assembled from player cards acquired through drafts, packs, and exchanges. The game pushes users toward daily engagement through missions, limited-time events, and league participation, and drives monetization primarily through currency purchases, monthly cards, and draft vouchers.

---

## First impression

Session 1 begins with a birth date prompt, an Apple tracking permission dialog (noted as designed so the "Ask App Not to Track" option is visible by default, with "Allow" requiring a swipe up), and a loading screen that took over 60 seconds before the sign-in screen appeared. After signing in as a Guest, Jude Bellingham guides the user through a scripted tutorial: a skill drill sequence, a home-team selection from 47 leagues, a starter pack opening, an automated match played from the 65th minute against Manchester City, and then a player selection screen offering a choice of three players (Musiala, Barcola, Palmer at 102 overall) — though Musiala was awarded after the choice rather than revealed as uncertain. The first actual mechanic moment is the Kickoff Missions screen, which introduces a Day 1–7 daily task structure before the player can freely explore the game.

---

## Core activity

The game is a layered system of daily tasks, drafts, and competitive matches piled on top of a squad-building loop. The user opens the app, collects queued rewards from completed missions and login streaks, completes daily and event-specific tasks, uses accumulated draft vouchers to pull players, and plays skill games or head-to-head matches to earn more currency and Star Pass credits. Matches can be played manually in Head to Head, VS Attack, or Manager Mode (automated), or watched in the context of live UEFA Champions League duels.

---

## Mechanics observed

### Daily Login Reward (`daily-login-reward`) · Core

**What was observed:**
Two distinct daily login reward systems were observed across sessions.

The first is accessed through the Login tab inside Kickoff Missions. It shows a calendar of 15 entries labeled with day numbers. Rewards shown include 150 gems at day 2, 100 gems at day 5, 300 gems at day 10, 500 gems at day 15, and 800 gems at an unlabeled milestone, plus 200,000 gold coins for the current day (April 6). Previous days appear grayed out with a clock icon. On Session 2, the daily login pack was described as refreshing with a 16-hour countdown. Claiming the day-2 reward (150 gems) did not require opening an animation — tapping the circle collected it directly.

The second is the Dream Chasers Daily Login reward, found within the UEFA Dream Chasers event. It runs for 10 days and on Session 2 displayed a countdown of 16 hours 37 minutes before the next reward, with 10 days remaining. The first day's reward was a Dream Chasers Draft Voucher.

On Session 2, Day 2 login was recorded by both the Kickoff Missions login tracker and the Dream Chasers Celebration tracker simultaneously.

**How it is presented:**
The Login tab inside Kickoff Missions is not surfaced prominently on the home screen. It was found by the user while exploring the Kickoff Missions area. On Session 2, the daily login popup appeared as the first thing visible on app open. A link from one of the daily reward screens opened an external website (described as "dreamchasers free gifts, daily login rewards, FAQ"), taking the user out of the app without warning.

**What is notable:**
The calendar allows viewing the next month's upcoming rewards from inside the current month's screen. The daily login reward for the current day was replaced by an image of credits, packs, and gems with a shopping cart and "Explore Now" button that linked to an external website.

**Screenshot suggestions:**

`[The Login tab in Kickoff Missions showing the 15-day reward calendar with day markers, grayed-out past days, and the 200,000 coin reward for April 6]`
*Captures the full calendar structure and how past/future/current days are visually distinguished.*

`[The Dream Chasers daily login popup appearing on app open in Session 2, showing the 16:37 countdown and Draft Voucher reward]`
*Shows event-specific daily login layered on top of the base daily login system.*

---

### Monthly Card (`monthly-card`) · Core

**What was observed:**
Two monthly card products were observed. On Session 2 they appeared in the store under the Monthly Card tab. On Session 3 they appeared as a popup after completing a match. On Session 7 (May 7), both were visible at the very start of the app before reaching gameplay, described as being presented before the user "got even to the gameplay."

- Monthly Supply Card: $1.99. Instant reward: 200 FC Points. Daily gift: 1,000 gems every day for 30 days.
- Elite Monthly Supply Card: $4.99. Instant reward: 500 FC Points. Daily gifts: 1,500 gems and 30 rank up points every day for 30 days. At time of recording (May 7): 30 days remaining.

Both cards were stated to be purchasable simultaneously.

The transcript noted that neither card requires logging in daily to receive the daily gifts — the gems are delivered regardless: "it doesn't say that you have to log in to receive these rewards, but you just get them every single day."

**How it is presented:**
Presented as "monthly supply cards" with an instant reward and a 30-day drip. A countdown timer showed days remaining on both cards. Appeared both as a popup at app open (Session 7) and as a post-match popup (Session 3) and in the store's dedicated Monthly Card tab.

**What is notable:**
Both cards can be purchased simultaneously. Session 7 explicitly totaled the Elite card value: "500 FC Points, 45,000 gems, 900 training badges" over 30 days. The delivery mechanic does not require daily login to claim — the resource accrues regardless.

**Screenshot suggestions:**

`[The Monthly Card tab in the store showing both cards side by side with instant reward and daily gift details listed]`
*Documents the full dual-tier structure and the exact currency amounts at each price point.*

`[The post-match popup in Session 3 showing the Monthly Supply Card offer interrupting the return to the home screen]`
*Shows how the monthly card is surfaced at non-store moments.*

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Core

**What was observed:**
Three separate daily quest systems were observed running in parallel.

**Kickoff Missions (Days 1–7):** A set of daily tasks that vary by day during the player's first week. Day 1 tasks: Log into FC Mobile (completed during tutorial); Draft any pool once. Day 2 tasks: Login for 2 days; Play three skill games or matches in Division Rivals; Train one player. Day 3: Five tasks, rewards include cosmetics. Days 4–7 each have five tasks with escalating rewards (1,000 rank up points on Day 4; Kickoff Draft Vouchers x20 on Day 5; 7,500 gems on Day 6; 10,000 gems on Day 7). Tasks reset each day and the next day's tasks are locked until the current day's tasks are completed. Tasks cannot be previewed before the day unlocks.

**Dream Chasers Celebration (Days 1–5):** A parallel mission track tied to the UEFA Dream Chasers event. Shares some missions with Kickoff Missions (Log into FC Mobile, Draft any pool once) but runs independently. Completing 3 of the 5 daily missions is sufficient to claim the Dream Chasers Draft Voucher reward, without completing all 5. Session 2 noted a discrepancy: Dream Chasers Celebration recorded "Train a player once" as completed while Kickoff Missions did not.

**Daily Tasks (persistent):** A separate system of four tasks per day. Tasks observed: "Complete two skill games or matches in events," "Complete six tackles in any mode," "Earn 100 UEFA Dream Chaser tokens," "Watch one ad." Each task card shows a Go button and a refresh button. Refreshing a task costs 10 gems. Completing all four daily tasks unlocks an FC Box reward: 3 million FC coins, 300 gems, 300 Star Pass credits, 750 XP. Watching the ad task rewards 60 gems, 225 Star Pass credits, one blue egg piece, one red egg piece, and two yellow egg pieces.

**How it is presented:**
Kickoff Missions are accessed through Activities on the home screen, then through a subtab. Daily Tasks are in the same Activities area. Dream Chasers Celebration tasks are inside the UEFA Dream Chasers event. All three systems run simultaneously, with overlapping missions sometimes counted by one system but not the other.

**What is notable:**
Session 3 observed that Dream Chasers event rewards for Days 3 and 4 could be claimed before those days had elapsed: "We can claim rewards from daily missions, even for days that have not yet come." Kickoff Missions use a sequential unlock mechanic: day 3's tasks are not visible until day 2 is complete.

**Screenshot suggestions:**

`[Kickoff Missions screen showing all 7 day tabs, with Day 1 completed, Day 2 partially done, and Days 3–7 showing lock timers]`
*Documents the sequential day structure and the escalating reward preview.*

`[The Daily Tasks card for the Watch Ad task showing the refresh button, the reward breakdown, and the 10-gem refresh cost popup]`
*Documents the refresh mechanic and exact reward contents for an ad-watch task.*

---

### Variable Reward (`variable-reward`) · Core

**What was observed:**
Draft pulls are the primary variable reward surface. Multiple draft pools were observed across sessions.

**Welcome Draft (Sessions 1–2):** First pull produced 10,000 coins plus one player (Chudri, 106 overall, Leicester City). Pool A and Pool B previews slide through before pulling, showing Lampard, Baggio, Klose, and Puyol. Pool B or higher guaranteed in 11 drafts; Pool A guaranteed in 51 drafts.

**UEFA Dream Chasers Draft (Sessions 2–3):** Seven sub-pools observed — Songkran, Future Stars B, Ginger Draft, Future Stars A, Welcome, and two others. Each requires a specific voucher type. Pool B or higher guaranteed in 10 drafts; Pool A guaranteed in 100 drafts. Session 2 pulled Gareth Bale (117 overall, untradable). Session 3 used 10 Welcome tickets in one batch pull and pulled Ronaldo.

**Kickoff Draft (store, Session 2):** 200 gems or 200 FC Points per pull. Players between 102–105 overall. Individual identity unknown before opening. Session 2 pulled Maradona (untradable).

**Festive Draft (Sessions 2–3):** Requires Festive Draft Vouchers, available from Songkran Splash event.

**Easter Egg Box (Sessions 3–5):** Requires six egg pieces combined via Player Exchange into an Easter Egg Ticket, then used in the Easter Box. Session 5 pull produced gems. No probability disclosures visible in the Easter Box UI.

The store's pack for a $10 UCL Final product disclosed: 100% chance of 1,000 gems and 300 star shards; guaranteed 114+ overall player; 1.55% chance of 119 overall player; remaining probabilities descending from there.

**How it is presented:**
Drafts are accessed from the Exchange section, event pages, and Kickoff Missions tasks. Voucher types are fragmented by event — a UEFA Dream Chasers voucher cannot be used in a Songkran draft. The pack opening animation plays for every pull and requires multiple taps to continue. A "Watch Again" option was available after at least one pull.

**What is notable:**
The Easter Egg Box shows no probability disclosures. The tutorial-end player selection (Musiala / Barcola / Palmer) was presented as a choice with a known outcome, yet still triggered a pack opening animation. Batch pulling (10 at once) was available for pools where the user had sufficient tickets, with a "Reveal All" option.

**Screenshot suggestions:**

`[UEFA Dream Chasers draft screen showing Pool A and Pool B player previews sliding, with "Pool B guaranteed in 10 drafts" and "Pool A guaranteed in 100 drafts" text visible]`
*Documents the pity system and the player teasing mechanic before any pull.*

`[Kickoff Draft pack open animation mid-reveal, before tapping "Reveal All"]`
*Shows the staged reveal mechanic used consistently across all pack types.*

---

### Season Pass (`season-pass`) · Core

**What was observed:**
The Star Pass is a dual-tier reward track with approximately 60 steps. Free and premium tiers were observed. Advancing requires Star Pass Credits, which reset with each Season Update (cadence not stated in any session).

Free tier reward at step 3: 100,000 coins. Premium tier at step 3: 3 million coins (described as "30 times as much"). Miroslaw Klose at 120 overall was visible deeper in the premium track. At first entry into the Star Pass, the user had 789 out of 900 credits needed for the next step.

Two paid options: Premium Star Pass Ticket ($9.99, purchase limit 1) and Premium Star Pass Ticket Bundle ($19.99, purchase limit 1). The bundle includes the Star Pass plus 6,000 Star Pass Credits. How many steps 6,000 credits would unlock was not communicated in the store UI.

Star Pass credits are earned by playing in Division Rivals and live events. They were also received from daily task completion and Kickoff Mission packs before the user had ever visited the Star Pass screen.

Stadium customization (weather conditions, event stadiums like Winter Wonders, Neon Aqua vs Inferno, Ragnarok) and skill moves are locked behind Star Pass progress. Skill moves cost 1,000 gems each.

A second event-specific pass ran simultaneously: Songkran Splash Mini Pass ($9.99; bundle $19.99).

**How it is presented:**
Accessed via a small icon on the home screen. Not surfaced in onboarding. The user received Star Pass Credits as byproducts of other activities before being directed to visit the Star Pass. When first entered, Jude Bellingham described it, followed by generic onboarding that explained credit resets without stating the season length.

**What is notable:**
The user was accumulating and spending Star Pass Credits before understanding what the Star Pass was. The 6,000-credit bundle had no in-screen translation to "this unlocks you to step X." A second pass (Songkran) ran at identical price points at the same time.

**Screenshot suggestions:**

`[Star Pass track showing step 3 free reward (100,000 coins) vs. premium reward (3 million coins) side by side, with the purchase button under Klose visible further down]`
*Documents the reward differential between free and paid tiers at an early step.*

`[The Premium Star Pass Ticket Bundle offer in the store showing the $19.99 price and 6,000 credits with no step-count translation visible]`
*Captures the information gap in the purchase offer.*

---

### Limited-Time Events (`limited-time-events`) · Core

**What was observed:**
Multiple simultaneous limited-time events were running across all sessions.

**UEFA Dream Chasers:** The primary seasonal event tied to the Champions League. Structured into Main, Chapter 1, and Chapter 2. Chapter 1 involves three-star skill games and duel matches predicting real-life Champions League outcomes — with 13 hours remaining to pick a winner in Session 4, offering 100 Dream Chasers Tokens for a correct outcome. Chapter 2 unlocks one legendary player era per week (Roy Mackay, Gareth Bale, then weeks 3 and 4 locked at time of observation). Dream Boxes require refreshing 15 boxes at 150 Tokens each, with a 0–20 refresh limit. Theme challenges labeled "comeback," "heroism," and "all goals" are part of Chapter 1.

**Songkran Splash:** A Thai New Year event described as lasting 9 days. Features a separate Songkran Pass ($9.99/$19.99), water splash activity, build sand tower, beach treasure hunt, and an egg-of-the-day mechanic ("one egg per day keeps the magic alive. Don't forget to come back tomorrow," with a 14-hour return timer). Buriram United content (110–111 overall player) and Daniel Sturridge hero gift (111 overall) were event-associated items. Free rewards of gems and rank up points were delivered immediately on entering the event screen.

**Easter Egg Hunt:** Runs across Sessions 2–5 without a clear stated end date. Involves collecting red, yellow, and blue egg pieces from daily tasks, chapters, Division Rivals. Pieces combine in Player Exchange into Easter Egg Tickets, used in an Easter Box. Over multiple sessions the user was unable to locate the Easter Box and only found it in Session 5 by navigating to Featured, then Egg Hunt in the store, then to the exchange.

**Icon Chronicles — Zlatan:** Narrative event covering six eras of Zlatan Ibrahimovic's career (1999–2004, 2004–2011, 2011–2012, 2012–2016, 2016–end, Nordic Showman). Five numbered chapters must be completed sequentially. Each chapter contains missions: Session 3 showed a "Free Kick, hit the bricks" objective at Amateur difficulty for 200,000 coins, and a dribble coin-collector with three attempts and a timer. Zlatan as a player and a Zlatan Clapping emote are available after Chapter 1. Expires in 268 days. Nightmare Mode listed as exclusive, available after all chapters complete.

**Nation's Story (England, Mexico, Japan):** Three simultaneous nation-based events. Each uses a shard currency (Nation Story Mex Shards, Nation Story Japan Shards, etc.). Shard Packs: 100 FC Points per pack, purchase limit 15, expiring in 40 hours. After buying 5 Shard Packs, a free selectable gift unlocks. After buying 10 Shard Bundles (250 FC Points each), a free Ultimate selectable gift unlocks. A free daily pick was available — one of three players (Goretzka 104, Carragher, De Vrij) — claimable once, refreshing in approximately 15 hours.

**FC Pro Mobile World Championship (May 2026):** A popup on app open promoting a global competitive event with a $350,000 prize pool and "FC Pro Mobile 2026 World Champion" framing. "Register Now" redirected to an external website. The format and in-game mechanics were not described.

**How it is presented:**
Events are surfaced as five simultaneous "Go now" buttons on the home screen with no single events hub. Events share daily missions with the Kickoff Missions system in some cases.

**What is notable:**
At least five events were running simultaneously during Sessions 2–3. Icon Chronicles gates narrative chapters sequentially — Chapter 2 is inaccessible without completing Chapter 1. The Songkran Pass is a separate purchasable pass at identical prices to the Star Pass, running at the same time.

**Screenshot suggestions:**

`[Icon Chronicles Chapter 1 first task screen showing "Objective: Free Kick, Amateur difficulty, expires in 1631 days, guaranteed reward: 200,000 coins"]`
*Documents the task structure, the unusual 1631-day expiry, and the reward for completing a narrative event task.*

`[The home screen with five simultaneous "Go now" event buttons visible — UEFA Dream Chasers, Songkran Splash, England, Icon Chronicles, and generic rewards]`
*Captures the simultaneous event density a player encounters at this stage.*

`[Songkran Splash event screen showing the egg-of-the-day free reward with "one egg per day" copy and 14-hour return timer]`
*Documents the daily return mechanic embedded inside a limited-time event.*

---

### Leaderboards (`leaderboards`) · Supporting

**What was observed:**
Two leaderboard systems were observed.

**Head to Head Weekly Leaderboard:** Opens "when there are enough competitors for a week long ranking contest." Updates dynamically based on match wins. At the end of the countdown, players are rewarded by final ranking. Reward tiers for top 20, top 8, and top 1 were visible in Division Rivals. "Not ranked" was shown at first entry, with the instruction "complete a match to join the leaderboard."

**League Leaderboards:** Two types — a group leaderboard where leagues compete within an assigned group with promotions and demotions by rank, and a ranked leaderboard showing top leagues globally. In Session 5, the user's league was at position 19 within a group of 20 leagues, with 22,000 league points. The first-ranked league in the group had 1,281,000 points. The world-rank view showed the user's league at position 600,000 globally; the top-ranked global league had 1.7 million rewards and an average overall of 128.

**How it is presented:**
Head to Head leaderboard is inside the Head to Head mode. League leaderboards are in the Leaderboards tab of the league interface.

**Screenshot suggestions:**

`[League leaderboard showing the user's league at position 19 in group, the top three leagues' point totals, and the group promotion/demotion structure]`
*Documents the dual group/ranked structure and shows how individual standing is visible against others.*

---

### Clans-Guilds (`clans-guilds`) · Supporting

**What was observed:**
The league system is a structured cooperative group with shared goals, a collective reward track, and individual contribution mechanics.

**Structure:** Leagues support up to 100 members. The user observed one league with 42 members (Session 5) and created a new league for 3,000 gems in the same session. Leagues are created with a name, home team, privacy setting, tags (country, playstyle), description, and minimum required overall. Invite system was used in Session 5; users already in another league cannot be invited.

**Shared quest mechanics:** Two types of season quests observed. Collective activity quests: Top Buyer (2 members acquire packs in store), Transfer Market Specialist (place/sell orders), Friendly Match Champion (organize friendly matches), League Tournament Leader (organize league tournaments), Ad Veteran (league members watch ads), League Tournament Pro. Match-based quests: Head to Head Prodigy (37/50 matches completed at time of observation), VS Attack Ace, Manager Mode Strategist, Skill Games Challenge Conqueror, and others. Both quest types contribute season points to the league's shared total.

**Reward track:** 100 total rewards per season, including players, in-game currencies, and draft tickets. To reach the next level beyond start, the league needed 10,000 season points (2,600 at time of observation). Session 5 described the first reward already claimed. All members can claim rewards upon collective completion: "After completing the quests, all members can claim rewards. The honor belongs to every league member."

**League Tokens:** Earned from league tournaments, quests, and season rewards. Spent in the league exchange store. McManaman listed at 40,000 league tokens; League Limited Pack at 20,000; Draft Limited Offer at 10,000. The user had 40 league tokens at time of observation.

**Tournament:** Opt-in — members sign up individually. The league owner selects participants. Participants ranked by team overall before the tournament starts. Automated matchmaking finds opponents. Session 7 noted the user had 28 members in their league with no active promotion.

**How it is presented:**
League screen has five tabs: All (home), Chat, Match, Info, and tournament. Session 2 covered a Jude Bellingham-guided tour through each tab sequentially. Session 5 noted share functionality — match results can be shared as a screenshot to the league chat, and match replays can be watched by other league members.

**What is notable:**
The Ad Veteran and Top Buyer quests could theoretically be completed through the free daily resource pack, since claiming it counts as a pack acquisition. There is no in-app way to notify league members to sign up for a tournament once started.

**Screenshot suggestions:**

`[League Quests screen showing collective activity quests (Ad Veteran, Top Buyer) alongside match-based quests (Head to Head Prodigy 37/50)]`
*Documents the dual quest structure and how individual actions contribute to shared league progress.*

`[League season rewards track showing the 100-reward milestone list, with the first reward claimed and the 10,000 season points threshold marker visible]`
*Documents the collective reward track and the scale of the season-long progression.*

---

### Achievements (`achievements`) · Supporting

**What was observed:**
A dedicated Achievement Quests section was observed within the Quests area. Named achievements: Join a League, Team Building, Go Head to Head, Go VS Attack, Matchmaster, Striver, Training Master. Presented as permanent, named markers, distinct from daily or seasonal quests. No reset behavior was described.

Club Challenge section contains named permanent milestones: "First Try: complete a La Liga, Premier League, Conmebol Libertadores, or UCL match"; "First Win: win a La Liga match"; "Master Winner: win 10 leagues."

**How it is presented:**
Nested within the Quests section under the Achievement Quests tab. Not prominently surfaced outside the Quests area.

**Screenshot suggestions:**

`[Achievement Quests tab showing the named achievement list — Join a League, Team Building, Go Head to Head, Matchmaster, Striver, Training Master — with completion status]`
*Documents the named permanent achievement markers as distinct from daily quests.*

---

### XP Leveling (`xp-leveling`) · Supporting

**What was observed:**
An account-level system with XP accumulating through actions and crossing named thresholds that unlock content.

Session 1: "XP is used to increase your account level. Each level unlocks new content." Level 2 reached after first task claim — unlocked Level Up Pack (200 gems) and one new formation. Level 3 and Level 4 reached immediately after the first Head to Head match, with two additional formations unlocked. Leagues and Football Center also unlocked with 200 gems each at those levels.

Session 2: Level 5 unlocked after one Division Rivals activity completion. Session 3: Level 8 unlocked an additional lineup slot; Level 10 unlocked the transfer market and the Club Challenge. Session 5: User was at level 14. A preferred formation was noted as requiring level 20.

XP20 badge items were received as pack rewards from Kickoff Missions. Level-up events are displayed as interstitial screens during pack-opening sequences, each requiring the same tap-to-open animation.

**How it is presented:**
Level-up events appear as interstitials during pack-opening flows. Formations are unlocked as functional content rewards at level thresholds. Specific functional unlocks tied to specific levels (Market at 10; additional lineup slot at 8).

**Screenshot suggestions:**

`[Level-up interstitial showing "Level 8 reached — lineup slot added" alongside the Level Up Pack animation]`
*Documents a level threshold that unlocks a functional feature rather than just a resource reward.*

---

### Set Collection (`set-collection`) · Supporting

**What was observed:**
The Team Badge system organizes players into named sets with defined membership and completion rewards.

Three badge categories observed: UEFA Dream Chasers (71 players, 2 groups, expires in 78 days), Capped Legends (100 players, 4 groups), Team of the Year 2026 (145 players, 3 groups).

Named groups within UEFA Dream Chasers: "Heroes in Britain" requires Eden Hazard, Jamie Carragher, Freddie Ljungberg — completion reward: 3,000 gems. "Right Flank Attack" requires Gareth Bale, Michel Salgado, and a third player — completion reward: 20 million FC coins. Players within groups also provide attribute boosts when placed in the lineup. Untradable players activate automatically; tradable players require manual activation.

A History tab shows previous seasons' badges, allowing activation of players from prior seasons.

**How it is presented:**
Team Badge is accessed from the Quests or Badge tab on the home screen. Session 2 included a Jude-guided tour of the badge system. The exchange button inside the badge screen leads to Player Exchange, which is one source for acquiring missing set members.

**What is notable:**
Set completion rewards (gems or coins) are separate from the lineup boost rewards — having any set member in the lineup provides continuous attribute boosts regardless of whether the set is complete.

**Screenshot suggestions:**

`[UEFA Dream Chasers "Heroes in Britain" group showing Hazard, Carragher, and Ljungberg card slots, the 3,000 gem completion reward, and 0/3 acquired status]`
*Documents named set membership, visual card slots, and the specific completion reward.*

---

### Ads (`ads`) · Supporting

**What was observed:**
Rewarded video ads observed in two contexts, plus an offerwall.

**Daily Tasks:** "Watch one ad" is one of the four daily tasks each day. Rewards: 60 gems, 225 Star Pass credits, 1 blue egg piece, 1 red egg piece, 2 yellow egg pieces (Session 2). The task card shows a "Watch" button rather than the standard "Go" button.

**Gems store:** A "Gems Ads Pack" with a daily limit of 3 — watching an ad earns 100 gems, up to three times per day, expiring in 16 hours.

**Offerwall:** A "Gems — Complete Offer" option in the gems store opened a third-party offerwall embedded within the game. Listed third-party games (Gardenscapes named as an example) and web games (a "One Minute Quiz for 61" noted with eligibility conditions). Described as the game giving "a small amount of gems to go and play outside of the game somewhere else." Clicking an offer redirected to the external internet.

**How it is presented:**
Rewarded video surfaced as a daily task (one per day), a store item (three per day), and indirectly through the offerwall. No non-optional or interstitial ad unit was described in any session.

**Screenshot suggestions:**

`[Daily Task card for "Watch one ad" showing the Watch button, reward breakdown (60 gems, 225 Star Pass credits, egg pieces), and daily limit of 1]`
*Documents the rewarded ad mechanic within the daily task system and its specific reward contents.*

---

## Mechanics not observed

**Streak:** No streak counter with a visible day count and described reset or protection mechanic appeared in any session. The "Monthly Streak Pack" in the store is a purchase ladder by name only — it does not track consecutive logins or reset on a missed day.

**Piggy Bank:** No accumulate-while-playing, purchase-to-unlock currency mechanic was described across any of the seven sessions.

**Gifting:** No unilateral send mechanic was observed. The league system has collective rewards but no directed player-to-player item sending.

---

## How mechanics connect

**Daily return loop:** Daily Login Reward, Daily-Weekly Quests, and Ads form the minimum daily engagement loop. Opening the app claims the daily login reward, daily tasks direct the user toward an ad watch, and both produce Star Pass Credits and egg pieces as byproducts.

**Draft voucher economy:** Multiple quest systems — Kickoff Missions, Dream Chasers Celebration, Daily Tasks — issue draft vouchers as primary rewards. These vouchers feed directly into the Variable Reward system. Voucher types are fragmented by event (Kickoff Draft, Dream Chasers Draft, Festive Draft, Songkran Draft), so vouchers are only redeemable in the event that issued them, creating parallel reward tracks rather than a unified one.

**Star Pass as cross-mechanic reward destination:** Star Pass Credits accumulate as secondary outputs of Daily Tasks, Kickoff Missions, and match play. The Star Pass track gates cosmetic content (stadiums, weather, skill moves), making the Season Pass the end destination for credits generated by the quest systems.

**League quests as engagement amplifiers:** Several League season quests — Ad Veteran, Top Buyer, Head to Head Prodigy — directly incentivize Ads, the store (Variable Reward), and competitive match play (Leaderboards). Completing these contributes to the collective Clans-Guilds reward track, making individual daily actions visible as shared group progress.

**Event layers on top of base systems:** Limited-Time Events add time pressure to Variable Reward pulls (event-specific draft pools expire with the event) and extend the Daily-Weekly Quest system with parallel mission tracks that share the same daily actions.

---

## Session rhythm

Sessions 1–3 covered approximately the first 2–3 days of gameplay. Sessions 4–5 covered days 3–4. Sessions 6–7 were recorded on May 7 and May 15, representing a returning player reviewing specific features.

**Session length:** Session 1 was notably long (60+ minutes as described in the transcript). Sessions 2–3 were extended. Sessions 4–5 were shorter, ending at external stopping points. Sessions 6–7 appear to be 15–30 minutes focused on specific features.

**Return pressure:** Daily login reward resets on a 16-hour cycle. Daily tasks expire at midnight (described as "16 hours" from mid-afternoon recordings). The UEFA Dream Chasers duel window had 13 hours remaining to predict match outcomes. The trivia quiz refreshes every 16 hours. The Songkran daily egg refreshes every 14 hours. Daily resource packs in the store reset every 16 hours.

**Session-end trigger:** Manager Mode is the only mechanic observed that runs unattended — the user placed their phone aside while an automated match continued. Sessions 4 and 5 ended at external real-world stopping points rather than in-game ones.

**Bug observed in Session 2:** On returning to the app, a wave of delayed task-completion notifications for actions from Session 1 triggered all at once. Described as "broken" — notifications for things completed the previous day, repeating multiple times.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Monthly Supply Card | $1.99 | 200 FC Points instant; 1,000 gems/day for 30 days |
| Elite Monthly Supply Card | $4.99 | 500 FC Points instant; 1,500 gems + 30 rank up points/day for 30 days |
| Premium Star Pass Ticket | $9.99 | Access to premium Star Pass track (~60 steps) |
| Premium Star Pass Ticket Bundle | $19.99 | Star Pass + 6,000 Star Pass Credits |
| Songkran Splash Mini Pass | $9.99 | Event-specific second battle pass |
| Songkran Splash Mini Pass Bundle | $19.99 | Event pass + additional credits |
| UEFA Starter Pack | $0.39 | Mascherano, 100,000 FC coins, 1 FC Draft voucher, 10 base players |
| Dream Chasers Welcome Pack | $0.99 | Unknown bonus player (110–115 range), 1 FC Draft voucher; possible 1 of 20 untradeable bonus players |
| Dream Chasers Welcome Pack Pro | $4.99 | Requires Welcome Pack purchased first |
| Dream Chasers Welcome Pack Ultra | $9.99 | Requires Pro purchased first; unlocks free Welcome Pack Gift |
| Monthly Streak Pack 1 | $0.39 | 1 FC Draft voucher, 50 FC Points, 1,000 gems, 100 transfer points |
| Monthly Streak Pack 2 | $0.99 | Requires Pack 1 purchased |
| Monthly Streak Pack 3 | $1.99 | Requires Pack 2 purchased |
| Monthly Streak Pack 4 | $3.99 | Requires Pack 3 purchased |
| Monthly Streak Pack 5 | $5.99 | Requires Pack 4 purchased |
| Monthly Streak Pack 6 | $9.99 | Requires Pack 5 purchased |
| Monthly Streak Pack 7 | $14.99 | Requires Pack 6 purchased |
| Monthly Streak Pack 8 | $19.99 | Requires Pack 7 purchased |
| Monthly Streak Pack 9 | $24.99 | Requires Pack 8 purchased |
| Monthly Streak Pack 10 | $29.99 | 15 draft vouchers, 1,800 FC Points, 6,000 gems, 500 rank up points; requires Pack 9 purchased |
| Easter Egg Hunt offer | 99 FC Points | 100,000 coins, 2 base players (65–74 overall), possible untradeable 117-overall players |
| 80 FC Points (2x Top Up / first purchase) | $0.39 | 80 FC Points (40 base + 40 bonus) |
| 200 FC Points (2x Top Up / first purchase) | $0.99 | 200 FC Points |
| 1,000 FC Points (2x Top Up / first purchase) | $4.99 | 1,000 FC Points |
| 2,000 FC Points (2x Top Up / first purchase) | $9.99 | 2,000 FC Points |
| 4,000 FC Points (2x Top Up / first purchase) | $19.99 | 4,000 FC Points |
| 10,000 FC Points (2x Top Up / first purchase) | $49.99 | 10,000 FC Points |
| 20,000 FC Points (2x Top Up / first purchase) | $99.99 | 20,000 FC Points |
| Create a League | 3,000 gems | Creates a new league |
| Skill Moves (each) | 1,000 gems | One skill move animation assignable to a button |
| Extra Lineup | 250 gems or 100 FC Points | One additional lineup slot |

---

## What stood out

1. **The entire first session keeps the user in a guided corridor with no free navigation.** Jude Bellingham guides every screen transition, and the user cannot tap anything except the highlighted element at each step. During this corridor the user completed a full match, won the Premier League trophy, chose a star player, opened multiple packs, visited the Draft, the Locker Room, Team Management, and the Badge system — in that order, with no ability to revisit or deviate. One specific bug: the claim button for the first Kickoff Mission was grayed out while Jude was on screen, then turned green when Jude was dismissed by tapping the screen — the button state changed without any user action.

2. **Five reward systems run simultaneously and partially share missions without syncing completion state.** In Session 2, "Train a player once" was recorded as complete by Dream Chasers Celebration but not by Kickoff Missions. The two systems share missions but do not share completion state. Session 3 observed that future-day Dream Chasers rewards for Days 3 and 4 could be claimed before those days arrived.

3. **The store contains three parallel FC Points pricing tiers for the same product with no labeling.** The 2x Top Up section offers first-purchase-only quantities (200 FC Points for $0.99). The Daily FP Deals offer time-limited variants (150 FC Points for the same $0.99 at the same time). The regular FC Points section offers a third set of quantities. Session 2 described this as "not being communicated in any way."

4. **The Monthly Streak Pack is a forced sequential purchase ladder totaling $110.63 to complete.** To purchase Pack 10, all nine preceding packs must be bought in order. Prices escalate from $0.39 to $29.99. The name implies a streak mechanic; no streak behavior exists — it is a pure purchase sequence.

---

## Analysis notes

All sessions were conducted on a returning-user account — the app displayed "welcome back" on Guest sign-in in Session 1. Some onboarding content may differ from a true first-install experience. Sessions 1–5 covered approximately days 1–4 of active play (April 6–8, 2026). Sessions 6–7 were recorded on May 7 and May 15, roughly one month later. Session 6 focused specifically on monetization surfaces and daily login structure. Session 7 focused on the league system. Sessions 4 and 5 have thinner content coverage — Session 4 was primarily a live Champions League duel match played through penalty shootout; Session 5 spent significant time attempting to locate the Easter Egg Box across the game's navigation. The Star Pass season length was never stated in-game across any session. The FCMTV guides section in Extra Time was still showing FC Mobile 24 guides during an FC Mobile 26 session.

---

## Category context

No direct comparisons to other sports games were made in any transcript.

---

## Unrecognized mechanics

### `purchase-ladder`
**What was observed:** The Monthly Streak Pack system requires purchasing Pack 1 before Pack 2 becomes available, then each subsequent pack requires the previous purchase, continuing through 10 tiers. Prices run $0.39 / $0.99 / $1.99 / $3.99 / $5.99 / $9.99 / $14.99 / $19.99 / $24.99 / $29.99. Total to unlock all ten: $110.63.
**Why it does not map to an existing mechanic:** Not a `season-pass` (no free tier, no advancement through in-app actions, no reset cadence). Not a `monthly-card` (no daily delivery). It is a purchase-unlock chain where each purchase unlocks the right to make the next purchase at a higher price.
**Worth adding to library:** Yes

### `sequential-narrative-unlock`
**What was observed:** Icon Chronicles gates narrative chapters sequentially. Chapter 2 is inaccessible without completing Chapter 1, and so on through five chapters covering six eras of Zlatan Ibrahimovic's career. Within each chapter, missions must be completed in order. No chapter can be skipped. Rewards (player card, emote) are attached to chapter completion.
**Why it does not map to an existing mechanic:** Not `xp-leveling` (no XP accumulation or level threshold). Not `limited-time-events` (268-day expiry and narrative structure are the primary design elements, not a deadline). It is a narrative-gated progression mechanic where story chapters sequentially unlock each other, with missions embedded in each chapter.
**Worth adding to library:** Yes

### `hard-currency` (FC Points)
**What was observed:** FC Points are purchased directly with real money (200 FC Points for $0.99 in the 2x Top Up section) and spent directly on store items — draft vouchers, rank up points, pack bundles, extra lineup slots — without an intermediate conversion step.
**Why it does not map to an existing mechanic:** Not `credits-tokens` — there is no conversion step. FC Points are purchased and spent directly.
**Worth adding to library:** Hard currency is flagged in the guide as a known library gap.

### `soft-currency` (Gems, FC Coins, League Tokens, UEFA Dream Chasers Tokens, Universal Tokens, Extra Time Tokens, Easter Egg Tickets, Nation Story Shards, Star Pass Credits, Silver)
**What was observed:** Ten or more named in-game currencies were observed across sessions, each earned through specific activities and spent on specific items. Gems are earned from level-up packs, daily tasks, ad watching, and packs, spent on drafts and store items. FC Coins are earned from matches and packs, spent in the transfer market and exchanges. League Tokens are earned from league quests and tournaments, spent in the league store (McManaman: 40,000 tokens). UEFA Dream Chasers Tokens are earned from Champions League skill games and matches, spent on dream box refreshes. Universal Tokens are earned from Icon Chronicles and Division Rivals. Extra Time Tokens are earned via item exchange and spent in Extra Time event store. Easter Egg Tickets are crafted from egg pieces and used in the Easter Box. Nation Story Shards are earned from nation story events and spent on nation story player purchases. Star Pass Credits accumulate from Division Rivals and live events and advance the Star Pass track. Silver is earned from "third party payment store or in-game purchase" and spent in a dedicated Silver store section.
**Why it does not map to an existing mechanic:** Multiple distinct soft currencies with separate earn and spend surfaces. Not `hard-currency`. Not `credits-tokens` (no real-money conversion layer for any of these).
**Worth adding to library:** Soft currency is flagged in the guide as a known library gap. The degree of currency fragmentation across ten named currencies may itself be worth a separate note beyond a single soft-currency entry.

### `cosmetics-progression-lock`
**What was observed:** Stadium selection (weather variants: sun, cloud, night, wind; event stadiums: Winter Wonders, Neon Aqua vs Inferno, Ragnarok), skill moves (10 visible, 1,000 gems each), and player appearance customization are available in the Locker Room but locked behind Star Pass progress. Specific wording: "unlock this by progressing in the Star Pass." Weather options could be previewed but not applied. All seven non-default stadiums were locked.
**Why it does not map to an existing mechanic:** The `cosmetics` mechanic covers purely visual items available for acquisition. This is a system where cosmetic access is specifically gated behind battle pass progression — the items exist in the UI but cannot be used without advancing through the Star Pass. It combines `season-pass` (gating mechanism) with `cosmetics` (item type) in a way that makes the cosmetics themselves conditional on pass progression rather than direct purchase.
**Worth adding to library:** Possibly — the distinction between cosmetics purchasable outright and cosmetics gated behind progression may be worth naming.
