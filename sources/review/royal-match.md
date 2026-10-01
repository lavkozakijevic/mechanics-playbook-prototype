# Royal Match: case study copy draft

Draft for review. Nothing here has been written to `sources/content/royal-match.md`, `sources/coverage/royal-match.md` or any other file. Source of facts: `sources/analyses/royal-match.md` only. Written to `sources/voice-guide.md` as it stands, with Strava's approved copy as the register, which means British spelling (colour, customise, personalise), the way Strava's copy runs.

Royal Match is still on the old shape throughout (every block carries What was observed, How it is presented, What is worth noting and Key findings; the intro and system view say "the user" and "a complex system"). So everything below is a full new draft. Where a section card or teaser exists today I show current and proposed.

Prices and coin amounts follow the analysis, which gives no currency symbol, so none is added. Three prices the analysis records only as heard in fragments (the 50,000-coin pack, royal treasure, the Easter Pass activation) are left out of the copy and go on the coverage report.

## At a glance

- **Applied tags in the analysis:** 20 (Lives, Boosters, Challenge, Leveling, Progression Gate, Soft Currency, Hard Currency, Milestone, Experience Points, Variable Reward Outcome, Reward Multiplier, Streak, Seasonal Progression Pass, Set Collection, Clan / Guild, Gifting, Leaderboard, Comparative Rank, Cosmetic Customization, Purchase Ladder).
- **Blocks:** 18. Held back by the friend test: **Leveling** and **Variable Reward Outcome** (reasons under Part B).
- **Titles:** five blocks carry the app's own name: Butler's Gift (Streak), Easter Pass (Seasonal Progression Pass), Culinary Collection (Set Collection), Teams (Clan / Guild) and Easter Treasures (Purchase Ladder).
- **Observations:** 66. 0 dropped outright, 66 rewritten. Several lose sentences (listed at the end). No section is empty.
- **Decisions the rules did not settle:** see "Decisions" at the end.

---

# PART A: the summary page

## Teaser

Current: "Royal Match pays every part of itself, the castle, the team, the season, from the same completed level."

Proposed: "In Royal Match, one cleared level pays into your castle, your coins, your player level and every event running at the time."

Reason: "pays every part of itself" is a figure of speech standing in for the fact; the fact is the list.

## Intro

Current: "Royal Match is a match-three puzzle game structured around one activity that pays into everything else: clearing a level. The level's star pays for building out a castle and its surrounding areas, its coins fund undoing failure and buying items, and every timed event running at once, a team tournament, a seasonal pass, a card collection, advances from the same completed level. Failure, not entry, is the switch that turns the loop into a monetization surface: hearts are only spent when a level is lost, and the paid offers are priced against exactly that shortfall."

Proposed:

Royal Match is a match-three puzzle game. Each level gives you a target and a number of moves, with no timer, and clearing it pays a star that you spend on building a castle one area at a time. Failing a level costs a heart, and Royal Match offers to keep a failed level going for 900 coins, the same price as refilling your hearts. From level 21 you can join a team, and from level 27 timed events arrive one after another, a tournament, a season pass and a card collection among them, each moving forward as you clear the same levels.

Reason: "structured around one activity", "monetization surface" and "priced against exactly that shortfall" are analysis wording. The two 900-coin prices carry the point on their own.

## How it fits together

Current: "Royal Match is a complex system built around a single spine: clearing a level. Every measure in the game, the player level, the star that funds castle building, the coins that undo failure, and every timed event's own progress unit, moves only when a level is cleared, and nothing else advances any of them."

Proposed:

You start a level with a target to hit inside a limited number of moves. Clear it and you get a star and your player level goes up by 1. Stars pay for the next step of your castle, and an area of 6 to 9 steps ends with a chest and the next area, out of 152. Fail the level and you lose a heart, which comes back in 24 to 25 minutes, or you can pay 900 coins to refill it, or ask your teammates. When you run out of moves, Royal Match offers 5 more for the same 900 coins.

The rest of the game hangs off that loop. Assist items unlock between levels 6 and 18, each at its own level, and you spend them inside levels. Teams open at level 21, and a team gives you free lives, a tournament and a message board. From level 27 the events arrive one at a time, and every one of them moves forward as you clear levels: Propeller Madness, the team tournament, Easter Treasures, the Easter Pass, the Egg Hunt and the Culinary Collection. The shop sits behind your coin balance, and its offers, from coin packs to team bundles to the pass, mostly sell the things you run short of when a level goes wrong: coins, hearts and boosters.

Reason: "Every measure moves only when a level is cleared" is kept as the loop itself, told in order. "Spine" and "complex system" go. The old card and system view said five events; the analysis lists six (see the report). "Between levels 6 and 18" follows the royal hammer after six or seven games and the jester's hat after level 18. The closing sentence names the shortage items the offers sell, without saying why Royal Match sells them.

---

## Mechanics

### Lives

**Implementation summary:** Royal Match takes a heart only when you fail a level, never for starting one, and restores each heart on a timer.

**How it works.** You start with 5 hearts. Starting a level or retrying one costs nothing, and a heart goes only when a level is failed, which first happens around level 18. A spent heart comes back after 24 to 25 minutes, and when you hold fewer than 5, the lives panel shows how long until the next, 7 minutes 30 seconds at 3 hearts. The same panel offers a refill for 900 coins, and a free lives button that opens an inbox of lives from teammates and points you to ask them when it's empty. Running out of moves in a level gets a similar offer: 5 more moves for 900 coins, the same price. Paid offers sell periods of infinite hearts instead of heart counts, from 15 minutes up to 18 hours, and the Easter Pass raises your limit from 5 hearts to 8 once you activate it.

**Illustration brief.** The lives panel with 3 hearts held, the countdown to the next heart, the 900-coin refill and the button that asks teammates for lives.

**What stands out.** A heart is taken for failing, not for trying, so a run of cleared levels leaves all 5 untouched until the failures start. What the offers sell is time: infinite hearts for 15 minutes to 18 hours.

**Trigger:** Failing a level.

**What it needs:** A balance of up to 5 hearts, with a timer running for each one spent.

**How it connects:** Teammates send hearts through Gifting, coins from Soft Currency pay for the refill, and the offers in Hard Currency and the Easter Pass in Seasonal Progression Pass replace hearts with periods of infinite hearts.

**Worth noticing:** Royal Match charges the same 900 coins to refill your hearts and to keep a failed level going.

**Screenshots needed:** the lives panel at 3 hearts with its countdown; the extra-moves offer when a level is lost.

Reason for the cuts: the old block ends on what happens at zero hearts, which is a gap in the analysis and goes to coverage. The line about the timing of resource and difficulty pressure lining up was the writer's reading, not a fact.

### Boosters

**Implementation summary:** Royal Match unlocks its assist items one at a time as you clear levels, then sells unlimited use of them by the hour.

**How it works.** At level 2 Royal Match shows a row of boosters, all locked and impossible to tap, and you can start the level without choosing any. After 6 or 7 games the royal hammer unlocks, with 3 to start, and Royal Match tells you it clears any object on the board and to tap the hammer and then the object. Over the next levels come an arrow that clears a row, after level 14, a cannon that clears a column, after level 16, and a jester's hat that shuffles the board, after level 18, each with a short instruction at the level where it first works. You pick items before a level starts or use them during it, and the count drops each time. TNT turns up in offers, in the Easter Pass and as a starting item in bonus levels, and the propeller, which erases a row or a column, comes in with Propeller Madness. Area chests, events, the Easter Treasures ladder and the shop all refill your supply, and offers sell unlimited boosters for a period, from 1 hour to 100 hours.

**Illustration brief.** The level 2 booster row, locked, beside the royal hammer's unlock instruction and an offer card showing endless boosters for 1 hour.

**What stands out.** You see the boosters at level 2, locked, long before you can use any, and each is taught when it unlocks. Most of what the named treasure bundles and the team offers contain is booster time rather than booster counts.

**Trigger:** Tapping an item before a level or during one.

**What it needs:** A held quantity of the item, or an active unlimited period, and a level at which it has unlocked.

**How it connects:** Progression Gate releases each item at its level, Streak's Butler's Gift starts a level with power-ups already in hand, and Hard Currency, Seasonal Progression Pass and Purchase Ladder all hand out or sell boosters.

**Worth noticing:** Royal Match sells booster use by the hour as well as by the item.

**Screenshots needed:** the locked booster row at level 2; the royal hammer unlock instruction; an offer showing endless boosters.

### Challenge

**Implementation summary:** Royal Match gives every level a target and a move limit with no clock, and changes the target as the levels go on.

**How it works.** Each level states what to achieve and how many moves remain. Reach the target inside the moves and the level is complete; run out and it ends as a failure you can start again. The target changes from level to level: breaking a box, collecting 36 wooden pieces, destroying patches of grass, matching next to mailboxes to collect mail, matching next to royal eggs to break them. Level 39 is marked as a hard level before you enter it. At intervals the play button is replaced by King's Nightmare, offering a 50-coin reward that you can play or skip. One has you carry water to a sprinkler in 20 moves, one has you break all the boxes before time runs out, and a later one has you get water to a king you can no longer see, in 30 moves. Events run on top of the levels: Propeller Madness, the Egg Hunt and the team tournament each state their goal and show their remaining time.

