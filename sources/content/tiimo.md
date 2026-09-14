# Tiimo

**Teaser:** Tiimo gives new users a streak, a marker and a scheduled day before they've used the app once.

Tiimo is a planning and productivity app that runs one loop: completing a task moves two counters, a lifetime tally of tasks and a streak of days, and both feed the marker tracks that make up its stats tab. An AI co-planner turns spoken or typed intent into scheduled tasks, though it can create tasks but not yet reschedule them. Notifications sit directly on top of the same two counters, built around the morning, afternoon and evening bands a user sets up during onboarding. There's no social layer anywhere in the app, so every comparison Tiimo offers is between a user and their own record.

---

## System view

Tiimo is a simple system whose spine is task completion: every completed task moves one of two counters, a lifetime tally and a streak of days, and those two counters are the only progression the product has, feeding both the marker tracks on the stats tab and the notification schedule built around them.

---

## Mechanics

### Streak

**Implementation summary:** Tiimo starts the streak during onboarding, before a full day has passed, handing new users a current streak immediately.

**What was observed:** Tiimo announces a streak before the user has completed a single day, during onboarding, then displays it as a flame with a day count on every main screen. The stats tab expresses the same count as a position against the next threshold on a day-keyed marker track, and notification settings carry a toggle specifically naming streaks.

**How it is presented:** The flame and day count sit in the header of the home, to-do and focus tabs, next to a second counter for completed tasks. The stats tab restates it as a progress bar under a day-count label, matching the next unlock on the day-keyed marker row.

**What is worth noting:** The streak starts on day one rather than after a day has actually passed, so a brand new user is handed a current streak before returning has ever happened. Tiimo doesn't state what qualifies a day toward the count, what happens to it after a missed day, or whether any protection exists, since settling any of that needs a stretch of use longer than one day.

**Key findings:**

- The streak begins during onboarding, before a full day has elapsed.
- A flame icon with the day count appears in the header of every main tab.
- The stats tab shows the count against the next threshold on a dedicated day-keyed marker track.
- Notification settings include a toggle specifically for streak alerts.
- Tiimo doesn't state what happens to the count after a missed day.

**Screenshots needed:** the header flame and day counter on the home tab; the stats tab's streak progress bar showing the day count against its next threshold.

### Milestone

**Implementation summary:** Tiimo runs two threshold tracks, tasks and streak days, disclosing every future marker's unlock condition in advance.

**What was observed:** Tiimo runs two ordered threshold tracks, one keyed to completed tasks and one to streak days, shown as a row of named markers on the stats tab. Crossing a threshold produces a banner naming what was crossed, separate from the ordinary counter update, and changes the color behind the row to match the marker just unlocked.

**How it is presented:** The marker row sits on the stats tab beside the two counters it's built from. Positions not yet reached are shown in place, locked, with their exact unlock condition stated up front.

**What is worth noting:** Every marker is a fixed function of a single number the app already tracks, so nothing about the row can be earned out of order, purchased, or granted independent of ordinary use. Tiimo discloses every future threshold in advance rather than keeping any of them hidden, so the entire progression path, tasks and days both, is visible from the very first day.

**Key findings:**

- Two marker tracks exist, one keyed to completed tasks and one to streak days.
- The task track's thresholds run 7, 14, 30, 60, 110, 160, 250 and 360, continuing to 30,000.
- The day track's thresholds run 3, 7, 10, 14, 21 and 30, continuing to 1,600.
- Crossing a threshold produces a named banner and changes the marker row's background color.
- Locked markers display their exact unlock condition rather than staying hidden.

**Screenshots needed:** the marker row showing earned and locked markers with their unlock conditions; the unlock banner naming a crossed threshold.

### Achievement

**Implementation summary:** Tiimo's markers are individually named and stay permanently visible, and the first requires a deliberate swipe gesture to claim.

**What was observed:** Each marker in Tiimo's row is a named, individually designed criterion that flips from unattained to attained and then stays in the row permanently. The first one requires a deliberate swipe gesture to claim rather than being granted automatically.

