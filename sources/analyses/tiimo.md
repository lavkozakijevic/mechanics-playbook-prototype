# Tiimo: behavioral design analysis

**Session date:** 18 May 2026
**Additional sessions:** None.
**As observed:** 18 May 2026
**App version:** None.
**Analysis date:** 13 Sep 2026
**Last updated:** 13 Sep 2026

Source. This analysis is built from one Granola walkthrough session, titled "Timo app analysis and feedback" and recorded on 18 May 2026, retrieved in full as a verbatim transcript rather than as a summary. The session is a single continuous narrated walkthrough of the iOS app by one speaker, running from the first launch screen and sign-in through the whole onboarding flow, the four main tabs, the mood and reflection surface, the knowledge area, and the settings screens. The transcript renders the product name inconsistently as Timo, Teemo, TiVo, Temu and T Mobile; this analysis uses Tiimo throughout, following the speaker's own spelling of T-I-I-M-O at the start of the session. Two absences in the source are load bearing and are carried into the record: the session covers a single day of use, so no rule that depends on a later day was observable, and the session narrator asked that the subject matter dictated into the app's assistant not be reproduced, so that dictation is described by its shape rather than its content. No prior analysis of this app, published material, or outside knowledge of it was consulted.

# Pass one: observation record

1. Onboarding and first run: O1 to O15
2. Core loop and automation: O16 to O26
3. Goals and progression: O27 to O33
4. Access and eligibility: O34 to O37
5. Economy and resources: O38 to O38
6. Social: O39 to O39
7. Reach beyond the app: O40 to O45
8. Monetization: O46 to O50
9. Return triggers: O51 to O56

## Onboarding and first run

**O1. First screen and sign-in.**

**Observed:** The app opens on a screen headed "all in one planning and productivity" offering Continue with Apple, Continue with Google, and Continue with email, with a login route for people who already have an account (tier: directly observed). Background animation on the same screen shows the product running on a phone and on a desktop (tier: directly observed). The walkthrough signed in with Apple (tier: directly observed).

**Detail:**
- No route past the sign-in options was presented, so an account exists before anything else happens (tier: strongly supported, no skip or guest option appeared on the screen).
- The desktop depiction sits on the first screen, before any feature is described (tier: directly observed).

*Cross-reference: O45.*

**O2. Marketing consent is the first question asked.**

**Observed:** The first screen after sign-in asks "Would you like updates from Tiimo?" with two options, one declining to be notified about updates, news and exclusive offers, and one accepting them, followed by Continue (tier: directly observed). No operating system notification permission dialog followed this screen (tier: directly observed).

**Detail:**
- The two options are presented as a choice between stated positions rather than as a toggle with a default (tier: directly observed).
- The narrator selected the accepting option and expected a system prompt, which did not appear; the question concerned marketing messages rather than device notifications (tier: strongly supported, the system prompt appears later at a separate screen).

*Cross-reference: O7.*

**O3. Need selection.**

**Observed:** An onboarding screen asks "What's your biggest need right now?" under the framing "To give you the best start, we'd love to know what you most need help with in your daily life" (tier: directly observed). The listed options are organize my day and time, remember my tasks, prioritize to-dos, build and stick to routines, support focus or work, and something else, with one selection followed by Continue (tier: directly observed).

**Detail:**
- Whether the selection changes anything later in the flow or in the product was not observed (tier: unresolved).

**O4. Neurodivergence self-identification.**

**Observed:** The next screen asks "Are you neurodivergent?" under the line "Tiimo helps you stay focused and plan your day with ease. Which of these feels most like you?" (tier: directly observed). The options are I am neurodivergent, I think I am neurodivergent, I am not neurodivergent, and I don't know (tier: directly observed). The screen carries no definition or explanation of the term (tier: directly observed).

**Detail:**
- The answer given in the session was I don't know (tier: directly observed).
- Whether the answer changes any later content, copy or feature was not observed (tier: unresolved).
- The question is asked before the product has shown what it does (tier: directly observed).

*Cross-reference: O15, O43.*

**O5. User count as social proof.**

**Observed:** A full screen states "You're part of more than 500,000 happy users of Tiimo" (tier: directly observed).

**Detail:**
- The screen carries no action beyond continuing (tier: directly observed).
- The same figure reappears on the paywall that follows immediately (tier: directly observed).

*Cross-reference: O6, O46.*

**O6. A paywall interrupts onboarding before any use.**

**Observed:** Immediately after the user count screen, and before the user has created anything or seen the product's own surfaces, the app presents the subscription paywall as a pop-up (tier: directly observed). The paywall can be dismissed with an X (tier: directly observed).

**Detail:**
- The position is the notable behavior here; the offer's contents and terms are recorded separately (tier: directly observed).
- Onboarding continues after dismissal rather than ending (tier: directly observed).

*Cross-reference: O46.*

**O7. Notification permission.**

**Observed:** A screen headed "Never miss a task. Turn on notifications" tells the user "We'll nudge you with tailored notifications and reminders so you can stay on top of even the most hectic days", and shows an image of what a notification looks like on screen (tier: directly observed). The screen offers a single button, Enable notifications, with no decline control beside it, and tapping it raises the operating system permission dialog (tier: directly observed).

**Detail:**
- The screen's framing names forgetfulness as the problem being solved (tier: directly observed, the heading addresses "the forgetful").
- The only in-app control is the accepting one; declining is available only in the system dialog behind it (tier: directly observed).

*Cross-reference: O2, O53.*

**O8. Calendar import.**

**Observed:** A screen headed "Import your calendar for a quick start" states that "users who import their personal calendar are 46% more productive on Tiimo", shows what the schedule looks like once a calendar is added, and offers Skip or Import calendar (tier: directly observed). Choosing import raises a full calendar access permission request, then a selection screen listing the available calendars, including iCloud, work, home, iCloud calendar and Gmail (tier: directly observed).

**Detail:**
- The selection screen states "You can always change this and the visuals in your settings" (tier: directly observed).
- The 46% figure is presented without a source or definition of the measure (tier: directly observed).
- The skip route is present and was used for the preceding step as well (tier: directly observed).

*Cross-reference: O37.*

**O9. Promotional interstitial.**

**Observed:** A screen asking "Are you ready to unlock your potential?" appears between the calendar step and the routine builder, and advances on its own into the next screen (tier: directly observed).

**Detail:** None.

**O10. Morning routine builder.**

**Observed:** A screen headed "Mornings" invites the user to "Add morning routines to your schedule. Pick habits to start your day strong" and presents a fixed set of habit chips (tier: directly observed). The listed habits are wake up, morning prayer, make bed, brush teeth, drink water, take meds, shower, get dressed, breakfast, have coffee, plan your day, quick tidy, and commute to work (tier: directly observed). A "Suggest for me" control is offered, and at least one habit must be chosen before the step can be completed (tier: directly observed).

**Detail:**
- The step ends with a button reading "Continue with my routines" (tier: directly observed).
- The habits are supplied by the product and selected by the user rather than written by the user at this point (tier: directly observed).
- Whether these selections recur automatically on later days was not observed (tier: unresolved).

*Cross-reference: O11, O12, O17.*

