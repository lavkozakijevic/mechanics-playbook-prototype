# Acorns

**Teaser:** The home screen leads with what the account could be worth in 40 years, not what it actually holds today.

Acorns is an automated investing app built around a single standing decision: connecting a bank account that funds roundups, recurring contributions, and a retirement account without further input. The core activity, investing money, runs on its own once that connection exists, so the product has no repeated action for a mechanic to attach to. What engagement design exists sits on four separate decisions instead of a loop: a library of investing guidance placed beside the screens where the user configures something, a matched rate on purchases made at outside brands, a projected future balance that leads the home screen in place of the real one, and a referral reward that rises with the number of friends who invest.

---

## System view

Acorns is a simple system with no loop: its spine is the standing bank connection agreed in the first screens, which funds every automatic transfer that follows, and the core activity of investing runs without any repeated user action for a mechanic to attach to. The four mechanics that do apply each sit on their own separate decision rather than on each other or on any device built to drive a return; every dated statement the product makes is set by a settlement window, a verification queue, or the IRS, and what actually brings a user back is the money arriving on its own schedule.

---

## Mechanics

### Expert Guidance

**Implementation summary:** Acorns' library teaches investing, retirement, and tax in general rather than the app itself, placed beside the screens where a decision is being made.

**What was observed:** Acorns carries an in-house library of articles, videos, and one short course whose subject is investing, retirement, and tax rather than the operation of the app itself. Pieces like a beginner's guide to investing strategies, what returns to expect, staying calm through market swings, optimizing retirement savings, and how an IRA affects taxes sit alongside similar tax explainers. Each piece states its own format and length, and nothing in any account flow requires opening one.

**How it is presented:** The library surfaces as a learning carousel at the foot of the home, invest, Later, and tax screens, filtered to whatever subject that screen concerns, and again as its own Learning tab with filters for content aimed at the user, at using Acorns, and at investing generally. Pieces carry a byline attributed to the Acorns team, a publication date, a view count, an estimated length, and a control asking whether the piece helped.

**What is worth noting:** The material teaches a subject that would stay true whether or not the reader ever opened Acorns, which separates it from the app's own how-it-works content, a separate course and articles like how the roundups work, which teach the product itself and carry no mechanic label. Placing the carousel at the foot of the exact screen where a portfolio or tax decision is being made puts the guidance inside the decision rather than in a separate resource section.

**Key findings:**

- The library covers investing, retirement, and tax subjects general to the domain, not to Acorns.
- A carousel version is filtered to match whatever screen it appears on: home, invest, Later, or tax.
- Pieces carry a byline, publication date, view count, length, and a helpfulness control.
- No step in any account flow requires opening a library piece.
- A separate short course and articles teaching Acorns' own features sit beside the library but carry no mechanic label.

**Screenshots needed:** the Learning tab with its three filters, and a library carousel at the foot of the invest screen.

### Reward Multiplier

**Implementation summary:** Being on the Gold plan adds a flat 0.75% on top of whatever a brand's own purchase-reward rate already pays.

**What was observed:** Acorns runs an earn surface paying a stated percentage of qualifying purchases at named brands as an investment into the user's Invest account, up to 1.68% at one merchant. On the Gold plan, a second merchant's offer adds a further 0.75% on top of that brand's own rate. The extra amount is reported as its own line, total rewards matched, separate from total earnings in the same activity view.

**How it is presented:** The match is described as a Gold plan benefit alongside the plan's other entitlements rather than as a separate feature of its own, and it appears at the point an offer is opened rather than as a standing rate stated once. The earn surface's 30-day summary reports earned rewards and referrals in the same statement as the user's own deposits.

**What is worth noting:** The multiplier only ever raises a reward Acorns itself pays; a separate, much larger multiplier on the roundups screen raises the user's own spare change instead, which stays a different behavior since a modifier over what a person contributes isn't the same design as a modifier over what a product pays. The match is stated as part of the plan comparison rather than surfaced at the moment a lower-tier user hits it, so a Silver or Bronze user only learns the size of the gap by reading the plan table.

