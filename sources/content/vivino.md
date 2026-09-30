# Vivino

**Teaser:** Vivino's whole catalogue, from a wine's own page to a critic's public profile, is built to point back at one action: rating.

Vivino is a wine app where rating is the action everything else is arranged around: the rating composer feeds published reviews, review-derived flavor descriptors, a contributor's achievements, tried-and-rated counts across styles, regions and grapes, and user-rated weekly top lists. Scanning a label and searching are the two routes onto a wine's own page, where rating, a cellar, a wishlist, an AI sommelier and food pairing sit together. A subscription, Premium, is offered throughout sign-up and encountered again as a lock on wine adventures, the scanner's fuller tools, and the deeper versions of the taste profile, Sommelier and cellar.

---

## System view

This is a medium system. Its spine is rating: a single composer action feeds the published reviews other users read, the achievement and rank shown on a contributor's profile, the tried-and-rated counts kept across styles, regions and grapes, and the weekly top lists that ask the viewer to rate favourites to see them listed.

---

## Mechanics

### Reviews and Ratings

**Implementation summary:** A five-star rating and written review, submitted once per wine per user, publishes under the contributor's name with their running rating count attached, feeding review distributions, top lists and profile pages.

**What was observed:** Vivino asks the user to rate a wine on a five-star slider, then opens a review field for a written note, flavor tags, a place and a price. A submitted rating can be removed only from the wine page's own three-dot menu, not from inside the composer itself. Published reviews show on the wine page with the reviewer's name, their total rating count, when the review was left, and likes, and a top list invites the viewer to rate their favourites so those wines appear on it.

**How it is presented:** The composer opens from a Rate button on the wine page itself, with the rating count and aggregate score already shown above it. Once published, a review carries the same identity and count everywhere it resurfaces, on the wine's own page, on a top list, and on the reviewer's public profile.

**What is worth noting:** Vivino gives contribution nowhere to hide once it's made: a review always carries the same name and running count, whether it's read on the wine that prompted it or on the reviewer's own profile. Making removal a menu action apart from the composer means an accidental rating isn't obviously reversible from the screen that created it.

**Key findings:**

- A rating and review is submitted from a five-star slider and a 520-character text field.
- A submitted rating can be removed only from the wine page's three-dot menu.
- Published reviews carry the reviewer's name, their total rating count, the date and likes.
- A top list tells viewers to rate their favourites so those wines appear on it.

**Screenshots needed:** the rating slider and review composer; a published review showing the reviewer's name and rating count.

### Set Collection

**Implementation summary:** Three fixed catalogues, styles, regions and grapes, mark each member the account hasn't tried or rated, with a running count of how many of each the account has reached.

**What was observed:** Vivino defines 747 styles, 4,184 regions and 2,229 grapes as fixed sets, and marks individual members "You haven't tried this region", "You haven't tried this style" or "You haven't rated this style yet" wherever they appear in the catalogue. A profile shows how many of each set have been tried or rated, for example 0 out of 4,184 regions.

**How it is presented:** The untried marker sits directly on a region, style or grape's own catalogue card, the same page anyone browsing wine would land on. The running counts against each set's total are shown on the taste profile and on a user's public profile.

**What is worth noting:** Marking every catalogue page with the account's own untried state, rather than keeping progress on a separate tracker, turns ordinary browsing into a constant reminder of what hasn't been tried yet.

**Key findings:**

- Three fixed sets are tracked: 747 styles, 4,184 regions and 2,229 grapes.
- Untried or unrated members are marked directly on their own catalogue page.
- A profile shows a running count against each set's total.
- What action moves a member from untried to tried isn't stated.

**Screenshots needed:** a region or style card showing its "haven't tried" marker; a profile's tried-and-rated counts.

### Achievement

**Implementation summary:** A contributor's public profile lists named, permanently attained states, a ratings-count title and a ranked position, each kept apart from the ongoing rating count they're built from.

**What was observed:** A critic's public profile lists an Ambassador title for 100 or more ratings, a top-ten position in the United States based on four styles, and 100 or more ratings across 45 separate styles.

