# DoorDash

**Teaser:** DoorDash's whole progression layer is two connected mechanics, a review-and-photo contribution loop and the badge that counts it, and neither touches ordering, fees or DashPass.

DoorDash is a food, grocery and retail delivery marketplace built around one loop: browse a merchant, fill a per-merchant cart, check out. Nearly every surface in the app, home sections, deals, search, the AI recipe-to-cart feature, and the grocery, pickup and other verticals, feeds that same cart, and carts persist across screens and sign-in. A second, tightly linked system pairs a named set of delivery and service fees to the DashPass subscription that reduces or removes them, offered repeatedly across the app. A small connected pair sits apart from both of these: a contributor profile inviting reviews and photos, and a two-tier badge that counts what it receives.

---

## System view

DoorDash is a simple system for engagement-design purposes: its spine is filling a cart toward checkout, tightly paired with a fee structure that DashPass exists to reduce, and a single reviewer-badge mechanic sits off to the side, disconnected from ordering, fees or DashPass entirely.

---

## Mechanics

### Reviews and Ratings

**Implementation summary:** DoorDash invites reviews and photos through a contributor profile that tracks approval status and visibility, though nothing had been contributed yet.

**What was observed:** DoorDash's contributor profile explainer invites the user to share reviews and photos and become a trusted voice. The profile itself states zero contributions and that contributions will appear once approved. Each store page opens a dedicated ratings and reviews view and a customer photos view showing what other users have posted. A restricted-profile setting controls what others see of the user's own contributions, while stating that public contributions still display on the store page regardless.

**How it is presented:** The invitation runs through a three-page explainer on first opening the contributor profile, framed around becoming a trusted, visible voice. Store pages carry their own dedicated buttons for ratings and reviews and for customer photos, separate from the store's browsing content.

**What is worth noting:** Every state this mechanic maintains starts at zero: no contributions made, no approval status beyond pending, no visibility setting ever exercised. The invitation and the contributor-side bookkeeping are fully built out before a single review exists.

**Key findings:**

- DoorDash's contributor profile invites the user to share reviews and photos and become a trusted voice.
- The profile reads zero contributions, stating that contributions display once approved.
- Each store page carries separate views for ratings and reviews and for customer photos.
- A restricted-profile setting controls what others see of a user's contributions, while public contributions still display on the store page regardless.
- The account holds zero contributions, so the approval step's effect has nothing to show yet.

**Screenshots needed:** the contributor profile's zero-contributions state, and a store page's ratings and reviews view.

### Achievement

**Implementation summary:** A two-tier reviewer badge tracks stores reviewed or photographed, gaining visibility and ranking among other contributors, disconnected from ordering.

**What was observed:** DoorDash defines two badges on a contributor profile, Emerging expert and Local expert, each with a stated criterion: sharing high quality reviews or photos for 3 stores for the first, 10 or more for the second. The first shows a 0 of 3 counter; the second is greyed out and locked. Each badge's copy focuses on visibility and standing among other customers rather than on any reward.

**How it is presented:** The badges sit on a contributor profile reached from settings, introduced by a three-page explainer describing how to become a trusted voice other users can rely on. An "Earn a profile badge" button also appears on the profile reached from the profile tab. What counts as a qualifying "high quality" review or photo isn't stated.

**What is worth noting:** DoorDash frames both badges entirely around visibility and standing, gaining visibility for contributions, being seen by the most people, rather than around any reward, discount or capability. Nothing else in the app references the badges: they don't connect to orders, credits, DashPass or any of the app's offers.

**Key findings:**

- Two badges are defined, Emerging expert (3 stores) and Local expert (10 or more stores), each criterion counted in stores reviewed or photographed.
- The first badge shows an unattained 0 of 3 counter; the second is locked.
- Badge copy centers on visibility and ranking among other contributors, not on any reward.
- What makes a review or photo "high quality" isn't stated.
- The badges have no connection to ordering, credits or DashPass anywhere else in the app.

**Screenshots needed:** the profile badges screen showing the 0 of 3 counter and the locked Local expert badge.

---

## Onboarding and first run

DoorDash lets a new user browse as a guest from the first screen, asking for permissions and an address before any sign-in is required.

### O1. Guest entry route

