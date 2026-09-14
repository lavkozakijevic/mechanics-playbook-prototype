# FC Mobile

**Teaser:** The only feature in FC Mobile called a streak has no continuity in it at all, just ten packs bought in order.

FC Mobile is a football management and match-play game built around one account-level progression that gates almost everything else in the product. XP from matches, missions, drafts and skill games advances that level, and each crossing releases another named feature, leagues, the market, challenge mode, in a sequence the player doesn't choose, since every activity feeds the same number. Underneath that progression sits a large squad-management system, players held as their own developing items, and around it three overlapping return cadences, daily, weekly and seasonal, that rarely close at the same time. Every currency display doubles as a route into the store, and the one feature carrying the word "streak" turns out to be a purchase ladder with no continuity condition at all.

---

## System view

FC Mobile is a complex system whose spine is the account level: XP from nearly every activity, matches, missions, drafts, skill games, advances one number, and that number is what releases the rest of the product, one named feature at a time, in a sequence no player chooses since everything feeds it at once.

---

## Mechanics

### Experience Points

**Implementation summary:** FC Mobile runs three separate progress values, account XP, Star Pass credits, league points, none of them ever spendable on anything.

**What was observed:** FC Mobile grants XP from nearly every activity, matches, missions, drafts and skill games, and spends it entirely on advancing one account level; nothing about it lets the user choose what to buy with it. Star Pass credits and league points run the same shape on two further tracks: credits accumulate from Division Rivals and live events toward roughly sixty ordered positions and reset when a new season starts, and league points accumulate from members' combined activity toward the league's own next season level.

**How it is presented:** The account level sits without a name or identity beyond its number, credited the moment a threshold is crossed, sometimes twice in immediate succession. Star Pass credits and league points each show a running total against the next position on their own track screens.

**What is worth noting:** None of these three values can ever be spent on something the user picks; every one of them exists purely to cross a threshold. That's what keeps this distinct from the game's several currencies, and it's also why crossing two account levels back to back reads as a strange, almost accidental event rather than a designed one, since nothing else about the interface gives the level a name.

**Key findings:**

- XP is earned from matches, missions, drafts and skill games and spent only on account level.
- Star Pass credits and league points satisfy the same measure-and-threshold shape on separate tracks.
- Star Pass credits reset when a new season starts; whether league points reset at a season boundary isn't stated.
- Two account levels were crossed in immediate succession at least once.
- None of the three values can be exchanged for a user-chosen result.

**Screenshots needed:** the account level-up screen; the Star Pass credit total shown against its next position.

### Leveling

**Implementation summary:** FC Mobile runs four separate leveling states at once, so "leveling up" means a different thing depending which screen states it.

**What was observed:** FC Mobile runs several ordered state series at once. The account level is a single current number advanced by XP and announced at each crossing. The head-to-head division ladder runs from Amateur 3 up through Semi Pro, Pro and World Class, rising by one star per win and falling by one per loss, with promotion automatic at a required star count. Manager mode holds its own separate rank, and every player item separately holds a training level from 0 to 30 and its own rank-up level.

**How it is presented:** The account level appears as a bare number with no name attached. The division ladder shows a star count and the current division name together, and moves automatically the moment enough stars accumulate in either direction.

**What is worth noting:** The division ladder is an absolute tier read off a fixed star count, not a position relative to other players, which is what keeps it here rather than under the game's comparative-ranking mechanics even though it looks similar to one. Multiple state series advancing independently, the account, the division, manager rank, and every individual player, means "leveling up" means a different thing depending which screen it's said on.

**Key findings:**

- The account level advances from XP and is announced at each crossing, with no name attached to the number itself.
- The head-to-head division ladder runs Amateur 3 through Semi Pro, Pro and World Class, rising and falling by stars.
- Promotion is automatic at a required star count; losing stars causes demotion.
- Manager mode holds a separate starting rank of its own.
- Each player item separately holds a training level from 0 to 30 and its own rank-up level.

**Screenshots needed:** the division ladder showing the current star count and tier; a player's training level and rank-up level on its detail screen.

### Progression Gate

**Implementation summary:** FC Mobile's single account level gates seven unrelated named features at once, deciding a new player's feature order as a side effect of play.

**What was observed:** FC Mobile withholds several named parts of the product behind the account level: the market at level 9, leagues and the football center at level 4, challenge mode at level 5, the scouting camp at level 6, a lineup slot at level 8, club challenge at level 10, and one formation at level 20. Other gates read against activity rather than level: VS Attack unlocks after one Head to Head match played, and Manager Mode after two Division Rivals matches.

**How it is presented:** A locked feature states its exact requirement in place, in the terms of the level or match count that opens it, and several stated requirements can be previewed before they're met, like stadiums that show "unlock this by progressing in the Star Pass" while remaining unselectable.

**What is worth noting:** Because a single account level gates several unrelated features at once, the level determines the order in which the whole product opens itself to a new player, and that order isn't something the player is choosing, it's a side effect of playing anything at all, since every activity feeds the same number.

**Key findings:**

- The market, leagues, football center, challenge mode, the scouting camp, a lineup slot, club challenge, and a formation are all released at stated account levels.
- VS Attack unlocks after one Head to Head match played; Manager Mode after two Division Rivals matches.
- Locked stadiums and weather options can be previewed before they're unlocked.
- Requirements are stated in place, in the exact terms of the level or count that satisfies them.
- No alternative purchase route around any of these gates was found, apart from a further lineup slot purchasable after the level-8 grant.

**Screenshots needed:** the locked market screen stating its level-9 requirement; a stadium option showing its Star-Pass-progress unlock condition.

### Milestone

**Implementation summary:** FC Mobile announces a milestone journey program in its news feed that was never actually located anywhere in the product.

**What was observed:** FC Mobile recognizes two defined points inside broader activities with their own named rewards. The guess-the-player game carries its own milestone track, paying rewards for a stated count of correct guesses out of a full set of eight. Icon Chronicles pays three player items specifically for completing every entry in one chapter's set of stories, on top of whatever each individual entry already paid.

**How it is presented:** Both milestones are named directly on their own tracks, guess-the-player states its progress toward the full set, and the Icon Chronicles chapter states its own completion reward separately from its ordinary per-task rewards.

**What is worth noting:** FC Mobile also announces a whole separate milestone program in its news feed, inviting the user to start a "milestone journey," but the program itself was never found anywhere in the product. That gap between the announcement and the actual feature is worth treating as a fact about the product rather than a hidden mechanic: what's real here is the two working milestones on the guess-the-player and Icon Chronicles tracks, not the announced program.

**Key findings:**

- The guess-the-player activity pays rewards for a stated count of correct guesses toward a full set of eight.
- Icon Chronicles pays three player items for completing one chapter's full set of stories.
- Both rewards sit on top of whatever the individual steps inside them already pay.
- A separate "milestone program" is announced in the news feed but was never located anywhere in the product.
- Neither of the two working milestones was actually completed during play.

**Screenshots needed:** the guess-the-player milestone track showing progress toward the full set; the Icon Chronicles chapter-completion reward screen.

### Challenge

**Implementation summary:** FC Mobile structures even its tutorial and first warm-up match as bounded challenges, with a completion count and guaranteed reward attached.

**What was observed:** FC Mobile builds bounded, scored activities throughout the product. Skill games set three point targets that decide a one-, two- or three-star result, timed and limited to a stated number of attempts. Chapter tasks inside Icon Chronicles state an objective, a difficulty and a completion count against a guaranteed reward. Real-world duels close at a stated kickoff time, after which the window to choose closes for good.

