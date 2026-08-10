# Strava

*Reviewed gold-standard copy. Base: analysis-v2.md. Amendments applied per review of 29 July 2026.*

**ID:** strava
**Category:** Fitness / Activity Tracking
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 16 April 2026 and 20 April 2026
**Last updated:** 29 July 2026
**Session state:** First install, new free account, through onboarding and the first recorded activity (free tier)
**Sessions used:** App Mechanic: Strava I (16 April 2026); App Mechanics: Strava II (20 April 2026)

## Overview

Strava is a fitness and activity tracking app that records sports activities and presents them within a social environment of feeds, followers, clubs, challenges, and segment rankings. Across the two sessions the app primarily asks the user to record activities and to connect those activities to other people through following, kudos, comparison, and shared challenges. A large share of the deeper tracking and mapping features are placed behind a paid subscription.

## First impression

Onboarding, as the transcripts show it, opens with an auto-scrolling carousel of four screens describing tracking your active life, making progress toward goals, getting motivation from your people, and route options. Two actions are offered immediately: "Join for free" and "log in." Account creation offers Google, Apple, or email; the email path sends a code and shows an "open email app" button on the code-entry screen.

Before showing activity value, the app requests a sequence of inputs: a tracking-permission prompt ("allow Strava to track your activity across other companies, apps and websites"), first and last name (with a note that the profile is public by default), birthday ("we'll use this for performance analysis, filtering leaderboards and to keep younger users safe"), gender ("we'll use this to determine which leaderboards you appear on"), activity types from a list the transcript enumerates (run, ride, walk, hike, swim, CrossFit, elliptical, golf, club, kayak, rock climb, row, skate, ski, snowboard, stair stepper, stand up, paddle, surf, weight training, yoga, and other), intended use ("compete with others, connect with other active people, build an exercise habit, explore new places, train for an event or personal goal, or maintain my health"), and a self-rated fitness level (beginner, intermediate, advanced, pro). The narrator notes the onboarding cannot be navigated backward.

An interstitial screen mid-onboarding states "you're in good company, 150+ million active people on Strava are excited to move with you." Onboarding also surfaces a subscription screen, a notifications-permission prompt, and a find-friends step before reaching the dashboard. The first mechanic moment after onboarding is the "record an activity" prompt offering "record now using Strava" or connecting a Garmin, Peloton, or other device.

## Core activity

The experience centers on recording sports activities and then viewing, sharing, and comparing them within a social layer. Inside the app the user records an activity (choosing from a large set of sport types, optionally adding a route, sensor, or safety beacon), saves it with a name, visibility setting, photos or videos, gear, and a subjective effort rating, and then sees stats, a map, achievements, and sharing options. Outside of recording, the user scrolls a home feed of other athletes' activities, follows people, browses and joins challenges, explores segments and their rankings, and can create or join clubs.

## Mechanics observed

### Streak · Core · confirmed (presence)

**What was observed:**
On the dashboard, directly under the upgrade button, is "your streak," shown as a flame icon containing a number, reading "0 weeks" in this session. Copy reads "start your streak by logging an activity," with a "View calendar" button and a "record" button beside it. The View calendar screen shows streak activities and the current streak for April 2026, plus performance across the past 12 weeks. The streak is described as measured in weeks.

**How it is presented:**
Placed at the top of the home dashboard as the first item in a four-item carousel, using a flame icon with an enclosed count.

**Classification basis:**
The product presents a continuity state ("your streak," weeks on a streak) whose qualifying event is logging an activity, satisfying the Streak core invariant that a maintained state depends on continuity. Presence is asserted from the product's own framing per the operating card's presence standard. The continuity rule (what a missed week does to the state, whether it resets, ends, or is protected) is not observed, because the account had no activity and a zero-week streak. Exclusion checks: this is not classified from the flame icon or the word "streak" alone, since the app also shows a distinct continuity count tied to logging.

**What is notable:**
The streak operates on a weekly rather than daily period, which the non-required conditions of the entry permit.

**Screenshot suggestions:**
The dashboard streak card showing the flame, "0 weeks," and "start your streak by logging an activity," which evidences the continuity state and its qualifying event.

### Challenge · Core · confirmed

