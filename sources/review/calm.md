**For Lav only: the spine.** Calm is built to get you to pause a little each day and take stock of yourself, by naming how you feel and how you slept, so that reflecting becomes a habit and the app can point you on to its listening. What it gives you in return is a kept record of your own days, a streak and stats that show you coming back, and suggestions for what to listen to next. The motivation it works on is self-awareness first, then progress, with a smaller thread of belonging in the guest pass for someone you care about and the images that carry your record out to people you know.

# Calm: case study copy draft (new voice)

Draft for review. Nothing here has been written to `sources/content/calm.md`, `sources/coverage/calm.md` or any other file. The only source of facts is `sources/analyses/calm.md`. Written to `sources/voice-guide.md` as it now stands (the lens, narrative not inventory, respect the reader, headlines, word rules) and to `sources/prompts/stage2-website-content.md`. Strava's approved copy is a register reference only.

Calm is still on the old shape, so this is a full new draft. Every sentence below is new. What carries over from the previous draft is its decisions (which observations to drop, which sentences to cut and why, that Daily / Weekly Quests is not applied, the coverage items, the looked-wrong list), and each is re-checked and marked where it changed.

## At a glance

- **Applied tags in the analysis:** Streak, Shareable Win, Gifting and Check-In, all at strongly supported or better. Daily / Weekly Quests is listed under the analysis's applied tags but stands at plausible only, so it is not applied.
- **Blocks:** Streak, Shareable Win, Gifting and Check-In each get a block. Nothing is held back by the friend test.
- **Daily / Weekly Quests:** No block. It goes on the coverage report (Part B).
- **Observations:** 52. 48 rewritten, 4 dropped (O24, O32, O33, O40). IDs are kept and none is reused.
- **Sections:** Economy and resources and Social end up empty and show the fixed placeholder.
- **Title field:** Gifting only ("Guest pass"). See the decisions list.

---

# PART A: the case study copy

## Teaser

Current: "Calm's free check-in suite is what actually moves its streak and stats; the subscription content it recommends afterward is what stays locked."

Proposed: Calm asks you to pause and name how you feel or how you slept, and gives you back a record of your days and a suggestion for what to listen to next.

## Intro

Current: "Calm is a meditation and wellness app whose free tier centers on a suite of self-report check-ins, mood, sleep, gratitude, a daily reflection, and a journal, reached from a tab inside Profile rather than from the main navigation. Nearly every piece of listening content sits behind a subscription, with only a handful of free soundscapes and meditations under a stated number of listens. A streak and running stats track how often the check-ins happen, and both are composed into shareable images sent outside the app. A 30-day guest pass, framed as a gift to someone the user cares about, can be sent from the home screen, from Profile, and bundled automatically into one check-in's own share image."

Proposed:

Calm is a meditation and sleep app, and most of its listening sits behind a subscription. What it asks of you without one is to pause and take stock of yourself: how you feel, how you slept, what you're grateful for. In return it keeps a record of your days that you can look back on, a streak and stats that follow your check-ins, and suggestions for what to listen to next. The motivation underneath is self-awareness, with a sense of progress on top and ways to carry your record, and Calm itself, to people you know.

## How it fits together

Current: "Calm is a medium system. Its spine is the check-in suite: five self-report entry points reached only through Profile, the one part of the free tier the streak and stats actually respond to, while almost the entire content catalogue and every recommendation surface stay locked behind a subscription that's never purchased."

Proposed:

Calm's check-ins live in a tab of their own inside Profile, and they're where it asks you to take stock of yourself. You pick how you feel, rate how you slept, write down what you're grateful for, answer a reflection question or add a line to a journal, and each time Calm gives something back: a completion message, a history or calendar you can look back on, and a few things to listen to next. Most of them end by asking when you'd like to check in again and offering a reminder. It's a small, regular act of self-awareness, and the loop is built to make it a habit.

Everything else in Calm is arranged around that loop. Your stats and your streak change after your first check-ins, so the progress you see starts from having reflected, and the streak keeps a count of you coming back. Calm turns that record into images you can send to people you know and offers a guest pass for someone you care about, so what starts as your own record reaches people outside the app. The suggestions at the end of each check-in point into Calm's audio, most of which sits behind the subscription, and the subscription is offered to you from several places along the way.

---

## Mechanics

### Streak

**Implementation summary:** Calm records your current and longest streak on a calendar in your profile, a running count of you coming back.

**How it works:** Your streak has a home in Profile, in a view called My streaks that sits apart from your stats. It shows your current streak, your longest and the streaks you've had in total, and a calendar marks the days of the streak through the month. Calm keeps your longest streak beside your current one, so what it gives you for coming back is progress you can look back on. Once you've signed in, showing streaks is switched on by default, and by the time you've finished your first check-ins the view and its history have already changed, before you've played any audio. Your longest streak also appears with your stats, and the streak has a share button of its own.

**Illustration brief:** The My streaks view in a profile, showing current, longest and total streaks with the month calendar marking the streak days, and the setting that shows streaks switched on.

**What stands out:** Your streak in Calm has already changed after your first check-ins, before you've played any audio.

**Trigger:** Opening the My streaks view in your profile after a check-in.

**What it needs:** A dated record of your activity for the calendar to mark.

**How it connects:** It has changed after Check-In, and Shareable Win turns it into an image you can send out.

