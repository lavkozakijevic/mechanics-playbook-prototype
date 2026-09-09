# Dave: Behavioral Design Analysis

**Run:** independent analysis from Granola transcripts and the current library only.
**Date of run:** 9 September 2026.

## Sources

Two Granola sessions were retrieved in full:

1. "Dave app analysis notes", 3 June 2026, 12:25 (GMT+2). The complete walkthrough, recorded across three sittings within one note.
2. "leed tekstovi", 3 June 2026, 13:00 (GMT+2). Contains an unrelated conversation followed by a re-recording of a segment already present in source 1 (ATM withdrawal, bill pay, Accounts, Goals, external account). It contributed no facts not already in source 1 and is cited only where it corroborates.

No other source was used. No prior analysis of this app, published case study, or general knowledge of Dave was read or referenced.

## Evidence key

Every claim below carries one of four tiers, per the operating card:

- **Directly observed:** stated in the walkthrough as seen on screen, including quoted copy.
- **Strongly supported:** multiple observations converge and no strong alternative reading survives.
- **Plausible:** fits the evidence, competing explanations remain open.
- **Unresolved:** the session did not reach or resolve it.

Unless a line says otherwise, observations in Pass One are **directly observed**.

**Sequence caveat.** The walkthrough is a narrated screen-by-screen record. At two points the narrator states that the route between screens was not clear: the entry point into the Roundup setup, and part of the Home screen layout. Observations depending on those transitions are marked.

---

# Pass One: Observation Record

## 1. Onboarding and first run

**O1. Headline offer, qualifying terms one tap away.**
The pre-account screen reads "Get up to $500 when you need it. No interest, no credit check," with an asterisk and a "See terms" link. Tapping it opens: "Extra Cash is a demand deposit account (DDA) with overdraft utility. An Extra Cash advance will result in a negative balance, is subject to eligibility. Delivery fees may apply. See account agreement for details." The headline states the amount and the two absences; the qualifiers (eligibility, negative balance, delivery fees) sit behind the tap. Two buttons: Login, Sign up for Dave.
*Cross-reference: Access and eligibility (O24, O28).*

**O2. One sign-up path, consent bundled into the continue button.**
"First create a sign in ID": email address and password only. No alternative sign-in method was offered. Beneath the fields: "I agree to Dave's privacy policy, terms of use and electronic communication consent." The consent is carried by the "Agree and continue" button rather than a separate checkbox.

**O3. Identity collected in single-field steps.**
"Let's get started. What's your legal name?" (first, last), then "Nice to meet you. What's your mobile phone number? Your phone number is used to protect your account with two-factor verification," then a six-digit code entry with a resend control. One decision per screen.

**O4. Marketing consent placed on the verification screen.**
Below the six-digit code field: "I agree to receive special offers and promotions via SMS at the number provided. Consent is not a condition to purchase. Message and data rates may apply. Message frequency varies. Reply STOP to unsubscribe." The marketing opt-in appears on the one screen the user cannot leave without completing, and the number in question is the one just given for security.

**O5. Biometrics offered, passcode required.**
"Do you want to use Face ID to log in?" with "Yes, sign in with Face ID" or "Skip for now." Either way the next two screens create and confirm a four-digit app passcode. The optional step is the convenience; the required step is the credential.

**O6. Bank link presented as skippable, then repeated with the fee attached.**
"Connect your primary bank. Connect the bank account you get paid so we can determine your best approval amount. Get advances instantly for a small fee." Three exits are available: "I don't have a bank account", an X in the top right, or "Agree and continue". The continue button also carries "I agree to the recurring payment authorization agreement for the $1 monthly membership fee."
Continuing leads to a second ask that states what the first did not: "Connect your bank and debit card. Dave charges a $1 monthly membership fee to keep your bank account connected, send you low balance alerts and provide budgeting tools." Then a numbered list: 1. Connect your bank account. 2. Link your bank account's debit card.
The link is skippable at this screen and required for the app's core function (**strongly supported**: advance eligibility is later stated to depend on the linked primary bank, O25).
*Cross-reference: Money (O39).*

**O7. Connection handed to a named third party, with instructions on what to permit.**
"Dave uses Plaid to connect your account. Connect in seconds, 8,000 apps trust Plaid. Quickly connect to financial institutions. Keep your data safe. Plaid uses best in class encryption to help protect your data." Inside Plaid: phone number, or "continue as guest"; phone verification; account selection ("Plaid will only share data from the selected account"); then the bank's own login, preceded by "After logging in to your bank, make sure you check all these boxes: checking or prepaid account, bank account numbers, bank account holder info."
Dave tells the user which permissions to grant inside the bank's screen.

**O8. Aggregate outcome figures shown during the linking wait.**
The "Linking bank account" progress bar is accompanied by rotating copy: "Avoid overdraft fees. Dave's paying members lowered their overdraft fees by nearly 70%," then "They help over 11 million members stay on top of their finances," then "Analyzing transactions."
The wait is filled with figures about other members and about what the system is doing with the data just granted.

**O9. Debit card linked as the settlement instrument.**
"Add and link your debit card. Make sure it's associated with your bank account. This card may be used to settle any advances you take." The repayment instrument is collected before any advance is offered.
*Cross-reference: Access and eligibility (O28).*

