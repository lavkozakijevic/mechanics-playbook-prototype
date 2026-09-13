# Clash of Clans

**Teaser:** Clash of Clans prices its season pass against a village, a second village, and a clan all at once, but only shows it to players who've already spent six or seven hours building all three.

Clash of Clans is a base-building strategy game in which town hall level gates nearly everything else the product offers: buildings, troops, spells, heroes, cosmetics, leagues, and the game's own season pass. Progress runs on three resource routes that all solve the same problem at once, collectors that fill on their own, raids that take resources from other players, and gems that convert directly into resources, with every wait in the game offering a gem price to end it early. What's accumulated is also exposed: resources sit visible to other players except behind a timed shield, and a clan, reachable only after rebuilding a ruined castle, adds a second, socially gated layer on top of the solo loop, including the one surface where another person's decision controls what the player can do next.

---

## System view

Clash of Clans is a complex system. Town hall level is the spine: it gates nearly every other mechanic, sets the size of the resource problem the rest of the system exists to solve, and the pass, the clan requirements, and the reward structure all sit downstream of it. Everything else, the three resource routes, the shield that protects what's been built, the clan layer, and the monetization layered on top, exists either as a condition on reaching the next town hall level or as a way of getting there sooner.

---

## Mechanics

### Achievement

**What was observed:** Clash of Clans keeps a named achievement list across separate categories for the home village, the builder base, and the clan capital, each entry carrying up to three stars and paying experience points and gems on attainment. Observed criteria include connecting an account, upgrading the town hall to level 3, unlocking specific troops, and social actions like donating or requesting reinforcements. One criterion, linking the account, pays roughly ten times the experience and gems of an ordinary progression criterion sitting beside it.

**How it is presented:** The list sits in a profile view split by village, each entry showing its current star count and reward. Newly attained criteria don't always register immediately: the account-linking achievement didn't update until the app was closed and reopened.

**What is worth noting:** Clash of Clans pays a single criterion, linking an external account, at roughly ten times the reward of an ordinary progression achievement next to it. Whatever a game rewards at ten times the going rate is worth reading as the action the product cares most about a new player taking.

**Key findings:**

- Achievement lists exist separately for the home village, the builder base, and the clan capital.
- Linking an account pays 100 experience points and 50 gems; upgrading the town hall to level 3 pays 10 experience points and 5 gems.
- One criterion requires requesting reinforcements, which cannot be done without joining a clan.
- The account-linking achievement did not register until the app was closed and reopened.

**Screenshots needed:** the achievements list showing the linked-account criterion's reward beside an ordinary progression criterion.

### Challenge

**What was observed:** Clash of Clans runs two separate structures under this shape. A set of starter challenges pays points toward a single reward ladder for actions like buying wall pieces or destroying buildings in battle, with further challenges unlocked by raising the town hall level rather than by a calendar. Separately, a clan war is a two-day contest between two clans, scored in stars, with a stated tie rule and a concluded result that pays bonus loot to the winner and takes most of it from the loser.

**How it is presented:** Starter challenges sit behind a shield-marked button with a running point total, introduced by the game's guide character. A clan war shows both clans' running star totals and destroyed bases while in progress, with scouting, replays, and per-member records available alongside it.

**What is worth noting:** Both structures are bounded objective instances with a tracked state, but neither renews on a calendar the way a daily or weekly quest would: starter challenges expand only when the town hall levels up, and a clan war ends after its own two-day window rather than resetting on a schedule.

**Key findings:**

- Starter challenges are worth 1,050 points against a ladder running to 5,000; more unlock only by raising the town hall level.
- Observed starter challenges include destroying 50 buildings in multiplayer battles for 125 points and upgrading two elixir collectors for 150 points.
- A clan war runs a fixed two-day contest, scored in stars, with a stated tie-break by total destruction.
- One live war showed the user's clan at 24 stars against the opponent's 3, with per-member records available.

**Screenshots needed:** the starter challenges screen showing the point ladder, and the live clan war screen showing both clans' star totals.

### Clan / Guild

**What was observed:** A clan is a persistent group with its own roster, badge, settings, and state: a treasury, a war record and log, a level requirement structure, a position in ranked clan lists, and a clan capital funded by member contributions. Joining one requires rebuilding a ruined clan castle first, and membership unlocks troop donation, clan wars, clan games, the clan capital, and clan chat.

**How it is presented:** A clan finder opens by asking for a language, then lists clans with filters for location, war frequency, member requirements, and league. Creating a clan instead of joining one exposes the same attributes, set by the creator, for 40,000 gold. Chat carries its own rules notice, and the profile splits into home village, builder base, and clan capital views.

**What is worth noting:** Clash of Clans requires rebuilding a specific structure, the clan castle, before any social surface becomes reachable at all, and the achievement list pushes toward that same rebuild by naming a reinforcement request as one of its criteria. The social layer isn't discoverable early; it's gated behind a repair the player has to prioritize on purpose.

**Key findings:**

- Joining or creating a clan requires a rebuilt clan castle, itself gated behind an elixir storage upgrade.
- Creating a clan costs 40,000 gold; joining one is free once the castle is rebuilt.
- Clan chat carries a rules notice, and the first observed message was an unsolicited external promotion.
- A clan capital exists, funded by member-contributed currency, but was never entered during the sessions.

**Screenshots needed:** the clan finder with its filter list, and the clan war screen showing the treasury and war record.

### Cosmetic Customization

**What was observed:** A cosmetics tab, unlocked at town hall 4, sells alternative presentations for the village, the heroes, the second village's character, and the boat, priced from $3.49 to $16.99. A hero skin is presented as an exclusive reward on the paid pass lane, and the season's own theme is sold separately as a scenery with an in-app preview.

**How it is presented:** Sceneries are shown with a preview of how the village would look before purchase. Higher-priced sceneries are tied to specific occasions. Decorations are sold from the same catalogue, priced in whichever currency matches their tier.

**What is worth noting:** Nothing observed tied a cosmetic to a rule, a cost, or an outcome, including the decorations that physically occupy grid space the way a functional building would; they're presentation content dressed as village objects, not configuration.

**Key findings:**

- Standard sceneries cost $3.49; two occasion-tied sceneries cost $16.99.
- The current season's own scenery is sold separately for $4.99 with a village preview.
- A hero skin is the headline exclusive reward on the paid pass lane, offered as a choice between two named skins.
- No cosmetic was observed to change a rule, cost, or outcome.

**Screenshots needed:** the cosmetics tab showing scenery pricing and the village preview.

### Experience Points

**What was observed:** Clash of Clans grants a quantified amount of experience for stated actions, mostly achievement attainment, and accumulates it toward an account level that rose from 1 to 4 within a single session. The points were never observed to be spent on anything; their only stated function is advancing the account level.

