# Chrome Valley Customs

**Teaser:** Chrome Valley Customs spends every match-three win on a car part its own crew will comment on by name.

Chrome Valley Customs pairs a match-three puzzle with a car-restoration meta-game: every level played earns coins and gems that fund a running list of named restoration tasks on the current car, each with a three-option cosmetic choice the crew comments on by name. Five garage characters guide the first episode step by step before handing control to the player, and a single time-limited event and a shop selling gems, power-ups and timed infinite health sit alongside the loop. The restoration itself never fails or blocks; every level played ends in the same successful result, and the puzzle exists to fund the next visible change to the car.

---

## System view

This is a medium system. Its spine is the puzzle level: winning one is the only way to earn the coins a restoration task costs, and every other system, the level number, the event, gems, boosters, hearts, reads off or feeds into that same loop. Two systems from outside the loop, the timed event and the shop, sell or grant the same resources the loop produces rather than opening a separate one, so the puzzle level stays the one action everything else depends on.

---

## Mechanics

### Challenge

**Implementation summary:** Each match-three level states a target piece count and a move limit, and every level played ends in the same successful result.

**What was observed:** Chrome Valley Customs states, at the start of each puzzle level, a target number of pieces to clear and a limited number of moves to clear them in. Matching four pieces creates a rocket, and other matches form a bomb; both are explained as levels progress. Every level completes with a "perfect restoration" result that pays out coins and gems.

**How it is presented:** The target and move count are shown before a level starts, and the result screen appears immediately on clearing the target, before returning to the car.

**What is worth noting:** Chrome Valley Customs never shows what happens when a level's moves run out; every level reaching a result in this app's own display is a completion, not an attempt that fell short.

**Key findings:**

- Each level states a target piece count and a move limit before it starts.
- Matching four pieces creates a rocket; other matches form a bomb.
- Every level shown ends in a "perfect restoration" result paying coins and gems.
- Chrome Valley Customs doesn't show what happens when a level's moves run out.

**Screenshots needed:** a level's opening screen showing its target count and move limit; the "perfect restoration" result screen.

### Milestone

**Implementation summary:** Reaching 100% on a car's restoration bar fires its own "Episode complete" screen and reward, apart from the ordinary percentage climbing.

**What was observed:** Chrome Valley Customs tracks each car's restoration as a percentage, rising from single digits after the first tasks toward 100%. Reaching 100% and completing the reveal opens an "Episode complete" screen granting one of each power-up, coins, gems and a timed period of infinite health. Box icons sit at intermediate points along the same bar, marked as places boosters will be received.

**How it is presented:** The percentage and its box icons sit on a persistent bar on the home screen throughout the episode. The Episode complete screen appears once, directly after the finished car is revealed to its customer.

**What is worth noting:** The bar's box icons promise a reward at points short of 100%, but Chrome Valley Customs never shows one of those boxes actually opening; only the terminal, 100% reward is shown paying out.

**Key findings:**

- A restoration percentage bar runs from single digits to 100% across an episode.
- Reaching 100% opens an Episode complete screen paying power-ups, coins, gems and timed infinite health.
- Box icons on the bar mark points where boosters will be received.
- Chrome Valley Customs doesn't show one of the bar's box icons being opened.

**Screenshots needed:** the restoration bar with its box icons mid-episode; the Episode complete reward screen.

### Leveling

**Implementation summary:** A puzzle level number climbs by one with every level won and doubles as the measure shown for other players on the leaderboard.

**What was observed:** Chrome Valley Customs shows a current puzzle level number on the home screen, advancing by one each time a level is won, reaching at least Level 10 in a single episode. The same level number is the value shown for other players on the leaderboard.

**How it is presented:** The level number sits in the top right of the home screen throughout play, and reappears next to each player's name on the leaderboard.

**What is worth noting:** Using the same level number as both the player's own progress marker and the value that ranks them against others means winning a level is simultaneously personal progress and a competitive move.

**Key findings:**