**Illustration brief.** A level start showing its target and moves left, beside the King's Nightmare button in place of the numbered level.

**What stands out.** There is no timer on a level; the pressure is the move count, and the one timed exception is a King's Nightmare. The hard level is labelled before you play it, and every King's Nightmare is skippable.

**Trigger:** Tapping the play button, which at intervals offers King's Nightmare instead.

**What it needs:** A level with a stated target and a number of moves.

**How it connects:** Failing a level spends a heart in Lives, Boosters help you through, events advance from your cleared levels in Experience Points, and the hard level carries a bigger reward in Reward Multiplier.

**Worth noticing:** Royal Match replaces the numbered level with a separate short activity, King's Nightmare, each with its own goal, and a coin reward you can skip.

**Screenshots needed:** a level with its target and move counter; the King's Nightmare button; the hard-level marker at 39.

### Progression Gate

**Implementation summary:** Royal Match holds back teams until level 21, the collection until level 41 and each assist item until its own level.

**How it works.** Before level 21 you can open a team and see its description, capacity, team score and required level, but tapping join says to reach level 21. Royal Match prompts you to join a team on completing level 20, one level early, and names the value as free lives and free rewards. The collection tab says level 41 must be reached to unlock it and describes nothing else. Assist items sit locked on screen, visible and untappable, until the level where each is released: the royal hammer after 6 or 7 games, the arrow after level 14, the cannon after level 16 and the jester's hat after level 18, with a short instruction at the first level each works.

**Illustration brief.** The team join message beside the collection tab's level 41 lock and the locked booster row.

**What stands out.** Each gate shows you something different: a team in full, a bare level number, a visible tool you can't tap.

**Trigger:** Reaching a stated player level, or tapping a locked team, tab or item.

**What it needs:** A player level, which rises by 1 for every level you clear.

**How it connects:** The gates read from your level, and they hold back Clan / Guild, Set Collection and Boosters.

**Worth noticing:** Royal Match shows the whole team screen before level 21 and tells you nothing about the collection beyond the level it needs.

**Screenshots needed:** the level 21 join message; the collection tab's lock; the locked booster row.

### Soft Currency

**Implementation summary:** Royal Match runs two earned balances: stars that pay only for castle tasks, and coins that pay for refills and extra moves.

**How it works.** Every cleared level pays 1 star. Castle tasks cost 1 star at first, then 2: area one's tasks are the castle, the fountain, gazebos, bushes, swans and flowers, area two includes installing glass, laying the carpet and placing chairs, and area three, the dining room, has 9 things to customise. Tapping a task you can't afford tells you that you don't have enough stars and to beat levels to earn them. Spend enough and the build is complete at once, with an animation, and you can leave stars unspent, with a marker by the area chest showing tasks are waiting. Coins come from levels, King's Nightmare (50 coins, later doubled), bonus levels (more than 500), area chests (250), event grand prizes (10,000) and the 5 coins you get for sending a teammate a life. Coins go on a heart refill at 900 and 5 extra moves at 900, and the shop sells them. The home screen shows 2,093 coins after just 2 levels.

**Illustration brief.** The home screen with its star, coin and heart balances, and the star shortage message on the fountain task.

**What stands out.** Stars and coins have separate sources and separate uses. One level pays 1 star, so a 2-star task takes 2 levels and building slows down. Undoing a failure costs 900 coins and a whole bonus level pays a little over 500.

**Trigger:** Clearing a level for stars; failing one or running out of moves for coins.

**What it needs:** Cleared levels, for stars; play, chests, events and teammates, for coins.

**How it connects:** Hard Currency sells the same coins, Milestone pays out the chests at area completion, Gifting pays 5 coins for a sent life, and Lives and Boosters are where the coins go.

**Worth noticing:** Royal Match accepts stars only as payment for castle tasks.

**Screenshots needed:** the home screen balances; the star shortage message; the area task list with its costs.

### Hard Currency

**Implementation summary:** Royal Match sells the coins you also earn in play, in packs from 1,000 coins at 1.99 up to 100,000 at 99.99.

**How it works.** Tapping your coin balance opens the shop, which leads with a special offer and a princess treasure before the plain coin packs. The special offer is 1.99 for endless boosters for 1 hour, a set of power-ups and 2,000 coins, and the princess treasure is 9.99 for the same boosters and power-ups with more coins. The first packs are 1,000 coins at 1.99, 5,000 at 7.99 and 10,000 at 14.99, and the longer list adds 25,000 at 29.99 and 100,000 at 99.99, with more coins per unit of money at the higher prices. Behind a more offers button sit four named bundles, each pairing coins with a power-up multiplier and a period of unlimited items: queen's treasure at 19.99, marked popular, with 10,000 coins, 2 times power-ups and 12 hours of endless boosters; king's treasure at 39.99 with 25,000 coins, 4 times power-ups, 24 hours of endless boosters and 6 hours of endless hearts; royal treasure with 50,000 coins, 10 times power-ups, 72 hours of endless boosters and 12 hours of endless lives; and superior treasure at 99.99, marked best value, with 65,000 coins, 13 power-ups, 100 hours of endless boosters and 18 hours of hearts. What you buy lands in the same coin balance that you spend on refills and extra moves.

**Illustration brief.** The shop's first view, special offer and princess treasure above the coin packs, beside the named bundles with their popular and best value banners.

**What stands out.** The 1.99 special offer gives 2,000 coins plus boosters and power-ups, and the 1.99 coin pack gives 1,000. Every bundle above the cheapest pairs coins with time-limited unlimited items rather than with quantities alone.

**Trigger:** Tapping your coin balance.

**What it needs:** A coin balance for the purchase to land in.

**How it connects:** The coins are the balance from Soft Currency, the booster and heart periods come from Boosters and Lives, and the team bundles sit in Gifting.

**Worth noticing:** Royal Match leads its shop with timed offers ahead of the plain coin packs.

**Screenshots needed:** the shop's first view; the more offers screen with the four treasures; the extended coin pack list.

### Milestone

**Implementation summary:** Royal Match closes each castle area with a chest and a celebration, and sets bonus levels at 20 and 40.

**How it works.** Finish an area's last task and you get a chest to open, a celebration where the king is pleased, a view of the finished area, and then a new area to unlock with a tap. The area one chest pays 250 coins and 4 kinds of boosters and power-ups. The area three chest pays 250 coins, further items and 4 cards for the Culinary Collection. Area one completes at level 11, area two at level 21 and area three shortly after level 41, out of 152 areas in all. Level 20 is a bonus level, shown with a pile of gold and a crown: collect as many coins as you can in 20 moves, starting with 2 TNTs, with no pass or fail. Matches next to coins collect them, combining the 2 TNTs gives 80 coins at once, and the whole level pays more than 500. Level 40 is a bonus level of the same kind. The tournament adds a knight title at a stated number of tokens.

**Illustration brief.** The area completion chest opening, beside the level 20 bonus level with its pile of gold and its move counter.

**What stands out.** An area ends with a chest, a celebration and a reveal of the finished area before the next one opens. Bonus levels have no pass or fail, only the amount you collect.

**Trigger:** Spending the stars on an area's last task; reaching a bonus level.

**What it needs:** The stars for every task in the area.

**How it connects:** The stars come from Soft Currency, the chest's cards go to Set Collection, and the knight title is earned with tokens in Experience Points.

**Worth noticing:** Royal Match pays a bonus level by how many coins you gather in the moves you're given, not by whether you clear a target.

**Screenshots needed:** the area completion chest and celebration; the level 20 bonus level introduction; the knight title.

### Experience Points

**Implementation summary:** Royal Match gives each event its own counting unit, and every one of them moves forward as you clear ordinary levels.

**How it works.** Once an event is running, the levels you were already playing push it forward. After a level, a token moves into the team tournament, where tokens turn into lances. Easter Pass keys unlock rewards as you beat levels. Egg Hunt eggs build toward the next basket, with 25 more eggs needed at the start. Propeller Madness asks you to collect 5 propellers, then 100 coins, and on through steps to a grand prize of 10,000 coins over 2 days. Duplicate cards become card stars, which the collection says open chests. Each unit shows what remains until the next reward: 4 more tokens for the team's next reward, or 76 more to become a knight.

**Illustration brief.** The home screen's event items side by side, each showing its own counter against its next threshold.

**What stands out.** Every unit advances from the same level play, and each is shown as what's left to the next reward rather than as a balance. Only card stars can be spent.

**Trigger:** Clearing a level while an event is running.

**What it needs:** A running event, and the levels to clear for it.

**How it connects:** The events sit in Challenge, keys run the pass in Seasonal Progression Pass, tokens feed Clan / Guild, card stars come from Set Collection, and Reward Multiplier doubles progress.

**Worth noticing:** Royal Match gives each event its own unit instead of one shared event currency.

**Screenshots needed:** the tournament, Egg Hunt and Propeller Madness items on the home screen with their progress.

### Reward Multiplier

**Implementation summary:** Royal Match doubles rewards for 15 minutes from level 33, and marks level 39 as a hard level that triples its reward.

