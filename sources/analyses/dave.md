# Dave — behavioral design analysis

**Session date:** 03 Jun 2026
**Additional sessions:** None
**Analysis date:** 03 Jun 2026
**Last updated:** 09 Sep 2026

Source: one recorded walkthrough session, 3 June 2026, retrieved in full. A later recording on the same date contains a repeated segment of the same walkthrough covering ATM withdrawal, bill payment, the accounts list and goals; it duplicates material already present in the main session and adds no separate observation. No other session for this app exists in the record. The session is assembled from captured app screens rather than one continuous live run, and the analyst states at several points that some transitions may not be contiguous; where flow order matters, this is marked with a sequence caveat.

---

# Pass one: observation record

1. Onboarding and first run: O1 to O16
2. Core loop and automation: O17 to O42
3. Goals and progression: O43 to O50
4. Access and eligibility: O51 to O57
5. Earning and utility: O58 to O69
6. Social: no observations in this session
7. Growth: O70 to O73
8. Money: O74 to O79
9. Return triggers: O80 to O83

## Onboarding and first run

**O1. Pre-account screen leads with an amount and two removals.**

**Observed:** The first screen presents the brand mark and then loads a headline offering up to $500 when the user needs it, qualified by "No interest, no credit check" (tier: directly observed). The same screen shows a rendering of the product's card and two buttons, Login and Sign up for Dave (tier: directly observed).

**Detail:**
- The headline amount is $500 (tier: directly observed).
- The two qualifiers are stated as no interest and no credit check (tier: directly observed).
- An asterisk on the headline links to a "See terms" control (tier: directly observed).
- No third option, guest mode, or demonstration path is shown on this screen (tier: directly observed).

*Cross-reference: O51.*

**O2. The headline's terms sit behind an asterisk.**

**Observed:** Tapping "See terms" opens a pop-up restating the $500 headline and then describing the product underneath it: Extra Cash is a demand deposit account with overdraft utility, an advance results in a negative balance, the advance is subject to eligibility, and delivery fees may apply (tier: directly observed). The pop-up refers the user to the account agreement for details and closes with a "Got it" acknowledgement (tier: directly observed).

**Detail:**
- The negative-balance consequence of an advance is disclosed here and not in the headline (tier: directly observed).
- Eligibility is named as a condition here and not in the headline (tier: directly observed).
- Delivery fees are named as possible here and not in the headline (tier: directly observed).
- The pop-up is dismissed by acknowledgement rather than by acceptance (tier: directly observed).

*Cross-reference: O52, O54, O75.*

**O3. One sign-up path, with consent bundled into the continue action.**

**Observed:** Sign-up opens with "First create a sign in ID", requiring an email address and a password, and no alternative registration method is offered at this point in the session (tier: directly observed). Below the fields, text states agreement to the privacy policy, terms of use and electronic communication consent, and the user proceeds with a single "Agree and continue" button (tier: directly observed).

**Detail:**
- Email and password are the only credentials collected at this step (tier: directly observed).
- Consent to three separate documents is carried by one button (tier: directly observed).
- No separate checkbox is shown for these three consents (tier: directly observed).
- The absence of a social or third-party sign-in option is stated by the analyst as applying at least at this moment (tier: plausible, the session shows one screen and not the full option set).

**O4. Legal name is requested as a distinct step.**

**Observed:** The next screen reads "Let's get started. What's your legal name?" and collects first name and last name (tier: directly observed).

**Detail:**
- The word "legal" is used at this stage, before identity documents are mentioned (tier: directly observed).
- First and last name are separate fields (tier: directly observed).

*Cross-reference: O21.*

**O5. Phone number is requested with a security justification.**

**Observed:** The following screen reads "Nice to meet you. What's your mobile phone number?" and explains that the number is used to protect the account with two-factor verification (tier: directly observed).

**Detail:**
- The stated purpose of the number is account protection (tier: directly observed).
- A "Next" action advances from the field (tier: directly observed).

*Cross-reference: O6, O83.*

**O6. A marketing consent is placed on the verification-code screen.**

**Observed:** The verification screen states that a six-digit code has been sent to the provided number and offers a resend control and a code entry area (tier: directly observed). Below the code field, the screen carries an agreement to receive special offers and promotions by SMS at the same number, with the standard qualifiers that consent is not a condition of purchase, rates may apply, frequency varies, and STOP unsubscribes (tier: directly observed).

**Detail:**
- The marketing consent appears on the same screen as the security step it is separate from (tier: directly observed).
- The number used for verification is the number the marketing consent applies to (tier: directly observed).
- The consent text links to terms of use and privacy policy (tier: directly observed).
- Whether the consent is a checkbox, a toggle, or carried by the continue action is not established in the session (tier: unresolved).

*Cross-reference: O5, O80, O83.*

**O7. Biometric login is offered with an explicit skip.**

**Observed:** The next screen asks whether the user wants to use Face ID to log in, offering "Yes, sign in with Face ID" or "Skip for now" (tier: directly observed). Choosing the biometric option raises the operating system permission prompt (tier: directly observed).

**Detail:**
- A skip is offered on the same screen as the acceptance (tier: directly observed).
- The skip is worded as deferral rather than refusal (tier: directly observed).

**O8. An app passcode is created regardless of the biometric choice.**

**Observed:** The user is then asked to create a four-digit app passcode and to re-enter it on the following screen (tier: directly observed).

**Detail:**
- The passcode is four digits (tier: directly observed).
- Confirmation is a separate screen rather than a second field (tier: directly observed).
- Whether the passcode step can be skipped is not shown (tier: unresolved).

**O9. The bank connection request is justified by the size of the approval.**

**Observed:** The next screen reads "Connect your primary bank" and asks the user to connect the account they are paid into so the product can determine their best approval amount (tier: directly observed). The same screen states that advances can be received instantly for a small fee (tier: directly observed).

**Detail:**
- The requested account is specified as the one the user is paid into (tier: directly observed).
- The stated benefit of connecting is a better approval amount (tier: directly observed).
- Instant delivery is introduced as a paid option at the moment of connection (tier: directly observed).

*Cross-reference: O56, O75.*

**O10. The membership charge is authorised on the bank connection screen.**

**Observed:** Below the connection request, the same screen carries an agreement to the recurring payment authorisation for the $1 monthly membership fee (tier: directly observed).

**Detail:**
- The recurring charge is $1 per month (tier: directly observed).
- The authorisation shares a screen and a continue action with the bank connection (tier: directly observed).

*Cross-reference: O12, O74.*

**O11. The bank connection step has three exits.**