- The puzzle level number advances by one with every level won.
- The level reached at least 10 within a single episode.
- The same level number is shown for other players on the leaderboard.

**Screenshots needed:** the home screen's level number; a leaderboard row showing another player's level.

### Soft Currency

**Implementation summary:** Coins earned from every puzzle level and episode reward are spent entirely on the current car's restoration tasks.

**What was observed:** Chrome Valley Customs pays coins for winning a puzzle level and for completing an episode, and coins are spent on the priced tasks that restore the current car. Tapping the coin balance sends the user to play a puzzle level rather than to a shop.

**How it is presented:** The coin balance sits in the top bar throughout play, and every restoration task states its coin price before it's chosen.

**What is worth noting:** Chrome Valley Customs gives coins nowhere to go but back into the same car; no coin package appears anywhere in the shop, so the only route to more coins is another level.

**Key findings:**

- Coins are earned from puzzle levels and the episode completion reward.
- Coins are spent on restoration tasks priced individually.
- Tapping the coin balance opens a puzzle level, not the shop.
- No coin package is sold anywhere in the shop.

**Screenshots needed:** the coin balance in the top bar; a restoration task showing its coin price.

### Hard Currency

**Implementation summary:** Gems are sold directly in three packs and bundled into offers, with no purchase seen using them for anything in the app.

**What was observed:** Chrome Valley Customs sells gems in three packs from the shop and in bundles alongside power-ups and timed infinite health. Gems are also earned from puzzle levels, the event and the episode reward, and are held as a stored balance shown with a purchase control.

**How it is presented:** The gem balance sits beside the coin balance in the top bar, with a plus control that opens the shop directly.

**What is worth noting:** Chrome Valley Customs shows every route into the gem balance, earned and bought, but no route out; nothing in the app is shown being bought with gems themselves.

**Key findings:**

- Gems are sold in three packs and bundled into larger offers alongside power-ups and infinite health.
- Gems are also earned from puzzle levels, the event and the episode reward.
- The gem balance sits in the top bar with a control that opens the shop.
- Chrome Valley Customs doesn't show anything being bought with gems.

**Screenshots needed:** the gem balance and its purchase control in the top bar; the shop's three gem packs.

### Lives

**Implementation summary:** A five-heart count sits in the top bar, and Chrome Valley Customs sells or grants a timed state that suspends it.

**What was observed:** Chrome Valley Customs shows a heart count capped at five, with a next-life message stating the count is full once it reaches that maximum. Timed infinite health, sold in bundles and granted by the event and episode rewards, suspends the count for a stated period, during which a countdown shows the time left. Coins spent on the current car's tasks are separate from the heart count.

**How it is presented:** The hearts sit in the top bar throughout play. Tapping them opens the next-life message. Infinite health, when active, replaces the heart display with a countdown.

**What is worth noting:** Chrome Valley Customs doesn't show a heart being lost anywhere; the count stayed at five throughout. What actually removes one isn't something this write-up can describe.

**Key findings:**

- Hearts are capped at five, with a next-life message shown once the count is full.
- Timed infinite health is sold in bundles of stated lengths and granted by the event and episode rewards.
- A countdown shows the time remaining while infinite health is active.
- Chrome Valley Customs doesn't show a heart being lost.

**Screenshots needed:** the five-heart display in the top bar; the next-life message at full count; the infinite health countdown.

### Boosters

**Implementation summary:** Power-ups are offered for selection before a level, used inside it with a hammer that smashes a chosen piece, and sold in quantities or as timed unlimited states.

**What was observed:** Chrome Valley Customs offers power-ups for selection when a level is tapped from the home screen, and a later level prompts the same choice before starting. A hammer power-up lets the user select and smash any object during a level. Power-ups are also granted as episode rewards, one of each, and sold in stated quantities or as timed unlimited periods in shop bundles.

**How it is presented:** The booster selection screen appears between tapping a level and playing it. The hammer is used directly on the board during a level. Bundles listing booster quantities and unlimited periods sit in the shop alongside gem packs.

