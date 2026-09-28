# Fortune City

**Teaser:** Fortune City shows the mayor exactly who's waiting behind four consecutive days of tracking, then makes them wait anyway.

Fortune City turns real expense-tracking into a city-building game: every recorded expense becomes a building on a floating island, citizens are recruited and put to work, and coins from their labor fund the city's growth. A separate currency, diamonds, pays for citizens who don't join for free, city themes and an expanded daily building cap, and is earned through achievements, missions and watching ads. The entire construction and recognition layer, buildings, citizens, achievements, daily rewards, is free; Fortune City's actual financial tools, budgeting, spending trends, and a guided review of individual expenses, sit behind an annual subscription that also covers four other apps from the same publisher.

---

## System view

This is a complex system. Its spine is the expense record: recording a real expense is the one action that produces a building, advances every currency, feeds achievements and prosperity, and eventually reaches the paywalled finance tools that read the same records back. Around that spine sit two halves that barely touch, a free construction and recognition layer built from coins, diamonds, citizens and achievements, and a subscription-gated finance layer that turns the same recorded expenses into budgets, trends and a guided want-versus-need review.

---

## Mechanics

### Energy

**Implementation summary:** Fortune City converts only the first five expenses recorded each day into buildings, with the daily cap raised through a diamond-bought upgrade.

**What was observed:** Fortune City limits how many of the day's recorded expenses actually produce a building. A helmet count in the top bar falls with each building made, and once it reaches zero, further expenses are still recorded but stop producing new construction until the next day. Kashi explains this rule the first time the limit is reached rather than in advance. The Builders Hub can raise the daily capacity from five to six buildings, priced in diamonds.

**How it is presented:** The helmet count sits in the top bar throughout play, falling visibly as buildings go up. Kashi's explanation appears as a one-off message triggered by hitting the limit for the first time, not as a rule stated during onboarding. The Builders Hub upgrade sits inside the same City Hall menu as the coin-priced upgrades, priced instead in diamonds.

**What is worth noting:** Recording itself is never restricted, only the reward for it. A user can log as many expenses as they want in a day; Fortune City just stops turning them into buildings past the fifth. Pricing the capacity increase in the premium currency puts a real-money-adjacent cost on doing more of the app's core habit-forming action in a single sitting.

**Key findings:**

- The first five expenses recorded each day become buildings; further expenses are still recorded but produce nothing extra.
- A falling helmet count in the top bar tracks the remaining daily capacity.
- Fortune City explains the five-per-day rule only once the limit is first reached.
- The Builders Hub upgrade raises the daily cap from five to six buildings, priced in diamonds rather than coins.

**Screenshots needed:** the top bar's helmet count at full and after several buildings; the Builders Hub upgrade screen showing its diamond price.

### Personal Data Reflection

**Implementation summary:** Kashi asks the mayor to judge each of their own recorded expenses as a want or a need, for a diamond reward.

**What was observed:** Fortune City opens an expense review in which Kashi invites the mayor to go through recorded expenses together to find places to save, offering three diamonds for taking part. The review shows one of the mayor's own recorded expenses at a time, states its average amount, and asks whether it counts as a want or a need. A later instance of the same review frames the same choice as self-investment against an ordinary purchase. After a handful of answers, Fortune City returns a finding naming which of the reviewed expenses it has marked as unnecessary, and offers to continue the review, which leads to the subscription paywall.

**How it is presented:** The review can start as a pop-up while the mayor is elsewhere in the finance screens, or from its own tab, where it sits beside want, need and uncategorized shares, none of which can be broken down further without the subscription. Each expense is judged one at a time, with nothing about the earlier ones visible while a new one is being judged. An information panel beside the review explains the want-and-need method and states it can raise savings by as much as a stated percentage, citing two references.

**What is worth noting:** The review asks the mayor to characterize their own spending, not the app's, and hands back a finding built entirely from those answers rather than from any external rule about what a want or a need is. Fortune City routes the same judgement through two different framings, want versus need in one instance and self-investment versus purchase in another, for what is otherwise the same review. The review stops after a handful of items regardless of how many expenses exist, with the rest requiring the subscription to reach.

**Key findings:**

- Kashi invites the mayor to review their own recorded expenses together, for a reward of three diamonds.
- Each expense is shown with its average amount, and the mayor judges it as a want or a need, or as self-investment against a purchase.
- Fortune City returns a finding naming which reviewed expenses it marks as unnecessary.
- Continuing the review past the first few items requires the subscription.
- An information panel claims the want-and-need method can raise savings by as much as a stated percentage, citing two references.

**Screenshots needed:** the review's single-expense judgement screen with its want-or-need choice; the findings screen naming expenses marked unnecessary; the Review tab showing want, need and uncategorized shares.

### Achievement

**Implementation summary:** Fortune City tracks 100 named achievements across tiered groups, from consecutive tracking days to ad views to installing its publisher's other apps.

**What was observed:** Fortune City keeps a catalogue of 100 achievements sorted into named groups, most of them tiered series against one measure. It announces each one the moment it is earned, with a pop-up naming the achievement, the criterion it met and its reward, then keeps the earned badge in the catalogue afterward. Several can fire together after a single action, since one recorded expense can cross a prosperity threshold and complete a first building at once.

