# Starling Bank

**ID:** starling-bank
**Category:** Finance / Banking (Neo-bank)
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 02 Jun 2026
**Last updated:** 04 Jun 2026
**Session state:** Analyzed via Mobin screenshot walkthrough, not a personal live session. UK account holder flow. Business account flow also reviewed.

---

## Overview

Starling Bank is a UK-regulated digital bank offering personal, joint, business, and sole trader accounts. It is notable for having no monthly fees on personal accounts and fee-free spending abroad. Core features include Spaces (savings pots with virtual debit cards), subscription tracking, a child account product (Kite), a connected card product for delegated spending, and a current account switching service. The app covers spending analytics, card controls, international transfers, check deposit by photo, and a referral program.

---

## First impression

Onboarding opens with a brief product positioning carousel (fee-free abroad, Spaces, bill budgeting) before presenting account limits and requirements. The application flow collects: mobile number, personal details, photo ID, a selfie video, personal income and employment, and FSCS compliance documentation. After approval (current average review time displayed: 10 hours), card ordering and PIN setup complete onboarding. Onboarding communicates FSCS protection twice, and addresses the possibility of Starling failing directly: "your money is covered — if something happens to us and we can't pay your money back, you'll get compensation from the FSCS." The Starling call status (fraud prevention indicator) and subscription tracking are notable utility differentiators visible early in the experience.

---

## Core activity

Starling users manage a current account — spending, receiving, paying. Between financial events, users review spending analytics, manage Spaces (savings pots), track subscriptions, set up scheduled payments, and access the Marketplace for third-party integrations. The Spending tab provides monthly category breakdowns with a graph view. Spaces can hold money separately from the main balance, earn interest (Easy Saver), pay bills directly, and issue virtual debit cards.

---

## Mechanics observed

### Gifting (`gifting`) · Shallow

**What was observed:**
A referral mechanic is accessible from the profile section. The reward is not cash: "Enjoy a day out with a friend on us. Every time you refer a friend and they open an account, you both get a National Trust Day pass for two people to use with a friend or family member." Both the referring user and the referred friend receive the same reward — a two-person National Trust Day pass, valid for six months, usable at hundreds of National Trust properties.

The transcript explicitly noted this as unusual: "Most of the time you get money. If you refer this to someone, you get five pounds, they get five pounds. But what Starling does is they give you a two person National Trust Day pass, which is very interesting. So it has monetary value, which might be... interesting that they're not positioning it in that way."

Logged at Shallow because the reward is bilateral (both parties receive a benefit, not a unilateral send) and the mechanic targets acquisition of new users rather than transfers between existing users.

**Screenshot suggestions:**

`[Refer a Friend screen showing the National Trust Day pass reward description, the bilateral framing, the six-month validity, and the share referral link button]`
*Documents the non-cash, experience-based referral reward and its unusual bilateral framing.*

---

## Mechanics not observed

**Streak:** No consecutive-day counter or streak mechanic was described.

**Daily Login Reward:** No reward for returning to the app daily was described.

**Challenges / Daily-Weekly Quests:** No opt-in structured objectives or recurring task system was described.

**Leaderboards:** No ranked list was described.

**Achievements:** No named badge system was described. The "welcome home" onboarding banner is a one-time guided tour, not a permanent achievement marker.

**Season Pass:** Not observed.

---

## Session rhythm

Banking utility — sessions driven by financial events. Return pressure comes from scheduled payment notifications, low balance alerts (configurable), and subscription renewal reminders surfaced through the Spending tab's subscription tracking feature. The Starling call status ("we've never spoken to you on the phone — if anyone says it's Starling, it's a scam, hang up and call us on 159") mirrors Monzo's fraud prevention indicator.

---

## Monetization observed

No in-app purchases or subscription tiers for personal accounts. Starling personal accounts have no monthly fee. Revenue is generated through banking products.

Financial products and features:
- Personal current account: no monthly fee, no fee abroad, FSCS protected to £85,000
- Easy Saver Space: 3.75% AER variable, instant access
- Fixed Saver Space: fixed-term higher interest
- Kite (child account): virtual debit card, spending limits, real-time notifications, no fees
- Connected Card Space: extra debit card for delegated spending (max £200 balance)
- CHAPS payment: £20 fee for high-value one-off transfers
- Cash deposits at Post Office: £1,000/year fee-free, then 0.7% fee
- Business accounts: no monthly fee (Sole Trader), Pro account available
- Marketplace: Habito mortgage brokers, True Layer open banking

Referral reward: National Trust Day pass for two (both referring user and referred friend).

