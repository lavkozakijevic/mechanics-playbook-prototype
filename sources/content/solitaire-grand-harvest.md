# Solitaire Grand Harvest

**Teaser:** One multiplier toggle on Solitaire Grand Harvest's pre-level screen raises the entry price and multiplies five separate payouts at once, credits, gems, cookies, puzzle pieces and pack quality.

Solitaire Grand Harvest is a card game where every level costs credits to enter, and a per-level stake multiplier scales the cost against everything the level can pay back at once, credits, gems, cookies, puzzle pieces and card pack quality. A seeded piggy bank fills with every level played, won or lost, and converts into a single purchase once full. Around the level loop sit four separate ordered reward tracks, a farm restoration project, a collectible card album, and a rotating set of thirty-minute timed offers, each pulling on the same handful of balances the level loop already produces.

---

## System view

Solitaire Grand Harvest is a complex system. Its spine is credits: every level costs credits to enter, and the multiplier chosen before a level scales both that cost and every reward the level pays at once, credits, gems, cookies, puzzle pieces and pack quality, so the whole economy moves on one per-level decision.

---

## Mechanics

### Piggy Bank

**Implementation summary:** Peggy fills with a bonus deposit after every level played, won or lost, seeded by the app itself, and converts into a single 3.99 purchase once capped.

**What was observed:** Peggy is introduced with a first deposit the app makes itself, described as "on us," and grows after every level played regardless of whether the level is won or lost. The balance rises from 4,050 credits through 7,000 and 21,000 to a cap of 35,000, at which point Solitaire Grand Harvest states that no more credits can be collected until the savings are claimed, priced at 3.99 with a two-day timer.

**How it is presented:** Peggy sits behind the barn as a pig icon that jumps across the screen after each completed level, visibly growing fatter as the balance rises. Once capped, Peggy takes over the same top-right offer slot the expired timed offers occupied.

**What is worth noting:** The first deposit coming from the app itself, not from anything the player did, sets up the reserve as something already owned before a single purchase prompt appears; by the time the cap message shows, the credits inside read as the player's own money waiting to be unlocked rather than a fresh sale.

**Key findings:**

- Peggy's first deposit of 4,050 credits is made by the app itself.
- The balance grows after every level played, won or lost.
- Peggy caps at 35,000 credits and then blocks further deposits until claimed.
- Claiming the capped balance costs 3.99 under a two-day timer.

**Screenshots needed:** Peggy at an early balance growing after a level; the capped "maxed out" message with its price and timer.

### Reward Multiplier

**Implementation summary:** A single one, two or four times toggle on the pre-level screen sets that level's entry cost and multiplies its credit payout, gem yield, cookie and puzzle-piece count, and card pack tier together.

**What was observed:** From level 25, the pre-level screen offers a stake choice between one, two and four times wins. Choosing a higher stake raises the entry cost in credits and multiplies what the level pays out: cookies and puzzle pieces rise from one to two to four, and the card pack awarded rises from green to blue to purple. The app's own text states that level difficulty stays the same while rewards are multiplied.

**How it is presented:** The choice sits directly on the pre-level screen alongside the entry cost, framed as "bigger prizes are available," and the background music changes with the selection, more upbeat at higher stakes and a falling tone when switching back to one times.

**What is worth noting:** Tying pack color, and not just the credit payout, to the stake turns the multiplier into the single lever that also controls collection progress, so choosing to bet bigger is also a choice about how fast the album fills.

**Key findings:**

- The multiplier offers one, two or four times, raised from the pre-level screen.
- A higher stake raises the entry cost in credits and multiplies the credit payout equally.
- Cookies, puzzle pieces and card pack tier all scale with the same stake choice.
- A timed offer separately sells a temporary ten percent bonus over the gems a level already pays.

**Screenshots needed:** The pre-level screen's multiplier toggle with its stated cost at each tier; the three pack colors awarded at each multiplier.

### Boosters

**Implementation summary:** Slicer, Windmill and Wild Drop power-ups plus held undos, wild cards and plus-five stacks each change what happens inside a level once applied, arriving through rewards, level gifts and paid bundles.

**What was observed:** Solitaire Grand Harvest holds the Slicer, Windmill and Wild Drop power-ups as counted quantities, each introduced with a free first try: the Slicer removes cards at the start of a level, the Windmill clears face-up cards, and Wild Drop hides wild cards in the deck. Separately, undos, wild cards and plus-five card stacks are granted through daily rewards, level gifts, trail and puzzle rewards, and store bundles, each usable inside a level in progress.

**How it is presented:** Power-ups unlock one at a time at stated levels, each introduced with its own free trial before the player is asked to hold a count of their own. Held items surface inside a level at the moment they apply, an undo prompt after a missed card, a held free round offered in place of a level's cost.

**What is worth noting:** Granting the first use of each power-up free, before any purchase is possible, lets the player learn what an item does before it becomes something to manage as a held count.

**Key findings:**

- Slicer, Windmill and Wild Drop each unlock with a free first use before becoming a held item.
- Undos, wild cards and plus-five stacks arrive through rewards, level gifts, trail and puzzle prizes, and paid bundles.
- Periods of endless windmill or infinite wild cards suspend the held count for a set number of minutes.
- Whether using a held item reduces its count isn't stated.

**Screenshots needed:** The locked power-up slots with their level requirements; a level showing a held undo or wild card offered mid-play.

### Hard Currency

**Implementation summary:** Credits, gems, free rounds and puzzle pieces are all sold directly for money, in the Grand Harvest Store and inside a rotating set of thirty-minute timed offers.

**What was observed:** The Grand Harvest Store sells credits in plain amounts and in bundles that also include free rounds, undos and wild cards, with prices from 1.99 up to 35.99. From level 36 the bundles add card packs at rising tiers. Gems appear in a paid timed offer of 300 for a stated price, and puzzle pieces are sold ten at a time for 0.99.

