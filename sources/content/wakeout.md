# Wakeout

**Teaser:** The first Milestone and the first Streak day both fired before the user completed a single Wakeout, credited from a gym session Apple Health had already recorded.

Wakeout is a movement-reminder app built around Wakeout Watts, a single measure filled automatically from Apple Health and topped up by short guided movement breaks. Reaching a difficulty-set daily goal produces a recognized Milestone and advances a Streak in the same moment, and both can fire from movement recorded before the user ever opens the app. The same tracked activity that builds the watts total is also what Active Pass reads to unlock apps it has paused elsewhere on the phone. Wakeout carries no free tier: every one of these mechanics sits behind a subscription that cannot be skipped.

---

## System view

Wakeout is a simple system whose spine is the Apple Health connection secured during onboarding: every mechanic that follows, the daily watts goal, the Milestone it triggers, the Streak it advances, and the apps Active Pass unlocks, reads from that same tracked activity rather than from anything the user does by opening the app. A separate gift-subscription offer sits outside this loop entirely, a one-off purchase unconnected to watts, goals, or streaks.

---

## Mechanics

### Streak

**Implementation summary:** The first streak day was credited from a gym session Apple Health had already logged, before any Wakeout was completed in the app.

**What was observed:** Wakeout maintains a daily streak that increases when the day's watts goal is reached, shown beside the watts total on the home screen and tracked in an Activity goal streak section alongside active weeks, active days, and super active days. A day off can be taken without breaking the streak, and Watt stats keeps a separate longest-streak record. On first open, the streak already stood at one day, credited from movement recorded earlier that day rather than from anything completed inside the app.

**How it is presented:** The current streak count sits at the top of the home screen next to the watts total, and reappears on the Progress tab's calendar and in the Watt stats section as a longest-streak figure. A "take a day off" control in Settings pauses every reminder for a chosen number of days while explicitly stating the streak won't break.

**What is worth noting:** Wakeout doesn't say what happens to the streak on a day the goal is missed, whether it resets, reduces, or ends. What is stated plainly is the exemption: a day off preserves the streak the same way reaching the goal does, so continuity is protected on two different fronts, not just built by showing up.

**Key findings:**

- The streak increases on any day the watts goal is reached, wherever that movement was recorded.
- The first streak day was credited on first open, from movement logged before the app was used.
- A day off can be taken without breaking the streak.
- A separate longest-streak record is kept in Watt stats.
- Wakeout doesn't say what a missed day does to the count.

**Screenshots needed:** the home screen streak count beside the watts total, and the Activity goal streak section on the Progress tab.

### Milestone

**Implementation summary:** The daily goal was already crossed on first open, recognized from Apple Health history rather than from anything performed in the app.

**What was observed:** Wakeout marks a daily watts goal on the progress bar with a check mark, and reaching it produces a full-screen recognition separate from the bar simply filling further. On the very first screen after subscribing, that recognition had already fired: a pop-up read that the goal was achieved, crediting a watts total built entirely from movement recorded before the app was opened. The bar keeps filling past the check mark toward a higher stretch figure.

**How it is presented:** The recognition arrives as an unprompted pop-up, paired with the day's streak advancing in the same moment. The check mark itself stays visible on the bar afterward, and the same crossing is reflected in the day counts kept on the Progress tab.

**What is worth noting:** The goal that triggered this recognition was never shown to the user before it was met. Wakeout sets the figure through a difficulty level chosen in Settings, but on this account the celebration fired before any difficulty was chosen or any goal presented, off the back of Apple Health data pulled during onboarding.

**Key findings:**

- Reaching the daily goal produces a full-screen recognition, separate from the bar simply filling.
- The recognition fired on first open, before the user had completed a Wakeout or been shown a goal.
- The bar continues past the goal toward a higher stretch figure.
- The goal, the stretch figure, and an hourly cap are all set by a difficulty level in Settings.
- A second, higher "super active" threshold is tracked but carries no stated recognition of its own.

**Screenshots needed:** the "daily goal achieved" pop-up, and the watts bar showing the check mark with room beyond it.

### Gifting

