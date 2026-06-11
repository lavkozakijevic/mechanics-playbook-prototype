# Acorns

**ID:** acorns
**Category:** Finance / Micro-investing
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 02 Jun 2026
**Last updated:** 04 Jun 2026
**Session state:** Analyzed via Mobin screenshot walkthrough (flow may not be perfectly sequential). US market only.

---

## Overview

Acorns is a micro-investing app for US users. It automatically invests spare change from purchases via a round-up mechanic, supports recurring investments into ETF portfolios, offers a Roth IRA product (Acorns Later), a checking account with a tungsten debit card (Acorns Checking), and a kids' investment account (Acorns Early). A learning section and an earning section (cashback investing rewards and surveys) complete the product. It operates on a tiered subscription model: Bronze ($3/month), Silver ($6/month), Gold ($12/month).

---

## First impression

Account creation requires email and password (no Apple/Google sign-in at account creation, though it can be added later). Phone verification, SSN, residential address, and bank connection via Plaid are required before any investment account is accessible. A squirrel mascot (consistent with the acorn/oak growth theme) appears as a contextual help icon throughout onboarding — tapping it opens a pop-up explaining why each piece of information is being collected. After bank connection, the subscription plan selection appears with a one-month free trial. A post-onboarding congratulations popup names the user and lists immediate next steps.

---

## Core activity

Users invest automatically through roundups (spare change from debit card purchases) and recurring weekly deposits. Between investment events, users review portfolio performance, adjust risk allocation, browse the earning section (cashback from partner brands and surveys), complete learning content, and monitor the kids' account (if set up). The home screen features a slider showing the user's current investment value projected to a potential 40-year future value.

---

## Mechanics observed

### Piggy Bank (`piggy-bank`) · Core

**What was observed:**
The roundup mechanic is Acorns' foundational product feature and maps to the piggy bank mechanic: money accumulates passively as a by-product of the user's existing behavior (card spending), without the user taking any deliberate saving action, and the accumulated spare change is invested automatically when it reaches a $5 threshold.

The roundup setup screen shows an illustration of a purchase ($2.60 coffee) with an arrow pointing to an acorn with $0.40 labeled "invest." The mechanic: every card purchase is rounded up to the nearest dollar and the difference is invested. Settings allow a multiplier (off, 2x, 3x, 10x) and a whole-dollar roundup option. The $5 threshold before transfer is stated explicitly.

The distinction from the standard piggy bank definition: in Acorns, no explicit purchase is required to unlock the accumulated amount — the roundup transfers automatically. The piggy bank mechanic definition ("requires a purchase to unlock") is not met strictly. However, the passive accumulation of value through behavioral by-products is the core behavioral design pattern and warrants logging here as the closest match.

**How it is presented:**
Roundup setup is presented during onboarding with an illustration before any investment is made. On the invest screen, a dedicated Roundups tab shows the number of roundups made, average amount, and settings. The multiplier setting (2x, 3x, 10x) is accessible from the settings cog on the invest screen.

**What is notable:**
The multiplier adds a behavioral choice layer to the passive mechanic — the user can choose how aggressively roundups amplify their spare change investment, from neutral (1x, the actual change) to aggressive (10x, ten times the change on every purchase).

**Screenshot suggestions:**

`[Roundup setup screen showing the $2.60 coffee illustration with the $0.40 round-up arrow pointing to the acorn, and the multiplier settings (off / 2x / 3x / 10x) below]`
*Documents the roundup mechanic visual framing and the multiplier as a behavioral investment lever.*

---

### Achievements (`achievements`) · Shallow

**What was observed:**
A progress visualization on the home screen shows the user's acorn at the far left of a horizontal slider with a "potential" value at the far right. Dragging the acorn to the far right opens a popup showing: "Your Acorns potential is $140,000 — investment: $20,000 — return: $120,000" with a 40-year projection graph. The slider is the primary persistent progress display on the home screen.

Separately, the learning section shows a "39,000 people viewed this" count on a featured article, which is a social proof display but not an individual achievement.

Named progress milestones are partially present: the IRA contribution section shows "you've contributed 0% of your max yearly limit" with a visual indicator of how much remains.

Logged at Shallow because no named badge system with permanent display markers was described. The home screen slider and IRA contribution indicator are progress displays, not achievement markers.

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Shallow

