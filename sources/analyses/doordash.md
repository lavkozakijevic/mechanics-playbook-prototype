# DoorDash

**ID:** doordash
**Category:** Food and Grocery Delivery / Marketplace
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** July 29, 2026
**Last updated:** July 30, 2026
**Session state:** First install, guest browsing, then signed in with Apple mid-session; not subscribed to DashPass (declined); free tier
**Sessions used:** "DoorDash iOS app review" (Jul 29, 2026)

## Overview

DoorDash is a delivery marketplace for restaurant, grocery, convenience, drugstore, retail, and pet orders. The session shows the app trying to get the user to set a delivery address, browse merchants and deals, build a cart, and sign in to place an order. The primary observable goal is completing an order; a secondary layer surrounds ordering with deals, a DashPass subscription offer, reviews, and a reviewer profile system.

## First impression

Onboarding, as the transcript shows it, asks for a phone number first, with "use email instead" and "continue with Google / Facebook / Apple" or "search nearby" as alternatives. Before showing value, the app requests App Tracking Transparency permission ("see personalized offers by allowing activity tracking") and location permission. The user declined location because they are "not in a country that has DoorDash" and typed a Canadian address instead. The first substantive product moment is the address flow, which detects that a chosen location is a registered business and pre-marks the address type as "office," then asks for delivery preferences (lobby, office, suite, floor, or meet at location), a personal label (home, work, custom), and offers an "I'm sending a gift" option. A DashPass paywall and a notifications prompt appear before the home screen loads. The transcript does not show the app ever asking for the user's name during onboarding.

## Core activity

The experience has the character of browsing a large marketplace feed and assembling a cart. Inside the app the user sets an address, scrolls a home feed of category shortcuts, deals, and merchant lists, opens store pages, adds items to carts (including via an AI "snap your grocery list" flow that built a shopping list from a photographed recipe), reviews cart summaries, and is then required to sign in or sign up to complete the order.

## Mechanics observed

### Advertisement Exposure · Supporting · strongly supported

**What was observed:**
The transcript repeatedly describes promotional units marked "sponsored." In the deals area: "additional offers, some of which are sponsored. It says that they're sponsored so they are showing up at the top." A "try something new" section is described as "sponsored options. It says that they are sponsored." One offer is "save $5 and select Revlon Lip items which is sponsored." Named-brand promotions appear, such as "25% off on a convenience order of $25 for Dr. Pepper and Doritos." These sponsored units are interleaved with ordinary merchant listings across the home feed and deal screens.

**How it is presented:**
Sponsored items carry a "sponsored" label and, per the narrator, are positioned at the top of lists because they are sponsored. They appear as cards and banners within the same scroll as non-sponsored merchants.

**Classification basis:**
The required conditions are satisfied: an identifiable content unit promotes an offering (a merchant or a named brand's product), it is distinguishable from surrounding content through its "sponsored" labeling and placement, and the product controls where it appears. Exclusions were checked: this is not ordinary marketplace inventory classified as an ad "merely because it can lead to a purchase," because the units are explicitly labeled sponsored and placed by that status (the entry's "native sponsored card" borderline treats a labeled sponsored placement as advertisement exposure). Partner cross-promotion and self-subscription promotion were held separate (see Observed behaviors and Monetization).

**What is notable:**
The narrator also described an App Tracking Transparency prompt and a marketing setting for "personalized ads on third party platforms," but those concern DoorDash's ad targeting and data sharing rather than an ad unit served inside this session; they are recorded under Monetization and Analysis notes rather than counted here.

**Screenshot suggestions:**
The deals screen where offers are labeled "sponsored" at the top of the list, because it shows the promotional unit distinguished from ordinary listings. The "Revlon Lip items" sponsored offer card, because it evidences a named third-party brand promotion.

### Gifting · Supporting · strongly supported

**What was observed:**
At address setup the app offers "I'm sending a gift. Add a card and note at checkout." An info pop-up reads, per the narrator, "make sure you're using their address to shop gifts near them. Add their name and phone number so they can track the order. Include a digital card and message." Separately, a Gifts section offers "send a gift card": "DoorDash gift cards, featured gift cards, dash pass subscription. All of these can be gifted." A profile Gift card option lets the user "Customize and buy gift card" and separately "Redeem a gift card. Enter Gift Card pin."

