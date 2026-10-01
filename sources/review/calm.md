# Calm: case study copy draft

Draft for review. Nothing here has been written to `sources/content/calm.md`, `sources/coverage/calm.md` or any other file. Source of facts: `sources/analyses/calm.md` only. Written to `sources/voice-guide.md` as it stands, with Strava's approved copy as the register.

Calm is still on the old shape throughout (the four mechanic blocks carry What was observed, How it is presented, What is worth noting and Key findings; the intro and system view use "the user" and "a medium system"). So everything below is a full new draft. Where a section card exists today I show current and proposed.

## At a glance

- **Applied tags in the analysis:** Streak, Shareable Win, Gifting, Check-In (all at "strongly supported" or better) and Daily / Weekly Quests (plausible only).
- **Blocks:** all four tags that clear the bar get a block. Daily / Weekly Quests does not clear the publishing bar, so it is not applied and gets no block. It goes on the coverage report.
- **Nothing held back by the friend test.** Each of the four has something a friend would want to hear. Streak and Shareable Win are the thinnest; both survive on what Calm actually does with them.
- **Observations:** 52. 3 dropped, 49 rewritten. Observation IDs are kept; none is reused.
- **Sections:** Economy and Social end up empty. Both held only an absence.
- **No Title fields.** Calm gives none of these mechanics a name of its own.

---

# PART A: the summary page

## Teaser

Current: "Calm's free check-in suite is what actually moves its streak and stats; the subscription content it recommends afterward is what stays locked."

Proposed: "In Calm, a mood check-in is enough to move your streak and stats, before you've played any content."

Reason: "actually" and the semicolon clause carry a contrast against the subscription. One true thing, stated once.

## Intro

Current: "Calm is a meditation and wellness app whose free tier centers on a suite of self-report check-ins, mood, sleep, gratitude, a daily reflection, and a journal, reached from a tab inside Profile rather than from the main navigation. Nearly every piece of listening content sits behind a subscription, with only a handful of free soundscapes and meditations under a stated number of listens. A streak and running stats track how often the check-ins happen, and both are composed into shareable images sent outside the app. A 30-day guest pass, framed as a gift to someone the user cares about, can be sent from the home screen, from Profile, and bundled automatically into one check-in's own share image."

Proposed:

Calm is a meditation and wellness app, and nearly all of its audio sits behind a subscription. Only a few soundscapes and meditations play for free, and Calm says you get three free listens before the free trial. What you can use without paying is a set of five check-ins, a mood check, a sleep check, a gratitude check, a daily reflection and a quick journal, all reached from a tab inside Profile. Your streak and stats follow those check-ins, and Calm turns both into images you can share. A 30-day guest pass for Premium, framed as a gift to someone you care about, can be sent from Home and from Profile.

Reason: "the user" becomes "you"; "rather than from the main navigation" and "free tier centers on" are dropped (the first compares against what we saw of the navigation, the second is a label). "Track how often the check-ins happen" is replaced by the plain fact that the streak and stats follow them.

## How it fits together

Current: "Calm is a medium system. Its spine is the check-in suite: five self-report entry points reached only through Profile, the one part of the free tier the streak and stats actually respond to, while almost the entire content catalogue and every recommendation surface stay locked behind a subscription that's never purchased."

Proposed:

Whenever you want to check in with yourself, you open Profile and go to the Check-ins tab, where five check-ins wait: a mood check, a sleep check, a gratitude check, a Daily Calm reflection and a quick journal. You answer, and Calm shows a completion message, usually a history or calendar of your answers, some recommended content, and a share button, then asks when you'd like to check in next. After your first check-ins, your stats and your streak have already changed, before you've played any audio.

Everything else in Calm hangs off that loop or sits beside it. The streak and the stats read from your check-ins, and Calm composes both into images you can send out, with a guest pass that can go with them. The recommended content at the end of each check-in points into the catalogue, nearly all of which sits behind the subscription, and the paywalls, the family plan banner and the limited-time offer are what you meet on the way there.

Reason: the loop is told as it happens to you. "Medium system", "spine" and "recommendation surface" go; "a subscription that's never purchased" is a statement about what we did, so it goes. "Usually a history or calendar" because the Quick Journal has neither.

---

## Mechanics

### Streak

**Implementation summary:** Calm keeps your streak inside Profile, and a completed check-in is enough to move it before you've played anything.

**How it works.** Your streak lives in Profile, in a view called My streaks, and not on the home screen. It shows your current streak, your longest streak and a total, with a calendar marking the streak across the current month. Once you've signed in, a setting to show streaks is switched on by default. After your first check-ins, the streak view and its calendar history have changed, even though you haven't played any audio. Your longest streak also appears in your stats, and the streak has a share button of its own, separate from the one on your stats.

