# Dave

**Teaser:** A cash advance and checking app where saving, borrowing, and getting referred all wait on the same bank connection to clear.

Dave is a banking app built around two things: a Dave Checking account and a small cash advance called Extra Cash, worth up to $500. Almost everything in the app is organized around one decision made early on, connecting the bank account a user is already paid into, since that connection is what Dave uses to decide advance eligibility, and it's also one of the things the $1 monthly membership pays for. Saving happens through round-ups on Dave's own debit card, which flow into a Goals account created automatically the first time round-ups are turned on. Getting paid faster by moving direct deposit to Dave does double duty: it's marketed as arriving up to 2 days early, and it's also how an advance eventually gets repaid.

---

## System view

Dave is a medium complexity system.

It's built around a single early decision: connecting the bank account the user is already paid into. Dave asks for this account by name during onboarding, and treats it as the one input nearly everything downstream depends on.

Advance eligibility runs on that connection. Dave decides whether a user can take an Extra Cash advance based on the connected account, and says an advance settles against the user's next paycheck through the linked debit card. Setting up direct deposit into Dave also decides where that repayment lands.

Savings runs on a separate chain from the same checking account. Dave rounds up purchases made on its own debit card into a Goals account it creates automatically the first time round-ups are turned on, arriving already set up with a starting goal and a target. Ending a goal pauses its round-ups and cancels any recurring transfers feeding it, and Dave immediately offers to restart the automation with a new goal.

Growth sits downstream of the other two. The referral reward is a bigger next advance rather than cash, and Dave pays it out only once the referrer has taken an advance and both the referrer and their friend have repaid one.

These three chains meet in the Grow tab. Survey earnings land in the same checking account that feeds round-ups and settles advances, and the tab features Dave's own survey option inside the same job list it uses to point users toward other employers.

---

## Onboarding and first run

This section covers everything between opening Dave for the first time and reaching the empty home screen. It runs through the pitch before signup, identity verification, and connecting a bank account and debit card.

### O1. Pre-account pitch

Dave opens, before anyone signs up, with its brand mark and a headline offering up to $500 when needed, promising no interest and no credit check. It shows the card and 2 buttons for logging in or signing up.

- The headline amount is $500.
- The 2 qualifiers are no interest and no credit check.
- An asterisk on the headline links out to the terms.
- There's no guest mode or demo path on this screen.

### O2. Terms behind an asterisk

Tapping through to the terms opens a pop-up where Dave explains what's underneath the headline: Extra Cash is a demand deposit account with overdraft utility, taking an advance puts the balance negative, the advance is subject to eligibility, and delivery fees may apply. Dave closes the pop-up with a simple acknowledgement rather than a formal acceptance.

- The negative-balance consequence of an advance is disclosed here, not in the headline.
- Eligibility is named as a condition here, not in the headline.
- Delivery fees are named as possible here, not in the headline.

### O3. Bundled signup consent

Dave opens signup asking only for an email address and a password, with no alternative registration method offered. Agreement to the privacy policy, terms of use, and electronic communication consent are all carried by a single continue button.

- Email and password are the only credentials collected at this step.
- 3 separate documents are agreed to through a single button.
- There's no separate checkbox for any of them.

### O4. Legal name step

Dave asks for a user's legal name and collects first and last name as separate fields.

- Dave uses the word "legal" here, before any identity document is mentioned.
- First and last name are 2 separate fields.

### O5. Phone number step

Dave asks for a mobile phone number and explains it's used to protect the account with two-factor verification.

- The stated purpose of collecting the number is account protection.

### O6. Marketing consent at verification

Dave sends a verification code to that number, and on the same screen asks the user to agree to receive special offers and promotions by text at that same number.

- The marketing consent sits on the same screen as the security step it's otherwise unrelated to.
- It applies to the same number just used for verification.

### O7. Face ID with a skip

Dave asks whether the user wants to sign in with Face ID, with an option to accept or skip for now.

- A skip is offered on the same screen as the option to accept.
- The skip is worded as putting it off, not turning it down.

### O8. App passcode required

Dave has the user create a 4-digit app passcode and re-enter it on a second screen, regardless of the Face ID choice.

- The passcode is 4 digits.
- Confirming it is a separate screen, not a second field on the same one.