**O11. Afternoon routine builder.**

**Observed:** The same pattern repeats for the afternoon under "Add daytime routines to your schedule. Stay productive, balanced and on track", listing plan your day, study, start work, check emails, deep work, lunch, coffee break, drink water, workout, pick up kids, grocery shopping, socialize, and commute home (tier: directly observed). Using "Suggest for me" filled in start work, lunch and drink water (tier: directly observed).

**Detail:**
- The same minimum of one selection applies (tier: directly observed).
- The suggestion control produces a specific set rather than a random one within this single observation (tier: plausible, one use was seen).

*Cross-reference: O10, O12.*

**O12. Evening routine builder.**

**Observed:** The third step covers the evening under "Add evening routines to your schedule, wind down with habits that help you rest", listing have dinner, workout, yoga, homework, quick tidy, do laundry, take a shower, evening prayer, journal, watch TV, read a book, walk the dog, drink tea, brush teeth, and go to bed (tier: directly observed).

**Detail:**
- The three builders together seed the user's day across all three time bands before first use (tier: directly observed).

*Cross-reference: O10, O11, O16.*

**O13. Completion is taught before it is used.**

**Observed:** A screen headed "Celebrate yourself" states "When you finish a task, tap a task to check it off, then watch what happens", instructs the user to tap a specific seeded task to complete it, and plays a check mark followed by a confetti animation (tier: directly observed).

**Detail:**
- The tutorial uses one of the habits the user selected minutes earlier rather than a dummy task (tier: directly observed).
- The celebration is shown as the point of the interaction, ahead of any productivity outcome (tier: directly observed).

*Cross-reference: O24, O51.*

**O14. First streak and first marker, unlocked by a gesture.**

**Observed:** The next screen states "Your first streak starts today. One small step at a time. We will celebrate every step with you" (tier: directly observed). It then presents "Ignition, ready to unlock" and requires the user to swipe an arrow to unlock it, after which the app states that this is the user's first milestone and tells the user to keep going (tier: directly observed).

**Detail:**
- The unlock requires a deliberate gesture rather than being granted silently (tier: directly observed).
- The first marker is granted for the first day of the streak rather than for an amount of work (tier: strongly supported, the marker Ignition is later shown at the head of the streak day track).
- The app uses the word milestone for this marker here, and the words trophy and achievement for the same family of markers elsewhere (tier: directly observed).

*Cross-reference: O27, O29, O30.*

**O15. App tracking request on arrival at the home screen.**

**Observed:** As the home screen loads for the first time, and while the animation for the first marker is still playing, the app presents its own pre-prompt stating that this version of iOS requires permission to track activity from other apps and websites (tier: directly observed). The pre-prompt states "We're an ad free app and primarily use this information to see where you first heard about us and track marketing activity and campaigns with our neurodivergent partners and content creators", and offers Continue or No thanks, with the system tracking dialog following Continue (tier: directly observed).

**Detail:**
- The request names creator and partner marketing as the purpose, and states the app carries no advertising (tier: directly observed).
- The request lands on top of the first marker celebration rather than after it (tier: directly observed).

*Cross-reference: O4, O30.*

## Core loop and automation

**O16. The home screen is a day timeline with two counters above it.**

**Observed:** The home tab shows the current day as a timeline, with a flame and a completed task count in the top left corner and a three dot menu in the top right (tier: directly observed). Below the header sits a seven day strip, then two promotional widgets reading "Add smart widgets" and "Try Tiimo on desktop", then a dismissible hint reading "Pinch for list view, pinch with two fingers to switch between timeline and list view", then the day's tasks grouped under Anytime, Morning, Afternoon, Evening and Done (tier: directly observed). Each group can be expanded or collapsed by tapping its heading (tier: directly observed).

**Detail:**
- The three dot menu offers reschedule tasks, explore routines, log mood, and grouping options (tier: directly observed).
- A plus control opens task creation from this screen (tier: directly observed).
- The two counters in the header are the streak day count and the completed task count, and they appear on other tabs as well (tier: directly observed).
- Tasks created without a time land in Anytime (tier: directly observed).
- The hint carries its own dismissal so it does not reappear (tier: directly observed).

*Cross-reference: O12, O27, O28, O45.*

**O17. Task creation.**

**Observed:** The plus control opens a text field where the task can be typed or dictated, with controls for repetition and for placement in the day (tier: directly observed). Repetition offers daily, weekly, monthly, yearly and custom, and placement offers anytime, which is the default, morning, afternoon, evening, at time, all day and to-do (tier: directly observed). A three dot control opens further fields for the task title, duration, alarm and subtasks (tier: directly observed).

**Detail:**
- Anytime is the default placement, so a task created without further input is unscheduled within the day rather than unplaced (tier: directly observed).
- The at time option fixes the task to a clock time on that day (tier: directly observed).
- Repetition is available at creation rather than as a later conversion (tier: directly observed).

*Cross-reference: O10, O16, O22.*

**O18. The assistant turns spoken input into a set of tasks.**

**Observed:** A dedicated tab opens on the product's mascot above the line "Drop your thoughts. I'll turn them into a plan. What's today's plan?", with a text field and a speak control (tier: directly observed). Using the speak control raises speech recognition and then microphone permission requests, after which the user dictates a loosely ordered spoken brief covering several pieces of work and their rough shape (tier: directly observed). On sending, the assistant returned four tasks, each with an allocated duration, most marked Anytime, and offered a Create tasks control (tier: directly observed).

**Detail:**
- The input accepted is unstructured speech rather than a form (tier: directly observed).
- The assistant allocated durations the user did not state (tier: directly observed).
- The number of tasks returned corresponded to the number of distinct pieces of work described (tier: strongly supported, four items were described and four were returned).
- The content of the dictation is not reproduced here at the session narrator's request (tier: directly observed).

*Cross-reference: O19, O20, O34.*

**O19. The assistant invented a scheduled time.**

**Observed:** One of the four returned tasks carried a start time of 10:13 that the user had not given (tier: directly observed). That time corresponded to the clock time at which the dictation was being spoken (tier: directly observed).

**Detail:**
- The other three tasks were returned as Anytime rather than with invented times (tier: directly observed).
- The narrator identified the time as incorrect at the moment it appeared (tier: directly observed).
- Whether the app corrects or flags such an entry was not observed (tier: unresolved).

*Cross-reference: O18, O20.*

**O20. The assistant proposes an order, then reports what it cannot do.**

**Observed:** After Create tasks, the assistant stated that the day was set, listed the tasks, and asked "Want me to help arrange them?", then stated "Your day has some anytime tasks and one scheduled task. Want me to suggest an order or keep it flexible?" (tier: directly observed). On being asked to suggest an order it returned an ordered list and offered to start, then replied that it could not find those to-dos to schedule and offered instead to create them as new anytime tasks and schedule them in the best slots (tier: directly observed). Asked later to move the tasks to start at 13:00, it replied that moving tasks after creation requires a different tool which it does not have access to, and offered to create new tasks at 13:00 instead (tier: directly observed).