**Illustration brief.** The My streaks view in Profile, showing current, longest and total streaks with the month calendar marking the streak days, and the show-streaks setting beside it.

**What stands out.** The streak moves when you complete a check-in, not when you play content. Calm also keeps your longest streak next to your current one and repeats it in your stats.

**Trigger.** Completing a check-in.

**What it needs.** A dated record of the days you've completed a check-in, to mark on the calendar.

**How it connects.** It follows Check-In, it feeds the stats in your Profile, and Shareable Win turns it into its own share image.

**Worth noticing.** Calm shows your longest streak beside your current one, and switches the streak display on by default once you sign in.

**Screenshots needed:** the My streaks view with its calendar; the show-streaks setting after signing in.

Reason for the stands-out line: the current block says the streak moves "only" for check-ins and "not when content is played". The analysis shows the streak changing after check-ins and does not show what playing content does. I kept the first half and cut "only".

### Shareable Win

**Implementation summary:** Calm turns your stats and your streak into separate share images, each built from Calm's own record of you.

**How it works.** In Profile, the stats panel has a share button. Using it prepares an Instagram story that carries the same badge shown with your stats, and Calm also offers to send it as a message or through other routes. The stats share is there before your stats show any activity. The streaks view has its own share button, and what it shares is displayed differently from the stats share.

**Illustration brief.** The stats panel and the My streaks view side by side, each with its own share button, and the prepared Instagram story with the stats badge.

**What stands out.** Stats and streaks each get their own share image instead of one combined share.

**Trigger.** Tapping the share button on your stats or on your streaks view.

**What it needs.** Calm's own record of your stats and your streak to compose from.

**How it connects.** It shares what Streak and your stats record, which your check-ins move.

**Worth noticing.** Calm composes stats and streaks into separate images, each from its own record of you rather than something you made.

**Screenshots needed:** the stats share composing its Instagram story; the separate share button on the streaks view.

### Gifting

**Implementation summary:** Calm lets you send someone a free 30-day pass to Premium, even from an account that has no subscription of its own.

**How it works.** The first time you reach Home after signing in, Calm offers a free 30-day guest pass, framed around someone who needs support reducing stress and improving sleep. Continuing tells you that a guest pass sent to someone you care about gives them free access to all of Calm Premium for a month, and puts a share button on the screen. After you share, a thank-you pop-up stays open. The same offer sits near the top of Profile, worded as giving a loved one a 30-day trial, and it's still there after you've sent a pass from Home. The Daily Calm reflection adds a third route: at the bottom of that page, the day's quote is offered as a free image to share, and the image comes with a free 30-day guest pass included. The account sending the pass holds no subscription itself.

**Illustration brief.** The guest pass offer on Home with its share button, and the reflection's quote image carrying a guest pass.

**What stands out.** You can send a full month of Premium without holding a subscription yourself. The offer turns up in three places: Home, Profile and the reflection's share image.

**Trigger.** Reaching Home for the first time after you sign in, or opening Profile.

**What it needs.** A signed-in account, and a share route to reach the person you're sending it to.

**How it connects.** It sits beside the shares in Shareable Win, and the Daily Calm reflection's share image carries a guest pass of its own.

**Worth noticing.** The account sending the pass has no subscription, yet the pass gives the recipient a full month of Premium.

**Screenshots needed:** the guest pass offer on Home; the offer in Profile; the Daily Calm reflection's share image carrying its own guest pass.

### Check-In

**Implementation summary:** Calm keeps two self-reports, mood and sleep, each reached from a tab inside Profile, and both move your stats and streak.

**How it works.** Calm's five check-ins live in a Check-ins tab inside Profile, next to Library and History, and two of them are the self-reports covered here. The mood check-in opens with a line saying a minute of reflection builds mindfulness into daily life and that Calm will keep track of how you're feeling, with a preview of a week of emoji-marked days. You choose one of twelve moods, from happy and excited to anxious and sad, then see a line about noticing the feeling in your body, optional context tags such as work, family, money and health, and a note field. Finishing gives you a completion message, a history where tapping a day shows what you wrote, and recommended content: choose grateful and the recommendations include a Gratitude Masterclass and 7 Days of Gratitude. The sleep check-in is introduced as a new way to track your sleep. You rate last night on a five-point scale from horrible to great, set your hours slept with a bedtime and wake time slider, then choose factor tags grouped as before sleep and during sleep, a step you can skip. Finishing shows a seven-day view with your average sleep time, an insights area, recommended content and a reminder section. You can delete a sleep entry but not edit it, and a second check-in for the same night is accepted, so one night can hold two entries with different ratings. Both check-ins end by asking when you'd like to check in next.