### O9. Bank connection request

Dave asks the user to connect the bank account they're paid into, framing the request as how it determines their best approval amount, and mentions that advances can be received instantly for a small fee.

- The account requested is specifically the one the user is paid into.
- The stated benefit of connecting is a better approval amount.
- Instant delivery is introduced here as a paid option, right at the moment of connecting.

### O10. Fee authorized with connection

Dave bundles agreement to a recurring $1 monthly membership charge into the same screen and continue action used to connect the bank account.

- The recurring charge is $1 a month.
- The membership authorization shares both the screen and the continue button with the bank connection request.

### O11. 3 exits from connection

Dave offers 3 ways out of the bank connection step: agree and continue, a path for not having a bank account, or a dismissal control in the corner. The step isn't actually required to move forward.

- 2 of the 3 exits leave the bank account unconnected.

### O12. Fee restated with benefits

Dave shows a second screen restating that the $1 monthly membership keeps the bank account connected, sends low balance alerts, and provides budgeting tools, then lays out the remaining setup as 2 steps: connecting the account and linking its debit card.

- 3 benefits are attached to the fee: the connection itself, low balance alerts, and budgeting tools.
- The fee is restated here, on the second screen in a row to mention it.

### O13. Connecting through Plaid

Dave hands the bank connection to Plaid, introduced with the claim that 8,000 apps trust it and that best-in-class encryption protects the data. Within that flow, the user enters a phone number or continues as a guest, verifies by code, chooses an account to share, and logs in to their bank.

- The trust figure quoted is 8,000 apps.
- A guest path lets the user skip giving their phone number to Plaid.
- Before logging in, Dave lists what the bank will be asked to share: the account, account numbers, and account holder information.

### O14. Claims during the wait

While the account links, Dave fills the wait with marketing claims instead of status: that paying members have lowered their overdraft fees by nearly 70%, and that it helps over 11 million members stay on top of their finances.

- The overdraft claim is attributed specifically to paying members.
- The membership figure quoted is over 11 million.
- These claims appear at a moment when there's nothing else for the user to do.

### O15. Linking the debit card

Dave asks the user to add and link the debit card tied to the connected bank account, stating this card may be used to settle any advances taken.

- The card has to be tied to the already-connected bank account.
- Its stated purpose is settling advances.

### O16. An empty first dashboard

Dave greets the user after connecting with a welcoming message and a single button to open a checking account, alongside 4 tabs in the bottom navigation: Home, Account, Extra Cash, and Grow.

- The main call to action on first entry is opening a second account, not using the one just connected.
- The navigation has 4 tabs.

---

## Core loop and automation

This section covers everything that runs through Dave once the checking account exists: opening it, verifying identity, and then moving money in, out, and between accounts through direct deposit, round-ups, checks, cash, and bill pay.

### O17. Checking account pitch

Dave pitches its checking account first as a set of removals, no minimum, no overdraft fees, no monthly fees, and no balance requirements, before asking for any identity information.

- The pitch leads with what's removed rather than what's added.
- 3 separate fee claims appear here: no minimum, no overdraft fees, no monthly fees or balance requirements.
- No identity information has been requested up to this point.

### O18. Saving, funding, and access pitch

Dave's second pitch screen describes rounding up purchases toward savings goals, transferring money between external accounts at any time, and depositing cash at over 90,000 locations, fee-free at 2 named retailers. It lists further benefits below: instant advances, fee-free withdrawal at over 37,000 ATMs, sending cash and checks, digital and physical debit cards, 24/7 support, and FDIC insurance through its partner bank.

- Round-ups are introduced here, before the checking account even exists.
- The deposit network is described as over 90,000 locations, with fee-free deposits named at Walgreens and CVS.
- The ATM network is described as over 37,000 machines.
- The partner bank is named as Evolve Bank and Trust, member FDIC.

### O19. Date of birth first

Dave's first identity screen asks for the user's date of birth.

### O20. Tax ID with reassurance

Dave asks for a Social Security number, states that federal law requires it to verify identity, and collects it twice. Underneath the fields, it reassures users the entry is protected by bank-level security.

