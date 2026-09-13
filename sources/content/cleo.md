# Cleo

**Teaser:** A budgeting app that turns a connected bank account into a persona's quizzes, roasts and reviews of the user's own spending.

Cleo is a US personal finance app that introduces itself as a way to save money and build credit. It connects to a user's bank account through Plaid and delivers most of what it does through a chat interface with a named persona, alongside a nav bar for spending, budgeting, chatting, saving, borrowing and, once onboarding finishes, habits. Cleo sets a monthly spending limit, $1,400 in this example, and asks the user to come back regularly to review, rate and categorize their own past transactions.

---

## System view

Cleo is a medium complexity system built around one connection made during onboarding: linking a bank account through Plaid. That connection supplies the real account figures that the roast, the budget, the bill and category views, income suggestions, hype mode, the money game's answer key, and the spending reviews all read from afterward. Rather than one chain that gates the next step, Cleo branches from its chat home into routes that don't depend on each other: budgeting, a habits tab added only once onboarding finishes, and a borrow tab offering a cash advance alongside a credit-builder plan, each running its own sequence off the same shared connection.

---

## Mechanics

### Challenge

**What was observed:** Cleo runs two surfaces that give the user a bounded goal it can judge as met or not. The core one is the monthly spending limit: the user sets an overall amount that includes all bills, plus optional limits across 14 spending categories based on their average spending, and each month becomes its own tracked state, one that either stays on track or goes over. A thumbs-up shows under the two coin stacks while spending stays inside the limit; going over swaps in a skull, turns the line under the month red, and marks the month "overspent", a result that stays attached to that month even after it's passed. The second surface is a 21-day challenge previewed in the habits tab, framed around picking one spending habit to cut and tracking a savings amount against it. It's shown only as a mock-up of what an active challenge would look like, and starting one leads instead to the spending review screen rather than to a live instance.

**How it is presented:** The monthly limit lives on its own budget tab but is also echoed on the chat home as a running card stating how much of the budget is left and when it ends. Its two outcomes show up as an emoji swap, a colour change on the line under the month, and short copy rather than any longer explanation. The 21-day challenge, by contrast, gets its own headline spot at the top of the habits tab, styled the same way whether or not an instance is actually running.

**What is worth noting:** The monthly limit is the only one of the two built out as a state a user can actually look back on, a past month keeps its overspent result rather than resetting. The 21-day challenge is described and illustrated in full, right down to a specific savings figure, without ever showing what starting, running or finishing one actually looks like.

**Key findings:**

- The monthly limit is set with one overall amount including bills, plus optional limits across 14 categories based on average spending.
- Staying inside the limit shows a thumbs-up; going over shows a skull, a red line under the month, and "overspent".
- A past overspent month keeps that result rather than resetting when a new month starts.
- The 21-day challenge preview names a specific example, an eating-out limit tracking toward an $85 savings goal.
- No 21-day challenge is actually started; the displayed state is a mock-up.

**Screenshots needed:** the budget tab in its on-track state with the two coin stacks and the thumbs-up; a month in the overspent state with the skull, red line and "overspent" label; the "set your limit for the month" sheet with category limits switched on; the habits tab's 21-day challenge preview with its progress bar and savings figure.

### Streak

**What was observed:** Cleo tracks two separate counters it labels streaks. In the habits tab, a review streak sits at zero before the user's first spending review, then reads one immediately after it's completed, next to a line encouraging the user to play again tomorrow to keep it going. On the money game's stats screen, a separate streak reads one, shown alongside a knowledge score of zero percent and a single recorded play.

**How it is presented:** Both streaks are plain numbers sitting inside the surface they belong to, the review streak at the top of the habits list next to the reviews it's counting, and the game streak inside the game's own stats screen next to its other counters.

**What is worth noting:** Neither streak's rule for what breaks it is shown. The game streak is also an odd pairing on its own screen, it reads one while the knowledge score sits at zero and the win count also reads zero, so nothing on that screen actually explains what the streak is counting if not a correct answer.

