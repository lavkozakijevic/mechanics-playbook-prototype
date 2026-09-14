# Royal Match

**Teaser:** Royal Match pays every part of itself, the castle, the team, the season, from the same completed level.

Royal Match is a match-three puzzle game structured around one activity that pays into everything else: clearing a level. The level's star pays for building out a castle and its surrounding areas, its coins fund undoing failure and buying items, and every timed event running at once, a team tournament, a seasonal pass, a card collection, advances from the same completed level. Failure, not entry, is the switch that turns the loop into a monetization surface: hearts are only spent when a level is lost, and the paid offers are priced against exactly that shortfall.

---

## System view

Royal Match is a complex system built around a single spine: clearing a level. Every measure in the game, the player level, the star that funds castle building, the coins that undo failure, and every timed event's own progress unit, moves only when a level is cleared, and nothing else advances any of them.

---

## Mechanics

### Lives

**What was observed:** Royal Match gives the user five hearts and takes one away only when a level is failed, not when one is started or retried. A spent heart comes back on its own after 24 to 25 minutes, and the panel that shows this also offers a 900-coin refill or a request to teammates. Losing a level and running out of moves both point back to this same balance: the app also offers five extra moves for 900 coins, the same price as a refill, rather than just letting the level end.

**How it is presented:** The heart count sits on the home screen as one of three visible balances, and the countdown to the next heart only becomes visible once the panel is opened, at a shortage. The refill and teammate-request options sit side by side on that same screen.

**What is worth noting:** Nothing is spent for trying, only for failing, which means a cautious player who keeps clearing levels barely touches the balance, while a run of failures around level 18 to 21 empties it quickly. That timing lines up with when difficulty first rises, so the resource pressure and the difficulty pressure land at the same point rather than separately. Royal Match never shows what happens at zero hearts, so whether play simply stops or something else happens is not settled by this record.

**Key findings:**

- Hearts fall on failure, not on starting or retrying a level.
- A spent heart restores in 24 to 25 minutes.
- A refill costs 900 coins, the same price as five extra moves.
- Free lives can be requested from teammates when none are held.
- The Easter Pass raises the held total from five to eight while active.

**Screenshots needed:** the lives panel showing the countdown to the next heart alongside the refill and teammate-request options; the paid-offer screen showing a period of unlimited hearts.

### Boosters

**What was observed:** Royal Match holds four assist items as separate counted quantities, unlocking one at a time as the user clears levels: a hammer that clears any object, an arrow that clears a row, a cannon that clears a column and a jester's hat that shuffles the board. Each is chosen before a level starts or applied mid-level to a specific target, and using one reduces the count. At level 36 the user spends one specifically to avoid failing a level and losing a separate ongoing state.

**How it is presented:** The items sit in a selection row before each level begins, shown locked with no explanation until the level where they first become usable, then shown with a count that falls as they're used. The same items reappear as contents of chests, event rewards and shop offers.

**What is worth noting:** Royal Match also sells unlimited use of these items for a stated period, from one hour up to 100 hours, rather than only selling more of the counted items themselves. That's a different purchase than topping up a balance: it suspends the count and lets the items be used without limit for as long as the period lasts, which changes what buying one of the bundles actually gets a player during that window.

**Key findings:**

- Four assist items unlock one at a time between the first levels and level 18.
- Each item is chosen before a level or applied to a target mid-level, and using one reduces its count.
- Replenishment comes from area chests, event rewards, the Easter Pass, the Easter Treasures ladder and the shop.
- Offers also sell unlimited use of these items for a stated period rather than more of the counted item.
- One item is spent at level 36 specifically to protect an ongoing state from being lost.

**Screenshots needed:** the pre-level selection screen showing locked and unlocked items; the unlimited-use offer stating its time period.

### Challenge

**What was observed:** The level is Royal Match's basic bounded activity: a stated target, a move limit, and a different result for reaching the target than for running out of moves. The King's Nightmare interludes are their own bounded activities with their own objectives and time or move limits, and the running events, Propeller Madness, the Egg Hunt and the team tournament, are each bounded by a stated success condition and remaining time.

**How it is presented:** The level's target and moves remaining are visible throughout play, with no countdown clock anywhere on that screen. The interludes replace the ordinary play button when they're active and can be skipped. The events show their own condition and countdown on a persistent home-screen item alongside their own entry screen.

**What is worth noting:** Level 39 is marked as a hard level before the user enters it, with its reward stated in advance, rather than only being discovered as hard through play. That's a different design choice than difficulty simply rising unannounced: naming a level as hard ahead of time sets an expectation before the attempt rather than after a failure.

**Key findings:**

- A level states its target and move limit, and produces a different result for completion than for running out of moves.
- King's Nightmare interludes are separately bounded activities that can be skipped.
- Level 39 is marked hard before entry, with a stated tripled reward.
- Propeller Madness, the Egg Hunt and the team tournament each carry their own stated success condition and remaining time.
- The bonus levels at 20 and 40 set no completion condition, only a quantity to collect.

**Screenshots needed:** a level screen showing its target and remaining moves; the level-39 hard marking shown before entry.

### Leveling

**What was observed:** Royal Match keeps a running level for the user that goes up by one every time a level is cleared, shows it on the home screen and on the leaderboards, and uses it as the condition for unlocking other parts of the game. By the account's current point it has moved from level one past level 41, and the highest level shown on the world leaderboard is 13,401. The team tournament keeps a second, separate advancing state for the same user: an armour colour that moves from silver to gold as contribution grows.

**How it is presented:** The level number sits on the home screen next to the current area, and reappears next to other players' names on the leaderboards. The tournament's armour colour changes are shown on the team screen rather than the home screen.

**What is worth noting:** Nothing about the player level is shown accumulating between one level and the next, no bar filling up, no points counter. It simply steps by one the moment a level ends, which keeps it as a plain count rather than a value the user watches build toward the next step.

**Key findings:**

- The player level rises by one for every level cleared and has no stated ceiling.
- The level is shown on the home screen and on the world and country leaderboards.
- The level is the condition Royal Match reads to unlock teams and the collection.
- The team tournament keeps a second, separate advancing state, shown as an armour colour.
- No accumulating value is shown building toward the next player level.

**Screenshots needed:** the home screen showing the current level; the tournament armour-colour change.

### Progression Gate

**What was observed:** Royal Match withholds three things behind a stated player level: teams at level 21, the collection at level 41, and each assist item at the specific level where it first becomes usable. Each requirement is stated before it's met. The teams screen can be browsed while locked and simply repeats the requirement when the user tries to join; the collection tab states its level requirement and nothing else about what it contains; a locked assist item is shown in its selection row but can't be tapped.

