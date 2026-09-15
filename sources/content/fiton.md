# FitOn

**Teaser:** Two of the five screens pushing FitOn's 70% Pro discount are videos the app doesn't let the user skip or decline.

FitOn is a free workout app organized around a single video-based workout player, wrapped in an onboarding funnel that asks for a goal, a level, a schedule and a set of community groups before the plan even builds. Everything else in the app sits before or after that workout: a stated intention and a synced calendar entry lead into it, and a summary, a camera composer, a mandatory rating and a subscription offer follow it. A badge catalogue, a weekly streak and a workout-count threshold recognize activity that stays at zero throughout, and a separate library of fitness, nutrition, wellness and self-care articles sits beside the workouts rather than inside them. A single Pro offer at 70% off repeats across five separate surfaces.

---

## System view

FitOn is a medium-complexity system whose spine is the completed workout: a video player sits at the center, with everything else placed either before it, as a stated return-time intention and a synced calendar entry, or after it, as a summary, a camera composer, a mandatory rating and a subscription offer. A badge catalogue and a weekly streak recognize activity read off the same workout count and weekly goal that stay at zero throughout, a separate article library sits alongside the workout catalogue rather than gating it, and a community layer of joined groups feeds the one social feed the app runs.

---

## Mechanics

### Achievement

**Implementation summary:** FitOn states each badge's exact criterion up front, in a catalogue grouped into six named categories, with none seen changing state.

**What was observed:** FitOn keeps its badges in an achievements catalogue reached from the foot of the profile through a see-all control, grouped into workout milestones, event milestones, streaks, workout mastery, bests and challenges. Tapping any badge shows what it means and how it is earned before it is ever attained. Seize the Day is awarded for completing a workout before 7am for the first time, Roar On for completing 50 workouts on FitOn, and We're on Fire for the longest streak of weeks reaching the weekly workout goal.

**How it is presented:** The catalogue sits at the bottom of the profile tab, opened with a see-all control, and each badge discloses its own criterion on tap rather than staying hidden until it is met.

**What is worth noting:** All three badges shown state their criteria rather than anything FitOn shows attained: no badge is shown changing from unattained to attained. FitOn keeps We're on Fire under its own "streaks" category heading while treating Roar On as a distinct threshold rather than folding it into the wider catalogue, which is why Milestone and Achievement split the same catalogue between them rather than one covering all three badges.

**Key findings:**

- Six badge categories are named: workout milestones, event milestones, streaks, workout mastery, bests and challenges.
- Seize the Day is awarded for a workout completed before 7am for the first time.
- Roar On is awarded at 50 workouts completed on FitOn.
- We're on Fire is awarded for the longest streak of weeks reaching the weekly workout goal.
- No badge is shown changing from unattained to attained.

**Screenshots needed:** the achievements catalogue with its six categories, and a badge's own criterion screen.

### Milestone

**Implementation summary:** FitOn recognizes 50 completed workouts as its own named badge, separate from the profile's own running workout count.

**What was observed:** The profile shows a running count of workouts completed, alongside calories spent, a calendar, the week's activities and a progress area for photos and weight. Reaching 50 of those workouts earns Roar On, a badge in the achievements catalogue stated against that same profile count.

**How it is presented:** The profile displays the ongoing count on its own, with Roar On surfacing separately in the achievements catalogue reached from the foot of the same screen, where it discloses its 50-workout criterion on tap.

**What is worth noting:** FitOn keeps Roar On on its own criterion, distinct from the wider catalogue Achievement covers, because it reads as a stated point within the profile's own ongoing workout count rather than a standalone target. Nothing shows the count approaching 50 or the badge changing state.

**Key findings:**

- The profile displays a running count of completed workouts.
- Roar On is awarded once that count reaches 50.
- Roar On's criterion is disclosed on tap, before it is met.
- The badge is not shown changing state.

**Screenshots needed:** the profile's workout count, and the Roar On badge's criterion screen.

### Streak

**Implementation summary:** A streak control opens a weekly progress screen reading zero out of two workouts, with FitOn inviting the user to start one.

**What was observed:** FitOn surfaces a streak by name on the post-workout summary, on the For You tab and at the top of the home screen, where it reads "Start today to start the streak." The weekly progress screen it opens shows exercise at zero out of two workouts as the weekly goal, with no streak value shown. The We're on Fire badge states the streak's unit directly: the longest run of weeks in which the user reaches that weekly workout goal.