**How it is presented:** The store opens from tapping the credits balance directly, while the timed offers cycle through the top right corner of the main screen on a thirty-minute countdown, each capped at one purchase.

**What is worth noting:** Four different balances being sold through the same store and offer surfaces, at prices that vary between the plain bundles and the timed offers for what reads as a similar amount, makes the actual credits-per-dollar rate hard to compare from one offer to the next.

**Key findings:**

- Credits are sold in plain amounts and in bundles from 1.99 to 35.99.
- Card packs are added to store bundles from level 36 onward.
- Gems are sold in a 300-gem timed offer, and puzzle pieces ten for 0.99.
- Free rounds are included inside paid bundles and offers rather than sold on their own.

**Screenshots needed:** The Grand Harvest Store's bundle tiers; a timed offer showing its countdown and one-purchase limit.

### Soft Currency

**Implementation summary:** Credits, gems, free rounds, puzzle pieces and cookies are each earned through ordinary play, credits from level wins and a wide set of free rewards, the rest from levels and events tied to them.

**What was observed:** Credits are paid by level wins, level gifts, daily rewards, the hourly harvest, trail rewards and set rewards, and spent on level entry and continuation. Gems are collected from gem cards inside levels and spent on farm tasks. Free rounds are granted by daily rewards and level gifts and exchanged for a level's entry cost. Puzzle pieces and cookies are paid by level wins and spent on the Grand Puzzle and on feeding the pet.

**How it is presented:** Each balance is earned as a side effect of playing rather than through a dedicated collection action, credits and gems from cards inside the level itself, cookies and puzzle pieces from the level's completion screen.

**What is worth noting:** Five separate balances all being funded by the same handful of actions, playing a level and completing an event, means a single won level can move several counters at once without the player choosing to work toward any of them individually.

**Key findings:**

- Credits are earned from level wins, gifts, daily rewards, the hourly harvest, and trail and set rewards.
- Gems are earned only from gem cards inside levels.
- Free rounds, puzzle pieces and cookies are each earned through level wins and event rewards.
- Crowns are stated to come from duplicate album cards, though none were earned or spent.

**Screenshots needed:** A level's completion screen showing several balances updating at once; the farm's gem-cost task list.

### Loot Box

**Implementation summary:** A second, paid lucky wheel spin and the card packs sold in the store from level 36 onward both resolve only after payment, over a materially different, undisclosed set of prizes.

**What was observed:** After a free wheel spin, the wheel offers a second spin for 2.99 over a higher set of prizes, resolved only once the price is paid. From level 36, store bundles include purple, silver and gold card packs whose contents, based on packs already seen opening from level wins, vary and can repeat.

**How it is presented:** The paid spin appears immediately after the free one, with the wheel itself turning gold to mark the higher stakes; the store's packs sit priced alongside plain credit bundles with no odds shown for either.

**What is worth noting:** Placing the paid spin directly after the free one, over a visibly richer prize set, uses the free draw's own suspense to introduce the paid version before the player has left the screen.

**Key findings:**

- The paid wheel spin costs 2.99 and resolves only after payment.
- The second wheel's prizes are higher than the free spin's own set.
- Store card packs from level 36 onward are also priced and resolved after purchase.
- No odds or contents are disclosed for either the paid spin or the store packs.

**Screenshots needed:** The paid wheel spin's prize set and price; a store bundle showing its card pack tier.

### Variable Reward Outcome

**Implementation summary:** The free first wheel spin, packs won from levels, the Crop Master apple pick and the pet's birthday spin each resolve to one of several different results at no cost to draw.

**What was observed:** A free wheel spin resolves to one of several prizes shown on the wheel face. Packs won from levels are opened with their cards revealed one by one, and cards differ between packs. The Crop Master pick offers four prizes hidden under twenty apples, and the pet's first-stage spin resolves to a pack from a wheel stated to pay up to 3,000 credits.

**How it is presented:** Each of these sits at the end of an activity already completed, winning a level, finishing a crop, completing a pet stage, rather than being something bought outright.

**What is worth noting:** None of these four require the player to pay before the draw resolves, which is what keeps them apart from the paid wheel spin and store packs that sell the same suspense for money.

**Key findings:**

- The free wheel spin resolves to one of several displayed credit or item prizes.
- Packs won from levels reveal different cards each time, including duplicates.
- The Crop Master pick hides four prizes under twenty apples.
- The pet's birthday spin resolves to a pack from a wheel stated to pay up to 3,000 credits.

**Screenshots needed:** The free wheel's prize face; the Crop Master apple-picking screen.

### Set Collection

**Implementation summary:** The twelve-set Grand Spring Album and the five-piece Grand Emblems case each track named collectible members toward a completion prize, filled by packs won in levels and by separate timed events.

**What was observed:** The Grand Spring Album holds twelve sets of twelve cards, shows a completion percentage, and pays a reward for each finished set and a 610,000-credit grand prize for the whole album. Grand Emblems tracks five named emblems, each found in its own special event, toward a final prize on a countdown.

**How it is presented:** The album opens from level 36 with a welcome gift and fills as packs are won and opened; Grand Emblems is introduced as its own pop-up naming all five emblems and the prize for completing the set.

**What is worth noting:** Running two separate collections side by side, one filled by ordinary level play and one filled only by taking part in specific timed events, gives the player two different reasons to chase the same kind of completion prize at once.

**Key findings:**

- The Grand Spring Album holds twelve sets of twelve cards each.
- Completing all twelve sets pays a 610,000-credit grand prize.
- Grand Emblems tracks five named emblems, each earned from a different special event.
- Duplicate album cards are stated to convert into crowns, redeemable at the Crown Center.

