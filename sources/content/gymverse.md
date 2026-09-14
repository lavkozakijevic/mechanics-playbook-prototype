# Gymverse

**Teaser:** Gymverse prices its plan before showing a single exercise, then hands it over free the moment you say no.

Gymverse is a gym workout planning app that builds a personalized strength training plan through a nineteen-step onboarding sequence, then prices access to that plan before a single exercise has been performed. The plan itself runs as a fixed three-part sequence, warm-up, exercise, stretch, with an automatic rest countdown as its only real automation. Nothing in the product tracks a currency, a failure state, or another person: the whole system runs on one user working through one plan, alone.

---

## System view

Gymverse is a simple system whose spine is the plan: nineteen onboarding screens build a personalized workout calendar before the user ever exercises, and everything that happens afterward is that plan being executed, one scheduled workout at a time.

---

## Mechanics

### Achievement

**What was observed:** Gymverse names an Achievements surface inside its progress area and mentions it as something the user can work through and complete, but the surface is never opened. Nothing about how it operates, what criteria it sets, or what it grants is shown.

**How it is presented:** Achievements sits in the same progress area as the workout totals and calendar, named on its own but not visually distinguished from the app's other running counts beyond its label.

**What is worth noting:** this is presence without behavior. Gymverse states it has an Achievements system, and that statement alone is what the record can support. Nothing here confirms a defined criterion, an unattained-to-attained state, or a reward behind it, because the surface was never opened. That is a real gap in what is known about the app, not a claim being made cautiously.

**Key findings:**

- Gymverse names an Achievements surface inside its progress area.
- The surface is named twice and never opened.
- No criterion, attainment state, attainment event, or reward is shown anywhere.
- The surface sits alongside workout totals and other progress figures rather than being visually distinguished from them.

**Screenshots needed:** the progress area showing the Achievements entry point alongside the activity totals.

### Shareable Win

**What was observed:** Gymverse turns its own records of the user into images meant to leave the product. A composer opens the moment the user takes a screenshot, letting them choose which stored stats appear and add stickers, text, or their own photo before sending. At the end of every workout, a second image is composed automatically, carrying the muscle groups worked, next week's plan, and the next scheduled workout. A separate activity total elsewhere in the app carries its own route out.

**How it is presented:** the composer replaces an ordinary screenshot with its own branded version the moment one is attempted, and appeared for the first time before the user had done anything in the app at all. The end-of-workout image appears unprompted, right after the completion screen.

**What is worth noting:** every one of these images is built from what Gymverse already holds about the user, not from anything the user made. That distinction is what separates this from an ordinary share button: a design that substitutes its own composed record for the screenshot someone was already trying to take is asking to be shared before there is a photo, a design, or a result of the user's own to share instead.

**Key findings:**

- A composer opens automatically the moment the user takes a screenshot, offering to share chosen stats, stickers, text, and photos.
- The composer appeared for the first time before the user had used the app at all.
- The end-of-workout completion image is composed automatically and shared unprompted, without a request.
- A separate total activity figure elsewhere in the app also carries its own route to share.
- No destination is named on any of these; each offers to share with anyone.

**Screenshots needed:** the share composer opened from a screenshot, showing its stat and sticker options; the end-of-workout completion image.

---

## Onboarding and first run

This section covers the nineteen numbered onboarding screens that build Gymverse's plan, framed with population statistics and copy that answers every choice the same way.

### O1. Numbering every onboarding screen

The onboarding runs as a numbered sequence of nineteen screens, with the number shown at the top of each one, proceeding one question at a time.

- Late in the flow the counter reads 18 out of 19, stating the remaining distance rather than leaving it implied.

### O2. One gym goal, no combining

The first question asks for the user's gym goal from six answers, build strength, overall fitness, get lean, get in shape, build muscle and lose weight, and accepts only one.

- No answer is marked as recommended at this step.

### O3. An obstacle question with matching replies

The second question asks what blocks the user at the gym, offering three answers, and shows a line at the bottom that changes with the choice.

- Staying motivated and consistent returns a line about having a plan for every workout.
- Not getting enough guidance returns a line about always knowing what to do at the gym.
- Keeping workouts interesting returns a line about refreshing workouts as often as wanted.
- Each reply names a product capability rather than restating the difficulty.

### O4. The same statistic for every obstacle

The next screen states that 59 percent of gym goers struggle to stick to their plan, citing a lack of motivation, uncertainty about exercises, and not knowing proper form, with no source given for the figure.

