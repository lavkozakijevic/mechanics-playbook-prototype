# Wispr Flow

**ID:** wispr-flow
**Category:** Productivity / Voice Dictation
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 26 Apr 2026
**Last updated:** 15 May 2026
**Session state:** First install — new account, onboarding through full app exploration in a single session

---

## Overview

Wispr Flow is a voice-first keyboard app that replaces the iOS system keyboard with an AI-powered dictation interface. Users speak and Flow transcribes, reformats, and adapts the output to different tones (formal, casual, very casual, excited). It functions across all apps via the custom keyboard mechanism. The app offers a free Basic tier (1,000 words/week on iOS, 2,000/week on desktop) and a paid Pro tier (unlimited words, all devices, command mode). The session covered onboarding through full app exploration while attempting to exhaust the free word limit to unlock a stats feature.

---

## First impression

Onboarding runs across four distinct sections — approximately 15+ screens total, taking over 10 minutes — before the user sees the home screen. Section 1: use-case selection, product demo video, sign-in. Section 2: keyboard setup in iOS Settings (with a floating tutorial video that obscured the settings screen), privacy consent, test dictation (bugged — scrolling through transcribed text broke the recording). Section 3: data sharing choice (privacy mode on by default; opt-in to share data for model training), language confirmation, default tone selection, notification opt-in, attribution question. Section 4: paywall screen delivering a 2-week Pro trial ("exclusive offer — you've unlocked unlimited words for two weeks — no credit card required"), immediately followed by a 5-star rating request.

The privacy framing is notable: onboarding opens with "we never store or sell what you say" and "100% privacy," then later presents a choice screen explicitly asking the user to opt into sharing audio, transcripts, and edits for model training. Privacy mode (no sharing) is the default, but the sequence creates a tension between the early assurance and the later opt-in request.

---

## Core activity

Users activate the Wispr Flow keyboard within any iOS app, tap-and-hold the dictation button, speak, and receive transcribed and formatted text inserted into the active text field. Between dictation sessions, users manage their personal dictionary (custom words), create snippets (reusable text templates), review transcription history, and take voice notes. Streak maintenance and word-count milestones provide lightweight engagement framing around what is otherwise a pure utility activity.

---

## Mechanics observed

### Streak (`streak`) · Supporting

**What was observed:**
A streak counter appears on the home screen after the user completes their first dictation session during onboarding. At the point of first appearance, a full-screen celebration shows "one day streak — continue dictating for the next five days so Flow can adapt to you." The framing is explicitly functional: the streak is not positioned as a retention mechanic but as a product improvement mechanic — "Flow will adapt to you" over five consecutive days of use.

After using the app further in the session (reaching 674 words dictated), the home screen displayed a streak card labeled "Day one — momentum begins" alongside the word count card, words-per-minute card, and postcards equivalent card.

The streak counter was not described as having a "catch-up" mechanic, a reset protection, or a visible day calendar — only the day count and the forward-looking framing.

**How it is presented:**
The streak celebration screen appears at the conclusion of the onboarding test dictation, before the user has seen the home screen. On the home screen, the streak appears as one of four summary cards. The streak milestone label ("momentum begins" for day 1) suggests future milestones have named labels.

**What is notable:**
Framing the streak as a product improvement mechanism ("so Flow can adapt to you") is the only instance in the library where a streak is explicitly justified to the user as a functional benefit rather than a retention incentive. The stated 5-day duration before "Flow has adapted" gives the streak a defined endpoint, making it a bounded commitment rather than an open-ended consecutive-day requirement. This is close to a `behavioral-commitment-prompt` (as flagged in the Insight Timer analysis) but is delivered passively on screen rather than asking the user to tap "I'm committed."

**Screenshot suggestions:**

`[One-day streak celebration screen showing "1 day streak — continue dictating for the next five days so Flow can adapt to you" with the Continue button]`
*Documents the functional framing of the streak mechanic and the stated 5-day adaptation endpoint.*

