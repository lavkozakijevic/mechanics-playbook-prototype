# Dave

**ID:** dave
**Category:** Finance / Neo-bank + Cash Advance
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 03 Jun 2026
**Last updated:** 04 Jun 2026
**Session state:** Analyzed via Mobin screenshot walkthrough. US market only. First install flow reviewed.

---

## Overview

Dave is a US fintech app primarily positioned around interest-free cash advances (up to $500). It combines a checking account, a goals savings product, a cash advance feature (Extra Cash), and income-generating side features (surveys, side hustle job listings). A $1/month membership fee covers the core product. The session reviewed onboarding, the checking account, goals, Extra Cash, and the Grow section (surveys and side hustle).

---

## First impression

Sign-up requires email, password, and phone verification. Face ID and a four-digit passcode are set up before bank connection. Bank connection via Plaid is requested for "determining the best approval amount" for cash advances. After connecting, the Extra Cash cash advance feature is the primary product hook. Account setup prompts opening a Dave Checking account. A direct deposit form generator (send HR a form to switch payroll directly from the app) is a notable onboarding utility feature.

---

## Core activity

Dave users maintain a checking account, take cash advances when needed (Extra Cash), and save toward goals. Between financial events, users can earn money via surveys, browse part-time/gig job listings, and track roundups into a Goals savings account. The Extra Cash cash advance feature is the primary product differentiator — the rest of the product (checking, goals, surveys) supports the retention case around the advance product.

---

## Mechanics observed

### Piggy Bank (`piggy-bank`) · Supporting

**What was observed:**
Dave's roundup mechanic deposits spare change from Dave debit card purchases into a Goals account. "Save every time you spend with Roundup — round up purchases to the nearest dollar — every time you use your Dave debit card, roundups automatically roll into a Goals account." The accumulated spare change appears in the Goals section as a savings balance toward a named goal (default: $75). The goal has a progress bar showing current savings vs. the goal amount.