**Key findings:**

- The base reward is a stated percentage of a qualifying purchase, up to 1.68% at one merchant.
- Gold plan adds a flat 0.75% on top of a second merchant's own rate.
- The added amount is reported as its own line, separate from ordinary earned rewards.
- The match is presented as a plan benefit rather than as a standalone feature.
- Whether the match rate differs on Silver or Bronze is not stated anywhere in the product.

**Screenshots needed:** an earn offer showing the base percentage, and the Gold-plan match line in the earn activity view.

### Future Projection

**Implementation summary:** A 40-year potential figure occupies the home screen's balance position and is restated the moment a recurring contribution changes.

**What was observed:** Acorns computes what the user's present holding becomes at a 40-year horizon under a stated 8% average return, splitting the result into what was contributed and what the return added, with the return shown as the larger share. The figure sits on the home screen in the position a balance would normally hold, reached by dragging a control from the present amount to the projected one. Setting a recurring contribution amount is answered with a statement of how much that change would raise the same projected figure.

**How it is presented:** The projected line is the second thing a guided tour points at on first arrival, described as the user's own potential. A line beneath the expanded figure states that the graph is for illustrative purposes only and that investing involves risk. The collapsed and expanded views state different totals for the same account.

**What is worth noting:** Acorns leads its home screen with a number the account has never held rather than with the balance it actually has, and restates that number every time a commitment changes rather than only once. Nothing in the product marks the 40-year figure as reached, since the horizon sits far outside anything the app itself tracks; it exists purely as a running answer to what if.

**Key findings:**

- The projection horizon is 40 years, assuming an average 8% return.
- The figure is split into contribution and return, with the return shown as the larger portion.
- The projection occupies the position a balance would normally hold on the home screen.
- Setting a recurring contribution restates the projected total under the same horizon.
- A disclaimer states the graph is illustrative and does not represent an expected result.

**Screenshots needed:** the collapsed home screen potential line, and the expanded projection view with its contribution/return split.

### Referral

**Implementation summary:** The referral reward rises with how many friends invest, held as a permanent figure in the home screen's top bar rather than on a dedicated screen.

**What was observed:** Acorns states an offer amount that changes with the number of friends referred, tied to a defined completion event: each introduced friend has to make a first deposit of at least $5 within a stated window after the offer ends. The reward is money invested directly into the referring user's own Invest account rather than a change to any feature of their own, and each referred friend separately receives a $5 investment as well.

**How it is presented:** The current offer amount sits permanently in the top bar of the home screen, one of only three controls shown there, rather than only appearing on a dedicated referral screen. Opening it reveals the full rule set: the deadline, the settlement window, the payment window, and the requirement that both accounts stay open and in good standing when the reward is invested. A separate summary reports referrals alongside the user's own deposits and earned rewards.

**What is worth noting:** Acorns holds the referral reward in the same permanent top-bar position most apps reserve for a balance or a notification count, which keeps the offer visible on every visit rather than only when the user goes looking for it. The reward rising with a count of friends rather than paying the same amount each time means the number in the top bar keeps changing without the user having done anything new.

**Key findings:**

- The reward rises with the number of qualifying friends rather than paying a flat rate per referral.
- The qualifying event is the introduced friend's own first deposit of at least $5.
- The reward is invested directly into the referring user's account; the friend separately gets $5.
- The offer sits permanently in the home screen's top bar.
- Both accounts must stay open and in good standing when the reward is invested.

**Screenshots needed:** the top bar showing the offer figure, and the referral offer's full rule screen.

---

## Onboarding and first run

Acorns runs twenty-six consecutive screens with no way back: choosing a plan, connecting a bank account, verifying identity, and setting up the first roundups and contributions before the dashboard is reached.

### O1. Two entry routes

Acorns opens on a screen stating its safety and investing pitch, with Get started and Log in as the only two actions.