**Worth noticing:** Calm keeps your longest streak beside your current one, and switches the streak display on by default once you sign in.

**Screenshots needed:** The My streaks view with its calendar; the show streaks setting after signing in.

### Shareable Win

**Implementation summary:** Calm turns your stats and your streak into separate prepared images, built from its own record of you, to send outside the app.

**How it works:** Your stats and your streak each come with a share button, and each prepares an image of its own rather than a screenshot. The stats version is a story ready for Instagram, carrying the same badge that sits with your stats, and Calm also offers to send it as a message or by other routes. What you're handed is a finished image of Calm's record of you, your mindful days and your streak, rather than something you wrote or made. It works on the social side of the app, since it's made for the people you know rather than for you.

**Illustration brief:** The stats panel and the My streaks view side by side, each with its own share button, and the prepared Instagram story carrying the stats badge.

**What stands out:** Your stats and your streak each get a share image of their own, and both are built from Calm's record of you rather than from anything you made.

**Trigger:** Tapping share on your stats or on your streak.

**What it needs:** Calm's record of your stats or your streak to build the image from.

**How it connects:** It shares what Streak and your stats record, both of which change after Check-In.

**Worth noticing:** Calm prepares the stats share as an Instagram story and offers a message and other routes beside it.

**Screenshots needed:** The stats share building its Instagram story; the separate share button on the streaks view.

### Gifting

**Title:** Guest pass

**Implementation summary:** Calm frames its guest pass as a gift to someone you care about, one you can send without a subscription yourself.

**How it works:** The first time you reach Home after signing in, Calm asks whether you know someone who needs support with stress or sleep and offers you a guest pass to send them. The pass gives that person free access to all of Calm Premium for a month. You send it through a share button, so you choose who gets it, and you don't need a subscription of your own to do it. Profile makes the same offer, worded as a gift for a loved one, and it's still there after you've sent a pass from Home. When you finish a Daily Calm reflection, the quote image Calm offers for sharing comes with a guest pass included. The offer is worded around the person on the receiving end, someone you care about, so it works on belonging: the pull of looking after someone.

**Illustration brief:** The guest pass offer on Home with its share button, and the Daily Calm reflection's quote image carrying a guest pass.

**What stands out:** You can send a month of Premium without holding a subscription yourself, and the pass also travels attached to the quote image after a reflection.

**Trigger:** Reaching Home for the first time after signing in, or opening your profile.

**What it needs:** A share route to reach the person you're giving it to.

**How it connects:** It sits beside Shareable Win, since both go out through a share button, and the Daily Calm reflection's quote image carries a pass of its own.

**Worth noticing:** Calm lets an account with no subscription send a month of Premium.

**Screenshots needed:** The guest pass offer on Home; the offer in Profile; the Daily Calm reflection's share image carrying its own guest pass.

### Check-In

**Implementation summary:** Calm's mood and sleep check-ins ask you to report from a set of options, then keep each answer as a dated record.

**How it works:** Calm's mood and sleep check-ins sit in the Check-ins tab inside Profile, and both ask you to take stock of yourself and keep the answer. Calm says why in its own words: a minute of reflecting on your emotions builds mindful reflection into daily life, and tracking your sleep shows patterns that guide you towards better habits. So what you're asked for is a report on yourself, picked from a set list, with the follow-up detail left optional: 12 moods from happy and excited to anxious and sad, then context tags and a note; a rating from horrible to great, your hours, then factors you can skip. What you get back is a record you can return to: a history where tapping a day shows what you wrote, and a view of your last 7 days with your average sleep time. The motivation is self-awareness. Each check-in then points you to something to listen to and asks when you'd like to check in next, which ties the habit back to the rest of Calm.

**Illustration brief:** The mood check-in's set of moods and its dated history, next to the sleep check-in's rating scale and 7-day view with the average sleep time.

**What stands out:** Calm asks for one pick from a set list and treats the detail around it as optional. Each check-in then ends by asking when you'd like to check in next.

**Trigger:** Opening the mood or sleep check-in from the Check-ins tab in Profile.

**What it needs:** Your own report of how you feel or how you slept, and a dated place to keep each answer.

**How it connects:** Your stats and Streak both change after your first check-ins, Shareable Win turns both into images, and each check-in ends by pointing you to recommended content.

**Worth noticing:** Calm lets you delete a sleep entry but not edit it, and a second entry for the same night sits beside the first.

**Screenshots needed:** The mood check-in's mood selection and history; the sleep check-in's rating and its 7-day view.

---

## Section cards

Economy and resources and Social are empty, so their cards are not written and not linked.

**Onboarding and first run.**
Current: "Calm places nine steps between first launch and the first unguided screen, including two separate paywalls before any content is heard."
Proposed: Calm asks for permissions and your goals, offers you an account and puts a subscription in front of you before you reach Home.

**Core loop and automation.**
Current: "Calm's core loop runs through a mostly locked content catalogue and a mood-based recommendation row on Home, with the check-in suite sitting separately inside Profile."
Proposed: Calm recommends audio by mood on Home, while the check-ins in Profile are where you report on yourself and Calm keeps your record.

**Goals and progression.**
Current: "Calm's stats and streaks are the product's only progression measures, and both move only when a check-in is completed."
Proposed: Your stats and your streak are how Calm shows your progress, and both change after your first check-ins.