**How it is presented:** Every one of these states its condition, its boundary and its reward together, before the user commits: a skill game shows its three thresholds up front, a chapter task shows its guaranteed reward and expiry, and a duel shows a countdown to the real match it's tied to.

**What is worth noting:** Even the tutorial and the very first warm-up match are built this way, with a completion count and a guaranteed reward attached, which means a first-time player's very first minutes in the product are already structured as a bounded challenge rather than free play.

**Key findings:**

- Skill games set three point thresholds deciding a one-, two- or three-star result.
- Chapter tasks state an objective, a difficulty, a completion count and a guaranteed reward together.
- Real-world duels close at the kickoff of the real match they're tied to.
- Theme challenges inside events name specific conditions, such as comeback and heroism.
- The tutorial and the first warm-up match are both framed with a completion count and a guaranteed reward.

**Screenshots needed:** a skill game's three-star target screen; a chapter task showing its objective and guaranteed reward.

### Daily / Weekly Quests

**Implementation summary:** FC Mobile runs two parallel mission programs tracking the same actions separately, whose completion records diverge with no way to reconcile them.

**What was observed:** FC Mobile issues a set of four daily tasks that reset on a recurring boundary, with any single task swappable for a small gem cost. Alongside it, a seven-day kickoff mission program issues a fresh set of tasks each day on its own unlock schedule, running in parallel with a separate five-day event mission set that tracks completions of some of the same actions independently.

**How it is presented:** Each day's tasks show a live completion counter and reward, with the next day's set stated to unlock on its own timer, from eight hours out to several days for the later ones in the kickoff sequence.

**What is worth noting:** Running two mission programs in parallel, the kickoff set and the event set, over the same actions but tracking their completion separately carries a real cost: the product's own record shows one action being counted by one program and not the other, which is exactly the kind of mismatch a player has no way to reconcile from the interface alone.

**Key findings:**

- Four daily tasks reset on a recurring boundary, and any one can be swapped for 10 gems.
- A seven-day kickoff mission program issues a new task set each day on its own unlock timer.
- A parallel five-day event mission set tracks some of the same actions independently.
- The two mission programs' completion records diverge on at least one shared action.
- Completing all of a day's tasks pays a separate bonus reward beyond the individual task rewards.

**Screenshots needed:** the daily task list showing its four tasks and refresh control; the kickoff mission calendar showing each day's unlock timer.

### Seasonal Progression Pass

**Implementation summary:** FC Mobile routes its pass purchase control to a separate store screen, which never states how many positions a bundled purchase actually buys.

**What was observed:** FC Mobile's Star Pass runs roughly sixty ordered reward positions advanced by credits earned in Division Rivals and live events, paying a free reward at each position and a larger one on a second, purchased lane. The pass states its own season boundary directly, resetting the credit count when a new season starts. A second, similarly shaped pass runs for nine days inside a themed event alongside it.

**How it is presented:** The track shows every position's reward and the credit total needed to reach it, with the purchase control for the paid lane routed out to a separate store screen rather than offered on the pass itself.

**What is worth noting:** Sending the purchase control to a different screen than the one it's advertised on is a real point of friction, since it's also where the product loses a piece of information a buyer would want: nothing anywhere states how many of the sixty-odd positions a bundled credit purchase actually buys.

**Key findings:**

- The Star Pass runs roughly sixty ordered positions with a free lane and a purchased lane.
- Credits are earned from Division Rivals and live events and reset when a new season starts.
- A second, similarly shaped pass runs for nine days inside a themed event.
- The purchase control inside the pass routes out to a separate store screen.
- How many track positions a bundled credit purchase buys is never stated.

**Screenshots needed:** the Star Pass track showing the free and paid lanes; the purchase control routing to the store.

### Set Collection

**Implementation summary:** FC Mobile keeps completed player-collection sets visible and activatable in a history tab even after their own boost has expired.

**What was observed:** FC Mobile tracks three named player collections member by member: one with 71 players across 2 groups, one with 100 players across 4 groups, and one with 145 players across 3 groups. Sub-groups inside each set name their required members individually, with their own reward for completing that specific group. Completed sets from past seasons stay visible in a history tab, where their players can still be activated even after the set's own boost has expired.

**How it is presented:** Each collection shows a running count of members held against the full set, with sub-groups listed by name and required members shown individually rather than only as a total.

**What is worth noting:** Preserving old, expired sets in a browsable history rather than removing them once their season ends keeps a completed collection meaningful to look at even after the reward attached to it has stopped paying anything.

**Key findings:**

- Three named collections track 71, 100, and 145 players respectively, split into named sub-groups.
- Sub-groups name their required members individually and pay their own separate reward.
- Completed sets from earlier seasons remain in a browsable history after their boost expires.
- The collection state feeds a separate badge level that boosts the lineup.
- How a set member is actually acquired isn't made clear from the collection screen itself.

**Screenshots needed:** a collection screen showing member count against the full set; a named sub-group showing its required members.

### Companion

**Implementation summary:** FC Mobile develops one player by consuming other held players as training material, turning the whole squad into one interconnected resource.

**What was observed:** Player items in FC Mobile are held separately from the account, persist between matches, and are acquired through the starting-squad grant, packs, drafts, exchanges and the transfer market. A limited number of active positions, eleven starters plus substitutes and a purchasable extra lineup, determines which held players actually take part, and each one carries its own overall rating, training level, rank-up level, allocatable skill points, traits and skill-move level.

**How it is presented:** A player's detail screen holds its own summary, attributes, traits and transfer tabs, with training and rank-up spending other players and a purchased material to raise those numbers.

**What is worth noting:** Developing one player consumes other players as material, which turns the whole squad into one interconnected resource rather than a set of separately owned items: acquiring a low-value player is also acquiring training material for a different one.

**Key findings:**

- Player items persist between matches and are acquired through six distinct routes.
- A limited number of active positions determines which held players actually play.
- Each player carries its own overall rating, training level, rank-up level, skill points, traits and skill-move level.
- Training a player consumes other held players as material.
- Ranking up a player consumes a separately purchased material and pays out allocatable skill points.

**Screenshots needed:** the squad screen showing starting positions and substitutes; a player's detail screen showing its own progression states.

### Loot Box

**Implementation summary:** FC Mobile publishes exact per-item odds on some store packs while publishing none at all for others in the same product.

**What was observed:** FC Mobile's drafts consume a voucher and resolve to one of a stated player pool, publishing pity rules directly, such as a guaranteed pool-B-or-higher result within eleven draws. Store packs commit money or currency before their contents resolve, and several of them publish per-item odds; one event pack states a 1.55 percent chance at its top result, while a separate box built from crafted tickets publishes no odds for its contents at all.

**How it is presented:** A pack or draft states its price and its guarantee, sometimes alongside a full probability breakdown, before the user commits, and resolves through a tap-to-open animation regardless of how the contents were paid for.

**What is worth noting:** Publishing exact odds on some packs while publishing none at all on others, inside the same product, means a player comparing two offers has real information for one and none for the other, with no way to tell that difference until they've already looked.

**Key findings:**

- Drafts consume a voucher and resolve against a stated, pity-guaranteed pool.
- Several store packs publish exact per-item probabilities before purchase.
- At least one box, built from crafted tickets, publishes no probabilities for its contents at all.
- A drafted pool can produce repeat players the user already holds.
- Whether pity counters are shared across draft types or tracked per type isn't stated.