**What is worth noting:** Chrome Valley Customs doesn't show how many of a power-up the user is holding, or that count falling when one is used, only that a selection screen offers them and a level accepts one.

**Key findings:**

- Power-ups are offered for selection before a level starts.
- A hammer power-up lets the user smash a chosen object during a level.
- Power-ups are granted at episode completion, one of each, and sold in stated quantities or as timed unlimited periods.
- Chrome Valley Customs doesn't show a held power-up count falling on use.

**Screenshots needed:** the pre-level booster selection screen; the hammer's in-level smash action.

### Leaderboard

**Implementation summary:** A global and country ranking lists more than a hundred players by puzzle level and a trophy-like count, without stating the viewer's own position.

**What was observed:** Chrome Valley Customs adds a leaderboard tab to the task panel showing a global ranking with the top three highlighted, more than 100 players listed, and a separate country ranking for Serbia. Each row shows a player's puzzle level and a count of a trophy-like item.

**How it is presented:** The leaderboard tab sits in the task panel alongside the task list, reached the same way tasks are.

**What is worth noting:** Chrome Valley Customs doesn't state where the viewer's own position sits on either ranking, only the ordered list of other players.

**Key findings:**

- A global ranking highlights the top three among more than 100 listed players.
- A separate country ranking is shown for Serbia.
- Each row states a player's puzzle level and a trophy-like count.
- Chrome Valley Customs doesn't state the viewer's own position on either ranking.

**Screenshots needed:** the global leaderboard with its top three highlighted; the country ranking tab.

### Seasonal Progression Pass

**Implementation summary:** A time-limited event track pays out 25 ordered rewards for gas cans collected inside ordinary puzzle levels, ending in a grand prize.

**What was observed:** Chrome Valley Customs introduces a timed event, running on a multi-day countdown, that asks the user to collect gas cans inside puzzle levels toward a track of 25 ordered reward positions ending in a grand prize. A banner pinned to the home screen shows the running count and time remaining. Reaching 50 cans unlocked the first reward, timed infinite health, with further positions paying gems, an item labelled "x2", power-ups and a toolbox whose contents are shown before it's earned.

**How it is presented:** The event banner sits pinned at the top of the home screen once the event starts, showing progress and the countdown together. The reward track itself is opened from the banner.

**What is worth noting:** Chrome Valley Customs states the grand prize up front but shows the 25-position track only once the event has started, so the full shape of what stands between the opening count and the grand prize isn't visible before the event begins.

**Key findings:**

- A timed event asks the user to collect gas cans inside puzzle levels toward 25 ordered reward positions.
- A home screen banner shows running progress and time remaining once the event starts.
- The first reward position, reached at 50 cans, pays 30 minutes of infinite health.
- A toolbox reward's contents are shown before it's earned.

**Screenshots needed:** the event's home screen banner showing progress and countdown; the 25-position reward track.

---

## Section cards

**Onboarding and first run:** Fifteen observations carry the player from the App Store listing through a fully guided first car, with five crew characters directing each step before handing over control.

**Core loop and automation:** Winning a puzzle level pays coins that fund the next restoration task on the current car, a loop that repeats through customization choices, crew commentary and the finished reveal.

**Goals and progression:** A restoration percentage, a puzzle level number, and a scrapbook of 52 episodes track progress across the car being built and the episodes still ahead.

**Access and eligibility:** Home screen elements and a showroom's own upgrades each stay locked behind conditions Chrome Valley Customs doesn't state.

**Economy and resources:** Coins fund the current car alone, gems are sold and earned with no shown use, and hearts and infinite health each bound how play continues.

**Social:** A global and country leaderboard ranks other players by puzzle level, without stating the viewer's own position.

**Reach beyond the app:** A photo mode is the only route that sends anything from Chrome Valley Customs outward.

**Monetization:** A car-themed bundle, three gem packs and a larger offers catalogue sell gems, power-ups and timed infinite health, all discounted against a stated original price.

**Return triggers:** A timed event with a multi-day countdown is the one thing that brings the player back.

---

## Onboarding and first run

