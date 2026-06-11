# Orbit

**ID:** orbit
**Category:** Finance / Subscription Management
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 04 Jun 2026
**Last updated:** 04 Jun 2026
**Session state:** First install — free tier, analyzed partially via Mobin screenshots (January 2026). Lifetime purchase not made.

---

## Overview

Orbit is a subscription management app. Users add, track, and categorize their recurring subscriptions, view a calendar of upcoming charges, and receive renewal reminders. The core value proposition is visibility: showing users how much they spend annually on subscriptions they may have forgotten. The app offers a one-time lifetime purchase (Orbit Plus, $24.99) in addition to the free tier. The session reviewed onboarding, the subscription catalogue, calendar view, and settings.

---

## First impression

Onboarding has no account creation — it proceeds directly through three screens explaining the product: the $2,000/year overspend statistic (sourced to C+R Research and Waterstone survey), a subscription selection screen with popular services pre-populated, and a yearly total calculation before the paywall. The yearly total is shown before sign-in, before any payment, and before any personal data is collected. The paywall appears third — after demonstrating value with a concrete dollar figure.

---

## Core activity

Users manually add subscription services (or import via bank statement screenshot, iCloud subscriptions screenshot, or email search) and review them in a list view organized by free trials and active subscriptions. A calendar view shows all upcoming charges by date with logos visible. Renewal reminders notify before charges. The primary action is adding and categorizing subscriptions and reviewing the monthly/annual total.

---

## Mechanics observed

No mechanics from the 24-mechanic framework were observed in this session.

The following candidates were considered and excluded:

**`achievements`:** No named badge system or permanent milestone markers were described.

**`streak`:** No consecutive-day counter was described.

**`challenges`:** No opt-in structured objective with a visible endpoint and reward was described.

**`set-collection`:** Subscription categories (streaming, music, gaming, etc.) and custom lists (personal, family, business) are organizational tools, not named sets with completion rewards.

---

## Mechanics not observed

Orbit is a subscription tracking utility with no engagement mechanics. The absence is consistent with the app's single-purpose design.

---

## Session rhythm

No return incentives beyond renewal notifications (timed to upcoming charge dates). Sessions are driven by new subscription additions or the approach of a billing date.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Orbit Plus (lifetime, early bird) | $24.99 (SGD, January 2026) | Magic import (scan screenshots/bank statements/email), custom lists, iCloud backup, search for logo, regular new features |
| Orbit Free | Free | Unlimited tracking (3 renewal reminders, multi-currency, widgets) |

Upgrade limit: free tier is capped at 3 renewal reminders (not unlimited subscriptions — the free tier allows unlimited tracking but limited reminders).

---

## What stood out

1. **The paywall is shown third — after demonstrating a concrete dollar value.** The flow is: explain the problem (overspend) → show the user their specific annual cost for selected subscriptions → then present the paid offer. The user sees their own overspend figure before being asked to pay. This is the most evidence-first paywall sequencing observed in the library.

2. **Price history is tracked per subscription.** Each subscription entry shows a price history tab with date-stamped price changes — a red upward arrow when a price increased, green downward arrow for decreases. Users can manually add historical prices. This is a product feature not seen in any other app in the library.

3. **iCloud subscription import uses a screenshot-based flow.** To import iCloud subscriptions, the user navigates to iPhone Settings → iCloud → screenshots their active subscription list, then shares it to Orbit. The app parses the screenshot rather than using an API. This circumvents the lack of an official iCloud subscriptions API with a user-manual workaround.

4. **Currency localization does not convert amounts.** The app localizes the currency symbol to the user's local currency but does not convert the underlying dollar amounts. A user in Serbia sees prices labeled in dinars but with the original USD values — the same number, different symbol. The transcript flagged this as a bug.

---

## Analysis notes

Session analyzed partially via Mobin screenshot walkthrough (January 2026) and partially from a live device check during the session. The transcript noted the localization bug discovered on the live device. The lifetime price was observed in January 2026 — the current price may differ. The "magic import" features (bank statement import, email search integration) are Plus-gated and were not tested.

---

## Category context

Orbit solves the same user problem that Starling Bank's subscription tracking feature addresses natively within a banking app — visibility into recurring charges. Starling shows subscriptions in the Scheduled payments tab for free, within the banking app, without requiring a separate subscription. Orbit is a standalone app requiring manual data entry (or screenshot import) to achieve the same visibility. This contrast is relevant for the banking feature benchmark report.

---

## Unrecognized mechanics

### `spend-shock-onboarding`
**What was observed:** The second onboarding screen presents a pre-populated list of popular subscription services (Netflix, Amazon Prime, Disney+, Spotify, YouTube Premium, HBO Max, Apple Music, Hulu, and others) with default monthly prices. As the user selects the services they use, a running total updates. Tapping "See my yearly total" shows a single large number — the combined annual cost of all selected subscriptions. The screen copy asks: "how many others are you paying for quietly in the background?" This precedes the paywall and any request for personal information.
**Why it does not map to an existing mechanic:** Not `achievements` — no marker is earned. Not `challenges` — no structured objective. The spend-shock onboarding is a product-specific acquisition technique: it uses the user's own (approximate) subscription spend as the hook, creating an emotional response (surprise, concern) that motivates the product trial before the paywall appears. It is the most systematic implementation of this pattern in the library — similar in spirit to the Wise competitor comparison table (show the user a concrete cost before asking for anything) but applied to the user's own behavior rather than a competitor's pricing.
**Worth adding to library:** Possibly — the "show the user their own cost before asking for anything" onboarding pattern appears in Orbit (yearly subscription spend), Wise (competitor transfer cost comparison), and EveryDollar (budget gap visualization) and is worth naming as a distinct acquisition design pattern for finance and utility apps.

### `price-history-tracker`
**What was observed:** Each subscription entry in Orbit has a price history section showing date-stamped price changes with directional arrows (red up for increases, green down for decreases). Users can manually add historical prices. The tracker preserves the record of when a service raised its price and by how much.
**Why it does not map to an existing mechanic:** Product feature, not an engagement mechanic. Worth noting for the banking feature benchmark report as a data investment retention mechanic — users who have maintained price histories for their subscriptions have invested data that would be lost on switching apps.
**Worth adding to library:** No — product feature.
