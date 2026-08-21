# DoorDash

**ID:** doordash
**Category:** Food and grocery delivery marketplace
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** July 29 (the transcript states "today is July 29th"; the Granola session is dated Jul 29, 2026)
**Last updated:** 2026-08-21
**Session state:** First install, signed out for most of the session, then signed in with Apple partway through
**Sessions used:** "DoorDash iOS app review", Jul 29, 2026

## Overview

DoorDash is a delivery and pickup marketplace for restaurants, groceries, convenience, drugstore, retail, pets and gifts. The session shows the app working to get the user to place an order: it lets the user browse and build carts before creating an account, then requires sign in or sign up at checkout. A second thread runs alongside the ordering flow, in which the app asks the user to contribute reviews and photos to store pages and presents a badge track for doing so.

## First impression

The first screen asks for a phone number, with "use email instead" underneath, plus continue with Google, Facebook or Apple, and a "search nearby" button. The narrator taps "search nearby", which starts a loading state rather than an account flow.

Four system-level prompts follow in sequence before any content appears:

1. A DoorDash-authored screen about activity tracking, rendered in the transcript as "see personalized offers by allowing activity tracking. Activity tracking lets us personalize the offers and deals you'll see in DoorDash ads on your favorite websites and apps. Discover restaurants, dishes and stores you like. Get more relevant offers. You're in control. Turn off sharing anytime you want", with a continue button, followed by the iOS app tracking prompt.
2. The iOS location prompt, framed as "DoorDash needs your location to show nearby stores". The narrator declines it because they are not in a country DoorDash serves, and types an address instead. A "sign in for saved address" option sits beside the address field.
3. A DashPass pop-up after the address is saved, described below under Monetization observed.
4. A notification prompt, rendered as "never miss an order update or great deal. Turn on notifications to get the latest on your order and discover deals from your favorite local businesses. You can configure these later in settings."

The address flow is the first substantial piece of setup. After a Canadian address is chosen, the app asks for an address type (house, apartment, hotel, office, other). The narrator observes that when the pin lands on a registered business, the app preselects "office" on its own; otherwise it asks. The office selection then produces delivery preference fields specific to offices: leave it at a location (lobby, office, suite, floor), meet at a location (lobby, office, suite, floor, outside), free text delivery instructions, a suite or floor field tagged "recommended", a business name field tagged "recommended", a building entrance pin, and a personal label (home, work, custom). The same screen carries an "I'm sending a gift. Add a card and note at checkout" option with an info button.

The first mechanic moment in the session is not a mechanic from the library. It is the DashPass benefit pop-up, which appears immediately after the address is saved and before any store has been seen.

The narrator notes that the home screen greets the user with "Happy Wednesday" followed by a comma and an exclamation mark with no name in between, and that nothing in onboarding asked for a name. That observation is the narrator's, recorded here as an observation about the transcript rather than as a classification.

## Core activity

The session is a browsing and cart-building walkthrough, not a completed order. The user sets an address, scrolls a long home screen of merchant carousels and offers, opens category tabs (deals, grocery, convenience, pickup, drugstore, gifts, retail, pets), opens a store page, uses an AI search feature that turns a photographed recipe into a shopping list, adds items to two carts, and then reaches a sign-in wall at checkout. After signing in with Apple, the user explores the profile, settings, saved stores, rewards and the contributor profile.

## Mechanics observed

### Achievement · Supporting · confirmed

**What was observed:**

Reached through the profile button, then settings, then "view profile", then an "Earn a profile badge" button beside the user's name. The screen is titled "profile badges" and the transcript renders its copy as "Earn badges and gain influence on DoorDash."

The first badge is "emerging expert", shown at "0 out of 3", with the criterion rendered as "share high quality reviews or photos for 3 stores" and three stated benefits: "gain more visibility for your contributions", "be a reliable voice for other customers", "gather support for local business."

Beneath it sits a second badge the narrator describes as fogged over, greyed out and locked: "local expert", with the criterion "share high quality reviews or photos for 10 plus stores" and the stated benefits "be top ranked and seen by the most people", "represent the most trusted voices", "make a real difference for local businesses."

The user's contributor profile shows "0 contributions" and the copy "all contributions will appear once they're approved."