**How it is presented:** The catalogue lives in Your City under Achievements, browsable by group, with earned badges shown distinctly from ones not yet reached. Every unlock pop-up carries a diamond reward and a share control. The groups cover a wide range of activity: consecutive tracking days, first-time actions, prosperity and population thresholds, coins collected, category-specific expense counts, watching ads to help a city character, sharing photos, and installing the publisher's other apps.

**What is worth noting:** Two of the hundred groups reward activity that has nothing to do with expense tracking directly: one scales from five to a thousand ad views, the other pays out for installing separate apps from the same publisher. Both sit in the same catalogue, earn the same diamond reward, and fire the same pop-up as an achievement for building a first structure or reaching a population threshold.

**Key findings:**

- Fortune City tracks 100 achievements across named, mostly tiered groups.
- Each unlock fires a pop-up naming the achievement, its criterion and a diamond reward, with a share control attached.
- Achievements can fire together when one action crosses more than one threshold at once.
- One group rewards watching ads to help a city character, scaling from five to a thousand views.
- A separate group rewards installing the publisher's other apps.

**Screenshots needed:** the Achievements tab showing a tiered group with earned and unearned badges; an unlock pop-up naming its criterion and diamond reward.

### Milestone

**Implementation summary:** Fortune City marks specific points on its running prosperity and population counts as their own recognized events, apart from the ordinary number changing.

**What was observed:** Alongside the achievement catalogue, Fortune City recognizes specific points crossed on two running measures it keeps, prosperity and population, separately from the number simply going up. Reaching prosperity 10, 20 or 50, or population three, each fires its own named pop-up rather than only updating the figure shown in the top bar.

**How it is presented:** Prosperity is shown as a badge in the top bar throughout play, rising with buildings and City Hall upgrades. Population is shown as a count against a capacity. Crossing one of the named points produces the same style of pop-up used for an achievement, naming the point reached and its reward.

**What is worth noting:** The prosperity and population thresholds are administered through the same pop-up and reward mechanism as the achievement catalogue's other criteria, so a prosperity milestone and an install-another-app achievement look and pay identically at the moment either one fires.

**Key findings:**

- Prosperity and population are running measures shown continuously in the top bar and on the citizens screen.
- Specific points on each, prosperity 10, 20 and 50, and population three, fire their own named pop-up.
- The pop-up format matches the one used for the achievement catalogue.
- City Hall upgrades state directly how much prosperity they add.

**Screenshots needed:** the prosperity badge in the top bar beside a population count; a threshold pop-up naming the prosperity or population point reached.

### Leveling

**Implementation summary:** Buildings and the City Hall's three upgrade tracks each hold a numbered level that only rises when the mayor spends coins or diamonds on it.

**What was observed:** Fortune City's buildings each carry a level from one to eight, shown with a description of what reaching the next one takes, and merging two identical buildings is what moves a building up a level. Separately, the City Hall holds three tracks, finance, economy and livelihood, each starting at level one and priced in coins, and the Builders Hub holds its own level governing daily building capacity.

**How it is presented:** The Buildings tab in Your City lists every building type by category with its full level range visible, including levels not yet reached. City Hall upgrades are bought from a dedicated screen stating the coin price and what the next level grants, confirming once the upgrade succeeds.

**What is worth noting:** Fortune City runs four separate leveling tracks at once, one per building type and three inside the City Hall, each with its own price and its own reward, rather than a single account-wide level standing in for all of them.

**Key findings:**

- Buildings hold a level from one to eight, moved up by merging two identical buildings.
- The City Hall holds three separate tracks, finance, economy and livelihood, each starting at level one.
- Each City Hall upgrade states its coin price and what it grants before it's bought.
- The Builders Hub holds a level of its own, governing how many buildings can be made each day.

**Screenshots needed:** the Buildings tab showing a building type's full level range; the City Hall screen showing its three tracks and their prices.

### Set Collection

**Implementation summary:** Five named council members, forty VIP citizens, and full building and vehicle galleries each track what the mayor has found against what remains.

**What was observed:** Your City holds a Characters tab listing five named council members and forty VIP citizens, alongside separate Buildings and Vehicles tabs. Council members not yet found are shown in silhouette or by name only, with one, Fisher, teased by a line asking whether the mayor wants to see how cute he is. VIP citizens not yet obtained are shown as greyed, unopenable entries. The Buildings and Vehicles tabs list every type or model in the game, whether owned or not.

**How it is presented:** Each of these four tabs shows what has been found or obtained clearly apart from what hasn't, silhouettes and greyed slots standing in for content not yet reached. A found council member opens to a profile of their own, showing progress inside a further, smaller collection tied to that one character.

**What is worth noting:** The collection nests one level deeper than the top-level list suggests. Finding a council member doesn't complete anything by itself, it opens a second collection specific to that character, with its own count of items still to unlock.

**Key findings:**

- Five named council members and forty VIP citizens are tracked as found or not found.
- Unfound council members are shown in silhouette or by name; unobtained VIP citizens are shown as greyed slots.
- Buildings and vehicles are tracked the same way across their own dedicated tabs.
- Each found council member opens their own further collection, tracked separately from the top-level list.

**Screenshots needed:** the Characters tab showing found and silhouetted council members; a council member's own profile showing their collection progress.

### Progression Gate

**Implementation summary:** Fortune City states in advance the specific building count or tracking streak that stands between the mayor and new citizens or a hidden council member.

**What was observed:** Fortune City states how many more buildings need to be built before the city can hold new citizens, a number that grows as the population grows. Separately, it states that Fisher, one of the five council members, is found only after four straight days of tracking expenses, and that his help with the expense review depends on the same continued tracking.