**O10. First run ends on a single next action.**
"Dave. Hi, welcome. Start building your financial future," with one button: "Open checking account." The bottom navigation carries four destinations: Home, Accounts, Extra Cash, Grow. A settings cog sits in the top right.
The narrator states the rest of the Home layout at this point was not clearly readable (**sequence caveat**).

## 2. Core loop and automation

**O11. Roundups on card spend, routed automatically into a separate account.**
"Save every time you spend with Roundup. Round up purchases to the nearest dollar every time you use your Dave debit card. Roundups automatically roll into a Goals account. Contribute additional money at your own pace. Take your savings out or pause anytime." Links to "Learn more about Roundup" and the Dave Goals deposit agreement and disclosures.
Three properties are stated in one screen: automatic contribution, manual top-up, and reversibility (withdraw or pause).
The narrator states the route into this screen was not clear (**sequence caveat**). The screen content itself is directly observed.

**O12. Roundup cannot exist without a goal.**
"Open your Goals account to start using Roundup. We'll create a goal for your Dave debit card purchases to round up into." A separate consent is required: "I agree to the Dave Goals deposit agreement and disclosures." Then "Create Goals account", then "Your Goals account is ready for roundups. Roundups are set up for your new goal. Personalize it by editing title, goal amount and end date."
The automation is delivered pre-attached to a target the user has not chosen yet.
*Cross-reference: Goals and progression (O18).*

**O13. Recurring transfers, with the recurrence toggle already on.**
From "Do more with Dave Checking": enter an amount, choose the source account, then a recurring toggle. The narrator states the toggle is on by default once the recurring path is entered rather than requiring a tap. Frequency options: weekly, other. Transfer day is selected. A checkbox states: "By checking this you agree that Dave will make a recurring transfer to your Dave Checking account from [source] for [amount] weekly on [day]. See the recurring payment authorization agreement for more info."
Cancellation is one toggle: "If we want to cancel it, we just turn the toggle off and it is cancelled." Setting up requires several steps and a swipe; cancelling requires one.

**O14. Transfers confirmed by swipe, not tap.**
"We have to swipe to the right to make it happen." Applies to one-off transfers and to recurring setup. Confirmation carries a deliberate physical gesture.

**O15. Direct deposit offered by three routes, with an explicit part-or-all choice.**
"Earlier paydays are easy with Dave. Get paid up to two days early." Three options:
- **Find your employer**, tagged "fastest". "Search for and sign into your company's pay portal. Fast and easy." Handled by Pinwheel: "Dave uses Pinwheel to connect to your payroll account. Encrypted and secure. Always private. They will never be able to access your credentials. Convenient and fast."
- **Copy and paste**. "Get your Dave Checking account info and enter it into your company's pay portal."
- **Send HR a form**. "Answer a few questions and we'll create a direct deposit form for you."
Footnote: "Early access to direct deposit funds depends on timing and availability of the payroll files sent from the payer. These funds can be available up to two business days in advance of the scheduled payment date."
The form route runs: "Where do you work?" then "How much of each paycheck would you like to deposit? You can always change this later if you need to," with two buttons: **Deposit full paycheck** or **Deposit part of paycheck**. Then "Your form is all filled out," a checkbox "We'll pre-sign the form for you," and two send options: to my employer, or to myself. Confirmation: "Check your email. We've emailed you a direct deposit form," with resend and done.
The partial option is offered at the same size and prominence as the full one, and the reversal is stated in the question itself.

**O16. Everyday banking grouped behind one Home entry.**
"Do more with Dave Checking" opens six options: direct deposit, recurring transfer, scan or send a check, deposit cash, withdraw cash, pay bills.

**O17. Cash handling delivered as maps and instructions rather than transactions.**
- **Deposit cash:** "Select location. Fee free deposits are at CVS and Walgreens with barcode scan. Other locations may have a service fee up to $4.95 for a deposit." Then "Deposit cash. Follow prompts on screen to deposit cash, scan an in-app barcode or swipe your card." Then "Keep your receipt. Deposits typically post within 10 minutes. Some locations may take up to 30 minutes." "See locations" opens a map of nearby deposit points.
- **Withdraw cash:** a map and list of nearby ATMs; tapping one gives full address, open status and opening hours, with "Get directions" and "How to withdraw cash" ("Insert your Dave debit card at the ATM. Enter your 4-digit debit card PIN. Follow the prompts on the ATM to begin your transaction").
- **Scan or send a check:** scan, "10 days, no fee, instant for a fee"; send, "arrives within 5 business days, no fee." Scanning hands over to Ingo Money: "Let's meet Dave's partner, Ingo Money. They partner with Dave to process the checks you cash."
- **Pay bills:** three routes, the Dave debit card, the Dave Checking account (routing number, account number, partner bank, each tap-to-copy), or a mailed check ("send a check from your Dave Checking account for no fee, checks arrive within five business days").

## 3. Goals and progression

**O18. A goal is a named target with an amount, an end date, a progress bar and a picture.**
Goal details show: savings balance, goal amount (created at a default of $75), progress bar, "Roundup is turned on", editable title and end date, an editable banner image, and a button "Set a recurring deposit. Reach your goals faster by setting up a recurring deposit."