**How it works.** At level 33 a doubled-reward marker appears beside the level and a 15-minute countdown starts, with rewards doubled for that time. Both your contribution to the team and your progress in Propeller Madness double during the window. Opening the marker is what explains it. At level 39, Royal Match marks the level as hard before you enter it, and passing it triples the reward and gives 30 points toward the Egg Hunt. One King's Nightmare carries a doubled reward marker over its 50 coins.

**Illustration brief.** The level 33 marker with its 15-minute countdown, beside the hard marking on level 39.

**What stands out.** Both modifiers state their factor before you play, doubled or tripled, and the base reward stays the same under it.

**Trigger:** Reaching level 33, level 39 or a marked King's Nightmare.

**What it needs:** A level that carries the marker.

**How it connects:** The window doubles progress in Experience Points and the team contribution in Clan / Guild, and the marked levels come from Challenge.

**Worth noticing:** Royal Match counts the doubling down in minutes, and puts the hard marking on the level itself, in advance.

**Screenshots needed:** the level 33 marker and its countdown; the hard-level marking and reward at level 39.

### Streak (Butler's Gift)

**Title:** Butler's Gift

**Implementation summary:** Royal Match's Butler's Gift starts your next level with power-ups when you beat levels on your first try.

**How it works.** Royal Match introduces Butler's Gift with the line to beat levels on your first try to start the next level with power-ups. Its progress shows as active on 2 out of 3. At level 36 a power-up is spent to avoid failing and losing the gift. Your profile also keeps a count of first-try wins.

**Illustration brief.** The Butler's Gift state showing 2 out of 3 active, beside the first-try wins count on the profile.

**What stands out.** The run is counted in levels rather than days, as first-try clears, and it can lead you to spend a power-up to avoid failing a level.

**Trigger:** Clearing a level on your first try.

**What it needs:** First-try clears, and power-ups for Royal Match to give.

**How it connects:** The gift hands out power-ups from Boosters, and a failed level costs a heart in Lives.

**Worth noticing:** Royal Match keeps a separate count of first-try wins on your profile next to the running state.

**Screenshots needed:** the Butler's Gift introduction; the 2 out of 3 state; the profile's first-try wins.

Reason: the analysis tags this at strongly supported on the framing and the displayed state. What a failure does to the state was not seen, so the block says nothing about it beyond the level 36 line, which is observed. See the decision about the one level 36 sentence.

### Seasonal Progression Pass (Easter Pass)

**Title:** Easter Pass

**Implementation summary:** Royal Match's Easter Pass opens at level 37 as a 30-position track with a second, paid reward lane at every position.

**How it works.** At level 37 the screen darkens and an arrow points at a key icon carrying a 27-day 12-hour countdown, introducing the Easter Pass with a first reward to claim. Royal Match tells you to beat levels and collect keys to unlock rewards, and the key icon shows a marker when a position has been reached. The track holds 30 rewards, each free reward with a matching golden-lane reward at the same position. The first position pays 1 TNT free, and in the golden lane 8 lives instead of 5, a golden profile picture frame and golden username, and a gift for teammates. The second pays a coloured candy free and 15 minutes of infinite hearts in the golden lane. The last pays 3 times power-ups and boosters free and 1 hour of infinite boosters plus 1,000 coins in the golden lane. A bonus bank sits at the very bottom of the track, and Royal Match says activating the pass unlocks it at the end of the stages. Activation is offered from the pass itself and from the bottom of the lives panel, with an activate button.

**Illustration brief.** The two-lane track with the free lane above its golden lane at the first position, and the bonus bank at the foot.

**What stands out.** The golden lane pays more at each of the same 30 positions, and some of it changes how the game plays: a limit of 8 hearts. The bonus bank appears only when you scroll to the bottom of the track.

**Trigger:** Reaching level 37; beating levels to collect keys.

**What it needs:** Keys from cleared levels, and a purchase to open the golden lane.

**How it connects:** Keys come from Experience Points, the 8-heart limit changes Lives, the golden frame is Cosmetic Customization, and the gift for teammates is Gifting.

**Worth noticing:** Royal Match lists the golden lane's rewards at the moment the track appears, beside a countdown of 27 days and 12 hours.

**Screenshots needed:** the pass introduction at level 37; the two-lane track; the bonus bank at the bottom.

### Set Collection (Culinary Collection)

**Title:** Culinary Collection

**Implementation summary:** Royal Match's Culinary Collection asks for 15 sets of nine cards in 27 days and 12 hours, with duplicates turning into card stars.

**How it works.** After level 40, Royal Match starts the Culinary Collection with a first card pack of 4 cards: a rolling pin, falafel, marshmallow and sorbet. The info screen says to collect card packs from events and chests, get cards from card packs and friends to complete sets, and complete all sets to claim the collection rewards and the chef badge. The sets are frozen, street foods, sweets, garnishes, tools, dairy, pastries, spices, cuisines, snacks, market, coffee, drinks, dining and breakfast, and each shows the reward for completing all 9 of its cards. That is 135 cards to collect. Duplicate cards become card stars, which open chests. The grand prize is 10,000 coins, the chef badge and 10 times boosters. Completing area three gives 4 further cards, and from the team screen you can request cards from teammates, one card at a time, with a request lasting 24 hours.

**Illustration brief.** The collection screen showing the set list and one set's nine cards beside the first pack's four cards.

**What stands out.** Every set shows its own reward and the whole collection has a grand prize, on a countdown. Cards come from teammates as well as from packs and chests.

**Trigger:** Completing level 40; opening card packs.

**What it needs:** Cards from packs, chests and teammates.

**How it connects:** Level 41 opens it in Progression Gate, the area chests pay cards in Milestone, teammates are asked for cards in Clan / Guild, and card stars sit in Experience Points.

**Worth noticing:** Royal Match turns a repeated card into a card star rather than leaving it idle.

**Screenshots needed:** the first card pack opening; the list of 15 sets; the info screen.

### Clan / Guild (Teams)

**Title:** Teams

**Implementation summary:** Royal Match's teams hold up to 50 players with a shared score, a tournament, a message board and standing requests for lives and cards.

**How it works.** The prompt to join arrives when you complete level 20 and names the value as free lives and free rewards; you can join from level 21. A team has a badge, name, description, roster showing each member's level, capacity of up to 50, team score, required level and an activity marker. You can join open teams directly or send a request, some teams are closed with high activity, and some state that crowns are needed. You hold one team at a time: leaving asks for confirmation. Inside the team, a message board shows members' messages and help requests, including a request for lives timestamped 977 days and 21 hours earlier, and you can type and send a message. After level 22 a tournament pop-up appears with a notice that at least 10 members are needed in the group to take part. If your team has fewer, leaving it for a team that has enough makes the tournament appear. The team icon carries a numbered marker when a teammate's request is waiting.

**Illustration brief.** A team profile with its roster, capacity and required level, beside the message board with a help request and the numbered marker on the team icon.

**What stands out.** The tournament depends on the team, not on you: it needs a team of at least 10 members, and the team holds the position and the score.

**Trigger:** Completing level 20, or tapping the teams item from level 21.

**What it needs:** Player level 21, and a team with room in it.

**How it connects:** Level 21 comes from Progression Gate, teammates send lives in Gifting, the tournament runs on Experience Points and Comparative Rank, and the team score ranks on the Leaderboard.

**Worth noticing:** Royal Match makes the tournament depend on the size of the team you've joined, not on your own level.

**Screenshots needed:** a team's profile page; the message board with a help request; the 10-member notice.

### Gifting

**Implementation summary:** Royal Match lets you send a teammate a life when they ask, and pays you 5 coins for sending it.

**How it works.** When your lives panel is empty, it says there are no lives in your inbox and to ask your teammates, with a request button; a request you send lasts 4 hours. On the team's message board you can send a life to a teammate who asked, and you get 5 coins back for it. Trying to help the same request again says you already helped. The paid team offers go to the whole roster: after the first tournament level, Royal Match shows bronze at 9.99, silver at 19.99 and gold at 39.99, timed to the tournament's remaining 2 days and 13 hours, each available as one offer only. Each gives you coins, power-ups and unlimited items, and gives every team member a period of infinite hearts: 15 minutes for bronze, 30 for silver, 1 hour for gold. The Easter Pass's golden lane also includes a gift for teammates.

**Illustration brief.** A help request on the message board with the send-a-life button and the 5-coin return, beside the three team offers.

**What stands out.** The sender is paid, and a request can be helped once. The team offers give hearts to everyone on the roster, not to one chosen teammate.

**Trigger:** Seeing a teammate's request for lives.

**What it needs:** A team, and a teammate's request to answer.

**How it connects:** Lives are what is sent, in Lives, the team is Clan / Guild, and the gift for teammates comes from the Easter Pass in Seasonal Progression Pass.

**Worth noticing:** Royal Match shows its team offers right after the tournament says members who don't contribute get no reward.

**Screenshots needed:** the empty lives inbox with its request button; a help request with the send button; the three team offers.

### Leaderboard

**Implementation summary:** Royal Match ranks players by level and crowns and teams by score, for the world and for your country.

