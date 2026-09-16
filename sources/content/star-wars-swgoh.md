# Star Wars: Galaxy of Heroes

**Teaser:** In the opening hours, level-up bonuses gave players more energy than they could spend — one reading showed 158 held against a stated maximum of 68.

Star Wars: Galaxy of Heroes tracks a roster of more than 300 characters, each advancing through its own level, star rank, gear tier and ability track, fed by battles, quests and a wide currency economy. Nearly every hub feature stays locked behind a stated player level or character measure, visible in its eventual position from the very first screen. An Episode Track pays free and paid reward lanes from quest points, while crystal-priced loot packs and a free daily draw both resolve to characters and shards from a stated pool. Three separate energy pools gate light side, cantina and fleet battles, refilling on their own schedules or for a price.

---

## System view

Star Wars: Galaxy of Heroes is a complex system whose spine is the character roster: every currency, quest, energy pool and gate ties back to acquiring, leveling or fielding one of the roster's more than 300 characters, and the game shows every locked one alongside the ones already held.

---

## Mechanics

### Leveling

**Implementation summary:** Player level and four separate character tracks, level, star rank, gear tier and ability, all advance independently.

**What was observed:** Player level rises from battles and quest claims, reaching 16 by the end of play. Each character separately advances a character level raised with training droids, a star rank from one to seven raised by promotion, a gear tier raised by filling six equipment slots, and ability levels from one to eight raised with ability materials. The Era of Andor view also shows a total era level with a reward at the next level.

**How it is presented:** Player level sits at the top of the hub with a numeric count. Each character's four tracks appear on that character's own screen, with a training droid slot, a promotion prompt once enough shards are held, a gear-equip screen, and ability upgrade tiles.

**What is worth noting:** Galaxy of Heroes runs five separate leveling tracks at once, one for the account and four per character, each spent from its own resource, training droids, shards, gear pieces and ability materials, and each capped differently, seven stars, eight ability levels. The era level sits apart from all of them with no stated rule for what advances it.

**Key findings:**

- Player level and four character tracks (level, star rank, gear tier, ability level) advance separately.
- Character level is raised with training droids, star rank by promotion with shards and credits.
- Gear tier rises once six equipment slots are filled; ability levels rise with ability materials.
- An era level exists with a reward named at the next level, with no stated advancement rule.

**Screenshots needed:** a character's four upgrade tracks in one view, and the era level screen showing its next reward.

### Experience Points

**Implementation summary:** Battles, quest claims and character training each pay a separate XP value toward player level or character level.

**What was observed:** The rewards screen states that battles earn player XP, a daily quest lists an XP reward, and claiming journey quests grants XP. Player XP accumulates toward player level, shown at 6 of 10 at level 2. Character training fills a separate character XP bar, such as 0 of 25, with higher-grade training droids granting more XP per use.

**How it is presented:** Player XP is not shown as its own balance; it surfaces only through the level progress indicator. Character XP appears as its own bar on a character's training screen.

**What is worth noting:** Two separate XP values run side by side, one for the account and one per character, fed by different activities, battles and quest claims for the first, training droids for the second, and neither is shown as an exchangeable balance in its own right.

**Key findings:**

- Battles, quest claims and journey quest completion each grant player XP.
- Player XP is shown only through the level progress indicator, not as its own figure.
- Character training fills a separate character XP bar, shown as a fraction.
- Higher-grade training droids grant more character XP per use.

**Screenshots needed:** the player level progress bar, and a character's XP bar during training.

### Milestone

**Implementation summary:** Level-up screens name exactly what has just unlocked and what unlocks next, beyond the number changing.

**What was observed:** A player level-up produces its own screen stating what has just opened, such as shipments or challenges, and what opens at a future level, alongside 20 bonus energy. Completing every normal battle in the first campaign stage produces a separate message unlocking hard mode for that stage.

**How it is presented:** The level-up screen appears immediately on crossing a level, naming the unlock and the next one to come, separately from the level number itself changing on the hub display.

**What is worth noting:** The level-up screen does more than report a new number: it names the specific feature that just became available and previews the next one by level, turning an otherwise generic number change into two pieces of forward-looking information at once.

**Key findings:**

- Level-up screens name what has just unlocked, separate from the level number.
- Level-up screens also preview what unlocks at a future level.
- Every level-up grants 20 bonus energy.
- Completing every normal battle in a stage separately unlocks hard mode with its own message.

**Screenshots needed:** a level-up screen naming an unlock, and the hard mode unlock message.

### Progression Gate

**Implementation summary:** Nearly every hub table, mode and store tab stays locked behind a stated player level or character measure.

**What was observed:** Almost every table in the hub is padlocked at first, with the requirement shown on tap: stated player levels for features including the newsletter, achievements, daily quests, shipments, cantina battles, challenges, squads, allies, events, guilds and championships. Other features combine a level with a roster or completion measure: dark side battles require three dark side characters, mod battles require a character trained to level 50, the shard store requires a character promoted to seven stars, and relic amplifiers require gear tier 13.

**How it is presented:** Locked tables sit in their eventual hub position from the very first screen, each stating its own requirement when tapped, so the whole feature map is visible before any of it opens.

**What is worth noting:** Every locked feature the game shows a requirement for is gated on a measure the game itself advances through play, a level, a star rank, a gear tier, rather than on eligibility conditions such as purchases or guild membership; where a requirement also includes guild membership, only the level or gear portion of it is a gate of this kind.

**Key findings:**