**O19. The goal's banner image is chosen from a stock photo library.**
"Add a photo to represent your goal. Add photo" opens Unsplash; the user selects an image, which becomes the goal's banner. The image is chosen freely and changes nothing about the goal's amount, rules or behaviour (**strongly supported**: no functional consequence appears anywhere in the flow).

**O20. Multiple goals share one ceiling.**
On creating a second goal: "You can set this goal amount up to $24,925," against a stated overall limit of $25,000, with $75 accounted for by the existing goal. Since no deposit had been made into the first goal, the ceiling applies to goal target amounts rather than balances (**strongly supported**).

**O21. First deposit prompted with three small presets and a way out.**
"Start achieving your goal. Tiny amounts will quickly add up, so don't be afraid to kick things off with just a few bucks." Buttons: $5, $25, $50, then a custom amount, then "Maybe later" at the bottom. Choosing "Maybe later" completes goal creation. The copy argues down the size of the first commitment; the presets set the anchor at the low end.

**O22. Ending a goal is permanent and takes the automation with it.**
Every goal carries an "End goal" button. Confirmation: "End this goal. Ending this goal will deactivate it permanently, pause your automatic roundups, cancel any active recurring transfers. Once you end your goal, you can't reactivate it." Options: "Keep it" or "End goal."
Afterwards: "Goal ended. You can still access it in the past goals section," followed immediately by "Resume Roundup with a new goal. Create a new goal to restart your automatic savings with Roundup," with "Resume Roundup" or "Not now."
The only irreversible action observed in the app is the one that also switches off the savings automation, and the app offers the replacement in the same breath.
*Cross-reference: Core loop and automation (O11, O13).*

**O23. No recognition of reaching a goal amount was observed.**
A target and a progress bar exist. Nothing in the session showed the system marking a target as reached, recording the crossing, or responding differently at completion. **Unresolved:** the session never funded a goal to its target.

## 4. Access and eligibility

**O24. Extra Cash opens, but the advance does not.**
Extra Cash first shows "Get an Extra Cash advance up to $500. Open your Extra Cash and Dave Spending accounts to get started," with "See how Extra Cash works" and "Get started."
After the account is opened, the result is: "You're not eligible for an advance yet. Check back tomorrow to see if you're eligible," with "Get notified if you're eligible" and a link to the Extra Cash FAQ. A parallel screen states: "We're working on getting you approved for an advance. Check back tomorrow to see if you're eligible," with "Notify me when I'm eligible."
The account exists, holds a balance and accepts deposits; the benefit behind it does not resolve. **Unresolved (gated):** advance behaviour, amount setting and settlement were never reached.
*Cross-reference: Return triggers (O43).*

**O25. Eligibility is tied to the salary account specifically.**
On the Extra Cash balance screen: "Linked bank and debit cards. We use the bank to determine advance eligibility. Getting paid in a different bank? Connect your primary bank account."
The app does not ask for any bank account; it asks for the one that receives income, and it makes the advance the reason.
*Cross-reference: Onboarding (O6).*

**O26. Money placed in Extra Cash changes nothing about the advance.**
"Adding money to your Extra Cash account doesn't increase your advance amount and won't affect your advance eligibility." A Deposit button remains on the same screen. Dave states the ineffective route plainly and leaves it open.

**O27. Dave Checking requires full identity verification.**
"Confirm your identity. When were you born?" then "What's your SSN? U.S. federal law requires this information to verify your identity," with "Protected by bank level security." Then "Review your info. Important: make sure the information you provide matches your ID documents" (legal name, date of birth, Social Security number, residential address), then "Confirming your identity. This may take a couple of minutes. Hang tight."
Then "Let's open your account. Don't worry, this won't impact your credit," a product card ("Dave Checking account. Spend instantly with no hidden fees") and a consent checkbox for the Dave Checking deposit agreement, disclosures and Evolve privacy policy.
The heaviest data request in the app is preceded by a statement of legal necessity and followed by a reassurance about credit.

**O28. Advance mechanics disclosed before eligibility is known.**
"How Extra Cash works: Get advances in two to three days for no fee or instantly for a small fee. When you take an advance, your Extra Cash account balance goes negative and will settle up on your next paycheck. You can also store your money in the account."
The repayment trigger is the user's payroll, not a date the user picks.
*Cross-reference: Return triggers (O47).*

**O29. Eleven questions pre-answered in an FAQ.**
Extra Cash FAQ lists: what is Extra Cash; what affects my eligibility for an advance; how do I receive my advance; how do I repay an advance; what is my Extra Cash balance; why is my Extra Cash balance negative; why can't I take another advance immediately; why did my advance amount change; what fees does Extra Cash have; what happens if my settlement is late.
The FAQ names conditions the product surfaces do not: a variable advance amount, a cooldown between advances, and late settlement.

## 5. Earning and utility

**O30. Surveys pay into the user's own Dave Checking account.**
Grow, top item, tagged "NEW": "Earn cash instantly. Take surveys and get cash in your Dave Checking account."
The intro screen: "Start earning with surveys. Get paid instantly to your Dave Checking account. When you don't qualify for a survey you're taking, it'll end early and you'll receive a partial reward." Three steps: "1. Get started with an intro survey. 2. Unlock higher paying surveys as you go. 3. See earnings in your Dave Checking account." Footer: "Dave uses inBrain AI to power your surveys. For more information about surveys, see Terms of Use."