No badge was attained during the session, so the attainment event, any record of an attained badge, and the effect of an attained badge on the profile were not observed. Whether the 0 out of 3 counter is fed by a separately maintained count of stores reviewed, or exists only inside the badge, is not established by the transcript.

**How it is presented:**

Three levels deep from the home screen, inside the profile settings rather than on any ordering surface. A pop-up on the contributor profile promotes the system, rendered as "find the voices you trust more easily. Find local experts, people on DoorDash that you can count on to provide great reviews and recommendations", with three scrollable panels: "share your thoughts. Become a trusted voice by sharing reviews and earning badges", "now you'll see all of your contributions in one place", and "what's visible on your profile. Your public contributions are visible on this page. You can make it restricted anytime with added profile."

**Classification basis:**

The entry's core invariant requires a defined criterion that moves from unattained to attained and is observably recognized. DoorDash defines two criteria (3 stores, 10 plus stores), evaluates contributions against them (the 0 out of 3 counter, the approval note), presents the attained state as a badge distinct from the underlying contribution count, and shows one criterion as locked and one as in progress. Presence is asserted under the operating card's presence standard: the product frames these as badges to be earned, with criteria and progress state visible. Exclusions checked: the surface is not a cumulative count alone, since a separate badge state is defined; it is not a subscription tier, role or account label; and it is not an automatic unlock tied to a current progression state. Milestone, Leveling and Experience Points were checked and excluded, with reasons recorded in Analysis notes.

**What is notable:**

The badge criteria are the only place in the session where DoorDash sets a numeric target for user behaviour of any kind. Everything else the app asks of the user is a transaction.

**Screenshot suggestions:**

- The profile badges screen showing "emerging expert" at 0 out of 3 above the greyed-out "local expert" tier. It evidences the criterion, the progress state and the locked second tier in one frame.
- The contributor profile showing "0 contributions" with the "Earn a profile badge" button. It evidences the counter the badge criteria are evaluated against.

### Comparative Rank · Supporting · plausible

**What was observed:**

Store cards on the home screen can carry a black tag the narrator identifies as "customer favorite" (the example given is Booster Juice). Tapping that tag opens a dedicated screen whose copy the transcript renders as "customer favorites top ranked in your area based on customer ratings, popularity and reliability."

The screen carries two filter tags, "open now" and "delivers to me", and lists six stores for the address used in the session. Each row shows the store name, its rating, the number of people who rated it, delivery time, distance, and quoted customer comments. The narrator notes that the quoted comments include negative ones ("no extra cheese on the pizza when I ordered it. Barely any pepperoni. Lots of sauce though soggy, no sauce on the wings") and that reviews are "not really sorted in any way". A second speaker adds that some reviews date from 2020, 2024 and 2023.

Whether the six stores are displayed in rank order, and whether any position number is shown, is not stated in the transcript. The exact rule that selects the set is not stated beyond the three named measures.

**How it is presented:**

As a tag on store cards inside ordinary browsing carousels, and as a filterable screen behind that tag. The narrator notes that other tags on the same cards (the red offer tags, and "in store prices") are not tappable, so "customer favorite" is one of the few tappable tags observed.

**Classification basis:**

The entry requires a comparison set, at least one defined comparison measure, an ordering rule, a communicated position for the relevant entity, dependence on other entities' values, and a defined scope. The comparison set is stores, the measures are named on screen (customer ratings, popularity, reliability), the scope is stated ("in your area"), and the position is communicated as a bounded placement rather than an ordinal, matching the entry's bounded rank variant. Leaderboard was checked first and excluded: the session does not establish that the six listed stores are presented in relative order by those measures, and the Leaderboard entry directs that in the absence of an observed ordered presentation the observable position is classified as comparative rank. Confidence is held at plausible because the ordering rule and the dependence of a store's inclusion on other stores' values are inferred from the on-screen copy rather than observed, and the entry warns against classifying from words such as "top" alone.

**Plausible alternative:** "customer favorite" may be an absolute quality status assigned from fixed thresholds (for example a rating floor plus an order-volume floor), which the entry excludes from comparative rank. Two observations would separate the readings: seeing position numbers or an explicit ordering on the customer favorites screen, and seeing the set change composition as other stores' ratings change while a given store's own values stay the same.

