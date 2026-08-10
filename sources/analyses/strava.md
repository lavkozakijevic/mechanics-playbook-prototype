# Strava

**ID:** strava
**Category:** Fitness / Activity Tracking
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 16 Apr 2026 (Session 1), 20 Apr 2026 (Session 2)
**Last updated:** 15 May 2026
**Session state:** First install — new account, free tier throughout both sessions

---

## Overview

Strava is a fitness tracking and social platform supporting 30+ sport types. Users record activities via GPS, share them to a social feed, compete on segment leaderboards, join clubs, and participate in monthly challenges. The app operates on a freemium model — the free tier provides activity recording, social feed access, basic segment data, challenges, and clubs. A subscription unlocks routes, advanced training analysis, segment leaderboards, custom training plans, heat maps, and performance insights.

---

## First impression

Onboarding is a multi-screen flow covering: activity type preferences, use-case goals (compete, connect, habit-build, explore, train for event, health maintenance), fitness experience level (beginner to pro), privacy controls overview, data-sharing consent, and a subscription paywall. An interstitial screen mid-onboarding shows "You're in good company — 150+ million active people on Strava are excited to move with you" — an explicit retention prompt within the onboarding to reduce drop-off. The subscription screen appears before the user has seen the app, but can be skipped immediately. Notification opt-in uses a preview of what a notification looks like before the iOS permission dialog. The final onboarding screens prompt adding friends and offer an immediate activity recording prompt.

There is no back button throughout the onboarding — once a screen is advanced, it cannot be revisited.

---

## Core activity

Users record physical activities (runs, rides, walks, swims, and 30+ other sport types) via the app's GPS tracking, then post them to a social feed where followers can give kudos and comments. Between activities, users explore maps, browse segment leaderboards, join challenges, and monitor their weekly stats and streaks. The social feed, challenges, and segment competition give repetitive physical activity a competitive and social context.

---

## Mechanics observed

### Streak (`streak`) · Core

**What was observed:**
The streak is the first visible element on the dashboard after the onboarding, displayed as a flame icon with a number inside it. At time of first session: 0 weeks. Tapping "View Calendar" opens the full streak view, which is housed in the "You" tab (bottom navigation). This screen shows:

- Current streak in weeks
- A calendar view of April 2026 with practice days marked
- Past 12 weeks of activity frequency
- A "start your streak by logging an activity" prompt with a Record Now button

After completing the first activity (a 44-second test ride), a streak milestone was immediately triggered. The streak mechanic is described as week-based, not day-based — tracking consecutive weeks of activity rather than consecutive days.

The streak display on the home screen carousel has four sliding items: streak (with View Calendar button), instant workouts, suggested goals, and weekly snapshot. The streak is the first of these four.

**How it is presented:**
Front-loaded on the home screen as the first item in the dashboard carousel. The full calendar view is in the You tab. The streak counter uses a flame icon — a universally recognized streak symbol. The "Record Now" button is embedded directly on the streak card, creating a zero-friction path from seeing the streak to starting an activity.

**What is notable:**
The streak is week-based, not day-based. This is a meaningful difference from Insight Timer (consecutive days) and Duolingo-style apps — a week-based streak is more forgiving (one activity anywhere in the week counts) and more appropriate for an exercise app where daily training is not always advisable. No "catch-up" mechanic was described for missed weeks.

**Screenshot suggestions:**

`[Home screen carousel showing the streak card with flame icon, "0 weeks," the View Calendar button, and the Record Now button below]`
*Documents the streak as the first home screen element and the embedded Record Now CTA.*

`[You tab streak calendar view showing the 12-week history grid, the current month calendar, and the "unlock your full potential" subscription prompt below]`
*Documents the streak calendar surface and how the subscription paywall is embedded directly below it.*

---

### Leaderboards (`leaderboards`) · Core

**What was observed:**
Segments are named sections of road or trail that any Strava user can ride or run. Each segment has a leaderboard ranking all athletes by their best time on that segment. The following leaderboard types were observed:

**Segment leaderboard (subscription-gated):** Accessing the segment leaderboard from a user's own profile (under the Segments tab → Top 10) shows which segments the user appears in the top 10 of. Tapping on "Best Efforts" opened the paywall — indicating that full segment leaderboard access requires a subscription.