**How it is presented:** The markers sit on the same stats tab row used for the threshold tracks, each with its own name and design, persisting in place after being unlocked rather than being consumed or dismissed.

**What is worth noting:** The preserved, individually named state is what separates this from the counters underneath it. Task count and day count keep moving after a marker unlocks, but the marker itself stays fixed at the exact criterion it marks, so the row works as a permanent record of specific past moments rather than just a display of current totals.

**Key findings:**

- Each marker is individually named and individually designed rather than a generic badge shape.
- The first marker requires a deliberate swipe gesture to claim.
- An unlocked marker remains visible in the row afterward rather than being consumed.
- Tiimo doesn't grant anything beyond the marker itself for reaching any position.

**Screenshots needed:** the swipe-to-unlock interaction for the first marker; the stats tab row showing several earned markers.

### Cosmetic Customization

**Implementation summary:** Tiimo locks its interface themes behind payment alone, while leaving the app icon and dyslexia-friendly font choice unlocked.

**What was observed:** Tiimo offers a set of alternative interface themes, most of which are locked behind the paid tier rather than any usage or progression condition.

**How it is presented:** Themes sit in settings alongside an app icon choice, a font choice, and a light, dark or system appearance setting. Selecting a locked theme opens the same paywall as other paid features.

**What is worth noting:** The lock on the themes is tied to payment rather than to anything the user does in the product, which is what makes them customization content rather than ordinary configuration. Tiimo doesn't lock the app icon choice or the font choice, including its dyslexia-friendly option, the same way, so the paid gate sits specifically on visual identity rather than on accessibility or basic personalization.

**Key findings:**

- Most interface themes are locked behind the paid tier.
- Theme locks are tied to payment rather than to any progression condition.
- The app icon choice includes the product's mascot logo and alternatives.
- The font choice includes a dyslexia-friendly option alongside the default.

**Screenshots needed:** the settings theme picker showing locked and unlocked options; the font choice screen showing the dyslexia-friendly option.

### Expert Guidance

**Implementation summary:** Tiimo's Knowledge area teaches ADHD and planning subjects rather than product usage, and no core function depends on it.

**What was observed:** Tiimo carries a Knowledge area with articles, videos and expert-led courses on subjects like prioritizing tasks with ADHD, mental load in planning, and task initiation, attributed to named ADHD, autism and planning experts. The featured course is broken into an introduction, an application section and a summary.

**How it is presented:** The Knowledge area sits inside the stats tab, opening on the product's own website rather than rendering inside the app, and closes with links out to a podcast on Spotify and a guided Pomodoro video on YouTube.

**What is worth noting:** The material teaches the user's own underlying difficulty rather than how to use Tiimo, which is what separates it from the "Plan like a pro" carousel in the same tab, a walkthrough of the product's own widgets and views that stays product content rather than this. Nothing about planning, task creation or the focus timer depends on any of it, so the whole area can be ignored without losing any function.

**Key findings:**

- The Knowledge area covers ADHD, autism and planning subjects rather than the product's own features.
- Courses are attributed to named experts and broken into ordered lessons.
- The material opens on Tiimo's website rather than inside the app.
- External links from the same area lead to a podcast and a guided Pomodoro video on YouTube.
- Tiimo doesn't state whether finishing a lesson or course is tracked.

**Screenshots needed:** the Knowledge area's article and course list; an opened course lesson showing its introduction, application and summary structure.

---

## Onboarding and first run

Tiimo asks for an account, a marketing preference, two profiling questions, and permission for four different systems before showing any feature, then hands out a streak and a marker before a single task has been completed. This section covers that full sequence.

### O1. Sign-in and first screen

Tiimo opens on a screen headed as an all-in-one planning and productivity tool, offering to continue with Apple, Google or email, with a login route for existing accounts. Background animation on the same screen shows the product running on both a phone and a desktop.

