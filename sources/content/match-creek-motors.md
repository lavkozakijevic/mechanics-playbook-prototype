# Match Creek Motors

**Teaser:** Match Creek Motors ends its first car with a blind negotiation: three buyers, one offer at a time, no way to see what's still coming.

Match Creek Motors rebuilds a broken car one priced task at a time, funded by wrenches earned from a match-three puzzle running alongside it. A returning cast, led by the player's best friend Aaron and the shop's accountant Brooke, narrates the first project step by step, and the finished car is sold through a sequential, blind negotiation with three buyers rather than a simple reveal. A second balance, gold coins, grows throughout the same play and is sold directly in the shop, with nothing shown that it buys.

---

## System view

This is a medium system. Wrenches are the currency every restoration task draws from, earned only by winning a match-three level, so the puzzle and the car are locked together for the length of the project. A second balance, gold coins, and a running heart count both grow or sit alongside that same loop without a shown rule tying them back into it, and the project closes with a negotiated sale rather than an automatic reward.

---

## Mechanics

### Cosmetic Customization

**Implementation summary:** Each restoration task offers three unlabeled style options for a part, applied on tap and revisable later in a dedicated garage view.

**What was observed:** Match Creek Motors opens most restoration tasks on a choice among three presentations of the same part, framed as showing off the player's own style. Some tasks are settings rather than physical parts, such as a suspension-height slider offering low rider, high rider or normal. A separate garage view lists every change made to the car and lets the player revisit and change an earlier choice.

**How it is presented:** Tapping an option applies it to the 3D car immediately, with a short bounce animation, before the choice is confirmed. No option carries a description, a stated effect or a price difference from the other two.

**What is worth noting:** Match Creek Motors frames every choice as a matter of look rather than function, and nothing in the app ties a specific choice to the offers the finished car later receives; whether a build's parts affect the sale isn't something this write-up can describe.

**Key findings:**

- Most restoration tasks offer three style options for a part, applied on tap.
- Some tasks are settings, such as ride height, rather than physical parts.
- A garage view lists every change made and lets the player revise an earlier choice.
- Match Creek Motors doesn't state a price or outcome difference between a task's three options.

**Screenshots needed:** a part task's three-option choice screen; the garage view listing installed changes.

### Challenge

**Implementation summary:** Each match-three level states a piece-collection target that grows more complex over successive levels, and every level played ends in a win.

**What was observed:** Match Creek Motors states a collection target at the top of the board for each level, starting with a single shape and later combining several shapes with crates that must be broken. The remaining count updates as pieces are matched, and a completion screen follows a cleared target.

**How it is presented:** The target sits at the top of the board throughout a level, and the completion screen appears immediately once it's cleared, paying wrenches and gold coins.

**What is worth noting:** Match Creek Motors doesn't show a move limit, a timer or what happens when a level isn't cleared; every level played in this analysis reached its target.

**Key findings:**

- Each level states a piece-collection target at the top of the board.
- Later levels combine several shapes and add crates that must be broken.
- A completion screen pays wrenches and gold coins once the target is cleared.
- Match Creek Motors doesn't show a move limit, a timer or an unsuccessful outcome.

**Screenshots needed:** a level's target display at the top of the board; the completion screen paying wrenches and gold coins.

### Boosters

**Implementation summary:** Starting from level 9, a pre-level screen offers three of a kind of item held outside the level, with no shown effect or use.

**What was observed:** From level 9 onward, the pre-level screen offers a row of items the player can choose to start a level with, three of each. Match Creek Motors also grants items it calls boosters through the sale and at project completion.

**How it is presented:** The selection row sits on the pre-level screen, with a choice of whether to start the level carrying them or not.

**What is worth noting:** Match Creek Motors doesn't say what one of these items does inside a level, or whether the count of three falls after it's used; this write-up describes the selection screen and the grants, not an effect that wasn't shown.

**Key findings:**

- From level 9, a pre-level screen offers three of an item the player can start the level with.
- The same items, or similarly named ones, are granted through the sale and at project completion.
- Match Creek Motors doesn't state what one of these items does during a level.
- Match Creek Motors doesn't show whether the held count falls after use.

**Screenshots needed:** the pre-level selection screen showing three held items; the sale or completion screen granting them.

### Lives