**How it is presented:** Achievement entries state the exact experience figure attached to each criterion. The account level sits at the top of the screen with a partial-progress indicator, separate from every other progress marker in the game.

**What is worth noting:** Experience points do double duty here without ever being exchangeable for anything: they're the accumulating value behind the account level, and the level they build toward is itself a gate on at least one purchase, a decoration priced at one million gold that also requires experience level 75.

**Key findings:**

- Linking an account grants 100 experience points; an ordinary town hall upgrade grants 10.
- The account level rose from 1 to 4 within a single session.
- One decoration requires experience level 75 in addition to its stated price.
- Experience points were never observed being spent directly.

**Screenshots needed:** an achievement entry showing its stated experience grant, and the account level indicator with its partial-progress bar.

### Gifting

**What was observed:** Clan members can send troops and spells to one another, held in the receiving member's clan castle for use in that member's own battles and defenses. Both directions, donating and receiving, are counted as separate achievement criteria, and a paid pass perk shortens the wait on a troop request.

**How it is presented:** The clan castle description states it can hold reinforcement troops or spells sent by clanmates. A gold pass perk is listed as reducing the wait on a clan castle troop request by 90 percent.

**What is worth noting:** The transfer itself was never performed during any session, so what's established here is the structure the game describes, a directed, non-reciprocal transfer between identified accounts, rather than its interface or its limits in practice.

**Key findings:**

- Troops and spells sent by clanmates are held in the receiving member's own clan castle.
- Achievement criteria exist separately for troops donated and troops received.
- A paid pass perk reduces the wait on a clan castle troop request by 90 percent.
- No donation or request was actually performed during the sessions.

**Screenshots needed:** the clan castle screen showing its reinforcement-holding description.

### Hard Currency

**What was observed:** Gems are Clash of Clans' paid currency, sold in six packages from $0.49 to $49.99, and spent on builder huts, instant build completion, magic shields, decorations, and direct conversion into gold and elixir. Gems are also granted without payment through achievements and clan prizes.

**How it is presented:** Every waiting state in the game, a build timer, a busy builder, a training queue, carries its own gem price to end it immediately, shown on the same screen as the wait itself.

**What is worth noting:** Gems sit at the center of a single substitution the whole game runs on: paying money buys gems, gems buy time back from every wait in the game, and the same gems convert directly into the two resources that raiding would otherwise take hours to gather.

**Key findings:**

- Six gem packages range from $0.49 for 80 gems to $49.99 for 14,000.
- Gems convert directly into gold and elixir at a stated rate.
- A second builder hut costs 250 gems; up to five are buildable.
- Gems are also earned for free through achievements and clan war league prizes.

**Screenshots needed:** the gem package pricing screen, and a wait screen showing its gem-priced speed-up option.

### Leaderboard

**What was observed:** Four ordered views rank other identified players and clans by trophy count: top players globally, top players nationally, top clans globally, and top clans within a clan war league scope.

**How it is presented:** The leaderboard sits behind its own tab with four sub-views. The user's own absence from every list, shown as an unranked state on the profile, is itself part of what the screen communicates.

**What is worth noting:** The game keeps its comparative-standing surface, the leaderboard, separate from its threshold-based tier surface, the league system: a player can hold a specific league tier without ever appearing on, or checking, a leaderboard populated by other named players and clans.

**Key findings:**

- Four leaderboard views exist: top players globally, top players nationally, top clans globally, and top clans by war league.
- The top global entry observed held 88 attacks won and roughly 5,814 trophies.
- The user's own position was unranked and did not appear on any list.

**Screenshots needed:** the four-tab leaderboard view.

### Leveling

**What was observed:** Clash of Clans maintains at least three separate leveled states. The town hall holds a numbered level running to 18 that decides what else in the product is available, advancing only once a resource cost and a prerequisite building checklist are both satisfied; the second village runs the identical structure on its own builder hall. A separate account level advances as experience points cross a threshold. Both villages also maintain an ordered league tier, from skeleton to legend in the home village and wood 5 to diamond in the second, that rises and falls with trophies won and lost and sets the rate battles pay.

**How it is presented:** Every town hall upgrade screen lists exactly what it unlocks and what capacity it raises before the player commits. The account level sits at the top of the screen with its own partial-progress indicator. League tier is shown as a named rank tied to a trophy count, with a dedicated screen showing what each tier pays.

**What is worth noting:** The town hall level is the one that everything else in the game answers to, buildings, troops, spells, heroes, cosmetics, and even the pass are all conditioned on it, while the account level and the league tier run as smaller, parallel states that never gate anything beyond a single decoration and a single reward rate respectively. Three things in this game are called levels, but only one of them is load-bearing.

**Key findings:**

- The town hall runs a numbered level to 18, gated by both a resource cost and a prerequisite building checklist.
- The account level rose from 1 to 4 within a single session, driven by experience points.
- League tiers run skeleton through legend in the home village and wood 5 through diamond in the second, with the stated rule that more trophies raise the tier.
- The trophy thresholds separating league tiers were never shown; only the product's own statement of the rule was observed.
- The second village runs its own town-hall-equivalent level, the builder hall, on the identical structure.

**Screenshots needed:** a town hall upgrade screen listing its unlocks, and the league tier screen showing tier-by-tier reward rates.

### Milestone

**What was observed:** The starter challenge point total is one continuous measure, and Clash of Clans separately recognizes defined totals along it, from 100 to 5,000, releasing a reward each time one is crossed.

**How it is presented:** The reward ladder is shown alongside the point total, with claimed rewards, 2,000 gold, then elixir, then a builder's byte, visibly distinct from unclaimed ones further along.

**What is worth noting:** The ladder pays out further than the challenges available at any one time can fund: the active challenges add up to 1,050 points against a ladder running to 5,000, so reaching the later thresholds requires the town hall to level up first, which is what unlocks more challenges to complete.

**Key findings:**

- The reward ladder runs from 100 to 5,000 points.
- Rewards claimed so far include 2,000 gold, 2,000 elixir, 1,000 gold, and a builder's byte.
- The final listed reward instantly finishes any building upgrade in either village.
- Active challenges total only 1,050 points, short of what the full ladder requires.

**Screenshots needed:** the reward ladder showing claimed and unclaimed thresholds.

### Passive Construction

**What was observed:** Starting a build or upgrade creates an instance that advances on its own timer, without further input, and completes into a new persistent state with higher stated capacity or hit points, whether or not the app is open. How many instances can run at once is capped by the number of builder huts owned.