**How it is presented:** The building requirement appears on the citizens screen and on any visitor who can't yet join, stated as an exact remaining count. Fisher's condition appears on his own silhouetted profile entry and again on the finance screens that mention his review function.

**What is worth noting:** Both conditions are stated in advance rather than discovered by trial, an exact number of buildings in one case, an exact number of consecutive days in the other.

**Key findings:**

- A stated number of additional buildings is required before new citizens can join, and that number rises as the population grows.
- Fisher is found after four consecutive days of tracking expenses.
- Fisher's profile is shown in silhouette before he's found, with a line asking whether the mayor wants to see him.
- Fortune City doesn't state whether Fisher's expense-review help needs the tracking streak alone or the subscription too.

**Screenshots needed:** the citizens screen stating the buildings still required; Fisher's silhouetted profile entry with its four-day condition.

### Soft Currency

**Implementation summary:** Coins and diamonds are both earned through ordinary play and spent on separate sets of upgrades, recruits and content.

**What was observed:** Fortune City runs two balances the mayor earns without paying. Coins come from citizens working in buildings, the daily reward and completed missions, and are spent on City Hall upgrades and building merges. Diamonds come from achievements, the expense review, missions, the salesman character and free-diamond ads, and are spent on recruiting visitors who don't join for free, city themes and the Builders Hub upgrade.

**How it is presented:** Both balances sit in the top bar throughout play. Coins carry a stated storage cap that rises with a City Hall upgrade; diamonds carry no stated cap. Every place either balance can be spent states its price before the mayor commits.

**What is worth noting:** The two balances don't compete for the same spending decisions, coins pay for the city's own growth, diamonds pay for recruiting, appearance and capacity, so earning one doesn't reduce what the other is good for.

**Key findings:**

- Coins are earned from citizen labor, the daily reward and missions, and spent on City Hall upgrades and merges.
- Diamonds are earned from achievements, the expense review, missions, the salesman and ads, and spent on recruits, themes and Builders Hub capacity.
- Coins carry a storage cap raised by a City Hall upgrade; no cap is stated for diamonds.
- Every purchase in either balance states its price before it's made.

**Screenshots needed:** the top bar showing both balances; the City Hall's finance-track upgrade stating its coin price and its effect on the coin cap.

### Hard Currency

**Implementation summary:** Diamonds, the same balance earned through free play, are also sold directly in five priced packs from the shop.

**What was observed:** Fortune City sells diamonds in five packs, rising from a small pack at $1.99 to the largest at $99.99, alongside a starter package bundling diamonds with two City Hall upgrades. The same diamonds are also earned for free through achievements, missions, the salesman and ads.

**How it is presented:** The packs sit together in the shop with their prices and diamond amounts shown side by side. The starter package is framed separately, ahead of the plain diamond packs, listing named items alongside its diamond amount.

**What is worth noting:** Fortune City doesn't separate a purchasable premium currency from an earnable one, the same diamond balance carries both routes, so a mayor can reach the same recruit, theme or capacity upgrade by paying or by playing.

**Key findings:**

- Diamonds are sold in five packs, from $1.99 to $99.99.
- A starter package bundles diamonds with two named City Hall upgrades.
- The same diamonds earned through play are the ones sold for money; there's one balance, not two.

**Screenshots needed:** the shop's five diamond packs with their prices; the starter package's bundled contents.

### Shareable Win

**Implementation summary:** Achievement pop-ups, new buildings from a merge, and the City Hall panel each carry their own control for sending the moment outside the app.

**What was observed:** Fortune City offers a share control on achievement pop-ups, letting the mayor save the pop-up as an image. A newly merged building is announced with a prompt inviting the mayor to show it off, and the City Hall's own information panel and post office messages each carry a share control too.

**How it is presented:** Each share control sits directly on the moment it applies to, the pop-up itself, the new-building announcement, or the information panel, rather than in a separate gallery of shareable content.

**What is worth noting:** Fortune City treats an achievement, a new building and a City Hall status reading as equally shareable moments, offering the same kind of control on all three without distinguishing which is more worth sending outside the app.

**Key findings:**

- Achievement pop-ups carry a share control that saves the pop-up as an image.
- A merged building's announcement includes a Show it off prompt.
- The City Hall information panel and post office messages both carry their own share control.
- A separate achievement group rewards sharing photos with friends a stated number of times.

**Screenshots needed:** an achievement pop-up's share control; the merged-building announcement with its Show it off prompt.

### Cosmetic Customization

**Implementation summary:** City themes change the island's whole appearance and are priced in diamonds or bundled into the subscription, with no theme affecting anything the city does.

**What was observed:** Fortune City offers a set of named city themes, most priced in diamonds and also included with the subscription, and some available only with the subscription. Opening a theme shows the city rendered in that theme's style. The mayor's currently applied theme is tracked and shown as never expiring.

**How it is presented:** Themes sit in their own section, with subscriber-exclusive and time-limited options listed ahead of the rest. A warning attached to the themes screen states that purchases are lost if the app is deleted without signing in first.

**What is worth noting:** Fortune City prices the same appearance content two different ways at once, a diamond price for some themes and a subscription-only lock for others, with no stated difference in what either kind of theme actually changes about the city.

**Key findings:**

- City themes are priced in diamonds, included with the subscription, or restricted to the subscription only.
- Opening a theme previews the city rendered in that theme's style.
- The currently applied theme is tracked and stated to never expire.
- Theme purchases are lost on deletion unless the mayor has signed in.