**Observed:** The screen offers "Agree and continue", a separate "I don't have a bank account" path, and a dismissal control in the top right corner (tier: directly observed). The analyst records that the step is therefore not required (tier: directly observed, stated as an observation about the screen's controls).

**Detail:**
- Two of the three exits leave the account unconnected (tier: directly observed).
- What the product does after either non-connecting exit is not shown (tier: unresolved).

*Cross-reference: O54, O56.*

**O12. A second screen restates the fee alongside what it buys.**

**Observed:** After continuing, a screen headed "Connect your bank and debit card" states that the $1 monthly membership fee keeps the bank account connected, sends low balance alerts and provides budgeting tools (tier: directly observed). Below this, the screen numbers the remaining work as connecting the bank account and linking that account's debit card (tier: directly observed).

**Detail:**
- Three named benefits are attached to the fee: connection, low balance alerts, budgeting tools (tier: directly observed).
- The fee is restated on a second consecutive screen (tier: directly observed).
- The remaining work is presented as two numbered steps (tier: directly observed).

*Cross-reference: O10, O74, O82.*

**O13. Bank connection is handed to a third party with trust framing.**

**Observed:** The connection is performed by Plaid, introduced on a screen stating that 8,000 apps trust Plaid, that connection takes seconds, and that best-in-class encryption protects the data (tier: directly observed). Within that flow the user enters a phone number or continues as a guest, verifies the number by code, selects the account to share, and logs in to their bank (tier: directly observed).

**Detail:**
- The count stated is 8,000 apps (tier: directly observed).
- A guest path avoids giving the phone number to the connection provider (tier: directly observed).
- Before the bank login, the screen lists the boxes to check at the bank: the checking or prepaid account, bank account numbers, and account holder information (tier: directly observed).
- The data listed is what the bank will be asked to share onward (tier: strongly supported, the screen presents the list as what to authorise at the bank).

**O14. The linking wait carries product claims.**

**Observed:** While the account links, a progress screen presents claims rather than status detail: that paying members lowered their overdraft fees by nearly 70%, and that the product helps over 11 million members stay on top of their finances (tier: directly observed). The screen also states that transactions are being analysed (tier: directly observed).

**Detail:**
- The overdraft claim is attached specifically to paying members (tier: directly observed).
- The membership figure stated is over 11 million (tier: directly observed).
- These claims appear at a point where the user cannot act (tier: directly observed).

**O15. The debit card is linked with its settlement purpose stated.**

**Observed:** The next step asks the user to add and link the debit card associated with the connected bank account, stating that this card may be used to settle any advances taken (tier: directly observed). The completed state shows the linked bank and the linked card together (tier: directly observed).

**Detail:**
- The card must be associated with the connected bank account (tier: directly observed).
- The stated function of the card is settlement of advances (tier: directly observed).

*Cross-reference: O52, O57.*

**O16. The first dashboard is empty except for one prominent action.**

**Observed:** After connection, the home screen greets the user with "start building your financial future" and presents an "Open checking account" button, with further options below (tier: directly observed). The bottom navigation carries four destinations, Home, Account, Extra cash and Grow, and a settings control sits in the top right corner (tier: directly observed).

**Detail:**
- The primary call to action on first entry is opening a second account rather than using the connected one (tier: directly observed).
- The navigation has four tabs (tier: directly observed).
- The analyst records difficulty reading what sits under the primary button on this screen (sequence caveat: the home screen's lower content is not clearly captured at this point).

*Cross-reference: O17, O30.*

## Core loop and automation

**O17. The checking account is pitched twice before any identity request.**

**Observed:** Tapping "Open checking account" opens a screen headed "Get more with Dave" describing a checking account with no minimum and no overdraft fees, no monthly fees and no balance requirements, phrased as "Ditch fees for good" (tier: directly observed). A "Get started" action advances to a second pitch screen (tier: directly observed).

**Detail:**
- The pitch leads with removals rather than additions (tier: directly observed).
- Three fee-related claims appear on this screen: no minimum, no overdraft fees, no monthly fees or balance requirements (tier: directly observed).
- No identity information is requested before this point in the flow (tier: directly observed).

*Cross-reference: O18, O19.*

**O18. The second pitch screen introduces saving, funding and access.**

**Observed:** The next screen, headed "Save with Dave in every way", describes rounding up spare change on purchases toward financial goals, transferring money between external accounts at any time, and depositing cash at over 90,000 locations with fee-free deposits at two named retailers (tier: directly observed). Listed below as other benefits are instant advances, fee-free withdrawal at over 37,000 ATMs, sending cash and checks, digital and physical debit cards, 24/7 real-time support, and FDIC insurance through the partner bank (tier: directly observed).

**Detail:**
- Round-ups are introduced here, before the account exists (tier: directly observed).
- The deposit network is stated as over 90,000 locations, with fee-free deposits named at Walgreens and CVS (tier: directly observed).
- The ATM network is stated as over 37,000 (tier: directly observed).
- The partner bank is named as Evolve Bank and Trust, member FDIC (tier: directly observed).
- The FDIC coverage figure is not legible in the session record (tier: unresolved).

*Cross-reference: O31, O77, O79.*

**O19. Date of birth is the first identity field.**

**Observed:** After "Get started", the first identity screen reads "Confirm your identity. When were you born?" and collects a date (tier: directly observed).

**Detail:** None.

**O20. The tax identifier is requested with a legal reason and a security reassurance.**

**Observed:** The next screen requests the Social Security number, states that US federal law requires this information to verify identity, and collects the number twice (tier: directly observed). Beneath the fields, the screen states that the entry is protected by bank-level security (tier: directly observed).

**Detail:**
- The requirement is attributed to federal law rather than to the product (tier: directly observed).
- The number is entered twice (tier: directly observed).
- A security reassurance sits directly under the most sensitive field in the flow (tier: directly observed).

**O21. A review screen precedes submission.**

**Observed:** A "Review your info" screen restates legal name, date of birth, Social Security number and residential address, prefaced by a warning that the information must match the user's identity documents (tier: directly observed). The user confirms from this screen (tier: directly observed).

**Detail:**
- Residential address appears on the review screen although its collection is not shown in the session (sequence caveat: the address entry step is not captured).
- The warning is marked as important (tier: directly observed).

*Cross-reference: O4.*

**O22. Identity confirmation runs as a timed wait.**

**Observed:** After confirmation the product displays "Confirming your identity. This may take a couple minutes. Hang tight." (tier: directly observed).

**Detail:**
- The wait is described in minutes rather than seconds (tier: directly observed).
- No alternative action is offered during the wait (tier: directly observed).

**O23. Account opening carries a credit reassurance and a single checkbox.**

**Observed:** The next screen, "Let's open your account", states that this will not affect the user's credit (tier: directly observed). It presents a Dave Checking account option described as spending instantly with no hidden fees, and a checkbox by which the user agrees to the checking deposit agreement, its disclosures and the partner bank's privacy policy, before the "Open Dave Checking Account" action (tier: directly observed).

**Detail:**
- The credit reassurance is placed immediately after the tax identifier and identity check (tier: directly observed).
- One checkbox carries agreement to three documents (tier: directly observed).
- A "See terms and conditions" link is present (tier: directly observed).

*Cross-reference: O3, O20.*

**O24. The opening wait is filled with value propositions.**

**Observed:** While the account opens, the screen displays "Opening your account" and cycles value propositions as content loads, including spending instantly with the digital card and making purchases and paying bills with the digital debit card (tier: directly observed). The sequence ends with confirmation that the checking account is set up (tier: directly observed).

**Detail:**
- The propositions appear during an unavoidable wait (tier: directly observed).
- The propositions concern the card rather than the account terms (tier: directly observed).

*Cross-reference: O14.*

**O25. Funding is requested immediately after the account exists.**

**Observed:** The next screen, "Add money to your Dave checking account", offers setting up direct deposit with the claim of being paid up to two days early, transferring from another bank in four to five business days, and depositing cash fee-free at two named retailers with a barcode (tier: directly observed). A "Not now" option is available (tier: directly observed).

**Detail:**
- Three funding routes are presented together with their speeds (tier: directly observed).
- Direct deposit is the only route carrying a speed advantage claim (tier: directly observed).
- The deferral option is present on the same screen (tier: directly observed).

*Cross-reference: O33, O35, O77.*

**O26. The account home is a balance widget with immediate actions.**

**Observed:** The Dave Checking screen shows a widget with the available balance, a control to view the debit card, and Add money and Withdraw actions, with an "Add to Apple Wallet" button below (tier: directly observed).

**Detail:**
- Balance, card access and money movement occupy the same widget (tier: directly observed).
- Wallet provisioning is offered at the top level rather than inside card settings (tier: directly observed).

**O27. The physical card delay is bridged by a digital card.**

**Observed:** A notification states that the physical debit card should arrive by a stated date and instructs the user to use the digital card while waiting, with a "View digital card" control (tier: directly observed).

**Detail:**
- The arrival date is presented as a specific date (tier: directly observed).
- The exact date is not legible in the session record (tier: unresolved).
- The waiting period is given a usable substitute rather than only an explanation (tier: directly observed).

**O28. Digital card controls include a freeze that is off by default.**

**Observed:** The digital card screen displays the card and offers a toggle to show card information and a toggle to freeze the card, which is off by default, with controls below to set the PIN and replace the digital card, and an "Add to Apple Wallet" action at the bottom (tier: directly observed). Wallet provisioning offers a choice of phone or watch and requires accepting terms and confirming (tier: directly observed).

**Detail:**
- Freeze is present as a user-operated control (tier: directly observed).
- Freeze defaults to off (tier: directly observed).
- Replacing the digital card is available without a support contact (tier: directly observed).

**O29. The empty activity state instructs rather than describes.**

**Observed:** Recent activity reads "No activity yet" followed by "Get started by using your Dave Checking account" and a statement that all activity will appear there (tier: directly observed).

**Detail:**
- The empty state names the action that would fill it (tier: directly observed).

**O30. A hub groups six banking utilities under one entry point.**

**Observed:** Scrolling the checking screen reveals "Do more with Dave Checking" listing direct deposit, recurring transfer, scan or send a check, deposit cash, withdraw cash and pay bills (tier: directly observed). Below it sit two further prompts, setting up direct deposit to be paid up to two days early, and starting a budget with the product's budgeting tool (tier: directly observed).

**Detail:**
- Six utilities are grouped in one hub (tier: directly observed).
- Direct deposit appears both inside the hub and as a separate prompt below it (tier: directly observed).
- The budgeting tool is surfaced here as a prompt; its own screens are not entered in the session (tier: unresolved).

*Cross-reference: O35, O39, O40, O41, O42.*

**O31. Round-ups are introduced as a setup flow with reversibility stated up front.**

**Observed:** A section headed "Save every time you spend with Roundup" states that purchases are rounded up to the nearest dollar every time the product's debit card is used, that round-ups automatically roll into a Goals account, that the user can contribute additional money at their own pace, and that they can take their savings out or pause at any time (tier: directly observed). Links to learn more and to the goals deposit agreement sit below, before a "Get started" action (tier: directly observed).

**Detail:**
- The trigger is any purchase on the product's own debit card (tier: directly observed).
- The rounding rule is to the nearest dollar (tier: directly observed).
- The destination is a separate Goals account rather than the checking balance (tier: directly observed).
- Withdrawal and pausing are stated on the introduction screen, before opt-in (tier: directly observed).
- The analyst records uncertainty about how this section is reached from the preceding screen (sequence caveat: the transition into the round-up section is not captured).

*Cross-reference: O18, O32, O43, O49.*

**O32. Round-ups cannot exist without a Goals account.**

**Observed:** Continuing opens "Open your goals account to start using Roundup", stating that a goal will be created for the user's debit card purchases to round up into (tier: directly observed). The user selects a Dave Goals account, described as personal savings for financial milestones, and agrees to the goals deposit agreement and disclosures before creating the account (tier: directly observed).

**Detail:**
- The savings container is created as a precondition of the automation, not the reverse (tier: directly observed).
- A goal is created by the product rather than by the user at this step (tier: directly observed).
- One checkbox carries the deposit agreement and its disclosures (tier: directly observed).

*Cross-reference: O31, O43.*

**O33. Adding money prices the funding source and confirms by swipe.**

**Observed:** From the widget, "Add money" collects an amount and then presents a source choice: a bank account with no fee, or Apple Pay with a 1% fee (tier: directly observed). The transfer screen carries a recurring toggle, and the transfer is committed by swiping a control from left to right, after which the product confirms and states arrival in four to five business days (tier: directly observed).

**Detail:**
- The fee difference between sources is stated at the point of choice (tier: directly observed).
- The confirming action is a swipe rather than a tap (tier: directly observed).
- The arrival window for the transfer is four to five business days (tier: directly observed).
- The completion screen carries a prompt asking whether the user wants to be paid up to two days early by setting up direct deposit (tier: directly observed).

*Cross-reference: O25, O34, O35, O76.*

**O34. The recurring transfer toggle is on by default within the recurring flow.**

**Observed:** Choosing "Recurring transfer" from the hub collects an amount and a source, and the recurring toggle is already on rather than requiring the user to enable it (tier: directly observed). The user then selects a frequency, weekly or other, and a day, and agrees by checkbox to a recurring transfer of the stated amount on the stated day, referencing the recurring payment authorisation agreement (tier: directly observed). The transfer is committed by swipe and the product reports it as set up (tier: directly observed).

**Detail:**
- The toggle state is on by default when the flow is entered from the recurring-transfer entry point (tier: directly observed).
- Frequency options observed are weekly and a further unspecified option (tier: directly observed).
- The full set of frequency options is not established (tier: unresolved).
- Cancellation is performed by turning the same toggle off, and the analyst records that this cancels it (tier: directly observed).

*Cross-reference: O33, O49.*

**O35. Direct deposit offers three routes, one of them tagged as fastest.**

**Observed:** The direct deposit screen is headed "Earlier paydays are easy with Dave" and repeats the up-to-two-days-early claim, then presents three routes: finding the employer, which carries a "fastest" tag and signs the user into their company's pay portal; copying and pasting the account details into the employer's portal manually; and sending HR a form that the product generates from a few questions (tier: directly observed). A footnote states that early access depends on the timing and availability of payroll files from the payer and that funds can be available up to two business days in advance of the scheduled payment date (tier: directly observed).

**Detail:**
- Three routes are offered for the same outcome (tier: directly observed).
- Only one route carries a speed tag (tier: directly observed).
- The employer-search route is handled by a third party, Pinwheel, introduced with encryption, credential-privacy and speed claims (tier: directly observed).
- The copy-and-paste route surfaces the account details for manual entry elsewhere (tier: directly observed).
- The early-access claim is qualified by a dependency the product does not control (tier: directly observed).

*Cross-reference: O25, O30, O36, O37.*

**O36. The form route asks how much of the paycheck to move.**

**Observed:** The send-HR-a-form route collects the employer name and then asks how much of each paycheck the user would like to deposit, stating that this can always be changed later, with two options: deposit full paycheck or deposit part of paycheck (tier: directly observed).

**Detail:**
- A partial option is presented alongside the full option rather than only as a later adjustment (tier: directly observed).
- Reversibility is stated in the same sentence as the question (tier: directly observed).
- The mechanism for specifying the partial amount is not shown (tier: unresolved).

*Cross-reference: O35, O37.*

**O37. The generated form is pre-signed by default option and can be routed two ways.**

**Observed:** The next screen states that the form is filled out and can be sent by the user or straight to the employer, with a checkbox offering to pre-sign the form, and two buttons, send to my employer or send it to myself (tier: directly observed). After sending, the product confirms that the direct deposit form has been emailed to the user's address and offers to resend or finish (tier: directly observed).

**Detail:**
- Pre-signing is offered as a checkbox rather than a separate signing step (tier: directly observed).
- Whether the pre-sign checkbox is checked by default is not established (tier: unresolved).
- Both routes end with an email confirmation to the user (tier: strongly supported, the confirmation screen follows either send action in the session record).

*Cross-reference: O35, O36.*

**O38. The accounts tab separates the product's accounts from the connected one.**

**Observed:** The Accounts tab lists the product's own accounts, Dave Checking, Goals and Extra Cash, and lists the external checking account separately below them (tier: directly observed).

**Detail:**
- Three internal accounts exist by this point in the session (tier: directly observed).
- The external account is presented in its own group (tier: directly observed).
- Opening the external account shows its available balance, the linked debit card, a prompt to start a budget, and recent transactions (tier: directly observed).

*Cross-reference: O13, O32, O53, O79.*

**O39. Check handling is split into scan and send, each with its own speed and fee.**

**Observed:** The scan-or-send-a-check entry opens a chooser: scanning a check takes ten days with no fee or is instant for a fee, and sending a check arrives within five business days with no fee (tier: directly observed). The scanning route hands over to a partner, Ingo Money, described as processing the checks the product cashes, with options to cash a check or learn more (tier: directly observed). The sending route asks who the check should go to and maintains recipients (tier: directly observed).

**Detail:**
- Scanning offers a free slow path and a paid instant path (tier: directly observed).
- Sending has one speed and no fee (tier: directly observed).
- The check-cashing partner is named in a dedicated introduction screen (tier: directly observed).
- Recipients can be added within the send flow (tier: directly observed).

*Cross-reference: O78.*

**O40. Cash deposit is free at two named retailers and priced elsewhere.**

**Observed:** The deposit-cash flow begins with location selection, stating that fee-free deposits are at CVS and Walgreens using a barcode scan and that other locations may charge a service fee (tier: directly observed). The next steps describe following on-screen prompts and scanning an in-app barcode or swiping the card, keeping the receipt, and expecting the deposit to post typically within ten minutes and up to thirty at some locations (tier: directly observed). A "See locations" control opens a map of the nearest cash deposit places (tier: directly observed).

**Detail:**
- Two retailers are named as fee-free (tier: directly observed).
- A service fee ceiling is stated for other locations (tier: directly observed).
- The stated fee amount is not legible in the session record (tier: unresolved).
- Posting time is stated as typically ten minutes and up to thirty at some locations (tier: directly observed).

*Cross-reference: O18, O77.*

**O41. Cash withdrawal is presented as a map with per-location instructions.**

**Observed:** The withdraw-cash entry opens a map listing nearby ATM and cash withdrawal locations (tier: directly observed). Selecting one shows the full address and opening hours with two actions, get directions and how to withdraw cash (tier: directly observed). The instruction screen describes inserting the card, entering the four-digit card PIN, and following the ATM prompts (tier: directly observed).

**Detail:**
- Location data and procedural instruction are placed on the same surface (tier: directly observed).
- The PIN referred to is the debit card PIN of four digits (tier: directly observed).

*Cross-reference: O28, O66.*

**O42. Bill payment offers three routes without leaving the account.**

**Observed:** The pay-bills screen offers paying with the debit card by copying its details for online payment, paying from the checking account by copying the routing number, account number and partner bank details, or sending a check from the checking account for no fee arriving within five business days (tier: directly observed).

**Detail:**
- Three payment routes are offered for the same outcome (tier: directly observed).
- Each identifier can be copied individually (tier: directly observed).
- The check route restates the no-fee and five-business-day terms (tier: directly observed).

*Cross-reference: O39.*

## Goals and progression

**O43. The product creates the user's first goal and gives it a target.**

**Observed:** After the goals account is created, the screen reads "Your goals account is ready for roundups", states that round-ups are set up for the new goal, and invites the user to personalise it by editing title, goal amount and end date (tier: directly observed). Opening the goal shows the goal detail, with the savings target set by default at $75 and round-up switched on (tier: directly observed).

**Detail:**
- The goal exists before the user has defined anything about it (tier: directly observed).
- The default target amount is $75 (tier: directly observed).
- Round-up is already on for this goal (tier: directly observed).
- Three attributes are named as editable: title, goal amount, end date (tier: directly observed).
- A "Set a recurring deposit" control sits below, framed as reaching goals faster (tier: directly observed).

*Cross-reference: O32, O44, O46, O49.*

**O44. Personalisation is offered before any money is in the goal.**

**Observed:** The goal detail screen allows editing the title and the goal amount, changing the appearance of the banner image, and viewing the savings figure (tier: directly observed).

**Detail:**
- The banner image is editable from the goal detail screen (tier: directly observed).
- Personalisation is invited at a point when the goal balance is zero (tier: strongly supported, no deposit has been made at this point in the session).

*Cross-reference: O43, O47.*

**O45. The goals surface shows a balance, a yield and a progress bar.**

**Observed:** The Goals entry in the accounts list opens a screen showing the available balance for goals, a 4% APY figure, and a progress bar for savings (tier: directly observed). A "Get started, add some money" prompt and an "Add money" control appear, with "Create a new goal" below (tier: directly observed).

**Detail:**
- The yield stated is 4% APY (tier: directly observed).
- A progress bar represents position against the goal amount (tier: strongly supported, the bar is described as a savings progress bar on a screen carrying the goal target).
- Whether reaching the goal amount produces any recognition, message or state change is not shown (tier: unresolved).

*Cross-reference: O38, O43, O79.*

**O46. Additional goals share a single ceiling with existing ones.**

**Observed:** Creating a new goal asks for a name and then a goal amount, stating that the amount can be set up to $24,925 (tier: directly observed). The session records that the ceiling is the $25,000 limit less the $75 already held in another goal (tier: directly observed).

**Detail:**
- The stated overall limit is $25,000 (tier: directly observed).
- The offered maximum for the new goal is reduced by the existing goal's amount (tier: directly observed).
- The limit is expressed only through the reduced maximum, not as a separate statement of remaining capacity (tier: strongly supported, the screen presents the arithmetic result rather than the rule).

*Cross-reference: O43, O45.*

**O47. Goal appearance is chosen from an external image library.**

**Observed:** The goal creation flow offers "Add a photo to represent your goal", and selecting it opens Unsplash, from which the user chooses an image before creating the goal (tier: directly observed).

**Detail:**
- The image source is a third-party image library rather than a built-in set (tier: directly observed).
- The stated purpose of the image is to represent the goal (tier: directly observed).
- The image is attached to the goal, not to the account or the user profile (tier: strongly supported, the picker is inside the goal creation flow and the result is described as the goal's banner).
- The image does not alter any stated goal rule, limit or rate in the session (tier: directly observed).

*Cross-reference: O44.*

**O48. The first deposit prompt uses small presets and minimising language.**

**Observed:** After the goal is created, the screen reads "Start achieving your goal" and states that tiny amounts will quickly add up, so the user should not be afraid to kick things off with just a few bucks (tier: directly observed). It offers three preset first deposits of $5, $25 and $50, a custom amount, and "Maybe later" at the bottom (tier: directly observed).

**Detail:**
- The lowest preset is $5 (tier: directly observed).
- The copy addresses reluctance rather than benefit (tier: directly observed).
- The deferral option is present and is placed last (tier: directly observed).
- Choosing "Maybe later" still completes goal creation (tier: directly observed).

**O49. Ending a goal is permanent and cascades into the automation.**

**Observed:** Each goal carries an "End goal" control at the bottom, and confirming raises a screen stating that ending the goal will deactivate it permanently, pause automatic round-ups, and cancel any active recurring transfers, and that once ended the goal cannot be reactivated (tier: directly observed). The choices are "Keep it" or "End goal" (tier: directly observed).

**Detail:**
- Three consequences are stated together: permanent deactivation, round-ups paused, recurring transfers cancelled (tier: directly observed).
- Irreversibility is stated explicitly (tier: directly observed).
- The retain option is presented alongside the destructive one (tier: directly observed).
- Whether "pause automatic roundups" affects round-ups across all goals or only this one is not established (tier: unresolved).

*Cross-reference: O31, O34, O50.*

**O50. Ending a goal is immediately followed by an offer to restart the automation.**

**Observed:** After ending, the product states that the goal has ended and remains accessible in a past goals section, then presents "Resume roundup with a new goal", explaining that creating a new goal restarts automatic savings with round-up, with "Resume roundup" and "Not now" (tier: directly observed).

**Detail:**
- The ended goal is retained in a past goals section (tier: directly observed).
- The restart offer appears on the confirmation screen rather than later (tier: directly observed).
- The restart is framed as resuming round-up rather than as creating a goal (tier: directly observed).

*Cross-reference: O49.*

## Access and eligibility

**O51. The advance is the headline of the product and of its own tab.**

**Observed:** The Extra cash tab opens with "Get an extra cash advance up to $500" and instructs the user to open their extra cash and spending accounts to get started, with a control to see how extra cash works and a "Get started" action (tier: directly observed).

**Detail:**
- The same $500 figure that opens the unauthenticated app opens this tab (tier: directly observed).
- Access is conditioned on opening two accounts (tier: directly observed).

*Cross-reference: O1, O53.*

**O52. The mechanics of the advance are explained before the account is opened.**

**Observed:** The explanation screen states that advances arrive in two to three days for no fee or instantly for a small fee, that taking an advance makes the extra cash account balance go negative and that it settles on the next paycheck, and that money can also be stored in the account (tier: directly observed).

**Detail:**
- The negative balance is stated as the mechanism rather than as a warning (tier: directly observed).
- Settlement is tied to the next paycheck (tier: directly observed).
- Two delivery speeds are priced differently (tier: directly observed).
- The storage function of the account is introduced alongside the borrowing function (tier: directly observed).

*Cross-reference: O2, O15, O55, O75.*

**O53. Opening the extra cash account is a checkbox and a wait.**

**Observed:** The opening screen presents the extra cash account with a note that express fees apply to instant transfers, and a checkbox agreeing to the extra cash deposit agreement, its disclosures and the partner bank's privacy policy (tier: directly observed). After the action, the screen loads and cycles value propositions, including using advances instantly with the product's checking account and Apple Pay, before confirming that the extra cash and checking accounts are set up (tier: directly observed).

**Detail:**
- One checkbox carries three documents, matching the pattern used for the checking account (tier: directly observed).
- The wait again carries propositions rather than status (tier: directly observed).

*Cross-reference: O23, O24, O38.*

**O54. Eligibility is withheld after the account is opened, with a dated retry.**

**Observed:** Immediately after the account is created, the product states "You're not eligible for an advance yet. Check back tomorrow to see if you're eligible." and offers "Get notified if you're eligible" (tier: directly observed). A parallel screen states that the product is working on getting the user approved for an advance, tells them to check back tomorrow, and offers "Notify me when I'm eligible" (tier: directly observed).

**Detail:**
- The refusal is worded as "not yet" rather than as a decline (tier: directly observed).
- A specific return interval is named: tomorrow (tier: directly observed).
- A notification opt-in is offered in place of the benefit (tier: directly observed).
- The message appears in more than one position in the tab (tier: directly observed).
- The analyst records that no reason for tomorrow's difference is given on these screens (tier: directly observed).
- Whether eligibility is in fact re-evaluated daily is not shown (tier: unresolved).

*Cross-reference: O56, O80.*

**O55. Funding the extra cash account is explicitly decoupled from eligibility.**

**Observed:** Opening the extra cash account balance shows the balance and states that adding money to the account does not increase the advance amount and will not affect advance eligibility (tier: directly observed). A deposit control is nonetheless present (tier: directly observed).

**Detail:**
- The decoupling is stated pre-emptively at the deposit surface (tier: directly observed).
- Deposit remains available despite the stated absence of effect (tier: directly observed).

*Cross-reference: O52.*

**O56. Eligibility is tied to the account the user is paid into.**

**Observed:** Below the balance, the screen shows the linked bank and debit cards and states that the bank is used to determine advance eligibility, then asks "Getting paid in a different bank? Connect your primary bank account." (tier: directly observed).

**Detail:**
- The determinant of eligibility is named as the connected bank (tier: directly observed).
- The prompt targets specifically the account salary arrives in (tier: directly observed).
- This restates at the point of refusal the same request made during onboarding (tier: directly observed).

*Cross-reference: O9, O11, O54.*

**O57. Eligibility rules are published as questions rather than as state.**

**Observed:** An extra cash FAQ lists what extra cash is, what affects eligibility for an advance, how an advance is received, how it is repaid, what the extra cash balance is, why the balance is negative, why another advance cannot be taken immediately, why the advance amount changed, what fees extra cash has, and what happens if settlement is late (tier: directly observed).

**Detail:**
- Ten questions are listed (tier: directly observed).
- The questions name rules the interface does not otherwise display, including limits on taking a further advance and changes to the advance amount (tier: directly observed).
- The answers are not opened in the session (tier: unresolved).

*Cross-reference: O52, O54, O75.*

## Earning and utility

**O58. The Grow tab leads with earning and closes with work.**

**Observed:** The Grow tab presents, at the top, "Earn cash instantly" tagged as new, described as taking surveys and getting cash in the product's checking account (tier: directly observed). Below it the user's goals appear, and below those a large tappable section, "Try a side hustle", framed as putting more money in your pocket with a side job (tier: directly observed).

**Detail:**
- Three surfaces share the tab: surveys, goals, side hustle (tier: directly observed).
- The survey surface carries a "new" tag (tier: directly observed).
- Earnings from both surfaces are directed to or framed around the product's own checking account (tier: strongly supported, the survey surface states this explicitly and the side hustle surface is framed as income).

*Cross-reference: O45, O59, O66.*

**O59. Survey earning is framed as three steps with an unlock and a partial-reward rule.**

**Observed:** The survey introduction reads "Start earning with surveys. Get paid instantly to your Dave Checking account", states that when the user does not qualify for a survey they are taking it will end early and they will receive a partial reward, and numbers three steps: get started with an intro survey, unlock higher paying surveys as you go, see earnings in the checking account (tier: directly observed). The screen attributes the surveys to a third party, inBrain AI, and links to terms of use (tier: directly observed).

**Detail:**
- Progression is promised in the second step: higher paying surveys unlock as the user continues (tier: directly observed).
- The mechanism, threshold or condition for that unlock is not stated on this screen (tier: directly observed).
- Disqualification is disclosed before the first survey rather than at the point of failure (tier: directly observed).
- A partial reward is promised for disqualification, with no amount or rule stated (tier: directly observed).
- The provider of the surveys is a named third party (tier: directly observed).

*Cross-reference: O61, O64.*

**O60. Dismissing the introduction reveals the list directly.**

**Observed:** Closing the introduction with the control in the top right corner reveals the survey list rather than returning the user to the previous tab (tier: directly observed).

**Detail:**
- The dismiss control leads forward rather than back (tier: directly observed).
- Taking the intro survey and dismissing the introduction both arrive at survey content (tier: directly observed).

*Cross-reference: O59, O61.*

**O61. The survey list shows payout, duration, a period total and two tiers.**

**Observed:** The list screen shows the surveys available and the user's earnings for the month, with a section of surveys recommended for the user carrying a payout and an estimated completion time each, a further section of other listed surveys, and a "quick surveys" section (tier: directly observed). A survey FAQ sits at the bottom, and the side hustle section is featured below the list (tier: directly observed).

**Detail:**
- Each survey is listed with both a payout and a duration (tier: directly observed).
- A monthly earnings total is displayed above the list (tier: directly observed).
- Three recommended surveys are shown at this moment, with estimated times of about 40, 14 and 20 minutes (tier: directly observed).
- Two quick surveys are shown, one of about 8 minutes paying $0.45 and one of about 10 minutes paying $0.50 (tier: directly observed).
- The payout figures for the longer surveys are not legible in the session record (tier: unresolved).
- Recommendation is applied to a subset of the list (tier: directly observed).

*Cross-reference: O59, O64.*

**O62. The intro survey is a profiling questionnaire.**

**Observed:** Taking the intro survey opens "Take surveys, earn rewards" with a close control and a toggle by which the user accepts the provider's terms and privacy policy before a "Get started" action (tier: directly observed). The questions that follow ask gender, postal code, marital status, highest level of education completed, current employment status with a drop-down for further detail, race, and birth date, after which a celebratory confetti animation appears and the user continues to the recommended surveys (tier: directly observed).

**Detail:**
- The provider's consent is a toggle the user must turn on (tier: directly observed).
- Seven attributes are collected before any paid survey is taken (tier: directly observed).
- Several questions offer a "prefer not to answer" option, including marital status and race (tier: directly observed).
- The completion of the profile is marked with a celebration rather than a stated reward (tier: directly observed).
- Whether the intro survey itself pays is not established (tier: unresolved).

*Cross-reference: O59, O61.*

**O63. A survey opens with an accuracy warning.**

**Observed:** Starting a survey shows "Answer carefully to ensure you get the full reward", then a screen naming the topic and stating the approximate length before a "Begin survey" action (tier: directly observed).

**Detail:**
- The warning ties answer quality to the size of the reward (tier: directly observed).
- The topic and approximate length are restated immediately before starting (tier: directly observed).
- The survey observed was on food and beverage with a stated length of about ten minutes (tier: directly observed).

*Cross-reference: O59, O64.*

**O64. Disqualification ends the instance mid-way and removes it from the list.**

**Observed:** Partway through the survey a message states that one of the user's answers indicated they are not the person the survey was intended for (tier: directly observed). On returning to the list, the ten-minute survey is no longer shown (tier: directly observed).

**Detail:**
- The instance ends before completion (tier: directly observed).
- The reason given attributes the outcome to the user's answers (tier: directly observed).
- The disqualified survey is removed from the available list (tier: directly observed).
- Whether a partial reward was granted for this instance is not shown (tier: unresolved).

*Cross-reference: O59, O61, O63.*

**O65. Survey rules are published as questions.**

**Observed:** A survey FAQ is available covering how the surveys work and why the user is getting disqualified (tier: directly observed).

**Detail:**
- Disqualification is common enough to have its own published question (tier: plausible, the FAQ names it but frequency is not shown).
- The answers are not opened in the session (tier: unresolved).

*Cross-reference: O57, O64.*

**O66. The side hustle entry requests location permission.**

**Observed:** Tapping "Try a side hustle" first raises a permission prompt stating that the product uses the user's location to find ATMs and protect them from fraud (tier: directly observed).

**Detail:**
- The stated reasons for the permission are ATMs and fraud protection, neither of which is the surface being opened (tier: directly observed).
- The prompt appears at the entry to the job surface rather than at the ATM surface (tier: directly observed).

*Cross-reference: O41, O68.*

**O67. Side hustle is introduced and then reduced to categories.**

**Observed:** The introduction reads "Welcome to Side Hustle" and asks whether the user wants to earn quick cash with a side gig or find a new job, promising a search across thousands of jobs from top employers, flexible work fitting their schedule, and more money in their pocket (tier: directly observed). After "Get started", the categories offered are flexible hours, part time jobs, gig jobs, work from home, seasonal jobs and temp jobs (tier: directly observed).

**Detail:**
- Six categories are offered (tier: directly observed).
- The framing covers both supplementary and replacement work (tier: directly observed).

**O68. The job list is sortable and filterable, and the product's own surface is featured first.**

**Observed:** Selecting a category opens a job list with a sort control offering newest to oldest and oldest to newest, and a filter on distance from the user (tier: directly observed). The first, featured item in the list is the product's own surveys, presented as taking surveys and earning cash instantly, anywhere, followed by third-party listings including delivery, therapy, security, seasonal retail and event work (tier: directly observed).

**Detail:**
- The featured position in a third-party job list is occupied by the product's own earning surface (tier: directly observed).
- The distance filter is what the location permission enables (tier: plausible, the permission is requested at entry and the filter is distance-based, but the session does not show the two connected).
- The listings observed are for the United States market (tier: directly observed).

*Cross-reference: O59, O66.*

**O69. Applications leave the product entirely.**

**Observed:** Opening a listing shows the employer, the locations and details provided by that employer, with an "Apply now" action at the bottom that takes the user out to the employer's own website (tier: directly observed). The analyst records that the product does not process the application (tier: directly observed).

**Detail:**
- The application is completed outside the product (tier: directly observed).
- No return path into the product after applying is shown (tier: unresolved).

*Cross-reference: O68.*

## Social

No observations. The session records no surface on which the user can see, interact with, compare against, or contribute alongside another identified person inside the product (tier: directly observed). The only surface involving another person is the referral link, which is recorded under Growth (tier: directly observed).

*Cross-reference: O70, O71, O72, O73.*

## Growth

**O70. Referral is the first item in settings.**

**Observed:** The settings screen places a "Refer friends" button at the very top, described by the analyst as large and prominent, ahead of the accounts group listing extra cash, checking and goals, an info group listing membership, linked banks and cards, edit profile and statements, an app settings group listing notifications, security settings and language, and a support group with FAQ and chat (tier: directly observed).

**Detail:**
- Referral outranks account, profile, security and support entries in the settings hierarchy (tier: directly observed).
- Four groups follow it (tier: directly observed).

*Cross-reference: O71, O74, O81.*

**O71. The referral reward is a larger future advance rather than cash.**

**Observed:** The referral screen reads "Earn up to $100 more on your second extra cash advance" and states that when the user and their friend repay an advance, the user will get 20% more next time (tier: directly observed). Controls are offered to share or copy a referral link (tier: directly observed).

**Detail:**
- The reward is an increase to the advance amount, not a payment (tier: directly observed).
- The stated increase is 20% (tier: directly observed).
- The stated ceiling is $100 more (tier: directly observed).
- The reward is attached specifically to the second advance (tier: directly observed).
- The reward requires repayment by both parties, not only sign-up (tier: directly observed).

*Cross-reference: O52, O72, O73.*

**O72. The boost is conditional, variable and expiring.**

**Observed:** Below the offer, the screen states that the boost amount is subject to change based on extra cash eligibility and approval amount, and that an earned boost expires after 60 days (tier: directly observed).

**Detail:**
- The stated 20% and $100 figures are qualified by eligibility and approval amount (tier: directly observed).
- The earned boost has a 60-day expiry (tier: directly observed).
- The expiry applies after the boost is earned, not to the referral offer itself (tier: strongly supported, the wording specifies the earned boost).

*Cross-reference: O71.*

**O73. The referral steps are framed as helping, with repayment as the qualifying event.**

**Observed:** A "How to earn" sequence lists four steps: take an extra cash advance and spend instantly on gas, bills or groceries; share a referral link to help out your friends and family; your friend repays an extra cash advance, and they will know as soon as they are approved; you get 20% more on your next advance, up to $100 more (tier: directly observed). Referral FAQs cover what an extra cash boost is, when the boost arrives after a friend signs up, and whether the boost has to be paid back (tier: directly observed).

**Detail:**
- Step one requires the referrer to have taken an advance before the referral can pay (tier: directly observed).
- The sharing step is worded as helping rather than as earning (tier: directly observed).
- The qualifying event is the friend's repayment, not their sign-up (tier: directly observed).
- One of the published questions asks whether the boost must be repaid, which the interface does not otherwise answer (tier: directly observed).
- The answers are not opened in the session (tier: unresolved).

*Cross-reference: O57, O71, O72.*

## Money

**O74. Membership is a small recurring charge that can be paused and resumed.**

**Observed:** The membership entry in settings shows the next bill date, the bill amount of $1, a monthly schedule, and the payment method (tier: directly observed). The analyst records that the membership can be paused and then resumed easily (tier: directly observed).

**Detail:**
- The amount is $1 and the schedule is monthly (tier: directly observed).
- Pause is offered rather than only cancellation (tier: directly observed).
- Resuming is available from the same surface (tier: strongly supported, the analyst describes pausing and resuming from this screen).
- What happens to the connected bank, alerts and budgeting tools during a pause is not shown (tier: unresolved).

*Cross-reference: O10, O12, O70.*

**O75. Advance delivery is the priced dimension, not the advance.**

**Observed:** Across the pre-account terms, the onboarding screen and the extra cash explanation, the advance itself is described without interest and the fee is attached to speed: two to three days for no fee, or instantly for a small fee, with express fees named for instant transfers (tier: directly observed).

**Detail:**
- The free path exists and is slower (tier: directly observed).
- The paid path is instant (tier: directly observed).
- No fee amount for instant delivery is stated on any screen observed (tier: directly observed).

*Cross-reference: O1, O9, O52, O53, O57.*

**O76. Funding the account is priced by source.**

**Observed:** In the add-money flow, a transfer from a bank account carries no fee while Apple Pay carries a 1% fee (tier: directly observed).

**Detail:**
- The free source is the slower one, arriving in four to five business days (tier: directly observed).
- The priced source is the immediate wallet route (tier: strongly supported, the wallet option is presented as an alternative to the multi-day bank transfer, though its arrival time is not stated).

*Cross-reference: O33.*

**O77. Cash deposits are priced by where they are made.**

**Observed:** Deposits at the two named retailers using a barcode scan are fee-free, while other locations may charge a service fee (tier: directly observed).

**Detail:**
- The free route requires both a specific retailer and the in-app barcode (tier: directly observed).
- The fee ceiling stated for other locations is not legible in the session record (tier: unresolved).

*Cross-reference: O18, O40.*

**O78. Check handling is priced by speed and delegated to a partner.**

**Observed:** Scanning a check is free at ten days or paid for instantly, sending a check is free and arrives within five business days, and the check-cashing itself is performed by a named partner (tier: directly observed).

**Detail:**
- The pricing pattern matches the advance: the free path is slow, the paid path is instant (tier: directly observed).
- The fee amount for instant check cashing is not stated (tier: directly observed).

*Cross-reference: O39, O75.*

**O79. Interest appears on the accounts without an application.**

**Observed:** The Accounts tab carries a banner reading "Congrats, you're now earning interest on your checking and goals account" with a "Learn more" control, and the analyst records that nothing was applied for (tier: directly observed). Both the Dave Checking card and the Goals screen display 4% APY (tier: directly observed).

**Detail:**
- The rate shown on both accounts is 4% APY (tier: directly observed).
- The benefit is announced as already active rather than offered (tier: directly observed).
- The conditions attached to the rate are not shown; the explanation sits behind "Learn more", which is not opened (tier: unresolved).

*Cross-reference: O38, O45.*

## Return triggers

**O80. The notification prompt bundles account alerts with offers.**

**Observed:** Choosing to be notified about eligibility raises a prompt reading "Turn on notifications. This helps Dave share real time account changes with you along with a few offers." with "Not now" and "Turn on" (tier: directly observed).

**Detail:**
- Two different message types are named in one permission request: account changes and offers (tier: directly observed).
- The account-change purpose is stated first and the offers second (tier: directly observed).
- The permission is requested at the moment the user has been refused a benefit and asked to come back tomorrow (tier: directly observed).

*Cross-reference: O54, O81.*

**O81. Notification categories are granular and mostly push-only.**

**Observed:** The notification settings allow setting a low balance alert to notify if the balance is predicted to fall below a threshold, and list categories for low balance alerts, daily balance alerts for the checking account, extra cash, special offers, product announcements and newsletter, each as push, with email named only in relation to the newsletter (tier: directly observed).

**Detail:**
- Six notification categories are listed (tier: directly observed).
- The low balance alert has a user-set threshold, shown at $40 in the session (tier: directly observed).
- The threshold is predictive rather than actual, worded as "notify if predicted below" (tier: directly observed).
- A daily balance alert exists as a separate category from the low balance alert (tier: directly observed).
- Promotional categories sit in the same list as account alerts (tier: directly observed).
- The default on or off state of each category is not shown (tier: unresolved).

*Cross-reference: O12, O80, O82.*

**O82. The low balance alert is one of the three things the membership fee buys.**

**Observed:** The bank connection screen names low balance alerts as one of the three things the $1 monthly membership fee provides, alongside keeping the bank account connected and providing budgeting tools (tier: directly observed).

**Detail:**
- A return trigger is sold as a membership benefit rather than presented as a default service (tier: directly observed).
- The alert depends on the connected external account (tier: strongly supported, the alert and the connection are named as parts of the same fee).

*Cross-reference: O12, O74, O81.*

**O83. Marketing SMS is consented to at the verification step.**

**Observed:** The consent to receive special offers and promotions by SMS is placed on the verification-code screen, using the number the user has just supplied for two-factor verification (tier: directly observed).

**Detail:**
- A second messaging channel is opened at a security step (tier: directly observed).
- The consent states it is not a condition of purchase (tier: directly observed).
- No promotional message is presented in the session (tier: directly observed).

*Cross-reference: O5, O6, O81.*

---

# Pass two: tagging

## Applied tags

**Tag:** Piggy Bank

**Observations:** O31, O32, O43, O45

**Supporting observations:** O18, O38, O46, O48, O49, O50

**Confidence:** strongly supported

**Rationale:** The product accumulates identifiable units of value in a reserve held separately from the account the user spends from, and it does so through repeated automatic contributions triggered by ordinary activity. Round-up amounts are taken from purchases made on the product's own debit card and roll into a Goals account that the product creates as a precondition of the automation (tier: directly observed). Goals is listed as its own account alongside checking and extra cash, carries its own available balance, and the product describes the release of that value as taking savings out (tier: directly observed). That the value is restricted from ordinary spending while it sits in Goals is not stated in a single sentence anywhere in the session; it follows from the account separation, the separate balance, and the described withdrawal action (tier: strongly supported). The library's own boundary case for an automatic round-up savings pot resolves in favour of this entry on the same structure, and the reserve holding real user funds rather than bonus rewards does not remove the invariant. The surface passes the engagement-design test independently of being stored value: the product creates the goal for the user, sets a default target, shows a progress bar, prompts a first deposit with minimising language, and offers recurring deposits framed as reaching goals faster (tier: directly observed).

**Variants present:** Automatic-contribution piggy bank, in that round-ups are added by the system when qualifying purchases occur (tier: directly observed). Direct-contribution piggy bank, in that the user can add money to a goal and set a recurring deposit into it (tier: directly observed). User-withdrawal piggy bank, in that the product states savings can be taken out at any time (tier: directly observed). Multi-reserve piggy bank, in that separate goals coexist and a new one can be created alongside an existing one (tier: directly observed).

**Variants not established:** Purchase-to-release, threshold-release, time-release and event-release, none of which appears, since no release condition beyond user withdrawal is shown (tier: unresolved). Matched-contribution and mirrored-value, since no system-added value accompanies a user contribution (tier: unresolved). Partial-release and all-or-nothing, since no withdrawal is performed in the session (tier: unresolved). Capacity-limited, since the $25,000 ceiling observed applies to the goal amount that can be set rather than to a demonstrated limit on the reserve balance (tier: unresolved). Expiring, resetting, shared and hybrid variable-release, none of which appears (tier: unresolved).

**Alternative considered:** That the Goals account is an ordinary savings sub-account and therefore commerce infrastructure carrying no mechanic label. The separating evidence would be whether the Goals balance can be spent directly, for example by card or bill payment, without a transfer back to checking. If it can, the reserve is not restricted and the entry does not apply. The session does not test this, which is why the restriction sits at strongly supported rather than directly observed.

**Tag:** Earning Tasks

**Observations:** O58, O59, O61

**Supporting observations:** O60, O62, O63, O64, O65, O68

**Confidence:** strongly supported

**Rationale:** The product presents, inside its own Grow tab, a catalogue of discrete compensated tasks supplied by a named third party, inBrain AI, and directs payment into the product's own checking account (tier: directly observed). Each listed survey carries both a payout and an estimated completion time before the user begins it, which is the entry's per-task disclosure of compensation and effort; the payout figures for the longer recommended surveys are not legible in the session record, but the quick surveys are listed at $0.45 for about 8 minutes and $0.50 for about 10 minutes and the listing form is the same for every item (tier: directly observed). The catalogue is presented as a repeatable activity rather than a concluded one: a further list is offered after the intro questionnaire, and a disqualified survey is removed while the rest of the list remains (tier: directly observed). The tasks are separate from the product's own core activity of banking, advances and saving (tier: directly observed). The entry requires at least one continuation element layered over the individual tasks, and three are present: a monthly earnings total displayed above the list, an ordered division of the catalogue into recommended, other and quick-survey sections, and the stated progression that higher paying surveys unlock as the user continues (tier: directly observed). The entry's own borderline case describes this exact configuration and resolves in favour of the label. The commercial arrangement itself is excluded by the entry and carries no label here: the supplier relationship, the terms toggle, and the deposit into the checking account are commerce infrastructure and are described in Pass One in plain language (tier: directly observed).

**Variants present:** Third-party-supplied panel, in that the surveys are attributed to inBrain AI (tier: directly observed). Survey panel, in that every listed task is a questionnaire (tier: directly observed). Monetary-payout panel, in that compensation is paid in dollars into the product's checking account (tier: directly observed). Period-total panel, in that earnings for the month are displayed above the list (tier: directly observed). Tiered panel, in that the catalogue is divided into recommended surveys, other listed surveys and quick surveys (tier: directly observed). Quick-task tier, in that the short low-payout section sits alongside the longer ones (tier: directly observed). Stated-progression panel, in that the introduction states higher paying surveys unlock as the user continues without naming a rule (tier: directly observed). Recommended-task panel, in that a personalised subset is presented (tier: directly observed). Profiled panel, in that an intro questionnaire collects seven attributes before the catalogue is fully available (tier: directly observed). Terms-gated panel, in that the user must turn on a toggle accepting the provider's terms and privacy policy before starting (tier: directly observed). Screened task, in that a survey ends partway through when the provider determines the user is not the intended respondent (tier: directly observed). Partial-compensation rule, in that a reduced reward is disclosed in advance for a survey that ends early (tier: directly observed). Attrition listing, in that the disqualified survey is no longer shown on return to the list (tier: directly observed). Fixed-payout task, in that each listed survey's payout is stated in advance and does not vary with the length of the user's participation once completed (tier: directly observed). Variable-payout task, in that disclosed conditions reduce compensation, namely the partial reward on disqualification and the warning that answering carefully secures the full reward (tier: directly observed). Featured panel placement, in that the product's own survey surface occupies the first, featured position in the third-party job list (tier: directly observed).

**Variants not established:** Product-operated panel, since the tasks are supplied by a named third party (tier: directly observed). Micro-task panel, since every listed task is a survey (tier: directly observed). Unit-payout panel, since compensation is denominated in dollars (tier: directly observed). Lifetime-total panel, since the displayed total is bounded to the month (tier: directly observed). Threshold-progression panel, since no count, earnings level or other condition for the unlock is stated (tier: unresolved). Immediate-payout, deferred-payout and minimum-payout, since no payout is observed at any point; the introduction states payment is instant to the checking account, but nothing shows it arriving (tier: plausible).

**Alternative considered:** That the surveys are a payment arrangement rather than a designed earning loop, and therefore commerce infrastructure to be described in plain language under the entry's first exclusion. The separating evidence is whether a continuation element exists independently of the payment relationship. Here it does: the monthly total, the tiered sections and the stated unlock are product-side presentation that would remain if the payout amounts were unchanged, which is what the exclusion carves out as classifiable. Rewarded Advertisement was also considered and set aside, since compensation follows performance of the survey rather than engagement with a promotional unit.

**Tag:** Referral Boost

**Observations:** O71, O72, O73

**Supporting observations:** O52, O54, O70

**Confidence:** strongly supported

**Rationale:** The product identifies the user as someone who can introduce another person and provides the route, offering controls to share or copy a referral link (tier: directly observed). It defines an action the referring user performs and can perform again, the extra cash advance, and it requires a completion event from both parties: the referring user must have taken and repaid an advance, and the introduced person must repay one, with the product stating explicitly that the qualifying event is the friend's repayment rather than their sign-up (tier: directly observed). Satisfying both conditions grants an enhancement expressed relative to the referring user's own future advance, 20% more up to $100 more, which is a larger amount of the same action rather than a payment (tier: directly observed). Nothing in the session presents the boost as a balance, credit or item the user could hold, spend or transfer; the product describes it only as more on an advance (tier: directly observed). That the enhancement is realisable only by taking another advance, and not separable from it, follows from that framing rather than from any observed application (tier: strongly supported). The entry's own borderline case covers a boost described in copy but never seen operating and resolves presence in favour of the label under the operating card's presence standard, which is why the tag is applied at strongly supported rather than withheld; how the boost is actually delivered is recorded as unresolved below.

**Variants present:** Proportional enhancement, in that the increase is stated as 20% (tier: directly observed). Capped enhancement, in that a $100 ceiling is stated (tier: directly observed). Expiring enhancement, in that an earned boost is stated to expire after 60 days (tier: directly observed). Capacity enhancement, in that the enhancement raises the amount available in the advance (tier: directly observed). Prior-use-gated referral, in that step one requires the referring user to have taken an advance before any referral can pay (tier: directly observed). Settlement-qualified referral, in that the qualifying event on both sides is repayment rather than initiation (tier: directly observed). Eligibility-qualified enhancement, in that the boost amount is stated to be subject to extra cash eligibility and approval amount (tier: directly observed). Link-based referral, in that the introduction is made through a link the product generates (tier: directly observed). Designated-instance enhancement, in that the headline attaches the reward to the second advance (tier: plausible, the headline names the second advance while the fourth step says the next advance, and the session does not settle which governs).

**Variants not established:** Next-instance enhancement, for the same reason the designated-instance reading is only plausible: two different wordings appear on one screen and neither is tested (tier: unresolved). Fixed enhancement, uncapped enhancement and persistent enhancement, each contradicted by the stated proportional, capped and expiring terms (tier: directly observed). Rate enhancement and scope enhancement, since the stated change is to the amount rather than to a rate or a term (tier: directly observed). Multi-instance enhancement, stacking referral reward and non-stacking referral reward, since nothing states how more than one qualifying referral behaves (tier: unresolved). Automatically applied enhancement and claimable enhancement, since no boost is earned or applied (tier: unresolved). Notified enhancement, since the only notification wording concerns the friend learning of their own approval, not the referrer learning the boost is earned (tier: unresolved). Limited referral, since no cap on qualifying referrals is stated (tier: unresolved). Code-based referral, since the observed route is a link (tier: directly observed). Asymmetric qualifying actions, since both parties' qualifying action is repayment of an advance (tier: directly observed). Two-sided referral boost, since nothing states what the introduced person receives (tier: unresolved).

**Alternative considered:** That the boost is a held credit the user could apply elsewhere, in which case the entry's second exclusion sends it to the applicable currency or credit entry instead. The separating evidence is a session in which a boost is earned and the referring user then takes an advance: if the enhancement appears as a credited balance or as a payment separable from the advance, this tag should be withdrawn. Gifting was also considered and set aside, since the sender directs no benefit to the recipient and neither party's balance changes by an act of the sender.

## Entries considered and not applied

- Cosmetic Customization. The goal banner image (O47) is customization of one element of a feature rather than cosmetic presentation, so the entry does not apply. The image is a property of a user-created goal object within the savings feature, chosen to represent that goal, and the surface it sits on is the goal's configuration alongside its title and amount (O44). The entry describes presentation state maintained as cosmetic content in its own right, which this is not.
- Advertisement Exposure. The session records a promotional channel but never a presented promotional unit: an SMS marketing consent (O83), a notification permission that names offers (O80), and a "special offers" notification category (O81). The entry's first required condition is that the product presents an identifiable content unit, and no such unit is shown at any point. The product's own upsell screens for its checking account and direct deposit (O17, O18, O25, O30) are separately excluded by the entry's rule that a product's promotion of its own offerings is not advertisement exposure. The featured placement of the product's own surveys inside the job list (O68) is excluded on the same ground and additionally by the entry's rule on promoted placement inside the product's own lists; that placement is carried as a variant of Earning Tasks.
- Rewarded Advertisement. The survey payouts (O59, O61) are conditional on completing a survey, not on engaging with an advertisement. The entry's own separation of a sponsored task from a rewarded advertisement places this outside the label: the benefit is granted for performing an activity, not for viewing or interacting with a promotional unit. The surface is carried by Earning Tasks, which sits on the task side of the same separation.
- Challenge. The surveys (O61, O63) are the closest surface, but the session establishes no bounded objective instance. No deadline, attempt limit, session boundary or participation window is shown for a listed survey, and its availability is not period-bounded. The one instance that concluded did so through disqualification by the provider (O64) rather than by reaching a challenge boundary, which is not the completed-or-not-completed structure the entry requires. Earning Tasks excludes the same case on the same reasoning and carries the surface.
- Daily / Weekly Quests. No objective is issued, refreshed or released on a daily or weekly cadence anywhere in the session. The monthly earnings total on the survey list (O61) is a display of accumulated earning, not a period-issued objective, and the next-day eligibility retry (O54) re-evaluates a condition rather than releasing an objective with a completion state. The survey catalogue's contents change as tasks are exhausted rather than on a period cadence, which Earning Tasks treats as outside this entry.
- Variable Reward Outcome. The disqualification rule (O59) states that an early-ending survey yields a partial reward, which raises the question of two materially different results for one reward event. It is not applied because the full payout for each survey is fixed and displayed in advance (O61), the difference between full and partial follows a disclosed condition rather than an undetermined selection, and no reward resolution of any kind is observed in the session (O64). The entry's own separation of a conditional reward from a variable outcome places this on the conditional side, and the disclosed condition is carried as a variant of Earning Tasks.
- Variable Reward Schedule. Nothing in the session makes whether or when a reward occurs unpredictable in the way the entry requires. Survey payouts follow completion, and the eligibility retry (O54) concerns access to a borrowing product rather than a reward contingency.
- Achievement. The confetti at the end of the profiling questionnaire (O62) is the only celebratory recognition in the session, and it marks the end of a form rather than a criterion the product preserves as attained. No attained state is recorded, displayed or referenced afterwards, which the entry requires.
- Spendable Credits and Tokens. Every balance in the product is denominated in dollars: checking, goals, extra cash and the external account (O38). The entry explicitly excludes balances denominated in real currency, so no unit here qualifies as product-specific spendable units.
- Soft Currency. Survey earnings are paid into the checking account as money (O59), and the entry explicitly excludes balances representing legal tender, bank deposits or stored monetary value. No product-defined unit with a non-paid acquisition path exists.
- Hard Currency. The product defines no currency of its own that can be bought. Money added to the account by card or wallet (O33) is the user's own funds moving between accounts, not the acquisition of a product-defined unit.
- Gifting. The referral (O71, O73) is the only surface involving another person's benefit, and the entry excludes exactly this case: the recipient earns a benefit by completing a referral action, and the sender does not directly grant it. Neither party's balance is changed by an act of the sender. The surface is carried by Referral Boost, whose exclusions draw the same line.
- Monthly Reward Card. The $1 monthly membership (O74) is a recurring charge that buys continuous access to a bank connection, alerts and budgeting tools (O12). The entry excludes an entitlement that provides only continuous access or feature availability without creating multiple interval-based reward opportunities, and no interval reward is observed.
- Passive Construction. Round-ups advance a savings balance without repeated direct action (O31), which resembles activity-fed advancement. It is not applied because the entry requires a persistent constructed entity with distinguishable pre-construction and completed states, and the Goals balance is accumulated stored value rather than an entity that is created or upgraded. This behaviour is already carried by Piggy Bank.
- First-Purchase Bonus. No bonus is attached to a first qualifying purchase anywhere in the session. The referral boost (O71) attaches to a second advance and is triggered by two parties repaying, not by a purchase, which is the same ground on which Referral Boost excludes this entry.
- Energy. The extra cash FAQ names a question about why another advance cannot be taken immediately (O57), which points to some limit on repeat use. It is not applied because no bounded capacity, no consumption event and no replenishment rule is shown; only the question title is visible and its answer is not opened.
- Set Collection. Goals can be created repeatedly (O46) and past goals are retained (O50), but the product defines no set with identifiable members whose completeness changes as members are acquired. Goals are user-created containers, not members of a defined group.
- Leveling. The survey panel's tiers (O61) and its stated unlock (O59) were checked against this entry, since Earning Tasks names it as a label that can co-occur. It is not applied because the sections are a division of the catalogue rather than an ordered series of discrete states the user is assigned to and moved between, and no state, position or advancement rule is shown anywhere on the surface.

## Unresolved

**Milestone (O43, O45).** The product maintains an ongoing savings measure and defines a threshold within it: a goal amount, set by the product at $75 by default and editable by the user, with a progress bar representing position against it. What the session does not show is whether reaching that amount produces any observable system response distinct from an ordinary balance update. The entry's exclusion is explicit that setting a future target without recognising its crossing is not a milestone, and its final clause directs an unresolved classification when the product's recognition of reaching the point is not established. Reaching the threshold sits behind a condition the session did not meet, since no goal was funded past zero. What would resolve it: any session in which a goal balance reaches its target amount, showing whether a message, marker, record or state change follows.

**Extra Cash advance behaviour (O54, O57).** The advance is the product's headline and is observed to exist through the product's own framing on three separate surfaces, but it is locked behind an eligibility determination the session never passed. What is behind the gate, named but not seen: how the advance is received, how it is repaid, why the balance goes negative, why a further advance cannot be taken immediately, why an advance amount changes, what fees apply, and what happens when settlement is late. No mechanic label is assigned to any of it, because nothing beyond the account shell and the published question titles was observed.

**Survey unlock progression (O59, O61).** The panel itself is tagged as Earning Tasks on the product's own framing, and the stated unlock is recorded there as the entry's stated-progression variant. What remains unresolved is the progression's operation. No threshold, count, earnings level or other advancement rule is stated, no unlock is observed, and whether the tiers reorder or expand as participation continues is not shown. Whether the monthly total is what drives the unlock, or whether the sections are a static segmentation of the catalogue by length with no advancement rule behind them, is also not established. What would resolve it: a session in which the completed-survey count or the period total increases and the listing is then re-examined.

**Referral boost issuance (O71, O72, O73).** The referral offer is tagged as Referral Boost on the product's own framing of the rule sequence. What remains unresolved is the reward's delivery form and its operation. The boost is conditioned on the referrer having taken and repaid an advance and on a referred friend repaying one, neither of which occurs in the session, and the eligibility gate on the advance (O54) sits upstream of the entire referral loop. Nothing shows whether the enhancement is applied automatically or claimed, whether it stacks across referrals, how the $100 ceiling interacts with the approval amount, whether the 60-day period runs from the qualifying repayment or from the boost becoming available, or whether the second-advance and next-advance wordings describe the same instance. What would resolve it: a session in which a boost is earned and the referring user then takes an advance. If the enhancement appears as a credited balance the user could apply elsewhere, or as a payment separable from the advance, the tag should be withdrawn and the reward classified under the applicable currency or credit entry.

## Entries never observed

- Clan / Guild. The product represents no persistent member-based group with its own identity or group-level state.
- Community Space. No shared product context exists in which multiple actors can contribute or participate.
- Comparative Rank. The product never places the user in an ordered position relative to other entities.
- Daily Login Rewards. No benefit is granted or made claimable for accessing the product within a daily window.
- Experience Points. No units of progression value are granted for activity or accumulated toward an advancement threshold.
- Group Membership. The product places the user in no system-recognised group and maintains no membership list.
- Leaderboard. No ordered list of comparable entities appears on any surface.
- Lives. No continuation units are removed on failure; the disqualified survey (O64) removes an offer, not a unit of permission to continue.
- Loot Box. No acquired container or draw with contents unknown before commitment appears.
- Season Content Pass. No entitlement grants access to content grouped under a season, event or release cycle.
- Seasonal Progression Pass. No time-bounded progression track with ordered thresholds appears.
- Social Feed. No sequence of content or activity items associated with multiple actors appears.
- Streak. The product tracks no uninterrupted sequence, and no surface distinguishes continuous activity from the same activity containing a gap.

---

# Pass three: proposed new tags

### Scheduled eligibility re-check

**Draft definition.** When a user requests a gated benefit and does not qualify, the product declines without closing the request, names a recurring interval at which the decision will be reconsidered, and offers a notification for the moment eligibility changes.

**Source observations:** O54, O56, O80.

**Conditions it appears to depend on:** A benefit gated by a system-evaluated eligibility rule; a decision the product will re-evaluate rather than treat as final; a named interval short enough to be actionable; a notification opt-in offered in place of the withheld benefit; a stated or implied route by which the user can change the input the decision depends on.

**Why it is not covered.** No approved entry describes a refusal that carries a return date. Daily Login Rewards requires a benefit granted for access rather than a re-evaluated decision. Daily / Weekly Quests requires an objective instance with a completion state, and no objective is issued here. The behaviour is a return trigger built on a pending decision rather than on a reward or a task.

**Recurrence elsewhere:** Lending, credit-limit increases, insurance underwriting, marketplace seller eligibility, waitlists and account-upgrade flows all decline provisionally and invite a return. The structure is describable without reference to this product.

**Caveat.** The session observes the refusal, the named interval and the notification offer, but not a single re-evaluation. Whether the decision is genuinely reconsidered daily, and whether the interval is a real cadence or a phrase, is not established.

### Assisted external redirection

**Draft definition.** The product provides several parallel routes for completing a required action inside a third-party system it does not control, including at least one route in which the product generates the paperwork on the user's behalf, and offers a partial-commitment option so the user need not move the whole of the thing being redirected.

**Source observations:** O35, O36, O37.

**Conditions it appears to depend on:** An action outside the product's control that materially changes the product's value to the user; more than one route to that action, differentiated by effort or speed; a route in which the product does the work and the user only supplies identifying details; an option to commit part rather than all; a statement that the choice can be changed later.

**Why it is not covered.** No approved entry addresses the product assisting an action performed in another system. The behaviour is not a quest, a challenge or an achievement, because the product neither issues an objective nor records a completion state; it reduces the cost of a step it cannot perform.

**Recurrence elsewhere:** Payroll redirection, utility and insurance switching, subscription migration, number porting and pension transfer flows all take this shape. The structure is describable without reference to this product.

**Caveat.** The session shows the routes and the partial option but no completed redirection, and it does not show how the partial amount is specified. Whether the pre-signature checkbox is on by default is also not established, and that default bears on any definition of the assisted route.

---

# Close: system view

The product is organised so that one connection decision made during onboarding governs almost everything that follows.

Connecting the account the user is paid into (O9, O13) is the input to the eligibility determination for the advance (O56), which is the product's headline offer on its first unauthenticated screen (O1) and again on its own tab (O51). That same connection is one of the three things the $1 monthly membership is said to pay for (O12), and the membership also pays for the low balance alert (O82), which is the product's most frequent reason to reopen the app (O81). The membership charge is authorised on the connection screen itself (O10), so the fee, the connection and the eligibility path are agreed in one action.

The advance sits behind a gate the session never passed (O54). Everything downstream of it therefore also sits behind that gate. The referral reward is not cash but a larger next advance (O71), and its first qualifying step is that the referrer has taken an advance (O73), so the growth loop cannot start until the eligibility loop resolves. The settlement mechanism for an advance is the next paycheck (O52) and the linked debit card (O15), which gives the direct deposit flow (O35, O36, O37) a second function beyond the two-days-early claim it advertises: it makes the paycheck arrive where settlement happens.

The savings side runs on a different dependency. Round-ups are triggered only by purchases on the product's own debit card (O31), which requires the checking account (O17 to O23), which requires the identity verification sequence (O19, O20, O21). Round-ups in turn require a Goals account (O32), so the savings container exists as a precondition of the automation rather than as something the user asked for, and the first goal arrives already created with a $75 target and round-up switched on (O43). Ending a goal cascades back into that automation, pausing round-ups and cancelling recurring transfers (O49), and the product answers the cascade immediately with an offer to restart it by creating another goal (O50). The savings surface and the spending surface are therefore coupled in both directions: spending feeds saving, and removing the savings target switches the feeding off.

The Grow tab connects the two halves. Survey earnings are paid into the checking account (O59), which is also the settlement point for advances and the source of round-ups, so a user who earns in Grow is funding the same account that both the saving automation and the borrowing settlement depend on. The job board within Grow points outward (O69), but its featured position is occupied by the product's own survey surface (O68), which points back in.

Dependencies worth stating plainly. O54 depends on O9, O13 and O56. O71, O72 and O73 depend on O54. O31 depends on O17 through O23 and on O28. O43, O45, O46, O47 and O48 depend on O32. O49 and O50 depend on O31 and O34. O82 depends on O12 and O13. O59 and O61 depend on O23. O35, O36 and O37 depend on O23 and feed O52.

What the session cannot say. It observed no advance, no repayment, no referral boost, no goal reaching its target, no survey completing and no notification arriving. Six of the nine dependency chains above terminate in behaviour that was never seen, and every one of them terminates at the same place: the eligibility decision the product deferred to tomorrow.
