# Ladder

**Teaser:** One welcome workout unlocks Ladder's entire app at once: chat, nutrition, the weekly plan, a badge, a community wall and a streak requirement, all on the same completion screen.

Ladder is a fitness app organized around matching a new user to a coaching team and then routing everything else through one hinge: completing the team's welcome workout. The team match decides which coach, which welcome workout and which team chat the user sees, and finishing that one workout is the stated condition for unlocking chat, nutrition and the full training plan at once. The completion screen that follows is the app's single densest moment, firing a badge, a community wall, a streak requirement, a strength-series requirement and an onboarding checklist together, and that checklist is what routes the user into the app's remaining social and referral surfaces.

---

## System view

Ladder is a complex system whose spine is the welcome workout: matching to a coaching team decides which welcome workout is offered, and completing it is the single condition that unlocks chat, nutrition and the full plan, with the completion screen that follows fanning out into the badge, the community wall, the weekly streak, the strength-series requirement and the get-started checklist all at once.

---

## Mechanics

### Progression Gate

**Implementation summary:** Completing one welcome workout unlocks chat, nutrition and the full plan at once; three workouts unlocks a six-week strength series.

**What was observed:** Before the welcome workout, Ladder locks Chat and Nutrition, stating on each locked tab what unlocking requires, while the Teams tab stays browsable. Completing the welcome workout opens all three areas at once, and Ladder announces the unlock directly. The workout completion screen separately states that reaching three completed workouts unlocks a six-week strength series.

**How it is presented:** The locked tabs state their own unlock condition before it's met. The unlock is announced with its own congratulations screen rather than happening silently, and the completion screen names the strength-series requirement alongside other next steps.

**What is worth noting:** Two gates share one measure, completed workouts, at two different thresholds, one workout for chat, nutrition and the plan, three workouts for the strength series. Ladder never states whether either gate reopens if the trial ends before it's crossed.

**Key findings:**

- Chat and Nutrition are locked and state their own unlock condition before the welcome workout is completed.
- Completing the welcome workout unlocks Chat, Nutrition and the full plan at once, announced with its own screen.
- A separate threshold, three completed workouts, unlocks a six-week strength series.
- The Teams tab stays browsable even while Chat and Nutrition are locked.

**Screenshots needed:** the locked Chat tab stating its unlock condition, and the plan-unlocked congratulations screen.

### Achievement

**Implementation summary:** A single 3D badge is awarded after the user rates their first workout, under the heading "Rate to earn a badge."

**What was observed:** After the final exercise of the welcome workout and a five-star rating prompt headed "Rate to earn a badge," Ladder awards a badge read out as "Ladder workout." The badge renders in 3D and reacts to touch.

**How it is presented:** The criterion is stated before the badge is awarded, immediately after the rating prompt, on the same completion sequence as the workout summary.

**What is worth noting:** Ladder states the criterion up front rather than surprising the user with the badge, but doesn't say whether the badge lives on afterward in a profile or list, or whether other workouts award their own badges.

**Key findings:**

- Ladder states the criterion, "Rate to earn a badge," before awarding it.
- The badge is a 3D, touch-reactive object rather than a static image.
- Whether the badge is kept in a visible record afterward isn't stated.
- Whether every workout or only the welcome workout awards a badge isn't stated.

**Screenshots needed:** the "Rate to earn a badge" prompt and the 3D badge itself.

### Streak

**Implementation summary:** A weekly streak requires three workouts in a week, named on the completion screen, the unlock screen and the onboarding checklist.

**What was observed:** Ladder names a weekly streak in three places: the workout completion screen states how many more workouts are needed for it, the plan-unlock screen states that three workouts a week earns it, and the Get Started checklist lists the weekly streak as an item.

**How it is presented:** The streak is introduced through language rather than a running counter at this point, repeated across the completion screen, the unlock screen and the checklist.

**What is worth noting:** Ladder commits to the streak concept across three separate surfaces before showing any counter, display or reset rule for it.

**Key findings:**

- The qualifying condition is three workouts within a week.
- The streak is named on the completion screen, the unlock screen and the Get Started checklist.
- No streak count, display or reset rule for a missed week appears.

**Screenshots needed:** the completion screen's streak callout and the unlock screen's three-a-week line.

### Referral

**Implementation summary:** Sharing a link earns $25 of Ladder Shop gear once the introduced person subscribes, framed as a Rewards-section offer and a checklist item.