**Detail:**
- The assistant can create tasks but reported that it cannot reschedule them once created (tier: directly observed).
- Its proposed remedy for a rescheduling request is duplication followed by deletion of the originals (tier: directly observed).
- Tasks created through the assistant did appear on the calendar under the anytime, morning, afternoon and evening groupings (tier: directly observed).
- No usage limit, quota, cooldown or counter was displayed for the assistant at any point in the session (tier: directly observed); whether one exists was not observed (tier: unresolved).
- A persistent Get Pro control floated above this surface throughout (tier: directly observed).

(sequence caveat: the 13:00 exchange took place after the walkthrough had left the assistant tab, visited the calendar and paused, then returned, so it does not follow the preceding exchange immediately in app time.)

*Cross-reference: O18, O19, O47.*

**O21. The to-do tab is a separate, initially empty surface.**

**Observed:** The to-do tab presents three lists, High, Medium and Low, and was empty after onboarding even though the calendar held the seeded routine tasks (tier: directly observed). The same two header counters and a plus control appear here (tier: directly observed).

**Detail:**
- Tasks placed on the day and items held in the to-do lists are separate collections rather than two views of one list (tier: strongly supported, the calendar held tasks while the to-do tab showed none).
- A created to-do can be moved between the High, Medium and Low lists by selecting it (tier: directly observed).

*Cross-reference: O16, O22.*

**O22. Creating a to-do applies an icon and a tag without being asked.**

**Observed:** Typing a to-do produced an emoji icon matched to the wording of the task and a tag, in the observed case self care, applied automatically (tier: directly observed). The creation surface offers a duration from five minutes to two hours, and a three dot control opens subtasks, notes and tags (tier: directly observed). The available tags are pets, human needs, hobby, household, commute, preparation, relationships, self care, study, work, exercise, health, social and animal, and the controls to suggest tags, create a new tag and edit tags are locked (tier: directly observed).

**Detail:**
- The tag and icon were applied before any user input on the subject (tier: directly observed).
- The locked tag controls carry the paid tier's lock rather than a progression lock (tier: strongly supported, the session attributes the lock to the paywall and the same lock appears on other paid features).
- The supplied tag vocabulary is fixed for a user without the paid tier (tier: strongly supported, creation and editing are the locked controls).

*Cross-reference: O34, O47.*

**O23. Task actions include an assistant-generated breakdown.**

**Observed:** Selecting a task opens make a copy, move to list, schedule, suggest breakdown, start task, edit to-do and delete to-do (tier: directly observed). Suggest breakdown carries a star marking it as an assistant feature, and produced five ordered subtasks for the observed task (tier: directly observed).

**Detail:**
- The subtasks returned were sequential steps of the parent task rather than alternatives (tier: directly observed).
- The star marking distinguishes assistant features from ordinary controls across the app (tier: plausible, one marked control was observed).

*Cross-reference: O18, O34.*

**O24. Completion produces a celebration.**

**Observed:** Completing a task plays a check mark and a confetti animation, and completing a focus session plays a confetti animation as well (tier: directly observed).

**Detail:**
- The same celebration treatment is applied to two different completion events (tier: directly observed).
- App sounds for creating a task, completing a task, a task countdown, and completing a subtask item are separately listed in settings (tier: directly observed).

*Cross-reference: O13, O25, O30.*

**O25. Focus timer.**

**Observed:** The focus tab presents a dial marked in fifteen minute increments that can be dragged to set a length, capped at sixty minutes, alongside preset buttons for 5, 10, 15, 30, 45 and 60 minutes and a start control (tier: directly observed). A "Tune in" control sets background audio, set to autoplay by default, with Lo-Fi, Celestial, Groovy Beats, Tiimo Town, Acoustic and no music (tier: directly observed). A running session shows its start and end clock times, a countdown, a pause control and a plus one minute control (tier: directly observed).

**Detail:**
- The maximum session length is sixty minutes (tier: directly observed).
- A sand clock emoji on the running screen is static rather than animated (tier: directly observed).
- The plus one minute control extends a session in progress (tier: directly observed).
- The focus timer is listed as a paid tier feature on the paywall while being reachable in this session (tier: directly observed); what a user without the paid tier can do with it was not observed (tier: unresolved).

*Cross-reference: O24, O34, O46.*

**O26. Multiple profiles.**

**Observed:** Settings offers to add a new profile and to name or rename a profile (tier: directly observed). The app gives no explanation of what a profile is or what separating them does (tier: directly observed).

**Detail:**
- Whether profiles separate schedules, people, or contexts such as work and home was not observed (tier: unresolved).

## Goals and progression

**O27. Streak.**

**Observed:** A flame with a day count sits in the top left of the main screens, and the stats tab shows the streak as "Streak 1 out of 3 days" beneath a progress bar (tier: directly observed). The stated target of that bar is the next marker on the streak track (tier: directly observed).

**Detail:**
- The streak began on the first day of use, announced during onboarding rather than after a day had passed (tier: directly observed).
- The counter is expressed in days (tier: directly observed).
- What qualifies a day, and what happens to the count after a missed day, were not observed; the session covers one day (tier: unresolved).
- Notification settings carry a streak banner toggle (tier: directly observed).

*Cross-reference: O14, O29, O55.*

**O28. Completed task counter.**

**Observed:** A second counter beside the flame records the number of tasks completed, and the stats tab shows it as "4 out of 7" beneath a progress bar toward the next marker on the task track (tier: directly observed).

**Detail:**
- The counter is a running total of completed tasks rather than a per day figure (tier: strongly supported, it accumulated across the session and its stated target is a lifetime threshold).
- The counter is not spendable, exchangeable or reducible by any observed action (tier: directly observed).

*Cross-reference: O29, O38.*

**O29. Two ordered marker tracks, shown as marbles.**

**Observed:** The stats tab shows a row of circular markers described as marbles, the first two of which were unlocked in the session as Ignition, for the first day of the streak, and Spark, for the first completed task (tier: directly observed). A third, Pulse, unlocked later in the session (tier: directly observed). The markers run along two tracks, one keyed to completed tasks with thresholds at 7, 14, 30, 60, 110, 160, 250 and 360 and continuing to 30,000, and one keyed to streak days with thresholds at 3, 7, 10, 14, 21 and 30 and continuing to 1,600 (tier: directly observed).

**Detail:**
- Markers not yet reached are displayed in position with a padlock and their unlock condition, for example unlocking in three days (tier: directly observed).
- The two tracks are keyed to the two header counters (tier: directly observed).
- Each marker is individually named and individually depicted (tier: strongly supported, three names were seen and the remaining positions are shown as distinct locked marbles).
- No marker was observed to grant anything beyond itself (tier: directly observed).
- The thresholds are disclosed in advance rather than hidden (tier: directly observed).

*Cross-reference: O14, O27, O28, O30, O35.*

**O30. Unlock event.**

**Observed:** Unlocking a marker produces a banner at the top of the screen, in the observed case "Trophy unlocked. You have completed one task", separate from the ordinary counter update (tier: directly observed). Each new marker also changes the color of the gradient behind the marker row to match that marker (tier: directly observed).

**Detail:**
- The banner names the criterion that was satisfied (tier: directly observed).
- The unlocked marker remains in the row afterwards rather than being consumed or dismissed (tier: directly observed).
- The gradient follows the most recent marker automatically and cannot be set independently (tier: strongly supported, the session describes it as reflecting the color of the marble just unlocked).

