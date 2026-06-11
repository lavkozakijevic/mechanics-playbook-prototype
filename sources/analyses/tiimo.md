# Tiimo

**ID:** tiimo
**Category:** Productivity / Planning
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 18 May 2026
**Last updated:** 18 May 2026
**Session state:** First install — new account, free tier with brief paywall exploration

---

## Overview

Tiimo is an AI-assisted planning and productivity app targeting neurodivergent users (ADHD, autism). It won the Apple Design Award 2024 (finalist confirmed in onboarding) and the Regards Rewards App of the Year 2025 (as shown on the paywall). Core features are a visual calendar planner with morning/afternoon/evening routines, a to-do list, a focus timer, mood and daily reflection tracking, and an AI co-planner that turns voice or text input into structured tasks. It operates on a freemium model: Free (calendar, to-do, basic planning), Pro ($54/year or $12/month) adds AI co-planner, focus timer (full), live activities and widgets, web app, and calendar integration. The app is explicitly ad-free.

---

## First impression

Sign-in options are Apple, Google, or email. After Apple sign-in, the app asks two onboarding questions: (1) "What's your biggest need right now?" (organize my day, remember tasks, prioritize to-dos, build routines, support focus, work, or something else) and (2) "Are you neurodivergent?" with four options (I am neurodivergent / I think I am / I am not / I don't know). The neurodivergent question is presented without definition or context. The paywall appears next, before any app content is seen. After dismissing it, onboarding continues with notification permission (a single "enable notifications" button with no skip, though notifications itself can be denied at the iOS level), calendar import (with the claim "users who import their personal calendar are 46% more productive"), then a routine setup flow across three screens (morning habits, afternoon habits, evening habits). A task completion animation is demonstrated ("tap brush teeth to complete it — watch what happens" — confetti). Then a streak milestone is unlocked: "Your first streak starts today — one small step at a time — we will celebrate every step with you — Ignition ready to unlock" — with a swipe-to-unlock interaction. The home screen loads with the first achievement marble already awarded.

---

## Core activity

Users plan their day by recording tasks in the calendar view (organized into morning, afternoon, evening, and anytime slots), completing tasks to earn streak progress and achievement marbles, using the focus timer for timed work sessions, and logging mood at the end of the day. The AI co-planner accepts voice or text input, generates structured tasks with time estimates, and suggests scheduling order. Between sessions, streaks and achievement milestones provide progress markers visible on the stats tab.

---

## Mechanics observed

### Streak (`streak`) · Core

**What was observed:**
The streak counter is visible in the top-left corner of every tab as a flame icon with the current day count. It is the first element described when the home screen loads.

The streak is introduced during onboarding through a swipe-to-unlock interaction ("Ignition ready to unlock — your first streak starts today — one small step at a time — we will celebrate every step with you"). The swipe gesture awards the first marble (Ignition) immediately.

On the Stats tab, the streak progress bar shows the current day count and the next milestone: "1 out of 3 days" written under the bar, indicating the next marble unlocks at 3 consecutive days. The named streak milestones observed: 1 day (Ignition), 3 days, 7 days, 10 days, 14 days, 21 days, 30 days, and continuing to 1,600 days.

Notifications support the streak: settings show "Streaks and Levels" as a named notification category — meaning the app pushes alerts specifically around streak status.

**How it is presented:**
Flame icon in the top-left corner of every screen. Stats tab shows the streak progress bar, next milestone, and full marble ladder. The onboarding positions the streak as a celebration system rather than a retention mechanic: "we will celebrate every step with you."

**What is notable:**
The streak introduction uses a swipe-to-unlock physical gesture rather than a button tap — creating a small ceremony around the first streak moment that is more physically engaging than a standard tap. The 1,600-day endpoint of the streak marble ladder implies a 4+ year engagement arc, making it the longest stated streak progression in the library.

**Screenshot suggestions:**

`[Stats tab showing the flame streak counter, "1 out of 3 days" progress bar, and the marble row with Ignition earned and Spark earned, next milestone at 3 days]`
*Documents the streak display, the named next milestone, and the marble collection as the streak reward system.*

`[Onboarding swipe-to-unlock screen showing "Ignition ready to unlock — your first streak starts today — one small step at a time"]`
*Documents the ceremonial streak introduction and the physical swipe gesture used to initiate it.*

---

### Achievements (`achievements`) · Core

**What was observed:**
The marble collection system is the primary achievement display. Marbles are collected in a horizontal row on the Stats tab, each representing a named milestone in one of two tracks:

**Task completion track:** Ignition (first day / streak start), Spark (first task completed), then unlocks at 7, 14, 30, 60, 110, 160, 250, 360 tasks, continuing to 30,000 tasks.

**Streak track:** 1 day (Ignition), 3 days, 7 days, 10 days, 14 days, 21 days, 30 days, continuing to 1,600 days.

Each marble is a distinct visual design — described as marble-like with different colors. Locked marbles show a lock icon and "unlocks in X days" countdown. Unlocking a marble changes the background gradient of the stats tab to reflect the marble's color: "every time we unlock a new marble, it also changes the color above it — the shading, the gradient that is behind the achievements to reflect the color of that marble."

The session earned: Ignition (first streak day, awarded during onboarding swipe), Spark (first task completed), and Pulse (completing further tasks).

**How it is presented:**
The marble row is the first content element on the Stats tab, above the streak progress bar and task completion counter. Marble unlocks trigger celebration animations at the top of the screen. The row is horizontally scrollable with locked future marbles visible, showing the full progression ladder ahead.

**What is notable:**
The background gradient dynamically changing color with each new marble is the most visually integrated achievement reward observed in the library — the achievement does not just add a badge; it changes the ambient visual environment of the stats screen. The marble metaphor (physical, tactile, collectible objects) is consistent with Tiimo's neurodivergent-friendly design approach, where visual clarity and satisfying feedback are primary design values.

**Screenshot suggestions:**

`[Stats tab marble row showing earned Ignition and Spark marbles alongside locked upcoming marbles with "unlocks in 3 days" labels, with the gradient background reflecting the current marble's color]`
*Documents the marble collection, the color-reactive gradient background, and the forward-visible progression ladder.*

---

### Challenges (`challenges`) · Shallow

**What was observed:**
The onboarding routine setup functions as a structured opt-in program: users select habits for morning, afternoon, and evening from named lists. Once selected, these routines appear in the calendar view as recurring daily tasks. Completing them advances the streak and earns achievement marbles.

The "celebrate every win" framing in the Stats tab carousel ("celebrate every win" listed alongside "co planner," "widgets," "web planner") suggests challenge-like milestone celebrations are part of the designed experience. The Knowledge section lists expert-led courses ("Avoid the urgency trap with the Eisenhower Matrix," "Task initiation explained") with lesson breakdowns (Introduction, Applying the Matrix, Summary) that are structured programs with a defined completion state.

Evidence is thin — the courses were accessed but not completed in the session. The routine setup fits the opt-in, defined-endpoint, reward structure of challenges but is presented as a planning configuration rather than a challenge mechanic per se. Logged at Shallow.

---

### Daily Login Reward (`daily-login-reward`) · Shallow

**What was observed:**
No explicit daily login calendar or named daily collectible reward was described. The streak system creates implicit daily return pressure (return to maintain the streak, earn the next marble), and daily notifications are extensively configurable (morning task reminder at 8 AM, afternoon at 11:50, evening at 17:50, review your day at 8 PM, review your week on Sunday at 3 PM). But no "claim your daily reward" mechanic with a disclosed item was observed.

The mood and daily reflection system prompts daily return at the end of each day — "how do you feel overall today?" — but this is a check-in tool rather than a reward claim.

Logged at Shallow because return pressure exists through streaks and notification design but no discrete daily reward mechanic was described.

---

### XP Leveling (`xp-leveling`) · Shallow

**What was observed:**
The marble collection maps to the definition of XP leveling — two accumulation tracks (tasks completed, consecutive days), named thresholds, named rewards (marbles), and a visible ladder from current state to final milestone (30,000 tasks, 1,600 days). The progress bars under the marble row ("4 out of 7 tasks") are explicit XP-bar equivalents: a filling bar toward the next threshold.

The distinction from a pure achievements mechanic: the progress bars show continuous accumulation toward the next marble, not just a binary earned/not-earned state for past milestones. This makes it structurally closer to XP leveling than the static achievement-badge systems in apps like Strava or Calm.

Logged at Shallow because the session described the marble system under achievements first, and the XP-leveling aspect (continuous accumulation bars, threshold crossing) was described as a feature of the same system rather than a separate mechanic.

---

## Mechanics not observed

**Variable Reward:** No pull, spin, or pack-open mechanic with unknown outcomes was described.

**Season Pass:** No dual-tier advancement track with free and paid tiers progressed through in-app actions was described. The Pro subscription is a content/feature gate.

**Leaderboards:** No ranked list with user position against others was described. No competitive dimension of any kind was observed.

**Clans-Guilds / Community Groups:** No group or social community feature was described. The session explicitly noted: "there are no invite a friend moments yet — there are no sharing items that I've seen except for share the app itself."

**Daily-Weekly Quests:** No recurring auto-assigned task list with a reset cadence and explicit reward was described. The routine setup produces daily recurring tasks, but these are user-configured planning tools, not system-assigned quests with named rewards.

**Ads:** Explicitly stated as ad-free. The tracking permission dialog confirmed: "we're an ad free app — primarily use this information to see where you first heard about us and track marketing activity and campaigns with our neurodivergent partners and content creators."

**Piggy Bank / Energy-Lives / Variable Reward / Set Collection / Gifting:** None observed.

---

## How mechanics connect

**Streak and achievements are the same system expressed differently.** The flame icon (streak) and the marble row (achievements) both draw from the same two underlying metrics — consecutive days and tasks completed. The streak counter is the real-time display; the marbles are the milestone rewards. Every day maintained and every task completed advances both simultaneously.

**Task completion produces confetti, which produces marbles, which changes the environment.** Completing a task triggers a confetti animation. Crossing a task threshold unlocks a marble. Unlocking a marble changes the background gradient of the stats tab. This is a three-layer feedback chain (task → confetti → marble → ambient visual change) that makes task completion feel progressively more rewarding as more marbles are earned.

**The AI co-planner removes planning friction, which increases task completion, which advances streaks and marbles.** The AI takes voice or text input and generates a structured day plan with time allocations. If the plan is accurate, it reduces the cognitive load of deciding what to do next — the primary barrier for ADHD users. Reduced friction → more tasks completed → more streak days → more marbles.

**Mood logging connects daily reflection to completed tasks.** The end-of-day mood check-in asks which completed tasks may have contributed to the user's emotional state. This links the planning activity (task completion) to a wellbeing outcome (mood), reinforcing the functional value of consistent use.

---

## Session rhythm

**Session trigger:** Extensive notification system — morning task reminder (8 AM), afternoon tasks (11:50), evening tasks (17:50), end-of-day review (8 PM), weekly review (Sunday 3 PM), streak and levels alerts. Five distinct daily notification categories create five potential daily re-entry moments.

**Session structure:** Open app → check calendar for day's tasks → complete tasks in morning/afternoon/evening blocks → use focus timer for timed work → log mood at end of day → view marbles on stats tab.

**Session-end moment:** No designed session-end exists — the app is a day-long companion. The focus timer (up to 60 minutes) provides structured work sessions within the day.

**Return pressure:** Streak (daily), marble milestones (3-day, 7-day thresholds), notification schedule (five times daily), mood log prompt (daily).

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Tiimo Pro (annual, most popular) | $54/year — 7-day free trial | AI co-planner, full focus timer, live activities and widgets, web app, calendar integration |
| Tiimo Pro (monthly) | $12/month — no trial | Same as annual; ~2.7x annualized cost vs. annual |
| Reminder import | Pro | Import reminders from iOS Reminders app |
| Notification before task (timing) | Pro | Set advance notification minutes before task starts |
| Halfway through task notification | Pro | Notification at task midpoint |
| When task finishes notification | Pro | Notification at task end |
| Custom tags | Pro | Create and edit custom tags beyond the preset list |
| Additional themes | Pro | Visual themes beyond the free defaults |

No in-app currency, no consumables, no ads. Subscription-only monetization.

---

## What stood out

1. **The tracking permission dialog is the most transparent in the library.** When asking for cross-app tracking, Tiimo explicitly states: "we're an ad free app — primarily use this information to see where you first heard about us and track marketing activity and campaigns with our neurodivergent partners and content creators." Most apps present the standard Apple dialog with no additional context. Tiimo explains what the data is actually for before showing the iOS prompt.

2. **Unlocking a marble dynamically changes the background gradient of the stats screen.** Achievement rewards in every other app in the library are additive (a new badge appears, a new item is granted). Tiimo's marbles change the ambient visual environment of the stats screen — the background gradient shifts to reflect the color of the most recently earned marble. The achievement reward is environmental, not just additive.

3. **The neurodivergent onboarding question is presented without definition or context.** "Are you neurodivergent?" is asked as the second onboarding question, with four options (yes / think so / no / don't know), but with no explanation of what neurodivergent means or why the app is asking. The session noted this as "quite aggressive in a way" in its framing. The app's entire product identity is built around neurodivergent planning support, but the onboarding assumes the user already understands the term.

4. **The screenshot detection mechanic is unique in the library.** When a screenshot is taken on the home screen, Tiimo detects it and displays a banner: "Posting to social? Tag us with @tiimoapp." This is the only app in the library that responds to the screenshot action itself as a social-sharing trigger. It is non-intrusive (a banner, not a popup) and immediately relevant (appearing at the moment the screenshot is taken).

---

## Analysis notes

One session. First install, free tier throughout. The session covered: onboarding (sign-in, neurodivergent question, paywall, notifications, calendar import, routine setup, task completion demo, streak unlock), home tab (calendar view with morning/afternoon/evening tasks, AI co-planner interaction), to-do tab (task creation, AI breakdown, tag system), focus tab (timer setup and completion), stats tab (marble collection, streak progress, mood log, knowledge section, courses). The AI co-planner was used in an extended interaction — voice input was transcribed and converted to tasks, then rescheduled via follow-up chat. The AI made one error (creating a meeting at the exact time the voice input was recorded, interpreting the recording timestamp as a scheduled start time). The Pro paywall was viewed but not purchased; several Pro features were encountered in context (custom tags, additional notification timing, reminder import, extra themes). The Tiimo podcast ("Change Makers by Tiimo") was discovered in the stats tab but had not been updated since 2024. App described as "straightforward, simple and actually quite nice" at session close.

The Apple Design Award 2024 finalist status was stated in onboarding. The Regards Rewards App of the Year 2025 was shown on the paywall. Both should be verified.

---

## Category context

Insight Timer was an implicit comparison point for the mood check-in and daily reflection mechanic. The neurodivergent positioning distinguishes Tiimo from general productivity apps (Canva, Wispr Flow) and general wellness apps (Calm, Insight Timer). The target audience (ADHD, autism) shapes the design throughout: dyslexic font option in settings, neuro-inclusive framing in course descriptions, visual timeline instead of text-heavy lists, and the focus timer as a first-class navigation tab.

---

## Unrecognized mechanics

### `behavioral-commitment-prompt`
**What was observed:** During onboarding, after selecting habits for morning, afternoon, and evening routines, the app shows a task completion demo: "tap brush teeth to complete it — watch what happens" — the user physically taps a task and sees the confetti celebration. Then immediately: "your first streak starts today — one small step at a time — we will celebrate every step with you — Ignition ready to unlock" with a swipe-to-unlock gesture. This is not a passive receipt of information — it is a physical action (swipe) that commits the user to beginning their streak. The same mechanic was flagged in the Insight Timer analysis ("I'm committed" button post-session). Tiimo's version uses a swipe gesture instead of a button tap, making the physical commitment more deliberate.
**Why it maps to the flagged mechanic:** Maps directly to `behavioral-commitment-prompt` flagged in the Insight Timer analysis as worth adding to the library. Tiimo is a second strong reference app for this mechanic — both wellness/productivity apps use a physical commitment gesture at the start of the streak to create psychological investment before the user has completed a single real session.
**Worth adding to library:** Yes — confirm the addition flagged in the Insight Timer analysis. Add Tiimo as a second reference alongside Insight Timer.

### `screenshot-detection-social-prompt`
**What was observed:** When the user took a screenshot on the home screen, Tiimo detected it and displayed a non-blocking banner at the top of the screen: "Posting to social? Tag us with @tiimoapp." The banner appeared immediately after the screenshot was taken and did not interrupt the user's interaction with the app.
**Why it does not map to an existing mechanic:** Not `social-feed` — there is no feed in the app. Not `gifting` — no item is transferred. Not `achievements` — no reward is given for sharing. This is a screenshot-triggered social sharing prompt: the app detects a system-level action (screenshot) and responds with a contextual, non-blocking suggestion to tag the app when posting. It is the lowest-friction social sharing prompt in the library — appearing at the exact moment the user has already captured content to share, without requiring navigation to a share menu.
**Worth adding to library:** Possibly — screenshot detection as a social sharing trigger is a distinct pattern from explicit share buttons, referral prompts, or achievement share flows. Worth noting as a category-level observation for apps that want to encourage organic social posting without friction.

### `expert-led-course-library`
**What was observed:** The Knowledge section of the Stats tab contains: articles and videos about neurodivergent planning and productivity (linking out to the Tiimo website), expert-led courses with lesson breakdowns (Introduction, Applying the technique, Summary) taught by ADHD and autism specialists who work with Tiimo, a YouTube-linked guided session, and a Spotify-linked podcast ("Change Makers by Tiimo," not updated since 2024). The courses are described as "neuro-inclusive guidance from ADHD, autism and planning experts." Opening a course lesson takes the user to an embedded video or article, with a structured lesson sequence.
**Why it does not map to an existing mechanic:** Similar to the Canva Design School observation (`in-app-education-with-certification` flagged in the Canva analysis). Tiimo's implementation differs: the courses are expert-led and audience-specific (neurodivergent), linked to external partners rather than internal product tutorials, and carry no certification. The education layer serves the product by deepening the user's understanding of their own planning challenges rather than teaching them how to use the app. Worth noting as a variant of the education-within-app pattern but distinct from Canva's certification-focused implementation.
**Worth adding to library:** Map to the `in-app-education-with-certification` observation from the Canva analysis as a variant without certification — audience-specific, expert-sourced educational content embedded in a productivity app.

### `ai-task-planner`
**What was observed:** The AI co-planner (bottom navigation tab, mascot icon) accepts free-form voice or typed input describing what the user needs to do. It transcribes, structures, and generates named tasks with time allocations and scheduling suggestions. Follow-up conversation in the same interface allows modifying, scheduling, and deleting tasks. The AI suggests an ordering ("want me to suggest an order or keep it flexible?") and can create subtask breakdowns for individual tasks ("suggest breakdown" on any to-do item generates a multi-step subtask list). The AI co-planner is behind the Pro paywall.
**Why it does not map to an existing mechanic:** Not `daily-weekly-quests` — tasks are user-defined, not system-assigned. Not `xp-leveling` — the AI doesn't award points. The AI co-planner is a conversational task-creation interface that reduces the planning friction specific to ADHD users (initiating planning, breaking tasks into steps, estimating time). As an engagement mechanic, it deepens the daily session by making planning itself interactive rather than purely administrative. The Wispr Flow analysis identified a similar voice-to-output pattern, but Wispr Flow is a transcription tool while Tiimo's AI specifically generates structured plans and subtask breakdowns from intent descriptions.
**Worth adding to library:** Possibly — conversational AI task generation (voice/text intent → structured plan with time allocations → scheduling suggestions → subtask breakdowns) is an emerging pattern in productivity apps that is functionally distinct from both AI content generation (PicsArt, Canva) and voice transcription (Wispr Flow). Worth naming as a category.