**Screenshot suggestions:**

- The customer favorites screen with its heading copy, the two filter tags and the list of six stores. It evidences the named measures, the stated scope and the bounded set.
- A home screen store card carrying the "customer favorite" tag beside untagged cards. It evidences where the placement is communicated during ordinary browsing.

### Gifting · Shallow · strongly supported

**What was observed:**

The gifts tab opens a screen with a "search gifts" bar, filter tags (pickup, ratings, under 30 minute, price, DashPass), and a "send a gift card" section. The transcript renders the contents of that section as "DoorDash gift cards, featured gift cards, dash pass subscription. All of these can be gifted." Below it are a "kids top picks" section of featured toys and an all stores section.

Elsewhere in the session the profile settings contain a gift card entry, rendered as "connect your favorite people with their favorites from noodles to nachos", with "customize and buy gift card", a design choice, a "buy gift card" button and a separate "redeem a gift card" flow with a gift card pin field.

The sending flow itself was not entered. Recipient identification, delivery, the recipient's resulting state, and whether a gifted DashPass subscription is claimable or immediate were not observed.

**How it is presented:**

As one item in a gift card list inside the gifts category, alongside currency-denominated gift cards. The gifts category is one of the shortcut tabs in the top slider on the home screen.

**Classification basis:**

The entry's invariant requires a sender directing a non-reciprocal product-defined benefit to an identified recipient. A DashPass subscription is an access right, and the entry's exclusion clause names gifting a subscription as inside the mechanic's scope while placing gift delivery of physical goods and currency-denominated gift cards outside it. Presence is asserted from the product's own framing of the DashPass subscription as giftable. Two evidenced neighbouring surfaces were checked and excluded: the "I'm sending a gift. Add a card and note at checkout" option in the address flow is gift delivery of a physical order, and DoorDash gift cards are currency-denominated gift cards. Both are excluded by the entry and are described in plain language below instead. Confidence is strongly supported rather than confirmed because the giftable state of the subscription is taken from the narrator's rendering of the section rather than from an observed send.

**Screenshot suggestions:**

- The "send a gift card" section of the gifts tab showing the DashPass subscription listed beside the gift cards. It evidences the one item in that section that satisfies the entry.

## Observed behaviors without a library label

**Store reviews, photos and the contributor profile.** Store pages carry ratings, a rating count, public reviews, customer photos and a store info panel. The user has a contributor profile with a first name, last initial, a shareable link, an edit screen, and a "restricted profile" toggle that is off by default. The transcript renders the toggle's explanation as "when your profile is public, anyone can see your profile ratings and public reviews, including people who are ordering in your neighborhood. When your profile is restricted, it will only display your first name, last, initial and number of public contributions, but not the contents of those contributions." Contributions are approved before appearing. The Community Space entry excludes reviews, ratings and photos attached to commerce listings and directs that they be described in plain language pending a dedicated entry, so no label is applied here. The badge track built on top of this system is classified above as Achievement.

**DashPass.** A subscription presented repeatedly through the session. Its stated benefits are CA$0 delivery fees and lower service fees on eligible orders, member exclusive deals, family sharing ("share your benefits with family sharing. Add a loved one for free"), 5% back in DoorDash credits on eligible pickup orders, and cancel anytime. It provides continuous fee and access benefits rather than recurring interval rewards, so Monthly Reward Card does not apply.

**DoorDash credits.** Present as a line in the payment settings with a "redeem gift card" button beside it, and as the currency in which the DashPass pickup benefit is denominated. The my rewards screen shows "redeemed a total of $0". The balance is denominated in money rather than in product-defined units, which the currency entries exclude, so no currency label is applied.

**PC Optimum partnership.** An animated card on the home screen, rendered as "get 2000 welcome points. When you order $20 plus you get by linking your PC Optimum account", with a "link now" button that opens a PC Optimum login. The same offer reappears as a card inside the deals screen and as "partner rewards" in the my rewards screen. The points are a partner's loyalty currency; no DoorDash balance, spend rule or tracked completion state was observed.

