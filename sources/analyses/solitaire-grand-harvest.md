# Solitaire Grand Harvest

**ID:** solitaire-grand-harvest
**Category:** Casual / Card Game
**Type:** Game
**Platform analyzed:** iOS
**Analysis date:** 03 Apr 2026
**Last updated:** 15 May 2026
**Session state:** First install — session ran from level 1 to approximately level 60

---

## Overview

Solitaire Grand Harvest is a tableau solitaire card game wrapped in a farming theme. Players complete solitaire levels to earn credits, which fund additional levels and power-ups. A second currency (gems) is earned through levels and used to rebuild and decorate a farm. On top of the solitaire core sit a large number of simultaneous side events, mini-games, and collection systems that stack progressively as the player advances through levels.

---

## First impression

The first screen is a privacy consent notice, followed immediately by an Apple tracking permission dialog. A farmhouse scene opens with a dog character named Sam greeting the player: "Howdy! I'm Sam, your first farm friend. Ready to play solitaire? Let's grow." A returning-user login balloon appears in the top-left corner of this first screen. The first tutorial level begins immediately after, with 10,000 coins already visible in the UI. After completing level 1, the game introduces the cost structure: each subsequent level costs 1,000 credits to play. The win multiplier screen appears before level 2, explaining that multipliers unlock at level 25 and power-ups at levels 21, 30, and 41.

---

## Core activity

The core loop is: pay credits to play a solitaire level, clear the tableau by chaining cards one higher or lower than the current card, earn credits and stars on completion, then repeat. A second loop runs in parallel: collect gems earned during levels and spend them on farm reconstruction tasks. The farm meta-loop introduces building and decorating objectives that require sustained solitaire play to fund. As the session progressed, a large number of additional mini-game systems layered on top of this — races, puzzles, a pet, collections, emblems — each drawing on the same solitaire-level-play trigger.

---

## Mechanics observed

### Daily Login Reward (`daily-login-reward`) · Core

**What was observed:**
After completing level 3, a popup appeared from Sam saying "Daily goodies! A visit a day sends bigger prizes your way." A 4-week calendar was shown. Tapping collected the Day 1 reward: 2,500 coins and 6 undos. The transcript describes this as appearing after completing a level on first play, making it a return-to-app trigger rather than a task-completion reward.

On returning for a second session the same day (after the phone had been turned off and back on), the game showed Day 2 of the daily login reward: 5,000 credits and 3 free rounds. This was described as "daily goodies we got a daily prize day two."

A separate daily delivery bonus is tied to the farm meta: "Deliver farm goods to collect your daily bonus." This bonus scales with farm expansion — "win a bigger daily farm bonus" as the farm grows. The first delivery bonus seen was 1,000 credits.

**How it is presented:**
The daily goodies popup appears proactively after a level completes. The 4-week calendar structure shows upcoming rewards. The farm delivery bonus is a separate daily credit grant tied to farm progress rather than the login calendar.

**What is notable:**
Two distinct daily reward systems operate simultaneously — the login calendar and the farm delivery bonus. The farm delivery bonus scales upward with farm expansion, creating a second incentive structure for engaging with the farm meta.

**Screenshot suggestions:**

`[The daily goodies popup with Sam showing the 4-week reward calendar and the Day 1 reward (2,500 coins, 6 undos) ready to collect]`
*Documents the calendar structure, the Sam framing, and the specific reward contents.*

`[The farm delivery bonus popup explaining "deliver farm goods to collect your daily bonus" and "expand the harvest valley to increase your daily delivery bonus"]`
*Documents the second daily reward system and how it ties to farm meta progression.*

---

### Variable Reward (`variable-reward`) · Core

**What was observed:**
The Lucky Wheel is the primary variable reward surface. It was first introduced after level 18. The first spin is free. The wheel shows possible outcomes: 2,000 / 3,000 / 5,000 / 12,000 credits, 2 wild cards, 2 double credits, 24-hour rocket, 3 free rounds. The session won "double credits" on the first spin. Immediately after the free spin, a second spin was offered for $2.99, with higher-value segments: 12,000 / 17,000 / 23,000 / 55,000 credits, 4x plus-five card, 4x wild card, 24-hour rocket, 2x unknown item, 4x free round, 2x wild card.