**Implementation summary:** A discounted year of access can be bought for someone else, repeated on four separate surfaces, and can't be redeemed by the buyer.

**What was observed:** Wakeout sells a full year of access as a gift for someone else at $44.99, below the $69.99 annual plan price, described as instant digital delivery. The purchase explicitly cannot be redeemed by the person who buys it. The offer is repeated on the paywall, the completion screen after a Wakeout, and twice in Settings.

**How it is presented:** Each placement frames the purchase around generosity, inviting the buyer to share the gift of movement with someone they know, and the completion-screen version sits directly beneath the watts earned from the Wakeout just finished. The discount stays the same before and after completing a Wakeout.

**What is worth noting:** Wakeout doesn't say how the recipient is identified or what they actually receive once the gift is bought. The offer is placed on the exact screen where the buyer has just felt the product work, right under their own watts total, rather than only on a dedicated gifting page.

**Key findings:**

- A full year of access can be bought as a gift for $44.99, below the $69.99 annual plan price.
- The purchase cannot be redeemed by the buyer.
- The offer appears on the paywall, the completion screen, and twice in Settings.
- The discount is unchanged before and after completing a Wakeout.
- How the recipient is identified and what they receive are not stated.

**Screenshots needed:** the Gift Wakeout offer screen, and the gift banner on the post-Wakeout completion screen.

### Active Pass

**Implementation summary:** Apps chosen by the user pause when they've been sedentary and unlock after any Apple Health-tracked activity, not only a Wakeout.

**What was observed:** Wakeout offers to pause apps the user chooses, found in Settings rather than introduced during onboarding, using Screen Time permission to enforce the restriction. Chosen apps pause when the user has been sedentary and unlock again after completing a Wakeout or any physical activity Apple Health records. The restriction only applies within a set schedule, and every app is left free on days off.

**How it is presented:** Setup walks through granting Screen Time access with its own explanation and coaching screen, then an app picker sorted into categories like Social, Games, and Entertainment. Best practices advise choosing individual apps rather than whole categories, favoring social and entertainment apps, and never restricting work or communication apps. An "apps unlocked" tag appears once the feature is turned on.

**What is worth noting:** The unlock condition is any tracked activity, not specifically a Wakeout, so movement Apple Health records anywhere can reopen a paused app. Wakeout doesn't say how long an unlock lasts, whether unused access carries forward, or what sedentary threshold triggers the pause in the first place; what's stated is the rule, not its timing. We saw the unlocked state directly, an "apps unlocked" tag appeared once the feature was turned on, but we did not see a pause take effect or an unlock happen in this analysis.

**Key findings:**

- Apps pause when the user has been sedentary and unlock after a Wakeout or any Apple Health-tracked activity.
- Setup requires Screen Time permission, granted through its own coaching screen and system dialog.
- The restriction only applies within a set schedule, and every app is free on days off.
- Best practices steer users toward restricting individual social and entertainment apps, never work or communication apps.
- Wakeout doesn't state how long an unlock lasts or what triggers the sedentary pause.

**Screenshots needed:** the Active Pass rules screen naming the unlock condition, and the app picker used to choose a restricted app.

---

## Onboarding and first run

Wakeout opens with a sedentary-crisis narrative, secures an Apple Health connection, previews watts and goals before any setup, and creates an account through Apple sign-in alone.

### O1. Tracking permission first

The first thing Wakeout shows on launch is the system prompt asking permission to track the user across other apps and websites, appearing before any product screen.

- Wakeout doesn't say which option was chosen or what followed from it.

### O2. Sedentary crisis narrative

Wakeout opens with a sequence of screens framing sitting as a health crisis, then presents frequent short movement as the answer, each screen advancing with a single forward button.

- The narrative lists consequences including low energy, chronic muscle aches, limited mobility, cognitive decline, and high blood pressure.
- Quoted sources are attributed to Medical News, TCTMD, and The New York Times.

### O3. Sedentary index and Health access

Wakeout frames the next step as assessing a sedentary index, then requests Apple Health access through an explanatory screen followed by the system prompt, which offered to turn on all data points.