**How it is presented:** The teams and collection requirements sit on their own navigation tabs, visible from the very first launch even though they can't be used yet. The item locks sit inside the pre-level selection row alongside whichever items are already unlocked.

**What is worth noting:** The three gates disclose very differently. Teams states exactly what's needed and lets the user look around before qualifying; the collection states only a number with no description of what's behind it at all. That gap is a real design choice: one gate is inviting the user to plan toward it, and the other is withholding information along with access.

**Key findings:**

- Teams require level 21 to join; the requirement is stated and repeats when join is attempted early.
- The collection requires level 41 and gives no description of what it is before that point.
- Each assist item unlocks at its own stated level, between the first levels and level 18.
- The teams screen can be browsed before eligibility; the collection cannot.
- No purchase or other route around any of the three gates is offered.

**Screenshots needed:** the teams screen's stated level-21 requirement; the collection tab's undescribed level-41 lock.

### Soft Currency

**What was observed:** Royal Match runs two earned balances side by side. Gold stars come one per cleared level and are spent only on area-building tasks, one or two stars at a time. Gold coins come from level play, interludes, bonus levels, chests and event rewards, and are spent on a 900-coin heart refill, 900 coins for five extra moves, and nothing else outside offer-granted items.

**How it is presented:** Both balances sit on the home screen alongside the heart count. Stars are drawn down at the castle-building prompt; coins are drawn down at the point a level is failed or moves run out.

**What is worth noting:** Stars have exactly one sink and coins have several, which makes them behave quite differently even though both are earned the same way, by clearing levels. A star balance that's building up is only ever waiting for the next building task, while a coin balance is competing across at least two different uses, undoing a level failure or continuing one that's already lost, every time it grows.

**Key findings:**

- Gold stars pay one per cleared level and are spent only on area-building tasks.
- Gold coins are earned from several sources and spent on heart refills and extra moves at 900 each.
- Both balances are stored until spent and fall by the amount used.
- A two-star building task takes two cleared levels to afford, since one level pays one star.
- No other coin balance route besides lives, moves and offer-granted items appears.

**Screenshots needed:** the home screen showing both balances; the area-building prompt showing a star cost.

### Hard Currency

**What was observed:** The same gold coin balance that's earned through play is also sold directly for money, in packs running from 1,000 coins at 1.99 up to 100,000 coins at 99.99, with more coins per dollar at the higher prices. Coins also appear bundled inside every named offer and treasure bundle in the shop.

**How it is presented:** The coin packs sit in the plain shop view, reached by tapping the coin balance, with the named bundles and special offers placed above them.

**What is worth noting:** Buying coins doesn't buy anything directly, it tops up the same stored balance the user already earns from play, which then gets spent later on a refill or extra moves. That's a different purchase shape than paying for a specific benefit outright: the money goes into the same pool as everything earned in the game, and what it becomes depends on how it's later spent.

**Key findings:**

- Coin packs range from 1,000 at 1.99 to 100,000 at 99.99.
- The rate of coins per dollar improves at higher price points.
- Coins are also included inside every named treasure and team offer bundle.
- A purchase adds to the stored balance rather than granting a result directly.
- No spending route for coins exists outside the game's own sinks.

**Screenshots needed:** the plain coin-pack price ladder in the shop.

### Milestone

**What was observed:** Royal Match recognizes specific points inside two ongoing measures rather than just letting them run. Completing one of 152 areas produces a chest, a celebration and the unlock of the next area. Levels 20 and 40 are both marked as bonus levels, a recognized point at every twentieth level. The team tournament names a knight title at a stated token threshold, separate from the position ranking itself.

**How it is presented:** An area completion plays out as its own sequence, a chest opening, a finished-area view, then the next area to unlock. The bonus levels replace the ordinary level screen with their own framing. The knight title appears as a stated threshold inside the tournament surface.

**What is worth noting:** All three of these keep moving after they're marked. The level count doesn't stop at 20 or 40, the area map doesn't stop after one area completes, and the tournament doesn't stop contributing tokens after the knight threshold. Each is a point recognized along a measure that's still running, not a finish line.

**Key findings:**

- Completing an area produces a chest, a celebration and the next area's unlock.
- Levels 20 and 40 are both marked as bonus levels, a point recognized every twentieth level.
- A knight title is named at a stated token threshold inside the team tournament.
- Each recognized point sits on a measure that keeps advancing afterward.
- No record of previously reached points is shown beyond the profile's running counts.

**Screenshots needed:** the area-completion chest and celebration sequence; the bonus-level entry screen at level 20 or 40.

### Experience Points

**What was observed:** Royal Match runs several separate counted values, each tied to one running event and each fed by clearing an ordinary level: tournament tokens that convert into lances, Easter Pass keys, Egg Hunt eggs, and the propellers and coins that move Propeller Madness forward. None of them can be spent on anything the user chooses; each one only moves an event forward toward its own stated threshold.

**How it is presented:** Every one of these values shows as a remaining amount toward the next reward on its own surface, a pop-up and a persistent home-screen item, rather than as a plain balance sitting on the home screen the way coins and stars do.

**What is worth noting:** Royal Match never states how much a single level contributes to any of these values. The app names the finish line for each one but not the rate of travel toward it, so a player can see exactly what's needed next without ever knowing how many levels that actually takes.

**Key findings:**

- Tournament tokens, Easter Pass keys, Egg Hunt eggs and Propeller Madness's propellers and coins all advance from ordinary level play.
- None of these values is spendable on a user-chosen result.
- Each is shown as a remaining amount toward the next threshold rather than as a plain balance.
- The hard level at 39 pays 30 points to the Egg Hunt, more than an ordinary level.

**Screenshots needed:** the persistent home-screen items showing progress toward the next threshold for two different events.

### Variable Reward Outcome

**What was observed:** Area chests and Culinary Collection card packs both hold contents that aren't disclosed before opening and that differ from one instance to the next. The area-one chest pays 250 coins and four kinds of items; the area-three chest pays 250 coins, further items and four cards; two card packs shown yield four different named cards each.

**How it is presented:** Opening either one is its own separate tap with a reveal, arriving right after an area completes or a pack is granted.

**What is worth noting:** Nothing is paid or committed to obtain these particular chests or packs, they arrive as rewards for something already done, which is what keeps them a step removed from a purchase decision. The one case that looks similar but isn't shown here is duplicate card stars being spent to open further chests, which would put a cost in front of an unknown result rather than after one.

**Key findings:**