**Screenshots needed:** The album showing its set completion percentage; the Grand Emblems case with its five named pieces.

### Seasonal Progression Pass

**Implementation summary:** My Trail, the Bloomlight Garden season, the Grand Puzzle and the pet track are four separate ordered reward tracks, each with its own countdown and its own by-product of play advancing it.

**What was observed:** My Trail is a ten-position reward track ending in a mystery door, advanced by energy from missions, on a three-day countdown. The Bloomlight Garden season runs twelve chapters advanced by gem-paid tasks. The Grand Puzzle reveals a picture over a three-day window as pieces are placed. The pet progresses through five stages advanced by feeding it cookies, on a ten-day timer.

**How it is presented:** Each track sits on its own icon on the main screen with its own countdown, introduced separately as the player reaches the level that opens it.

**What is worth noting:** None of the four tracks reaches its own end anywhere in what's covered here, so whether a track resets, closes, or opens something further when it ends isn't shown.

**Key findings:**

- My Trail runs ten reward positions to a mystery door on a three-day countdown.
- The Bloomlight Garden season runs twelve chapters advanced by gem-paid tasks.
- The Grand Puzzle runs three days and reopens for a second round once solved.
- The pet runs five stages advanced by feeding, on a ten-day timer.

**Screenshots needed:** My Trail's ten-position reward track; the Bloomlight Garden season's chapter and task screen.

### Challenge

**Implementation summary:** The ten-minute balloon bonus and the five-level Cheese Rally race each set a bounded objective inside a short window, won or lost within that window rather than carried forward.

**What was observed:** A floating balloon offers a prize for completing one task within the next ten minutes. Cheese Rally asks the player to be first to finish five Solitaire levels against four named racers, paying the winner and advancing to a further stage; a later race was not completed in time.

**How it is presented:** The balloon appears as a floating icon over the farm; Cheese Rally runs from its own event icon with a visible timer and the racers' relative progress.

**What is worth noting:** Cheese Rally being available in one-times mode only ties a competitive, time-boxed objective to the lowest-stake way of playing, keeping the race separate from the multiplier decisions the rest of the economy runs on.

**Key findings:**

- The balloon bonus sets one task to complete within ten minutes.
- Cheese Rally asks for five won levels before four named racers, within a timed window.
- A won race advances to a further stage; a later race was not completed.
- Cheese Rally is available only in one-times mode.

**Screenshots needed:** The balloon bonus's ten-minute prompt; the Cheese Rally race screen with its racers and timer.

### Comparative Rank

**Implementation summary:** Cheese Rally orders the player against four named racers by progress toward five won levels, deciding who reaches the stage prize first.

**What was observed:** During Cheese Rally the player's position updates against four named racers as levels are won, moving from second to first before winning the first race.

**How it is presented:** Position is shown live during the race itself, tied to the same progress bar that tracks levels won toward the five needed to finish.

**What is worth noting:** What's shown is the player's own position changing, not an ordered list of every racer's standing, so what a racer sees of anyone but themselves and the leader isn't shown.

**Key findings:**

- Position updates live against four named racers during Cheese Rally.
- The player moved from second to first before winning the race.
- Whether the racers are other players or automated entrants isn't stated.

**Screenshots needed:** The Cheese Rally screen showing the player's position against the named racers.

### Daily Login Rewards

**Implementation summary:** Daily Goodies pays a four-week sequence of rewards for visiting once a day, framed entirely around the visit itself rather than any action taken once inside.

**What was observed:** Daily Goodies shows a four-week reward sequence and states that a daily visit sends bigger prizes. The first day paid 2,500 credits and six undos after level three; a later return, following a restart of the phone, paid day two's reward of 5,000 credits and three free rounds.

**How it is presented:** The sequence pops up with Sam on open, showing the full four weeks of rewards at once rather than only the day in question.

**What is worth noting:** The daily farm delivery bonus reads like a second daily reward alongside this one, but it isn't part of it: what actually qualifies a visit for the farm bonus beyond completing farm tasks is never shown, so the two are kept separate rather than folded into one daily system.

**Key findings:**

- Daily Goodies shows a four-week sequence of daily rewards.
- Day one paid 2,500 credits and six undos.
- Day two paid 5,000 credits and three free rounds on the next visit.
- Whether a missed day affects the sequence isn't stated.

**Screenshots needed:** The Daily Goodies four-week reward screen.

### Streak

**Implementation summary:** A bones meter fills with consecutive won levels in the same run of play and is separately kept in the profile as the longest win streak reached.

**What was observed:** A pop-up introduces a bones meter beside Sam that fills toward extra prizes as levels are won in a row. The profile's stats tab separately records the longest win streak reached.

**How it is presented:** The meter sits on the main screen next to Sam once unlocked, filling visibly after each won level.

**What is worth noting:** What a lost level does to the meter, and what the completed meter actually pays, are both left unshown, so only the existence of the streak and its record in the profile can be stated with confidence.

**Key findings:**

- The bones meter fills with consecutive won levels.
- The profile records the longest win streak separately.
- What a loss does to the meter isn't stated.
- What filling the meter pays isn't stated.

**Screenshots needed:** The bones meter beside Sam on the main screen.

### Progression Gate

**Implementation summary:** Player level and farm level each withhold a named set of features, power-ups, multipliers, My Trail, the Social Hub, the Grand Album and teams, stated and shown as locked before the level is reached.

**What was observed:** Solitaire Grand Harvest names the player level at which power-ups, multipliers, My Trail, the Social Hub, the Grand Album, further stats and teams open, and shows each as unavailable below that level. The farm withholds areas until its own separate level rises, opening the tool shed at farm level two.