**What was observed:**
Multiple named challenges appear under "suggested challenges" on the dashboard and in a dedicated Groups > Challenges area. Examples the transcript names: "April 400 minute run" ("log 400 minutes this April to unlock a free two week Runna trial," more than 1,128,000 athletes joined); a "Hoka Speedgoat 7 Vert" channel challenge (more than 431,000 joined, a reward stated but not listed); "April 5000x Brooks challenge" ("Complete the first 5km run from April 1st to April 30th, 2026," digital trophy, more than 1,175,000 joined); "April 10 days active challenge" ("get 10 days in a row," digital trophy, more than 1 million joined); "April 180 minute sweat challenge" (digital trophy, more than 837,000 joined); plus further challenges for 20 hours, swimming, flexibility, 100,000 steps, half a marathon, a 10,000 challenge, and elevation. Joining is one tap ("challenge join"). A challenge's own page shows days left, the organizing club, challenge details, what is earned, and a leaderboard. The transcript also notes "create a group challenge" and "design your own challenge," both of which open the paywall.

**How it is presented:**
Surfaced on the dashboard as a scrollable set and given a dedicated tab in the Groups area, filterable by activity type, elevation gain, moving time, and distance. Featured challenges show participant counts.

**Classification basis:**
Each named challenge defines a success condition (for example, complete a 5km run, log 400 minutes, 10 days active) and a boundary (April 1 to April 30, 2026), and the product maintains join and completion states with a differential outcome (a digital trophy or unlock on completion). This satisfies the Challenge core invariant of a bounded objective instance that can conclude completed or not completed. Exclusion checks: these are not mere targets without a bounded instance, and completion is tracked, so the "target without a bounded objective" exclusion does not apply. The "April 400 minute run" is a rewarded challenge whose reward is a partner-product trial; the promotion of that partner product is classified separately under Advertisement Exposure.

**What is notable:**
Many challenges are organized with named commercial partners (Runna, Hoka, Brooks), and completion rewards are frequently "digital trophies."

**Screenshot suggestions:**
The "suggested challenges" dashboard section showing several challenges with participant counts, which evidences the bounded objective instances and their join state; a single challenge page showing days left and its leaderboard.

### Social Feed · Core · confirmed

**What was observed:**
The lower portion of the home dashboard presents a stream headed "recommended for you, check out these popular Strava members to stay motivated," followed by other athletes' activities: a person's run with route and photos, distance (the transcript cites almost 34 kilometers by bicycle), elevation gain, time, and achievements; another athlete's shared activity including a video; and further activities from other users as the user scrolls. Each item allows giving kudos, leaving a comment, or sharing, and shows how many kudos and comments others left, and how many achievements each athlete holds. A separate "home or club feed" is referenced when muting an activity ("do not publish to home or club feed").

**How it is presented:**
A vertically scrolling stream on the home dashboard mixing recommended members with followed and other users' activity items, each item carrying athlete identity, activity data, media, and kudos and comment counts.

**Classification basis:**
The stream aggregates activity items attributed to multiple identifiable social actors, selected and ordered for the viewer, and able to change as new activity arrives, satisfying the Social Feed core invariant. The "recommended for you" members place it partly in the social recommendation variant. Exclusion checks: it is not the viewer's own activity log alone (items from other actors enter the stream), and it is not a leaderboard (items are discrete actor-attributed activities, not ordered comparative positions).

**What is notable:**
Feed items are automatically generated from recorded activities rather than composed as text posts, and the top of the feed recommends athletes the viewer does not yet follow.

**Screenshot suggestions:**
The dashboard feed showing an athlete's activity with route, photo, kudos and comment counts, which evidences multi-actor attributed items in an ordered stream.

### Leaderboard · Supporting · confirmed

**What was observed:**
Within segments, the transcript describes "local legends where we hold the most overall efforts for the last 90 days" and "we can see who is best there, who are the people who are doing great in these segments locally," plus a "top 10" view of segments where the user places in the top ten, and "CRs, here you'll find the segments where you hold the best overall time." Within challenges, "we can also see the leaderboard for any activity, we can see overall for those who are participating here, we can see their pace, the distance that they've covered," and for a 100,000 steps challenge, "the rank of any of these athletes, some of which have almost a billion steps." A push-notification setting references "Lost CR, Lost Ratings when we lose our top place on a leaderboard."