- Nearly every hub table is visible but locked from the first screen.
- Requirements shown include player level, dark side character count, character level, star rank and gear tier.
- Locked features show exactly where they'll sit once unlocked.
- Guild-membership requirements are separate from the level and gear conditions that gate access.

**Screenshots needed:** the first hub view with its padlocked tables, and a locked table's requirement message.

### Energy

**Implementation summary:** Three separate energy pools, regular, cantina and ship, each gate their own battle type and refill differently.

**What was observed:** Starting a Light Side battle costs 6 energy and a cantina battle costs 8 cantina energy, with a separate ship energy pool for fleet battles. Cantina energy regenerates at one point every 12 minutes or can be refilled for crystals, and every player level-up raises the maximum and grants 20 bonus energy. Energy readings repeatedly exceeded the stated maximum throughout.

**How it is presented:** Each pool shows a current amount against a maximum near the relevant battle type, with a crystal-priced refill option offered directly where cantina energy is spent.

**What is worth noting:** Frequent level-ups in the opening hours raised the energy maximum and granted bonus energy faster than battles spent it, so energy was never seen limiting play; readings sat well above the stated maximum throughout.

**Key findings:**

- Three separate energy pools gate light side battles, cantina battles and fleet battles.
- A light side battle costs 6 energy; a cantina battle costs 8 cantina energy.
- Cantina energy regenerates one point every 12 minutes or refills for crystals.
- Every level-up raises the energy maximum and grants 20 bonus energy.
- Energy readings exceeded the stated maximum throughout.

**Screenshots needed:** the three energy pools on their respective battle screens, and a level-up screen stating the bonus energy granted.

### Daily / Weekly Quests

**Implementation summary:** Four separate quest lists, daily, journey, episode and character, run alongside each other with their own reset rules.

**What was observed:** Daily quests list seven objectives with a countdown to reset and progress tracked toward each, such as 18 of 100 energy used. Completing the full daily set opens a Daily Activity Prize Box. A new episode quest is added once a day, and character quests ask the player to win battles with or promote a featured character.

**How it is presented:** All four quest types share one Quests screen, split into tabs, each unlocking at a different point in early progression.

**What is worth noting:** The daily quest list directs spending as much as activity, asking the player to open a data card in the store or buy shipments, so completing the list also completes a purchase-adjacent action inside the game's own economy.

**Key findings:**

- Daily quests list seven objectives with a countdown to reset.
- Completing the daily set opens a Daily Activity Prize Box.
- One new episode quest is added each day.
- Character quests ask the player to win battles with or promote a featured character.
- Some daily quests require spending in the store or shipments, not just battling.

**Screenshots needed:** the daily quest list with its reset countdown, and the Daily Activity Prize Box message.

### Daily Login Rewards

**Implementation summary:** A monthly calendar pays a growing reward for each day logged in, with missed days lost for good.

**What was observed:** The April login calendar runs from day 1 to day 30, resetting at the start of each month, and states that rewards reset at midnight, cannot be reclaimed if missed, and count days logged in rather than calendar dates. Rewards grow from 20,000 credits on day 1 to 150,000 on day 28, with an ability material, crystals, shards, training droids and materials at other days.

**How it is presented:** The calendar appears as a pop-up on returning to the app, stating the days remaining in the current month and greying out days not yet reachable, with a label stating how many more logins are needed for the next unclaimed reward.

**What is worth noting:** Because the calendar counts logins rather than calendar days and starts fresh each month regardless of when in the month a player begins, a player who starts partway through a month cannot reach every day's reward even by logging in daily for the rest of it.

**Key findings:**

- The calendar runs day 1 to day 30, resetting at the start of each month.
- Rewards reset at midnight and cannot be reclaimed once missed.
- The calendar counts days logged in, not calendar dates.
- Credits rise from 20,000 on day 1 to 150,000 on day 28.

**Screenshots needed:** the login calendar pop-up, and a greyed-out day stating how many more logins are needed.

### Daily Claim Pack

**Implementation summary:** A free 30-day calendar and two purchasable ones each release their own reward set day by day.

**What was observed:** A free calendar named for level 85 describes itself as containing training droids and character shards across 30 days, with rewards stated to persist until all are claimed or the calendar is replaced. A purchasable calendar sells 30 days of rewards for $4.99, and a further purchasable calendar carries its own separate reward set.

**How it is presented:** Calendars are offered from the store rather than a login pop-up, each named and priced on its own listing, distinct from the April login rewards calendar shown elsewhere.

**What is worth noting:** Despite one calendar's name referencing a target level, its own description frames the release as running across 30 days rather than by level reached, and a player could hold this calendar, a purchased one and the separate April login calendar all at once, each releasing on its own schedule.

**Key findings:**

- A free calendar spans 30 days of training droids and character shards.
- Its rewards persist until claimed or the calendar is replaced.
- A purchasable calendar sells 30 days of rewards for $4.99.
- A further purchasable calendar carries its own separate reward set.
- These calendars run alongside, and separately from, the April login rewards calendar.

**Screenshots needed:** the free calendar's description screen, and the purchasable calendar's store listing.

### Seasonal Progression Pass

**Implementation summary:** An Episode Track pays free and paid reward lanes from quest-earned points, with a purchase that fills lanes instantly.

**What was observed:** At level 10 the Episode Track opens for a named episode, tracking points earned from episode and character quests toward 50 ordered rewards on a free lane, with a paid lane beside it showing visibly larger rewards. The track states that repeatable bonus rewards continue until the episode ends. Buying the Episode Pass unlocks the paid lane and pass-only quest rewards; a higher tier immediately grants 50,000 episode points, advances 10 milestones and unlocks 24 rewards at once.