**How it is presented:** Locked features are named ahead of time rather than hidden entirely, the Grand Album shows "Soon" before level 36, and locked power-up slots state the level that opens them.

**What is worth noting:** Naming every gate's requirement well before the player reaches it turns the level path itself into a preview of what's still ahead, rather than each unlock arriving as a surprise.

**Key findings:**

- Power-ups, multipliers, My Trail and the Social Hub each unlock at a named player level.
- The Grand Album shows a "Soon" state before opening at level 36.
- The farm withholds areas until its own separate farm level rises.
- Teams sits behind a level gate that stays closed throughout.

**Screenshots needed:** A locked power-up slot naming its unlock level; the Grand Album's "Soon" state before level 36.

### Leveling

**Implementation summary:** The player's level and the farm's separate level each hold a current position that a stated rule advances, and both are the measures the app's own gates read.

**What was observed:** The farm holds a level raised by XP from completed tasks, announced as "we're level one" and then level two. The player's own level is kept as a profile state, shown as "level 2, crop 1" early and rising through play, and is the measure named on every progression gate.

**How it is presented:** The player's level is shown on the profile and used throughout as the unlock measure; the farm's level is shown separately on the farm screen itself, tied to task completion rather than to Solitaire play.

**What is worth noting:** Running two separate level states, one from playing Solitaire and one from spending gems on farm tasks, means the game tracks two distinct kinds of progress that happen to share the same word.

**Key findings:**

- The farm holds its own level, raised by completing gem-paid tasks.
- The player's level is a separate profile state, shown alongside a crop number.
- The player's level is the measure every progression gate reads.
- The farm's level opened the tool shed at farm level two.

**Screenshots needed:** The profile showing the player's level and crop number; the farm screen showing its own level state.

### Experience Points

**Implementation summary:** Farm tasks pay XP toward the farm's next level, and My Trail's missions pay energy toward its ten reward positions, each converting ordinary play into movement along its own track.

**What was observed:** Completing farm tasks pays XP, stated directly as "earn XP by completing tasks," which raises the farm's level. My Trail is separately advanced by energy paid out from three rotating missions, each with its own counted objective and a refresh countdown.

**How it is presented:** Farm XP is shown only through the task manager's own completion percentage; trail energy has its own bar on My Trail's own screen, filled as each mission is completed.

**What is worth noting:** Naming the trail's resource "energy" invites confusion with a capacity that limits play, but this energy only fills toward rewards and is never spent or depleted, which keeps it apart from anything that blocks or rations how much the player can do.

**Key findings:**

- Farm tasks pay XP that raises the farm's level.
- My Trail's energy comes from three rotating missions, each paying a different amount.
- Missions refresh and are replaced once completed.
- Trail energy fills toward rewards and is never spent or depleted.

**Screenshots needed:** The farm task manager showing its completion percentage; My Trail's mission list and energy bar.

### Milestone

**Implementation summary:** Reaching level 10, 25 and 50 is recognized with its own congratulation and a gift held apart from the level's ordinary win reward.

**What was observed:** At levels 10, 25 and 50 Solitaire Grand Harvest congratulates the player on the level reached and grants a gift on top of anything the level itself paid for winning: 1,000 credits, a free round and two undos at level 10, and 3,000 credits, a free round and two undos at level 25.

**How it is presented:** The gift screen arrives immediately on completing the level in question, separate from and following the ordinary level-complete screen.

**What is worth noting:** Placing the level 10 gift directly before the app's own rating prompt uses the goodwill of an unexpected extra reward as the lead-in to asking for a rating.

**Key findings:**

- Levels 10, 25 and 50 each carry their own congratulation and gift.
- The level 10 gift pays 1,000 credits, a free round and two undos.
- The level 25 gift pays 3,000 credits, a free round and two undos.
- The level 50 gift's contents aren't stated.

**Screenshots needed:** The level 10 "Congratulations" gift screen.

### Referral

**Implementation summary:** An invite link ties a reward to a friend joining and reaching level 15, credited to the inviting user once that happens.

**What was observed:** An invite card offers a generated link to send, stating that rewards follow once invited friends reach level 15. The reward itself is described only as "amazing rewards," with no further detail given.

**How it is presented:** The invite card appears in the corner of the main screen after level 20, framed around a friend count that already shows one of the two invites as filled before anyone is invited.

**What is worth noting:** The reward's form is never named at any point the invite is shown, so what a successful referral actually pays stays undisclosed even as the invite itself is repeated.

**Key findings:**

- The invite link pays the inviting user once a friend reaches level 15.
- The reward is described only as "amazing rewards," with no amount or item named.
- The invite card counts one of two friend slots as already filled.
- No invitation was sent.

**Screenshots needed:** The invite friends card with its level-15 condition and generated link.

### Cosmetic Customization

**Implementation summary:** The profile picture, the farm's name and the pet's name are presentation choices made once during first-run introductions, with no stated effect on play.

**What was observed:** The player chooses a mouse, dog or cat as a profile picture, kept once applied. The farm and the pet are each named by the player when first introduced, with a default name offered for the pet.

**How it is presented:** Each choice is made once, at the moment the relevant feature is introduced, Sam's early tour for the profile picture, the farm's restoration intro for its name, the pet's hatching for its name.

**What is worth noting:** None of these choices carries any stated effect on how a level plays, keeping them apart from anything that changes the game rather than how it presents the player back to themselves.

**Key findings:**

- The profile picture is chosen from a mouse, dog or cat.
- The farm is named by the player during its introduction.
- The pet is named by the player when it hatches, with a default name offered.
- No functional effect on play is stated for any of these choices.

**Screenshots needed:** The profile picture selection screen; the pet-naming screen at hatching.

---

## Onboarding and first run