**Implementation summary:** A hearts counter, named lives by the app itself, is shown full throughout, with a prompt to keep playing levels attached to it.

**What was observed:** Match Creek Motors shows a hearts counter on the home screen. Tapping it states the count is full and invites the player to play levels.

**How it is presented:** The counter sits on the home screen alongside the currency balances, and tapping it opens the full-count message directly.

**What is worth noting:** The count stayed full throughout this analysis, and Match Creek Motors doesn't show a heart leaving the counter at any point; what actually removes one isn't something this write-up can describe.

**Key findings:**

- A hearts counter sits on the home screen, named lives by the app's own wording.
- Tapping the counter shows a message stating the count is full, with a prompt to play levels.
- The count stayed full throughout this analysis.
- Match Creek Motors doesn't show a heart being lost.

**Screenshots needed:** the hearts counter on the home screen; the full-count message.

### Milestone

**Implementation summary:** Two reward boxes placed along the restoration track pay out as the project advances, separate from the project's own completion reward.

**What was observed:** Match Creek Motors places two boxes on the task-list track between the broken and finished car, each paying gold coins once the project reaches them. Completing the project itself is marked separately, with its own reward.

**How it is presented:** The boxes are visible on the track before they're reached, though their contents aren't shown until opened. The project-completion reward appears once the finished car is sold and rolls out of the garage.

**What is worth noting:** Match Creek Motors treats reaching a point on the track and finishing the whole project as two different kinds of recognition, one paid mid-track without ceremony, the other marking the project closed.

**Key findings:**

- Two reward boxes sit on the task-list track and pay gold coins once reached.
- Box contents aren't shown before they're opened.
- Completing the project pays its own reward, separate from the track boxes.
- The project's completion reward includes boosters and gold coins.

**Screenshots needed:** the task-list track showing both reward boxes; the project-completion reward screen.

### Achievement

**Implementation summary:** A list of collectible achievements for Match Creek Motors is reached entirely through Apple's Game Center rather than the game's own screens.

**What was observed:** Opening Settings, Account, Achievements takes the player to Apple's Game Center, showing a list of the achievements that can be collected in Match Creek Motors. The list doesn't compare the player's own achievements against other players.

**How it is presented:** The achievement list lives outside the game entirely, reached only through the Game Center surface Settings routes to.

**What is worth noting:** Match Creek Motors keeps its achievement list off its own screens completely; nothing about an achievement is shown, named or celebrated anywhere inside the game itself.

**Key findings:**

- A list of collectible achievements is shown through Apple's Game Center.
- The achievement list doesn't compare the player against other players.
- No achievement was attained during this analysis.
- The achievement surface is reached only through Settings, Account, Achievements.

**Screenshots needed:** the Game Center achievement list reached from Settings.

### Progression Gate

**Implementation summary:** A locked player profile states a level-14 requirement without showing what level the player currently holds.

**What was observed:** Tapping the character portrait in Match Creek Motors shows a message stating the player profile unlocks at level 14. Nothing on screen shows the player's current level to compare against that requirement.

**How it is presented:** The locked message appears directly when the portrait is tapped, standing in for the profile itself until the requirement is met.

**What is worth noting:** Match Creek Motors states the unlock condition in terms of a level without saying which level counter it means or showing where the player currently stands against it.

**Key findings:**

- Tapping the character portrait shows that the player profile unlocks at level 14.
- Match Creek Motors doesn't show the player's current level anywhere on screen.
- Match Creek Motors doesn't describe what the player profile contains.

**Screenshots needed:** the locked player-profile message stating its level-14 requirement.

### Soft Currency

**Implementation summary:** Wrenches earned from winning match-three levels are spent entirely on the restoration tasks that rebuild the current car.

**What was observed:** Match Creek Motors pays wrenches for winning a match-three level, and wrenches are spent on the individual tasks that make up a car's restoration, each stated at its own price. When the wrench balance can't cover the next task, the player returns to a level to earn more.

**How it is presented:** The wrench balance sits on the home screen throughout play, and an explainer reached by tapping it states plainly that winning levels is how points are earned. Every task states its wrench cost before it's chosen.

**What is worth noting:** Match Creek Motors ties the wrench balance to exactly one use, buying the next task, with winning a level as the only way stated to refill it.

**Key findings:**