*Cross-reference: O14, O24, O29.*

**O31. Stats header.**

**Observed:** The stats tab opens with an editable display name under "What should we call you?", which the app states can be changed at any time, with a Share control and a Settings control in the top corners (tier: directly observed).

**Detail:**
- The name is a display name rather than an account identity (tier: plausible, the account was created through Apple sign-in and the name is offered as changeable at any time).

*Cross-reference: O40.*

**O32. Feature adoption carousel.**

**Observed:** A "Plan like a pro" carousel in the stats tab steps through co-planner and plan with AI, widgets, add a home screen widget, web planner, use Tiimo on desktop, allow live activities, add tasks to to-do, customize your planner, add a lock screen widget, track your mood, celebrate every win, add calendars and reminders, and change your view, each with a short video (tier: directly observed).

**Detail:**
- The carousel mixes free surfaces with paid tier features in one list (tier: strongly supported, the web planner and the co-planner are listed on the paywall as paid while adding tasks and changing the view are not).
- It sits inside the progression tab rather than in settings or help (tier: directly observed).

*Cross-reference: O34, O46.*

**O33. Mood log and daily reflection.**

**Observed:** A mood and daily reflections area in the stats tab shows a Monday to Sunday week; tapping a day opens a well-being screen inviting the user to "tell us about your daily mood and emotions and discover planning as a powerful tool to make space for your well-being", marked as powered by the Apple Health app, with a single control reading "How do you feel today" (tier: directly observed). The control raises an Apple Health permission request to read and write state of mind, then presents "How do you feel overall today?" as a slider running from very unpleasant through neutral to very pleasant, with the product's mascot changing expression as the slider moves, and a Done control (tier: directly observed). After Done the app states "You logged your very first mood today. You had a pleasant day", and then presents a daily reflection screen reading "You noted feeling pleasant on May 18. Could any of these tasks have played a role?" above the tasks completed so far that day (tier: directly observed).

**Detail:**
- The reflection screen is reached only by responding to the mood step; it is not readable without that response (tier: directly observed).
- The tasks listed on the reflection screen are the user's own completed tasks for that day (tier: directly observed).
- Attempting to mark a task as having played a role opened that task's detail and editing view instead, and no selection was registered (tier: directly observed).
- The app states the logged mood can be revisited and changed (tier: directly observed).
- Whether the reflection screen accepts an answer by some other route, and what it would do with one, were not observed (tier: unresolved).
- The mood value is written to and read from Apple Health rather than held only in the app (tier: strongly supported, the permission request names reading and writing state of mind and the screen is marked as powered by Apple Health).

*Cross-reference: O16, O32.*

## Access and eligibility

**O34. The free and paid split.**

**Observed:** The paywall states that the free tier carries award winning planning and the to-do list, and that the paid tier, Tiimo Pro, adds the AI co-planner, focus timer, live activities and widgets, the web app, and calendar integration (tier: directly observed). Locked controls encountered elsewhere in the session are the notification before a task starts, the halfway through a task notification, the task finished notification, reminder import, most themes, and the create and edit tag controls (tier: directly observed).

**Detail:**
- Locked controls are shown in place rather than hidden, so the paid surface is visible from the free tier throughout (tier: directly observed).
- The assistant and the focus timer were both reachable during the session despite being listed as paid features (tier: directly observed); whether a trial, a grace period or a usage allowance explains this was not observed (tier: unresolved).
- The web and desktop version sits behind the paid tier (tier: directly observed).

*Cross-reference: O22, O25, O36, O46, O49.*

**O35. Marker positions are locked until their threshold.**

**Observed:** Marker positions beyond the ones reached are displayed with a padlock and the condition that opens them, for example unlocking in three days (tier: directly observed).

**Detail:**
- The lock is a progression lock rather than a purchase lock; no marker was observed to be purchasable (tier: strongly supported, every stated unlock condition in the row is a task count or a day count).

*Cross-reference: O29.*

**O36. Presentation options and their locks.**

**Observed:** Settings offers a set of themes, of which most are locked and some are unlocked, a choice of app icons including the product's mascot logo and alternatives, a font choice between the default and a dyslexia-friendly face, and an appearance setting of system, light or dark (tier: directly observed).

**Detail:**
- The theme locks are attributed to the paid tier rather than to progression (tier: strongly supported, the session places them with the other paid locks and no progression condition is shown on them).
- Whether the app icon choice or the font choice carries any lock was not observed (tier: unresolved).
- Sounds are separately configurable per event, covering all in-app sounds, task creation, task completion, the task countdown, subtask completion, and autoplay music in focus mode (tier: directly observed).

*Cross-reference: O34, O47.*

**O37. Operating system permissions gate several surfaces.**

**Observed:** The session raised permission requests for notifications, full calendar access, speech recognition, the microphone, Apple Health state of mind, and app tracking, each attached to the surface that needs it (tier: directly observed).

**Detail:**
- Each request is preceded or accompanied by the app's own framing of why it is being asked (tier: strongly supported, the notification, calendar, tracking and mood screens each carry their own explanation).
- The tracking request is the only one whose framing names a purpose outside the product's own function (tier: directly observed).

*Cross-reference: O7, O8, O15, O18, O33.*

## Economy and resources

**O38. The product holds no economy.**

**Observed:** No currency, balance, points total, ticket, token, material or tradable unit appeared anywhere in the session (tier: directly observed). The two quantities the product maintains are the streak day count and the completed task count, neither of which can be spent, exchanged, transferred or reduced by any observed action (tier: directly observed).

**Detail:**
- Nothing in the product is priced in an internal unit; the only prices observed are in real money on the paywall (tier: directly observed).
- This section holds no further observations (tier: directly observed).

*Cross-reference: O27, O28, O46.*

## Social

**O39. No other identified person appears anywhere in the app.**

**Observed:** The session found no friends, followers, contacts, groups, teams, messaging, shared state, comparison against named others, or transfers between people at any point (tier: directly observed). The narrator states directly that there are no invite a friend moments and no sharing items other than sharing the app itself (tier: directly observed).

**Detail:**
- The only counts of other people are the marketing figures of more than 500,000 users and the review counts on the paywall and the rating prompt, which name no one and position the user against no one (tier: directly observed).
- The profiles feature in settings was not shown to involve another person (tier: directly observed); what it separates was not observed (tier: unresolved).
- This section is otherwise empty, which is itself the finding for a product whose progression is entirely self-referential (tier: directly observed).

*Cross-reference: O5, O26, O29, O40.*

## Reach beyond the app

**O40. Share control on the stats tab.**

**Observed:** A Share control sits in the top corner of the stats tab; the narrator describes it as sharing the profile and the app to other people (tier: directly observed). What it composes and where it sends was not opened in the session (tier: directly observed).

**Detail:**
- The control sits on the screen that holds the streak, the task count and the marker row (tier: directly observed).
- Whether it produces a representation of the user's own record, or only a link to the product, was not observed (tier: unresolved).

*Cross-reference: O31, O41.*

**O41. Screenshot detection asks for a social tag.**