DoorDash opens on a screen asking for a phone number, with buttons to continue with email, Google, Facebook or Apple, and a "search nearby" option that lets the user continue without creating an account. The guest route leads directly into the tracking request, the location request and address entry, with no name, email or password requested. DoorDash stays signed out through address entry, the home screen, search, the cart, the shopping verticals and a store page, signing in only later from the profile button.

### O2. Tracking explainer

Before the system tracking prompt, DoorDash shows its own screen stating that allowing activity tracking personalizes the offers and deals shown in DoorDash ads on other apps and websites, framed around discovering restaurants, getting more relevant offers, and being able to turn sharing off anytime. The iOS system prompt for tracking across other apps and websites follows.

### O3. Location request and address entry

DoorDash asks for location access to show nearby stores, offering Allow Once, Allow While Using App and Don't Allow. Declining location requires the user to type an address or sign in for a saved one before continuing.

### O4. Address type and delivery details

After an address is chosen, DoorDash asks for an address type among house, apartment, hotel, office and other, and marks an address belonging to a registered business as an office automatically. The details screen offers pin adjustment, a suite or floor field, a business name field, a building entrance pin, delivery preferences, delivery instructions, a personal label of home, work or custom, an "I'm sending a gift" option stating a card and note can be added at checkout, and a Save address button. Delivery preferences for an office address offer leaving it at a lobby, office, suite or floor, or meeting at one of those or outside.

### O5. Empty name in the first greeting

DoorDash's first home screen shows an address dropdown, profile and cart icons, and a greeting with no name filled in, since nothing in the flow up to this point asked for one. The same missing name appears in the group order screens. After sign-in, the name is filled in wherever the app addresses the user.

### O6. Signing in with Apple

From the profile button, which asks the user to sign in or sign up, signing in with Apple succeeds and changes the home screen: a new background color, an animated first-order offer, the user's name in place of the empty greeting, and a notification bell with an unread marker. The profile shows a placeholder image with the first letter of the name, a "Customer since" date, a Try Pass offer, tabs for Orders, Try Pass, Settings, Profile and Rewards, a saved stores list, and a cart bar for items already added. Orders reads that no orders have been placed yet.

---

## Core loop and automation

DoorDash's home screen, search, verticals and store pages all feed one destination, a per-merchant cart, through a long sequence of browsing surfaces.

### O7. Category shortcuts and cuisine tags

A row of category shortcuts sits under the header, covering Deals, Grocery, Convenience, Pickup, Drugstore, Gifts, Retail and Pets, with a further row of cuisine and dish tags below, covering options from fast food and pizza to halal, ramen and noodles. Each tag opens a filtered view.

### O8. Home feed of merchant sections

The home screen is a vertical sequence of horizontally scrolling merchant sections, each expandable into its own list. Sections shown include a loyalty-partner banner, a deals carousel of 15 or more cards, a low-delivery-fee section, a fastest-near-you section, grocery, new-to-you merchants, retail stores, a prompt to log in to see saved deals, and cuisine-specific sections, continuing without a visible end. Deal examples include a first-order $0 delivery fee, a dollar amount off a large order at one merchant, and a buy-one-get-one offer at another. Some merchants in the fastest-near-you section carry a symbol marking short delivery times. A pet supplies section appears even though no pet information was ever given.

### O9. Merchant card tags

Merchant cards carry tags in different colors, and only some respond to a tap. Deal tags describing a discount, and an "In-store prices" tag, do nothing when tapped; a "Customer favorite" tag opens the customer favorites screen. The "In-store prices" tag appears on some grocery and retail merchants and not others. Sponsored merchants are labelled as sponsored inside ordinary sections.

### O10. Deals screen

Tapping the deals section opens a dedicated deals screen with dropdown filters for cuisine, deal type and ratings, a carousel of offer cards, and a scrolling list of merchants with deals, with some sponsored entries appearing at the top. The offer cards include a DashPass sign-up prompt, a percentage-off offer at pet stores, a loyalty-program linking card, and a percentage-off offer on a small convenience order.

### O11. Customer favorites screen

The customer favorites screen is headed as top-ranked merchants for the area based on customer ratings, popularity and reliability, with filters for open-now and delivers-to-me, and a list of merchants for the chosen location. Each entry shows a rating, number of ratings, delivery time, distance and excerpts of customer comments, including both praise and complaints, some dated from prior years.

