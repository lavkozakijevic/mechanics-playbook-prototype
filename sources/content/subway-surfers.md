# Subway Surfers

**Teaser:** Subway Surfers offers a rewarded ad as a substitute for nearly every currency price in the game, then sells tickets that buy the same rewards without watching one.

Subway Surfers is an endless runner where the player's character sprints away from a pursuing figure while collecting coins, ending each run only when caught. A score multiplier, raised by completing sets of missions, is the game's one long-term progression number, scaling every run's score and gating further content. Two currencies, coins and keys, fund an extensive catalogue of characters, boards and boosts, and a rewarded ad substitutes for a coin or key price at nearly every point in the game. A separate paid product, ad tickets, lets a player buy the same rewards an ad would pay without watching one.

---

## System view

Subway Surfers is a complex system. Its spine is the score multiplier: missions raise it, it's the number that scales every run's score, and it's what Quests, Collections and a bundled purchase all key off. Ads run across that spine as connective tissue rather than a layer of their own, substituting for currency at boosts, missions, the post-run prize and missed login days alike, with ad tickets and several limited offers sold specifically against that same ad layer.

---

## Mechanics

### Rewarded Advertisement

**Implementation summary:** A rewarded ad substitutes for a coin or key price at nearly every spending point in the game, and a separate paid product exists to skip watching them.

**What was observed:** Ads pay out across a wide range of surfaces: coins (500, 300), keys (three keys, three blue keys), a hoverboard, each boost, an increase of the post-run prize from 1,000 to 2,000 coins, completion of a mission, recovery of a missed login day, and slots inside the Daily Rewards and Coins Galore offers. Two offers, Mystery Box Mania and Coins Galore, make one reward conditional on several ads watched, tracked by a counter. Subway Surfers also sells ad tickets, which buy the same rewards an ad would pay without watching one.

**How it is presented:** An ad option sits beside the coin or key price at nearly every place Subway Surfers asks for one, so the two routes read as equally valid choices rather than one being a fallback. The Daily Rewards screen is built entirely around five ad-watch slots. Mystery Box Mania's counter adds together ads watched anywhere in the game toward one reward, and Coins Galore runs the same pattern against a countdown.

**What is worth noting:** Selling ad tickets is the least usual part of this: it turns the habit of watching ads for a reward into something a player can buy their way out of while keeping the reward, rather than the more common choice of just removing the ads outright. Letting an ad complete a mission, not just discount it, is also a stronger substitute for play than a coin price achieves on its own.

**Key findings:**

- An ad substitutes for a coin or key price on boosts, hoverboards, missed login days, and one mission.
- Watching an ad can raise the post-run prize from 1,000 to 2,000 coins.
- Two counters, Mystery Box Mania and Coins Galore, bank multiple ad watches toward one larger reward.
- Ad tickets are sold as a way to receive the same rewards without watching anything.

**Screenshots needed:** the Daily Rewards screen with its five ad-watch slots; the Coins Galore offer with its ad counter and countdown; the ad ticket pricing screen.

### Boosters

**Implementation summary:** A held count of hoverboards plus two named, coin-or-ad-priced boosts, each usable up to three times, apply their effect only for the run ahead.

**What was observed:** A hoverboard is activated in a run with a double tap and protects the character from crashing for 30 seconds; Subway Surfers holds a count of them, and more can be had one at a time by watching an ad or bought for 300 coins each. A score booster raises the multiplier by five, six or seven for one run, and a head start begins a run already at higher speed; both are usable up to three times per run, priced at 3,000 and 2,000 coins respectively, or one ad each.

**How it is presented:** All three sit together on a Boosts tab, which states that boosts can only be used once and are worth stocking up on ahead of time. The same single ad buys any of the three regardless of their very different coin prices.

**What is worth noting:** Pricing a hoverboard, a head start and a score booster at one flat ad each, while their coin prices span a tenfold range, makes the ad route the better deal for the two more expensive boosts, at least in time rather than money.

**Key findings:**

- Boosts are used up per run, not held as a permanent upgrade.
- A score booster and a head start can each be applied up to three times in a single run.
- The same single ad buys a hoverboard, a head start or a score booster despite a tenfold difference in their coin prices.
- Boosts are also included in paid bundles in quantities of 10 or 20.