**Illustration brief.** The mood check-in's twelve moods and its dated history, next to the sleep check-in's five-point rating and seven-day view with the average sleep time.

**What stands out.** Both reports are your own answers, picked from a set list of options, and Calm keeps each one in a dated record. Completing either one moves your stats and your streak before you've played any content.

**Trigger.** Opening the mood or sleep check-in from the Check-ins tab in Profile.

**What it needs.** Your own report of how you feel or how you slept, and a place to keep each answer by date.

**How it connects.** Completing one moves your stats and Streak, and each ends with recommended content from Calm's catalogue and a reminder prompt.

**Worth noticing.** Calm keeps each answer as a dated record, and a second sleep entry for the same night sits beside the first.

**Screenshots needed:** the mood check-in's mood selection and history; the sleep check-in's rating and its seven-day view.

Reason for the cuts: the current block explains why the gratitude and journal check-ins are not this tag ("which is what keeps them out"). That is a comment on the write-up, so it goes; the analysis keeps that reasoning. The sentence "the strongest case for this mechanic" says whether it works, so it goes too.

---

## Section cards

Economy and Social are dropped: both held only an absence (see the drops list below). Their record cards read "Nothing observed here".

**Onboarding and first run.**
Current: "Calm places nine steps between first launch and the first unguided screen, including two separate paywalls before any content is heard."
Proposed: "Calm puts nine steps between first launch and Home, including a plan paywall and a limited-time offer, before any content plays."

**Core loop and automation.**
Current: "Calm's core loop runs through a mostly locked content catalogue and a mood-based recommendation row on Home, with the check-in suite sitting separately inside Profile."
Proposed: "Home recommends content by your mood and most of the catalogue is locked, while the five check-ins sit in a separate tab inside Profile."

**Goals and progression.**
Current: "Calm's stats and streaks are the product's only progression measures, and both move only when a check-in is completed."
Proposed: "Calm shows your progress as stats and streaks, and both change when you complete a check-in."
Reason: "only" appears twice and both are claims about what Calm lacks.

**Access and eligibility.**
Current: "A subscription gates nearly everything in Calm's catalogue, with a handful of free exceptions and a few changes that appear only after signing in."
Proposed: "A subscription unlocks nearly everything in Calm's catalogue, a few items play for free, and signing in adds some account options to Settings."

**Economy and resources.** Current: "Calm's economy is a single stated allowance of free listens, with nothing earned, spent, or exchanged anywhere else." Proposed: drop.

**Social.** Current: "No other identified person appears anywhere inside Calm; every social-shaped surface points outward instead." Proposed: drop.

**Reach beyond the app.**
Current: "Calm sends a guest pass from two places, composes stats and streaks into outbound shares, and connects to Apple Health from settings."
Proposed: "Calm sends a guest pass from Home and from Profile, turns your stats and streak into images you can share, and lists Apple Health as a connection in Settings."

**Monetization.**
Current: "Calm's Pro subscription is offered from at least three separate screens, each with its own framing, discount or trial length."
Proposed: "Calm offers its subscription from several screens, each with its own framing, discount or trial length."
Reason: "at least" tells the reader what we saw; "Pro" is not what the app calls it on these screens (it says Premium).

**Return triggers.**
Current: "Every one of Calm's five check-ins ends by asking when the user will check in again, each with its own preset time and no confirmation once set."
Proposed: "Four of Calm's five check-ins end by asking when you'd like to check in next, each with its own preset time."
Reason: the analysis records the reminder prompt for four check-ins (reflection, gratitude, mood, sleep). Quick Journal has none recorded. The current card says all five. See the report.

---

# Section pages

## Onboarding and first run

Calm puts nine steps between first launch and Home: two permission requests, a goal question, an account offer, two offer screens and a question about how you heard of Calm. Home is the first screen you reach without being guided.

### O1. Nine steps before Home

The first time you open Calm, nine steps come before Home: a loading screen, a notification permission request, a request to allow tracking across other companies' apps and websites, a goal selection screen, an account screen, a plan paywall, a limited-time offer and a question about how you heard of Calm. All nine come before any content opens. You can close the account screen without signing in and carry on to the paywall, and you get past each offer screen by closing it.

### O2. The loading screen

While Calm loads, it shows a line telling you to take a deep breath. The same line appears on later launches while Home loads.

### O3. Notification permission

The first prompt after loading is the system request for Calm to send you notifications, ahead of goals, an account or any content.