- No option to continue without an account is shown.
- The desktop depiction appears on the very first screen, before any feature is described.

### O2. Marketing consent first

The first screen after sign-in asks whether the user wants updates from Tiimo, offering a choice between declining or accepting news and offers, followed by Continue. No operating system notification permission dialog follows.

- The choice is presented as two stated positions rather than a toggle with a default.
- This question concerns marketing messages rather than device notifications, which are requested separately later.

### O3. Need selection

An onboarding screen asks what the user's biggest need is right now, offering options including organizing the day, remembering tasks, prioritizing to-dos, building routines, supporting focus or work, and an open option, with one selection required to continue.

- Tiimo doesn't state whether this selection changes anything later in the flow or the product.

### O4. Neurodivergence self-identification

The next screen asks whether the user is neurodivergent, offering four options: yes, I think so, no, and I don't know, with no definition or explanation of the term on the screen.

- The question is asked before the product has shown what it does.
- Tiimo doesn't state whether the answer changes any later content, copy or feature.

### O5. User count as social proof

A full screen states that the user is part of more than 500,000 users of Tiimo, with no action beyond continuing.

- The same figure reappears on the paywall that follows immediately after.

### O6. Paywall interrupts onboarding

Immediately after the user count screen, and before the user has created anything or seen the product's own surfaces, Tiimo presents its subscription paywall as a dismissible pop-up.

- Onboarding continues after the paywall is dismissed rather than ending.

### O7. Notification permission

A screen framed around not missing a task offers a single Enable notifications button, with no decline control beside it; tapping it raises the operating system permission dialog, where declining is available.

- The screen's framing names forgetfulness as the problem being addressed.

### O8. Calendar import

A screen invites the user to import their calendar for a quick start, stating that users who import their personal calendar are 46% more productive on Tiimo, and offers Skip or Import calendar. Importing raises a calendar access permission request, then a list of available calendars to choose from.

- The 46% figure is presented without a source or definition of the measure.
- A skip route is available, and was used for the preceding step as well.

### O9. Promotional interstitial

A screen asking whether the user is ready to unlock their potential appears between the calendar step and the routine builder, and advances on its own into the next screen.

### O10. Morning routine builder

A screen invites the user to add morning routines to their schedule from a fixed set of habit chips, including waking up, making the bed, brushing teeth, and similar habits, offering a "Suggest for me" control, with at least one habit required to continue.

- The habits are supplied by the product and selected by the user rather than written by the user.
- Tiimo doesn't state whether these selections recur automatically on later days.

### O11. Afternoon routine builder

The same pattern repeats for daytime habits such as planning the day, studying, starting work, checking emails and taking a lunch break. Using "Suggest for me" filled in a specific set of habits rather than a random one.

- The same minimum of one selection applies.

### O12. Evening routine builder

A third builder covers evening habits such as having dinner, journaling, reading, and going to bed.

- The three builders together seed the user's day across all three time bands before first use.

### O13. Completion taught before it's used

A screen headed to celebrate the user instructs them to tap a specific seeded task to complete it, then plays a check mark followed by a confetti animation.

- The tutorial uses one of the habits the user selected minutes earlier rather than a placeholder task.
- The celebration is shown as the point of the interaction, ahead of any productivity outcome.

### O14. First streak and marker unlocked by a gesture

A screen states that the user's first streak starts today, then presents a marker named Ignition that requires a swipe to unlock, after which the app states this is the user's first milestone.

- The unlock requires a deliberate gesture rather than being granted silently.
- The first marker is granted for the first day of the streak rather than for any amount of work.
- Tiimo uses the word milestone for this marker here, and the words trophy and achievement for the same family of markers elsewhere.

### O15. App tracking request on arrival at the home screen

As the home screen loads for the first time, while the animation for the first marker is still playing, Tiimo presents its own explanation that this version of iOS requires permission to track activity from other apps and websites, stating that the app carries no advertising and uses the information to see where the user first heard about it and to track marketing campaigns with its creator and partner network.