**Screenshots needed:** a draft screen showing its stated pity guarantee; a pack's probability breakdown panel.

### Variable Reward Outcome

**Implementation summary:** FC Mobile's free daily pack discloses its own variable-reward shape directly, guaranteeing a floor with no value committed to open it.

**What was observed:** FC Mobile's free daily resource pack costs nothing and states its own variability directly: a guaranteed 10,000 coins, plus a list of further possible rewards, a player item, a voucher, points, gems, none of which are guaranteed. No value of any kind is committed to open it.

**How it is presented:** The pack's guarantee and its list of possible extras are both stated on the claim screen before it's opened, then delivered through the same tap-to-reveal animation the game uses for every reward regardless of size.

**What is worth noting:** Keeping this free pack outside the game's more specific paid-loot-box entries is the right distinction to draw, since nothing is surrendered to open it: the same undisclosed-contents shape that would need real odds and guarantees on a paid pack is here just a wrapper on something already free.

**Key findings:**

- The free daily resource pack guarantees 10,000 coins with several further possible, unguaranteed rewards.
- No product-defined value is committed to acquire or open it.
- One claim resolved to 50 gems and 10,000 coins.
- The weights behind the possible-reward pool aren't published.
- Whether the pool changes from day to day isn't stated.

**Screenshots needed:** the free daily resource pack's claim screen listing its guaranteed and possible rewards.

### Soft Currency

**Implementation summary:** FC Mobile keeps several campaign tokens invisible until an offer priced in them is actually opened, appearing nowhere else beforehand.

**What was observed:** FC Mobile runs several balances earned through ordinary play and spent on product-defined results. Coins come from matches, packs, daily rewards and player sales, and are spent in the market and exchanges. Gems come from rewards, packs, advertisements and trivia, and price task refreshes, an extra lineup slot, skill moves, league creation and drafts. League tokens, UEFA Dream Chasers tokens and universal tokens each run the same earn-and-spend shape on their own separate scope.

**How it is presented:** Each balance appears in its own dedicated exchange or store tab, priced against specific named purchases, with several of the campaign-specific tokens only appearing in the interface once an offer priced in them is actually opened.

**What is worth noting:** A token only becomes visible once an offer priced in it is opened, a real gap: a player can hold, or be offered, a balance that never actually appears anywhere on their own screen until that exact moment.

**Key findings:**

- Coins are earned from matches, packs, daily rewards and player sales, spent in the market and exchanges.
- Gems are earned from rewards, packs, ads and trivia, spent on refreshes, lineup slots, skill moves and drafts.
- League tokens, UEFA Dream Chasers tokens and universal tokens each run their own separate earn-and-spend loop.
- A universal token converts into every other campaign token.
- Some currencies appear in the interface only once an offer priced in them is opened.

**Screenshots needed:** the top-bar balance display; a currency's dedicated exchange tab.

### Hard Currency

**Implementation summary:** FC Mobile sells an entire store tab in a currency, silver, with no purchase route ever shown anywhere in the interface.

**What was observed:** FC Mobile sells FC points directly for money across seven price points in two separate tabs, and sells a second currency, silver, stated to come from a third-party payment store the product never actually shows. Both purchased balances are stored and later spent on packs, vouchers, rank-up points, coin packs, an extra lineup slot and gems.

**How it is presented:** FC points appear in their own store tab priced against real money at fixed tiers, while silver's own tab mirrors the same offers priced in silver instead, with no purchase route into silver visible anywhere in the interface.

**What is worth noting:** Selling a whole tab of offers in a currency the product itself never shows a way to buy isn't a hidden feature so much as a currency whose only observable behavior is what it costs to spend, with its acquisition route resting entirely on the product's own unverified statement.

**Key findings:**

- FC points are sold for money across seven price points in two separate tabs.
- Silver mirrors the same offers, priced in silver, with no purchase route appearing anywhere.
- Both currencies are spent on packs, vouchers, rank-up points, coin packs, an extra lineup and gems.
- Gems and coins also carry their own separate paid-purchase routes.
- Every currency displayed in the top bar opens the store section that sells it.

**Screenshots needed:** the FC points purchase tab; the silver tab mirroring the same offers.

### Rewarded Advertisement

**Implementation summary:** FC Mobile pays the same currencies for watching an ad as for ordinary play, embedded inside a league quest other members depend on.

**What was observed:** Watching an advertisement is one of FC Mobile's four daily tasks, paying gems, Star Pass credit and event pieces on completion. A separate gems pack pays for watching an ad up to three times a day. A league quest specifically requires members to watch advertisements as a collective task, and the guess-the-player game offers an extra hint for watching one.

**How it is presented:** Each of these sits inside the product's ordinary task and quest lists rather than as a separate advertising surface, stated alongside its exact reward before the user watches.

**What is worth noting:** The ad sits inside the daily task list, inside a league quest other members depend on, and pays the same currencies as ordinary play.

**Key findings:**

- Watching an ad is one of four daily tasks, paying gems, Star Pass credit and event pieces.
- A separate gems pack pays for watching an ad up to three times a day.
- A league quest requires members to watch advertisements as a collective task.
- The guess-the-player game offers an extra hint for watching an ad.

**Screenshots needed:** the daily task list showing the watch-an-ad entry and its reward.

### Daily Login Rewards

**Implementation summary:** FC Mobile runs two separate login calendars on two separate schedules, so checking one gives no way to know the other is waiting.

**What was observed:** FC Mobile runs two separate login calendars in parallel. One grants a reward for each day the app is opened, showing extra rewards at set positions and greying out past days once they're gone. A second panel counts down to its own refresh and lists a further ten days of rewards on its own schedule.

**How it is presented:** Both calendars show the current day's reward and the days ahead, with the first delivering its reward through the game's usual pack-opening animation on some days and a plain tap on others.

**What is worth noting:** Running two separate login calendars with two separate schedules, rather than one, means a player checking one has no way to know from that screen alone whether the other one is also waiting, which is a real cost of splitting one kind of reward across two surfaces.

**Key findings:**

- One login calendar grants a reward per day opened, with bonus rewards at set positions.
- A second, separate login panel counts down to its own refresh across a ten-day set.
- Past days on the first calendar grey out and can't be reopened or inspected.
- What a missed day does to either sequence isn't stated.
- The first calendar's reward sometimes delivers with the pack animation and sometimes without it.

**Screenshots needed:** the daily login calendar showing claimed, current and upcoming days; the second login panel's countdown.

### Daily Claim Pack

**Implementation summary:** FC Mobile's tournament-tied calendar claims its reward unlocks regardless of login, an unfalsifiable claim since no day was actually missed.

**What was observed:** Two purchased cards each grant an immediate reward and then a further daily reward for the following thirty days: one paying 200 FC points immediately and 1,000 gems a day, the other 500 FC points immediately and 1,500 gems plus 30 rank-up points a day. A separate ten-dollar purchase opens a similar thirty-day reward calendar tied to the real date of an upcoming tournament final.

**How it is presented:** Each is sold as a single purchase in the store, stating its immediate grant and its daily amount together, with the tournament-tied version framed around the calendar's remaining days rather than around the purchase itself.

**What is worth noting:** The product's own stated framing for the tournament-tied calendar is that every day's reward unlocks whether or not the user logs in — that's the product's claim; no missed day occurs to test it.

**Key findings:**

- Two monthly cards each grant an immediate reward plus a further amount daily for thirty days.
- A separate ten-dollar purchase opens a thirty-day calendar tied to a real tournament final's date.
- One activation governs the whole period in each case; nothing else needs to be bought again.
- The tournament-tied calendar states its rewards unlock regardless of login.