**What was observed:**
A post-onboarding popup listed three steps with checkmarks:
- "Let's say your $10 were live by February 9th"
- "$5 recurring to Acorns Invest"
- "$5 one time to Acorns Invest"

These are described as immediate next-step prompts rather than a recurring daily/weekly quest system. No ongoing recurring task system with a daily reset cadence and named rewards was described.

The Earning section's surveys create a recurring activity pattern (new surveys appear, earnings accumulate) but do not have a named daily/weekly cadence with explicit quest structure.

Logged at Shallow because the post-onboarding checklist has the shape of a quest list but is a one-time onboarding completion mechanism.

---

### Variable Reward (`variable-reward`) · Shallow

**What was observed:**
Survey rewards in the Earn section are variable — the survey list shows surveys paying different amounts ($0.44, $0.97, $1.16) for different durations. When starting a survey, the user may be screened out partway through ("looks like one of your answers indicated you're not the person this survey was intended for") and receive only a partial reward. The specific earnings are not known until the survey is completed or terminated.

The portfolio's ETF composition is a form of variable reward in the investing context — the user knows their allocation percentages but not the dollar return, which varies with market conditions.

Logged at Shallow because survey rewards are the closest observable variable reward surface with unknown outcomes at time of engagement, but the framing is utility (earn money) rather than reward (open to see what you get).

---

### Set Collection (`set-collection`) · Shallow

**What was observed:**
The Gold Plan Benefits section in profile settings lists all Gold plan features as a catalogue of activatable benefits: complimentary tax filing, custom portfolio, kids' investment accounts, emergency savings account, 3% IRA match. Each benefit shows an "Activate" button. The session described: "they're featuring the benefits of the plan we have and all the different features and things that we can activate here are listed out."

This is a subscription benefits activation list rather than a true set collection system. Logged at Shallow because the list of plan benefits with activation states shares the visual shape of a named collection with earned/unearned states, but has no named set structure or completion reward.

---

## Mechanics not observed

**Streak:** No consecutive-day counter or streak mechanic was described.

**Season Pass:** No dual-tier advancement track with free and paid tiers progressed through in-app actions was described. The subscription tiers (Bronze/Silver/Gold) are content gates, not progression tracks.

**Leaderboards:** No ranked list was described.

**Challenges:** No opt-in structured objective with a visible endpoint and named reward was described.

**Clans-Guilds:** No group with shared goals or collective rewards was described.

---

## How mechanics connect

The roundup mechanic (piggy bank) feeds the core investment account passively. Recurring investments supplement it actively. Together they produce a portfolio value that the home screen slider visualizes as a future potential. The earning section (surveys, cashback from partner brands) generates additional investment deposits — the cashback from partner purchases is invested rather than returned as cash, keeping all rewards inside the investment ecosystem.

---

## Session rhythm

The roundup mechanic creates return visits driven by portfolio performance curiosity rather than scheduled daily actions. Return pressure comes from: recurring investment confirmations (weekly transfers), the IRA contribution progress indicator ("you've contributed 0% of your max yearly limit"), earning section surveys (new surveys appear), and portfolio performance notifications.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Acorns Bronze | $3/month (or $36/year) | Invest account, roundups, recurring investments, learning content |
| Acorns Silver | $6/month | Bronze + IRA account (Later), 1% IRA match for first year, savings account with APY |
| Acorns Gold | $12/month ($0.40/day) | Silver + checking account with tungsten debit card, Money Manager, 3% IRA match, kids account, custom portfolio, complimentary tax filing |
| One-month free trial | Free (auto-granted) | Full Gold plan for first month |
| Acorns Assist | $1/month | Hardship option: keeps invest account open, removes premium features |
| Referral reward | Investment to account | Amount not specified per referral; "invest $1,375 into your invest account when you invite five friends and they invest" (current offer) |

---

## What stood out

1. **The home screen slider projects 40-year investment potential in real time.** Dragging an acorn icon from left (current balance) to right (potential) updates a popup showing investment contribution vs. compound return over the chosen time horizon. This is the most direct "show me what my money becomes" visualization observed in any finance app in the library.

