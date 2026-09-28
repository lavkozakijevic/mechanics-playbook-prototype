# Calm

**Teaser:** Calm's free check-in suite is what actually moves its streak and stats; the subscription content it recommends afterward is what stays locked.

Calm is a meditation and wellness app whose free tier centers on a suite of self-report check-ins, mood, sleep, gratitude, a daily reflection, and a journal, reached from a tab inside Profile rather than from the main navigation. Nearly every piece of listening content sits behind a subscription, with only a handful of free soundscapes and meditations under a stated number of listens. A streak and running stats track how often the check-ins happen, and both are composed into shareable images sent outside the app. A 30-day guest pass, framed as a gift to someone the user cares about, can be sent from the home screen, from Profile, and bundled automatically into one check-in's own share image.

---

## System view

Calm is a medium system. Its spine is the check-in suite: five self-report entry points reached only through Profile, the one part of the free tier the streak and stats actually respond to, while almost the entire content catalogue and every recommendation surface stay locked behind a subscription that's never purchased.

---

## Mechanics

### Streak

**Implementation summary:** Calm's streak sits inside Profile rather than on the home screen, and moves only when a check-in is completed, not when content is played.

**What was observed:** Calm's Profile carries a My streaks view showing a current streak, a longest streak and a total, marked on a calendar for the current month. Signing in turns on a setting that displays streaks by default. Completing the check-ins changed both the streak view and its calendar history before any audio content had been played.

**How it is presented:** The streak sits inside Profile, reached through its own view separate from the main stats panel, with a calendar highlighting the streak days within the month. It carries its own share control, distinct from the one on the stats panel.

**What is worth noting:** The streak responds to the check-in suite rather than to listening activity: it changed after check-ins alone, with nothing played. What actually breaks or protects a streak, and what counts as the qualifying day, is left unclear, since no day boundary is ever crossed to test it.

**Key findings:**

- Streaks are shown as current, longest and total, on a monthly calendar inside Profile.
- Streaks display by default once the user signs in.
- The streak view and its calendar changed after check-ins alone, with no content played.
- What breaks or protects a streak is left unclear.

**Screenshots needed:** the My streaks view with its calendar, and the streaks setting toggle after sign-in.

### Shareable Win

**Implementation summary:** Calm composes stats and streaks into separately designed share images, each built from Calm's own record rather than anything the user created.

**What was observed:** Calm turns the stats panel into a prepared Instagram story carrying a stats badge, offered alongside a message option and other routes out. The streaks view carries its own share control, built and displayed differently from the stats share. Both were used before any content had been played, since it was the check-ins alone that gave the panels something to show.

**How it is presented:** A share control sits directly on the stats panel and a separate one on the streaks view, each composing its own image rather than sharing a plain screenshot.

**What is worth noting:** The two shares stay separate rather than folding into one control: stats and streaks are framed as different records worth sending out on their own terms, even though both come from the same underlying activity. What the shared story shows beyond its badge is left unclear, so what a reader outside Calm would actually see stays open.

**Key findings:**

- Stats compose into a prepared Instagram story carrying a stats badge, with message and other share routes offered too.
- Streaks carry their own separate share control, distinct from the stats share.
- Both shares were used before any content had been played.
- What the shared story shows beyond its badge is left unclear.

**Screenshots needed:** the stats share composing its Instagram story, and the separate streaks share control.

### Gifting

**Implementation summary:** Calm's 30-day guest pass is sent from an account holding no subscription of its own, and one check-in's share image bundles a pass automatically.

**What was observed:** Calm offers a 30-day guest pass on the first Home screen after signing in and again from Profile, framed as something to send a loved one or someone who needs support. Continuing states plainly that the recipient gets a full month of Calm Premium for free. The sending account holds no subscription itself. The Daily Calm reflection's own share image, offered as a free quote to send out, also carries a guest pass bundled into it without a separate request.

**How it is presented:** The offer appears prominently at the top of Home right after signing in, and again inside Profile, worded around giving to someone the user cares about rather than around the app itself. The reflection's guest-pass image sits at the bottom of that check-in's own page.