**How it is presented:** The Episode Track sits as a featured entry beside Quests once unlocked, with the free and paid lanes shown side by side and unclaimed rewards visibly waiting further along the track.

**What is worth noting:** The higher purchase tier doesn't just unlock the paid lane, it also advances the track itself by a stated amount instantly, so the same purchase both opens a benefit and skips a portion of the progress needed to reach further rewards inside it.

**Key findings:**

- The Episode Track holds a free lane and a larger paid lane, fed by episode and character quest points.
- The track states that its bonus rewards run until the episode ends.
- The Episode Pass unlocks the paid lane and pass-only quest rewards.
- A higher pass tier immediately grants 50,000 episode points and unlocks 24 rewards at once.

**Screenshots needed:** the Episode Track showing both lanes, and the higher pass tier's instant-grant offer.

### Achievement

**Implementation summary:** An Achievements tab claims individual rewards for criteria the game already tracked before the tab was even opened.

**What was observed:** On unlocking the Achievements tab, five achievements are already complete from earlier play, each claimed individually for its own reward of gear, credits or other items. The full list of achievements can be browsed beyond the completed ones.

**How it is presented:** Achievements sit in their own tab, reached once player level opens it, with completed and uncompleted criteria browsable in one list and a claim action on each completed entry.

**What is worth noting:** Achievements were already satisfied by ordinary play before the tab itself unlocked, so the first thing the tab shows a player is a backlog of rewards waiting on progress that happened before the feature existed for them.

**Key findings:**

- Five achievements are already complete when the Achievements tab first opens.
- Each achievement is claimed individually for its own reward.
- The full achievement list, completed and uncompleted, can be browsed.

**Screenshots needed:** the Achievements tab on first opening, showing already-completed entries.

### Challenge

**Implementation summary:** A Challenges table runs tiered battles against changed rules, open only on specific days of the week.

**What was observed:** The Challenges table opens named challenges such as a Training Droids challenge, a Bounty Hunter challenge and an Ability Materials challenge, each open only on stated days of the week. Each challenge has six tiers, with details, possible rewards and required-unit tabs, and the first tier of the Training Droids challenge is completed through three battles against a boss that heals to full health regularly.

**How it is presented:** The table opens with an introduction naming what challenges test, and each challenge lists its own open days, tier structure and requirements before a battle starts.

**What is worth noting:** Framing a challenge tier around a specific boss behavior, a boss that heals regularly, asks the player to bring a specific answer, a way to block healing, rather than simply a stronger squad, which is a different kind of test than the ordinary campaign battles.

**Key findings:**

- Challenges are named and open only on specific days of the week.
- Each challenge has six tiers with details, rewards and required-unit information.
- The first tier of one challenge is completed through three battles.
- One challenge's boss heals to full health regularly, calling for a specific counter.

**Screenshots needed:** the Challenges table with its named challenges and open days, and one challenge's tier list.

### Set Collection

**Implementation summary:** A roster of more than 300 characters tracks shard progress toward every character, held or not yet unlocked.

**What was observed:** The Characters tab shows both the characters the player has and, in the game's own words, all the characters still to unlock, with more than 300 in total. Locked characters show shard progress toward the amount needed to activate them, and a character with enough shards shows a badge inviting activation. Filters include allegiance, faction, role and whether a character is activated, with sorting by gear tier, health, speed, potency and power.

**How it is presented:** The full roster is visible in one tab regardless of whether each character is held, with locked entries showing a shard count and unlocked entries showing full stats and filters.

**What is worth noting:** Showing every character the game has, not just the ones already held, turns the roster into a visible target list rather than a private inventory, and shard progress on locked characters gives every one of them, met or not, a stated distance still to go.

**Key findings:**

- More than 300 characters are shown, including ones not yet unlocked.
- Locked characters display shard progress toward the amount needed to activate them.
- Filters include allegiance, faction, role and activation status; sorting includes gear tier and power.
- A character with enough shards shows a badge inviting activation.

**Screenshots needed:** the Characters tab showing both held and locked characters, and a locked character's shard progress.

### Loot Box

**Implementation summary:** Crystal-priced Chromium packs and an ally-point Bronzium draw each resolve to characters or shards from a stated pool.

**What was observed:** A Chromium Mega Pack costs 2,520 crystals and resolves eight cards drawn from 120 possible characters and 120 possible shard sets, with one card guaranteed to award a character and each card's odds stated at 20% for a character against 80% for a shard set. A single Chromium Data Card costs 350 crystals with no guarantee, and an extra Bronzium data card draw, beyond the free daily allowance, costs 250 ally points and resolves to an item or character from a stated pool.

**How it is presented:** Each pack's full possible-outcome pool, every character and every shard set it can produce, can be viewed in detail before a purchase is made.

**What is worth noting:** The odds and the full outcome pool are stated up front for every paid pack, down to the percentage split between a character and a shard set on each card, so nothing about what a purchase can produce is withheld from view before it's bought.

**Key findings:**

- A Chromium Mega Pack costs 2,520 crystals for eight cards with one guaranteed character.
- Each card is stated at 20% character odds against 80% shard set odds.
- A single Chromium Data Card costs 350 crystals with no guarantee.
- An extra Bronzium draw beyond the free daily allowance costs 250 ally points.

**Screenshots needed:** the Chromium Mega Pack's stated odds screen, and the extra Bronzium draw's ally-point price.