**Screenshots needed:** the themes list showing diamond-priced, subscription-included and subscription-only options; a theme preview showing the city in its style.

### Rewarded Advertisement

**Implementation summary:** Watching an ad doubles the daily reward, pays free diamonds, earns a diamond from a named city character, or replaces a coin-priced merge.

**What was observed:** Fortune City ties an ad view to four separate benefits: doubling the daily reward, a free diamond from the shop or the menu, a diamond from a recurring city character called the salesman, and a free building merge in place of its coin price. Each benefit is withheld without the ad view.

**How it is presented:** Each ad offer sits directly on the benefit it grants, a button on the daily reward pop-up, a dedicated entry in the shop and the menu, the salesman character walking through the city with a visible marker, and an option on the merge confirmation screen. The salesman thanks the mayor afterward with a short, varying story before handing over the diamond.

**What is worth noting:** The salesman turns one of the four ad placements into contact with a named character rather than a plain reward screen, thanking the mayor personally and attaching a different short story to the reward each time.

**Key findings:**

- Ad views are tied to four separate benefits: a doubled daily reward, free diamonds from two menu locations, a diamond from the salesman, and a free merge.
- The salesman thanks the mayor with a short, varying story after each ad view.
- The menu's free-diamond offer stopped after two views in a day; the shop's showed no stated limit.
- Free merges are limited to a stated number remaining per day.

**Screenshots needed:** the salesman character with his ad marker and dialogue; the daily reward pop-up's ad-doubling option.

### Reward Multiplier

**Implementation summary:** Watching an ad after claiming the daily reward doubles its coin amount, with a clearly marked option to skip the doubling.

**What was observed:** Fortune City's daily reward pop-up states a base coin amount for the day, then offers to double it in exchange for watching an ad, naming a Don't double alternative on the same screen.

**How it is presented:** Both options sit side by side on the same pop-up that shows the day's base reward, so the choice is made before the reward is claimed.

**What is worth noting:** The multiplier applies to one reward instance rather than to anything ongoing, doubling is a single, one-time choice tied to that day's claim alone.

**Key findings:**

- The daily reward pop-up states a base coin amount before any multiplier is applied.
- Watching an ad doubles that day's coin amount.
- A Don't double option sits on the same screen as the ad offer.
- The doubled amount applies only to that day's single claim.

**Screenshots needed:** the daily reward pop-up showing the base amount, the ad-doubling option and the Don't double alternative.

### Daily Login Rewards

**Implementation summary:** A seven-day reward calendar restarts at day one after any gap, with day two's amount hidden until the mayor returns.

**What was observed:** On arriving at the home screen, Fortune City shows a daily reward pop-up stating the day number, the coins available and how many more days remain until a special gift on day seven. Day two's amount is hidden behind a question mark rather than shown in advance. Returning several days later showed the sequence back at day one rather than continuing from where it left off.

**How it is presented:** The pop-up appears automatically on arrival, before anything else, every day the mayor opens the app. The seven-day strip is shown in full each time, with only day two's reward concealed.

**What is worth noting:** Fortune City states most of the calendar's rewards in advance while withholding exactly one of them, and resets the whole sequence to day one after a gap rather than preserving progress toward the day-seven gift.

**Key findings:**

- The daily reward pop-up states the day number, its coin amount, and days remaining to a day-seven special gift.
- Day two's reward is hidden behind a question mark instead of being shown with the rest.
- Fortune City doesn't describe what the day-seven gift contains.
- Returning after several days without a visit restarts the sequence at day one.

**Screenshots needed:** the day-one reward pop-up showing the seven-day strip with day two's hidden question mark.

### Streak

**Implementation summary:** A displayed record of the longest run of consecutive tracking days sits alongside a daily reward sequence that itself restarts after any gap.

**What was observed:** Fortune City states a record for the longest run of consecutive days spent tracking expenses, shown as one day early on. Separately, the seven-day daily reward calendar's return to day one after a gap in visits shows that sequence resetting rather than holding its place.

**How it is presented:** The consecutive-days record sits among the achievement catalogue's other Great Habits criteria, which name specific day counts, three, seven, fourteen, thirty and ninety, as separate rewarded thresholds. The daily reward's reset is shown only implicitly, by the pop-up naming day one again on a later visit rather than continuing a prior count.

**What is worth noting:** Fortune City keeps two separate continuity records that both depend on returning without a gap, a named consecutive-tracking count and a reward sequence, but ties a reward, and Fisher's own unlock, only to the tracking count, not to the reward sequence's own position.

**Key findings:**

- Fortune City states a longest-consecutive-days record for tracking expenses.
- The Great Habits achievement group names specific consecutive-day thresholds, three, seven, fourteen, thirty and ninety.
- The seven-day daily reward calendar returned to day one after several days without a visit.
- Fortune City doesn't state what happens to the consecutive-tracking count after a missed day.

**Screenshots needed:** the Great Habits achievement group showing its consecutive-day thresholds; the daily reward pop-up on a return visit reading day one again.

---

## Onboarding and first run

Fortune City opens with the first expense recorded before any account, permission or profile step. Kashi then leads a guided sequence introducing visitors, jobs and the City Hall, one step at a time, before the mayor reaches an unguided screen.

### O1. Welcome screen choice