Chrome Valley Customs runs a fully guided first car before handing control to the player. This section covers the App Store listing, first launch, and the guided steps that introduce spending, choices and the puzzle itself.

### O1. Store listing identity

The App Store lists Chrome Valley Customs, published by Offroad Games, with the subtitle Restore and Customize cars and the category Puzzle. The listing is free, rated 9+, available for iPhone and iPad, and offered in English plus eight more languages. Listed tags include car customization, vehicle game and car repair. Screenshots show customization, repairs, racing, painting, restoration and puzzle play in the garage, and a gameplay video shows features and the minigames present.

### O2. Store listing event promotion

The listing shows an event running at the time of this analysis, a Winter Games-themed promotion promising exclusive rewards. The title screen carries matching seasonal art, a dog carrying a torch.

### O3. Store ratings and reviews

The listing shows a 4.7 rating from 89,000 ratings. Positive reviews shown describe the game as a Candy Crush-style puzzle in which winning levels earns coins to restore vehicles, praise it as relaxing, and two older reviews state it has no ads. Recent critical reviews shown complain about difficulty spikes after a specific power-up, repeated prompts to buy credits after a loss, needing the matching game to earn restoration money, freezing, long waits for new levels, being greedy, and one reviewer losing progress after an update. These are third-party statements shown on the listing; none of the reviewers' specific complaints about continue prompts, difficulty or progress loss appears anywhere else in this analysis. The developer had not responded to the recent negative reviews shown.

### O4. Update cadence

The version history shows the last update three weeks before this analysis, with earlier updates at intervals of roughly one to two months going back several updates. Chrome Valley Customs doesn't state a version number.

### O5. Terms consent at first launch

Chrome Valley Customs opens in landscape orientation to a Welcome to Chrome Valley screen stating that data is collected to run the game, and asks the user to accept the terms of service and privacy policy.

### O6. Tracking permission request

After a loading screen, the app shows the system prompt asking permission to track activity across other companies' apps and websites. This is the only permission request in the entire run; no notification, camera, microphone or location request appears. Nothing around this prompt explains how the app makes money or mentions advertising.

### O7. Title screen

The front screen offers Play and Save Progress buttons and a settings button in the top right, with the seasonal dog-and-torch art in place. Settings holds toggles for music, sound and vibration, each playing an audio cue when switched.

### O8. Optional sign-in

Save Progress asks the user to sign in to save progress, offering Google or X as the only two methods; no Apple or Facebook option is offered. Signing in is not required: pressing Play continues without an account, and Chrome Valley Customs doesn't offer a guest mode or ask for a name, email, password, phone or date of birth. After opening Save Progress and returning to the title screen, the settings button in the top right disappears.

### O9. Asset download before play

Pressing Play leads to further loading and an asset download screen before the game begins.

### O10. Narrative introduction

With rock music playing, the garage owner, later named Uncle Hank, welcomes the user to the best auto shop around; Donna, the engine specialist, says the shop was the best until someone robbed them blind and that the user must save it; a big rig mechanic asks what to call the user, settling on boss. The dialogue can be skipped or continued, and the user is cast as the boss of the garage from this first exchange.

### O11. Name entry

Chrome Valley Customs asks for a name, accepting letters and numbers only, and every following line of dialogue uses the entered name.

### O12. First guided task and spend

A Strip Down and Assess button appears in the top left, and a pointer indicates the task box in a lower corner. Hank says tasks cost coins and prompts a spend; the user spends 50 coins, and an animation shows the car being taken apart. A customer, Taylor, then asks for the car to be restored as a wedding anniversary surprise due the following week. Four more tasks appear after this exchange, and Hank prompts another while coins remain.

### O13. First guided customization choice

The first choice task, replacing the front fenders, asks the user to pick one of three options, rendered as factory stock, flared and vented arches, each with its own description and notes from Hank. After the choice, the big rig mechanic and Donna comment approvingly.

### O14. First guided puzzle level