- After access is granted, Wakeout asks whether to share 30 days or full history.
- Wakeout doesn't say which history option was chosen.

### O4. Feature preview screens

Before any setup choice, Wakeout walks through screens previewing how movement is measured, how goals work, how sedentary habits are tracked, and what reminders look like.

- One preview states that Wakeout uses artificial intelligence to find when the user is most likely to take a movement break.

### O5. Reminder schedule before permission

Wakeout has the user configure when and how often reminders arrive before requesting notification permission, which follows immediately after.

- Notification frequency offers four settings, from 10 to 18 reminders at the busiest tier down to off.

### O6. Notification personality selection

Wakeout asks the user to choose a notification personality matching their motivation style, offering eleven characters each with its own description, from a Fitness Coach to a Pirate Captain.

- Wakeout doesn't say which personality was selected or how reminder copy differs between them.

### O7. Apple-only account creation

Wakeout offers Sign in with Apple as the only account-creation route, with no email, Google, or other option.

- On reopening the app, the notification pre-prompt screen appeared again before the account screen, even though notifications had already been allowed.

### O8. Movement profile questionnaire

Wakeout asks the user to select which of a list of issues, including back pain, low energy, and mental fog, they've experienced recently, framed as potential consequences of a sedentary lifestyle.

- The same questionnaire can be reopened later from Settings.
- Wakeout doesn't say whether the selections change any later copy or content.

### O9. Post-purchase pop-up sequence

Immediately after a plan was started, Wakeout stacked unprompted pop-ups over its first screen before any user action: a daily goal celebration, then a gift to open.

- Opening the gift revealed two new exercise packs with no explanation of what a pack is.
- No guided tour or explanation followed the pop-ups.

### O10. Guidance in Settings

Wakeout keeps guidance reachable after first run through a Customer happiness group in Settings, including live chat, a help center, a quick tour, and a what's-new list.

- A feature-request route opens a conversational agent.

---

## Core loop and automation

Wakeout's core loop is built on passive tracking: movement recorded by Apple Health fills the day's watts automatically, topped up by short guided Wakeouts, a searchable pack library, and a work timer that ends focus sprints in a movement break.

### O11. Passive movement tracking

Wakeout records movement throughout the day from Apple Health without the user starting anything, presenting it as an hourly record of active and inactive time; movement from before a plan was even started, including a gym visit, was already counted on first open.

- The Progress tab's Trend view marks inactive hours in red and active hours in green, and isn't tappable or interactive.
- An Activity log lists roughly the past 14 hours with the watts generated and the activities recorded.
- A Movement stats section covers the past two weeks: steps, total Wakeouts, standing minutes, active minutes, and flights climbed.

### O12. Now screen

The Now tab is Wakeout's default home, combining the day's goal state with a one-minute start button and pack suggestions that change with time of day, alongside a five-tab bottom navigation: Now, Explore, Timer, Progress, and Settings.

- The top shows the goal figure, 613 of 700 on first open, next to a one-day streak.
- A Favorites row stays empty until a pack is added.
- In the evening, the screen offered wind-down rows like Quiet breath and Calm your neck.
- A Recently completed section lists finished packs with a check mark.

### O13. One-minute Wakeout session

Move now opens a guided session of four short exercises shown as bars, each a 15-second countdown started from a pulsing Start button, with the current exercise swappable at any point even mid-countdown.

- The session opened on Arm shakes with music and an exercise video playing.
- A pause menu offers toggles for a 3-second demo, music, and auto-start next, plus End and Resume controls.

### O14. Completion screen

Finishing the fourth exercise reports the watts added, asks whether the user feels better, and offers favorites, sharing, and another move, with the personality character chosen at onboarding appearing at the top.

- A pop-up named the exercise just completed, though several different exercises had actually been performed.
- The feeling question offers Yes, A little, and No as buttons of decreasing size; tapping "A little" produced no visible response.
- The goal figure moved from 613 to 663 of 700.
- A gift banner sits at the bottom of the screen.

### O15. Favorites and duration choice