**Screenshots needed:** the monthly card purchase screen stating its immediate and daily rewards; the tournament-tied reward calendar.

### Purchase Ladder

**Implementation summary:** FC Mobile names a fully-paid, no-continuity ten-pack purchase sequence a "streak," though nothing about it resets or depends on consecutive days.

**What was observed:** FC Mobile runs three separate locked purchase sequences. Ten monthly streak packs from $0.39 to $29.99 must be bought strictly in order, with the product stating the rule outright. Four bestseller packs must be bought in ascending order, $0.99 through $9.99, before a free fifth position opens, so the free reward costs more than fifteen dollars to reach. A third sequence unlocks a free selectable gift only after five shard packs are bought, and a further free gift after ten bundles.

**How it is presented:** Each sequence shows its full set of positions up front, stating plainly that a given position can only be bought once the one before it has been.

**What is worth noting:** Naming a fully-paid, no-continuity sequence a "streak" is a naming choice, not a mechanic: nothing about the sequence resets, protects, or depends on consecutive days in any way, and the product's own copy states the rule as pure purchase order rather than habit.

**Key findings:**

- Ten monthly streak packs must be bought strictly in order, from $0.39 to $29.99, with no continuity condition attached.
- Four bestseller packs must be bought in ascending order before a free fifth position opens, costing over $15 to reach.
- A shard-pack sequence unlocks free selectable gifts after five purchases, and again after ten.
- Every locked position is visible from the start, with its condition stated in place.

**Screenshots needed:** the monthly streak pack ladder showing its ten locked positions; the bestseller pack sequence ending in its free gift.

### First-Purchase Bonus

**Implementation summary:** FC Mobile's first-purchase bonus tab doubles the ordinary rate flatly, so the largest package gains no extra benefit over the smallest.

**What was observed:** A gold, animated sidebar entry offers a choice of four top-rated players specifically for a user's first currency purchase. Separately, a whole store tab prices FC points at exactly double the ordinary rate and labels the packages "first purchase bonus" directly, so the same 0.99 that buys 100 points elsewhere buys 200 there.

**How it is presented:** The sidebar entry is visually distinguished from its neighbors by color and animation, while the doubled-rate tab sits alongside the ordinary FC points tab with the same package sizes and prices, differing only in what they deliver.

**What is worth noting:** The doubled tab isn't a discount so much as a bonus stacked on top of the normal package, since the flat doubling rate means the largest package gets no extra benefit over the smallest one, unlike the ordinary tab where the rate improves at larger sizes.

**Key findings:**

- A gold, animated sidebar entry offers a choice of four top-rated players for a first currency purchase.
- A separate tab prices FC points at exactly double the ordinary rate, labelled "first purchase bonus."
- The doubled rate is flat across package sizes, unlike the ordinary tab's size-scaled rate.
- Whether the doubled rate applies once per package or once per account isn't stated.
- Both offers exist specifically to convert a first purchase rather than to price an ordinary one.

**Screenshots needed:** the gold first-top-up sidebar entry; the doubled-rate FC points tab beside the ordinary one.

### Cosmetic Customization

**Implementation summary:** FC Mobile states directly, in its own comparison, that a specific kit carries no stat bonus of any kind.

**What was observed:** FC Mobile's locker room offers alternative presentations with no stated mechanical effect: kits, balls, emotes, kit numbers, per-player appearance details, a user logo, a profile banner and a profile theme. Stadiums and weather options work the same way but are acquired rather than freely chosen, unlocked by progressing the Star Pass or earned from named events.

**How it is presented:** The product states the boundary of these options itself, that a kit choice affects appearance only, and the profile theme is stated to appear specifically during matchmaking.

**What is worth noting:** The product's own comparison is the clearest evidence here: a player notes that wearing a specific kit gets no stat bonus of any kind, which is exactly the test that separates decoration from anything that changes what the team can do, and every option here stays on the decoration side of that line.

**Key findings:**

- Kits, balls, emotes, kit numbers and per-player appearance details carry no stated mechanical effect.
- A user logo, profile banner and profile theme are also purely presentational.
- Stadiums and weather options are acquired through the Star Pass or named events rather than freely chosen.
- The product states directly that a kit choice changes presentation only, not player attributes.
- The profile theme is stated to appear specifically during matchmaking.

**Screenshots needed:** the locker room's kit and appearance customization screen; a locked stadium showing its Star-Pass unlock condition.

### Clan / Guild

**Implementation summary:** FC Mobile's league quests are satisfied by combined member activity, so one inactive roster stalls the whole structure with no individual fix.

**What was observed:** Leagues in FC Mobile are persistent groups of up to 100 members holding their own name, badge, motto, season level, point total, hundred-position reward track, token currency, store and two separate leaderboard positions. Members' combined activity is what advances all of that collective state; league quests are completed together and their rewards are then claimable by every member.

**How it is presented:** The league's own screen carries separate tabs for chat, matches, info, members, quests, rewards, tournament and leaderboards, each showing state that belongs to the group rather than to any one member.

**What is worth noting:** Because league quests are satisfied by combined member activity rather than individual completion, an inactive roster stalls the whole structure at once, which the record shows directly: a league with members not playing friendly matches, not organizing, and not watching ads simply doesn't advance, with no individual able to fix that alone.

**Key findings:**

- Leagues hold up to 100 members and their own name, badge, motto, season level, points and token currency.
- League quests are completed by members' combined activity, with rewards claimable by everyone once met.
- The league holds a hundred-position reward track advanced by season points.
- Leagues enter tournaments as a unit, with an organizer selecting which members represent them.
- An inactive roster stalls every one of these collective systems at once.

**Screenshots needed:** the league home screen showing its tabs and collective stats; the league quest list showing a combined-activity requirement.

### Leaderboard

**Implementation summary:** FC Mobile ranks leagues against each other twice over, on a promotion-and-relegation group board and a separate global leaderboard at once.

**What was observed:** FC Mobile orders leagues against each other twice over, on a group leaderboard of twenty leagues with promotion and relegation, and on a worldwide ranked leaderboard showing the top leagues globally. A separate weekly leaderboard orders head-to-head players by match wins once enough competitors exist, closing on a countdown and paying by final position.

**How it is presented:** Each leaderboard shows a full ordered list rather than only the user's own position, with the group and worldwide league boards each showing rank, score and, when opened, a league's own member list.

**What is worth noting:** Running a group leaderboard with promotion and relegation alongside a separate global leaderboard means a league's standing has two different, independently meaningful numbers behind it at once.

**Key findings:**

- A group leaderboard orders twenty leagues with promotion and relegation between groups.
- A separate worldwide leaderboard ranks the top leagues globally.
- A weekly head-to-head leaderboard opens once enough competitors exist and closes on a countdown.
- The head-to-head board pays rewards by final position, with named tiers for the top ranks.
- Opening a league from any leaderboard shows its member list and their individual overalls.

**Screenshots needed:** the group leaderboard showing league standings; the weekly head-to-head leaderboard countdown.

### Comparative Rank

**Implementation summary:** FC Mobile explicitly states a pre-ranked "not ranked yet" status before a first match, rather than just hiding the ranking screen.

**What was observed:** FC Mobile states specific standings that depend on other entities' results. The user's own league sits at roughly 600,000th globally, with its point total shown directly against the leading league's. Inside the league, a season summary states each member's own contribution ranking. Before a first head-to-head match, the state reads plainly that the user isn't ranked yet.