**Key findings:**

- The review streak reads zero before any review and one right after the first is completed.
- Completing a review is paired with a line encouraging the user to return tomorrow to keep the streak alive.
- The game's stats screen shows a streak of one alongside a 0% knowledge score and one recorded play.
- What causes either streak to reset or break isn't shown.

**Screenshots needed:** the habits header showing the review streak at zero before the first review; the same header after it moves to one; the game stats screen showing the streak next to knowledge score and play count.

### Personal Data Reflection

**What was observed:** Cleo runs a cluster of interactions that all hand the user's own account activity back to them as something to respond to. The roast turns the month's account figures into a joke sequence, stating what was spent this month, what came in over the last two weeks, and a total across the last 13 months, one figure at a time, each advanced by the user's own reply. Hype mode does something similar in a celebratory register, working through the month's spend, this month's bank charges, total money made and the biggest recent purchase. The money game asks direct questions about the user's own recent activity, whether bills were paid this week, how much was spent in the last seven days, and checks each answer against what Cleo actually has on record, marking it right or wrong before moving on. The spending review asks the user to rate their own past payments as loved, regretted or don't know, opening with a short three-card practice round before running through real transactions and closing with a summary of totals. A fifth interaction, deciding whether to keep or ditch a subscription, presents the user's own subscriptions as swipeable cards with no correct answer attached to either direction.

**How it is presented:** The roast and hype mode both run as chat sequences reached from onboarding or the chat home, advancing one figure at a time through quick replies. The money game shows up as one card among the chat home's swipeable set, with its own opt-out option and a separate stats screen. The spending review is reached from the habits tab and scheduled rather than always available, while the subscription swipe sits inside the upcoming bills conversation.

**What is worth noting:** None of these interactions have a way to fail that matters beyond the moment. The game's correct answer is just Cleo's own record of the account, and the review and the subscription swipe don't have a correct answer at all, what's actually being tested across all of them is whether the user recognizes their own recent financial behaviour, not any outside skill or knowledge. The review and the subscription swipe also both feed something back to the user afterward, a summary of totals for the review, comments tied to specific purchases, while what a subscription swipe actually changes isn't shown.

**Key findings:**

- The roast and hype mode both restate the user's own account figures as entertainment content, ending in a request to leave an app store review.
- The money game checks the user's answers against Cleo's actual record of the account, marking each one right or wrong.
- The spending review opens with a three-card practice round before running through the user's real payments.
- Finishing a review shows totals for loved and regretted purchases plus a separate don't-know count, along with comments tied to specific transactions.
- The subscription swipe asks the user to keep or ditch each one, with no stated correct answer either way.

**Screenshots needed:** the roast's opening figure with its GIF; the money game's first question and its right/wrong response; the review's practice round with loved, regret and don't-know controls; the "ratings are in" summary with loved and regret totals; the subscription swipe screen.

---

## Onboarding and first run

This section covers everything between opening Cleo for the first time and reaching the finished budget. It runs through sign up, connecting a bank account through Plaid, a five-question habits quiz, a roast of the user's own figures, and setting up the budget.

### O1. Pre-signup pitch carousel

Before signing up, Cleo shows a four-slide carousel with a sign-up button and an "I already have an account" option below it. Each slide names one outcome in turn: a cash advance up to $500 "when you need a little extra"; learning to spend better through spending limits and budget tips; a credit builder card pitched as a way to stress less about credit score; and automatic transfers to a savings wallet.

- Cleo introduces itself as an app to "save money and build credit" before the first slide appears.
- The first slide states the cash advance amount as up to $500.
- The third slide names the credit builder card directly.
- The fourth slide describes automatic transfers to a savings wallet.

### O2. Sign-up sequence

Sign up opens a sequence of single-purpose screens: full legal name, email, date of birth, US state, where the user heard about Cleo, and email verification by code, each one advanced with a "Next" button. Entering the code correctly leads to a screen reading "that totally worked".