**What is worth noting:** The gift needs no subscription behind it: an account with nothing to give still sends a full month of Premium access. Nothing accrues to the sender for sending it, and what happens on the recipient's side, whether the pass is limited, or what happens after sharing beyond a pop-up that stays open, is left unclear.

**Key findings:**

- A 30-day guest pass grants full Calm Premium access to a named recipient for free.
- The sending account holds no subscription of its own.
- The offer repeats on Home and inside Profile.
- The Daily Calm reflection's own share image bundles a guest pass automatically.

**Screenshots needed:** the guest pass offer on Home, and the Daily Calm reflection's share image carrying its own guest pass.

### Check-In

**Implementation summary:** Calm runs two kept self-reports, mood and sleep, each reached only from a Profile tab nothing else in the app points to.

**What was observed:** Calm's Check-ins tab, reached only through Profile, holds a mood check-in and a sleep check-in among its five entries, with nothing elsewhere in the app pointing to the tab. The mood check-in asks the user to choose one of twelve named moods, then offers context tags and a note, and keeps every answer in a history where tapping a day shows what was written. The sleep check-in asks for a rating on a five-point scale, the hours slept, and factor tags grouped by before and during sleep, and keeps entries in a running seven-day view with an average; entries can be deleted but not edited, and a second entry for the same night is accepted and kept alongside the first rather than replacing it. Completing either one moves the stats and streak views even before any content has been played, and each ends by asking when the user would like to check in next.

**How it is presented:** Both check-ins sit behind their own tab inside Profile, reached independently of any other activity. Each opens with a short framing line about what the report is for, walks through its options, and closes with a completion message, a kept history or running average, recommended content, and a prompt to set a reminder.

**What is worth noting:** Both check-ins are the strongest case for this mechanic: the product states plainly that it keeps a history and a running average, and the stats visibly respond to a completed check-in with nothing else happening. The sleep check-in additionally shows what a kept record can look like when it's inconsistent: two entries for the same night, with different ratings, sit side by side with no warning. Calm's other self-report surfaces, a gratitude prompt and a short journal, ask the same kind of question but with free-form answers rather than a defined set of options, which is what keeps them out of this tag.

**Key findings:**

- The mood check-in offers twelve named moods, then context tags and a note, kept in a dated history.
- The sleep check-in offers a five-point rating, hours slept, and factor tags, kept in a running seven-day average.
- Both check-ins are reached only from a tab inside Profile, with nothing elsewhere pointing to them.
- A second sleep entry for the same night is kept alongside the first rather than replacing it.
- Completing either check-in moved the stats and streak views with no content played.

**Screenshots needed:** the mood check-in's mood selection and history, and the sleep check-in's rating and seven-day view.

---

## Onboarding and first run

Calm places nine steps between first launch and the first unguided screen, including two separate paywalls before any content is heard.

### O1. Nine steps before Home

On first launch, Calm runs through a loading screen, a notification permission request, a cross-app tracking permission request, a goal selection screen, an account creation screen, a plan paywall, a limited-time offer, and an attribution question, in that order, before reaching Home. No content plays until all of these have been passed. The account creation screen can be closed without signing in, continuing straight to the paywall, and both offer screens come before the attribution question. The only way past each offer screen is closing it.

### O2. Loading screen cue

While loading, Calm displays a line asking the user to take a deep breath. The same cue appears on later launches while Home loads.

### O3. Notification permission request

The first prompt after loading is the system request for Calm to send notifications, shown before goals, an account, or any content. No Calm screen explaining the request comes before it.

### O4. Tracking permission request

Directly after the notification prompt, Calm asks to allow tracking of activity across other companies' apps and websites.

### O5. Goal selection screen

Calm's first screen asks what brings the user to Calm, stating that it will personalize recommendations based on the goals chosen, with options including building self esteem, developing gratitude, improving performance, reducing stress, reducing anxiety, sleeping better, and increasing happiness. Several can be selected before continuing. No later screen names the goals chosen here.

### O6. Account creation offer