- The area-one chest yields 250 coins and four kinds of items.
- The area-three chest yields 250 coins, further items and four cards.
- Successive card packs yield different named cards from one another.
- Opening is a separate action with a reveal, and contents aren't disclosed beforehand.
- No value is committed by the user to obtain any of these particular chests or packs.

**Screenshots needed:** an area-chest opening showing its reveal; a Culinary Collection card pack reveal.

### Reward Multiplier

**What was observed:** Royal Match states two reward factors directly. At level 33 a doubling marker appears with a 15-minute countdown, and during that window both the tokens paid to the team and the progress paid to Propeller Madness move at twice their normal rate. Level 39 is marked as a hard level before entry and states that passing it triples the ordinary reward and pays 30 points to the Egg Hunt.

**How it is presented:** The doubling window shows as a marker next to the level along with its own countdown; the hard-level tripling is stated on the level's own entry screen before the user commits to playing it.

**What is worth noting:** Both modifiers are stated in advance rather than discovered after the fact, but what actually opens the level-33 window is never explained. The user sees the doubled marker and the timer before knowing why either one appeared, which means the factor is disclosed while the trigger behind it stays private.

**Key findings:**

- A 15-minute doubling window opens at level 33, affecting both team contribution and Propeller Madness progress.
- Level 39 is marked hard before entry and states a tripled reward plus 30 Egg Hunt points.
- Both factors are stated in advance of the reward resolving, not discovered afterward.
- What triggers the level-33 window is never explained.
- A King's Nightmare interlude also carries a doubled-reward marker over its stated coin payout.

**Screenshots needed:** the level-33 doubling marker and countdown; the level-39 hard-level entry screen stating its tripled reward.

### Streak

**What was observed:** Royal Match introduces Butler's Gift as a rule tied to first-try clearances: beat levels on the first attempt to start the next one already holding power-ups. The state is later shown active for two out of the last three levels. At level 36 the user spends a power-up specifically to avoid failing and losing that state, rather than to avoid retrying the level itself.

**How it is presented:** The gift's rule is stated once when it's introduced, then the state is shown as active or not on the level screen without being re-explained.

**What is worth noting:** Royal Match never shows what happens to this state after a level isn't cleared on the first try, since the user never lets that happen, choosing instead to spend a booster to protect it. That single decision is itself evidence of how the state is valued: protecting it was worth giving up a counted item over.

**Key findings:**

- Butler's Gift rewards first-try level clearances with power-ups at the start of the next level.
- The state is shown active for two out of the last three levels played.
- A power-up is spent at level 36 specifically to avoid losing the state, not just to avoid failing.
- What happens to the state after a level is not cleared on the first try is never shown.
- The profile separately keeps a running count of first-try wins, distinct from this state.

**Screenshots needed:** the Butler's Gift introduction screen; the level screen showing the state active.

### Seasonal Progression Pass

**What was observed:** The Easter Pass appears at level 37 as a 30-position reward track running on a 27-day 12-hour countdown, advanced by clearing levels and collecting keys. A free lane pays a reward at every position; a second lane, unlocked by a stated purchase, pays more at every one of those same positions and adds items exclusive to the paid lane.

**How it is presented:** The pass opens with a full-screen introduction and a first reward ready to claim, then sits as a persistent icon carrying a marker whenever a reached position is waiting to be collected. It's also offered a second time, from the bottom of the lives panel.

**What is worth noting:** A bonus reward sits at the very end of the track, unlocked only by the paid lane, and nothing about it is shown or mentioned anywhere before a user actually scrolls all the way down to see it. That's a different disclosure choice than the rest of the track, where every other position states its reward as the countdown runs.

**Key findings:**

- The pass runs 30 positions on a 27-day 12-hour countdown, advanced by clearing levels.
- A free lane and a paid lane pay at the same 30 positions, the paid lane paying more at each.
- The paid lane adds a golden frame, a golden username and a gift for teammates at its first position.
- A bonus reward sits at the end of the track, visible only once scrolled to.
- The pass is offered both from its own surface and from the bottom of the lives panel.

**Screenshots needed:** the pass track showing the free and paid lanes side by side; the end-of-track bonus reward.

### Set Collection

**What was observed:** The Culinary Collection holds 15 named sets of nine cards each, running on a 27-day 12-hour window. Cards arrive from card packs, chests and teammates, and completing a set pays a stated reward, with a further grand prize for completing every set. A duplicate card converts into a card star rather than being wasted.

**How it is presented:** The collection opens with an info screen explaining how cards are obtained and what completing a set and completing every set pays, then tracks held cards against each set.

**What is worth noting:** Nine cards across 15 sets is 135 cards to gather inside one 27-day window, which is a lot of specific items to land inside a fixed period from packs whose contents aren't disclosed in advance. The teammate request route and the duplicate-to-star conversion both exist alongside that math, which makes the collection lean on the social layer and on its own byproduct currency rather than on card packs alone.

**Key findings:**

- The collection holds 15 sets of nine cards each, 135 cards in total.
- Cards come from card packs, chests, and requests to teammates.
- Completing a set pays a reward; completing every set pays a further grand prize.
- Duplicate cards convert into card stars rather than being discarded.
- The collection runs on a 27-day 12-hour window.

**Screenshots needed:** the collection's info screen stating how cards are obtained; a set screen showing held cards against its total.

### Clan / Guild

**What was observed:** Royal Match's teams are persistent groups with a badge, a name, a description, a roster, a capacity of 50, a required level and their own activity marker. Beyond membership, a team holds its own state: a team score and a tournament position that belong to the team rather than to any one member, fed by tokens each member contributes.

**How it is presented:** The team surface sits behind its own navigation tab, showing the roster, the message board and the tournament standing together, separately from the two leaderboards.

**What is worth noting:** Only one team can be held at a time. The user leaves one team and joins another rather than belonging to both, which makes team choice a real decision with a cost, not a set of memberships that can be collected freely.

**Key findings:**

- Teams carry a badge, name, description, roster, capacity of 50, required level and activity marker.
- The team holds a score and a tournament position of its own, fed by member contributions.
- Joining is available directly on open teams, or by request on others.
- Only one team membership is held at a time.
- Leaving a team requires confirmation before another can be joined.

**Screenshots needed:** the team surface showing its roster and tournament standing; the join and leave flow.

### Gifting

**What was observed:** A teammate's request for a life can be answered directly, sending a life to that named teammate and paying the sender five coins for doing so. The app blocks a second answer to the same request. The user can also request lives from the team, with a sent request stated to last four hours. Purchased team offers extend the same idea to the whole roster at once, granting every member a period of unlimited hearts rather than a single sender-to-recipient transfer.