**Access and eligibility.**
Current: "A subscription gates nearly everything in Calm's catalogue, with a handful of free exceptions and a few changes that appear only after signing in."
Proposed: Most of Calm's audio opens with a subscription, a few items play for free, and signing in adds account options to Settings.

**Economy and resources.**
Current: "Calm's economy is a single stated allowance of free listens, with nothing earned, spent, or exchanged anywhere else."
Proposed: None. The section is empty and its card is not linked.

**Social.**
Current: "No other identified person appears anywhere inside Calm; every social-shaped surface points outward instead."
Proposed: None. The section is empty and its card is not linked.

**Reach beyond the app.**
Current: "Calm sends a guest pass from two places, composes stats and streaks into outbound shares, and connects to Apple Health from settings."
Proposed: Calm gives you a guest pass to send to someone you care about, and turns your stats and your streak into images you can share.

**Monetization.**
Current: "Calm's Pro subscription is offered from at least three separate screens, each with its own framing, discount or trial length."
Proposed: Calm offers its subscription at several points, each with its own framing, price or trial.

**Return triggers.**
Current: "Every one of Calm's five check-ins ends by asking when the user will check in again, each with its own preset time and no confirmation once set."
Proposed: Most of Calm's check-ins end by asking when you'd like to come back, each with its own preset reminder time.

---

## Section pages

## Onboarding and first run

Calm gets you from first launch to Home through permission requests, a question about your goals, an account offer, subscription offers and a question about how you found it. Home is the first screen you reach unguided.

### O1. 9 steps before Home

The first time you open Calm, 9 steps come before Home: a loading screen, a request to send notifications, a request to track your activity across other companies' apps and websites, a question about your goals, an account offer, a plan paywall, a limited-time offer and a question about how you heard of Calm. No content opens until you've been through all of them. You can close the account screen without signing in and carry on to the paywall, and closing each offer takes you on to the next step.

### O2. The loading screen

While Calm loads, it tells you to take a deep breath. The same line appears on later launches while Home loads.

### O3. Notification permission

The first request after loading is the system's request to let Calm send you notifications. It comes before your goals, an account or any content.

### O4. Tracking permission

Right after that, Calm asks to track your activity across other companies' apps and websites.

### O5. Choosing your goals

The first Calm screen asks what brings you to the app and says it will personalise recommendations around the goals you choose. You can pick several before continuing. The options are build self esteem, develop gratitude, improve performance, reduce stress, reduce anxiety, better sleep and increase happiness.

### O6. Creating an account

After your goals, Calm offers to create an account so your progress is saved, with options to continue with email, Apple or Google, and a login link at the bottom. An option to hear about offers and promos sits beneath them. Closing the screen carries on without an account, and while you're logged out, Profile repeats the invitation to create one to save your progress and see your stats.

### O7. How you heard

Once the offers are closed, Calm asks how you heard about it, and choosing an answer opens Home. The options include friend or family, an article or blog, a TV ad and a therapist or health professional, among others.

### O8. The first Home screen

Home is the first screen you reach unguided. A banner for the family plan sits at the top, inviting you to feel better together with 5 other members. Below it come a greeting for the time of day, a Popular row and a Today's dailies row. Every item in the Popular row is locked. The row mixes breathing exercises, playlists, courses and meditations, among them a 1-minute reset, alpha waves and rain for deep relaxation, and Mindfulness for Beginners, presented as a course.

---

## Core loop and automation

Calm's audio catalogue is browsed from Home, Sleep and Discover, and its check-ins live separately inside Profile. Most of the catalogue is behind the subscription.

### O9. Types of content

Calm's catalogue is audio in many forms: meditations, sleep stories, music, soundscapes, playlists, breathing exercises, movement sessions and courses. Each item shows its length, from a 5-minute playlist and a 6-minute movement session up to a 31-minute sleep story. The onboarding paywall lists masterclasses taught by world-renowned experts among what the subscription includes.

### O10. Today's dailies

Home and Discover both carry a row of recurring daily items called Today's dailies. Calm describes Daily Move as a daily stretching practice for everyone, Daily J as a daily piece of wisdom to inspire, and Daily Calm as an original, inspiring meditation every day. One day's Daily Move was grip strength training.

### O11. Recommendations by mood

After a long scroll, Home asks how you're feeling and offers 6 moods: calm, sad, tired, anxious, panicked and unsure. Until you pick one, Calm shows a default set of items, including a Daily Move session and a green noise soundscape, and a refresh button swaps in new ones. Picking tired reloads the section with a note that it's something for your mood and a different set, including a focus meditation and lo-fi beats. Every recommended item is locked, whichever set you see. Below the section, entry points lead to browsing by meditation, sleep and music.

### O12. The Sleep tab

The Sleep tab opens with soothing bedtime stories to help you fall into a deep, natural sleep, and filters let you narrow by type, such as music, soundscapes or downloads. It features sleep stories, a row of popular ones presented by well-known narrators, stories for kids and themed playlists such as trains, nature, travel and ASMR. The kids' stories include classic tales and stories featuring licensed children's characters.

### O13. The Discover tab

Discover lets you search by title, narrator, artist or topic, and browse by category, by goal or by length, with meditation lengths such as 3 and 20 minutes. It repeats the Today's dailies row and also shows new and noteworthy items and featured collections. Categories include movement, wisdom, reflections and mindful tools, among others.