Card packs introduced as rewards from level ~36 onward are a second variable reward surface. Packs are tied to the win multiplier — x1 multiplier yields a green pack, x2 yields blue, x4 yields purple. Pack contents were described as revealing cards for the grand album collection: "leaf legend, lily fountain, celestial sigils, floral lantern, spider key." Crown values on cards vary (1-crown, 2-crown, 5-crown cards mentioned). A "legendary card" pull mid-session delivered an extra 2,000 credits. A joker pack was mentioned as a store purchase add-on and as a potential spin wheel reward.

The Crop Master crate is a third variable reward: after reaching milestone levels (described as after level 46), the user picks from a grid of items (20 apples/items shown) to reveal prizes — the session picked four and received 6,000 / 6,000 / 3 free rounds / 6,000 credits.

**How it is presented:**
Lucky Wheel appears as a popup mid-session with a clear "spin" call to action. Card packs are awarded at level completion and opened with an unwrapping animation. The Crop Master crate appears after crop completion milestones as a pick-prize grid. All three surfaces are introduced progressively at different level thresholds.

**What is notable:**
The Lucky Wheel second-spin offer is presented immediately after the first free spin resolves, while the result of the free spin is still on screen — a direct upsell moment. Card packs are tiered by the bet multiplier, linking variable reward quality to spending level. A "legendary card" is distinguished from regular cards with an extra bonus embedded inside it ("holds an extra gift, enjoy 2,000 credits").

**Screenshot suggestions:**

`[Lucky Wheel showing all segments with the free-spin result visible, and the $2.99 paid second-spin offer appearing immediately after]`
*Documents the free-to-paid spin upsell and the segment distribution of both wheels.*

`[Card pack unwrap animation showing revealed cards going into the grand album collection with crown values visible]`
*Documents the card pack variable reward and its connection to the collection system.*

---

### Limited-Time Events (`limited-time-events`) · Core

**What was observed:**
Multiple simultaneous limited-time events were observed, each with its own countdown and reward structure.

**Buy-One-Get-One / Starter Kit (30-minute offers):** Two timed purchase offers appeared repeatedly throughout the session, each with a 30-minute countdown and "max one purchase" label. The offers cycled through different formulations:
- One Plus One (Buy One Get One Free): $3.99 for 22,000 credits, 1 wild card, 2 free rounds — and a duplicate set free.
- Starter Kit: $3.49 for 44,000 credits, 2x five-cards, 6 hours of rocket. Labeled "300% more."
- One Plus Three (Buy One Get Three Free): $3.49 for 50,000 credits, 2x unknown cards, 2 undos + free: 1 free round, 1 windmill, 1 five-card stack.
- One Plus Five (Buy One Get Five Free): $3.99 for 50,000 credits, 3 free rounds, 4 hours of rocket, 1 wild card, 15-minute infinite wild card, 1 free spin, 1 free slicer, 300 gems, 15 minutes of 10% gems more.
- Triple Farm Fun: $1.49 / $1.99 / $2.99 for 11k / 15k+3hr rocket / 20k+6hr rocket+2x unknown cards — or all three bundles for $3.99 (labeled "40% off").
- Oscar's Favorite: $1.49 / $1.99 / $2.99 / $3.49 for escalating credits and rocket hours.

These offers appeared in pairs, cycling every 30 minutes. The session observed each pair up to three times before they disappeared and were replaced by Peggy (the piggy bank). When credits ran low during a level, all three store options were shown sequentially: "in the middle of the game there is a prompt one plus three, triple farm fun, and then the store one after another."

**Cheese Rally (race event):** A 5-level race against named AI characters (Smee, Leo, Leah, Max, Olina). Three stages. Finishing first wins prizes: Stage 1 reward is a silver pack plus free round; Stage 2 reward is a silver pack; Stage 3 reward is 3,000 credits plus 1 emblem. Race is run in 10-minute windows. The multiplier choice affects race rewards: x1 yields a green pack, 1 cookie, 1 puzzle piece per win; x2 yields blue pack, 2 cookies, 2 puzzles; x4 yields purple pack, 4 cookies, 4 puzzles.