**How it is presented:** Requests and the option to help appear inside the team surface, and a numbered marker on the team icon signals when a teammate's request is waiting.

**What is worth noting:** The sender is paid for helping, five coins per life sent, which makes gifting inside Royal Match a two-sided exchange rather than a one-way favor. Whether sending a life costs the sender one of their own hearts is never shown, so what a gift actually costs the giver is not fully settled by this record.

**Key findings:**

- Answering a teammate's life request sends a life and pays the sender five coins.
- A second answer to the same request is blocked.
- A sent life request is stated to last four hours.
- Purchased team offers grant every roster member a period of unlimited hearts at once.
- Whether sending a life spends one of the sender's own hearts is never stated.

**Screenshots needed:** the team message board showing a life request and the help action; the marker on the team icon signalling a waiting request.

### Leaderboard

**What was observed:** Royal Match runs ordered lists in several scopes at once: players by level and by a separate value called crowns, for the world and for the user's own country; teams by team score, also for the world and for the country; and, inside the team tournament, teams ranked by position against each other and members ranked by their own contribution.

**How it is presented:** The players and teams lists sit behind the golden cup navigation item, each with world and country tabs; the tournament's own ranking sits inside the team surface instead.

**What is worth noting:** A third tab on the same leaderboard screen, friends, is closed behind a Facebook connection. Royal Match frames connecting as a way to save progress, though what it actually unlocks on that tab is the friends list itself. We did not cover the friends list in this analysis.

**Key findings:**

- Players are ranked by level and by crowns, for the world and for the user's country.
- Teams are ranked by team score, for the world and for the country.
- The tournament ranks teams by position and members by contribution, inside the team surface.
- The highest level shown on the world player list is 13,401.
- The friends tab of the leaderboard is closed behind a Facebook connection.

**Screenshots needed:** the players leaderboard's world and country tabs; the team tournament's position and contribution ranking.

### Comparative Rank

**What was observed:** Inside the team tournament, Royal Match states the team's own position against other teams and the user's own position against named teammates, both next to the reward that position earns. The team is shown at position nine at one point and reported moving between positions eight and nine. The user's own standing inside the team is shown as second place, marked by an armour colour that changes as that standing improves.

**How it is presented:** Both positions sit on the tournament surface together, the team's rank against other teams and the user's rank against teammates, shown alongside the next reward and what's needed to reach it.

**What is worth noting:** This sits next to the team leaderboard but is a different thing: the leaderboard is a browsable list, while this is the app actively telling the user where they and their team currently stand, unprompted, as part of the tournament screen itself.

**Key findings:**

- The team's position against other teams is stated on the tournament surface.
- The user's own position inside the team is stated as well, shown as second place.
- An armour colour changes to mark the user's standing as it improves.
- The reward for the next position is shown alongside the current standing.
- A knight title is named at a token threshold, tracked separately from the position itself.

**Screenshots needed:** the tournament screen showing both the team's position and the user's own standing inside it.

### Cosmetic Customization

**What was observed:** Royal Match lets the user pick a profile picture, use a Facebook photo or select an avatar, choose a frame, and set a name, all of which change nothing about cost, rules or outcome. None of this is prompted; the user finds these options on their own. The Easter Pass's paid lane replaces the ordinary frame and username with golden versions for as long as the event runs.

**How it is presented:** The identity options sit behind the profile icon in the top left of the home screen, reached only if the user taps it. The golden versions are shown as part of the paid lane's first reward position on the pass track.

**What is worth noting:** These options carry no visible value until the leaderboards and the team make them visible to other named people, since nothing about them matters to play on its own. That's exactly the moment the paid golden versions are sold, which places the purchase right where the identity items are about to be seen by others rather than at some unrelated point.

**Key findings:**

- The user can set a profile picture, avatar, frame and name, none of which changes cost, rules or outcome.
- None of these options is prompted; the default is a plain grey silhouette.
- The Easter Pass's paid lane sells a golden frame and golden username for the event's duration.
- The golden items sit at the first position of the paid lane, alongside a gift for teammates.
- Chosen identity items appear on the leaderboards and inside the team once set.

**Screenshots needed:** the identity-selection screen showing avatar, frame and name options; the golden frame and username sold in the paid pass lane.

### Purchase Ladder

**What was observed:** Royal Match's Easter Treasures surface presents nine rewards in a fixed order, instructing the user to claim each one to reveal the next. The sequence opens with a free hammer, coins and a chest, reaches a 2.99 rung paying a TNT, coins and a hammer, then continues through five more free rewards, coins, doubled boosters, a bow and arrow, a cannon and a jester, that sit beyond the paid position in the sequence.

**How it is presented:** The ladder sits inside the same offer stack Royal Match uses for its other live events, appearing on the home screen and again in the shop, with a two-day twelve-hour countdown attached and each claimed rung revealing the next.

**What is worth noting:** The instruction to claim each rung to unlock the next states the lock plainly, but the paid rung is never actually bought here, so what carries the tag is the surface's own claim-each-to-unlock framing rather than the lock being met directly. That's enough to apply the label, but not enough to call it more than a good read of the surface's own rule: what actually happens to the five free rewards beyond the paid rung for a player who never buys it is stated by Royal Match, not shown happening.

**Key findings:**

- Easter Treasures presents nine rewards in a fixed claim-to-unlock order.
- Eight rungs are free; the fourth costs 2.99.
- The five rewards beyond the paid rung are reachable only by claiming it first, per the surface's own stated rule.
- The ladder sits in the same offer stack as Royal Match's other live events, on the home screen and in the shop.
- The paid rung is never purchased here, so the lock is read from the surface's framing rather than met directly.

**Screenshots needed:** the Easter Treasures ladder showing the free rungs, the priced rung, and the claim-to-unlock instruction.

---

## Onboarding and first run

Royal Match's first run moves through a tracking request, a guided first match, and the first two castle-building tasks before leaving the user to explore on their own. This section covers that opening sequence in full.

### O1. Tracking permission comes first

Royal Match opens in vertical orientation and, before anything else, asks whether it can track the user's activity across other companies' apps and websites.

- The request precedes any gameplay, any account step and any explanation of the game.
- No notification permission is requested at this point.

### O2. Agreeing to the privacy policy

After the tracking request, Royal Match requires the user to agree to its privacy policy as a required step rather than an optional one.

- No account creation, sign-in or identity check is required before play begins.

### O3. A guided first match

Royal Match places the user straight into gameplay, teaching the match-three action on the board itself by tying the instruction to a specific object rather than describing the goal in the abstract. As soon as the first match completes, the app marks the lesson finished.