### O14. The audio player

Playing the free heavy rain soundscape opens a player with download, cast and minimise controls and a sleep timer, along with a note that the item is a free listen.

### O15. Mood before meditation

When you open a meditation, a 3-second countdown to the session starts and Calm asks how you're feeling, inviting you to take a moment to reflect before you begin. Settings include an option to show this mood check-in before sessions, both before and after you sign in. The meditation then opens with a quotation describing meditation as a radical act that shifts your state and who you are.

### O16. Where check-ins live

Calm's 5 check-ins, Quick Journal, the Daily Calm reflection, gratitude, mood and sleep, all live in the Check-ins tab inside Profile, one of 3 tabs there alongside Library and History.

### O17. Quick Journal

Quick Journal opens empty until you tap the add button, which introduces it as an easy way to capture memories, feelings and dreams. Each day brings a fresh prompt, such as a question about what you want your legacy to be, and an entry can be text, a photo or an emoji, up to 300 characters. A control refreshes the prompt if you'd like a different one. After you save, Calm shows the prompt with your answer, animates entry cards across the screen and ends with a line saying a laugh, a smile or a silly prompt can bring joy in small moments.

### O18. Daily Calm reflection

The Daily Calm reflection page describes a new thoughtful topic each day, inspired by the Daily Calm. Starting one shows a quote and then a single question, about where you've found the extraordinary in the ordinary recently, which you answer by typing. When you finish, Calm tells you to savour the moment and then that you've completed your first reflection. The page then holds your response with a share button, a history of past reflections, a week calendar and a reminder section. A second reflection on the same day returns the same quote and question.

### O19. Gratitude check-in

The gratitude check-in starts from a start button in the middle of the screen. Calm asks what you're grateful for today across 3 lines, and a control swaps in other prompts, such as where you found beauty today or what accomplishments you can celebrate. When you finish, Calm shows a short closing screen, then a message that you've completed your first check-in, with sharing offered first. An info button explains that reflecting on what you're grateful for helps build a more positive outlook and resilience for tough times. The week calendar marks the gratitude day in its own colour, and recommended content follows, including Mindfulness in daily life, Relationship with others, a 7 Days of Happiness series and Loving kindness.

### O20. Mood check-in

The mood check-in opens with an introduction saying that taking a minute to reflect on your emotions helps build mindful reflection into daily life, and that Calm will keep track of how you're feeling and support you with recommended mindfulness resources. A preview of a week of emoji-marked days sits alongside, and you can skip the introduction. Calm greets you by the time of day and asks how you're feeling from 12 moods: happy, excited, grateful, relaxed, content, tired, unsure, bored, anxious, angry, stressed and sad. Your choice brings up a line about noticing the feeling in your body, optional context tags such as work, family, money and health, and a note field. Finishing shows a message that you've completed your first check-in, a history where tapping a day shows what you wrote, recommended content and a quote. Choosing grateful, for example, brings a line inviting you to notice what that feels like and relax into it, recommendations that include a Gratitude Masterclass and 7 Days of Gratitude, and a quote about seeing more beauty the more grateful you are.

### O21. Sleep check-in

The sleep check-in is introduced as a new way to track your sleep, with Calm saying it will show patterns to guide you towards better sleep habits and health. You rate how you slept on a 5-point scale from horrible to great, and a note on that screen says tracking sleep quality over time can help you understand what's affecting your sleep. You then set your hours with a bedtime and wake time slider and choose what affected your sleep from factor tags grouped as before sleep and during sleep, a step you can skip. After a good rating the tags still include stress, anxiety, illness, pain and alcohol before sleep, and interrupted sleep, tossing and turning, nightmare and restless mind during it, alongside sleep stories, woke up refreshed and restful sleep. Finishing shows a message that you've completed your first check-in, a view of the last 7 days with your average sleep time, an insights area, recommended content and a reminder section. Calm describes the insights as the factors most associated with good sleep and with bad sleep.

### O22. Editing sleep entries

You can delete an entry in the sleep log but not edit it. If you add another check-in for the same night with a different rating, Calm accepts it, tells you you've completed your second check-in and keeps both entries, with the same times and different ratings.

### O23. Adding sessions by hand

Profile's History tab shows a calendar of your sessions, and you can add a session yourself by entering when it started and how long it lasted.

### O25. Settings and defaults

Once you've signed in, Calm adds 3 settings that are switched on by default: haptic feedback, showing your streaks and autoplaying the next movement session. Haptic feedback has a toggle to switch it off. Before you sign in, Settings already include an option to show the mood check-in before sessions.

---

## Goals and progression

Calm shows your progress in Profile, as stats framed around mindful days and as a streak.

### O26. Your stats

Once you're signed in, Profile shows your stats framed as mindful days, with total sessions, mindful minutes and longest streak. Before there's any activity, they invite you to begin meditating to see your stats. After your first check-ins the stats change, before you've played any content. Tapping a stat animates it. Above the stats sit a motivational line saying being well rested is key to well being and an Unlock Calm Premium button, and a share button opens a prepared story.

### O27. Your streaks

Profile has a My streaks view showing your total streaks, longest streak and current streak, with a calendar marking the streak within the current month. After your first check-ins, the streak view and its history have changed. Your longest streak also appears in your stats, and the streak has its own share button, which shares something displayed differently from the stats share. A setting to show streaks appears once you sign in, switched on by default.