**How it is presented:**
Ordered lists within segment views and within individual challenge pages, showing participants with a comparison measure (efforts, pace, distance, steps).

**Classification basis:**
The product orders at least two comparable entities by a defined measure and presents their relative positions within a defined scope (a segment locally, a challenge event), satisfying the Leaderboard core invariant. Observed variants include local, segment, and event leaderboards. Exclusion checks: these are ordered comparisons of multiple entities, not a single value, and not a relevance-ordered feed.

**What is notable:**
Several leaderboard-adjacent views (for example, segment leaderboards and best efforts) open the paywall, so the full extent of leaderboard access on the free tier was not reached in this session.

**Screenshot suggestions:**
A challenge leaderboard showing ranked athletes with their measure; a segment "local legends" list, each evidencing multiple entities in comparative order.

### Comparative Rank · Supporting · strongly supported

**What was observed:**
The app communicates the user's own position within comparison sets: "top 10, where we are top 10, in which of these segments are we the top 10," "local legends where we hold the most overall efforts for the last 90 days," and CRs as "segments where you hold the best overall time." The "Lost CR, Lost Ratings when we lose our top place on a leaderboard" notification communicates a change in the user's standing.

**How it is presented:**
As user-facing standings and titles (top 10, Local Legend, CR holder) tied to segments and 90-day windows.

**Classification basis:**
The product assigns the relevant entity a position relative to others within a defined comparison set and scope (a segment, the last 90 days), satisfying the Comparative Rank invariant, where the position can change due to others' results (the "lost CR" case). Leaderboard and Comparative Rank co-occur here as distinct observable behaviors: the challenge and segment views present full ordered lists (Leaderboard), while the top-10, Local Legend, and CR standings communicate the user's own position (Comparative Rank), which the entries treat as separable ("a rank may be shown without exposing the leaderboard"). Exclusion checks: these are relative positions dependent on other entities, not absolute tiers or personal-only comparisons.

**Screenshot suggestions:**
A segment "Local Legend" or "top 10" view communicating the user's own position, which evidences a rank derived by comparison with others.

### Milestone · Supporting · strongly supported

**What was observed:**
The profile contains a "trophy case" showing "first activity, third activity, fifth activity, tenth activity," and the transcript states the trophies "go up to a thousand activity" and describes them as "milestones that we might achieve with Strava." After saving the first activity, a pop-up reads "welcome to the team [name], kudos on logging your first Strava activity," with options to "view activity" or "view in trophy case," and the narrator describes receiving "this first trophy for completing this first achievement of ours, this first milestone."

**How it is presented:**
A dedicated trophy case at the bottom of the profile, with a "view all" listing thresholds up to one thousand activities.

**Classification basis:**
The trophies mark defined points (1st, 3rd, 5th, 10th, up to 1,000th activity) within the broader ongoing measure of accumulated activity count, and reaching a point produces a recorded trophy state separate from ordinary counting, satisfying the Milestone core invariant (cumulative and recorded variants). Because each crossing is preserved as an attained trophy, the entries note Achievement may co-apply to the same crossings; Milestone is used here as the more precise label because the trophies are explicitly positions along one activity-count progression. Exclusion checks: the trophies are tied to positions within a broader progression rather than to unrelated standalone criteria.

**Screenshot suggestions:**
The trophy case showing "first activity, third activity, fifth activity, tenth activity," which evidences recognized thresholds within the activity-count progression.

### Achievement · Supporting · strongly supported

**What was observed:**
After the first saved activity, a "PR personal record" badge appears, described as "new best effort, your longest ride ever." The first-activity recognition ("kudos on logging your first Strava activity") and its trophy are recorded to the trophy case. Completing named challenges grants "digital trophies." The profile lists achievement counts on other athletes (for example "10 silver," "53 trophies, some gold, some bronze").

**How it is presented:**
A PR badge attached to the completed activity, a celebratory "nice work" animation and welcome pop-up on the first activity, and digital-trophy rewards attached to challenge completion.

