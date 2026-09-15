# Acorns: App Analysis

**Session date:** 02 Jun 2026

**Additional sessions:** None.

**As observed:** 02 Jun 2026

**App version:** None.

**Analysis date:** 14 Sep 2026

**Last updated:** 15 Sep 2026

**Source.** This analysis is built from one Granola walkthrough session, "Acorn app onboarding review" (02 Jun 2026), retrieved as a full transcript. The session covers account creation, identity and bank connection, the subscription paywall, the Invest and Later account setups, roundups and recurring investments, the home screen and its five surfaces, the Money Hub, Money Manager, the checking account and card flow, portfolio editing including risk, ESG, Bitcoin and custom holdings, the kids' account, the referral surface, the earn offers, the learning library and its courses, the profile and subscription settings, and the cancellation and withdrawal flows. The transcript is machine speech-to-text of live narration with no typed notes, and the narration is split across two diarized speaker labels that alternate mid-sentence; both labels are one narrator. The narrator states part-way through that the walkthrough is being read from screenshots held on Mobbin rather than from a live device, that he did not capture the screens himself, and that the order of screens may therefore differ from the order the app presents. Every ordering claim in this record carries that caveat. The date on which the screens were captured is never stated; the screens carry February and 2026 references, and no capture date is inferred, so this field repeats the session date. Numbers, prices and names are reported as transcribed; where the transcription is fragmented or internally inconsistent, that is marked at the relevant observation. The app version is never stated in the session and is not inferred.

---

# Pass one: observation record

1. Onboarding and first run: O1 to O26
2. Core loop and automation: O27 to O52
3. Goals and progression: O53 to O58
4. Access and eligibility: O59 to O66
5. Economy and resources: none
6. Social: O67 to O71
7. Reach beyond the app: O72 to O76
8. Monetization: O77 to O85
9. Return triggers: O86 to O93

## Onboarding and first run

**O1. The first screen states the proposition and offers two routes.**

**Observed:** Acorns opens on a screen reading "safe save and invest with Acorns" with two controls, Get started and Log in (tier: directly observed).

**Detail:**
- Nothing is shown of the product before the choice is made; there is no browsable preview and no guest state (tier: directly observed).
- No permission request, tracking request or consent appears at this point (tier: directly observed).

*Cross-reference: O2, O24.*

**O2. Account creation accepts an email address and nothing else.**

**Observed:** The next screen, "Welcome to Acorns, grow your oak", asks for an email address and a Join Acorns today control (tier: directly observed). The narrator states that the account cannot be created with a Google account, an Apple login or any other route (tier: directly observed).

**Detail:**
- A "Have an account, log in" control sits below the email field (tier: directly observed).
- An "Enter promo code" control sits at the bottom of the same screen, before any account exists (tier: directly observed).
- Sign in with Apple becomes available later, as a setting on an account that already exists, rather than as a creation route (tier: directly observed).

*Cross-reference: O76.*

**O3. Password rules are stated in full before the password is typed.**

**Observed:** The Create your password screen states a minimum of 8 characters, one uppercase and one lowercase letter, one number and one special character (tier: directly observed).

**Detail:**
- The rules are shown as requirements on the entry screen rather than surfaced as errors after a failed attempt (tier: strongly supported, the narration lists them as part of the screen).

**O4. A terms pop-up carries two separate confirmations, one of them an eligibility declaration.**

**Observed:** Tapping Create account raises an "Accept terms" pop-up asking the user to read the terms, and stating that tapping I accept agrees to receive documents electronically and to use an electronic signature for all agreements (tier: directly observed). Two items must be ticked: that the user is a US resident 18 years or older, and that the user agrees to the Acorns program agreement, privacy policy and auto debit authorization (tier: directly observed).

**Detail:**
- The residency and age declaration is bundled into the same acceptance step as the legal agreements (tier: directly observed).
- The auto debit authorization is agreed before any account, plan or funding amount has been chosen (tier: directly observed) (sequence caveat: screen order is read from a screenshot set, not a live run).
- Whether either item can be declined separately is not observed (tier: unresolved).

*Cross-reference: O59, O79.*

**O5. Phone verification with a six-digit code.**

**Observed:** The Verify your phone screen states that the phone number is used to protect the account with two-factor authentication, takes a phone number, and then asks for a six-digit code sent to it, with a resend control (tier: directly observed).

**Detail:**
- The stated reason is account protection rather than contact or marketing (tier: directly observed).
- A second phone-number step appears later inside the bank connection, separately from this one (tier: directly observed).

*Cross-reference: O11.*

**O6. Legal identity is collected under a stated legal requirement, with a security statement attached.**

**Observed:** The "Tell us a little about you" screen states "we're required by law to get this information to open your investment account" and collects legal first name, legal last name and date of birth (tier: directly observed). At the foot of the screen the app states that it uses bank-level security, 256-bit encryption, to help keep the information safe (tier: directly observed).

**Detail:**
- The legal framing and the security statement are placed on the same screen as the fields themselves (tier: directly observed).
- The date of birth is collected here rather than at the residency and age declaration that preceded it (tier: directly observed).

*Cross-reference: O4, O9.*

**O7. Residential address is collected under the same framing.**

**Observed:** The "Your residential address" screen states that the information is required to open the investment account, and collects address, address line two, city, state and zip code (tier: directly observed).

**Detail:**
- The narration also reports a line reading "we don't see all your information" on this screen; the transcription is fragmented and what it qualifies is not established (tier: unresolved).

**O8. The Social Security number is collected with a separate disclosure authorization.**

**Observed:** The "Verify your identity" screen states "we're legally required to ask for your Social Security number to open your account" and that the data is encrypted, then collects the number (tier: directly observed). Below the field the app states that the number is only used to verify identity and will not impact the user's credit score (tier: directly observed).

**Detail:**
- A separate pop-up asks the user to authorize the Social Security Administration to verify and disclose the number to Acorns Grow Incorporated through its service provider, named as Socure, for the purpose of this transaction, covering whether the name, number and date of birth submitted match SSA records, including the basis for a no-match response (tier: directly observed).
- The authorization is stated as a one-time validation within the next 90 days (tier: directly observed).
- Two controls are offered, I agree and I do not agree (tier: directly observed). What happens on I do not agree is not observed (tier: unresolved).

*Cross-reference: O9, O41, O60.*

**O9. A squirrel character sits on the data-collection screens and explains why each item is being asked for.**

**Observed:** A squirrel illustration sits in the bottom right corner of the screens at all times during this part of the flow (tier: directly observed). Tapping it opens a pop-up reading "hey there, I'm here if you need more context or an extra hand setting up your new account", with a Tell me more control (tier: directly observed). Tapping Tell me more puts glasses on the character and returns an explanation specific to the screen (tier: directly observed).

**Detail:**
- On the name and date of birth screen the explanation is that the name is collected to personalize the account and the date of birth to make the right recommendation when it is time to start investing (tier: directly observed).
- On the Social Security number screen the explanation is that Acorns is legally required to collect it to open the account and to help prevent fraud such as someone pretending to be the user, followed by a link to additional information (tier: directly observed).
- The character is placed at the points of highest disclosure friction rather than distributed evenly through the flow (tier: plausible, the two observed instances are both identity-collection screens and no instance elsewhere is reported).
- The character carries no state, count, level or holding of its own (tier: directly observed).

*Cross-reference: O6, O8.*

**O10. A bank account must be connected before investing, and is framed as the standing funding source.**

**Observed:** The "Connect your bank account to start investing" screen lists banks with pre-populated suggestions and a search (tier: directly observed). On selecting a bank the app states that every time money is added to Acorns it will transfer from the primary account, meaning the one just selected (tier: directly observed).

**Detail:**
- The connection is placed before the subscription choice and before any account type is chosen (tier: directly observed) (sequence caveat: screen order is read from a screenshot set, not a live run).
- The selected account is designated the primary account for all later transfers rather than for one transaction (tier: directly observed).

*Cross-reference: O11, O12, O13, O29.*

**O11. The bank connection runs through a third party, with a phone step that can be skipped.**

**Observed:** After a bank is chosen, the app states that Acorns uses Plaid to connect the account, and asks for a phone number with two controls, Continue and Continue without phone number (tier: directly observed, the transcription renders Plaid as "play" and "plate"). Entering the number raises a code prompt, then a login at the named bank, described as "you'll be sent to Bank of America, security login to your account", and a successfully connected state (tier: directly observed).

**Detail:**
- The skip route is offered on the same screen as the phone request rather than behind it (tier: directly observed).
- The user is handed to the bank's own login rather than entering bank credentials into Acorns (tier: directly observed).

*Cross-reference: O5, O10, O12.*

**O12. A manual connection is offered as an alternative, with a slower verification.**

**Observed:** Where the automatic connection does not complete, the app offers "would you like to manually connect your bank instead", stating that to verify ownership of the checking account it will need to make two small deposits which the user will need to verify, and collects routing number, account number and a confirmation of the account number (tier: directly observed).

**Detail:**
- At the foot of the manual screen the app asks "interested in roundups? Automatically invest your spare change by connecting your cards" and offers Connect automatically with Plaid (tier: directly observed).
- The manual route is presented with roundups attached as a reason to return to the automatic one (tier: strongly supported, the prompt sits on the manual screen and names the automatic route).

*Cross-reference: O10, O29, O33.*

**O13. The subscription paywall appears immediately after the bank connection, before any account exists.**

**Observed:** Tapping next after the bank connection raises a pop-up paywall reading "Choose a subscription", "Pick a plan", "Try a month on us", with three plans and two controls at the top, Try a month on us and Compare plans (tier: directly observed).

**Detail:**
- The paywall sits between the funding connection and the choice of what kind of account to open (tier: directly observed) (sequence caveat: screen order is read from a screenshot set, not a live run).
- No free tier is offered; the three options are three prices, with the first month free (tier: directly observed).
- Each plan carries a More control that expands its contents in place (tier: directly observed).

*Cross-reference: O14, O77, O79.*

**O14. Three plans are priced per day first and per month second.**

**Observed:** Gold is stated as a full suite of saving, investing and learning tools for you and your family at 40 cents a day or $12 billed monthly; Silver as "level up your saving and investing skills with even more tools" at 20 cents a day or $6 billed monthly; Bronze as "investing tools to get you started on your financial journey" at 10 cents per day or $3 billed monthly (tier: directly observed).

**Detail:**
- The daily figure is stated before the monthly figure in each case (tier: directly observed).
- Silver expands to diversified investments, a 1% IRA match for the first year, and a savings account with APY (tier: directly observed).
- Gold expands to Money Manager, described as smartly splitting money across investing, saving and spending; investing for you and your loved ones; customize your portfolio; a 3% IRA match for the first year; a savings account with APY; and a kids money app and debit card (tier: directly observed).
- Bronze's contents beyond the one-line description are not observed (tier: unresolved).
- The plan chosen for the rest of the session is Gold (tier: strongly supported, later screens repeatedly state the Gold plan).

*Cross-reference: O63, O77, O85.*

**O15. The account-type choice is framed as inclusive rather than as a purchase.**

**Observed:** The "How do you want to get started?" screen states "all the accounts below are included in your plan" and offers two options, Investing for every day and Investing for Retirement (tier: directly observed). A small "I'm not sure" control sits in the top right corner (tier: directly observed).

**Detail:**
- The framing presents the choice as an order of setup rather than an exclusion, since both accounts are set up in sequence later in the flow (tier: strongly supported, the retirement account is offered immediately after the everyday one completes).
- The "I'm not sure" control is placed where a skip control sits on other screens (tier: directly observed). What it opens is not observed (tier: unresolved).

*Cross-reference: O22, O28.*

**O16. Regulatory affiliations are collected as a four-option question with a confirmation challenge on the unusual answers.**

**Observed:** After choosing the Invest account the app states "great choice, let's get you set up with an Invest account, easy automated investing for everyday goals, starting with spare change", then "first things first. These don't apply to most people, but if they apply to you, let us know" (tier: directly observed). Four options follow: affiliated with or working for a broker dealer; notified by the IRS as subject to backup withholding; a 10% shareholder or director of a publicly traded company; none of these apply to me (tier: directly observed).

**Detail:**
- Choosing the broker-dealer option raises a pop-up reading "confirm broker dealer affiliation. Most investors answer no. So we want to double check that you are affiliated with a broker dealer", with No and Yes (tier: directly observed).
- The confirmation states what most users answer inside the challenge itself (tier: directly observed).

*Cross-reference: O64.*

**O17. Employment status and investment goal are collected before the portfolio.**