### O12. Search and AI search

A search bar at the bottom of the home screen opens a search screen inviting the user to just ask, with recommended item tags, cuisines and groceries. Tapping the prompt opens an AI search feature, described as a beta feature that can make mistakes, asking what the user is in the mood for and noting that input may be used to personalize the experience. A separate button opens an empty chat history. The AI screen also offers to turn a photo of a grocery list or recipe into a shopping list.

### O13. Recipe photo to shopping list

After granting camera access and sending a photo of a recipe, DoorDash identifies the dish, states which store it is shopping at, and returns a list reporting that all items were found, with images, a total cost and an add-to-cart button. The assistant notes when an ingredient isn't carried by the store, substitutes an alternative, and suggests buying the missing ingredient separately. Follow-up suggestion chips offer related recipe tips. The resulting list lets the user swap or remove each item, and the cart shows the store, delivery time, cost, quantity controls, cross-sell sections, and an order summary. A "Deals and gift cards" button on the cart opens a sign-in prompt. Closing the cart keeps the items in place and marks the cart icon.

### O14. Unprompted microphone request

Shortly after the cart is closed, DoorDash shows the system prompt asking to access the microphone, although no voice or dictation control had been used.

### O15. Grocery vertical

The Grocery shortcut opens a screen with its own search bar and an "Ask AI" button, filter tags, a list of top stores with tags, a savings section, a grocery essentials section, and product rows carrying stock indicators. Store deal groupings show a percentage off by category at specific stores. Product rows show whether an item is likely in stock or likely out of stock, and out-of-stock items show a request button in place of the add control.

### O16. Grocery item page

A grocery item page shows the product image, store, delivery time and fee, a freshness-guarantee tag, the product name, size and price, a stock tag, and options to add shopper instructions or substitutions. The freshness guarantee's info button explains that groceries should arrive undamaged and unspoiled, and that a refund is requested through the order receipt. Substitution choices include letting the shopper pick any similar item, choosing specific acceptable alternatives, or requesting a refund instead, plus a free-text note field.

### O17. Pickup map

The Pickup shortcut opens a map, introduced by a pop-up explaining that tapping pins shows popular menu items and that the map can be searched directly. The map has a search bar, filter tags including Open now, Pickup, DashPass, Ratings and Price, pins for stores, a tag promoting cash back on pickup orders with DashPass, and store cards with Delivery and Pickup buttons. Store cards show rating, a price level, walking distance, and open or closed status. Some stores offer delivery only, and supermarkets don't appear on the pickup map.

### O18. Store page

A store page shows a cover image, heart, share and menu buttons, the store name with a DashPass marker, category and distance, and buttons for ratings and reviews, customer photos and store info. Below that sit Delivery and Pickup tabs under a fee notice, a time selector, a Group order button, and the menu. The three-dot menu offers starting a group order, searching within the store, and reporting a menu issue. Store info shows a map, address, hours and a phone number. The delivery time selector offers same-day and future days, a standard fastest option, and scheduled times in 20-minute increments; the pickup version offers a standard fastest option and scheduled times up to a couple of days ahead. Scrolling the menu surfaces most-ordered and featured-item tabs.

### O19. Saving a store

Tapping the heart on a store page shows a message confirming the first store has been saved. The saved store then appears under Saved stores in settings.

### O20. Multiple open carts

DoorDash keeps a separate cart per merchant, with a banner introducing the carts screen as a single place for all open carts. One cart button shows the number of open carts, and another shows the total number of items across all of them. Items stay in the carts after the screen is closed and after signing in, and the profile carries its own cart bar for items already added.

### O21. Drugstore, gifts, pets and retail verticals

The Drugstore, Gifts, Pets and Retail shortcuts each open a vertical screen of stores with featured options, working the same way as the other verticals. The Gifts screen specifically has its own search bar, filter tags, a "Send a gift card" section, a section of gift ideas for kids, and a full stores list.

### O22. Payment frequency and backup payments

The Payment settings screen lets the user add a credit card, debit card, Apple Pay or PayPal, and offers a choice between combining orders into fewer payments or paying after each order, plus a backup-payments option that automatically switches to another saved payment method if the default one has an issue.

### O23. Business profile

Account settings include a business profile option for keeping business expenses separate, opening a three-part flow to create the profile, choose a payment method for expensing meals, and add a payment method.