- Nothing about the product is shown before one is chosen.
- No permission or consent request appears at this point.

### O2. Email-only account creation

Acorns creates an account from an email address alone; a Google or Apple login is not offered at creation.

- A promo code control sits on the same screen before any account exists.

### O3. Password rules stated upfront

Password rules, a minimum of 8 characters with an uppercase letter, a lowercase letter, a number, and a special character, are shown on the entry screen itself rather than surfaced only after a failed attempt.

### O4. Bundled terms acceptance

Accepting terms bundles an electronic-signature agreement with two required declarations, US residency and age 18 or older, and agreement to the program agreement, privacy policy, and auto debit authorization, all under one acceptance step before any account, plan, or funding amount has been chosen.

- Acorns doesn't say whether the two declarations can be accepted or declined separately.

### O5. Phone verification

Acorns verifies a phone number with a six-digit code, stating the reason as account protection.

- A second phone-number step appears later, separately, inside the bank connection.

### O6. Legal identity collection

Acorns states it's required by law to collect legal name and date of birth to open the investment account, with a security statement about bank-level encryption placed on the same screen.

### O7. Residential address

Acorns collects a residential address under the same required-to-open-the-account framing used for identity.

### O8. Social Security number with authorization

Acorns states it's legally required to collect a Social Security number, encrypts it, and states the number won't affect a credit score. A separate pop-up asks the user to authorize a named verification provider to check the number against Social Security Administration records for 90 days, with agree and do-not-agree controls.

- Acorns doesn't say what happens if the user chooses not to agree.

### O9. Squirrel explains each request

A persistent squirrel character sits on the data-collection screens, and tapping it opens a screen-specific explanation: on the name and birth date screen, that the information personalizes the account and times investment recommendations; on the Social Security screen, that collection is legally required and helps prevent fraud.

- The character carries no state, count, or holding of its own.

### O10. Bank connection precedes everything

Acorns has the user connect a bank account before investing, framing it as the standing source every future transfer will draw from rather than as funding for one transaction.

- The connection is placed before the subscription choice and before any account type is chosen.

### O11. Connecting through a third party

Acorns connects the bank account through Plaid, asking for a phone number with a skip option on the same screen, then handing the user to the bank's own login rather than collecting bank credentials directly.

### O12. Manual connection alternative

Where automatic connection doesn't complete, Acorns offers a manual route verified by two small deposits, collecting a routing number and account number.

- The same screen also offers to connect automatically through Plaid for roundups.

### O13. Paywall before any account exists

Acorns raises a subscription paywall immediately after the bank connection and before any account type is chosen, offering three priced plans with no free tier.

- The first month is offered free on each plan.

### O14. Three plans, priced by day

Acorns states its three plans, Gold, Silver, and Bronze, as a price per day first and a price per month second: 40 cents or $12, 20 cents or $6, and 10 cents or $3.

- Silver adds diversified investments and a 1% first-year IRA match.
- Gold adds Money Manager, custom portfolios, a 3% first-year IRA match, and a kids account and card.

### O15. Accounts framed as included

Acorns frames choosing between an everyday investing account and a retirement account as an order of setup rather than a choice between them, stating that both are included in the plan.

- A small "not sure" control sits where a skip control sits elsewhere.

### O16. Regulatory affiliation question

Acorns asks whether the user is affiliated with a broker-dealer, subject to IRS backup withholding, or a 10% shareholder or director of a public company.

- Choosing the broker-dealer option raises a confirmation stating that most investors answer no.

### O17. Employment and goals before the portfolio

Acorns asks employment status and an investment goal that pairs a risk posture with a time horizon in one statement, before generating a portfolio recommendation.

### O18. Portfolio presented as a result

Acorns presents a recommended portfolio as computed from the user's own answers, showing 100% stocks split across four named funds, with controls explaining what a portfolio is, what the stock market is, and what an aggressive risk rating means.

### O19. Roundups set up with an example