Fortune City opens on a welcome screen stating that in this town every expense can become a building. The screen offers two routes, Start and an existing-account option. We took the Start route in this analysis.

### O2. The first expense

After Start, Fortune City asks for the mayor's latest expense before any account, permission or profile step. The mayor enters an amount and picks one of ten categories, food, drinks, transportation, shopping, entertainment, housing, electronics, medical, miscellaneous or income, after which Fortune City announces the first building and names its category and amount. A demonstration step follows before continuing.

### O3. Construction preview

The next onboarding screen, Track more expenses, tells the mayor to keep constructing new kinds of buildings and shows what a fuller city looks like with food, drinks and transportation buildings already built in, as a preview of buildings the mayor could still add.

### O4. Notification request

Fortune City shows its own notification screen stating that every night at 10 the mayor will be reminded to record expenses, with an invitation to choose the best time, and offers Remind me or Skip; the system notification permission dialog follows. The default reminder time proposed is 10 pm, and it can be changed from the same screen. We did not record which choice was made on the system permission dialog.

### O5. Sign-in and backup

Fortune City then asks the mayor to log in or register to back up their data and keep it safe, with a skip option. Choosing sign-in hands off to the developer's shared account system through a website the app opens. We skipped this step in this analysis. Sign-in is not required to continue onboarding.

### O6. Mayor handover

The last onboarding screen states that the mayor is now officially the mayor of Fortune City and that the city is theirs, with an Enter the city control.

### O7. Kashi's first steps

On the home screen, the mascot Kashi greets the mayor and leads a sequence of single-step instructions: an envelope above a walking figure marks a visitor who can become a citizen, and Kashi asks the mayor to open a visitor's profile, accept them, and assign them a job. A visitor profile shows a name, a description, a current job, a productivity rate, and a row of stats across categories including piggy bank, purchasing, food, drinks, transportation, entertainment, house, medical and phone, and is browsed with arrows rather than swiping. The first visitor joined at no cost; the second cost one gem, with Fortune City asking for confirmation first. Once a job is assigned, Kashi asks the mayor to start the work timer, then states that upgrading the City Hall's finance level can raise the total coins earned. Only the drinks building was available for the first assignment, one of eight places, and starting the timer showed a three-hour period with coins appearing above the building.

### O8. New home screen controls

Once Kashi's first sequence closes, Fortune City adds three controls to the home screen: a receipt strip showing the day's total, a pie-chart button, and a menu button carrying unread notifications. The top bar also shows citizen population, a numbered badge, coin storage, the coin and gem balances, a builder count shown as helmets, and a camera button. Fortune City doesn't explain what the numbered badge means at this point; later in the same visit it's identified as prosperity.

### O9. The management guide

A framed icon under the coin display opens a City Management Guide of four screens stating the loop: recording expenses builds buildings, up to five a day, citizens work in buildings to earn coins, and coins upgrade buildings, with coins also used to merge two identical buildings into a taller one. After the guide closes, its icon becomes a bulletin board, and a mission asks the mayor to help Kashi find a lost page of the guide for 100 coins; completing it reveals a second set of four screens covering recruiting, the City Hall, and citizen talents, and awards an achievement for completing the guide. Recruiting visitors with envelopes costs no diamonds, upgrading the City Hall increases coins and gives access to new vehicles, VIP citizens and citizen ability levels, and citizens assigned to jobs matching their talents earn more coins.

### O10. First-occurrence explanations

Kashi reappears the first time a new situation arises to explain it: when two identical buildings first exist, he explains how to merge them, selecting a building, tapping the merge icon, then tapping the matching building; after the first merge he congratulates the mayor and encourages more merging; and after the fifth expense recorded in a day, he explains that only the first five convert into buildings but that tracking can continue. The five-per-day explanation appears at the moment the limit is reached, not before.

---

## Core loop and automation

Recording an expense is the one action every building, citizen and coin in Fortune City comes from. This section covers how a record becomes a building, how citizens are recruited and put to work, and the caps, merges and missions that decide how far a single day's recording actually goes.

### O11. Recording an expense

Recording a new expense opens a form asking for an amount, a choice between cash and card, and a category, with preset sub-options under each category, for example breakfast, lunch and afternoon tea under food, or fuel and bus under transportation. A settings panel inside the form lets the mayor reorder the categories. Income is recorded through the same form, as one of the ten categories rather than through a separate flow.

### O12. Records become buildings

Each recorded expense adds a building of the matching category to the city, appearing as soon as the record is saved, and a new category produces a new kind of building the city hasn't shown before. Buildings can be zoomed in and out on, and each category maps consistently to its own building type for every record that falls within the day's building capacity.

### O13. Daily building cap

Fortune City turns only the first five expenses recorded each day into buildings; a helmet count in the top bar falls with each one made and, once it reaches zero, further expenses are still recorded but produce no new building until the next day. Fortune City states this rule only once the limit is first reached, not in advance. The Builders Hub can raise the daily cap from five to six buildings, priced at 500 gems against a starting balance of 43, rising to 87 later on. Recording itself is never blocked, only its conversion into a building.

### O14. Recruiting citizens

Visitors walk through the city and can be recruited from their own profile screen. Visitors marked with an envelope join at no cost; others cost one gem, with Fortune City asking for confirmation before spending it. How many citizens the city can hold depends on how many buildings exist.

### O15. Assigning citizen jobs