**O31. Survey list shows payout beside duration, with a monthly earnings total.**
The list carries "Earnings for this month", a recommended set and a "quick surveys" set. Durations observed: 40, 19, 14 and 20 minutes in the recommended set; 8 and 10 minutes under quick surveys. Payouts were dictated in a form that does not resolve cleanly for every row; legible pairings are 1.44 (40 minutes), 1.16 (19 minutes), 0.45 (8 minutes) and 0.50 (10 minutes) (**directly observed for these four; the remaining amounts are unresolved**). A survey FAQ sits below: "How do Dave surveys work? Why am I getting disqualified?" The Side Hustle entry is featured again at the bottom of the same screen.

**O32. A profiling questionnaire precedes any paid survey.**
"Take surveys, earn rewards," a toggle to accept inBrain LLC terms and conditions and privacy policy, then "Get started." The sequence: gender (male, female); zip code; marital status (single never married, married, divorced, prefer not to answer, other); highest level of education completed (third grade or less; middle school grades four to eight; some high school; high school graduate; other post high school vocational training; some college but no degree; associate degree; college degree such as BA or BS); current employment status (employed, self-employed, other, student, each with a drop-down for more detail); race (white, Black or African American, American Indian or Alaska Native, some other race, prefer not to answer, Asian, Chinese, Pacific Islander); birth date. Completion is met with confetti and "Congratulations."
The unpaid step is the one that collects the demographic profile.

**O33. Screening happens mid-survey, and removes the survey from the list.**
Before starting: "Answer carefully to ensure you get the full reward." A food and beverage survey, approximately 10 minutes, was begun. Partway through: "Looks like one of your answers indicated you're not the person this survey was intended for." Returning to the list, the 10-minute survey was no longer shown.
The full reward is stated up front; the qualification test is applied during performance and is not visible in advance.

**O34. A job board inside a banking app, with Dave's own offer featured first.**
"Try a side hustle. Put more money in your pocket with a side job." Intro: "Welcome to Side Hustle. Want to earn quick cash with a side gig or find a new job? Dave has your back with Side Hustle. Search thousands of jobs from top employers. Find flexible work that fits your schedule. Enjoy having more money in your pocket."
Categories: flexible hours, part-time jobs, gig jobs, work from home, seasonal jobs, temp jobs. Listings carry a distance filter and a newest-to-oldest sort.
Under flexible hours, the first and featured listing is "Take surveys and earn cash instantly. Dave Surveys. Anywhere." Other listings observed: deliver with Uber Eats, physical therapist, licensed child and adolescent therapist, armed security officers, seasonal task associate, event staff. Tapping a listing shows details "provided by [employer]" and "Apply now", which leaves Dave for the employer's own site. Dave does not process the application.

**O35. Location permission requested at the job board, justified by unrelated features.**
Entering Side Hustle triggers: "Allow Dave to use your location. Dave uses your location to find ATMs and protect you from fraud." The stated reasons are the ATM map and fraud protection; the prompt appears on the job board.
*Cross-reference: Everyday banking maps (O17).*

## 6. Social

**O36. There is no social surface in the app.**
No feed, no groups, no profiles of other users, no comparison of the user's state against anyone else's, no shared or collective state, no messaging. The only person-to-person path anywhere in the app is the referral link (O37), which never shows the referrer anything about the other person beyond an approval notification.
Two places show information about other people, and neither is a social surface: the linking-wait figures about members in aggregate (O8), and the job listings from employers (O34).
This section is otherwise empty.

## 7. Growth

**O37. The referral pays the referrer in advance capacity, not in cash, and only after both sides repay.**
"Earn up to $100 more on your second Extra Cash advance. When you and your friend repay an advance, you'll get 20% more next time." Share or copy referral link.
Steps as listed: "1. Take an Extra Cash advance. Spend instantly on gas, bills or groceries. 2. Share a referral link. Help out your friends and family. 3. Your friend repays an Extra Cash advance. They'll know as soon as they're approved. 4. You get 20% more on your next advance. That's up to $100 more."
Conditions stated below: "Boost amount subject to change based on Extra Cash eligibility and approval amount. Earned boost expires after 60 days."
Referral FAQs: "What is an Extra Cash boost? My friend signed up, when do I get my boost? Do I have to pay the boost back?"
Three properties: the reward is a larger version of a borrowing entitlement rather than money; it requires the referrer to have taken and repaid an advance and the friend to have repaid one; and it decays after 60 days. The framing throughout is help rather than reward. No benefit to the invited friend was stated anywhere on the screen.

**O38. Referral sits above the user's own accounts in Settings.**
Settings opens with "Refer friends" as the first, largest and most prominent item, above Accounts (Extra Cash, Dave Checking, Goals), Info (membership, link banks and cards, edit profile, statements), App settings (notifications, security settings, language) and Support (FAQ, chat).

## 8. Money