Acorns introduces roundups during onboarding with a worked example, a $2.60 purchase investing 40 cents, then asks whether roundups should run automatically or require the user to choose each purchase manually, and which linked accounts to use.

### O20. Weekly amount, one pre-suggested

Acorns offers a weekly recurring investment of $5, $10, $25, $50, or $100, with $25 pre-suggested as the middle option.

### O21. One-time investment requested next

Acorns asks for a one-time investment immediately after the recurring amount, on a separate screen, stating that the first investment should be visible in 3 to 5 business days.

### O22. Retirement account offered next

Acorns offers the retirement account as the next step in the same chain, asking employment status, marital status, and annual income, then recommending a Roth IRA with a stock and bond split.

- A slider on the same screen is stated to be for exploring only and doesn't change the actual allocation.

### O23. Attribution question, skippable

Acorns asks how the user heard about the app, offering search, social platforms, referrals, and campus or influencer sources, with a skip control available.

### O24. Notification permission at the dashboard

Acorns asks for push notification permission on arrival at the dashboard, stating the reason as account updates, after every setup step rather than at first launch.

### O25. Celebration screen summarizes setup

Acorns addresses the user by name on a celebration screen stating that the first month is free, itemizing an amount that will be live by a stated date, that the portfolio is being managed, and which plan was purchased.

- The itemized amounts on this screen don't match the amounts chosen on the earlier funding screens.

### O26. PIN, then a guided tour

Acorns takes a four-digit PIN, then runs a guided tour of the home screen pointing at its elements in sequence, including the potential slider described as changing to show the user's potential over time.

- A "take tour again" control remains available if the tour is skipped.

---

## Core loop and automation

Acorns' core activity is investing money automatically once a bank account is connected: roundups, recurring contributions, and Money Manager all move money into the right account without further input, with portfolio configuration, tax filing, and a standing library of guidance sitting beside them.

### O27. Projection leads the home screen

Acorns' home screen carries an assistant control next to its logo, an amount, and a profile control, with a line beneath reading that the investment is on its way, followed by an interactive potential figure at the far right.

- The projection occupies the position a balance would normally hold, with the current amount stated above it.
- The line responds to touch rather than sitting as a static illustration.

### O28. Home screen account rows

Scrolling the home screen lists Invest with the amount invested so far, Later with its IRA match label, Checking with an Activate control, Emergency savings with its APY and an Explore control, Early Invest with its match and an Activate control, and Gold plan benefits with an Explore control.

- The Invest row carries three tags: a recurring weekly amount, roundups shown as off, and a one-time investment.
- Accounts not yet open are shown with the same prominence as open ones, distinguished only by their Activate or Explore control.
- The screen continues below with panels for Money Manager, roundups, earnings, learning, referral, card linking, kids, and the risk disclosures stating that investing involves risk including loss of principal.

### O29. Roundups round up and invest

Roundups round card purchases on linked accounts up to the next dollar and invest the difference once it reaches $5, transferring from the primary bank account once the threshold is met rather than at the moment of each purchase.

- Acorns doesn't say where the accumulating change is held before the threshold is reached, or whether it stays available for ordinary spending while it accumulates.
- With no card linked, the roundups screen shows zero invested and states that no linked card has been used.

### O30. Automatic or manual roundups

Roundups run automatically or require the user to round up spare change manually from the roundups screen for each purchase, and the setting can be reversed at any time.

### O31. Whole-dollar roundup setting

A whole-dollar roundups setting fixes what a purchase that's already a round number contributes, offering 25, 50, 75 cents or $1: a $10 lunch invests $1 at the top setting and 50 cents at the middle one.

### O32. Roundup multiplier

A multiplier below the whole-dollar setting offers off, 2x, 3x, or 10x on top of every roundup: a $4.80 coffee invests 20 cents with the multiplier off and $2 at the 10x setting.

- The multiplier applies to money that is the user's own rather than to a reward Acorns pays.
- Which multiplier values are available on which plan is not stated.

### O33. Linked cards enable roundups