- Selecting a different obstacle on the previous screen doesn't change this screen.
- The three reasons listed cover all three answers offered at the previous step at once.

### O5. Naming the plan as the solution

The next screen states that Gymverse's guided plans will show exactly what to do and how to do it, and cites more than two million trainees as proof.

- No breakdown, date, or source is given for the figure.
- The screen sits immediately after the difficulty statistic.

### O6. A recommended plan focus

The plan focus question offers four options, full body balance, upper body focus, lower body focus and abs focus, and marks full body balance as recommended before the user answers.

### O7. Some steps can be skipped, others can't

Parts of the onboarding sequence can be skipped, but not every step allows it.

- Which steps carry a skip control isn't established.

### O8. The same affirmation for every experience level

The training-experience question offers five answers, from less than a month up to two-plus years, and returns the same affirming reply, that the user has come to the right place, whichever one is chosen.

### O9. How regularly the user trains

A second training-history question asks whether the user trains regularly, offering four answers describing current practice rather than duration.

- Three of the four answers describe interrupted training.

### O10. Equipment preselected by location

The gym-location question offers commercial gym, small gym, home gym and body weight, and the choice determines which equipment items are preselected on the following screen.

- Commercial gym preselects every listed item.
- Small gym preselects fewer items; home gym preselects fewer still.
- Body weight skips the equipment screen entirely and goes straight to the frequency question.

### O11. A stated minimum before the user answers

The frequency question states a recommendation, aiming to train at least twice a week, framed as derived from the user's own metrics, before the user picks how often they'd like to work out.

- The recommendation sets a floor rather than a target.

### O12. Scheduled or flexible plans

The next screen asks the user to choose between a scheduled and a flexible plan.

- No further explanation of either option is given.

### O13. Choosing a workout length

Another screen asks how long the user wants workouts to be, offering ranges from ten to twenty minutes up to seventy-five to ninety minutes, in ascending order.

### O14. Syncing with Apple Health

Gymverse offers to sync workouts to Apple Health, framed around tracking calories and closing rings, then raises the system permission sheet with individual selections.

- Afterward it shows the imported details and asks the user to confirm them.
- The imported weight can be corrected upward, so the imported values are editable at this step.

### O15. Calorie and protein targets, not editable

The next screen presents daily calorie and protein targets, stated as based on the user's total daily energy expenditure, with no edit control offered.

- The targets are derived by the product rather than entered by the user.
- No tracking surface for these figures appeared anywhere later.

### O16. Approving every scheduling answer

Gymverse asks the user to schedule a first workout, and all three possible answers, including declining to schedule anything, return approving copy.

### O17. A second statistic tied to starting soon

A second statistic screen states that users who start training within three days are 5.7 times more likely to achieve their goals, attributed to a study of Gymverse's own users over three years.

- No method, population, or definition of achieving goals is given.
- The claim follows directly after the step that asked the user to schedule a first workout.

### O18. Ending onboarding with attribution

The final numbered screen asks how the user heard about Gymverse.

- The question collects attribution for the product rather than anything used to build the plan.
- It is the last thing asked before the plan is built.

### O19. Building the plan behind a message sequence

After the final question, the product builds the plan while showing a sequence of messages, stating the plan is built for the user, created by coaches, and that it continues to adapt as the user trains.

- The adaptation claim is the first statement in onboarding that the plan changes over time.

### O20. Guidance ends at the paywall

The get-started control leads to the paywall rather than into the product.

- After the paywall is dismissed and the free pass granted, Gymverse opens directly on today's plan.
- No tutorial or guided first workout follows the plan screen.

---

## Core loop and automation

This section covers the three-part workout, its automatic rest countdown, and the calendar that fixes which days carry a workout.

### O21. Today's plan, ready to start

The plan screen holds the full workout for today as an ordered list, a warm-up, one exercise, and a stretch, with a control to start right away.

- All three parts are shown together before anything begins.
- Warm-up and stretch are listed as parts of the workout rather than optional extras.
- A figure on the same screen shows which muscles the workout works, naming each machine or movement.

### O22. A guided warm-up opens first

Pressing start workout opens a warm-up that leads the user through five movements, neck circles, arm circles, wrist circles, hip circles and ankle circles, delivered one at a time before the first exercise.

- No skip control appeared for it.

### O23. Rest opens on its own

Once the user marks a set complete, a rest countdown opens automatically rather than being started by the user.

- The cycle repeats for every following set: mark complete, rest, repeat.
- A separate timer can also be set manually from the exercise screen.
- Whether the rest duration varies by exercise isn't stated.