**How it is presented:** Each of these states the position as a fact on its own screen, alongside the value it's measured against, rather than requiring the user to compare it themselves against a full list.

**What is worth noting:** Showing the pre-ranked state explicitly, rather than just hiding the ranking screen until a first match is played, is a distinct choice: the product tells the user directly that they don't have a position yet rather than leaving that absence to be inferred.

**Key findings:**

- The user's league is placed at roughly 600,000th globally, shown against the leading league's point total.
- Members are individually ranked by contribution inside their own league.
- The head-to-head state explicitly reads as unranked before a first match is played.
- These positions move when other entities' own results change, not from the user's activity alone.
- The rule behind the contribution ranking's ordering isn't stated.

**Screenshots needed:** the league's global standing shown against the leading league; a member's contribution ranking inside the league.

### Shareable Win

**Implementation summary:** FC Mobile's shareable league card leaves the product entirely, while a separate control posts match results to stay inside it.

**What was observed:** FC Mobile composes a league's own record, its founding date, total overall, activity, goals, quests, tournament wins and standing, into a single card and hands it to the device's own sending options, letting the user choose which app to send it through. No destination inside the product is offered for it.

**How it is presented:** The card is built from the league's badge screen through its own dedicated share control, distinct from the separate control that posts a finished match's result into the league itself.

**What is worth noting:** The two share routes on this same screen point in opposite directions: posting a match result stays inside the product for other league members to see, while this card is built specifically to leave the product for people who aren't in the league at all.

**Key findings:**

- The league badge screen composes founding date, overall, activity, goals, quests, tournament wins and standing into one card.
- The card is handed to the device's own sending options, with no destination named inside the product.
- This is separate from the control that posts a finished match's result into the league itself.
- Whether the card can be edited before sending isn't stated.
- No equivalent shareable card exists for an individual account.

**Screenshots needed:** the league badge screen's share control; the composed league-record card.

---

## Onboarding and first run

This section covers a guided restart for a returning account, with a scripted tutorial, sign-in, squad build and a first match won before the player has made a real choice.

### O1. Age declaration comes first

After an update download, the first screen asks for the user's birth month and year before any play, tying that entry to acceptance of the user agreement.


### O2. The tracking prompt hides its accept button

The system tracking prompt splits its text and its two buttons into separately scrolling areas, so only the declining option is visible without deliberately swiping up to find the other one.

- The default visible option is the declining one.

### O3. A long load before the first interactive screen

The loading screen runs well past a minute before the sign-in screen appears, filled with branding and a "getting warmed up" message.

- Gameplay resources download again at the start of the tutorial and again before the first match.

### O4. Sign-in is required, with an unsaved guest option

A sign-in screen offering five routes, including a guest option, can't be dismissed.

- Choosing guest still returns a "welcome back" message recognizing prior play.
- Closing the EA account sheet returns the user to a "tap to play" screen and then to the same sign-in screen.

### O5. One live control at a time

A mascot guide greets the user and greys out every control except the single one it's pointing at.

- The same one-live-control pattern repeats at every step of the opening sequence.

### O6. An experience question routes to one of two tutorials

The app asks whether the user has played before, offering a full controls tutorial or a route straight into play.

- The chosen path determines which sequence runs; the other path was not taken.

### O7. A tutorial framed as a rewarded objective with a five-year expiry

The controls tutorial is presented as an objective with a completion count, a guaranteed reward of 200 gems, and a stated expiry of 1,631 days.

- An attempts counter separately shows 1 out of 99.

### O8. Eight guided steps, one repeated success line

The tutorial runs eight control steps, dribble and shoot, dribble around obstacles, aim and shoot, sprint, defend, pass, through pass, and pass and shoot, each ending in the identical success message.

- Several steps end before the user finishes the move being taught.
- The result screen shows a full point score and a kickoff pack reward.

### O9. Home team selection sets the starting squad

The user picks a favorite club from 18 recommended options, or 47 leagues and competitions in full, and receives that club's players as the starting lineup.

- Confirmation reads that the home team was updated successfully.

### O10. A username with a privacy warning

The guide asks for a display name and warns directly against including a real name or other personal information, since it will be visible to other players.

### O11. The first pack claim, unexplained

Every control but "claim a pack" is greyed out on the home screen, and the user is pointed at it with no explanation of what a pack is.

- The pack delivers a named player with a stated value, then a "reveal all" control showing further squad members.

### O12. Guided squad building ends at an auto-build shortcut

The guide has the user move one reserve into the starting eleven, then points at an auto-build control that fills the rest of the lineup automatically.

- The team's overall rises from 63 to 81 in one tap, with squad value rising to roughly 280 million.

### O13. The first match starts mid-game, already winning

The warm-up match begins in the 65th minute with the score already 1-0 in the user's favor.

- The match ends 3-0, followed by a trophy celebration, a statistics screen and an offer of match highlights.
- The badge shown for the user's side names a generic club rather than the one the user selected.

### O14. A chosen player delivered through a pack anyway

After the match, the guide offers a choice of three star players, then delivers the chosen one through the same multi-tap pack-opening animation used for every other reward.

- The user notes the result was not a surprise, since they had already chosen it.

### O15. Every reward opens as a pack, then repeats on screen

Rewards of any size, including ones the user already knows the contents of, are delivered through a tap-to-open pack animation and then displayed again on the following screen.

- This applies to tutorial packs, level-up packs, daily login packs, mission rewards and event rewards.
- Where several packs are owed, they must be opened one at a time.
- Collecting from the inbox is the one route that skips the animation.

### O16. The claim control is disabled while the guide points at it

The guide instructs the user to tap claim while the control itself is greyed out, and it activates only once the guide leaves the screen.

- The first kickoff mission is logging in, rewarded with an item pack.

### O17. Currency definitions appear only when tapped

Tapping a reward icon reveals a single explanatory line for it; no other explanation is offered anywhere.

- The term the definitions themselves depend on, the Season Update, is never defined at all.

### O18. The guided sequence ends without a next step

The guide presents a choice between continuing the kickoff missions or jumping straight into play, then leaves the user on the kickoff screen with no further direction.

- The user's next tap opened Head to Head, which then ran its own separate guided sequence.

### O19. An account-link prompt opens on return

On returning, the first screen asks the user to link their account to an external service, stating that a reward is granted only for linking for the first time.

- A separate link-account quest lists specific reward amounts for linking a personal account versus an EA account.

### O20. Notification permission requested after several guided screens

A product-styled prompt names the reasons to allow notifications, events, rewards, offers and streaming, immediately before the system permission request itself.

### O21. A settings marker that clears only by opening each item

The settings control shows a marker from first run.

- The marker clears only once every individual settings item has been opened, not by changing anything.

### O22. A backlog of notifications on return

On re-entry, dozens of task-complete notifications fire in sequence for the previous day's activity, several repeating.

- One notification names an event the user had never seen anywhere in the app.

### O23. A locker room tour that permits no selection

The guide walks the user through customization and stadium options, then routes back out without letting a single selection be made.

- Most of the options shown offer only a default choice.
- Stadium and weather options other than the current one are locked.

### O24. A guided tour attached to every new feature

The same mascot-and-overlay sequence reappears each time a feature unlocks, blocking every other control until it's followed.

- Seen across ten separate features, including team badges, leagues, the transfer market, player training and manager mode.
- In several cases the guide points at a control the user has already opened on their own.
- Several tours end by closing the screen without the demonstrated action being completed.