A pack added to favorites appears in the Now screen's Favorites row, and "View all" opens a reorderable, searchable Favorites list; each pack's detail screen lets the session length be changed from the one-minute default.

- The Favorites screen supports hold-and-drag reordering and a search bar.
- Durations offered range from 30 seconds up to 10 minutes.

### O16. Explore library

The Explore tab presents a large library of packs, each usually four moves, filtered by context and searchable by name, body part, or position.

- Filters include Home and work, Sitting or standing, Travel and outdoors, Morning and evening, Pain relief, and Specialty packs.
- The default view shows 66 Home packs and 30 Work packs; Specialty packs include a 21-pack Fun and silly group and a 5-pack Therapy group.
- No locked pack was found.

### O17. Healthy Work Timer

The Timer tab runs focus sessions that end in a movement break, introduced by a pop-up warning that when time is up the user must move or stretch; the timer screen sets both the interval between breaks and the activity being focused on.

- The intro pop-up describes 25-minute focused sprints.
- "Will focus on" lists Coding, Designing, and Writing, with activities addable and editable by name and color.
- Pausing shows a count-up of "healthy work" time, counting the break itself toward that total.
- "Get active" opens a favorites list to start a Wakeout directly from the timer.

---

## Goals and progression

Wakeout's progress surfaces are a daily watts bar with a stretch zone beyond the goal, five difficulty levels that set both figures, and a streak and personal-best record kept alongside them.

### O18. Daily goal bar with stretch zone

Wakeout shows the day's watts as a bar with a check mark at the daily goal and room beyond it toward a higher stretch figure, continuing to fill past the check mark once the goal is reached.

- On first open the bar read 613 of 700, already past the check mark.
- Reaching the stretch figure is framed in onboarding as a "super active day."

### O19. Daily goal achieved on first open

On the first screen after purchase, Wakeout announced the daily goal achieved at 613 watts, though the goal had not been set by the user and the watts came from movement recorded earlier that day.

- The celebration arrived together with a one-day streak.

### O20. Difficulty sets the daily goal

Settings holds a Difficulty screen setting the daily goal, the stretch goal, and a maximum watts per hour across five levels, with Easy as the default at 500 watts, stretch +200, and a 150-watt hourly cap.

- Very hard sets the goal at 1,100 watts with a stretch of +400.
- Difficulty is chosen freely at any time rather than reached.

### O21. Activity goal streak record

The Progress tab holds an Activity goal streak section with counts of active weeks, active days, and super active days above a calendar marking the current streak.

- On the first day it showed one active week, one active day, and zero super active days.
- Wakeout doesn't explain what a super active day means on this screen, and what ends a streak wasn't shown.

### O22. Watt stats records

A Watt stats section keeps running totals and personal bests, including total watts earned, watts earned this week, most watts in a day, and longest active and super active streaks, with a share button.

- Wakeout doesn't say what the shared item contains.

---

## Access and eligibility

Wakeout has no free tier of any kind, and one measurement, standing minutes, is only available with an Apple Watch.

### O23. No free access

Wakeout's paywall has no close control and cannot be skipped, so the app cannot be used at all without choosing a plan; a monthly plan with a free trial was started to reach the app.

- Three of the four plans carry a seven-day free trial; the weekly plan does not.
- The app opened immediately once the plan was started.
- No free tier or limited mode was found.

### O24. Standing minutes need an Apple Watch

In Movement stats, standing minutes are marked as requiring an Apple Watch.

---

## Economy and resources

Wakeout measures all activity in Wakeout Watts, earned from any tracked movement, with an hourly cap and an unobserved bonus hour layered on top.

### O25. Wakeout Watts

Wakeout measures all activity in Wakeout Watts, earned from any movement Apple Health records as well as from completed Wakeouts, with no surface for spending watts found.

- A completed one-minute Wakeout added 50 watts.
- Movement recorded before the plan started counted toward the day's watts.
- Active Pass unlocks apps on completing a Wakeout or tracked activity rather than by spending watts.

### O26. Hourly watts cap

Wakeout caps how many watts count in any one hour, stating the cap encourages movement throughout the day rather than in one intense session; at Easy the cap is 150 watts per hour.