**Observed:** The employment status question offers Full time, Part time, Self employed, Student, Unemployed and Retired (tier: directly observed). The investment goals question offers four statements: investment growth for the long term; mostly investment growth but with less risk, funds probably not needed for a long time; balanced investment growth and risk, funds possibly needed in the medium term; reduced risk with some investment growth, funds possibly needed soon (tier: directly observed).

**Detail:**
- Each goal option pairs a risk posture with a time horizon in one sentence rather than asking them separately (tier: directly observed).

*Cross-reference: O18, O43.*

**O18. The portfolio is presented as a result of the answers, after a loading step.**

**Observed:** A loading screen states "your personalized portfolio recommendation is ready", followed by "your recommended Invest Portfolio. This portfolio was selected based on your answers and goals. Your investment will be diversified across the Exchange traded funds ETFs below. You can change this later" (tier: directly observed). A pie chart shows 0% bonds and 100% stocks (tier: directly observed).

**Detail:**
- An "About your portfolio" section states that the portfolio is best for those willing to accept high account value volatility to maximize potential investment returns, with risk stated as aggressive and type as core (tier: directly observed).
- Four holdings are named: VOO large company stocks 55%, IJH medium company stocks 10%, IJR small company stocks 5%, IXUS international company stocks 30% (tier: directly observed).
- Two controls on the About screen open explanations of what a portfolio is, what the stock market is, and what aggressive means (tier: directly observed).
- The loading step is presented as computation on the user's answers rather than as a network wait (tier: plausible, the copy states a recommendation is ready but no rule connecting answers to allocation is shown).

*Cross-reference: O17, O43, O45.*

**O19. Roundups are set up inside onboarding with a worked example.**

**Observed:** The "Let's set up roundups" screen shows an illustration of a cup priced at $2.60 with an arrow to a funnel marked "invest 0.40", and states that the user can automatically invest spare change from every purchase with the roundups feature (tier: directly observed). An "Important roundups information" line sits below, and a Finished later control sits in the top right corner (tier: directly observed).

**Detail:**
- The following screens ask how to invest spare change, automatic or manual, with automatic described as investing the change from all purchases and manual as requiring the user to choose which purchases create roundups each time (tier: directly observed).
- The next screen asks which accounts to use for roundups, stating that purchases from linked accounts will be rounded to the next dollar and the change invested once it adds up to $5 (tier: directly observed).
- The example uses a small everyday purchase rather than a large one (tier: directly observed).

*Cross-reference: O29, O30, O31, O33.*

**O20. A weekly recurring amount is offered with one option pre-suggested.**

**Observed:** The "Choose the amount you'd like to invest weekly" screen offers 5, 10, 25, 50 and 100, with 25 weekly suggested, and an Invest weekly control (tier: directly observed). A Finish later control sits in the top right corner (tier: directly observed).

**Detail:**
- The suggested amount is the middle option of five rather than the lowest (tier: directly observed).
- The account is later observed running at $5 weekly rather than the suggested $25 (tier: directly observed).

*Cross-reference: O25, O34.*

**O21. A one-time investment is requested immediately after the recurring one.**

**Observed:** The next screen reads "boost your potential further with a one time investment. Your first investment should be visible in your invest account in 3 to 5 business days", offering 5, 10, 25, 50, 100 and Other (tier: directly observed).

**Detail:**
- The two funding asks are consecutive screens rather than one combined amount (tier: directly observed).
- The screen states when the money will appear rather than when it will be taken (tier: directly observed).

*Cross-reference: O20, O53, O88.*

**O22. The retirement account is offered as the next step in the same chain.**

**Observed:** After the Invest setup the app states "you're on a roll. Let's take the next step. Set up your Acorns later account to activate your 3% IRA match" (tier: directly observed). The Later flow states "let's get you set up with a later account. Automatically invest for retirement and take advantage of potential tax benefits", then "just a few questions to find the right IRA for you" (tier: directly observed).

**Detail:**
- The questions are employment status, with a reminder that the user must have what the IRS calls earned income to contribute to an IRA and that Social Security, pensions and Social Security disability benefits are not earned income; marital status, offering married, civil union or single, divorced, widowed; and confirm your annual income (tier: directly observed).
- The result is a recommended Roth IRA, stated to have been selected based on income and tax filing status, with a stock and bond ETF split shown as 100% stocks (tier: directly observed).
- The Later screen states that Acorns Later accounts are age-based, meaning more of the portfolio is invested in bonds, generally less risky than stocks, as the user gets closer to retirement, and that for ages 18 to 45 it is mostly stocks (tier: directly observed).
- A slider is provided on the same screen with the stated note that it is just to play around with and does not actually change the portfolio allocation (tier: directly observed).
- The completion control is Open My IRA (tier: directly observed).

*Cross-reference: O42, O61, O85.*

**O23. An attribution question with a skip.**