---

## What stood out

1. **Subscription tracking is built into the core payments view.** The Scheduled tab in the Payments section shows "all your recurring payments in one place — direct debits, standing orders and subscriptions in a single view so you can see what's coming out for the month." This is a native utility feature with no separate app or integration required. The session noted this explicitly as "very useful to have as a bank."

2. **The Kite child account includes a child-friendly privacy policy.** Before setting up a Kite space, the app presents a child-friendly privacy policy the parent can show the child to explain data collection. The transcript noted: "this is something we have not seen before — a child friendly privacy policy you can show to them so that they understand what's happening."

3. **The referral reward is a real-world experience rather than cash.** The National Trust Day pass has monetary value (approximately £15–20 per adult) but is positioned as a shared experience rather than a financial incentive. The transcript speculated on the design logic: "imagine if you could choose which ticket you want — whether you want to get a ticket for the zoo, a museum, an experience."

4. **The Starling call status is displayed on payee profiles, not just in security settings.** When viewing a payee's profile, a notice says: "We've never spoken to you on the phone. If anyone on the phone says it's Starling, it's a scam." This appears in an unusual location — adjacent to payment controls — making the fraud warning contextually available at the moment a user is considering making a payment to someone who may have called them.

---

## Analysis notes

Session analyzed via Mobin screenshot walkthrough, not a personal live session. The transcript noted: "this is not my personal go through the app — these are screens from Mobin and this has been analyzed in 2025." As a result, some screen transitions may be out of sequence, and dynamic or personalized features (balance, transaction history, actual account details) reflect sample data. Starling's business account flow was also reviewed during this session — the business account requires Companies House registration lookup (for limited companies) or self-identification as sole trader, plus document upload for business address verification. Business account excluded industries listed include: currency exchange, gambling, consumer credit, unregistered charities, antiques/art, dating/escort, used vehicles, pornography, non-licensed drugs.

---

## Category context

Compared to Monzo (the other UK neo-bank in the library): Starling has no subscription tiers (Monzo has Free/Extra/Perks/Max), no cashback offer system, no roundup pots with multipliers, and no direct Wise integration for international transfers. Starling's differentiators are subscription tracking in native payments view, Kite (child account), Connected Card for delegated spending, and the experience-based referral reward.

---

## Unrecognized mechanics

### `experience-based-referral`
**What was observed:** The Starling referral program grants a National Trust Day pass for two people to both the referring user and the referred friend when the friend opens an account. The reward is a real-world experience rather than cash or in-app currency. The pass is valid for six months and usable at hundreds of National Trust properties. Neither party receives cash; both receive the same non-monetary, experiential reward.
**Why it does not map to `gifting`:** Not a unilateral in-app item transfer between existing users — it is a bilateral referral reward targeting new-user acquisition. Not a direct send of currency. The experience-based reward (rather than cash or store credit) is the notable variant of the referral mechanic.
**Worth adding to library:** Map to referral mechanic pattern. The experience-based reward is worth noting as a distinct variant of the standard cash-referral structure used by Monzo (£5/£5), Freeletics (6 months free), and others.

### `subscription-tracking`
**What was observed:** The Payments section's Scheduled tab shows all recurring payments — direct debits, standing orders, and app subscriptions — in a single consolidated view. The session described it as: "see all your direct debits, standing orders and subscriptions in a single view so you can see what's coming out for the month." A search function is available. Users can sort payments A to Z or by type.
**Why it does not map to an existing mechanic:** This is a product feature (financial utility), not an engagement mechanic. Worth noting as a category-level feature for the banking feature benchmark report — it directly addresses the consumer pain point of forgotten or untracked subscriptions that Orbit (analyzed separately) was built specifically to solve.
**Worth adding to library:** No — product feature, not a mechanic. High relevance for the banking feature benchmark report.

### `delegated-spending-card`
**What was observed:** The Connected Card Space allows a user to create a space with a maximum £200 balance and order an additional debit card linked to that space. The card can be given to another person (family member, employee, personal assistant) who can spend only the money in the connected space — not the main account. The card limit is the space balance. Withdrawing money from the space disables the card. Real-time notifications show the main account holder when the connected card is used.
**Why it does not map to an existing mechanic:** Not `gifting` — the card holder spends money the account holder already deposited, not money given to them. Not `clans-guilds` — there is no shared goal or collective reward. This is a delegated spending product — a separate debit card with a capped balance for supervised or authorized spending by a third party. Worth noting as a product feature for the banking feature benchmark.
**Worth adding to library:** No — product feature. Worth noting in the banking report.