**Classification basis:**
The PR "personal record / longest ride ever" is a discrete attained state recognized and marked separately from the underlying activity data, satisfying the Achievement invariant (personal-benchmark recognition). Challenge-completion digital trophies are recorded attainments the Challenge entry notes may also create an achievement. This entry is kept distinct from Milestone: the Milestone entry covers the activity-count trophy case, while Achievement covers the personal-record and challenge-completion recognitions. Exclusion checks: these are recorded recognitions of satisfied criteria, not mere progress displays or level states.

**What is notable:**
The personal record is recognized against the user's own prior results (a personal-benchmark form) rather than against other users.

**Screenshot suggestions:**
The saved activity showing the "PR personal record, your longest ride ever" badge, which evidences a recorded attained state distinct from the raw activity stats.

### Group Membership · Supporting · strongly supported (presence)

**What was observed:**
"Clubs" appear as a tab in search and as a dedicated area under Groups. The transcript describes "a list of clubs available in our vicinity," searchable by location and sport type, "dozens if not hundreds." The main "Strava Club" is shown with "almost 7 million athletes." Creating a club walks through five steps: choosing club sport, choosing up to three descriptive tags ("just for fun, brand, organization, team, employee group, coach led, creator, event or race, local community, fundraising, tips and talk, identity group, something else"), customizing name, photo, and description, setting the club private or public ("if it is private, people must request permission to join your club and only admins can approve new members"), and setting location. After creation the club page shows sport, member count, type, insights, events, overviews, activities, stats, and posts. The user can create club events with attendance controls.

**How it is presented:**
A browsable and searchable directory of persistent clubs plus a creation flow, with a member roster count, public or private state, and admin approval for private clubs.

**Classification basis:**
The product maintains a persistent group with a membership relationship, and membership changes observable conditions (who can join, who can post to the club feed, admin approval for private clubs), satisfying the Group Membership core invariant. Sibling resolution: Community Space, Group Membership, and Clan / Guild are mutually exclusive. Applying the decision ladder, the transcript establishes maintained membership and governance (roster, public or private, admin approval) but does not clearly establish a collective group-owned state that member activity changes (the club page mentions "stats" and "activities," but whether these are a collective aggregate the members' activity alters, versus a list of members' individual activities, is not established). Absent an observed collective-owned state, the ladder selects Group Membership over Clan / Guild, and the presence of governance rules it out of Community Space. Exclusion checks per the Clan / Guild entry were applied: "maintained membership and governance alone selects Group Membership."

**What is notable:**
Clubs host events and posts and can be public or private with admin approval, and group challenge creation is placed behind the paywall.

**Screenshot suggestions:**
The club page showing member count, public or private state, and events, which evidences a maintained membership relationship and governance; the private-versus-public step in club creation.

### Advertisement Exposure · Supporting · strongly supported

**What was observed:**
Strava presents several promotional units for offerings beyond the current activity. The "April 400 minute run" challenge cross-promotes Runna, an app the narrator notes "Strava is cross promoting," with completion unlocking a "free two week Runna trial." In settings under training plans, "Runna by Strava" is promoted with plans that, when tapped, take the user to the App Store listing for Runna, the button carrying Runna's logo. Also in settings, a promotion reads "Apple Fitness+, get up to two free months of Apple Fitness+," leading to a redeem flow ("up to two months free, then $9.99 per month"). Partner challenges name commercial partners (Hoka, Brooks). Strava's own subscription is promoted through a persistent orange "upgrade" button centered at the top of the dashboard, recurring subscription cards ("better habits, smarter training, steady progress"), and a settings banner ("up to 60% in savings, Strava Run up to 60% off, start with a free four week trial").

**How it is presented:**
As cross-promotion cards, settings entries with partner logos, partner-named challenges, and a persistent house upgrade button and recurring subscription cards.

**Classification basis:**
Each unit's primary function is to promote a separate offering (Runna, Apple Fitness+, partner brands) or the product's own paid tier, distinguishable from the surrounding activity, satisfying the Advertisement Exposure invariant. The Runna and Apple Fitness+ placements are partner or third-party house-adjacent promotions; the subscription promos are house advertisement and upsell. Exclusion checks: per the entry, a paywall is not classified as advertisement merely for containing a purchase offer, so the classification rests on the distinct promotional units (Runna, Apple Fitness+, partner-named challenges, and the "60% off" and recurring subscription promo cards) rather than on the access restriction itself. No reward here is conditioned on viewing an advertisement, so Rewarded Advertisement does not apply (the Runna trial is conditioned on completing a challenge, not on ad engagement).