### O4. Tracking permission

Straight after that, Calm asks to allow tracking of your activity across other companies' apps and websites.

### O5. Choosing your goals

Calm's first screen asks what brings you to Calm and says it will personalise recommendations based on the goals you pick. You can choose several before continuing: build self esteem, develop gratitude, improve performance, reduce stress, reduce anxiety, better sleep and increase happiness.

### O6. Creating an account

After goals, Calm offers to create an account to save your progress, with options to continue with email, Apple or Google, an option to hear about offers and promos, and a login link at the bottom. Closing the screen carries on with onboarding without an account. While you're logged out, Profile repeats the invitation to create an account and see your stats.

### O7. How you heard

Once the offer screens are closed, Calm asks how you heard about it. The options include friend or family, an article or blog, social media or an online ad, a YouTube influencer, your employer, the App Store or Google, a TV ad, a podcast ad, and a therapist or health professional. Choosing an answer opens Home.

### O8. The first Home screen

Home is the first screen you meet after onboarding. A banner promoting the family plan sits at the top, saying you can feel better together with five other members. Below it come a greeting for the time of day, a Popular row and a Today's dailies row. Every item in the Popular row is locked: a one-minute reset, alpha waves and rain for deep relaxation, calming anxiety, rain on leaves, and Mindfulness for Beginners, which is presented as a course. The row mixes breathing exercises, playlists, courses and meditations.

---

## Core loop and automation

This is the part of Calm you come back to: the audio catalogue and its types, the recommendations on Home, the Sleep and Discover tabs, and the five check-ins inside Profile. Most of the catalogue is locked, and the check-ins are open.

### O9. Types of content

Calm's catalogue is audio, in several types: meditations, sleep stories, music, soundscapes, playlists, breathing exercises, movement sessions and courses, each labelled with its length. Lengths run from a five-minute playlist and a six-minute movement session up to a 31-minute sleep story. The onboarding paywall lists masterclasses taught by world renowned experts among what the subscription includes.

### O10. Today's dailies

Home and Discover both carry a Today's dailies row of recurring items, including Daily Calm, Daily J and Daily Move. Calm describes Daily Move as a daily stretching practice for everyone, Daily J as a daily piece of wisdom to inspire, and Daily Calm as an original, inspiring meditation every day. One day's Daily Move was grip strength training, and Daily Calm's topic was savoring.

### O11. Recommendations by mood

After a full scroll, Home asks how you're feeling and offers six moods: calm, sad, tired, anxious, panicked and unsure. Until you choose one, Calm shows a default set of items, and a refresh button swaps in new ones. Choose tired and the section reloads with a message saying it's something for your mood, and a different set. The default set includes a Daily Move session to recharge the body, a green noise soundscape, a bilateral stimulation meditation for burnout recovery and a 31-minute sleep story. The tired set includes a 29-minute music track, lo-fi beats, a focus meditation, and city park, white noise and ocean surf soundscapes. Every item in every version is locked. Below the section sit entry points to explore by meditation, sleep and music.

### O12. The Sleep tab

The Sleep tab opens with a line about soothing bedtime stories to help you fall into a deep, natural sleep, and filters for all, meditations, tools, music, soundscapes, playlists, downloads and sleep stories. It shows featured sleep stories, a row of popular ones presented by well-known narrators, sleep stories for kids, and themed playlists covering trains, nature, travel, fiction, non-fiction, naps and ASMR. The kids' stories include classic tales and stories featuring licensed children's characters.

### O13. The Discover tab

Discover lets you search by title, narrator, artist or topic, repeats the Today's dailies row, and lists categories: movement, dailies, for work, wisdom, kids, soundscapes, music, reflections, meditation, Calm lifestyle, mindful tools and sleep. Further down come new and noteworthy items, browsing by goal, browsing meditations by length with options such as 3 and 20 minutes, and featured collections.

### O14. The audio player

Playing the free heavy rain soundscape opens a player with download, cast and minimise controls and a sleep timer, along with a notice that the item is a free listen.

### O15. Mood before a meditation

Opening a meditation shows a three-second countdown to the session, then asks how you're feeling and invites you to take a moment to reflect before the meditation begins. Settings have an option to show this mood check-in before sessions, both before and after you sign in. The meditation that follows opens with a quotation describing meditation as a radical act that shifts your state and who you are.

### O16. Where the check-ins live

Calm's five check-ins, Quick Journal, the Daily Calm reflection, gratitude, mood and sleep, are all reached from a Check-ins tab inside Profile, one of three tabs there alongside Library and History.

### O17. Quick Journal

