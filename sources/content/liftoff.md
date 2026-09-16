# Liftoff

**Teaser:** Liftoff's exit offer promises "78% off forever" on a discount that actually runs about 50%.

Liftoff runs a strength-ranking system, Bronze through Diamond, assigned first from a self-reported rep count during onboarding and then extended by logged workouts. Daily, weekly and one-time quests pay a currency called eggs, which doubles as both an earned and a purchasable balance spent on consumables and cosmetics. A predicted date for reaching the next rank tier, a seven-day trial, and a same-day exit offer all sit on top of the same ranking system before the user has completed a single workout. Leagues, leaderboards and a Pro subscription then extend the ranking comparison to other users.

---

## System view

Liftoff is a complex system whose spine is the rank a user is assigned: the onboarding assessment sets the first rank, logged workouts and quests keep extending it, and that same ranking measure gates league access, frames the paywall, and anchors the leaderboards and social comparisons built on top of it.

---

## Mechanics

### Leveling

**Implementation summary:** Liftoff assigns a Bronze-to-Diamond rank per exercise and per muscle, first from a self-reported number, then from logged sets.

**What was observed:** Liftoff places every ranked exercise, and every muscle in the body rank, on an ordered ladder running Bronze, Silver, Gold, Platinum and Diamond, with numbered steps inside a tier such as Bronze 3. The first rank comes from a rep count the user reports during onboarding for one chosen exercise; further exercises gain a rank once a workout logs sets against them. Liftoff also shows a level with a progress bar beside the avatar on the home screen.

**How it is presented:** The rank ladder is explained across dedicated onboarding screens before the first workout, then lives in the Ranks tab alongside a body graph, leagues, a gallery, a calculator and analysis. The account level sits fixed at the top of the home screen, next to the avatar.

**What is worth noting:** Liftoff frames the rank ladder as the thing to act on, telling the user to target lower-ranked muscles to get stronger, and stages a screen showing the path all the way to Diamond before any workout is logged. The account level beside the avatar runs alongside the rank ladder without stating its own number, threshold, or what makes it move; the store's level borders are the only other place a level number could show up, and none is shown there either.

**Key findings:**

- The rank ladder runs Bronze, Silver, Gold, Platinum, Diamond, with numbered steps inside a tier.
- The first rank comes from a self-reported rep count during onboarding.
- Further exercises gain a rank once a workout logs sets against them.
- A level and a progress bar sit beside the avatar on the home screen, with no number stated.

**Screenshots needed:** the rank ladder explanation screen naming all five tiers, and the account level beside the avatar.

### Experience Points

**Implementation summary:** Claiming a quest or finishing a workout pays experience toward the level beside the avatar, with no amount ever shown.

**What was observed:** Liftoff states that claiming a quest grants experience points, and a store item, the Double XP Shake, is described as doubling experience gained during a workout. Both routes feed the same level shown with a progress bar beside the avatar on the home screen.

**How it is presented:** Experience isn't shown as its own balance anywhere; it surfaces only through the copy on quest claims and the shake's own description, and through the level progress bar it's presumed to advance.

**What is worth noting:** Liftoff never shows an experience amount, a level threshold, or a level changing, so what's confirmed is that two routes pay into the same value, not how much either one pays or what crossing a level actually does. The shake's claim to double the gain from a workout has nothing to double against, since no workout's own experience payout is ever shown either.

**Key findings:**

- Claiming a quest grants experience points.
- The Double XP Shake doubles experience gained during a workout.
- Both routes feed the level shown beside the avatar.
- No experience amount, threshold, or level change is shown at any point.

**Screenshots needed:** a quest claim stating its experience reward, and the Double XP Shake's item description.

### Achievement

**Implementation summary:** Liftoff keeps a medal collection on the profile, some with hidden criteria, and lets the user pin three.