Solitaire Grand Harvest runs through a terms screen and a tracking request before a guided first level, then introduces a second balance, credits, within the first few levels.

### O1. Terms of service and privacy notice acceptance

The first screen after download states that the terms of service and privacy notice have been updated, names a class action waiver and an arbitration clause, and states that continuing acknowledges having read the privacy notice. This appears before any gameplay or character. Whether acceptance is a tap on a button or implied by continuing isn't stated.

### O2. Cross-app tracking permission request

Immediately after the terms screen, Solitaire Grand Harvest shows the system request to track activity across other companies' apps and websites, before the first level and before any explanation of what tracking is used for.

### O3. Farm introduction and guide character

The app opens on a farmhouse, and a dog named Sam introduces himself as the player's first farm friend and invites them to play. Sam reappears throughout to announce rewards, point at buttons and comment on progress. The main screen later shows further characters along the level path.

### O4. Returning-user login hint

On the first screen, a balloon rises from the settings button inviting a returning user to log in and restore progress. The hint is shown before the first level is played, and the same text stays attached to the settings button afterward.

### O5. Guided first level

The first level opens with an arrow pointing at the cards and an instruction to tap a card one higher or one lower than the card at the bottom of the screen, completed by playing a run upward from four. Completion shows a level-complete screen paying 1,000 coins. The top of the screen shows 10,000 coins and three darkened stars before play begins, and each successful card play adds points.

### O6. Pre-level screen introduced on the second level

Before level two, a pre-level screen appears with a wins multiplier reading times one, an info button, three locked power-up slots named for the levels that unlock them, a cost of 1,000, and a Play button. The info button explains that raising the multiplier means playing at higher stakes for bigger rewards, with level difficulty staying the same while cost and reward both rise. Tapping a locked slot names the power-up and what it does. The screen states that multipliers themselves unlock at level 25.

### O7. Forced continuation and escape routes during early guidance

After early levels the app moves the player straight into the next level without showing the level path, though an X button allows leaving to look around the farm. After the first harvest tutorial, the app states that the player should tap to start the next level, and that screen cannot be declined, though the following introduction screen can then be closed with X. After closing, Sam lists the next unlocks: the Grand Album, My Trail and the Social Hub, each at a named level.

### O8. Starting balance and the introduction of credits

The player starts with 10,000 coins. After level three and the first daily reward, a pop-up introduces credits as a second thing to use for playing levels and getting power-ups, and grants 10,000 credits. Why this particular grant of 10,000 credits was made isn't stated. Coins, gold and credits are used for what appears to be the same balance, though which of these are the same balance and which are separate isn't fully settled.

### O9. Profile and avatar selection

The main screen shows a blank default avatar; tapping it opens a profile where the player can choose a mouse, a dog or a cat as their picture, or connect Facebook. The profile shows the player's join year, level, and crop number, alongside an Info and Stats tab. Tapping the profile photo itself does nothing; tapping an animal changes it. A pointer later appears on the avatar suggesting new avatars are available, regardless of what the player has already chosen.

---

## Core loop and automation

Each level in Solitaire Grand Harvest is a solitaire layout that costs credits to enter, played by moving cards one higher or one lower than a base card, with power-ups, a streak meter and a stake multiplier all sitting around that same core action.

### O10. Solitaire level rules

Each level is a solitaire layout in which the player plays face-up cards one higher or one lower than the current base card, drawing a new base card from the deck when no card is playable. A level is won when the layout is cleared, and up to three stars are awarded, with unused cards from the extra stack counting toward the star bar. A level win pays credits, a larger amount on the first level and a smaller amount on later levels relative to their entry cost.

### O11. Level obstacles and new card types introduced across levels

Later levels add obstacles and card types, each introduced with its own explanatory card: a mouse that must collect cheese pieces to reveal cards underneath, a squirrel that collects nuts, purple cards that add extra cards to the deck when revealed, and a card whose value changes after every move. Gem cards appear once the farm is introduced, with collected gems flying to a basket. A different layout, scrolling left to right, is used in the gem tutorial level.

### O12. Per-level entry cost in credits

Starting a level costs credits: 1,000 at the base multiplier, 3,000 at the doubled multiplier and 6,000 at the four-times multiplier, with the pre-level screen stating the cost and the info text stating that cost rises with each multiplier. One level was shown with a stated reduction in cost, without an explanation. A held free round can be used in place of the cost. Whether a balance below the entry cost blocks play isn't shown.

### O13. Multiplier stake selection

From level 25, the pre-level screen carries a toggle between one, two and four times wins, and choosing a higher multiplier raises the entry cost and multiplies the rewards. The multiplier also raises other level rewards: a green pack, one cookie and one puzzle piece at one-times; a blue pack, two cookies and two puzzle pieces at two-times; a purple pack, four cookies and four puzzle pieces at four-times. The background music changes with the selection, and some events are available only in one-times mode.

### O14. In-level card streak meter

A tutorial states that playing multiple cards in a row fills a streak meter and wins bonuses, and completing a streak within a level places a wild card in the stack. A later prompt states that streaks of only one color double the reward. The meter is described within single levels; whether it carries between levels isn't stated.

### O15. Missed-card undo prompt

When the player skips a playable card, Solitaire Grand Harvest shows a message offering to undo the miss. The prompt appeared at least twice, and wasn't used the second time. Undo is a held item granted in rewards and bundles.

---

## Goals and progression

Levels sit on a path that grows crops in sequence, with fixed-level gifts, a win-streak meter and profile stats layered around that same path, and a separate set of tracks, Crop Master, My Trail, the farm and the album, each running its own progression alongside it.

### O16. Level path and crop progression