- There's no pre-play tutorial screen, video or statement of the game's overall goal.
- The instruction is tied to a specific board object rather than described in the abstract.

### O4. Pointing out the task list

After the first lesson, Royal Match prompts the user that a task list exists and shows where to find it.

### O5. The first castle-building task

Royal Match prompts the user to build a castle, shows area progress at the moment of that first build, and states the whole process runs six steps. The first step costs one star, which the user already holds, so the castle's first piece appears without any play required first.

- The area progress indicator appears at the moment of the first build rather than before it.
- The result is described as a castle in a fairy-tale style.

### O6. The star shortage names its own fix

The next task, a fountain, costs one star, and tapping it while short produces a message stating the user doesn't have enough stars, along with the route to get more: beat levels to earn them.

- The block is a resource shortage rather than a level or feature lock.
- The earning route is stated only once the shortage is actually hit, not in advance.

### O7. Locked boosters at level two

At level two, Royal Match states the goal as collecting 36 wooden pieces and shows a full set of boosters, all locked and unselectable.

- Their existence is disclosed before access to them is.
- The level can be started immediately without the user making any choice at this screen.
- No explanation of what the boosters do is given yet.

### O8. Building continues, costs rise

After the second level, Royal Match prompts the user to keep improving the castle, plays a short animation for the completed fountain, and issues the next task, gazebos, at a cost of two stars, double the cost of the first two tasks.

- Each completed build is followed immediately by the next task rather than by a return to the board.

### O9. The first unguided home screen

After two levels and two builds, Royal Match shows the home screen with the castle and lets the user explore freely. The screen carries a default grey and white profile icon, three balances, a settings button, the current level and area, and a five-item navigation bar.

- The three balances shown are 2,093 gold coins, five hearts and a store of gold stars.
- The current state is shown as level three, area one.
- The five navigation items are a book with stars, a golden cup, a home button, a badge showing several people, and a set of cards.
- The coin total is already present without the app ever having shown where those coins came from.

---

## Core loop and automation

This section covers the repeating level, its assist items, and the interludes, bonus levels and events layered on top of ordinary play.

### O10. A target and a move limit, no clock

Each level states what must be achieved and how many moves remain, with no timer anywhere on the screen. Reaching the target within the moves completes the level; running out of moves ends it as a failure.

- Completing a level pays one star.
- A failed level can be started again.

### O11. The board's objective changes

What must be destroyed or collected changes from level to level: breaking a box, collecting 36 wooden pieces, destroying patches of grass, matching next to mailboxes to collect mail, and breaking royal eggs.

- Mailboxes aren't destroyed directly; each qualifying match nearby collects mail from them.
- The hard level at 39 is built from three mailboxes.

### O12. Difficulty rises, and failure arrives around level 18

Royal Match increases difficulty gradually enough that ten levels pass before any booster is used. The first failures start at level 18, level 19 is failed twice in a row, and the game becomes noticeably harder past level 21.

- Boosters are banked rather than spent before the first failure.

### O13. Hearts fall on failure, return on a timer

Royal Match starts the user with five hearts, consumed only when a level is failed. A spent heart restores in roughly 24 to 25 minutes.

- The lives panel offers a 900-coin refill.
- The panel also offers to request free lives, showing a total of zero held and pointing the user to ask teammates.
- After joining a team, buying more lives becomes available in a way it wasn't clearly before.
- Royal Match doesn't show what happens once every heart is spent.

### O14. A paid way to keep a failed level going

The first time the user runs out of moves, Royal Match offers five more moves for 900 coins to keep the level going.

- Declining is available, and the level then counts as a failure and can be retried.
- That continuation price matches the price of a heart refill exactly.
- A level failure costing 900 coins to undo, against a whole bonus level yielding roughly 500 coins, makes coins hard to accumulate relative to that cost.

### O15. Assist items unlock one at a time

Royal Match releases its assist items progressively, teaching each one at the level where it becomes usable.

- A royal hammer that clears any object unlocks with a quantity of three after six or seven games.
- An arrow that clears a row unlocks after level 14.
- A cannon that clears a column unlocks after level 16.
- A jester's hat that shuffles the board unlocks after level 18, with five uses.
- TNT appears as a reward from offers and the Easter Pass and as a starting item in bonus levels.
- A propeller that clears a row or column is introduced by the Propeller Madness event.
- Each item's quantity is displayed and falls as it's used.

### O16. Choosing boosters before a level

Royal Match presents a booster selection before each level starts; at level two this selection is present but entirely locked.

- Once items are unlocked, the selection can be skipped, or an item can be chosen and used during play.
- At level 36 the user uses a power-up specifically to avoid failing and losing a separate ongoing state.

### O17. King's Nightmare interludes

At intervals, the ordinary play button is replaced by King's Nightmare, offering a 50-coin reward for a short activity that can be played or skipped.

- Each instance runs its own objective: carrying water to a sprinkler in 20 moves, breaking all the boxes before time runs out, and getting water to a king who isn't visible, in 30 moves.
- One instance is timed rather than move-limited; another carries a doubled-reward marker and hides its target.
- Each completion ends with a thank-you, confetti and trumpets, and the button reverts to the numbered level afterward.
- The interludes resemble the gameplay style shown in the game's own advertising.

### O18. Bonus levels at 20 and 40

Level 20 is presented as a bonus level, framed around collecting as many coins as possible within 20 moves, starting with two TNTs already in hand. Level 40 runs the same way.

- Neither carries a pass or fail condition; the outcome is simply the quantity collected.
- Matches next to coins collect them directly, and combining two TNTs pays an immediate 80 coins.
- The bonus level pays more than 500 coins.
- What the reward will be isn't stated beyond the coin framing before entry.

### O19. A hard level, marked in advance

Royal Match marks level 39 as hard before the user enters it, stating that passing it triples the reward and pays 30 points toward the Egg Hunt.

- The level is built from three mailboxes to collect mail from.

### O20. The king reacts to the board

When few moves remain and objectives are still outstanding, Royal Match shows the king looking worried, appearing around three remaining moves with work still to do.

- On success, the king thanks the user with confetti.
- The expression tracks the board's current state rather than being something the user selects or owns.

### O21. Butler's Gift rewards first-try wins

Royal Match introduces Butler's Gift, stating "beat levels on your first try to start the next level with power-ups." The state is later shown active for two of the last three levels.

- At level 36 the user spends a power-up specifically to avoid failing and losing this state.
- What happens to it after a level isn't cleared on the first try isn't shown.

### O22. A doubling window at level 33

At level 33, Royal Match marks the level with a doubled-reward icon and starts a 15-minute countdown, stating that rewards are doubled for that time.