When coins run out, Hank points to a button resembling an ad button that instead opens Level 1 of the match-three game. The level states a target of 30 pieces to clear, explains matching, and produces a bomb piece during play. Completing it shows a perfect restoration result with coins and gems, after which Chrome Valley Customs states its purpose directly: beat levels, earn coins, restore cars.

### O15. First unguided home screen

After Level 1, the crew stops directing each step. The home screen now shows the puzzle level indicator, a booster selection when the level is tapped, an exclamation mark on the task box, an episode progress bar at 8%, five hearts, a gem balance with a purchase control, a coin balance, and a photo button beside settings. Chrome Valley Customs doesn't explain what the exclamation mark means at this point.

---

## Core loop and automation

Winning a puzzle level is what pays for every step in a car's restoration. This section covers the loop between the two, the priced tasks that consume coins, the choices inside each task, and the reveal that closes one car and opens the next.

### O16. The earn-and-spend loop

Chrome Valley Customs repeats one unit throughout an episode: play a puzzle level, receive coins, spend the coins on a restoration task for the current car, and return to a level once the next task costs more than the balance holds. Some tasks, such as rust removal and the trim and dash colors, can be paid from coins left over from an earlier level without playing again. A full episode ran to at least ten puzzle levels in this analysis, with each level taking roughly 15 to 30 seconds.

### O17. Task list in batches

Tasks are listed in a task box and arrive in small batches, each batch introduced by a crew member in dialogue asking for a specific piece of work. Completing a batch brings a further batch, sometimes before the car looks close to finished. Tasks carry their own numbers; fitting the back bumper is shown as task 22. Crew members suggest which task to take next, and following the suggestion was how tasks were chosen in this analysis.

### O18. Task prices climb

Restoration tasks carry coin prices: 50 coins for the first task, 250 for a later batch, 200 for the paint step, and 250 for the car reveal itself. Chrome Valley Customs states that later replacements cost more and that levels have to be played more often as an episode goes on, though a stated price schedule across the whole episode isn't shown.

### O19. Puzzle level rules

Each puzzle level states a target number of pieces to clear and a limited number of moves. Matching four pieces creates a rocket, and other matches form a bomb, with combos explained as levels progress. Every level played in this analysis ended in a "perfect restoration" result with coins and gems; Chrome Valley Customs doesn't show what happens when a level's moves run out. Event items are collected inside levels once an event is active.

### O20. Customization choices

Most restoration tasks ask for one of three options for a part, each with its own description and notes from a crew member. Choices cover fenders, quarter panels, rims and rim color, tires, the hood scoop, bumpers, headlights, tail lights, interior style, seats, trim and dash colors, the steering wheel, window tint, paint and decals, offered as six options. Stance is set with a slider moving the car between lower, stock and raised settings in a live preview, and the interior view places the camera inside the car. Chrome Valley Customs doesn't state a price or outcome difference between a task's three options. One crew member's line about a factory-correct engine adding value to the build raises the possibility that a choice affects a tracked value, without this analysis showing which value or whether one changes.

### O21. Reversible build view

At any point the car can be rotated as a 3D model and viewed from any angle, and any earlier choice, parts, decals or color, can be changed. Chrome Valley Customs doesn't state whether changing a choice after the fact costs coins.

### O22. Crew and customer reactions

A crew member comments on each choice, usually approvingly and often with a joke, using the player's own name, and at the car's reveal the customer comments on specific choices made along the way. Five characters are introduced across the first car: the garage owner, an engine specialist, a body-work mechanic, a parts sourcer, and a paint and interiors expert. These reactions are Chrome Valley Customs responding to what's chosen; nothing about a choice is withheld or accumulated by making it, and the reaction itself doesn't change any balance, task or level the game tracks.

### O23. The car reveal

Revealing the finished car is itself a task, costing 250 coins, and plays a video of the car inside and out with engine sound. The customer reacts to the finished result and drives the car away. Before the reveal, the whole car can be reviewed from every side.

### O24. Handover to next car

After the reveal, the garage is shown empty with a control to start the next car, at no cost, and the crew's dialogue frames the empty space as an opportunity rather than a loss. The following episode opens with a new customer and a first task already waiting.