- Wrenches are earned by winning match-three levels and spent on restoration tasks.
- An in-app explainer states that winning levels is how wrenches are earned.
- Each task states its wrench cost before it's chosen.
- No other source of wrenches, and no other use for them, appears anywhere else.

**Screenshots needed:** the wrench balance and its explainer; a task showing its stated wrench cost.

### Hard Currency

**Implementation summary:** Gold coins grow throughout the same loop that earns wrenches and are also sold directly in four packs, with no purchase shown for anything they buy.

**What was observed:** Match Creek Motors sells gold coins in four packs in the shop. The same balance also grows from winning match-three levels, from the reward boxes on the project track, from the sale, and from completing the project.

**How it is presented:** The gold coin balance sits on the home screen beside the wrench balance, and tapping it opens the shop directly. The four packs are listed together with their prices.

**What is worth noting:** Match Creek Motors shows every route into the gold coin balance, earned and bought, but no route out; nothing in this write-up claims a price or use for gold coins beyond what's shown, because nothing spending them appears anywhere in the app.

**Key findings:**

- Gold coins are sold in four packs in the shop.
- The same balance also grows from levels, track rewards, the sale and project completion.
- Tapping the gold coin balance opens the shop.
- Match Creek Motors doesn't show anything being bought with gold coins.

**Screenshots needed:** the gold coin balance on the home screen; the shop's four coin packs.

### Leaderboard

**Implementation summary:** Two named leaderboards, reached through Apple's Game Center, rank players in separate Friends and Global scopes.

**What was observed:** Opening Settings, Account, Leaderboards takes the player to Apple's Game Center, showing two named boards, one tracking win streaks and one tracking first-try wins, each viewable in a Friends scope and a Global scope.

**How it is presented:** Both boards live outside the game, reached only through the Game Center surface Settings routes to, the same way the achievement list is reached.

**What is worth noting:** Match Creek Motors doesn't show the ordered standings on either board, or where the player's own position sits on either one.

**Key findings:**

- Two named leaderboards, tracking win streaks and first-try wins, are reached through Apple's Game Center.
- Each board is viewable in a Friends scope and a Global scope.
- Match Creek Motors doesn't show the ordered standings or the player's own position on either board.

**Screenshots needed:** the Game Center leaderboard list reached from Settings, showing both named boards.

---

## Section cards

**Onboarding and first run:** Fifteen observations carry the player from the App Store listing through a fully guided first project, with the garage's cast directing each step before handing over control.

**Core loop and automation:** Winning a match-three level pays wrenches that fund the next restoration task, a loop that repeats through customization choices, crew comments and a blind sale negotiation.

**Goals and progression:** Reward boxes on the project track, the project's own completion, a missions map of cars still ahead, and an achievement list all track progress at once.

**Access and eligibility:** A player profile and the pre-level breaker selection each stay locked behind conditions Match Creek Motors doesn't fully explain.

**Economy and resources:** Wrenches fund the current car alone, gold coins are sold and earned with no shown use, and hearts and boosters each sit without a shown consumption rule.

**Social:** Two named leaderboards rank players by win streak and first-try wins, reached entirely through Apple's Game Center.

**Reach beyond the app:** A community link to the studio's social pages and a photo mode with system sharing are the two routes that send anything outward.

**Monetization:** A coin shop sells four gold coin packs, the only purchase surface reached in this analysis.

**Return triggers:** A notification permission request arrives before any game content, the earliest of the app's first-launch screens.

---

## Onboarding and first run

Match Creek Motors runs a fully guided first project before handing control to the player. This section covers the App Store listing, first launch, and the guided steps that introduce spending and choices.

### O1. App Store listing

The App Store lists Match Creek Motors under a subtitle read as Solve Puzzles, modify rides, with screenshots of car customization and the match-three board, a video preview, and a description covering the opening story and features. The listing shows an in-app event card described as a new obstacle, a toy car, happening now. The rating shown is 4.8 out of 5 from about 24,000 ratings, in the puzzle, car customization and vehicle game simulation categories, rated 13+, from developer Hutch Games Limited, available in English and 11 or more other languages at 1.23 GB, for iPhone and iPad. The last update shown was two weeks before this analysis, with updates roughly once or twice a month before that.

### O2. Reviews on the listing