**Screenshots needed:** the Boosts tab showing the hoverboard count, the score booster and the head start side by side with their coin and ad prices.

### Soft Currency

**Implementation summary:** Coins are earned from nearly a dozen separate sources and spent across almost every system in the game, with keys sharing the same earn-through-play path via ads.

**What was observed:** Coins are collected in runs and added to a balance, and are also paid by the post-run prize, ad offers, the Coins Galore offer, adding a friend, missed login rewards and achievements. They're spent on hoverboards, boosts, upgrades, the mystery box, completing a mission immediately, and on characters and boards. Keys are gained by watching ads repeatedly and spent on characters, flash-deal items and recovering a missed login day.

**How it is presented:** Coins sit as a running balance on the home screen from the first run onward, visible everywhere a price is shown. Keys sit beside them in the same currency bar, with their own ad-watch entry points spread across the home screen and the store.

**What is worth noting:** Coins have no single dominant source. Runs, ads, offers, a social action and a return mechanic all pay into the same balance, so no one habit is required to keep it funded.

**Key findings:**

- Coins are earned through play, through ads, through a social action, and through returning daily.
- Keys are earned only through watching ads, with no coin-to-key conversion shown.
- Both currencies fund overlapping purchases: boosts, characters, and boards can be bought with either.
- Adding a friend pays 5,000 coins directly into this same balance.

**Screenshots needed:** the home screen showing the coin balance and score together after a run.

### Hard Currency

**Implementation summary:** Coins, keys and ad tickets are all sold directly for money in packs, with ad tickets sold specifically to buy out the ad-for-reward exchange.

**What was observed:** Coins are sold from 7.5 thousand for $0.99 up to 1.25 million for $99.99, and keys from 25 for $4.99 up to 800 for $99.99. Ad tickets are sold in packs of 10, 25 and 60, and bundled into several limited offers alongside boards and boosts.

**How it is presented:** Coin and key packs sit together in the store at a range of price points, buyable in any order with no unlocking sequence between them. Ad tickets and the offers built around them sit at the very top of the store, ahead of the currency packs.

**What is worth noting:** Selling ad tickets makes the ad layer itself a second thing to buy, distinct from paying for what the ads would have granted. A player can pay to stop watching ads and still receive what watching them would have paid out.

**Key findings:**

- Coins and keys are both sold directly for money in packs, with no conversion step between them.
- Ad tickets are sold in packs of 10, 25 and 60, and are bundled into several limited-time offers.
- Ad ticket and currency offers sit at the top of the store, ahead of the currency packs themselves.
- No free way to get an ad ticket is shown.

**Screenshots needed:** the coin and key pack pricing screen; the ad ticket pack pricing screen.

### Daily Login Rewards

**Implementation summary:** A 20-login calendar pays a hoverboard on completion, and any missed day stays claimable afterward for keys or an ad rather than being lost.

**What was observed:** A Daily Login surface appears on opening the app, stating that checking in daily pays rewards and that missed days can be caught up on. It counts toward 20 logins, after which the Freebird hoverboard is paid, and a missed day carries its own catch-up option, claimable for five keys or one ad.

**How it is presented:** The calendar pops up on open and sits alongside a Daily Login button on the home screen. A missed day shows its own marker rather than breaking the sequence, and tapping it opens the five-keys-or-an-ad choice directly.

**What is worth noting:** Making every missed day recoverable removes the usual penalty for missing a day, while still keeping a reason to come back: the 20-login target and its hoverboard reward stay reachable either way, just more slowly without the ad or the keys.

**Key findings:**

- Twenty logins pay the Freebird hoverboard, also shown as a locked reward in the board catalogue.
- A missed day is not lost; it stays claimable for five keys or one ad.
- The reward for each individual day besides the 20-login hoverboard is not named.
- The calendar sits separately from the five-slot, fully ad-based Daily Rewards track.

**Screenshots needed:** the Daily Login calendar with the Freebird hoverboard reward and a missed-day catch-up marker visible.

### Daily Claim Pack

**Implementation summary:** One $7.99 purchase on day one unlocks nine further days of free keys, a purchase that pays out in daily installments rather than all at once.