**Promotional offers and codes.** Throughout the session: "$0 delivery fee for the first order", "$5 off on $40 plus order", "buy one get one free", "free item on 20 plus dollars spent" at McDonald's, "25% off up to $15", "get 30% off on an order of $55 from select pet stores" with a use code and a stated end, "get 25% off on a convenience order of $25", and after sign-in a code the transcript renders as "surprise40" for "40% off your first order for your first 30 days". These are price conditions attached to transactions. None showed a tracked active, completed or expired objective state, so Challenge was checked and not applied.

**Group order.** A store page offers "start a group order", explained as "easily share order with friends and family so each person can add items, then pay once and get it all delivered together", with a per person spending limit (no limit, $10, $15, $20, other), a name and phone form for the initiator, a copyable invite link with email, message and other share routes, a "view group order" screen, and a persistent banner with an invite button. The group exists for one order, so Group Membership was checked and excluded as a temporary transaction grouping.

**Saved stores.** Tapping the heart on a store page produced a pop-up rendered as "you've saved your first store", followed by a tag the narrator says "somehow just disappeared on its own". Saved stores appear as a section in the profile with a "new" tag. No preserved attained state, criterion, or defined set was observed, so neither Achievement nor Set Collection is applied to this surface, and the disappearing tag is recorded as ambiguous rather than resolved.

**Search by Vibe.** A search entry point the transcript renders as "a better way to search. Just ask", which opens a beta AI feature labelled "search by Vibe" with the prompt "what are you in the mood for" and a note that it "is a beta AI feature making mistakes" and "may be used to personalize your experience". It has a chats button with a chat history, empty in this session, and a "snap your grocery list or recipe" camera option. The narrator photographed a Boeuf Bourguignon recipe; the feature returned "shopping at Sobeys for you", "found 11 out of 11 items", a swap or remove control per item, an add to cart button, three suggestion tags ("add bay leaves for bouquet garni", "serve with crusty bread", "make it a day ahead"), and a note that Sobeys does not carry a Burgundy style red wine so a cooking wine substitute was added.

**Grocery item detail.** Items show stock state ("many in stock", "likely out of stock"), a "request" control in place of an add control for some items, an "add shopper instructions" field, and a substitutions setting (any similar item, substitute with specific items, contact, refund). A "freshness guaranteed or your money back" tag opens a pop-up rendered as "100% fresh or your money back", with refund instructions.

**Payment settings.** Card, Apple Pay and PayPal options, a payment frequency setting ("combine orders into fewer payments" or "pay after each order") with a stated list of ineligible methods and order types, and a backup payments toggle described as "automatically use another saved payment method if there's an issue with your default payment method".

**Business profile.** A separate profile for expensing meals with its own payment method, described as keeping business orders separate.

**Marketing settings.** A privacy section with restricted profile, location access, microphone access and marketing choices, the last opening a disclosure about sharing identifiers and usage with advertising partners for personalized ads on third party platforms. The narrator states that it is turned on by default.

**Map-based pickup.** The pickup tab opens a map, introduced by a pop-up rendered as "discover your neighborhood with the new map", with filter tags (open now, pickup, DashPass, ratings, price), price rating symbols, walking distance, opening state, and a tag reading "5% back on pickup orders with DashPass". The narrator notes that some store types, including a corner store and supermarkets, did not appear with a pickup option.

## Unrecognized mechanics

`merchant review and contributor reputation system`. Store-attached ratings, written reviews and customer photos, contributed by identified users whose contributions are moderated before publication, attached to a public contributor profile with a visibility setting and a shareable link, and tied to a badge track that describes the payoff as visibility and influence. This maps to no existing entry: Community Space explicitly excludes reviews attached to commerce listings and defers the case to a dedicated entry; Social Feed does not apply because no ordered stream of socially attributed items was observed. The badge layer is classified as Achievement, but the contribution and reputation layer beneath it carries no label. Worth adding to library: Possibly. The Community Space entry already names this as a pending gap, so the decision is whether to open the entry rather than whether the gap exists.

## Locked or gated mechanics

**DashPass family sharing.** Listed on the DashPass pop-up as "share your benefits with family sharing. Add a loved one for free". A persistent, benefit-conferring relationship between accounts is implied by the copy, which is the shape Group Membership describes, but the session never subscribed and never reached the sharing surface. Classification unresolved pending access. What would resolve it: subscribing and opening the family sharing screen to see whether a maintained member relationship exists and what it changes for the added account.