Quick Journal opens empty. Tapping the add button introduces it as an easy way to capture memories, feelings and dreams, says each day brings a fresh prompt, and lets an entry be text, a photo or an emoji, up to 300 characters. A control refreshes the prompt if you want a different one. Prompts include a question about what you want your legacy to be and a prompt to list worries outside your control. After you save, Calm shows the prompt with your answer, animates entry cards across the screen, and closes with a line saying a laugh, a smile or a silly prompt can bring joy in small moments.

### O18. The Daily Calm reflection

The Daily Calm reflection page opens by saying you haven't completed any reflections yet, and describes itself as a new thoughtful topic each day inspired by the Daily Calm. Starting it shows a quote, then a single question about where you've found the extraordinary in the ordinary recently, answered by typing. Finishing shows a line about savoring the moment, then a message that you've completed your first reflection, with a pointer to that day's Daily Calm on savoring. The page then holds your response with its own share button, a history of past reflections, a week calendar and list reached from an icon at the top right, and a reminder section. A second reflection on the same day returns the same quote and question.

### O19. The gratitude check-in

The gratitude page opens by saying you haven't completed any gratitude check-ins yet, with a start button in the middle of the screen. Calm asks what you're grateful for today, across three "I'm grateful for" lines, and a control swaps the prompt for others, such as where you found beauty today or what big or small accomplishments you can celebrate. Finishing shows a savoring screen and then a message that you've completed your first check-in, with sharing offered first. An info button explains that reflecting on what you're grateful for helps build a more positive outlook and resilience for tough times. The week calendar marks the gratitude day in its own colour, and recommended content follows: Mindfulness in daily life, Relationship with others, a 7 Days of Happiness series and Loving kindness.

### O20. The mood check-in

The mood check-in opens with an introduction saying that taking a minute to reflect on your emotions helps build mindful reflection into daily life, and that Calm will keep track of how you're feeling and support you with recommended mindfulness resources, with a preview of a week of emoji-marked days. It greets you by time of day and asks how you're feeling from twelve moods: happy, excited, grateful, relaxed, content, tired, unsure, bored, anxious, angry, stressed and sad. Choosing one shows a body-awareness line for that mood, optional context tags such as work, school, family, friends, travel, self care, relationships, money, food, spirituality and health, and a note field. Finishing shows a message that you've completed your first check-in, a history where tapping a day shows what you wrote, recommended content and a quote. After you choose grateful, the body-awareness line invites you to notice what gratitude feels like in your body and relax into it, the recommended content is a Gratitude Masterclass, 7 Days of Gratitude and Daily Calm highlights, and the quote is about seeing more beauty the more grateful you are. You can skip the introduction.

### O21. The sleep check-in

The sleep check-in is introduced as a new way to track your sleep, with Calm saying it will show patterns to guide you towards better sleep habits and health. It asks how you slept on a five-point scale from horrible to great, and a screen on the rating says tracking sleep quality over time can help you understand what is affecting your sleep. You then set your hours slept with a bedtime and wake time slider, and choose what affected your sleep from factor tags grouped as before sleep and during sleep, a step with a skip button. The before-sleep tags include stress, anxiety, illness, pain and alcohol, and the during-sleep tags include interrupted sleep, tossing and turning, nightmare and restless mind alongside sleep stories, sleep music, soundscapes, woke up refreshed and restful sleep. Finishing shows a message that you've completed your first check-in, a view of the last seven days with your average sleep time, an insights area, recommended content and a reminder section. The insights are described as the factors most associated with good sleep and with bad sleep.

### O22. Editing sleep entries

You can delete an entry in the sleep log but not edit it. Adding another check-in for the same night with a different rating is accepted and gives you a message that you've completed your second check-in, leaving two entries for that night at the same times with different ratings.

### O23. Adding sessions by hand

Profile's History tab shows a calendar of your sessions, and you can add a session by hand by entering when it started and how long it lasted.

### O25. Settings and defaults

Before you sign in, Settings offer signing up or logging in, restoring a purchase, notifications, downloads, an option to show the mood check-in before sessions, changing language, Apple Health, help and support, and an about page. Once you've signed in, Settings add haptic feedback, showing streaks and autoplaying the next movement session, all switched on by default, and you can turn haptic feedback off with a toggle.

---

## Goals and progression

Calm shows progress in two places in Profile: your stats and your streaks. Both change when you complete check-ins.

### O26. Your stats

Once you're signed in, Profile shows your stats framed as mindful days, alongside total sessions, mindful minutes and longest streak, with a line inviting you to begin meditating before anything has happened. After you complete check-ins, the stats change, even before you've played any content. Tapping a stat animates it without opening anything further. Above the stats sit a motivational line and an Unlock Calm Premium button, and a share button on the stats opens a prepared story.