**How it works.** The golden cup opens a leaderboard with three tabs: friends, players and teams. The players tab shows a world list and a country list, each ordered, with names, pictures, levels and crowns; the highest level on the world list is 13,401 and crowns run as high as 11,000. The teams tab shows teams in order with badges, names, capacity and team score, for the world and your country, with the top teams usually full at 50 members. The friends tab shows only a prompt to connect with Facebook, framed as saving your progress, and tapping it asks to use Facebook to connect you; declining gives a message that the sign-in failed and to try again. Inside the tournament, Royal Match ranks teams by position and members by contribution.

**Illustration brief.** The players tab's world list with levels and crowns, beside the friends tab's Facebook prompt.

**What stands out.** Only the friends tab sits behind a sign-in, and its prompt says it is about saving progress, though what it opens is the friends list. The lists carry players at levels in the thousands.

**Trigger:** Tapping the golden cup.

**What it needs:** Other players' levels and crowns, or teams' scores; a Facebook connection for the friends tab.

**How it connects:** The levels come from Progression Gate's counted level, the team scores from Clan / Guild, and the tournament ranking from Comparative Rank.

**Worth noticing:** Royal Match shows crowns beside every player, up to 11,000, and some teams ask for crowns to join.

**Screenshots needed:** the players world list; the teams list; the friends tab's Facebook prompt.

### Comparative Rank

**Implementation summary:** Royal Match shows your team's tournament position beside the reward at the next position, and your own place inside the team.

**How it works.** After you join a team with enough members, a team tournament icon appears and tells you to convert tokens to lances and contribute to your team. The screen shows the team's current position, nine in the first view, the reward at the next position, a power-up that is 4 more tokens away in the first view, each member's contribution, and your own standing inside the team. Members with zero contribution are marked as getting no reward without contributing. After level 34, a further tournament reward arrives, your armour changes from silver to gold, and you appear in second place within the team.

**Illustration brief.** The tournament screen showing the team's position, the next reward, the member contribution column and the armour colour.

**What stands out.** The position is shown beside the reward it earns, and your armour colour changes with your own standing in the team.

**Trigger:** Contributing tokens to the tournament.

**What it needs:** A team of at least 10 members, and tokens from cleared levels.

**How it connects:** The team is Clan / Guild, the tokens come from Experience Points, and the other lists sit in Leaderboard.

**Worth noticing:** Royal Match shows every member's contribution on the same screen as the team's position.

**Screenshots needed:** the tournament screen with position and contributions; the armour change from silver to gold.

### Cosmetic Customization

**Implementation summary:** Royal Match lets you pick an avatar, a frame and a name, and sells a golden frame and username through the Easter Pass.

**How it works.** Tapping the grey and white profile icon lets you enter a username, use your Facebook photo or pick an avatar, choose a frame and choose a name. Once set, your name and frame show on your profile. Royal Match never prompts you to do any of it. The Easter Pass's golden lane gives a golden profile picture frame and golden username at its first position, lasting until the event ends.

**Illustration brief.** The profile edit screen with its avatar and frame choices, beside the golden frame and username at the pass's first position.

**What stands out.** None of these choices changes a rule, a cost or an outcome. The golden frame and username are sold with the pass and go when the event ends.

**Trigger:** Tapping the profile icon.

**What it needs:** Nothing beyond the profile screen itself.

**How it connects:** The golden items come from the Easter Pass in Seasonal Progression Pass, and your name sits on the lists in Leaderboard.

**Worth noticing:** Royal Match leaves your profile icon a grey and white silhouette until you open it and change it yourself.

**Screenshots needed:** the profile editing screen; the golden frame and username at the first position of the pass.

### Purchase Ladder (Easter Treasures)

**Title:** Easter Treasures

**Implementation summary:** Royal Match's Easter Treasures sets one priced rung, 2.99, among free rewards in a ladder you claim one rung at a time.

**How it works.** Easter Treasures arrives with 2 days and 12 hours remaining and tells you to claim each offer to unlock free rewards. Claiming a rung reveals the next. The ladder runs: a free hammer, 100 free coins, a free chest, then a 2.99 rung with 1 TNT, 3,000 coins and 1 hammer, then 200 free coins, free doubled boosters, a free bow and arrow, a free cannon and a free jester. The ladder sits in the offer stack on the home screen and again in the shop.

**Illustration brief.** The ladder of nine rungs with the fourth, priced at 2.99, among the free ones.

**What stands out.** Eight of the nine rungs are free, and the 2.99 rung is fourth, with five free rewards beyond it that Royal Match tells you to unlock by claiming each offer in turn.

**Trigger:** Tapping Easter Treasures in the offer stack.

**What it needs:** The rung before it claimed.

**How it connects:** The rungs hand out items from Boosters and coins from Soft Currency.

**Worth noticing:** Royal Match puts 3 free rungs ahead of the paid rung and 5 free rungs after it.

**Screenshots needed:** the ladder with the free rungs, the 2.99 rung and the claim-each-to-unlock instruction.

---

## Section cards

**Onboarding and first run.**
Current: "Royal Match asks for tracking permission before anything else, then teaches its match-three action directly on the board and hands the user a castle to build before a second level is even cleared."
Proposed: "Royal Match asks to track you before anything else, teaches its match-three action on the board itself and gives you a castle to build before you've cleared a second level."
Reason: "the user" becomes "you"; "directly" and "even" go.

**Core loop and automation.**
Current: "Royal Match repeats one bounded level with a target and a move limit, layering assist items, King's Nightmare interludes, and bonus levels on top of the same match-three board."
Proposed: "Every Royal Match level has a target and a move limit, with assist items, King's Nightmare and bonus levels added to the same board."

**Goals and progression.**
Current: "Royal Match advances a player level with every cleared level, tracks 152 areas and a set of running profile stats, and stages five separate timed events one after another starting at level 27."
Proposed: "Your player level goes up with every cleared level, your castle runs to 152 areas, and timed events arrive one after another from level 27."
Reason: "five" is wrong (the analysis lists six events); dropping the number is safer than correcting it on the card. The profile stats stay in the page.

**Access and eligibility.**
Current: "Royal Match withholds teams, the collection, and each assist item behind stated player-level requirements, disclosed unevenly from a full explanation down to a single bare number."
Proposed: "Teams open at level 21, the collection at level 41 and each assist item at its own level, and Royal Match shows each lock differently."
Reason: "disclosed unevenly" is analysis judgement; "shows each lock differently" is the fact.

**Economy and resources.**
Current: "Royal Match runs two earned balances, stars for the castle and coins for undoing failure, alongside several separate event units that only ever move toward their own next threshold."
Proposed: "Royal Match has stars for the castle and coins for refills and extra moves, and each event counts progress in a unit of its own."
Reason: "only ever" and "undoing failure" are analysis phrasings.

**Social.**
Current: "Royal Match ranks players and teams on two leaderboards, and inside a joined team, teammates trade lives and card requests under a tournament that pays only the ones who contribute."
Proposed: "Royal Match ranks players and teams for the world and your country, and inside a team you send lives, ask for cards and compete in a tournament that pays the members who contribute."
Reason: "only" attached to a reward rule; the rule is stated plainly in O52.

**Reach beyond the app.**
Current: "Royal Match saves progress only through a Facebook, Google or Apple sign-in, and gates its one social surface, the friends list, behind that same Facebook connection."
Proposed: "Royal Match saves your progress when you sign in with Facebook, Google or Apple, and opens its friends list only after you connect Facebook."
Reason: "gates its one social surface" is analysis wording; "only after you connect" is the fact.

**Monetization.**
Current: "Royal Match prices its offers directly against the two moments a level fails, layering a shop, named treasure bundles, and a seasonal pass on top of the same 900-coin shortfall."
Proposed: "Royal Match sells coin packs, named treasure bundles, team offers and a season pass, and its 900-coin prices for a refill and extra moves sit beside them."
Reason: "prices against" and "layering on top of the shortfall" explain why the shop exists. The new line says what's sold and what the 900 is.

**Return triggers.**
Current: "Royal Match times a notification prompt to the user's return, a rating prompt to an early clean run, and a countdown to every one of its five running events."
Proposed: "Royal Match asks to send notifications when you come back after a break, asks for a store rating after level 14, and puts a countdown on every event."
Reason: "five" dropped for the same reason as above; "times to" is analysis wording.

---

# Section pages

## Onboarding and first run

Royal Match's first run goes from a tracking request to a guided first match and two castle-building tasks, then leaves you on the home screen to explore.

### O1. Tracking comes first

Royal Match opens in vertical orientation and, before anything else, asks whether it can track your activity across other companies' apps and websites. The request comes before any gameplay, any account step and any explanation of the game, and no notification permission is requested at this point.

### O2. Agreeing to the policy

After the tracking request, Royal Match requires you to agree to its privacy policy before you continue. No account creation, sign-in or identity check comes before play.

### O3. A guided first match

Royal Match puts you straight into a level and tells you to make a match next to a box to break it, so the match-three action is taught on the board itself. As soon as the first match is complete, it says the lesson is completed. The instruction points at a specific box on the board rather than describing the action in the abstract.

### O4. Pointing out the task list

After the first lesson, Royal Match tells you the task list can be opened and shows where it is.

### O5. The first castle task

Royal Match tells you to build a castle, shows the area's progress and says the whole area has 6 steps. The first step costs 1 star, which you already hold, so you spend it and the castle appears before you've cleared another level. The progress indicator first shows at this moment, and the castle is drawn in the style of a fairy-tale castle.