Roundups are inert until at least one card is linked, and the prompt to link one repeats on the home screen, the invest screen, and the manual bank-connection screen.

### O34. Recurring investments by day

Acorns runs recurring investments on chosen days of the week, with more than one schedule able to run at once, and the schedule can be changed, rescheduled, or turned off.

- The Later account carries its own separate recurring contribution with its own amount, timing, and source account.
- Setting a recurring contribution on Later raises a note to check the account balance since standard overdraft fees may apply.

### O35. Moving money

Acorns collects moving money behind one screen offering a recurring deposit or a one-time transfer, with adding a paycheck, setting up direct deposit, and managing roundups listed below as further routes.

### O36. Money Hub's three tabs

The Money Hub opens on a transactions surface split into History, Pending, and Scheduled tabs; Pending shows items like a Later contribution or an Invest withdrawal with their date and amount, and Scheduled shows everything still to come with controls to add a paycheck, set a recurring investment, or manage roundups.

### O37. Thirty-day summary

History leads with a 30-day summary stating money into Acorns, money out, dividends, earned rewards, and referrals, filterable by month to date, last 30 days, last 90 days, year to date, or all time.

- Earned rewards and referrals are counted in the same summary as the user's own deposits.

### O38. Transaction detail

Opening a transaction shows its name, estimated date, and amount, along with a status and a type.

### O39. Money Manager splits deposits

Money Manager states that an incoming direct or recurring deposit is split automatically across checking, saving, investing, and kids accounts, framed around reducing what the user has to manage themselves.

- Setup asks employment status and annual income, repeating questions already asked during onboarding.
- A review screen marks which destination accounts are already open, and states that the checking account has to be opened first before Money Manager can run.

### O40. Checking account and metal card

Acorns' checking account, included with the Gold plan, issues a laser-engraved tungsten metal debit card along with bonus investments from card use, the first five real-time roundups matched, paycheck splitting, and direct deposit up to two days early; later screens add FDIC insurance up to $250,000, fraud protection, a digital card lock, no minimum balance or overdraft fees, and access to 55,000 fee-free ATMs.

- Setup collects a shipping address, an occupation, and a digital signature, stating that the signature will be laser engraved onto the back of the card.

### O41. Verification hold on checking

Opening the checking account can end in a verification hold requiring identity and address documents before setup finishes, with identity checked against a government ID and a selfie analyzed by a named service provider.

- A separate attempt can instead return a message that opening the account is taking longer than expected.

### O42. Later account contributions

The Later account takes one-time and recurring contributions, each confirmed with the amount, tax year, frequency, and source before it processes, and its own page shows total value, holdings, a recurring-contribution control, and account details including account number, portfolio risk, IRA match, yearly contribution max, and income limits.

### O43. Changing portfolio risk

Portfolio risk can be moved across five steps; moving off the recommended step is met with a prompt to update the investor profile before the change goes through, followed by a note that changing the portfolio involves selling current holdings and buying new ones, which can have tax implications.

- Acorns doesn't state that a changed risk level is wrong; it offers to re-run the recommendation instead.

### O44. Switching portfolio type

Portfolio type can be switched between a core portfolio of stocks and bonds and an ESG portfolio rated on environmental, social, or governance criteria, with an explanation stating that ESG portfolios are built to perform similarly to core ones and that past performance is not a guarantee of future returns.

### O45. Adding a Bitcoin ETF

A Bitcoin ETF can be added at 1 to 5% of the portfolio, pitched as diversification and exposure without needing a separate digital wallet, with a confirmation stating the risk and volatility before it's added.

- The change takes effect on the next investment or rebalance.

### O46. Customizing with individual stocks

Individual stocks and ETFs can be added up to 50% of the portfolio, drawn from the largest US publicly traded companies at $75 billion or more in market capitalization plus a hand-picked ETF list.

- A note states that customizing more than 10% may expose the portfolio to more risk.

### O47. Live diversification score

Moving the customization slider updates a diversification score in real time, rated weak, fair, or strong, with an explanation that concentrating in similar holdings or higher-volatility ones lowers the score.