**What was observed:** The Bonus Keys Trail offer pays 40 keys for a $7.99 purchase on its first day, then releases free keys on each of the following nine days, in amounts of 20, 5, 10, 20, 10, 55, 10, 10 and 20. The offer is shown on the home screen with a limited window to take it.

**How it is presented:** All nine free days are shown up front, before the purchase, so the full ten-day payout is visible before committing.

**What is worth noting:** Spreading a single purchase's payout over ten days turns one transaction into ten separate reasons to come back, in a way a lump-sum reward wouldn't.

**Key findings:**

- One $7.99 purchase on day one unlocks nine further days of free keys.
- The nine free days total 160 keys beyond the 40 paid for directly.
- All ten days' amounts are shown before the purchase is made.
- Whether each day must be actively claimed, and what happens to an unclaimed day, isn't stated.

**Screenshots needed:** the Bonus Keys Trail offer showing the day-one purchase price and the following nine days' amounts.

### Leveling

**Implementation summary:** A permanent score multiplier rises only through completing mission sets, and directly scales the score every run afterward pays out.

**What was observed:** Subway Surfers keeps a score multiplier that rises as mission sets are completed and that scales the score a run produces. Its states are referred to as levels, and a paid bundle can add five levels to it at once. The multiplier's current value shows inside the missions panel.

**How it is presented:** The missions panel opens by explaining the connection directly: finishing missions raises the multiplier, and a higher multiplier means a higher score. The multiplier doesn't have its own dedicated screen outside that panel.

**What is worth noting:** Tying the score multiplier only to mission completion, with no separate experience points or activity counter behind it, makes missions the sole route to the game's one long-term progression number, whether reached by playing, paying coins, watching an ad, or buying the multiplier bundle directly.

**Key findings:**

- The score multiplier rises only through completing sets of missions.
- The multiplier permanently scales the score a run produces.
- A $4.99 bundle adds five multiplier levels at once, alongside coins and keys.
- How many missions are needed per level isn't stated.

**Screenshots needed:** the missions panel showing the current multiplier value and the mission set beneath it.

### Progression Gate

**Implementation summary:** Four separate surfaces, Quests, Collections, the Freebird board and Events, each stay locked behind their own named threshold on the score multiplier or the login count.

**What was observed:** Quests stays locked until score multiplier 4, and Collections until score multiplier 7, each stating its requirement on the locked surface itself. The Freebird board stays locked until 20 logins. Events stays locked until a threshold described as four stars, level 4.

**How it is presented:** Each locked surface can still be opened and states its own requirement plainly, rather than hiding behind a generic locked label. The Quests and Collections surfaces also carry the score multiplier bundle, offering a paid route past the same number gating them.

**What is worth noting:** Every named gate here reads its requirement off a number the player is already earning through ordinary play, the score multiplier or the login count, rather than introducing a separate currency or task just to unlock content.

**Key findings:**

- Quests unlocks at score multiplier 4 and Collections at score multiplier 7.
- The Freebird board unlocks at 20 logins.
- Events unlocks at a threshold described as four stars, level 4, without saying which measure that is.
- The score multiplier bundle is offered directly on the locked Quests and Collections surfaces.

**Screenshots needed:** the locked Quests and Collections surfaces showing their stated multiplier requirements and the bundle offered on each.

### Leaderboard

**Implementation summary:** A weekly Top Run ranks the player against friends and their country, but only once a 25,000-point entry score has been reached.

**What was observed:** Top Run frames itself as competing against friends and foes to climb ranks and earn medals, with a new chance to compete every week. It shows the player's standing against other players in their country and against their friends, and requires a score of at least 25,000 to enter the current week.

**How it is presented:** Top Run is reached from its own home-screen button, separate from the missions and score-multiplier surfaces that feed the score it ranks.

**What is worth noting:** Setting a minimum score to even enter turns Top Run into a competition among players who've already cleared a bar, rather than an open ranking anyone can join and climb from zero.

**Key findings:**

- Entry to the current week's Top Run requires a score of at least 25,000.
- Two views are shown: standing against friends and standing against other players in the same country.
- The competition resets weekly, with a new chance to compete each week.
- Where the player's own row sits within either list isn't stated.

**Screenshots needed:** the Top Run screen showing the country standings, the weekly reset, and the 25,000 entry score.

