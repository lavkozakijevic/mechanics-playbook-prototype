# Fiton

**ID:** fiton
**Category:** Fitness / On-Demand Workouts
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 25 Feb 2026
**Last updated:** 20 May 2026
**Session state:** First install — free Basic tier selected at paywall, one workout completed in session

---

## Overview

Fiton is a free-access fitness app (tagline: "Premium Workouts. Always Free.") offering on-demand workout videos led by named trainers and celebrities, live scheduled classes, community groups, and a meal planning module. The free Basic tier provides unlimited workouts; the Pro tier adds a personalized program, nutrition plan, TV casting, offline downloads, and device integration. The session covered full onboarding, paywall, all navigation tabs, one completed workout, the meal planning onboarding, and the groups and feed system.

---

## First impression

Onboarding is a single long-form screen that collects gender, date of birth, height, and weight together, then continues through goal selection, level selection (with social proof: "2.3 million people took beginner workouts on Fiton in the past year"), workout frequency, session length, class type preferences, community group selection, connected device selection, and attribution. A plan is generated. The paywall appears as the final step — showing Basic (free, unlimited workouts) alongside Fiton Pro (upgrade, save 70%). Selecting Basic reveals the workout plan with a button labeled Next. A second paywall video appears before the home screen ("upgrade today and save up to 70%"), which can be dismissed. After completing the first workout, a third paywall appeared. Rating the completed workout is mandatory to continue.

---

## Core activity

Users select workouts from a large library organized by trainer, duration, intensity, equipment, target area, and category. Workouts are video-led. After each workout, users rate it and can upload a workout photo via the camera. Between workouts, users check community groups, browse the For You feed, read advice articles, track nutrition, and join live scheduled classes. Completing workouts builds a streak, generates calendar entries, and earns achievement badges.

---

## Mechanics observed

### Achievements (`achievements`) · Core

**What was observed:**
The profile tab contains "a bunch of badges — dozens and dozens and dozens and dozens of badges that I can go to." The session described the profile as showing: number of workouts, calories spent, a calendar of activity, "some achievements I had, a bunch of badges" after completing one workout. The badge count was described as "dozens and dozens" with no single badge named in the transcript — but the scale and browsable catalogue structure confirm a developed achievement system.

The post-workout screen also generates a shareable graphic showing muscle groups worked and calories burned, functioning as a completion marker that can be shared externally.

**How it is presented:**
Profile tab, accessible from the main navigation. Badges appear in a scrollable grid. Workout history calendar is co-located on the same screen. Before-and-after photo upload is also available in the profile.

**What is notable:**
The mandatory workout rating (the app requires rating before continuing after a workout) means completion data and quality feedback are forced — the badge system is seeded by a post-workout gate that cannot be bypassed.

**Screenshot suggestions:**

`[Profile tab showing the workout count, calorie summary, activity calendar, and the badge grid with multiple unlocked badges visible after one completed session]`
*Documents the achievement display surface and the scale of the badge catalogue.*

---

### Community Groups (`community-groups`) · Core

**What was observed:**
Groups are the primary social layer. The onboarding explicitly includes a "join community groups" step showing groups organized by topic: Food (Intermittent Fasting Club, Low Carb Keto Crew, Meal Preppers, Vegetarians), Journey (Newbies, Gain Muscle, Modifiers), Lifestyle (Single and Crushing It, 30s Club, Apple Watch Crew, Fitbitters), Activity (Walkers United, Run the World, Meditation Squad, Yoga Lovers, Pilates Party). "And so on" implies the list extends further.

After completing the first workout, the Friends tab showed group feeds: "scrolling down the feed of all the questions and all the posts that appear in groups that I belong to." Within groups, users post questions, and other members comment. The session observed active group participation: "people are commenting on these posts, if we go to groups that are there — questions that are posted in these groups."

Group members can leave comments, see member activity, and post their own questions. The session joined both intermittent fasting and yoga-type groups.

**How it is presented:**
The Friends tab at the bottom of the main navigation contains the group feed. Groups are discoverable in the feed and can be joined at any time. The onboarding step for group joining presented the full taxonomy of available communities.

**What is notable:**
The group taxonomy in Fiton is the most detailed and explicit community structure described in an onboarding flow across all fitness apps analyzed. Presenting the full group catalogue — including specific niche communities like "Single and Crushing It" and "30s Club" — during onboarding is a deliberate framing move: the app positions itself as a social platform with fitness content rather than a fitness app with social features.

**Screenshot suggestions:**

`[Onboarding group selection screen showing the full community taxonomy (Food, Journey, Lifestyle, Activity groups) with specific group names and the multi-select interface]`
*Documents the group discovery structure and the onboarding-embedded community framing.*