Each citizen is assigned to a building, and Fortune City states which categories a citizen is naturally good at. The citizen list shows a workplace, a happiness level and a productivity rate per hour for each, alongside a Change job button. One citizen working in the drinks building was listed with a productivity of 34 coins an hour; Fortune City doesn't state whether the level shown alongside that figure belongs to the citizen or to the building. The first building held capacity for eight workers.

### O16. Citizens producing coins

Citizens produce coins while assigned and working. Tapping a clock over a building starts a work period of three hours, after which coins appear above the building. A City Hall information panel separately states coin output per hour, prosperity, and the total number of buildings and citizens, and carries its own share control. Fortune City doesn't say what happens at the end of the work period or whether collecting the coins needs a further tap.

### O17. Merging buildings

Two identical buildings can be merged into a new, named building one level up. A merge costs 50 coins, or can be done free by watching an ad, with a stated number of free merges available each day. Fortune City or Kashi announces each new building by name after a merge, with a prompt to show it off. Buildings produced by merges included a toy vendor, a set of street corner vendors, a bus stand and a community park; parks can be merged the same way stores can.

### O18. Parks and city layout

On a return visit, Fortune City announced that new parks had been built and added to the city, without any expense record producing them directly. Parts of the city can be dragged and rearranged. Fortune City doesn't say how the parks were earned or whether they were under construction while the app was closed.

### O19. Citizen Classifieds missions

The bulletin board holds a short list of missions at three levels, each asking the mayor to help a citizen find a person or object somewhere in the city, for a stated reward. Rewards seen included 100 coins, a diamond and two gems. After a mission is completed, its slot shows a thank-you message and a wait before the next one becomes available, 59 minutes at the first level; a mission can also be skipped. Fortune City doesn't say whether an unclaimed mission expires or what skipping one costs.

### O20. The salesman character

The bulletin board states a running count of citizens still to help toward an undisclosed thank-you gift, at 40 remaining at first and 35 after five helps later on. A separate flyer names a salesman character who walks through the city with an ad marker above him; watching an ad lowers his own remaining count by one and pays a diamond. After the ad, the salesman thanks the mayor with a short story that changes each time, attributing the diamonds to a source such as his boss or his grandmother, and later returns asking for help again. Fortune City doesn't say what the thank-you gift is, or what completing the count of 40 would deliver; we did not reach that count in this analysis.

### O21. Newspaper and post office

The menu opens Shop, Ranking, Your City, Citizens and Post Office, with a Citizen Daily newspaper item at the bottom reporting recent changes in the city, such as a new building or a City Hall upgrade. The Post Office holds messages from citizens and council members, which can be shared but not answered. Kashi's own letters introduce him as the mayor's chief finance minister and frame the app's purpose as building the habit of tracking where money goes.

### O22. Expense reporting tabs

A pie-chart button opens a monthly view of recorded expenses by category, covering all accounts or cash and card separately, with a further breakdown listing individual records inside each category. Tabs across the bottom lead to Categories, Trends, Budget, Review and Frequency. Trends shows expenses over several months for all categories or one at a time. Comparing this month against last month requires the subscription.

### O23. The budget screen

The Budget tab shows a total budget figure and a percentage remaining without the mayor ever having entered an income or a budget of their own, and Fortune City doesn't explain where the starting figure comes from. Budget reminders at set percentages remaining, and setting up new budget categories, both open the subscription paywall, as does the budget setup form itself, which asks for a type, a monthly amount, a category and an amount.

### O24. The expense review

Kashi invites the mayor to review their own recorded expenses together, for a reward of three diamonds. The review shows one expense at a time with its average amount, asking whether it counts as a want or a need; a later instance of the same review frames the same choice as self-investment against an ordinary purchase instead. After a handful of answers, Fortune City returns a finding naming which reviewed expenses it has marked as unnecessary, with a line stating that investing in yourself has the highest returns, and offers to continue the review, which leads to the subscription paywall. The Review tab shows the running want, need and uncategorized shares of all recorded expenses, uncategorized at 85 percent at one point, and states that continuing to track will let Fisher help with the review once he's found. An information panel beside the review explains the want-and-need method and states that using it can raise savings by as much as a stated percentage, citing two references.

### O25. The frequency challenge

A Frequency tab offers a challenge in which the mayor would choose categories to spend on less often, alongside a separate analysis of how often money is spent per category; both require the subscription. We did not start an instance of the challenge in this analysis.

---

## Goals and progression

Fortune City recognizes progress on several separate measures at once: a hundred named achievements, specific points crossed on prosperity and population, levels held by buildings and by the City Hall, and collections of characters, buildings and vehicles still to complete.

### O26. Achievement catalogue

Your City holds an Achievements tab listing 100 achievements in named groups, with two completed from the outset. Most groups are tiered series on a single measure, and each achievement carries a reward of three diamonds. Great Habits tracks the longest run of consecutive tracking days, at three, seven, fourteen, thirty and ninety. Mayor Certificates covers early milestones: the newbie tutorial, the first building, the first merge, the first friend, the first visit to a friend's city, and completing the City Management Guide. Chief Financial Officer is earned by unlocking all five council members' own collections. City Prosperity and Population Growth each run thirteen and seven badges respectively against their own running counts. A separate group rewards watching ads to help the salesman, from five to a thousand times. Further groups track category-specific expense counts, income records, coins collected, and sharing photos with friends, and a Best Apps group rewards installing the publisher's other apps.

### O27. Achievement unlock events