The listing surfaces a mix of reviews, with Most helpful including one titled Can't complain, one Really good game and one Avoid this game. Favorable reviews praise the graphics, the builds, the choice of parts and the short time needed to finish a vehicle. Critical reviews describe the game as mostly match-three with little car customization and no driving, one reporting being stuck around level 50 even with all boosters and wishing for a pay-to-skip option, and one criticizing the headlight options on a specific car model. These are App Store statements rather than behavior shown in this analysis.

### O3. Tracking permission first

On first launch, the first thing Match Creek Motors shows is the system request asking whether the app may track the user across other companies' apps and websites, with no screen before it explaining why. A loading screen showing a car and a barn follows.

### O4. Terms confirmation

The next screen reads a request to confirm having read and agreed to the terms of service and privacy and cookie policies, with a Confirm button beneath it and no decline path described.

### O5. The opening letter

The game opens on a letter addressed to Max, the player's character, from his brother Mitch, asking Max to come manage the family garage in Match Creek while Mitch deals with trouble that requires him to leave town. A photo of three other characters, Aaron, Brooke and Mitch, appears with the letter. The player's character isn't shown in the photo and isn't introduced beyond the name Max.

### O6. Optional account save

A button showing a rotating cloud sits in the top left corner from the opening letter onward. Tapping it opens a Save Progress screen inviting sign-in with Apple as the only option. Match Creek Motors never separately prompts the player to create an account; account creation is optional and reachable from this button or from Settings at any time.

### O7. Story introduction

A dialogue sequence introduces the garage's cast: Aaron, the player's best friend, first appears stern before smiling and giving a bear hug with haptic feedback; Brooke, the accountant and the player's high school sweetheart, tells the pair to restore the 1970 GMC Jimmy so it can be sold, since Mitch left them without help and clients are waiting. A Skip button sits at the top of the dialogue throughout. The exchange sets both a business goal, restoring and selling the truck, and an unresolved personal thread between Aaron's comment and the player's history with Brooke.

### O8. First car arrives

Aaron asks for help getting the GMC Jimmy into the workshop, and the car rolls into the garage in a 3D scene. The first project's car is fixed by the story; no choice of car is offered at this point.

### O9. First home screen

On the first home screen, Aaron's face appears with a prompt to head to the task list, which is enlarged, ringed and glowing with an arrow pointing at it while everything else is dimmed. The home screen also shows a hearts counter shown full, a gold coin balance read as one thousand, a second balance the player has 300 of, a photo button, a settings button and a match-three play button in the bottom right.

### O10. The strip-down task

The task list shows a track running from a broken car to a fully finished one, with two boxes placed between them along the way. Aaron says tasks cost points and asks for the first one, Strip Down, priced at 150 wrenches. Tapping it deducts the wrenches, lifts the car, removes its parts, and leaves a clean shell, after which Aaron says it's time to add some parts and new tasks appear starting with the front of the car.

### O11. Guided task selection

With the screen still dimmed, Aaron points at the task list again. The available tasks are front fenders at 150, headlights at 100, front bumper at 120 and hood at 200, with 150 wrenches remaining; only front fenders is highlighted and selectable, though headlights and the front bumper are also affordable at that balance. The hood is unaffordable at 200.

### O12. First style choice

Aaron asks the player to choose the option that shows off their style, and the player picks one of three fender options; tapping an option shows it on the car with a short bounce. Aaron closes the step approvingly. The three options are described only as keeping it classic or giving it a twist, with no text describing how they differ or what result each produces.

### O13. Pointer to the puzzle

With the screen still dimmed, Aaron moves from the task list to the play button, saying more points are needed. The level 1 screen sets a target of 12 turbos and offers a row of breakers to select from, all shown locked.

### O14. Guided first level

After a loading screen, Aaron teaches piece-swapping, with instructions in red capital letters, the rest of the screen dimmed, and the remaining turbo count highlighted. A skip option is available during the tutorial. On success, the result screen shows that the level paid wrenches and gold coins, though the exact amounts aren't read out.

### O15. End of guidance

When the home screen returns after the first match-three win, nothing is dimmed and no pointer or character leads the player; the only cue is an exclamation mark on the task list. This is the first point at which the player acts without being led. Onboarding asks no questions, shows no progress indicator, and collects no preferences; the story choices don't branch the flow, and the sequence is the same regardless.

---

## Core loop and automation