### O24. Account, privacy and appearance settings

Settings include account management for name, country, phone number with verification, email, password, passkeys, saved login info, switching accounts and logging out, plus address, privacy, and a dark mode toggle with on, off and system options. Privacy groups the restricted-profile setting, location access, microphone access and marketing choices.

---

## Goals and progression

A single two-tier reviewer badge is the only progression structure found in the app.

### O25. Profile badges in two tiers

An "Earn a profile badge" button on the contributor profile opens a profile badges screen framed around earning badges and gaining influence. The first badge, Emerging expert, shows a 0 of 3 counter against the criterion of sharing high quality reviews or photos for 3 stores, with copy about gaining visibility, being seen as a reliable voice, and supporting local businesses. A second badge, Local expert, sits below it, greyed out and locked, requiring high quality reviews or photos for 10 or more stores, with copy about being top ranked, seen by the most people, and representing the most trusted voices. What makes a review or photo count as high quality isn't stated.

---

## Access and eligibility

Availability follows the delivery address, and sign-in is required only at checkout and for account-linked surfaces.

### O26. Availability follows the address

DoorDash shows content and prices matching whichever address is entered; using a Canadian address produces Canadian content priced in Canadian dollars, and the first DashPass offer is described as specific to that country.

### O27. Sign-in required to check out

DoorDash lets a signed-out user browse, search, use the AI feature, build carts and open store pages, and requires sign-in or sign-up only when the user is ready to proceed with an order. Sign-in is also required for DashPass, for "Deals and gift cards" on the cart, for saved addresses, and to see deals held behind a login prompt. Starting a group order requires a first name, last name, country and phone number if none is on the account yet.

### O28. Conditions on combined payments

Combining orders into fewer payments is available only for personal profile orders paid with specific major card networks or Apple Pay, and isn't available for business profiles, larger orders, or a list of other payment methods including American Express, PayPal, Venmo, Cash App, Klarna, SNAP EBT or HSA/FSA cards.

---

## Economy and resources

DoorDash credits are a dollar-denominated cashback balance tied to DashPass, not a product-specific currency.

### O29. DoorDash credits and rewards

The Payment settings screen lists DoorDash credits alongside a button to redeem a gift card. The rewards page states that $0 has been redeemed so far, lists a loyalty partner under partner rewards with a link to start earning points there, and offers a link to see more deals. DashPass copy states that members earn 5% back as DoorDash credits on eligible pickup orders, expressed as a percentage of order value.

---

## Social

DoorDash's social layer covers three gift routes, a one-time group order, and a reviews-and-photos layer built around a public contributor profile.

### O30. Gift routes

DoorDash offers three routes to send a gift: an "I'm sending a gift" option on the delivery address, which explains shopping near the recipient's address and adding a card and message; a "Send a gift card" section in the Gifts vertical, showing DoorDash gift cards, featured gift cards and a DashPass subscription; and a Gift card entry in settings, offering a choice of card design and a field to redeem a gift card by PIN.

### O31. Group order

A Group order button opens a screen explaining that friends and family can each add items to a shared order, paid once and delivered together, with a per-person spending limit control defaulting to none. Starting the order asks for the organizer's name, then offers to invite others by copied link, email, message or other apps. Every screen meant to display the organizer's name showed an empty space, since no name had been given, and the store page carries a banner naming the group order and its spending limit.

### O32. Ratings, reviews and customer photos

Each store page opens a ratings and reviews view showing the store's public review and rating counts alongside photos other users have posted. The contributor profile states that public reviews are visible to anyone, including people ordering in the reviewer's own neighborhood, and that public contributions display on the store page. Review excerpts from other customers also appear on the customer favorites screen.

### O33. Public contributor profile

The profile opens a contributor page reading zero contributions, introduced by a three-page explainer about finding trusted local voices and sharing reviews to earn badges. The page offers a share button, an Edit profile button and an "Earn a profile badge" button. Edit profile holds a restricted-profile toggle, off by default, whose copy states that a public profile shows ratings and reviews to anyone while a restricted profile shows only a first name, last initial and contribution count, not their contents. Contributions are held for approval before they appear.

---

## Reach beyond the app

A loyalty-program link, sharing store and group-order links, map-app handoffs and an ads-personalization disclosure each point outside DoorDash.