**O39. The $1 monthly membership is authorized inside the bank-link consent and paused in one tap.**
Authorization is carried by the "Agree and continue" button on the bank connection screen (O6): "I agree to the recurring payment authorization agreement for the $1 monthly membership fee." The following screen states what it buys: "Dave charges a $1 monthly membership fee to keep your bank account connected, send you low balance alerts and provide budgeting tools."
Settings, Info, Membership shows next bill date, bill amount ($1), schedule (monthly) and payment method, with a pause control. The narrator notes it can then be resumed easily.
The charge is easy to accept incidentally and easy to stop deliberately.

**O40. Every movement of money has a free slow path and a fast paid path.**
- Bank transfer in: no fee, "will arrive in the next four to five business days."
- Apple Pay in: 1% fee.
- Advance out: two to three days for no fee, instantly for a small fee (amount not stated).
- Cash deposit: fee free at CVS and Walgreens with barcode; up to $4.95 elsewhere.
- Check scan: 10 days no fee, instant for a fee.
- Check send: five business days, no fee.
- ATM withdrawal: fee free at over 37,000 ATMs.
- Cash deposit locations: over 90,000 stated.
The paid option is never the only option, and the free option is always slower.

**O41. Interest appeared without being applied for.**
Accounts opens with a banner: "Congrats, you're now earning interest on your checking and Goals account," with a "Learn more" button. The narrator notes no application was made and the origin was not explained. Dave Checking and Goals both display "4% APY" on their account cards.

**O42. Five named partners, each introduced on its own screen before handover.**
Plaid (bank connection, O7), Pinwheel (payroll connection, O15), Ingo Money (check processing, O17), inBrain (surveys, O30), Evolve Bank & Trust (FDIC insurance and the deposit agreements, O27). Each is named, described and given a trust statement before the user is handed across. The Checking value proposition states FDIC insurance through Evolve Bank & Trust, member FDIC; the coverage figure was not clearly transcribed.
The narrator's remark on encountering the third one ("you have so many partners, man") is a reaction, not an observation, and is recorded here only to mark that the pattern was salient in the flow.

## 9. Return triggers

**O43. The instruction to a rejected user is a date, plus a way to be fetched back.**
"Check back tomorrow to see if you're eligible," paired with "Get notified if you're eligible" / "Notify me when I'm eligible." No reason is given for why tomorrow would differ; the narrator notes this directly. The eligibility FAQ ("What affects my eligibility for an advance?") is the only route to an explanation.
This is the app's most specific return instruction, and it belongs to the feature the user cannot yet have.

**O44. The notification prompt names offers alongside account changes.**
"Turn on notifications. This helps Dave share real time account changes with you along with a few offers." Options: "Not now" or "Turn on." The permission that carries the eligibility alert also carries promotional messaging.

**O45. Notification categories are granular, and one threshold is user-set.**
Settings, App settings, Notifications: a low balance alert with an editable threshold, observed set to "notify if predicted below $40" (predicted, not current). Push categories: low balance alerts, Dave Checking daily balance alerts, Extra Cash, special offers, product announcements, newsletter. The newsletter offers push only; no email option was observed.
The most frequent trigger available is a daily balance alert, and the alert with a user-set threshold is framed around a predicted shortfall.

**O46. A standing note about something in transit.**
"Your physical debit card should arrive by [date]. Use your digital card while you wait," with "View digital card." The banner persists on Home and inside Dave Checking. The card is added to Apple Wallet from the same area, and can be frozen, have its PIN set, or be replaced from the digital card screen.

**O47. Repayment cadence is set by payroll, not by the app.**
Advances "settle up on your next paycheck" (O28). Direct deposit brings pay in "up to two days early" (O15). Both tie the user's rhythm inside the app to the arrival of income.

**O48. Empty states carry the next instruction.**
"Recent activity. No activity yet. Get started by using your Dave Checking account. All of your activity will show up here." Below Home: "Set up direct deposit. Get paid up to two days early" and "Start a budget. Stay on top of your spending with Dave's smart budgeting tool." After a transfer completes: "Want to get paid up to two days early? Set up direct deposit."
Direct deposit is prompted from at least three separate surfaces.

---

# Pass Two: Tagging

Tags are applied only where the library entry in `/library/approved` genuinely describes the observation. Untagged observations stay in the record untouched.

## Tags applied

### Piggy Bank
**Observations:** O11, O12, O18, O20, O22.
**Confidence: confirmed.**

Roundups on Dave debit card purchases accumulate automatically into a Goals account that is maintained separately from Dave Checking (both appear as distinct accounts under Accounts, O18 and O41). The stored value is not part of the ordinary spendable balance and returns to use only through a distinct withdrawal or transfer ("Take your savings out or pause anytime", O11).

Every required condition is met by directly observed behaviour: a reserve separate from the ordinary available balance; contributions across multiple events (roundups, plus manual and recurring deposits); accumulated value that can later be transferred out; restriction from ordinary use while held; and a defined release action.

The library's own borderline case, "Automatic round-up savings pot", describes this implementation directly and resolves it in favour of the tag.

**Variants present:** automatic-contribution (roundups), direct-contribution (manual deposits and recurring transfers), user-withdrawal (release by transfer), multi-reserve (multiple goals, O20), capacity-limited ($25,000 across goals, O20).
**Variants not established:** partial-release (partial withdrawal was never observed), threshold-release, time-release, expiring, resetting. The end-goal flow (O22) deactivates the reserve rather than releasing it on a rule, and what happens to a balance held in an ended goal was not observed.