### Achievement

**Implementation summary:** A named Achievements list pays out in-game currency on the criteria it lists, separate from the score multiplier that otherwise tracks progress.

**What was observed:** An Achievements surface lists a set of achievements and what each one pays once attained, with some of that reward paid in in-game currency.

**How it is presented:** Achievements are reached from the home screen's navigation, apart from the missions and multiplier surfaces that drive most of the game's other progression.

**What is worth noting:** Keeping achievements as their own list, separate from the score multiplier, gives Subway Surfers two different progress records running side by side rather than folding recognition into the same number missions already raise.

**Key findings:**

- Achievements are listed with what each one pays.
- At least some achievement rewards are paid in in-game currency.
- The specific criteria for individual achievements aren't named.
- Whether an achieved reward is claimed or granted automatically isn't stated.

**Screenshots needed:** the Achievements list showing an entry and its stated reward.

### Reward Multiplier

**Implementation summary:** Watching one ad turns the standard 1,000-coin post-run prize into 2,000 coins, offered at the very moment that prize is first shown.

**What was observed:** On returning to the home screen after a run, Subway Surfers shows a prize worth 1,000 coins, then offers to raise it to 2,000 coins for watching an ad.

**How it is presented:** The offer sits directly on the same prize screen, immediately after a run ends, before the player has seen anything else on the home screen.

**What is worth noting:** Placing this offer at the very first moment after a run, ahead of every other surface on the home screen, makes it the highest-traffic point at which Subway Surfers asks for an ad.

**Key findings:**

- The post-run prize is 1,000 coins before any ad is watched.
- Watching one ad raises it to 2,000 coins.
- The offer appears immediately on returning to the home screen, before any other surface.
- Whether 2,000 is the full new total or added on top of the 1,000 isn't stated.

**Screenshots needed:** the post-run prize screen showing the 1,000-coin prize and the ad offer to raise it to 2,000.

---

## Section cards

**Onboarding and first run:** Subway Surfers asks for an age and a tracking permission before anything else, then puts the player straight into a guided first run with no menu in between.

**Core loop and automation:** Subway Surfers' core loop is a run through the subway, ended by being caught, between which the player manages a home screen full of missions, boosts and offers.

**Goals and progression:** The score multiplier is Subway Surfers' one long-term number, raised by missions and read by several of the game's other surfaces.

**Access and eligibility:** Four surfaces in Subway Surfers stay locked behind a stated threshold: Quests, Collections, the Freebird board, and Events.

**Economy and resources:** Subway Surfers runs on two spendable currencies, coins and keys, alongside a separate ad-ticket product and an event-specific currency.

**Social:** Subway Surfers' social surfaces are thin and reward-linked: adding a friend pays a fixed bonus, and a weekly leaderboard compares the player against friends and their country.

**Reach beyond the app:** Two surfaces in Subway Surfers send something outside the game: a shareable player profile, and a photo studio built around the player's own character.

**Monetization:** Subway Surfers' shop sits behind three tabs, Offers, Store and Boosts, with ad-related offers given the store's leading position ahead of the currency packs themselves.

**Return triggers:** Four separate surfaces greet the player on opening Subway Surfers: a login calendar, a fully ad-based rewards track, a timed currency offer, and a daily gift in the store.

---

## Onboarding and first run

Subway Surfers asks for an age and a tracking permission before anything else, then puts the player straight into a guided first run with no menu in between.

### O1. Age entry at launch

While Subway Surfers loads, the first thing it asks for is the player's age, set with a slider and then confirmed.

### O2. Tracking permission

After the age is confirmed, Subway Surfers asks whether it can track the player across other apps and websites. This request comes second, directly after age entry and before anything else.

### O3. Straight into play

The first screen after these prompts is a Tap to play screen, and tapping it puts the player straight into a run with no menu, account creation or home screen in between.

### O4. Guided first run

During the first run, Subway Surfers shows arrows for the moves available and introduces new moves as they come up. It prompts a double tap for the hoverboard, and the hoverboard activates as soon as it's used. This guidance runs inside the run itself rather than on a separate tutorial screen, and the hoverboard is introduced here before any store or balance for it is shown.

### O5. First home screen