**What was observed:** The weekly plan's Rewards section offers $25 to the Ladder Shop for sharing a link, paid out once the person who receives it subscribes. The Get Started checklist separately lists sharing Ladder with one person as an item.

**How it is presented:** The offer sits in the Rewards section of the weekly plan alongside a separate Share Pass option, with its qualifying event, the other person subscribing, stated up front.

**What is worth noting:** Ladder states the reward and the qualifying event clearly, but not how the $25 arrives, as store credit or a specific item, and the separate Share Pass option's own effect isn't stated either.

**Key findings:**

- The reward is $25 of Ladder Shop gear, earned once the introduced person subscribes.
- Sharing happens through a link.
- The Get Started checklist separately includes sharing Ladder with one person.
- Ladder doesn't state whether the $25 arrives as credit or a specific item.

**Screenshots needed:** the Rewards section showing the referral offer.

### Shareable Win

**Implementation summary:** The workout completion screen offers to share proof of the finished workout to Instagram, alongside the badge and workout stats.

**What was observed:** The workout completion screen offers to share proof of the completed workout to Instagram, sitting on the same screen as the badge, total volume and total reps.

**How it is presented:** The share option is offered directly on the completion record rather than through a separate share menu, naming a specific destination platform.

**What is worth noting:** Ladder frames the share as "proof" attached to the completion record rather than a generic promotional post, though what the shared image actually contains isn't shown.

**Key findings:**

- The completion screen offers to share proof of the workout to Instagram.
- The share option sits alongside the badge, total volume and total reps.
- Instagram is named as the specific destination.

**Screenshots needed:** the completion screen showing the Instagram share option beside the badge and stats.

### Group Membership

**Implementation summary:** A team match assigns one coaching team per user, with its own chat, coach and welcome workout; topic groups and meetups sit alongside it.

**What was observed:** A preference filter matches the user to one team, labeled as "my team" throughout the app, with its own coach, its own welcome workout and its own chat. Ladder states the user can change teams during the trial. Separately, the Chat tab lists topic groups by subject, each showing a member count, and city-based meetups.

**How it is presented:** The team relationship appears throughout the app, on the home screen through teammate avatars, in the Teams tab as a named coach and team description, and in a team-scoped chat. Topic groups and meetups sit in the same Chat tab as their own list, separate from the team.

**What is worth noting:** Ladder maintains the team relationship as a standing fact rather than an open room, deciding which welcome workout and chat the user sees, while the topic groups show only a member count and a join route, with what joining actually changes left unstated.

**Key findings:**

- A preference filter assigns one team, changeable during the trial.
- The team determines the welcome workout, the coach video and the team chat.
- Topic groups are organized by subject, each showing a member count.
- City-based meetups appear in the same list as the topic groups.

**Screenshots needed:** the Teams tab showing the matched team, and the topic-groups list with member counts.

### Community Space

**Implementation summary:** A wall of over 13,000 videos from other members who completed the same welcome workout appears right after the user's own completion badge.

**What was observed:** Directly after the completion badge, Ladder shows a wall of videos from other people who completed the welcome workout, stating 13,728 completions, each showing the time taken and calories burned. The only action offered is joining the wall, which requests camera and photo library access.

**How it is presented:** The wall appears as its own full screen immediately after the badge, before returning to the home screen, with a close control in the top left corner.

**What is worth noting:** Ladder requests camera and full photo library access as soon as the join action is tapped, without a screen first asking whether the user wants to record a video at all.

**Key findings:**

- The wall states 13,728 completions of the welcome workout.
- Each video shows the time taken and calories burned.
- Joining the wall is the only action offered, and it immediately requests camera and photo library access.
- The wall appears directly after the completion badge, before the home screen.

**Screenshots needed:** the completion wall showing the 13,728 count and the join action.

### Commitment

**Implementation summary:** Ladder writes a three-part nutrition pledge in the user's name and requires a signature before the dashboard opens.

**What was observed:** Before the nutrition dashboard opens, Ladder shows a statement in the user's name committing to try their best at hitting nutrition goals, listing three behaviors that restate the targets set on the preceding screens: logging three meals a day, staying within the daily calorie target, and making one mindful food choice daily. The user signs their name in a box and taps a button reading "I am committed" to continue.

**How it is presented:** The statement appears as its own screen immediately after the calorie and protein targets are set, composed entirely by Ladder, with the signature box and confirmation button as the only interactive elements.

**What is worth noting:** Ladder recomposes targets the user has already set into a first-person statement before asking for a signature, rather than simply carrying the targets forward onto the dashboard. Nothing shown afterward brings the statement back: the dashboard tracks the targets themselves, not the commitment that preceded them.