- The request lands on top of the first marker celebration rather than after it.

---

## Core loop and automation

Tiimo's day runs on a timeline of tasks a user creates directly or through its AI assistant, organized into anytime, morning, afternoon and evening bands. This section covers that timeline, task creation, the assistant, the separate to-do lists, and the focus timer.

### O16. Day timeline with two counters

The home tab shows the current day as a timeline, with a flame and completed task count in the top left and a three dot menu in the top right. Below sits a seven day strip, two promotional widgets, a dismissible view-switching hint, and the day's tasks grouped under Anytime, Morning, Afternoon, Evening and Done.

- The three dot menu offers rescheduling tasks, exploring routines, logging mood, and grouping options.
- The streak and completed task counters in the header also appear on other tabs.
- Tasks created without a time land in the Anytime group.

### O17. Task creation

A plus control opens task creation, where a task can be typed or dictated, with controls for repetition and placement in the day. Repetition offers daily, weekly, monthly, yearly and custom; placement offers anytime, which is the default, along with morning, afternoon, evening, a fixed time, all day and to-do.

- A three dot control on the creation screen opens further fields for title, duration, alarm and subtasks.
- Repetition is available at the moment of creation rather than as a later conversion.

### O18. AI assistant turns speech into tasks

A dedicated tab opens Tiimo's assistant, which accepts typed or spoken input describing what the user needs to do and returns a set of structured tasks, each with an allocated duration.

- Using the speak control raises speech recognition and microphone permission requests.
- The assistant allocated durations that weren't stated in the input.
- The number of tasks returned matched the number of distinct pieces of work described.

### O19. Assistant invented a scheduled time

One of four tasks the assistant returned carried a start time that hadn't been given, corresponding to the clock time at which the request was being spoken rather than any stated schedule.

- The other three tasks in the same batch were returned as Anytime rather than with invented times.
- Tiimo doesn't state whether it corrects or flags a time entered this way.

### O20. Assistant can create tasks but not reschedule them

After creating tasks, Tiimo's assistant offered to suggest an ordering, then reported that it couldn't find the to-dos to schedule when asked to act on that order. Asked afterward to move tasks to a new time, it replied that rescheduling needs a different tool it doesn't have access to, offering instead to create new tasks at the requested time.

- Its proposed workaround for a reschedule request is creating duplicates rather than moving the originals.
- Tasks created through the assistant appear under the same anytime, morning, afternoon and evening groupings as manually created ones.
- Tiimo doesn't display any usage limit, quota or cooldown on the assistant.

### O21. Separate to-do lists

The to-do tab holds three lists, High, Medium and Low, kept separate from the day's scheduled tasks; it started empty even though the calendar already held tasks seeded during onboarding.

- A to-do can be moved between the three lists by selecting it.
- Tasks placed on the day and items held in the to-do lists are separate collections rather than two views of the same list.

### O22. Automatic icon and tag on creation

Typing a to-do applies a matching emoji icon and a tag automatically, before the user chooses one. The creation screen also offers a duration and, through a further control, subtasks and notes.

- The available tag vocabulary is fixed for a user without the paid tier; suggesting, creating or editing tags is locked.

### O23. Assistant-generated task breakdown

Selecting a task opens options including copying it, moving it between lists, scheduling it, starting it, and a starred assistant option to suggest a breakdown, which returned five ordered subtasks for the task it was used on.

- The star marking distinguishes assistant features from ordinary controls elsewhere in the app.
- The returned subtasks were sequential steps of the parent task rather than alternatives.

### O24. Completion produces a celebration

Completing a task plays a check mark and a confetti animation, and finishing a timed focus block plays the same confetti treatment.

- Tiimo separately lists app sounds in settings for task creation, task completion, a task countdown, and completing a subtask.

### O25. Focus timer

The focus tab presents a dial in fifteen minute increments that can be dragged to set a timer length, capped at sixty minutes, alongside preset buttons and a start control. A running timer shows its start and end times, a countdown, a pause control and a control to add one minute.