**Observed:** Taking a screenshot of the home screen produced an in-app banner at the top of the screen reading "Posting to social? Tag us" with the product's handle (tier: directly observed).

**Detail:**
- The banner is triggered by the operating system screenshot event rather than by a share control (tier: directly observed).
- It asks for attribution on content the user has already captured rather than offering content to send (tier: directly observed).
- It appeared without any prior prompt or setting (tier: directly observed).

*Cross-reference: O40.*

**O42. Knowledge library.**

**Observed:** A Knowledge control in the stats tab opens "Learn and plan with Tiimo", holding articles and videos including how to prioritize tasks with ADHD, how AI takes the mental load out of planning, and task initiation explained, which open on the product's website (tier: directly observed). Further sections carry more articles about brain differences and support, and more support for focus, planning and emotions (tier: directly observed).

**Detail:**
- The library opens outside the app rather than rendering in place (tier: directly observed).
- Its subject is the user's difficulties rather than the product's features (tier: strongly supported, the listed titles address prioritization, mental load and task initiation rather than app controls).

*Cross-reference: O43, O44.*

**O43. Expert-led courses.**

**Observed:** The same area holds "expert led courses made for you", described as neuro-inclusive guidance from ADHD, autism and planning experts, presented with a named expert who works with the product (tier: directly observed). The observed course, on avoiding the urgency trap with the Eisenhower Matrix, carries a description, the expert's credentials, a video, and a lesson list of introduction, applying the matrix, and a summary (tier: directly observed).

**Detail:**
- The courses are structured into ordered lessons rather than offered as single articles (tier: directly observed).
- Whether completion of a lesson or a course is tracked, recorded or rewarded was not observed (tier: unresolved).
- The video playback was unreliable during the session (tier: directly observed).

*Cross-reference: O4, O42.*

**O44. External destinations.**

**Observed:** The stats tab lists share feedback, an FAQ, follow us on Instagram, and listen to Change Makers by Tiimo, which opens the podcast in Spotify (tier: directly observed). The knowledge area closes with "Explore more, take a free Tiimo course today" and an option to follow a guided Pomodoro session, which opens YouTube (tier: directly observed).

**Detail:**
- The podcast carries a run of episodes, none newer than 2024 as displayed (tier: directly observed).
- Three separate external platforms are reachable from one screen (tier: directly observed).

*Cross-reference: O42, O56.*

**O45. Desktop and web as a second surface.**

**Observed:** The first launch screen shows the product on a phone and on a desktop, the home screen carries a "Try Tiimo on desktop" widget, and the adoption carousel carries web planner and use Tiimo on desktop cards (tier: directly observed). The web app is listed on the paywall as a paid tier feature (tier: directly observed).

**Detail:**
- The second surface is promoted from three separate places inside the phone app (tier: directly observed).
- Reaching it requires the paid tier (tier: directly observed).

*Cross-reference: O1, O16, O32, O46.*

## Monetization

**O46. The paywall.**

**Observed:** The paywall is headed "Change how you plan, change how you live" and offers a monthly plan at 12 dollars billed monthly with no trial, and an annual plan at 54 dollars billed yearly with a seven day trial, marked most popular (tier: directly observed). Below the plans it carries award badges, one for an app of the year award for 2025 whose awarding body the transcript does not render reliably, and one reading Apple Design Award 2024 finalist, then "over 8,000 five star reviews" with three featured review quotes, then a 4.5 average rating and an Apps We Love by Apple badge (tier: directly observed). Below that sits a free versus Pro comparison table, the line "Join more than 500,000 happy Tiimo users around the globe", a restore purchase control, the line "women led, made in Scandinavia", a start seven day trial control and an X (tier: directly observed).

**Detail:**
- The annual plan is more than 50 percent cheaper per month than the monthly plan, and that comparison is not shown anywhere on the screen (tier: strongly supported, both prices and billing periods are displayed and the discount is computable from them but is not stated).
- The trial attaches only to the annual plan (tier: directly observed).
- The recommendation marker sits on the annual plan (tier: directly observed).
- The award and review claims are what the screen displays; nothing in the session verifies them (tier: directly observed).
- The screen closes with a provenance claim rather than a feature claim (tier: directly observed).

*Cross-reference: O5, O6, O34, O45.*

**O47. A persistent Get Pro control.**

**Observed:** A floating Get Pro button sits at the top of the screen throughout use, including while the assistant is working, and opens the paywall when tapped (tier: directly observed).

**Detail:**
- It is present rather than summoned, and was visible across the observed tabs (tier: directly observed).
- Locked controls encountered in settings and in task creation lead to the same paywall (tier: strongly supported, the session reaches the paywall from the floating control and attributes the locked controls to the same paid tier).

*Cross-reference: O20, O22, O34, O36.*

**O48. An upsell card inside the progression tab.**

**Observed:** The stats tab carries a card reading "Unlock Tiimo Pro, access to all features, plan smarter with AI", positioned between the marker row and the mood and reflections area (tier: directly observed).

**Detail:**
- The card sits between two progression surfaces rather than in a store or settings area (tier: directly observed).

*Cross-reference: O29, O33.*

**O49. Paid notification timing.**

**Observed:** Within notification settings, a notification before a task starts and the number of minutes before, a halfway through a task notification, and a task finished notification are locked behind the paid tier, while the base notification and the notification sound are not (tier: directly observed).

**Detail:**
- What is sold here is the timing and density of prompting rather than a feature the product does not otherwise have (tier: strongly supported, the free tier receives task notifications while the paid tier receives them at additional moments).

*Cross-reference: O34, O53.*

**O50. Purchase administration.**

**Observed:** Settings holds account and subscription settings, restore purchase, redeem offer code, email settings, delete account, change email address, sign out, privacy policy and terms of service (tier: directly observed).

**Detail:**
- Restore purchase appears both here and on the paywall (tier: directly observed).
- Account deletion is reachable from settings (tier: directly observed).

## Return triggers

**O51. Rating prompt during onboarding.**

**Observed:** After the three routine builders and before the completion tutorial, the app presents a rating screen with five stars already selected, headed "Tiimo was made for people like you", carrying "over 3,000 five star reviews" and a set of featured reviews, followed by the prompt "Enjoying Tiimo? Tap a star or rate it on the App Store" (tier: directly observed). At this point the user has not used the product (tier: directly observed).

**Detail:**
- The five stars are pre-selected rather than empty (tier: directly observed).
- The prompt is placed inside onboarding rather than after a completed unit of work (tier: directly observed).
- The narrator identified the placement as odd given that nothing had been used or set up yet (tier: directly observed).

*Cross-reference: O13, O52.*

**O52. Second rating prompt after the assistant creates tasks.**

**Observed:** Selecting Create tasks in the assistant produced a second rating prompt (tier: directly observed).

**Detail:**
- The prompt follows immediately on a successful assistant action rather than on a completed task (tier: directly observed).
- Two rating prompts appeared within the first session (tier: directly observed).

*Cross-reference: O20, O51.*

**O53. Notification categories.**

**Observed:** Notification settings cover the notification sound, notifications tied to a task starting, being halfway through, and being finished, and time of day reminders, alongside a streaks and levels banner toggle and other notifications covering motivational messages and product updates (tier: directly observed).