**Alternative considered:** a savings goal without a restricted reserve. Rejected because the Goals account is a distinct account with its own deposit agreement and its own balance, and the copy states that taking savings out is a separate action.

### Cosmetic Customization
**Observations:** O19 (with O18).
**Confidence: strongly supported.**

The goal banner image is selected from a stock library and applied to the goal, together with an editable title. Both change the goal's presentation and neither changes its amount, roundup behaviour, cap position, end date or any rule.

Required conditions met: an alternative presentation state exists for the goal; selection changes an observable presentational property; the system maintains which image is applied; the difference is observable on the goal detail screen.

This is customization content rather than a product configuration setting: the image is selected from a content library and used to represent a personal target, not to configure the app's appearance. The entry's exclusion for settings and preferences does not apply.

**Confidence is strongly supported rather than confirmed** because the session showed the picker and the applied banner but never demonstrated that the chosen image is without functional consequence; that rests on nothing in the flow attaching a consequence to it.

**Alternative considered:** a functional label or status indicator. Rejected because the image is user-chosen from an open library and is not determined by any underlying goal state.

### Variable Reward Outcome
**Observations:** O30, O33 (with O31).
**Confidence: plausible.**

A survey attempt is a reward-resolution event with at least two materially different results, stated by Dave before the event: the full reward on completion, or "you'll receive a partial reward" if the user is screened out mid-survey (O30). Which result occurs is decided during performance by a qualification test that is not visible to the user in advance ("Looks like one of your answers indicated you're not the person this survey was intended for", O33), so the result is not fully determined before resolution by a user-visible rule.

**Confidence stops at plausible.** The screened-out result was directly observed; the partial reward itself was never observed being granted, and its size was never stated. The alternative reading is that the partial reward is a fixed, disclosed consolation amount, which would place the outcome under a visible rule and remove the tag. Nothing in the session separates the two.

**Separating evidence:** whether the partial reward amount is stated in advance, and whether it varies between disqualifications.

**Overlap:** Loot Box, the specialization of this entry, does not apply. There is no acquired container or draw.

## Entries considered and not applied

**Advertisement Exposure.** Not applied. Nothing observed functions as an ad unit. The surfaces that promote something are Dave's own offerings (open a checking account, set up direct deposit, start a budget, take surveys, O10, O30, O34, O48) or named partner services the user is handed to as part of a function (O42). The entry's concise definition excludes both cross-promotion of partner offerings and the product's promotion of its own offerings, and its exclusion conditions repeat this for "the product's promotion of its own subscription, purchases, upgrades, or features". Under the operating card's rule to check exclusions before required conditions, no tag applies.
*Reported gap:* this entry contradicts itself. Its non-required conditions permit self-promotion ("the product may promote its own offering"), it retains a "House advertisement" variant, and its borderline case "Internal premium-plan banner" resolves in favour of the tag, all of which conflict with the concise definition and the exclusions. Six observations in this app turn on which half governs. The exclusions and the concise definition are treated as controlling here; the entry needs the stale sections removed.

**Rewarded Advertisement.** Not applied. Every rewarded advertisement requires an advertisement, and no advertisement is present. Survey payment is compensation for completing a research task, not a benefit conditioned on engaging with promotional content. The entry's exclusion for benefits granted "for purchasing, registering with, or using the promoted offering rather than for engaging with the advertisement itself" points the same way.
*See Pass Three, P4.*

**Milestone.** Not applied. Goals carry a target amount and a progress bar (O18), but the session showed no system recognition of reaching or crossing the target. The entry excludes exactly this: "Do not classify as a milestone when the product merely sets a future target but does not recognize reaching or crossing it." **Unresolved** rather than absent: the session never funded a goal to completion (O23).

**Achievement.** Not applied. The confetti and "Congratulations" after the demographic questionnaire (O32) is a celebratory message inside a partner's flow with no recorded attained state, no criterion marked complete and no persistence. The entry excludes classification from a celebratory message alone.

**Gifting.** Not applied. The referral (O37) directs its benefit to the sender, not the recipient. No product-defined benefit to the invited friend was stated on the referral screen. The core invariant, a non-reciprocal grant to an identified recipient, is not satisfied.

**Monthly Reward Card.** Not applied. The $1 monthly membership (O39) is a subscription that maintains continuous access to bank connection, alerts and budgeting tools. It does not create separate reward opportunities across recurring intervals, which the entry requires.

**Group Membership.** Not applied. "Members" in this app names paying subscribers (O8, O39), not participants in a system-recognized group. No group entity, membership relationship or member-scoped social condition exists.

**Soft Currency, Hard Currency, Spendable Credits and Tokens.** Not applied. Every balance in Dave is denominated in dollars in real accounts. There is no product-defined currency. Under the operating card's engagement-design test these are commerce infrastructure and are described in plain language.

**Daily Login Rewards.** Not applied. "Check back tomorrow" (O43) is an instruction to return for a re-evaluation, not a benefit granted or made claimable for accessing the product in a daily window.