2. **Withdrawing from an IRA triggers a warning in brown, not red.** The first time an unusual color was observed in the app was the brown withdrawal warning: "you may have to pay capital gains taxes if your funds earned money and it slows down the overall growth potential." The transcript noted: "we've never seen brown color in the app before this — it's a distinct color — it still makes us pay attention because it's different from what we've seen in the app so far." A "Pause Investments" button was more prominently featured than "Continue to Withdraw."

3. **The referral reward scales with the number of friends referred.** The referral button in the top navigation bar dynamically shows the current offer amount. At time of observation: "$800 for referring four friends" / "$1,375 for referring five friends." The reward is invested rather than paid as cash.

4. **Survey disqualification mid-survey is framed neutrally.** When screened out of a survey: "looks like one of your answers indicated you're not the person this survey was intended for — you'll go back to see the other surveys." The user receives a partial reward and sees a new survey list. No negative framing or disappointment language.

---

## Analysis notes

Session analyzed via Mobin screenshot walkthrough. The transcript explicitly noted: "I'm looking at screens in Mobin — so I don't have screens of my own — I do not know who analyzed this truly." Flow may be out of sequence in places. US market only — SSN required, IRA products not available outside the US. The Acorns Early (kids' investment account) and checking account flows were reviewed. The checking account identity verification was incomplete during the session ("this is taking longer than expected — we're still working on opening your account"). Tax filing integration (via April) was described as a Gold plan benefit.

---

## Category context

No explicit comparisons to other investing apps were made. The roundup mechanic was compared to Monzo's roundup pots (also observed in this library) — both use the same behavioral design (round up card purchases to the nearest pound/dollar and save/invest the difference). Acorns' roundup invests the spare change into ETFs; Monzo's roundup deposits into a savings pot with configurable multipliers.

---

## Unrecognized mechanics

### `round-up-investing`
**What was observed:** Every card purchase linked to Acorns is rounded up to the nearest dollar. The spare change accumulates until it reaches $5, at which point it is automatically transferred to the invest account and added to the ETF portfolio. Settings allow a multiplier (2x, 3x, 10x) that amplifies the round-up amount per purchase. A "whole dollar" round-up option adds exactly $1 to the invest account on every purchase regardless of the actual spare change amount.
**Why it partially maps to `piggy-bank`:** The passive accumulation pattern is present (money accumulates as a by-product of spending behavior without deliberate saving action) but the standard piggy bank definition requires a purchase to unlock the accumulated amount. Acorns transfers automatically at threshold, without a purchase gate. The round-up investing mechanic is a distinct implementation — passive savings automation triggered by spending behavior, with automatic threshold-based transfer to an investment account.
**Worth adding to library:** Yes — round-up investing (spare change from purchases automatically invested, with optional multiplier, threshold-based transfer) is a distinct behavioral savings mechanic that appears in multiple fintech apps (Acorns, Monzo, Revolut, Dave) and is worth naming separately from the piggy bank mechanic.

### `potential-visualizer`
**What was observed:** The home screen features a horizontal slider with the user's current investment value on the left (acorn icon) and a "potential" value on the right. Dragging the acorn to the right opens a popup showing investment amount, compound return, and total value at the chosen time horizon (up to 40 years), with a graph of the growth curve. The popup notes: "graph is for illustrative purposes only — investing involves risk." The slider does not affect actual portfolio allocation — it is a projection visualization tool only.
**Why it does not map to an existing mechanic:** Not `xp-leveling` — there is no threshold crossing or content unlock. Not `achievements` — no named milestone is earned. The potential visualizer is a motivational behavioral tool: it converts abstract future investment returns into a personalized dollar figure, recalibrating the user's time horizon from "this month" to "40 years from now." As an engagement mechanic, it functions by making long-term compound growth feel tangible at the moment the user opens the app.
**Worth adding to library:** Possibly — the future-value visualizer (interactive slider showing projected investment returns over a chosen time horizon) is a distinct design pattern in investing apps for motivating long-term saving behavior.

### `soft-currency` / `hard-currency` note
**What was observed:** Acorns uses US dollars throughout. No separate in-app currency exists. The cashback and survey rewards are deposited directly as dollar investments into the Invest account rather than as points or credits.
**Worth adding to library:** Not applicable — the app uses real currency throughout.