**How it is presented:** A builder figure appears at the structure while it works. Timers grow from seconds at the earliest levels to twelve hours by town hall 6, and returning after an absence lists everything that finished while away.

**What is worth noting:** The same capacity that limits how many things can be under construction at once is itself for sale, a second builder hut costs gems, and so does skipping the wait on any one build directly, which means the game prices both dimensions of this mechanic, how many and how long, separately.

**Key findings:**

- Construction advances on a timer without further input, including while the app is closed.
- Build times grow from 10 seconds at town hall 2 to 12 hours at town hall 6.
- The number of builder huts owned caps how many constructions can run at once, up to five.
- Starting a third construction with two builders is blocked with a message that all builders are busy.

**Screenshots needed:** an in-progress construction showing its builder figure and timer, and the return-from-absence summary listing completed upgrades.

### Piggy Bank

**What was observed:** Clash of Clans saves bonus loot from battles into a reserve across the season and releases it at the season's end, with separate stated caps for each of the game's five currencies. A paid pass perk multiplies the reserve's payout by five at release.

**How it is presented:** The reserve is described on the pass screen rather than its own dedicated surface, and a season-end message confirms a release occurred.

**What is worth noting:** The reserve's own contribution behavior was never seen operating, only described and then confirmed as paid out at a season boundary, so what's established here is that the reserve exists and releases on schedule, not the rate at which battles actually fill it.

**Key findings:**

- The reserve caps at 2 million gold, 2 million elixir, 20,000 dark elixir, and 800,000 of each second-village currency.
- A paid pass perk multiplies the reserve's contents by five at release.
- The free lane carries no such multiplier.
- A season-end message confirmed a release occurred, paying out accumulated rewards.

**Screenshots needed:** the pass screen describing the reserve and its multiplier perk.

### Seasonal Progression Pass

**What was observed:** A season track runs for a stated 27 days, advanced by completing task cards that name ordinary actions like starting a building upgrade, with the next card released on its own timer rather than on demand. The track carries two lanes attached to the same 40 positions on the paid side and 30 on the free side, with the paid lane costing $4.99 and unlocking exclusive items the free lane never offers.

**How it is presented:** The pass doesn't exist at all until town hall 7, appearing immediately once that upgrade completes. Its own info button opens the developer's website rather than an in-game explanation.

**What is worth noting:** By the time this pass becomes available, the player already holds a village, a second village, a clan, and an account level, and the pass prices its perks against every one of them at once, builder speed, research, a clan castle request, both villages' currencies, and the piggy bank multiplier, rather than against any single system.

**Key findings:**

- The pass costs $4.99 and doesn't appear until town hall 7, six or seven hours into play by the narrator's estimate.
- The free lane carries 30 rewards; the paid lane carries 40, with every fourth position paying nothing on the free side.
- The season itself runs 27 days, ending and paying out before a new one opens.
- A hero skin choice is the pass's headline exclusive reward.

**Screenshots needed:** the pass screen showing both reward lanes, and the season countdown at the top of the track.

### Soft Currency

**What was observed:** Gold and elixir are earned from collectors and raid loot, held in capped storage, and spent on nearly everything the player builds or trains; dark elixir joins them at town hall 7 with its own drill and storage. The second village runs two further currencies, earned and spent entirely within its own loop, never observed usable in the home village. A separate balance, league medals, buys items from its own shop tab and is stated to come from clan war leagues, though none were held or spent during the sessions.

**How it is presented:** Gold and elixir each show a stated maximum and production rate on tap. The second village's currencies carry their own icons and their own star-bonus payout table. League medals sit in a dedicated shop tab showing a balance of zero against priced items.

**What is worth noting:** Clash of Clans keeps five separate earned currencies, three of them fully walled off from each other by village, and the fifth, league medals, sits priced and ready in its own shop despite the game never actually granting any during the sessions observed.

**Key findings:**

- Gold, elixir, and dark elixir are earned from collectors and raids and spent on nearly every home-village action.
- The second village runs two of its own currencies, not usable in the home village.
- League medals are stated to come from clan war leagues; the balance observed was 0 of a possible 2,500.
- Gems can also be converted directly into gold or elixir.

**Screenshots needed:** the resource bar showing gold, elixir, and gems together, and the league shop showing the zero medal balance against priced items.

---

## Onboarding and first run

Clash of Clans opens with a fully scripted sequence, from the store listing through consent screens to a guided first attack, before naming the player or leaving them to explore on their own. This section covers that opening in full.

### O1. Store listing before install

The store page presents Clash of Clans with an aggregate rating, an Editor's Choice award, a video preview, screenshots, and a banner for the current season framed as a new season. The page's own description frames the product around building a village, raising a clan, and competing in clan wars.

- The app holds 4.8 stars from 2.7 million ratings, an Editor's Choice award, and a 13+ age rating.
- The install is 634 MB, with support for English and 20 more languages.
- The featured event on the page, Sound of Clash, is described as a new season.
- The page's review summary states that users find the game fun and engaging and cite its strategic gameplay, graphics, and progression.

### O2. Launch disclosure and consent sequence

Before any play, Clash of Clans presents a free-to-play notice, a terms acceptance, an age entry, a privacy and cookie consent, and a tracking permission request, in that order.

- The opening notice states the game is free to play but progress can be sped up with purchases, and that this can be disabled in device settings.
- Accepting the terms is the only way forward from that screen.
- The privacy notice offers deny all or accept all.
- The tracking request asks to allow tracking across other companies' apps and websites.

### O3. Guided cannon build

A recurring character introduces the village, an enemy appears, and the app directs the first build with an arrow pointing at the shop button, framed as a defensive necessity. The shop opens on a four-tab catalogue of army, resources, defenses, and traps, and an info button explains that defenses can't shoot while being upgraded.

- The shop's four tabs are army, resources, defenses, and traps.
- An arrow directs the first cannon's placement, with the instruction to protect the town hall.
- At the moment of placement, the app states that gems can speed things up.

### O4. Scripted first defense

Immediately after the cannon is placed, a scripted attack occurs and is repelled, and the app explains that buildings repair themselves.

- The attack is triggered by a button reading bring it on.
- The cannon takes damage and is restored without user action.
- The explanation given is that in these magical lands buildings repair themselves.

### O5. Scripted first attack with granted troops

Clash of Clans grants three troops and runs a first attack in which deployment is taught on screen, ending in a full-destruction victory and a resource grant.

- The instruction reads tap multiple times in an empty area to deploy your troops.
- The result screen shows 100 percent damage, victory, and a grant of 500 gold and 500 of a second resource.
- The deployed troops are consumed and not returned after the battle.
- The result screen shows silhouettes of two unit types not yet available.

### O6. Directed economy build sequence