- Both the contribution paid to the team and the progress paid to Propeller Madness move at twice their normal rate during the window.
- What actually opens the window isn't stated; the user's first reaction is that its meaning is unknown, and the explanation only comes from opening it.

### O23. Stars fund optional building

Royal Match prompts the user to spend held stars on the current area task each time enough are held, and the prompt can be dismissed; play continues and stars can simply accumulate. A marker appears next to the area chest whenever stars are held and a task is still waiting.

- Area-one tasks include the castle, the fountain, gazebos, bushes, swans and flowers across six steps.
- Area two adds glass, carpet and chairs; area three is stated to hold nine things to customize.
- Task costs rise from one star to two within area one.
- Each build completes immediately once its cost is paid, with an animation.

### O24. Finishing an area

Completing an area produces a chest to open, a celebration, a view of the finished area, and then a new area to unlock.

- The area-one chest pays 250 gold coins and four kinds of boosters and power-ups.
- The area-two chest is reported as paying more than the previous one, without contents listed.
- The area-three chest pays 250 coins, further items and four Culinary Collection cards.
- Area one completes at level 11, area two at level 21, and area three shortly after level 41.
- Each new area is presented as a separate step the user taps to unlock.

### O25. Events run on ordinary level play

Once its events are running, Royal Match advances every one of them from the same match-three levels the user is already playing, rather than from any separate activity.

- Tournament tokens, Easter Pass keys, Egg Hunt eggs and Propeller Madness steps all move forward this way.
- The Easter Pass states its instruction as beating levels and collecting keys, and the Egg Hunt states beating levels and collecting eggs.
- A token moves into the team tournament after a completed level.

---

## Goals and progression

This section covers the player level, the area map, the profile's running stats, and the staged events that run alongside them.

### O26. The player level as running state

Royal Match keeps a current level for the user, shows it on the home screen, advances it by one for each level cleared, and uses it as the condition for other parts of the product. Play moves from level one past level 41 by the account's current point.

- Other players' levels are shown on the leaderboards, with the highest shown at 13,401.
- Level is the stated condition for both joining teams and reaching the collection.

### O27. An area map of 152

The first navigation item opens the areas surface, showing areas already held and areas still to come, and states there are 152 areas in total.

- The user starts outside the map and scrolls upward through what remains.
- Area names shown in order are area one, the throne room, the dining room and the garden.

### O28. The profile's running stats

The profile shows the user's level, team membership and join date, alongside a set of running counts: first-try wins, helps received, areas completed, collections completed and sets completed.

- These are presented as counts rather than as attained states or badges.

### O29. Propeller Madness, staged toward a grand prize

After level 27, Royal Match presents Propeller Madness as a pop-up and a persistent on-screen item, stating that collecting five propellers wins a reward and completing all steps wins a grand prize of 10,000 coins, running for two days.

- Collecting five propellers completes the first step and opens the next, worth 100 coins.
- Each following step opens a further one with a better reward, ending in the grand prize.
- Rewards from steps already passed can be collected while the event runs.
- The propeller is itself a board item that erases a row or a column.
- The app doesn't enumerate every step past the second.

### O30. The Egg Hunt counts toward baskets

After level 38, Royal Match presents the Egg Hunt, stating that beating levels collects eggs and that 25 more are needed to smash the next basket, running for two days and 12 hours.

- The event also fills a persistent on-screen item as play continues.
- Passing the hard level at 39 gives 30 points toward it.
- Tapping play on the event pop-up leads into the next ordinary level rather than a separate mode.
- How many baskets exist in total, and what they contain, isn't stated.

### O31. The Easter Pass, a two-lane track

At level 37, Royal Match introduces the Easter Pass with a 27-day 12-hour countdown and a first reward ready to claim, instructing the user to beat levels and collect keys to unlock rewards.

- A second, purchasable lane pays more at the same 30 positions as the free lane.
- The first position pays one TNT free; the paid lane instead pays eight lives, a golden frame, a golden username and a teammate gift.
- The second position pays one coloured candy free, or 15 minutes of infinite hearts paid.
- The final position pays triple power-ups and boosters free, or an hour of unlimited boosters plus 1,000 coins paid.
- A bonus reward sits at the very bottom of the track, unlocked by activating the pass, and nothing about it is shown anywhere before the user scrolls all the way down to find it.
- The pass is also offered from the bottom of the lives panel.

### O32. The Culinary Collection begins

After level 40, Royal Match starts the Culinary Collection, framed around completing sets for rewards, running 27 days and 12 hours, and grants a first pack of four cards.

- The collection holds 15 sets of nine cards each, 135 in total.
- The first pack yields a rolling pin, falafel, marshmallow and sorbet.
- The named sets include frozen, street foods, sweets, garnishes, tools, dairy, pastries, spices, cuisines, snacks, market, coffee, drinks, dining and breakfast.
- Cards come from packs, chests and teammates; duplicates convert into card stars, which the app states are used to open further chests.
- The grand prize for completing every set is 10,000 coins, a chef badge and ten times boosters.
- Completing area three grants four further cards.

### O33. The team tournament ranks contribution

After joining a team with enough members, Royal Match shows a team tournament, framed as converting tokens into lances contributed to the team. The surface shows the team's current position, the reward at the next position, each member's contribution, and the user's own standing inside the team.

- The team sits at position nine at one point, with four more tokens needed for the next reward, a power-up.
- Members with zero contribution are marked as earning nothing.
- After level 26 the user needs 76 more tokens to become a knight.
- After level 34 the user's armour changes from silver to gold, shown in second place within the team.
- The tournament runs on a countdown of two days and 13 hours.
- What a lance is actually worth in tokens isn't stated.

---

## Access and eligibility

This section covers the level requirements standing in front of teams, the collection, and each assist item.

### O34. Teams require level 21

The teams navigation item states that level 21 is required to join a team. A team can be viewed before then, but tapping join produces the same requirement message.

- No request can be sent while under level 21.
- The stated value of joining is free lives and free rewards.
- The prompt to join arrives on completing level 20, one level before it can be acted on.
- The top team requires level 13,400 and is marked closed with high activity; some teams also state a crown requirement.

### O35. The collection requires level 41

The last navigation item states that level 41 is required to unlock the collection and gives no description of what the collection actually is.

- The Culinary Collection itself begins once level 40 is completed.

### O36. Assist items are gated by level

Royal Match locks its boosters and power-ups at the start and releases them at specific levels: the royal hammer after six or seven games, the arrow after level 14, the cannon after level 16, and the jester's hat after level 18.