### O24. A guided stretch ends the workout

After the last set, a video opens telling the user it's time to stretch, leading through a chest stretch and a Y stretch with a repeated "get ready" prompt before each one.

- Marking the stretch done returns a completion message, the first thing shown at the end of the workout.

### O25. Technique material inside each exercise

Opening an exercise from the workout shows its technique, a video demonstration, the muscles it works, and written instructions, all on the same screen the exercise runs from.

- The same screen also carries a performance history for that exercise.

### O26. Changing the demonstration model

The figure shown in exercise videos and photos can be swapped between several male models and a female model, and viewed from behind.

- Gymverse states the change affects only the videos and photos.
- Every option is available from the start, with nothing to unlock, earn, or buy to reach any of them.
- Whether the choice persists between workouts isn't stated.

### O27. A separate exercise library

A library of exercises sits apart from the plan, demonstrated by different people.

- It was named but never opened.
- Whether it carries the same technique material as the workout screens isn't stated.
- Whether the equipment chosen during onboarding limits what the library shows isn't stated.

### O28. A calendar fixes the schedule

A calendar sits at the top of the plan screen showing which days carry a workout, built from the frequency and scheduling choices made during onboarding.

- It already existed before the first workout was performed.
- Completed workouts appear on it afterward, so the same surface holds what's due and what's done.
- No rule for a missed scheduled day appears anywhere.

### O29. Settings govern the loop's defaults

The settings surface controls experience level, units, smart weight and reps, warm-up and stretching, sounds, and workout reminders.

- Warm-up and stretching are configurable, so the three-part workout structure is a default rather than a fixed rule.
- Experience level, set during onboarding, is editable here.
- The plan screen separately offers a control to rate the plan.

---

## Goals and progression

This section covers the weekly weight projection, the completion summary, and the Achievements and photo-tracking surfaces beside them.

### O30. A weekly weight projection

The progress surface states that once the user performs an exercise, smart weight suggestions will optimize weights every week to ensure steady progress, and shows a graph of that projection.

- The graph was shown before any training had actually been logged.
- No adjustment was seen actually taking place; the record covers one workout.

### O31. The completion screen looks ahead

After the stretch, Gymverse presents a summary naming which muscle groups were worked, what next week's progression will be, and when the next workout falls.

- Two of the summary's three elements concern what comes next rather than what just happened.
- It's presented without being requested.
- The same summary is offered as an image that can be sent out of the product.

### O32. Weekly and monthly activity totals

Closing the completion screen shows how many workouts were done and how many hours were spent in the gym, switchable between weekly and monthly views, followed by a calendar of completed workouts.

- A separate total activity figure elsewhere on the progress surface carries its own control to send it out.
- Exercise graphs are also available on the same surface.

### O33. An Achievements surface

An Achievements surface exists in the progress area, named as somewhere the user can follow through and complete achievements.

- It was named twice and never opened.
- No criterion, attained or unattained state, attainment event, or reward was shown.

### O34. Measurements and before-and-after photos

A body measurements surface accepts user-entered measurements of muscles and body, and accepts before-and-after photographs framed around showing a transformation.

- The measurements are entered by the user rather than derived by the product.
- Nothing was seen being done with the measurements elsewhere in the product.

---

## Access and eligibility

This section covers what the seven-day free pass opened, and what nothing else in the product locked.

### O35. A free pass that opened everything

Dismissing the paywall granted full access to Gymverse's features with no strings attached, and every surface reached opened without a lock, a gate, or an upgrade prompt.

- The pass runs seven days and required no payment information.
- The only gate-like surface reached was the premium control, which opens the paywall rather than gating a feature the user had tried to use.
- No level gate, prerequisite, or unlock condition appeared anywhere.
- What Gymverse withholds once the seven days end wasn't reached in this analysis.

---

## Economy and resources

Gymverse maintains no currency, points balance, materials, storage limit, or conversion rate anywhere in the product, and no faucet or sink exists. The daily calorie and protein targets are health figures the product calculates and displays, not a quantity the user holds, earns, or spends, and nothing in the product consumes or produces them. This section is empty.

---

## Social

No other identified person appears anywhere in Gymverse. There are no other users, no groups, no messaging, no comparison against named others, no transfers between people, and no shared state of any kind. The two population figures shown during onboarding, a claim of two million trainees and a statistic about 59 percent of gym goers, name no individual and place the user against no one. The share routes covered under Reach beyond the app send an image to people outside the product; none of them bring anyone else into it. Gymverse is a single-player product throughout.