### O48. Ask Acorns assistant

An assistant control on the home, investing, learning, and earning screens opens a chat offering preset questions or free text, with each answer able to be copied, liked, or disliked.

### O49. Withdrawal warning favors pausing

Withdrawing from the Invest account is met with a warning, shown in a color used nowhere else in the app, stating that withdrawing may trigger capital gains tax and slows the account's growth potential, with pausing investments offered as the highlighted alternative to withdrawing.

- Pausing stops future investments and contributions but not the subscription charge, and any transfer already underway keeps processing.

### O50. Retirement withdrawal warning

Withdrawing from the Later account is met with a warning that the user may owe penalties or taxes set by the IRS or their state, that exemptions are the IRS's decision, and that the account is SIPC protected up to $500,000, which does not cover ordinary market risk.

- A reason must then be chosen from a fixed list.

### O51. In-app tax filing

The profile's tax forms control opens a partnered tax-filing service, included with the Gold subscription, that pre-fills the return where it can.

- A separate tax center lists the IRS form types and the dates each is released by.

### O52. Learning library

The Learning tab opens a library filtered by content for the user, using Acorns, or investing, with pieces on investing strategies, expected returns, staying calm through market swings, retirement savings, and IRA taxes, each carrying a byline, a publication date, a view count, an estimated length, and a helpfulness control.

- The same library appears as a carousel at the foot of the home, invest, Later, and tax screens, filtered to that screen's subject.

---

## Goals and progression

Acorns' progress surfaces are a projected future balance, a retirement contribution measured against an outside limit, and a short course ending in a scored quiz.

### O53. Potential projection breakdown

Acorns' home screen line opens into a projection stating the account's potential, splitting the figure into what was invested and what the return added, and stating the present holding alongside what it would become in 40 years; two labels beneath state the assumptions, 40 years and an 8% average return, and a line states the graph is for illustrative purposes only.

- The collapsed line on the dashboard states a different potential figure from the one shown in the expanded view.
- The projection separates contribution from return, showing the return as the larger of the two.

### O54. Contribution answered with a projection

Turning on a recurring contribution raises a statement of how much that amount could raise the projected potential by the same 40-year horizon, attached to the moment of setting the amount rather than shown as a standing figure.

### O55. Contribution reported against IRS limit

Acorns' retirement account states the percentage of the annual contribution limit reached so far, alongside what's been contributed this year and what remains; a widget separately suggests a weekly amount that would help reach the limit.

- The threshold is set outside the product, and no response by Acorns to reaching it is stated.

### O56. Unopened accounts stay visible

Acorns keeps unopened accounts, checking, emergency savings, and early invest, visible on the home screen with the same prominence as open ones, each stating what it carries rather than only that it's unopened.

- No proportion or completion figure is reported over the set.

### O57. Course structure

Acorns' "getting started" course states it will cover investing tools and account fundamentals, structured as two short video lessons and a four-question quiz, with a named instructor line and a retake control available after finishing.

- Acorns doesn't say whether finishing the course is recorded anywhere.

### O58. Quiz scored against a community average

Acorns' quiz presents four fill-in-the-blank questions about its own accounts and terms, states the correct answer when one is missed, and reports a result score of 75%, three of four correct, against a stated community average of 80%.

- No pass mark, deadline, or attempt limit is stated for the quiz.

---

## Access and eligibility

Acorns restricts the product to US residents, holds accounts in a pending state until identity is verified, and bounds retirement contributions and custom portfolio choices by rules set outside the product.

### O59. US residency and age requirement

Acorns requires a self-certified declaration of US residency and age 18 or older before an account can be created, ahead of the separate identity check that follows later in the flow.

### O60. Identity verification hold

Acorns can hold an account pending until identity and address are verified: identity by a government-issued ID and a selfie analyzed by a named service provider, address by uploaded documents.

### O61. Earned income required for retirement