The first run ends when the character is caught, without the level being finished, and Subway Surfers then moves to the home screen. The first thing shown there is a prize the player taps to open.

---

## Core loop and automation

Subway Surfers' core loop is a run through the subway, ended by being caught, between which the player manages a home screen full of missions, boosts and offers. The score multiplier, raised by completing missions, is the throughline connecting the run to everything else in the game.

### O6. The run

The run is Subway Surfers' core activity: the character runs while being chased, collecting coins and other items until it's caught, at which point the run ends and the player returns to the home screen. Coins collected during the run add to a balance shown on the home screen, 676 coins after a first run, and the run also produces a score shown alongside that balance. Subway Surfers offers no continuation, revive or retry option at the moment of being caught, and no energy, lives, tickets or other limit on how often a run can be started.

### O7. Home screen hub

Between runs, the player is on a home screen that shows the score and coin balance and carries a set of offers and entry points. Four navigation buttons sit at the top, Missions, Me, Shop and Events, and the home screen also features a Daily Login button, a What's New button, a Top Run button, the Coins Galore offer and the Bonus Keys Trail offer, along with a prompt to add friends and compete for the highest score to get rewards. Events is locked. What the What's New button shows isn't stated.

### O8. Collecting letters

Partway through a run, the player begins collecting letters that change along with the day of the week. What the letters spell, what completing the set unlocks, and what it pays aren't stated.

### O9. Missions

Missions open a panel that explains finishing missions raises the score multiplier, and a higher multiplier means a higher score. The current mission set holds three missions: pick up 100 coins in one run, jump 15 times, and pick up two pogo sticks. Each mission can be completed by playing, and Subway Surfers also offers to complete one immediately, for 1,700 coins on the coin and pogo-stick missions, or by watching an ad on the jump mission. The missions panel shows the player's current score multiplier, and missions are shown as a set of three together. Whether missions refresh on a schedule, and what replaces a completed one, aren't stated.

### O10. The hoverboard

A hoverboard is activated in a run with a double tap and, per the Boosts tab, protects the character from crashing for 30 seconds. Subway Surfers holds a count of hoverboards, ten at one point, and more can be had one at a time by watching an ad or bought for 300 coins each. The Boosts tab states that boosts can only be used once, so it's worth stocking up. Hoverboards also come in quantities of 10 or 20 inside paid offers and bundles.

### O11. Boosters and head starts

The Boosts tab offers a score booster, usable up to three times to raise the multiplier by five, six or seven for one run, priced at 3,000 coins or one ad. It offers a head start, usable up to three times to start a run already at higher speed, priced at 2,000 coins or one ad. The same single ad buys the hoverboard, the head start and the score booster, so the ad price stays flat while the coin price varies by a factor of ten. Other items appear in offers and bundles, including a fire speed-up and a star described as blue or freezing. Applying a booster in a run, and how the held count changes afterward, aren't stated.

---

## Goals and progression

The score multiplier is Subway Surfers' one long-term number, raised by missions and read by several of the game's other surfaces. Alongside it sit a permanent set of upgrades, a named achievements list, and characters unlocked by collecting items during runs.

### O12. Score multiplier

Subway Surfers keeps a score multiplier that missions raise and that increases the score earned in runs. It's referred to in levels: a paid bundle adds five levels to it at once. Named multiplier values gate other surfaces, Quests at multiplier 4 and Collections at multiplier 7. The multiplier's current value shows in the mission set. How many missions are needed per multiplier step isn't stated. Score boosters raise the multiplier for one run only, without changing its standing value.

### O13. Permanent upgrades

The Upgrades tab under Me offers upgrades that permanently increase the duration of pickups: the Jetpack, which flies into the sky to collect bonus coins; Super Sneakers, which jump higher than normal; Coin Magnet, which automatically collects nearby coins; and a 2x Multiplier, which doubles the score while it's active. Each costs 500 coins. These are pickups collected inside runs, distinct from the items held and applied from the Boosts tab. How many upgrade steps exist per power-up, and whether the price rises per step, aren't stated.

### O14. Achievements

An Achievements surface lists achievements and what each one pays on attainment, with some of that paid in in-game currency. The specific criteria listed, and whether rewards are claimed or granted automatically, aren't stated.

### O15. Characters from collecting