**How it is presented:**
Gifting appears both as a per-order toggle at checkout (send this order as a gift to a recipient's address with a card and note) and as a dedicated Gifts shortcut and profile section for gift cards and a giftable DashPass subscription.

**Classification basis:**
The core invariant is satisfied: a sender identifies a recipient (recipient address, name, and phone) and initiates a non-reciprocal grant of a product-defined benefit (a delivered order, a gift card balance, or a DashPass subscription). Reciprocal transfer from the recipient is not required. Exclusions were checked: this is not content sharing (a product-defined benefit changes the recipient's state) and not a referral reward (the sender directs the benefit rather than the recipient earning it by completing an action). Variants present include purchased gift, currency gift (gift card), and access gift (giftable DashPass).

**What is notable:**
Nothing beyond ordinary implementation was distinctive; omitted.

**Screenshot suggestions:**
The "I'm sending a gift" checkout option with its "how to send a gift" info pop-up, because it evidences the recipient-directed grant. The Gifts section showing giftable gift cards and DashPass, because it evidences the purchased-gift and access-gift variants.

### Community Space · Supporting · strongly supported

**What was observed:**
Store pages display reviews and ratings contributed by multiple customers, with customer photos. On a "customer favorites" store the narrator reads comments such as "Hot and fresh, lots of cheese and toppings, crisp crust. 10 out of 10" alongside a negative one, "no extra cheese on the pizza when I ordered it. Barely any pepperoni... soggy." The narrator notes "Some of the reviews are from 2020, 2024, 2023" and that they are "not really sorted in any way." A contributions and profile system supports the review side: a settings screen shows "0 contributions. All contributions will appear once they're approved," with prompts to "Become a trusted voice by sharing reviews and earning badges," a "find the voices you trust... local experts, people on doordash" panel, and an editable public profile where "when your profile is public, anyone can see your profile ratings and public reviews, including people who are ordering in your neighborhood," and "your public contributions will display on the store page."

**How it is presented:**
Reviews and photos are attached to individual store pages and persist over time. Contribution is mediated by a user profile that can be public or restricted, is moderated ("appear once they're approved"), and surfaces contributor identity to others in the neighborhood.

**Classification basis:**
The core invariant is satisfied: the store page is an identifiable shared context that persists across many contribution events, and more than one social actor (customers) can contribute reviews and photos associated with that context. The distinguishing-feature check selects Community Space among its mutually exclusive siblings: no maintained membership and governance (Group Membership) and no collective group-owned state (Clan / Guild) were observed, leaving an open persistent multi-actor context. This matches the entry's "public article comments" borderline (a content-attached comment or review context). Social Feed was checked and excluded: the transcript states the reviews are "not really sorted in any way," so the ordered-stream-by-a-feed-rule invariant is not established.

**What is notable:**
The narrator observed that the reviews under a "favorites" heading are unscreened, span multiple years, and include clearly negative comments, and that "they're not being screened by anyone." This is recorded as an observation, not an effectiveness or quality judgment.

**Screenshot suggestions:**
A store page review list showing dated customer comments and photos from multiple people, because it evidences multi-actor contributions attached to a persistent store context. The profile "0 contributions" and "trusted voice / earn badges" screen, because it evidences the contribution side of the shared context.

### Spendable Credits and Tokens · Supporting · strongly supported (Soft Currency specialization: plausible)

**What was observed:**
A "DoorDash credits" balance appears in the payment area ("we also have doordash credits") with an adjacent "Redeem gift card" action, and in rewards the user "redeemed a total of $0." A "Redeem a gift card. Enter Gift Card pin" flow can add value. A DashPass benefit is stated as "5% back on eligible pickup orders. Earn 5% DoorDash credits on eligible orders," repeated on the map as "5% back on pickup orders with DashPass."

**How it is presented:**
Credits are surfaced as a payment-adjacent balance and a rewards line, toppable via gift-card redemption, and describable as earnable through a 5% back rule on eligible orders for DashPass members.

**Classification basis:**
The core invariant is satisfied: the product maintains a quantified credit balance and presents it as usable value toward orders (a payment source) that gift-card redemption can increase. Exclusions were checked: these are not progression-only units, not automatically consumed capacity (Energy), and not failure-continuation units (Lives). The Soft Currency specialization is noted rather than asserted strongly: the "earn 5% DoorDash credits on eligible orders" rule is a repeatable, transaction-earned non-paid acquisition path consistent with Soft Currency, and per the operating card's overlap rule the specialization is reported with its parent (Spendable Credits and Tokens). Behavior detail not observed: the session did not walk through spending credits against an order or show a balance decreasing (the user's balance was $0), so the earn-and-spend loop is asserted at the label level only.

**What is notable:**
Nothing beyond ordinary implementation; omitted.

**Screenshot suggestions:**
The payment screen showing "DoorDash credits" with "Redeem gift card," because it evidences the balance and a top-up path. The DashPass benefit line "5% back... Earn 5% DoorDash credits on eligible orders," because it evidences the earning rule.

### Achievement · Shallow · strongly supported

**What was observed:**
Inside the profile, an "Earn a profile badge" flow opens a "profile badges. Earn badges and gain influence on doordash" screen. It shows "zero out of three for emerging expert. Share high quality reviews or photos for three stores." A second tier is grayed out and locked, "local expert," described as "share high quality reviews or photos for 10 plus stores. Be top ranked and seen by the most people." A one-time "you've saved your first store" message also appeared elsewhere (recorded under Observed behaviors, not here).

**How it is presented:**
The badges live several layers into the profile (profile, then view profile, then earn a profile badge). Each badge states a criterion and shows partial progress ("0 out of 3"), with the higher tier visibly locked.

**Classification basis:**
The core invariant is satisfied: the product defines criteria (review or photo three stores; ten-plus stores) that move from unattained to attained and preserves them as badges on the profile, distinct from the underlying review actions. This matches the tiered and progressive achievement variants. Leveling was checked and excluded: no current discrete level state is assigned or maintained; the entry's own exclusion routes threshold-recognition-without-a-current-level to Achievement or Milestone. Milestone was checked: the badges read as discrete criteria (review N stores) rather than recognition points along one continuous measure, and the tiered-achievement variant fits more directly. Presence is classified from the recognizable, defined badge implementation; behavior detail not observed: the user had 0 of 3 and no badge was actually attained in-session.

**What is notable:**
Nothing beyond ordinary implementation; omitted.

**Screenshot suggestions:**
The "profile badges" screen showing "Emerging expert 0/3" and the locked "Local expert" tier, because it evidences the defined criteria and their unattained-to-attained structure.

## Observed behaviors without a library label

First-order discount. The app grants "40% off your first order... 40% off your first $15 plus delivery. Use surprise 40 for up to $13 off," and repeatedly shows "0 delivery fee for the first order." This reduces the price of the qualifying transaction rather than granting a separate benefit, so under the First-Purchase Bonus exclusion it is a first-purchase discount and receives no mechanic label. If a separate credit or item were granted on top of the discount, First-Purchase Bonus would need re-checking; no such separate grant was observed.

Partner points promotion (PC Optimum). "Get 2000 welcome points. When you order $20 plus... by linking your PC Optimum account," with a "link now" button opening a PC Optimum login. This is cross-promotion of a partner's loyalty program, described in plain language per the Advertisement Exposure exclusion for partnerships. It was not classified as First-Purchase Bonus: the transcript does not establish that the points are scoped to the first qualifying purchase rather than repeatable, and the benefit is a partner currency rather than a product-defined DoorDash benefit.

Saved stores and favorites. A heart control saves a store, producing a one-time "you've saved your first store" message. This is bookmarking; it is not Set Collection (no defined set to complete). The "saved your first store" message was not classified as an Achievement: it reads as a one-time confirmation toast, and no preserved attained-criterion record was shown (the Achievement exclusion bars classifying from a celebratory message alone).

Ranked-looking discovery lists. "Customer favorites top ranked in your area based on customer ratings, popularity and reliability" presents a list of six stores; other feed sections include "fastest near you" and "under $2 delivery fee." These were checked against Leaderboard and Comparative Rank and not classified: the transcript does not establish that the displayed order represents relative comparative positions (no placement indicators were read out, and the narrator said other lists were "not really sorted in any way"), so the ordered-comparison invariant is not observably met. They are described as curated merchant-discovery lists.

## Unrecognized mechanics

`group order`. The app offers "start your group order easily share order with friends and family so each person can add items, then pay once and get it all delivered together," with a selectable "per person spending limit" ($10, $15, $20, or other) and an invite link. Observed behavior: multiple invited people contribute items to one shared cart that is paid for once. It maps to no existing library entry: it is not Gifting (no non-reciprocal grant directed to a recipient), and not Group Membership or Clan / Guild (the group is transient to one order, with no maintained persistent membership or group-owned state). It resembles the Shared Contribution pattern at Layer Three but has no Layer Four mechanic. Worth adding to library: Possibly.

## Locked or gated mechanics

DashPass member benefits. Benefits described in paywalls, including "$0 delivery fees," "lower service fees on eligible orders," "member exclusive deals," "5% back on eligible pickup orders," and "share your benefits with family sharing," are gated behind a DashPass subscription the user declined, so their in-product behavior was not reached. These are the product's subscription benefits rather than a distinct library mechanic (see Monetization).

Locked achievement tier. The "local expert" badge (review or photo ten-plus stores) was shown grayed out and locked as the tier above "emerging expert." Classified within the Achievement entry above; recorded here as the specific gated element not reachable in this session.

## How mechanics connect

Based only on what the transcript shows, the mechanics relate as follows. Community Space (customer reviews and photos on store pages) supplies the activity that the Achievement system rewards: badges are earned by contributing "high quality reviews or photos" for a threshold number of stores, and the reviewer profile is where both the contributions and the badges live. Spendable Credits and Tokens connects to Gifting and to the DashPass subscription: gift-card redemption tops up the credits balance, and the 5% back credits earning path is stated as a DashPass member benefit, tying credit accrual to the subscription. Advertisement Exposure pervades the same browse and deals surfaces where merchant discovery and cart-building happen, sitting alongside the ordinary listings rather than in a separate placement. These are structural relationships observed in the session, not claims about outcomes.

## Behavioral interpretation

This section interprets apparent design aims and is separate from the observational record above. No effectiveness is claimed anywhere.

Patterns instantiated.
Contextual Education (strongly supported): the app attaches explanatory pop-ups to specific decision points, including "fees on DoorDash" opened from a "service fee applies" banner, "how to send a gift" at the gift toggle, and "100% fresh or your money back... Refunds made easy" on a grocery item. Each connects explanation to a current action or uncertainty rather than sitting only as reference material.
Limited-Time Opportunity (strongly supported as observed structure): the first-order framing ("0 delivery fee for the first order"), the 40% off code "valid for 30 days from signup," and "Offer valid while supplies last" attach terms that change after a boundary.
Social Visibility (plausible): public reviews, ratings, customer photos, and a profile whose "public contributions will display on the store page" and are visible to "people who are ordering in your neighborhood" expose one actor's contributions to others under a defined visibility rule. An alternative reading is that this is a one-directional review-display surface for discovery rather than a visibility mechanic aimed at the contributor; the session shows no inter-user replies.
Identity Expression (plausible): the reviewer profile, badges, and "gain influence... trusted voice" framing maintain an actor-associated presentation state. Alternative: the badges may function mainly as a contribution incentive rather than an expressed identity.

Obstacles the design appears to address (hypotheses about apparent aims, not claims about users).
Value Is Not Understood, at the fee and consequences level (plausible): the fee explainer, freshness-guarantee copy, and gift instructions appear aimed at uncertainty about what fees apply, what happens if groceries arrive spoiled, and how gifting works. A plausible alternative is that some of this copy exists to satisfy disclosure or trust requirements rather than to remove a behavioral obstacle.
Spend Reluctance or first-order hesitation (plausible): the 40% off and $0-delivery first-order framing appears aimed at lowering the cost of a first order. A plausible alternative is ordinary customer-acquisition pricing unrelated to any diagnosed reluctance in this user.
Isolation or trust in unfamiliar merchants (plausible): reviews, ratings, and "trusted voice" framing appear aimed at merchant-quality uncertainty at the point of choosing where to order. A plausible alternative is that reviews primarily serve discovery and ranking rather than addressing a social or trust obstacle.

Principles (calibrated language only).
The review counts, star ratings, and customer photos shown next to merchant choices create conditions consistent with Social Proof (plausible). The public reviewer profile and neighborhood visibility create conditions consistent with Social Comparison and, more weakly, status or recognition motives (plausible). The first-order discount with a 30-day window and "while supplies last" framing create conditions consistent with Scarcity and Urgency and, for the immediate discount versus later full price, with Hyperbolic Discounting (plausible). The fee and freshness explainers create conditions consistent with Default and Friction Sensitivity in the sense of reducing decision uncertainty (plausible). None of these establishes that any user responded through the named principle.

## Session rhythm

The transcript covers a single continuous session that moves from onboarding through browsing, cart-building, and a mid-session sign-in with Apple. Return pressure that the session surfaces is the first-order incentive with a stated 30-day validity, general deals, and a notifications prompt ("never miss an order update or great deal... turn on notifications"). No streak, daily-login, energy, or recurring-quest mechanic was observed. The clearest session-end gate is the requirement to sign in or sign up to complete an order; the cart persisted after closing it. No return-trigger tied to a recurring time window was observed beyond time-limited offer terms.

## Monetization observed

DashPass subscription: presented as "one month free. Then 10 Canadian dollars per month," with benefits listed as "$0 delivery fees," "lower service fees on eligible orders," "member exclusive deals," "5% back on eligible pickup orders," "share your benefits with family sharing," and "cancel anytime." Promoted via multiple paywalls ("Want exclusive offers? Try DashPass. Sign up now") and a checkout upsell ("save 284 Canadian dollars on this order with a free trial of DashPass").
Fees (read from a fee explainer): service fee is "percentage based... varies by merchant"; delivery fee is a "flat fee from $0.49 to $9.99, $0 for DashPass members on eligible orders"; long-distance fee is a "flat fee up to $4.99"; a weather impact fee applies "in extreme weather conditions." "All fees are avoidable by selecting Pickup."
First-order offer: "40% off your first order... use code surprise40," "up to $13 off," minimum subtotal "greater than $15," "valid for 30 days from signup," "eligible only to new customers," "not valid on pickup orders," "not valid for the purchase of alcohol."
Deals observed (Canadian dollars, as spoken): "$5 off on $40 plus order," "buy one, get one free" on "$20 plus spent" at McDonald's, "25% off up to $15," "30% off on an order of $55 from select pet stores," "25% off on a convenience order of $25."
Gift cards and giftable DashPass are sold. A partner promotion offers "2000 welcome points" for linking PC Optimum on a "$20 plus" order.
Data and ads: an App Tracking Transparency prompt and a marketing setting for "personalized ads on third party platforms" were shown; the narrator observed the ad-personalization data-sharing setting was "turned on by default."

## What stood out

The home screen greeted the user with "Happy Wednesday, [blank]" because onboarding never asked for a name; the narrator noted the personalization "was left hanging," and the name appeared only after signing in. This restates the observation that no name was collected during onboarding.

The personalized-ads data-sharing setting ("disclosing data to our advertising partners") was described as "turned on by default," which the narrator flagged and questioned.

Under a "customer favorites" heading the app showed unscreened reviews spanning 2020, 2023, and 2024, including clearly negative comments, which the narrator noted "are not being screened by anyone."

A microphone-access prompt appeared without the user initiating any audio action: "allow doordash to access your microphone. I did not ask for audio recording... It just popped up."

## Analysis notes

This file is built from one Granola session, a single narrator's spoken walkthrough. Per the source rule, all interface copy is treated as the narrator's spoken rendering of the screen unless explicitly read aloud.
Regional variant: the user is outside a DoorDash country and used a Canadian delivery address, so all pricing is in Canadian dollars and includes Canada-specific elements (the PC Optimum partner integration).
Account state changed mid-session from guest to signed-in via Apple, which is when personalization and the credits, rewards, and profile surfaces became visible.
Presence-versus-behavior gaps: DoorDash credits and the badge system are classified as present from their recognizable implementations, but the user's credit balance was $0 and badge progress was 0 of 3, so the earn-and-spend loop and any badge attainment were not demonstrated in-session. DashPass member benefits were described in paywalls but not accessed because the subscription was declined.
Recorded ambiguities: whether the "customer favorites" list is ordered by rank (left unresolved, so it is not classified as Leaderboard or Comparative Rank); whether the PC Optimum "2000 welcome points" is scoped to the first qualifying order or repeatable (left unresolved, so it is not classified as First-Purchase Bonus). The app version was spoken as "8.28.0" with a build number rendered ambiguously as "577050" or "5 77050."
No classification in this file required escalation: each candidate was decided by the library entries' own definitions and the operating card's overlap rule.