Acorns states that IRA contributions require what the IRS calls earned income, excluding Social Security, pensions, and disability benefits, and that the account carries a yearly contribution max and income limits set by the IRS.

### O62. Paycheck split requires checking

Acorns requires an open checking account before paycheck splitting or Money Manager can run, stating the condition at the moment it's attempted rather than on the control itself.

### O63. Plan tier decides account access

Acorns' plan tier decides which accounts and benefits are available: Silver carries a 1% IRA match, Gold adds a 3% match, Money Manager, custom portfolios, and the kids account and card.

- Downgrading states which of these are lost.

### O64. Regulatory affiliation eligibility

Acorns collects broker-dealer affiliation, IRS backup withholding status, and 10% shareholder or director status before the Invest account opens.

- Acorns doesn't say what changes for a user who selects one of the three.

### O65. Custom portfolio universe bounded

Acorns bounds the custom portfolio universe to the largest US public companies at $75 billion or more in market capitalization plus a hand-picked ETF list, capping the allocation at 50% of the portfolio.

- A note recommends no more than 10%.

### O66. Unavailable feature offered as a waitlist

Acorns marks a "receive investments from others" feature as coming soon, offering a waitlist that asks how the user would use it before confirming they've joined.

---

## Economy and resources

(No observations in this app.)

---

## Social

Acorns lets a user name a beneficiary and a trusted contact on the retirement account, and opens Early Invest accounts for children under the same subscription.

### O67. Naming a beneficiary

Acorns lets a user name a beneficiary on the retirement account, spouse or non-spouse, collecting the named person's legal name, birthday, Social Security number, and address.

- The named person has no account, view, or action inside the product.

### O68. Trusted contact on the account

Acorns lets a user add a trusted contact with a name, email, and phone number, choosing which accounts to add them to, and remove them later.

- Acorns doesn't say what a trusted contact can see or do.

### O69. Kids accounts under one subscription

Acorns opens Early Invest accounts for children under the same subscription, collecting the child's legal name, date of birth, and Social Security number for identity verification.

- Once one exists, a separate Kid tab appears alongside the parent's own.
- The surface states a count of over 350,000 kids with user reviews shown.

### O70. Acorns Early as a kids' money app

Acorns describes Early, formerly GoHenry, as a money app and debit card for children with parental oversight, real-time spending notifications, and the ability to send money to a child's card instantly.

- A stated route lets family and friends send money to kids regularly.

### O71. Planned feature for outside contributions

Acorns states a planned feature that would let other people send tips, payments, or gifts invested automatically into the user's account, distinguishing friends and family from customers as the categories of sender.

---

## Reach beyond the app

Acorns holds its referral offer permanently in the home screen's top bar, pays a percentage of purchases at outside brands as an investment, and adds a sign-in option after the account already exists.

### O72. Referral figure in the top bar

Acorns displays the current referral offer amount as a permanent figure in the top bar of the home screen, one of only three controls shown there, opening the current offer when tapped.

- The reward rises with the number of qualifying friends rather than paying a flat amount per friend.

### O73. Referral rules and timing

Acorns invests a stated amount when a user invites four or more friends who each sign up and invest, with each friend separately receiving a $5 bonus. The rules state a link-based invitation, a first deposit of $5 or more within 14 days of the offer's end date, and a reward invested within 30 days once both accounts are open and in good standing.

### O74. Brand purchases pay an invested percentage

Acorns' earn surface pays a stated percentage of purchases at named brands as an investment into the Invest account, up to 1.68% at one merchant, with exclusions for categories like alcohol, tobacco, groceries, and fuel.

- The surface states coverage of 15,000 brands.

### O75. Linking a card automates brand rewards

Acorns automatically activates a brand's purchase reward once the user links a card and buys from that brand in store or online with it.

- The same linked card also drives roundups.

### O76. Sign in with Apple added later

Acorns offers Sign in with Apple as a login convenience added after the account already exists, since the account itself can only be created with an email address.

---

## Monetization