**How it is presented:** The achievements sit in their own section at the end of the profile, below the ratings, wishlist and taste profile, stated as attained facts rather than progress toward them.

**What is worth noting:** Every achievement seen is a byproduct of the same rating count Set Collection and the profile's own tried counts already track, so contributing to one figure is what quietly satisfies several separate criteria at once.

**Key findings:**

- Ambassador is attained at 100 or more ratings.
- A separate criterion attains at 100 or more ratings across 45 styles.
- A top-ten position in the United States is listed alongside the ratings-based criteria.
- Achievements were seen only on another user's profile; the new account's own profile showed none.

**Screenshots needed:** a public profile's achievements section.

### Comparative Rank

**Implementation summary:** A contributor's public profile states their rank in the United States, without naming the measure it orders by or showing anyone else's position.

**What was observed:** A critic's public profile states a rank in the United States, and the same profile's achievements separately state a top-ten position in the United States based on four styles.

**How it is presented:** The rank sits on the profile as a single stated position, with no ordered list of other users shown alongside it.

**What is worth noting:** Listing social rank as a Premium feature suggests a new account's own rank sits behind a subscription, though no rank was shown for the new account and the feature was never opened to confirm it.

**Key findings:**

- A critic's profile states their rank in the United States.
- The same profile separately states a top-ten position based on four styles.
- The measure the ranking uses, and the rank's own value, aren't stated.
- Social rank is listed as a Premium feature.

**Screenshots needed:** a public profile showing the stated national rank.

---

## Section cards

**Onboarding and first run:** Sign-in, account details and a plan choice run before the tracking permission and a trial offer greet the user on first arrival at home.

**Core loop and automation:** Scanning a label and searching are the two routes onto a wine's own page, where rating, a cellar, a wishlist, an AI sommelier and food pairing all sit together.

**Goals and progression:** Tried and rated counts across styles, regions and grapes, and a taste profile built from what the account has interacted with, run alongside a fixed rating spine.

**Access and eligibility:** Wine adventures, the scanner's fuller tools and a wine type's own taste preferences each stay locked until Premium or a stated condition is met.

**Economy and resources:** Empty. Vivino holds no product-defined currency, points balance, or other held or earned quantity with faucets and sinks.

**Social:** A contributor's public profile, published reviews and a following system make up a thin social layer built entirely from the same ratings the rest of the app runs on.

**Reach beyond the app:** A shareable wine card, social posting toggles and a shared food pairing message each send something outside the app.

**Monetization:** A three-way plan choice, a benefits comparison and a trial offer with a countdown all lead to the same Premium subscription.

**Return triggers:** A notification permission request and a weekly top-list update notice bring the viewer back on two different clocks.

---

## Onboarding and first run

Sign-in, account details and a plan choice run before the tracking permission and a trial offer greet the user on first arrival at home.

### O1. Launch screen and sign-in options

Vivino opens on a screen inviting the user to buy the right wine, over a background of wine images scrolling upward. Continue with email is the highlighted option, with continue with Apple, Google or Facebook beneath it. Signing in continued with Apple.

### O2. Account details prefilled from the sign-in provider

After Apple sign-in, an account details screen asks for email, first name, last name and country, prefilled from the Apple account, framed around referring to the user by name and keeping things relevant to where they live. Continuing requires switching on a toggle agreeing to the terms and conditions and privacy policy, which stays off until the user turns it on.

### O3. Plan selection step inside the sign-up flow

After the notification permission, a plan screen offers three options, Premium, Premium trial and Free, with a button that changes to "Continue for free" once the free option is chosen. An "Explore benefits" button on the same screen opens a free-versus-premium comparison. Choosing Free leads to home.

### O4. Tracking permission request on arrival at home

On first arrival at home after choosing Free, Vivino raises the system request asking permission to track activity across other companies' apps and websites, overlaid on the Premium trial offer, and is answered before that offer.

### O5. Home as the first unguided screen