Winning a match-three level is what funds every step of a car's restoration. This section covers the loop between the two, the task list and its choices, and the negotiation that closes the project.

### O16. The earn-and-spend loop

Match Creek Motors repeats one unit throughout the first project: win a match-three level, receive wrenches and gold coins, spend the wrenches on a car task, and return to a level once the balance runs short. The balance was spent to zero several times across the project. Eleven match-three levels were played to complete the first car in this analysis.

### O17. Task list rules

Car work is organized as a list of tasks, each carrying its own wrench cost, and completing a task can bring several new ones onto the list at once. After the guided opening, the player chooses which available task to take next. The final task on the list is selling the finished car. Stated costs seen include 150 wrenches for stripping the car down, 150 for the front fenders, 100 for headlights, 120 for the front bumper and 200 for the hood. A task can sit on the list priced above the current balance until more wrenches are earned.

### O18. Style choice per part

Each part task opens a choice among three options, applied to the car on tap and confirmed by the player. No option carries a description, a stated effect or a price difference. Some tasks are settings rather than parts, such as ride height offered as low rider, high rider or normal.

### O19. Revising installed parts

A small wrench button opens a view listing every change made to the car so far, and the player can go back and change a part installed earlier. Match Creek Motors doesn't state whether changing an already-installed part costs wrenches.

### O20. Crew comments on choices

The garage's cast comments on some installed choices and stays silent after others. Comments heard include approval of the headlights for night visibility, the front bumper's fit, the wheels, and the interior. No comment follows several other tasks, including the hood, the rear fenders and the tires.

### O21. No pointers after onboarding

After the guided opening, Match Creek Motors stops pointing anywhere: the match-three play button carries no marker, and the task list isn't highlighted again once its balance runs short. The one standing cue is an exclamation mark on the task list when a task becomes affordable.

### O22. Match-three level rules

Each match-three level states a collection target at the top of the board, a single shape on the earliest levels and combined shapes with breakable crates on later ones. Levels took 15 to 20 seconds each in this analysis and were described as easy early on, growing harder as they progressed. Level 9 was reached by the side-mirror task, and level 11 by the end of the project.

### O23. Pre-level breaker selection

Starting on level 9, the pre-level screen offers a row of items the player can choose to start the level with, three of each. Match Creek Motors doesn't state what one of these items does during a level, and whether the count of three falls after one is used isn't something this analysis can describe.

### O24. Hearts as lives

Tapping the hearts counter shows a message stating the count is full, with a button to play levels beneath it. The count stayed full throughout this analysis, and Match Creek Motors doesn't show a heart leaving the counter.

### O25. The buyer negotiation

When the car is finished, a scout named Logan is introduced, and the accountant Brooke opens the final task: negotiating a sale. Three buyers make offers one at a time, shown as cards the player drags left to reject or right to accept, without seeing the offers still to come. The first offer, 20 gold coins and one booster, is called a lowball by Brooke, who tells the player to reject it; a second offer of 20 gold coins follows; a third, three boosters and 100 gold coins, is the one Brooke says to accept. Accepting triggers a celebration animation. Brooke's instructions determined which card was rejected and which was accepted in this first sale.

---

## Goals and progression

Match Creek Motors tracks the current car's progress and the wider set of projects ahead at once. This section covers the project track's reward boxes, project completion, the story scene that follows it, the missions map, and the achievement list.

### O26. Reward boxes along the track

The two boxes placed on the project track between the broken and finished car pay out as the project advances. The first box's contents weren't read out; the second paid 25 gold coins.

### O27. Project completion reward

After the sale, the finished car rolls out of the garage into the light, the project is marked complete, and Match Creek Motors grants a set of rewards including boosters and gold coins. The exact reward amounts weren't read out.

### O28. Story scene after completion

A dialogue scene follows the completed project in which Logan reveals he's been dating Brooke for five years, and Brooke says her past with the player is ancient history and that they need to focus on the present. The scene leaves open why Mitch left, called a mystery for another time, and closes with Brooke saying they need to keep finding, customizing and selling cars until Mitch gets back. Logan then offers three cars to choose from for the next project.

### O29. Missions map

A map button beside the task list shows the missions ahead: the first, Homecoming, is in progress with the current car, and 13 missions are listed in total, the last marked coming soon. Reaching the later missions requires repeatedly tapping a right arrow. Match Creek Motors doesn't describe what distinguishes one mission from another beyond the cars involved.