Acorns prices three subscription tiers upfront, backs cancellation with a cheaper fallback plan rather than an exit, and pays two of its four rewards as a plan-tier benefit rather than as a standing rate.

### O77. Comparing plans feature by feature

A Compare plans control on the paywall opens a table listing all three plans against their features and benefits, grouped under money manager, investing, saving, and earning, reachable from the paywall itself rather than only from settings.

### O78. Gold benefits as a to-do list

The Gold plan benefits screen opens on complimentary tax filing with its own activation control, followed by investing, family, and legacy-focused benefits, each paired with the action that turns it on rather than only a description.

### O79. Subscription management summary

Personal settings states the plan the user is on, the charge amount, the funding account, and the charge date, listing which accounts under the plan are active and which still need to be activated.

- Controls are offered to change the plan, cancel, or add billing details.

### O80. Cancellation reason list

Cancelling the subscription first asks for a reason from a fixed list covering cost, market concern, disinterest in investing, lack of control, confusion about the product, timing, and performance, collected before any cancellation is carried out.

- Acorns doesn't say whether the chosen reason changes what happens next.

### O81. A cheaper plan instead of cancelling

Choosing to cancel is answered with an offer to switch to a $1-a-month plan instead, framed around economic hardship and keeping the Invest account open to avoid tax implications, stating that checking, Later custom investments, and the Later match are lost on the switch.

- Cancelling outright closes the accounts.

### O82. Pausing doesn't pause the subscription

Pausing investments stops future transfers but not the subscription charge, and any transfer already underway continues to process.

### O83. Metal card exclusive to Gold

The checking account leads with a laser-engraved tungsten metal debit card exclusive to the Gold plan, with the user's own signature engraved onto the back of it before any of the account's banking terms are stated.

### O84. Testimonials on the kids flow

The Early Invest surface states a count of over 350,000 kids and shows user reviews after the account is opened.

- No comparable social proof is shown on the Invest, Later, or checking flows.

### O85. Four separate matches

Acorns states four distinct matches across the product: a 3% Later IRA match on Gold against 1% on Silver, a 1% match on Early Invest contributions, the first five roundups matched once real-time roundups are active, and a 0.75% Gold-only addition on top of a brand's own earn-offer rate.

- Three of the four matches add to money the user contributes themselves; the fourth adds to a reward Acorns already pays.
- None of the four matches is shown being paid.

---

## Return triggers

Nothing in Acorns is built to cause a visit. Every dated statement it makes is set by a settlement window, a verification queue, an offer's own end date, or the IRS, and the closest thing to a standing invitation is a tour control that can be replayed.

### O86. Notification permission, one stated reason

Acorns asks for push notification permission stating account updates as the reason, with no reminder, streak, or offer purpose named.

- No notification is delivered during setup.

### O87. Notification settings location

Acorns lists notification settings among personal info, subscription, linked accounts, word definitions, and login and security.

- Acorns doesn't say what the notification settings themselves control.

### O88. Investment arrival window

Acorns states that a first investment should be visible in 3 to 5 business days, and the dashboard reads that the investment is on its way.

- A celebration screen and a contribution confirmation each name a specific expected date.

### O89. Pending states need a return visit

Acorns can leave account opening or verification in a pending state, still showing an Activate control on the home screen.

- No notification or scheduled follow-up is stated for either state.

### O90. Retirement limit named as a deadline

Acorns' retirement contribution widget names the calendar year's contribution limit as a reason to invest more, stating a weekly amount rather than the remaining total.

### O91. Tax form arrival dates

Acorns' tax center lists the IRS form types the user may receive and the dates each is released by.

### O92. Referral deadline and settlement window

Acorns' referral offer states an end date, a 14-day window for a friend's qualifying deposit after that date, a five-business-day settlement period, and a 30-day payment window once eligibility is established.

- Both accounts are required to stay open and in good standing when the reward lands.

### O93. Tour can be replayed

Acorns keeps a "take tour again" control on the home screen after the guided tour is skipped or finished.