**"Local expert" badge tier.** Observed on the profile badges screen in a locked, greyed-out state with its criterion stated. It is covered by the Achievement classification above as the locked tier of that system; its own attained state, benefits and any ranking of contributors implied by "be top ranked and seen by the most people" were not reachable.

**Member exclusive deals.** Named as a DashPass benefit and as an offer card ("want exclusive offers? Try DashPass"). The deals themselves were never displayed.

**PC Optimum points.** The link flow was opened but not completed, so no points balance, earning event or spend rule was observed.

## How mechanics connect

Not applicable. The prompt reserves this section for apps with more than three mechanics, and three were classified. The one relationship worth recording is that Achievement and Comparative Rank draw on the same contribution stream: the badge criteria count high quality reviews and photos, and the customer favorites screen presents customer ratings as one of the measures behind a store's placement. The session shows both surfaces but shows no state passing between them.

## Behavioral interpretation

This section is separate from the observational record above. It interprets what the design appears to be doing. No claim here is a claim about users or about effect.

### Patterns instantiated

**Low-Friction Entry · confirmed.** The app postpones account creation until checkout. The user reaches the home screen through "search nearby" and a typed address, declines location and tracking permissions without being blocked, browses every category, opens an AI feature, and fills two carts before any sign in is required. The pattern's invariant, postponing an otherwise required entry step before the target behaviour begins, is directly observed.

**Contextual Education · confirmed.** Explanatory content is attached to specific decision states rather than parked in a help section: the "service fee applies. Tap for details" banner opens a full breakdown of every fee type; the "freshness guaranteed" tag on a grocery item opens the refund explanation; the pickup map opens with an explanation of what the map does; the gift option in the address flow has an info button explaining how to send a gift; the group order flow explains itself before it starts. Each attaches to a live decision.

**Visible Progress · confirmed.** The "0 out of 3" counter on the emerging expert badge converts contribution activity into an observable position with a stated remainder. This is the only progress representation of user activity observed anywhere in the session.

**Staged Disclosure and Unlocking · confirmed.** The local expert badge is withheld in a visible locked state with its eligibility rule stated (10 plus stores).

**Social Visibility · confirmed.** Contributions are attributed to an identified contributor and displayed on store pages, the contributor profile is public by default with a restricted option, the profile is shareable, and the badge benefits are stated in terms of visibility to others ("gain more visibility for your contributions", "be top ranked and seen by the most people").

**Limited-Time Opportunity · strongly supported.** The welcome offer's terms state "valid for 30 days from signup", and deal cards state when an offer ends. The boundary and the change in terms at that boundary are stated in the copy; no expiry was observed in the session.

**Directed Generosity · strongly supported.** The DashPass subscription is presented as giftable, which is a sender directing an access right to a recipient. The send was not performed.

**Peer-Matched Comparison · plausible.** The customer favorites set is partitioned by geography ("in your area") and by the filter "delivers to me". This inherits the confidence of the Comparative Rank classification it depends on; if that surface turns out to be an absolute quality status, the pattern does not apply.

**Identity Expression · plausible.** The contributor profile maintains an actor-associated presentation state (name, initial, contribution count, badges, public or restricted setting) that differs across actors and is not determined solely by a current functional state. Held at plausible because no badge was held during the session, so the displayed identity state was empty throughout.

Checked and not applied: Milestone Recognition, because no threshold crossing was observed and the "you've saved your first store" pop-up was not shown to leave a maintained state. Uncertain Reward, because the welcome offer's gift-opening animation resolved to a fixed, fully disclosed discount.

### Obstacles the design appears to address

These are hypotheses about apparent design aims, not claims about users. No user behaviour, drop-off or statement is available in this session, so none rises above plausible.

**Starting Cost Is Too High · plausible.** The signed-out browsing path, the address alternative to the location permission, the auto-detection of address type from the pin, and the deferral of sign in to checkout all reduce what must be done before the first meaningful result. *Alternative reading:* the same design serves regulatory and platform constraints (declinable iOS permissions) and merchant-side discovery goals rather than an initiation obstacle. *What would separate them:* whether the signed-out state preserves cart and address across sessions, and where sign in is actually enforced relative to browsing depth.

