# Liftoff

**ID:** liftoff
**Category:** Fitness / Strength Training
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 24 Feb 2026
**Last updated:** 20 May 2026
**Session state:** First install — 7-day free trial auto-granted, one workout completed in session

---

## Overview

Liftoff is a strength training app organized around a body rank progression system: each muscle group has its own rank (Bronze, Silver, Gold, Platinum, Diamond) determined by how many reps the user can perform of specific exercises. The app is heavily gamified — it includes a Duolingo-style mascot (Jimbo), an avatar customization system, a hard currency store (eggs), daily and weekly quests, a social feed, and leaderboards. The session covered onboarding in full, the complete in-app store, one completed workout, and the social/leaderboard systems.

---

## First impression

The onboarding opens with four slider screens and a Duolingo-style mascot (Jimbo) who guides the user through preference questions. The UI is explicitly described as resembling Duolingo throughout — progress bar at the top, character interactions, animated responses to selections. Going back mid-onboarding resets to the beginning. A rank assessment at the end of onboarding asks the user for their best lifts on one chosen exercise, awards an immediate rank (Bronze 3 in the session's case for pull-ups), and shows a predicted date to reach Gold ("we predict you can reach Gold by April 26th"). The paywall appears after this rank reveal. Dismissing it surfaces a "78% off forever" one-time offer. Dismissing that surfaces a third paywall asking for Apple Health access before account creation.

---

## Core activity

The experience centers on completing workouts to earn XP and advance muscle group ranks. Between workouts, users track body rank progress per muscle, compete in ranked leagues, browse a discovery and friends feed, log nutrition, manage an avatar, and spend eggs (premium currency) in the in-app store. The rank system makes every workout a contribution to a visible ranked position across multiple muscle groups simultaneously.

---

## Mechanics observed

### XP Leveling (`xp-leveling`) · Core

**What was observed:**
The body rank system is the primary progression mechanic. Each muscle group has an independent rank advancing through Bronze, Silver, Gold, Platinum, and Diamond. Performing exercises targeted at a muscle group fills that muscle's rank bar. After completing the pull-up rank assessment at onboarding, the session was assigned "Bronze 3" with a "top 76.23% of users" comparison.

The app also tracks an account-level progression. The home screen shows the avatar with a level indicator and a progress bar beneath it. After completing one workout, the session described the avatar's level slowly progressing forward. XP is awarded per workout. A Double XP Shake consumable (purchasable in the store for eggs) doubles XP earned during a single workout.

A body rank overview screen shows each muscle group's current rank and percentage fill toward the next rank. The "body graph" in the Ranks menu is described as showing per-muscle rank levels simultaneously.

**How it is presented:**
Body rank is the second tab in the bottom navigation (labeled Ranks). The account level appears on the home screen avatar. The rank assessment at onboarding was the first level-assignment moment — the user entered their pull-up count and received an immediate rank.

**What is notable:**
Per-muscle ranking rather than a single character level creates multiple simultaneous progression axes. A user who only trains chest will see chest rank advance while back rank stagnates, creating visible imbalance and implicit motivation to train lagging muscles. The "top 76.23%" percentile display at rank assignment puts the user's position in a social context immediately.

**Screenshot suggestions:**

`[Body rank overview screen showing multiple muscle groups each with their own Bronze/Silver/Gold rank indicator and percentage fill bars, with the "body graph" visual showing which muscles are high-ranked vs. lagging]`
*Documents the per-muscle rank structure as the primary XP progression axis.*

`[Onboarding rank reveal screen showing "Bronze 3 — top 76.23% — we predict you can reach Gold by April 26th" alongside the graph of predicted progress]*
*Documents the immediate rank assignment and social comparison framing at onboarding.*

---

### Leaderboards (`leaderboards`) · Core

**What was observed:**
Three leaderboard systems were described.

Ranked Leagues: users compete in leagues based on exercise performance. To participate, the user must rank 10 exercises first. The session described the leagues as visible but locked ("we need to rank 10 exercises to participate in ranked leagues"). Friends and global views are available. Regional leaderboard requires Pro.

Global and regional leaderboards: the transcript described viewing other players' profiles and ranks in the leaderboard section. Pro is required to see where the user stands in their region compared to others.

Friends leaderboard: accessible from the Friends tab in the bottom navigation. The session noted the social feed shows friends' workouts, their body ranks, and their streak data.

**How it is presented:**
Accessible via the Ranks tab in the bottom navigation. The league screen shows rank standings alongside individual muscle group leaderboards. A visual of ranked athletes scrolling was described on the paywall screen ("scrolling people where different users' rankings of different muscles and muscle groups are shown").

**What is notable:**
Requiring 10 ranked exercises before league participation is a deliberate onboarding gate — it creates a near-term goal (rank enough exercises to compete) while also ensuring new users have meaningful data before entering a competitive context.

---

### Achievements (`achievements`) · Supporting

**What was observed:**
Medals are the primary achievement display in Liftoff. Accessible from the profile screen, medals are described as named permanent markers: "there are medals that we can see and we can choose up to three medals that we are going to display on our profile." Some medals are described as "secret" — their conditions are not visible until earned. The profile allows selecting which earned medals to display.

The store also sells "profile banners" for cosmetic customization of the achievement display area.

**How it is presented:**
Medal display is on the profile screen, with up to three medals visible to others. Secret medals create discovery incentives. The profile also shows level, body rank summary, followers and following counts, and post history.

**Screenshot suggestions:**

`[Profile screen showing three displayed medals, the body rank summary, follower/following counts, and the option to select which medals to display — with a "secret" medal shown as a locked indicator]`
*Documents the achievement display system and the selective display mechanic.*

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Supporting

**What was observed:**
The quest system was described from the profile/quests section. Three categories were observed: daily quests, weekly quests, and referral quests. The session described tapping on a daily quest to claim it and receiving "eggs and experience points." One daily quest observed: "start a streak." The quest system was described as "completely gamified" in that context.

A "Welcome Quests" section was also described on the home screen: "wrap up your first day on Liftoff and earn a special reward — add the Liftoff widget on your home screen and complete your first workout." These appear to be onboarding completion quests with described rewards.

**How it is presented:**
Quests are accessible from the profile section. The home screen also shows a getting-started section with first-day quests prominently featured.

---

### Variable Reward (`variable-reward`) · Supporting

**What was observed:**
The Liftoff Store contains consumables and deals that can be purchased with eggs. The session described: "there are consumables and deals — I've purchased Double XP Shake." The store also contains "Pro exclusive deals." When viewing these deals, the session noted that tapping a pro exclusive deal opened a pro upgrade prompt.

Deal refreshing is also available: "you can refresh deals by using up 10 eggs" — paying eggs to get a new set of deals. This is a variable reward surface because the refreshed deal contents are unknown before spending the eggs.

The rank assessment at onboarding is also a constrained variable reward: the user enters their rep count and receives a rank that was unknown before the assessment.

**How it is presented:**
The store is accessible from the profile → Store. Deals are shown in a grid with egg prices. The "Double XP Shake" was described as consumed by using it during a workout.

---

### Cosmetics (`cosmetics`) · Supporting

**What was observed:**
The store contains a full cosmetics catalogue purchasable with eggs:

- Avatar customization: the session described choosing an avatar during onboarding from six options (different ethnicities, ages). Further customization is available in the store and profile ("don't be shy to give yourself any look you want").
- Profile banners: visual backgrounds for the profile display.
- Cosmic borders: animated borders around the user's avatar image.
- Elemental borders, Level borders: cosmetic border variants.
- Prismatic themes: app color theme customizations. "Color themes, special themes, seasonal themes."
- Reactions: custom emoji reactions.

Egg prices were described: 100 eggs for $0.99, 14,000 eggs for $99.99.

**How it is presented:**
The store is organized with cosmetics visible alongside consumables. The avatar and profile customization sections appear at profile setup and in the profile screen edit area.

**What is notable:**
The full cosmetics and consumables store, with hard currency (eggs) and a refresh mechanic, makes Liftoff the most fully gamified monetization architecture among the fitness apps in the library. The avatar chosen at onboarding is presented as a personalization mechanic ("it is a reflection of you") before its role as a cosmetic system becomes apparent.

---

### Social Feed (`social-feed`) · Supporting

**What was observed:**
The home screen has three feed tabs: For You, Friends, and Discovery. Each shows user-generated content: workouts completed, body rank updates, duration and volume stats, and photos (if uploaded). After completing a workout, the session described posting it to the Discovery feed with an added photo and caption, and tagging friends.

Post-workout sharing prompts the user to "add media, add a photo, add a caption, tag friends, choose consumables, post to Discovery, post to Strava as well." The feed shows reaction options on posts from others. People are described as "putting up images of their avatars, how long their exercise durations are, what is their streak — boys and girls combined." Report functionality is available on posts.

The Discovery feed also integrates with Strava: a Liftoff x Strava integration screen appeared at the end of onboarding prompting the user to link their accounts and share workouts across platforms.

**How it is presented:**
Three-tab feed on the home screen. Post-workout sharing is prompted immediately on saving a workout, making social posting a natural extension of the workout completion flow.

---

### Streak (`streak`) · Shallow

**What was observed:**
A streak indicator was visible on the home screen: a fire icon with a number next to it ("there's fire which has a number 1 next to it"). The description was brief and appeared in the home screen layout description rather than in a dedicated interaction. One daily quest was described as "start a streak," suggesting streak maintenance is a quest-driven behavior.

The streak was not described in further detail — no reset mechanic, no protection mechanic, and no named milestone rewards were described.

**How it is presented:**
Fire icon in the home screen top bar. Also referenced in the social feed context (other users share their streak as a post element).

---

### Challenges (`challenges`) · Shallow

**What was observed:**
The onboarding opening screens showed badges with the description "reach your fitness goals by climbing the ranks" and animated badges with wings. This framing suggests rank achievement is positioned as a challenge, but no explicit opt-in challenge structure with a visible endpoint and reward was described beyond the rank assessment.

The "get my ranks" goal option in the onboarding goal screen was described as producing: "liftoff was made for you — get ready to step into the world of ranked lifting." This implies a challenge-style motivational framing around the rank system, but the specific mechanics of an opt-in challenge with endpoint and reward were not described.

Logged at Shallow based on the rank-as-challenge framing visible in the onboarding slides, with insufficient evidence for a stronger development level.

---

## Mechanics not observed

**Season Pass:** Not described. A Pro subscription exists but no dual-tier advancement track with in-app action advancement was described.

**Clans-Guilds:** No group with shared goals or collective rewards was described. The friends system and referral mechanic are social but not cooperative in the clans/guilds sense.

**Limited-Time Events:** Not described.

**Ads:** Not described. The monetization model is subscription (Pro) and in-app purchases (eggs).

---

## How mechanics connect

The body rank system (XP leveling) drives everything else. Every workout advances ranks. Ranks determine league eligibility (leaderboards). Rank percentile appears in the social feed (social feed). Achievements (medals) mark rank milestones. Quests direct which workouts to complete to advance specific ranks. The Double XP Shake (variable reward) accelerates rank advancement by doubling the XP from a single workout session.

The egg economy connects the cosmetics, variable reward, and quests systems. Eggs are earned from completing quests and are spent in the store on cosmetics, consumables (XP shakes, streak restorers), and deal refreshes. This makes quest completion the primary free path to cosmetic customization.

---

## Session rhythm

The session covered the full onboarding flow and one workout. Session length for the workout was not stated. The onboarding alone was described as covering many screens over a substantial time before reaching the home screen.

Return pressure comes from the daily quest reset, streak maintenance (fire icon on home screen), the rank progression bars showing how close the user is to the next rank per muscle group, and league rank standings.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Liftoff Pro (7-day trial) | Free (auto-granted) | Full Pro access for 7 days; then $79.99/year ($6.67/month) |
| Liftoff Pro (one-time offer) | $39.99/year | 78% off framing (actual 50% off) — escalating discount after paywall dismissal |
| 30-day trial | $1.99 | Extended trial option on the paywall screen |
| 100 eggs | $0.99 | In-app currency for store purchases |
| 14,000 eggs | $99.99 | Large egg bundle |
| Double XP Shake (store) | Eggs (price not stated) | Doubles XP earned during one workout session; consumed on use |
| Streak restorer (store) | Eggs (price not stated) | Restores a broken streak |
| Profile banners (store) | Eggs (price not stated) | Profile visual customization |
| Cosmic borders (store) | Eggs (price not stated) | Animated avatar frame |
| Prismatic themes (store) | Eggs (price not stated) | App color theme |

---

## What stood out

1. The body rank system assigns per-muscle rankings rather than a single character level. After the onboarding pull-up assessment, the session received "Bronze 3 — top 76.23% of users" immediately. The percentile framing puts the user in a competitive context before they have even opened the app for the first time.

2. The entire onboarding restarts from the beginning if the user taps the back button. The session confirmed this explicitly: "if I go back, it will bring me to the landing page and my progress will not be recorded." On a second attempt, the transcript noted "the way things are ordered change" — options were reshuffled between attempts.

3. The store is described as a "full out gamified store with cosmetics and consumables." It contains XP shakes, streak restorers, avatar borders, app themes, and a deal refresh mechanic (10 eggs to get new deals). This is the most developed in-app cosmetics and consumables store among the fitness apps in the library.

4. The "one-time offer" after paywall dismissal claimed "78% off" but the math described (from $79.99 to $39.99) is approximately 50% off. The transcript noted this explicitly: "I'm not sure how this is 78% off forever — previous price was $79.99, new price is $39.99, which is 50%, not 78% off."

---

## Analysis notes

One session. First install with auto-granted 7-day Pro trial. The full onboarding, one workout, the store, the social feed, the leaderboard section, and the quest system were all covered. The nutrition module was briefly described (add meals with a photo, track macros with Pro) but not explored in depth. Leagues require 10 ranked exercises to unlock — the session had ranked one exercise (pull-ups) and could see the leagues screen but not participate. The Strava integration was described as a prompt at the end of onboarding but was not connected during the session.

---

## Category context

Duolingo was explicitly compared in the transcript: "the whole UI is very reminiscent of Duolingo with the progress bar at the top and the ways in which we can select," and "very similar to Duolingo, the way this character was built and looks like, especially when it comes to the head and the face."

---

## Unrecognized mechanics

### `hard-currency` (Eggs)
**What was observed:** Eggs are purchased with real money ($0.99 for 100, $99.99 for 14,000) and spent directly on store items (consumables, cosmetics, deal refreshes). No intermediate conversion step.
**Why it does not map to an existing mechanic:** Not `credits-tokens` — eggs are purchased and spent directly. Hard currency as defined in the library.
**Worth adding to library:** Flagged as a known library gap.

### `per-muscle-rank-system`
**What was observed:** Each muscle group has an independent rank (Bronze 3 through Diamond) based on the user's performance on exercises targeting that muscle. Ranks advance by completing relevant workouts. The body graph visualizes all muscle ranks simultaneously, showing which muscles are high-ranked and which are lagging. League eligibility requires ranking 10 exercises. The percentile display ("top 76.23%") puts each rank in a population context.
**Why it does not map to an existing mechanic:** Not `xp-leveling` in standard form — the standard definition uses a single XP accumulation toward a single level threshold. The per-muscle rank system is a multi-axis leveling structure where each body part has its own level, its own progression bar, and its own social comparison point. This creates dramatically more progression axes than a single-character level.
**Worth adding to library:** Possibly — as a variant of xp-leveling worth naming for its multi-axis structure.

### `soft-currency` (XP, Workout Volume)
**What was observed:** XP is earned from completing workouts and spent implicitly on advancing account level and body ranks. Workout volume (sets, reps, weight) is the underlying metric that drives body rank advancement. Neither is purchased.
**Worth adding to library:** Flagged as a known library gap.