The app directs, one at a time, the construction of a builder hut, an elixir collector, an elixir storage, a gold storage, and barracks, each introduced by the guide character and routed through the shop with an arrow.

- Each step is framed as a consequence of the last: elixir is needed alongside gold, then a storage is needed so none is wasted.
- A second builder can be hired for 250 gems, allowing two constructions at once; up to five builder huts are buildable.
- The first collector offers to finish construction immediately for one gem.

### O7. First troop training and the army board

The app directs training of 20 troops and, in doing so, exposes a board listing units, spells, siege machines, reinforcements, and a hero locked behind stated town hall levels.

- Army capacity at this point is a maximum of 20 units.
- Spells unlock at town hall 5, siege machines at town hall 12, and a hero at town hall 7.
- Reinforcements require the ruined clan castle to be rebuilt first.
- Barracks upgrades are greyed out until town hall 2.

### O8. Naming after the first self-directed attack

Clash of Clans asks the player to choose a name only after the first attack they chose to launch themselves, stating that the name is shown to other players and can be changed later.

- The naming prompt appears after a victory screen, not at first launch.
- The app states the name can be changed later in settings.

### O9. Notification permission requested mid-flow

The system notification prompt appears during the guided sequence with no preceding explanation screen, directly after the instruction to upgrade the town hall and battle for more gold.

- No pre-prompt or preparation screen precedes the system request.
- It appears right after the instruction to upgrade the town hall.

### O10. Tracking re-prompt after device-level refusal

After tracking was blocked at the device level, Clash of Clans shows its own message asking the user to enable tracking in system settings and try again.

- The message states tracking requires enabling it in system settings.
- The prompt was dismissed and play continued without it.

### O11. Interface revealed in stages

After the first town hall upgrade, a group of new elements appears at once on the main screen, several animated to draw attention.

- New elements include a rank indicator, a leaderboard button, a join button, an attack button, a shield countdown, a calendar, a task list, and a suggested-upgrades counter.
- Two arrows pulse and the shop is highlighted with a moving glow.
- The same staged reveal recurs again at town hall 3 and town hall 4.

### O12. Starter challenges introduced

A shield-marked button opens a set of starter challenges, each worth points toward a separate reward ladder, introduced by the guide character.

- Active challenges are worth 1,050 points in total, starting from zero.
- Observed challenges include getting 25 wall pieces for 50 points and destroying 50 buildings in multiplayer battles for 125 points.
- The rewards view states more starter challenges unlock by upgrading the town hall.

### O13. Account linking flow

The settings menu shows the account as disconnected and offers a linking flow requiring an email address and a six-digit code, with no third-party sign-in options.

- The linking screen states the account safeguards the game and allows play on multiple devices.
- For young players, the email is described as that of a trusted adult.
- Only email is offered; no Apple, Facebook, or Google option is present.
- The corresponding achievement did not register until the app was closed and reopened.

### O14. Village obstacles present from the start

The starting village contains trees, stumps, and stones that occupy grid space and must be paid for to remove.

- A trunk costs 1,000 elixir, mushrooms 100 elixir, and a stone 20,000 gold.
- A ruined clan castle and a boat are present in the same starting state, each requiring payment to restore.

---

## Core loop and automation

Clash of Clans settles into a repeating sequence almost immediately: collect, build, train, attack, and start the next upgrade with whatever the attack paid for. This section covers that loop and the systems, timers, and logs running underneath it.

### O15. The repeating loop

Play settles into a repeating sequence of collecting resources, starting upgrades, training troops, attacking another village for loot, and returning to start further upgrades, recorded across all four sessions.

- Loot taken from an attack is the input to the next upgrade; upgrades raise storage and production, which raise what can be afforded.
- The loop is interrupted by waits rather than by any per-attempt limit on attacking.

### O16. Builder slots limit parallel construction

The number of builder huts owned sets how many constructions can run at once; with two builders, a third upgrade can't be started.

- The message given is that all builders are busy.
- Attempting a third upgrade offers to complete a running build and free a builder for one gem.
- Up to five builder huts are buildable, at 250 gems each.

### O17. Construction advances without further input

Once a build or upgrade is started, it advances on a timer and completes without further construction actions, including while the app is closed.

- A builder figure is shown working on the structure during the process.
- On return after an absence, the app lists upgrades that completed while away.
- Completion changes the structure to a new persistent level with higher stated capacity or hit points.

### O18. Timer durations lengthen with progression

Build times grow from seconds at the first levels to hours at later ones.

- Town hall 2 takes 10 seconds; barracks upgrade takes 15 seconds.
- Town hall 3 takes 30 minutes, noted as the longest upgrade seen so far.
- Town hall 6 takes 12 hours.

### O19. Speed-up offered at every wait

Every observed waiting state carries an offer to end it immediately for gems.

- One gem finishes an elixir collector; 10 gems finish a 30-minute town hall upgrade; one gem frees a busy builder.
- The narrator uses gems to complete town hall upgrades rather than wait, in sessions 3 and 4.

### O20. Collectors accumulate and require manual collection

Resource buildings produce over time and display a marker when there's something to collect; tapping transfers the output to storage.

- Tapping a currency display shows its maximum and its production per hour.
- Production continues while the user is away and waits to be collected on return.

### O21. Deployment rules and absence of target control

Troops are deployed by tapping or holding on the map and then act on their own; the user can't direct which structures they attack.

- Deployed troops are consumed whether the attack succeeds or fails.
- Defensive buildings aren't prioritised by default.
- The planning window is 30 seconds in the home village and 60 seconds in the second village.

### O22. Battles can be ended or abandoned freely

An end battle button closes an attack without consequence, and the same battle can be re-entered afterward.

- No attempt counter, entry cost, or cooldown was observed on ordinary attacks.

### O23. Opponent search with loot disclosed in advance

The attack screen offers single player, multiplayer, and practice modes, states the loot available before the attack begins, and allows skipping to another opponent.

- Available loot is stated as a gold figure and an elixir figure before committing.
- A next button searches for another opponent; the narrator skips several times comparing loot against visible defenses.
- Regular battles are stated not to cost trophies.

### O24. Defense log, replays, and live viewing

Clash of Clans records attacks made against the user, offers replays, and in the second village allows watching an attack live.

- A defense log lists who attacked and what was taken.
- In the second village, a live notice allows watching an attack as it happens, with the outcome reported as a percentage.
- War attacks can also be replayed after the war, with older wars available in a war log.

### O25. Layout editor

A layout editor unlocks at town hall 3, allowing the village to be rearranged and alternative layouts kept.

- The editor offers an active village selection and the ability to move buildings.
- War bases are redesignable separately during a war preparation day.