`[Friends tab showing the group feed with member questions and comments, and the "groups you may like" recommendation section below the active feed]`
*Documents the group feed as an active social surface with real member interactions.*

---

### Streak (`streak`) · Supporting

**What was observed:**
After the first workout, the session described seeing on the For You tab: "exclusive programs with CR streak — we see how many workout goals we completed, how many steps we've passed." The streak is explicitly labeled "CR Streak" on the For You tab and shows the current week's workout count and step count pulled from device data.

The profile calendar also tracks workout history day by day, providing the visual record underlying the streak calculation.

**How it is presented:**
The For You tab surfaces the CR Streak as a primary dashboard element. The profile calendar provides the historical record.

**What is notable:**
The "CR" in CR Streak was not expanded in the transcript. The streak appears to combine workout completions with step count data from the connected device — a broader definition of daily activity than workout-only streaks.

---

### Social Feed (`social-feed`) · Supporting

**What was observed:**
The Friends tab contains a feed of workout activity from connected contacts. The onboarding included a "connect contacts" step: "see whichever contacts are already on Fiton — you can work together." Users can clap (react), comment, or share posts from others. The feed shows workout completions from followed users.

The For You tab also contains a group-oriented feed that shows posts from joined groups alongside workout recommendations and the CR Streak display.

After the post-workout photo and rating flow, the session described the camera opening in selfie mode with Fiton-branded stickers, filters, and workout summary data (calories, duration, category, date) composited into a shareable image.

**How it is presented:**
Friends tab for the social activity feed. For You tab for the mixed personal dashboard and group content. Post-workout sharing opens the camera directly with pre-built branded templates.

---

### Limited-Time Events (`limited-time-events`) · Supporting

**What was observed:**
The main workout tab shows "upcoming exercises — one at 4pm, one at 5pm, one at 6pm" — live scheduled classes with specific start times. Each live class has an intensity rating, trainer name, and category. Users can join and are prompted to invite friends to join alongside them. The session confirmed joining: "we've joined this exercise — we have a countdown when it starts."

Live classes are scheduled on a rolling calendar and differ from the on-demand library in that they run at a fixed time, expire when the time passes, and allow inviting other users to join concurrently.

**How it is presented:**
The workout tab shows upcoming live classes in a time-ordered list. Joining prompts an immediate invitation to a contact. The countdown to the class start is visible after joining.

**What is notable:**
The invitation prompt embedded in the join flow makes live class participation a social recruitment mechanism — joining a class automatically prompts the user to bring someone else, turning every live class into a potential friend acquisition moment.

---

### Challenges (`challenges`) · Shallow

**What was observed:**
The session described challenges accessible through the workout tab: "different challenges — New Year, Fat Burning Challenge, Inner Peace, Tai Chi Journey, Hormone Harmony Dance for Menopause." These are named themed programs with their own content. Users can join them separately from their main workout plan.

These are not user-created challenges (unlike Freeletics) — they appear to be platform-created themed programs that users opt into. The session did not describe an explicit challenge completion reward or endpoint.

Logged at Shallow because the opt-in structure and named endpoints are present, but the completion reward and the distinction from the standard workout library were not described clearly enough to confirm a developed challenge mechanic.

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Shallow

**What was observed:**
The onboarding included a step described as: "a plan without action isn't a plan, it's a wish — start now by taking your first workout — no equipment needed — we can start our workout straight away, but if we're not ready to work out right now, we can add a reminder." This implies a daily prompted workout target. The session also described weekly progress stats: "streak — how many workouts I completed this week, how many seconds of exercise, how many calories."

No explicit named daily or weekly quest list with a reset cadence and discrete rewards was described. The weekly tracking and daily workout prompt are the closest equivalents.

Logged at Shallow because the weekly workout tracking structure resembles a quest cadence but was not described as a named quest system with discrete completion rewards.

---

## Mechanics not observed

**Leaderboards:** No ranked list with a named metric and visible user position against others was described.

**Season Pass:** No dual-tier advancement track with free and paid tier advancement through in-app actions was described.

**Variable Reward:** No pull, spin, or chest with unknown contents was described.

**Ads:** Not described.

---

## How mechanics connect

Community groups and the social feed create the accountability context within which the streak and achievements become meaningful — other group members can see workout completion activity, which turns personal fitness behavior into social visibility. The live class system adds a scheduled dimension: rather than always choosing when to work out, live classes create external timing anchors that other users are simultaneously honoring, adding a coordination layer to what would otherwise be an individual activity.

The post-workout flow (rate the workout → camera opens for branded photo → share to contacts) converts every completed workout into a social broadcast prompt. Sharing the workout photo serves both the social feed (showing others that the workout happened) and the achievement system (adding to the workout history calendar), making a single post-workout action contribute to three systems simultaneously.