`[Home screen showing all four summary cards: streak (Day 1, momentum begins), word count (674 words, 13 postcards), speed (129 wpm, top 2%), and trial status]`
*Documents the home screen summary card layout and the streak card within it.*

---

### Achievements (`achievements`) · Supporting

**What was observed:**
Two distinct achievement-adjacent display surfaces were observed:

**Word count milestone:** A stated threshold of 500 words would "unlock stats" — "276 more to unlock your speaking speed" was shown as a progress prompt. After reaching approximately 674 words, the home screen displayed: "674 words you've dictated so far — you've written 13 postcards" (framing 674 words as equivalent to 13 postcards, a real-world equivalence anchor). The stats unlock itself — speaking speed (words per minute) — appeared on the home screen: "129 wpm — this is your words per minute speed — top 2% of all Flow users." The percentile ranking ("top 2%") is a comparative achievement display.

**Postcards equivalent:** The "13 postcards" framing converts a raw word count into a tangible real-world equivalent. This is a named, permanent production metric rather than a named badge — the transcript did not describe a named badge system with visual markers.

**Profile stats:** The account screen showed words per minute and words used in the trial period. These are permanent accumulated stats visible to the user on their own profile.

**How it is presented:**
The word count prompt ("276 more to unlock your stats") appears on the home screen and in the account section before the threshold is reached. After reaching the threshold, the wpm stat and percentile rank appear as a home screen card. The postcards framing appears on the word count card.

**What is notable:**
The percentile framing ("top 2% of all Flow users") is a leaderboard-adjacent achievement — it positions the user's performance relative to all other users without showing a ranked list. It is a motivational comparison metric embedded in a single number rather than a visible ranking table. This is the clearest social comparison mechanic observed in a productivity app in the library.

**Screenshot suggestions:**

`[Home screen word count card showing "674 words dictated — you've written 13 postcards" alongside the 129 wpm card with "top 2% of all Flow users" label]`
*Documents the postcards equivalence framing and the percentile comparative metric.*

---

### Gifting (`gifting`) · Shallow

**What was observed:**
A "Refer a Friend" feature is accessible from the sidebar. Mechanics: the referring user shares a unique invite link; the recipient who signs up using the link receives one free month of Flow Pro (unlimited words). The referring user's benefit was not explicitly stated in the transcript. A pre-designed share card was generated: "Love invited you to join Flow Pro — get one month of unlimited words — claim now for Wispr Flow." The card can be shared via any iOS share sheet destination.

The snippet system also contains a pre-populated "My Flow Referral" snippet with the referral link ready to paste — lowering the friction of referral to a single tap in any text field.

**How it is presented:**
"Refer a Friend" is in the sidebar under account options. Tapping it generates a shareable card and invite link immediately. The referral snippet in the Snippets tab makes the referral link available as a one-tap paste anywhere in the app.

**What is notable:**
The one-month Pro trial gifted to the recipient is more generous than the two-week trial given to new users through normal onboarding, creating a material incentive for referral over organic discovery. The pre-populated referral snippet in the snippets tab is a distribution mechanism embedded in the product's core utility (snippet management) rather than a separate referral section only — a subtle and effective integration.

---

## Mechanics not observed

**Daily Login Reward:** No reward for opening the app each day was described beyond the streak counter. No calendar, no daily collectible item.

**Variable Reward:** No pull, pack-open, or spin mechanic with unknown outcomes was described.

**Season Pass:** No dual-tier advancement track progressed through in-app actions was described. The free/pro distinction is a subscription gate, not a season pass.

**Leaderboards:** No ranked list with the user's visible position against named others was described. The "top 2%" percentile is comparative but not a leaderboard.

**Challenges / Clans-Guilds / Ads / Piggy Bank / Set Collection / Energy-Lives / Limited-Time Events:** None observed.

---

## How mechanics connect

**Streak drives the functional product pitch.** The streak's stated purpose — "Flow adapts to you" over 5 days — connects retention behavior (return daily) to product value (better transcription). This is the only mechanic in the library where a streak is explicitly justified as a feature benefit rather than a game mechanic.