The distinction from the standard piggy bank: the Dave roundup does not require a purchase to unlock — it accumulates and is visible in the Goals section. The mechanics of triggering a transfer or unlock were not described in detail. Logged at Supporting given the passive accumulation pattern is clear, though the unlock mechanic is less defined than in a standard piggy bank implementation (cf. Solitaire Grand Harvest's Peggy).

**How it is presented:**
Roundup setup is part of the checking account opening flow. The Goals screen shows current savings, a progress bar, a roundup toggle, and a "set recurring deposit" button.

---

### Variable Reward (`variable-reward`) · Shallow

**What was observed:**
Dave's survey section (in the Grow tab) presents surveys with variable compensation: "$0.44 for 8 minutes," "$0.97 for 14 minutes," "$1.16 for 10 minutes." Completing a survey is not guaranteed — users may be screened out partway through with a partial reward. Surveys appear and disappear as they become available, making the survey list itself a variable supply of earning opportunities.

Logged at Shallow because the survey compensation is disclosed upfront (the amount is shown before starting) but the outcome (full reward vs. partial reward on screening) is uncertain. The framing is income generation rather than reward opening.

---

### Gifting (`gifting`) · Shallow

**What was observed:**
A referral mechanic appears prominently in Settings — described as the top item in the settings screen, "big, prominent, very top." Framing: "Earn up to $100 more on your second Extra Cash advance. When you and your friend repay an advance, you'll get 20% more next time."

The reward is not cash paid directly — it is a 20% boost on the user's next Extra Cash advance limit. The transcript noted this explicitly: "You don't get money directly, you don't get any gift, you get more money for the next extra cash advance."

The referral is framed as helping friends: "Help out your friends and family" is step 3 of the referral flow. The friend must also take and repay an advance (not just sign up) for the reward to trigger. Boost expires after 60 days.

Logged at Shallow because the reward is a future advance increase for the referring user (not a sent item to another user) and requires both parties to complete a financial action. The bilateral completion requirement means this is more of an incentive alignment mechanic than a gift.

---

## Mechanics not observed

**Streak:** No consecutive-day counter was described.

**Daily Login Reward:** No daily reward calendar or daily claim mechanic was described.

**Achievements:** No named badge system or permanent milestone marker was described.

**Season Pass:** No dual-tier advancement track was described. The $1/month membership is a flat fee, not a tiered subscription.

**Leaderboards:** No ranked list was described.

---

## Session rhythm

Dave's return cadence is driven by paycheck timing (the Extra Cash advance settles on next paycheck), survey availability (new surveys appear periodically in the Grow tab), and roundup accumulation (passive, visible in Goals). Low balance alerts (configurable to notify when predicted balance falls below $40) are the primary push notification return trigger.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Dave Membership | $1/month | Low balance alerts, budgeting tools, bank connection, Extra Cash access |
| Extra Cash advance (standard) | No fee (2–3 day delivery) | Up to $500 cash advance, settles on next paycheck |
| Extra Cash advance (instant) | Small fee (amount not stated) | Instant delivery of advance |
| Dave Checking account | Free | No minimum, no overdraft fees, 4% APY, 37,000+ fee-free ATMs, FDIC insured up to $250,000 |
| Dave Goals account | Free | 4% APY savings, roundup support |
| Cash deposit at CVS/Walgreens | No fee | With barcode scan |
| Cash deposit at other locations | Up to $4.95 fee | — |
| Check scan (standard) | No fee (10-day processing) | — |
| Check scan (instant) | Fee applies | Instant processing |
| Apple Pay top-up | 1% fee | For adding money via Apple Pay vs. bank transfer |

---

## What stood out

1. **Dave generates a pre-filled HR payroll form directly in the app.** The direct deposit setup section includes an option to "Send HR a form" — the user enters their employer name, chooses full or partial paycheck, and Dave generates a completed direct deposit authorization form pre-filled with the Dave Checking account details. The user can send it directly to their employer or to themselves by email. The transcript noted this as "a very interesting way of getting people to actually transfer their salary or part of their salary to the bank."

2. **The referral mechanic grants a future advance boost, not cash.** Referring a friend and both parties repaying an advance earns "20% more on your next Extra Cash advance — up to $100 more." The boost is tied to the core product (advances), expires after 60 days, and requires both parties to complete the full advance-and-repayment cycle. This is a product-native reward rather than a financial incentive.

3. **The side hustle section aggregates gig job listings from external employers.** The Grow tab includes a job browser showing Uber Eats delivery, licensed therapist positions, armed security officer roles, seasonal retail, and other flexible work. Tapping "Apply Now" routes to the employer's external website. Dave does not process the application — it is a job discovery aggregator positioned as a financial wellness feature.

4. **A dedicated survey platform is built into the core navigation.** The Grow tab includes a surveys section powered by Inbrain AI. Surveys are introduced with an onboarding flow (demographic questions, gender, education, marital status, employment) before the survey catalogue appears. A monthly earnings tracker is visible. This is the most developed in-app survey income product observed in the finance app library.

---

## Analysis notes

Session analyzed via Mobin screenshot walkthrough. The Extra Cash advance eligibility was not met during the session ("you're not eligible for an advance yet — check back tomorrow to see if you're eligible") — advance eligibility is based on analysis of the connected primary bank account's transaction history. Business account not available — Dave is a personal finance product only. The 4% APY on checking and goals accounts was described; this rate may have changed since June 2026.

---

## Category context

Compared to Acorns (micro-investing) and Monzo (premium banking): Dave's target user is experiencing short-term cash flow gaps rather than building long-term wealth. The product architecture (cash advance as the primary hook, $1/month membership, checking and goals as retention products) is distinct from both Acorns' investment focus and Monzo's premium banking model.

---

## Unrecognized mechanics

### `advance-boost-referral`
**What was observed:** Dave's referral mechanic grants a 20% increase on the referring user's next Extra Cash advance limit (up to $100 more) when both the referrer and referred friend take and repay an advance. The boost expires after 60 days. The referred friend also receives an advance — the framing is "help out your friends and family" rather than "earn cash." The reward is product-specific (it increases a financial service limit) and requires a matched behavioral completion (both repay) rather than a simple sign-up.
**Why it does not map to `gifting`:** No item or currency is transferred between users. The reward is a future limit increase for the referring user, not a sent item. The bilateral completion requirement (both parties repay) makes this an incentive alignment mechanic rather than a gift.
**Worth adding to library:** Possibly — the advance-boost referral (product-native reward that increases a service limit, tied to both parties completing a financial transaction) is a distinct referral pattern in fintech products where the core product is a financial service rather than a consumer app.

### `round-up-investing`
**What was observed:** Same pattern as Acorns — card purchases round up to the nearest dollar, spare change rolls into a Goals savings account. See the Acorns analysis for full documentation of this mechanic.
**Worth adding to library:** Map to the `round-up-investing` pattern flagged in the Acorns analysis. Dave is a second reference implementation (into a savings/goals account rather than an ETF portfolio).

### `in-app-job-marketplace`
**What was observed:** The Grow tab's Side Hustle section shows a curated list of flexible, part-time, gig, and work-from-home job listings sourced from external employers (Uber Eats, licensed healthcare positions, security, seasonal retail, temp work). Users browse jobs by category, filter by distance and recency, and tap Apply Now to be routed to the employer's external hiring page. Dave does not process the application. The section is framed as a financial wellness feature ("put more money in your pocket with a side job").
**Why it does not map to an existing mechanic:** Not `limited-time-events` — the job listings are not time-gated engagement events. Not `challenges` — there is no structured objective or completion reward. The in-app job marketplace is a financial wellness content feature — a job discovery aggregator positioned as a way to increase income rather than as a game mechanic. Similar in structure to the real-world marketplace flagged in the Insight Timer analysis (therapist directory, retreat listings) — both embed a real-world services marketplace inside a digital product.
**Worth adding to library:** Map to the `real-world-marketplace` pattern flagged in the Insight Timer analysis. Dave's job marketplace and Insight Timer's retreat and therapist directory share the same structural pattern: real-world opportunities embedded in a digital product, routed to external platforms for fulfillment.