### O26. Laboratory research

A laboratory can be built that upgrades troops and spells, with each unit upgraded separately, paid in elixir.

- The introduction text states research makes spells and troops harder, faster, and stronger.
- The second village has its own research facility, a star laboratory, giving troops special abilities.

### O27. Temporary boosts and magic items

Clash of Clans grants and sells consumable items that temporarily change rates or instantly complete work.

- A builder's byte makes builders work twice as fast for one hour, usable only in the home village within 24 hours of claiming.
- Reaching town hall 4 granted three three-day boosts: a star bonus boost, a resource boost, and a power boost.
- A book of building instantly finishes any upgrade in either village; a wall ring instantly upgrades a wall piece.

---

## Goals and progression

Town hall level is what nearly every other goal in Clash of Clans points back to, but it isn't the only progression state the game maintains. This section covers the town hall, the account level, the starter challenge ladder, and the season track that opens once the town hall reaches level 7.

### O28. Town hall level as the master progression state

The town hall holds a numbered level that determines what else in the product is available, and raising it is the stated purpose of most activity.

- Levels 1 to 18 are selectable as a minimum requirement when creating a clan.
- The cost escalates sharply: 4,000 gold for level 2, 25,000 for level 5, 150,000 for level 6, and a stated one million for the level after 6.
- The narrator reaches town hall 4 in session 1, 5 in session 2, 6 in session 3, and 7 in session 4.

### O29. Prerequisite buildings gate the next town hall level

The town hall can't be upgraded on resources alone; a checklist of buildings must exist first.

- The message reads upgrade locked, build the following buildings to unlock the next town hall level.
- In session 1, the listed prerequisites were another cannon and an archer tower.
- Meeting the checklist consumed resources that had been saved for the upgrade itself, delaying it further.

### O30. Advisory warning before a town hall upgrade

Before the town hall 5 upgrade, the app interrupts with a warning advising against the upgrade the user is entitled to make.

- The text warns that upgrading will bring stronger opponents and recommends upgrading attack strength first.
- A continue option proceeds regardless.

### O31. Chief's Journey preview

A Chief's Journey view shows how the town hall progresses and what arrives at later stages.

- A scenery selector in the same area shows classic and jungle sceneries, with others requiring town hall levels not yet reached.

### O32. Account experience level

A separate numbered account level sits at the top of the screen with a partial-progress indicator, rising as experience points accumulate.

- Levels 2, 3, and 4 are reached during session 1.
- Achievements state explicit experience grants, for example 100 points for linking the account and 10 for a town hall upgrade.
- An experience level of 75 is required for one purchasable decoration.

### O33. Achievements with three tiers each

A profile achievements list holds named criteria, each carrying up to three stars and granting experience points and gems on attainment.

- Observed entries include connecting an account for 100 experience points and 50 gems, and upgrading the town hall to level 3 for 10 experience points and 5 gems.
- Separate achievement lists exist for the home village, the builder base, and the clan capital.
- One achievement requires requesting reinforcements, which requires clan membership.

### O34. Starter challenge points and the reward ladder

Completing starter challenges pays points into a single running total, and defined point totals along that total release rewards.

- The ladder runs from 100 to 5,000 points.
- Claimed rewards include 2,000 gold, then elixir, then 1,000 gold, then a builder's byte.
- Active challenges total only 1,050 points, short of the full ladder, so more challenges must be unlocked to reach later thresholds.

### O35. Suggested upgrades panel

A counter at the top of the screen holds a short list of suggested next builds, refilling with new suggestions once its entries are completed.

- The counter reads two out of two, falling to one out of two when one is taken.
- A separate suggestion surface later appears for troop upgrades.

### O36. Trophy leagues in both villages

Both villages maintain an ordered series of named leagues the user moves through by winning trophies, with the league determining reward rates.

- The home village list runs skeleton, barbarian, archer, and onward to legend, locked until town hall 7.
- The second village list runs wood 5 through diamond, in five steps at the lower tiers and three at several higher ones.
- The trophy thresholds themselves were never shown.

### O37. Season track and task cards

After the town hall 7 upgrade, the app introduces a season track advanced by completing task cards, with the next card released on a timer.

- The card in view held starting any building upgrade and starting the boat research.
- The card stated the next task card unlocks in 19 hours and 20 minutes.
- Whether cards refresh on a fixed daily or weekly cadence wasn't shown.

### O38. Gold pass and silver pass reward tracks

The season track carries two parallel lanes, a silver lane available without purchase and a gold lane unlocked for money, attached to the same ordered positions.

- The gold pass costs $4.99; the season is stated as ending in 27 days and 19 hours.
- The reward list holds 40 gold lane rewards and 30 silver lane rewards, with every fourth position carrying no silver reward.
- A hero skin is presented as an exclusive gold pass reward, with a choice between two named skins.

---

## Access and eligibility

Nearly every gate in Clash of Clans reads on the town hall level, with a smaller set of conditions layered on top for specific systems. This section covers what the town hall gates directly, and the separate requirements behind the clan, the second village, and the pass.

### O39. Town hall level gates content across the product

The town hall level is the stated condition on buildings, troops, spells, heroes, modes, cosmetics, and decorations alike. Barracks upgrades require town hall 2; practice mode unlocks at town hall 4; spells at town hall 5; ranked battle and a hero at town hall 7; siege machines at town hall 12; a free eagle monument decoration at town hall 17. The same gate message recurs across every session recorded.

- Barracks upgrades require town hall 2; spells require town hall 5; a hero requires town hall 7.
- Siege machines require town hall 12; a free decoration requires town hall 17.
- The same "upgrade your town hall to unlock" message recurs across all four sessions.

### O40. Experience level gates a purchasable decoration

One decoration can't be bought even with its price held, because it also requires experience level 75. A statue costs one million gold and requires that level; the narrator notes that holding the gold alone wouldn't allow the purchase.

- A statue decoration requires both one million gold and experience level 75.
- Holding the gold price alone does not unlock the purchase.

### O41. Clan access gated behind a repaired building and a storage upgrade

Clan features are unavailable until a ruined clan castle is rebuilt for 10,000 elixir, which itself requires raising elixir storage capacity to hold that amount first. The join screen states that a clan gives free army donations and unlocks clan wars, clan games, clan capital, and clan chat. Once rebuilt, the clan castle holds the treasury and any reinforcements sent by clanmates.

- Rebuilding the clan castle costs 10,000 elixir.
- Elixir storage must be raised before the cost can even be held.
- The rebuilt clan castle holds both the treasury and reinforcement troops.

### O42. Creating a clan costs resources

Creating a clan rather than joining one costs 40,000 gold.

- Clan creation costs 40,000 gold, a separate cost from joining.