Some characters in the roster are unlocked by collecting items during runs, among them hats, tape recorders, guitars and flying saucers. How many items each character needs, whether that's a count of one item type or a set of distinct items, and how progress is shown, aren't stated.

---

## Access and eligibility

Four surfaces in Subway Surfers stay locked behind a stated threshold: Quests, Collections, the Freebird board, and Events. Each names its own requirement, and some characters carry their own separate conditions.

### O16. Events locked at level 4

The Events button on the home screen is locked and states that it unlocks at four stars, level 4. Whether that refers to the score multiplier or a separate measure isn't stated. Events exists in Subway Surfers as a surface with its own stated unlock condition; we did not reach it in this analysis, so what it contains isn't shown.

### O17. Quests locked at multiplier 4

Tapping Quests shows that the player must reach score multiplier 4 to unlock it, alongside the missions that raise the multiplier and a bundle offer. The locked surface can be opened and states its requirement plainly. Quests exists in Subway Surfers with this stated unlock condition; we did not reach it in this analysis, so what quests are and how they work isn't shown.

### O18. Collections locked at multiplier 7

The Collections tab under Me states that reaching score multiplier 7 unlocks collections, and offers a bundle alongside it. Collections exists in Subway Surfers with this stated unlock condition; we did not reach it in this analysis, so what it contains isn't shown.

### O19. Freebird locked behind logins

In the Boards tab, the Freebird board is shown as locked with a requirement of 20 logins. The same board is the reward named at the bottom of the Daily Login surface, where the count reads 0 of 20.

### O20. Top Run entry score

Top Run states that the player must score at least 25,000 to enter the current week's competition. The condition applies per week. Whether the 25,000 must come from a single run isn't stated.

### O21. Event and timed characters

Some characters are available only through events, and one costs 459 keys or 30,000 event coins; Subway Surfers states that the player doesn't have enough event coins for it. Other characters carry a timed badge and are available for a limited time, and completing events and showdowns are named as further routes to characters. How event coins are earned isn't shown, since the Events surface itself is locked.

---

## Economy and resources

Subway Surfers runs on two spendable currencies, coins and keys, alongside a separate ad-ticket product and an event-specific currency. Ads sit beside nearly every price in this section as a free alternative to spending either currency.

### O22. Coins

Coins are collected in runs and held as a balance on the home screen. They're spent on hoverboards (300), head starts (2,000), score boosters (3,000), each upgrade (500), the mystery box (500), completing a mission immediately (1,700), and on characters, boards and flash-deal items, and they're also sold for money. Non-paid ways to gain coins include collecting them in runs, a 1,000-coin post-run prize, ad offers of 500 and 300 coins, the Coins Galore offer of 20,000 coins for three ads, adding a friend (5,000 coins), missed login rewards, and achievement rewards paid in in-game currency. The Coin Magnet and Jetpack upgrades are both framed around collecting more coins.

### O23. Keys

Keys are a second currency, shown at the top of the screen. They're gained by watching rewarded ads, including a banner offer of three keys for a video and a store offer of three blue keys, and they're sold for money. Keys are spent on characters (459 keys for one), on flash-deal items, and on recovering a missed login reward (5 keys). Keys are also included inside paid offers, among them 15 keys in the No More Forced Ads offer and the Bonus Keys Trail. Subway Surfers refers to "blue keys" in some places; whether these are the same currency as keys isn't stated, since the currency bar lists only keys, coins and hoverboards. A line about opening the token box with keys by watching a video doesn't fully hold together, and it does not make clear how keys and the token box relate.

### O24. The currency bar

Three quantities sit at the top of the screen: keys, coins and hoverboards. Tapping each opens its own way to get more: hoverboards show the held count with one free for an ad or 300 coins each, coins open the coin packs, and keys open the key packs and then Daily Rewards. The coin panel offers no ad option, while the Offers tab does offer 300 coins for an ad. The key panel leads into Daily Rewards.

### O25. Event coins

A separate balance of event coins exists, used to buy an event character priced at 30,000 event coins. How event coins are earned or bought isn't shown.

### O26. Ad tickets

Subway Surfers sells ad tickets, described as getting instant rewards without watching an ad. They're sold in packs and included in several limited offers. No free way to get ad tickets is shown. A ticket being spent, and the balance falling afterward, aren't shown either.