**What is notable:**
The app cross-promotes both a related running app (Runna) and a competing platform's service (Apple Fitness+); the narrator explicitly asks why Strava promotes Apple Fitness+, and the transcript does not resolve it.

**Screenshot suggestions:**
The settings Apple Fitness+ promotion and the Runna training-plans entry, each evidencing a distinct promotional unit for a separate offering.

## Observed behaviors without a library label

- Following and followers. The app maintains a directional follow relationship (follow suggestions, fan favorites, follower and following counts, "continue without adding anyone"). Following is a one-directional relationship rather than membership in a shared group entity, and matches no library entry after checking Group Membership (which excludes following).
- Suggested weekly goal. The dashboard offers a "suggested goal" where the user sets "how many activities per week you want completed." The transcript does not show whether the system issues this as a tracked, refreshing weekly objective instance with a completion state, so it is not confidently classified. It would match Challenge or Daily / Weekly Quests only if the app were observed to track completion and refresh the instance each week; the session did not show this.
- Weekly snapshot and Monday reset. The dashboard "weekly snapshot" (distance, time, elevation) and profile "this week" stats reset on Monday. This is a scheduled reset behavior rather than a distinct library mechanic; it is treated under the behavioral interpretation section.
- Comments. Leaving and viewing comments on feed activities is standard social commentary and matches no library entry on its own.

## Unrecognized mechanics

- `Kudos`. A one-tap approval reaction on another athlete's activity, with visible kudos counts, and a "Lost your top place" style social loop separate from comments. It maps to no existing library entry: it is not Gifting (no product-defined benefit changes the recipient's product state). Worth adding to library: Possibly.
- `Profile completion meter`. A "your profile is 80% complete" badge that prompts the user to finish steps such as adding a photo, persisting until steps are done ("the badge stays there because we didn't change anything"). It maps to no existing entry (it is not Set Collection, which excludes task checklists, and not Milestone). Worth adding to library: Possibly.
- `Gear usage tracking with threshold alert`. Adding shoes or a bike and setting a distance ("notify me when I have reached, for example, 700 kilometers," selectable from 400 to 1,200) at which the app notifies the user. It maps to no existing entry. Worth adding to library: Possibly.

## Locked or gated mechanics

Observed to exist but not reachable on the free tier this session, each opening the subscription paywall:

- Route building ("build your own route," "get started" opens the paywall; creating a route requires subscription).
- Segment leaderboards, advanced training analysis, and "best efforts" (tapping best efforts opens the paywall).
- Personalized workouts in the "maintain, build, explore, recover" set (each card ends at "start free trial").
- Group challenge creation and the "active" challenges tab ("design your own challenge" opens the paywall).
- Map layers: "winter" map type, weekly, nightly, and personal heat maps, terrain, and 3D view are locked and cannot be previewed.
- Personalized stat maps and additional map or stat options when saving an activity.
- Bookmarking an activity (opens the subscription link).
- Beacon for devices (Garmin or Apple Watch) requires subscription.

Classification of these is unresolved pending subscribed access.

## How mechanics connect

Recording an activity is the hub that feeds the other mechanics: a saved activity generates a Social Feed item (with kudos and comments), can trigger a Milestone (trophy case) and an Achievement (PR badge, first-activity trophy), contributes toward joined Challenges, and can place the user on segment Leaderboards and Comparative Rank standings. The Streak is advanced by the same qualifying event (logging an activity), linking retention to the core action. Challenges are frequently tied to Advertisement Exposure through partner branding (Runna, Hoka, Brooks) and to Leaderboards on each challenge page. Clubs (Group Membership) organize and host many challenges and carry their own feed. Following relationships determine much of what enters the Social Feed and who appears in the user's comparison and recommendation surfaces. These are structural relationships observed in the transcript, not claims about outcomes.

## Behavioral interpretation

Interpretive only. Every claim is tagged and separated from the observational record above. The presence of a mechanic is not evidence that it affects any user.

**Patterns instantiated:**