### O43. War participation gated by clan leadership

The war surface is fully visible while attacking within it is withheld, with the decision resting on another person: the status shown is war spectator, with a note to ask a clan leader or co-leader to be picked next time. Scouting, war stats, and replays remain available to a spectator. The war information text states that attacks are limited during a war, so a bounded allowance exists that the session couldn't exercise.

- Spectator status still allows scouting, war stats, and replays.
- Being picked to attack in a war rests on a clan leader or co-leader's decision.
- War attacks are stated to be limited in number, though the limit itself wasn't observed.

### O44. Clan war leagues gated by clan size and a signup window

The clan war leagues event requires a minimum of 15 clan members and a leader signing up within a stated window. Sign-up was shown ending in 8 hours 20 minutes, with clan leaders given two days from the event start. Normal clan wars remain available to non-participating clans while league sign-up is open.

- Clan war leagues require at least 15 clan members.
- Clan leaders get a two-day window from the event start to sign up.
- Ordinary clan wars stay available to clans not participating in the league event.

### O45. The second village gated behind repairing the boat

A separate village with its own buildings, currencies, leagues, and research opens only after a broken boat in the home village is repaired. Arrival is presented as a ruined village that must be cleaned and rebuilt, with a second character appearing afterward with a wish list of buildings. The closing instruction states that both villages now need attention.

- The second village unlocks only after the home village's boat is repaired.
- A second non-player character appears once the new village is cleaned up.
- The game explicitly states both villages require ongoing attention afterward.

### O46. Builder hall levels gate the second village

The second village runs its own numbered hall level that gates removing obstacles and building further structures. Builder hall level 3 is required to remove obstacles blocking construction, at a stated cost of 3,000. Troop production there is capped until an army camp is built, and gems speed construction the same way they do in the home village.

- Builder hall level 3 is required to clear obstacles, costing 3,000.
- Troop production in the second village is capped until an army camp is built.
- Gems speed up construction in the second village the same way as the home village.

### O47. The pass gated until town hall 7

No pass surface existed at town hall 4, 5, or 6; it appeared immediately after the town hall 7 upgrade completed, alongside a town hall 7 pack in the store. The narrator recorded more than two hours of play at town hall 4 with no pass, and estimates at least six or seven hours of total play to reach town hall 7. Home village leagues carry the same town hall 7 requirement.

- The pass does not exist before town hall 7.
- The narrator estimates six to seven hours of play to reach town hall 7.
- Home village leagues share the same town hall 7 gate as the pass.

---

## Earning and utility

Clash of Clans runs five separate earned currencies across two villages, plus a paid one that converts into both. This section covers what each is spent on and the storage and treasury systems that hold them.

### O48. Three home village resources

The home village runs gold, elixir, and gems, with gold and elixir produced by buildings and taken in raids, and gems held in a separate balance.

- Gold and elixir both have storage buildings, stated maximums, and stated production per hour.
- Gold and elixir are spent on buildings, upgrades, walls, troop training, research, obstacle removal, and decorations.
- Gems are spent on speed-ups, builder huts, magic shields, decorations, and conversion into gold and elixir.

### O49. Dark elixir added at town hall 7

A fourth home village resource, dark elixir, appears with the town hall 7 upgrade, together with its own drill and storage.

- It appears first in the treasury, then as buildable resource buildings in the shop.
- The pass lists filling dark elixir storages as a gold lane reward, and a piggy bank cap of 20,000 dark elixir.

### O50. Gem packages priced in money

Gems are sold in six packages ranging from $0.49 to $49.99.

- 80 gems for $0.49, 500 for $2.49, 1,200 for $4.99, 2,500 for $9.99, 6,500 for $24.99, 14,000 for $49.99.

### O51. Gems convert into resources

Gold and elixir can't be bought with money directly; they're bought with gems, which are bought with money.

- Stated conversions: 400 gold for two gems, 1,531 gold for six gems, 400 elixir for two gems, 1,049 elixir for five gems.
- The conversion is framed on screen as filling storages by a percentage.

### O52. League medals and the league shop

A further balance, league medals, buys items from a dedicated shop tab, and the user held none of it.

- The balance was shown as 0 out of 2,500.
- Prices observed include a giant gauntlet at 750 medals and 2.5 million gold for 15 medals.
- Medals are stated as a reward from clan war leagues, so the earning path was described but not exercised.

### O53. Second village currencies

The second village runs its own currencies, described by the narrator as square gold tokens and amethyst droplets.

- A star bonus in the second village paid 13,000 of each.
- The piggy bank lists caps of 800,000 for each of the two second village currencies.
- Gems are shared across both villages; the second village currencies weren't observed usable in the home village.

### O54. Storage capacity constrains progression

The amount that can be held is capped by storage buildings, so an upgrade costing more than current capacity can't be paid for until storage is raised first.

- The narrator identifies needing a bigger gold storage as the blocker on a 25,000 gold town hall upgrade.
- A storage upgrade is described as increasing capacity by 3,000 and raising hit points.

### O55. Treasury holds bonus loot separately

Bonus loot is paid into a treasury held in the clan castle rather than ordinary storage, transferred to storage by a separate action.

- The transfer prompt reads transfer all resources from treasury to your storages.
- War bonus loot is delivered to the treasury at the end of a war, mostly lost if the clan loses.

### O56. Star bonus scales with league

Winning multiplayer attacks pays a star bonus into the treasury, at a rate stated to depend on the current league.

- The stated rule in the second village is that a higher league pays more gold per star.
- A town hall 4 boost multiplied the star bonus by four for three days.

### O57. Defending earns resources in the second village

In the second village, successful defense pays a resource, which the home village wasn't observed to do.

- The message reads each star we win on defense earns us elixir.
- The narrator repels an attack to 90 percent and records this as an improvement.

### O58. Obstacles occupy space and cost resources to clear

Trees, stumps, and stones occupy buildable grid space and are removed only by paying.

- Costs observed: 100 elixir for mushrooms, 1,000 elixir for a trunk, 20,000 gold for a stone.
- The same condition exists in the second village, additionally gated on the builder hall level.

### O59. Overflow converts into gems

Reward value exceeding what the user can hold is converted into gems rather than discarded.

- The season end message reads any rewards exceeding inventory will be converted to gems.
- The conversion rate itself was never shown.

---

## Social

Clash of Clans' social layer sits entirely behind a rebuilt clan castle: nothing here is reachable until that repair is paid for. This section covers clan membership, chat, wars, the game's ranked lists, and the two ways other players can interact outside a clan.

### O60. Clan castle reinforcements and donation

