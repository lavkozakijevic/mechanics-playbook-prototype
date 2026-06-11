# Cleo

**ID:** cleo
**Category:** Finance / AI Budgeting
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 04 Jun 2026
**Last updated:** 04 Jun 2026
**Session state:** First install — free tier (US state-specific restrictions applied — cash advances unavailable). Analyzed via live session (February 2024).

---

## Overview

Cleo is an AI-powered budgeting and financial wellness app built around a conversational chat interface. A mascot AI character ("Cleo") delivers all financial insights, spending analysis, roast sessions, and emotional support through chat bubbles using Gen Z-coded language (emojis, GIFs, casual profanity). The app connects bank accounts via Plaid, tracks income and spending, surfaces budget limits, and gamifies the financial review process. Two paid tiers exist: Cleo Plus (cash advance, custom categories) and Cleo Builder (Plus + credit builder card). The session covered the full free tier including onboarding, the chat interface, budget section, and Habits (spending review) tab.

---

## First impression

Sign-up collects name, email, date of birth, US state, and referral source. After email verification, a legal notice about state-specific restrictions appears in chat bubble format ("due to your state's laws, cash advances aren't available — but insights, budget and savings tools are good to go"). Notification opt-in shows a sample notification ("you smashed yet another target — stick to $50 today to stay on track"). Bank connection via Plaid follows. After connecting, Cleo sends the user through a five-question spending habits quiz, then offers a "roast" of their spending behavior. The roast is a series of GIFs, emojis, and mildly sarcastic observations about the user's spending data. The chat interface is the primary navigation surface from this point forward.

---

## Core activity

Users interact with Cleo via a chat interface — asking questions, receiving spending summaries, setting income and budget limits, and reviewing financial data. The Spend tab shows account balances and transactions. The Budget tab shows the monthly spending breakdown, category limits, and bill tracking. The Habits tab delivers gamified spending reviews through swipe-based card rating. The Chat tab is the home screen equivalent — surfacing daily insights, upcoming bills, budget status, and interactive financial games.

---

## Mechanics observed

### Streak (`streak`) · Supporting

**What was observed:**
The Habits tab shows a spending review streak. After completing a review, the screen displays: "spending review — review streak: one." The next review opportunity shows as available "tomorrow" and then "in three days," creating a recurring review cadence. The transcript described: "after completing the first review, the habit that we have in terms of spending review looks like this — we see review streak has become one."

Separately, the Budget tab's habit challenge tracking shows "date 21 of 21 — on track" in a mockup, suggesting challenges run for 21 days with a daily progress counter.

**How it is presented:**
Review streak is on the Habits tab after completing a spending review. The challenge progress ("21 of 21") appears in the habit challenge widget on the Habits tab.

---

### Challenges (`challenges`) · Supporting

**What was observed:**
The Habits section opens with "Start Challenges and Save Money — control impulse spending and achieve your savings goals." Three challenge types are offered:
- **Challenge a vice:** "Pick your worst spending habit and put your willpower to the test"
- **Start saving:** "Keep track of challenges and watch your savings grow"
- **Spot trends:** "Review your spending to expose your vices and gain saving tips"

The habit challenge widget shows a named category target (e.g., "eating out limits"), a spending limit amount, a progress bar, a day counter ("21 of 21 — on track"), and a savings total ("stay on track to save $85"). Challenges have defined endpoints (day count), visible progress, and a named financial reward (money saved).

The opt-in structure, visible endpoint (21 days), named reward (savings amount), and category-specific challenge framing all fit the challenge definition.

**How it is presented:**
Challenges are in the Habits tab (the last item in the navigation, added after onboarding completes). The tab includes a spending review widget and a challenges widget. The chat home screen can surface challenge status cards.

**Screenshot suggestions:**

`[Habits tab showing the spending challenge widget with category name (eating out limits), spending limit amount, progress bar, day counter (21 of 21, on track), and savings target ($85)]`
*Documents the challenge structure: named category, visible progress, day counter, financial reward.*

---

### Achievements (`achievements`) · Shallow

**What was observed:**
After completing a "roast" sequence or spending review, the chat shows a summary: "nicely done — ratings are in — 11 loved, five regrets — [categories and amounts for loved and regretted purchases]." The review completion produces a summarized record of rated purchases that persists as a conversation history item.

The spending review stats screen shows: "review streak: 1. Times played: 1. Times won: 0." These are named persistent stats displayed on the Habits tab after completion — the closest achievement-adjacent display described in the session.

The budget section shows a skull emoji and "rip budget" when the user overspends for the month, and a thumbs up when on track — simple binary status indicators with named states.

Logged at Shallow because the named stats (review streak, times played, times won) are permanent accumulated counters, but no named badge or milestone display system was described.

---

### Daily-Weekly Quests (`daily-weekly-quests`) · Supporting