---

## Goals and progression

Chrome Valley Customs tracks progress on the current car and across the wider set of episodes at once. This section covers the completion bar, the puzzle level number, the scrapbook, and the story that continues across cars.

### O25. Episode completion percentage

A progress bar shows the current car's restoration as a percentage, moving from 8% after the first tasks through the eighties and into the low nineties later in the episode. Box icons sit along the bar marking points where boosters will be received. Chrome Valley Customs doesn't show one of these boxes actually being opened in sequence.

### O26. Episode completion reward

Reaching 100% and completing the reveal opens an Episode complete screen granting one of each power-up, 250 coins, 1,000 gems and 30 minutes of infinite health.

### O27. Puzzle level number

The puzzle level number is shown on the home screen and advances by one with every level won, reaching at least Level 10 in this analysis. The same number is shown for other players on the leaderboard.

### O28. Scrapbook of episodes

A scrapbook lists episodes as car icons, 52 of them at the time of this analysis, and opening one shows the missions it contains. Chrome Valley Customs doesn't distinguish locked or future episodes from available ones in what's shown.

### O29. Story stakes across episodes

The episode dialogue builds a continuing story: the garage was robbed by an antagonist named Greasy Joe, the first build is framed as the chance to set things right so Hank can retire in peace, and the second episode hints that someone is targeting car businesses across town and that more about Greasy Joe may surface. At the end of the first episode Hank tells the user the garage is theirs, and the paint expert says to keep restoring cars to grow the business.

---

## Access and eligibility

Chrome Valley Customs introduces its own surfaces gradually rather than all at once, and holds some content locked behind conditions it doesn't state. This section covers the staged appearance of home screen elements, the showroom, and how the second car becomes available.

### O30. Staged home screen elements

Home screen elements appear progressively through Chrome Valley Customs rather than all at once: an event banner appears once an event is first shown, a sale button appears after the first purchase offer, and a leaderboard tab appears in the task panel later still. Chrome Valley Customs doesn't state the condition that triggers any one of these appearances.

### O31. Showroom upgrades not unlocked

The showroom, visited at the start of the second episode, holds upgrades that aren't yet unlocked, so nothing there can be changed. Chrome Valley Customs doesn't state what the upgrades are or what unlocks them.

### O32. Next car available without unlock

The second car starts from a control in the empty garage, with no unlock or payment required.

---

## Economy and resources

Chrome Valley Customs runs three separate balances and one bounded count alongside them. This section covers coins, gems, hearts and the timed infinite-health state that suspends the heart count.

### O33. Coins

Coins are earned from every puzzle level and from the episode completion reward, and spent on restoration tasks for the current car. Tapping the coin balance opens a puzzle level rather than a shop, and no coin package appears anywhere in the shop.

### O34. Gems

Gems, also shown as emeralds at one point, are held as a balance, read at 2,046 after the first level, with a control to buy more. They're earned from puzzle levels, from event thresholds and from the episode reward, and sold in packs and bundles in the shop. Chrome Valley Customs doesn't show any item, action or result being bought with gems.

### O35. Hearts

The home screen shows a heart count, capped at five, with a next-life message stating the count is full once it reaches that maximum. The count stayed at five through every puzzle level played in this analysis. Chrome Valley Customs doesn't show a heart being lost.

### O36. Timed infinite health

Infinite health is granted for a stated period, 30 minutes from the first event threshold and from the episode reward, and sold in bundles for periods of 15 minutes, one hour, or longer. While active, a countdown shows the time remaining. The same state is called infinite health, infinite hearts and infinite lives at different points.

### O37. Power-ups and boosters

Tapping a level from the home screen offers boosters to start it with, and a later level prompts the same choice again before starting. A hammer power-up lets the user select and smash any object during a level. Power-ups arrive as episode rewards, one of each, and in paid bundles in stated quantities, with bundles also selling timed periods of infinite boosters. Rockets and bombs formed by matches are pieces of a level rather than held items. Chrome Valley Customs doesn't show a held power-up count, or that count falling on use.