Levels sit on a path across the farm, and completing levels grows crops in sequence, carrots, wheat, pumpkins and apples, with messages naming how many levels remain before the next crop. The profile records the player's position as a level and a crop number. Scrolling the main screen early on shows a message naming a large number of games remaining before the next crop unlocks, which doesn't match a later message naming only five levels remaining.

### O17. Profile stats and staged stat unlocks

The profile's Info and Stats tab shows first-try wins, longest card streak and longest win streak, and states that further stats unlock at levels 32, 36 and 80. Later, past level 50, new stats appear: seasons completed, albums completed and team helps, the last of these appearing while the player wasn't on a team.

### O18. Level gifts at fixed levels

At levels 10, 25 and 50, Solitaire Grand Harvest congratulates the player on the level reached and grants a gift: 1,000 credits, one free round and two undos at level 10; 3,000 credits, one free round and two undos at level 25; contents not stated at level 50, where timed offers appear immediately after. The level 10 gift is followed directly by the rating prompt.

### O19. Win-streak bones meter

Around level 18, a pop-up announces a new bonus for win streaks, naming bones as the reward earned by filling a meter beside Sam that shows three bones. What a loss does to the meter, and what the prize for filling it is, aren't stated. The profile separately records the longest win streak.

### O20. Crop Master crate

After level 25, a screen introduces Crop Master, stating that keeping cards left in the deck and accumulating stars upgrades a crate, and that replaying levels fills the star bar toward the crate's maximum. When a crop is completed, the player picks four prizes from a field of twenty apples with their contents hidden before picking; one pick paid 6,000, 6,000, three free rounds and 6,000, with other prizes visible but missed. Crop Master is reached after level 46.

### O21. My Trail reward track

After level 25, Solitaire Grand Harvest introduces My Trail, stating that collecting energy unlocks rewards, with a starter grant of 20 energy and an immediate first reward of 2,000. The trail shows rewards at ten positions, ending at 11,000 credits, followed by a mystery door, and carries a three-day eleven-hour countdown. Progress reaches a point very close to the mystery door without opening it, and what happens when the countdown ends isn't shown.

### O22. My Trail missions

Energy for the trail comes from missions, which the app states will refresh. Three missions are listed, each paying progressively more energy for a counted objective, with a refresh countdown of eleven hours forty-seven minutes. Completed missions are replaced by new ones, though the full length of the refresh period isn't stated, only the remaining time.

### O23. Harvest Valley farm restoration

After a later mission, Sam introduces a decrepit farmhouse area, asks the player to name the farm, and gives a free starter kit of gems. A task manager lists restoration tasks priced in gems, tasks grant XP, and the app states that leveling up unlocks new areas. Task completion is shown as a percentage. Completing two tasks grants 2,000 credits and one slicer. The farm reaches level one and then level two, unlocking the tool shed; the barn is shown completed after the gate and fence tasks without a separate barn task being performed. A skip button is available during the farm introduction.

### O24. Bloomlight Garden season

A fairy character introduces the Bloomlight Garden season, stating that completing the season's chapters wins a grand prize of 300,000 credits. The season shows its first chapter of twelve, with parts to add, a midway prize, a chapter reward of 3,000 credits and one free round, and a figure of 38 days beside the task manager, read as the time left though the app's own meaning for the figure isn't stated. The info text states that higher multipliers yield more gems, and that gems can only be collected in the current crop level and Masters League level, with Grand and Epic levels costing extra.

### O25. Balloon bonus timed task

A balloon carrying a gift floats over the garden, stating that completing one task within the next ten minutes wins the prize. Completing the task brings the balloon down with a completion message, granting 1,000 credits and one power-up. What happens if the ten minutes pass without a task isn't shown.

### O26. Grand Spring Album

At level 36, the Grand Album unlocks, stating that winning levels and collecting packs fills the album toward its rewards. The album holds twelve sets of twelve cards, each carrying a completion reward between 8,000 and 40,000 credits, with a grand prize of 610,000 credits and a profile badge for completing every set. No cards are granted at unlock; the first pack is won in a later level, and the album shows three percent complete after the first packs. A welcome gift of 5,000 credits arrives on opening the album, and legendary cards carry an extra 2,000-credit gift when found.

### O27. Grand Emblems

A pop-up introduces Grand Emblems, naming five emblems found in special events toward a final reward of 45,000 credits, 220 gems, one joker pack, three free rounds and one jumbo golden pack, on a two-day ten-hour countdown. The info text states that playing special events and collecting emblems completes the case. One and then four emblems appeared without the player seeing where they came from.

### O28. Grand Puzzle

The Grand Puzzle runs for three days, stating that playing levels collects puzzle pieces that reveal a picture when placed. Rewards are ordered along the puzzle, rising from 540 credits and one undo to a final reward of 5,500 credits, ten minutes of infinite windmill, badges and one jumbo pack. All pictures were completed, and a further round then opens requiring more pieces. When pieces run out, the app offers ten more for 0.99.

### O29. Pet Petalina

A duckling icon with a ten-day timer opens an egg, hatching a chick the player names. The pet asks to be fed, spending cookies through a Feed button, with feeding paying a pet reward of 1,000 credits. The info text states that feeding progresses the pet through five stages, spinning a wheel at each stage, and winning a pet avatar for completing all five. Completing the first stage triggers a birthday spin paying a pack, stated to pay up to 3,000 credits, and the pet then shows stage two of five.

---

## Access and eligibility

Player level and farm level each withhold a named set of features until a stated threshold, and a small number of modes and level types carry their own separate conditions.

### O30. Player-level gates

Solitaire Grand Harvest states level requirements for features before they open: power-ups at levels 21, 30 and 41, multipliers at 25, My Trail at 25, the Social Hub at 15, the Grand Album at 36, and further stats at 32, 36 and 80. The Grand Album shows a "soon" state before level 36 and opens on reaching it. Social became available at level 13, though an earlier message had named level 15. Joining a team is stated as available at a later level, given as level eighty in one place and level eighteen in another.