**My Trail (mission trail):** Introduced at level 25 with an 11-hour 47-minute countdown on daily missions. Trail runs for 3 days 11 hours total. Three missions visible: Play Diamonds (0/25), Collect Stars (0/8), Win Levels (0/8). Each mission grants energy. Energy unlocks rewards on a trail up to level 10: coins, undos, credits (2,000 at early milestones, 11,000 credits at final reward). A "mystery door" sits beyond the final reward. Missions refresh on the 11-hour cycle.

**Grand Puzzle (3-day event):** Two puzzle images to complete by collecting puzzle pieces earned through play. Six reward milestones per puzzle: 540 credits + 1 undo / 720 credits + 3 puzzle pieces / 1,500 credits + 5 minutes of endless windmill / 2,000 credits + 4 puzzle pieces / 2,500 credits + 6 puzzle pieces + 1 silver pack / 5,500 credits + 10 minutes of infinite windmill + 3 badges + 1 jumbo pack. Completing the second puzzle triggered an offer to buy 10 puzzle pieces for $0.99. A second round of puzzles began after completion of the first, described as "more difficult, requires more puzzles."

**Bloomlight Garden Season (seasonal event):** Introduced with Claire the Fairy appearing on the farm. 12 chapters to complete. Chapter 1 gate: Garden Gate (25 gems) + Winged Door + Floral Fence + Beetle Paths. Grand prize: 300,000 credits. Partial prizes at Chapter 1: 3,000 credits + 1 free round. A balloon appeared in the garden giving a 10-minute task window: "complete one task in the next ten minutes to win this prize." The event showed 38 days remaining on the task manager.

**Grand Emblems (2 days 10 hours remaining):** A cross-event emblem collection. Five emblem types visible: puzzle, race flag, golden star, eggs, cup. Emblems are found across different events. Completing the Grand Emblems case rewards 45,000 credits, 220 gems, 1 joker pack, 3 free rounds, 1 jumbo golden pack. Session accumulated 4 emblems without tracking how.

**Pet Event — Petalina (10-day event):** A chick hatched from an egg. Named by the user (named "Petalina"). Five growth stages. Fed with cookies (earned from solitaire levels and race events). Cookies regenerate every 3 hours. At Stage 1 completion: a birthday spin yielding a pack. Stage 2 reached in session. Final prize: a pet avatar. News item: "Easter Goose Avatar — raise your Petalina and hatch your way to exciting rewards."

**How it is presented:**
Events are surfaced through a left-side icon strip (icons for Cheese Rally, Grand Puzzle, Grand Emblems, pet), a news banner in the top-right (cycling between active events), and proactive popups on level completion. Timed purchase offers appear as overlapping popups after levels and when the credit balance runs low.

**What is notable:**
At the peak of the session, five simultaneous limited-time events were running (Cheese Rally, My Trail, Grand Puzzle, Bloomlight Garden Season, Grand Emblems) alongside the pet and the 30-minute purchase offers. The 30-minute offers were re-shown up to three times per session before expiring and being replaced by Peggy. When credits ran critically low during a level, all three purchase pathways (buy-one-get-one, triple farm fun, store) opened sequentially without any user action.

**Screenshot suggestions:**

`[The left-side event icon strip showing simultaneous Cheese Rally, Grand Puzzle, Grand Emblems, and pet icons alongside the main farm view]`
*Documents the density of simultaneous limited-time events visible at one time.*

`[The 30-minute timed offer popup for One Plus Five showing countdown, labeled rewards, and the "max one purchase" note]`
*Documents the timed purchase offer format and the escalating offer structure.*

`[Mid-level popup sequence showing all three purchase options (One Plus Three, Triple Farm Fun, store) opening in sequence as the credit balance ran low]`
*Documents the triggered monetization moment when credits were critically low during active play.*

---

### Piggy Bank (`piggy-bank`) · Core

**What was observed:**
Peggy the pig was introduced by name after level 18. The game screen dimmed and a paw pointed at a pig behind the barn. The popup said: "Meet Peggy. Win or lose any solitaire level, Peggy will add bonus credits to your savings. Collect your savings for a great price."