### O6. Short of stars

The next task is a fountain at 1 star. Tapping it gives a message that you don't have enough stars, and the message says to beat levels to earn them. Royal Match gives the route to more stars at the moment you run short.

### O7. Locked boosters at level 2

Level 2's goal is to collect 36 wooden pieces. A row of boosters is shown, all locked and impossible to tap, and you can start the level straight away without choosing.

### O8. Building goes on, costs rise

After the level, Royal Match prompts you again to improve the castle, plays an animation for the fountain being built, and issues the next task, installing gazebos, at 2 stars, double the cost of the first two. Each completed build is followed straight away by the next task rather than a return to the board.

### O9. The first free home screen

After 2 levels and 2 builds, Royal Match shows the home screen with the castle and lets you explore freely. A default grey and white profile icon sits at the top left, three balances show 2,093 gold coins, 5 hearts and gold stars, a settings button sits at the top right, and the current level and area read level 3 and area 1. A navigation bar of five items runs along the bottom: a book with a bookmark and stars, a golden cup, a home button, a badge showing several people and a set of cards. The coin balance already stands at 2,093 after 2 levels.

---

## Core loop and automation

This section covers the repeating level, its assist items, King's Nightmare, bonus levels and hard levels, and how events advance from ordinary play.

### O10. A target and moves, no clock

Each level states what you must achieve and how many moves remain, and has no timer. Reach the target within the moves and the level is complete; run out of moves and it ends as a failure. Completing a level gives 1 star, and a failed level can be started again.

### O11. Targets change

Royal Match changes what you must destroy or collect as the levels go on: breaking a box, collecting 36 wooden pieces, destroying patches of grass, matching next to mailboxes to collect mail, and matching next to royal eggs to break them. Mailboxes aren't destroyed. Each qualifying match collects mail from the mailboxes beside it, which rewards playing next to them. The hard level at 39 is made of 3 mailboxes.

### O12. Failure arrives near level 18

Difficulty rises gradually. Before your first failure, boosters pile up unspent. The first failures come from level 18: a level is failed once, level 19 is failed twice in a row, and the game gets much harder after level 21.

### O13. Hearts and their timer

You start with 5 hearts and lose one when a level is failed. A spent heart takes 24 to 25 minutes to come back, and at 3 hearts Royal Match shows the next one arriving in 7 minutes 30 seconds. The lives panel offers a refill for 900 gold coins and a free lives button, which opens a view showing 0 free lives, says there are none in your inbox and to ask your teammates, and has a request button.

### O14. Paying to keep going

The first time you run out of moves, Royal Match offers 5 more moves to keep playing for 900 gold coins, the same price as a heart refill. You can decline, and the level is recorded as failed and can be retried. Undoing a failure costs 900 coins, and a whole bonus level pays a little over 500.

### O15. Assist items unlock in turn

Royal Match unlocks its assist items one at a time and teaches each at the level where it first works. After 6 or 7 games the royal hammer unlocks with a quantity of 3 and the effect of clearing any object on the board, available in the next level, and you're told to tap the hammer and then the object to clear. Three more items are still locked at that point. The arrow, which clears a whole row, unlocks after level 14, the cannon, which clears a whole column, after level 16, and the jester's hat, which shuffles the board, after level 18, with 5 remaining after use. TNT arrives from offers and from the Easter Pass, and as a starting item in bonus levels, and Propeller Madness names the propeller, which erases a row or a column. Quantities are shown and drop when you use an item.

### O16. Choosing before a level

Before a level starts, Royal Match shows a booster selection, which at level 2 is there but entirely locked. Once items have unlocked, you can select them before a level or use them during it, and you can start without choosing any. At level 36 a power-up is spent to avoid failing a level and losing the Butler's Gift state.

### O17. King's Nightmare

At intervals the play button is replaced by King's Nightmare, which offers a 50-coin reward and can be played or skipped. Each one is a short activity with its own goal: carrying water to a sprinkler in 20 moves, breaking all the boxes before time runs out, and later getting water to a king who is no longer visible, in 30 moves. The first takes about 6 moves. The second is timed rather than move-limited. The third carries a doubled reward marker and hides its target. Each ends with the king thanking you, confetti and trumpets, and after the first, the button goes back to the numbered level.

### O18. Bonus levels

Level 20 is a bonus level, shown with a pile of gold and a crown, and says to collect as many coins as possible in the given moves, here 20, with 2 TNTs to start. Level 40 is a bonus level of the same kind. A bonus level has no pass or fail; the result is the amount you collect. Matches next to coins collect them, and combining the 2 TNTs gives 80 coins at once. The whole level pays more than 500 coins.

### O19. A hard level, labelled

Royal Match marks level 39 as a hard level before you enter it. Passing it triples the reward and gives 30 points toward the Egg Hunt. The level is made of 3 mailboxes to collect mail from.

### O20. The worried king

When few moves remain and targets are still outstanding, the king looks worried, at around 3 remaining moves with work still to do. When you succeed he thanks you with confetti. The expression follows the state of the level, and isn't something you choose or own.

### O21. Butler's Gift

Royal Match introduces Butler's Gift with the line to beat levels on your first try to start the next level with power-ups. Later it shows the gift as active on 2 out of 3. At level 36 a power-up is spent to avoid failing and losing the gift.

### O22. A 15-minute window at level 33

At level 33 a doubled-reward marker appears beside the level and a 15-minute countdown starts, with rewards doubled for the next 15 minutes. Both your contribution to the team and your progress in Propeller Madness double during the window. Opening the marker is what explains it.

### O23. Spending stars, or not

Each time you hold enough stars, Royal Match prompts you to spend them on the current area task, and you can dismiss the prompt. You can keep playing and let stars pile up without building, and a marker beside the area chest shows that tasks are waiting. Area one's tasks are the castle, the fountain, gazebos, bushes, swans and flowers, 6 steps in all. Area two includes installing glass, laying the carpet and placing chairs. Area three, the dining room, has 9 things to customise. Costs rise from 1 star to 2 within area one, and a build completes the moment the stars are spent, with an animation.

### O24. An area ends with a chest

Completing an area gives you a chest to open, a celebration in which the king is pleased, a view of the finished area, and then a new area to unlock with a tap. The area one chest pays 250 gold coins and 4 different kinds of boosters and power-ups, and the area three chest pays 250 coins, further items and 4 cards for the Culinary Collection. Area one completes at level 11, area two at level 21 and area three shortly after level 41.

### O25. Events ride on ordinary levels

Once its events are running, Royal Match moves them forward through the same match-three levels you're already playing. Tournament tokens, Easter Pass keys, Egg Hunt eggs and Propeller Madness steps all advance this way. The Easter Pass tells you to beat levels and collect keys to unlock rewards, and the Egg Hunt tells you to beat levels and collect eggs to smash the next basket. After a completed level, a token moves into the team tournament.

---

## Goals and progression

Royal Match keeps a player level that rises as you clear levels, a map of 152 areas, a set of running stats on your profile, and the timed events that start from level 27.

### O26. Your player level

Royal Match keeps a current level for you, shows it on the home screen, raises it by 1 for every level you clear, and uses it as the condition for other parts of the game. The home screen reads level 3 and area 1 after 2 cleared levels. Other players' levels show on the leaderboards, the highest at 13,401. Level is the stated condition for joining teams and for the collection.

### O27. 152 areas

The first navigation item opens the map of areas, which shows the areas you hold and the areas still to come, and says there are 152 in all. You start outside and the map scrolls upward through the rest. The first areas are the first area, the throne room, the dining room and the garden.

### O28. Your profile stats

Your profile shows your level, whether you're in a team and when you joined, and a set of general stats: first-try wins, helps received, areas completed, collections completed and sets completed. The stats are running counts, with no badge or marker beside them.

### O29. Propeller Madness

After level 27, Royal Match presents Propeller Madness as a pop-up and as a persistent item on screen, telling you to collect 5 propellers to win the reward and to complete all steps to win the grand prize, which is 10,000 coins over 2 days. Collecting 5 propellers completes the first step and opens the next, collecting 100 coins. Each completed step opens another with a better reward, ending in the grand prize, and you can collect the rewards from steps you've passed while the event runs. The propeller is also one of the game's board items, which erases a row or a column. With the doubling window running, you can reach step 6 after a few levels.

### O30. The Egg Hunt

After level 38, Royal Match presents the Egg Hunt, telling you that beating levels collects eggs and that 25 more eggs are needed to smash the next basket, over 2 days and 12 hours. The event also takes a persistent item on screen that fills as you play. Passing the hard level at 39 gives 30 points toward it. Tapping play on the event pop-up takes you into the next ordinary level rather than into a separate mode.

### O31. The Easter Pass