- A "Tune in" control sets background audio, set to autoplay by default, with several music options and a no-music choice.
- The focus timer is listed as a paid tier feature on the paywall while remaining reachable in this account.

### O26. Multiple profiles

Settings offers the ability to add a new profile and to name or rename one, without explaining what a profile is or what separating them changes.

- Tiimo doesn't state whether profiles separate schedules, people, or contexts such as work and home.

---

## Goals and progression

Tiimo's progression runs on two counters, a streak of days and a tally of completed tasks, and two tracks of named markers built from them, alongside a stats header and a mood and reflection surface. This section covers all of it.

### O27. Streak

A flame with a day count sits in the top left of the main screens, and the stats tab shows the same count as a position against the next marker on the streak track.

- The streak began on the first day of use, announced during onboarding rather than after a day had passed.
- Tiimo doesn't state what qualifies a day toward the count or what happens to it after a missed day.
- Notification settings carry a streak banner toggle.

### O28. Completed task counter

A second counter beside the flame records the number of tasks completed, shown on the stats tab as a position against the next marker on the task track.

- The counter is a running total across use rather than a per-day figure.
- The counter can't be spent, exchanged or reduced by anything the app does.

### O29. Two marker tracks, shown as marbles

The stats tab shows a row of circular markers, the first three of which were unlocked as Ignition for the first streak day, Spark for the first completed task, and Pulse for further tasks completed. The markers run along two tracks, one keyed to completed tasks with thresholds at 7, 14, 30, 60, 110, 160, 250 and 360 continuing to 30,000, and one keyed to streak days with thresholds at 3, 7, 10, 14, 21 and 30 continuing to 1,600.

- Markers not yet reached are shown in position with a lock and their unlock condition stated.
- Each marker is individually named and individually depicted.
- No marker grants anything beyond itself.

### O30. Unlock event

Unlocking a marker produces a banner separate from the ordinary counter update, naming the criterion that was satisfied, and changes the color of the gradient behind the marker row to match the marker just unlocked.

- The unlocked marker remains in the row afterward rather than being consumed.
- The gradient follows the most recent marker automatically and can't be set independently.

### O31. Stats header

The stats tab opens with an editable display name that Tiimo states can be changed at any time, with a Share control and a Settings control in the top corners.

### O32. Feature adoption carousel

A carousel in the stats tab steps through a series of feature cards, including the AI co-planner, widgets, the web planner, adding tasks, customizing the planner, tracking mood, and celebrating wins, each with a short video.

- The carousel mixes free surfaces with paid tier features in one list.
- It sits inside the stats tab rather than in settings or help.

### O33. Mood log and daily reflection

A mood and reflection area in the stats tab shows a week view; tapping a day opens a well-being screen, marked as powered by Apple Health, inviting the user to say how they feel. Responding raises an Apple Health permission request, then presents a slider running from very unpleasant to very pleasant, with the product's mascot changing expression as the slider moves. After responding, Tiimo states the mood was logged, then presents a reflection screen asking whether any of the day's completed tasks may have played a role.

- The reflection screen is reached only by responding to the mood step first.
- Attempting to mark a task as having played a role opened that task's own editing view instead, and no selection was registered.
- Tiimo states the logged mood can be revisited and changed.
- The mood value is written to and read from Apple Health rather than held only in the app.

---

## Access and eligibility

Tiimo's free tier covers planning and to-do basics, with the AI co-planner, focus timer, themes and several notification options locked behind its paid tier, alongside the operating system permissions the app requests along the way. This section covers all of it.

### O34. The free and paid split

Tiimo's paywall states that the free tier carries planning and the to-do list, while Tiimo Pro adds the AI co-planner, the focus timer, live activities and widgets, the web app, and calendar integration. Locked controls encountered elsewhere include notification timing options, reminder import, most themes, and the create and edit tag controls.