---

## Access and eligibility

A subscription opens most of Calm's audio. A few items play for free, and signing in adds account options to Settings.

### O28. What the subscription opens

Without a subscription, Calm locks the Popular row and every recommended item, including refreshed and mood-based sets. Browsing sleep stories by narrator and opening the full list of sleep stories both lead to the paywall. Almost all of the audio sits behind the subscription.

### O29. Free listens

A heavy rain soundscape on Home plays without a subscription. Opening it tells you that you get 3 free listens and invites you to start a free 7-day trial for full access. Some meditations open for free too. The free items are few, and searching for the word free doesn't turn them up.

### O30. Sleep insights

After a sleep check-in, the insights area for the last 7 days and the last 30 days says to keep checking in to unlock your sleep insights, with no number attached. The insights stay locked after 2 entries for the same night.

### O31. After you sign in

Signing in turns Profile into a personalised view and adds options to Settings to manage your account and your subscription, and to link an organisation subscription, which is for subscriptions that come through an employer. Home, Sleep and Discover look the same as before.

---

## Economy and resources

(no observations in this app.)

---

## Social

(no observations in this app.)

---

## Reach beyond the app

Calm lets you send things out: a guest pass for someone you care about, your stats and your streak as prepared images, and a share option after some check-ins.

### O34. Guest pass on Home

The first time you reach Home after signing in, Calm offers a free 30-day guest pass, asking whether you know someone who needs support reducing stress and improving sleep. Continuing explains that a pass sent to someone you care about gives them free access to all of Calm Premium for a month, and puts a share button on the screen. After you share, a thank-you pop-up stays open. The account sending the pass holds no subscription of its own.

### O35. Gift offer in Profile

Profile prominently offers to give a loved one a 30-day trial of Calm, and the offer is still there after you've shared a pass from Home.

### O36. Sharing your stats

The share button on your stats prepares an Instagram story that carries the same badge as your stats, and also offers to send it as a message or through other routes. You can use it from the first time you open your stats, before they show any activity.

### O37. Sharing your streak

Your streak has its own share button, and what it shares looks different from the stats share.

### O38. Sharing after check-ins

After a gratitude check-in, the first thing Calm offers is sharing, to Instagram stories and other routes. After a Daily Calm reflection, your written response appears with its own share button.

### O39. Reflection quote image

At the bottom of the Daily Calm reflection page, Calm offers that reflection's quote as an image to share for free, and says the image also includes a free 30-day Calm guest pass.

---

## Monetization

Calm puts its subscription in front of you during onboarding, straight after you sign in, from Premium in Profile and in banners across Home, Sleep and Discover.

### O41. Onboarding paywall

After the account screen closes, a paywall offers unlimited free access for 7 days, and its plan list expands on its own. Collapsing it shows what the subscription includes: over 50,000 minutes of audio designed to relieve anxiety and stress, sleep stories narrated by familiar voices, exclusive music for sleep and relaxation, and masterclasses taught by world-renowned experts. The featured plan is an individual year at $79.99, shown as $6.67 a month and marked as a 61% saving, with a 7-day free trial before the charge. The family year for 6 members at $119.99 and the monthly plan at $16.99 come without a trial, and the monthly plan is shown as $203 a year beside the yearly option.

### O42. Renewal reminder default

The trial paywalls, on the onboarding screen and on the Premium screen in Profile, each carry a toggle to remind you 2 days before renewal, switched off by default.

### O43. Limited-time offer

Closing the plan paywall opens a second screen right away, offering a year of Calm for $47.99 as a limited-time deal with 40% off. The terms say $47.99 covers the first year, then $79.99 a year after that. The copy lists calming the mind with meditations, breathing exercises and music, sleeping more soundly with celebrity-read sleep stories, music and soundscapes, and relaxing the body with mindful stretches.

### O44. Premium in Profile

Tapping Premium in Profile opens a different paywall, offering a 7-day free trial for $0. Its renewal reminder toggle is also switched off by default.

### O45. Paywall after sign-in

Right after you sign in, Calm shows the plan paywall again, with more plans available.

### O46. Family plan banner

A banner for the family plan holds the top of Home and appears prominently on Sleep and Discover too. Later, Home's banner is replaced by a welcome offer.

### O47. Today-only welcome offer

Home's top banner can switch to a special welcome offer of 40% off Calm Premium, marked as for that day only, and tapping it opens the $47.99 offer from onboarding.

---

## Return triggers

Most of Calm's check-ins end by asking when you'd like to come back, with a reminder you can set. Each has its own preset times.

### O48. Reflection reminder

After a reflection, the page asks when you'd like to reflect next, with morning, afternoon and night to choose from. Choosing night opens a picker that states the most popular Daily Calm reflection time at night among Calm members, preset to that time and repeating through the week. The stated time is 22:30. Once you set it, the picker closes, and you can set an afternoon reminder as well.

### O49. Gratitude reminder

After a gratitude check-in, Calm asks when you'd like to check in next, framed around making gratitude a daily habit, with the night option preset to 9 pm. If you pick a slot and close without setting a reminder, a prompt asks if you're sure and says a daily habit is hard to build without a little help.

### O50. Mood reminder

After a mood check-in, Calm asks when you'd like to check in next, saying reflecting consistently is the key to tracking and understanding your moods, with the night option preset to 10 pm. Closing without setting a reminder raises the same are-you-sure prompt.