**Choice Overload · plausible.** The home screen is a long stack of carousels, and the app layers a category slider, a cuisine tag row, three filter drop-downs on the deals screen, filter tags on the map and gifts screens, and a natural-language AI search over the same inventory. *Alternative reading:* the filters exist to expose merchant supply and sponsored inventory rather than to narrow the user's decision. *What would separate them:* whether filtered results demote sponsored placements, and whether the default sort changes when a filter is applied.

**Value Is Not Understood · plausible.** The fee explainer, the freshness guarantee, the map introduction, the group order explanation and the repeated DashPass benefit lists all state what a thing does at the point the user meets it. *Alternative reading:* the fee explainer in particular may exist to satisfy disclosure obligations rather than to address a comprehension obstacle. *What would separate them:* whether comparable disclosure appears in regions with different fee-disclosure rules.

**Isolation · plausible, applied narrowly to the contributor system.** The badge benefits are framed entirely around being seen and trusted by other customers, and the contributor profile defaults to public. *Alternative reading:* the contributor system exists to generate review supply for store pages, with visibility as the incentive rather than the aim. *What would separate them:* whether contributors receive any recognition surface that is not attached to a store listing.

Not diagnosed: No Reason to Return Today, Habit Not Yet Formed and Fatigue From Repetition. The session contains no daily surface, no return-triggered reward, no continuity state and no rotation rule, and the notification prompt alone does not establish a return-pressure design.

### Principles

Calibrated language only. None of the following claims that a mechanic motivates, drives or works through a principle.

**Default and Friction Sensitivity · strongly supported as a relevant interpretation.** The session shows several decision structures where inaction preserves a preselected state: ad personalization is on by default (the narrator states this explicitly), the restricted profile toggle is off by default so the contributor profile is public unless changed, the DashPass free trial checkbox at checkout is preselected and must be actively declined through a "not now" button, and the address type is preselected when the pin lands on a registered business. The app creates conditions consistent with default and friction sensitivity. Whether any user's choice turned on that structure is outside this evidence.

**Social Proof · plausible.** Ratings, rating counts, quoted customer comments, a "customer favorite" tag and a screen headed by popularity and reliability all place other customers' behaviour next to a merchant decision. The app creates conditions consistent with social proof. The narrator's own observation that some quoted comments are negative and that reviews are unsorted and years old is recorded as a limit on how cleanly that information is presented, not as a claim about effect.

**Social Comparison · plausible, and only for the contributor system.** The badge copy positions the contributor relative to other contributors ("be top ranked and seen by the most people", "represent the most trusted voices"). The app creates conditions consistent with social comparison for contributors. It does not do so for orderers: nothing in the session compares one customer's ordering with another's.

**Competence and Mastery Need · plausible.** The badge ladder makes contribution quality legible as a stated criterion with a counter and a next tier. The app creates conditions consistent with a competence interpretation. *Alternative:* the ladder may function purely as an external reward structure for review supply, which the principle's own boundaries name as a competing explanation.

**Scarcity and Urgency · plausible.** Deal cards state when offers end and the welcome code states a 30-day validity, which ties a deadline to a stated change in terms. The app creates conditions consistent with urgency. No countdown, remaining-quantity indicator or capacity limit was observed.

## Session rhythm

One continuous walkthrough, ending when the narrator says "that is it for DoorDash". No session length is stated. No order was completed, so no post-order state, tracking screen or reorder surface was seen.

The session shows two return-facing surfaces. The first is the notification prompt during onboarding, framed around order updates and deals. The second is a mid-scroll home screen card rendered as "you have deals waiting. Log in to see your deals", with a login button. After sign in, a notifications screen appears reading "hello, you're all caught up on notifications" with a "don't miss those deals" item beneath it, which the narrator interprets as notifications being off.

Nothing in the session establishes a daily window, a continuity state, a refresh schedule, or any reason the app gives to return on a particular day. The 30-day validity on the welcome code is the only stated time boundary attached to the user's own account.

## Monetization observed