**What was observed:**
The Chat home screen shows five named interactive cards that can each be tapped once and then show a green checkmark indicating completion: "today's money insights," "check with Cleo — can you afford that thing?," "upcoming bills," "where's it going?," and "need help?." Once all five are checked, they show as completed for that session.

The Habits spending review is described as available "tomorrow" after completion, then "in three days" for the following one — creating a recurring scheduled review cadence. "Play again on tomorrow to remain a spending review legend" is the post-review prompt.

**How it is presented:**
Chat home screen cards appear on the chat tab. Spending review cadence is shown in the Habits tab.

**What is notable:**
The five chat cards function as a daily activity list — each has a distinct interaction (asking Cleo a question, reviewing bills, checking balance, getting a financial game) and a visible completion state (green checkmark). This is the closest daily quest system observed in any banking or finance app in the library.

**Screenshot suggestions:**

`[Chat home screen showing the five interactive cards — today's money insights, can you afford that, upcoming bills, where it's going, need help — with green checkmarks on completed ones]`
*Documents the daily activity card system as a quest-like completion layer in the chat interface.*

---

### Variable Reward (`variable-reward`) · Shallow

**What was observed:**
The spending review in the Habits section uses a swipe-card mechanic: transactions appear as cards that the user swipes right ("loved") or left ("regret"). The specific transactions shown are drawn from the user's recent spending history. The order and composition of cards are variable — the user does not know which transaction will appear next. The "game" framing on the chat home screen (labeled "it's game time") introduces the swipe mechanic as a game format.

Separately, the "roast" sequence delivers GIFs and observations that are triggered by the user's specific spending data in a chat format — the specific content (GIF, quip, data reference) varies based on what Cleo finds in the account.

Logged at Shallow because neither the swipe review nor the roast sequence is a pull mechanic with unknown prize outcomes — the "reward" is spending data already known to the system, surfaced in a variable order with variable presentation.

---

### Gifting (`gifting`) · Shallow

**What was observed:**
A referral mechanic was not described in detail during this session. The earning/cashback section was described as having a "cashback — incomplete" state requiring Plus subscription. No explicit referral reward structure was described.

The "it's game time" card on the Chat home screen includes a "stats" and "opt out" button, suggesting the financial quiz game is opt-in and repeatable. No in-app item transfer between users was described.

*This entry is removed — insufficient evidence for even Shallow logging. Gifting is not observed.*

---

## Mechanics not observed

**Leaderboards:** No ranked list with user position against others was described.

**Season Pass:** No dual-tier advancement track with free and paid tiers progressed through in-app actions was described. Cleo Plus and Builder are subscription gates, not progression tracks.

**Piggy Bank:** Not described. The autosave feature (automatically transferring spare change to the Cleo Wallet) was referenced but not accessible during the session due to state restrictions and setup requirements.

**Energy-Lives:** No attempt cap was described.

**Set Collection:** No named sets with completion rewards were described.

---

## How mechanics connect

The streak and challenges are both in the Habits tab and reinforce the same behavior: consistent daily financial review. Completing a spending review advances the review streak. Challenge progress is tracked per category over 21 days. Both systems use the same underlying data (transaction history) and both reward behavioral consistency over time.

The daily chat cards (daily-weekly quests) and the spending review (streak + challenges) together create a complete daily engagement loop: check the five chat cards for instant interactions, then complete the spending review for the deeper habit reinforcement. Both are gamified but the chat cards are casual (single-tap, one answer) while the review is more involved (swipe all cards, see summary).

---

## Session rhythm

**Return pressure:** Daily chat card availability (cards reset each day), spending review cadence (every 1–3 days), challenge day counter (daily check-in over 21 days), upcoming bill alerts.

**Session structure:** Open app → Chat tab → complete five cards → Habits tab → spending review → see streak update.

**Session length driver:** The five chat cards take 5–10 minutes depending on interactions. The spending review takes 2–5 minutes depending on number of transactions.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Cleo Free | Free | Budget insights, spending analysis, roast/hype features, savings wallet (where available), habits, chat |
| Cleo Plus | Not stated in session | Cash advance up to $250 (where eligible), custom categories, cashback, VIP support |
| Cleo Builder | Not stated in session | Everything in Plus + credit builder card, cash back spending, credit history coaching |

State restrictions apply — cash advance and credit builder products not available in all US states.

---

## What stood out

1. **The spending roast is a gamified financial review delivered entirely via chat.** Cleo asks five questions about spending habits, then delivers a series of GIFs, emoji-laden quips, and spending data observations framed as a "roast." The roast ends with a request to leave an App Store review ("tap to leave a review — bring it"). This is the most personality-driven financial data presentation in the library — the same transaction data shown in George App, Monzo, or Copilot is here delivered as entertainment.

2. **The financial knowledge game tests spending awareness through trivia.** The "it's game time" card on the chat home screen starts a multiple-choice quiz asking: "did you pay any bills this week?", "how much money have you spent in the last seven days?", "how much money came in?" Getting answers wrong shows the correct amount. Post-game shows "knowledge score 0% — times played: 1 — streak: 1." The transcript flagged this: "this is a very interesting way of creating a GameFi experience with a quiz related to payments within the app."