After goals, Calm offers to create an account to save progress, with continue options for email, Apple and Google, an option to hear about offers and promos, and a login link at the bottom. Closing the screen continues onboarding without an account. While logged out, Profile repeats the same invitation to create an account and see stats.

### O7. Attribution question

After the offer screens close, Calm asks how the user heard about it, with options including friend or family, an article or blog, social media or an online ad, a YouTube influencer, an employer, the App Store or Google, a TV ad, a podcast ad, and a therapist or health professional. Choosing an answer opens Home.

### O8. First Home screen

The first screen the user faces unguided is Home, topped by a banner promoting the family plan for six members. Beneath it sit a time-of-day greeting, a Popular row, and a Today's dailies row. Every item in the Popular row is locked, including a one-minute reset, alpha waves and rain for deep relaxation, calming anxiety, rain on leaves, and Mindfulness for Beginners presented as a course. The row mixes breathing exercises, playlists, courses and meditations together.

---

## Core loop and automation

Calm's core loop runs through a mostly locked content catalogue and a mood-based recommendation row on Home, with the check-in suite sitting separately inside Profile.

### O9. Catalogue content types

Calm presents its catalogue as audio items of several types, including meditations, sleep stories, music, soundscapes, playlists, breathing exercises, movement practices and courses, each labelled with its duration. Durations run from a five-minute playlist and a six-minute movement item up to a 31-minute sleep story. The onboarding paywall lists masterclasses taught by well known experts among what the subscription includes.

### O10. Today's dailies row

Home and Discover both carry a Today's dailies row listing recurring items: Daily Calm, Daily J, Daily Move, Daily Trip, Moment of Calm and Slow downtown. Calm describes Daily Move as a daily stretching practice for everyone, Daily J as a daily piece of wisdom, and Daily Calm as an original meditation every day. On the day seen, Daily Move was grip strength training and Daily Calm's topic was savoring. No completion state is shown for any item in the row, and the row's daily change is stated only by Calm's own copy.

### O11. Mood-based recommendations

After a full scroll, Home asks how the user is feeling from six moods: calm, sad, tired, anxious, panicked and unsure. Before a mood is chosen, Calm shows a default set with a refresh control that swaps in new items; choosing tired reloads the section with a different set framed around that mood. The default set includes a Daily Move item, a green noise soundscape, a bilateral stimulation meditation for burnout recovery, and a sleep story; the tired set includes a music track, lo-fi beats, a focus meditation, and several soundscapes. Every item in every version of this section is locked. Below it sit entry points to browse by meditation, sleep and music.

### O12. Sleep tab library

The Sleep tab opens with a line about soothing bedtime stories, offering filters for all, meditations, tools, music, soundscapes, playlists, downloads and sleep stories. It shows featured sleep stories, a row of popular ones presented by well known voices, sleep stories for kids, and themed playlists covering trains, nature, travel, fiction, non-fiction, naps and ASMR. Kids stories include classic tales and stories featuring licensed characters, with no age filter shown.

### O13. Discover tab

Discover offers search by title, voice, artist or topic, repeats the Today's dailies row, and lists categories including movement, dailies, work, wisdom, kids, soundscapes, music, reflections, meditation, Calm lifestyle, mindful tools and sleep. Further down it shows new and noteworthy items, browsing by goal, browsing meditations by length with options such as 3 and 20 minutes, and featured collections. Searching for the word free returns no free items.

### O14. Audio player controls

Playing a free heavy rain soundscape opens a player with download, cast and minimize controls and a sleep timer, alongside a notice that the item is a free listen.

### O15. Pre-meditation mood question

Opening a meditation shows a brief countdown, then asks how the user is feeling and invites a moment to reflect before it begins. Settings carry a toggle for showing this mood question before meditations, visible both before and after sign-in. The meditation that follows opens with a quotation describing meditation as an act that shifts who a person is. What the answer to this question changes afterward is left unclear.

### O16. Locating the check-ins

Calm's five check-ins, Quick Journal, Daily Calm reflection, gratitude, mood and sleep, are all reached through a Check-ins tab inside Profile, itself one of three tabs there alongside Library and History. Nothing else in the app points to this tab.