Fortune City announces each achievement as it's earned with a pop-up naming it, its criterion and its reward, with a share control on the pop-up. Several fired together after one recorded expense, since a single record can cross a prosperity threshold and complete a first building at the same time.

### O28. Prosperity and population

Fortune City maintains a prosperity number, shown as a badge in the top bar, and a citizen population count against a capacity. Prosperity rises with buildings and City Hall upgrades, which state directly how much prosperity they add, and the citizen information panel links happiness to prosperity.

### O29. Building levels

The Buildings tab in Your City lists building types by category, each with levels one through eight and a description of what reaching the next one takes. A merge moves a building up one level, and each level carries its own name and picture.

### O30. City Hall levels

The City Hall holds three separately levelled tracks, finance, economy and livelihood, all starting at level one, each priced in coins with a stated return: finance adds prosperity and coin storage, economy adds prosperity and a new vehicle, livelihood adds a new VIP citizen and more prosperity. When coin storage neared its cap, Kashi warned that storage was almost full and a pop-up routed the mayor to the finance upgrade, which was then bought. The Builders Hub holds its own level, governing daily building capacity, five at the current level and six at the next, priced in gems.

### O31. Character collections

Your City has a Characters tab with five named council members and forty VIP citizens, alongside separate Buildings and Vehicles tabs. Council members not yet found are shown in silhouette, with Fisher's profile stating that tracking expenses four days straight will find him. VIP citizens not yet obtained are shown as greyed, unopenable entries, with a message that upgrading the City Hall's livelihood level obtains them. Vehicles are obtained through the economy level, and the Vehicles tab lists both owned and still-to-come models. Each found council member opens a further collection of their own; Fisher's profile shows none of eight items unlocked yet, with an Unlock collections control leading to premium content, and tapping Kashi's own entry shows a message that returning weekly to check categories unlocks the next item in his collection.

---

## Access and eligibility

Fortune City splits what's locked into two separate systems: a set of finance features gated by the subscription, and a set of social and backup features gated by signing in, with some content gated by simple progress instead.

### O32. Subscription-locked features

Fortune City keeps recording, the city, and basic reporting open to everyone, and holds a set of finance features behind the subscription: budget reminders, new budget categories, continuing the expense review past its first few items, categorizing items in the review tab, comparing this month to last month, the frequency challenge and its analysis, records broken down by category and payment type, regular expenses, income, budget, and data export in settings. In the city, subscriber-exclusive themes and Fisher's collection unlock are locked the same way. Tapping any of these opens the paywall.

### O33. Sign-in-locked features

Several features require signing in with the developer's shared account: data backup, ranking, visiting friends, and an ads and experiences setting. The My Themes screen warns that without logging in, deleting the app permanently deletes all purchases, and offers a sign-in button. Declining the sign-in hand-off closes it without changing anything.

### O34. Citizen capacity gate

Fortune City states how many more buildings are needed before new citizens can be accommodated, a number that grows as the population grows, shown on the citizens surface and on visitors who can't yet join.

### O35. Fisher's four-day condition

Fortune City states that tracking expenses for four days straight will find Fisher, a council member, and the finance screens state that Fisher will help conduct the expense review once the mayor keeps tracking. Fortune City doesn't state whether Fisher's review help also needs the subscription.

### O36. VIP citizens and vehicles

VIP citizens are obtained by upgrading the City Hall's livelihood level, and vehicles by upgrading its economy level. Fortune City doesn't state the level value required for any individual VIP citizen or vehicle.

---

## Economy and resources

Fortune City runs two balances the mayor earns without paying, alongside a storage limit on one of them. This section covers coins, their spending and their cap, and diamonds, their sources and their uses.

### O37. Coins and storage cap

Coins are held in a balance shown against a storage cap, 1,500 at the outset with a starting balance of 1,016. They come from citizens' work, the daily reward and completed missions, and are spent on City Hall upgrades and building merges. When the balance approached its cap, Kashi warned that storage was almost full and a pop-up routed the mayor directly to the finance upgrade that raises it, in this case by 5,000. The finance level of the City Hall is the only stated route to raising the cap; Fortune City doesn't say what happens to coins earned once the cap is reached.

### O38. Diamonds as currency

Diamonds, also called gems, are a second balance, 43 at the outset and 87 later. They're earned from achievements, the expense review, missions, the salesman character and free-diamond ads, and sold directly in packs in the shop. They're spent on inviting visitors who don't join for free, at one diamond each, city themes at 300 diamonds, and the Builders Hub upgrade at 500 diamonds. The shop's free-diamonds offer stated three diamonds, while each ad actually watched paid one.

---

## Social

Fortune City's social layer sits entirely behind sign-in. No other identified person appears anywhere else in the app; citizens, visitors, council members and the salesman are all characters the app generates, not other users.

### O39. Ranking behind sign-in

The Ranking entry in the menu opens a sign-in request stating that logging in lets the mayor show off rankings and develop the city with friends. Fortune City doesn't state what measure a ranking would use, and we did not sign in to see one in this analysis.

### O40. Friends' cities behind sign-in

A Visit friends option requires sign-in to see which friends play. The achievement catalogue includes having a first friend and visiting a friend's city. Declining the sign-in closes the option, and we did not sign in to see a friend's city in this analysis.

---

## Reach beyond the app

Fortune City connects outward in three ways: a family of apps sharing its subscription and sign-in, a set of share controls scattered across its own achievements and buildings, and a handful of ordinary settings links.

### O41. The app family