**How it is presented:** The streak sits at the very top of the home screen, ahead of everything else on the screen, and opens the weekly progress screen on tap. The same figure repeats on the post-workout summary and on the For You tab.

**What is worth noting:** The badge criterion is the clearest statement FitOn gives of what the streak actually counts: reaching the weekly goal, not simply opening the app. FitOn calls it a streak while showing no run above zero and no continuity rule, such as what a missed week does to the count, so the visible mechanic is the invitation to begin rather than any streak already running.

**Key findings:**

- The streak sits at the top of the home screen, reading "Start today to start the streak."
- The same streak also appears on the post-workout summary and the For You tab.
- The weekly progress screen shows the weekly workout goal at zero out of two.
- We're on Fire is awarded for the longest run of weeks reaching that goal.
- No streak value above zero is shown.

**Screenshots needed:** the home screen streak control, and the weekly progress screen showing the goal at zero of two.

### Expert Guidance

**Implementation summary:** A four-subject article library sits beside FitOn's workout catalogue, reachable and readable without ever starting a workout.

**What was observed:** FitOn's Advice tab divides its articles into fitness, nutrition, wellness and self-care, with dozens of pieces under each subject. The subjects concern the user's own practice rather than how FitOn itself works, and a workout can be started without ever opening the tab.

**How it is presented:** Advice sits as its own tab alongside Workouts, Meals and Friends, reached directly from the home screen's main menu rather than surfaced inside any other flow. One prompt inside the articles asks the user to follow FitOn on Instagram for daily inspiration.

**What is worth noting:** FitOn keeps this library structurally separate from the activity it advises on: nothing in the workout flow points to an article, and nothing in an article points back to a specific workout. Courses from named presenters on subjects like fall prevention and better sleep sit on the Workouts tab rather than in Advice, so the library's boundary runs by subject matter rather than by tab alone.

**Key findings:**

- Articles are organized under fitness, nutrition, wellness and self-care.
- Dozens of articles sit under each subject.
- A workout can be started without opening the Advice tab.
- One prompt inside the articles asks the user to follow FitOn on Instagram.

**Screenshots needed:** the Advice tab's four subjects, and an open article.

### Group Membership

**Implementation summary:** FitOn asks the user to join named topic groups partway through onboarding, before any workout or plan is shown.

**What was observed:** FitOn presents groups organized under Food, Journey, Lifestyle and Activity during onboarding, each with specifically named entries such as Intermittent Fasting Club, Newbies and 30s Club, and asks the user to join. The same groups return later in the Friends tab, split between the ones the user belongs to and a set of suggested groups with their own join controls, and the feed below them draws from whichever groups the user has joined.

**How it is presented:** Groups first appear as an onboarding screen, without any workout or plan shown yet, and reappear later inside the Friends tab, alongside a feed of the questions and posts from joined groups.

**What is worth noting:** FitOn presents its full community structure, split into four named topic areas, before it has shown the user a single workout, and joining is a plain control with no approval step. Membership is what determines the feed content that follows: the questions and posts a user sees in the Friends tab come only from the groups they've joined, not from FitOn's community at large.

**Key findings:**

- Groups are organized under Food, Journey, Lifestyle and Activity.
- Named groups include Intermittent Fasting Club, Newbies and 30s Club.
- Joining a group requires no approval step.
- The Friends tab distinguishes groups the user belongs to from suggested groups.
- The feed below the groups draws only from groups the user has joined.

**Screenshots needed:** the onboarding groups screen, and the Friends tab's group list with the feed beneath it.

### Social Feed

**Implementation summary:** The Friends tab runs one feed combining friends' workouts with questions and posts from the user's joined groups.

**What was observed:** The Friends tab carries a feed of workouts other people have done, alongside a separate feed of the questions and posts from the groups the user belongs to. Items in the workout feed can be clapped, commented on or shared. FitOn prompts the user to add friends more than once, both directly in the Friends tab and every time a live class is joined.

**How it is presented:** Both feeds sit in the Friends tab, the workout feed above the group feed, with clap, comment and share controls attached to each workout entry.