3. **The spending review uses swipe-based card rating from transaction history.** The Habits tab presents each recent transaction as a swipeable card. Swipe right = "loved," swipe left = "regret." After all cards are reviewed, Cleo shows a summary of loved vs. regretted spending with dollar amounts. The next review is available the following day. This is a behavioral review mechanic disguised as a swipe game — the same behavioral commitment mechanism (review your behavior, label it, get a summary) as EveryDollar's "will you commit?" CTA but delivered as a swipe game.

4. **Cleo uses "RIP budget" and skull emoji for overspending months.** When the monthly spending summary shows an overspent month, the background line goes red and the status shows a skull with "rip budget" and the overspent amount below it. On-track months show a thumbs up. The emotional signal design — skull for failure, thumbs up for success — is the most direct use of gaming-native feedback language observed in a finance app in the library.

---

## Analysis notes

Session conducted in February 2024 (early session relative to the broader library). Free tier only — Cleo Plus and Builder features seen only via plan comparison screens. State restrictions prevented access to cash advance and savings wallet features. The roast session used some profanity ("fucking," milder crude language) throughout Cleo's chat responses — this is described in the transcript as Gen Z-coded voice design, used intentionally.

---

## Category context

Compared to EveryDollar (structured lesson-based approach, religious-coded language, commitment architecture) and Copilot (premium analytics, data-first, US-centric), Cleo occupies a distinct demographic position: young US users who find traditional budgeting language unappealing. The AI chat interface, roast mechanic, swipe review, and knowledge game all serve the same core function (review spending, understand patterns, set limits) but in formats designed for users who would disengage from conventional budgeting tools.

---

## Unrecognized mechanics

### `ai-financial-roast`
**What was observed:** After connecting a bank account and completing a five-question spending habits quiz, Cleo delivers a "roast" session: a series of chat messages combining GIFs, emoji, and direct references to the user's own spending data (amount spent this month, balance, recent transactions). The tone is mildly sarcastic and designed to be entertaining rather than alarming. The roast ends with a post-quiz summary and an App Store review request. Users can tap "roast me" to initiate the sequence. The same conversational engine also delivers a "hype mode" variant — the same sequence framed as enthusiastic encouragement rather than sarcasm.
**Why it does not map to an existing mechanic:** Not `variable-reward` — the content is generated from the user's own data, not from a random pool. Not `challenges` — no structured objective or completion reward. Not `social-feed` — the interaction is one-on-one between user and AI character. The AI financial roast is a personality-driven data presentation mechanic: financial information (spending data, balance, transaction history) is delivered through an entertaining character voice designed to create emotional engagement with content that users typically find dry or aversive.
**Worth adding to library:** Possibly — the conversational AI personality mechanic (delivering financial data through an entertainment-coded character voice) is a distinct engagement design pattern in Gen Z-targeted fintech apps worth naming.

### `behavioral-commitment-prompt`
**What was observed:** The "start challenges" flow in the Habits section asks the user to choose a spending vice category, then begins tracking daily progress toward a 21-day challenge. The initial challenge setup functions as a commitment to a behavioral change (spending limit in a chosen category for 21 days). The review streak adds a daily reaffirmation of that commitment through the review action.
**Why it maps to the flagged mechanic:** Maps to `behavioral-commitment-prompt` as confirmed across Insight Timer, Tiimo, Ladder, and EveryDollar. Cleo's implementation uses a challenge category selection as the commitment device — the user names their vice, sets a limit, and begins a 21-day track record. Fifth reference implementation, second in a finance app (after EveryDollar).
**Worth adding to library:** Confirm the addition. Cleo is the fifth reference implementation across five different app categories (wellness, productivity, fitness, finance x2).

### `spend-categorization-quiz`
**What was observed:** The "make Cleo smarter" card on the chat home screen initiates a transaction categorization flow through the chat interface: "I'm going to show you a few transactions — tell me which category they belong to — ready?" Transactions appear one at a time as chat bubbles with a "choose category" button. The user selects from 6–7 suggested categories or taps "more categories" for a full list. After categorizing all surfaced transactions, the review is complete. This is a gamified manual transaction categorization mechanic — the same data management task that Copilot, Monzo, and George App present as a list-view data entry form, here delivered as an interactive chat quiz.
**Why it does not map to an existing mechanic:** Not `daily-weekly-quests` — no named reward on completion, no reset cadence stated. Not `challenges` — no visible endpoint stated at entry. The spend categorization quiz is a data quality improvement mechanic gamified through the chat interface: the user improves Cleo's categorization accuracy by interacting with a quiz-format chat flow rather than editing a form.
**Worth adding to library:** Possibly — gamifying data quality improvement (turning manual data correction into an interactive quiz format) is a distinct design pattern for conversational AI apps that need user input to improve their model outputs.