---

## Core loop and automation

This section covers football matches across a dozen named modes, automatic play when the stick is released, and the training, ranking and skill systems built on top of the squad.

### O25. Matches across a dozen named modes

The repeating activity is playing football matches, offered across a large number of named modes reached from one screen, including Kickoff, Head to Head, VS Attack, Division Rivals, Manager Mode, Chapters, Live Events, Skill Games, Icon Chronicles and Club Challenge.

- Play uses a virtual stick alongside shoot, sprint, tackle, pass and through-pass buttons, with five camera options.
- Substitutions and tactical changes are available during play.
- Match sound is lost whenever the app is minimised and returns only after a full restart.

### O26. Control passes to the system automatically

Whenever the user stops holding the movement stick, control passes to automatic play, though the action buttons remain available throughout.

- Matches can't be sped up or skipped.
- One full match was completed on automatic while away from the device.

### O27. Manager mode plays matches on its own

Manager mode replaces direct play with tactical configuration: build-up speed, passing distance, mentality, positioning and several further sliders, starting from a preset or saved as a custom tactic.

- An automation control accepts stop conditions, a reward threshold or a division reached, then searches for and plays out a match on its own.
- Tactics can still be edited mid-match.
- A manager mode match can't be shared to the league, unlike a head-to-head one.

### O28. Head to head matches against a real opponent

Head to head pairs the user with another identified player for a live 90-minute match.

- The opponent's attack, midfield and defense are shown relative to the user's own before kickoff, though not their overall rating.
- A drawn opponent can't be declined.
- After the match: add friend, share with league, report, and goal replays.

### O29. Skill games scored against three thresholds

Skill games set a point target with three thresholds deciding a one-, two- or three-star result, across drills like dribbling through targets, passing and shooting, and a free kick against a wall.

- Each drill carries a timer and a stated number of attempts.
- Results pay a pack token, XP, formations and account-level progress.
- A replay isn't offered immediately at the result screen.

### O30. An attempt counter with unstated rules

Drills display a limited number of attempts alongside their timer.

- Whether an attempt is consumed by starting a drill, by failing it, or by both, isn't stated.
- No restoration or refill rule for attempts appears anywhere.

### O31. Training consumes other players

Player training raises a player's attributes by consuming other held players as training material, with an auto-select control filling in the required materials automatically.

- Training runs on a level from 0 to 30, after which the product states the player should be ranked up instead.

### O32. Ranking up spends points, pays skill points

Ranking up a player consumes rank-up points and raises the player's overall, paying out skill points the user can freely allocate to that player's attributes.

- Rank-up points are sold in several store forms and paid daily by one of the monthly cards.

### O33. Formations, lineups and positional fit

The squad is arranged into a formation with substitutes and reserves, and more than one lineup can be held at once, with a further lineup purchasable for gems or FC points.

- New formations are granted at certain level-ups, with one formation requiring level 20.
- A higher-rated player can lower the team's overall if placed in the wrong position.

### O34. Team skill moves on four swipe directions

Up to four team skill moves are assigned to the four directions of one swipe control, with each move's own level representing its difficulty rather than its strength.

- A practice match lets the user try a setup before committing to it in a real match.

### O35. Team badges boosted by collected players

Collecting players activates a team badge whose level provides stated boosts equipped to the lineup; the more players collected, the higher the badge level and the stronger the boost.

- Untradable players activate automatically, while tradable ones must be activated by hand.
- A history tab preserves earlier seasons' badges even after their boost has expired, with their players still individually activatable.

### O36. Duels on real-world fixtures

Duels ask the user to pick the winner of an upcoming real match, then let the user play that fixture in-game before it happens in real life, paying a stated token amount for a win.


### O37. Icon Chronicles: a career told in ordered chapters

A real player's career is divided into chapters that must be completed in order, each carrying reading material and playable tasks with their own completion counts and guaranteed rewards.

- A separate milestone reward pays for completing every entry in one chapter's set of stories.

### O38. Trivia and guessing activities paying into the economy

A trivia mini-game and a guess-the-player activity both sit outside match play but pay into the same currencies matches do.

- Guess-the-player offers a hint for watching an advertisement, and a correct guess pays training transfer points.
- The "streak bonus" named in the trivia rules wasn't seen operating anywhere.

### O39. Star Scout: paying for clues before the player

A mystery player item can be progressively revealed through individually priced clues, then bought outright at a much higher price once fully revealed.

- One free reveal showed an overall rating and stated the item could be one of 154 possible players.

### O40. Replaying and sharing a finished match

A finished match can be watched back in full, with camera and commentary controls, and shared into the user's league for other members to watch.

- One of the user's personal quests specifically requires watching a replay and sharing it.

### O41. Four daily tasks, each refreshable for a price

A daily task list carries four tasks with their own completion counters and rewards, and any task can be swapped for a new one at a price of 10 gems.

- Completing every task on a given day pays a further bonus reward beyond the individual ones.
- Each subsequent day unlocks on its own timer.

### O42. A seven-day mission program with a parallel set

A seven-day kickoff mission program issues a separate task set for each day, with unlock timers running from eight hours out to five days for the later ones.

- A parallel five-day event mission set tracks several of the same underlying actions independently.
- Its completion record doesn't always agree with the kickoff set's own record of the same action.

### O43. Rewards claimable ahead of schedule

Rewards belonging to mission days that haven't arrived yet could be claimed early, without waiting for those days to actually pass.


---

## Goals and progression

This section covers the account level, the head-to-head division ladder, the Star Pass, league season points, and the collections and drafts that feed the squad.

### O44. An account level advanced by XP

XP from matches, missions, drafts and skill games advances an account level that releases content.

- Levels 2 through 14 were reached over time.
- Two levels were crossed in immediate succession at least once.

### O45. Named unlocks attached to named levels

Specific features are released and announced at stated levels.

- New formations at 2, 3 and 4; leagues and the football center at 4; challenge mode at 5.
- Scouting camp at 6; a lineup slot at 8; the market at 9; club challenge at 10.
- One formation requires level 20.

### O46. Head-to-head divisions rise and fall on stars

An ordered division ladder runs Amateur 3 through Semi Pro, Pro and World Class.

- A win earns a star, a loss removes one, and draws cause no change.
- Promotion or demotion happens automatically at the required star count.

### O47. Star Pass: a seasonal track with a free and paid lane

Around 60 ordered reward positions are advanced by Star Pass credits earned in Division Rivals and live events.

- A second, larger reward lane is available through a separate purchase.
- Credits reset when a new season starts.
- The first position is a player item that can't be claimed without the paid pass.

### O48. A second pass runs inside a themed event

The Songkran Splash event carries its own nine-day reward pass alongside the Star Pass.

- Free rewards are collected simply for entering the event.
- A featured player on the track requires the event pass's own purchase.

### O49. UEFA Dream Chasers: a large event with its own token and chapters

A multi-chapter event runs its own token, progress measure, theme challenges and draw alongside the main progression.

- Structured as a main hub leading into two chapters that reopen from the same hub.
- Dream Boxes unlock after completing all theme challenges and refreshing a stated number of times.

### O50. Three badge collections track named players

Three separate collections track which of a defined set of players the user holds: 71 players across 2 groups, 100 across 4 groups, and 145 across 3 groups.

- Named sub-groups pay their own rewards for specific required members.
- The route to acquiring set members wasn't made clear to the user.

### O51. Seven separate quest families, each with its own expiry