---

## Social

Chrome Valley Customs' only social surface is a leaderboard ranking other players.

### O38. Leaderboard

The task panel gains a leaderboard tab showing a global ranking with the top three highlighted and more than 100 players listed, alongside a separate country ranking for Serbia. Each row shows a player's puzzle level and a count of a trophy-like item. Chrome Valley Customs doesn't state whether the viewer's own position appears anywhere on either ranking. No friends list, messaging, groups or other identified-person features appear anywhere else.

---

## Reach beyond the app

A single photo feature is the only route Chrome Valley Customs offers for sending anything outside the app.

### O39. Photo mode and sharing

A photo button lets the user rotate the 3D car, take a photo from any angle, and either add it to the scrapbook or share it. Chrome Valley Customs doesn't describe where a shared photo can be sent.

---

## Monetization

Chrome Valley Customs sells gems, power-ups and timed infinite health through a car-themed bundle, a gem shop and a larger offers catalogue, with no advertising shown anywhere in this analysis.

### O40. Car-themed bundle

Late in the first episode, after an event reward, Chrome Valley Customs shows its first purchase prompt: a bundle named after the car being restored, with two offers each marked 50% off and a countdown of six days and 23 hours. The first offer gives 1,500 gems, two of each power-up and 15 minutes of infinite health for $2.99, reduced from $5.99. The second gives 5,000 gems, three of each power-up, 15 minutes of infinite use of three power-ups and one hour of infinite health for $7.99, reduced from $15.99. The offer stays available in the shop after the prompt is dismissed.

### O41. Sale button

After the first bundle prompt, a sale button appears on the home screen and reopens the same bundle at any time.

### O42. Gem shop

Tapping the gem balance opens the shop, showing the car bundle and three gem packs: 1,000 gems for $1.99, 5,000 for $7.99 and 12,000 for $15.99. The $7.99 bundle gives the same 5,000 gems as the matching gem pack, plus power-ups and infinite health, for the same price.

### O43. More offers catalogue

A more offers control opens a larger catalogue: the car bundle; a Starter Sale at $1.99 reduced from $9.99, giving 2,000 gems, power-ups, infinite boosters and one hour of infinite health; a second starter package at $5.99 giving 2,000 gems and three of each booster; a Turbo Package marked popular at $9.99 giving 5,000 gems and one hour of infinite add-ons; and Track, Performance, Luxury and Executive packages, the last at $99.99 for 65,000 gems, 13 add-ons, several days of infinite boosters and 18 hours of infinite health. Nothing shown makes any package conditional on buying another first.

### O44. No advertising

No advertisement appears at any point in this analysis. The button Hank points to when coins run out resembles an ad button but opens the puzzle level instead.

---

## Return triggers

A single timed event is the one mechanism Chrome Valley Customs uses to bring the player back outside of the main loop.

### O45. Rig's Road Trip event

Late in the first episode, before the steering wheel task, Chrome Valley Customs shows for the first time a timed event, Rig's Road Trip, ending in two days and nine hours: collect 50 gas cans to earn rewards, with a grand prize at the end. The event then sits as a banner pinned at the top of the home screen showing progress and time remaining. Gas cans are collected inside puzzle levels. The opening screen suggests 50 cans wins the grand prize, while the track itself reveals 25 reward positions with the grand prize at the final one. Chrome Valley Customs doesn't show what happens once the countdown ends.

### O46. Road trip reward track

Collecting 50 cans unlocks the first reward, 30 minutes of infinite health, and further positions follow in order: gems, an item labelled "x2", power-ups, a toolbox whose contents are shown in advance, and more infinite power-ups. The count reached 84 and later 228 in this analysis, unlocking two more rewards including 150 gems. Chrome Valley Customs doesn't show what the "x2" item actually does.

### O47. No notification request

Chrome Valley Customs doesn't ask for notification permission at any point, including after the event with its countdown appears. No rating prompt appears either.