- The requirement is attributed to federal law, not to Dave's own policy.
- The number is entered twice.
- A security reassurance sits directly beneath the most sensitive field in the flow.

### O21. Review before submitting

Dave shows a review screen restating legal name, date of birth, Social Security number, and residential address, prefaced by a warning that this information has to match the user's identity documents. Users confirm from this screen.

- Residential address appears on the review screen, though there's no visible step where the user enters it.
- The matching warning is presented as important.

### O22. Identity confirmation wait

Dave runs identity confirmation as a timed wait, telling the user it may take a couple of minutes.

- The wait is described in minutes, not seconds.
- There's no alternative action offered while it runs.

### O23. Account opening reassurance

Dave states that opening a checking account won't affect the user's credit, right after the tax ID and identity check. It presents Dave Checking as an account for spending instantly with no hidden fees, with a single checkbox covering the checking deposit agreement, its disclosures, and the partner bank's privacy policy.

- The credit reassurance comes right after the tax ID and identity check.
- A single checkbox covers agreement to 3 separate documents.

### O24. Value propositions during opening

While the account opens, Dave cycles value propositions about the card, spending instantly and paying bills with it, rather than showing account terms.

- These propositions appear during a wait users can't skip.
- They're about the card, not about the account's terms.

### O25. Funding prompted immediately

As soon as the checking account exists, Dave offers setting up direct deposit with the promise of getting paid up to 2 days early, transferring from another bank taking 4 to 5 business days, or depositing cash fee-free at 2 named retailers using a barcode. Users can defer.

- 3 funding routes are presented together with their relative speeds.
- Direct deposit is the only route pitched with a speed advantage.
- The option to defer is on the same screen.

### O26. Balance widget with actions

Dave's checking screen shows a widget with the available balance, a control to view the debit card, and buttons to add or withdraw money, plus wallet provisioning below.

- Balance, card access, and money movement all live in the same widget.
- Wallet provisioning sits at the top level rather than tucked inside card settings.

### O27. Digital card bridges the wait

While the physical debit card is in transit, Dave tells the user its expected arrival date and points them to a digital card to use in the meantime.

- The arrival is given as a specific date.
- The waiting period is bridged with something usable, not just an explanation.

### O28. Freeze off by default

Dave's digital card screen offers a toggle to reveal card details and a toggle to freeze the card, off by default, plus controls to set the PIN and replace the digital card.

- Freeze is a user-operated control.
- It's off by default.
- Replacing the digital card doesn't require contacting support.

### O29. Empty activity instructs

Dave's empty activity screen tells the user how to fill it, by using the checking account, rather than just stating there's nothing there yet.

- The empty state names the action that would fill it, rather than just describing what's missing.

### O30. Banking utilities hub

Dave groups direct deposit, recurring transfer, scanning or sending a check, depositing cash, withdrawing cash, and paying bills into a single hub, with prompts for direct deposit and budgeting below it.

- 6 utilities are grouped under a single hub.
- Direct deposit appears both inside the hub and again as its own prompt below it.

### O31. Setting up round-ups

Dave explains that every purchase made with the Dave debit card rounds up to the nearest dollar and rolls automatically into a Goals account. It tells users, before they turn the feature on, that they can add extra money whenever they like and withdraw or pause the whole thing at any time.

- Round-ups trigger on any purchase made with the Dave debit card.
- Purchases round up to the nearest dollar.
- The rounded-up amount goes into a separate Goals account, not the checking balance.
- Withdrawing savings and pausing round-ups are both mentioned before the user turns the feature on.

### O32. Round-ups require Goals

Dave doesn't let a user turn on round-ups without a Goals account, and creates one automatically to hold the money before round-ups can start.

- The Goals account exists to make round-ups possible, not the other way around.
- Dave creates the goal itself at this step, not the user.

### O33. Adding money by swipe

Dave's add-money flow prices the source, a bank account is free, Apple Pay costs 1%, and confirms the transfer with a swipe rather than a tap, arriving in 4 to 5 business days.

- The fee difference between sources is shown right at the point of choosing.
- Confirming is a swipe, not a tap.
- The transfer window quoted is 4 to 5 business days.
- The confirmation screen prompts users to set up direct deposit for the 2-days-early benefit.

### O34. Recurring transfer defaults on