### Variable Reward Outcome

**Implementation summary:** A free daily Bronzium draw and a shared prize box each resolve to different rewards without any price paid.

**What was observed:** A free Bronzium data card draw is offered up to ten times a day with no cost, resolving to different results across multiple draws: character shards, crafting items, a character unlock and gear. The Daily Activity Prize Box, opened after completing the day's quests, states that the player receives one or more of a listed set of items.

**How it is presented:** The free draw sits on the same card as the paid draw, refreshing on a visible countdown of several minutes once used, with the animation skippable.

**What is worth noting:** The free draw and the paid draw beside it look identical on screen, a card, a countdown, an open action, but only the paid one asks the player to commit anything before the result is known, which is what separates a variable outcome from a loot box on the very same surface.

**Key findings:**

- A free Bronzium draw is offered up to ten times a day at no cost.
- Free draws resolved to shards, crafting items, a character unlock and gear across multiple draws.
- The Daily Activity Prize Box states it grants one or more of a listed set of items.
- The free draw sits on the same card as the paid, ally-point-priced draw.

**Screenshots needed:** the free Bronzium draw with its refresh countdown, and the Daily Activity Prize Box message.

### Hard Currency

**Implementation summary:** Crystals are sold in five money-priced packages and spent on packs, shipments, energy refills and credit conversion.

**What was observed:** Crystals are sold for real money in five packages, from 610 for $4.99 up to 15,710 for $99.99, with more crystals per dollar in larger packages. The same balance buys Chromium packs, refreshes cantina energy, and converts into credits through crystal-priced credit packs. A welcome gift and login rewards also grant crystals without payment.

**How it is presented:** The Crystals tab in the store lists all five packages together, while crystal prices for other purchases, energy refills, packs, credit conversion, appear on their own respective screens.

**What is worth noting:** The same crystal balance is reachable by paying or by ordinary play, a welcome gift and login rewards both grant it free, which means every crystal-priced purchase in the game can, in principle, be reached without spending money, just more slowly.

**Key findings:**

- Crystals sell in five packages from 610 for $4.99 to 15,710 for $99.99.
- Larger packages give more crystals per dollar.
- Crystals buy Chromium packs, energy refills and credit conversion packs.
- A welcome gift and login rewards grant crystals without payment.

**Screenshots needed:** the Crystals tab showing all five packages, and a crystal-priced item such as an energy refill.

### Soft Currency

**Implementation summary:** Credits, cantina tokens and ally points are each earned through play and spent on their own upgrade paths.

**What was observed:** Credits are earned from battles and spent on training, activation, promotion, ability upgrades and shipment purchases. Cantina battle tokens are earned per cantina battle win and spent in a dedicated cantina store. Ally points are earned only by fielding a borrowed unit in battle and are spendable on extra Bronzium draws and weekly shipment items.

**How it is presented:** Each currency is shown near where it's earned, credits on the battle rewards screen, cantina tokens after a cantina battle, ally points after a battle that used a borrowed unit, and each is spent on its own dedicated screens.

**What is worth noting:** Ally points are the one currency here that can only be earned through another player's presence in the squad, by way of a borrowed unit, which ties this currency's entire supply to the borrowing system rather than to the player's own activity alone.

**Key findings:**

- Credits are earned from battles and spent on character upgrades and shipments.
- Cantina battle tokens are earned per win and spent in the cantina store.
- Ally points are earned only by fielding a borrowed unit in battle.
- Ally points are spent on extra Bronzium draws and weekly shipment items.

**Screenshots needed:** the credits balance on a battle rewards screen, and the ally points earned after a battle with a borrowed unit.

### Spendable Credits and Tokens

**Implementation summary:** Lightspeed tokens are described as applying to any character to upgrade stars, abilities, gear or relic levels.

**What was observed:** Lightspeed tokens are introduced as units that can be applied to individual characters to quickly upgrade their stars, abilities, gear tiers and relic amplifier levels, described as one of the fastest ways to upgrade a roster. None were held or available to apply at first, and a later search shows them offered as a reward on the Episode Track.

**How it is presented:** Tokens have their own screen inside a character's inventory, listing which are held and which are available elsewhere, with an apply action for any token on hand.

**What is worth noting:** The token's own description names four separate things it can upgrade at once, stars, abilities, gear and relic levels, which makes it a single unit that can substitute for several of the game's other upgrade currencies depending on where the player chooses to apply it.

**Key findings:**

- Lightspeed tokens apply to a character to upgrade stars, abilities, gear tiers or relic levels.
- No tokens were held or available to apply at the point they were introduced.
- The Episode Track is the only source shown for lightspeed tokens.
- Tokens have a dedicated screen inside each character's own inventory.

**Screenshots needed:** the lightspeed token screen inside a character's inventory, and the Episode Track reward offering one.

---

## Onboarding and first run

A tracking request, a guided first battle, and free starter items run before account details are even asked for.

### O1. Tracking permission request

The first thing the app shows on first open is the system request asking whether it may track the user across other apps and websites, before any game content or account screen appears.

### O2. Import or new player

The app asks whether the user has an account already, offering Import Account or New Player. Import Account offers a single sign-in method, EA Connect, opening the EA Connect website inside the app rather than in an external browser, and states that an existing account not yet linked should be linked from the old device first. New Player starts a loading screen with scenes and characters from the films. No account creation, email or password is required to start as a new player, and import remains available later from settings.

### O3. Guided first battle