- Locked items are shown but can't be tapped.
- Each unlock is followed by a short instruction at the level where it first becomes usable.

### O37. Ten members required for the tournament

After level 22, Royal Match shows a team tournament pop-up along with a notice that at least ten members are needed to participate, which the user's current team doesn't have.

- The user leaves that team and joins one that meets the requirement, at which point the tournament appears.
- Leaving a team asks for confirmation.
- Only one team can be held at a time.

### O38. Two closed surfaces: Royal League and friends

At the top of the areas surface, Royal Match shows Royal League, and tapping it does nothing; Royal Match gives no explanation of it anywhere.

- The friends tab of the leaderboard shows only a prompt to connect with Facebook, and the friends list can't be reached without that connection.
- Declining the connection produces a sign-in failure message.

---

## Economy and resources

This section covers the two earned balances, the hearts that gate another attempt, and the several event-specific units running at once.

### O39. Gold coins, earned and spent widely

Royal Match grants gold coins from level play, King's Nightmare interludes, bonus levels, area chests and event rewards, holding them as a balance shown on the home screen. Coins are spent on a 900-coin heart refill and 900 coins for five extra moves, and are also sold in packs for money.

- The balance stands at 2,093 after two levels.
- The King's Nightmare reward is 50 coins, later doubled.
- An area chest pays 250; a bonus level pays over 500; event grand prizes are stated at 10,000.
- On first seeing the shop, what coins are actually for isn't yet clear to the user.
- No spending route other than lives, moves and offer-granted items appears.

### O40. Gold stars, one faucet and one sink

Royal Match grants one gold star for each level cleared and accepts stars only as payment for area-building tasks. Holding too few stars blocks a task, and the app states that levels must be beaten to earn more.

- Task costs are one and two stars.
- Stars accumulate if the user doesn't build.
- Because one level pays one star, a two-star task takes two levels to afford, which is where building visibly slows relative to level clears.
- No route to stars other than clearing levels appears.

### O41. Hearts, bounded and restored three ways

Royal Match holds hearts as a balance bounded at five, consumed on failure, restored on a timer, purchasable with coins, or obtainable from teammates.

- The Easter Pass raises this bound to eight while active.
- Paid offers grant periods of unlimited hearts, from 15 minutes up to 18 hours, rather than heart quantities.
- The lives panel routes the user to teammates whenever no free lives are held.

### O42. Event units: tokens, keys, eggs, propellers and card stars

Royal Match runs several separate counted units, each belonging to one event and each advanced by ordinary level play: tokens that convert to lances for the team, keys that advance the Easter Pass, eggs that advance the Egg Hunt, propellers and then coins that advance Propeller Madness, and duplicate cards that become card stars.

- None of these is spendable on a user-chosen purchase except card stars, which the collection states are used to open chests.
- Each is shown as progress toward a stated next threshold rather than as a free balance.

### O43. Crowns and team score, unexplained

The players leaderboard shows crowns beside other players, with values as high as 11,000, and some teams state crowns are needed to join.

- Teams also carry a team score, the highest reported as roughly 700 million.
- Royal Match doesn't state what crowns are, and shows no route to earning or spending them.
- Team capacity is shown as up to 50 members.

### O44. Chests and packs, variable contents

Royal Match grants chests on area completion and card packs in the Culinary Collection, with contents that differ between openings.

- The area-one chest pays 250 coins and four kinds of boosters and power-ups.
- The area-three chest pays 250 coins, further items and four cards.
- The first card pack pays four named cards and a later pack pays four different ones.
- Contents aren't disclosed before opening, which is presented as a separate tap with a reveal.
- The collection states that duplicate card stars can open further chests, though Royal Match doesn't show whether those particular chests vary in contents.

---

## Social

This section covers identity, the two leaderboards, teams, and what teammates send each other inside them.

### O45. Setting an identity, unprompted

Tapping the profile image lets the user set a username, use a Facebook photo or choose an avatar, pick a frame, and choose a display name. Royal Match never prompts the user to do any of this; the default is a plain grey and white silhouette until the user finds these options on their own.

- Once set, the chosen name and frame show on the profile.
- The Easter Pass's paid lane sells a golden frame and golden username at the first position of its activated track.

### O46. The players leaderboard

The golden cup navigation item opens a leaderboard with three tabs: friends, players and teams. The players tab shows a world list and a country list, each ordered by level and crowns, with names, pictures, levels and crowns shown for every entry.

- The highest level on the world list is 13,401, with crowns as high as 11,000.
- The country list shows a comparable set of players at the same top level.
- The user's own position within either list is not shown.

### O47. The teams leaderboard

The teams tab of the same leaderboard shows teams ordered by team score, with badges, names, capacity and score, for the world and for the user's country.

- Capacity is shown as up to 50 members, and the top teams are usually full.
- The highest team score is roughly 700 million.

### O48. Joining, leaving and requiring a team

Royal Match maintains teams as persistent groups, each with a badge, a name, a description, a roster showing every member's level, a capacity, a team score, a required level and an activity marker.

- Some teams can be joined directly; others require a sent request.
- The prompt to join arrives right after level 20, stating free lives and free rewards as the value of joining.
- The user holds only one team membership at a time, leaving one team, with a confirmation step, before joining another.

### O49. The team message board

Inside a team, Royal Match shows a shared message board carrying messages and help requests from members, including one life request timestamped well over two years earlier alongside current ones.

- The user can type and send a message to the team directly, which appears there once sent.
- Requests and messages are associated with the team rather than a private conversation.

### O50. Sending and requesting lives

A teammate's request for a life can be answered directly; doing so sends a life and pays the sender five coins.

- Answering the same request a second time is blocked with a message stating it's already been helped.
- The user can also send a request of their own, stated to last four hours.
- The lives panel routes an empty personal supply of free lives straight to this same teammate-request route.

### O51. Requesting cards from teammates

Once the Culinary Collection is running, the team surface lets the user request a specific card from teammates, choosing one card at a time.

- A sent card request is stated to last 24 hours, longer than the four-hour window on a life request.
- The team icon carries a numbered marker whenever a teammate's own request is waiting to be answered.
- The collection names friends as one source of cards alongside packs and chests.

### O52. Contribution as the price of the team reward

The team tournament states plainly that members who don't contribute receive no reward, and shows each member's individual contribution next to the team's overall position.

- The Easter Pass's activated lane includes a gift specifically for teammates.
- The purchased team offers grant every member of the roster a period of unlimited hearts rather than rewarding only the buyer.

---

## Reach beyond the app

This section covers saving progress through an outside account, and the one feature that needs it.

### O53. Saving progress through an outside account