**Detail:**
- The set is described in the session as expansive and highly customizable (tier: directly observed).
- Three of the task-timing options are locked behind the paid tier (tier: directly observed).

*Cross-reference: O49, O54.*

**O54. A fixed daily and weekly reminder schedule.**

**Observed:** Time of day reminders are set to 07:00 for all day and anytime tasks, described as a reminder of everything not yet sorted, 08:00 for morning tasks, 11:50 for afternoon tasks, 17:50 for evening tasks, 20:00 to review the day, and Sunday at 15:00 to review the week (tier: directly observed).

**Detail:**
- Six scheduled contact points per week are configured by default, four of them on every day (tier: strongly supported, four are daily time of day reminders, one is a daily review and one is weekly).
- The afternoon and evening reminders fire ten minutes before the hour rather than on it (tier: directly observed).
- Whether these are defaults or were set during onboarding was not observed (tier: unresolved).

*Cross-reference: O16, O53.*

**O55. Streak and level banners.**

**Observed:** A single toggle in notification settings covers streaks and levels as a banner (tier: directly observed).

**Detail:**
- This is the only place in the session where the product uses the word levels (tier: directly observed).
- The streak, which this toggle covers, is the only progression state whose value depends on returning on a later day (tier: strongly supported, the task count advances within a single day while the day count cannot).

*Cross-reference: O27, O29.*

**O56. Rate the app entry point.**

**Observed:** The stats tab carries a standing Rate the app entry alongside share feedback and the FAQ (tier: directly observed).

**Detail:**
- This is a third route to the rating behavior after the two prompts (tier: directly observed).

*Cross-reference: O44, O51, O52.*

# Pass two: tagging

## Applied tags

**Tag:** Streak

**Observations:** O14, O27

**Supporting observations:** O16, O29, O55

**Confidence:** directly observed

**Role:** retention, engagement

The day count cannot advance without a return on a later day (O27, O55), and it is displayed on every main screen beside the work the user is doing inside a session (O16).

**Rationale:** Tiimo announces a streak during onboarding, before any day has elapsed, and then maintains a day count displayed with a flame on every main screen (O14, O27). The stats tab expresses it as a current position against the next day threshold, and a parallel track of markers is keyed to day counts of 3, 7, 10, 14, 21, 30 and upward (O27, O29). Notification settings carry a banner toggle naming streaks (O55). Under the presence standard the implementation is recognizable from the product's own framing and from state that responds to activity. The continuity rule itself is not observed: the session covers one day, so nothing shows what qualifies a day, what a missed day does to the count, or whether any protection exists. Those are behavior details and are recorded as not observed rather than filled in.

**Variants present:** Time-period streak, in days.

**Variants not established:** Threshold streak, protected streak, event-sequence streak, maintenance streak, shared streak, historical streak.

**Alternative considered:** A cumulative count of days on which the product was used, which would not be a streak because gaps would not change the state. The evidence against it is that the product pairs the count with a day-thresholded marker track and frames it as a streak from the first day (O14, O27, O29); the evidence that would separate the two is a session recorded after a missed day, showing whether the count resets, holds, or is protected.

**Tag:** Milestone

**Observations:** O29, O30

**Supporting observations:** O14, O27, O28, O35

**Confidence:** directly observed

**Role:** engagement, retention

The task-count track rewards doing more inside a session (O28, O29), while the day-count track cannot advance without returning on a later day (O27, O29).

**Rationale:** Tiimo maintains two ongoing measures, completed tasks and streak days, and defines ordered thresholds within each: 7, 14, 30, 60, 110, 160, 250, 360 and upward for tasks, and 3, 7, 10, 14, 21, 30 and upward for days (O28, O29). Crossing a threshold produces an observable event distinct from the ordinary counter update, in the form of a named banner such as "Trophy unlocked. You have completed one task", a marker that stays in the row, and a color change in the row's background (O30). Positions not yet reached are shown in place with their conditions (O29, O35). The app uses the word milestone for the first of these itself (O14). No threshold was observed to grant any benefit beyond the marker.

**Variants present:** Threshold milestone, cumulative milestone, time-based milestone, intermediate milestone, recorded milestone.

**Variants not established:** Rewarded milestone, unlocking milestone, hidden milestone, completion milestone, recurring milestone, composite milestone, shared milestone, percentage milestone.

**Alternative considered:** Set Collection, on the reading that the row is a defined set of distinct named members with acquired and unacquired states. It is not applied because no member can be acquired independently or out of order: each marker's state is a deterministic function of one scalar counter, so the set's completeness and the counter's position are the same fact, and the entry's exclusion for progress that depends only on reaching a numerical target governs. The evidence that would separate them is a route by which a marker could be obtained other than by crossing its threshold, such as a draw, a purchase, or an out-of-order grant.

**Tag:** Achievement

**Observations:** O29, O30

**Supporting observations:** O14, O31

**Confidence:** directly observed

**Role:** engagement, retention

The markers are earned by work done inside sessions and by returning across days, and they persist on the user's own stats screen (O29, O30, O31).

**Rationale:** Each marker is a defined criterion that changes from unattained to attained and is then preserved: Ignition for the first day of the streak, Spark for the first completed task, Pulse later in the session, each named, each individually depicted, each remaining in the row after it is unlocked (O29, O30). The attained state is distinct from the counters that produced it, since the counters keep moving while the marker stays fixed at its criterion (O28, O29). The first one requires a deliberate swipe to claim (O14). This tag co-occurs with Milestone rather than competing with it: the threshold recognition within a broader measure and the preserved attained state are two behaviors on one surface, and both entries state that both labels may apply where reaching a point is also preserved as an attained criterion.

**Variants present:** Visible achievement, cumulative achievement, progressive achievement, tiered achievement, unrewarded achievement.

**Variants not established:** Hidden achievement, composite achievement, sequence achievement, constraint-based achievement, retroactive achievement, repeatable-instance achievement, shared achievement, comparative achievement, collection achievement, rewarded achievement.

**Alternative considered:** Milestone alone, treating the markers as nothing more than recognized thresholds. It is rejected because the markers carry their own names and persist as a record separate from the measure, which is the attainment state the Achievement entry requires. Neither label is a specialization of the other here, so both are reported.

**Tag:** Personal Data Reflection

**Observations:** O33

**Supporting observations:** O16, O32

**Confidence:** plausible

**Role:** engagement, retention

The interaction returns the user's own completed tasks to them inside a session (O33), and it is offered per day from a week calendar and promoted as a habit to keep (O16, O32).

**Rationale:** Tiimo runs a two-step interaction in which the first step withholds the result until the user responds on a mood slider, and the second step presents the user's own recorded completed tasks for that day above the question "Could any of these tasks have played a role?", having first handed the user their logged mood back as "You noted feeling pleasant on May 18" (O33). The content of the second step is drawn from records the product holds, the progress of the interaction depends on the user's response, and what is returned is the user's own data rather than labels the product wanted from the user. The classification is held at plausible because the response control on the second step was not found: tapping a listed task opened that task's editing view and registered no judgement, so it is not established that the reflection step accepts an answer at all.