A new player is placed straight into a battle with two characters an alien guide announces are now in the roster. The guide instructs each move in turn, and other controls do not respond while the guide leads. On victory the guide announces the first battle rewards, and a rewards screen states that completing battles earns player XP and collects crystals, shards, credits and other items.

### O4. Hub shown, controls locked

After the first battle the hub loads in full, showing a player level indicator, a Collection button, padlocked Journey Guide, Allies and Inbox buttons, two currencies, and characters standing at tables for battles, the arena, the store, shipments, campaigns, mod battles and challenges. A Coliseum timer and a character event countdown are visible. Tapping settings, Collection or the currencies does nothing at this point; only Quests responds.

### O5. First quest, Go button

Opening Quests shows Daily Quests locked, Journey Quests open, and Achievements and Guild Activities tabs locked. The guide states that quests always show what to do next and that the Go button always leads to where the current quest is completed. Tapping Go moves the player directly to the Light Side battles map.

### O6. Second guided battle

The first Light Side node shows a description, possible enemies, first-time rewards and an energy cost. The squad screen states that no other light side characters are available yet. In battle the guide teaches tap-and-hold for ability details, a status effect icon, and an enemy's Taunt, and a 1x, 2x and 4x speed control appears. The battle ends in a three-star victory and a player level-up, which states that max energy increased and 20 bonus energy was earned.

### O7. Asset downloads deferred

No download is shown before the first battle. After the second battle a download runs in the background, and later a pop-up states that further assets will download over the wireless network. Downloading continues while the player uses the store and draws a data card.

### O8. Birth month and name

After the second battle and an era announcement, a pop-up asks for birth month and year with a checkbox accepting the EA User Agreement and privacy policy, followed by a screen asking the player to choose a name, stating it will be visible to other players and should not include personal information. These steps come after two battles rather than at first launch, and the first paid offer appears immediately after the name is chosen.

### O9. Guided character upgrades

Early journey quests lead into guided upgrade actions: training a character with a training droid, activating a character for credits, promoting a character once enough shards are held, and equipping gear, with the guide explaining that legacy characters use gear while era units do not. On a squad screen the guide explains the leader slot and the benefit indicator, and later battles introduce the speed bar and turn order tracker. Only the element the guide names is tappable during these first steps.

### O10. Forced hard mode battle

After the six normal battles of the first stage, at player level 5, the guide states that hard mode is now unlocked and calls it the best place to find character shards. The player cannot skip this battle, change characters or upgrade anyone before it. After the victory, the guide states that normal and hard mode can now be chosen when a stage is complete, and that each hard mode battle can be completed five times a day to earn its rewards.

### O11. Free starter items

Returning to the cantina, the guide offers a free character in the cantina store, unlocking a character for free through a data card. The store then shows two further free items, a training droids gift pack and a sim tickets gift pack, each labelled as good for new players.

---

## Core loop and automation

Turn-based squad battles run across three campaigns, with auto-battle, sim tickets and a challenges table layered on top.

### O12. Turn-based squad battles

Battles are turn-based, with a speed bar under each health bar showing how close a unit is to its next turn and a turn order tracker showing who acts next. Each character has basic and special abilities with cooldowns, plus passive qualities, and effects appear as green badges for beneficial ones and red badges for harmful ones, including Taunt, healing immunity, buff immunity, ability block and critical hit immunity. Battles run in waves ending in a final encounter, and victories are graded in stars.

### O13. Auto battle and speed

An Auto control lets characters fight without the player choosing moves, continuing until stopped, and battle speed can be set to 1x, 2x or 4x.

### O14. Three battle campaigns

The Campaigns table holds Light Side Battles, Dark Side Battles and Cantina Battles. Light Side battles use energy and allow only light side characters, Dark Side battles allow only dark side characters, and Cantina battles use cantina energy, accept any mix of characters, and pay shards, ability materials and cantina battle tokens.

### O15. Energy pools per battle

Energy is described as the currency used to participate in light side and dark side battles, with separate pools for ship energy and cantina energy. The first Light Side node costs 6 energy and a cantina battle costs 8 cantina energy. Cantina energy refreshes by one point every 12 minutes, or 120 cantina energy can be bought for 100 crystals. Each level-up raises max energy and grants 20 bonus energy.

### O16. Hard mode daily limit

Each hard mode battle can be completed five times a day to earn its rewards, and hard mode is named as the best source of character shards.

### O17. Sim tickets

Sim tickets complete battles already won with three stars instantly, without playing them again. The player chooses how many simulations to run, which sets the tickets and energy spent, and receives the battle rewards without playing.

### O18. Daily quests and prize box

Daily quests unlock at player level 6 and list seven objectives with a countdown to reset, such as using 100 energy or cantina energy, finishing battles, opening a data card and buying shipments. A Daily Activity Prize Box grants one or more items once the full daily set is complete.

### O19. Episode and character quests

Episode quests are the biggest source of episode points for the Episode Track, with one new quest added each day. Character quests earn episode points and other rewards for promoting and playing with a featured character, such as winning battles with a specific character.

### O20. Challenges table

The Challenges table opens at player level 15 with named challenges open on specific days of the week, each with six tiers listing details, possible rewards and required units. The first tier of one challenge is completed through three battles against a boss that heals to full health regularly.

### O21. Squad composition

The squad screen shows squad power, the leader ability and slots for adding or swapping characters. The character in the first slot is the leader and grants bonuses to the others, shown with a circle indicator for how much each ally benefits. A Squads tab lets the player create, save and organize multiple squads. A sixth slot is added at player level 18, reserved for a unit borrowed from another player.