Settings carries a save-your-progress option offering sign-in with Facebook, Google or Apple. Without one of these, Royal Match states that progress isn't saved.

- No sign-in is required to play; the prompt is available rather than enforced.
- Starting one of these sign-ins and then abandoning it produces a failure message and a prompt to try again.
- The other settings are music, sound, vibration, hint, notifications, support, parental control, terms and privacy.

### O54. Facebook as the route to friends

The friends tab of the leaderboard states that connecting with Facebook saves progress, and tapping it asks to connect the user's Royal Match account to Facebook.

- Declining produces a sign-in failure message.
- The other two sign-in options, Google and Apple, are offered for saving progress but not for finding friends.
- Royal Match frames this connection around saving progress even though what it actually unlocks on that tab is the friends list.
- We did not cover the friends list in this analysis.
- Royal Match offers no invitation, referral or share route out of the app anywhere.

---

## Monetization

This section covers the shop, its price ladders, and the timed offers Royal Match places around the game's own failure and event surfaces.

### O55. The shop's leading offers

Tapping the coin balance opens Royal Match's shop, which leads with two named offers, a special offer and a princess treasure, ahead of the plain coin packs.

- The special offer costs 1.99 and includes an hour of unlimited boosters, a set of power-ups and 2,000 gold coins.
- The princess treasure costs 9.99 for the same unlimited boosters and power-ups plus a coin amount the game states as roughly 5,000.
- Measured against price, the cheaper special offer actually returns more coins per dollar than the princess treasure does.

### O56. The coin price ladder

Gold coins are sold in fixed packs at rising prices: 1,000 coins for 1.99, 5,000 for 7.99 and 10,000 for 14.99 in the first shop view, extending to 25,000 for 29.99, 50,000 for roughly 45, and 100,000 for 99.99.

- The rate improves as the packs get larger, so a dollar buys more coins at the higher end of the ladder than at the lower end.

### O57. The named treasure bundles

Behind a "more offers" control sit four named bundles, priced and scaled up in order: queen's treasure, king's treasure, royal treasure and superior treasure.

- Queen's treasure costs 19.99 for 10,000 coins, two times power-ups and 12 hours of unlimited boosters.
- King's treasure costs 39.99 for 25,000 coins, four times power-ups, 24 hours of unlimited boosters and six hours of unlimited hearts.
- Royal treasure costs roughly 79.99 for 50,000 coins, ten times power-ups, 72 hours of unlimited boosters and 12 hours of unlimited hearts.
- Superior treasure costs 99.99 for 65,000 coins, 13 times power-ups, 100 hours of unlimited boosters and 18 hours of hearts.
- Queen's treasure carries a popular marker and superior treasure carries a best-value marker.
- Every bundle above the cheapest pairs coins with a time-limited period of unlimited items rather than with fixed quantities alone.

### O58. Team offers sold once each

After the first tournament level, Royal Match offers three team-branded bundles, bronze, silver and gold, each timed to the tournament's own remaining window and each stated to be available as a single purchase.

- Bronze costs 9.99 for 5,000 coins, an hour of unlimited power-ups and boosters, and 15 minutes of unlimited hearts for every team member.
- Silver costs 19.99 for 10,000 coins, 12 hours of unlimited boosters and 30 minutes of unlimited hearts for the team.
- Gold costs 39.99 for 25,000 coins, six hours of unlimited hearts, four times power-ups, 24 hours of unlimited boosters, and an hour of unlimited hearts for the team.
- These offers appear immediately after the tournament has already told the user that members who don't contribute get no reward.

### O59. The Easter Treasures ladder

Easter Treasures runs on a countdown of two days and 12 hours, instructing the user to claim each rung to reveal the next.

- The rungs run from a free hammer, 100 free coins and a free chest, then one rung priced at 2.99 containing a TNT, 3,000 coins and a hammer, followed by further free rungs, coins, doubled boosters and more assist items.
- The paid rung sits in the middle of the sequence, and reaching the free rungs beyond it requires buying that one first.
- The ladder applies no pressure of its own beyond its countdown.

### O60. Activating the Easter Pass

Royal Match offers activation of the Easter Pass for roughly 9.99, stating that it grants special rewards and exclusive bonuses until the event ends.

- The stated bonuses are eight held hearts instead of five, a golden profile frame and username, and a gift for teammates.
- The activated lane pays a larger reward at each of the pass's 30 positions than the free lane does, and unlocks a bonus reward waiting at the end of the track.
- The offer to activate appears both on the pass's own screen and at the bottom of the lives panel.

### O61. How offers are ordered

Royal Match stacks its live offers in the same order on the home screen and in the shop: the team tournament first, then the team offers, then Easter Treasures, then the Easter Pass, then the special offers and the plain coin packs.

- Each new event adds its own persistent item to the home screen rather than replacing one that's already there.
- The events have arrived one at a time rather than all together.

---

## Return triggers

This section covers the permissions, timers and countdowns that bring the user back.

### O62. Notifications, requested on return

Royal Match asks for notification permission when the user reopens the app after a break, rather than at first launch, unlike the tracking request, which is the very first thing shown.

- Notifications also appear as a toggle in settings.

### O63. A clock on the next attempt

Each spent heart restores after 24 to 25 minutes, and the lives panel shows the countdown to the next one directly, shown at 7 minutes 30 seconds with three hearts held.

- The alternatives offered at that moment are a 900-coin refill or a request to teammates.
- Paid offers replace the timer with periods of unlimited hearts rather than heart quantities.

### O64. Every event carries a countdown

Royal Match attaches a remaining-time figure to each live event and offer: two days for Propeller Madness, two days 12 hours for the Egg Hunt and for Easter Treasures, two days 13 hours for the team tournament and its offers, and 27 days 12 hours for the Easter Pass and the Culinary Collection.

- Countdowns show on both the event's introduction pop-up and its persistent home-screen item.
- The several windows run at the same time.
- The 15-minute doubling window at level 33 is the shortest of the countdowns shown.
- What happens to unclaimed rewards once a window closes isn't stated.

### O65. A rating prompt after level 14

After level 14 and before level 15, Royal Match shows an app store rating prompt asking whether the user is enjoying the game.

- It's the first rating prompt shown.
- It arrives after a run of levels cleared without a single failure.

### O66. Pending markers on the home screen

Royal Match marks surfaces holding something waiting: the area chest carries a marker when stars are held and tasks remain, the Easter Pass key carries a marker when a reached position hasn't been collected, and the team icon carries a numbered marker when a teammate's request is waiting.

- The team marker is a number in a green circle.
- These markers stay visible on the home screen while the underlying item is unresolved.