- The name screen collects first and last name as separate fields.
- The state screen lists US states only.
- The attribution screen offers App Store, Play Store, Facebook, friend, family and further options.
- The verification screen offers resend, send to a different email, and an open-my-email button alongside the code entry.

### O3. Cleo's persona voice

Cleo speaks throughout as a named persona, referred to as "she", writing in jokes, slang and emojis over large type, bright colors and full-screen illustrations. Chat messages pair with GIFs chosen for the moment, including one matched to the exact amount the user has spent, and some messages contain profanity.

- On the bank connection screen, Cleo describes herself as "just an AI with bad attitude" who can't move the user's money.
- Slang used throughout includes "qs" for questions, "v" for very, "peeps" for people, and a capital K for okay.
- One pair of adjacent quick-reply buttons splits a single joke sentence, "I'm v good" and "at spending", across two separate options.
- The borrow tab addresses the user as "angel face".

### O4. Connecting through Plaid

A "link your account" screen tells the user that Plaid connects Cleo securely and that they're "in good company with millions of users", alongside Cleo's own reassurance that she can't move money or store bank logins. Tapping "connect me" opens a Plaid pop-up, after which the user enters a phone number, chooses their institution, enters bank credentials, and verifies their identity with a code sent by text or email.

- The connect screen's alternative option is framed as wanting more information about security, not as a way to decline.
- The Plaid pop-up covers connecting effortlessly, states that Plaid doesn't sell personal information and uses it only with permission, and describes fraud reduction using account, transaction and connection history.
- No option to skip the bank connection is shown.
- This connected account is what supplies the balances, transactions, bills and income suggestions Cleo uses throughout.

### O5. Ready to launch

After identity verification, a full screen reads "are you ready?" with large type and illustrations, and a single button, "Unleash Cleo", opens the chat.

### O6. First chat greeting

The chat opens on its own, without the user typing anything, with a typing indicator before Cleo's first messages appear. Cleo greets the user by name, says "I've been expecting you" and "you just walked into the best decision of your fabulous life", shows a GIF of a woman clapping captioned "knew you could do it", then asks "so where do we start?".

- The starting options, each with its own emoji, are control my spending, get a cash advance, improve my credit score, and "I don't know, see where my money goes".
- Control my spending leads into the money habits quiz.
- At this point the nav bar shows spend, budget, chat, save and borrow, with a profile button in the top right.

### O7. Money habits quiz

Choosing "control my spending" opens a five-question quiz about money habits, introduced with a request to be honest and a line that the more Cleo knows, the better she can help. Questions are answered by quick reply, with Cleo responding to each before the next appears, and the quiz ends with a line about now having "enough ammo" to roast the user's worst habits, alongside a "roast me Cleo" button.

- One question asks how much of the user's income was usually spent over the last six months, counting paychecks, government support and student loans, with five options from not much up to all of it and then a lot more.
- Another question asks what the user is like with bills, with options including "I'm on top of them" and "they're on top of me".
- Cleo responds to one answer with "okay, not here to judge you".
- The remaining questions in the set of five aren't individually described.

### O8. The roast

The roast is a chat sequence that turns the user's own account figures into a joke, one figure at a time, each paired with its own GIF and advanced by a quick reply. It opens addressing the user by name with "let us descend into your madness" over a cat GIF, then states the amount spent this month as what the user "sunk", the amount received in the last two weeks with a line about being excited to see how creatively it gets wasted, and closes on the total spent over the last 13 months shown as a large number, before "okay, you're free now".

- Quick replies through the sequence include "yes, let's", "keep them coming" and "I can take more".
- The final figure is introduced with a line warning the user not to look "so stunned" once they see the 13-month total.
- After the roast, Cleo asks how it felt, offering "it was terrible", "barely felt it" and "something else" as replies.
- The figures restate what the user has already told Cleo rather than commenting on individual purchases.