**Word count milestone unlocks social comparison.** Using the app to reach 500 words unlocks the wpm stat and percentile ranking. The mechanic sequence is: use the product → cross a usage threshold → receive a comparative metric that positions you favorably among all users. This turns product usage into an achievement with a social signal attached.

**The referral snippet embeds the gifting mechanic in core utility.** The referral link appearing as a pre-populated snippet means every time the user opens their snippet library, the referral is visible — integrating the growth mechanic into the workflow tool rather than burying it in settings.

---

## Session rhythm

Wispr Flow is a productivity utility — session rhythm is driven by task needs (messages to write, emails to send, notes to capture) rather than engagement design. There is no artificial session length target.

**Return pressure:** Streak (daily dictation requirement), 5-day adaptation framing (stated endpoint creates a short-term commitment window), trial countdown (14 days → 13 days during session, creating urgency toward a Pro decision).

**Word count pressure:** The free Basic tier (1,000 words/week) creates light session pressure — users aware of their word budget may feel motivated to use it rather than letting it expire. The word count card on the home screen makes the running total visible at all times.

**Onboarding bugs observed:** Two bugs affected the session — (1) scrolling through transcribed text during the onboarding test broke the recording flow; (2) tapping the settings button opened settings multiple times in the navigation stack, requiring multiple back presses to exit. Both are onboarding-stage friction points that may increase drop-off.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Flow Pro (annual) | $143.99/year (~$12/month) | Unlimited words on all devices, prioritized feature requests, early access, command mode (desktop) |
| Flow Pro (monthly) | $15/month | Same as annual, month-to-month |
| Flow Pro (2-week trial) | Free (no credit card) | Delivered automatically at onboarding completion to all new users |
| Flow Basic | Free | 1,000 words/week on iOS, 2,000/week on desktop, lightning fast dictation, dictionary, 100+ languages |
| Referral (gifted to recipient) | Free (for recipient) | 1 month of Flow Pro — more generous than the standard 2-week new-user trial |

No in-app currency purchases, no consumable items, no ad placements, and no limited-time purchase offers were described. Monetization is subscription-only.

---

## What stood out

1. **The streak is framed as a product improvement mechanism, not a retention mechanic.** "Continue dictating for the next five days so Flow can adapt to you" positions the streak as a functional benefit to the user's transcription quality rather than a game incentive. This is the only instance in the library where a streak is justified on product grounds rather than engagement grounds — and the stated 5-day endpoint makes it a bounded, purposeful commitment rather than an open-ended streak.

2. **The "top 2% of all Flow users" percentile emerges from hitting a word-count threshold, not from any competitive entry.** The user didn't enter a competition — they just used the product. After crossing 500 words, the wpm stat appeared with a percentile ranking that positioned their speaking speed favorably among all users. This is a social comparison metric that rewards usage with a flattering comparative signal, delivered passively.

3. **Privacy is asserted early and then complicated mid-onboarding.** The first screens state "we never store or sell what you say" and "100% privacy." Several screens later, a data-sharing consent screen explains that by default, privacy mode is on — but audio, transcripts, and edits can be shared to improve the model. The choice is real and the default is privacy-preserving, but the early absolute assurances and the later nuanced opt-in create a tension that the transcript flagged explicitly: "at the very start it told us that it's not going to be remembering what we're saying... and now this pop up says your data is safe, but now choose how Flow will handle your voice and text."

4. **The referral gift (1 month Pro) is more generous than the standard new-user trial (2 weeks Pro).** A user who discovers Wispr Flow through a friend's referral receives twice as much trial access as one who discovers it organically. This makes referral the highest-value acquisition path for recipients and creates a real material incentive for the referring user to share.

---

## Analysis notes

One session. First install through full app exploration. The session was constrained by an unusual recording challenge — Wispr Flow uses the iOS custom keyboard mechanism, which conflicts with Granola's audio recording when both are active simultaneously. The transcript noted this at the start: "that's going to be tricky because Whisper Flow is an audio app." Despite this, the session covered onboarding, full home screen exploration, dictionary, snippets, style, notes, account settings, sidebar, and the referral mechanic. The stats feature (wpm, percentile) was successfully unlocked by using the app extensively during the session — the transcript's decision to keep dictating until reaching the word threshold provided the only evidence of what the unlocked stats look like. Two distinct bugs were encountered during the session: the onboarding dictation test breaking on scroll, and the settings screen opening multiple times in the navigation stack.