**Not observed at all:** Streak, Energy, Lives, Leveling, Experience Points, Challenge, Daily / Weekly Quests, Leaderboard, Comparative Rank, Social Feed, Community Space, Clan / Guild, Loot Box, Season Content Pass, Seasonal Progression Pass, First-Purchase Bonus, Passive Construction, Set Collection, Variable Reward Schedule.

## Unresolved

**Extra Cash advance behaviour (O24, O28, O29).** The account was opened; the advance was never granted. Advance sizing, the stated variability of the amount, the cooldown between advances, settlement against payroll and late-settlement handling are all disclosed in copy and FAQ and none were observed operating. Locked behind an eligibility decision the session did not pass. No library entry covers a cash advance, so this is recorded rather than tagged.

**Survey progression (O30).** "Unlock higher paying surveys as you go" states a progression, but no tier, threshold, level or unlock state was shown, and the session's one survey attempt ended in disqualification. Gated behind survey volume the session did not reach. Which entry, if any, would apply cannot be determined from a single line of intro copy.

**Goal completion (O23).** See Milestone above.

**Budgeting and spending analysis.** Referenced repeatedly ("Start a budget. Stay on top of your spending with Dave's smart budgeting tool", O48; "provide budgeting tools", O39; a start-a-budget button on the external account screen) and never opened in the session.

---

# Pass Three: Proposed New Tags

Each proposal below is an observation with no matching library entry that meets all three tests: it would recur in other apps, it can be described without reference to Dave, and it is a designed experience pointing the user toward a behavior. These are proposals only. Nothing has been added to the library.

### P1. Deferred Eligibility Recheck

**Draft definition.** The system tells a user who does not currently qualify for a gated benefit that eligibility will be re-evaluated at a stated future point, and offers a notification channel that returns them when it changes.

**Source observations:** O24, O43, O44.

**Conditions it appears to depend on:**
- A benefit the product gates on an eligibility decision it controls and re-runs on its own schedule.
- A stated next evaluation point ("tomorrow"), given without a stated reason for the change.
- A registered account that persists between evaluations, so the user has a position to come back to.
- An opt-in notification path presented at the moment of refusal.
- Optionally, an explanation surface (an FAQ on what affects eligibility) reached separately.

**Why it is not covered.** Daily Login Rewards requires a benefit granted for access; here access grants nothing and the re-evaluation happens whether or not the user returns. Scheduled Return Triggers is a Layer Three pattern, not a mechanic. Nothing in the approved library describes a system that maintains and re-runs an eligibility state and communicates its next evaluation.

**Recurrence elsewhere:** consumer credit and lending, marketplace seller access, feature waitlists, insurance underwriting, any product with a rolling approval decision.

### P2. Referral Boost on Own Next Use

**Draft definition.** A referral rewards the referring user by increasing the size or terms of their own next use of the product's core benefit rather than paying cash or an item, contingent on both the referrer and the invited user completing a defined obligation, and decaying if unused within a set period.

**Source observations:** O37, O38.

**Conditions it appears to depend on:**
- A core benefit whose size the product sets per use (a limit, an allowance, a capacity, a rate).
- A referral link the user can share.
- A completion condition on both sides, not merely signup.
- An increase expressed as a proportion of the user's own next instance of that benefit, with a stated ceiling.
- An expiry on the earned increase.
- Framing of the invitation as help to the recipient rather than as reward to the sender.

**Why it is not covered.** Gifting requires the benefit to reach the recipient. Nothing in the library describes a referral at all, and nothing describes a reward paid as an enlargement of an entitlement the user must then choose to use.

**Recurrence elsewhere:** credit and borrowing limits, trading or withdrawal limits, delivery or rideshare allowances, storage or usage quotas, any product where the unit of value is capacity rather than currency.

### P3. Deposit Split Election

**Draft definition.** At the point of directing a recurring external income stream into the product, the system offers an explicit choice to route part of it rather than all of it, presented at equal weight to the full option and paired with a stated reversal.

**Source observations:** O15.

**Conditions it appears to depend on:**
- An external recurring inflow the product wants routed to itself.
- A setup path the product can complete on the user's behalf (an integration, a generated form, copyable credentials).
- A binary or proportional choice presented as a normal option rather than a lesser one.
- Copy that states the choice is changeable before it is made.
- The elected split maintained as system state that produces the form or integration.

**Why it is not covered.** Nothing in the library describes a mechanic for sizing a user's first ongoing commitment. The choice is not a billing arrangement: it sets how much of a behavior the user starts with, and the product maintains and acts on the election.

**Recurrence elsewhere:** banking and neobanks, savings and investment apps, payroll-linked benefits, any product asking a user to move a recurring flow away from an incumbent.

### P4. Paid Task Wall

**Draft definition.** A list of third-party tasks with stated payouts and durations, presented inside the product, whose completion credits the user's own balance in that product. Not an advertising placement: the tasks promote nothing.

**Source observations:** O30, O31, O33, O34.

**Conditions it appears to depend on:**
- A third-party supply partner named to the user.
- Task entries showing a payout beside a time cost, so the user can compare rates.
- A profiling step that determines which tasks the user is shown.
- A qualification test applied during rather than before the task, with a stated partial payment on failure.
- Task availability that changes in response to attempts and profile state.
- Payout into the product's own balance rather than an external account.

