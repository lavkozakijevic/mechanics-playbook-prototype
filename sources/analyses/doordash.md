# DoorDash: App Analysis

**Session date:** 29 Jul 2026

**Additional sessions:** None.

**As observed:** 29 Jul 2026

**App version:** 8.28.0 (577050)

**Analysis date:** 15 Sep 2026

**Last updated:** 15 Sep 2026

**Source.** This analysis is built from one Granola walkthrough session, "DoorDash iOS app review" (29 Jul 2026), retrieved as a full transcript. The Granola folders "App Mechanics" and "Onboarding flows" and the full meeting list were searched, and no other DoorDash session exists. The session opens the iOS app for the first time and covers the entry screen, the tracking and location requests, address entry, the first DashPass offer, the notification request, the home screen and its sections, the deals and customer favorites screens, search and the AI search feature including a recipe photo turned into a shopping list, the cart, the grocery and pickup verticals, a store page, group ordering, the gifts vertical, carts, sign-in with Apple, the post-sign-in welcome offer, notifications, the profile, the public contributor profile and its badges, and the settings screens. No order was placed and no DashPass trial was started. The transcript is machine speech-to-text of live narration with two speaker labels that represent one narrator; a passage in the middle of the home feed and the start of search is fragmented, and observations drawn from it are marked. Prices are reported as transcribed: dollar figures without decimal points in the transcript ("$049", "$999", "$499") are read as $0.49, $9.99 and $4.99, and that reading is marked where used. The app version is stated in the settings screen and is transcribed as "8.28.0 in brackets. 5 77050"; it is recorded above with the bracketed build number written as one figure. The session uses a Canadian address, so prices are in Canadian dollars.

---

# Pass one: observation record

1. Onboarding and first run: O1 to O6
2. Core loop and automation: O7 to O24
3. Goals and progression: O25 to O25
4. Access and eligibility: O26 to O28
5. Economy and resources: O29 to O29
6. Social: O30 to O33
7. Reach beyond the app: O34 to O38
8. Monetization: O39 to O43
9. Return triggers: O44 to O46

## Onboarding and first run

**O1. Entry screen with sign-in routes and a guest route.**

**Observed:** DoorDash opens on a screen that asks for a phone number, with a "use email instead" button, a Continue button, options to continue with Google, Facebook or Apple, and a "search nearby" option (tier: directly observed). Tapping "search nearby" lets the session proceed without creating an account (tier: directly observed).

**Detail:**
- The guest route leads directly into the tracking request, the location request and address entry (tier: directly observed).
- No name, email or password is requested on the guest route (tier: directly observed).
- The session stays signed out through address entry, the home screen, search, the cart, the verticals and a store page, and signs in only later from the profile button (tier: directly observed).

*Cross-reference: O6, O27.*

**O2. Tracking explainer followed by the system tracking request.**

**Observed:** Before the system request, DoorDash shows its own screen titled "See personalized offers by allowing activity tracking", which states that activity tracking lets it personalize the offers and deals the user sees in DoorDash ads on favorite websites and apps, and lists "Discover restaurants, dishes and stores you like", "Get more relevant offers" and "You're in control. Turn off sharing anytime you want" (tier: directly observed). After Continue, the iOS prompt asks whether to allow DoorDash to track activity across other companies' apps and websites (tier: directly observed).

**Detail:**
- The explainer frames tracking through what the user receives, namely offers, deals and relevance (tier: directly observed).
- The narration mentions only a Continue button on the explainer screen (tier: plausible, the narration does not state whether a decline option was present).
- The answer given to the system prompt is not stated (tier: directly observed).

*Cross-reference: O37.*

**O3. Location request and manual address entry.**

**Observed:** DoorDash asks for location access with the copy "DoorDash needs your location to show nearby stores" and the options Allow Once, Allow While Using App and Don't Allow (tier: directly observed). After Don't Allow, the app requires the user to type an address or "sign in for saved address" before continuing (tier: directly observed).

**Detail:**
- The narrator declines location because they are not in a country where DoorDash operates (tier: directly observed).
- A search for a New York address returned no result, and the narrator settles on Canadian addresses after several attempts (tier: directly observed).

*Cross-reference: O26.*

**O4. Address type and delivery details.**

**Observed:** After an address is chosen, DoorDash asks for an address type among house, apartment, hotel, office and other (tier: directly observed). When the chosen address belongs to a registered business, in the session a bank, the app marks it as an office without asking (tier: directly observed). The details screen then offers pin adjustment, a suite or floor field and a business name field each tagged "Recommended", a building entrance pin, delivery preferences, delivery instructions, a personal label, an "I'm sending a gift" option and a Save address button (tier: directly observed).

**Detail:**
- On the first address, tapping any of the type options produced no visible change (tier: directly observed).
- Delivery preferences for the office address offer "leave it at location" (lobby, office, suite, floor) or "meet at location" (lobby, office, suite, floor, outside) (tier: directly observed).
- The narrator reads the office-specific delivery options as a response to the detected address type (tier: plausible, the session does not show the same screen for a non-office address for comparison).
- The personal label choices are home, work and custom, and the session sets Work (tier: directly observed).
- The "I'm sending a gift" option states that a card and note can be added at checkout (tier: directly observed).

*Cross-reference: O30, O40.*

**O5. First home screen with an empty name in the greeting.**

**Observed:** DoorDash's first home screen shows an address dropdown at the top left set to "Work", profile and cart icons at the top right, and a greeting that reads "Happy Wednesday" followed by a comma and an exclamation mark with no name between them (tier: directly observed). Nothing in the flow up to this point asked for a name (tier: directly observed).