**What was observed:** Profile holds a set of medals the user can collect, with some medals carrying criteria that stay hidden until met. The user can choose up to three medals to display on the profile.

**How it is presented:** Medals sit on the Profile tab as their own collection, separate from the badges awarded per exercise after a workout, with a display slot for three chosen medals.

**What is worth noting:** Liftoff builds real suspense into part of the medal set by hiding what earns them, but nothing shown says whether the account already holds any medal, what a medal's criterion looks like once revealed, or what happens on attainment. The display slot for three medals is the only part of the mechanic actually demonstrated.

**Key findings:**

- Medals sit on the profile as their own collection.
- Some medals have hidden criteria.
- The user can choose up to three medals to display.
- No medal attainment, criterion, or count is shown.

**Screenshots needed:** the medal collection screen, and the three-medal display slot on the profile.

### Daily / Weekly Quests

**Implementation summary:** Profile lists separate daily, weekly and referral quests, each claimed for eggs and experience.

**What was observed:** A quests surface on Profile groups tasks into daily quests, weekly quests and referral quests, including a quest to start a streak. Claiming a completed quest grants eggs and experience points.

**How it is presented:** The three quest groups sit together on one surface reached from Profile, with a claim action attached to each completed task.

**What is worth noting:** Liftoff names three separate cadences on one screen but doesn't show any individual quest's task, target, or reward amount, and doesn't show whether the set refreshes on a boundary or what a referral quest actually asks the introduced person to do.

**Key findings:**

- Quests are grouped into daily, weekly and referral quests.
- One quest asks the user to start a streak.
- Claiming a quest grants eggs and experience points.
- No individual quest's task, target, or reward amount is shown.

**Screenshots needed:** the quests surface showing all three groups.

### Challenge

**Implementation summary:** A first-day objective pairs adding the home screen widget with completing one workout for an unnamed reward.

**What was observed:** Liftoff sets a first-day objective, framed as wrapping up the first day on Liftoff to earn a special reward, with two tasks: adding the Liftoff widget to the home screen and completing a first workout.

**How it is presented:** The objective appears in a "Getting started" section on the home screen, listing both tasks together under the promised reward.

**What is worth noting:** Liftoff names the reward only as special, never disclosing what it is, and nothing shown says what happens if the first day passes without both tasks done. The widget task is also asked for on its own screen earlier in onboarding, so the objective repeats a step the user may have already completed before it's even framed as a task.

**Key findings:**

- The objective is framed as wrapping up the first day on Liftoff.
- Its two tasks are adding the home screen widget and completing a first workout.
- The reward is named only as special, never identified.
- The widget task is also requested earlier in onboarding, on its own.

**Screenshots needed:** the "Getting started" section showing both tasks and the reward line.

### Streak

**Implementation summary:** A flame count of one sits atop the home screen, next to store items sold to restore a broken streak.

**What was observed:** The home screen header shows a flame with a count of 1. Liftoff sells streak restorers in the store, described as being for when a user wants to restore their streak, and other users' streaks appear on their posts in Discovery.

**How it is presented:** The flame sits in the header at the top of the home screen, visible on every visit; the restorers are a separate line item in the store, and a quest task offers to start a streak.

**What is worth noting:** Selling a restorer is Liftoff's own admission that the count can break, since nothing needs restoring if it can't, but nothing shown states what activity the streak counts, what period it runs on, or what breaks it. The count of 1 could describe a single qualifying day or a single qualifying week; the app doesn't say which.

**Key findings:**

- The home header shows a flame with a count of 1.
- Streak restorers are sold in the store.
- Other users' streaks appear on their Discovery posts.
- A quest task offers to start a streak.
- The qualifying activity, period, and break rule are not stated.

**Screenshots needed:** the home header flame, and the streak restorer in the store.

### Soft Currency

**Implementation summary:** Completing a quest is the earned route into eggs, the balance the store also sells for real money.