### O9. Overview and daily limit

After the roast, Cleo says the user's "overview is ready" and explains how it works: she lays out what's coming in and going out, gives the user a daily spending limit, and the user checks their phone to stay on track. Replying "I can do this" leads to "you're all set", then a line describing the limit as a harness protecting against financial chaos, with a "see updated budget" button.

- The explanation arrives as a series of message bubbles appearing one under another.
- The step directly after "see updated budget" is confirming bills.

### O10. Bill confirmation and setup

A "track your bills" screen offers to make bills "suck less" if the user confirms them, opening a pop-up asking "are these your bills?", defining a bill as any recurring or fixed payment, and listing payments drawn from the connected account with instructions to tap to edit or swipe to remove. The next screen congratulates the user, "like a boss", for having "fully customized" their budget, with a "take a look" button opening the finished budget.

- The congratulation screen uses background illustrations.
- No separate step in which the user manually sets a limit amount happens before the "fully customized" message; that comes later.

---

## Core loop and automation

This section covers the chat home and the wider set of features it opens into once the budget exists: the spend and budget tabs, bill and subscription management, categorization, affordability checks, balance views, hype mode, and the money game, plus the save tab's autosave and wallet setup and the borrow tab's own credit product.

### O11. Spend tab overview

The spend tab opens with swipeable account cards, the first showing the connected checking account's balance and a second reading "connect to bank" for an account not yet linked, with add-account and manage-account buttons and a recent transactions list with a "view more" option.

- Add account reopens the Plaid connection flow.
- Manage account lists active accounts with visibility toggles for each, plus an option to connect another.
- An edit button on recent transactions opens a control for how many transactions to display, with up and down adjusters.

### O12. Budget tab summary

The budget tab shows the current month with the number of days left, two coin stacks for money in and money out, and figures for the limit, the amount spent, and the amount still due, along with a larger figure and a per-day amount. Elsewhere in chat, the same balance is stated directly as $1,200 left of a $1,400 budget, which is how the limit and the remaining amount read.

- A widget checking in after two weeks of budgeting asks for the user's thoughts so far.
- A settings button opens budget settings showing the user's linked paycheck, its company, date and amount.
- The same budget view is reached both from onboarding's "take a look" button and directly from the budget tab.

### O13. Bill suggestions

Scrolling the budget tab shows bills due, including subscriptions, with an option to add more. An arrow opens a prompt asking whether any of the listed past transactions are bills, and tapping one adds it as a bill with its amount, frequency and next payment date filled in.

- The user can view and edit the full list of bills.
- Suggested transactions are drawn from previous days and earlier.

### O14. Essential and other spending

The spending section shows two swipeable cards, essential and other spending, each with an amount and its share of income, and swiping between them changes the category breakdown below. An edit-categories screen lets the user move categories between essential and other and save the change.

- Other spending shows zero for the month shown.
- The category breakdown lists categories such as transport and transfer out, with limits shown where set.
- A separate section shows income received this month and savings, which shows no transactions; another section shows what's excluded from the breakdown entirely.

### O15. Chat home cards

The chat tab opens on a set of swipeable cards rather than a message thread: today's money insights, explore, get smarter, a game, stay on top, where's it going, and need help, each leading into its own guided conversation or view, alongside a text box for typing directly to Cleo.

- Today's money insights holds an affordability check and an upcoming bills view.
- Explore holds hype mode.
- Get smarter holds the gambling-addiction article.
- Stay on top restates the current budget as $1,200 left of a $1,400 budget with an end date and buttons for income, bills and budget.
- Where's it going reads "good to check every day" and opens balance, top spends, whole month and categorization views.
- Need help offers a tutorial, a help center, and a "human please" option.

### O16. Chat card completion marks

Once a chat card has been used, it shows a green check mark, which reads as a record of which cards have already been seen or completed.

- The first group of cards on the chat home is headed "today's".
- No reward or unlock is tied to the marks.
- Whether the marks clear or the cards change on a later day isn't shown.