### O27. Your streaks

Profile has a My streaks view showing total streaks, longest streak and current streak, with a calendar marking the streak within the current month. After you complete check-ins, the streak view and its history change too. Streaks are shared through their own button, displayed differently from the stats share, and your longest streak also appears in your stats. A setting to show streaks appears after you sign in, switched on by default.

---

## Access and eligibility

A subscription unlocks nearly everything in Calm's catalogue. A few items play for free, and signing in adds some account options to Settings.

### O28. What the subscription unlocks

Without a subscription, Calm locks the Popular row and every recommended item, including refreshed and mood-based sets. Browsing sleep stories by narrator and viewing the full sleep story list both lead to the paywall. Almost everything in the catalogue sits behind the subscription.

### O29. Free listens

A heavy rain soundscape on Home plays without a subscription. Opening it says you get three free listens, then invites you to start a free seven-day trial for full access. Some meditations also open for free. The free items are few, and a search for the word free doesn't turn them up.

### O30. Sleep insights

After a sleep check-in, the insights area for the last seven days and the last 30 days tells you to keep checking in to unlock your sleep insights. The message doesn't state how many check-ins that takes, and the insights stay locked after two entries for the same night.

### O31. After you sign in

Signing in with Apple turns Profile into a personalised view and adds three options to Settings: manage account, manage subscription, and link organisation subscription, the last for subscriptions that come through an employer. Home, Sleep and Discover otherwise stay the same.

---

## Reach beyond the app

Calm sends a 30-day guest pass from Home and from Profile, turns your stats and streak into images you can share, offers sharing after check-ins, and lists Apple Health as a connection in Settings.

### O34. A guest pass on Home

The first time you reach Home after signing in, Calm offers a free 30-day guest pass, framed around someone who needs support reducing stress and improving sleep. Continuing tells you that a guest pass sent to someone you care about gives them free access to all of Calm Premium for a month, with a share button. After you share, a thank-you pop-up stays open. The account sending the pass holds no subscription itself.

### O35. The gift offer in Profile

Profile prominently offers to give a loved one a 30-day trial of Calm, and the offer is still there after you've shared a pass from Home.

### O36. Sharing your stats

The share button on your stats produces a prepared Instagram story carrying the same badge shown with the stats, and also offers to send it as a message or through other routes. You can use it before your stats show any activity.

### O37. Sharing your streak

The streaks view has its own share button, and what it shares is displayed differently from the stats share.

### O38. Sharing after check-ins

After a gratitude check-in, the first thing Calm offers is sharing, to Instagram stories and other routes. After a Daily Calm reflection, your written response appears with its own share button.

### O39. The reflection quote image

At the bottom of the Daily Calm reflection page, Calm offers that reflection's quote as a free image to share, and says the image also includes a free 30-day Calm guest pass.

### O40. Apple Health

Settings list Apple Health as a connection option.

---

## Monetization

Calm offers its subscription from the onboarding paywall, a limited-time offer, Premium inside Profile, a paywall after you sign in, and banners on Home, Sleep and Discover. Each carries its own framing, price or trial.

### O41. The onboarding paywall

After the account screen closes, a paywall offers unlimited free access for seven days, and its plan list expands on its own. Collapsing it shows what the subscription includes: over 50,000 minutes of audio designed to relieve anxiety and stress, sleep stories narrated by familiar voices, exclusive music for sleep and relaxation, and masterclasses taught by world renowned experts. The featured plan is an individual year at $79.99, shown as $6.67 a month with a Save 61% label and a seven-day free trial before the charge. The family year for six members at $119.99 and the monthly plan at $16.99 come without a trial, and the monthly plan is shown as $203 a year beside the yearly option.

### O42. The renewal reminder toggle

The trial paywalls, on the onboarding screen and on the Premium screen in Profile, each carry a toggle to remind you two days before renewal, switched off by default.

### O43. The limited-time offer

Closing the plan paywall opens a second screen right away, offering a year of Calm for $47.99 with a Get 40% off button. The terms say $47.99 covers the first year, then $79.99 a year after that. The copy lists calming the mind with meditations, breathing exercises and music, sleeping more soundly with celebrity-read sleep stories, music and soundscapes, and relaxing the body with mindful stretches.

### O44. Premium in Profile

Tapping Premium in Profile opens a different paywall, offering a seven-day free trial for $0. Its renewal reminder toggle is also off by default.

### O45. The paywall after sign-in

Right after you sign in, Calm shows the plan paywall again, with more plans available.