Peggy fills passively regardless of win or loss. She was visible in the top-right corner after introduction, jumping across the sky after level completions. The balance was visible and checked multiple times:
- After introduction: 4,050 credits deposited on Peggy's behalf as a starter ("your first credit deposit is on us").
- After several levels: 7,000 credits.
- After further play: 21,000 credits.
- Maxed out: 35,000 credits. At max: "Peggy just got maxed out. You won't be able to collect any more credits until you claim your savings."

Price to unlock Peggy: $3.99. Timer shown: 2 days to claim before time runs out. The "Peggy's Deal" news item offered "extra benefits with every Peggy purchase" with 2 days 10 hours remaining.

When the credit balance ran critically low during a level, the 30-minute timed offers disappeared and Peggy appeared in their place in the top-right corner — the timing suggested Peggy was being surfaced specifically as the player's balance was depleted.

**How it is presented:**
Introduced via a scripted reveal moment (screen dims, paw points at pig). Peggy is persistently visible in the top-right corner area after introduction. The balance is visible without purchasing. Peggy animates (grows fatter) as the balance fills, with a visible animation when maxing out. A separate "Peggy Extra" button appeared in the top-right area at some point, showing Peggy's current winnings.

**What is notable:**
The starter deposit ("your first credit deposit is on us") seeds Peggy's balance immediately after introduction, ensuring the player sees a non-zero accumulating value from the first moment. The game surfaced Peggy specifically when credits ran low, replacing the 30-minute timed purchase offers — suggesting it is used as a fallback monetization moment when the standard offers have either expired or failed to convert. The max cap of 35,000 credits was reached during normal play, and the 2-day collection window creates urgency.

**Screenshot suggestions:**

`[Peggy visible in the top-right corner, fat and maxed out, with the balance showing 35,000 credits and the "Peggy just got maxed out" message]`
*Documents the visual max-state, the accumulated balance, and the purchase prompt.*

`[The Peggy introduction screen with "Win or lose any solitaire level, Peggy will add bonus credits to your savings. Collect your savings for a great price" and the $3.99 price]`
*Documents the introduction framing and the passive accumulation pitch.*

---

### Set Collection (`set-collection`) · Supporting

**What was observed:**
The Grand Spring Album is a collection of 12 named sets: Mia's Meadow, Sam's Sprouts, Oscar's Orchard, Peggy's Petals, Karen's Course, Sunny's Service, Hobbie's Pond, Spider Lair, The Undergarden, Firefly Field, Spring Life, and one unnamed. Each set contains 12 cards. Cards are collected from card packs earned during solitaire levels (tied to the win multiplier: green pack at x1, blue at x2, purple at x4). Individual set completion rewards range from 8,000 to 40,000 credits. Completing all 12 sets wins the grand prize: 610,000 credits plus a profile badge (a cat that purrs when tapped).

Duplicate cards earn crowns. Crowns are spent in the Crown Center for prizes: 150 crowns for 5,000 credits, 250 crowns for boosters, 500 crowns for a golden card pack. A "Welcome Gift" of 5,000 credits from the cat character Mia was delivered when the collection was first accessed.

The collection was described as unlocking around level 36 (the "coming soon" label that appeared earlier became active). Card packs are integrated into the store purchases at higher credit tiers — purple packs included with 110k+ credit purchases.

**How it is presented:**
Accessed via a Collections button. Introduced with a popup: "Win solitaire levels and collect packs. Complete your album with the cards you gain. Claim amazing rewards." The album view shows all 12 sets as pages, each with 12 card slots. Individual card details show card name and artwork. The Crown Center is a sub-screen of Collections.

**What is notable:**
The collection completion reward (610,000 credits) represents a major long-term incentive. The multiplier-to-pack-quality link means playing at higher stakes directly improves the rate of collection progress. Duplicate cards being converted to a spendable currency (crowns) eliminates waste from the variable reward system and redirects it to a secondary spend surface.

**Screenshot suggestions:**

`[Grand Spring Album screen showing all 12 named set thumbnails, the 610,000 credit grand prize, and the cat badge]`
*Documents the named sets, the set structure, and the grand prize scale.*