**DashPass.** Presented three times: a full-screen pop-up after the address is saved, a checkout checkbox, and a "try pass for free" entry in the profile. The checkout path is the most detailed: a checkbox rendered as "save 284 Canadian dollars on this order with a free trial of DashPass. Get zero delivery fees and lower services fees on eligible orders. Cancel anytime", which opens a pop-up offering "one month free. Then 10 Canadian dollars per month", with "start free DashPass trial", "learn more" and "not now". Declining through "not now" unchecks the box. The transcript renders the on-order saving as "284 Canadian dollars"; the decimal placement is not recoverable from the transcript.

**Fees.** The home screen carries a dismissible banner reading "service fee applies. Tap for details", opening a breakdown the narrator reads aloud: a percentage-based service fee that applies to subtotal and varies by merchant, reduced for DashPass members on eligible orders, with minimums that vary by merchant; a delivery fee rendered as "flat fee from $049 to $999", $0 for DashPass members on eligible orders; a long distance fee rendered as "flat fee up to $499" for merchants furthest from the user, avoidable by selecting closer merchants; and a weather impact fee, a flat fee in extreme weather that funds additional dasher pay. The copy states that all fees are avoidable by selecting pickup and that exact amounts appear at checkout. The transcript renders the delivery fee range and the long distance fee without decimal points; the intended values are not recoverable from the transcript.

**Welcome offer.** After signing in with Apple, the home screen changes: the background colour changes and an animated video of a present opening reveals 40% off tags. The offer is rendered as "get 40% off your first order. 40% off your first $15 plus delivery. Use surprise 40 for up to $13 off", with a "learn more" button opening a terms screen the narrator reads aloud: 40% off the first order and $0 delivery on the first order, new customers only, minimum subtotal greater than $15 excluding taxes and fees, maximum discount value of $13 per order, valid for 30 days from signup, while supplies last, other fees and gratuity still apply, not valid on pickup orders, not valid for alcohol, no cash value, non transferable, code entered at checkout for each order.

**Merchant-funded offers.** Listed under Observed behaviors without a library label above, with amounts as spoken.

**Gift cards.** Purchasable with a design choice, and redeemable through a gift card pin.

**Sponsored placements.** Several sections are labelled sponsored: additional offers inside the deals screen ("some of which are sponsored. It says that they're sponsored so they are showing up at the top"), the "try something new" section, and an individual product offer ("save $5 and select Revlon Lip items which is sponsored").

**Two recruitment surfaces** at the bottom of settings, "become a dasher" and "become a partner restaurant", both opening web forms.

**App version** as stated in settings: 8.28.0, with a build number the transcript renders as "5 77050".

## What stood out

**The only progress the app tracks for the user is contribution progress, and it is three levels deep in settings.** Nothing in the ordering flow counts, ranks or advances anything about the user. The one counter that exists (0 out of 3 toward a badge) sits behind profile, settings, view profile, earn a profile badge. This restates the placement and the counter recorded in the Achievement entry, at the same strength.

**The app's own defaults consistently favour the more permissive option.** Ad personalization on, contributor profile public, DashPass trial checkbox preselected at checkout. Each is individually recorded above; the pattern across the three is the observation.

**"Customer favorite" is one of the few tappable tags.** The narrator tested the red offer tags and the black "in store prices" tag and found them inert, while "customer favorite" opened a dedicated screen. This restates the tap tests recorded in the Comparative Rank entry.

## Analysis notes

**Single session, first install, signed out then signed in.** No order was placed, so checkout completion, order tracking, post-order review prompts, reorder surfaces and any returning-user home screen are entirely absent from this evidence. The contributor system was seen at zero state throughout: 0 contributions, 0 out of 3 on the first badge, no saved payment method, no order history.

**Region.** The narrator is not in a country DoorDash serves, declined location, and typed a Canadian address, choosing a location that turned out to be a registered business, so the address flow shown is the office variant. Prices are in Canadian dollars and several offers are described by the narrator as Canada specific, including the PC Optimum partnership. Nothing in this file should be read as describing DoorDash in another market.

**Transcript quality.** The recording has two speaker labels that alternate mid-sentence, and several passages are garbled beyond reconstruction, including a section name rendered as "the neighborhood ETF", a phrase rendered as "love to buy 1,000", a cuisine filter the narrator himself flags as "put in ears if I'm reading it correctly", and the disappearing tag after the first saved store. These are recorded as ambiguous and were not used as evidence for any classification. Currency amounts rendered without decimal points ("$049 to $999", "$499", "284 Canadian dollars") are reproduced as rendered rather than corrected.