---

## Goals and progression

Player level, four character upgrade tracks, campaign maps, journey quests, the Episode Track and achievements make up this section.

### O22. Player level and unlocks

Battles and quest claims grant player XP, and player level rises from 1 to 16 over the course of play. Each level-up screen states that max energy increased and awards 20 bonus energy, and also names what has just opened and what opens next, such as shipments unlocking, cantina battles unlocking in one level, or challenges unlocking with events and allies named further out.

### O23. Four upgrade tracks

Each character advances along separate tracks: character level rises with training droids and credits, star rank rises by collecting shards and paying credits to promote, gear is equipped into six slots per tier with an Upgrade control that equips or crafts pieces automatically, and each of four abilities has eight upgrade levels paid for with ability materials and credits. Relic amplifiers appear on every character but stay locked until gear tier 13. Gear screens show which other characters also need the same item, though the automatic Upgrade control equips pieces without showing those conflicts.

### O24. Campaign stage maps

Each campaign is a map of nodes in stages of six battles, where later nodes stay locked with a message to continue playing to unlock them. Completing all six normal battles in a stage opens hard mode for that stage. Star totals are shown per campaign, and node descriptions list possible enemies and first-time rewards. Battles stay on the campaign map after victory rather than returning to the hub.

### O25. Journey quests

Journey quests are a short list of directed objectives, each with a Go button that opens the relevant screen, and completing one replaces it with the next. Examples include winning a specific battle, training a character, activating a character, buying shipments, and reaching a player level to unlock daily quests. Claiming a completed journey quest grants XP, and no expiry or reset is shown on the list.

### O26. Episode Track

At level 10 the Episode Track unlocks, earning progress from Episode Points gained through quests. The track belongs to a named episode, showing an episode currency, a progress bar, 50 rewards, and a free lane beside a pass lane with visibly larger rewards. Bonus rewards are described as repeatable until the episode ends. The player claims unlocked free-lane rewards by tapping them, with many more remaining and pass-lane rewards not received.

### O27. Achievements tab

On unlocking the Achievements tab, five achievements are already complete from earlier play, and each is claimed individually for a reward. The full list of achievements can be browsed.

### O28. Character roster collection

The Characters tab shows the characters the player has and all characters yet to unlock, more than 300 in total. Filters include allegiance, faction, role, favorites, activation status and Galactic Legend, with sorting by gear tier, health, speed, potency and power. Characters under collection show shard progress, and a character with enough shards shows a red badge and a green Activate label. Collection tabs are Era Units, Characters, Squads, Ships, Fleets, Journey Guide and Datacrons, of which only Era Units and Characters are open at first.

### O29. Era collection and level

On first opening Collection, eras are introduced as thematic celebrations of stories across the galaxy's history, with era units received automatically just by logging in while the era runs. The Era view shows a total era level with the next reward named, an era currency earned from era-exclusive modes, and seven collectible era units. Era units are distinguished from legacy characters, which are upgraded with gear instead.

---

## Access and eligibility

Player-level gates on nearly every hub table, combined gates on specific features, and gates inside already-open activities make up this section.

### O30. Player-level gates

Almost every hub table is padlocked at first, with tapping one stating the requirement, often through the character standing at it. Stated player level requirements include the newsletter, achievements, daily quests, shipments, cantina battles, challenges, squads, allies, chat, events, the Coliseum, guilds, guild activities, ships and fleets collection tabs, the arena table, galactic tables, galactic war, championships and conquest. Allies opened at level 18 without any prompt, the navigation button simply became usable.

### O31. Combined gate conditions

Several features require more than a player level: dark side battles require three dark side characters and a level, mod battles require a character trained to level 50, mod challenges and mod management require completing specific mod battles, ships require completing fleet commander training events and a level, the shard store requires a character promoted to seven stars, the Journey Guide requires a level or completing a specific battle, datacrons require collecting at least one, and the store's Gifts tab requires a level and joining a guild. Guild raids additionally require joining a guild, a level, and characters at a stated gear level.

### O32. Gates inside activities

Within already open features, access is also staged: hard mode for a stage requires completing that stage on normal, challenge tiers require a player level and required units, relic amplifiers require gear tier 13, and some solo events on the events board are gated behind levels. The next campaign node is released by winning the previous one.

### O33. Pass-reserved quest rewards

Some episode quests can be completed by any player, but their rewards can be claimed only with the Episode Pass. The Episode Pass copy describes exclusive episode quests for faster progress.

---

## Economy and resources

Crystals, credits, ally points, cantina tokens, shards and lightspeed tokens run alongside the store's Bronzium card and shipment tabs.

### O34. Crystals currency

Crystals are the purchasable primary currency, earned from battles and other activities and used for shipment items, packs and data cards in the store, and to refresh timers and energy. Crystal packages are sold for money in the store, and the inbox welcome gift and a login reward day both grant crystals. Featured shipments are priced in crystals or credits.

### O35. Credits currency

Credits are earned from battles and other activities and used to upgrade character levels, abilities, star rarity, gear and mod levels and tiers, as well as some shipment and mod store items. Credits are spent on training, activation, promotion, ability upgrades and shipment purchases and refreshes, and can also be bought with crystals or received in large amounts inside paid bundles.

### O36. Ally points currency

A silver currency described as earned from battles in which the player borrows an ally's character, spendable on Bronzium data cards in the store and items in weekly shipments. Borrowed-unit wins pay ally points, and an extra Bronzium draw costs 250 ally points, exactly the starting balance shown.