`[Crown Center showing current crown balance, and the three reward tiers: 150 crowns for 5k credits, 250 for boosters, 500 for golden pack]`
*Documents how duplicate cards feed into the crown economy.*

---

### Season Pass (`season-pass`) · Supporting

**What was observed:**
The Bloomlight Garden Season is a time-limited event with 12 chapters, a grand prize of 300,000 credits, and chapter-by-chapter rewards. The season is accessed through the farm meta: Claire the Fairy introduces it as a seasonal park. The structure requires completing farm tasks in each chapter using gems. Each chapter completion yields a reward (Chapter 1: 3,000 credits + 1 free round). The event has 38 days remaining at the task manager, with a 10-minute balloon task visible in the garden.

The season mechanic is partially obscured — it is presented primarily as farm building and decoration rather than a pass with explicit free/paid tiers. No paid tier was explicitly described. A free-play track advancing through in-app actions (farm tasks funded by gems earned through solitaire levels) was the only described structure.

Given the absence of a described paid tier, this is logged at Supporting development with a note that a paid upgrade option may exist but was not encountered in the session.

**How it is presented:**
Introduced via a scripted Claire the Fairy sequence. The task manager shows chapter tasks with gem costs. A progress bar and chapter rewards are visible. The grand prize is shown at the start.

**Screenshot suggestions:**

`[Bloomlight Garden Season chapter view showing Chapter 1 tasks (Garden Gate, Winged Door, Floral Fence, Beetle Paths) with gem costs and the 300,000-credit grand prize banner]`
*Documents the seasonal chapter structure and gem cost mechanic.*

---

### XP Leveling (`xp-leveling`) · Supporting

**What was observed:**
The farm has its own XP system separate from the solitaire level counter. After clearing leaves blocking a path (costing 25 gems), a screen appeared: "Earn XP by completing tasks. Level up to unlock new areas." The XP bar was shown at 0 and 30% of the next level. At farm Level 1, a reward was given and a tool shed unlocked. At farm Level 2 (later in session), the tool shed was upgraded. The farm XP accumulates through completing farm tasks (gem expenditures), not through solitaire level completion.

The solitaire level counter also functions as an unlock threshold system: Social Hub at level 15, My Trail at level 25, Collections at level 36, Join a Team at level 80, and various profile stats at levels 32, 36, and 80.

**How it is presented:**
Farm XP is shown as a progress bar during the farm sequence. Solitaire level thresholds appear as announcements ("reach level 36 to unlock the grand album," "reach level 25 to unlock my trail," "reach level 15 to unlock social hub") from Sam on the main field view.

**What is notable:**
Two parallel leveling systems — farm XP (earned through gem expenditure on tasks) and solitaire level count (earned through completing card games) — both gate content. The solitaire level is the primary progression marker; farm XP is a secondary meta-progression within the farm.

**Screenshot suggestions:**

`[Farm XP bar at 30% with "earn XP by completing tasks, level up to unlock new areas" message visible]`
*Documents the farm XP system as distinct from the solitaire level counter.*

---

### Achievements (`achievements`) · Shallow

**What was observed:**
Profile stats unlock at specific solitaire levels: "first try wins," "longest card streak," "longest win streak" are listed on the profile page. Additional stats unlock at levels 32, 36, and 80. These are named, permanent performance metrics shown on the player's profile.

The player avatar choices (mouse, dog, cat) are customizable from the profile screen. Profile includes "level 2, crop 1" as a persistent display.

No badges or named achievement milestones with described rewards were observed beyond the stats display. The collection grand prize includes a profile badge (the cat).

**How it is presented:**
Accessed from a profile avatar tap. Stats shown with placeholder values until the required solitaire level is reached. No dedicated achievement screen was described.

**What is notable:**
Achievement stats are thinly described and most are locked behind levels not reached in this session (32, 36, 80). The evidence is sufficient to confirm the mechanic exists but limited in scope.

**Screenshot suggestions:**

`[Player profile showing level, crop, first-try wins, longest card streak, longest win streak, and the locked stats with level requirements]`
*Documents the permanent performance stats as the primary achievement mechanic in this session.*

---

## Mechanics not observed

**Streak:** No consecutive-day login counter with a visible streak number and reset mechanic was described. The daily goodies calendar is not a streak — it advances on a fixed calendar regardless of consecutive visits.