### O27. Mystery box and token box

The shop offers a mystery box for 500 coins and a token box that's free the first time; opening the token box yields an unspecified handful of items. Later in the store, the token box is shown as available by watching an ad and, after that, for six coins. The contents of either box aren't described, and no second opening of either is shown.

### O28. Post-run prize

Returning to the home screen after a run, the player is shown a prize to tap open, paying 1,000 coins. Subway Surfers then offers to raise this to 2,000 coins for watching an ad.

### O29. More ad offers

Rewarded ads appear across the home screen and the shop: 500 coins for an ad on the home screen, three keys from a video on a banner at the bottom of the home screen, three blue keys from a video in the store, 300 coins for an ad in the Offers tab, one hoverboard per ad, and each boost for an ad. Subway Surfers is built heavily around watching ads for rewards. How many times each of these can be taken isn't stated.

### O30. Mystery Box Mania

An offer called Mystery Box Mania asks the player to watch 10 ads anywhere in the game for a reward, with a counter that read 0 of 10 at the time. It appears in the store's offers and again inside Daily Rewards. Ads anywhere in the game count toward it, so the counter adds together ads watched for other rewards too. What the reward is, and whether the counter resets, aren't stated.

---

## Social

Subway Surfers' social surfaces are thin and reward-linked: adding a friend pays a fixed bonus, and a weekly leaderboard compares the player against friends and their country.

### O31. Adding friends

The friends tab states that no friends have been added yet, and that adding one grants 5,000 coins and unlocks the Dino character along with a Dino portrait. The Add Friends button offers searching by player tag, sharing a profile by QR code or other means, and copying the player's own tag. Dino appears in the character roster as a friend-only special. The home screen separately invites the player to add friends and compete for the highest score to get rewards. Whether the friend must be new to the game, and whether the reward pays only on the first friend, aren't stated.

### O32. Top Run

Top Run, reached from a home-screen button, frames itself as competing against friends and foes, climbing ranks and earning medals and rewards, with a new chance to compete every week. It shows standings for the player's country and a view of how friends are doing. Entry requires a score of at least 25,000 in the current week. The rows of the country view, the player's own position, and what medals or rewards come from each placement, aren't stated. The competition restarts weekly.

---

## Reach beyond the app

Two surfaces in Subway Surfers send something outside the game: a shareable player profile, and a photo studio built around the player's own character.

### O33. Sharing the profile

From Add Friends, the player can share their profile with a QR code, share it through other routes, or copy their player tag to send. Where the share route leads isn't stated.

### O34. Surfer Studio

From the Me profile, the player can open Surfer Studio and compose a picture of their character: adding other surfers, choosing a pose such as riding the hoverboard or running, trying other surfers, adding stickers, and changing or removing the background. The studio produces a PNG image the player can share outside the game. The picture shows the character as composed, not a score or other record of play.

---

## Monetization

Subway Surfers' shop sits behind three tabs, Offers, Store and Boosts, with ad-related offers given the store's leading position ahead of the currency packs themselves.

### O35. Shop and the Boombot banner

The shop has three tabs: Offers, Store and Boosts. At the very top of the Store sits a banner offering Boombot, a dancing robot character, free with any purchase, along with the removal of pop-up ads. The same banner appears again at the bottom of the coin packs and Boombot appears as a bonus character in the roster. Subway Surfers never shows a pop-up or forced ad directly; their existence is implied only by the offers that remove them. Whether a second purchase grants anything further under this banner isn't stated.

### O36. Skip Ads deals

Below the Boombot banner, the store's limited deals open with two Skip Ads offers, both limited to the next 15 hours: $19.99 for 10 hoverboards, three speed-ups, three stars and 180 ad tickets, and $39.99 for 20 boards, five speed-ups, five stars and 420 ad tickets. These are the first three things shown in the store, all related to ads.

### O37. No More Forced Ads

An offer called No More Forced Ads costs $1.99 and includes five ad tickets, 20 boards and 15 keys, stating that rewarded ads for rewards remain available even after buying it. It sits in the store below Skip Ads and also appears as a pop-up from time to time. When that pop-up appears isn't stated.

### O38. Skip 30 Ads