Clan members can send troops and spells to one another, and the receiving member holds them in the clan castle. The war information text states that troops are donated and enemies scouted on preparation day, and separate achievement criteria exist for troops donated and troops received, counting both directions. One achievement requires requesting reinforcements, which can't be done without joining a clan. A gold pass perk reduces the wait for a clan castle troop request by 90 percent. The transfer itself was not performed during any session.

- Achievement criteria track troops donated and troops received separately.
- Requesting reinforcements requires clan membership.
- A gold pass perk cuts the troop request wait by 90 percent.

### O61. Clan discovery and filters

The clan finder opens by asking for a language, then lists clans by recent notices alongside bookmarks and a filtered search. Filters include location, whether the user can join, family-friendly status, war frequency, member count, league requirement, builder base league, and clan labels. Bookmarks can be added from a clan notice or a clan info page.

- The finder opens by asking for a language before showing any clans.
- Filters include location, war frequency, member count, league requirement, and a family-friendly flag.
- The narrator joined a clan directly from the notice list.

### O62. Clan creation settings

Creating a clan exposes the same attributes the finder searches on, set by the creator: name, description, badge, who may join, war frequency, required builder base and home leagues, a minimum town hall level from 1 to 18, location, chat language, a family-friendly flag, and labels. War frequency options include always, not set, never, and rarely.

- Creation settings mirror the finder's own search filters exactly.
- Minimum town hall level for joining can be set anywhere from 1 to 18.
- War frequency options are always, not set, never, and rarely.

### O63. Clan chat and its rules

Joining a clan opens a chat carrying a rules notice, asking members to respect each other, keep private information private, and report offensive players, with misconduct risking a ban. The first message observed in it was an unsolicited promotion of an external site offering free gems, which the narrator judged an attempted scam. Clan membership was shown as 2 of 15 online.

- The chat rules notice warns that misconduct may lead to a ban.
- The first chat message observed was an external scam attempt.
- The clan showed 2 of 15 members online.

### O64. Player profile and social settings

The profile controls how much contact other players may make: clan invites can be set to receive invites or no invites. Up to three labels can be chosen to describe play style, from a list including talkative, teacher, competitive, amateur attacker, newbie, veteran, and others tied to specific game modes. The profile carries a share link, a clan badge where one applies, and the current ranking, shown as unranked, and splits into home village, builder base, and clan capital views.

- Clan invites can be toggled to receive invites or none.
- Up to three play-style labels can be chosen from a fixed list.
- The profile splits into home village, builder base, and clan capital views.

### O65. Clan wars

A clan war is a two-day contest between two clans scored in stars, with a preparation day and a battle day, decided by whichever clan scores more stars and, in a tie, by total destruction. On preparation day, war bases are open for donation and can be redesigned. On battle day, only the best attack against each enemy base counts. War attacks don't reduce the shield or affect trophies, and bonus loot goes to the treasury at the end, mostly lost if the clan loses. The live war observed showed the user's clan at 24 stars against the opponent's 3.

- Wars run a fixed two-day cycle: preparation, then battle.
- Only the best attack against each enemy base counts on battle day.
- War attacks don't affect trophies or reduce the shield.
- The live war observed showed a 24-to-3 star lead for the user's clan.

### O66. Clan war leagues and clan prizes

A recurring event places clans in a group of eight, paying glory, bonus loot, clan XP, and league medals; it was shown with 8 days 9 hours remaining. A separate clan tournament pays gem prizes divided among a clan's top members: 45,000 gems for first place, 30,000 for second, and 15,000 for third, split among the top 30 players.

- Clan war leagues group eight clans against each other.
- Clan war league rewards include glory, bonus loot, clan XP, and league medals.
- A clan tournament divides gem prizes among a clan's top 30 members.

### O67. Clan capital

A third shared construction context, the clan capital, is funded by a currency members contribute. Capital gold is stated to construct and upgrade buildings and unlock districts, and a clan capital tab appears in the profile's achievements view. The clan capital itself was never entered during any session.

- Capital gold, contributed by members, funds clan capital construction.
- A clan capital tab exists in the profile, separate from the home village and builder base tabs.
- The clan capital area was never opened during the sessions.

### O68. Top players and top clans

Ranked lists present other players and clans in order, in both global and national scopes, plus a clan war league scope for clans. The leaderboard view holds four tabs: my league, my town hall, top players, and top clans. The global top entry observed showed 88 attacks won and roughly 5,814 trophies. The user's own position was unranked and did not appear on any list.

- Four leaderboard tabs exist: my league, my town hall, top players, top clans.
- The global top player entry showed 88 attacks won and about 5,814 trophies.
- The user did not appear on any ranked list.

### O69. Friends and cross-game identity

A social tab holds friends, friend requests, and player search, stating that Game Center and linked-account friends appear automatically once logged in. Friends can be added from a player profile, and the linked account hub states that friends' progress and online status can be seen.

- Friends can be added directly from a player's profile.
- Logging into a linked account surfaces existing friends automatically.
- The linked account hub shows friends' progress and online status.

### O70. Revenge attacks

An attacker recorded in the defense log can be attacked back under different rules from an ordinary attack: targets are chosen from the defense log, magic shields don't stop revenge attacks, and the target will hold at least the same resources that were taken. During session 2, the narrator observed another player had completed a revenge attack against the user's village and replayed it.

- Revenge targets are chosen from the defense log.
- Magic shields don't block revenge attacks.
- The revenged-upon target holds at least the resources originally taken.
- The narrator's own village was revenge-attacked by another player during the sessions.

---

## Growth

Clash of Clans' growth surfaces all run through one linked account, which doubles as a hub across the developer's other games and a route out to content the game itself doesn't host. This section covers all of it.

### O71. Account linking rewarded far above comparable actions

The achievement for linking an account pays around ten times the reward of the ordinary progression achievements sitting beside it.

- Linking pays 100 experience points and 50 gems; upgrading the town hall to level 3 pays 10 experience points and 5 gems.
- The reward didn't appear until the app was relaunched, at which point it was granted with three stars.

### O72. Cross-game identity hub and external rewards site

The linked account is presented as a hub across the developer's other games, with its own rewards programme hosted outside the app.

- The linking screens state that several identities can be switched between on one device, and friends' progress and status can be seen.
- After linking, an ID rewards card offers 1,000 free points for activation, which leaves the game for a website.
- The narrator records not knowing what the rewards points are for.

### O73. Creator and esports links leading out of the app

A news panel carries the developer's own posts alongside links to named content creators and esports channels, which open externally.

- Clicking a creator's link opened a video site.
- All items in the panel originate from the product or from creators it selects; other players can't contribute to it.

### O74. In-app pop-up to an external video

During play, a pop-up appeared and took the user out of the app to a video for the current season.