A quests screen holds seven families of objectives: UEFA Dream Chasers quests, UEFA Dream Chasers challenge quests, an Easter Egg Hunt, league quests, a link-account quest, club challenge, and achievement quests.

- Expiries differ by family, from 16 days down to 15 hours.
- League quests displayed no rewards on the quests screen itself.

### O52. A milestone program announced only in the news

A news entry announces a new milestone program, inviting the user to start a "milestone journey."

- No route into the program itself was found anywhere in the app.

### O53. Correct guesses build toward a milestone reward

The guess-the-player activity carries its own milestone track, paying named rewards for a stated count of correct guesses out of a full set of eight.

### O54. Leagues hold a season level from combined activity

A league carries its own season level, point total and reward track, advanced by members completing league quests together.

- A season is stated to end after a set number of days, without stating what happens at the boundary.

### O55. Team overall as the headline number and a league condition

One team overall figure summarizes squad strength and is used as a stated entry requirement for joining or creating a league.

- Values ranged from 63 at first build up to 103 by the third visit shown.
- League listings display each league's average overall, with the leading league at 128.

### O56. Each player item holds its own progression

A player item carries its own overall rating, training level, rank-up level, allocatable skill points, traits and skill-move level.

- Player positions and traits can't be changed after acquisition.

### O57. Drafts draw from tiered pools with stated guarantees

Drafts draw a player from ordered pools and state after how many draws a given pool is guaranteed.

- Seven separate draft types appear, each requiring their own voucher.
- Draws produced repeat players the user already held.

### O58. Level-ups grant packs and formations

Each account level grants a pack, and frequently a new formation.

- The user reports an accumulation of level-up packs arriving in quick succession.

---

## Access and eligibility

This section covers the account-level and match-count gates standing in front of named features, and the conditions on joining a league.

### O59. Age declaration as an entry condition

Birth month and year must be entered, tied to the user agreement, before any play is possible.

### O60. An account state is required, guest included

One of five sign-in routes must be chosen before play.

- Guest is permitted but its progress is described as unsaved.
- The account-link prompt reappears on the next visit with a reward attached.

### O61. Feature locks stated by level, matches played and pass progress

Several parts of the product are withheld behind stated, observable requirements.

- The market at level 9; VS Attack after one Head to Head match; Manager Mode after two Division Rivals matches.
- One formation at level 20; certain stadiums behind Star Pass progress.

### O62. League eligibility rests on overall and existing membership

Joining a league requires meeting its stated overall requirement and holding no other league membership.

- The invite list doesn't show whether a listed player is already in a league, so ineligible invitations fail silently.
- Invites are capped, and a viewed league can disappear before it's joined as listings refresh.

### O63. Event content released on a schedule, not by activity

Parts of events are withheld until named weeks or timers elapse regardless of what the user does.

- Chapter entries are stated to unlock at week three and week four.
- What week three and week four actually count from isn't stated.

### O64. Most acquired players are untradable

Players obtained from packs, the starting squad and events are marked untradable and can't be sold.

- The badge system treats the two differently: untradable players activate automatically, tradable ones must be activated by hand.

---

## Economy and resources

This section covers more than a dozen named currencies, most earned in play and spent across the market, exchanges and store.

### O65. Four balances on the home screen, more inside

The top bar carries four currencies at first run, while many further named currencies surface only once a screen using them is actually opened.

- Currencies encountered include FC points, gems, FC coins, league tokens, UEFA Dream Chasers tokens, extra time tokens, universal tokens, Star Pass credits, rank-up points and several voucher types.

### O66. FC coins earned in play, spent in the market

Coins come from matches, packs, daily rewards and player sales, and are spent in the transfer market and exchanges.

- Prices for top players in the market run into the billions.

### O67. Gems earned in play, spent across most areas

Gems come from rewards, packs, advertisements and trivia.

- Gems price task refreshes, an extra lineup slot, skill moves, league creation and drafts.

### O68. A universal token converts into other campaign tokens

One token is defined specifically to convert into every other campaign token.

- Earned from skill games and matches in Icon Chronicles and Division Rivals.
- Appears in the top bar only once an offer priced in it is opened.

### O69. The UEFA Dream Chasers token, earned and spent inside its event

An event-specific token is earned from chapters and Division Rivals and spent exchanging for rewards inside the same event.

- Held quantity is capped at 999.

### O70. League tokens earned collectively, spent in a league store

A league currency accrues from league tournaments, quests and season rewards.

- Spent on packs and named players inside a league-specific store.

### O71. Silver: a currency with an unlocatable source

A store tab is priced entirely in a currency the app states comes from a third-party payment store.

- The user could never actually find or purchase from that source.

### O72. Two exchanges convert surplus players

An item exchange converts surplus players into currencies.

- A separate player exchange converts specified players into other named players, across nine themed tabs.

### O73. Egg pieces crafted into tickets that open a box

Three colors of egg piece are crafted into a ticket, and six tickets open one reward from a box.

- No probabilities for the box's contents are published anywhere.

### O74. A transfer market prices players by order

A market lists players with prices and price history, accepting both purchase and sale orders.

- Only tradable players can be listed for sale.

### O75. A free daily pack with a guaranteed floor

One free pack per day guarantees a stated minimum and lists further, unguaranteed possible contents.

- Delivered through the same pack-opening animation as every other reward.

---

## Social

This section covers leagues, their quests, tournaments and leaderboards, plus friends, chat and in-match reporting.

### O76. Leagues hold their own persistent state

A league is a named group of up to 100 members carrying its own level, points, quests, tournament, store, leaderboard position and identity.


### O77. League quests are satisfied by combined activity

League quests are completed by members' combined activity rather than individually, with rewards then claimable by everyone once the quest is met.

- An inactive roster simply stalls the whole structure.

### O78. A hundred ordered league rewards

The league holds a reward track of up to a hundred positions, released as season points accumulate from members' combined activity.

- Rewards include players, currencies and draw tickets.

### O79. Leagues enter tournaments as a unit

A league can enter a tournament where members sign up and an organizer selects which teams represent the league, ranked by overall.

- No in-app route exists to invite members specifically to sign up.

### O80. Two league leaderboards, group and worldwide

Leagues are ordered against each other on a group leaderboard of twenty with promotion and relegation.

- A separate worldwide ranked leaderboard shows the top leagues globally.

### O81. Members ranked by contribution inside the league

A league season summary ranks each member by their own contribution.

- A season reward is tied to that individual rank.

### O82. A weekly head-to-head leaderboard

A weekly ranking of head-to-head players opens once enough competitors exist.

- Updates on match wins and pays by final position at the end of its countdown.

### O83. A friends list capped at 32

A friends list holds up to 32 people, filled chiefly by playing matches together.

- An opponent can be added directly after a head-to-head match.

### O84. A league chat and announcements area

The league home holds a chat where members can write messages and a separate announcements area.


### O85. Two sharing routes: a match into the league, a league card out

A finished match's result and replay can be posted into the league for members to watch.

- A separate control composes the league's own statistics as a card and hands it to the device's outside sending options.

### O86. In-match emotes, muting and reporting

Head-to-head opponents can be sent emotes or muted during a match and reported afterward for specific conduct categories.

- Leagues themselves can also be reported.

---

## Reach beyond the app

This section covers links out to a promotional website, an offerwall, another publisher's advertisement, an outside esports competition, and a video hub.

### O87. A claimed login reward replaced by a website link

Once a day's login reward is claimed, its place on the calendar is taken by a promotional panel that opens an external website.


### O88. News entries point to the website for offers