**Observed:** The "How did you hear about us?" screen offers search, TikTok ad, friends and family, on campus, student ambassador, celebrity or influencer, podcast or radio ad, and one further option the transcription renders as "chicks in the office" (tier: directly observed, the option's real wording is not recoverable from the transcript). A Skip control sits in the top right corner (tier: directly observed).

**Detail:**
- The question is asked after the accounts are open rather than before (tier: directly observed) (sequence caveat: screen order is read from a screenshot set, not a live run).

**O24. Push notification permission is requested on arrival at the dashboard.**

**Observed:** The dashboard appears behind a pop-up reading "Notifications. Enable push notifications so we can let you know about important updates to your account", with Not now and Enable (tier: directly observed).

**Detail:**
- The request is placed after every setup step rather than at first launch (tier: directly observed).
- The stated reason is account updates rather than offers, reminders or activity (tier: directly observed).

*Cross-reference: O86, O87.*

**O25. A named celebration screen summarizes what has been set up.**

**Observed:** A second pop-up addresses the user by name and reads "you're doing it. We're so excited. Your first month is on us", followed by three check marks (tier: directly observed).

**Detail:**
- The first check mark states that $10 will be live by February 9th, itemized as $5 recurring to Acorns Invest and $5 one time to Acorns Invest (tier: directly observed).
- The second states "we're putting your money to work. Our experts are managing your portfolio" (tier: directly observed).
- The third states "you're on the gold plan. Our suite of money tools is at your fingertips" (tier: directly observed).
- The control is "let's go" (tier: directly observed).
- The itemized amounts do not match the amounts offered in the funding screens, where 25 weekly was suggested (tier: directly observed).

*Cross-reference: O20, O21, O88.*

**O26. A four-digit PIN, then a guided tour of the home screen.**

**Observed:** A pop-up asks the user to create a PIN and takes four digits (tier: directly observed). On the home screen an onboarding overlay headed "tour" darkens the background and points at elements in sequence (tier: directly observed).

**Detail:**
- The first bubble points at the home control and reads "welcome home", addresses the user by name, and states "find your account summaries, what to do next, and more personalized to you" (tier: directly observed).
- The second reads "play with your potential. Slide the acorn to see your potential change over time. Push it to the end to change it" (tier: directly observed).
- A third step exists but its content is not recoverable from the transcript (tier: unresolved).
- If the tour is skipped, a "take tour again" control remains available (tier: directly observed).

*Cross-reference: O27, O53, O93.*

## Core loop and automation

**O27. The dashboard leads with a projection rather than a balance.**

**Observed:** The home screen carries an Ask Acorns control next to the Acorns logo at the top, an amount, and a profile control to the right (tier: directly observed). Below that it reads "your investment is on its way", above a line with an acorn at the far left and "potential $70.1k" at the far right (tier: directly observed).

**Detail:**
- The projection occupies the position a balance would normally hold, with the current amount stated above it (tier: strongly supported, the narration describes the line as the element under the amount and the tour points at it second).
- The line is interactive rather than a static illustration (tier: directly observed).

*Cross-reference: O26, O53.*

**O28. The home screen is a stack of account rows, some running and some waiting to be turned on.**

**Observed:** Scrolling the home screen holds the Ask Acorns control at the top and lists, in order: Invest with the amount invested so far; Later with a 3% IRA match label; Checking, labelled "including your subscription", with an Activate control; Emergency savings, "get 3.35% APY", with an Explore control; Early invest, "1% match included", with an Activate control; and Gold plan benefits, "including your subscription", with an Explore control (tier: directly observed).

**Detail:**
- Under the Invest row sit three tags: recurring $5 weekly, roundups shown as off, and one time investment (tier: directly observed).
- The Later row shows $0 at the time of observation (tier: directly observed).
- Rows for accounts that are not open are shown with the same prominence as rows for accounts that are, distinguished only by the Activate or Explore control (tier: directly observed).
- Below the account rows the screen continues with a Money Manager panel and a Learn more control, a roundups panel and a Start investing control, an earnings panel, a learning carousel, a referral panel, a card-linking panel, a kids panel, and a "grow your oak" control opening the risk disclosures, which state that investing involves risk including loss of principal (tier: directly observed).

*Cross-reference: O39, O56, O63, O72, O74, O78.*

**O29. Roundups round card purchases up and invest the difference once it reaches a threshold.**

**Observed:** Roundups round up purchases made on linked accounts to the next dollar and invest the change once it adds up to $5 (tier: directly observed). The settings screen states that with automatic on, Acorns will transfer roundups from the primary bank to the Invest account when they add up to at least $5 (tier: directly observed).

**Detail:**
- The accumulating change is described as transferring from the primary bank when the threshold is reached, rather than being moved at the moment of each purchase (tier: directly observed).
- Where the accumulating amount is held before the threshold is reached, and whether it is restricted from ordinary spending while it accumulates, is not observed (tier: unresolved).
- The roundups screen states "it doesn't look like you've used any linked cards" and shows a number invested of zero, so no roundup is observed accumulating or releasing (tier: directly observed).
- The roundups screen carries a swipeable explainer, the third panel of which reads "every time you use a linked card, round the purchase up to the next whole dollar, invest that spare change into your Acorns Invest account" (tier: directly observed).

*Cross-reference: O10, O19, O30, O31, O32, O33.*

**O30. Roundups run automatically or manually, and the choice is reversible in settings.**

**Observed:** The roundups settings screen shows automatic roundups as a toggle, stated as currently set to manual, with the statement that when automatic is turned off the user will have to round up spare change manually from the roundups screen (tier: directly observed).

**Detail:**
- The manual state requires a repeated user action per purchase; the automatic state requires none (tier: directly observed).
- The dashboard tag shows roundups as off at the same time (tier: directly observed).

*Cross-reference: O19, O28, O29.*

**O31. A whole-dollar roundup setting fixes what a round-number purchase contributes.**

**Observed:** A "whole dollar roundups" section offers a choice between values the transcription renders as 0.25, 0.50, 0.75 and $1, with worked examples (tier: directly observed, the option values are read from a fragmented transcription). The stated example is that a $10 lunch invests $1, and that with 50 cents chosen a $10 lunch invests 50 cents (tier: directly observed).

**Detail:**
- The setting governs purchases that produce no natural roundup because they are already whole dollars (tier: strongly supported, both examples use a $10 purchase).

*Cross-reference: O29, O32.*

**O32. A multiplier multiplies every roundup.**

**Observed:** A multiplier section below the whole-dollar setting offers off, 2x, 3x and 10x (tier: directly observed). The stated example is that a $4.80 coffee invests $0.20 with the multiplier off, and $2 with the multiplier on (tier: directly observed, the figures correspond to a 10x setting).

**Detail:**
- The multiplier applies a stated factor to an amount that consists of the user's own money rather than to a reward the product pays (tier: directly observed).
- The multiplied amount is invested rather than held, so the effect is to increase the size of each automatic contribution (tier: strongly supported, the destination is stated as the Invest account throughout the roundups surface).
- Which multiplier values are available on which plan is not observed (tier: unresolved).

*Cross-reference: O29, O31, O85.*

**O33. Linked cards determine which purchases produce roundups at all.**

**Observed:** A linked accounts section at the foot of the roundups settings shows how many cards are linked (tier: directly observed). The home screen carries a separate "link cards to invest spare change" panel, and the invest screen repeats it (tier: directly observed).

**Detail:**
- Roundups are inert until at least one card is linked, which the roundups screen states directly (tier: directly observed).
- The card-linking prompt is repeated on the home screen, the invest screen and the manual bank-connection screen (tier: directly observed).

*Cross-reference: O12, O29, O75.*

**O34. Recurring investments run on chosen days of the week.**

**Observed:** The scheduled tab of the Money Hub shows a recurring investment every Tuesday and a recurring investment every Wednesday as separate scheduled items (tier: directly observed). A recurring investments screen allows the schedules to be changed, rescheduled or turned off (tier: directly observed).

**Detail:**
- More than one recurring schedule can run at once on different days (tier: directly observed).
- The Later account carries its own recurring contribution setting, separate from the Invest one, with its own amount, timing and source account (tier: directly observed).
- Setting a recurring contribution on Later raises a note that the user should check the account balance, that standard overdraft fees may apply, and a Got it control (tier: directly observed).

*Cross-reference: O20, O36, O42, O53.*

**O35. Money movement is collected behind one control.**

**Observed:** The Move money screen asks "how do you want to move money?" and offers Recurring deposit and One time transfer (tier: directly observed). Below that, under "more ways to invest with Acorns", it offers Add a paycheck, Set up a direct deposit and Manage roundups (tier: directly observed).

**Detail:**
- Recurring and one-time transfers sit above the automation routes rather than below them (tier: directly observed).

*Cross-reference: O34, O39, O62.*

**O36. The Money Hub splits transactions into three states.**

**Observed:** Tapping Money hub opens a transactions surface with three tabs, History, Pending and Scheduled (tier: directly observed).

**Detail:**
- Pending shows items such as a Later one-time contribution with its date and amount, and an Invest withdrawal with its date and amount, above a Move money control (tier: directly observed).
- Scheduled shows all account transactions that are still to come, with Add paycheck, Set recurring and Roundups controls at the foot of the screen (tier: directly observed).
- Pending items can be filtered by account, offering all accounts, Invest and Later (tier: directly observed).

*Cross-reference: O34, O37, O38, O62.*

**O37. A thirty-day summary widget sits above the history, with date filters.**

**Observed:** History shows a summary for the last 30 days stating $20 money into Acorns, $0 money out of Acorns, $0 dividends, $0 earned rewards and $0 referrals, above a dated list of the individual movements (tier: directly observed).

**Detail:**
- Tapping the summary opens a filter offering month to date, last 30 days, last 90 days, year to date and all time (tier: directly observed).
- The summary counts earned rewards and referrals alongside deposits, so the earn and referral surfaces report into the same statement as the user's own contributions (tier: directly observed).

*Cross-reference: O36, O72, O74.*

**O38. Transaction detail carries a status and a type.**

**Observed:** Opening a transaction shows its name, the estimated date and the amount, then transaction settings with a status, observed as currently being transferred, and a type, observed as one time investment (tier: directly observed).

**Detail:** None.

*Cross-reference: O36.*

**O39. Money Manager splits incoming deposits across accounts automatically.**

**Observed:** The home screen panel reads "meet Money Manager, will put your money where it needs to go automatically", with a Learn more control (tier: directly observed). The flow states three steps: the direct or recurring deposit comes in; it is split across checking, saving, investing and kids, which is stated as optional; the user stresses less while Acorns manages the money automatically (tier: directly observed).

**Detail:**
- A video control is offered, described as an intro to Money Manager from Noah Kerner, Acorns' CEO (tier: directly observed).
- The setup asks employment status, offering full time, part time, retired, self employed, student and unemployed, and annual income before tax, repeating questions already asked during onboarding (tier: directly observed).
- A review screen lists the destination accounts and marks which are open: investing and later open, spending checking with the tungsten debit card and saving emergency savings with 3.35% APY not open (tier: directly observed).
- The flow then states "first let's open your Acorns checking account so Money Manager can help you spend smarter", making the checking account a prerequisite for the feature (tier: directly observed).

*Cross-reference: O28, O40, O62, O63.*

**O40. The checking account is opened inside the app and issues a physical card.**

**Observed:** The checking flow opens with "welcome to your checking account, including your subscription", and lists a laser-engraved tungsten metal debit card exclusive to the Gold plan; bonus investments from using the Acorns debit card; real-time roundups to instantly invest spare change with the first five roundups matched; paycheck split to invest a piece of every paycheck; and direct deposit paying up to two days earlier (tier: directly observed). Later screens state FDIC insurance up to $250,000, fraud protection, digital card lock, no minimum balance or overdraft fees, and 55,000 fee-free ATMs (tier: directly observed).

**Detail:**
- The flow collects a shipping address, offering the residential address or a different one; an occupation, with employment status offered again as employed, retired, self employed, student and not employed; and a digital signature (tier: directly observed).
- A review screen states "your signature will be laser engraved on the back of your tungsten metal debit card" (tier: directly observed). The narrator notes that an engraved signature could be copied (tier: plausible, this is the narrator's judgement rather than a product statement).
- Two agreements must be accepted, named as an MBKC Bank e-sign agreement and an MBKC Bank consumer deposit account agreement, privacy policy and program agreement (tier: directly observed, the bank name is transcribed inconsistently).

*Cross-reference: O39, O41, O62, O83, O85.*

**O41. Opening the checking account ends in a verification hold.**

**Observed:** After submission the app states "verification required. Our checks couldn't verify all your information. We just need a few documents from you in order to finish setting up your account", listing two items to verify, identity and address (tier: directly observed).

**Detail:**
- Identity verification opens a consent screen stating that Acorns makes automated decisions for identity verification and ongoing fraud prevention using its service provider Socure, analysing the user's selfie and document photographs with artificial intelligence, and that the user has read and agreed to Socure's terms of use including a class action waiver and arbitration agreement, and its privacy notice covering facial biometrics (tier: directly observed). Two controls are offered, Consent and Decline to opt out (tier: directly observed).
- The document step offers driver's license, ID card or passport, and instructs the user to place the ID on a flat surface and capture front and back (tier: directly observed).
- Address verification takes documents and enters a processing state (tier: directly observed).
- A separate attempt to open the account produces an animation and then "this is taking longer than expected. We're still working on opening your account" with an OK control (tier: directly observed).

*Cross-reference: O8, O40, O60, O89.*

**O42. The Later account takes one-time and recurring contributions, each with a confirmation.**

**Observed:** The Later surface reads "start contributing towards your retirement" with a Start investing control, Transfer in and Transfer out controls, and settings showing recurring off, 3% IRA match active, and a beneficiary control (tier: directly observed).

**Detail:**
- Transfer in opens a one-time contribution pop-up taking an amount, a tax year and a source account, then a Review control, then a confirmation stating the amount, tax year, frequency and source, then a Contribute control, then "your contribution is processing, your contribution is estimated to arrive on" a stated date (tier: directly observed).
- Recurring opens "recurring contribution. Regularly contributing a set amount of money helps maximize your earnings potential", taking an amount, a timing and a source (tier: directly observed).
- The portfolio view shows all-time value, the list of holdings, a Set recurring contribution control, a contributions section, recent activity, and a learning carousel with retirement and tax pieces (tier: directly observed).
- A cog control opens account details showing account number with tap to copy, account type, current portfolio risk, IRA match, yearly contribution max and income limits (tier: directly observed).

*Cross-reference: O22, O34, O52, O55, O61, O67.*

**O43. Portfolio risk can be changed across five steps, with the product's recommendation marked.**

**Observed:** The change risk screen shows the current position as core and aggressive, the fifth of five steps, with 95% in stocks and 5% in a Bitcoin ETF (tier: directly observed). Two tabs sit below, Overview and Considerations, and the overview states "this risk level is recommended based on your responses in your investor profile" (tier: directly observed).

**Detail:**
- Moving to moderately aggressive, the fourth of five, changes the allocation to 4% Bitcoin ETF, 76.8% stocks and 19.2% bonds, and the copy changes to "this risk level is not recommended based on your responses in your investor portfolio" (tier: directly observed).
- Confirming raises "before you do that, do you want to update your investor profile to make sure you have the most accurate portfolio recommendation?" with two controls, Get a new recommendation and Continue changing portfolio (tier: directly observed).
- Continuing raises a second pop-up: "changing your portfolio involves the sale of your current ETFs and purchase of new ETFs. This can have tax implications and we suggest you speak to a tax advisor" (tier: directly observed).
- The product does not state that the change is wrong; it offers to re-run the recommendation instead (tier: strongly supported, the first pop-up asks about the profile rather than the allocation).

*Cross-reference: O17, O18, O44, O45, O49.*

**O44. Portfolio type can be switched between core and ESG.**

**Observed:** The change my portfolio type screen offers core portfolios, described as diversified expert-designed ETF portfolios giving exposure to a broad range of stocks and bonds with the option of adding a Bitcoin ETF, and ESG portfolios, described as ETF portfolios rated for how they approach environmental, social or governance issues, designed to perform similarly to core portfolios, also with the Bitcoin option (tier: directly observed).

**Detail:**
- Selecting ESG shows the new allocation, transcribed as Bitcoin strategy 4%, ESGU large company stocks 45.12%, a large and mid cap US stock fund 5.76%, ESML 2.88%, ESGD international company stocks 17.28%, ESGE emerging market stocks 5.76% and SUSB one to five year corporate bonds 2.88% (tier: directly observed, the listed percentages do not total 100 and the transcription is fragmented).
- A "what's an ESG portfolio" control opens an explanation of ESG ratings and a further screen stating that as of August 2022 the funds in the ESG portfolios reduced carbon footprints by an average of 40.3% compared to the broad market (tier: directly observed).
- A further screen asks "how do Acorns' ESG portfolios perform?" and states that long-term potential performance was prioritized, that they are built to perform similarly to the core portfolios, and that past performance is not a guarantee of future returns (tier: directly observed).
- The screen states that ESG ratings are not set by Acorns (tier: directly observed).

*Cross-reference: O43, O52.*

**O45. A Bitcoin ETF can be added at a bounded allocation.**

**Observed:** The edit your portfolio screen offers stocks and ETFs customized for long term, and Bitcoin, described as "diversify your portfolio with a Bitcoin ETF" (tier: directly observed). Opening it states three points: further diversify by investing 1 to 5% in a Bitcoin-linked ETF; get exposure to Bitcoin without the need for a digital wallet; invest over time instead of all at once to help reduce risk (tier: directly observed).

**Detail:**
- Adding raises a confirmation stating "5% of your portfolio will be allocated to Bitcoin ETF. By adding this ETF to your portfolio you understand its risks and volatility", with Cancel and Add (tier: directly observed).
- The result screen states "portfolio selection updated. New changes to your invest portfolio will take place with your next investment or rebalance" (tier: directly observed).
- The Bitcoin strategy surface then shows holdings, change over time, an about section, total gain and loss, contributions, and the fund's stats (tier: directly observed).
- The ceiling and floor are stated as part of the pitch rather than as a restriction encountered later (tier: directly observed).

*Cross-reference: O43, O44, O46, O65.*

**O46. Individual stocks and ETFs can be added up to a stated share of the portfolio.**

**Observed:** A customize screen lists stocks and ETFs split by sector, each opening a profile with a price graph over one day, one month, year to date, one year and five years, an about description, and stats including market cap, share price, symbol and order volume, with a note that market data is provided by Quote Media and may be delayed by 15 minutes or more (tier: directly observed).

**Detail:**
- Adding raises a custom portfolios explainer: "diversified by us, customized by you. More control over your investing. Take a more hands on approach to your money by allocating up to 50% of your invest portfolio to stocks or ETFs of your choosing"; "invest with confidence. Stocks and ETFs you choose are added to your already diversified portfolio"; "well known stocks and ETFs" (tier: directly observed).
- A "how it works" control opens a four-step guide: explore the stocks and ETFs, stated as the largest US publicly traded companies with market capitalization at or above $75 billion plus hand-picked ETFs; search and select; choose how much of the portfolio to allocate; make your first investment (tier: directly observed).
- The third step carries a highlighted note reading "be mindful. Customizing more than 10% of your total portfolio may expose your investments to more risk", against the stated 50% ceiling (tier: directly observed).
- The fourth step states that future deposits or withdrawals will be directed to keep the user on track with their target allocations (tier: directly observed).
- Adding opens a slider to set the portfolio amount (tier: directly observed).

*Cross-reference: O45, O47, O65.*

**O47. A live diversification score responds to the allocation slider.**

**Observed:** As the allocation slider moves, a graph below it reports the portfolio's diversification, observed reading strong at 19% and weak at 48% (tier: directly observed). Tapping the indicator opens a pop-up showing three states, weak, fair and strong, and stating "your portfolio's diversification is strong. By spreading out your investments and not having too much of your portfolio rely on any one company, sector or asset class, your portfolio faces a better chance at navigating volatility" (tier: directly observed).

**Detail:**
- A one minute fourteen second video, "what is your diversification score", sits below the explanation (tier: directly observed).
- A key factors section states that investing too much into stocks or ETFs that are too similar drifts the portfolio towards being less diversified; that stocks and ETFs with higher volatility could negatively impact overall diversification; and that the ETFs in the base portfolio also contribute to the score (tier: directly observed).
- The score changes as the user moves the control rather than after a confirmation (tier: directly observed).
- The score is a judgement of the resulting allocation rather than a count of supplied items or a position against other users (tier: strongly supported, the three states are described in terms of concentration and volatility).

*Cross-reference: O46, O52.*

**O48. An in-app assistant answers questions from preset prompts.**

**Observed:** An Ask Acorns control sits at the top of the home, investing, learning and earning screens, and at any time opens a chat with preset questions listed, or a free text field (tier: directly observed). Each answer can be copied, liked or disliked (tier: directly observed).

**Detail:**
- The preset questions are offered before the user types, so the entry point is a menu rather than a blank field (tier: directly observed).

*Cross-reference: O27, O28.*

**O49. Transferring out is met with a warning in a distinct colour and a preferred alternative.**

**Observed:** Tapping Transfer out in the Invest account raises "pause investments instead" and a second line stating that when the user withdraws they may have to pay capital gains taxes if the funds earned money, and that it slows down the overall growth potential of the investment (tier: directly observed). The narrator states that both warnings are shown in brown, a colour not used anywhere else in the app up to that point (tier: directly observed).

**Detail:**
- Two controls follow, Pause investments highlighted and Continue to withdraw secondary (tier: directly observed).
- Choosing Pause investments raises a pop-up stating that future transfers such as investments or contributions will be paused, that the subscription cost will not be paused, and that any pending transfers will continue to process, with Cancel and Pause (tier: directly observed).
- The alternative offered is a pause on contributions rather than a partial withdrawal (tier: directly observed).

*Cross-reference: O50, O80, O82.*

**O50. Withdrawing from the retirement account carries its own warning and a reason list.**

**Observed:** Starting a withdrawal from Later raises "heads up. We want to make sure you have all the info you need before you decide to withdraw from your retirement account", stating that the user may have to pay penalties or taxes set by the IRS, may also owe them to their state tax authority, and may be eligible for exemptions but that this is up to the IRS (tier: directly observed). The same screen states that the Acorns Later account is SIPC protected up to $500,000 and that SIPC does not protect against market risk, which is the risk inherent in a fluctuating market (tier: directly observed).

**Detail:**
- A reason must then be chosen, offering early, early with exceptions, IRA limit exceeded, and transfer to another IRA or 401k (tier: directly observed).
- A protection statement is placed inside the deterrent screen rather than on the account overview (tier: directly observed).

*Cross-reference: O49, O61.*

**O51. Tax filing is offered inside the app through a named partner.**

**Observed:** The profile carries a tax forms control which opens "easy fast free tax filing is here, including your Acorns Gold subscription. We've partnered with award winning tax filing service April to make tax season easy. File in minutes at no added cost with an Acorns Gold subscription. Terms apply" (tier: directly observed). A second line reads "skip steps, save time. We'll pre-fill your return where we can to make tax filing faster and easier" (tier: directly observed).

**Detail:**
- Starting the filing shows step one, "first up the basics. To make things easy, Acorns has pre-filled your info. Does it look correct?", with first name, middle initial, last name and suffix already populated (tier: directly observed).
- The rest of the filing flow is not observed (tier: unresolved).
- A tax center states when forms will arrive, listing the IRS form types and the dates by which each is released (tier: directly observed).
- The learning carousel at the foot of this surface is filtered to tax subjects, including "where is my 1099" and "what's the average tax refund" (tier: directly observed).

*Cross-reference: O52, O63, O78, O91.*

**O52. A standing library of articles, videos and courses sits beside the accounts.**

**Observed:** A Learning tab in the bottom navigation opens a surface with three filters, Just for you, Using Acorns and Investing, above stacked cards (tier: directly observed). The same library appears as a "learn with Acorns" carousel at the foot of the home screen, the invest screen, the Later screen and the tax surface, filtered to that surface's subject (tier: directly observed).

**Detail:**
- Observed pieces that instruct on investing, retirement and tax rather than on the product include "investing strategies for beginners", a three minute video; "what returns can you expect when you invest?", a two minute read; "how to stay calm when markets make you uneasy", a four minute read; "5 ways to optimize your retirement savings", a four minute read; "how an IRA can help you save on taxes", a two minute video; and the tax pieces at O51 (tier: directly observed).
- Observed pieces that instruct on the product itself include "make the most of Acorns", a nine minute article carrying a view count of 39,000, and the "getting started with Acorns" course (tier: directly observed).
- Pieces carry a byline, a publication date, a view count, an estimated reading or viewing time, and a was-this-helpful control (tier: directly observed).
- The byline is stated as the Acorns team, described as a team of writers, editors and personal finance enthusiasts at Acorns whose mission is to look after the financial best interest of the up and coming (tier: directly observed).
- The Using Acorns filter changes the featured row to trending and using-Acorns content, so the library is segmented by subject at the top level (tier: directly observed).
- The material can be ignored entirely without affecting any account function; nothing in the investing flow requires it (tier: strongly supported, no step in any observed flow routes through a piece of content).

*Cross-reference: O42, O44, O45, O47, O51, O57, O58.*

## Goals and progression

**O53. The potential projection is the product's headline measure of progress.**

**Observed:** The home screen line can be dragged from the acorn at the left to the potential at the right, which opens a pop-up stating "your acorn's potential is", observed at $140,000, broken into investment $20,000 and return $120,000 (tier: directly observed). The same view states the amount held today, observed at $45, and what it would be in 40 years, stated as 2066 (tier: directly observed).

**Detail:**
- Two bubbles below the figure state the assumptions: years to grow 40 and average return 8% (tier: directly observed).
- A line below states "graph is for illustrative purposes only. Investing involves risk" (tier: directly observed).
- The collapsed line on the dashboard shows a different potential figure, $70.1k, from the expanded view's $140,000 (tier: directly observed, the two are read at different points in the session and the source of the difference is not stated).
- The projection separates the user's contributions from the return, so the growth component is shown as the larger of the two (tier: directly observed).
- The guided tour points at this control as the second thing the user is shown (tier: directly observed).

*Cross-reference: O26, O27, O54.*

**O54. Setting a recurring contribution is answered with a projected increase.**

**Observed:** On turning on a recurring contribution, the app raises a pop-up stating that an investment of a stated amount per week could boost the user's potential by a stated amount, and that this increases their potential from one number to another by 40 years from now, with the return and the investment shown on the accompanying graph (tier: directly observed).

**Detail:**
- The projection is attached to the moment of setting the amount rather than displayed as a standing figure (tier: directly observed).
- The same 40-year horizon is used as on the dashboard (tier: directly observed).

*Cross-reference: O34, O42, O53.*

**O55. The retirement account reports contributions as a share of the annual maximum.**

**Observed:** The Later contributions section states "you've contributed 0% of your max yearly limit", and after a contribution states 0.13% of the max yearly limit with $10 shown (tier: directly observed). The section also states what has been contributed so far this year and what is left to contribute (tier: directly observed).

**Detail:**
- A widget below reads "don't miss out. Investing just $20 a week can get you closer to hitting your IRA contribution max for 2026", followed by a Turn on recurring control (tier: directly observed).
- The narrator notes that the screen was captured in February, so the prompt appears early in the contribution year (tier: plausible, the narration states the month but no date is shown on the screen).
- The threshold is an externally set annual limit reported as a proportion; no response by the product to reaching it is observed (tier: directly observed).

*Cross-reference: O42, O61, O90.*

**O56. The home screen keeps unopened accounts visible as things to turn on.**

**Observed:** The home screen lists Checking, Emergency savings and Early invest alongside the open accounts, each with an Activate or Explore control, and a Gold plan benefits row with an Explore control (tier: directly observed).

**Detail:**
- The rows state what each account carries rather than only that it is unopened: checking is labelled as included in the subscription, emergency savings states 3.35% APY, early invest states a 1% match included (tier: directly observed).
- No proportion, count or completion figure is reported over the set (tier: directly observed).
- The Gold plan benefits surface repeats the same items as a list of things to activate (tier: directly observed).

*Cross-reference: O28, O78.*

**O57. Courses are structured into lessons and a quiz.**

**Observed:** The "getting started with Acorns" course states "Acorns makes investing simple. Let us help you grow your oak. In this course we'll cover our investing tools and strategies as well as the fundamentals for setting up your account", with a Start course control (tier: directly observed). Below it, the course is stated as two lessons lasting four minutes and nine seconds plus one quiz with four questions (tier: directly observed).

**Detail:**
- The parts are listed as "what is Acorns", two minutes seven seconds; "how do we get started with Acorns", two minutes one second, each marked with a video symbol; and "test your knowledge" with four questions (tier: directly observed).
- A taught-by line names the teacher (tier: directly observed).
- A was-this-course-helpful control sits at the foot, and individual videos carry their own helpful control (tier: directly observed).
- A retake control is available after the course ends (tier: directly observed).
- Whether completion is recorded anywhere after the course ends is not observed (tier: unresolved).

*Cross-reference: O52, O58.*

**O58. The quiz marks answers and reports a score against a community average.**

**Observed:** The quiz opens with "test your knowledge, question 1 out of 4" and presents a sentence with a blank the user taps or drags a term into, from four options (tier: directly observed). Choosing incorrectly raises a pop-up stating the correct answer and why (tier: directly observed).

**Detail:**
- The observed questions concern the product and the investing terms it uses: "your Acorns Invest portfolio holds assets called", and "which Acorns account allows you to invest in an IRA", with options Acorns Early, Acorns Checking, Acorns Later and all of the above (tier: directly observed).
- The result screen states a score of 75%, three out of four correct, one minute spent, and "good. The community average is 80%" (tier: directly observed).
- The next screen reads "well done", followed by a Done control (tier: directly observed).
- The comparison is against an aggregate of an unnamed population rather than against any identified person or an ordered position (tier: directly observed).
- No pass mark, deadline or attempt limit is stated for the quiz as a whole (tier: directly observed).

*Cross-reference: O52, O57.*

## Access and eligibility

**O59. The product is open only to US residents 18 or older.**

**Observed:** The terms acceptance step requires the user to confirm "I am a US resident 18 years or older" before the account can be created (tier: directly observed).

**Detail:**
- The narrator notes that the retirement account structure observed is specific to the United States (tier: directly observed).
- The declaration is a self-certification at this point; the identity check that follows is separate (tier: strongly supported, the SSN and document steps come later in the flow).

*Cross-reference: O4, O8, O60.*

**O60. An identity check can hold an account in a pending state until documents are supplied.**

**Observed:** The checking account flow reaches "verification required. Our checks couldn't verify all your information", requiring identity and address to be verified before setup can finish (tier: directly observed).

**Detail:**
- Identity is verified by government-issued ID, offering driver's license, ID card or passport, plus a selfie, analysed by the named service provider using artificial intelligence under a separate consent (tier: directly observed).
- Address is verified by uploaded documents (tier: directly observed).
- The condition is one the user satisfies by supplying documents rather than by using the product (tier: directly observed).

*Cross-reference: O8, O41, O89.*

**O61. Retirement contributions require earned income and are bounded by income limits.**

**Observed:** The Later setup states that the user must have what the IRS calls earned income in order to contribute to an IRA, and that Social Security, pensions and Social Security disability benefits are not considered earned income (tier: directly observed). The account details screen lists a yearly contribution max and income limits (tier: directly observed).

**Detail:**
- The recommended IRA type is stated to have been selected based on the user's income and tax filing status (tier: directly observed).
- The limits originate outside the product and are reported by it (tier: strongly supported, the copy attributes them to the IRS).

*Cross-reference: O22, O42, O55.*

**O62. Paycheck split requires an open Acorns checking account.**

**Observed:** Tapping Add paycheck in the scheduled tab raises "paycheck split requires an open Acorns checking account. View your account status by tapping on your checking account from the home screen" (tier: directly observed).

**Detail:**
- The condition is stated at the moment of the attempt rather than on the control itself (tier: directly observed).
- Money Manager carries the same prerequisite, stating that the checking account must be opened first (tier: directly observed).
- The condition is an account state rather than a measure the user advances by using the product (tier: directly observed).

*Cross-reference: O35, O36, O39, O40.*

**O63. The plan tier decides which accounts and benefits are available.**

**Observed:** Plan contents differ between tiers. Silver states a 1% IRA match for the first year, Gold states a 3% IRA match for the first year plus Money Manager, custom portfolios, and the kids money app and debit card (tier: directly observed). The tungsten metal debit card is stated as exclusive to the Gold plan, and the tax filing partnership as included with an Acorns Gold subscription (tier: directly observed).

**Detail:**
- On the earn surface, being on Gold is stated to add a further match on top of a brand's own rate (tier: directly observed).
- The cancellation flow states which of these are lost on downgrade: checking, Later custom investments and the 3% Later match (tier: directly observed).
- The condition is an entitlement held by paying rather than a state the user reaches by using the product (tier: directly observed).

*Cross-reference: O14, O74, O77, O78, O81, O85.*

**O64. Regulatory affiliations are collected as an eligibility question with a confirmation on the unusual answers.**

**Observed:** The four-option disclosure at O16 collects broker-dealer affiliation, IRS backup withholding status and 10% shareholder or director status before the Invest account is opened (tier: directly observed).

**Detail:**
- What changes for a user who selects one of the three is not observed (tier: unresolved).

*Cross-reference: O16.*

**O65. The custom portfolio universe is bounded, and the allocation is capped.**

**Observed:** The custom portfolio guide states that the selectable universe is the largest US publicly traded companies with market capitalization at or above $75 billion, plus hand-picked ETFs across different industries (tier: directly observed). The allocation is stated as up to 50% of the Invest portfolio (tier: directly observed).

**Detail:**
- The guide states "don't see what you're looking for? We actively evaluate additional stocks and ETFs for our customers. If they meet our standards, we'll make them available in custom portfolios" (tier: directly observed).
- The Bitcoin ETF allocation is separately bounded at 1 to 5% (tier: directly observed).
- The stated 50% ceiling sits against an in-flow note recommending no more than 10% (tier: directly observed).

*Cross-reference: O45, O46, O47.*

**O66. A stated feature is unavailable and is offered as a waitlist instead.**

**Observed:** A Request control on the invest screen carries a "soon" tag and a graphic resembling a QR code (tier: directly observed). Tapping it raises "it's coming soon. Get investments from anyone. We're exploring ways to let you receive tips, payments and gifts automatically invested into your Acorns Invest account. Join the waitlist to stay in the loop" (tier: directly observed).

**Detail:**
- Joining opens a question, "what do you think? How would you use this feature to receive investments from others? Select all that apply", offering gifts from friends, family; tips from my customers; payments from customers; payments from friends, family (tier: directly observed).
- Two controls follow, "Submit and join the waitlist" and "I wouldn't use this" (tier: directly observed).
- Submitting produces "you're in. Stay tuned for more chances to help us refine this feature. Thank you for helping us grow your oak", and the control changes from "get on the waitlist" to "you're in" (tier: directly observed).
- The control is placed among live controls on the invest screen rather than on a roadmap surface (tier: directly observed).

*Cross-reference: O71.*

## Economy and resources

This section holds no observations. Acorns maintains no product-defined currency, points, credits, tokens or other held unit. Every quantity the product tracks is the user's own money in the user's own accounts, which the section boundaries assign to Core loop and automation, and the amounts paid by the earn and referral surfaces are real dollars deposited into the Invest account rather than a product-defined balance (tier: directly observed).

## Social

**O67. A beneficiary can be named on the retirement account.**

**Observed:** Tapping beneficiary in the Later settings opens "don't leave anything to chance. Add a beneficiary to your account", offering spouse, stated to include civil unions and domestic partnerships, or non spouse, given as friend, family member, child (tier: directly observed).

**Detail:**
- Choosing non spouse collects the beneficiary's legal first name, legal last name, birthday, Social Security number, address, address line two, city and state, then a submit step (tier: directly observed).
- The named person's Social Security number is collected, so the product holds identifying data about someone who is not the user (tier: directly observed).
- The named person has no account, view or action inside the product (tier: strongly supported, no route for the beneficiary is shown anywhere).

*Cross-reference: O42, O68.*

**O68. A trusted contact can be added and assigned to chosen accounts.**

**Observed:** Personal settings allows a trusted contact to be added with name, last name, email and phone number, and the user chooses which accounts to add them to (tier: directly observed). The contact can be removed after being added (tier: directly observed).

**Detail:**
- What the trusted contact can see or do is not observed (tier: unresolved).

*Cross-reference: O67.*

**O69. Accounts can be opened for children under the same subscription.**

**Observed:** The Early Invest surface reads "invest early for their future. Save and invest for your kids, nieces, nephews, grandkids, godkids and more. Including a subscription", listing simple fast sign up, a 1% match on new contributions to Early Invest accounts, automated recurring investments, and "more flexible than a college" plan (tier: directly observed, the plan type is cut off in transcription). A take-a-tour control sits in the top right (tier: directly observed).

**Detail:**
- Setup collects the child's legal first name, legal last name and date of birth, then verifies their identity by Social Security number, ending in "your Early Invest account for them is now open" (tier: directly observed).
- The following screen states "enjoy easy flexible investing. Start at $5 a week or make one time investments and we'll automatically invest it for you and your kids. Plus we'll match every investment you make by 1%" (tier: directly observed).
- Once a child account exists, two tabs appear in the top left, You and Kid; the Kid tab changes the headline to "start investing for Sam's future" with a Set up early invest control, shows the child's Invest 1% match row with an Activate control, and offers Add another kid (tier: directly observed).
- The surface states "over 350,000 kids and growing" and shows reviews from other users (tier: directly observed).

*Cross-reference: O56, O70, O84, O85.*

**O70. Acorns Early is described as a money app and card for the child, with parental oversight.**

**Observed:** The money skills for kids panel opens "formerly GoHenry. Smart money app and debit card for kids, including a Gold subscription. Acorns Early is a smart money app and debit card made for teaching your kids the value of money" (tier: directly observed).

**Detail:**
- Stated contents are: money skills unlocked, with the child managing money with their own debit card, earning with allowance and task payments, and creating custom savings goals in app; direct deposits for teens; QR codes to request money from friends; tap to pay or charge; and Apple Pay (tier: directly observed).
- A "why parents love Acorns Early" section states that parents have oversight with real-time spending notifications and the ability to send money to their kid's card instantly (tier: directly observed).
- A further section states "get the whole family involved. Say goodbye to hit or miss presents. Family and friends can send money to kids on the regular" (tier: directly observed).
- None of these transfers is observed operating; the description is read from the marketing surface (tier: directly observed).

*Cross-reference: O66, O69, O71.*

**O71. A planned feature would let other people send money that is invested automatically.**

**Observed:** The Request feature at O66 is stated as a route to receive tips, payments and gifts from named categories of other people, invested automatically into the Invest account (tier: directly observed).

**Detail:**
- The categories offered in the intent question distinguish friends and family from customers (tier: directly observed).
- The feature is not available in the session and nothing about its operation is observed (tier: unresolved).

*Cross-reference: O66, O70.*

## Reach beyond the app

**O72. The referral offer is displayed as a figure in the top bar of the home screen.**

**Observed:** The top of the home screen carries, from left to right, the Ask Acorns control, a figure in a control, observed as $1,375, and the profile control (tier: directly observed). Tapping the figure opens the current offer (tier: directly observed).

**Detail:**
- The offer screen is transcribed with three different figures against different friend counts: $800 for referring four friends, and $1,375 for referring five friends, with the narration correcting itself mid-sentence (tier: directly observed, the transcription is fragmented and the exact ladder is not recoverable).
- The home screen panel separately states "we'll invest $1,306.75 into your Invest account when you invite five friends to join Acorns and they invest", with an Invite friends control (tier: directly observed, this figure does not match either figure on the offer screen).
- The reward rises with the number of qualified friends rather than paying a flat amount per friend (tier: strongly supported, two different totals are stated against four and five friends).
- The figure occupies a permanent position in the top bar rather than appearing on a referral screen only (tier: directly observed).

*Cross-reference: O28, O73, O92.*

**O73. The referral rules define what both sides must do and when the reward lands.**

**Observed:** The offer states that Acorns will invest the stated amount into the user's Invest account when they invite four or more friends to sign up and they invest, and that each friend will also get a $5 bonus investment, with the offer ending on a stated date (tier: directly observed).

**Detail:**
- A how-it-works section states three steps: invite friends by sharing a referral link, with friends required to use the unique link to complete registration; friends invest, with friends required to complete a first deposit of $5 or more within 14 days of the offer end date, and deposits taking up to five business days to settle; receive reward, with the bonus invested within 30 days once eligibility has been established, and both parties required to keep their Acorns account open and in good standing when the bonus is invested (tier: directly observed).
- The offer states "you must have your friends consent to contact them with this offer. You may edit the pre-filled messages as desired" (tier: directly observed).
- A my referrals section states "invite friends to track progress here" (tier: directly observed).
- Invite friends offers a shareable link and a QR code in the top right corner for people who are physically nearby (tier: directly observed).
- An FAQ lists: how do I refer friends; how can I tell my friends about Acorns; when will I get my reward for referral offer; how do I know my friends are eligible for the weekly referral offer; how much can I earn by referring people to Acorns (tier: directly observed).
- The reward is a dollar amount deposited into the Invest account, which the user can later transfer out, rather than a change to the terms of an action the user performs (tier: strongly supported, the withdrawal route at O49 operates on the Invest account as a whole).
- Nothing the referring user must complete beyond holding an open account in good standing is stated (tier: directly observed).

*Cross-reference: O37, O72, O92.*

**O74. Purchases at named brands pay a percentage that is invested rather than paid out.**

**Observed:** The Earning tab opens with an info control and the Ask control at the top, and a figure in a gold tag in the top right, observed at $0 (tier: directly observed). Below sit filters for all offers and named categories, a search, a For you section, the referral offer, brand tiles, a linked card rewards section, a "love your way" section, featured items with a logo, an invested percentage and a name, highlights for the month, and new ways to earn (tier: directly observed).

**Detail:**
- An observed offer, Sam's Club, states "up to 1.68% invested" with a terms and conditions line, a details section reading "tap shop now, complete transaction in one session, reward invested into invest account", and a Shop now control (tier: directly observed).
- An exclusions tab lists categories the offer does not pay on, including wine, liquor, beer, cigarettes and cigars; food and groceries; cough, cold and flu and doctor fees; health and beauty aids; and gas stations and fuel (tier: directly observed).
- A second observed offer, Spot Hero, is stated to pay the brand's own invested rate plus an additional 0.75% match from Acorns because the user is on Gold (tier: directly observed).
- The earn surface is stated to cover 15,000 top brands (tier: directly observed).
- The gold tag in the corner opens recent activity showing total earnings and total rewards matched, described as "earned bonus investments from your favorite stores. Get earned rewards each time you make a purchase from 15,000 top brands" (tier: directly observed).
- Offers can be favourited with a control in the top right and the favourites viewed separately (tier: directly observed).
- The reward is paid as an investment into the Invest account rather than as cash back to the user (tier: directly observed).

*Cross-reference: O37, O63, O75, O85.*

**O75. Linking a card makes the brand rewards automatic in store and online.**

**Observed:** Each offer carries a linked cards tab, and the app states that if the user links their credit or debit card and buys from that brand in store or online using that card, the rewards are automatically activated because the card is already linked (tier: directly observed).

**Detail:**
- The same linked cards drive roundups, so one linking action feeds two surfaces (tier: strongly supported, both the roundups settings and the offers refer to linked cards).

*Cross-reference: O29, O33, O74.*

**O76. Sign in with Apple can be added after the account exists.**

**Observed:** Login and security settings offers "sign in with Apple, more secure and faster logins", which the narrator states can be chosen and activated after the account has been created, noting that the account can only be created with an email (tier: directly observed). The same section offers change your password and enable Face ID (tier: directly observed).

**Detail:**
- The identity link is offered as a login convenience rather than as an account-creation route (tier: directly observed).

*Cross-reference: O2.*

## Monetization

**O77. The plans are compared feature by feature in a table.**

**Observed:** A Compare plans control on the paywall opens a table listing the three plans against a list of features and benefits, showing what is included in each (tier: directly observed).

**Detail:**
- The comparison is grouped under headings the narrator reports as money manager, investing, saving and earning (tier: directly observed).
- The table is reachable from the paywall itself rather than only from settings (tier: directly observed).

*Cross-reference: O13, O14, O63.*

**O78. The Gold plan benefits are presented as a list of things to activate.**

**Observed:** The Gold plan benefits surface opens "welcome to the Gold plan. A full suite of investing tools for you and your family all included in your subscription" (tier: directly observed). Featured first is complimentary tax filing, "easy fast free tax filing with Acorns Gold", with an activation control (tier: directly observed).

**Detail:**
- Below it sit invest in your future, "get more control of your investing"; invest in your family, "invest for kids, tuition, car, first house"; and invest in your security, "help loved ones even after you're gone" (tier: directly observed).
- Each benefit is presented with the action that turns it on rather than only as a description (tier: strongly supported, the narration describes the surface as a place to go through and activate things quickly).
- The surface names the purchased plan back to the user and lists what is still unused under it (tier: directly observed).

*Cross-reference: O28, O51, O56, O63.*

**O79. Subscription management states the plan, the charge, the source and the date.**

**Observed:** My subscription in personal settings states which plan the user is on, how much they pay, the account the subscription will be drawn from, and the date it will be drawn (tier: directly observed). Below that it lists the accounts, marking those that are active and those that need to be activated (tier: directly observed).

**Detail:**
- Controls are offered to change the plan, cancel the subscription and add billing details (tier: directly observed).
- The same activate-or-not listing appears here as on the home screen (tier: directly observed).

*Cross-reference: O4, O56, O80.*

**O80. Cancellation asks for a reason from a fixed list.**

**Observed:** Tapping cancel subscription asks "why do you want to cancel a subscription?" and offers: Acorns cost too much; can't afford to invest at this time; concerned about the market; don't want to invest; not enough control over my investments; not sure how Acorns works; not the right time to invest; poor investment performance (tier: directly observed).

**Detail:**
- The reason is collected before any cancellation is performed (tier: directly observed).
- Whether the answer changes what is offered next is not observed; the same next screen follows the observed selection (tier: unresolved).

*Cross-reference: O81.*

**O81. Cancellation is answered with a $1 plan rather than a cancellation.**

**Observed:** After the reason is chosen, the next screen reads "switch to Acorns Assist, only $1 a month. If you're experiencing economic hardship and considering not investing in your future, you can opt into Acorns Assist" (tier: directly observed). It states "we keep invest. Your Acorns Invest accounts will stay open, avoiding potential tax implications" (tier: directly observed).

**Detail:**
- The screen states what is lost on the switch: checking, Later custom investments and the 3% Later match (tier: directly observed).
- Two controls follow, switch to Acorns Assist and cancel subscription (tier: directly observed).
- Cancelling outright closes the accounts (tier: directly observed).
- The tax consequence of closing is placed inside the retention offer rather than on the cancellation confirmation (tier: directly observed).

*Cross-reference: O49, O50, O63, O80.*

**O82. Pausing investments does not pause the subscription.**

**Observed:** The pause confirmation states that future transfers such as investments or contributions will be paused, that the subscription cost will not be paused, and that any pending transfers will continue to process (tier: directly observed).

**Detail:**
- The statement is made at the point of pausing rather than discovered afterwards (tier: directly observed).

*Cross-reference: O49, O79.*

**O83. A metal card is presented as an object exclusive to the top plan.**

**Observed:** The checking flow leads with a "laser engraved tungsten metal debit card exclusive to Gold Plan" (tier: directly observed). The review screen states that the user's signature will be laser engraved on the back of it (tier: directly observed).

**Detail:**
- The card's material and engraving are stated before any of its banking terms (tier: directly observed).
- The engraved signature is the only personalization of the card observed (tier: directly observed).

*Cross-reference: O40, O63.*

**O84. Testimonials and a user count are used in the kids' account flow.**

**Observed:** The Early Invest surface states "over 350,000 kids and growing", and the setup completion screen is followed by several reviews showing how satisfied people are with the product (tier: directly observed).

**Detail:**
- The reviews appear after the account is opened rather than before the decision (tier: directly observed).
- No comparable social proof is observed on the Invest, Later or checking flows (tier: directly observed).

*Cross-reference: O69.*

**O85. Matches are presented as plan benefits across four separate surfaces.**

**Observed:** Four distinct matches are stated: a 3% IRA match for the first year on Gold and a 1% IRA match for the first year on Silver, shown on the home screen as "later 3% IRA match" and in Later settings as "3% IRA match active"; a 1% match on new contributions to Early Invest accounts; the first five roundups matched when real-time roundups are activated with the Acorns debit card; and an additional 0.75% match from Acorns on top of a brand's own rate on the earn surface because the user is on Gold (tier: directly observed).

**Detail:**
- The first three add a stated percentage or count to money the user contributes themselves (tier: directly observed).
- The fourth adds a stated percentage to a reward Acorns already pays on a qualifying purchase, and is shown as a separate line, total rewards matched, in the earn activity (tier: directly observed).
- The match rate is used as the difference between plan tiers at the same feature: 1% on Silver against 3% on Gold for the same IRA match (tier: directly observed).
- None of the matches is observed being paid (tier: directly observed).

*Cross-reference: O28, O32, O40, O42, O63, O69, O74.*

## Return triggers

**O86. Notification permission is requested at the end of setup, with a stated reason.**

**Observed:** The permission pop-up states "enable push notifications so we can let you know about important updates to your account", with Not now and Enable (tier: directly observed).

**Detail:**
- The reason given is account updates; no reminder, streak or offer purpose is stated (tier: directly observed).
- No notification is delivered during the session (tier: directly observed).

*Cross-reference: O24, O87.*

**O87. Notification settings are held in personal settings.**

**Observed:** Personal settings lists personal info, subscription, linked accounts, notifications, word definitions, and login and security (tier: directly observed).

**Detail:**
- The contents of the notifications settings are not observed (tier: unresolved).

*Cross-reference: O86.*

**O88. The first investment is stated to arrive in three to five business days.**

**Observed:** The one-time investment screen states "your first investment should be visible in your invest account in 3 to 5 business days" (tier: directly observed). The dashboard then reads "your investment is on its way" (tier: directly observed).

**Detail:**
- The celebration screen states a specific date by which $10 will be live (tier: directly observed).
- A contribution confirmation states an estimated arrival date for that contribution (tier: directly observed).
- Each of these gives the user a dated reason to open the app again without asking them to (tier: plausible, the copy states delivery timing and no return prompt is attached to it).

*Cross-reference: O21, O25, O42.*

**O89. Account opening and verification end in pending states the user must come back to.**

**Observed:** The checking account flow ends in "this is taking longer than expected. We're still working on opening your account", and separately in a verification required state with two items processing (tier: directly observed).

**Detail:**
- Both states leave an incomplete account visible on the home screen with its Activate control still showing (tier: strongly supported, the home screen row for checking carries an Activate control throughout).
- No notification or scheduled follow-up for these states is observed (tier: directly observed).

*Cross-reference: O41, O56, O60.*

**O90. The retirement widget names a dated target to come back for.**

**Observed:** The contributions widget reads "don't miss out. Investing just $20 a week can get you closer to hitting your IRA contribution max for 2026", with a turn on recurring control (tier: directly observed).

**Detail:**
- The deadline is the calendar year, set outside the product (tier: directly observed).
- The prompt names a weekly amount rather than the remaining total (tier: directly observed).

*Cross-reference: O55.*

**O91. The tax center lists the dates by which forms will arrive.**

**Observed:** The tax center states "if you're supposed to receive the tax form, you'll get it by the following dates" and lists the IRS form types with their release dates (tier: directly observed).

**Detail:**
- The surface schedules the user's next visit around dates it does not control (tier: plausible, the copy states the dates and attaches no reminder to them).

*Cross-reference: O51.*

**O92. The referral offer carries an end date and a settlement window.**

**Observed:** The offer states that it ends on a stated date, that friends must complete a first deposit of $5 or more within 14 days of the offer end date, that deposits can take up to five business days to settle, and that the bonus will be invested within 30 days once eligibility has been established (tier: directly observed).

**Detail:**
- The FAQ refers to a weekly referral offer, which implies a recurring cadence to the offers; no second offer is observed (tier: plausible, the phrase appears once in an FAQ heading).
- Both parties must keep their accounts open and in good standing at the moment the bonus is invested, which extends the condition past the qualifying action (tier: directly observed).

*Cross-reference: O72, O73.*

**O93. The home tour can be restarted.**

**Observed:** Where the tour is skipped, a "take tour again" control remains on the home screen (tier: directly observed).

**Detail:** None.

*Cross-reference: O26.*

# Pass two: tagging

## Applied tags

**Tag:** Expert Guidance

**Observations:** O52.

**Supporting observations:** O42, O44, O45, O47, O51, O57, O58.

**Confidence:** directly observed.

**Role:** engagement.

The material is placed inside the surfaces the user is already working in, at the foot of the invest, Later and tax screens and beside the portfolio controls (O42, O47, O51), which makes it something to do within a session rather than a reason to return or a thing to buy.

**Rationale:** Acorns carries a body of material whose subject is investing, retirement and tax rather than the operation of the app, divided into addressable pieces with stated formats and lengths, and placed where the user can ignore it entirely (tier: directly observed). Observed pieces include "investing strategies for beginners", "what returns can you expect when you invest?", "how to stay calm when markets make you uneasy", "5 ways to optimize your retirement savings", "how an IRA can help you save on taxes", and the tax explainers at O51 (tier: directly observed). Each instructs on a subject that would remain true for a user who never opened Acorns (tier: strongly supported, the titles name general investing and tax subjects and no product feature). The material is authored in-house and attributed to the Acorns team rather than to an external expert, which the entry does not require (tier: directly observed). Nothing in any observed account flow routes through a piece of content, so the core activity can be performed in full without engaging with any of it (tier: strongly supported, no flow step opens a library item).

**Variants present:** article library, video library, ordered course, multi-format guidance, in-house guidance, domain guidance, contextually placed guidance, personalized guidance in the sense of the "Just for you" filter, updated library in the sense of the trending row.

**Variants not established:** gated guidance, since no piece is observed behind a plan condition; externally hosted guidance, since every observed piece opens in the app; companion-media guidance; static library; condition-specific guidance; tracked guidance, since no record of a completed piece is observed. Whether the "Just for you" filter selects on account state or on a general rule is not observed.

**Alternative considered:** treating the whole Learning tab as product content, which the entry excludes from this label. That is rejected for the investing, retirement and tax pieces and accepted for the rest: "make the most of Acorns", "how the roundups work", the "using Acorns" filter and the "getting started with Acorns" course teach the operation of the product and carry no mechanic label, and are described in plain language at O52 and O57. Personal Data Reflection was also considered and does not apply, because none of the material presents the user's own records as steps requiring a response.

**Tag:** Reward Multiplier

**Observations:** O85, O74.

**Supporting observations:** O37, O63, O75, O77, O78.

**Confidence:** strongly supported.

**Role:** engagement, monetization.

The modifier raises what linked-card purchases through the offers pay, which is activity inside the product's own earn surface (O74, O75), and it exists only while the Gold subscription is held and is presented alongside the other plan benefits as part of what the $12 a month buys (O63, O78).

**Rationale:** Acorns pays a stated invested percentage on qualifying purchases at named brands, observed as up to 1.68% at one merchant, and that reward exists independently of the user's plan (tier: directly observed). On the Gold plan the product adds a further 0.75% match on top of the brand's own rate, observed on a second merchant's offer (tier: directly observed). The factor is stated as a percentage, the scope is the entitlement, and qualifying activity inside that scope pays more than the same activity outside it (tier: strongly supported, the additional match is attributed to being on Gold and the earn activity screen reports total rewards matched as a line separate from total earnings). The modifier changes the amount paid rather than whether a reward occurs (tier: directly observed). The match is never observed being paid, since the earn totals stand at zero throughout (tier: directly observed).

**Variants present:** entitlement multiplier, additive bonus, activity-scoped multiplier in the sense that it applies to the earn offers rather than to every reward the product pays.

**Variants not established:** timed multiplier, instance multiplier, event multiplier, condition-earned multiplier, purchased multiplier in the sense of a separate purchase, escalating multiplier, capped multiplier, stacking or non-stacking behaviour, opt-in multiplier, advertisement-conditioned multiplier, undisclosed-trigger multiplier. Whether the match rate differs on Silver or Bronze, whether it applies to every offer or only to some, and whether any ceiling applies are not observed.

**Alternative considered:** the roundups multiplier at O32, which states a factor of 2x, 3x or 10x and would be the more obvious candidate. It is excluded because the base it multiplies is the user's own spare change moving into the user's own account, not a reward the product pays, and the entry directs that a modifier over a measure the product does not treat as a reward is not this label. The three contribution matches at O85 are excluded on the same ground: 3%, 1% and the first five roundups matched are added to money the user contributes rather than to a reward. The roundups multiplier is carried to Pass three, where it remains an open proposal; the contribution matches were proposed and rejected on scope, and are recorded below under entries considered and not applied. Treating the different plan rates as the mechanic was also considered and rejected, since a product maintaining two reward rates is a reward table rather than a modifier over a base; what qualifies here is that the Gold amount is stated as an additional match on top of the brand's stated rate.

**Tag:** Future Projection

**Observations:** O27, O53, O54.

**Supporting observations:** O21, O26, O28, O34, O42, O55.

**Confidence:** strongly supported.

**Role:** engagement.

The projection is the figure the home screen leads with and the second thing the guided tour points at (O27, O26), and it is restated as the difference an amount would make at the moment the user sets a recurring contribution (O54), which is a decision taken inside a session rather than a reason to return or a route to a charge.

**Rationale:** Acorns holds a present position for the user and displays a computed value for that position at a stated horizon of 40 years under a stated assumption of an average 8% return, decomposed into $20,000 invested against $120,000 returned (tier: directly observed, O53). The projected figure occupies the position a balance would hold on the home screen, and is reached by dragging a control from the present holding to the projected one (tier: directly observed, O27 and O53). Setting a recurring contribution is answered with a statement of how much that amount would raise the projected total by the same horizon (tier: directly observed, O54). Nothing in the product recognizes the projected state as reached (tier: strongly supported, no response to any projected value appears anywhere in the record). The classification rests on three observations converging on one implementation rather than on any single decisive screen, and no projected figure is observed moving with a position, because the record is a screenshot set rather than a live account (tier: strongly supported).

**Variants present:** monetary projection, stated-rate projection, fixed-assumption projection, interactive projection, decomposed projection, leading projection, commitment-restated projection, illustrative projection.

**Variants not established:** date projection, quantity projection, pace projection, adjustable-assumption projection, static projection, undecomposed projection, shortfall projection, multi-horizon projection, shared projection. Whether the horizon or the rate can be changed by the user is not observed, and neither is any consequence of the figure.

**Alternative considered:** a promotional illustration rather than a projection of this user's own position, which would apply if the figure were fixed copy that does not move with the account. Two things hold it open. The two projected figures observed do not reconcile: the collapsed line on the dashboard reads $70.1k and the expanded view reads $140,000, against a stated present holding of $45 (tier: directly observed, O27 and O53). The product states on the same screen that the graph is for illustrative purposes only and that investing involves risk (tier: directly observed, O53). Neither is a reason to withhold the label: an illustrative disclaimer sits among the entry's non-required conditions, and the entry's own open separating evidence holds the computation as unobserved behavior detail, so presence is asserted on the product's own framing under the presence standard while this alternative stands (tier: unresolved). What separates them is a session on a live account in which the present position changes materially and the projected figure is read before and after; if the figure does not move, this entry does not apply and the surface is described in plain language. Milestone was also considered and would apply if the product recognized a defined point within the projection as reached. It does not: the horizon is 40 years and nothing in the record responds to any projected value being attained. The IRA contribution proportion at O55 was weighed as a second instance of this entry and is excluded, because it reports position against an externally set annual maximum rather than a computed future value under a stated assumption. Personal Data Reflection was also considered and does not apply, because moving the control reveals a further view rather than releasing a step the product withheld until the user responded.

**Tag:** Referral

**Observations:** O72, O73.

**Supporting observations:** O28, O37, O92.

**Confidence:** directly observed.

**Role:** social, engagement.

The reward depends on what named people the user chooses to introduce then do with their own accounts (O73), and the figure sits permanently in the top bar of the home screen as something to act on while the user is inside the product (O72, O28).

**Rationale:** Acorns provides an introduction route in the form of a unique link and a scannable code, defines the qualifying completion event as the introduced person's first deposit of $5 or more within 14 days of the offer end date, and states the reward rule in advance, including the amount, the 30-day payment window, the five-business-day settlement period and the requirement that both accounts remain open and in good standing when the reward is invested (tier: directly observed). The reward accrues to the referring user as money invested into their own Invest account (tier: directly observed). The stated total rises with the number of qualifying friends rather than repeating a fixed payment per introduction (tier: strongly supported, two different totals are stated against four and five friends). The introduced person also receives a $5 bonus investment (tier: directly observed). A referral surface tracks introductions in progress, and the earn totals report referrals as their own line in the 30-day summary (tier: directly observed). Nothing the referring user must complete beyond holding an open account in good standing is stated, which the widened entry carries as a non-required condition (tier: directly observed). No referral is made and no reward is paid in the session (tier: directly observed).

**Variants present:** monetary reward, count ladder, referral progress tracker, headline referral placement, offer window, good-standing condition, two-sided referral reward, link-based referral, scannable referral.

**Variants not established:** enhancement reward, separable reward, currency or credit reward, item reward, flat per-introduction reward, capped and uncapped reward, expiring and persistent reward, stacking and non-stacking reward, prior-use-gated referral, settlement-qualified referral, asymmetric qualifying actions, eligibility-qualified reward, automatically applied reward, claimable reward, notified reward, limited referral, code-based referral. The shape of the ladder is not established: the transcript carries $800 against four friends, $1,375 both in the header and against five friends, and $1,306.75 in the home-screen panel against five friends, and the narration is fragmented at that point.

**Alternative considered:** Gifting, which would apply if a sender directed a product-defined benefit to an identified recipient and the recipient's state changed because of that grant. It is excluded because the reward is earned by a defined completion event performed by the introduced person rather than granted by anyone. First-Purchase Bonus was weighed for the $5 paid to the introduced friend and does not apply, since it is triggered by a first deposit, which that entry excludes as a funding event rather than a purchase. Under the entry as it stood before 14 Sep 2026, when it was named Referral Boost and required the reward to be an enhancement to the referring user's own next action, this behavior would have been excluded for paying a separable reward; that gap is what produced the widening.

## Entries considered and not applied

- Earning Tasks. The earn surface at O74 was weighed against this entry. It fails the required condition that the tasks be compensated work performed for its own sake: what the user does is make a purchase they were making anyway at a named brand, which the entry separates out by name as a purchase reward. No task discloses an expected effort, and no catalogue of priced work exists.
- First-Purchase Bonus. Three candidates were weighed and none qualifies. The free first month at O13 is access granted before any purchase, which the entry excludes. The first five roundups matched at O85 apply to five qualifying events rather than to the first one, so no first-purchase eligibility is consumed. The $5 bonus paid to an introduced friend at O73 is triggered by a first deposit, which the entry excludes as a funding event rather than a purchase.
- Milestone. The IRA contribution proportion at O55 is the candidate. The product reports position against an externally set annual maximum and prompts the user toward it, but no response to reaching or crossing the maximum is observed, and the entry excludes a future target the product does not recognize as reached.
- Profile Completion. The activation list at O56 and the Gold benefits list at O78 are the candidates. Both name outstanding items as actions, but neither reports a proportion of a defined set, which the entry requires; the rows state what each account carries rather than how much of a set is done.
- Challenge. The quiz at O58 is the candidate. It fails for want of a boundary and a success condition: no pass mark, deadline or attempt limit is set for the play as a whole, and the score is a judgement of answers within the interaction rather than a concluded instance.
- Personal Data Reflection. The potential projection at O53 and O54 is the candidate. The slider returns a figure derived from the user's own position, but moving a control to reveal a further view is navigation through a display, which the entry excludes, and the interaction is not structured as steps whose next step is withheld until the user responds.
- Minigame. The quiz at O58 was weighed against this entry. Its outcome appears to change nothing the product maintains outside it, but the entry excludes an activity that teaches the product's own main activity, and the observed questions concern Acorns' own accounts and the terms it uses.
- Comparative Rank. The community average at O58 is the candidate. The entry directs that an above-average message is not rank unless the product also assigns a position within an ordered comparison, and no position, ordering or comparison set is shown.
- Experience Points. The quiz score at O58 is the candidate. No progression threshold, level or unlock is shown depending on it, and the score is confined to the result screen.
- Progression Gate. Four candidates were weighed: the paycheck split condition at O62, the Money Manager prerequisite at O39, the plan-tier conditions at O63, and the verification hold at O60. All fail the same required condition. None is stated in the terms of a progression measure the product advances through the user's activity; they are account state, entitlement and identity verification, which the entry names explicitly as eligibility conditions carrying no tag.
- Purchase Ladder. The three plans at O14 are the candidate. The entry requires that a position cannot be taken until the positions below it have been taken; Gold is selectable directly from the paywall without Bronze or Silver having been held.
- Leveling. Two candidates were weighed: the five risk steps at O43 and the three plan tiers at O14. Neither is a state the system moves the entity between under advancement or reassessment rules; the risk step is set by the user at will and the plan is held by paying.
- Set Collection. The library pieces at O52 and the portfolio holdings at O46 were weighed. Neither is tracked at member level against a defined group: no record of which pieces have been taken is observed, and the holdings are an allocation rather than a set with missing members.
- Soft Currency. No product-defined currency granted by ordinary activity exists anywhere in the product; every amount the app grants is denominated in dollars and deposited into a brokerage account.
- Hard Currency. No product-defined currency acquirable by payment exists; the subscription buys features rather than units.
- Spendable Credits and Tokens. The invested reward amounts at O74 and O73 are the candidate. They are dollars held in the user's own investment account rather than quantified units exchangeable under product-defined rules, and nothing in the product is priced in them.
- Companion. The squirrel at O9 is the candidate. It is a persistent character, but it is not acquired, not assigned to any active position, and carries no progression, holdings or state of its own; it delivers explanations and nothing else.
- Cosmetic Customization. The engraved signature at O83 is the candidate. It changes the appearance of a physical card rather than the presentation of a user, object, space, action or product surface inside the product, and it is a one-time input taken during issuance rather than a customization the user can change.
- Shareable Win. The referral link and QR code at O73 are the candidate. Neither composes a representation of a recorded accomplishment; what is sent out is an invitation with a tracking code.
- Reversal Deterrent. Proposed from this analysis on O49, O50 and O81, and rejected on scope on 14 Sep 2026. A warning, a stated consequence and a preferred alternative placed in front of a withdrawal, a pause or a cancellation are an exit flow: they describe how a product resists a user leaving rather than a designed experience pointing the user toward a behavior. Record such flows in plain language in the section they sit in, and do not propose them again.
- Contribution Match. Proposed from this analysis on O85, O22 and O69, and rejected on scope on 14 Sep 2026. A match rate stated as the difference between two plans is a price: what is being sold is a better rate, and an inducement to buy is a commercial arrangement however it is presented. This is the same ground on which declined-offer fallback grants and paywalled reward ladders were rejected. Record match rates in plain language under Monetization, and do not propose them again.
- Waitlist Intent Capture. Proposed from this analysis on O66 and O71, and rejected on scope on 14 Sep 2026. A control for a feature that does not exist, opening a question about how the user would use it, is market research reached through a product surface: the output flows to the company and the user receives only a confirmation. Record it in plain language, and do not propose it again.

## Unresolved

**Piggy Bank (O29, O19).** Roundups accumulate across purchases and are released into the Invest account at a stated $5 threshold, which is the shape this entry describes and which its own round-up borderline case treats as qualifying. What is not established is whether the accumulating change is held in a restricted reserve at all. The settings copy states that Acorns transfers the roundups from the primary bank when they add up to at least $5, which reads as a figure accrued while the money stays spendable in the user's own checking account, and the entry requires the stored value to be restricted from ordinary use while it sits in the reserve. No roundup is observed accumulating, since no card is linked and the roundups screen stands at zero. What would settle it is a session with a linked card in which the pending roundup total is examined before it reaches $5, and the same amount checked against the bank balance.

**Achievement (O57, O58).** The course ends in a scored quiz, a "well done" screen and a retake control. Whether any attained state is preserved after that point is not observed: no completion marker, record, badge or changed state is shown on the course card, the library or the profile, and the entry directs that a case be marked unresolved where the criterion and the attained state cannot be connected. What would settle it is a second visit to the Learning tab after a course has been finished.

**Group Membership (O69, O70).** Opening an Early Invest account adds a Kid tab, an Add another kid control and a set of accounts held for named children, and the marketing surface states parental oversight, real-time spending notifications and instant transfers to the child's card. Whether Acorns represents this as a group entity with maintained membership, or simply as further accounts held by one subscriber, is not established, and the session never opens the child-side app. What would settle it is a session in which a child account is opened and the parent and child surfaces are both examined.

**Gifting (O70, O71).** Two routes for one person to direct value to another are stated and neither is observed operating: the Acorns Early copy states that family and friends can send money to kids on the regular, and the Request feature states that tips, payments and gifts from other people would be invested automatically. Request is explicitly not yet available and is offered as a waitlist. What would settle it is a session in which a transfer from one person to another is completed, which would also decide whether the behavior is a product-defined benefit directed to a recipient or ordinary money movement described in plain language.

## Entries never observed

- Boosters. No item is held in a counted quantity and expended inside an activity to change its conditions or outcome.
- Clan / Guild. No member-based group with its own identity or group-level state exists anywhere in the product.
- Community Space. No persistent shared context in which multiple actors contribute or interact exists; the assistant at O48 is a private chat with the product.
- Daily / Weekly Quests. No objective is issued, refreshed or released on a daily or weekly schedule.
- Daily Claim Pack. No purchase or activation generates rewards across recurring intervals.
- Daily Login Rewards. No benefit is granted for opening the product within a daily window.
- Energy. No bounded capacity is consumed when an action occurs; nothing in the product limits how often the user may act.
- Leaderboard. No ordered list of comparable entities appears anywhere.
- Lives. No continuation units are removed on a failure or terminal event.
- Loot Box. No container or draw with undisclosed contents is acquired.
- Passive Construction. No persistent constructed entity is created, restored, expanded or upgraded by a process that advances on its own.
- Progression Fund. No unbounded reward track runs on a measure the product maintains for another purpose, and no paid second lane exists over one.
- Rewarded Advertisement. No advertisement appears anywhere in the session, and no benefit is made conditional on engaging with one.
- Season Content Pass. No entitlement grants access to content items grouped under a season, event or release cycle.
- Seasonal Progression Pass. No time-bounded progression track with ordered reward thresholds exists.
- Social Feed. No sequence of content or activity items from multiple actors is presented.
- Streak. No uninterrupted sequence of qualifying occurrences is tracked; nothing in the product counts consecutive days, weeks or contributions.
- Variable Reward Outcome. Every stated reward in the product is a fixed percentage or amount; no resolution can assign materially different results.
- Variable Reward Schedule. Every reward rule observed states in advance what qualifies and what it pays.

# Pass three: proposed new tags

Eight proposals were made on this run and all eight were ruled on on 14 Sep 2026. Future Value Projection was approved under the name Future Projection, is now an approved library entry, and is applied as a tag in Pass two against the observations that produced it, O53 and O27; "value" was removed on approval as finance-specific, since the pattern covers projected dates, weights, completion points and savings as much as money. Tiered Referral Target was not created as a new entry: the existing entry Referral Boost was widened and renamed Referral, so that the payout shape is a variant axis rather than part of the invariant, with the count ladder and the progress tracker added as variants, and that entry is applied in Pass two on O72 and O73. Reversal Deterrent, Contribution Match and Waitlist Intent Capture were rejected on scope and are recorded above under entries considered and not applied, each with the reasoning that rules it out in future analyses. Contribution Multiplier, Inline Justification Helper and Composition Quality Score were held rather than rejected. Each names something real, and each rests on one implementation read from a screenshot set in which the behavior was never seen operating. All three remain open below, and each caveat states the evidence that would settle it.

### Contribution Multiplier

**Draft definition.** The product automates a small recurring transfer of the user's own money derived from an activity the user performs anyway, then offers a stated factor that multiplies each transfer, so the user raises what they commit per event by changing one setting rather than by deciding an amount each time.

**Source observations:** O29, O31, O32.

**Conditions it appears to depend on:** an automated contribution rule tied to an ordinary activity, observed as rounding card purchases up to the next dollar; a stated factor offered against that rule, observed as off, 2x, 3x and 10x; a worked example showing the same event under each setting, observed as a $4.80 coffee contributing $0.20 or $2; and a setting that persists rather than a choice made per event.

**Why it is not covered.** Reward Multiplier requires a base reward the product pays for a defined activity; here the base is the user's own money moving from one of their accounts to another, which that entry excludes by naming measures the product does not treat as a reward. Piggy Bank classifies a restricted reserve rather than the size of what enters it. Boosters requires an item expended inside an activity. No approved entry covers a stated factor applied to what the user contributes.

**Recurrence elsewhere:** round-up saving and investing products, charity round-up donations, pension contribution percentage settings, and savings rules that double a transfer on a condition all take this shape. It is describable without reference to this app.

**Caveat.** Held pending a second instance in another app. Nothing is observed operating: no card is linked, the roundups screen stands at zero, and no roundup is seen accumulating or being multiplied (O29). Three things would settle it. First, one session in another product in which a stated factor is applied to an automated contribution of the user's own money, which establishes that the pattern is not particular to round-up investing. Second, in either product, a session in which the factor is changed and the resulting contribution is observed, which separates a stated factor over a base contribution from a menu of contribution amounts. Third, a reading of the whole-dollar setting at O31 alongside the factor, which decides whether the two are one control with two presentations; if they are, the proposal collapses into a contribution-amount setting and carries no label.

### Inline Justification Helper

**Draft definition.** At the points where the product asks for the most sensitive information, it places a standing control that, on request, explains why that specific item is being collected and what it will be used for, in the voice of a character or persona rather than as help text, and it does so per screen rather than once for the flow.

**Source observations:** O9, O6, O8.

**Conditions it appears to depend on:** a sequence of screens collecting information the user may hesitate to give, observed as name, date of birth and Social Security number; a persistent control in a fixed position across those screens; an opening offer of help rather than an answer, observed as "I'm here if you need more context"; a second step the user must take to receive the explanation; an explanation specific to the screen the user is on; and a route to further reading where the reason is legal.

**Why it is not covered.** Expert Guidance is excluded by its own terms, since the material teaches the operation of the product rather than a subject outside it. Companion requires an entity the user acquires, positions and develops. Onboarding instruction leads the user through steps; this does not instruct on what to do, it justifies what has been asked. No approved entry covers a standing, per-screen justification of the product's own data requests.

**Recurrence elsewhere:** account opening in regulated products, insurance and lending applications, health intake forms, identity verification flows, and any product asking for permissions it cannot explain in a field label all take this shape. It is describable without reference to this app.

**Caveat.** Held pending a second instance in another app. Only two instances are observed, both on identity-collection screens inside one onboarding flow (O6, O8), and the narrator reports the control as present at all times without confirming it outside that flow. Three things would settle it. First, a second product placing a standing per-screen justification of its own data requests, which establishes recurrence. Second, a session that reaches a screen outside onboarding and checks whether the control is still there, which decides whether this is an onboarding device or a standing one. Third, an instance carrying no character or persona, which decides whether the persona is part of the pattern or incidental to it. If the justification turns out to be help text attached to a field rather than a standing control the user opens, the proposal collapses into ordinary field guidance and carries no label.

### Composition Quality Score

**Draft definition.** While the user configures something the product will act on, the product returns a continuous judgement of the resulting configuration on a named scale with labelled bands, updates it as the control moves rather than after confirmation, and explains what drives it, so that the user is steered toward a configuration the product prefers without being prevented from choosing another.

**Source observations:** O47, O46, O43.

**Conditions it appears to depend on:** a configuration the user controls, observed as the share of the portfolio allocated to chosen holdings; a scale with named bands, observed as weak, fair and strong; a value that moves with the control, observed as strong at 19% and weak at 48%; an explanation of what raises and lowers it; and a separate statement of the product's own recommended setting, observed as the 10% note against the 50% ceiling and as the recommended-or-not line on the risk screen.

**Why it is not covered.** Profile Completion requires a proportion of a defined set of supplied attributes and excludes a judgement of quality by name, directing that such a score be described in plain language without assigning that label; it does not assign another. Milestone requires a recognized threshold. Progression Gate requires a part withheld below a value; nothing here is withheld and the user may choose any setting. No approved entry covers a live evaluative score over a user's own configuration.

**Recurrence elsewhere:** password strength meters, listing and profile quality scores, SEO and readability scores in writing tools, nutrition scores in food logging, and configuration health scores in technical products all take this shape. It is describable without reference to this app.

**Caveat.** Held pending a second instance in another app. Two values of the score are observed, strong at 19% and weak at 48%, and the scale's boundaries, its thresholds and any consequence beyond the label are not (O47). Three things would settle it. First, a second product returning a live banded judgement of a configuration the user is setting, which establishes recurrence outside portfolio allocation. Second, a session that moves the control across the full range and records where the bands change, which decides whether this is a graded judgement or a validation message with a warning state. Third, a check of whether the score is preserved anywhere after the user leaves the screen: if it is, that record is classified under Achievement or Milestone on its own terms and this proposal continues to cover the live score. If the score turns out to gate the change rather than only label it, the lock is classified on its own terms and the proposal covers only what remains.

# Close: system view

Acorns is built so that money enters by itself. The session's load-bearing observation is the bank connection at O10, because it is placed before the paywall, before any account type is chosen and before anything is invested, and because its framing is not "fund this transaction" but "every time you add money to Acorns it will transfer from your primary account". Everything downstream assumes that standing permission: the roundups rule at O29, the weekly recurring amount at O20, the Later contributions at O42, the subscription charge at O79 and the Money Manager split at O39 all draw on the same connection. The auto debit authorization is agreed at O4, one screen into the flow, before the user has seen a price.

The onboarding chain is the product. From O1 to O26 the app runs twenty-six consecutive screens without a single branch that returns the user to a previous state, and the funding asks are placed at the end of it, when the sunk cost is highest: roundups at O19, a weekly amount at O20, a one-time amount at O21, then immediately the retirement account at O22 with "you're on a roll". Two devices hold the chain together. The squirrel at O9 answers the objection at each disclosure step rather than at the start, which is why it generated a proposal rather than a tag. The paywall at O13 is placed between the funding connection and the account choice, and the screen after it, O15, states "all the accounts below are included in your plan", so the first thing the subscription buys is the framing that nothing further will be charged.

The product's measure of progress is a projection, not a balance. O27 puts the potential figure where a balance would sit, O26 makes it the second thing the guided tour points at, O53 breaks it into contribution and return with the return four times the larger, and O54 answers every increase in the recurring amount with an increase in the projected figure. This is the only forward-looking measure in the product: there is no level, no streak, no experience, no rank and no collection anywhere in the record. The contribution proportion at O55 is the one other number that behaves like progression, and its threshold is set by the IRS rather than by Acorns.

Little in this product carries a mechanic label, and that is the finding rather than a gap in the record. Four tags apply, two of them from entries this run produced. Expert Guidance at O52 sits on a library that is genuinely about investing rather than about Acorns, placed at the foot of the surfaces where the user is making decisions, which is what gives it its engagement role. Reward Multiplier at O85 and O74 sits on the one modifier in the product whose base is a reward Acorns pays rather than money the user contributes. Future Projection at O53 and O27 sits on the figure the home screen leads with in place of a balance. Referral at O72 and O73 sits on the offer held in the top bar, and applies only because the entry was widened on this run; under its former terms the form the reward takes would have excluded it. Everything else that looks like a mechanic is the product's own financial service, priced infrastructure, or an eligibility condition: the accounts, the balances, the transfers, the card, the verification, the tax filing and the plan tiers. The engagement-design test is what separates them, and applying it strictly is why the Economy and resources section is empty: every quantity Acorns maintains is the user's own money.

The four unresolved cases are all the same shape. Piggy Bank at O29, Achievement at O57, Group Membership at O69 and Gifting at O70 each concern a behavior the product states but the session never reaches, because no card was linked, no course completion was revisited, no child account was opened on the child's side and no transfer between people was made. All four would be settled by a live account rather than by a longer screenshot set, which is the limit this session runs into rather than a limit of the record.

Where the mechanics are absent, the design shows up at the edges. The behaviors this run put forward all sit on moments rather than systems: the justification at the point of disclosure (O9), the projection at the point of commitment (O54), the factor at the point of automation (O32), the score at the point of configuration (O47), the interruption at the point of reversal (O49, O50, O81), and the intent question at the point where a control does not work yet (O66). One of those became an entry, three were rejected as exit flow, as price and as research, and three remain open pending a second instance. This is a product whose engagement design is concentrated at decision points rather than spread across a loop, which is consistent with the absence of a loop: the core activity at O29 and O34 runs without the user, and a product that invests on its own has no repeated action to attach a mechanic to.

The return structure follows from the same fact. Nothing in the record is built to cause a visit. The notification permission at O24 is asked for account updates, the dated statements at O88, O89, O90, O91 and O92 all name dates set by settlement times, verification queues, the IRS or an offer's own end, and the only standing invitation to come back is the tour control at O93. No rating prompt, no sign-in reward, no streak and no countdown owned by Acorns appears anywhere. What brings the user back is the money arriving, which is also what the product spends its onboarding making automatic.

Dependencies:

- O10 feeds O19, O20, O21, O29, O34, O35, O42 and O79 (tier: strongly supported).
- O4 authorizes the debits that O20, O34, O42 and O79 execute (tier: strongly supported).
- O13 and O14 set the plan that O63, O77, O78, O81, O83 and O85 all read from (tier: directly observed).
- O17 feeds the recommendation at O18, which O43 and O44 then edit and which O47 scores (tier: directly observed).
- O33 feeds both O29 and O74, so one card link supplies the roundups and the earn rewards (tier: strongly supported).
- O39 depends on O40, which depends on O41 and O60 (tier: directly observed).
- O53 is restated at O54 and is the measure O27 and O26 lead with (tier: directly observed).
- O49, O50 and O81 share one shape and are reached from O28, O42 and O79 respectively (tier: strongly supported).