### O17. Affordability check

The "can you afford that thing?" conversation asks the user to picture the purchase they want to make, then asks roughly how much it costs. After an amount is entered, Cleo states the user's current daily spend and balance across all accounts, and says the user is good for the purchase, with a "set income" button offered alongside.

- The first quick reply is "visualizing".
- The conversation closes with "onwards and upwards".

### O18. Typed savings query

Typing "how much did I save this month?" into chat returns an overview from the start of the month to the current date, covering income, spending and net, with three follow-up routes: by categories, by merchants, and to the insights feed.

- What the insights feed named here actually shows isn't described.

### O19. Income setup

Setting income opens a screen explaining that Cleo needs to know what's coming in to guide what the user can spend, offering detected payroll or miscellaneous deposits for one-tap selection, or manual entry. Manual entry asks who is paying, how often, when the next payment lands, and how much it is, then shows upcoming paydays before confirming "all done".

- Detected incomes are deposits that have already been arriving in the connected account.

### O20. Upcoming bills and subscriptions

The upcoming bills conversation opens with an animated "bills" screen, states the total due before payday, and asks the user with a thumbs up or down whether their balance can handle it; a thumbs down leads to a question about whether all the bills are necessary or whether there's room to cut back. Cleo then asks the user to swipe right to keep a subscription or left on "something you might want to ditch", presenting the user's subscriptions as swipeable cards.

- One quick reply is offered in two spellings, a straight "maybe" and a joke version.
- What happens to a subscription after a left swipe isn't described.

### O21. Hype mode

"Need a boost? It's hype mode" opens a chat that promises enthusiasm, stats, memes, GIFs and emoji once the user taps in, then states the amount spent this month, the bank charges for the month with an offer to send the bank "some stern GIFs", the total money made, and the biggest recent purchase, each with its own quick reply. It closes with "we're done here" and a request to leave a review.

- The spending message is answered by two adjacent buttons that together read as one sentence, "I'm v good" and "at spending".
- The money-made message is answered "delicious".

### O22. Gambling addiction article

Opening the gambling addiction card starts a short chat introduction in which Cleo calls it "not a super fun topic but a v real one", cites a figure of 46 million people in the US, and points to a five-minute blog read for ways to help, with options to go to the blog or back to insights.

- The linked blog article's own content isn't described.

### O23. Balance and dashboard views

The balance view shows the connected bank's balance and an overall figure in chat, with when it was last updated, and offers graph, dashboard, home and refresh options. The graph shows the balance trend over the past three months, and the dashboard breaks the current month's transactions into categories and merchants across three tabs.

- Refresh accounts simply refreshes the account information shown.

### O24. Make Cleo smarter

"Make Cleo smarter" opens a chat asking the user to categorize a few transactions, then shows one unsorted transaction at a time with a "choose category" button listing six or seven suggested categories, plus a "more categories" option.

- Categorization runs one transaction at a time through the conversation, not as a settings list.
- What changes after a category is chosen isn't described.

### O25. The money game

Playing opens a chat quiz about the user's own recent account activity, asking, for instance, whether any bills were paid this week and how much was spent in the last seven days, judging each answer against the connected account's actual data. A wrong answer to the bills question returns "sadly not correct" with a route to add bills, and a wrong spending guess returns "nope", before a "next question" button advances the quiz.

- The bills question is yes or no; the spending question offers three amounts to choose from.
- The total number of questions in a play isn't stated.
- Game stats sits as the last option after several questions.

### O26. Spending review

Starting a review opens a practice round of three cards asking the user to rate each loved or regret, or a don't-know option, ending with "that's all, you're set" and a line about spotting trends the more the user plays. The real round then runs through the user's own payments the same way, closing with "you're done for today" and, after a loading sequence, a summary reading "nicely done, ratings are in" with totals for loved and regretted spends and a separate list of don't-know items.