**What was observed:** Liftoff grants eggs for claiming a completed quest, on daily, weekly and referral cadences. The user held enough eggs from quests alone to buy a Double XP Shake in the store without any money purchase.

**How it is presented:** The egg grant appears as part of the same claim action that pays experience, on the quests surface reached from Profile; the store where eggs are spent has no separate label distinguishing quest-earned eggs from purchased ones.

**What is worth noting:** Eggs work as one balance no matter how they arrive, quest-earned or bought outright, which is also covered under Hard Currency for the purchasable side of the same balance. Liftoff never shows a balance figure or a claim amount, so what a quest actually pays into the balance isn't shown, only that it pays something.

**Key findings:**

- Claiming a quest grants eggs, on daily, weekly and referral cadences.
- Eggs earned from quests alone paid for a store purchase, with no money spent.
- No claim amount or balance figure is ever shown.
- The same balance is also sold directly for money.

**Screenshots needed:** a quest claim showing the egg grant, and the store purchase made with quest-earned eggs.

### Hard Currency

**Implementation summary:** The same eggs quests pay out are also sold directly in packages from $0.99 to $99.99.

**What was observed:** Liftoff's store sells eggs for money in packages from 100 eggs for $0.99 up to 14,000 eggs for $99.99. The same eggs are spent on consumables, cosmetics and a 10-egg deal refresh in the same store.

**How it is presented:** The egg packages sit in the store as a direct purchase option, priced in real money, alongside the same spend surfaces that quest-earned eggs draw from.

**What is worth noting:** The largest package gives noticeably more eggs per dollar than the smallest, about 140 against about 101, which rewards buying in bulk. Since quests pay into the identical balance a shopper can buy directly, Liftoff never has to show the two routes as different currencies, and it doesn't.

**Key findings:**

- Egg packages range from 100 eggs for $0.99 to 14,000 eggs for $99.99.
- The largest package gives about 140 eggs per dollar against about 101 for the smallest.
- Eggs bought for money spend in the same store as quest-earned eggs.
- No separate balance or label distinguishes purchased eggs from earned ones.

**Screenshots needed:** the egg package store screen showing both ends of the price range.

### Reward Multiplier

**Implementation summary:** A store item consumed during a workout doubles the experience that workout pays, bought with eggs.

**What was observed:** The Double XP Shake is a store item, bought with eggs, described as doubling experience gained during a workout and consumed on use. It's chosen at the start or end of a workout, alongside other consumables, and lands in an inventory once bought.

**How it is presented:** The shake sits in the store's consumables section next to other XP shakes, with its doubling effect and one-time consumption stated directly in its own item description.

**What is worth noting:** Everything the shake does happens to a number Liftoff never shows: no workout's experience payout is stated with or without the shake, so the doubling is a claim about a figure the app keeps invisible on both sides. The shake changes only that payout, not the workout itself, which is what separates it from a held item that changes what happens during play.

**Key findings:**

- The Double XP Shake is bought with eggs and consumed on use.
- Its stated effect is doubling experience gained during a workout.
- It's chosen at the start or end of a workout.
- No experience amount is shown with or without the shake applied.

**Screenshots needed:** the Double XP Shake's store listing and item description.

### Cosmetic Customization

**Implementation summary:** Eggs buy profile banners, borders, and app themes, on top of an avatar editable after onboarding.

**What was observed:** The store sells profile banners, several border types including cosmic, elemental and level borders, and several theme types including prismatic, color, special and seasonal themes, all priced in eggs. Profile also offers further avatar editing beyond the six starting options chosen during onboarding.

**How it is presented:** Cosmetics sit in the store as their own category, separate from consumables, while avatar editing is reached from Profile rather than the store.

**What is worth noting:** Liftoff sells cosmetics rather than unlocking them through play; every border and theme listed sits behind an egg price, not a rank or level crossed. Level borders are the one item named after a progression measure, but nothing shown ties owning or wearing one to an actual level reached, so it reads as a themed store item rather than a status attached to progress.

