# Gymverse

**ID:** gymverse
**Category:** Fitness / Gym Training
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 25 Feb 2026
**Last updated:** 20 May 2026
**Session state:** First install — 7-day free pass auto-granted after paywall dismissal, one full workout completed in session

---

## Overview

Gymverse is a gym workout planning app that generates personalized strength training plans based on available equipment, training frequency, and experience level. It includes a workout logging system with set/rep tracking and rest timers, a week-by-week plan with a visible calendar, and a badge-based achievement system. The session covered full onboarding, paywall, app navigation, and one completed workout from warm-up through post-stretch.

---

## First impression

Onboarding runs 19 screens organized into named sections (Gym Goals, Challenge, Solution, Muscles, Experience, Routine, Equipment, Frequency, Duration, Health Info, Nutrition, Workout Scheduling, Training Study, Notifications, Attribution). After completing all screens, a paywall appears with a 7-day free trial at $112.20/year or $20/month. Dismissing the paywall produces a "7-day free pass on us" screen — full access, no payment required, no credit card — and the app opens directly to today's workout. On first home screen load, a share-a-workout popup appeared before the user had done anything.

---

## Core activity

Gymverse generates a weekly strength training plan with scheduled workout days shown on a calendar at the top of the home screen. Users complete workouts by logging sets and reps for each assigned exercise, watching instruction videos, and following auto-generated rest timers between sets. After each workout, the app shows which muscles were worked, what next week's progression will look like, and what the next scheduled workout is. Weekly and monthly history are viewable by calendar.

---

## Mechanics observed

### Streak (`streak`) · Core

**What was observed:**
A streak display was described in the Explore section of the app (accessed from a separate tab in the bottom navigation). The Explore screen shows a "Bendometer" equivalent — described as "active streak, longest streak, class stretch, days completed." The session also noted "there's also restore streak — unlock or restore streak by reaching a two-day streak." The streak is described as "largely determined by your streak" in context of a "Bendometer" scoring metric. The dashboard in Explore shows active streak as its primary displayed stat.

The calendar at the top of the home screen shows the workout schedule and which days have been completed, forming the visual backbone of the streak tracking system.

**How it is presented:**
Streak stats are in the Explore tab alongside a calendar history view. Restore streak is an unlockable feature requiring a two-day streak to access. The home screen calendar provides an at-a-glance streak visualization.

**Screenshot suggestions:**

`[Explore tab showing active streak number, longest streak, days completed, and the calendar history of completed workout days across the current month]`
*Documents the streak display surface and its relationship to the workout calendar.*

---

### Achievements (`achievements`) · Core

**What was observed:**
A dedicated achievements section was described in the Explore tab. The session described "achievements that I can follow through, that I can do" and specifically named achievement categories with tier structures:

- Streak-based achievements: badges for achieving specific consecutive day counts.
- Weight loss achievements: badges for weight change milestones.
- Total calories achievements: badges for cumulative calorie burn.
- Exercise category achievements: badges for completing workouts in specific categories.
- Exercise time achievements: badges for cumulative workout time.
- Login achievements: "if I log in for 28 days I can get a 28 login badge."

These are described as browsable badge categories with multiple tiers each. The session also described before-and-after photo upload capability on the same profile screen where measurements and body weight are tracked.

After completing the welcome workout, the app gave "another screenshot — something that I can share here — tells me which muscle groups I've worked on, what is the next week progression, and what is my next workout."

**How it is presented:**
Achievements are in the Explore tab alongside the streak display, calorie and workout graphs, and weight tracking. The badge catalogue is browsable by category. Before-and-after photo upload is on the same screen.

**What is notable:**
The 28-day login achievement is the most specific daily-login achievement described — it names an exact day count rather than a vague "consistent user" label, creating a concrete near-term target.

**Screenshot suggestions:**

`[Explore tab showing the achievement badge categories (streaks, weight loss, total calories, exercise categories, exercise time, login) with the 28-day login badge visible as a target]`
*Documents the named achievement categories and the specific login milestone badge.*

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Supporting

**What was observed:**
The weekly training plan assigns specific workouts to specific calendar days. The home screen shows a calendar at the top with "which days I will be doing my exercises." When the session tapped a day other than the current one, the app responded: "go back — complete day one first." The day-by-day structure enforces sequential completion — future days are locked until the current day's workout is logged.

The plan is described as adapting week over week: "as you perform an exercise, Smart Weight Suggestions will optimize your weights every week to ensure steady progress." This constitutes a weekly reset cadence for the workout plan itself.

**How it is presented:**
Calendar at the top of the home screen showing the full week. Each day shows the workout scheduled for that day. Locked days have a visual indicator. Completing a workout unlocks the next day.

---

### XP Leveling (`xp-leveling`) · Shallow

**What was observed:**
The plan overview screen shows week-by-week progression: "What is the next week progression" appears after each workout completion, indicating that the app explicitly tracks and communicates how the training plan will evolve across weeks. "Smart Weight Suggestions" adjusts recommended weights each week based on logged performance. This is the closest observed equivalent to a leveling system — each week's plan is an incremental step up from the last.