---

## Session rhythm

The session covered one full workout from selection through completion. The post-workout sequence was described in detail: rating appears (mandatory), then camera with branded stickers, then social sharing prompt, then the home screen. Return pressure comes from the live class schedule (specific upcoming classes with countdowns), the CR streak (weekly workout and step count), and the group feeds (asynchronous social content requiring no specific time commitment).

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Fiton Basic | Free | Unlimited workouts, community groups, basic tracking |
| Fiton Pro (annual, save 70%) | $39.99/year | Personalized program, nutrition + meal plan, TV casting, device tracking, offline downloads, premium music |
| Fiton Pro (monthly, save 70%) | not stated at first; appears as $34.99 for 6 months on second paywall | Same as Pro annual |
| Fiton Pro (full price) | $129.99/year | Same as Pro annual, unmodified |
| Fiton Pro (full monthly) | $100/month | Same as Pro monthly, unmodified |
| "Are you sure" popup after canceling | $39.99/year | Same deal re-presented with "pro members are 73% more likely to achieve their goals" framing |

---

## What stood out

1. The app states "Premium Workouts. Always Free." on the first screen — and delivers on it. The Basic tier provides genuine access to a large workout library, live classes, groups, and the social layer with no credit card and no trial expiry. The paywall is for features (personalization, offline, nutrition), not for content access. This is structurally different from every other fitness app analyzed that presents a paywall before allowing any access.

2. Rating the workout is mandatory to continue after completing it. There is no skip option. "We have to rate the workout — to be able to submit it — so we cannot skip this." The app cannot advance past the post-workout screen until the user submits a rating. This makes quality feedback collection a gate, which is an unusual inversion of typical post-workout UX.

3. The community group taxonomy in onboarding includes "Single and Crushing It" and "30s Club" alongside standard fitness categories. The specificity of life-stage and identity groups signals a positioning decision: Fiton wants to be the fitness app people belong to socially, not just the one they work out with.

4. The "invitation to join a live class" prompt appears immediately when the user joins a class, before the class starts. The mechanic turns every class entry into a recruitment moment — social network growth embedded in the core activity trigger.

---

## Analysis notes

One session. First install, free Basic tier throughout. The workout completed was "Quick Arms with Brie Kurgil" — a short session. The full workout library, trainer catalogue, celebrity content (Lindsay Lohan, Gabrielle Union, Bob Harper are named), branded experiences (Bumble, American Airlines, CrossFit, Zumba partnerships), and courses were described but not individually explored. The meal planning module was entered: it runs its own onboarding (diet type, allergies, food preferences, cooking skill, meal frequency) and generates a plan, then surfaces its own paywall for the meal plan specifically.

---

## Category context

No explicit comparisons to other fitness apps were made in the transcript.

---

## Unrecognized mechanics

### `mandatory-workout-rating`
**What was observed:** After completing a workout, the post-workout screen displays a five-star rating system for the overall experience, the instructor, the playlist, the streaming quality, and the difficulty. The session confirmed: "we have to rate the workout — to be able to submit it — so we cannot skip this." Submitting the rating is required to proceed past the post-workout screen and return to the home screen. The app cannot advance without the rating submission.
**Why it does not map to an existing mechanic:** Not `achievements` — no badge is earned for rating. Not `daily-weekly-quests` — it is not a recurring task with a reset cadence. The mandatory workout rating is a quality signal extraction mechanic: it forces feedback at the highest-engagement moment (immediately post-workout) and cannot be bypassed. As an engagement mechanic, it also extends the post-workout moment by adding an interaction step before the user can return to browsing.
**Worth adding to library:** Possibly — forced post-session rating appears in enough fitness and learning apps (Fiton, Uptime's rating-as-badge-trigger) to be worth naming as a feedback extraction pattern.

### `branded-partnership-content`
**What was observed:** The workout library contains experiences co-created with external brands: Bumble, American Airlines, CrossFit, H&M, Orange Theory, The Chainsmokers, Aura, Bob Harper, Laurie Title Boxing Club, Zumba. Each "experience" is a set of workouts created in partnership with that brand. The session described: "there are experiences that you can use that are made together with that company or with that service or that app." Tapping one opened the brand experience's workout collection.
**Why it does not map to an existing mechanic:** Not `limited-time-events` — the partnerships appear to be permanent catalogue items, not time-limited events. Not `community-groups` — these are content collections, not communities. Branded partnership content is a content distribution strategy that uses external brand relationships to populate the workout library and attract users of those brands. It is a product strategy rather than an engagement mechanic.
**Worth adding to library:** No — product strategy, not a mechanic.