Dave's recurring transfer flow has its own toggle already switched on rather than something users turn on themselves, then asks for a frequency and a day.

- The toggle defaults to on when entered from the recurring-transfer entry point.
- Weekly is one of the frequency options offered; others exist but aren't detailed here.
- Turning the same toggle back off cancels the recurring transfer.

### O35. Direct deposit routes

Dave offers 3 routes to direct deposit: finding the employer, tagged as fastest and signing the user into their company's pay portal; copying and pasting account details manually; or sending HR a form Dave generates from a few questions. Dave notes that early access depends on the timing and availability of payroll files from the employer.

- 3 routes lead to the same outcome.
- Only one route carries a speed tag.
- The employer-search route runs through a third party, Pinwheel, introduced with its own encryption, credential-privacy, and speed claims.
- The copy-and-paste route surfaces the account details for the user to enter elsewhere.
- The early-access claim depends on something Dave doesn't control: the employer's payroll timing.

### O36. Paycheck split question

Dave's form route collects the employer name, then asks how much of each paycheck the user would like deposited, noting this can always be changed later, with options for the full paycheck or part of it.

- A partial option is offered right alongside the full one, not just as a later adjustment.
- Reversibility is stated in the same sentence as the question itself.

### O37. Pre-signed form, 2 routes

Dave fills out the direct deposit form and offers to pre-sign it, then lets the user send it to their employer or to themselves.

- Pre-signing is offered as a checkbox rather than a separate signing step.
- Both routes end the same way: an email confirmation to the user.

### O38. Accounts tab separation

Dave's Accounts tab lists its own accounts, Dave Checking, Goals, and Extra Cash, with the connected external checking account listed separately below them.

- By this point, 3 Dave accounts exist.
- The external account gets its own group.
- Opening it shows its available balance, the linked debit card, a prompt to start a budget, and recent transactions.

### O39. Check handling routes

Dave splits check handling into scanning, free at 10 days or paid for instant processing, and sending, free and arriving within 5 business days. Scanning hands off to a partner, Ingo Money, for the actual cashing.

- Scanning has a free slow path and a paid instant path.
- Sending has a single speed and no fee.
- Recipients can be added directly within the send flow.

### O40. Cash deposit pricing

Dave prices cash deposits by location: free at 2 named retailers using a barcode scan, with a service fee possible elsewhere. Deposits typically post within 10 minutes, up to 30 at some locations.

- 2 retailers are named as fee-free.
- Posting time is typically 10 minutes, up to 30 at some locations.

### O41. Cash withdrawal map

Dave presents cash withdrawal as a map of nearby ATMs, with directions and instructions, including entering the 4-digit debit card PIN, on the same screen.

- Location data and step-by-step instructions live on the same screen.
- The PIN referred to is the 4-digit debit card PIN.

### O42. Bill payment routes

Dave offers 3 ways to pay bills: copying debit card details for online payment, copying checking account and routing numbers, or sending a check at no fee within 5 business days.

- 3 payment routes lead to the same outcome.
- Each identifier can be copied on its own.

---

## Goals and progression

This section covers what happens once round-ups are turned on: how the first goal gets created, personalized, extended with a second goal, and ended.

### O43. Dave suggests the first goal

Once the Goals account is open, Dave hands the user a goal that's already running, round-ups switched on and a savings target of $75 set by default. It invites the user to personalize the title, amount, and end date afterward, and offers a recurring deposit as a way to reach it faster.

- The goal exists before the user has defined anything about it.
- The default target is $75.
- Round-up is already switched on for this goal.
- Title, amount, and end date are editable.

### O44. Personalizing an empty goal

Dave lets users edit the title, amount, and banner image of a goal from its detail screen, before any money has been added to it.

- The banner image is editable right from the goal detail screen.
- Personalization is offered while the goal balance still sits at zero.

### O45. Goals balance and progress

Dave shows the Goals balance alongside a 4% APY figure and a progress bar tracking how close the user is to their target.

- The rate shown is 4% APY.
- A progress bar tracks position against the goal amount.
- Dave doesn't say what happens when a goal actually reaches its target.

### O46. Shared ceiling across goals

Dave caps a second goal's amount based on what's already committed elsewhere: an overall $25,000 limit across goals, reduced by whatever's already set aside.