### O51. Sleep reminder

The sleep check-in page offers a daily reminder, with night preset to 11 pm and a morning option.

### O52. Presets by check-in

The night presets differ by check-in: 22:30 for the reflection, 9 pm for gratitude, 10 pm for mood and 11 pm for sleep. Each check-in has its own reminder, so you can set several, at different times.

---

# Decisions and cuts

## Every applied tag accounted for

- **Streak:** Block. Thin but survives: where the streak lives, what it records, and that it has already changed after the first check-ins.
- **Shareable Win:** Block. Survives on what Calm composes and for whom.
- **Gifting:** Block, with a Title (Guest pass). Survives on the framing and on the system-funded pass.
- **Check-In:** Block, covering the mood and sleep check-ins only, which are the tag's observations (O20, O21). The gratitude check-in, Quick Journal and the Daily Calm reflection stay on the section pages and out of the block.
- **Daily / Weekly Quests:** Not applied. It is at plausible, which does not clear the publishing bar, so it gets no block and goes to Part B. It stays tagged in the analysis.

## How the spine shaped the blocks

- Streak is told as progress (a record of coming back), because the analysis gives its role as retention and describes it as the standing record of whether the user comes back. It is not told as fear of losing something: the analysis does not show what a missed day does.
- Shareable Win is told as social, because the analysis's role is social and the images are addressed to people outside Calm. I did not name status: the analysis does not state it.
- Gifting is told as belonging, from the app's own framing (someone you care about, a loved one).
- Check-In is told as self-awareness, from the app's own words about reflection, patterns and daily habit.

## The Streak line and the separate Streak mechanic page

The proposed line was: "Calm's streak sits in your profile and moves when you complete a check-in, not when you play content." I did not keep it as written, for two reasons.

- "Not when you play content" is not in the analysis. It shows the streak view changing after the check-ins, with no content yet played, and never tests what playing content does.
- "Moves when you complete a check-in" is also a little stronger than the analysis. It lists streak-counted check-in under variants not established, because what qualifies for the streak was never shown. What it supports is the order of events: the streak view changed after the first check-ins.

The block says the streak sits in Profile and "has already changed after your first check-ins, before you've played any audio". A line for the mechanic page that agrees with it: "Calm's streak sits in your profile and has already changed after your first check-ins, before you've played any audio."

## Dropped observations (IDs are not reused)

- **O24, Library and downloads.** Empty states plus a downloads list that the narrator did not recall making. Nothing a friend would want survives. The empty states go to coverage. Unchanged from the previous draft.
- **O32, No economy.** Only an absence. The one counted allowance, the free listens, is already in O29. Unchanged.
- **O33, No other users inside Calm.** Only an absence. The places other people do appear (family plan members, the guest pass recipient, the popular reminder time) are already in O46, O34 and O48. Unchanged.
- **O40, Apple Health.** New drop. The previous draft kept it as "Settings list Apple Health as a connection". Under the friend test a friend asks what the connection does, and the analysis cannot say: it is a menu item and an absence of any prompt. It goes to coverage.

## Sentences cut from observations that stay

- O1: "the only way past each offer screen seen is closing it" is now "closing each offer takes you on", because a real user could also start the trial.
- O3: that the narrator taps Allow, and that no Calm screen explains the request.
- O5: that no later screen names the goals chosen.
- O6: the default state of the offers and promos option (unresolved).
- O7: the full option list is cut to examples. The analysis says the exact split of the options is uncertain.
- O8: the Popular row examples are trimmed to three.
- O10: four of the six row names (some are likely transcription errors), that no completion state is shown, that the daily change is stated by Calm's copy only, and the Daily Calm topic example.
- O11: the item lists are trimmed to examples.
- O12: the full filter list, that no age filter is shown, and that scrolling is laggy.
- O13: most of the category list, and the search for the word free (moved to O29, where it explains why free items are hard to find).
- O15: what the answer to the mood question changes.
- O16: that nothing points to the check-ins.
- O17: that Quick Journal has no calendar and no share route, and the second prompt example.
- O18: that voice input may exist, that a second day was not seen, the Daily Calm topic pointer, and the icon the calendar is reached from.
- O19: the empty-state line, trimmed list wording.
- O20: that the quote is chosen to match the mood (plausible, one mood only). The grateful example is given as what happens for that choice and does not claim a match. The tag list is trimmed to examples.
- O21: nothing about how the tags would differ after a poor rating (never seen). The good-rating list is stated as what appears after a good rating only.
- O22: that no warning is shown.
- O23: that History is slow to load.
- O25: the Settings furniture list (sign up, restore purchase, notifications, downloads, language, help, about), which changes nothing you do.
- O26: the transcribed greeting ("Hi love" is likely a garble), and that tapping a stat opens nothing further.
- O27: what qualifies, the continuity period and what a missed day does.
- O28: the narrator's hedge that this rests on browsing rather than opening every item.
- O29: whether a listen is counted down, what happens after 3, and what the narrator's "three things" referred to.
- O31: that Apple is the sign-in route (the platform does not change the mechanic) and that Apple Health is not prompted.
- O34: the recipient's side, any limit on passes, any benefit to the sender, and that the pop-up staying open may allow further sharing.
- O36: what the story shows beyond its badge.
- O37: the destinations offered for the streak share.
- O38: that the gratitude share's contents are unknown, and that Quick Journal offers no share route.
- O46 and O47: what triggers the banner swap, what happens after the day ends, and that refreshing Home brings the family banner back (plausible only).
- O48 to O52: that setting a reminder gives no confirmation or visible record, that reminders overlap without a warning, and whether any reminder fires.