**Local Legend:** A specific leaderboard type described in detail: "where we hold the most overall efforts for the last 90 days." Local Legend status is awarded to the athlete who has completed the most efforts on a given segment in the last 90 days — not the fastest, but the most frequent. This is visible on the Segments tab and was also referenced as a suggestion category in the home screen follow recommendations ("Local Legend near you"). The notification settings include "Lost CR — Lost Rankings when we lose our top place on a leaderboard," confirming leaderboard position changes trigger push notifications.

**Challenge leaderboard:** Within each challenge, a leaderboard shows participant rankings by the challenge metric (pace, distance, steps). The 100,000 Steps Challenge was used as an example — its leaderboard showed overall rankings with some participants listed as having nearly one billion steps logged.

**Group Challenge leaderboard:** Described as a feature of custom group challenges ("active tab — design your own challenge — rally your crew with a custom group challenge"), which requires a subscription.

**How it is presented:**
Segment leaderboards are accessed from the Segments tab on the user's profile and from segment explore pages. Challenge leaderboards are on each challenge's detail page. Local Legend status is surfaced in the follow suggestions on the home feed and in the Segments tab. The notification system pushes alerts when a user loses their top ranking.

**What is notable:**
The Local Legend mechanic reframes leaderboard competition from "who is fastest" to "who is most consistent" — it is a frequency leaderboard rather than a performance leaderboard. This means a recreational athlete can hold Local Legend status on a segment that elite athletes hold the speed record on. It opens leaderboard competition to a much broader user population. The 90-day rolling window means Local Legend status is always contestable.

**Screenshot suggestions:**

`[Segment explore page showing a named segment with its Local Legend holder, total effort count, and the ability to filter by length, elevation, and surface]`
*Documents the segment leaderboard structure and the Local Legend mechanic as a distinct leaderboard type.*

`[Challenge leaderboard for the 100,000 Steps Challenge showing ranked athletes with step counts and the metric-based ranking structure]`
*Documents the challenge leaderboard as a named metric / user position comparison mechanic.*

---

### Challenges (`challenges`) · Core

**What was observed:**
Challenges are the primary opt-in competitive mechanic in Strava. They appear in multiple surfaces: as "suggested challenges" on the home dashboard with participant counts, and in the Groups tab under the Challenges section.

**Challenges observed with details:**
- April 400 Minute Run: "Log 400 minutes this April to unlock a free two-week Runna trial." 1,128,000+ athletes joined. Reward: free trial of a partner app (Runna).
- Hoka Speedgoat 7 Vert Channel Challenge: 431,000+ athletes joined. Reward not listed.
- April 5000x Brooks Challenge: 1,175,000+ athletes joined. Reward: digital trophy.
- April 10 Days Active Challenge: 1,000,000+ athletes joined. Reward: digital trophy.
- April 180 Minute Sweat Challenge: 837,000+ athletes joined. Reward: digital trophy.
- 11 additional challenges described as offering digital trophies for various goals: 20 hours swimming, flexibility, 100,000 steps, half marathon, 10,000 steps challenge, elevation challenge, and others.
- 100,000 Steps Challenge: described in detail, with its own leaderboard.

Joining a challenge requires only tapping "Join" — no setup, no cost, no subscription. Challenges are filterable by activity type, elevation gain, moving time, and distance.

**Partner challenges** were also observed: Hoka, Brooks, and Runna are named as challenge partners. The Runna challenge specifically delivers a partner app free trial as the completion reward rather than a Strava-native digital trophy.

**Group challenge creation** requires a subscription ("design your own challenge — rally your crew with a custom group challenge — start a free trial").

**How it is presented:**
The home dashboard surfaced three specific challenges with participant counts and reward descriptions before the user had navigated anywhere. The full Challenges area is in the Groups tab. Each challenge has a detail page with days remaining, organizing club, challenge requirements, leaderboard, and description.