- Locked controls are shown in place rather than hidden, so the paid surface is visible from the free tier throughout.
- The assistant and the focus timer were both reachable in this account despite being listed as paid features.
- Tiimo doesn't state whether a trial, a grace period or a usage allowance explains that access.

### O35. Marker positions locked until their threshold

Marker positions beyond the ones reached are shown with a lock and the condition that opens them, such as a stated number of days still to reach.

- The lock is a progression lock rather than a purchase lock; no marker can be purchased.

### O36. Presentation options and their locks

Settings offers a set of themes, of which most are locked and some are unlocked, a choice of app icons, a font choice between the default and a dyslexia-friendly face, and an appearance setting of system, light or dark.

- Theme locks are attributed to the paid tier rather than to progression.
- Tiimo doesn't state whether the app icon or font choice carries any lock.
- Sounds are separately configurable for task creation, task completion, a task countdown, subtask completion, and focus mode music.

### O37. Operating system permissions gate several surfaces

Tiimo raised permission requests for notifications, full calendar access, speech recognition, the microphone, Apple Health state of mind, and app tracking, each attached to the surface that needs it.

- Each request is preceded or accompanied by the app's own explanation of why it's being asked.
- The tracking request is the only one whose framing names a purpose outside the product's own function.

---

## Economy and resources

Tiimo runs no currency, balance or tradable unit of any kind. This section states that plainly.

### O38. No economy

No currency, balance, points total, ticket, token, material or tradable unit appears anywhere in Tiimo. The only two quantities the product maintains, the streak day count and the completed task count, can't be spent, exchanged, transferred or reduced by anything the app does.

- Nothing in the product is priced in an internal unit; the only prices are in real money on the paywall.

---

## Social

Tiimo has no social layer at all. This section states that plainly.

### O39. No other identified person appears anywhere

Tiimo shows no friends, followers, contacts, groups, teams, messaging, shared state, comparison against named others, or transfers between people at any point.

- The only counts of other people are the marketing figures naming more than 500,000 users and the review counts on the paywall and rating prompts, which name no one and position the user against no one.
- Tiimo doesn't state what separating profiles in settings actually changes.

---

## Reach beyond the app

Tiimo's outward-facing surfaces include a share control, a screenshot-triggered social prompt, a knowledge library with expert courses, and a second surface on desktop and web. This section covers all of it.

### O40. Share control on the stats tab

A Share control sits in the top corner of the stats tab, described as sharing the user's profile and the app itself with other people.

- Tiimo doesn't state what the share composes or where it sends it.

### O41. Screenshot detection asks for a social tag

Taking a screenshot of the home screen produces an in-app banner asking whether the user is posting to social and inviting them to tag the app's handle.

- The banner is triggered by the screenshot event itself rather than by a share control.
- It asks for attribution on content already captured rather than offering content to send.
- It appears without any prior prompt or setting.

### O42. Knowledge library

A Knowledge control in the stats tab opens a library of articles and videos, including pieces on prioritizing tasks with ADHD, how AI reduces the mental load of planning, and task initiation, which open on Tiimo's website. Further sections carry more articles on brain differences and support for focus, planning and emotions.

- The library opens outside the app rather than rendering in place.
- Its subject is the user's own difficulties rather than the product's features.

### O43. Expert-led courses

The same area holds expert-led courses described as neuro-inclusive guidance from ADHD, autism and planning experts, presented with a named expert who works with the product. The featured course carries a description, the expert's credentials, a video, and a lesson list covering an introduction, an application section and a summary.

- The courses are structured into ordered lessons rather than offered as single articles.
- Tiimo doesn't state whether completing a lesson or course is tracked or logged.

### O44. External destinations

The stats tab lists routes to share feedback, an FAQ, following the app on Instagram, and listening to its podcast on Spotify. The knowledge area closes with an invitation to take a free course and an option to follow a guided Pomodoro video on YouTube.

- The podcast carries a run of episodes, none newer than 2024 as shown.
- Three separate external platforms are reachable from one screen.

### O45. Desktop and web as a second surface