- Continuity Stakes (plausible): the Streak represents logging activity as a maintained weekly continuity state. Because the account had a zero-week streak, the breaking or protection rule was not observed, so this is not stronger than plausible.
- Visible Progress (strongly supported): the weekly snapshot, profile statistics, progress tab, streak count, and profile-completion badge convert activity into observable representations.
- Bounded Completable Goals (confirmed): the April challenges define success conditions and a completion boundary (April 1 to April 30, 2026).
- Milestone Recognition (strongly supported): the trophy case and the PR badge mark and recognize defined points and best efforts.
- Social Visibility (confirmed): activities, profiles, kudos, comments, leaderboards, and segment standings expose one actor's activity to others.
- Peer-Matched Comparison (strongly supported): segment "local legends," local rankings, and top-10 standings construct comparison sets scoped by locality and by 90-day windows.
- Scheduled Return Triggers and Fresh-Start Framing (plausible): weekly stat resets on Monday and month-scoped April challenges attach opportunities and resets to recurring windows. Alternative reading: these may primarily reflect ordinary weekly and monthly reporting rather than a return-inducing design.
- Limited-Time Opportunity (plausible): the April challenges and the free-trial "ending soon" framing carry defined time boundaries.
- Collective Belonging (plausible): clubs place the user within persistent named groups; an alternative reading is that clubs function mainly as event and content directories rather than as belonging structures, which the session did not resolve.
- Endowed Progress (plausible): the profile begins at "80% complete" before the user has uploaded a photo, presenting a partially filled state at entry. Alternative: this may simply reflect that most fields were already completed during onboarding.
- Contextual Education (plausible): question-mark tooltips ("why upload a profile photo?") and inline explanations attach guidance to specific decisions.

**Obstacles the design appears to address (hypotheses about apparent aims, not claims about users):**

- No Reason to Return Today (plausible): the Streak, weekly snapshot reset, month-bounded challenges, and notification settings create current-period reasons to return. Alternative: Strava's use may be episodic and activity-driven, with returns tied to actually exercising rather than to these surfaces.
- Isolation (plausible): the feed, kudos, following, clubs, and find-friends steps place solitary activity in a social context. Alternative: some users may prefer private, solo tracking, and the app supports extensive privacy controls, so the social layer is not decisive evidence of an isolation aim.
- Progress Is Invisible (plausible): statistics, the progress tab, and the trophy case surface advancement. Alternative: these may serve informational reporting rather than address a perceived visibility gap.
- The Goal Is Too Distant (plausible): month-bounded challenges and near-term trophy thresholds (first, third, fifth activity) provide nearer endpoints. Alternative: these may be ordinary content rather than a response to distance-to-goal.

**Principles (calibrated language only):**

- Social Comparison (plausible): the app creates conditions consistent with Social Comparison through segment leaderboards, local legends, and top-10 standings. A competing reading is informational benchmarking against local routes.
- Social Proof (plausible): participant counts ("more than 1,175,000 athletes have already joined") and "150+ million active people" create conditions consistent with Social Proof. Alternative: these figures may function as scale or credibility information.
- Loss Aversion (weakly supported): the Streak and the "lost CR" notification establish states that can be lost, creating conditions consistent with Loss Aversion; with a zero-week streak and no observed user response, this is weakly supported at most, and scarcity or simple status are alternatives.
- Relatedness Need (plausible): kudos, clubs, and following create conditions consistent with Relatedness Need. Alternative: visibility, status, or comparison could explain the same surfaces without belonging.
- Commitment and Consistency (plausible): user-set goals, joining challenges, and self-rated fitness level create conditions consistent with Commitment and Consistency. Alternative: these may be preference capture and personalization inputs.
- Scarcity and Urgency (plausible): April challenge deadlines and free-trial expiry create conditions consistent with Scarcity and Urgency. Alternative: some deadlines merely organize monthly cycles.

No effectiveness claims are made anywhere in this file.

## Session rhythm