**Variants present:** None.

**Variants not established:** Data recap, reflection rating, summarized result, commented result, consequential rating, scheduled instances, refreshed recap, play statistics.

**Alternative considered:** A display screen that poses a rhetorical question and records nothing, which the entry excludes as a dashboard or summary view that can be read without responding. The evidence that would separate them is a session in which a task is successfully marked on the reflection screen, or in which a later day's reflection shows that an earlier response was retained.

**Tag:** Cosmetic Customization

**Observations:** O36

**Supporting observations:** O34, O47

**Confidence:** strongly supported

**Role:** monetization, engagement

The themes are among the things the paid tier sells (O34, O36), and the locked entries sit in the settings list where the user meets them and route to the paywall (O47).

**Rationale:** Tiimo offers a set of alternative interface themes of which most are locked and some are unlocked, with the locks attributed to the paid tier rather than to any progression condition (O36, O34). That gating is what makes them customization content rather than a built-in preference: the entry excludes appearance settings offered as configuration and admits themes that are acquired, unlocked, purchased or granted. The alternatives change how the product presents itself and nothing was observed to suggest they change any rule, cost or capability. The appearance setting of system, light or dark and the font choice between the default and a dyslexia-friendly face are excluded from this tag as built-in configuration, and the font choice in particular changes legibility rather than presentation alone.

**Variants present:** Acquired interface theme.

**Variants not established:** Equipable cosmetic, automatically applied cosmetic, temporary cosmetic, animation cosmetic, effect cosmetic, audio cosmetic, avatar cosmetic, profile cosmetic, composite cosmetic, layered cosmetic.

**Alternative considered:** The whole set treated as built-in configuration settings, which the entry excludes from the label. It is rejected for the themes specifically because most of them are locked behind a purchase, which is the condition the entry names for treating a theme as content. The app icon choice was not observed to carry any lock and is therefore not carried by this tag. The color change behind the marker row is also excluded here, because it follows progression state automatically and cannot be applied independently of it (O30).

**Tag:** Expert Guidance

**Observations:** O42, O43, O44

**Supporting observations:** O4, O31

**Confidence:** directly observed

**Role:** engagement

The material is reached from inside the product and read as an activity of its own (O42, O43); none of the four role values fits a body of instruction that sends the reader outside the product, and engagement is the closest of them rather than an exact fit.

**Rationale:** Tiimo carries a Knowledge area holding articles and videos on prioritizing tasks with ADHD, on mental load in planning, and on task initiation, and expert-led courses attributed to named ADHD, autism and planning experts, one of whom is identified as working with the product (O42, O43). The observed course is divided into an introduction, an application section and a summary, so the material is addressable piece by piece rather than continuous (O43). Its subject is the user's own difficulty rather than the operation of the app, and the whole area can be ignored without affecting planning, task creation, the focus timer or anything else the product does. The boundary the entry draws against product content was applied and it separates two surfaces in this app cleanly: the Knowledge area qualifies, while the "Plan like a pro" carousel, which teaches the user to work Tiimo's own widgets, planner and views, does not and is described in plain language (O32). The material opens on the product's website rather than rendering in place, which the entry treats as a variant rather than a disqualification (O42).

**Variants present:** Article library, video library, ordered course, expert-attributed guidance, condition-specific guidance, externally hosted guidance, multi-format guidance.

**Variants not established:** Flat library, in-house guidance, domain guidance, companion-media guidance, gated guidance, contextually placed guidance, personalized guidance, static library, updated library, tracked guidance.

**Alternative considered:** Whether the material is tracked is open. The session never reached the end of a lesson or a course, so nothing shows whether Tiimo preserves a record that a piece was read, watched or completed, and the tracked guidance variant is therefore not established. The separating evidence is a session that finishes one course. If a completed lesson or course produces a preserved attained state, Achievement also applies to that record; if the product tracks which pieces of a defined set have been taken, Set Collection also applies. Neither answer disturbs this tag, which classifies the material rather than any record of it, so the open question is carried rather than held against the classification. The second alternative considered is that the Knowledge area is product content teaching the user to use Tiimo better, which would take no mechanic label. It is rejected because the observed titles and the observed course teach prioritization, task initiation and the Eisenhower Matrix, none of which is a feature of this product, and because the surface that does teach the product sits separately in the same tab (O32, O42, O43). The companion media in O44, the Spotify podcast and the YouTube guided session, is carried as a supporting route out rather than as established material, because the subject of the podcast was not observed.

## Entries considered and not applied

- Set Collection. The marker row looks like a tracked set of distinct named members, but each member's state is a deterministic function of one counter, no member can be acquired independently or out of order, and no completeness state separate from the counter's position was observed (O29, O35). Milestone and Achievement carry this surface instead.
- Shareable Win. The stats tab carries a Share control on the screen that holds the streak, the task count and the markers, but the control was not opened, and nothing was observed to show whether it composes a representation of the user's record for an outside reader or only passes on a link to the product (O40). The entry requires both a composed representation and a route out, and neither is established.
- Experience Points. The completed task count advances toward defined thresholds, which satisfies the structural half of the entry, but Tiimo assigns no progression value to an event: the quantity is the tally of the actions themselves, one per completed task (O28, O29). That is a cumulative count under the entry's own separating rule, and Milestone already carries the thresholds.
- Daily / Weekly Quests. The routine builders supply a product-defined catalogue of habits and require at least one selection, which resembles a choice-based quest (O10, O11, O12). It is not applied because the builders run once during onboarding and what they produce is the user's own schedule, which the product stores and displays rather than issuing or refreshing as objective instances under a recurring rule.
- Challenge. The focus timer creates a bounded activity that ends in a celebration, and tasks carry durations (O24, O25). It is not applied because the product defines no success condition and maintains no concluded state for these: a paused or abandoned focus session was not observed to be recorded as anything, and a task that is not completed simply stays on the list.
- Community Space. The knowledge library, the courses and the podcast are substantial shared content, but they issue from the product and its named experts, and no other social actor can contribute or interact within them (O42, O43, O44).
- Companion. The product maintains a mascot that appears in the assistant tab and changes expression on the mood slider (O18, O33). It is not applied because the mascot carries no progression of its own, occupies no active position, and does not act within the product's core activity.
- Comparative Rank. The product states a user population of more than 500,000 and shows review counts, but it assigns the user no position relative to anyone and orders nothing (O5, O46).
- Leaderboard. No ordered list of comparable entities appears anywhere in the product (O39).
- Referral Boost. No invitation, referral link or introduction route was found anywhere in the session, and the narrator states this directly (O39).
- Group Membership. Settings offers additional profiles, which is the only membership-shaped surface in the product, but no other social actor is involved and no member-scoped product condition was observed (O26, O39).
- Social Feed. The knowledge library presents a sequence of content items, but all of it issues from one source and no social actors are associated with the items (O42).
- Daily Login Rewards. The product contacts the user on a daily schedule and maintains a day-based streak, but nothing is granted or made claimable for access alone; the day count advances on activity and the markers are threshold-based (O27, O29, O54).
- Seasonal Progression Pass. The marker tracks are ordered threshold tracks, which is the structural half of the entry, but no season, event window, campaign or recurring cycle bounds them, and no reward or entitlement is attached to any position (O29).
- Progression Fund. The marker tracks attach ordered positions to measures the product already maintains and carry no ending boundary, but there is no second lane unlocked by purchase paying more at those positions, and no marker pays anything at all (O29, O35).
- Season Content Pass. Tiimo Pro is a permanent subscription to a feature set rather than an entitlement to a multi-item bundle grouped under a defined season or release cycle (O34, O46).
- Spendable Credits and Tokens. Neither counter the product maintains can be exchanged for anything, and no balance is reduced by any observed action (O28, O38).
- Energy. Nothing limits how often the core loop can be run: no capacity, cooldown or attempt limit was observed on tasks, on the focus timer, or on the assistant (O20, O25, O38).
- Guided First-Run Seeding, rejected as a proposal on 13 Sep 2026. The routine builders seed the user's day from a product-supplied catalogue before first use (O10, O11, O12), but this is carried by the Onboarding and first run section rather than by a tag: every product that starts empty has a first run, and seeding is what that first run does, so the behavior is section material rather than a cross-app pattern. Do not propose it again.
- Screenshot Attribution Prompt, rejected as a proposal on 13 Sep 2026. The screenshot banner asking the user to tag the product (O41) is an acquisition tactic rather than engagement design, and is excluded on the same ground as review requests and permission primers: it acts on an audience outside the product rather than on what the user does inside it. Record it in Reach beyond the app and describe it in plain language. Do not propose it again.
- Pre-Use Rating Solicitation, rejected as a proposal on 13 Sep 2026. The two rating prompts and the standing rating entry (O51, O52, O56) are acquisition tactics on the same ground, and placing a request before first use changes its timing rather than its kind. Record rating prompts in Return triggers, per the fixed placement, and describe them in plain language. Do not propose it again.