### O30. Numbered match-three levels

The match-three levels are numbered and advance one by one as they're won, reaching level 11 by the end of the first project. Match Creek Motors doesn't display the player's current level anywhere outside the level screens themselves. Level demands change with the numbers: new collection targets, combined shapes and crates.

### O31. Achievements in Game Center

Settings, Account, Achievements opens Apple's Game Center on a list of the achievements that can be collected in Match Creek Motors. The list doesn't compare the player's own achievements against other players. No achievement was attained during this analysis.

---

## Access and eligibility

Match Creek Motors locks a player profile and a pre-level item selection behind conditions it states only partly. This section covers both.

### O32. Player profile locked at level 14

Tapping the character portrait shows that the player profile unlocks at level 14. Match Creek Motors doesn't show the player's current level anywhere to compare against that requirement, and doesn't state whether the level in question is the numbered match-three level count or some other measure.

### O33. Breakers locked on early levels

On level 1, every breaker in the Select Breakers row is shown locked. Breakers first become selectable on level 9. Match Creek Motors doesn't state a requirement for unlocking them.

---

## Economy and resources

Match Creek Motors runs two currencies and a counted item alongside its match-three levels. This section covers wrenches, gold coins and the pre-level breakers.

### O34. Wrenches

Wrenches, which the app also calls points, are earned by winning match-three levels and spent on car tasks, with each task deducting its stated cost. Tapping the wrench counter opens an explainer stating plainly that winning levels is how points are earned. The starting balance is 300; stripping the car down and adding the front fenders, 150 each, exhaust it. No other source of wrenches and no other use for them appears anywhere else.

### O35. Gold coins

A gold coin balance, read as one thousand at the start, grows from every match-three win, from the boxes on the project track, from the sale and from project completion. Amounts seen include 25 from a track box, 20 in each of two rejected sale offers, and 100 in the accepted offer. Gold coins are also sold in the shop. Match Creek Motors doesn't show anything being bought with gold coins anywhere in this analysis.

### O36. Boosters as granted items

The sale offers and the project-completion reward grant items the app calls boosters: one in one sale offer, three in another, and a larger unspecified number at project completion. Match Creek Motors doesn't state whether these granted boosters are the same items as the breakers offered before a level, or where they're held once granted.

---

## Social

Match Creek Motors' only comparison surfaces are two leaderboards reached through Apple's Game Center.

### O37. Leaderboards in Game Center

Settings, Account, Leaderboards opens Apple's Game Center on the game's leaderboards, named High win streak and First try wins, each viewable in Friends and Global scopes. Match Creek Motors doesn't read out the ordered entries or the player's own position on either board, and doesn't show any win-streak measure inside the game itself.

---

## Reach beyond the app

A settings link to the studio's social pages and a photo mode with system sharing are the two routes Match Creek Motors offers for reaching outside the app.

### O38. Community links

Settings contains a community option that sends the player to follow the studio's social media profiles. Settings also holds music, sound effects, high quality, vibration, credits, help and support, and an account area covering achievements, leaderboards, terms of service, privacy policy, save progress and account deletion.

### O39. Photo mode with system sharing

The photo button lets the player move the camera around the car in any direction, take a picture, and share it through the iOS share sheet or go back. The picture is of the player's own car build. Match Creek Motors doesn't say whether photos are kept in a gallery, and no gallery is visible.

---

## Monetization

Match Creek Motors' only purchase surface reached in this analysis is a shop selling gold coins directly.

### O40. Coin shop

Tapping the gold coin balance opens the shop directly, and after the first match-three win the shop sells only gold coin packs: 1,000 coins for $1.99, 2,700 for $4.99, 5,500 for $9.99 marked Popular, and 75,000 for $99.99 marked best value. No special offers appear, and the shop states no bonus percentage or per-dollar comparison between packs.

---

## Return triggers

A single notification request, arriving before any game content, is the one return-oriented prompt Match Creek Motors shows in this analysis.

### O41. Notification permission requested early

Immediately after the terms confirmation, Match Creek Motors shows the system request to send notifications, before anything about the game has appeared and with no screen explaining what the notifications will contain. This is the third screen of the first launch, after the tracking request and the terms confirmation.