At level 37 the screen darkens and an arrow points at a key icon carrying a 27-day 12-hour countdown, introduced as the Easter Pass with a first reward to claim. The pass tells you to beat levels and collect keys to unlock rewards, and offers activation for a stated price to get a second set of rewards at the same positions. The track holds 30 rewards, and each free reward has a matching golden-lane reward at the same position. The first position pays 1 TNT in the free lane and, in the activated lane, 8 lives instead of 5, a golden profile picture frame and golden username, and a gift for teammates. The second pays 1 coloured candy free and 15 minutes of infinite hearts in the activated lane. The final position pays 3 times power-ups and boosters free and 1 hour of infinite boosters plus 1,000 coins in the activated lane. Positions in between include a special chest, doubled power-ups and 30 minutes of TNT. A bonus bank sits at the very bottom of the track, and says that activating the pass unlocks it at the end of the stages. It appears nowhere before you scroll to the bottom of the pass. When you reach a position, the key icon carries a marker showing something is waiting. The pass also appears at the bottom of the lives panel with an activate button.

### O32. The Culinary Collection

After level 40, Royal Match starts the Culinary Collection, telling you to complete sets for amazing rewards, with 27 days and 12 hours to run, and gives you a first card pack of 4 cards. The collection holds 15 sets of 9 cards. The first pack gives a rolling pin, falafel, marshmallow and sorbet, two of them carrying 2 gold stars and one carrying 1. The info screen says to collect card packs from events and chests, get cards from card packs and friends to complete sets, and complete all sets to claim the collection rewards and the chef badge. The sets are frozen, street foods, sweets, garnishes, tools, dairy, pastries, spices, cuisines, snacks, market, coffee, drinks, dining and breakfast. That's 135 cards to collect in the event window. Duplicate cards become card stars, which the screen says are used to open chests. The grand prize is 10,000 coins, the chef badge and 10 times boosters, and each set shows the reward for completing all 9 of its cards. Completing area three gives 4 further cards.

### O33. The team tournament

After you join a team with enough members, Royal Match shows a team tournament icon and tells you to convert tokens to lances and contribute to your team. The screen shows the team's current position, the reward at the next position, each member's contribution and your own standing inside the team. The team shows at position 9 with 4 more tokens needed to reach the next reward, a power-up. Members with zero contribution are marked as getting no reward without contributing. After level 26 a reward is collected and 76 more tokens are needed to become a knight. After level 34 a further reward arrives, your armour changes from silver to gold, and you're shown in second place within the team. The tournament has 2 days and 13 hours remaining when the team offers appear against it.

---

## Access and eligibility

This section covers what you need to reach before a feature opens: level 21 for teams, level 41 for the collection, a level for each assist item, and a team of 10 for the tournament.

### O34. Teams open at level 21

The teams item says you must reach level 21 to join a team. You can view a team before then, but tapping join gives a message to reach level 21. The team screen before you're eligible shows a description, capacity, team score and the level the team itself requires. The top team requires level 13,400 and is marked closed with high activity, and some teams say crowns are needed. You can't send a request while under level 21. The stated value of joining is free lives and free rewards, and the prompt to join arrives when you complete level 20, one level before you can act on it.

### O35. The collection opens at level 41

The last navigation item says level 41 must be reached to unlock the collection, and gives no description of what the collection is. The Culinary Collection begins after you complete level 40.

### O36. Items unlock by level

Royal Match locks its boosters and power-ups at the start and releases them at set levels, and locked items are shown but can't be tapped. The royal hammer comes after 6 or 7 games, the arrow after level 14, the cannon after level 16 and the jester's hat after level 18, each followed by a short instruction at the level where it first works.

### O37. The tournament needs 10 members

After level 22, Royal Match shows a team tournament pop-up with a notice that at least 10 members are needed in the group to take part, which your team does not have. Leaving the team asks for confirmation, and you can hold only one team at a time, so you leave one before joining another. Once you join a team with enough members, the tournament appears. The condition belongs to the team rather than to you.

### O38. Two closed screens

At the top of the map of areas, Royal Match shows Royal League, and tapping it does nothing. The friends tab of the leaderboard shows only a prompt to connect with Facebook, and the friends list can't be reached without it. That tab says to connect with Facebook to save your progress, and declining gives a message that the Facebook sign-in failed and to try again.

---

## Economy and resources

Royal Match runs gold coins and gold stars as balances you earn and spend, hearts as a balance that refills on a timer, and a separate counting unit for each event.

### O39. Gold coins

Royal Match grants gold coins from level play, from King's Nightmare, from bonus levels, from area chests and from event rewards, and holds them as a balance on the home screen. You spend them on a heart refill at 900 and on 5 extra moves at 900, and they're sold in packs for money. The balance stands at 2,093 after 2 levels. A King's Nightmare pays 50 coins, later doubled, an area chest pays 250, a bonus level pays more than 500, and event grand prizes are 10,000. Beyond lives, moves and the items in offers, there's no other way to spend them.

### O40. Gold stars

Royal Match grants 1 gold star for each level you clear and accepts stars only as payment for area tasks. With too few stars the task is blocked, and Royal Match says to beat levels to earn more. Tasks cost 1 star and 2 stars, and stars pile up if you don't build. One level pays 1 star, so a 2-star task takes 2 levels, which is where building slows down. Clearing levels is the only route to stars.

### O41. Hearts

Royal Match holds hearts as a balance of 5, taken on failure, restored on a timer, bought with coins, and obtainable from teammates. The Easter Pass raises the limit to 8 when you activate it. The paid offers grant periods of infinite hearts rather than heart quantities, from 15 minutes up to 18 hours. The lives panel sends you to your teammates when you hold no free lives.

### O42. Event units

Royal Match runs several separate counting units, each belonging to one event, and each moved forward by ordinary level play. Tokens convert to lances and go to the team, keys advance the Easter Pass, eggs advance the Egg Hunt, propellers and then collected coins advance Propeller Madness, and duplicate cards become card stars. Each is shown as progress toward a stated next threshold rather than as a balance to spend freely. Card stars are the one unit the collection screen says you can spend, to open chests.

### O43. Crowns and team score

The players leaderboard shows crowns beside other players, with values as high as 11,000, and some teams say crowns are needed to join. Teams carry a team score. Team capacity is up to 50 members. Royal Match doesn't say what crowns are.

### O44. Chests and card packs

Royal Match gives chests when you complete an area and card packs in the Culinary Collection, and their contents differ between instances. The area one chest paid 250 coins and 4 kinds of boosters and power-ups, the area three chest paid 250 coins, further items and 4 cards, and the first card pack gave 4 named cards with a later pack giving 4 different ones. The contents aren't shown before you open one, and opening is a separate tap with a reveal. The collection screen says duplicate card stars can open further chests.

---

## Social

Royal Match's social side is teams and their tournament, a message board, leaderboards for players and teams, and a profile you can dress up.

### O45. Setting up your identity

Tapping the profile image lets you enter a username, use your Facebook photo or pick an avatar, choose a frame and choose a name. Royal Match never prompts you to do this. The default profile icon is a grey and white silhouette. Your chosen name and frame show on your profile once set, and the Easter Pass sells a golden frame and golden username at the first position of its activated lane.

### O46. Player rankings

The golden cup opens a leaderboard with three tabs: friends, players and teams. The players tab shows a world list and a country list, each ordered, showing names, pictures, levels and crowns. The highest level on the world list is 13,401, with crowns as high as 11,000, and the country list shows a similar set of players at the same top level. The friends tab can't be opened without connecting Facebook.

### O47. Team rankings

The teams tab shows teams in order with badges, names, capacity and team score, for the world and for your country. Capacity runs up to 50 members, and the top teams are usually full.

### O48. Joining and leaving teams

Royal Match keeps teams as lasting groups with a badge, name, description, a roster showing each member's level, a capacity, a team score, a required level and an activity marker. Joining is direct on open teams, and you can also send a request. Some teams are closed with high activity. The prompt to join arrives after level 20, with the stated value of free lives and free rewards. The team, not any member, holds a tournament position and a score. You join one team, leave it after confirming, and join another, and only one membership is held at a time.

### O49. The team message board

Inside the team, Royal Match shows messages and help requests from members, including a request for lives timestamped 977 days and 21 hours earlier, and lets you type and send a message. A short greeting sent this way appears in the team. Requests and messages belong to the team rather than to a private conversation.

### O50. Sending and asking for lives

You can send a life to a teammate in response to a request, and you get 5 coins back for it. Trying to help the same request again says you already helped. You can also ask for lives, and a request you send lasts 4 hours. The lives panel points you to your teammates when your free lives inbox is empty.

### O51. Asking for cards

Once the Culinary Collection is running, the team screen lets you request cards, choosing from the cards listed, one card at a time, and a card request lasts 24 hours. The team icon carries a numbered marker when a teammate's request is waiting. The collection's info names friends as one source of cards alongside packs and chests. Lives requests last 4 hours and card requests last 24.

### O52. Contribution decides the reward

The team tournament says that members who don't contribute get no reward, shows each member's contribution and shows the team's position against other teams. The Easter Pass's activated lane includes a gift for teammates, sitting at the first position beside the golden frame and username. The paid team offers give every team member a period of infinite hearts, so they're aimed at the whole roster rather than at one chosen teammate.

---

## Reach beyond the app

Royal Match's one route out of the game is signing in to save your progress, and Facebook is the account behind its friends list.

### O53. Saving progress

Settings has a save your progress option offering sign-in with Facebook, Google or Apple, and says progress isn't saved without one. The other settings are music, sound, vibration, hint, notifications, support, parental control, terms and privacy. You can play without signing in, since the option is available rather than enforced. Starting one of these sign-ins and then abandoning it gives a failure message and a prompt to try again.