**What is worth noting:** FitOn built two feeds into one tab, but only the group feed had any content to draw on: no friend appears connected, so the workout feed carries nothing while the group feed still shows the questions other members post. The prompts to add friends repeat across the Friends tab and every live-class join, without stating what connecting or inviting actually gets the user.

**Key findings:**

- The Friends tab carries a workout feed and a separate group feed.
- Workout feed entries can be clapped, commented on or shared.
- No friend appears connected, leaving the workout feed empty.
- The group feed shows questions and posts from joined groups.
- FitOn prompts the user to add friends in the Friends tab and on every live-class join.

**Screenshots needed:** the Friends tab with both feeds, and the add-friends prompt.

### Commitment

**Implementation summary:** FitOn writes "I will open this app and work out" at a time the user sets, rewriting it live as the time changes.

**What was observed:** FitOn presents a first-person sentence, "At 8am I will open this app and work out," and rewrites the whole sentence as the user changes the time, changing for example to "At 7:45am I will open this app and work out." FitOn states that completing the sentence is backed by scientific research showing it helps people build a workout habit, without naming a source. The user confirms with "Let's do this," or skips.

**How it is presented:** The sentence appears on its own screen straight after the contacts step and before the calendar-sync request, with the time as the only element the user sets and the rest of the sentence fixed around it.

**What is worth noting:** FitOn ties the statement to the user's own future action, opening the app and working out, rather than to any target chosen earlier, such as the weekly workout frequency asked a few screens before, and the sentence doesn't restate that frequency. The step can be skipped, and nothing that follows shows the sentence again.

**Key findings:**

- The sentence reads "At 8am I will open this app and work out."
- Changing the time rewrites the whole sentence.
- FitOn cites unnamed scientific research for the step's benefit.
- The user confirms with "Let's do this" or skips the step.
- The sentence does not restate the weekly workout frequency chosen earlier.

**Screenshots needed:** the intention-sentence screen with its default time, and the same screen after the time is changed.

---

## Onboarding and first run

FitOn's onboarding opens with two system permission requests before any screen, then account creation, a personalization funnel, a generated plan, three separate paywalls and the first guided workout.

### O1. Two permission prompts

Before any FitOn screen appears, a system prompt asks whether to allow notifications, followed by a second asking whether FitOn may track the user's activity across other companies' apps and websites. Both requests arrive before FitOn has shown any content or stated what it offers.

### O2. Free-first welcome screen

FitOn's first screen reads "FitOn Premium Workouts, Always free," with a Get Started control and a login option for an existing account. FitOn later sells a Pro plan whose stated contents include a personalized workout program, meal plans, offline downloads and premium music.

### O3. Email-only account creation

FitOn creates an account from a name and an email address only, with no option to sign in through Gmail, Apple or another provider. The account exists before any personalization question is asked.

### O4. Body data screen

FitOn opens with "Let's personalize your program," then asks on one screen for gender, date of birth, height and weight, framed as inputs to a program rather than as account details. No prompt to connect Apple Health or another health source appears at this point.

### O5. Goal selection panels

"What's your goal?" offers lose weight, be more active, gain muscle, stay toned and reduce stress. Gain muscle and stay toned both open a graph running from beginner to intermediate to advanced, stating that the amount of muscle a user can build depends on their lifting experience and that FitOn will guide them with a personalized plan. Be more active and reduce stress both open a panel stating that people active under 30 minutes a week are unhappy, that people active more than three hours a week are very happy, and that being active more than three hours a week is tied to a 20 to 30% reduction in risk of depression, plus reduced stress and anxiety. FitOn does not state a source for these figures. Tapping a selected goal again closes its panel and returns to the list.

### O6. Choosing a fitness level

"Choose your level" offers beginner, intermediate or advanced. Choosing beginner shows "You are not alone. Over 2.3 million people took beginner workouts on FitOn in the past year," over a world map with characters appearing in different places; intermediate states 2.6 million people and advanced states 1.1 million people, with the same message otherwise. The level is chosen by the user, with nothing shown assessing it or moving the user between levels afterward.

### O7. Frequency and duration questions

FitOn asks how many times per week the user plans to work out, then how much time they have available, with duration choices ranging from five to more than thirty minutes. Any duration choice opens a graph comparing fitness progress with FitOn against progress "without a coach," rather than against no FitOn use at all, with reassurance that a modest weekly commitment builds long-lasting habits. The same message appears whichever duration is chosen.