**Energy-Lives:** No named cap on the number of solitaire attempts per time window was described. The credit cost per level (1,000 credits at x1, 3,000 at x2, 6,000 at x4) functions as a pay-per-play gate but operates through currency depletion rather than a regenerating attempt cap.

**Daily-Weekly Quests:** My Trail has mission objectives that refresh on a cycle, but its structure — a trail with a mystery door endpoint, energy accumulation, a fixed 3-day event duration, and an opt-in discovery moment — fits more cleanly with `limited-time-events` than with recurring auto-assigned daily quests.

**Clans-Guilds:** "Join a team" is described as unlocking at level 80. The session reached approximately level 60 and did not access the team feature. The team entry in the profile stats showed "Team Helps Mate: awesome / we're part of a team / team is not available" — the latter two contradicting each other, with no team features observed in practice.

**Leaderboards:** The Cheese Rally shows a race against named characters (Smee, Leo, Leah, Max, Olina), but it was not confirmed whether these are real players with visible ranked positions or AI-controlled opponents. No ranked list with a named performance metric and visible user standings was described.

**First-Purchase Bonus:** The $1.99 and $5.99 store options at the bottom of the credit store were described as unlabeled offers with no "starter" or "first purchase" framing.

---

## How mechanics connect

**Credits are the central resource everything feeds and depletes.** Solitaire levels cost credits to enter. Losing depletes credits faster (power-ups needed). Winning slowly restores them. The daily login reward, daily farm delivery bonus, Peggy, Lucky Wheel, and all timed purchase offers are all responses to credit depletion — each positioned at a different point in the session or player lifecycle.

**Multipliers connect stakes to reward quality across multiple systems.** Increasing the win multiplier raises the credit cost per level, the gem yield, the card pack tier (green → blue → purple), and the Cheese Rally per-level prizes. Higher stakes simultaneously improve all downstream reward systems, making the multiplier choice a cross-mechanic leverage point.

**The farm meta and the solitaire game share currency but not directly.** Gems (farm currency) and credits (solitaire currency) are earned together through solitaire play — higher multipliers yield more gems. Gems are spent only on farm tasks, not on solitaire power-ups. This creates a separation where farm progression requires sustained solitaire engagement but is not in direct competition with solitaire spending.

**Peggy and timed offers alternate as monetization surfaces.** The 30-minute purchase offers run for up to three cycles, then disappear when Peggy maxes out and takes their position in the UI. This suggests the two systems are deliberately sequenced — timed offers serve early-session monetization, Peggy serves the moment when sustained play has depleted credits and built Peggy's balance to a meaningful number.

**Set collection and variable reward are linked through multipliers.** The card pack tier (variable reward surface) is determined by the win multiplier, and card packs feed the grand spring album (set collection). Playing at higher multipliers accelerates both systems simultaneously.

---

## Session rhythm

**Session length:** The session covered approximately level 1 to level 60 in a single extended sitting with a brief break (phone turned off and on again). This is atypically long for a first-session analysis.

**Return pressure:** Daily goodies calendar (resets daily), farm delivery bonus (daily), pet cookies (every 3 hours), Peggy's 2-day collection window, 38-day season event, 3-day grand puzzle, 10-day pet event, 30-minute timed purchase offers (up to 3 cycles), My Trail mission refresh (every 11 hours 47 minutes).

**Session-end moments:** Credits ran to zero mid-level multiple times. Each depletion triggered: sequential popup offers (one plus three → triple farm fun → store), and when those had expired, Peggy appearing in the top-right corner. A "power up time — power up your game for a limited time for free, starting now" popup appeared late-session, described as "going to keep us in the game for another five minutes to use this power up that we have so we don't waste" — a free power-up deployed specifically at a potential session-exit moment.