**What is notable:**
Challenge participant counts in the millions (1,175,000 for the Brooks challenge three weeks into April) are displayed on the home dashboard before the user joins any challenge. This serves as social proof at scale. The Runna challenge reward (a free trial of a companion app) is a cross-promotional mechanic that uses the challenge completion as an acquisition channel for a separate product. Digital trophies are the standard reward for most challenges and feed directly into the user's trophy case.

**Screenshot suggestions:**

`[Home dashboard showing three simultaneous challenges with participant counts (1.1M, 431K, 1.175M) and reward labels (free Runna trial, digital trophy)]`
*Documents the challenge discovery surface, participant scale framing, and the variety of reward types.*

`[Challenge detail page for one challenge showing days remaining, organizing club, requirements, and the challenge leaderboard]`
*Documents the challenge structure: opt-in, visible endpoint, named reward, and embedded leaderboard.*

---

### Achievements (`achievements`) · Core

**What was observed:**
The Trophy Case is a named, permanent achievement display accessible from the user's profile. Trophies are organized into two types:

**Activity milestones:** Named trophies for cumulative activity counts — First Activity, Third Activity, Fifth Activity, Tenth Activity, scaling up to 1,000 Activity. After completing the first test activity (44 seconds), the "First Activity" trophy was immediately awarded. A popup appeared: "Welcome to the team — kudos on logging your first Strava activity." The user could "View Activity" or "View in Trophy Case." Entering the Trophy Case showed the first trophy earned alongside the future milestone markers.

**Challenge digital trophies:** Each completed challenge earns a digital trophy that is added to the Trophy Case. These are named after the challenge (e.g., "April 5000x Brooks Challenge") and are permanent once earned.

**Personal Records (PRs):** When completing an activity that sets a new personal record on a metric (longest ride, fastest pace, etc.), the activity is labeled with a "PR" badge. In the session: "Our longest ride ever. We can then share this activity" with a pre-branded visual including a "PR — Personal Record" badge.

**Sharing:** Achievement shares produce pre-branded visuals with Strava's design system. The transcript noted these share visuals are designed to look good and carry Strava branding, making sharing achievements also a form of Strava marketing.

**How it is presented:**
Trophy Case is on the user's profile under the activities section. It is also linked from the home screen after completing an activity. The first trophy popup appears immediately on saving the first activity. The notification settings include "Lost CR — Lost Rankings" as a notification type, suggesting CRs (Course Records — the all-time best on a segment) are tracked as permanent named achievements.

**What is notable:**
The Trophy Case explicitly scaffolds future achievement targets — showing milestone markers up to 1,000 activities when the user is at their first. This turns the trophy case into a long-term visible goal map. The PR badge on activities is an in-feed achievement signal visible to followers when they see the activity in their feed.

**Screenshot suggestions:**

`[Trophy Case showing the First Activity trophy earned alongside the future milestone markers (3rd, 5th, 10th, 1000th activity) as a visible progression ladder]`
*Documents the achievement ladder structure and how future targets are displayed alongside current trophies.*

`[First activity completion popup showing "Welcome to the team — kudos on logging your first Strava activity" with View Trophy Case button]`
*Documents the achievement reward moment at the point of completing a first action.*

---

### Clans-Guilds (`clans-guilds`) · Supporting

**What was observed:**
Clubs are groups with structured membership, events, and activity feeds. The session covered both joining existing clubs and creating a new one.

**Club structure:** Each club has a sport type, tags (just for fun, brand, team, coach-led, creator, event/race, local community, fundraising, identity group), a name, description, cover photo, and privacy setting (public — anyone can join; private — admin-approved). Clubs have: an overview tab, activities tab, stats tab, posts tab, and events tab.

**Creating a club:** The user created a club mid-session. After creation, a congratulations popup appeared with next steps: "invite your community, write a post, create an event — it's your club." Events can be created within a club, with settings for: sport type, recurrence, starting location, virtual or in-person, description, discoverability, event type (social, workout, competition), pace range, attendance permission, and route.

**Club content:** Clubs have their own activity feed where members' activities appear. Members can share activities specifically to their club feed ("mute activity — do not publish to home or club feed" is a toggle when posting an activity). When sharing an activity, there is a specific "share to club" option.