Home carries a notification bell, a search bar with an adjacent AI button, a "Stories from your community" section, and a "Discover wineries around the world" section of scrollable winery cards. The bottom navigation holds Home, Explore, My wines and a More button, with a separate camera button. The notification bell shows no notifications on the first visit. Winery cards show name, logo, location, number of wines listed, average rating and total rating count, spanning several countries. More opens the user's profile.

---

## Core loop and automation

Scanning a label and searching are the two routes onto a wine's own page in Vivino, where rating, a cellar, a wishlist, an AI sommelier and food pairing all sit together.

### O6. Label scanning

The camera button opens a scanner that asks the user to position a wine label within the frame, after a system camera-access request. The empty scan history states that scanned wines are kept there as a record of the user's wine journey, with a button to scan the first wine. No label was successfully scanned. The scanner also carries Premium promotions for a wine list scanner and a quick-compare scanner.

### O7. Wine search, Explore, sorting and filtering

Explore offers a wine search with All wines and My wines tabs and a set of popular categories. A sort control offers highest rated as the default, along with most popular, price highest first, price lowest first and most discounted, and a filter covers type, rating, price, country, grape, style and region. Result cards show the bottle, winery, wine, location, rating, rating count and a price. In Explore, the rating filter defaults to 3.8 and above.

### O8. Winery directory and filters

Explore wineries opens a winery search with a filter whose button states a wine count before any filter is set. Filters cover type, a rating slider in 0.1 steps up to 4.9+, country, grape, style and region, each option carrying a count, with a Show all list ordered by count for each group. The winery rating filter defaults to one star. The country list includes countries with no wineries listed, and the list loads continuously on scroll, starting from the user's own country. Winery cards show a cover picture, logo, a verification shield, the country crest, city and country, number of wines and total ratings.

### O9. Winery profile

A winery profile shows a cover image, logo, name, a verified partner label, number of wines, average rating and total rating count, a description, photos, facts including country, region, winemaker and owner, links to the winery's site, Instagram and Facebook, and all of its wines, ordered by rating. Each wine card on the profile shows winery, wine, region, rating, rating count and a picture.

### O10. Wine page structure

A wine page opens with a video or picture, a share button, the bottle, the rating and rating count, and like and dislike buttons under a prompt asking whether the user likes the wine. A swipe-up card carries the verified winery name, the wine, and a vintage selector reaching back to 1982, sortable by recent or top rated, with per-vintage ratings and tags such as most popular and top rated. Beside the Rate button sit a cellar button, a bookmark button, a three-dot menu and an AI button. For the wine viewed, all vintages together showed 4.7 from 1,901 ratings, though not every vintage carries a rating. The three-dot menu offers change wine, wishlist, share, add to cellar, add personal note, add place, add price, add drinking window, and remove this entry. Further down the page sit an insights card, taste mentions, taste characteristics, food pairings, a winery card, community reviews, and nutritional information and allergens.

### O11. Rating and review composer

Rate opens a slider that starts a rating out of five, its label changing as it moves and reading "Top marks" at five. Choosing a rating opens a review field with a 520-character limit, along with options to add flavors, mention someone, add a place and add a price, and Facebook and Instagram toggles. Add flavors shows the descriptors most talked about across the wine's reviews, such as blackberry, oak, black cherry, chocolate and vanilla. Mention someone returned no user found for this account, which has no connections. Add place lists nearby places the wine might have been bought, with a time-limited offer toggle that opens an expiration date. Add price takes a price, a quantity and a bottle size from a long list running from miniature and glass up to magnum, double magnum, bag-in-box and a box of six. A five-star rating was submitted unintentionally while exploring the composer.

### O12. Removing a submitted rating

After the unintended rating, no way to remove it was found at first. The wine page's three-dot menu offers "Remove this entry," which removes the rating. Removal sits in that menu rather than inside the composer itself.

### O13. Wine insights and the region, style and grape cards

An insights card states the wine's region, country and blend, a window for when it drinks best, and an option to show more insights, which opens a screen marking the region, style and each grape with a "you haven't tried" or "haven't rated" state. Region, style and grape each open their own card: the region card shown listed a subregion tree, winery and wine counts, common grapes, and wines with rating and price; the style card shown listed acidity, body, grapes, pairings, a "featured in top list" entry, and similar styles marked as not yet rated; the grape card shown listed flavors, a description, acidity and body, how the grape is used by wine type, and where it's planted by country. The insights screen also states wine type and alcohol content.