Fortune City belongs to a family of apps from the same publisher, and connects to them in three places: the subscription, which also unlocks premium features in four sibling apps; a Fan Badges row in the shop that opens their App Store pages; and a Best Apps achievement group for installing them. Paywall lines state the specific benefit each sibling app unlocks, from unlimited plants to exclusive themes. Tapping a fan badge leaves Fortune City for the App Store, and sign-in uses the same shared account across the family.

### O42. Share routes

Fortune City puts a share control on achievement pop-ups, on new buildings from a merge, on the City Hall information panel, and on post office messages. The achievement share saves the pop-up as an image. A camera button in the top bar lets the mayor photograph the city, and a separate achievement group rewards sharing photos with friends. We did not complete a share in this analysis.

### O43. Tracking permission timing

The system prompt asking permission to track activity across other apps and websites appeared when the mayor tapped the first watch-an-ad offer, rather than at launch.

### O44. Settings and external links

Settings list a Help Center, Rate Us, the developer's website, and links to Instagram, X and Facebook, alongside account and backup, subscription status, the daily reminder time, display currency, a start date, a passcode lock, sound and music toggles, language, the ads and experiences setting, restore purchases, and the app version.

---

## Monetization

Fortune City's monetization runs on three tracks at once: the subscription paywall, a shop selling diamonds and starter bundles, and four rewarded-ad placements sitting alongside interstitials that pay nothing.

### O45. Subscription paywall

Tapping Enter the city at the end of onboarding opens the subscription paywall before the city is shown. The paywall lists city themes, a Chief Financial Officer tier of budgets, trends and advanced analytics, an ad-free experience, and premium features across every sibling app, leading with a 14-day free trial. Pricing shows a monthly option and an annual option presented as a monthly equivalent, marked as a stated percentage saving over the monthly price. The paywall is dismissible, and reappears from every locked finance feature, the review's continue step, subscriber themes, and a subscription card in the shop.

### O46. Shop and diamond packs

The shop opens with a banner promoting a limited pack that did nothing when tapped, then a subscription card, a starter package bundling diamonds with two City Hall upgrades, five diamond packs from $1.99 to $99.99, a free-diamonds offer, and Fan Badges. A line at the bottom states that any purchase removes ads other than rewarded ones forever. We did not make a purchase in this analysis.

### O47. Theme store

A themes section lists city themes, with subscriber-exclusive and limited-time options listed ahead of a longer list, some priced in diamonds and included with the subscription, others available only with the subscription. Opening a theme previews the city rendered in that style. My Themes shows the currently applied theme as never expiring, and carries a warning that purchases are lost if the app is deleted without signing in first. We did not buy or apply a theme in this analysis.

### O48. Rewarded ad placements

Fortune City attaches rewards to ads in four places: doubling the daily reward, free diamonds in the shop and the menu, helping the salesman, and free merges. The first ad offered no visible way to close except through the shop until a close control was found. The shop's free-diamonds offer allowed five ad views in a row without a limit appearing; the menu's free-diamonds offer stopped after two views, stating none remained for the day. Free merges are limited to a stated number remaining each day. After a reward, Fortune City offers a button leading to the shop.

### O49. Interstitial ads

Fortune City shows interstitial ads with no reward attached: one while browsing the shop, and one after claiming a mission reward, each preceded by a loading screen while the ad loads. Fortune City states that buying anything removes these ads other than the rewarded ones.

---

## Return triggers

Fortune City brings the mayor back on several separate clocks at once: a nightly reminder, a seven-day reward calendar, next-day building capacity, timed mission refreshes, and a welcome-back greeting each visit.

### O50. Seven-day daily reward

On arriving at the home screen, Fortune City shows a daily reward pop-up stating the day number, a coin amount, and how many days remain until a special gift on day seven, with an option to watch an ad and double the reward or decline. Day two's amount is hidden behind a question mark. Returning several days later showed the pop-up back at day one rather than continuing from where it left off, with the day-one amount differing between the two visits. Fortune City doesn't describe what the day-seven gift contains.

### O51. Daily reminder notifications

Fortune City offers a nightly reminder to record expenses, at 10 pm by default, first during onboarding and then as a daily reminder time in settings. We did not receive a notification during this analysis.

### O52. App rating prompt

After a recorded expense on a return visit, Fortune City asked whether the mayor loves Fortune City and invited a review on the App Store, with a single button leading to the review and no visible close control; tapping outside the pop-up closed it.

### O53. Consecutive-day tracking

Fortune City frames tracking in consecutive days in three places: the Great Habits achievements for days in a row, a displayed record of the longest consecutive run, one day early on, and Fisher's four-days-straight condition. Fortune City doesn't state what happens to the consecutive count after a missed day.

### O54. Weekly collection check

Kashi's collection states that returning weekly to check categories unlocks the next item. No weekly unlock occurred during this analysis.

### O55. Timed refreshes

Several states in Fortune City change with time: builders are stated to be available again the next day, completed missions are replaced after a wait of 59 minutes at the first level, work periods run for three hours, and on a return visit the city had gained new parks the mayor hadn't built directly. Free merges and free diamonds are both counted per day.

### O56. Welcome-back greeting

Kashi greets the mayor on arrival each visit, and the menu button carries a count of unread items, three at first and nine on a later return, when the menu showed four items under Your City and five under Post Office, plus a new Citizen Daily entry. Fortune City doesn't state what the Your City notifications refer to.