**Nearby clubs:** The clubs discovery section showed dozens of local running and cycling clubs with member counts and sport types.

**How it is presented:**
Clubs are in the Groups tab alongside Challenges. Club creation is front-loaded at the top of the Clubs view. The Strava Club (the platform's official club) is shown with "almost 7 million athletes." Nearby clubs are surfaced based on location.

**What is notable:**
The event creation feature within clubs is highly structured — pace range, event type (social vs. competition vs. workout), discoverability settings. This makes clubs a platform for organizing real-world group activities, not just an online community. The session noted: "Okay, and we have an upcoming event for this group that we've built." Club creation and the full challenge design feature both have subscription nudges, though basic club creation was completed for free.

**Screenshot suggestions:**

`[Club creation flow showing the tag selection screen (just for fun, brand, team, coach-led, local community, identity group) and the public/private toggle]`
*Documents the club taxonomy and the setup options that define the club's identity.*

`[Club event creation screen showing sport type, recurrence, in-person/virtual toggle, pace range, and event type (social/workout/competition)]`
*Documents the structured event organization capability within clubs.*

---

### Social Feed (`social-feed`) · Core

**What was observed:**
The home feed is a stream of activities from followed users, including: activity name and type, map of the route, photos and videos (up to 30 seconds for video), achievement badges (PR labels), statistics (distance, time, elevation), kudos count, and comments. The feed is visible without a subscription.

**Activity post elements:** When posting an activity, the user can add photos and videos, tag others with @ mentions, add activity tags (race, workout, recovery, commute, with pet, with kid), select perceived effort (easy, moderate, max), and choose visibility (everyone, followers only, only me). Muting an activity prevents it from appearing in the home or club feed while keeping it on the profile.

**Kudos and comments:** Followers can give kudos (a single-tap appreciation mechanic) and leave comments on activities. These generate push notifications. The notification settings include separate toggles for "Kudos and likes," "Comments," "Comments on others' activities," and "Mentions on activities."

**Sharing:** Activities can be shared to Instagram, WhatsApp, iMessage, Strava message, or via copy link. Pre-branded share designs are generated automatically with the activity's key stats and Strava's visual identity. When sharing, if others participated in the activity but didn't record it themselves, the user can tag them via "Add others" — or invite them to Strava if they don't have the app.

**Fan Favorites and follow suggestions:** The home screen surfaces recommended people to follow, categorized as "Fan Favorites on Strava" (with a checkmark badge) and "Local Legend near you." Fan Favorites appear to be notable or verified athletes.

**How it is presented:**
The social feed occupies the majority of the home screen below the dashboard carousel. The feed scrolls indefinitely. Activity posts from followed users include visual maps and photos making them visually distinctive from text-based social feeds.

**What is notable:**
The "Add others" mechanic on activity posts is the smoothest friend-invitation flow observed across the library. If a user ran with a friend who doesn't have Strava, completing the activity and tapping "Add others" triggers an invitation to that person — contextually, at the moment of activity completion, framed as including them in the activity record rather than a cold "invite a friend" prompt. The transcript described it: "it's not at all annoying, it's not at all pushy — the way relationship with friends is set in Strava is very, very, very nice and very respectful."

**Screenshot suggestions:**

`[Home feed showing two activity posts with maps, photos, achievement badges, kudos counts, and comment options — including a PR badge visible on one]`
*Documents the social feed format with maps, achievement signals, and interaction mechanics in a single view.*

`["Add others" screen appearing after activity save, showing the contextual framing for inviting participants who don't have Strava]`
*Documents the friend invitation mechanic embedded in the activity-posting flow.*

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Supporting

**What was observed:**
The weekly snapshot on the home dashboard shows: distance covered this week, time exercised this week, and elevation gain this week. These reset on Mondays. The transcript noted the Monday reset creates a misleading state: "everybody shows zero on Monday morning — this gives the feeling that nobody's active on this app while in fact they are."

Suggested Goals on the home screen carousel allow users to set a target number of activities per week. This is a user-defined recurring weekly target, not a Strava-assigned quest. However, its structure — a defined target, a weekly cadence, and a progress display — maps to the quest mechanic pattern.

Instant Workouts on the home carousel are suggested activity templates (e.g., "Brisk Walk — Keep your body moving with a brisk walk, maintain activity levels, 30 minutes"). These are not assigned tasks with rewards but are starting-point suggestions that could direct a user toward a specific activity.

**How it is presented:**
Weekly snapshot and suggested goals are on the home screen carousel. Progress is tracked in the You tab. The Monday reset is the cadence marker for the weekly quest structure.

**What is notable:**
The weekly goal is user-set (not Strava-assigned), which means it functions as a self-directed quest rather than a platform-directed one. The evidence is sufficient to log this mechanic but the development level is shallow relative to apps like FC Mobile or Solitaire Grand Harvest where quests are system-assigned and reward-bearing.

---

### XP Leveling (`xp-leveling`) · Shallow

**What was observed:**
Activity milestones in the Trophy Case function as a named level structure: First Activity → Third → Fifth → Tenth → (implied continuation toward 1,000 Activity). Each milestone unlocks a named trophy. The transcript described seeing the full ladder "up to a thousand activity" when entering the trophy case after the first trophy was earned.

The "Your profile is 80% complete" progress indicator on the profile page also functions as a lightweight level-like display — a named percentage with a specific next action required to advance it.

No XP accumulation counter with numeric accrual and threshold crossing was described. The milestone structure exists (named thresholds with named rewards) but the accumulation mechanic is implicit (count of activities logged) rather than explicitly displayed as an XP bar.

Logged at Shallow because the trophy case milestone ladder confirms named thresholds and named rewards at those thresholds, but the explicit XP accumulation display is absent.

---

## Mechanics not observed

**Variable Reward:** No pull, spin, or pack-open mechanic with unknown outcome was described.

**Set Collection:** No named sets with defined membership and completion rewards were described. The Trophy Case collects trophies but they are individual named achievements, not organized into named groups with a set-completion reward.

**Season Pass:** No dual-tier advancement track was described. Challenges are free-standing opt-in events, not a progression track with free and paid tiers.

**Piggy Bank / Energy-Lives / Ads / Gifting / Daily Login Reward:** None observed.

---

## How mechanics connect

**Challenges feed the Trophy Case.** Completing a challenge earns a digital trophy that is permanently added to the Trophy Case. This makes the challenges mechanic a direct input to the achievements mechanic — every challenge joined is a potential trophy, making the Trophy Case a history of all challenges completed.

**The social feed amplifies achievement signals.** When a user sets a PR, the PR badge appears on the activity in the feed, making the achievement visible to all followers without any sharing action by the user. This passive achievement broadcasting makes the feed an achievement display surface as well as an activity stream.

**Segments connect the social feed, leaderboards, and challenges.** Segment completion data appears in activity posts in the feed (showing achievement counts per activity). Segment leaderboards create local competition. Local Legend status appears in the follow suggestions. The notification system alerts users when they lose a segment ranking. Segments are thus the connective tissue between the social feed (showing achievements), leaderboards (ranking by segment performance), and the achievement system (CR badges).

**Streaks drive weekly activity frequency, challenges drive variety.** The streak asks for activity each week. Challenges provide specific targets and variety within those weekly activities. A user maintaining a streak while participating in an April running challenge and an elevation challenge is simultaneously progressing three separate mechanic tracks with the same activities.

**The "Add others" mechanic turns activity completion into a friend acquisition moment.** Posting an activity and using "Add others" to tag non-Strava participants converts activity completion into a Strava invitation, embedding growth mechanics into the core activity loop at its most natural moment.

---

## Session rhythm

**Session trigger:** Streak (weekly cadence), challenges (monthly deadlines, visible countdowns), social feed (activity from followed users, kudos notifications), segment ranking alerts (push notification when a ranking is lost).

**Session structure during activity:** Open app → select sport type → optionally add route or beacon → start recording → GPS tracking runs in background → finish → save activity → add photos/tags/notes → post to feed → receive kudos notifications.

**Session structure between activities:** Open app → check home feed for friend activity → give kudos → check challenge progress → browse segments → check weekly stats.

**Monday reset effect:** The weekly stats hard-reset on Monday morning creates a moment where the app feels empty — "nobody's active" — which the transcript identified as a UX issue that could discourage Monday use. This is the opposite of the intended streak urgency effect.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Strava subscription (annual, in-app) | $79.99/year | Routes, segment leaderboards, advanced training analysis, performance insights, heat maps (weekly/nightly/personal), 3D maps, custom training plans, training log, relative effort, group challenge creation, route building, best efforts, subscriber-only stat maps |
| Strava subscription (annual, web) | €49.99/year | Same as above — significantly cheaper; the price difference was not communicated on any in-app paywall screen |
| Strava + Runna (annual) | $149.99/year | Everything in Strava subscription + Runna training plan integration |
| Apple Fitness+ (promoted in-app) | Free for up to 2 months via Strava promotion, then $9.99/month | Apple Fitness+ access — promoted within Strava settings as a partner offer |

The web vs. in-app pricing discrepancy ($79.99 vs. €49.99) was noted as undisclosed: "this difference in pricing did not appear and was not communicated to us in any way on the paywall." The subscription CTA button on the routes paywall was labeled "Start Free Trial" and visually de-emphasized the "Pay in App" option, which processes through the App Store at the higher price.

---

## What stood out

1. **Local Legend reframes leaderboard competition from speed to consistency.** Holding Local Legend status requires the most efforts on a segment in the last 90 days — not the fastest time. This makes leaderboard competition accessible to athletes who will never be the fastest on a segment but can be the most dedicated. It also makes Local Legend status perpetually contestable and creates a distinct motivation type (volume) alongside the existing CR (speed) motivation.

2. **The "Add others" post-activity mechanic is the smoothest referral prompt observed in the library.** Framing inviting a non-Strava friend as "adding them to your activity record" is contextually appropriate, non-pushy, and timed at the moment the user is most engaged (just completed an activity). The transcript noted it explicitly as "very, very, very nice and very respectful" compared to typical friend-addition mechanics.

3. **The subscription pricing is materially cheaper on the web than in the app, and this is not disclosed in-app.** $79.99/year through the App Store vs. €49.99/year through the web represents a significant difference. The paywall's "Start Free Trial" button directed users to the web checkout (avoiding Apple's 30% fee), while "Pay in App" appeared as de-emphasized text. The pricing differential itself was invisible in the UI.