**Key findings:**

- The store sells profile banners, several border types, and several theme types.
- All listed cosmetics are priced in eggs.
- Avatar editing continues on Profile after the initial onboarding choice.
- Level borders are named after a progression measure but not shown tied to an actual level.

**Screenshots needed:** the store's cosmetics category listing borders and themes.

### Social Feed

**Implementation summary:** Discovery streams other users' workout posts, avatars and streaks, alongside separate For You and Friends feeds.

**What was observed:** Home carries three labeled feeds: For You, Friends and Discovery. Discovery shows posts from multiple users carrying images, avatars, workout durations and streaks, with a report control on each post. Finished workouts can be posted into Discovery from the workout-completion flow.

**How it is presented:** All three feeds sit on the home screen under their own labels; Discovery is the only one described beyond its name.

**What is worth noting:** Liftoff runs three feeds side by side but only demonstrates one of them, so what For You and Friends actually surface, and what orders any of the three, stays unstated. The report control on Discovery posts is the one piece of moderation infrastructure shown anywhere in the social layer.

**Key findings:**

- Home carries three labeled feeds: For You, Friends and Discovery.
- Discovery shows posts with images, avatars, workout durations and streaks.
- Posts in Discovery carry a report control.
- Finished workouts can be posted into Discovery.
- For You and Friends are not described beyond their labels.

**Screenshots needed:** the Discovery feed, and the three-feed layout on Home.

### Leaderboard

**Implementation summary:** Rank standings compare the user against friends and everyone globally, with a regional view held for Pro.

**What was observed:** The Ranks area shows rank standings on leaderboards with a friends scope and a global scope, plus a regional scope held for Liftoff Pro. Friends leaderboards are also listed on the Friends tab.

**How it is presented:** The leaderboard scopes sit together in the Ranks area, with the regional scope opening a Pro prompt instead of a standing when tapped.

**What is worth noting:** Liftoff shows that a comparison exists in three scopes without showing what it orders users by or where the user themselves lands in it; the rank ladder is the most likely candidate for the measure, but nothing on screen states it directly. Pro's regional scope is priced on access to a standing the free scopes never reveal either.

**Key findings:**

- Leaderboards run in friends, global and Pro-only regional scopes.
- Friends leaderboards also appear on the Friends tab.
- The measure the leaderboard orders by is not stated.
- The user's own position on any leaderboard is not shown.

**Screenshots needed:** the friends and global leaderboard scopes, and the regional scope's Pro prompt.

### Progression Gate

**Implementation summary:** Ranked leagues stay closed until the user has ranked ten separate exercises through the app's own systems.

**What was observed:** Liftoff states that ranked leagues require the user to rank 10 exercises, a count that advances through the onboarding assessment and through logged workouts. The requirement is stated inside the Ranks tab, where leagues are listed.

**How it is presented:** The 10-exercise requirement appears as a stated line inside the Ranks tab, next to the leagues it gates.

**What is worth noting:** The gate's condition is built entirely from the same ranking activity the rest of the app already asks for: ranking an exercise once counts toward leagues whether it happened during onboarding or in a logged workout since. Nothing shown displays a running count toward the ten, so a user has no way to see how close they are without opening the gated leagues screen itself.

**Key findings:**

- Ranked leagues require ranking 10 exercises.
- The count advances through the onboarding assessment and logged workouts.
- The requirement is stated inside the Ranks tab.
- No running count toward the ten is shown.

**Screenshots needed:** the Ranks tab showing the 10-exercise leagues requirement.

---

## Onboarding and first run

A language choice, a guided questionnaire, a first rank assessment, a paywall and its exit offer, and account creation all run before Liftoff's first unguided screen.

### O1. Language choice at launch

On first launch, Liftoff shows a front screen with a Get Started button and an option to sign into an existing account, along with an immediate language choice offering ten languages.