News items direct the user out to the website for further offers and information rather than describing them in the app itself.

### O89. A satisfaction survey inside the news list

A news entry opens a community survey asking how satisfied the user is with the product.

- It arrived before the user had played more than a single scripted match.

### O90. An offerwall pays gems for other companies' products

An "earn gems" route opens a web surface listing other companies' games and web tasks, each with its own stated payout.

- Tapping in takes the user outside the game entirely to complete them.

### O91. Another publisher's game advertised among daily activities

An advertisement for a different title sits inside the day-three activities list alongside claimable rewards.

- No established connection exists between watching it and claiming those rewards.

### O92. An esports competition run outside the game

A pop-up recruits players into an external competition with a stated cash prize, directing them to a website to register.

- The in-app material doesn't explain what participation actually involves.

### O93. A video hub with out-of-date guides

An Extra Time area carries video content, embedded livestreams and instructional guides.

- Some guides are labelled for an edition two versions behind the one installed.

---

## Monetization

This section covers the four-part store, its purchase ladders and monthly cards, and the probability disclosure that appears on some packs and not others.

### O94. A four-part store, each marked as changed

The store is organized into four priced areas: recommended, FC points and gems, exchanges, and silver.

- Each is divided into further tabs and marked with a count of new or changed entries.
- Store contents change between visits, with new vouchers, bundles and offers appearing over time.

### O95. A doubled-rate purchase tab

A separate 2x top up tab prices FC points at exactly double the rate of the ordinary tab, printing "first purchase bonus" on the packages.

- The doubled rate is flat across every package size, unlike the ordinary tab where the rate improves with size.
- Nothing states whether the doubled rate is available once per package or once overall.

### O96. A named-player reward for a first purchase

A gold, animated sidebar entry offers a choice of one of four top-rated players specifically for a user's first currency purchase.

- Visually distinguished from its neighboring tabs by color and animation.

### O97. Two monthly cards paying daily for thirty days

Two priced cards each grant an instant reward and then a further amount every day for thirty days.

- The $1.99 card pays 200 FC points instantly and 1,000 gems daily.
- The $4.99 card pays 500 FC points instantly and 1,500 gems plus 30 rank-up points daily.
- Both cards can be bought at the same time, and nothing states whether logging in is required to receive each day's amount.

### O98. A purchase unlocking a calendar tied to a real match date

A $10 pack purchase opens a daily reward calendar counting down to the real date of an upcoming tournament final.

- A further reward unlocks on each of the following days regardless of whether the user has logged in.
- The pack itself pays a player rated 114 to 119, with a published probability panel showing a 1.55% chance at the top result.

### O99. Ten packs that must be bought in order

Ten monthly streak packs are priced from $0.39 up to $29.99.

- The product states outright that each can only be bought once the one before it has been.
- Nothing about the sequence depends on consecutive days; no continuity condition is attached anywhere.

### O100. A free pack reached through four paid ones

Four bestseller packs are priced up to $9.99, each available only after the one before it, before a fifth, free pack becomes available.

- Reaching the free pack costs more than $15 in the packs beneath it.
- A separate starter pack, sold once for $0.39, contains a named player and ten base players.

### O101. Shard packs unlocking free selectable gifts

Shard packs are sold repeatedly, and a free selectable gift unlocks only after five of them have been bought.

- A further free ultimate gift unlocks after ten bundles.
- The same structure repeats for different national themes, each running its own countdown.

### O102. Probabilities published on some packs, not others

Several packs publish exact per-item probabilities before purchase, including a 100% guarantee and a 1.55% chance at the top result on one event pack.

- A separate box, opened with crafted tickets rather than bought directly, publishes no probabilities for its contents at all.

### O103. Countdowns, limits and unexplained value badges

Store entries carry expiry timers, purchase limits, discount labels and percentage value claims that name no base for comparison, such as "840% value" or "900% value."

- A "new" badge on one item overlaps part of its displayed quantity, making the number unreadable.

### O104. A tab pricing the same currency worse than its neighbors

A daily deals tab sells FC points at rates worse than both of the store's other FC point tabs.

- 150 points for $0.99, against 200 in the doubled tab and 100 in the ordinary one.
- All of its offers carry a 16-hour expiry to midnight.

### O105. A comparison pop-up on exit

A pop-up comparing three priced booster tiers and their combined bundle appears specifically when the user attempts to return to the home screen.

- All three offered together at a stated 40% discount over buying them separately.

### O106. Star Pass tickets sold outside the pass

The Star Pass's own purchase control routes the user out to the store, where premium tickets and ticket bundles are priced separately.

- States only that they unlock the season's premium rewards.
- No statement of how many track positions a bundled credit grant actually buys.

### O107. Draft vouchers sold apart from the drafts

Vouchers for each draft type are sold separately, singly and in bundled sets, priced in either of two currencies.

- Each voucher is usable only in its own themed draft.

### O108. Rank-up material sold in six forms

Rank-up points, the material spent to raise a player's overall, are sold across six separate offers at different prices, limits and quantities.

- Includes a daily pack with a stated 1% chance at its largest result.
- The daily pack and a similarly named point set are difficult to tell apart from the interface alone.

### O109. A starting-tier pack sold for gems

The exchanges area sells a pack of the starting player tier for gems, showing its pool of possible players before purchase.

### O110. Every balance opens its own store tab

Tapping any currency displayed in the top bar opens the store section that sells it.

- The one exception is the Easter egg ticket balance, which opens an explanatory pop-up instead of a purchase screen.

---

## Return triggers

This section covers two login calendars, countdowns on nearly every surface, and the notifications that announce them.

### O111. A rating prompt right after the scripted first win

The app-store rating prompt appears directly after the tutorial match, trophy and pack sequence.

- It arrives before the user has played anything of their own choosing.

### O112. A daily login calendar with bonus positions

A calendar grants one reward per day the app is opened.

- Extra rewards sit at set positions, and past days grey out once they're gone.
- A "next month" control shows the coming month's rewards.

### O113. A second login surface on its own schedule

A separate panel counts down to its own refresh and lists a further ten days of rewards.

- Runs independently of the first calendar.

### O114. Countdowns on almost every surface

Expiries and countdowns run on offers, tasks, events, divisions, seasons, collections and even tutorial objectives.

- Some are framed as expiring when they in fact simply refresh.

### O115. Notification markers on nearly every control

Red dots and "new" badges sit across the store, exchanges, quests, leagues, badges, activities, settings and inbox.

- In at least one case a badge obscures the very quantity it's marking.

### O116. Pop-ups stack on app open

Opening the app can produce a chain of event pop-ups that must each be dismissed before play.

- Tapping "claim a reward" sometimes advances to the next pop-up instead of claiming anything.

### O117. An egg of the day with an explicit return instruction

An event grants one item per day and states directly that the user should come back tomorrow.

- The next item is locked behind a set number of hours.

### O118. Store and event content refreshing on its own

Store sections, drafts, duels and event picks refresh independently of the user.

- The player exchange states the rule outright: check back regularly.

### O119. An inbox accumulating unclaimed rewards

Rewards accumulate in an inbox with a collect-all control.

- Collecting this way skips the usual pack-opening animation entirely.

### O120. Notification permission naming reasons to return

The notification prompt lists new events, rewards, discounted offers and livestreaming as what the user will be told about.

- A separate trivia completion screen offers its own notification specifically for the next quiz.

### O121. Resets announced without being explained

Several timers state that something resets, a season, a division, without ever stating what resets, when the cycle began, or what is lost when it does.