- The first review is labeled as covering 20 spends.
- The loading sequence includes lines about the user's loves and regrets before "summarizing those spends".
- The summary shown counts 11 loved items.

### O27. Save tab quick actions

The save tab opens on a "yum, savings" screen with cake illustrations and a quick actions list: an autosave setup pitched as taking two minutes, and a cashback item marked incomplete that routes to signing up for Plus.

- The incomplete tag marks cashback as something the user hasn't set up.

### O28. Wallet pitch

The wallet screen offers to help the user put money aside automatically, describing it as cornering off spare change, with a "get started" button.

- The onboarding carousel describes this same feature as automatic transfers to a savings wallet.
- How money actually moves into or out of the wallet, and whether it can be spent directly, isn't shown, since setup isn't completed.

### O29. Borrow tab intro

The borrow tab opens with Cleo greeting the user as "angel face" beside an illustration of a piggy with a key, then asks where to start: getting a cash advance, building credit, or both.

---

## Goals and progression

This section covers how Cleo's monthly spending limit gets set and tracked, and the 21-day habit challenge previewed in the habits tab.

### O30. Setting the monthly limit

Tapping the budget's "until" figure opens "set your limit for the month", stated as including all bills, with a toggle for setting limits by category, listed "based on your average spending" and each adjustable with plus and minus controls. The sheet closes with "all right, I can do this".

- Categories listed include transfer out, general, bank charges, transport, cash, bills, savings, shopping, holidays, groceries, eating out, loans and expenses.
- The overall limit and any category limits are both set by the user in this one sheet.

### O31. On-track and overspent states

The user can switch between months by tapping the dates. A month that stays on track shows a thumbs-up under the coin stacks; an overspent month shows a skull instead, turns the line under the month red, and reads "rip budget", with a past overspent month keeping its result labeled "overspent".

- The month view counts down the days left before it ends.
- The stay-on-top chat card restates the same amount left and end date.
- Whether a month that finished within its limit keeps a distinct result of its own, and whether the limit carries forward or has to be set again, aren't shown.

### O32. 21-day challenge preview

The habits tab opens on a pitch to "turn vices into savings" and shows a preview reading "21 of 21, on track" alongside a widget for an eating-out limit, with a progress bar and a line about staying on track to save $85. This preview is a mock-up of what an active challenge would look like, not something running on the account.

- The "21 of 21" reading is a day count within a 21-day period.
- The preview frames a challenge as a limit on one spending category over a fixed period, with a savings amount attached to it.

### O33. Starting a challenge

The start screen reads "start challenges and save money" and lists three activities: challenging a vice by picking a spending habit to test willpower against, starting to save by tracking challenges, and spotting trends by reviewing spending for saving tips. Tapping through leads to the spending review screen rather than to an active vice challenge.

- Whether the three listed activities are things to select or just descriptions of what the feature does isn't settled by the screen itself.
- No vice challenge is actually started.

### O34. Game stats

Game stats shows a knowledge score of 0%, one play, a second counter also at zero, and a streak of one, followed by a game FAQ.

- These stats follow a single play in which the user's answers were marked incorrect.
- The streak reads one even though the knowledge score is 0%.
- What increases or resets the streak isn't shown.

### O35. Review streak

Before any review, the habits screen shows a review streak of zero. After completing the first review, the streak reads one, the review is marked done, and the screen shows counts of loved and regretted spends alongside a "tips and truths" section commenting on specific purchases, closing with "play again tomorrow to remain a spending review legend".

- One tip comments on a McDonald's purchase and what else its amount could have bought; another comments on an account fee.
- The counts shown include five regrets.
- "Spending review legend" is copy only, with no separate badge or status attached to it.

---

## Access and eligibility

This section covers the state-law restriction on Cleo's paid features, the habits tab's arrival after onboarding, and the identity and age checks gating wallet setup.

### O36. State restriction notice