No explicit XP accumulation bar, named level system, or described threshold unlocks were observed. The week-by-week progression is more accurately described as adaptive programming than XP leveling, but it shares the accumulation-toward-threshold structure in a fitness-specific form.

Logged at Shallow because the core concept (performance data accumulates, future sessions become harder) maps to the leveling definition loosely, but named levels and discrete unlocks were not described.

---

## Mechanics not observed

**Leaderboards:** No ranked list with a named metric and visible user position against others was described. The session was entirely single-player.

**Social Feed / Community Groups:** No social feed, community, or group feature was described.

**Variable Reward:** No pull, spin, or chest with unknown outcomes was described.

**Streak protection:** Restore streak is mentioned but requires a two-day streak to unlock — so a new user who breaks their first streak has no recovery mechanism until they rebuild to two days.

---

## How mechanics connect

The workout calendar (daily quests) drives streak maintenance. Completing scheduled workouts advances the streak counter. Streak milestones unlock achievement badges. The achievement badge system and streak display are co-located in the Explore tab, making them visible together. Weight progression (XP leveling equivalent) is a downstream output of consistent workout logging — showing up to log is what triggers smart weight adjustment, which is what makes the next week's workout feel like an earned progression.

---

## Session rhythm

The session covered one full workout including warm-up, main sets with rest timers, and cool-down stretch. Workout completion triggered a "great job" screen with muscle map, next-week progression preview, and a shareable summary image. The plan's sequential day-locking creates daily return pressure — the next day's workout is visible but inaccessible until the current day's is logged. The push notification opt-in screen (step 18 of 19) described the notification as a reminder for the next scheduled workout.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Gymverse Pro (annual) | $112.20/year (~$10/month) | Full plan access, smart weight suggestions, progress tracking, achievements |
| Gymverse Pro (monthly) | $20/month | Same as annual |
| 7-day free pass (auto-granted on paywall dismissal) | Free | Full Pro access for 7 days, no credit card required |

No in-app currency, no consumables, and no ads were described.

---

## What stood out

1. Dismissing the paywall surfaces a "7-day free pass on us" screen with the exact same benefits as the paid trial, no credit card required. The sequence is: paywall → dismiss → free pass. This means every new user who dismisses the paywall still gets a full 7-day trial, regardless of whether they tapped the trial CTA. The paywall is essentially a soft suggestion rather than a hard gate.

2. A share-a-workout popup appeared on the home screen before the user had completed or even opened a workout. The popup offered to let the user share their (empty) workout stats with a customizable image. The session noted this as a design observation: prompting sharing before any value has been delivered.

3. The "restore streak" feature requires reaching a two-day streak before it becomes available. A user who breaks their very first streak (missing day one of their plan) cannot restore it — they must rebuild to two consecutive days first. This creates an asymmetry where the protection mechanic is inaccessible exactly when it would be most useful.

4. The app prompted for a five-star App Store rating after completing the first workout — the session noted this: "it asks me for a five star rating or giving feedback even though I did not use the app at all." The rating request appeared on the post-workout screen, which was the user's first substantial interaction with the product.

---

## Analysis notes

One session. First install, free 7-day pass. One workout completed from warm-up through stretch. The nutrition section was not explored. Social or community features were not visible — Gymverse appears to be a single-player experience with no social layer described anywhere in the session.

---

## Category context

No explicit comparisons to other fitness apps were made in the transcript.

---

## Unrecognized mechanics

### `before-and-after-progress-photo`
**What was observed:** The profile section includes an "upload before and after" feature for tracking body transformation over time. Users can photograph themselves, upload, and compare photos over time alongside weight and body measurement logs. The session described: "I can upload before and after — to show my transformation — take these measurements as well, and I can track my activity."
**Why it does not map to an existing mechanic:** Not `achievements` — no badge or named marker is earned by uploading photos. Not `social-feed` — the photos are not posted to a community feed. This is a personal progress documentation tool — a visual longitudinal record of physical change. It functions as a retention mechanic by giving the user invested data (their physical history) that would be lost if they switched apps.
**Worth adding to library:** Possibly — before-and-after photo documentation appears in multiple fitness apps (also mentioned in LazyFit and BetterMe) and functions as a data-investment retention mechanic distinct from streak or achievement systems.

### `smart-weight-progression`
**What was observed:** After each workout, the app calculates and adjusts the recommended weights for the next week's sessions based on logged performance. "Smart Weight Suggestions when you perform an exercise will optimize your weights every week to ensure steady progress." The adjustment is automatic and week-over-week. The session described seeing "what is the next week progression" on the post-workout completion screen.
**Why it does not map to an existing mechanic:** Not `xp-leveling` — there is no explicit XP accumulation or named level crossing. Not `daily-weekly-quests` — the weight adjustment is not a discrete task with a reward. Smart weight progression is an adaptive difficulty and load management system: the app uses performance data to calibrate future workout intensity, creating a personalized progression that scales with the user rather than following a fixed program. It is a product feature rather than an engagement mechanic, but its role in making each week feel earned and calibrated to the individual is worth noting.
**Worth adding to library:** No — this is a product feature, not a mechanic. Worth noting in the analysis but not a library candidate.