4. **The Monday reset makes the social feed feel empty at the start of every week.** Weekly stats for all users reset to zero on Monday morning — meaning a user who opens the app Monday sees everyone at 0 km, 0 hours, 0 m elevation for "this week." The transcript identified this as making the app feel unused when it is in fact heavily used, noting it could undermine Monday engagement.

---

## Analysis notes

Two sessions. Session 1 covered onboarding in full (first install to home screen). Session 2 covered the full app: dashboard mechanics, user profile and trophy case, segments, maps, the recording flow, activity posting, and the Groups tab (Challenges and Clubs). One activity was recorded during the session (a 44-second test ride), which triggered the First Activity trophy and allowed the post-activity flow to be described in detail. The subscription paywall appeared across multiple surfaces: during onboarding, when accessing routes, when accessing best efforts, in the You tab, in the profile completion flow, and after completing the first activity. The Runna partnership (Strava owns or is closely affiliated with Runna based on the in-app integration depth) was not confirmed — the transcript noted "they might be owned by Strava, but I'm not sure."

---

## Category context

No explicit comparisons to other fitness apps were made in the transcripts. Duolingo's daily goal-setting prompt was referenced during onboarding analysis by the narrator.

---

## Unrecognized mechanics

### `kudos`
**What was observed:** Kudos is Strava's single-tap appreciation mechanic for activities posted to the feed. Followers tap a clapping hands icon on an activity post to give kudos. The activity shows a running kudos count. Giving kudos generates a push notification to the activity poster ("Kudos and likes" is a named notification category in settings). Kudos requires no text and no reciprocal action — it is a one-tap acknowledgment. It appears on every activity post in the feed and is described as the primary social interaction unit ("give and receive kudos, share encouragement and spark your motivation" in the onboarding).
**Why it does not map to an existing mechanic:** Not `gifting` — no item or currency is transferred; kudos is a signal, not a resource. Not `social-feed` — kudos is an interaction mechanic that operates on top of the feed, not the feed itself. Not `achievements` — receiving kudos does not unlock a named badge. Kudos is a frictionless social affirmation mechanic: lower commitment than a comment, more personal than a like count, specifically designed for the fitness context where completing an activity deserves acknowledgment rather than evaluation. It creates a social reward for posting activities that is not available if activities are kept private.
**Worth adding to library:** Yes — the kudos mechanic (frictionless, non-evaluative, activity-specific affirmation) is distinct from generic "likes" in social platforms and is a deliberate fitness social mechanic worth naming.