### O8. Favorite class types

"Select all your favorite types of classes" lists options including cardio, strength, HIIT, toning, dance, kickboxing, meditation, stretch, yoga, spinning and treadmill. After a selection, FitOn responds "We'll include all your favorites," stating it has expert-led workouts in the selected type and will pick the best ones, regardless of how many types were actually selected.

### O9. Joining community groups

"Join community groups" presents groups organized under Food, Journey, Lifestyle and Activity. Food lists Intermittent Fasting Club, Low Carb Keto Crew, Meal Preppers and Vegetarians; Journey lists Newbies, Gain Muscle and Modifiers; Lifestyle lists Single and Crushing It, 30s Club, Apple Watch Crew and Fitbitders; Activity lists Walkers United, Run the World, Meditation Squad, Yoga Lovers and Pilates Party, among others.

### O10. Device ownership question

"Select all the devices you own" splits into wearables, including Apple Watch, Fitbit, Garmin, Samsung Watch, Whoop and a chest strap, and streaming devices including Apple TV, Roku, Fire TV, smart TV and Chromecast. No device is connected at this step; the Pro plan screen that follows lists the wearables and devices the user reported as included in Pro.

### O11. Acquisition source question

"How did you hear about us?" offers Instagram, Facebook, Pinterest, TikTok, App Store, Google, friend, article, blog and TV, among other sources.

### O12. Building the personalized program

"We're setting up your personalized program" shows steps described as building a plan from the user's demographics, level and class preferences. The next screen, "Here's your personalized program," presents a program called Muscle Maker, stating that based on the user's preferences they can join it or choose from a wide variety of other programs. Get Started leads directly into the plan choice that follows. FitOn does not describe the program's content, length or schedule beyond its name, and nothing shown indicates whether it would differ under different answers.

### O13. Choosing Basic or Pro

"Get exclusive programs for faster results" offers Basic, described as unlimited free workouts, and FitOn Pro, described as a personalized workout program, casting workouts to a TV, a nutrition and meal plan, offline downloads and premium music, with unlimited free workouts included in both. Choosing Basic shows a Next button; choosing Pro shows "Upgrade now, save 70%." Tapping it opens the App Store payment sheet at $39.99 per year, the first point at which a price is shown. Closing the sheet opens "Are you sure? Pro members are 73% more likely to achieve their fitness goals," with Cancel and Upgrade controls. FitOn does not state a source for the 73% figure. No duration option other than the yearly plan appears on this screen.

### O14. Contacts request

"Connect contacts. See which of your contacts are already on FitOn so you can work together" offers Skip and Connect. Connect raises the system contacts request, which offers to share all contacts or select some. FitOn does not state any benefit for connecting.

### O15. Workout-time intention sentence

The next screen presents "At 8am I will open this app and work out," stating that scientific research shows completing the sentence helps people successfully build a workout habit, without naming that research. Changing the time rewrites the whole sentence, for example to "At 7:45am I will open this app and work out." The user can skip the step or confirm with "Let's do this."

### O16. Calendar access request

"Calendar Sync. Enable access to sync your workout reminders to your phone calendar" leads to a system request for full access to the calendar.

### O17. Unskippable Pro video

A video plays showing what a Pro user might get, without a control to skip it. Partway through, a button appears reading "Today only, save 70%," from $129.99 to $39.99, billed yearly only, equal to $3.33 a month, which is the first point the undiscounted price is shown. The video can then be closed and the flow continues.

### O18. First workout prompt

"A plan without action isn't a plan, it's a wish. Start now by taking your first workout. No equipment needed" offers starting the workout immediately or adding a reminder for later. Adding a reminder opens a time picker for today or another day, after which the workout is shown as scheduled and the user can close the screen or start the workout.

### O19. The workout player

Starting the workout turns the screen horizontal, with a countdown timer and an instructor appearing on video and talking through the exercise. The user can skip, jump 15 seconds ahead, or pause at any moment. The workout's name and instructor are shown only once it begins, moving from the first exercise into a stated sequence of what comes next. Closing the player ends the workout and opens the summary.

### O20. Post-workout summary