A Skip 30 Ads offer, limited to one day and 23 hours, includes 10 boards, three blue keys, five speed-ups and 30 ad tickets. Its price isn't stated.

### O39. Ad ticket packs

Ad tickets are sold at 10 for $2.99, 25 for $4.99 and 60 for $9.99. These packs sit directly under the store's rewarded-ad offers.

### O40. Coin and key packs

Coins are sold at 7.5 thousand for $0.99, 40 thousand for $4.99, 90 thousand for $9.99, 200 thousand for $19.99, 550 thousand for $49.99 and 1.25 million for $99.99. Keys are sold at 25 for $4.99, 55 for $9.99, 125 for $19.99, 350 for $49.99 and 800 for $99.99. Any pack can be bought directly, with no order or lock among them.

### O41. Characters and bundles for money

Some characters are sold for $9.99 and some cosmetics for $2.99, and both also appear in bundles that add further characters, bonuses and upgrades, including exclusive running animations. A party bundle, limited to another 24 hours, includes two characters, one board, five score boosters and 10 hoverboards. A welcome pack includes cosmetics. The party bundle's price and the welcome pack's full contents aren't stated.

### O42. Character and board catalogue

The Me screen holds four tabs: Characters, Boards, Upgrades and Collections. The Characters tab lists many characters, obtainable with coins or keys, through bundles, by collecting items during runs, through events and showdowns, by adding a friend, and Boombot with any purchase. The Boards tab works the same way: one board is always free, the Starboard is shown as acquired for free, some boards carry a timed badge, the Freebird needs 20 logins, and most boards cost in-game currency or come in bundle offers. The profile shows the player's current look, with a choice between light and dark options. Whether any character or board changes how a run plays isn't stated, and what the light and dark options change beyond their names isn't described.

### O43. Flash deals

The Offers tab carries flash deals ending in 23 hours and 53 minutes, with some items priced in keys and some in coins, and 300 coins available for watching an ad. The items in the flash deals aren't named.

### O44. Bonus Keys Trail

The Bonus Keys Trail offer, featured on the home screen and limited to 15 hours and 14 minutes, promises bonus keys every day. On the first day the player buys 40 keys for $7.99; free keys then follow on each of the next nine days: 20, 5, 10, 20, 10, 55, 10, 10 and 20. All nine free days are shown before the purchase. Whether each day's keys must be claimed, and what happens to a day left unclaimed, aren't stated.

### O45. Score multiplier bundle

A bundle described as a permanent score boost adds five levels to the score multiplier at once and includes 50,000 coins, 20 keys and five score multiplier upgrades, for $4.99. It's offered on the locked Quests and Collections surfaces, whose requirements are both stated in score multiplier levels.

---

## Return triggers

Four separate surfaces greet the player on opening Subway Surfers: a login calendar, a fully ad-based rewards track, a timed currency offer, and a daily gift in the store.

### O46. Daily Login

A Daily Login surface pops up on opening the app, stating that checking in daily pays rewards and that missed days can be caught up on. At the bottom it states that logging in 20 times pays the Freebird hoverboard, shown alongside a count of 0 out of 20. A Daily Login button also sits on the home screen. Whether the count of 20 advances with each check-in or with each claimed reward isn't stated, and the individual daily rewards in the sequence, apart from the missed-day reward, aren't listed.

### O47. Missed-day catch-up

A missed day in the Daily Login sequence carries a catch-up marker; tapping it offers to claim 1,000 coins for either five keys or one ad. A missed day isn't lost outright, it stays claimable for a price.

### O48. Daily Rewards

A Daily Rewards surface pops up on opening the app, encouraging the player to watch more ads to earn all the rewards before time runs out. It lists five daily rewards, each unlocked by watching an ad, with the Mystery Box Mania offer shown below them. The daily rewards track is built entirely around watching ads. How long the time limit runs, and what each of the five rewards contains, aren't stated.

### O49. Coins Galore

An offer called Coins Galore pops up on opening the app, offering 20,000 coins for watching three ads, with 7 hours and 48 minutes remaining and a counter reading 0 of 3. It's also featured on the home screen.

### O50. Daily gift

The store opens with a daily gift: the first one is free, and further daily gifts can be taken by watching an ad. The gift's contents and its reset rule aren't stated.