**Level-milestone rewards:** Level 10 reward: 1,000 credits + 1 free round + 2 undos. Level 25 reward: 3,000 credits + 1 free round + 2 undos. Level 50 reward: described as occurring with new 30-minute offers appearing. Milestone gifts are delivered as popups immediately after the level completion screen.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Buy One Get One Free (30 min) | $3.99 | 22,000 credits, 1 wild card, 2 free rounds — duplicated free |
| Starter Kit (30 min) | $3.49 | 44,000 credits, 2x five-card, 6 hours rocket; labeled "300% more" |
| One Plus Three (30 min) | $3.49 | 50,000 credits, 2x unknown cards, 2 undos + 1 free round, 1 windmill, 1 five-card stack free |
| One Plus Five (30 min) | $3.99 | 50,000 credits, 3 free rounds, 4 hours rocket, 1 wild card, 15-min infinite wild card, 1 free spin, 1 free slicer, 300 gems, 15 min 10% gems more |
| Triple Farm Fun (30 min) | $1.49 / $1.99 / $2.99 / $3.99 (all three) | 11k / 15k+3hr rocket / 20k+6hr rocket+2x cards / all three bundled (labeled "40% off") |
| Oscar's Favorite (30 min) | $1.49 / $1.99 / $2.99 / $3.49 | 22k / 33k+3hr rocket+2 wild cards / 50k+6hr rocket+4 wild cards / one option |
| Lucky Wheel second spin | $2.99 | Spin with segments: 12k / 17k / 23k / 55k credits, 4x plus-five, 4x wild card, 24hr rocket, 4x free round, 2x wild card |
| Peggy (piggy bank) | $3.99 | Unlock accumulated savings (up to 35,000 credits at max) |
| 30,000 credits pack | $4.99 | 30,000 credits, 5 cards, 1 free round, 1 undo, 1 wild card |
| 55,000 credits pack | $7.99 | 55,000 credits, double the above cards |
| 110,000 credits pack ("most popular") | $14.99 | 110,000 credits, 5x cards, silver pack |
| 210,000 credits pack | varies | 7x cards |
| 290,000 credits pack ("best value") | $35.99 | 290,000 credits, 10x cards |
| 11,000 credits (small) | $1.99 | 11,000 credits |
| 36,000 credits (small) | $5.99 | 36,000 credits |
| 10 puzzle pieces | $0.99 | 10 puzzle pieces for the Grand Puzzle event |
| Peggy's Deal | $3.99 (referenced) | "Extra benefits with every Peggy purchase" — details not fully described |

Store credit tiers also include card packs bundled at higher price points (silver pack at $14.99, golden pack at $25.99, two golden at $49.99, three golden as the highest tier). Exact prices for the highest tiers were approximated from context.

---

## What stood out

1. **When credits ran low during a live level, three purchase offers opened sequentially without user action.** The One Plus Three, Triple Farm Fun, and store screen each appeared in sequence mid-game. The transcript described this as the game "showing me that I should spend money to be able to continue." This is the most direct triggered monetization moment observed — purchase prompts surfaced at the exact moment of credit depletion, inside an active level.

2. **Peggy's balance was seeded immediately at introduction ("your first credit deposit is on us").** The game pre-loaded 4,050 credits into Peggy before the player had done anything to earn them, ensuring the balance was non-zero and visibly growing from the first moment. By normal play in the session, it reached 35,000 credits and maxed out — at which point the 30-minute timed offers disappeared and Peggy took their position in the UI.

3. **The multiplier system links stakes to reward quality across every downstream system simultaneously.** Choosing a higher multiplier raises the credit entry cost, gem yield, card pack tier, and Cheese Rally prize tier at the same time. The transition between multiplier options is also accompanied by audio feedback: "when we go back to x1 the music is underwhelming — it goes down, it sounds as if something bad happened."

4. **Five simultaneous limited-time events were running at the peak of the session, plus a pet, a puzzle, and 30-minute rotating purchase offers.** The session reached a point where the left-side icon strip showed Cheese Rally, Grand Puzzle, Grand Emblems, and the pet simultaneously, with a seasonal event and My Trail also active, plus two rotating 30-minute purchase offers in the top-right corner. The transcript noted at this peak: "i have no idea how i got them but i did" (referring to 4 grand emblems accumulated without tracking how).

---

## Analysis notes