### O54. Facebook and the friends tab

The friends tab says to connect with Facebook to save your progress, and tapping it asks to use Facebook to connect you to Royal Match. Declining gives a message that the sign-in failed and to try again. The other two sign-in options are offered for saving progress but not for finding friends. The friends tab frames the connection as saving progress, while what it opens is the friends list.

---

## Monetization

Royal Match sells through a shop opened from the coin balance, named treasure bundles, team offers, the Easter Treasures ladder and the Easter Pass, and puts its live offers in one order across screens.

### O55. The shop's first offers

Tapping the coin balance opens the shop, which leads with a special offer and a princess treasure offer before the plain coin packs. The special offer is 1.99 and holds endless boosters for 1 hour, a set of power-ups and 2,000 gold coins. The princess treasure is 9.99 and holds endless boosters for 1 hour, the same power-ups and a larger coin amount. The cheaper special offer gives more coins per unit of money than the princess treasure.

### O56. The coin packs

The shop sells gold coins in fixed packs at stated prices. The first view shows 1,000 coins at 1.99, 5,000 at 7.99 and 10,000 at 14.99, and the extended list adds 25,000 at 29.99 and 100,000 at 99.99, with a 50,000 pack between them. Higher prices give more coins per unit of money.

### O57. Named treasure bundles

Behind a more offers button, Royal Match presents named bundles: queen's treasure, king's treasure, royal treasure and superior treasure, each with a price, a coin amount, a power-up multiplier and a period of unlimited items. Queen's treasure is marked popular and superior treasure is marked best value. Queen's treasure is 19.99 with 10,000 coins, 2 times power-ups and 12 hours of endless boosters. King's treasure is 39.99 with 25,000 coins, 4 times power-ups, 24 hours of endless boosters and 6 hours of endless hearts. Royal treasure comes with 50,000 coins, 10 times power-ups, 72 hours of endless boosters and 12 hours of endless lives. Superior treasure is 99.99 with 65,000 coins, 13 power-ups, 100 hours of endless boosters and 18 hours of hearts. Every bundle above the cheapest pairs coins with time-limited unlimited items rather than quantities alone.

### O58. Team offers

After the first tournament level, Royal Match shows bronze, silver and gold team offers, timed to the tournament's remaining 2 days and 13 hours, each available as one offer only. Each gives the buyer coins, power-ups and periods of unlimited items, and gives every team member a period of infinite hearts. Bronze is 9.99 with 5,000 coins, 1 hour of infinite power-ups and boosters at 1 times, and 15 minutes of infinite hearts for each team member. Silver is 19.99 with 10,000 coins, 12 hours of infinite boosters at 2 times, and 30 minutes of infinite hearts for the team. Gold is 39.99 with 25,000 coins, 6 hours of infinite hearts, 4 times power-ups, 24 hours of infinite boosters, and 1 hour of infinite hearts for the team. The offers appear right after the tournament shows that members who don't contribute get nothing.

### O59. The Easter Treasures ladder

Royal Match presents Easter Treasures with 2 days and 12 hours remaining and the instruction to claim each offer to unlock free rewards. Most rungs are free, and one is priced at 2.99. The ladder runs: a free hammer, 100 free gold coins, a free chest, then the 2.99 rung with 1 TNT, 3,000 gold coins and 1 hammer, then 200 free gold coins, free doubled boosters, a free bow and arrow, a free cannon and a free jester. Claiming a rung reveals the next. The 2.99 rung sits ahead of the free rewards after it, and Royal Match tells you to claim each offer in order to unlock them.

### O60. The Easter Pass's golden lane

Royal Match offers activation of the Easter Pass for a stated price, saying that buying gives access to special rewards and exclusive bonuses until the event ends. The stated exclusive bonuses are 8 lives instead of 5, a golden profile picture frame and golden username, and a gift for teammates. The activated lane pays at the same 30 positions as the free lane, with a larger reward at each, and the bonus bank at the end of the track needs activation. The pass is offered from the pass screen itself and from the lives panel.

### O61. The offer stack

Royal Match stacks its live offers on the home screen and repeats the order in the shop: the team tournament, then the team offers, then Easter Treasures, then the Easter Pass, then the special offers and coin packs. In the shop the three team offers rotate at the top, with the Easter Pass beneath them and the special offers below that. Each new event adds its own persistent item to the home screen rather than replacing one that's already there.

---

## Return triggers

Royal Match brings you back with a notification request when you return after a break, a heart timer, a countdown on each event, a store rating prompt and markers on icons.

### O62. Notifications on return

Royal Match asks for permission to send notifications when you reopen the app after a break, rather than at first launch. The tracking request is shown first at first launch. Notifications also appear as a toggle in settings.

### O63. The heart clock

Each spent heart comes back after 24 to 25 minutes, and the lives panel shows the time to the next heart, 7 minutes 30 seconds with 3 held. At that moment the panel also offers a 900-coin refill and a request to teammates. The timer shows at the point where you run short, not only in a menu, and the paid offers replace it with periods of infinite hearts rather than heart quantities.

### O64. A countdown on every event

Royal Match attaches a remaining-time figure to each of its live events and offers. Propeller Madness runs 2 days, the Egg Hunt and Easter Treasures 2 days and 12 hours, the team tournament and its offers 2 days and 13 hours, and the Easter Pass and the Culinary Collection 27 days and 12 hours. The countdown shows on the pop-up that introduces the event and on its persistent home screen item. The two long windows and the several short ones run at the same time, and the 15-minute window at level 33 is the shortest.

### O65. A rating prompt after level 14

After level 14 and before level 15, Royal Match shows an app store rating prompt asking whether you're enjoying Royal Match. It comes after a run of levels cleared without failure, and it's the first rating prompt.

### O66. Markers on icons

Royal Match marks screens that hold something waiting. The area chest carries a marker when you hold enough stars and have not built, the Easter Pass key carries a marker when a position has been reached, and the team icon carries a numbered marker in a green circle when a teammate's request is waiting. These markers stay on the home screen while the thing they point at is unresolved.

---

# Decisions and cuts

## Applied tags held back by the friend test

Both stay tagged in the analysis. Both go on the coverage report below. Together with the 18 blocks they account for all 20 applied tags.

- **Leveling.** Everything that survives is already carried elsewhere. Your level rising by 1 per cleared level, and the 152 areas, sit in the loop and in O26 and O27. The levels that open teams and the collection are Progression Gate. The levels shown on the leaderboards are Leaderboard. The tournament's armour colour is in Comparative Rank, and the knight title is in Milestone. A block would say "your level goes up when you clear a level", which a friend already knows from the game.
- **Variable Reward Outcome.** The chests and card packs pay different contents each time and don't show them in advance, but that is all that survives, and it's already in O44 and in the Milestone and Set Collection blocks. The one more interesting case, the chests that card stars open, was never opened, so the block would describe a mechanic the analysis itself leaves unresolved (the Loot Box question).

## Sentences cut from entries that stay

- O3: the narrator's reading of the teaching as brief, and that no tutorial screen or video comes first (a missing screen).
- O7: that no explanation of the boosters is given.
- O9: the narrator's reading of the badge and cards icons before opening them, and that no one showed where the coins came from.
- O11: the narrator's reading that rotation keeps the game varied.
- O12: the narrator's readings on saving resources, and on where the first failures sting.
- O13: the heart purchase becoming possible after joining a team (the transcript is fragmented there), and what happens at zero hearts.
- O14: that coins are hard to accumulate was kept only as the two figures, 900 and a little over 500; the conclusion is left to the reader.
- O16: that the pre-level selection is skippable stays as "start without choosing".
- O17: the advertising comparison, and the easy / very fast / guesswork descriptions.
- O18: that the reward isn't disclosed before entry.
- O21: the incentive reading, and what happens to the state when a level isn't cleared on the first try.
- O22: what triggers the window, and the narrator's first reaction to the marker.
- O24: the area two chest "yields more" (plausible only).
- O26: that many players share the top level (plausible only).
- O27: the narrator's reading of 152 as how much game remains.
- O28: the narrator's description of the stats.
- O29, O30: how many steps and baskets exist and what's in them.
- O33: the narrated team move from position 8 to position 9 (the direction is inconsistent with the stated improvement), and what a lance is worth.
- O34, O35: the narrator's remark that nothing about the collection is disclosed, kept as the plain fact that the lock gives no description.
- O36: the narrator's reading of the staggering.
- O42: the grant rate per level.
- O47: the narrator's reading of full rosters, and the top team score (heard in fragments).
- O49: the narrator's remark that old requests must expire.
- O50: the narrator's explanation of the 4-hour window, and whether a sent life costs the sender a heart.
- O55: the narrator's reasoning that the special offer appears only once (the app states no limit), and the princess treasure coin amount (heard as "5" and treated elsewhere as 5,000).
- O58: whether buying one tier leaves the others available.
- O59: the narrator's remarks on pressure, and the repeat of the lock claim.
- O60: the narrator's reading of the golden items as marking a paying player.
- O61: the narrator's readings of the placement and the staggered arrival.
- O62: the sequence caveat about the narrator's break, and that when the prompt appears for a continuous player is unknown.
- O64: what happens to unclaimed rewards when a window ends.
- O65: nothing cut.