### O2. Introductory slider

After Get Started, Liftoff shows a four-part slider with Skip and Next controls. The slides cover reaching fitness goals by climbing ranks, analyzing the body's potential, a personalized workout plan, and Liftoff as an all-in-one fitness companion, ending on a Let's Go button.

### O3. Guided questionnaire host

After Let's Go, an animated character named Jimbo introduces the questionnaire that follows, with a progress bar running along the top of each screen and answers chosen from button options. The progress bar covers a required flow rather than an optional set of attributes.

### O4. Experience level question

The first question asks how experienced the user is with working out, offering never worked out, beginner, intermediate or advanced.

### O5. Top fitness goal question

Liftoff asks for the user's top fitness goal, offering becoming stronger, losing weight, building muscle, an option framed around ranks, and becoming more consistent.

### O6. Goal-matched reassurance screen

After the goal question, Liftoff shows a screen reading that the user is in the right place, with copy that changes depending on the goal chosen. Two of the goals also show a five-star review matching that goal. The rank-option screen frames Liftoff as the way to step into ranked lifting, without a review shown alongside it.

### O7. Restarting the questionnaire

Going back from the reassurance screen opens a warning that the user will return to the landing page and lose progress. Taking that route restarts the whole questionnaire from its first question, with the goal options appearing in a different order on the restart.

### O8. Acquisition source question

After the reassurance screen, Liftoff asks how the user came to hear of it, offering friends or family, TikTok, Instagram, Facebook, YouTube, Snapchat, the App Store, or another source.

### O9. Body information and age

Under a basic-info heading, Liftoff asks for sex, height, weight and age on separate screens. Sex is chosen between two illustrated characters that change pose with a thumbs up once picked. Height is set on a fast vertical slider and shown in centimeters, while weight is then asked in pounds. The age selector runs from 13 to 120.

### O10. Avatar introduction and selection

Liftoff introduces an avatar through a short sequence of copy describing it as a reflection of the user that grows and celebrates wins, then asks the user to pick one of six starting avatars of different ethnicities and ages, stating it can be personalized later.

### O11. Profiling questions

Liftoff asks further questions about mindset, sensitive areas and energy during workouts: how often the user thinks about getting in shape, whether they struggle with a sensitive back, knees, shoulders or wrists, and how their energy levels run during workouts.

### O12. Relate-to-statement screens

Liftoff shows three screens each asking whether the user relates to a single first-person statement: that progress is hard to notice, that they don't know which body part needs work, and that they don't push themselves hard enough.

### O13. Problem screens

After the statements, Liftoff shows three screens naming a difficulty, invisible progress, blind spots from not knowing which muscle is lagging, and motivation not lasting, each with an illustrated character in a struggling pose, followed by a screen presenting Liftoff ranks as the path to getting stronger. The first problem screen names the same progress difficulty regardless of which statement the user had related to.

### O14. Workout plan and equipment

Liftoff asks whether the user has a workout plan, then where they exercise: a large commercial gym, a small gym, a garage gym, or body weight only. Choosing a large commercial gym opens an equipment list with everything preselected; choosing body weight only opens the same list with nothing selected, while dozens of weights and machines stay listed regardless.

### O15. Workout length and frequency

Liftoff asks which muscles were worked last, how long a typical workout lasts, and how many times a week the user works out, with the frequency answer receiving an evaluative label such as good, great, incredible, outstanding or unstoppable depending on the number of days chosen.

### O16. First rank assessment

After stating that Liftoff has everything it needs for a first rank, it asks for the user's best lift, taking an exercise and a rep count. The user is offered push ups, pull ups, bench press, deadlift or squat, and can enter a rep count for one. Liftoff takes an exercise and a rep count for the first rank test; the exercise chosen appears as pull ups, and the loaded result names the exercise as push ups, with a rank of Bronze 3 and a stated top 76.23 percent.