### O14. Taste mentions and editable taste characteristics

A "how does this wine taste" section groups descriptors drawn from reviews into counts, such as several mentions of black fruit notes, oaky notes and red fruit. A separate taste characteristics section shows soft-to-acidic, dry-to-sweet, smooth-to-tannic and light-to-bold scales with an edit control; editing turns the heading into a request for help describing the taste and turns the scales into sliders the user sets. What happens to a user's slider input after submission isn't stated.

### O15. Food pairing checker and food search

The wine page lists foods the wine pairs well with and a control to choose a dish from an alphabetical list; choosing a dish returns a verdict, from a clear mismatch to a strong match. A dish opens its own card with pairings by wine type, taste ranges, top and good pairings, and a show-all control. A separate food-and-wine search in the profile menu offers a pairing search by dish, with recent items and alphabetical cards.

### O16. Sommelier AI assistant

The AI button on a wine page opens Sommelier, a chat assistant that opens with a written assessment of the wine and its likely pairings and ends by offering to go further on food pairings or aging. It offers suggested follow-up questions, a free question field, scan and search shortcuts, and a chat history. The assistant worked for the free account. The free plan is described as limited access to Sommelier and Premium as full access; where the limit falls isn't shown.

### O17. Cellar entry

The cellar button on a wine page opens an add-bottles form with a bottle count, a bottle size defaulting to 0.75, a cellar note, a bin number, a purchase price, a purchase date and a purchase location. Cellar location and tags are both labelled coming soon. The free plan is described as limited access to the cellar, with Premium listing cellar upgrades including desktop access, collection value and drinking windows.

### O18. Wishlist and bookmarking

Wines carry a bookmark button that toggles on and off, and wine cards in lists carry their own wishlist button. Wishlist is also a named option in the wine page's three-dot menu.

### O19. Top lists

A style card's "featured in top list" entry opens a top 25 list for that style, described as the top 25 wines as rated by Vivino users, with a line inviting the viewer to rate their favourites so they appear on the list and to check back every week, stating the next update comes in 7 days. Each listed wine shows winery, wine, location, rating, rating count and a wishlist button, and some show excerpts of reviews from featured users or Premium members. Such lists are stated to exist for other styles and blends as well.

---

## Goals and progression

Tried and rated counts across styles, regions and grapes, and a taste profile built from what the account has interacted with, run alongside a fixed rating spine.

### O20. Tried and rated counts over styles, regions and grapes

Vivino maintains counts against fixed totals: a new account's taste profile reads 0 out of 4,184 regions tried and 0 out of 2,229 grapes rated, and a critic's profile reads 439 out of 747 styles tried. The same state appears on catalogue pages as "you haven't tried this region/style/grape" and "you haven't rated this style yet." The totals are 747 styles, 4,184 regions and 2,229 grapes. On a critic's profile the counts break down per style, region and grape with the number of ratings and average rating given for each. The copy alternates between "tried" and "rated" for the same kind of count, and what action moves a member from untried to tried isn't stated.

### O21. Taste profile as a state built from interactions

After the preference questions, My wines states that the taste profile keeps track of the wines the user interacts with to find recommendations, and "My taste profile" shows tabs for red, white, rosé, sparkling, fortified and dessert, each with a taste preferences card and styles, regions and grapes sections with an edit control. Before the questions are answered, the screen states that the taste profile will show once preferences are tuned. The free plan is described as a basic taste profile and Premium as advanced, though the free account could still open an "Advanced taste profile" button. Other users' profiles expose a taste profile to viewers.

### O22. Preference tuner

The taste profile begins with swipeable cards asking whether the user enjoys red wine, and the same for white, sparkling, rosé, fortified and dessert, each answered with a sad, neutral or happy face. A preference tuner then offers sliders per wine type, light to bold, smooth to tannic, dry to sweet, soft to acidic, and a price range choice. Answers can be changed after they're given. The advanced profile also invites the user to add favourite styles and to mark regions they like and dislike.