---

## Reach beyond the app

This section covers the share composer, the completion image, and the total activity figure, each built to leave the app.

### O36. A share composer opens on screenshot

A stickers-and-stats overlay lets the user choose different workout stats and add stickers matching the Gymverse app, producing an image to send to someone.

- The composer appeared at the first entry into the product, before anything had been done in the app.
- Its contents can be edited: text, images, backgrounds and a photo of the user's own can be added.
- The stats carried on the image are chosen by the user from what the product holds.
- No destination is named on the composer; it offers to share with anyone.
- The overlay replaces the ordinary screenshot with the product's own composed version.

### O37. The completion screen as a shareable image

At the end of the workout Gymverse offers another image to share, carrying the muscle groups worked, the next week's progression and the next workout.

- The image is composed by the product and presented at the moment the workout ends.
- Its subject is the record of the workout just completed rather than anything the user made.
- Whether it carries the same editing controls as the composer at O36 isn't stated.

### O38. Total activity as a shareable item

The progress surface carries a total activity figure that can be sent out of the product.

- The subject is an accumulated record the product holds about the user.
- The route out was named but not opened.
- The word carried alongside the Achievements surface at this point was framed around sharing.

---

## Monetization

This section covers the paywall's timing and pricing, the free pass it grants on refusal, and the subscription controls left behind it.

### O39. The paywall arrives before anything is used

The get-started control at the end of the plan build leads straight to the paywall.

- Nothing in the product had been used at this point: no part of the plan, no workout, no exercise.

### O40. Pricing a year against a month

The paywall offers a yearly plan with a seven-day free trial, restated as a lower monthly figure, and a separate, higher-priced monthly plan.

- The yearly price restated as a monthly figure sets a lower number against the plain monthly plan on the same screen.
- The trial is attached to the yearly plan, the plan carrying the larger commitment.
- A promo code field is present.
- The dismissal control is an X in the corner rather than a labelled decline.

### O41. Borrowing store-award framing

The paywall is headed "workouts made simple" and displays a five-star review claim inside a laurel wreath around an Apple mark.

- The laurel-and-stars device is the visual form used for store awards.
- The screen doesn't state that any award was actually made.
- This sits alongside the two population claims made during onboarding.

### O42. A free pass granted on refusal

Dismissing the paywall returns a seven-day free pass offering full access with no strings attached and no payment information required, and the user then enters the product directly.

- The grant follows the refusal directly; nothing else is asked.
- It's presented as a gift from the product.
- No payment method, card, or account detail is required to take it.
- Whether the same pass is offered again after it expires, or to a user who never opens the paywall, isn't stated.

### O43. A gift marker beside the premium control

A gift icon sits at the top of the workout screen next to a premium control.

- The gift marker is never opened, so what it holds isn't stated.
- The premium control opens the paywall rather than a description of what premium contains.
- The paywall was noted as slow to load from this entry point.

### O44. Subscription management, without a subscription

The settings surface holds a control to manage the subscription, a notice that seven days are on the product, and a Gymverse Pro entry.

- The free pass is restated inside settings, so the remaining access is visible away from the paywall.
- Whether the notice counts down the remaining days isn't stated.
- Subscription management is present even though no subscription was purchased.

---

## Return triggers

This section covers the notification permission request, the message it sent, and the reminders waiting in settings.

### O45. Notification permission, previewed

The second-to-last onboarding step asks for notification permission, framed as never missing a workout, and shows a preview of what a notification will look like alongside the request.

- Three reasons are given: workout timing, training tips, and further unspecified updates.
- The heading is written as loss prevention.

### O46. A five-star rating request before first use

On first entry, after the share composer was closed, Gymverse asks for a five-star rating or feedback, framed around helping other people get started.

- It offers two routes, a rating or feedback.
- It arrives before the first workout, asking for a rating of a product the user hasn't yet used.

### O47. A notification addressing lapsed training

A notification arrived while the user was inside the app, reading that lapses happen and what matters is what the user does from now on.

- Its wording matches the training-history answer given earlier in onboarding, though nothing in the record shows a stated rule connecting the two.
- It arrived while the user was already in the app rather than while away from it.
- It was the first notification received, arriving the same day permission was granted.

### O48. Workout reminders in settings

Workout reminders appear as a configurable item in the settings surface.

- The item was named and not opened, so what the reminders are tied to isn't stated.
- It sits alongside the scheduled calendar, which fixes which days carry workouts.