### O31. Farm-level gates

The farm states that leveling up unlocks new areas, and reaching farm level two unlocks the tool shed. Other parts of the farm map aren't interactive, and the road to the seasonal park is shown as blocked.

### O32. Power-up restriction during tutorial levels

In the gem tutorial level, held power-ups disappear with a message that they're unavailable during tutorials.

### O33. Mode and level-type conditions on events and gems

Cheese Rally is stated as available in one-times mode only. The season's info text states that gems can only be collected in the current crop level and Masters League level, and that Grand and Epic levels cost extra. Masters League, Grand levels and Epic levels weren't reached.

---

## Economy and resources

Solitaire Grand Harvest runs six separate balances, credits, gems, free rounds, puzzle pieces, cookies and crowns, most of them earned through ordinary play and several of them also sold for money.

### O34. Credits balance

Credits are the main balance in Solitaire Grand Harvest, granted by level wins, level gifts, daily rewards, the hourly harvest, trail rewards, puzzle rewards, pet rewards and set rewards, and spent on level entry, continuation cards, wild cards and higher multipliers. Credits are also sold directly in the store. Later, the balance ran out mid-level.

### O35. Gems

Gems are introduced alongside the farm as a second balance, collected from gem cards inside levels, more of them at higher multipliers, and spent on farm restoration tasks. A message appears when the balance runs short, prompting more levels to be played. A timed offer separately sells 300 gems alongside a temporary bonus to gem yield.

### O36. Power-ups: Slicer, Windmill and Wild Drop

Power-ups are held as a count outside any single level. The Slicer cuts several cards at the start of a level, the Windmill clears face-up cards, and Wild Drop hides wild cards in the deck, each introduced with a free first try. Power-ups arrive through rewards, farm chapters and paid bundles. Whether the held count falls after use isn't stated.

### O37. Held undos, wild cards, plus-five cards and free rounds

Solitaire Grand Harvest grants counted holdings of undos, wild cards, plus-five card stacks and free rounds through daily rewards, level gifts, trail and puzzle rewards, and store bundles. A wild card can be played on any card on the board, and a free round replaces a level's credit cost outright. Some bundle items appear only as icons that can't be identified.

### O38. Paid continuation at the end of the deck

When the deck runs out before a layout is cleared, the app offers five extra cards, a wild card, an undo, or ending the game, with the cards and wild card priced in credits. Prices rise both within a level and across play, the wild card from 500 up to 3,500 and plus-five cards from 500 up to 8,000. Declining the first offer makes the next one within the same level more expensive. More than 40,000 credits were spent on one level and 50,000 on another.

### O39. Timed unlimited items and the rocket

Some rewards and offers grant a period of unlimited use rather than a held count: five or ten minutes of endless or infinite windmill, and fifteen minutes of infinite wild cards. Offers and the wheel also grant hours of something called a rocket, in amounts of one, three, six or 24 hours, without the app explaining what it does.

### O40. Puzzle pieces and cookies

Winning levels grants puzzle pieces and cookies in amounts set by the multiplier. Puzzle pieces are placed to reveal the Grand Puzzle, and cookies are spent feeding the pet. Puzzle pieces are also sold, ten for 0.99. Cookies are also granted by a bonus claimable every three hours.

### O41. Crowns and the Crown Center

Inside the album, the Crown Center states that crowns come from duplicate cards and can be exchanged for a prize: 5,000 credits at 150 crowns, boosters at 250, or a golden pack at 500. Individual cards carry their own crown value, given as two, three or five crowns each. The crown balance shows at zero, and none were earned or spent.

### O42. Free lucky wheel spin

A lucky wheel offers one free spin over a set of prizes: 2,000, 3,000, 5,000 or 12,000 credits, two wild cards, double credits, a 24-hour rocket, or three free rounds. The spin taken paid double credits. A second wheel appeared later with a higher prize set: 3,000, 6,000, 9,000 or 22,000 credits and a 24-hour rocket.

### O43. Card packs won from levels

Before certain levels the app shows a pack that can be won by winning that level, and it's only granted, and only opened, after the level is won. Pack color depends on the multiplier chosen, green at one-times, blue at two-times, purple at four-times. Revealed cards differ between packs and can repeat, and one legendary card carried an extra 2,000-credit gift.

### O44. Unexplained grant from tapping the dog

Tapping Sam on the main screen granted coins, with no stated reason given for the grant.

---

## Social

Solitaire Grand Harvest's social surfaces are thin: a friends tab, a team feature behind a level gate, a card-trading notice with no surface behind it, and a race against named characters.

### O45. Social Hub friends tab

When Social opens at level 13, the only available part is Friends: connecting with Facebook, the player's level, an Add Friends control, and a friend requests area. No friends were added.

### O46. Team feature and team stats

The Social Hub shows a "Join a team" tab that opens at a later level. Later, new stats include team helps, and a message congratulates being part of a team, while the player finds team isn't available to them. The unlock level is given as eighty in one place and eighteen in another.

### O47. Card trading notice

A balloon next to the album states that card trading is now available, but no trading surface is found inside the album.

### O48. Cheese Rally race

Cheese Rally is a race against four named racers in cheese cars, stating that being first to finish five Solitaire levels wins prizes. The player moves from second to first, wins the first race, advances to stage two of three, and later fails to complete a further race. Stage rewards include a silver pack, a free round, 3,000 credits and one emblem. The race carries a ten-minute timer, and whether the other racers are people or automated entrants isn't stated. The event is available in one-times mode only.

---

## Reach beyond the app

Settings offers sign-in through three services, an invite link sends a reward outside the app, and a newsletter sign-up is the first request for an email address encountered.