### O17. Predicted date for gold

Liftoff states a predicted date for reaching gold, about two months out from the assessment, beside a graph rising sharply from the present to that date. The copy that follows calls ranks a direct way to measure progress. No assumption behind the date, such as a training frequency or rate of improvement, is stated, and the prediction is not shown again later.

### O18. Setup loading sequence

Liftoff shows a setup screen with loading steps reading compiling user profile, calculating strength levels and generating body rank, with laurels beneath showing a 4.9 rating from a large number of people.

### O19. Body rank explanation screens

Liftoff explains the body rank across three screens before the paywall: how strong each muscle is shown to be, that performing different exercises fills up the body rank, and a screen showing how the user will progress all the way to Diamond, naming the tiers Bronze, Silver, Gold, Platinum and Diamond.

### O20. Apple Health connection request

After the paywall and its exit offer close, Liftoff asks to connect Apple Health, recommending the user turn on every category, and states that fitness data will stay securely stored on the device. Every category in the system permission sheet starts switched off.

### O21. Account creation and welcome

Liftoff asks the user to sign up to save their profile, offering sign up with Apple, sign up with Google, or continue with email, then greets the new account by a generated username combining the account holder's first name and a number. Jimbo celebrates the created profile before a Strava link prompt appears ahead of the main app opening.

### O22. First home screen

The first unguided screen is Home, holding a six-item bottom menu for Home, Workout, Ranks, Nutrition, Friends and Profile, a header with the avatar, a flame, a number beside a blue icon, and a bell, three feeds, a prompt to unlock body rank progress for free, a getting-started section, a goal section, a last-14-workouts overview, and a discover section listing a leaderboard, a social feed, a streak calendar and a workout generator.

### O23. Welcome quests

The Home getting-started section shows welcome quests framed as wrapping up the first day on Liftoff to earn a special reward, listing adding the Liftoff widget to the home screen and completing a first workout as the two tasks. The reward itself is not identified.

---

## Core loop and automation

The Workout tab runs logging, posting and history alongside a Nutrition tab for meal logging.

### O24. Workout tab entry points

The Workout tab offers a daily workout, custom workout generation, saved routines and an empty workout. Today's workout was Chest and shoulders, 12 sets, 45 minutes. A workout generator also appears on Home under discover.

### O25. Workout preview

Before a workout starts, Liftoff shows its duration, a level, the equipment used, recovered muscles, targeted muscles with percentages, and the exercise list, with knee push ups, wall push ups, body weight military press and knee pike push ups listed for this workout. The workout can be started directly from the preview.

### O26. Logging a workout

During a workout, the user taps a check mark to complete each set while a timer runs, and a rest countdown of one and a half minutes starts once an exercise is completed. Liftoff reminds the user to rest between sets, additional sets can be added to an exercise, and the timer keeps counting through the whole workout.

### O27. Posting a finished workout

Finishing a workout opens a posting surface where the user can add a photo and caption, choose consumables, tag friends, and post to Discovery and to Strava, showing which muscles were trained before asking whether the user is ready to finish and post. Consumables can also be chosen before the workout starts.

### O28. Post-workout summary

After posting, Liftoff shows a nice-workout message with duration and total volume in kilograms, then a summary, then exercise rank badges loaded one at a time, before returning to the Workout tab with the next day's workout, Back and shoulders, named and ready.

### O29. Quests surface on Profile

Profile holds a quests surface with daily quests, weekly quests and referral quests, including a quest to start a streak. Claiming a quest grants eggs and experience points.

### O30. Nutrition logging

The Nutrition tab lets the user log meals, including by photo, against a calorie goal, showing calories eaten and calories burned through exercise. Meal categories are Breakfast, Lunch, Dinner, Snack and Uncategorized. Logging a meal by photo is available without payment, while macros for protein, carbs and fat are held for Liftoff Pro.

### O31. Training history displays