### O23. Achievements and wine adventure progress on profiles

A critic's public profile ends with an achievements section listing an Ambassador title for 100 or more ratings, a top-ten position in the United States based on four styles, and 100 or more ratings for 45 styles. The same profile shows wine adventure cards; opening one shows the critic's progress as 7 out of 7 challenges completed beside the viewer's own progress of 0 out of 7. Vivino states that a wine adventure is made of challenges the app tracks progress against; we did not cover what completing a challenge involves in this analysis, since the challenge entries on the card can't be tapped. The achievements were seen only on another user's profile; the new account's own profile showed none.

---

## Access and eligibility

Wine adventures, the scanner's fuller tools and a wine type's own taste preferences each stay locked until Premium or a stated condition is met.

### O24. Wine adventures behind Premium

Opening a wine adventure card shows a welcome message framing it as a closer look at old world and new world wines. Vivino states that getting started opens the adventure, but both "Get started" and "Wine adventures" in the profile menu lead instead to the Premium screen. Premium's carousel describes the feature as smarter wine adventures, learning, tasting and playing through named wine regions. Wine adventures exist in Vivino behind Premium; we did not cover what's inside one in this analysis, since the Premium screen is as far as this account could go.

### O25. Taste preferences withheld until more wines are rated

Each wine type's taste preferences card states that no preferences are available yet, and that tasting a few more wines of that type will reveal them. Vivino does not name how many wines are required. Edit preferences remains available beside the withheld card regardless.

### O26. Premium locks in the scanner

The scanner promotes a wine list scanner and a quick-compare scanner, both tied to Premium, framed around guiding restaurant wine choices and comparing multiple scans quickly. Both prompts can be closed, and ordinary label scanning remains available without Premium.

### O27. Features marked as coming soon

In the cellar entry, "Cellar location" and "Tags" are both labelled coming soon.

---

## Economy and resources

(no observations in this app.)

---

## Social

Vivino's social layer runs entirely on the same contributions the rest of the app is built around: a contributor's public profile, published reviews, and a following system with no group or shared space behind it.

### O28. Community stories and friend activity entry points

Home's "Stories from your community" section, for a new account, shows a card inviting the user to follow friends and see their ratings, finds and wine moments as they happen, with buttons to find friends or hide the card. The profile menu separately lists a Friends feed item. A friend activity feed exists in Vivino, populated once the user follows people; we did not see it populated in this analysis, since it stayed unopened after following two people. The notification centre names friends reviewing a wine as one of the things it reports.

### O29. Community reviews on the wine page

A wine page's community reviews show the distribution of one- to five-star ratings as bars, the total rating count, and individual reviews with the rating, the text, the reviewer's name, how many ratings that reviewer has left in total, when the review was left, and likes. One reviewer card showed a person with 11,578 ratings.

### O30. Featured reviews and review interactions

On a top list, some wines show excerpts of reviews from featured users or Premium members. A review opens in full with its date and reviewer, and a three-dot control offers follow, block user and report. Other users can like and comment on a review. Whether a featured review comes from a featured user or a Premium member isn't distinguished.

### O31. Another user's public profile

A reviewer's profile identifies the person as a wine critic and wine blogger, links to their Instagram, and shows following and follower counts, their rank in the United States, a follow or unfollow button, and their ratings, wishlist, photos, taste profile, wine adventures and achievements. Their ratings list sorts by latest or top rated and shows their rating beside the average, the date, likes and comments, with a save control on each wine. The profile states a ratings count that doesn't match the count shown on that same reviewer's card elsewhere.

### O32. Following and suggested people

Following two people adds them to the profile's following list with an unfollow button. An add-person button opens "Discover people" with a QR code scanner, a route to find friends already on Vivino, and suggested people to follow, some marked with a star as featured. Tapping the user's own name or photo on their profile card does nothing.

---

## Reach beyond the app

A shareable wine card, social posting toggles and a shared food pairing message each send something outside the app.

### O33. Share a Vivino moment