- The overall limit across goals is $25,000.
- The maximum offered for a new goal is reduced by whatever's already committed to existing goals.

### O47. Goal image from a photo library

Dave lets users choose a goal's banner image from an external photo library, Unsplash, rather than a built-in set.

- The image comes from a third-party library, not a built-in set.
- It's attached to the individual goal, not to the account or the profile.
- Choosing an image doesn't change any goal rule, limit, or rate.

### O48. Small first-deposit presets

Dave's first deposit prompt encourages starting small, offering presets of $5, $25, and $50, a custom amount, and the option to defer.

- The lowest preset is $5.
- The copy addresses hesitation rather than pitching a benefit.
- Choosing to defer still leaves the goal created.

### O49. Ending a goal is permanent

Dave's end-goal control warns that ending a goal deactivates it permanently, pauses round-ups, and cancels any recurring transfers into it, and that it can't be undone. Users choose to keep it or end it.

- 3 consequences are stated together: permanent deactivation, round-ups paused, recurring transfers cancelled.
- Dave states plainly that this can't be undone.

### O50. Restart offer after ending

Dave confirms an ended goal stays visible in a past goals list, then immediately offers to restart round-ups by creating a new goal.

- The ended goal stays accessible in a past goals list.
- The restart offer appears right on the confirmation screen, not later.
- It's framed as resuming round-ups, not as creating a fresh goal.

---

## Access and eligibility

This section covers the Extra Cash advance: how Dave pitches it, explains how it works, and gates it behind eligibility.

### O51. Advance tab headline

Dave's Extra Cash tab opens with the same $500 advance headline as the pre-account screen, asking users to open 2 accounts to get started.

- The same $500 figure that opens the unauthenticated app opens this tab too.
- Getting access is conditioned on opening 2 accounts.

### O52. How the advance works

Dave explains that advances arrive in 2 to 3 days for no fee or instantly for a small fee, that taking one puts the extra cash balance negative, and that it settles against the next paycheck. The account can also just hold money.

- The negative balance is described as the mechanism, not as a warning.
- Settlement is tied to the next paycheck.
- 2 delivery speeds carry 2 different prices.
- The account can hold money as well as extend an advance.

### O53. Opening extra cash

Dave's extra cash account opens with a single checkbox and then a wait filled with more value propositions, before confirming the account is set up.

- A single checkbox covers 3 documents, the same pattern used for opening checking.
- The wait shows propositions again rather than status detail.

### O54. Not eligible yet

Dave declines the advance right after the account is created, telling users they're "not yet" eligible and to check back the next day, offering a notification instead.

- The refusal is worded as "not yet," not as a decline.
- A specific return window is named: the next day.
- A notification opt-in is offered in place of the benefit itself.
- This message shows up in more than one place in the tab.

### O55. Funding doesn't help eligibility

Dave tells users that adding money to the extra cash account doesn't increase the advance amount and won't affect eligibility, though a deposit option stays available anyway.

- This decoupling is stated up front, right at the deposit screen.
- Deposits remain available even though Dave says they won't help.

### O56. Eligibility tied to salary account

Dave ties advance eligibility to the connected bank account and asks again, at the point of refusal, whether the user is paid into a different bank.

- The determining factor for eligibility is named as the connected bank.
- This prompt specifically targets the account the user's salary lands in.
- It's the same request made during onboarding, resurfacing at the point of refusal.

### O57. Eligibility answered as FAQ

Dave publishes 10 FAQ questions about Extra Cash covering eligibility, receiving and repaying an advance, and fees, rather than showing these rules directly in the interface.

- 10 questions are listed.
- The questions name rules the interface doesn't otherwise show, including limits on taking another advance and changes to the advance amount.

---

## Earning and utility

This section covers the Grow tab: paid surveys, a profiling questionnaire, and a job board. It's where Dave lets users add money to their checking account without borrowing or saving.

### O58. Grow tab overview

The Grow tab leads with Dave's survey feature, tagged as new and pitched as earning cash instantly, with the user's goals below it and a larger side hustle section beneath those.

- 3 features share the tab: surveys, goals, and side hustle.
- The survey feature carries a new tag.
- Dave frames earnings from both surveys and side hustle work as landing in its own checking account.