### O37. Cantina battle tokens

Cantina battle tokens are earned by winning cantina battles and spent on items in the cantina battle store, priced from 200 to 400 tokens per item. A Redeem button under cantina battles opens the shipments screen.

### O38. Shards and materials

Character shards are counted per character and used to activate and promote that character, coming from hard mode battles, quest rewards, Bronzium draws, shipments, packs and bundles. Training droids come in star grades and are consumed to give character XP. Gear pieces, crafting components and ability materials are held in quantity and spent on their corresponding upgrade tracks.

### O39. Lightspeed tokens

Lightspeed tokens can be applied to individual characters to upgrade their stars, abilities, gear tiers and even relic amplifier levels, described as one of the fastest ways to upgrade a roster. No tokens are held or available at first, and a later search shows them offered as a reward on the Episode Track.

### O40. Unused declared quantities

Several further quantities are described but not seen earned or spent: ship building materials for upgrading ships' levels, abilities and rarity, era currency earned in era-exclusive modes, the episode currency counted toward the Episode Track, and a Guild Activities count. A Large Galactic Enhancement Kit in the store lists further currencies and crafting items not identified by name.

### O41. Bronzium data card

The first item in the store's Featured tab is the Bronzium Data Card, marked free, offering ten free draws a day of an item or character, drawn from more than 200 possible items and 33 possible characters. After a free draw a countdown shows the next free draw in about 9 to 10 minutes, and free draws produced different results each time, shards, crafting items, a character unlock and gear. The draw animation can be skipped.

### O42. Shipment tabs

At level 7, shipments unlock, with Featured Shipments refreshing every few hours and episode shipments refreshing weekly. Tabs listed include Cantina Battles, Guild Activity, Squad Arena, Galactic War, Mods, Fleet Arena, Guilds, Guild Events, Grand Arena, Shard Shop and Conquest, most locked at first, with an Episode Shipments tab appearing later. Featured items include character shards and upgrade items priced in crystals or credits, and the selection can be refreshed for 50 credits.

### O43. Inbox grants and notices

The inbox unlocks after the first login reward claim. A welcome message grants 200 crystals, and claiming it removes the message. Further messages state that a character's shards are now farmable from a specific battle type, and that another character has been added to a list of accelerated characters, increasing its shard supply and shard shop conversion rate, with a link to a forum post on the shard economy. Messages can be deleted or kept.

---

## Social

Allies, borrowed units, ally requests and player profiles run alongside guild and arena surfaces that stay locked throughout.

### O44. Allies screen unlocked

At level 18 the Allies button becomes usable without a prompt or guide. The screen shows an ally count, the player's ally code, and three tabs: Invite, Manage and Request Status. Invite offers a field to enter an ally code, stating that shards and gear are earned by using an ally's hero in combat. No reward is offered for inviting or adding a first ally.

### O45. Borrowed units, sixth slot

The next battle after allies unlock brings a Borrow Units pop-up stating that borrowed units fill the sixth squad slot and that a borrowed unit's leader ability is active during battle. More than ten units are offered from other players even though the player has no allies and has sent no requests. Each option shows the unit's power, its leader ability and the ally points the player will earn. The borrowed unit fights alongside the player's squad, and the selection prompt returns before every battle. Clearing the squad does not remove the selected borrowed unit.

### O46. Ally request after borrowing

After a win with a borrowed unit, the app prompts sending an ally request to that unit's owner, showing a name, guild membership and the unit borrowed. Request Status shows when each request was sent and the recipient's last activity, shown for three recipients as thousands of days ago in each case.

### O47. Player profiles and messages

Opening another player's profile from Request Status shows arena stats and profile details, with options to message or to mute and report. Message opens a chat area in the inbox, and group chats can be created with invited players. A pending ally that does not respond can be removed.

### O48. Guild surfaces behind locks

Guilds appear in several places but never open: the guild table is locked until level 22, the Guild Activities quest tab is locked, guild-related shipment tabs are locked, and guild raids and guild events on the events board state their requirements. Another player's guild name appears in the ally request prompt.

### O49. Arena surfaces behind locks

The arena table is locked until level 28, championships until level 85, and shipment tabs for squad arena, fleet arena, grand arena, galactic war and conquest are locked. Other players' profiles show arena stats sections. The first starter offer's copy promises to crush early game competition.

---

## Reach beyond the app

EA Connect linking, forum links and an email invitation to become allies are the app's routes outside itself.

### O50. EA Connect linking

Beneath the inbox tabs, an EA Connect button offers a seamless cross-platform experience and a reward for connecting, pointing at credits shown as zero. Tapping it opens EA account sign-in with account creation, sign-in by email or phone, and options to stay signed in or sign in as invisible. The reward for connecting was not received, and its amount was not stated beyond the zero figure shown.

### O51. Forum links

A Go button on an inbox message about accelerated characters opens the web browser at the game's forums, as does the inbox Forums tab, unlike EA Connect which opens inside the app. The forum shows recent posts and thread counts in the tens of thousands.

### O52. Email ally invitation

The Allies Invite tab offers an invite by email, opening a pre-written email inviting the recipient to play the game with the sender. No reward to the inviter or the invitee is shown, and no prompt or reminder to invite was seen.

---

## Monetization

Starter deal pop-ups, a five-tab store, crystal and Chromium packs, and an Episode Pass make up this section.

### O53. Starter deal pop-ups