## Decisions the guide did not settle

1. **A Title for Gifting.** The converter allows a Title for a named feature. Calm's guest pass is a named feature. Strava has no Title anywhere. If you would rather keep Title for branded currencies only, delete the field and the block still works.
2. **Naming Calm's own features.** Names such as My streaks, Today's dailies, Check-ins, Quick Journal and Daily Calm are used as the app spells them, without quotation marks, since the rule bans quoting tab names and menu items rather than naming them.
3. **Motivation words the analysis does not state.** I named self-awareness, progress and belonging, and used "social" for Shareable Win. "Status" and "fear of losing something" are not named because the analysis does not support them for Calm.
4. **An absence on a page.** O30 keeps "with no number attached" because it changes how long you would keep checking in. O29 keeps that free items are hard to find because it changes what you can do. This is a judgement call under the "changes what a user can do or decide" test.
5. **O28's hedge.** "Almost all of the audio sits behind the subscription" is the narrator's own conclusion, strongly supported rather than directly observed.
6. **The Return triggers wording.** The analysis records the reminder prompt on 4 check-ins, so the card and lead-in say "most".
7. **Counts and prices on section pages.** They stay as examples inside a point (3 free listens, $47.99). None appears in the teaser, intro or How it fits together.
8. **Spelling of the app's own words.** Paraphrase uses British spelling (savour, colour, personalise). The one place the app's own topic name, savoring, appeared (the Daily Calm topic example in O10 and the pointer in O18) is cut, so no app-spelled word clashes with the house spelling.
9. **Quick Journal's missing share route (O17, O38).** Cut as an absence of the kind the guide treats as the app's silence. It could be argued that it changes what you can do.

---

# PART B: coverage report additions for Calm

This would become `sources/coverage/calm.md`. It does not exist yet. Items 1 to 21 carry over from the previous draft, re-checked and reworded where needed. Items 22 to 31 are new in this draft and marked.

# Coverage report: Calm

**Mechanics held back:** None of the four applied tags. Streak, Shareable Win, Gifting and Check-In each got a block.

**Not applied:** Daily / Weekly Quests. It stands at plausible, so it does not clear the publishing bar and has no block. The Daily Calm reflection is framed as a new topic each day, and a second attempt the same day returned the same quote and question, but the daily issuance rests on Calm's own copy and one day was recorded. Capture: A session on a second day showing a new topic and an incomplete state for that day.

**What's missing, and what to capture on the next walk-through:**