## Decisions the rules did not settle

1. **Butler's Gift as a Streak block.** The analysis tags it Streak at strongly supported on the strength of the app's own framing and the displayed state "2 out of 3". What a failure does to the state was never observed. I kept the block and wrote only what was shown. The one sentence that touches this is at level 36, where a power-up is spent to avoid failing and losing the gift. It states what the analysis records (O16, O21), but if you'd rather the block say nothing about losing the gift, cut that sentence in the block and in O16 and O21 together.
2. **Leveling held, not dropped.** The prompt doesn't say whether a tag that adds nothing a friend would want should be held when its facts are already in other blocks. I held it and listed it on the coverage report.
3. **Prices heard in fragments.** The analysis records three prices only as spoken fragments and one coin amount as "5" followed by "gold coins". I left every one of them out of the page copy rather than guess. They are on the coverage list. If you'd rather print them as the analysis gives them, "799" and "999" and "40 54 99" are not usable as written.
4. **Spelling.** Strava's approved copy uses British spelling, the current Royal Match content mixes both. I used British. Calm's draft does the same. The mechanic name Cosmetic Customization keeps its library spelling.
5. **No currency symbol.** The analysis gives prices as bare numbers (1.99, 99.99). The current copy does the same and says "per dollar" in one place, which adds a fact the analysis doesn't have. The drafts use bare numbers and say "per unit of money" for the ratio.
6. **Titles.** "Teams" is the app's own word for the group, but it isn't a name in the way Butler's Gift or Easter Pass are. I used it as the Clan / Guild title because the tag name reads as jargon; drop it if you want titles only where Royal Match has a branded name.

---

# PART B: coverage report draft for Royal Match

This would become `sources/coverage/royal-match.md`. It does not exist yet.

# Coverage report: Royal Match

**Mechanics held back:** Leveling and Variable Reward Outcome. Both are applied in the analysis and both stay tagged. The other 18 applied tags each got a block.

**Not applied (no block, recorded for the next walk-through):** Daily / Weekly Quests, Daily Login Rewards, Passive Construction, Achievement, Energy, Minigame, Rewarded Advertisement, Variable Reward Schedule, Personal Data Reflection. Each is explained in the analysis's considered-and-not-applied list. The ones that a second session could change are items 14 to 18 below.

**What's missing, and what to capture on the next walk-through:**

1. **Leveling, a possible second track (held).** Whether any accumulating value moves the player level between levels, or whether it is only the count, decides whether the Leveling block would have anything of its own. Capture: the home screen and profile before and after a cleared level, and any screen reached by tapping the level number.
2. **Variable Reward Outcome and the card-star chests (held; the analysis's Loot Box question).** The collection says duplicate card stars open chests, and none was opened. Capture: open one card-star chest and then a second, and keep both reveals, so the contents can be compared and any cost noted.
3. **Hearts at zero (O13, O41).** What the lower boundary does was never reached. Capture: fail levels until the heart count reaches 0 and keep the lives panel and the play button at that point.
4. **Butler's Gift on a failed level (O21, Streak).** What a level that isn't cleared on the first try does to the 2 out of 3 state, and whether the state counts consecutive levels, is unobserved. Capture: fail a level while the gift is active and read the state before and after, then clear the next level.
5. **Assist items inside King's Nightmare (O15, O17).** Whether any item can be applied in these interludes was not observed. Capture: play one with a booster held.
6. **The doubling window at level 33 (O22, Reward Multiplier).** What opened it, and which reward types it covered beyond team contribution and Propeller Madness progress, are unknown. Capture: note the account state and level before the marker appears, and each reward received while it runs.
7. **Event grant rates and window endings (O25, O42, O64).** How much each cleared level gives each event, and what happens to unclaimed rewards when a countdown ends, are unknown. Capture: record each event's counter before and after a single level, and watch one event through its end.
8. **Event contents (O29, O30).** The Propeller Madness steps past the second and what the Egg Hunt baskets hold were not shown. Capture: the full step list and the basket contents.
9. **Tournament conversion (O33).** What a lance is worth and how tokens convert is unknown, and the team's move from position 8 to position 9 was heard in a way that doesn't match the improvement described. Capture: the tournament screen at two points a level apart.
10. **Easter Treasures lock (O59, Purchase Ladder).** The lock on the free rungs past the paid rung was read from the screen's own wording, never met, so the block states the rule as Royal Match gives it. Whether the whole ladder is visible while locked, and what happens to unreached rungs when the window closes, are also unknown. Capture: leave the 2.99 rung unclaimed and try the next rung, then watch the ladder through its end.
11. **Bonus bank (O31, O60; the analysis's Piggy Bank question).** Nothing about accumulation is shown beyond the activation line. Capture: the bonus bank screen on an activated pass and any balance or contributions it shows.
12. **Chef badge (O32).** Whether it is a preserved attained state, a profile cosmetic or both depends on completing all 15 sets. Capture: a session that completes the collection.
13. **Royal League and crowns (O38, O43).** Royal League opens to no tap and crowns have no stated source or use. Capture: the Royal League screen at a later level, and any screen that says how crowns are earned.
14. **Leaderboard position and scope (O46, O47).** Your own position on the world and country player lists was never shown, nor whether those lists reset. Capture: scroll each list to your own entry and check for a period or reset label. Also the friends tab contents behind the Facebook connection.
15. **Help requests (O49, O50).** Whether sending a life costs the sender a heart, and how a request dated 977 days earlier can still be showing, are unknown. Capture: note your hearts before and after sending one, and the timestamps across the board.
16. **Team offers (O58).** Whether buying one tier leaves the others available is not stated. Capture: the offers screen before and after a purchase.
17. **Prices read in fragments (O56, O57, O60, O55).** The 50,000-coin pack ("40 54 99"), royal treasure ("799"), the Easter Pass activation ("999") and the princess treasure's coin amount ("5" gold coins, treated elsewhere as 5,000) were all transcribed from speech. The top team score 700,033,733 is the same. Capture: a screenshot of each.
18. **Notification prompt timing (O62).** The prompt appeared when the app was reopened after a break; when it appears for someone who keeps playing is unknown. Capture: a continuous session of 30 or more levels with no break.
19. **Daily Login Rewards and Daily / Weekly Quests (not applied).** No daily window or reset was seen, on the one reopening after a break. Capture: reopen on consecutive days and note any reward or task refresh.
20. **First-Purchase Bonus, Referral Boost, Shareable Win, Rewarded Advertisement (never observed).** No purchase was made, and no invite, share or advertisement route appeared. Capture: a sandbox first purchase, and a search for any share or invite option on result screens and in the team screen.
21. **Area chest contents (O24).** The area two chest was reported as yielding more than the first but its contents weren't listed. Capture: the contents of each chest.
22. **Event repeats (Challenge, Seasonal Progression Pass).** No event started a second time, so whether any recurs wasn't observed. Capture: a later session that reaches the next season.
23. **App version.** Never stated in the session. Capture: the version from settings or the store page.

**Any other gap worth filling:** A second walkthrough that reaches level 60 or beyond, with a purchase made in the sandbox and a heart count taken to zero, would settle items 3, 4, 10, 11, 12, 16, 20 and 22 at once.

---

# Looked wrong while drafting (reported, not fixed)

- **The old teaser, system view and Goals card say "five" timed events.** The analysis's system view says five and names five (O29, O33, O59, O31, O32), but the observations also cover the Egg Hunt (O30), so six events run between levels 27 and 41.
- **O33 records the team moving from position 8 to position 9 "as spoken", with the direction inconsistent with the stated improvement.** I left it out of the page.
- **O55 records the princess treasure's coin amount as "5" followed by "gold coins".** The old content says "roughly 5,000" for it. The analysis gives no basis for the 5,000.
- **The old Hard Currency block says "more coins per dollar".** The analysis has no currency. I changed it to "per unit of money".
- **The old Purchase Ladder block's summary and "worth noting" tell the reader what was not seen** ("never purchased here", "read from its own framing"). The analysis carries the same lock claim at two tiers in O59 (directly observed in the Observed paragraph, strongly supported in the Detail), and Pass two says the lower tier governs. The draft states the rule as Royal Match gives it and leaves the tier out.
- **The old Streak block says the level 36 power-up was spent "rather than to avoid retrying the level itself", and says the state was shown active "for two out of the last three levels".** The analysis says neither: O16 and O21 say the power-up was spent to avoid failing and losing the gift, and give the state as "two out of three". Pass two's Streak role sentence goes the other way ("a level he would otherwise have retried"), so the analysis disagrees with itself, and the old block follows the sentence that isn't in the observations.
- **Pass two's Progression Gate role sentence says the item gates release "between levels 8 and 18".** The observations (O15, O36) give the royal hammer after 6 or 7 games and the jester's hat after level 18; level 8 is not an observation. I used the observations.
- **Pass two's Milestone entry lists its observations as O24, O18, O33 in that order and its supporting list as O23, O27, O26,** unlike the other entries. Harmless, but not in the order the others use.
- **O17 describes the interludes as resembling the game's advertisements,** which the analysis says the session itself does not contain. I cut it.