### O46. The family plan banner

A banner promoting the family plan holds the top of Home and appears prominently on Sleep and Discover as well. Later, Home's banner is replaced by a welcome offer.

### O47. The today-only offer

Home's top banner can switch to a special welcome offer, 40% off Calm Premium today only, and tapping it opens the $47.99 offer from onboarding.

---

## Return triggers

Four of Calm's five check-ins end by asking when you'd like to check in next, and each has its own preset time.

### O48. The reflection reminder

After a reflection, the page asks when you'd like to reflect next, with morning, afternoon and night to choose from. Choosing night opens a picker that states the most popular Daily Calm reflection time at night among Calm members, preset to that time and repeating through the week. The stated time is 22:30. Setting the reminder closes the picker, and you can then set an afternoon reminder as well.

### O49. The gratitude reminder

After a gratitude check-in, Calm asks when you'd like to check in next, with the night option preset to 9 pm. If you pick a slot and close without setting a reminder, a prompt asks if you're sure, saying it can be hard to build a daily habit without a little help.

### O50. The mood reminder

After a mood check-in, Calm asks when you'd like to check in next, saying that reflecting consistently is the key to tracking and understanding your moods, with the night option preset to 10 pm. Closing without setting a reminder raises the same are-you-sure prompt.

### O51. The sleep reminder

The sleep check-in page offers a daily reminder, with night preset to 11 pm and a morning option.

### O52. Presets by check-in

The night presets differ by check-in: 22:30 for the reflection, 9 pm for gratitude, 10 pm for mood and 11 pm for sleep. Each check-in has its own reminder, so you can set several, at different times.

---

# Drops and decisions

## Entries dropped (IDs are not reused)