1. **Streak continuity rule (O27).** What qualifies for the streak, the continuity period and what a missed day does to the count were never recorded, and the day boundary was never crossed. Capture: A session that spans a missed day and shows the current streak reset or hold.
2. **Whether playing content moves the stats or streak (O26, O27).** The check-ins came before any content and the stats and streak changed. What a played meditation does was not recorded, so the copy says the streak changed after the check-ins and says nothing either way about content. Capture: Play a meditation and read the stats and streak before and after.
3. **Guest pass, recipient side (O34).** Delivery, any limit on passes sent, any benefit to the sender, and whether the thank-you pop-up allows further sharing. Capture: A session on the receiving account, and a second send from the same account.
4. **What the share images show (O36, O37, O38).** The stats story beyond its badge, the streak share's destinations, the gratitude share's contents, and why Quick Journal has no share route. Capture: Open each share and keep the composed image.
5. **Free listens (O29).** Whether a listen is counted down, what happens after 3, and whether the narrator's "three" meant items or listens. Capture: Play the free soundscape four times and note the screen each time.
6. **Sleep insights threshold (O30, and the unresolved Progression Gate).** The number of check-ins at which insights open, and whether insights wait on a stated requirement or on enough data. Capture: Keep checking in across several nights until insights open, or find where the number is stated.
7. **Masterclasses and courses (unresolved Expert Guidance; O9, O20, O41).** Whether these teach a subject, and whether they sit beside the listening or are the listening. Everything behind the subscription went unopened. Capture: Open one masterclass and one course on a subscribed account.
8. **Mood question before meditations (O15).** What the answer changes, its options and whether any record is kept. Capture: Answer it, play the meditation and look for what changed.
9. **Mood recommendations and the quote (O20).** Only grateful was tried, so whether the recommendations, the quote and the context tags change with the mood is not established. Capture: Complete the mood check-in with 3 different moods and compare.
10. **Sleep tags (O21).** One rating was chosen, so whether the factor tags change with the rating is not established beyond the good-rating list. Capture: A poor rating and a middling rating.
11. **Goal selection (O5).** The goals chosen are not named on any later screen reached. Capture: Choose different goals and look for any change in Home recommendations.
12. **Welcome offer (O46, O47).** What triggers Home's banner swap, what happens when the day ends, and whether refreshing Home brings the family banner back (the transcript is garbled there). Capture: Note the time, the account state and the action before each swap.
13. **Reminders (O48 to O52).** Whether any reminder fires, whether setting one is confirmed anywhere, and whether the afternoon and night reminders on one check-in both hold. Capture: Set a reminder a few minutes out and wait.
14. **Where the check-ins can be reached from (O16).** They were found only through Profile. Capture: Look for any entry point on Home, Sleep or Discover on an account with history.
15. **Today's dailies (O10).** Some of the 6 row names are likely transcription errors, so only 3 are on the page, and no completion state was recorded for any item. Capture: A clean read of the row, and one item played to the end.
16. **Daily Calm reflection details (O18).** Whether voice input exists, and whether the topic changes each day (stated by Calm's copy, not recorded). Capture: A second-day session.
17. **Reflection reminder time and the tag lists (O48, O20).** The 22:30 figure and the mood context tags were transcribed from speech and are partly uncertain. Capture: The picker and the tag list on screen.
18. **Library and Downloads (O24, dropped from the page).** The empty states were recorded, along with 2 downloads the narrator did not recall making. Capture: The Library and Downloads tabs after a full session of use.
19. **Family plan (Group Membership, not applied).** The plan is offered for 6 members but was never purchased, so no group, member list or member-scoped condition was recorded. Capture: A subscribed family plan session.
20. **Apple Health (O40, dropped from the page).** Listed in Settings and never prompted. What connecting it does is unknown, which is why it is not on the page. Capture: Connect it and record what Calm shows.
21. **Quick Journal reminder (O17).** The 4 reminder prompts are recorded, and Quick Journal's closing line is about joy in small moments. Whether it asks when you'd like to journal next is not recorded, nor whether it has a calendar or share route anywhere. Capture: Finish a Quick Journal entry and read every screen after it.
22. **New: manual sessions (O23).** Whether a session added by hand moves the stats or the streak. Capture: Add a manual session and read both before and after.
23. **New: the stats badge (O36).** What the badge shows and whether it stands for an attained criterion, which decides whether Shareable Win carries a badge variant. Capture: The badge on screen and in the composed story.
24. **New: the seven-day sleep average with two entries (O21, O22).** Whether the average and the insights count both entries for one night. Capture: Add two entries for one night with different ratings and read the average.
25. **New: what show streaks switches off (O25, O27).** Whether it hides the My streaks view, the calendar or the longest streak in stats. Capture: Switch it off and read Profile.
26. **New: what total streaks counts (O27).** Whether it counts runs completed, runs started or something else. Capture: Read it across a reset.
27. **New: the first-launch option list (O7).** The transcript runs the attribution options together and their exact split is uncertain. Capture: The options on screen.
28. **New: the Sleep tab (O12).** Whether a kids' age filter exists and whether the lag in scrolling repeats. Capture: Scroll the Sleep tab and the kids' shelf on a second device.
29. **New: device, platform and app version.** None is stated, and several facts (Instagram stories, the system permission prompts, the Apple-based sign-in) depend on them. Capture: Record all three at the start of the next walk-through.
30. **New: the stats motivational line (O26).** The line above the stats was transcribed as "Hi love. Being well rested is the key to well being", and "Hi love" is probably a garbled greeting. Capture: The line on screen.
31. **New: Check-In reach beyond mood and sleep (O19, O17, O18).** Gratitude, the reflection and Quick Journal are kept off the Check-In tag because their answers are free writing. If a later session shows a defined option set or a kept record on any of them, the block would need revisiting. Capture: Each of the three, with every screen after the answer.

**Any other gap worth filling:** One session, signed in on a free account, never subscribed. A second session on a subscribed account would settle items 2, 5, 6, 7 and 19 at once, and a second day on the same account would settle items 1, 13, 16 and the Daily / Weekly Quests question.

---

# Looked wrong while drafting (reported, not fixed)

- **The Return triggers card and lead-in say all 5 check-ins ask when you'll check in next.** The analysis (O48 to O51) records the prompt on 4. Quick Journal has none recorded. Carried over from the previous draft.
- **The current content says "total activity" and "calendar of completed activity".** The analysis says total sessions (O26) and a calendar of sessions (O23). The current wording changed the fact. Carried over.
- **The current Streak block says the streak moves "only" for check-ins and "not when content is played".** The analysis does not test content, and it lists what qualifies for the streak as not established. Carried over, and now also affects the line proposed for the Streak mechanic page.
- **Calm's `system.tagline` and the visitor-path Calm card.** The approved tagline in `sources/review/visitor-path.md` reads "the free check-ins are what move your streak and stats", which carries the same overreach for the streak. That file also says the Calm card takes its headline and its What stands out from the Streak block in this file. Both would need to agree with the new Streak wording before either is applied. The tagline itself lives in `data.js`, which I have not edited.
- **The current Check-In block calls the check-ins "the strongest case for this mechanic" and explains why the gratitude check-in and the journal are not this tag.** Both comment on the write-up itself. Carried over.
- **The current content says the paywall lists "tens of thousands of minutes".** The analysis says over 50,000. Carried over.
- **The current Monetization card says "Pro subscription".** The paywall screens say Premium. Carried over.
- **The analysis lists Daily / Weekly Quests under "Applied tags" while its confidence is plausible.** Under the stage 2 definition of applied, that heading is wrong for this tag. The analysis is not edited here.
- **Check-In is a merged library entry (Calm and Insight Timer).** Both analyses carry the tag, so the standing rule on multi-app entries is met for the analyses. Insight Timer's block should exist in the same sitting. I did not check its content file.