### `gear-tracking`
**What was observed:** Users can register physical gear (shoes or bikes) in Strava and associate it with recorded activities. For each gear item, the user specifies: type (bike or shoe), brand (hundreds of options for shoes), model, nickname, notes, and a distance notification threshold. The observed example: "notify me when I have reached 700 kilometers" with a selectable range of 400 to 1,200 km for shoes. When adding a new activity, existing gear can be selected or new gear added directly in the post-activity flow without leaving it. Gear tracks cumulative distance across all associated activities and alerts the user when the threshold is reached.
**Why it does not map to an existing mechanic:** Not `achievements` — gear tracking is a maintenance alert system, not a named reward marker. Not `daily-weekly-quests` — the mileage threshold is user-set and open-ended, not a recurring reset task. This is a physical-equipment lifecycle management mechanic embedded in an activity tracking app: it turns the cumulative mileage data generated by activity recording into a practical utility (when to replace shoes/tires) with a personalized notification trigger.
**Worth adding to library:** Possibly — gear lifecycle tracking with user-defined alert thresholds is a pattern in endurance sports apps (Garmin, TrainingPeaks) worth naming as a category-level mechanic for fitness platforms.

### `activity-privacy-layering`
**What was observed:** Strava provides granular control over who can see each activity, with options set at the time of posting: Everyone, Followers Only, or Only Me. Additionally, "Mute Activity" prevents the activity from appearing in the home feed or club feeds while keeping it visible on the user's profile. "Hidden Details" within an activity allow specific stats (calories, speed, start time) to be hidden from viewers. The start and end points of activities are hidden by default for all users ("your safety on Strava — will hide the start and end of your activities by default" in onboarding). 12 privacy controls are described as customizable in settings. Private profiles prevent followers from seeing who that user follows. Activities can be tagged as a "race, workout, recovery, commute, with pet, with kid" without affecting visibility.
**Why it does not map to an existing mechanic:** Privacy controls are a product feature, not an engagement mechanic. However, the granularity of privacy layering in Strava (activity-level, stat-level, location-level, identity-level) is a design pattern worth noting for fitness apps where personal safety, competitive intelligence, and social presentation all create distinct privacy needs. The default start/end hiding behavior is a notable safety-by-default choice not seen in other apps in this library.
**Worth adding to library:** No — this is a product feature. Worth noting in the analysis but not a mechanic.

### `hard-currency` (Strava subscription as feature-currency)
**What was observed:** The subscription in Strava does not unlock content (like Calm) or cosmetics (like Steam) — it unlocks analytical features (training log, relative effort, performance predictions), mapping features (route building, heat maps, 3D maps), and competitive features (segment leaderboards, group challenge creation). The subscription gates tools, not content. This is structurally different from most subscription paywalls observed in the library.
**Why it does not map to an existing mechanic:** Not `hard-currency` — the subscription is not purchased currency spent on items. Not `freemium-content-gating` — the free tier provides full access to activities, social feed, challenges, clubs, and basic segments. The subscription gates feature depth, not content access. This is a feature-tier subscription (pay for deeper analytical and competitive tools) rather than a content subscription (pay to access the library) or a cosmetics subscription (pay for visual customization). Worth noting as a distinct subscription model variant.
**Worth adding to library:** Possibly — as a subscription model category, the feature-tier paywall (tools and analysis locked, content and community free) is distinct from the content paywall (Calm, Insight Timer Plus) and the cosmetics paywall (Steam Points Shop) and worth naming.