- Wakeout doesn't say how watts above the cap are displayed.

### O27. Power Hour bonus watts

Settings holds a Power Hour toggle offering bonus watts during the day's most sedentary hour, picked automatically each day.

- Wakeout doesn't clearly state Power Hour's default state.
- The chosen hour, the size of the bonus, and a bonus actually being paid were not found.

---

## Social

(No observations in this app.)

---

## Reach beyond the app

Wakeout's reach outside the app runs through system share controls and Active Pass, which extends the loop to whatever apps the user chooses to restrict on the same phone.

### O28. Share controls

Wakeout offers share buttons on the completion screen and on Watt stats, each opening the regular system sharing options, with the content that would be sent not shown.

- The paywall lists sharing routines with friends via links among its features.
- Wakeout doesn't say whether Share move sends the routine, the completion result, or both.

### O29. Active Pass app blocking

Settings holds Active Pass, which uses Screen Time access to pause chosen apps when the user has been sedentary and unlock them after a Wakeout or any physical activity Apple Health records; it was found in Settings rather than introduced during onboarding.

- Granting access required a system dialog and Face ID.
- An app picker sorted by category was used to select Discord.
- An Active schedule limits pausing to set hours, leaving every app free on days off.
- Best practices advise choosing individual apps rather than categories, favoring social and entertainment apps, and never work or communication apps.
- A "Block apps when inactive" toggle is off by default and was turned on.
- Wakeout doesn't show an app actually being paused, or the sedentary threshold that triggers it.

---

## Monetization

Wakeout's paywall opens immediately after onboarding with four plans, extensive persuasion sections, and a discounted gift-subscription offer repeated across the app.

### O30. Paywall opening

Directly after the movement profile questionnaire, Wakeout opens its paywall with a video and copy framed around breaking free from the chair, alongside tags for Editor's Choice, App of the Year, and 10,000 five-star reviews.

- Wakeout doesn't establish whether the questionnaire answers change the paywall copy.

### O31. Four plans

Wakeout offers four plans: an annual plan at $69.99 with a seven-day free trial, a monthly plan at $12.99 with the same trial, a weekly plan at $4.99 with no trial, and a one-time lifetime purchase at $179.99; every plan states sharing with up to six family members.

- A sticky footer repeats the annual plan's discounted price throughout the paywall.

### O32. Paywall persuasion sections

Below the plans, Wakeout's paywall continues with benefit, comparison, testimonial, and feature sections before the FAQ, including a side-by-side comparing staying active with Wakeout against staying sedentary for free, with a hidden-fees footnote on the sedentary side.

- Seven testimonials each follow a before-and-after structure contrasting life before and after Wakeout.

### O33. Gift subscription offer

Wakeout offers a discounted year of access to buy as a gift for someone else, reachable from the paywall and repeated on the completion screen and twice in Settings, at $44.99 against the $69.99 annual price.

- The gift cannot be redeemed by the buyer.
- The discount was unchanged after completing a Wakeout.
- Wakeout doesn't say how the recipient is identified or what they receive.

---

## Return triggers

Wakeout brings users back through configurable reminders, a day-off pause that protects the streak, home and lock screen widgets, and a rating entry Wakeout never triggered.

### O34. Reminder settings

Settings reopens the reminder schedule under Activity schedule alongside motivation style and difficulty, defaulting to 8:00 to 22:00, Monday to Friday.

- The personality chosen at onboarding can be changed as motivation style.
- Wakeout never sent a reminder notification.

### O35. Take a day off

Settings offers "Take a day off," stating that days off don't break the streak and turning off all notifications for a chosen duration of one day, two days, three days, or one week.

- A day off was not taken, so its effect on the streak record wasn't found.

### O36. Home and lock screen widgets

Settings promotes a home screen widget for tracking activity without opening the app and lock screen widgets for starting a Wakeout directly, with four quick-launch slots preset to specific exercises.

- Neither widget was added.

### O37. Rate Wakeout

The Feedback group in Settings holds a Rate Wakeout entry; no rating prompt appeared.