### O49. Sign-in options and Facebook links

Settings offers to save progress by signing in with Facebook, Apple or Game Center, with the Facebook button alone surrounded by coins and no stated reward or reason given for them. Settings also carries a Like button that opens Facebook. Settings otherwise lists an account, a verification code, notifications, off by default, sounds and vibration, game rules and contact support.

### O50. Invite friends

An invite card appears after level 20, offering a generated link and stating that inviting two friends wins rewards, with a further message stating that friends who reach level 15 unlock amazing rewards, with more friends bringing bigger rewards. The speaker of the accompanying line isn't shown on screen, and the display counts one of the two friends as already present. The reward is never specified beyond "amazing rewards," and no invitation was sent.

### O51. Newsletter email sign-up

After level 60, a pop-up invites the player to join the farm's newsletter for exclusive content and bonus rewards. After an address is entered, the app states a confirmation link was sent and advises checking spam. This is the first request for an email address encountered, and whether the bonus rewards were granted isn't shown.

---

## Monetization

Solitaire Grand Harvest's monetization runs through a store, a rotating set of timed offers, a piggy bank, a second paid wheel spin and a small puzzle-piece sale, all selling into the same handful of balances.

### O52. Grand Harvest Store

Tapping the credits balance opens the Grand Harvest Store, which lists credit bundles with included items: 30,000 credits with five cards, one free round, one undo and one wild card for 4.99, up through 290,000 credits with ten times the items for 35.99, plus plain credit amounts at 1.99 and 5.99. From level 36 the bundles add card packs, rising from purple at the lower prices to gold at the top tiers. Store items carry no starter or other special framing, and the timed pop-up offers aren't listed inside the store itself.

### O53. Timed pop-up offers

A series of offers appears, each on a thirty-minute countdown and capped at one purchase: a buy-one-get-one-free offer, a "starter kit" claiming 300 percent more for a similar price, a buy-one-get-three-free offer, a "Triple Farm Fun" set of three price tiers, a buy-one-get-five-free offer whose claimed bonus and price both varied between showings, and a three-tier "Oscar's Favorite" offer. New pairs of offers follow once the previous pair expires.

### O54. Re-prompting of timed offers

Active offers reappear as pop-ups as their countdown runs down, seen at twenty, fifteen, seven, five, four and one minute remaining, with the first two offers shown three times each. An offer also opened mid-level when credits ran short for a continuation card. Once the first offers expire, their icons are replaced by the piggy bank icon.

### O55. Grand Kit announcement

After the second crop, a pop-up announces the Grand Kit at a stated 200 percent more, offering the same credits, undo, free round and cards the earlier starter kit offered, at a different price and percentage. The kit had already appeared in the store before this announcement, and later disappears from both the store and the news feed.

### O56. Peggy the piggy bank

After level 18, Peggy is introduced as a reserve that adds bonus credits after every level, won or lost, toward a savings the player can later claim for a price. The first deposit is made by the app itself. Balances shown were 4,050, 7,000, 21,000 and 35,000 credits, at which point no further credits can be added until the savings, priced at 3.99, are claimed within two days.

### O57. Paid second lucky wheel spin

After the free spin, the wheel offers a second spin for 2.99 over a higher prize set: 12,000, 17,000, 23,000 or 55,000 credits, multiple wild cards, a 24-hour rocket, several free rounds, and unidentified items. The paid spin can be closed without spinning, and was not taken.

### O58. Puzzle piece sale

When puzzle pieces run out, the app offers ten more for 0.99.

### O59. Purchase flow and cancellation message

Tapping Peggy's price brings up Sam before the App Store's own payment sheet. Cancelling that sheet produces a message stating there were problems with the transaction.

---

## Return triggers

Solitaire Grand Harvest brings the player back on three separate clocks, daily, hourly and three-hourly, alongside a notification prompt and a set of multi-day event countdowns.

### O60. Notification permission prompt

After the first two offers are closed, Solitaire Grand Harvest asks for notification permission, framed around not missing new events and prizes, with an option to opt out at any time. Notifications are off by default in Settings before this prompt. Permission was allowed.

### O61. Daily Goodies

After level three, a Daily Goodies pop-up states that a daily visit sends bigger prizes, showing four weeks of rewards; day one paid 2,500 credits and six undos. After the phone restarted and the player returned, day two paid 5,000 credits and three free rounds. What a missed day does to the sequence, and whether a new day had genuinely begun between the two claims, aren't stated.

### O62. Rating prompt

Directly after the level 10 gift, the app asks whether the player is enjoying Solitaire Grand Harvest and invites a rating with a thumbs-down or thumbs-up. The prompt follows an easy, rewarded level, and what follows either thumb isn't shown.

### O63. Hourly crop harvest

Once crops have grown, a tutorial points to a harvest control, and collecting it states that crops can be harvested again in an hour for free credits, with a countdown to the next harvest. Later harvests collect all grown crops together.

### O64. Cookie bonus every three hours

A bell on the pet icon leads to a free cookies bonus, offered again every three hours. The countdown read two hours fifty-nine minutes directly after a claim.

### O65. Daily farm delivery bonus

After the first farm tasks, a delivery bonus of 1,000 credits is granted for delivering farm goods, and the info text states that expanding the farm by completing season tasks increases the size of this daily bonus. What qualifies the player for the bonus beyond completing farm tasks isn't shown.

### O66. Event icons, countdowns and news ticker

The main screen gathers events in a column on the left, each with its own countdown: the pet at ten days, the puzzle at three days, the race, and the emblems at four days. A rotating news item shows a different reminder on each tap: a Peggy deal, Grand Emblems, a wheel spin and a named avatar. These features appear together after level 50 without separate introductions for some of them.