**Interface copy.** The narrator reads much of the copy aloud, and those passages are treated as the screen's wording. Where the narrator summarizes rather than reads, the text above says "rendered as" or "described as" to mark it as spoken rendering.

**Stated exclusions.** The following evidenced surfaces were checked against library entries and deliberately not classified:

- *Advertisement Exposure.* Not applied to the sponsored merchant and product placements ("some of which are sponsored", "try something new", the sponsored Revlon offer), which the entry excludes as retail media inside the product's own commerce lists; not applied to the PC Optimum card, which the entry excludes as partner cross-promotion; not applied to the DashPass pop-ups and banners, which the entry excludes as the product promoting its own subscription. The activity tracking prompt concerns DoorDash ads served on third party sites, not an ad unit served inside the app. No ad unit was observed in this session.
- *Community Space.* Not applied to store reviews, customer photos and the contributor profile. The entry explicitly excludes reviews, ratings and photos attached to commerce listings and defers them to a future entry.
- *Social Feed.* Not applied. No ordered stream of socially attributed items was observed; the home screen carousels are merchant recommendations without social attribution, which the entry excludes.
- *Group Membership.* Not applied to group orders, which the entry excludes as a temporary transaction grouping that does not persist beyond one instance. DashPass family sharing is the surface that might satisfy the entry and it is recorded under Locked or gated mechanics.
- *Milestone.* Checked against the badge system and not applied. The entry requires a broader measurable progression within which the recognized point sits, and the session does not establish that DoorDash maintains a count of stores reviewed separately from the badge criteria themselves. The 0 out of 3 counter exists inside the badge; the profile's "0 contributions" is a different measure.
- *Leveling.* Checked against the badge system and not applied. The session shows two ordered badge states but no current level state assigned to the user, and the entry directs that threshold recognition without a maintained current state be classified as Achievement or Milestone instead.
- *Experience Points.* Checked against the badge system and not applied. The counter records how many stores have been reviewed rather than assigning quantified progression value to those events, which the entry separates as a cumulative count.
- *Leaderboard.* Checked against customer favorites and not applied. See the Comparative Rank classification basis.
- *Spendable Credits and Tokens, Soft Currency, Hard Currency.* Checked against DoorDash credits and gift card balances and not applied. All three entries exclude balances denominated in real currency and stored monetary value held on the user's behalf. PC Optimum points are a partner's balance, and no DoorDash-side balance, spend rule or exchange was observed.
- *Challenge.* Checked against the PC Optimum welcome points offer ("order $20 to earn 2,000 points") and the promotional codes, and not applied. No bounded objective instance with a tracked active, completed or expired state was observed; these are price and reward conditions attached to a transaction.
- *First-Purchase Bonus.* Checked against "40% off your first order" and "$0 delivery fee for the first order" and not applied. Both reduce the price of the qualifying transaction, which the entry names as a first-purchase discount and explicitly excludes from the bonus mechanic. No separate benefit was observed to be granted after a first order completes.
- *Monthly Reward Card.* Checked against DashPass and not applied. The entitlement provides continuous fee and access benefits rather than multiple interval-based reward opportunities, which the entry excludes.
- *Cosmetic Customization.* Checked against the dark mode setting and the gift card design choice and not applied. The entry explicitly excludes appearance mode settings, and the gift card design was observed only as a choice inside a purchase flow with no maintained applied state.
- *Set Collection.* Checked against saved stores and the two badges and not applied. No defined set with tracked member-level completeness was observed; the entry excludes progress toward a numerical badge target.
- *Variable Reward Outcome.* Checked against the welcome offer's gift-opening animation and not applied. Only one result was observed and the result was fixed and fully disclosed in the terms, which the entry excludes.

**Items to re-record.** A session that would materially improve this file would: place at least one order, subscribe to DashPass and open the family sharing screen, submit reviews or photos for one store to observe a contribution's approval and its effect on the badge counter, and re-open the customer favorites screen after a period to see whether the set and its order change.