Liftoff shows the user's own training history in three places: a last-14-workouts overview on Home showing volume, duration, calories burned and body weight pulled from Apple Health; a memories calendar showing the avatar on a date with how much was exercised; and a health log showing changes in body weight, height and other measures. None of these displays asks for a response from the user.

---

## Goals and progression

The Ranks tab holds the strength ladder and its supporting surfaces; Profile carries the account level, medals and home-screen goal setting.

### O32. Strength rank ladder

Liftoff ranks strength per exercise and per muscle on an ordered ladder of Bronze, Silver, Gold, Platinum and Diamond, with numbered steps inside a tier such as Bronze 3. The Ranks tab gathers the user's rank, a body graph, leagues, a gallery, a calculator and analysis. The first rank comes from a self-reported rep count during onboarding, and a percentile accompanied that first result. The body rank is framed as showing how strong each muscle is, with the user directed to target lower-ranked muscles.

### O33. Exercise rank badges

After the workout summary, Liftoff loads a rank badge for each exercise performed, reading "Knee pushups. Bronze. Bring it on," then loads the next for wall push ups. The ranks shown are for exercises not ranked during onboarding.

### O34. Account level and experience

The Home header shows the avatar with a level and its progress. The store sells level borders. Quest claims grant experience points, and the Double XP Shake doubles experience gained during a workout.

### O35. Medals

Profile holds medals, and the user can choose up to three to display on the profile. Some medals are secret, with their criteria hidden.

### O36. Home screen goal setting

A "Your goal" section on Home invites the user to challenge themselves by adding a strength goal, a body weight goal or a consistency goal.

---

## Access and eligibility

A ranked-leagues requirement and a set of features held for Liftoff Pro make up this section.

### O37. Ten exercises for leagues

Liftoff states that the user needs to rank 10 exercises to take part in ranked leagues, a requirement stated in the Ranks tab where leagues are listed. Exercises gain ranks through the onboarding assessment and through logged workouts. The account stayed below the ten-exercise threshold, and the leagues surface itself never opened.

### O38. Features held for Pro

Several surfaces are held for Liftoff Pro: full body rank analysis, standing within the user's region on the leaderboard, macro tracking, and Pro-exclusive store deals. Liftoff states that Pro is needed to see where the user stands compared to their region. The Pro prompt from Home also lists workout training and unlimited routines and exercises among its features. Photo meal logging stays available without payment.

---

## Economy and resources

Eggs are Liftoff's one named currency, earned through quests, spent in the store, and also sold directly for money.

### O39. Eggs balance

Liftoff's store names eggs as its currency. Eggs are granted when a quest is claimed and spent in the store; they are also sold for money. The Home header shows a blue icon beside the number 200. No egg balance figure is shown before or after the purchase made.

### O40. Store items and deals

The Liftoff store, reached from Profile, offers consumables, cosmetics and deals. Deals can be refreshed by spending 10 eggs. Consumables include XP shakes such as the Double XP Shake, and streak restorers. Cosmetics include profile banners, cosmic borders, elemental borders, level borders, prismatic themes, color themes, special themes and seasonal themes. Pro-exclusive deals open a Pro prompt.

### O41. Double XP Shake item

Items bought in the store appear in an inventory. The Double XP Shake states that using it during a workout doubles experience gain, and that the item is consumed upon use. The shake was bought with eggs, and consumables are chosen at the start or end of a workout.

---

## Social

Home carries three feeds, and the Ranks and Friends tabs carry leaderboards and other users' profiles.

### O42. Three home feeds

Home carries three feeds labeled For You, Friends and Discovery. In Discovery, other users post images, their avatars, workout durations and streaks, and a post can be reported. Finished workouts can be posted to Discovery. The For You and Friends feeds are not described beyond their labels.

### O43. Leaderboards and other profiles