After email verification, a screen states that, due to the user's state's laws, cash advances on subscriptions like Plus or Builder aren't available, while insights, budget and savings tools are "good to go", laid out in chat bubbles with an "explore the app" button.

- The restriction follows from the US state chosen during sign-up.
- This notice names Plus and Builder before either plan is shown on its own screen.

### O37. Habits tab appears

During onboarding the nav bar shows spend, budget, chat, save and borrow; once onboarding is finished, habits appears as a sixth, final item.

- The change is tied to completing onboarding rather than to any specific screen.
- No on-screen message announces the new tab.

### O38. Paid plans unusable here

Because of the state laws that apply to this account, neither Cleo Plus nor Cleo Builder can actually be used, though both plan screens remain browsable.

- Whether the plan screens themselves display a restriction message isn't described.

### O39. Cleo wallet setup

Setting up autosave opens a wallet form asking for the name as it appears on a government ID, email, mobile number, date of birth with a note that the user must be 18 or over, address, and the last four digits of a Social Security number, with terms requiring agreement to Cleo's own terms and to a second party the transcript renders as "Dwolla". Setup isn't completed here.

- The screen doesn't explain who the second party in the terms is.

---

## Economy and resources

(No observations in this app.)

---

## Social

(No observations in this app.)

---

## Reach beyond the app

(No observations in this app.)

---

## Monetization

This section covers Cleo's two paid plans, Plus and Builder, neither usable under this account's state restriction.

### O40. Choose your fighter

Scrolling the borrow tab reaches "choose your fighter", comparing two plans: Cleo Builder, pitched as everything in Plus plus a "best credit life", and Cleo Plus, pitched around avoiding overdraft fees with an interest-free cash advance, each with a learn-more link.

- Builder is listed before Plus.

### O41. Plan comparison checklist

"Take a closer look" compares Free, Plus and Builder in checklist form. Builder is described as everything in Free and Plus, plus a cash advance up to $250 if eligible, interest-free and available whenever needed, a credit builder card, cashback at some stores, 24/7 VIP support from a dedicated team, and credit history and coaching, followed by a "get Cleo Builder" button, an FAQ and customer testimonials.

- FAQ questions cover the kind of card, its credit limit, whether fees apply, and what kind of spending to use it for.
- The onboarding carousel states the cash advance as up to $500, while this checklist states up to $250.
- The save tab ties cashback to Plus, while this checklist lists cashback as a Builder feature.
- No prices are stated anywhere in this comparison.

---

## Return triggers

This section covers what Cleo uses to bring users back: a notification opt-in, daily check-in copy, a spending review schedule, and the review requests that close out its roast and hype mode sequences.

### O42. Notification opt-in

After the state notice, a screen reads "never miss a dollar" with a sample notification reading "you smashed yet another target. Stick to $50 today to stay on track", alongside three points, tailored coaching, watching savings grow, and reminders that the user is "only human", with "not now" and "turn on notifications" options.

- Not now sits on the same screen as turn on notifications.
- Which option the user picks, and any system-level permission prompt, aren't shown.

### O43. Reviews scheduled ahead

Before the first review, the habits screen lists the current review alongside one due tomorrow and another in three days. After completing a review, the next one is shown as due tomorrow, with a line encouraging the user to play again to remain a "spending review legend".

- The schedule reads roughly as a review every couple of days.
- What happens to a scheduled review if it's missed isn't shown.

### O44. Daily check-in copy

Onboarding describes the daily spending limit as something the user checks on their phone to stay on track, and the "where's it going" chat card carries the same idea directly, reading "good to check every day".

- The sample notification in the opt-in screen pairs a daily amount with the same "stay on track" framing.

### O45. Review requests

The roast ends with a request to share the joy and leave a review, answered affirmatively; hype mode closes the same way, with "we're done here" followed by a review request answered "bring it".

- Both requests arrive as the very next chat message after each sequence's final figure.
- The only reply shown for either request is affirmative.
- Where either reply actually leads, beyond leaving a review, isn't described.