### O17. Quick Journal

Quick Journal opens empty, with no prompt or guide shown until the add button is tapped. Tapping add introduces it as a way to capture memories, feelings and dreams, states that each day brings a fresh prompt, and allows an entry to be text, a photo or an emoji, capped at 300 characters; a control lets the user refresh the prompt to find a different one. Prompts seen include a question about legacy and a prompt to list worries outside the user's control. After saving, Calm shows the prompt with the answer, animates entry cards across the screen, and closes with a line about how a small moment of joy can come from a laugh or a silly prompt. Quick Journal shows no calendar and offers no share route.

### O18. Daily Calm reflection

The Daily Calm reflection page opens stating that no reflections have been completed yet, and describes itself as a new thoughtful topic each day inspired by the Daily Calm. Starting it shows a quote, then a single question, answered by typing; completing it shows a short closing line followed by a completion message pointing back to that day's Daily Calm topic. The page then holds the written response with its own share control, a history of past reflections, a week calendar and list, and a reminder section. Adding a second reflection the same day returns the identical quote and question.

### O19. Gratitude check-in

The gratitude page opens stating that no gratitude check-ins have been completed yet, with a start control in the middle of the screen. It asks what the user is grateful for today across three lines, with a control to swap the prompt for others, such as a question about where the user found beauty or what they can celebrate. Completing it shows a closing line, then a completion message, with sharing offered first. An info control explains that reflecting on gratitude builds a more positive outlook and resilience. The week calendar marks a gratitude day in its own color, and recommended content follows: a mindfulness series, a relationship-focused series, a happiness series, and a loving kindness track.

### O20. Mood check-in

The mood check-in opens with a line explaining that a minute of reflection builds mindfulness into daily life and that Calm will track feelings and recommend matching content, alongside a preview of a week of emoji-marked days. It greets the user by time of day and asks how they're feeling from twelve named moods, then shows a body-awareness line for the chosen mood, optional context tags covering areas like work, family, money and health, and a note field. Completing it shows a completion message, a history where tapping a day shows what was written, recommended content, and a quote chosen to match the mood. After choosing grateful, the body-awareness line, the recommended content, a masterclass and two series, and the quote all matched that mood. The introduction to this check-in can be skipped.

### O21. Sleep check-in

The sleep check-in is introduced as a new way to track sleep, stating that it will show patterns to guide the user toward better sleep habits. It asks for a rating on a five-point scale from horrible to great, sets hours slept with a bedtime and wake time slider, then asks what affected the sleep through factor tags grouped as before sleep and during sleep, with a skip control on this step. Completing it shows a completion message, a seven-day view with an average sleep time, an insights area stating that more check-ins are needed to unlock sleep insights, recommended content, and a reminder section. After a good rating, the factor tags offered still included negative options like stress, anxiety, illness, pain and alcohol alongside positive ones.

### O22. Editing sleep entries

Entries in the sleep log can be deleted but not edited. Adding a second check-in for the same night with a different rating is accepted and produces its own completion message, leaving two entries for that night with conflicting ratings at the same times and no warning shown.

### O23. Manually logged activity

Profile History shows a calendar of completed activity, and an entry can be added manually by stating when it started and how long it lasted.

### O24. Library tab contents

Profile Library states that no history exists yet, prompting the user to start a meditation, sleep story or other content, and shows no playlists, favorites, collections or courses. Downloads lists a timed meditation and an open-ended meditation, neither of which the user recalls downloading.

### O25. Settings and defaults

Settings govern the app's core experience and add new defaults after sign-in. Before signing in, Settings offer signing up or logging in, restoring a purchase, notifications, downloads, a toggle for the mood question before meditations, language, an Apple Health connection, help and support, and an about page. After signing in, Settings add haptic feedback, showing streaks, and autoplaying the next movement item, all switched on by default; haptic feedback can be turned off.

---

## Goals and progression

Calm's stats and streaks are the product's only progression measures, and both move only when a check-in is completed.

### O26. Stats panel