Immediately after naming, a pop-up offers an Ultimate First Order Starter Deal with no price or contents shown, only a Go button. The offer page shows a full five-character squad unlocked at four stars, 500 crystals, credits, training droids, gear and materials, for $1.99, with no close button other than a route back to the store. Each later return to the hub brings another starter deal for a different faction.

### O54. Store tabs

The store has five tabs, Featured, Era Store, Supplies, Crystals and Gifts, with Gifts locked. The Featured tab grows from 14 offers at first to 32 by level 10, including the free Bronzium Data Card, a Hyperdrive Bundle upgrading up to 73 characters and 20 ships for $9.99, and a Darth Vader offer unlocking him at four stars for $9.99.

### O55. Crystal packages

The Crystals tab sells five packages: 610 crystals for $4.99, 1,340 for $9.99, 2,800 for $19.99, 7,370 for $49.99 and 15,710 for $99.99.

### O56. Chromium packs

Chromium Mega Packs cost 2,520 crystals for eight cards, with each card stated at a 20% chance of a character and an 80% chance of a shard set, and one card guaranteed to award a character. A four-card Chromium Data Pack costs 1,330 crystals, and a single Chromium Data Card costs 350 crystals with no guarantee.

### O57. Credit and droid packs

The Supplies tab sells a Credit Data Card giving 30,000 to 90,000 credits with a possible multiplier for 80 crystals, a Credit Ultra Pack giving up to 1.3 million credits for 1,120 crystals, and Training Droid packs for 27 and 74 crystals.

### O58. Prices withheld until payment

Several offer pop-ups show contents and a Purchase button with no price, showing the price only in the payment window after tapping Purchase. A Bounty Hunter Starter Bundle and a Padawan's Ability Bundle both show $4.99 only at the payment step.

### O59. Time-limited character bundles

Character bundles carry countdowns, such as a six-day Darth Vader starter bundle unlocking him at four stars for $9.99 and seven-day offers for other characters at $4.99 to $9.99. A 30-day era character offer for $29.99 appears alongside a free era recovery pack lasting until the end of the era.

### O60. Purchasable calendars

A free calendar named for level 85 offers 30 days of training droids and character shards, with rewards persisting until claimed or the calendar is replaced. A further find-more-calendars control lists a $4.99 calendar with 30 days of rewards and a separate calendar with its own reward set and a shorter purchase window.

### O61. Episode Pass tiers

Activating the Episode Pass offers two tiers. The standard pass is $19.99, unlocking premium rewards on the Episode Track and exclusive episode quests. The higher tier immediately grants 50,000 episode points, advances 10 milestones on the track and unlocks 24 rewards instantly, priced at $49.99.

### O62. Character sources and bundles

The Find control on a character lists where it can be obtained, including quest rewards, specific battle nodes, and a list of bundles and packs. For one character, the list includes a $49.99 bundle, multiple crystal-priced mega packs and data packs, and the Hyperdrive Bundle and Chromium packs.

### O63. May the Fourth bonus

A limited-time offer grants up to 35 bonus crystals on select crystal bundles, still claimable with several days left after the date it references.

---

## Return triggers

Login rewards, a notification pre-prompt, red badge counters and countdown timers on offers and events bring the player back.

### O64. April login rewards

On a second launch, a pop-up shows a monthly login calendar expiring within the month, stating that rewards reset at midnight, cannot be reclaimed if missed, and that daily login progress resets at the start of each month. The calendar runs from day 1 to day 30 for this player regardless of the calendar date, and a later day's claim button states how many more logins are needed. Rewards include credits rising across the month, an ability material, crystals, shards, training droids and special materials. Collecting the day 1 reward is followed by the inbox unlocking.

### O65. Notification permission prompt

On the second launch, the system asks whether the app may send notifications. Later, an in-app pop-up asks the player to turn notifications on to receive updates about events in the galaxy, with a Remind Me Later option beside it. Tapping to turn notifications on at this point returns to the battles screen, since notifications are already on.

### O66. Red badge counters

Red numbered badges appear on the store, Collection, Quests, Inbox and the home button. The store badge marks a free Bronzium draw or free gift packs, the Quests badge marks claimable quests, and a Collection badge marks gear ready to equip without the app explaining what it means when it first appears. A character with enough shards shows a red dot and a green Activate label.

### O67. Countdowns and events board

From the first hub view, timers show a countdown for the Coliseum and for an upcoming character event. Offers carry their own countdowns throughout. The events board, once opened, lists solo events, some gated behind levels, challenges, guild raids and guild events, with an event shown active for weeks ahead.

### O68. Era launch announcements

After the second battle of first launch, a pop-up announces a new era with a new character journey, a new marquee, a new roster of era units and new bosses. A later return, after an unrecorded gap in play, announces a further new era tied to a film release, again with a new marquee, roster and bosses.

### O69. Film tie-in update

Before a later return, the app icon changes to artwork for an upcoming film, and a client update is required before opening. A new loading screen shows characters from the film, and the cantina guide greets the returning player with dialogue referencing the app's redesigned look and a removed character.

### O70. Free character offer

Leaving the events board on a later return brings a free offer expiring in a stated number of days, granting shards for four characters, training droids and credits, framed with the same purchase-limit language as paid offers despite costing nothing. Claiming it delivers the items through the inbox, followed by an Activate Character prompt for the featured character, who can then be equipped and levelled immediately.

### O71. Newsletter pop-up

Trying to return to the home screen around level 10 brings up a newsletter pop-up about the current era. Its Go button, expected to lead to the inbox, instead opens an offer pop-up with its own countdown.