The first launch screen shows the product running on a phone and on a desktop, the home screen carries a widget promoting Tiimo on desktop, and the feature carousel promotes the web planner and desktop use. The web app sits behind the paid tier.

- The second surface is promoted from three separate places inside the phone app.

---

## Monetization

Tiimo's monetization runs through one paywall, a persistent upgrade control, an upsell card on the stats tab, paid notification timing, and purchase administration in settings. This section covers all of it.

### O46. The paywall

Tiimo's paywall offers a monthly plan at $12 with no trial, and an annual plan at $54 with a seven day trial, marked most popular. Below the plans it carries award badges, a count of five star reviews with featured quotes, an average rating, and an Apps We Love by Apple badge, followed by a free versus Pro comparison table, a restore purchase control, and a start trial control.

- The annual plan is more than 50 percent cheaper per month than the monthly plan, though that comparison isn't stated on the screen.
- The trial attaches only to the annual plan, which also carries the recommendation marker.
- The screen closes with a provenance claim about where the product is made rather than a feature claim.

### O47. A persistent Get Pro control

A floating Get Pro button sits at the top of the screen throughout use, including while the assistant is working, and opens the paywall when tapped.

- Locked controls encountered in settings and in task creation lead to the same paywall.

### O48. Upsell card inside the stats tab

The stats tab carries a card inviting the user to unlock Tiimo Pro for access to all features and smarter AI planning, positioned between the marker row and the mood and reflections area.

### O49. Paid notification timing

Within notification settings, a notification before a task starts, a halfway point notification, and a task finished notification are locked behind the paid tier, while the base notification and its sound are not.

- What's sold here is the timing and density of prompting rather than a feature the product doesn't otherwise have.

### O50. Purchase administration

Settings holds account and subscription settings, restore purchase, a redeem offer code control, email settings, account deletion, changing the email address, signing out, and links to the privacy policy and terms of service.

- Restore purchase appears both here and on the paywall.

---

## Return triggers

Tiimo asks for a rating twice before the user has completed a single task, and separately runs a fixed schedule of daily and weekly notifications tied to the time bands set up during onboarding. This section covers both, along with the standing rating entry and the streak and level banner toggle.

### O51. Rating prompt before first use

Before the user has completed a single task, Tiimo shows a rating screen with five stars already selected, stating it was made for people like the user, alongside featured reviews and a prompt to tap a star or rate it on the App Store.

- The five stars are pre-selected rather than shown empty.
- The prompt appears inside onboarding, ahead of the completion tutorial and the first streak.

### O52. Second rating prompt after AI task creation

Selecting Create tasks inside the assistant produces a second rating prompt, placed immediately after that action succeeds.

- Two separate rating prompts appear within the first use of the app.

### O53. Notification categories

Notification settings cover the notification sound, three separate task-timing notifications (before a task starts, halfway through, and when it finishes), time of day reminders, a streaks and levels banner, and further categories for motivational messages and product updates.

- Three of the task-timing notification categories are locked behind the paid tier; the base notification and its sound are not.

### O54. Fixed daily and weekly reminder schedule

Tiimo's time of day reminders are set to specific clock times: 7am for anytime tasks, 8am for morning tasks, 11:50am for afternoon tasks, 5:50pm for evening tasks, 8pm to review the day, and Sunday at 3pm to review the week.

- Four of these six reminders fire every day; the other two are a daily review and a weekly review.
- Tiimo doesn't state whether these times are fixed defaults or were set during onboarding.

### O55. Streak and level banner toggle

A single toggle in notification settings covers both streaks and levels under one banner setting.

- This is the only place in the app where the word levels appears; no level state or ordered series of levels shows up anywhere else.
- The streak is the only one of Tiimo's progression counters whose value depends on returning on a later day rather than doing more within the same day.

### O56. Rate the app entry point

The stats tab carries a standing Rate the app entry, alongside share feedback and an FAQ link.

- This is a third route into the same rating behavior as the two earlier prompts.