### O59. How survey earning works

Dave frames surveys as 3 steps: start with an intro survey, unlock higher paying surveys by continuing, and see earnings land in checking. It tells users up front that not qualifying for a survey ends it early with a partial reward. The surveys themselves come from a named third party, inBrain AI.

- Continuing is said to unlock higher paying surveys, though Dave doesn't say what triggers the unlock.
- Disqualification is disclosed before the first survey, not just when it happens.
- A partial reward is promised for disqualification, without an amount attached.

### O60. Closing the survey intro

Dismissing the survey introduction from the corner control takes the user straight to the survey list rather than back to the previous tab.

- The dismiss control moves forward, not back.
- Taking the intro survey and dismissing the intro both land on survey content.

### O61. The survey list

Dave's survey list shows a payout and estimated time for each survey, a running total of the month's earnings, and splits surveys into a recommended set and a quick set.

- Every survey lists a payout and a duration.
- A monthly earnings total sits above the list.
- 3 recommended surveys ran about 40, 14, and 20 minutes. 2 quick surveys paid $0.45 for about 8 minutes and $0.50 for about 10.
- Recommendation applies to only part of the list.

### O62. The profiling questionnaire

Before any paid survey, Dave runs the user through a profiling questionnaire covering gender, postal code, marital status, education, employment status, race, and birth date, then marks the finish with a confetti animation.

- 7 attributes are collected before any paid survey is taken.
- Several questions, including marital status and race, offer an option to skip.
- Finishing the profile is marked with a celebration animation rather than a stated reward.
- Dave doesn't say whether the intro questionnaire itself pays anything.

### O63. An accuracy warning

Starting a survey, Dave warns that answering carefully secures the full reward, then names the topic and approximate length before beginning.

- The warning ties answer quality directly to reward size.
- Topic and length are restated right before starting.
- The survey observed here covered food and beverage, about 10 minutes.

### O64. Disqualified mid-survey

Partway through a survey, Dave can end it early, telling the user one of their answers indicated they weren't the intended respondent, and the survey disappears from the list afterward.

- The instance ends before completion.
- Dave attributes the outcome to the user's own answers.
- The disqualified survey no longer appears in the available list.

### O65. Survey FAQ

Dave publishes a survey FAQ covering how surveys work and why users get disqualified.

- Disqualification comes up often enough to have its own FAQ entry.

### O66. Location permission request

Tapping into the side hustle section first raises a permission prompt where Dave says it uses location to find ATMs and protect users from fraud.

- The stated reasons for the permission, ATMs and fraud protection, aren't what this surface is actually for.
- The prompt appears at the entrance to the job feature, not the ATM feature.

### O67. Side hustle categories

Dave introduces Side Hustle by asking whether the user wants quick cash from a gig or a new job, then narrows straight to 6 categories: flexible hours, part time, gig jobs, work from home, seasonal, and temp jobs.

- 6 categories are offered.
- The framing covers both supplementary income and full replacement work.

### O68. The job list

Selecting a category opens a job list with sorting and a distance filter, and Dave features its own survey feature at the top, ahead of third-party listings for delivery, therapy, security, seasonal retail, and event work.

- Dave's own earning surface occupies the featured spot in what's otherwise a third-party job list.
- The distance filter is likely what the earlier location permission enables, though Dave doesn't show the two connected directly.
- The listings shown are for the US market.

### O69. Applications leave Dave

Opening a listing shows the employer's own details, and applying takes the user out to the employer's website. Dave doesn't process the application itself.

- The application is completed entirely outside Dave.
- Dave doesn't show a path back in after applying.

---

## Social

(No observations in this app.)

---

## Growth

This section covers Dave's referral program: where it sits in the app, what it pays, and the steps involved in earning it.

### O70. Referral leads settings

Dave places a prominent referral button at the very top of settings, ahead of an accounts group, an info group, an app settings group, and a support group.

- Referral outranks account, profile, security, and support entries in the settings hierarchy.
- 4 groups follow it.

### O71. A bigger next advance

Dave pitches referral as a way to earn up to $100 more on a second advance, paying out once the user and their friend have both repaid an advance.