- **O24, Library and downloads.** It recorded empty states (no history, no playlists, favorites, collections or courses) and a downloads list the narrator did not recall making. Nothing a friend would want survives. The empty states go to coverage.
- **O32, No economy.** Only an absence: no currency, points or balance. The one counted allowance, the three free listens, is already in O29.
- **O33, No other users inside Calm.** Only an absence. The places other people do appear (the family plan's members, a guest pass recipient, the popular reminder time) are already in O46, O34 and O48.

## Sentences cut from entries that stay

- O1: "The only way past each offer screen seen in the session is closing it" becomes the plain "you get past each offer screen by closing it".
- O3: the sentence that no Calm screen explains the permission request.
- O5: that no later screen names the goals you chose.
- O10: the note that no completion state is shown, and four of the six row names (the analysis says some are likely transcription errors, so only the three Calm describes are kept).
- O12: that the kids' stories show no age filter, and the remark that scrolling is laggy.
- O13: that a search for "free" returns no free items (it moved to O29, where it explains why the free items are hard to find).
- O15: what the mood question changes afterwards.
- O17: that Quick Journal shows no calendar and has no share route.
- O22: "no warning".
- O23: that History is slow to load.
- O27: what qualifies a day, the continuity period and what a missed day does.
- O29: whether a listen is counted down and what happens after three.
- O31: that Apple Health is not prompted after signing in.
- O34: the recipient's side, any limit on passes, any benefit to the sender.
- O36: what the story shows beyond its badge.
- O37: the destinations offered for the streak share.
- O38: that the gratitude share's contents are unknown, and that Quick Journal has no share route.
- O40: that Apple Health is never prompted.
- O46 and O47: what triggers the welcome banner, what happens after the day ends, and that refreshing Home brings back the family banner (the analysis marks that last one plausible).
- O48 to O52: that setting a reminder gives no confirmation or visible record, and that reminders overlap without a warning.

---

# PART B: coverage report draft for Calm

This would become `sources/coverage/calm.md`. It does not exist yet.

# Coverage report: Calm

**Mechanics held back:** none of the four applied tags. Streak, Shareable Win, Gifting and Check-In each got a block.

**Not applied:** Daily / Weekly Quests. It stands at plausible, so it does not clear the publishing bar and has no block. The Daily Calm reflection is framed as a new topic each day and a second attempt the same day returned the same quote and question, but the daily issuance rests on Calm's own copy and one day was seen. Capture: a session on a second day showing a new topic and an incomplete state for that day.

**What's missing, and what to capture on the next walk-through:**

1. **Streak continuity rule (O27).** What qualifies a day, the continuity period and what a missed day does to the count were never observed. Capture: a session that spans a missed day and shows the current streak reset or hold.
2. **Whether playing content moves the stats or streak (O26, O27).** The check-ins moved both. What a played meditation does was not observed, so the block says the check-ins move them and does not say anything else does or does not. Capture: play a meditation and read the stats and streak before and after.
3. **Guest pass, recipient side (O34).** Delivery, any limit on passes sent, any benefit to the sender, and whether the thank-you pop-up allows further sharing were not seen. Capture: a session on the receiving account, and a second send from the same account.
4. **What the share images show (O36, O38).** The stats story beyond its badge, the streak share's destinations, and the gratitude share's contents. Capture: open each share and keep the composed image.
5. **Free listens (O29).** Whether a listen is counted down, what happens after three, and whether "three" means three items or three listens. Capture: play the free soundscape four times and note the screen at each.
6. **Sleep insights threshold (O30, and the unresolved Progression Gate).** The number of check-ins that unlocks insights. Capture: keep checking in across several nights until the insights open, or find where the number is stated.
7. **Masterclasses and courses (unresolved Expert Guidance, O9, O20, O41).** Whether the pieces teach a subject, and whether they sit beside the listening or are the listening, is unknown because everything behind the subscription went unopened. Capture: open one masterclass and one course on a subscribed account.
8. **Mood question before meditations (O15).** What the answer changes afterwards, and its options and any record. Capture: answer it, then play the meditation and look at what changed.
9. **Mood recommendations and the quote (O20).** Only one mood (grateful) was tried, so whether the quote and recommended content change with the mood is not established, and neither is whether the context tags offered change with the mood. Capture: complete the mood check-in with three different moods and compare.
10. **Sleep tags (O21).** One rating was chosen, so whether the factor tags change with the rating is not established. Capture: a poor rating and a middling rating.
11. **Goal selection (O5).** The goals you pick are never named again in the screens reached. Capture: pick different goals and look for any change in Home recommendations.
12. **Welcome offer (O46, O47).** What triggers Home's banner swap, what happens when the day ends, and whether refreshing Home brings back the family banner (the transcript is garbled there). Capture: note the time, the account state and the action before each swap.
13. **Reminders (O48 to O52).** Whether any reminder fires, whether setting one is confirmed anywhere, and whether the afternoon and night reminders on one check-in both survive. Capture: set a reminder a few minutes out and wait.
14. **Where the check-ins can be reached from (O16).** The check-ins were found only through Profile. Capture: look for any entry point on Home, Sleep or Discover on an account with history.
15. **Today's dailies names (O10).** Some of the six names in the row are likely transcription errors, so only three are on the page. Capture: a clean read of the row.
16. **Daily Calm reflection details (O18).** Whether voice input exists, and whether the topic changes each day (stated by Calm's copy, not seen). Capture: a second-day session.
17. **Reflection reminder time and tag lists (O48, O20).** The 22:30 figure and the list of mood context tags were transcribed from speech and are partly uncertain. Capture: the picker and the tag list on screen.
18. **Library and Downloads (O24).** The empty states were seen, and two downloads the narrator did not recall making. Capture: the Library and Downloads tabs after a full session of use.
19. **Family plan (Group Membership, not applied).** The plan is offered for six members but was never purchased, so no group, member list or member-scoped condition was seen. Capture: a subscribed family plan session.
20. **Apple Health (O40).** Listed in settings, never prompted. Capture: connect it and see what Calm shows.
21. **Quick Journal reminder.** The four reminder prompts are recorded; whether Quick Journal asks when you'd like to journal next is not. Capture: finish a Quick Journal entry and read the closing screen.

**Any other gap worth filling:** one session, signed in with Apple on a free account, never subscribed. A second session on a subscribed account would settle items 2, 5, 6, 7 and 19 at once, and a second day on the same account would settle items 1, 13 and the Daily / Weekly Quests question.

---

# Looked wrong while drafting (reported, not fixed)

- **Return triggers card and lead-in say all five check-ins ask when you'll check in next.** The analysis (O48 to O51) records the prompt on four. Quick Journal's closing line is about joy in small moments, with no reminder prompt recorded.
- **"Total activity" and "calendar of completed activity" in the current content.** The analysis says total sessions (O26) and a calendar of sessions (O23). The current wording changed the fact.
- **The current Streak block says the streak moves "only" for check-ins and "not when content is played".** The analysis shows the streak changing after check-ins and does not test what playing content does.
- **The current onboarding paywall entry says "tens of thousands of minutes".** The analysis says over 50,000.
- **The current Check-In block calls the check-ins "the strongest case for this mechanic" and says why the gratitude check-in and the journal are not this tag.** Both comment on the write-up itself.
- **Calm's `system.tagline`, shown on the homepage showcase, is in `data.js`, not in `calm.md`,** so the intro and system view here do not change it. Proposed wording is in `visitor-path.md`.