### O34. Loyalty program linking

DoorDash promotes linking an outside loyalty program account through an animated home screen banner offering welcome points for a qualifying order, with a linking pop-up that asks the user to log in to the partner program. The same offer also appears as a card in the deals carousel and under partner rewards on the rewards page. The terms of the points offer, including whether it applies only to a first order, aren't shown.

### O35. Sharing store, profile and group-order links

A share button on a store page opens the system share sheet with social destinations. The contributor profile has its own button to share the profile with other people. A group order is shared by copied link, email, message or other apps. No reward or condition is attached to any of these shares.

### O36. Handoff to map apps

Tapping a store's address, whether in store info or on the pickup tab, offers to open it in Apple Maps or Google Maps.

### O37. Ad personalization disclosure

A marketing-choices screen opens a disclosure stating that, unless ad personalization has been turned off, DoorDash may share information such as identifiers and platform usage with advertising partners to show personalized ads on other platforms. The setting is on by default.

### O38. Dasher, partner and beta links

Settings hold links to become a delivery driver or a partner restaurant, each opening an outside website form, a link to join a beta test program through TestFlight, and a legal section with the terms and privacy policy. The app version number appears in this same section.

---

## Monetization

DoorDash names a specific set of fees on every order and pairs each one directly to the DashPass subscription that reduces or removes it.

### O39. Fee explainer

A dismissible home screen banner opens a fees explainer stating that DoorDash charges its fees to facilitate delivery and power its platform. The explainer names a service fee, a delivery fee, a long distance fee and a weather impact fee, states that all are avoidable by choosing pickup, and states that exact amounts show at checkout before the order completes. The service fee is a percentage of the subtotal that varies by merchant and is reduced for DashPass members. The delivery fee is a flat fee from $0.49 to $9.99, free for DashPass members on eligible orders. The long distance fee is a flat fee up to $4.99 on orders from farther merchants. The weather impact fee is a flat fee in extreme weather, described as funding additional Dasher pay. Store pages repeat a "Service fees apply" note with their own fee information button.

### O40. DashPass offer after saving an address

Immediately after an address is saved, before the home screen appears, DoorDash shows a DashPass offer listing five benefits: CA$0 delivery fees and lower service fees on eligible orders, member-exclusive deals, family sharing at no extra cost, 5% back as DoorDash credits on eligible pickup orders, and cancellation at any time with no lock-in. Signing in is required to get DashPass, and the offer can be dismissed to keep ordering. The price of DashPass isn't stated on this screen.

### O41. DashPass entry points across the app

Beyond the first offer, DoorDash presents DashPass again in the deals carousel, on the profile, in settings, on the pickup map with a filter and a "5% back" tag, on store pages with a marker, as a Gifts filter, and as a giftable item.

### O42. DashPass trial inside the cart

The cart shows a checkbox offering a specific dollar saving on that order through a free DashPass trial. Tapping it opens a pop-up repeating the offer and stating the price after the free month, with options to start the trial, learn more, or decline. Declining clears the checkbox.

### O43. First-order offers and the post-sign-in welcome offer

Before sign-in, merchant cards show a $0 delivery fee on the first order. After sign-in, DoorDash shows an animated offer for 40% off the first order, up to a stated maximum discount, with a code entered at checkout. The full terms list a minimum order size, a maximum discount, a 30-day validity window, exclusions including alcohol and pickup orders, and other conditions. The terms are internally inconsistent about whether the discount covers one order or multiple orders within the 30-day window.

---

## Return triggers

A notification request, a notification inbox, and dated offer windows make up a thin return layer.

### O44. Notification permission request

After the DashPass offer and before the home screen, DoorDash asks to turn on notifications, naming two purposes, order updates and deals from local businesses, with a note that the choice can be changed later in settings.

### O45. Notification bell and inbox

After signing in, a notification bell with an unread marker appears on the home screen. Opening it shows that there's nothing outstanding, followed by a block prompting the user not to miss deals.

### O46. Stated offer end dates

Several offers carry a stated end date or duration: a grocery offer on the home screen states when it ends, a pet-store deal states how long it lasts, and the welcome offer is valid for 30 days from signup or while supplies last. No countdown timer accompanies any of them, and what happens when an offer ends isn't shown.