A wine page's share button opens "Share a Vivino moment," with a tip to swipe for more layouts and choose how to showcase the wine's rating and review. Three layouts show the bottle, rating, winery, wine and vintage with the Vivino logo, or the same without the bottle and with the rating count instead; the background can be a gradient, an uploaded photo, or the winery's own photo or video. The result can be downloaded, sent straight to Instagram, or passed to the system share sheet. The card was composed before the user had rated the wine, carrying the wine's own rating rather than the user's.

### O34. Posting a rating to Facebook and Instagram

The review composer carries Facebook and Instagram toggles that are on by default. Tapping them asks the user to log in to those networks; posting requires a login not yet given.

### O35. Sharing a food pairing

A food card can be shared, with the shared message reading "Thought you'd like this wine and this food."

### O36. External links on winery and user profiles

Winery profiles link out to the winery's website, Instagram and Facebook, and a critic's profile links to their Instagram.

### O37. Friend-finding through outside accounts

"Find your friends in Vivino" offers to connect to Google or to contacts to find people the user knows, alongside a QR code scanner. Neither connection was made, and no reward for inviting or finding friends was shown.

---

## Monetization

A three-way plan choice, a benefits comparison and a trial offer with a countdown all lead to the same Premium subscription.

### O38. Plan cards and price framing

The plan step shows Premium at $47.90 per year, restated as $3.99 per month, framed for the wine curious looking to grow their knowledge; Premium trial, tagged "Recommended," free for 7 days then $4.99 per month, framed for anyone wanting full access; and Free, framed for the casual drinker wanting quick answers or good deals. The trial card shows no annual price, and the screen offers no separate monthly plan alongside it. The Premium card leads with the annual price and restates it monthly, while the trial card states only a monthly price. Whether the trial converts to monthly or annual billing isn't stated on the screen.

### O39. Benefits comparison and the Premium carousel

"Explore benefits" opens a two-tab comparison: Premium at $4.99 per month lists everything in Free plus an advanced taste profile, advanced wine recommendations, full access to Sommelier, full access to cellar, social rank, exclusive wine deals and the quick compare scanner; Free lists scanning, rating, reviewing and exploring wines, a basic taste profile, basic wine recommendations, limited access to Sommelier and limited access to cellar. Items with a chevron open an auto-advancing six-slide carousel covering AI wine summaries, exclusive deals and priority offers, the wine list scanner, the quick compare scanner, smarter wine adventures, and cellar upgrades, each stating 7 days free then $47.90 per year. Every chevron opens the same carousel. The comparison prices Premium at $4.99 per month while the plan card states $3.99 per month for the same annual plan.

### O40. Free Premium trial offer with a countdown

On first arrival at home after choosing Free, Vivino offers seven days of Premium with no payment required, cancel anytime, under a countdown, alongside a "level up your wine game" list of tagged features and the same $47.90 per year or $3.99 per month pricing stated elsewhere. The countdown read 00:55:05 and did not appear to move while watched; whether the 55 is minutes or hours isn't stated. The offer can be closed from the top right corner, and its feature tags open the same carousel as the benefits comparison.

### O41. Premium entry points across the app

Premium is offered from the profile menu, the scanner, wine adventures and the trial offer on first arrival at home.

### O42. Wine sales signals

Vivino's launch screen invites the user to buy the right wine, wine cards show prices, a sort option surfaces the most discounted wines, exclusive wine deals are named as a Premium benefit, and the notification centre mentions updates on orders. No purchase flow, cart or checkout appeared.

---

## Return triggers

A notification permission request and a weekly top-list update notice bring the viewer back on two different clocks.

### O43. Notification permission request

Immediately after account details, Vivino raises the system request to send notifications, with Allow and Don't Allow, before the plan step and before home. How it was answered isn't shown.

### O44. Notification centre and its stated contents

The notification centre states that it has nothing to show yet, and that it will report special wine offers, updates on orders, or when friends review a wine. The bell is reachable from home and from My wines.

### O45. Weekly top-list update notice

The top list tells the viewer to check the list every week and states the next update comes in 7 days. Whether a notification accompanies the update isn't shown.