---

## Category context

No explicit comparisons to other voice dictation apps were made in the transcript. The "4x faster than typing" claim in onboarding was presented as the core value proposition without referencing competitors.

---

## Unrecognized mechanics

### `usage-milestone-unlock`
**What was observed:** After the user dictated approximately 500 words, a previously inaccessible feature (speaking speed stats and percentile ranking) appeared on the home screen. The threshold was communicated in advance as a progress prompt: "276 more to unlock your speaking speed." No purchase was required. The unlock was triggered purely by cumulative product usage crossing a defined word-count threshold. The unlocked content (wpm + "top 2% of all Flow users") provided a comparative social metric that was not available before the threshold.
**Why it does not map to an existing mechanic:** Not `xp-leveling` — there is no XP accumulation bar or named level system; the unlock is a single threshold on a single metric (cumulative words dictated). Not `achievements` — no named badge or permanent marker was displayed; the unlock was a feature reveal rather than a named accomplishment. Not `freemium-content-gating` — the content was not gated behind a paywall; it was gated behind a usage threshold on the free tier. This is a usage-triggered feature reveal: a specific in-app feature is unavailable until the user has used the product enough to generate sufficient data to make that feature meaningful. The design rationale is sound (you can't show wpm stats before the user has dictated enough to establish their speed), but the implementation functions as an engagement mechanic — it gives users a defined goal to work toward within the free tier.
**Worth adding to library:** Possibly — usage-milestone feature unlocks (features that become available after crossing a cumulative usage threshold, not a paywall or level threshold) appear in productivity and wellness apps where features require a data foundation to be meaningful (e.g., "complete 7 workouts to unlock your fitness profile").

### `real-world-equivalence-framing`
**What was observed:** The word count metric on the home screen was displayed as "674 words you've dictated so far — you've written 13 postcards." The raw word count (674) was translated into a tangible real-world equivalent (13 postcards) to make the number meaningful. No other app in the library used this framing technique for a usage metric.
**Why it does not map to an existing mechanic:** This is a display and framing choice rather than a mechanic — it does not trigger a reward, gate content, or change behavior. However, it is a deliberate design pattern for making abstract metrics concrete and emotionally resonant. Worth noting as a product design observation rather than a mechanic library entry.
**Worth adding to library:** No — this is a display convention, not a mechanic. Worth noting in any analysis of how productivity apps communicate progress metrics.

### `subscription-trial-auto-grant`
**What was observed:** At the conclusion of onboarding — before the user had used the app for any real task — a popup appeared stating "exclusive offer — you've unlocked unlimited words for two weeks — enjoy two weeks of Flow Pro access on us — no credit card required." The trial was granted automatically to all new users completing onboarding; the user did not apply for it, request it, or perform any action to earn it. The popup could not be dismissed — tapping "get started" was the only option. The trial countdown was visible throughout the session (14 days → 13 days).
**Why it does not map to an existing mechanic:** Not `first-purchase-bonus` — no purchase is involved. Not `daily-login-reward` — it is a one-time grant, not a daily recurring item. Not `limited-time-events` — it is a subscription trial, not an engagement event. This is a standard SaaS trial mechanic (auto-grant a time-limited full-access trial to all new users to drive conversion) implemented within a mobile app context. The "exclusive offer" framing and the non-dismissable popup design are notable — framing a universal offer as exclusive creates a perception of value without requiring any selection criteria. The inability to dismiss the popup ensures 100% trial activation among users who complete onboarding.
**Worth adding to library:** Possibly — the auto-grant subscription trial (universal, non-dismissable, framed as exclusive) is a SaaS onboarding pattern common enough in productivity apps to warrant naming, distinct from both free-tier access and earned rewards.