**Key findings:**

- The statement restates three targets set on the preceding screens: meals logged, calories, and one mindful food choice.
- The user signs their name in a box to continue.
- The confirmation button reads "I am committed."
- Nothing shown afterward refers back to the signed statement.

**Screenshots needed:** the signed commitment screen with its signature box and confirmation button.

---

## Onboarding and first run

A tracking prompt, Apple sign-in, a three-part coach video sequence and a team-match filter all run before the user reaches the home screen.

### O1. Cross-app tracking request

Before any Ladder screen appears, Ladder shows the system prompt asking whether it may track activity across other companies' apps and websites. Declining tracking does not block progress into the app.

### O2. Sign-in screen and account creation

Ladder opens on a sign-in screen with a background of rotating photos of people training in a gym, stating that Ladder is free to try with no credit card needed to start, and requires sign-in before reaching the free plan. Signing in with Apple creates an account.

### O3. Three-part welcome video sequence

Immediately after sign-in, Ladder plays three skippable videos in sequence. The first states that most members already work out but want a purposeful weekly plan from strength coaches rather than repeating the same routine. The second contrasts Ladder with apps offering random workout playlists or one-time challenges, stating that Ladder delivers new workouts every Sunday. The third states that Ladder will match the user to a team based on training-style preference, that each team has a welcome workout to introduce its coaching and training style, and that the user can try multiple welcome workouts during the trial week to find the right fit.

### O4. Team finder with live match count

Ladder presents a team-finder screen stating that filtering workout preferences will match the user with a fitting team, and that teams can be changed anytime during the trial. The filter has four groups: exercise style, equipment, ideal workout length and coach preference. An apply button states how many teams match the current selection, updating as selections change.

### O5. Team match and coach introduction video

The filter returns a matched team, labeled as the user's team with options to try it or change it. A video follows in which the team's lead coach describes their background and approach, invites the viewer to complete the first workout, join the team chat, and join the team, and states they are looking for the most dedicated people rather than the uncommitted.

### O6. First landing on the home screen

After the trial and notification screens, Ladder lands the user on the home screen, showing teammate avatars with an instruction to double-tap one to send a cheer. The first item below is the matched team's welcome workout. The bottom navigation holds four tabs: the workout tab with the welcome workout, Chat, Teams and Nutrition, with Chat and Nutrition shown as locked. What the numbers and lights beside the avatars represent isn't stated.

---

## Core loop and automation

Once the plan unlocks, the weekly plan hub, the welcome workout player and a nutrition dashboard anchor Ladder's core loop.

### O7. Weekly plan hub

Once the plan is unlocked, the workout tab shows the weekly plan, stating how many days remain until the free trial ends. The same surface carries a top scoreboard, a Rewards section, a Ladder Wall entry, the profile, a journal, Ladder Flex, described as mobility workouts, favourites, downloads, a shop, a strength series, body-part exercises, and the Get Started challenge at the bottom. No entities, positions or values for the top scoreboard are shown.

### O8. Welcome workout preview

Opening the welcome workout shows a preview with a coach video playing in the background alongside a written description of its structure. The workout uses dumbbells, runs 29 minutes total with 13 minutes of active work, and can be saved or downloaded for offline use. The structure includes a bodyweight warm-up, rest, a push block, a pull block, a full-body block, a glutes block, bodyweight conditioning and core.

### O9. Download prompt before starting

Tapping Start opens a screen offering to download the workout to avoid loading issues, stating that downloads are deleted automatically to save storage, with a choice to download or skip.

### O10. Guided workout player

Before the first exercise, Ladder plays a video stating that the user has two of the best coaches in the world, followed by a system notice that apps starting workouts have access to health and fitness data while the device is locked. The player counts down to each block while the coach talks in the background, plays a demonstration video with a countdown for each exercise, and offers a Track Results control to log reps and weight. The user can set reps, add prep time, set pace, turn off audio, and add weights.

### O11. Mid-workout coach fit check

After the warm-up, a few exercises in, Ladder asks whether the user is happy with the workout, offering to continue or try another coach. What choosing another coach leads to isn't shown.

### O12. End of workout: coach outro and rating prompt

After the final exercise, Ladder plays a video of the coach talking alongside another coach, then asks the user to rate the workout experience with five stars under the heading "Rate to earn a badge."

### O13. Workout completion summary