The summary shows seconds worked out, calories burned and average heart rate, followed by the week's progress: the streak, workouts completed that week, seconds of exercise and calories. The heart-rate field appears despite no wearable or health source being connected.

### O21. Camera and stat stickers

Straight after the summary, FitOn requests camera access with no stated reason. Allowing it opens the camera in selfie mode with filters and branded stickers, including stickers carrying the week's seconds and calories burned, a date and category sticker, and a workout-routine caption. The user can take the photo and post it, or skip.

### O22. Mandatory workout rating

"Rate the workout" asks for one to five stars overall, with separate ratings for instructor, playlist, streaming and difficulty, plus a feedback field, and must be completed to continue. The same screen offers add to favorites and a download control marked Pro.

### O23. Second paywall with options

After the rating is submitted, a paywall suggests upgrading and saving up to 70%, with two options: six months, from $100 to $34.99, and a yearly best deal at $39.99, down from $129.99. It lists Pro's benefits, including the program, meals, TV casting, premium music, offline downloads and device tracking. Skipping it reaches the home screen, ending the guided sequence. This is the third Pro offer shown in the first run, after the plan choice and the onboarding video.

---

## Core loop and automation

FitOn's home screen splits into five tabs covering workouts, articles, meal planning and friends, with live classes and partner content sitting inside the workout catalogue.

### O24. Five home tabs

The home screen carries a menu with For You, Workouts, Advice, Meals and Friends, with the profile reached from the top left corner.

### O25. Workouts tab catalogue

The Workouts tab lists workouts that can be started right away, with filters including short workouts, arms, abs, strength, mobility, meditation sessions, yoga, stretch and HIIT. Further down it shows celebrity presenters, dozens of trainers to choose from, target areas, and filters for time to complete, intensity and equipment. No workout in the catalogue is shown locked, and partner-branded collections sit on the same tab.

### O26. Live class schedule

The Workouts tab lists upcoming live classes at stated times, each with an intensity marker, on a schedule spanning different days. Joining a class marks it as joined and shows a countdown to when it goes live, and every join prompts the user to invite friends and send an invitation. No class start is reached and no class is attended, and whether FitOn sends a reminder before a joined class starts is not shown.

### O27. Presenter-led courses

The Workouts tab also carries courses from named presenters, on subjects including yoga, fall prevention and better sleep. The courses' structure, format and length are not stated.

### O28. Advice article library

The Advice tab divides articles into fitness, nutrition, wellness and self-care, with dozens of articles under each. Inside the articles sits a prompt to join FitOn on Instagram for daily inspiration. No article title, author or completion marker is shown.

### O29. Meals tab questionnaire

The Meals tab opens with a route to set up a nutrition plan, asking how many meals are eaten per day, which diet is followed, which items the user struggles with, and what holds the user back from eating healthy. It ends on a named plan, Sculpt n Shred 12 week meal plan, stating the plan is set up and ready to enhance the user's fitness program, with a Start now control. Start now opens a Pro video rather than the plan; the meal plan itself is listed among Pro's features.

---

## Goals and progression

For You and the profile carry FitOn's progress structures: a streak, a workout count, a weekly goal and an achievements catalogue.

### O30. For You dashboard

For You shows exclusive programs, a streak, how many workout goals have been completed, and steps. Step data appears without any health source connected, and its source is not stated.

### O31. Profile stats and progress

The profile shows the number of workouts and calories spent, a calendar, the week's activities, achievements, and a progress area where before-and-after photos can be added and weight can be set. The calendar also allows adding activities for ones that were missed. The workout count shown here is the same measure the Roar On badge is stated against.

### O32. Weekly progress screen

The weekly progress screen shows daily average steps and minutes, exercise at zero out of two workouts as the weekly goal, and no streak. It also shows steps and calories for the day and the week, with an option to connect a device in order to follow steps. The screen opens from the streak control on the home screen. What happens to the goal when a week ends is not shown.

### O33. Achievements catalogue

Achievements sit at the foot of the profile with a see-all control that opens badges grouped as workout milestones, event milestones, streaks, workout mastery, bests and challenges. Tapping a badge shows what it means and how it is earned. Seize the Day, under event milestones, is awarded for completing a workout before 7am for the first time; Roar On, under workout milestones, is awarded for completing 50 workouts on FitOn; and We're on Fire, under streaks, is awarded for the longest streak of weeks reaching the workout goal. The criteria of the challenge badges and the workout mastery badges are not shown.