- The reward increases a future advance amount rather than paying cash.
- The stated increase is 20%.
- The stated ceiling is $100 more.
- It's tied specifically to the user's second advance.
- It requires repayment by both parties, not just a friend signing up.

### O72. Conditions on the boost

Dave qualifies the offer directly below it: the boost amount can change based on eligibility and approval amount, and an earned boost expires after 60 days.

- The 20% and $100 figures are both qualified by eligibility and approval amount.
- Once earned, the boost expires after 60 days.
- The expiry applies to the boost after it's earned, not to the offer itself.

### O73. How to earn the boost

Dave lays out 4 steps: take an advance and spend it on gas, bills, or groceries; share a referral link; wait for the friend to repay an advance; then collect 20% more on the next advance. Referral FAQs answer what the boost is, when it lands after a friend signs up, and whether it has to be repaid.

- The referrer has to have already taken an advance before a referral can pay off.
- Sharing is framed as helping a friend, not as earning a reward.
- The event that qualifies the reward is the friend's repayment, not their sign-up.
- A published question asks whether the boost itself has to be repaid, something the referral screen doesn't otherwise answer.

---

## Money

This section covers everything Dave charges for or pays interest on: membership, advance delivery, funding, cash and check handling, and the rate on 2 of its accounts.

### O74. Membership fee, pause anytime

Dave's membership entry in settings shows the next bill date, a $1 monthly charge, and the payment method, with an easy pause and resume.

- The amount is $1, billed monthly.
- Pausing is offered, not just cancelling outright.
- Resuming is available from the same screen.

### O75. Speed is what costs money

Across the app, Dave describes the advance itself without interest, pricing speed instead: 2 to 3 days for no fee, or instant for a small fee.

- The free path exists, and it's the slower one.
- The paid path is instant.
- No specific fee amount for instant delivery is stated anywhere.

### O76. Funding priced by source

Dave charges nothing to add money from a bank account, but takes 1% through Apple Pay.

- The free source is also the slower one, arriving in 4 to 5 business days.
- The priced source is the instant wallet route.

### O77. Cash deposits priced by location

Dave makes cash deposits free at 2 named retailers using its barcode, with a possible fee elsewhere.

- The free route requires both a specific retailer and the in-app barcode.

### O78. Check handling priced by speed

Dave prices checks the same way as advances: scanning is free and slow or paid and instant, sending is free and takes 5 business days, and the actual cashing is handled by a named partner.

- The pricing pattern matches the advance: free is slow, paid is instant.
- No specific fee is stated for instant check cashing.

### O79. Interest without applying

Dave announces interest on checking and Goals as already active, without an application, showing 4% APY on both.

- The rate shown on both accounts is 4% APY.
- The benefit is announced as already active, not offered as something to opt into.
- The conditions behind that rate aren't shown up front.

---

## Return triggers

This section covers what brings users back to Dave: notifications, balance alerts, and the marketing consent gathered during signup.

### O80. Notifications bundle offers with alerts

Dave's notification prompt, raised right after refusing the advance, bundles account-change alerts together with promotional offers in a single request.

- 2 different message types get bundled into a single permission request: account changes and offers.
- The account-change purpose is listed first, offers second.
- This permission is requested right at the moment a user has just been turned down and told to come back tomorrow.

### O81. Granular, mostly push notifications

Dave lets users set a low balance alert on a predicted, not just actual, shortfall, and lists 6 notification categories, mostly push, mixing account alerts with promotional ones.

- 6 notification categories are listed.
- The low balance alert threshold seen here is $40.
- It's predictive, worded around a predicted shortfall rather than an actual one.
- A daily balance alert exists as its own category, separate from the low balance alert.
- Promotional categories sit in the same list as account alerts.

### O82. Alerts sold as membership

Dave names low balance alerts as one of three things the $1 membership buys, alongside keeping the bank connected and providing budgeting tools.

- A return trigger here is sold as a membership benefit rather than offered as a default service.
- The alert depends on the connected external account.

### O83. Marketing SMS at verification

Dave asks for consent to receive promotional texts on the same screen and the same number used for two-factor verification.

- A second messaging channel opens up at what's otherwise a security step.
- The consent states it isn't a condition of purchase.