Once signed in, Profile shows stats framed as mindful days, alongside total activity, mindful minutes, and longest streak, reading a prompt to begin meditating before anything has happened. After the check-ins, the stats had changed, even though no content had been played, so the check-ins alone moved them. Tapping a stat animates it without opening anything further. Above the stats sits a motivational line and a button to unlock Calm Premium. A share control on the stats opens a prepared story.

### O27. Streaks view

Profile carries a My streaks view showing total streaks, longest streak and current streak, with a calendar marking the streak within the current month. After the check-ins, the streak view and its history had changed as well. Streaks are shared through their own control, displayed differently from the stats share. Longest streak also appears inside the stats panel. A show-streaks setting appears after sign-in, on by default. What activity qualifies, what the continuity period is, and what a missed day does to the streak are left unclear.

---

## Access and eligibility

A subscription gates nearly everything in Calm's catalogue, with a handful of free exceptions and a few changes that appear only after signing in.

### O28. Subscription gates content

Without a subscription, Calm locks the Popular row and every recommended item, including refreshed and mood-based sets. Browsing sleep stories by voice and viewing the full sleep story list both lead to the paywall. Based on browsing rather than opening every item, almost nothing can be listened to without subscribing.

### O29. Free listen allowance

A heavy rain soundscape on Home plays without a subscription, and opening it states that three free listens are included before a seven-day free trial is needed for full access. Some meditations also open for free. The free items are few and not easy to find, and a search for the word free does not surface them. Whether a listen is counted down, and what happens after three listens, is left unclear.

### O30. Sleep insights lock

After a sleep check-in, the insights area for the last seven and last 30 days reads that more check-ins are needed to unlock sleep insights, with no number stated. The insights stay locked even after two entries have been logged for the same night.

### O31. Changes after sign-in

Signing in with Apple turns Profile into a personalized view and adds managing the account, managing the subscription, and linking an organization subscription to Settings, the last option intended for subscriptions provided through an employer. Home, Sleep and Discover otherwise stay unchanged after signing in, and Apple Health is not requested at this point.

---

## Economy and resources

Calm's economy is a single stated allowance of free listens, with nothing earned, spent, or exchanged anywhere else.

### O32. No currency or balance

Calm shows no currency, points, balance, or spendable quantity anywhere. The only counted allowance is a stated number of free listens. Stats count activity and minutes, but nothing is spent from either figure.

---

## Social

No other identified person appears anywhere inside Calm; every social-shaped surface points outward instead.

### O33. No other users inside Calm

Calm shows no friends, contacts, groups, messaging, shared state, or comparison against named others anywhere. Other people appear only as the family plan's other members, the recipient of a guest pass sent outward, and an aggregate of Calm members behind a stated popular reminder time.

---

## Reach beyond the app

Calm sends a guest pass from two places, composes stats and streaks into outbound shares, and connects to Apple Health from settings.

### O34. Guest pass offer on Home

On the first Home visit after signing in, Calm offers to gift a free 30-day guest pass, framed around someone who needs support reducing stress and improving sleep. Continuing states that a guest pass sent to someone the user cares about gives them free access to all of Calm Premium for a month, with a share control attached. The sending account holds no subscription itself. After sharing, a thank-you pop-up stays open rather than closing, which may allow further sharing. The recipient's side, any limit on passes sent, and any benefit to the sender are left unclear.

### O35. Gift offer in Profile

Profile prominently offers to give a loved one a 30-day trial of Calm, still available after a pass has already been shared from Home.

### O36. Sharing stats

The share control on stats produces a prepared Instagram story, carrying the same badge shown with the stats, alongside options to send it as a message or through other routes. The share is used before the stats show any activity. What the story shows beyond its badge is left unclear.

### O37. Sharing streaks

The streaks view carries its own share control, and what it shares is displayed differently from the stats share. The destinations offered for the streak share are not listed separately from the general share sheet.

### O38. Sharing after a check-in

After a gratitude check-in, the first thing Calm offers is sharing, to Instagram stories and other routes. After a Daily Calm reflection, the user's written response is shown with its own share control. What the gratitude share contains is left unclear, and Quick Journal offers no share route at all.