- The video was approximately one minute and 42 seconds.
- The same season's theme is sold in the store as a scenery.

### O75. Motivation survey linked to the profile

Returning from the video, the app presented a two-question survey about play motivations, stating that answers may be retained and linked to the profile.

- The consent text states responding is completely voluntary.
- The two questions ask what's most important in a game and what the user most looks forward to, each with a long list of options.

### O76. Store page and shareable identity

The product surfaces outward through the store listing and a shareable player profile link.

- The store listing features the current season as its headline promotion.
- The profile carries a share button that copies or shares a link to the profile.

---

## Money

Clash of Clans' shop reopens on the same tab every time, and prices change with the player's own progress rather than sitting still. This section covers the shop's offers, packs, and pass, and the pricing decisions underneath them.

### O77. The shop opens on offers

Whichever tab was last used, the shop reopens on the offers tab every time it's entered.

- The shop's other tabs are league shop, shields, treasure, decorations, cosmetics, and buildings and traps.
- Monetization first appears at the moment the shop is entered after the guided opening, not before it.

### O78. Timed starter offers

The first offers carry low prices and countdowns, purchasable only once within the displayed period.

- A builder pack sells a builder hut and 200 gems for $0.99, with no countdown shown.
- Hero pride sells three hero potions for $0.99, with just under two days remaining.
- Dynamic duo sells 500,000 gold, 100,000 elixir, a book of everything, and three builder potions for $2.99.

### O79. A pack per town hall level

Each town hall upgrade brings a corresponding pack into the store.

- A town hall 4 pack costs $1.49, lasts five days, and includes a million gold, a million elixir, two builder potions, and a level 2 air defense.
- Town hall 5, 6, and 7 packs each appeared on reaching those levels.

### O80. Store contents change after a purchase

After a purchase, the purchased pack is replaced by a different offer.

- After a builder pack was bought, a thousand gems for $2.49 appeared in its place.
- The town hall 5 pack disappeared as an option after the one held was acquired.

### O81. Offers priced against the earned alternative

A quantity of resources sold for money sits alongside the same class of item priced in an earned currency the user doesn't hold.

- The league shop sells 2.5 million gold for 15 league medals, against a balance of zero medals.
- A separate offer sells a million gold and a million elixir for $1.49.

### O82. Cosmetics catalogue

A cosmetics tab unlocked at town hall 4 sells alternative presentations of the village, the characters, and the boat.

- Standard sceneries cost $3.49; two occasion-tied sceneries cost $16.99.
- The current season's scenery is sold separately for $4.99 with an in-app preview.
- Town hall 7 brought five named hero skins into the store.
- No cosmetic was observed to change a rule, cost, or outcome.

### O83. Magic shields sold in gems

Protection from resource loss is sold in gems, priced so longer durations cost proportionally less, with durations that combine.

- One day costs 100 gems, two days 150 gems, one week 250 gems.
- Shields don't affect ranked or legend league battles and don't stop revenge attacks.
- Attacking doesn't reduce shield duration.

### O84. Gold pass price and perks

The gold pass costs $4.99 and carries a list of standing perks in addition to its track rewards.

- Perks include builder boost, auto forge, a clan castle troop request wait reduced by 90 percent, and the piggy bank multiplier.
- Further benefits include a hero skin choice, full dark elixir storages, a wall ring, and capital gold.

### O85. Piggy bank

A reserve accumulates bonus loot from battles during the season and is opened at the end of it, with the gold pass multiplying the payout five times.

- Stated caps: 0 to 2 million gold, 0 to 2 million elixir, 0 to 20,000 dark elixir, and 0 to 800,000 of each second village currency.
- The silver lane carries no multiplier.
- The narrator hadn't encountered the reserve before seeing it on the pass screen.

### O86. Purchase disclosure routed to a website

The pass info button leads to the developer's website rather than an in-game explanation.

- The page shown covers in-app purchases, discounts, and offers.
- The same disclosure was made at launch, before play began.

### O87. No separate bonus observed on a first purchase

A purchase was made during the sessions, and no benefit separate from the purchased contents was observed to follow from its being the first.

- Session 2 records only the change in what the store offered after a builder pack was purchased.
- No message, grant, or claim state tied to a first purchase was seen.

---

## Return triggers

Clash of Clans brings players back with a returning-player summary, a running shield countdown, and a calendar of events layered on top of the season boundary itself. This section covers all of it.

### O88. Return-from-absence flow

Reopening after time away produces a summary of what happened in the user's absence before play resumes.

- The banner reads welcome back chief, followed by a list of upgrades that completed.
- The same screen carries the current event with its remaining time.

### O89. Shield countdown on the main screen

A shield icon with a running countdown sits at the top of the screen from the first session, showing how long the village's resources remain protected.

- The initial state was 2 days 23 hours, pulsing for attention.
- The stated explanation is that magic shields protect resources from attacks in regular battles.

### O90. Eight-hour shield after being attacked

Being attacked grants an eight hour shield automatically.

- The text reads you'll get an 8 hour magic shield after your village is attacked.
- Attacking during that period doesn't shorten it.

### O91. Event calendar with current and upcoming events

A calendar lists what's running now, what starts next, and what's scheduled across the month.

- Today's event was clan war leagues, with 8 days 9 hours remaining.
- The upcoming event was a raid weekend starting in 8 hours 58 minutes.
- None of the calendar's events was entered during the sessions.

### O92. Season boundary

A season ended during the sessions, paying out accumulated rewards, and a new one opened with its own countdown.

- The end message granted gold, elixir, second village tokens, amethyst droplets, and bank rewards collected.
- The new season was stated as ending in 27 days and 19 hours.

### O93. Notification permission

The app requests permission to send notifications during the first session, at the point the first town hall upgrade is started.

- What notifications would be sent wasn't stated.

### O94. Offer countdowns

Most purchasable offers carry a visible countdown to their withdrawal.

- Observed remaining times ranged from just under two days to five days.
- The builder pack carried no countdown while the others did.

### O95. Long timers and idle builders

Once upgrade durations reach hours, play can't continue in the intended direction until they finish.

- The narrator names a 30 minute upgrade as the first that would allow leaving and coming back.
- Session 3 ends with the narrator stopping because there's nothing to do but wait.

### O96. Task card cooldown

The season track's next task card is released on a timer rather than on demand.

- The card stated the next task card unlocks in 19 hours and 20 minutes.
- Tasks on the current card can be completed any number of times in the meantime.

### O97. Rating prompt on the second visit

On the second session, the app asked whether the user was enjoying it.

- The prompt appeared after most of the available surfaces had been seen.
- What the prompt led to wasn't recorded.