**Why it is not covered.** Advertisement Exposure now excludes non-ad earn surfaces and requires a unit whose primary function is to promote a subject; a research survey and a job listing promote nothing. Rewarded Advertisement requires an advertisement. The library therefore has no entry for a user-facing earn surface, which is a growing category in consumer finance.

**Caveat on the third test.** This proposal sits closest to the boundary against commercial arrangements. It is offered as a tag on the user-facing task surface and its designed properties (rate comparison, profiling, mid-task screening), not on the revenue-share behind it.

## Observations proposed for no tag

Two recurring designs were recorded and are deliberately not proposed, because they describe flow shape rather than a maintained system state, and Layer Three already carries the relevant strategies:

- **Requirement framed as optional, then repeated with fuller terms** (O6): a step the core function depends on is presented with three visible exits, then re-presented on the following screen with the fee and the reason the first ask omitted.
- **Permission requested in an unrelated context** (O35): a location prompt justified by ATM search and fraud protection, raised on entry to the job board.

---

# System View

## What everything hangs from

The linked primary bank account (O6, O7) is the root. Nothing meaningful in Dave works without it, and the app makes it the second thing it asks for. It sets advance eligibility (O25), it authorizes the $1 membership (O39), and it supplies the transaction history behind alerts and budgeting (O39, O45). The app is careful to let the user skip it, and equally careful to ask again immediately with a fuller explanation.

Dave Checking (O27) is the second root. It is where the debit card comes from, and the debit card is what roundups run on (O11). It is where survey earnings land (O30). It is where direct deposit lands (O15). Opening it costs the user their Social Security number, which is the largest single ask in the app, and the app places it behind a legal justification and a credit reassurance.

## The chains

**Savings chain.** Dave Checking → debit card → card spend → roundups → Goals account (Piggy Bank). Each link is a precondition for the next, and the app builds the chain in reverse order of the user's benefit: it opens the Goals account in order to have somewhere for roundups to go (O12), before the user has decided what they are saving for. Ending a goal cuts the chain at its last link and takes the automation with it (O22), which is why the app offers a replacement goal in the same screen.

**Advance chain.** Primary bank + payroll signal → eligibility decision → advance up to $500 → settlement at the next paycheck → repayment history → referral boost on the next advance (O25, O28, O37). This chain is the reason the onboarding asks for the salary account specifically rather than any account, and the reason the FAQ carries a question about why an advance amount changed. The session never entered this chain, so everything past the eligibility decision is unresolved.

**Earning chain.** Surveys and Side Hustle → Dave Checking balance → available for roundups and goals (O30, O34, O11). This is the only chain in the app that creates money rather than moving or lending it, and it feeds directly back into the savings chain. The Side Hustle board features Dave's own surveys as its first listing, which loops the smaller earn surface back into the larger one (O34).

**Return chain.** Eligibility refusal → "check back tomorrow" → notification permission → daily balance alerts and low-balance predictions (O43, O44, O45). The notification permission is asked for at the moment the user has just been refused something, and it carries offers as well as account changes. The low-balance alert is set on a *predicted* shortfall rather than a current one, which makes it a forward-looking trigger.

## What direct deposit does to all of it

Direct deposit is the single lever that improves the user's position in every chain at once: it brings pay two days early, it strengthens the income signal the advance decision runs on, and it puts the balance inside Dave where roundups and goals can reach it. This is consistent with it being prompted from at least three separate surfaces (O48, O15, and after every transfer), being the only setup with three parallel routes, and being the only place in the app that offers to do the paperwork on the user's behalf. The partial-paycheck option (P3) lowers the size of the first step onto this lever without changing where it leads.

## Where the app spends its reversibility

Almost everything in Dave is reversible in one action: pause the membership (O39), cancel a recurring transfer by toggling it off (O13), freeze the card (O46), pause roundups (O11), turn off any notification category (O45). The app states reversibility in copy repeatedly, before the commitment rather than after ("Take your savings out or pause anytime"; "You can always change this later if you need to").

Against that, exactly one action is permanent, and it is ending a goal (O22), which also silently cascades into pausing roundups and cancelling recurring transfers. The app's only irreversible action is the one that switches off its savings automation.

## Dependency summary

| Depends on | Enables |
|---|---|
| Linked primary bank (O6, O7) | Advance eligibility (O25), $1 membership (O39), alerts and budgeting (O45) |
| Dave Checking + SSN verification (O27) | Debit card, roundups (O11), direct deposit (O15), survey payouts (O30) |
| Debit card spend | Roundups (O11) |
| Goals account (O12) | Roundups have a destination; Piggy Bank exists |
| Payroll timing (O15, O28) | Advance settlement, early pay, income signal |
| Advance taken and repaid (O37) | Referral boost eligibility |
| Notification permission (O44) | Eligibility alert (O43), balance alerts (O45) |
| Demographic questionnaire (O32) | Survey availability (O31) |

## What the record cannot say

The session is one walkthrough by one user who was refused an advance. It therefore observed the entire acquisition surface and almost none of the retention surface. Nothing here supports any claim about whether any of these designs work, how often users return, whether the advance eligibility ever resolves, or what the app looks like to a user who has taken and repaid an advance. Everything in the advance chain past the eligibility screen, the whole of budgeting, and the survey progression remain unresolved.