The Ranks area shows rank standings on leaderboards with friends and global scopes, plus a regional scope held for Pro. Other users' profiles can be opened, showing their successes, ratings and ranks. Friends leaderboards are also listed on the Friends tab.

### O44. Friends surfaces

The Friends tab lets the user show their body rank and muscle ranks, invite friends, send friends a notification, and view friends leaderboards. Friends can also be tagged in a workout post.

### O45. Profile presentation

Profile lets the user edit the avatar further and includes a reactions area for setting how the user's name looks and adding emoji reactions. Profile also lists routines, exercises, the health log, the inventory and memories, with up to three medals displayed there.

---

## Reach beyond the app

A Strava link prompt and referral invitations are Liftoff's two routes outside the app.

### O46. Strava link prompt

After the welcome screen and before the main app, Liftoff shows a pop-up offering to link the Liftoff and Strava accounts to share workouts across platforms, with a choice to link or not. The workout posting surface also offers posting to Strava directly.

### O47. Invitations and referrals

Liftoff offers invitations and referrals from the Friends tab and lists referral quests among its quests. What the invited person must do, and what the inviting user receives, is not stated.

---

## Monetization

A seven-day trial, a same-day exit offer and several Pro prompts run across onboarding, the store and the home screen.

### O48. Trial introduction screen

After the body rank explanation, Liftoff states that it offers 7 days free so everyone can get ranked, over a scrolling row of other users' muscle and muscle group rankings, with a "Try for free" button.

### O49. Trial-end reminder choice

After choosing to try for free, Liftoff asks when it should notify the user before the trial ends, offering two days before or three days before, and requires a choice to continue.

### O50. Plan selection paywall

The paywall reads "Start getting stronger today with your free 7-day trial," showing a timeline with a reminder in five days and billing starting in seven, and preselects the free trial. The other option is a 30-day trial for $1.99. The full price appears under the start button: free access for seven days, then $79.99 per year, stated as $6.67 per month. The screen states the user can cancel any time before billing.

### O51. Exit one-time offer

Closing the paywall opens a one-time offer headed "78% off forever": a yearly plan for $39.99, stated as $3.33 per month, with the seven-day free trial included. Closing the offer leads to the Apple Health request.

### O52. Pro upsell from body rank

Tapping the Home prompt to unlock body rank progress for free explains that the user can analyze their full body and target the right muscles with their Liftoff body rank, then asks the user to get Liftoff Pro.

### O53. Pro prompt from store deals

Opening a Pro-exclusive deal in the store opens a screen stating that Pro members become 40% stronger on average, and lists the features Pro unlocks.

### O54. Egg packages priced in money

The store sells eggs for money in packages ranging from 100 eggs for $0.99 to 14,000 eggs for $99.99. The largest package gives more eggs per dollar than the smallest, about 140 against about 101.

---

## Return triggers

A notification opt-in, a widget prompt, a rating request and the streak all run before or alongside the first workout.

### O55. Workout preview notifications

After the frequency question, Liftoff asks whether the user wants workout previews on active days, showing a mock-up of the notification and a time selector. Choosing to be reminded triggers the system notification permission request, with Maybe Later also offered.

### O56. Home screen widget prompt

Liftoff shows a screen offering to support the user from their home screen, with a preview of its widgets and Maybe Later and Next options. Next walks through adding a widget, starting with pressing and holding anywhere on the home screen. Adding the widget is one of the welcome quest tasks.

### O57. Rating prompt during setup

During the setup loading sequence, below the 4.9 rating laurels, Liftoff prompts the user to rate the app, before the user has seen an exercise or reached the paywall.

### O58. Streak indicator and restorers

The Home header shows a flame with the number 1, the store sells streak restorers, and a quest invites the user to start a streak. Posts in Discovery show other users' streaks. The Home discover section also lists a streak calendar. The qualifying activity, the period, and the rule that breaks a streak are not stated.

### O59. Home header bell

The Home header carries a bell. The bell was not opened.