## Unresolved

**Levels (O55).** A single toggle in notification settings covers "streaks and levels" as a banner, and this is the only appearance of a level concept anywhere in the session. No level state, no ordered series of level states, and no advancement rule between them was observed on any screen. The word may name the marker tracks, which the product elsewhere calls milestones, trophies and achievements, or it may name a separate progression the session never reached; nothing in the product's own framing settles which. The evidence that would settle it is a session in which the banner fires, or a screen that displays a current level.

## Entries never observed

- Clan / Guild. No group entity with its own identity or group-level state exists in the product; no collective of any kind was observed.
- Daily Claim Pack. Nothing is purchased or activated that then generates rewards across recurring intervals; the subscription unlocks features immediately and grants nothing on a schedule.
- Earning Tasks. The product never pays the user, and no catalogue of compensated tasks with disclosed compensation exists.
- First-Purchase Bonus. The paywall offers a trial on the annual plan but no additional benefit conditioned on the purchase being the first one.
- Gifting. No route exists by which anything could be directed to another person; there is no recipient anywhere in the product.
- Hard Currency. No product-defined spendable currency exists, so none can be bought.
- Lives. Nothing is removed on failure, and no failure or terminal event exists in the product at all.
- Loot Box. Every reward in the product is a marker whose criterion is disclosed in advance; nothing is acquired with concealed contents.
- Passive Construction. Nothing is built, restored or upgraded over time without user input; the assistant acts on request and finishes within the exchange.
- Piggy Bank. No reserve of accumulated value that is held back from ordinary use exists.
- Rewarded Advertisement. The product states that it carries no advertising, and none appeared in the session.
- Soft Currency. No spendable balance is granted through ordinary activity, because no spendable balance exists.
- Variable Reward Outcome. Every reward event observed resolves to a single predetermined marker; no resolution could have produced a materially different result.
- Variable Reward Schedule. Every reward position in the product is a disclosed threshold, so the next rewarding action is always knowable in advance.

# Pass three: proposed new tags

No proposals remain open. Four were made on this run and all four have been ruled on. Instructional Content Library was approved under the name Expert Guidance, is now an approved library entry, and is applied as a tag in Pass two against the observations that produced it, O42, O43 and O44. An entry applies from the point it is created, and the app that proposed it counts as analysed after that point; entries are not retro-applied to apps analysed before they existed. Guided First-Run Seeding, Screenshot Attribution Prompt and Pre-Use Rating Solicitation were rejected on scope and are recorded above under Entries considered and not applied, each with the reasoning that rules it out in future analyses.

# Close: system view

Tiimo runs one loop and hangs everything else off it. The user completes a task, the product celebrates it with confetti, and two counters move: a lifetime tally of completed tasks and a streak of days (O13, O24, O27, O28). Those two counters are the only progression the product has, and they feed the two marker tracks that make up the stats tab (O29). Everything the product calls a trophy, a milestone or an achievement is a threshold on one of those two numbers (O29, O30).

The split between the two counters is what makes the system work across time. The task count can be advanced without limit inside a single sitting, so it rewards doing more now; the day count cannot be advanced at all without coming back tomorrow, so it is the only thing in the product that requires a return (O27, O28, O55). The scheduled notifications sit directly on top of that asymmetry, with four time-of-day reminders and a daily review, all placed before or after the bands the routine builders filled during onboarding (O10, O11, O12, O54). The seeding step and the reminder schedule are therefore the same mechanism seen at two moments: onboarding writes tasks into morning, afternoon and evening, and the notification schedule then fires against those same three bands.

The onboarding flow is unusually front-loaded and its order is itself a finding. Before the product does anything, it takes an account, a marketing consent, a stated need, a self-identification, a social proof screen and a paywall, and only then permissions, calendar access and the routine builders (O1 to O12). The rating prompt arrives before first use and a second one arrives on the first successful assistant action, so both requests are placed by position in the flow rather than by anything the user has accomplished (O51, O52). By the time the user reaches the home screen they hold a streak, a marker and a populated day, none of which they earned through use (O14, O16).

Monetization runs beside the loop rather than through it. There is no currency, no capacity limit and nothing to spend, so the product has no internal economy at all and the only price is the subscription (O38, O46). What the paid tier sells is density and reach: more notification moments around the same tasks, the assistant, the desktop surface, reminder import, tag creation and most of the themes (O34, O45, O49, O36). Because there is no economy, progression and monetization never touch: no marker can be bought and no purchase advances a counter (O35, O47).

The social layer is absent by design rather than by omission, and this is the clearest structural fact about the product (O39). There is no other identified person anywhere, so every comparison the product offers is between the user and their own record. What would elsewhere be carried by other people is carried instead by three substitutes: the marker tracks supply the sense of standing, the knowledge library and expert courses supply the outside authority, and the screenshot tag prompt and the podcast, Instagram and YouTube destinations push outward without bringing anyone in (O29, O42, O43, O41, O44).

Two dependencies are worth naming because they are load bearing and thinly evidenced. The whole retention side of the system rests on the streak, and the streak's continuity rule, the thing that makes it a streak rather than a day count, was not observable in a one-day session (O27). And the mood and reflection surface is the only place in the product where the user's own records are handed back to them for a response, which makes it the only candidate for a second loop; but the response control on its second step could not be found, so whether it is an interaction or a display is unsettled (O33).