The two sessions cover first install through onboarding (Session I) and a full walkthrough of the dashboard, profile, maps, segments, clubs, settings, recording, and the first saved activity (Session II). Session-end and return-trigger structures observed in the transcript include the weekly streak and weekly snapshot (a weekly return frame), the Monday reset of "this week" stats, month-bounded April challenges, and an extensive push-notification settings list (kudos, comments, "Lost CR / Lost Ratings when we lose our top place on a leaderboard," challenge progress and rewards, new followers, club activity, and marketing or subscription messages, some on by default). Recorded activity length in the session was very short (a "44 seconds" test ride). The transcripts do not establish natural session length for real use.

## Monetization observed

- Subscription presented during onboarding: annual at $79.99 per year; "Strava plus Runna" at $149.99 per year; "try it for 30 days free today," after which "in 30 days your annual subscription begins, you'll be charged $79.99."
- A recurring subscription card ("better habits, smarter training, steady progress") appears at multiple points (onboarding, after profile-photo completion, entering the trophy case, tapping locked features).
- A routes paywall: "try the very best of Strava, first month on us today," "free 30 day trial," "$80 per year, 79.99 per year after trial," with "44% [off]" cited on one screen.
- Payment path differences: tapping "start a free trial" routes out of the app to a browser checkout on strava.com showing "bill today €0, annual subscription 49.99." Tapping "pay in app" shows "79.99 per year through the App Store." The narrator observes the in-app versus web price difference (49.99 euros on the website versus 79.99 per year in-app) "was not communicated on the paywall," and that the highlighted "start free trial" button routes out of the app while the "pay in app" text "does not really look like a button." Apple Pay is the only payment method offered on the web checkout in this session.
- Settings promotions: "Strava Run up to 60% off, start with a free four week trial"; "Apple Fitness+, up to two months free, then $9.99 per month."
- Numerous feature gates route to the subscription paywall (see Locked or gated mechanics).

## What stood out

- The profile stat "hard reset on Monday" makes every suggested athlete display zero distance, hours, and elevation early in the week, which the narrator states "makes you feel as if nobody's using the app" while their historical graphs show consistent prior activity. This is a restatement of the observed Monday-reset behavior and the narrator's noted impression.
- The web-versus-app subscription price gap (49.99 euros on strava.com versus 79.99 per year in-app) was, per the transcript, not communicated on the paywall, and the interface highlighted the out-of-app "start free trial" path while leaving "pay in app" visually unmarked.
- The profile is presented as "80% complete" before the user uploads a photo, and the completion badge persists when the user skips the remaining step.
- The app cross-promotes both a related running app (Runna) and a competing service (Apple Fitness+); the transcript records the narrator asking why Strava promotes Apple Fitness+ and not resolving it.

## Analysis notes

- This is a first-install, free-tier account through the first recorded activity. Many tracking, mapping, leaderboard, and challenge-creation features are gated behind the subscription and were not exercised; their classification is unresolved pending subscribed access (see Locked or gated mechanics).
- Streak: presence is asserted from the product's framing; the continuity rule (what a missed week does) is not observed because the streak was at zero weeks.
- Clubs: classified as Group Membership via the mutually-exclusive sibling decision ladder. The transcript establishes maintained membership and governance but does not establish a collective group-owned state that member activity changes. If a club-level collective state (for example, an aggregate club stat or a group challenge total that members' activity feeds) were confirmed, the classification would move to Clan / Guild; the observation that would resolve this is whether the club page's "stats" are a collective aggregate altered by member activity rather than a list of members' individual activities.
- Milestone and Achievement are kept as separate entries with distinct evidence (activity-count trophy case for Milestone; PR and challenge-completion recognitions for Achievement); the entries permit co-classification of the trophy-case crossings, and Milestone is used there as the more precise label.
- The "suggested weekly goal" and "kudos," "profile completion," and "gear usage tracking" are recorded as an observed behavior and unrecognized mechanics respectively, because they match no library entry after checking; the suggested weekly goal in particular would need observed completion and refresh behavior to be classified as Challenge or Daily / Weekly Quests.
- Interface copy throughout is treated as the narrator's spoken rendering of the screen unless explicitly read aloud.
- Rule 7 exclusion: Appearance settings (light / dark / system default), default highlight image, and profile photo/bio fields were considered for Cosmetic Customization and excluded: these are product configuration and profile setup, not customization content, per the amended entry.
- Many features are subscription-gated and could not be exercised on this free account, so their behavior is described only as far as the transcript shows.