Completing the workout shows a completion screen carrying a badge, an option to share proof on Instagram, a line stating that two more workouts are needed for a weekly streak, workout data including total volume and reps, a line stating that three workouts are needed to unlock a six-week strength series, and cheers.

### O14. Nutrition introduction and voice logging demo

After the first workout, the Nutrition tab opens on a pitch stating that macro tracking is made easy, naming no ads with membership, free barcode scanning, and voice and image recognition logging, with a button to get a free nutrition plan. The next screen starts a voice-logging demonstration, requesting speech recognition and microphone access, then has the user read an example meal aloud. Ladder recognizes the spoken meal and displays it with calories and macros.

### O15. Nutrition dashboard

After the nutrition setup, the Nutrition tab becomes a dashboard showing calories left for the day, protein left, current weight, water intake, and a macro journal split into breakfast, lunch, dinner and snacks. The dashboard also offers quick calorie entry, history, recipes, goal management and a weight tracker. The recipes area was empty, with options to add a recipe from a URL, pasted text, manual entry or a photo.

---

## Goals and progression

A completion badge, profile statistics, a Get Started checklist, an upcoming strength series and a nutrition flow ending in a signed commitment sit across this section.

### O16. Workout completion badge

On completing the welcome workout, after the rating prompt, Ladder awards a badge read out as "Ladder workout." The badge renders in 3D, can be spun, and reacts to touch. Whether the badge is kept on the profile or in a badge list isn't shown.

### O17. Profile statistics and history

The profile shows the number of workouts completed, total minutes, calories burned, and cheers given or received, together with a workout history. The user can write a bio and add a photo.

### O18. Get Started challenge checklist

After the plan unlocks, Ladder shows a Get Started challenge at the bottom of the workout tab, presented as a set of checkable boxes, some already ticked. Items include checking out team chat, completing a second workout, adding a photo, adding the Ladder widget, sharing Ladder with one person, and the weekly streak. Opening an item leads to prompts such as joining team chat, checking off a priority workout, adding a picture, and adding the widget. No deadline or reward for completing the checklist is stated.

### O19. Baseline strength series

The weekly plan includes an upcoming strength series named Baseline, stated to run over six weeks, with a requirement to complete 20 workouts during that window and a log of days. The series hadn't begun yet at the time of the analysis. What completing or missing the 20 workouts produces isn't shown.

### O20. Nutrition goal questionnaire

Continuing past the voice demonstration opens a three-part questionnaire. The first section asks for a primary goal, why nutrition is a priority, the biggest nutrition challenge, and motivation to change habits. The second asks about prior macro-tracking experience, desired precision, and interest in AI-powered photo logging. The third asks for date of birth, height, current weight, biological sex and activity level, then shows a personalizing-plan screen. Ladder doesn't offer to read height or weight from the earlier Apple Health connection at this point.

### O21. Personalised nutrition plan

After a loading screen, Ladder presents a personalized plan labelled body recomposition, showing an unchanged weight figure with copy about steady progress and effortless balance. Following screens set a calorie target, a protein target framed around building lean muscle and reducing cravings, and a consistency target of logging at least three times a day.

### O22. Signed nutrition commitment

Before the nutrition dashboard opens, Ladder shows a commitment statement in the user's name, listing three commitments: logging three meals a day, staying within the daily calorie target, and making one mindful food choice daily. The user must sign their name in a box to continue, under a button reading "I am committed."

---

## Access and eligibility

One completed workout unlocks chat, nutrition and the plan together; three completed workouts unlocks a six-week strength series.

### O23. Welcome workout unlocks chat, nutrition and the plan

Before the welcome workout, the Chat tab states it gives access to teammates, community chats and messages but is locked until the welcome workout is complete, and the Nutrition tab is locked with the same condition. The trial timeline separately states that completing the welcome workout unlocks the plan. Completing it produces a congratulations screen confirming the plan is unlocked and naming the three-a-week streak, opening Chat and Nutrition.

### O24. Strength series locked behind three workouts

The workout completion screen states that completing three workouts unlocks a six-week strength series. At the time of the analysis, one workout had been completed.

---

## Economy and resources

(no observations in this app.)

---

## Social

Ladder's social layer runs through the matched coaching team, teammate cheers, team chat, and a set of topic groups and meetups sitting alongside it.

### O25. Team membership and team browsing

After the team-finder filter, Ladder labels the matched team as the user's own, naming the coach and giving a team description. Below it, other teams led by named coaches are listed, with dozens available on scrolling and a control to filter again. Ladder states the user can change teams at any time during the trial.

### O26. Teammate avatars and cheers