### O39. Reflection quote carries a guest pass

At the bottom of the Daily Calm reflection page, Calm offers the day's quote as a free image to share, stating that the image also includes a free 30-day Calm guest pass.

### O40. Apple Health connection

Settings list Apple Health as a connection option. It is never actively prompted anywhere else.

---

## Monetization

Calm's Pro subscription is offered from at least three separate screens, each with its own framing, discount or trial length.

### O41. Onboarding paywall

After the account screen closes, Calm shows a paywall offering unlimited free access for seven days, with its plan list expanding on its own without being tapped. Collapsing it lists what the subscription includes: tens of thousands of minutes of audio for anxiety and stress relief, sleep stories narrated by familiar voices, exclusive music, and masterclasses taught by well known experts. The featured plan is an individual year at $79.99, shown as $6.67 a month with a stated 61% saving and a seven-day free trial. Plans without a trial include a family year for six members at $119.99, and a monthly plan at $16.99, restated as $203 a year beside the yearly option.

### O42. Renewal reminder default

The trial paywalls, seen on the onboarding paywall and on the Premium screen inside Profile, each carry a toggle to send a reminder two days before renewal, off by default.

### O43. Limited-time discount offer

Closing the plan paywall opens a second screen immediately, offering a year of Calm for $47.99 with a stated 40% discount. The terms state that price applies to the first year only, renewing at $79.99 afterward. The copy lists calming the mind with meditations, breathing exercises and music, sleeping more soundly with celebrity-read sleep stories and soundscapes, and relaxing the body with mindful stretches.

### O44. Premium screen in Profile

Tapping Premium inside Profile opens a separate paywall offering a seven-day free trial for $0. Its renewal reminder toggle is also off by default.

### O45. Paywall after sign-in

Immediately after signing in, Calm shows the same onboarding-style paywall again, this time with more plans available.

### O46. Family plan banner

A banner promoting the family plan holds the top position on Home and appears prominently on Sleep and Discover as well. Later, Home's banner is replaced by a welcome offer instead; what triggers the replacement is left unclear.

### O47. Today-only welcome offer

Later, Home's top banner switches to a special welcome offer promising 40% off Calm Premium for that day only, and tapping it opens the same $47.99 offer seen during onboarding. Refreshing Home afterward brings the family plan banner back. What happens to the offer once the day ends is left unclear.

---

## Return triggers

Every one of Calm's five check-ins ends by asking when the user will check in again, each with its own preset time and no confirmation once set.

### O48. Reflection reminder prompt

After a reflection, the page asks when the user would like to reflect next, offering morning, afternoon and night. Choosing night opens a picker stating the most popular Daily Calm reflection time among Calm members at night, preset to that time and repeating through the week. The stated time is 22:30. Setting the reminder closes the picker with no confirmation, and a second, afternoon reminder can then be set as well with no warning about the first.

### O49. Gratitude reminder prompt

After a gratitude check-in, Calm asks when the user would like to check in next, with the night option preset to 9 pm. Choosing a slot and closing without setting a reminder raises a prompt asking if the user is sure, framed around how hard it can be to build a daily habit without help. Setting it gives no confirmation and leaves no visible record of the reminder.

### O50. Mood check-in reminder prompt

After a mood check-in, Calm asks when the user would like to check in next, framed around reflecting consistently being key to tracking and understanding moods, with the night option preset to 10 pm. Closing without setting a reminder raises the same are-you-sure prompt. Setting it gives no confirmation.

### O51. Sleep check-in reminder prompt

The sleep check-in page offers a daily reminder, with night preset to 11 pm and a morning option also available.

### O52. Reminders accumulate unconfirmed

Across the check-ins, reminders can be set for several different times without Calm confirming any of them or flagging that they overlap. The only sign that a reminder has registered is the are-you-sure prompt that appears when leaving without setting one. Night presets differ by check-in: 22:30 for reflection, 9 pm for gratitude, 10 pm for mood, and 11 pm for sleep. Whether any reminder actually fires is left unclear.