**Detail:**
- The address dropdown opens an addresses screen with address search, "sign in for saved address", "use current location", an "Enable Location Services" button and the saved address (tier: directly observed).
- The narrator treats the empty greeting as a defect in personalization for signed-out users (tier: plausible, this is the narrator's reading).
- The same missing name appears in the group order screens (tier: directly observed).
- After sign-in the name is filled in wherever the app addresses the user (tier: directly observed).

*Cross-reference: O6, O31.*

**O6. Sign-in with Apple and the signed-in state.**

**Observed:** From the profile button, which asks the user to sign in or sign up, the narrator signs in with Apple and the sign-in succeeds (tier: directly observed). The home screen then changes background color, shows an animated present with 40% off tags, uses the narrator's name, and adds a notification bell with one unread marker beside the profile and cart icons (tier: directly observed).

**Detail:**
- The narrator expects the sign-up route to ask for a phone number and chooses Apple instead (tier: plausible, the phone number step is anticipated rather than shown).
- The profile shows a placeholder image with the first letter of the name, a dropdown stating "We found multiple accounts associated with this device. You can use a different account here", and "Customer since" with the month and year of sign-in (tier: directly observed).
- Below that the profile offers "Try Pass for free, get $0 delivery fee and more", a row of tabs (Orders, Try Pass, Settings, Profile, Rewards), a Saved stores list, and a "View cart" bar at the bottom for the items already added (tier: directly observed).
- Orders reads "No orders yet. Let's change that by placing your first order" with a "Search items" button (tier: directly observed).

*Cross-reference: O20, O41, O43, O45.*

## Core loop and automation

**O7. Category shortcuts and cuisine tags on the home screen.**

**Observed:** DoorDash places a horizontal row of category shortcuts under the header, reading Deals, Grocery, Convenience, Pickup, Drugstore, Gifts, Retail and Pets, and a second set of cuisine and dish tags further down (tier: directly observed).

**Detail:**
- The cuisine and dish tags include fast food, pizza, burgers, sushi, Indian, sandwiches, desserts, Thai, salad, halal, ramen, breakfast, deals, healthy, Chinese, chicken, coffee, Mexican, soup, Asian, noodles, smoothie and African (tier: directly observed).
- Each tag opens a filtered view (tier: strongly supported, the narration states that the tags can be tapped and demonstrates it for the category shortcuts).

*Cross-reference: O8, O15, O17, O21.*

**O8. Home feed of merchant sections.**

**Observed:** DoorDash builds the home screen as a vertical sequence of horizontally scrolling merchant sections, each of which can be expanded into its own full list (tier: directly observed). In order the session shows a PC Optimum partner banner, "Deals for you", a three-item offers section, "Under $2 delivery fee", "Fastest near you", Grocery, "Try something new", "Retail stores delivered", a "You have deals waiting. Log in to see your deals" block, and "Quick and affordable lunches" (tier: directly observed). Further sections follow, and the list continues without a visible end (tier: strongly supported, this part of the transcript is fragmented but names local favorites, convenience and drugstores, a second deals section, pet supplies, several dish sections and "More stores").

**Detail:**
- "Deals for you" is a carousel of 15 or more deals, and each card shows an image, the merchant, the star rating, the number of ratings, distance, preparation time and the delivery fee (tier: directly observed).
- Deal examples on the cards include $0 delivery fee on the first order, $5 off an order of $40 or more at Taco Bell, and a buy one get one free item on $20 or more at McDonald's (tier: directly observed).
- The offers section features three items: "Save big on time and groceries" with a code, an end date and 25% off up to $15; a shawarma merchant; and $5 off select Revlon lip items labelled sponsored with an Order now button (tier: directly observed).
- In "Fastest near you" some merchants carry a lightning symbol, for example McDonald's at 13 minutes (tier: directly observed).
- The narrator reads the lightning symbol as marking very short delivery times (tier: plausible, the threshold is not stated by the app).
- "Try something new" is labelled as sponsored (tier: directly observed).
- The "You have deals waiting" block with a Log in button sits in the middle of the scrolling feed (tier: directly observed).
- The pet supplies section is shown although no pet information was ever given (tier: directly observed).

*Cross-reference: O9, O10, O11, O34, O43, O46.*

**O9. Merchant card tags and what they do.**

**Observed:** DoorDash attaches tags to merchant cards in several colors, and only some of them respond to a tap (tier: directly observed). Red deal tags such as "buy one get one free", "$5 off on $40" and "$0 delivery fee" do nothing when tapped, the black "In-store prices" tag does nothing, and the "Customer favorite" tag opens the customer favorites screen (tier: directly observed).

**Detail:**
- The "In-store prices" tag appears on some grocery and retail merchants and not on others (tier: directly observed).
- The narrator reads "In-store prices" as meaning the merchant charges the same prices on DoorDash as in the store (tier: plausible, the tag's meaning is not explained on screen).
- Walmart carries a "100+ items on sale" tag (tier: directly observed).
- "Customer favorite" appears, for example, under Booster Juice (tier: directly observed).
- Sponsored merchants are labelled as sponsored inside ordinary sections (tier: directly observed).

*Cross-reference: O11.*

**O10. Deals screen.**

**Observed:** Tapping "Deals for you" opens a deals screen with three dropdown filters for cuisine, deal type and ratings, a carousel of offer cards, and a scrolling list of merchants with deals in which some sponsored entries appear at the top (tier: directly observed).

**Detail:**
- The cuisine dropdown lists chicken, burgers, sandwiches, coffee, breakfast, desserts, seafood, fast food, healthy, salad, poke, Mexican, pizza, Asian and Indian, with View results and Reset buttons (tier: directly observed).
- The deal type dropdown shows delivery fee discount (tier: directly observed).
- The ratings dropdown offers thresholds from 4.5 to 4.9 (tier: directly observed).
- The offer cards are, in order: "Want exclusive offers? Try DashPass" with a Sign up now button; 30% off an order of $55 from select pet stores with a code, a stated duration, "Terms apply" and Shop now; a PC Optimum linking card; and 25% off a $25 convenience order on Dr Pepper and Doritos (tier: directly observed).

*Cross-reference: O34, O41, O46.*

**O11. Customer favorites screen with reviews.**

**Observed:** The "Customer favorite" tag opens a screen headed as customer favorites "top ranked in your area based on customer ratings, popularity and reliability", with All and Favorites options, "Open now" and "Delivers to me" filters, and a list of six merchants for the chosen location (tier: directly observed). Each entry shows the rating, the number of ratings, delivery time, distance, and excerpts of customer comments (tier: directly observed).

**Detail:**
- The first merchant listed is Pizza Hut (tier: directly observed).
- The comments shown include both praise ("Hot and fresh, lots of cheese and toppings, crisp crust. 10 out of 10") and complaints (no extra cheese, barely any pepperoni, soggy, no sauce on the wings) (tier: directly observed).
- Some of the reviews shown date from 2023 and 2024 (tier: directly observed).
- The narrator states the reviews are not sorted and not screened (tier: plausible, the ordering rule and any moderation are not shown by the app).
- Whether the six merchants are displayed with numbered positions is not stated (tier: directly observed).

*Cross-reference: O9, O32.*

**O12. Search and the AI search feature.**

**Observed:** A "Search DoorDash" bar at the bottom of the home screen opens a search screen with a prompt reading "A better way to search. Just ask", recommended item tags, cuisines and groceries (tier: strongly supported, this passage of the transcript is fragmented). Tapping the prompt opens "search by vibe", which states it is a beta AI feature that can make mistakes, asks "What are you in the mood for?", and notes that input may be used to personalize the experience (tier: strongly supported, the wording is partly fragmented in the transcript). A Chats button at the top right opens an empty chat history (tier: directly observed).

**Detail:**
- Example prompts under the search heading include ordering groceries and healthy options (tier: plausible, the example phrases are fragmented).
- The recommended tags include toilet paper, enchilada, boba, sushi, calzone, avocado toast and cat litter (tier: directly observed).
- The AI screen offers "Snap your grocery list or recipe" with a camera button (tier: directly observed).

*Cross-reference: O13, O14.*

**O13. Recipe photo turned into a shopping list and cart.**

**Observed:** After camera access is granted and a photo of a recipe is sent, DoorDash shows working states ("thinking", "analyzing your requests", "preparing your results"), identifies the recipe as boeuf bourguignon, states it is shopping at Sobeys, and returns a list reported as "Found 11 out of 11 items" with images, a total cost and an Add to cart button (tier: directly observed). The assistant notes that Sobeys does not carry a Burgundy-style red wine on DoorDash, substitutes a cooking wine, and suggests buying red wine separately (tier: directly observed).

**Detail:**
- The response took a long time (tier: directly observed).
- The assistant's substitution is described first as a cooking wine and later as a white cooking wine (tier: directly observed).
- Follow-up suggestion chips read "Add bay leaves for bouquet garni", "Serve with crusty bread" and "Make it a day ahead" (tier: directly observed).
- View list shows every item with Swap and Remove controls, and Swap offers alternative items (tier: directly observed).
- The cart shows the store, delivery time and cost, quantity controls on each item, "Complement your cart" and "Our picks for you" sections, and a summary with subtotal, delivery fee, fees, estimated tax and total (tier: directly observed).
- A "Deals and gift cards" button on the cart opens a sign-in prompt (tier: directly observed).
- Closing the cart leaves the items in place and adds a marker to the cart icon (tier: directly observed).

*Cross-reference: O14, O20, O27, O42.*

**O14. Microphone request without a voice action.**

**Observed:** Shortly after the cart is closed, DoorDash shows the system prompt "Allow DoorDash to access your microphone" although no voice or dictation control had been used (tier: directly observed).

**Detail:**
- The narrator states they did not ask to record audio (tier: directly observed).
- What triggered the request is not shown (tier: directly observed).

*Cross-reference: O12, O24.*

**O15. Grocery vertical.**

**Observed:** The Grocery shortcut opens a screen with a "Search grocery" bar and an "Ask AI" button, Convenience and Grocery filter tags, a top stores list with tags, a "Top savings" section of store offers, a "Grocery essentials" section, and product rows that carry stock indicators (tier: directly observed).

**Detail:**
- Top store tags include "In-store prices", "25% off, up to $15" and percentage discounts on certain items (tier: directly observed).
- Store deal groupings include dairy deals, snack deals and pantry deals at Walmart, and drinks and personal care deals at Shoppers Drug Mart, each stating the percentage off (tier: directly observed).
- Product rows at Dominion's Dairy and Eggs section show "Many in stock" or "Likely out of stock" (tier: directly observed).
- Items marked likely out of stock show a Request button in place of the add control (tier: directly observed).

*Cross-reference: O9, O16.*

**O16. Grocery item page with freshness guarantee and substitutions.**

**Observed:** A grocery item page (salted butter) shows the image, store, delivery time and delivery fee, a "Freshness guaranteed or your money back" tag, the product name, size and price, a stock tag, "Add shopper instructions", "Add substitutions", details, "You may also like" and "Often bought with" (tier: directly observed). The information button on the guarantee opens a pop-up reading "100% fresh or your money back", stating that groceries should arrive with "no spoilage, no melting, no surprises", and that a refund is obtained by tapping Help on the order receipt and describing what happened (tier: directly observed).

**Detail:**
- Substitution choices are "any similar" butter with the note that the shopper will say what they picked, "substitute with specific items", "contact" and "refund" (tier: directly observed).
- "Substitute with specific items" lets the user choose acceptable alternatives from the store (tier: directly observed).
- A text field reads "Want it a certain way? Drop a note" (tier: strongly supported, the transcribed wording is slightly garbled).
- The Add substitutions button appears twice on the page (tier: directly observed).

*Cross-reference: O15, O39.*

**O17. Pickup map.**

**Observed:** The Pickup shortcut opens a map, first with a pop-up headed "Discover your neighborhood with the new map" that explains tapping pins to see popular menu items and searching directly on the map, with an Explore button (tier: directly observed). The map has a search bar, filter tags (Open now, Pickup, DashPass, Ratings, Price), typed pins, a "5% back on pickup orders with DashPass" tag, and store cards with Delivery and Pickup buttons (tier: directly observed).

**Detail:**
- Store cards show rating, a price level in one to three currency symbols, walking distance, whether the store is open and when it closes, and product images (tier: directly observed).
- Ratings and Price are dropdown filters (tier: directly observed).
- Some stores, such as a corner store, offer delivery only (tier: directly observed).
- Supermarkets do not appear on the pickup map (tier: directly observed).

*Cross-reference: O18, O29, O41.*

**O18. Store page with delivery and pickup scheduling.**

**Observed:** A store page (Sugar Mama's, a bakery) shows a cover image, heart, share and three-dot buttons, the store name with a DashPass marker, category and distance, and buttons for ratings and reviews, customer photos and store info (tier: directly observed). Below them the page offers Delivery and Pickup tabs under a "Service fees apply" note, a delivery or pickup time selector, a Group order button, and the menu (tier: directly observed).

**Detail:**
- The three-dot menu offers "Start a group order", search within the store, and "Report a menu issue" (tier: directly observed).
- Store info shows a map, the street, that the store is open and accepting DoorDash orders until a stated time (7:50 pm in the example), and a phone number (tier: directly observed).
- On Delivery an information button shows pricing and fees for this merchant (tier: directly observed).
- The delivery time selector offers today, tomorrow, Friday and the following days, a standard option (for example 15 minutes from now) and scheduled times in 20-minute increments (tier: directly observed).
- On Pickup the page shows the pickup address, a standard "ready in 2 minutes" option, and scheduled pickup times up to a couple of days ahead (tier: directly observed).
- Scrolling the menu brings up "Most ordered" and "Featured items" tabs, and a full menu button shows the menu with opening hours (tier: directly observed).

*Cross-reference: O19, O31, O32, O35, O36, O39.*

**O19. Saving a store.**

**Observed:** Tapping the heart on a store page shows a message reading "You've saved your first store" (tier: directly observed). The saved store then appears under Saved stores in settings, which carries a "New" tag (tier: directly observed).

**Detail:**
- A further tag shown with the message disappeared on its own before it could be read (tier: directly observed).
- Saved stores lists only Sugar Mama's, the one store saved (tier: directly observed).
- Whether later saves produce any message is not observed (tier: directly observed).

*Cross-reference: O18.*

**O20. Multiple open carts.**

**Observed:** DoorDash keeps a separate cart per merchant, and the cart screen opens with a banner reading "Welcome to DoorDash carts. All your open carts in one place" that can be closed (tier: directly observed). The cart button at the top right shows the number of open carts, two in the session, while a cart button at the bottom right shows the total number of items across carts (tier: directly observed).

**Detail:**
- Items stay in the carts after the cart screen is closed and after sign-in (tier: directly observed).
- The profile shows a "View cart" bar at the bottom for the items already added (tier: directly observed).
- The narrator reads the bar as a reminder not to forget the cart (tier: plausible, this is the narrator's reading).

*Cross-reference: O6, O13.*

**O21. Drugstore, gifts, pets and retail verticals.**

**Observed:** The Drugstore, Gifts, Pets and Retail shortcuts each open a vertical screen of stores with featured options, and the narrator states that they work in the same way (tier: directly observed). The Gifts screen has a "Search gifts" bar, filter tags (Pickup, Ratings, Under 30 minutes, Price, DashPass), a "Send a gift card" section, a "Kids top picks" section of toys, and an all stores list (tier: directly observed).

**Detail:**
- Only the Gifts vertical is described section by section (tier: directly observed).

*Cross-reference: O30.*

**O22. Payment frequency and backup payments.**

**Observed:** The Payment settings screen lets the user add a credit card, debit card, Apple Pay or PayPal, and offers "Payment frequency" and "Backup payments" (tier: directly observed). Payment frequency offers "Combine orders into fewer payments" or "Pay after each order", described as paying once for all orders in a day or after each order (tier: directly observed). Backup payments, when enabled, automatically uses another saved payment method if there is an issue with the default one (tier: directly observed).

**Detail:**
- Neither option was switched on during the session (tier: strongly supported, the narration describes the screens without changing them).

*Cross-reference: O28, O29.*

**O23. Business profile.**

**Observed:** Account settings include "Business profile: Keep business expenses separate", which opens a three-part screen: create a business profile, select a payment method ("use your corporate card to expense meals and keep business orders separated"), and add a payment method (credit card, debit card or PayPal) (tier: directly observed).

**Detail:**
- No business profile was created (tier: strongly supported, the narration describes the screen only).

*Cross-reference: O28.*

**O24. Account, privacy and appearance settings.**

**Observed:** Settings include Manage account (first name, last name, country, phone number with verification, email, password, passkeys, saved login info, switch account, log out), Address, Privacy, and Dark mode with on, off and system options (tier: directly observed). Privacy groups the restricted profile setting, location access, microphone access and marketing choices (tier: directly observed).

**Detail:**
- Get help is listed among the settings entries (tier: directly observed).

*Cross-reference: O14, O33, O37.*

## Goals and progression

**O25. Profile badges in two tiers.**

**Observed:** An "Earn a profile badge" button next to the name on the contributor profile opens a "Profile badges" screen headed "Earn badges and gain influence on DoorDash" (tier: directly observed). The first badge, "Emerging expert", shows 0 of 3 with the criterion "Share high quality reviews or photos for 3 stores" and the lines "Gain more visibility for your contributions", "Be a reliable voice for other customers" and "Gather support for local business" (tier: directly observed). Below it a second badge, "Local expert", is greyed out and locked, with the criterion "Share high quality reviews or photos for 10+ stores" and the lines "Be top ranked and seen by the most people", "Represent the most trusted voices" and "Make a real difference for local businesses" (tier: directly observed).

**Detail:**
- The progress figure counts stores reviewed or photographed against the criterion, and stands at zero (tier: directly observed).
- What makes a review or photo count as "high quality" is not stated (tier: directly observed).
- The narrator describes Local expert as the next level after Emerging expert (tier: plausible, the app shows it locked below the first badge but does not state that it requires the first).
- Where an earned badge is displayed, whether it can be lost, and whether the visibility and ranking lines take effect are not observed (tier: directly observed).
- The "Earn a profile badge" button also appears on the profile reached from the profile tab (tier: directly observed).

*Cross-reference: O32, O33.*

## Access and eligibility

**O26. Availability follows the delivery address.**

**Observed:** The narrator is outside any country DoorDash serves, declines location, and uses a Canadian address, after which DoorDash shows Canadian content priced in Canadian dollars (tier: directly observed).

**Detail:**
- The first DashPass offer is described by the narrator as Canada specific (tier: directly observed).
- Whether an address in an unserved country can be saved is not tested (tier: directly observed).

*Cross-reference: O3, O40.*

**O27. Sign-in required to check out and for account surfaces.**

**Observed:** DoorDash lets a signed-out user browse, search, use the AI feature, build carts and open store pages, and requires sign-in or sign-up when the user taps "done adding items" to proceed with an order (tier: directly observed). Sign-in is also required for DashPass, for "Deals and gift cards" on the cart, for saved addresses, and to see the deals behind "You have deals waiting" (tier: directly observed).

**Detail:**
- Starting a group order requires a first name, last name, country and phone number when no name is on the account (tier: directly observed).

*Cross-reference: O1, O6, O8, O13, O31, O40.*

**O28. Conditions on combined payments.**

**Observed:** DoorDash states that combining orders into fewer payments is available for personal profile orders using Mastercard, Visa, Apple Pay or Discover, and not available for business profiles, orders over 100, or orders paid with American Express, PayPal, Venmo, Cash App, Klarna, SNAP EBT or HSA/FSA cards (tier: directly observed).

**Detail:**
- The currency of the "over 100" limit is not stated in the transcript (tier: directly observed).

*Cross-reference: O22, O23.*

## Economy and resources

**O29. DoorDash credits and the rewards page.**

**Observed:** The Payment settings screen lists "DoorDash credits" with a "Redeem gift card" button beside it (tier: directly observed). The My rewards page states "redeemed a total of $0", lists PC Optimum under partner rewards with a link to start earning points, and offers "See more deals" (tier: directly observed). DashPass copy states that members earn 5% back as DoorDash credits on eligible pickup orders (tier: directly observed).

**Detail:**
- No credits balance figure is stated in the transcript (tier: directly observed).
- The 5% back is expressed as a percentage of order value (tier: directly observed).
- The credits are denominated in dollars rather than in product-specific units (tier: strongly supported, they are earned as a percentage of spend, listed beside gift card redemption, and the rewards page reports redemptions in dollars).
- Nothing was earned or redeemed in the session (tier: directly observed).

*Cross-reference: O17, O30, O34, O40.*

## Social

**O30. Gift routes.**

**Observed:** DoorDash offers three gift routes: an "I'm sending a gift" option on the delivery address, a "Send a gift card" section in the Gifts vertical, and a Gift card entry in settings (tier: directly observed). The address option's information button explains "How to send a gift": use the recipient's address to shop gifts near them, add their name and phone number so they can track the order, and include a digital card and message (tier: directly observed).

**Detail:**
- The "Send a gift card" section shows DoorDash gift cards, featured gift cards and a DashPass subscription, and the narrator states all of these can be gifted (tier: directly observed).
- Whether the DashPass item is sold as a gift card or as a subscription entitlement is not shown, because the item was not opened (tier: directly observed).
- The settings Gift card entry reads "Connect your favorite people with their favorites, from noodles to nachos. Customize and buy gift card", offers a choice of card design and a Buy gift card button, and has a "Redeem a gift card" field for a PIN (tier: directly observed).
- No gift was sent (tier: directly observed).

*Cross-reference: O4, O21, O29.*

**O31. Group order.**

**Observed:** The Group order button opens "Start your group order", which states that the user can share the order with friends and family so each person adds items, then pay once and get it all delivered together, with a per-person spending limit control and Start group order and Cancel buttons (tier: directly observed). Starting the order asks "Tell us your name so we can identify your food", then shows "Invite others to join" with copy link, email, message and more, then a "View group order" button (tier: directly observed). The store page then carries a "Group order by" banner with the per-person limit and an Invite button (tier: directly observed).

**Detail:**
- The spending limit defaults to "No per-person spending limit" and offers $10, $15, $20 or other (tier: directly observed).
- The name form asks for first name, last name, country and phone number, and offers order status updates by text, with Continue and "Leave group" buttons (tier: directly observed).
- Every screen that should show the organizer's name ("Join [name]'s group order", "Invite others to join [name]'s group order", "Group order by [name]") shows an empty space because no name had been given (tier: directly observed).
- No one joined the group order (tier: directly observed).

*Cross-reference: O5, O18, O27, O35.*

**O32. Ratings, reviews and customer photos on store pages.**

**Observed:** Each store page opens a ratings and reviews view showing how many public reviews and ratings the store has, with images users have left, and a customer photos view listing photos people have posted (tier: directly observed).

**Detail:**
- Review excerpts from other customers also appear on the customer favorites screen (tier: directly observed).
- The contributor profile states that public reviews are visible to anyone, including people ordering in the reviewer's neighborhood, and that public contributions display on the store page (tier: directly observed).
- Writing a review was not attempted (tier: directly observed).

*Cross-reference: O11, O18, O25, O33.*

**O33. Public contributor profile.**

**Observed:** The first item in settings, the user's profile, opens a contributor page reading "0 contributions. All contributions will appear once they're approved", over which DoorDash shows a three-page explainer (tier: directly observed). The pages read "Find the voices you trust more easily. Find local experts, people on DoorDash that you can count on to provide great reviews and recommendations", "Share your thoughts. Become a trusted voice by sharing reviews and earning badges. Now you'll see all of your contributions in one place", and "What's visible on your profile. Your public contributions are visible on this page. You can make it restricted anytime with edit profile" (tier: directly observed). The profile then reads "No contributions. You haven't shared anything yet", with a share button at the top right, an Edit profile button and the "Earn a profile badge" button (tier: directly observed).

**Detail:**
- Edit profile holds first name, last name and a "Restricted profile" toggle that is off by default (tier: directly observed).
- The toggle copy states that a public profile shows profile ratings and public reviews to anyone, including people ordering in the neighborhood, while a restricted profile shows only first name, last initial and the number of public contributions, not their contents, and that public contributions still display on the store page (tier: directly observed).
- The restricted profile setting is also reachable from Privacy (tier: directly observed).
- Contributions are held for approval before they appear (tier: directly observed).

*Cross-reference: O24, O25, O32, O35.*

## Reach beyond the app

**O34. PC Optimum account linking.**

**Observed:** DoorDash promotes a partnership with PC Optimum on the home screen through an animated banner reading "Get 2,000 welcome points" with "Link your PC Optimum account. Order $20 to earn 2,000 points" and a Link now button (tier: directly observed). Link now opens a pop-up asking the user to log in to PC Optimum to link the account (tier: directly observed).

**Detail:**
- The same linking offer appears as a card in the deals carousel and under partner rewards on the My rewards page (tier: directly observed).
- The terms of the 2,000 points, including whether they apply only to a first order, are not shown (tier: directly observed).
- The account was not linked (tier: directly observed).

*Cross-reference: O8, O10, O29.*

**O35. Sending store, profile and group order links out.**

**Observed:** The share button on a store page opens the system share sheet with social destinations, the contributor profile has a button to share the profile with other people, and a group order is shared by copied link, email, message or other apps (tier: directly observed).

**Detail:**
- No reward or condition is attached to any of these shares (tier: directly observed).

*Cross-reference: O18, O31, O33.*

**O36. Handoff to map apps.**

**Observed:** Tapping a store's address, in store info or on the pickup tab, offers to open it in Apple Maps or Google Maps (tier: directly observed).

**Detail:** None.

*Cross-reference: O18.*

**O37. Ad personalization disclosure on by default.**

**Observed:** Marketing choices ("Learn about and control personalized ads") opens a pop-up on disclosing data to advertising partners, stating that if the user has not turned off ad personalization, DoorDash may disclose personal information such as identifiers and service and platform usage to advertising partners to show personalized ads on third-party platforms (tier: directly observed). The setting is on by default (tier: directly observed).

**Detail:**
- The narrator questions whether the default complies with the rules (tier: plausible, this is the narrator's opinion and is not assessed here).

*Cross-reference: O2, O24.*

**O38. Links to become a Dasher, a partner restaurant or a beta tester.**

**Observed:** Under More in settings, "Become a Dasher" and "Become a partner restaurant" each open a website form, "Join the beta" opens a TestFlight link, and Legal opens the terms and conditions and privacy policy (tier: directly observed).

**Detail:**
- The app version appears in this section (tier: directly observed).

*Cross-reference: O24.*

## Monetization

**O39. Service fee banner and fee explainer.**

**Observed:** The home screen carries a dismissible banner reading "Service fee applies. Tap for details", which opens "Fees on DoorDash": DoorDash charges these fees "to facilitate delivery and power its platform" (tier: directly observed). The pop-up lists a service fee, a delivery fee, a long distance fee and a weather impact fee, states that all fees are avoidable by selecting pickup, and states that exact amounts are shown at checkout before the transaction is completed (tier: directly observed).

**Detail:**
- The service fee is a percentage of the subtotal that varies by merchant, is reduced for DashPass members on eligible orders, has minimums that vary by merchant, and is shown per store on each store page (tier: directly observed).
- The delivery fee is a flat fee from $0.49 to $9.99, $0 for DashPass members on eligible orders, and varies by store, location and other factors (tier: strongly supported, the figures are transcribed as "$049 to $999" and read with decimal points).
- The long distance fee is a flat fee of up to $4.99 on orders from the merchants furthest away, avoidable by choosing closer merchants (tier: strongly supported, the figure is transcribed as "$499").
- The weather impact fee is a flat fee in extreme weather "to help fund additional Dasher pay" (tier: directly observed).
- The pop-up closes with "Got it", and the banner's X removes it (tier: directly observed).
- Store pages repeat "Service fees apply" with a per-merchant fee information button (tier: directly observed).

*Cross-reference: O17, O18, O40.*

**O40. DashPass offer after saving the first address.**

**Observed:** Immediately after the address is saved, DoorDash shows a DashPass pop-up headed "Get CA$0 fees plus exclusive benefits" with five listed benefits: CA$0 delivery fees and lower service fees on eligible orders; member-exclusive deals on restaurants, groceries and more; "Share your benefits with family sharing. Add a loved one for free"; 5% back as DoorDash credits on eligible pickup orders; and "Cancel anytime. No hidden fees or lock-ins" (tier: directly observed). Getting DashPass requires signing in, and the pop-up lets the user go back and continue ordering (tier: directly observed).

**Detail:**
- The price of DashPass is not stated on this pop-up (tier: directly observed).
- This is the first offer DoorDash presents, before the home screen is reached (tier: directly observed).
- The family sharing benefit is stated only as copy, and no sharing screen is reached in the session (tier: directly observed).

*Cross-reference: O4, O26, O27, O29, O41, O42.*

**O41. DashPass entry points across the app.**

**Observed:** Beyond the first pop-up, DoorDash presents DashPass in the deals carousel ("Want exclusive offers? Try DashPass" with Sign up now), on the profile ("Try Pass for free, get $0 delivery fee and more" and a Try Pass tab that opens the benefits pop-up), in settings ("Get $0 delivery fees with DashPass", which opens the paywall), on the pickup map (a DashPass filter and a "5% back on pickup orders with DashPass" tag), on store pages (a DashPass marker), as a Gifts filter, and as a giftable item (tier: directly observed).

**Detail:**
- The paywall screen reached from settings is not described in detail (tier: directly observed).

*Cross-reference: O6, O10, O17, O18, O21, O30, O40, O42.*

**O42. DashPass free trial offered inside the cart.**

**Observed:** The cart shows a checkbox reading "Save CA$2.84 on this order with a free trial of DashPass. Get $0 delivery fees and lower service fees on eligible orders. Cancel anytime" (tier: directly observed). Tapping it immediately opens a pop-up that repeats the message and states "1 month free, then CA$10/month", with "Start free DashPass trial", "Learn more" and "Not now" (tier: directly observed). Choosing Not now clears the checkbox (tier: directly observed).

**Detail:**
- The saving is stated as a specific amount for the current cart (tier: directly observed).
- The trial is priced in Canadian dollars per month after the free month (tier: directly observed).

*Cross-reference: O13, O40, O41.*

**O43. First-order price offers and the welcome offer after sign-in.**

**Observed:** Before sign-in, merchant cards show a $0 delivery fee on the first order (tier: directly observed). After sign-in, DoorDash shows an animated present with 40% off tags reading "Get 40% off your first order. 40% off your first $15+ delivery. Use SURPRISE40 for up to $13 off" with a Learn more button (tier: directly observed). Learn more opens "Welcome to DoorDash. Enjoy 40% off your first order for your first 30 days. Use code SURPRISE40 at checkout. Go ahead, satisfy your craving", followed by the terms (tier: directly observed).

**Detail:**
- The terms state: 40% off first orders and $0 delivery on the first order; new customers only; minimum subtotal above $15 excluding taxes and fees; maximum discount $13 per order; valid for 30 days from signup; valid while supplies last; other fees, taxes and gratuity still apply; only for eligible users identified in the app; not valid on pickup orders; deliveries subject to availability; a valid account with an accepted payment method on file is required; not valid for alcohol; no cash value and non-transferable; the code is entered at checkout for each order (tier: directly observed).
- The offer copy is internally inconsistent: it names "your first order" in the headline, "your first orders" and entering the code "for each order" in the terms, and both "$0 delivery on your first order" and "other fees including delivery ... still apply" (tier: directly observed).
- Whether the discount applies to one order or to several orders within 30 days is therefore not established (tier: directly observed).
- The offer appears after a "You have deals waiting. Log in to see your deals" block had been shown to the signed-out user (tier: directly observed).
- The code was not used (tier: directly observed).

*Cross-reference: O6, O8, O46.*

## Return triggers

**O44. Notification permission request.**

**Observed:** After the DashPass pop-up and before the home screen, DoorDash asks to send notifications with the copy "Never miss an order update or great deal. Turn on notifications to get the latest on your order and discover deals from your favorite local businesses. You can configure these later in Settings" (tier: directly observed).

**Detail:**
- The request names two purposes, order updates and deals from local businesses (tier: directly observed).
- The narrator's answer is not stated (tier: directly observed).

*Cross-reference: O45.*

**O45. Notification bell and inbox after sign-in.**

**Observed:** After sign-in, a notification bell with one unread marker appears on the home screen (tier: directly observed). Opening it shows "Hello, you're all caught up on notifications" and, below, a "Don't miss those deals" block (tier: directly observed).

**Detail:**
- The narrator reads the "Don't miss those deals" block as indicating that notifications are turned off (tier: plausible, the block's full copy and control are not transcribed).
- What the one unread marker referred to is not shown, since the inbox reports nothing outstanding (tier: directly observed).

*Cross-reference: O6, O44.*

**O46. Stated offer end dates and validity windows.**

**Observed:** DoorDash attaches end dates or durations to several offers: the grocery offer on the home screen states when it ends, the pet store deal states how long it lasts, and the welcome offer is valid for 30 days from signup and "while supplies last" (tier: directly observed).

**Detail:**
- The specific dates and remaining times are not transcribed (tier: directly observed).
- No countdown timer is described (tier: directly observed).
- What happens when an offer ends is not observed (tier: directly observed).

*Cross-reference: O8, O10, O43.*

# Pass two: tagging

## Applied tags

**Tag:** Achievement

**Observations:** O25.

**Supporting observations:** O32, O33.

**Confidence:** strongly supported.

**Role:** engagement, social.

The badges name a count of stores reviewed or photographed as the next thing to do (O25), and most of the benefits they state concern visibility to other customers, who see public contributions on the profile and on store pages (O25, O32, O33).

**Rationale:** DoorDash defines two badges, Emerging expert and Local expert, each with a criterion stated as a number of stores for which high quality reviews or photos are shared, shows the first as unattained at 0 of 3 and the second as locked, and presents both as things that are earned ("Earn badges and gain influence on DoorDash") (tier: directly observed). The explainer on the contributor profile ties the badges to contributing ("Become a trusted voice by sharing reviews and earning badges") (tier: directly observed). Under the presence standard, a defined criterion with an unattained state and the product's own framing of badges earned against it establish the mechanic (tier: strongly supported, the change from unattained to attained and the preserved attained state were not reached in the session). The target behavior the surface points toward is sharing reviews or photos (tier: directly observed). Whether anything obstructs that behavior, such as the effort of writing reviews or unclear value in doing so, has no evidence in the session (tier: unresolved, no contribution was attempted and no user response is recorded). The counter and the locked second badge are consistent with the Visible Progress and Staged Disclosure and Unlocking patterns (tier: plausible, the counter is never seen to move and the unlocking rule is never seen to operate). Competence and Mastery Need and Social Proof are candidate principles for the "trusted voice" and visibility framing, and neither is supported by evidence of user response (tier: unresolved, the session contains no behavior around badges).

**Variants present:** visible achievement (both criteria are shown before completion); progressive achievement (the 0 of 3 counter); cumulative achievement (the criterion is an accumulated count of stores); tiered achievement (two related badges with increasing criteria, 3 and 10 or more stores).

**Variants not established:** rewarded achievement (visibility and ranking benefits are stated but not seen to operate); unrewarded achievement; sequence achievement (whether Local expert requires Emerging expert first); hidden achievement; single-condition achievement; composite achievement (what makes a contribution "high quality" is not stated); constraint-based achievement; retroactive achievement; repeatable-instance achievement; shared achievement; comparative achievement; collection achievement. Where an earned badge is displayed, whether it can be lost, and whether contribution approval affects the count are not observed.

**Alternative considered:** Leveling, which would apply if the badges were a single current contributor status that DoorDash assigns and moves the user between, for example if Local expert replaced Emerging expert on the profile or a badge could be withdrawn under reassessment. The session does not show a current assigned state at zero, and DoorDash frames each tier as a badge that is earned rather than as a level held. What would separate the two is one account holding a badge: a profile carrying one current tier would point to Leveling, and a profile keeping a record of each badge earned would confirm Achievement.

## Entries considered and not applied

- Leveling. Considered for the two badge tiers. The entry requires the product to assign and maintain a current discrete state within an ordered series; the session shows two badges with separate criteria, presented as earned, and no current contributor level at any point (O25).
- Progression Gate. Considered for the locked Local expert badge. The lock and the badge's criterion are the same condition, so what is withheld is the next unit of the badge progression itself, which the entry excludes, and no separate feature is shown withheld behind the count (O25).
- Experience Points. Considered for the 0 of 3 counter. The counter counts stores against one badge criterion; no quantified progression value is granted per event or accumulated toward a broader structure, and the counter is recorded as the achievement's progress (O25).
- Milestone. Considered for "You've saved your first store". The message follows the first save, but DoorDash shows no ongoing measure of saved stores, no further thresholds and no record of the crossing beyond the saved list; Achievement was weighed for the same message and does not apply because no attained state is preserved (O19).
- First-Purchase Bonus. Considered for the first-order $0 delivery fee and the SURPRISE40 welcome offer. Both reduce the price of the order rather than granting a separate benefit, which the entry excludes as a first-purchase discount, and the offer's terms do not settle whether it is tied to a single first order. The PC Optimum welcome points were weighed as well: they are held in an outside program and the session does not show whether they depend on a first order (O8, O34, O43).
- Spendable Credits and Tokens. Considered for DoorDash credits. The credits are dollar-denominated, earned as a percentage of spend and listed with gift card redemption; the entry excludes real-currency balances such as store credit and gift card balances, and stored monetary value is commerce infrastructure under the engagement-design test (O29).
- Soft Currency. Considered for DoorDash credits earned on DashPass pickup orders and for PC Optimum points. The credits are excluded as cashback held as monetary value, and PC Optimum points are a balance kept by an outside program with no exchange shown inside DoorDash (O29, O34).
- Hard Currency. Considered for gift cards. Gift cards are bought with money but carry currency-denominated value rather than product-defined units, which the entry excludes (O30).
- Reward Multiplier. Considered for "5% back on pickup orders with DashPass". The entry requires a base reward that a stated factor increases; the session shows no reward on pickup orders outside DashPass, so the 5% is a rate attached to a plan, which the entry excludes (O17, O40).
- Gifting. Considered for the three gift routes. Gift delivery of orders and currency-denominated gift cards are excluded by the entry as commerce; the DashPass item under "Send a gift card" sits in a shopping vertical as a purchasable gift, was not opened, and shows neither a directed entitlement nor a recipient state change (O4, O21, O30).
- Referral. Considered for group order invitations and for profile and store sharing. No reward to the sender and no completion event by an introduced person is attached to any of these routes (O31, O35).
- Group Membership. Considered for the group order. The group exists for one order and the session shows no membership maintained beyond that transaction, which the entry excludes (O31).
- Community Space. Considered for store reviews and the contributor profile. The entry excludes reviews, ratings and photos attached to commerce listings and directs that they be described in plain language; the group order is also excluded as a single transaction (O31, O32, O33).
- Social Feed. Considered for the review excerpts on the customer favorites screen and store pages. The session does not establish that the system selects and orders socially attributed items into a revisable stream for the viewer; the items are reviews attached to merchant listings (O11, O32).
- Leaderboard. Considered for customer favorites "top ranked in your area". The list orders merchants for choosing where to buy, which is a commerce list under the engagement-design test, and the session does not show displayed positions or the order presented as a comparison result (O11).
- Comparative Rank. Considered for the same merchant list, for the same reasons. The separate stated ranking of contributors under the Local expert badge is held under Unresolved (O11, O25).
- Shareable Win. Considered for profile sharing. The profile holds no recorded accomplishment, and the store and group order shares carry merchant content or an invitation rather than a record about the user (O33, O35).
- Profile Completion. Considered for the contributor profile and Edit profile. No proportion of a defined attribute set and no named outstanding attribute are shown, and the badge counter measures contributions made rather than attributes supplied (O25, O33).
- Season Content Pass. Considered for DashPass. DashPass is presented as a cancel-anytime subscription with fee and deal benefits and no season, campaign or release-cycle bundle of content items (O40, O41).
- Challenge. Considered for the badge criteria and for offers with end dates. The badge criteria carry no end boundary, and the dated offers are price discounts with no objective to complete (O25, O46).
- Variable Reward Outcome. Considered for the animated present after sign-in and the "You have deals waiting" block. The revealed offer is a fixed, disclosed discount, only one result is observed, and the entry excludes presentation that suggests surprise over a fixed result (O8, O43).
- Rewarded Advertisement. Considered for the tracking explainer. Allowing tracking is presented as producing more relevant offers in ads elsewhere, not as a benefit conditional on viewing or interacting with an advertisement, and sponsored listings carry no benefit condition (O2, O8).
- Earning Tasks. Considered for "Become a Dasher". The link opens an outside website form, and no catalogue of priced tasks, in-product payout or continuation element is shown (O38).
- Cosmetic Customization. Considered for dark mode and the gift card design choice. Appearance mode is a product setting the entry excludes, and the card design is a choice on a purchased commerce item rather than a presentation state of the user (O24, O30).
- Expert Guidance. Considered for the AI recipe assistant and the fee and freshness explainers. The assistant builds a shopping list rather than offering structured material on a subject, and the explainers concern DoorDash's own fees and refund process (O13, O16, O39).

## Unresolved

**DashPass family sharing (O40).** The first DashPass pop-up lists "Share your benefits with family sharing. Add a loved one for free" as a subscription benefit. The benefit sits behind a DashPass subscription the session did not start, and no sharing screen, recipient or membership state is shown. The candidate entries are Gifting, if a subscriber directs an access entitlement to an identified person, and Group Membership, if DoorDash maintains a household group whose members share the benefits; the session cannot separate the two or rule out a billing arrangement that carries no tag. What would settle it is a session inside an active DashPass showing the sharing flow and what the added person receives.

**Contributor ranking under Local expert (O25, O33).** The locked Local expert badge states "Be top ranked and seen by the most people", which describes an ordering of contributors, and the profile explainer refers to "local experts" whose reviews can be counted on. The badge is locked behind reviews or photos for 10 or more stores, which the session did not approach, and no ordering, comparison set, position or ranked display of contributors is shown. The candidate entry is Comparative Rank, or Leaderboard if contributors are displayed in order; what would settle it is a session on an account holding the badge showing where and how contributors are ranked.

## Entries never observed

- Active Pass. No access is withheld until an activity is performed and then allowed to lapse.
- Boosters. No counted items are held or spent inside an activity.
- Clan / Guild. No persistent collective with its own group-level state appears; the only group is a single group order.
- Companion. No secondary entity is acquired or developed.
- Daily / Weekly Quests. No objectives are issued on a daily or weekly schedule.
- Daily Claim Pack. No purchase generates rewards across recurring intervals.
- Daily Login Rewards. No benefit is tied to opening the app in a daily window.
- Energy. No bounded capacity is consumed by ordering, browsing or searching.
- Future Projection. No present position of the user is projected over a stated horizon.
- Lives. No continuation units are removed on failure.
- Loot Box. No container or draw with undisclosed contents is offered.
- Minigame. No self-contained game appears.
- Passive Construction. No constructed entity advances on its own.
- Personal Data Reflection. The user's own records are not turned into steps requiring a response; the account had no orders.
- Piggy Bank. No separate reserve of value accumulates.
- Progression Fund. No reward track with a paid second lane appears.
- Purchase Ladder. No ordered sequence of offers requiring earlier positions appears.
- Seasonal Progression Pass. No time-bounded reward track appears.
- Set Collection. No defined set of distinct members is tracked.
- Streak. No continuity count or sequence rule appears.
- Variable Reward Schedule. No reward occurs on an unpredictable schedule.

# Pass three: proposed new tags

### Contributor Profile

**Draft definition.** A contributor profile is a persistent page attributed to one user on which the product gathers that user's public contributions to the listings it carries, such as reviews, ratings and photos, shows them to other users under a visibility rule the user can restrict, and presents the user to others as a contributor whose input can be relied on.

**Source observations:** O32, O33, O25, O11.

**Conditions it appears to depend on:** A catalogue or marketplace whose listings accept user reviews or photos; an account identity attached to each contribution; an approval step before contributions appear; a visibility control that keeps part of the identity visible while hiding contribution content; framing that presents contributors as sources other users can trust.

**Why it is not covered.** Community Space excludes reviews, ratings and photos attached to commerce listings and directs that such a review system be described in plain language pending a dedicated entry. Social Feed does not apply because the profile is not an ordered stream of items from multiple actors. Achievement covers the badges shown on the profile but not the page they sit on. The earlier DoorDash analysis, drawn from the same session, proposed a `merchant review and contributor reputation system` that excludes the badge ladder, which it classifies as Achievement, and covers the contribution and reputation layer beneath it: store-attached ratings, written reviews and customer photos, moderation before publication, and a public contributor profile with a visibility setting and a shareable link. This proposal takes only the contributor page from that layer and leaves the ratings, reviews and photos attached to store listings to the pending reviews entry. Shareable Win does not apply because the profile is visible inside the product and carries no recorded accomplishment composed for outside readers.

**Recurrence elsewhere:** Not established from the source material, which covers this app only. The Community Space entry's exclusion anticipates a dedicated entry for review systems attached to listings, which indicates the library expects the surface to recur.

**Caveat.** Held as an open proposal. The only contributor page opened in the session is the user's own, at zero contributions, reading "No contributions. You haven't shared anything yet", and no other contributor's page is opened (tier: directly observed). No follow control or follower relationship appears anywhere in the session (tier: directly observed). The only aggregate figure seen is the user's own "0 contributions", and the restricted profile copy states that a restricted profile displays the number of public contributions (tier: directly observed). With no populated page observed, the session does not distinguish a page listing one person's reviews from an ordinary account profile (tier: directly observed). What would settle it is a session in which a real contributor page with contributions is opened, showing whether it carries an aggregate count, a follow control, or anything else DoorDash maintains about that user. The proposal sits adjacent to the dedicated reviews entry that the Community Space entry records as pending; if that entry is written, the two should be settled together. Ratings attached to merchants may fall on the commerce side of the engagement-design test; the designed element proposed here is the contributor identity and its framing rather than the merchant rating itself (tier: plausible, the boundary between the two has not been ruled on).

# Close: system view

DoorDash is built around one loop the session never completes: choose a merchant, fill a cart, check out (tier: directly observed, the session reaches the cart and the sign-in step but places no order). Almost every surface in the record feeds the cart. The home sections (O7, O8), the deals screen (O10), customer favorites (O11), search and the AI assistant (O12, O13), the grocery, pickup and other verticals (O15, O17, O21), and item and store pages (O16, O18) all end in items added to a per-merchant cart, and the carts persist across screens and sign-in (O20) (tier: directly observed). The identity step sits at the end of that path rather than at its start: a guest can browse and build carts from the first screen (O1), and sign-in is demanded only when the order is to be placed or an account surface is opened (O27) (tier: directly observed). Signing in then releases three things at once, the name in the greeting (O5, O6), the SURPRISE40 welcome offer (O43) and the notification bell (O45), which makes O6 the point on which those observations depend (tier: directly observed).

Fees and DashPass form one system. The fee explainer (O39) states that DashPass reduces the service fee and removes the delivery fee on eligible orders, and that every fee is avoided by pickup (tier: directly observed). The first DashPass offer arrives the moment an address is saved, before the home screen (O40), a trial is offered inside the cart with a saving stated for that cart (O42), and DashPass reappears on the deals carousel, profile, settings, pickup map, store pages and gifts (O41) (tier: directly observed). The pickup route that avoids fees is itself tied back to DashPass through 5% back paid as DoorDash credits (O17, O29), so the fee-free alternative and the subscription point at each other (tier: directly observed). Placing fee explanations and a cart-specific saving at the point of purchase is consistent with the Contextual Education pattern (tier: plausible, the session contains no evidence of how users respond to it). Spend Reluctance at the fee lines is a possible obstacle the design addresses, and simple price comparison is an equally available reading (tier: unresolved, no user behavior around fees is recorded).

What brings a user back is thinly represented. The notification request names deals from local businesses alongside order updates as its purpose (O44), the bell appears only after sign-in (O45), and several offers carry end dates or a 30-day window (O46), which connects the return layer to the offers in O8, O10 and O43 (tier: directly observed). No streak, daily reward, recurring objective or other scheduled return structure appears in the session (tier: directly observed).

The contribution layer stands apart from ordering. Reviews and photos from other customers appear on store pages and the customer favorites screen (O11, O32), the contributor profile invites the user to join them (O33), and the badges supply the only progression structure in the record and the only applied tag (O25) (tier: directly observed). In the session nothing links this layer to orders, credits, DashPass or offers: the badges state visibility and ranking benefits, and the ranking itself is locked and unobserved (tier: directly observed). The badges therefore depend on O33 for their entry point and on O32 for what they count, and nothing else in the record depends on them (tier: strongly supported, the session never shows a badge or contribution referenced from any other surface).

The outward connections run in two directions. Data and attention go out through the tracking request (O2), the ad personalization disclosure that is on by default (O37), sharing (O35), map handoffs (O36) and the recruitment and beta links (O38) (tier: directly observed). An outside program comes in through PC Optimum linking, which appears on the home screen, the deals carousel and the rewards page (O34, O29) (tier: directly observed). Other people enter only through a transaction, as the recipient of a gift (O30) or as a participant in one group order (O31) (tier: directly observed). The group order screens show the empty name left by the guest flow (O5), which is the one visible dependency between onboarding and the social layer (tier: directly observed).