The home screen shows teammates as avatars with an instruction to double-tap one to send a cheer. Sending a cheer prompts Ladder to ask whether to turn on notifications for sending and receiving cheers. The profile keeps a count of cheers given or received, and the workout completion screen references getting cheers for a finished workout.

### O27. Team chat

Once unlocked, the Chat tab holds the matched team's chat, showing messages from the current and previous day, with earlier messages reachable by scrolling. The Get Started checklist's chat item opens a screen inviting the user to join the conversation in teams and stay accountable with the coach and teammates.

### O28. Topic groups and meetups

Alongside the team chat, the Chat tab lists app updates, trending topics, and topic groups by subject with member counts, including groups on parenting, equipment, books and podcasts, a city-specific live group, and a workout-music group. The same tab lists city-based meetups across multiple US cities, plus further meetups in Australia, the United Kingdom and Canada.

### O29. Welcome workout completion wall

Directly after the completion badge, Ladder shows a wall of videos from other members who completed the welcome workout, stating 13,728 completions, each showing the minutes taken and calories burned beneath it. The only action offered is joining the wall, which requests camera access and full photo library access. A close control sits in the top left corner.

---

## Reach beyond the app

Apple Health, a music service connection, and sharing options each carry the user outside Ladder at the start and end of a workout.

### O30. Apple Health sync prompt

During the start of the first workout, Ladder shows a banner stating that syncing is off, followed by a screen offering to sync with Apple Health for heart rate and calorie tracking, with an option not to see the prompt again. Choosing to track opens the Apple Health permission sheet with every category deselected by default.

### O31. Music service connection

After Apple Health, Ladder offers to connect Spotify or Apple Music to set the mood. Choosing Spotify opens the Spotify app, where Ladder offers no suggestions and the user picks their own music before returning to Ladder.

### O32. Share proof on Instagram

The workout completion screen offers to share proof on Instagram, sitting on the same screen as the badge and the workout's volume and reps.

### O33. Referral offer and share pass

The weekly plan's Rewards section lists Baseline, Share Pass and Share Ladder, offering $25 to the Ladder Shop when a shared link's recipient subscribes. Tapping Share Pass sends something to someone, but Ladder doesn't state what the recipient receives. The Get Started checklist separately includes sharing Ladder with one person.

---

## Monetization

A seven-day free trial with no credit card required runs on a fixed timeline toward a monthly or annual plan, with no price shown.

### O34. Free trial timeline

After the team match, Ladder shows how the free trial works as a timeline: a completed Welcome step, the welcome workout described as unlocking the plan, a Day 5 trial reminder, and a Day 7 trial end after which the user chooses a monthly or annual plan. Plan prices aren't shown or stated anywhere in the app.

### O35. Free pass card and trial framing

Continuing past the trial timeline loads a "Ladder free pass" card, then a screen stating the trial has officially started, free for seven days. The weekly plan later states how many days remain until the trial ends. The nutrition pitch separately states no ads are included with membership.

### O36. Ladder Shop

The weekly plan includes a shop where the user can purchase items from Ladder, opening a web page outside the app. The shop is also the destination of the referral reward. Products and prices in the shop aren't stated.

---

## Return triggers

Two notification prompts, a workout reminder, a weekly streak and a fixed Sunday content release bring users back.

### O37. Notification request at trial start

On the trial-start screen, Ladder lists three things notifications will cover: knowing when the trial is about to end, seeing when the coach messages, and knowing when new workouts drop every Sunday, with options to enable them or choose "Maybe later."

### O38. Notification request attached to cheers

Immediately after sending a first cheer, Ladder offers to turn on notifications to send and receive cheers from the team, and choosing to turn it on raises the system notification permission request.

### O39. Welcome workout reminder scheduler

From the profile area, the user can set a reminder for the welcome workout, opening a time picker limited to the next 24 hours.

### O40. Weekly streak

Ladder frames a weekly streak in three places: the completion screen states that two more workouts are needed for it, the unlock screen states that three workouts a week earns it, and the Get Started checklist includes the weekly streak as an item. No streak count, display or reset rule for a missed week is shown.

### O41. Weekly workout release on Sundays

Ladder states in the welcome video that it delivers new workouts every Sunday, and repeats this on the trial-start screen as a reason to receive notifications. The app version reviewed predates any Sunday release being seen.

### O42. In-app chat message indicator

While on the weekly plan, a small indicator appeared on the Chat tab showing that someone had posted in the team chat. Whether a push notification accompanies the indicator isn't shown.