---

## Access and eligibility

One section covers where FitOn marks features as Pro inside a product that is otherwise free to use.

### O34. Where Pro marks sit

The download control on the workout rating screen is marked Pro. Programs are presented as exclusive, on the plan screen and on For You. FitOn states that Free gives workouts anytime, anywhere, while Pro adds goal-based fitness programs, personalized meal plans, more than 500 exclusive recipes, unlimited offline downloads, fitness tracker integrations and premium music from top artists. No workout in the catalogue is shown locked, and starting the meal plan once it's set up leads to a Pro offer rather than to the plan itself.

---

## Economy and resources

FitOn holds no currency, points balance, material or other held quantity with routes that produce or consume it.

---

## Social

The Friends tab is where FitOn's onboarding groups and contacts questions resurface, carrying a workout feed, a group feed and repeated prompts to add friends.

### O35. Friends tab workout feed

Friends shows a feed of workouts done, where the user can see which friends have joined and what exercises they've done. Items can be clapped, commented on or shared. No friend appears connected, leaving the feed with nothing on that side, and where a share sends an item is not stated.

### O36. Friends tab group feed

The Friends tab shows which groups the user is part of and the questions posted in them, including people in the intermittent fasting group asking questions, with the user able to post questions as well. Groups the user may like are suggested with their own join controls, such as Yoga Lovers, Modifiers, 30s Club and Newbies, and a feed below them draws from all the questions and posts across the groups the user belongs to. No approval step, member list or moderation is shown for any group.

### O37. Add-friends prompt

The Friends tab prompts the user again to add friends "to get fit together." The same invitation appears on every live-class join, and contacts are requested during onboarding; no benefit is stated for any of the three.

---

## Reach beyond the app

Partner-branded content, an in-article social prompt and device connections in settings extend FitOn beyond its own screens.

### O38. Partner workout collections

The Workouts tab carries collections made with other companies, services and people, each opening workouts created with that partner. Named partners include Talkspace, 24 Hour Fitness, Orangetheory, Bumble, American Airlines, CrossFit, H&M, the Chainsmokers, Bob Harper and Zumba, among others. Whether any collection links out of FitOn is not shown.

### O39. Instagram prompt in articles

Within the Advice articles, FitOn places a prompt to join FitOn on Instagram for daily inspiration. The prompt appears only inside the Advice articles.

### O40. Device connections in settings

Settings holds connections for Health, for sleep tracking and activity syncing, which asks for Health data from Apple on tap, and for Watch, Fitbit and Garmin. No connection is made during onboarding, where devices are only asked about. The weekly progress screen separately offers a connection in order to follow steps.

---

## Monetization

Every Pro surface across the app repeats the same 70%-off offer, framed differently each time it appears.

### O41. Meal plan Pro video

Starting the meal plan opens a video about reaching goals with FitOn Pro, showing a before-and-after comparison, followed by a prompt to get all of it at 70% off. Whether this video can be skipped is not shown.

### O42. Reopening after two months

Reopening FitOn two months after it was last opened shows a pop-up offering 70% off Pro, stating that only a few days are left, with a Free-and-Pro comparison and an Upgrade control. Closing it returns to the dashboard, after which a video opens without being requested, showing what Pro includes and the same 70% saving, $39.99 instead of $129.99 if bought today. FitOn does not state what changes when the few days pass.

### O43. The same discount everywhere

Every Pro surface across the app states a 70% saving: the plan choice, the onboarding video, the post-workout paywall as up to 70%, the meal plan video, and the reopening pop-up and video. The time framing moves from "today only" to "only a few days left," around the same $39.99 from $129.99 terms. No surface offers Pro at the undiscounted price as a purchasable option, and two of the five surfaces are videos that cannot be skipped or declined.

---

## Return triggers

One control at the top of the home screen is FitOn's own name for what should bring a user back.

### O44. Home screen streak control

A streak sits at the very top of the home screen, reading "Start today to start the streak," and opens the weekly progress screen on tap. The same streak also appears on the post-workout summary and on For You. No streak value above zero is shown; the weekly progress screen states there is no streak. What qualifies, what preserves the streak and what a missed period does are not shown, and whether any notification refers to the streak is not shown.