One session. First install to approximately level 60 in a single extended sitting. The session was long enough to encounter most major systems, but several features were not reached: the Social Hub (level 15 — partially accessed but only Facebook connect visible), team feature (level 80 — not reached), and full My Trail completion. The Rocket power-up was repeatedly mentioned in offers throughout the session but never explained or used — it appeared in both timed offers and Lucky Wheel prizes without the game explaining what it does. The "card trading" feature was mentioned as newly available via a balloon next to the collections section but was not found when the collections screen was opened.

---

## Category context

The session made one explicit comparison: "similar to Royal Match has this collection." Royal Match was named as a reference point for the grand album collection mechanic.

---

## Unrecognized mechanics

### `win-multiplier-bet`
**What was observed:** Before each level, the player chooses a win multiplier (x1, x2, x4 — with x2 available from level 25 and higher tiers later). Higher multipliers increase the credit cost to enter the level (1,000 credits at x1, 3,000 at x2, 6,000 at x4), increase gem yield, upgrade the card pack tier earned on winning (green → blue → purple), and increase Cheese Rally prizes. The multiplier choice also triggers audio feedback — selecting a lower multiplier after a higher one produced "underwhelming" downward music. Level difficulty stays the same regardless of multiplier. A green spinning arrow button labeled "max" vs. "one" was visible in the UI before levels.
**Why it does not map to an existing mechanic:** Not `energy-lives` (no regenerating cap). Not `credits-tokens` (credits are the currency, not a conversion layer). Not `variable-reward` (the outcome distribution is fixed; only the entry stake and reward scale change). It is a bet-sizing mechanic where the player chooses their stake before each level and all downstream rewards scale proportionally — a casino-style wager embedded in a casual card game.
**Worth adding to library:** Yes

### `soft-currency` (Credits, Gems)
**What was observed:** Two in-game currencies. Credits are the primary currency — earned from completing solitaire levels, daily login rewards, milestone gifts, Peggy, Lucky Wheel, and all event rewards — and spent to enter solitaire levels (1,000–6,000 depending on multiplier) and on power-ups mid-level (wild card: 1,000–3,500 credits; plus-five cards: 500–1,800 credits with variable pricing observed; free round pricing not stated). Gems are a secondary currency earned from solitaire levels (more at higher multipliers) and spent exclusively on farm reconstruction tasks (25 gems for clearing leaves, 30 gems for unlocking a gate, etc.). Gems cannot be purchased directly — only earned through play.
**Why it does not map to an existing mechanic:** Not `hard-currency` (neither is purchased with real money directly — store purchases buy credits bundles, which would qualify credits as hard currency by the library definition, see below). Not `credits-tokens` (no real-money-to-currency conversion abstraction; credits are purchased outright). Gems appear to be a pure soft currency with no purchase path.
**Worth adding to library:** The library flags both as known gaps.

### `hard-currency` (Credits, when purchased)
**What was observed:** Credits are purchased directly with real money from the store (e.g., 30,000 credits for $4.99) and spent directly on level entry and power-ups with no intermediate conversion step.
**Why it does not map to an existing mechanic:** Not `credits-tokens` — there is no conversion layer. Credits are purchased and spent directly.
**Worth adding to library:** Flagged as a known library gap.

### `passive-farm-meta`
**What was observed:** A separate farm-building progression runs alongside the solitaire game. The farm uses gems (earned through solitaire play) to complete construction and decoration tasks. Completing farm tasks earns farm XP, which unlocks new farm areas. Farm progression increases the daily delivery bonus (credits earned each day). The farm has its own named season event (Bloomlight Garden Season) with 12 chapters and a 300,000-credit grand prize. Farm tasks are visible in a task manager and can be completed in any session — they are not time-gated on a per-session basis (unlike the 30-minute offers or the 3-hour pet cookies).
**Why it does not map to an existing mechanic:** Not `xp-leveling` in the standard sense — the farm has XP, but the larger structure is a build-and-decorate progression loop that runs on a different currency (gems) and drives a different reward (daily bonus scaling) than the main solitaire XP system. The farm is a distinct progression layer with its own economy, its own event (seasonal park), and its own reward output (daily delivery bonus), making it a meta-game within the app rather than a feature within the main game.
**Worth adding to library:** Possibly — the build-and-earn meta-game structure (spend a secondary currency on decoration tasks to scale a daily reward) appears in multiple casual games and may be worth naming.
