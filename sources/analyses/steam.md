Steam (iOS) behavioral design analysis

**Session date:** 11 May 2026

**Additional sessions:** None.

**As observed:** 11 May 2026

**App version:** None.

**Analysis date:** 15 Sep 2026

**Last updated:** 15 Sep 2026

This analysis is built from one Granola session, "Steam iOS app analysis", recorded on 11 May 2026 and filed in the App Mechanics folder. The session is a single narrated walkthrough of the Steam app on iOS, opened for the first time and signed in with an existing Steam account, moving through the first-run screens, the Store, News, Notifications, the hamburger menu, the Points Shop, the account menu, and the friends and groups areas. The full verbatim transcript is the only source of facts. No private notes were attached to the session, and neither the session's generated summary nor any other material was used. The transcript is automatic speech-to-text of one narrator and garbles several product terms; wherever a reading of a garbled passage is used, that reading carries its own tier in the observation where it appears.

# Pass one: observation record

1. Onboarding and first run: O1 to O8
2. Core loop and automation: O9 to O15
3. Goals and progression: O16 to O18
4. Access and eligibility: O19 to O20
5. Economy and resources: O21 to O25
6. Social: O26 to O33
7. Reach beyond the app: O34 to O36
8. Monetization: O37 to O38
9. Return triggers: O39 to O41

## Onboarding and first run

**O1. Notification permission requested at first launch.**

**Observed:** On first launch, before sign-in or any Steam screen, Steam triggers the iOS system prompt "Steam would like to send you notifications" (tier: directly observed). The prompt states that notifications may include alerts, sounds and icon badges and that this can be configured in Settings (tier: directly observed).

**Detail:**
- The request comes before the user has signed in or seen any explanation of what Steam notifications contain (tier: directly observed).
- The analyst allowed notifications at this prompt (tier: directly observed).
- The prompt copy states the choice can be changed later in Settings (tier: directly observed).

*Cross-reference: O4, O39.*

**O2. Sign-in limited to Steam account credentials.**

**Observed:** After the permission prompt, Steam asks the user to sign in with a Steam account name and password (tier: directly observed). The analyst states that no other way of signing in is offered (tier: directly observed).

**Detail:**
- The walkthrough uses an existing account, and Steam later greets the analyst with "Welcome back to Steam" (tier: directly observed).
- Whether this screen offers a route to create a new account was not recorded (tier: unresolved).

*Cross-reference: O3, O7.*

**O3. Steam Guard email code at sign-in.**

**Observed:** After the password, Steam Guard requires a five-character code that Steam sends to the account's email address (tier: directly observed). Once the code is entered, Steam shows a welcome back screen (tier: directly observed).

**Detail:**
- The analyst has to leave the app and open email to collect the code (tier: directly observed).
- The code is five characters long (tier: directly observed).

*Cross-reference: O2, O7.*

**O4. Post-sign-in feature carousel.**

**Observed:** After sign-in, Steam presents a three-screen swipeable carousel that ends with a Done button (tier: directly observed). The first screen, "Steam notifications", invites the user to customize notifications under the line "Never miss a thing when you're away from your PC" and shows example notifications (tier: directly observed). The second screen, "Steam Authenticator", states that the camera can be used to scan a QR code to sign in to Steam or to confirm a sign-in with one touch (tier: directly observed). The third screen lists further changes: trade confirmation improvements, a new library view, support for multiple accounts, a customized news feed based on the user's library, account notifications and store browsing improvements (tier: directly observed).

**Detail:**
- The example notifications are a game on the user's wishlist going on sale, "Colby sent you a friend request", and "Guitar Billionaire is now available for download" (tier: directly observed).
- The notifications screen appears after the system notification permission had already been granted in O1 (tier: directly observed).
- Whether the notifications screen contains controls for choosing notification types, or only describes them, was not recorded (tier: unresolved).

*Cross-reference: O1, O5, O13, O14, O20, O36, O39.*

**O5. Camera permission requested without prior warning.**

**Observed:** While the analyst moves through the carousel, Steam triggers the iOS prompt asking to access the camera, with the stated purpose of enabling QR code based sign-in (tier: directly observed) (sequence caveat: the narration places the prompt after the second carousel screen and before the third, and does not say what triggered it). No Steam screen announced that this permission request was coming (tier: directly observed).

**Detail:**
- The only earlier reference to the camera is the second carousel screen's description of QR sign-in (tier: directly observed).
- The camera opens later at the end of the authenticator flow in O7, which indicates the permission was granted (tier: strongly supported).

*Cross-reference: O4, O7.*

**O6. First landing on Steam Guard with an authenticator prompt.**

**Observed:** After Done, Steam opens with a bottom navigation bar of four items plus a hamburger menu, and the tab shown first is Steam Guard (tier: strongly supported, the tab is transcribed as "Steam card" but its copy and the later menu listing identify Steam Guard). The screen reads "Protect your Steam account and make signing in faster" and describes signing in by scanning a QR code instead of typing a name, password and code, and approving sign-ins with one touch (tier: directly observed). The screen offers an Add authenticator button (tier: directly observed).

**Detail:**
- The four bottom bar items are Store, News, Steam Guard and Notifications (tier: strongly supported, assembled from the analyst's later description of the hamburger menu).
- Steam lands the user on account security rather than on the Store or the Library (tier: directly observed).

*Cross-reference: O7, O9.*

**O7. Authenticator setup and recovery code.**

**Observed:** Tapping Add authenticator asks for a phone number, then requires the analyst to open a link in an email confirming that the number should be added before Steam sends a code (tier: directly observed). Steam Guard then shows a recovery code headed "You might need this code someday. Write it down and keep it safe." and explains that the code recovers the account after losing access, losing the device, or deleting the app without first transferring the authenticator (tier: directly observed). Pressing Done opens the camera (tier: directly observed).

**Detail:**
- The recovery code cannot be copied by tapping and has to be written down by hand (tier: directly observed).
- The channel through which the phone code arrives is not stated (tier: unresolved).
- After Done, the camera view opens rather than the Store or the Library (tier: directly observed).
- Across sign-in and authenticator setup, the user leaves the app for email twice (tier: directly observed).

*Cross-reference: O3, O5, O6, O20.*

**O8. No guided tour after setup.**

**Observed:** After the authenticator flow, Steam gives no walkthrough of the app's areas, and the analyst navigates every later screen unaided (tier: directly observed). The analyst closes the session by stating that the product never guided them or showed them around (tier: directly observed).

**Detail:**
- The last guided surfaces are the carousel in O4 and the authenticator flow in O7, and the Store is the first surface the analyst opens without being led (tier: strongly supported).

*Cross-reference: O4, O7, O9.*

## Core loop and automation

**O9. Navigation structure.**

**Observed:** The hamburger menu lists Store as a dropdown containing Store Home, Specials, New Releases, Discovery Queue, Points Shop, Wishlist and Wallet, followed by News, Steam Guard and Notifications (tier: directly observed). Below those, it lists the items that are not in the bottom bar: Confirmations, Library, Community and Chat (tier: directly observed). Community opens a dropdown of Community Home, Discussions, Market, Broadcasts and Workshop (tier: directly observed).

**Detail:**
- Points Shop, Discovery Queue and Wallet sit inside the Store dropdown rather than in the bottom bar (tier: directly observed).
- The account menu is reached through an avatar in the top right corner, shown as a question mark default photo (tier: directly observed).
- Market was listed but not opened (tier: directly observed).

*Cross-reference: O6, O11, O15, O20, O22, O28, O32, O34, O37.*

**O10. Store home composition and continuing recommendations.**

**Observed:** The Store tab opens with a search bar, Wishlist and Wallet buttons, and a menu of Browse, Recommendations, Categories, Ways to Play and Special Sections dropdowns (tier: directly observed). The home feed leads with Featured and Recommended, then discounts and events, browsing by category, recommendations based on the games the user plays or because the user played a named game, the discovery queue, new releases, specials, free games, browsing by user tags, community recommendations, New and Trending, Top Sellers, Popular Upcoming and games under €10 (tier: directly observed). Above the footer, Steam shows "Keep scrolling for more recommendations. Below you'll find a variety of titles that you may be interested in from categories across Steam." (tier: directly observed).

**Detail:**
- The analyst expects that scrolling past this message loads a long, possibly endless, list of titles, but did not confirm it (tier: plausible).
- Special Sections opens demos, DLC and sale events, and Browse opens store home, new releases, free to play, demos, discounts and events, and top sellers (tier: directly observed).
- A three-dots menu offers Share and Refresh, and Share produces a link to the Steam discovery page (tier: directly observed).
- One list name in the home feed is unintelligible in the transcript (tier: unresolved).

*Cross-reference: O11, O13, O35, O38.*

**O11. Discovery queue.**

**Observed:** Tapping the discovery queue from the store home opens one recommended game at a time, with a "Next in queue" control below each title that moves to the next game (tier: directly observed). The queue holds 12 titles, and the analyst can move back and forward within it (tier: directly observed).

**Detail:**
- Whether a new queue can be started after the 12 titles, and on what schedule, was not shown (tier: unresolved).
- The per-title controls to follow, wishlist or ignore are described in the queue explainer in O12 rather than narrated during this pass (tier: directly observed).

*Cross-reference: O10, O12, O13.*

**O12. Discovery queue explainer and activity record.**

**Observed:** Reached from the hamburger Store dropdown, the Discovery Queue page states that the queue "is a mix of products that are new, top selling and similar to what you play and use on Steam" (tier: directly observed). It tells the user to use the controls on each product page to follow a title, add it to the wishlist or mark it as ignored, and to jump to the next title in the queue (tier: directly observed). The page shows queue activity as titles followed, titles on the wishlist and titles ignored (tier: strongly supported, the narration of this list is partly garbled).

**Detail:**
- Ignoring is offered as an explicit per-title choice alongside following and wishlisting (tier: directly observed).
- Whether these choices change later recommendations is not stated in the session (tier: unresolved).

*Cross-reference: O11, O13.*

**O13. Wishlist.**

**Observed:** The Wishlist lists the games the analyst has wishlisted, with a search by name or tag and filter options (tier: directly observed). The list can be sorted by Your rank, Name, Price, Discount, date, Top selling, Release date and Review score (tier: directly observed).

**Detail:**
- The transcript runs "Discount date" together, so whether these are one or two sort options is unclear (tier: unresolved).
- A user-set rank is offered as a sort key (tier: directly observed).
- A wishlisted game going on sale is one of the example notifications in O4 (tier: directly observed).

*Cross-reference: O4, O10, O11, O12, O38, O39.*

**O14. News feed with per-source controls.**

**Observed:** The News tab offers Your news, Upcoming, Featured, Steam official news, Curators, Sales and Events (tier: directly observed). Scrolling shows news items posted several days earlier, each with likes and comments (tier: directly observed). Each item's options let the user hide this type of post, mute the developer or publisher, go to their news hub, or visit their store page (tier: directly observed).

**Detail:**
- Tapping comments opens the item's discussion on Steam News (tier: directly observed).
- The third carousel screen in O4 describes the news feed as customized based on the user's library (tier: directly observed).
- The rule that orders the items was not stated (tier: unresolved).

*Cross-reference: O4, O33, O40.*

**O15. Library.**

**Observed:** The Library lists the games the account owns and sorts them by recent, name or playtime (tier: directly observed).

**Detail:**
- Playtime is a stored per-game quantity offered as a sort key (tier: directly observed).

*Cross-reference: O19, O27.*

## Goals and progression

**O16. Profile level.**

**Observed:** Viewing the profile shows the user's level alongside the username, last online time and badges (tier: directly observed).

**Detail:**
- The level value was not read out (tier: directly observed).
- The profile does not show the rule for moving between levels (tier: directly observed).

*Cross-reference: O17, O27.*

**O17. Badges and the seasonal badge.**

**Observed:** The Badges page in the account menu shows the badges the account has collected (tier: directly observed). In the Points Shop, the seasonal badge section reads "Upgrade this badge by using your points" and states that badges are shown on the profile page and contribute towards profile XP (tier: directly observed). The same section tells the user to check back during the summer and winter sales for an all new seasonal badge (tier: directly observed).

**Detail:**
- The narration does not establish whether the account held any badges (tier: unresolved).
- The criteria by which badges other than the seasonal badge are earned were not displayed (tier: directly observed).
- The seasonal badge section shows candle and light elements (tier: plausible, the narration here is fragmentary).
- The number of seasonal badge upgrade steps and their point prices were not recorded (tier: directly observed).

*Cross-reference: O16, O18, O21, O41.*

**O18. Showcase upgrades.**

**Observed:** The Points Shop's profile showcases section reads "Level up your showcases" and states that select showcases can be upgraded up to two times, giving more room to show off badges, extra space for artwork and more (tier: directly observed).

**Detail:**
- The analyst could not tell what the individual showcase items do (tier: directly observed).
- The analyst mentions achievements appearing among the showcase items without describing them (tier: unresolved).
- Upgrade prices, and whether the second upgrade requires the first, were not shown (tier: directly observed).
- The upgrade changes how much the profile can display, which is a capacity change rather than only an appearance change (tier: strongly supported).

*Cross-reference: O17, O22, O27.*

## Access and eligibility

**O19. Points Shop items gated by game ownership.**

**Observed:** The Points Shop's From your games section shows items from games the account owns (tier: directly observed). The copy states that points can be redeemed for a background or emoticon for games the user already owns (tier: directly observed).

**Detail:**
- Items appeared for owned titles, including an Elder Scrolls game (tier: directly observed).
- Whether items for games the user does not own are hidden or only unavailable was not shown (tier: unresolved).

*Cross-reference: O15, O22, O24.*

**O20. Security confirmations.**

**Observed:** Confirmations in the hamburger menu shows "You have no confirmations at this time" and explains that this is where the user will see and confirm important changes to the security of the Steam account (tier: directly observed).

**Detail:**
- The carousel in O4 lists trade confirmation improvements among the app's changes (tier: directly observed).
- No confirmation was pending, so the confirmation flow itself was not seen (tier: directly observed).

*Cross-reference: O4, O7.*

## Economy and resources

**O21. Steam Points earning rules.**

**Observed:** Opening the Points Shop shows "Buy games, earn points, customize your Steam experience with Points Shop items" with a How points work button at the top of the screen (tier: directly observed). The explanation states that Steam Points are earned for shopping on Steam or by contributing to the Steam community, and can be used to customize the user's Steam presence or to award fellow community members (tier: directly observed). It states a rate of 117 points for every €1 spent on any game, DLC, hardware, application, soundtrack or in-game item (tier: directly observed).

**Detail:**
- The rate is stated per euro spent, so the number of points scales with purchase value (tier: directly observed).
- How community contribution converts into points was not stated in the session (tier: directly observed).
- No point-earning event was narrated (tier: directly observed).
- The explanation page ends with frequently asked questions, and the Points Shop lists My points history among its sections (tier: directly observed).

*Cross-reference: O22, O26, O37, O38.*

**O22. Points Shop catalog and prices.**

**Observed:** The Points Shop is organized into sections including From your games, Sale events, Bundles, Keyboards, Startup movies, Avatars, Backgrounds, Community awards, Seasonal badge, Game profiles, Profile showcases, Animated stickers, Chat effects, Emoticons, How points work, My award summary, My points history and My profile (tier: directly observed). The featured home leads with Spring Sale 2026 items behind a See all button, then rows including profile backgrounds, Winter Sale 2025 items, Steam startup movies, game profiles, Team Fortress 2 items, popular items, popular animated stickers, animated avatars, and frames from games such as Dota 2 (tier: directly observed). The transcript renders the item price range as "10005000 points", which reads as 1,000 to 5,000 points (tier: plausible, the digits are run together).

**Detail:**
- The Emoticons section is transcribed as "modicums" (tier: strongly supported, the same items are called emoticons elsewhere in the shop copy).
- Keyboards personalize the Steam Deck virtual keyboard, and startup movies personalize the startup sequence of the Steam Deck or Big Picture mode (tier: directly observed).
- The Points Shop is framed as open all year round and here to stay (tier: directly observed).

*Cross-reference: O17, O18, O19, O23, O25, O36, O41.*

**O23. Item detail, preview and equip copy.**

**Observed:** An item page shows the current points balance, the item name, and a preview of how the item would look, such as an avatar frame shown on the user's own avatar (tier: directly observed). The avatar frame copy states that frames are seen on the profile and community pages and appear to friends in the friends list and Steam Chat when the user is online (tier: directly observed). The profile background copy states that, when equipped, other players who view the profile will see the background (tier: directly observed). The game profile copy states that it contains exclusive items and a theme not available separately, and that all items will be equipped on activation except the animated avatar (tier: directly observed).

**Detail:**
- Game profile previews open in a separate tab showing characters and animations (tier: directly observed).
- No item was redeemed or equipped in the session (tier: directly observed).

*Cross-reference: O21, O22, O24, O27, O30.*

**O24. Ownership rules for Points Shop items.**

**Observed:** The How points work copy states that items obtained are yours to keep forever and that Points Shop items are not marketable or tradable (tier: directly observed). It states that emoticons and backgrounds previously associated with trading cards can now be acquired directly with points, and that Steam card crafting remains available for those items (tier: directly observed).

**Detail:**
- No expiry is stated for redeemed items (tier: directly observed).
- The trading card and crafting system was not visited (tier: directly observed).

*Cross-reference: O19, O22, O25.*

**O25. Point-priced item bundles.**

**Observed:** The Bundles section offers groups of items at a discount, with the copy "You won't be charged for items you already own" (tier: directly observed). A Counter-Strike 2 Complete Item Bundle is stated to cost 10% less than redeeming each item individually (tier: directly observed).

**Detail:**
- Bundles hold roughly 10 or 20 items (tier: plausible, the narration is approximate).
- The bundle price excludes items the account already owns (tier: directly observed).
- The discount is expressed against the points cost of redeeming the items one by one (tier: directly observed).

*Cross-reference: O22, O24.*

## Social

**O26. Community Awards.**

**Observed:** The How points work copy states that points can be used to place awards on reviews, profiles, discussion board posts and user-generated content such as workshop items, screenshots and guides, and that the award will appear for all to see (tier: directly observed). The copy frames awards as a way to recognize another person's work, such as a helpful review or an impressive profile (tier: directly observed). The Points Shop's award summary shows how many awards the account has received and how many it has given (tier: directly observed).

**Detail:**
- One transcribed sentence says points cannot be used to reward and recognize player profiles and discussion board posts, which contradicts the surrounding copy (tier: unresolved, contradicts adjacent copy).
- The narration of the Community awards section itself is garbled (tier: unresolved).
- Whether the recipient receives anything beyond the displayed award was not stated (tier: directly observed).
- No award was given in the session (tier: directly observed).

*Cross-reference: O21, O32, O33.*

**O27. Profile page as viewed by others.**

**Observed:** View Profile shows the profile as it appears when someone looks at it: username, level, last online time, badges, number of games, inventory, and the videos, reviews, artwork, guides, workshop items and screenshots the user has created (tier: directly observed). The profile shows recent activity with time played (tier: directly observed). Tapping the username opens a dropdown listing other aliases the user has played under (tier: directly observed).

**Detail:**
- The analyst's account of what Steam does with aliases trails off and cannot be read reliably (tier: unresolved).
- Equipped frames and backgrounds appear on this page according to the item copy in O23, but no equipped item was viewed (tier: strongly supported).

*Cross-reference: O15, O16, O17, O18, O23.*

**O28. Account menu and My content.**

**Observed:** Tapping the avatar in the top right corner shows the profile name with a View Profile button, the number of games and friends, an option to add funds to the wallet, and an Add Friends button (tier: directly observed). Below these, a My content list offers Friend activity, Friends, Groups, Screenshots, Videos, Badges and Inventory (tier: directly observed).

**Detail:**
- Inventory shows the games the account currently has on Steam (tier: directly observed).
- The analyst considers screenshots and videos a PC-oriented feature and was unsure how well they work on mobile (tier: directly observed).
- Friend activity was listed but not opened (tier: directly observed).

*Cross-reference: O17, O29, O30, O31, O36, O37.*

**O29. Add Friends.**

**Observed:** Add Friends shows the user's friend code with the copy "Enter your friend's friend code to invite them to connect or send a quick invite via a link" (tier: directly observed). The page also lets the user search for friends (tier: directly observed).

**Detail:**
- Three routes are offered: friend code, invite link and search (tier: directly observed).
- No reward for adding or inviting friends was shown (tier: directly observed).

*Cross-reference: O28, O30, O35.*

**O30. Friends list management.**

**Observed:** The Friends list offers Manage friends list and Add a friend (tier: directly observed). Managing the list lets the user remove, block or unblock a friend, or promote a friend to broadcast moderator (tier: directly observed).

**Detail:**
- Promotion to broadcast moderator assigns a role to a friend (tier: directly observed).
- The contents of the analyst's friends list were not described (tier: directly observed).

*Cross-reference: O23, O29, O32.*

**O31. Groups.**

**Observed:** The Groups page states that the account does not belong to any group and offers a search for groups by name (tier: directly observed).

**Detail:**
- How groups are joined and what membership changes were not shown (tier: directly observed).

*Cross-reference: O28.*

**O32. Community hub areas.**

**Observed:** Community Home shows what is happening across the community (tier: directly observed). Broadcasts shows community activity, including who is sharing broadcasts, artwork and screenshots (tier: directly observed). Workshop shows artwork and other community-made items (tier: directly observed).

**Detail:**
- Discussions and Market were listed in the Community dropdown but not opened (tier: directly observed).

*Cross-reference: O9, O26, O33, O34.*

**O33. News discussions and contribution prompts.**

**Observed:** Comments on a news item open that item's discussion on Steam News, with tabs to choose between artwork, videos, news and guides (tier: directly observed). Where a tab has nothing to show, Steam displays "No more content. So sad." followed by an invitation to help by sharing a screenshot, making a video or starting a new discussion (tier: directly observed).

**Detail:**
- The empty state turns an absence of content into three contribution actions (tier: directly observed).
- None of the contribution actions was started (tier: directly observed).

*Cross-reference: O14, O26, O32.*

## Reach beyond the app

**O34. Chat handed off to a separate app.**

**Observed:** Tapping Chat in the hamburger menu takes the user to the App Store to download Steam Chat as a separate app (tier: directly observed).

**Detail:**
- Chat is not available inside the Steam app itself (tier: strongly supported).

*Cross-reference: O9, O23.*

**O35. Share and invite links.**

**Observed:** The Store's three-dots menu offers Share, which produces a link to the Steam discovery page (tier: directly observed). Add Friends offers a quick invite sent as a link (tier: directly observed).

**Detail:**
- Where the links are sent and what a recipient sees were not shown (tier: directly observed).

*Cross-reference: O10, O29.*

**O36. Features tied to PC and Steam Deck.**

**Observed:** The notifications carousel screen addresses the user as someone who is away from their PC (tier: directly observed). The Points Shop offers Steam Deck virtual keyboard personalizations and startup movies for the Steam Deck or Big Picture mode (tier: directly observed).

**Detail:**
- The analyst considers screenshots and videos a PC-oriented feature (tier: directly observed).

*Cross-reference: O4, O22, O28.*

## Monetization

**O37. Steam Wallet funded by card outside the App Store.**

**Observed:** The Wallet screen reads "Add funds to your Steam Wallet" and states that wallet funds may be used to purchase any game on Steam or within a game that supports Steam transactions, and that the user will have a chance to review the order before it is placed (tier: directly observed). The screen shows the amount in the account and buttons to add funds (tier: directly observed). Tapping to add funds opens a payment method form for entering a card, and the payment does not go through the App Store (tier: directly observed).

**Detail:**
- Adding funds is also offered in the account menu in O28 (tier: directly observed).
- The available top-up amounts were not recorded (tier: directly observed).

*Cross-reference: O21, O28, O38.*

**O38. Price and discount framing in the Store.**

**Observed:** The Store puts price and discount in its main surfaces: a discounts and events row, a Specials entry, sale events under Special Sections, a row of games under €10, and wishlist sorting by price and discount (tier: directly observed).

**Detail:**
- The analyst notes that the €10 row lets the user pick cheaper games (tier: directly observed).
- No specific game price or discount percentage was read out (tier: directly observed).

*Cross-reference: O10, O13, O21, O37, O41.*

## Return triggers

**O39. Notifications tab.**

**Observed:** The Notifications tab holds existing notifications, which the analyst describes as mostly related to game sales (tier: directly observed).

**Detail:**
- The carousel's example notifications in O4 cover a wishlisted game on sale, a friend request and a game available to download (tier: directly observed).
- Notification settings were not opened (tier: directly observed).

*Cross-reference: O1, O4, O13.*

**O40. Event reminder bell.**

**Observed:** In Featured news, an upcoming event, "Start your engine", scheduled for the next day at 6:45 pm, carries a bell icon (tier: directly observed). Tapping the bell opens Set a reminder, which tells the user when the event starts and lets them choose delivery by email or by the mobile app (tier: directly observed).

**Detail:**
- A further option on the reminder screen is transcribed as editing "the character" and cannot be read reliably (tier: unresolved).
- The email option delivers the reminder outside the app (tier: directly observed).

*Cross-reference: O14.*

**O41. Sale-period items and seasonal badge renewal.**

**Observed:** The Points Shop groups items by sale period, showing Spring Sale 2026 items and Winter Sale 2025 items (tier: directly observed). The seasonal badge copy tells the user to check back during the summer and winter sales for an all new seasonal badge (tier: directly observed).

**Detail:**
- The copy names two recurring sale periods, summer and winter, as the points at which a new seasonal badge appears (tier: directly observed).
- Whether sale-period items leave the shop after their sale was not stated (tier: directly observed).
- The Points Shop itself is framed as open all year round (tier: directly observed).

*Cross-reference: O17, O22, O38.*

# Pass two: tagging

## Applied tags

**Tag:** Soft Currency

**Observations:** O21, O22

**Supporting observations:** O23, O24, O25, O26

**Confidence:** strongly supported

**Role:** monetization, social
O21 ties point grants to euros spent on Steam purchases, and O26 shows points spent to place awards on other identified users' content (tier: directly observed).

**Rationale:** Exclusion conditions checked first: Steam Points are product-defined units separate from the euro-denominated Steam Wallet in O37, they are exchanged for items rather than only measuring progression (O22), and no automatic consumption through participation was shown (tier: directly observed). Steam maintains a points balance shown on item pages (O23) and prices items and bundles in points (O22, O25) (tier: directly observed). The product's copy names two repeatable acquisition paths that do not sell points directly: shopping on Steam at 117 points per €1, and contributing to the Steam community (O21) (tier: directly observed). The session did not show a redemption reducing the balance or a grant adding to it (tier: directly observed). Soft Currency is a specialization of Spendable Credits and Tokens, which is the parent entry (tier: directly observed).

**Variants present:** Transaction-earned soft currency, since qualifying purchases generate points (O21) (tier: directly observed). Social-earned soft currency, since community contribution is stated as an earning path (O21) (tier: directly observed). General-purpose soft currency, since the same balance is spent on several categories of cosmetic items and on community awards (O22, O26) (tier: directly observed).

**Variants not established:** Expiring, capped-earning, transferable and dual-path variants were not shown, and no offer selling points for money appeared in the session (tier: directly observed).

**Alternative considered:** Hard Currency, because the per-euro grant resembles its bundled variant, in which a paid product includes a currency grant (tier: plausible). It is not applied because the payment buys the game, DLC or item, the points are not an intermediary between that payment and its result, and Soft Currency's required conditions name performing transactions as a non-paid acquisition path (tier: strongly supported). An offer selling points directly for money would separate the two and would add Hard Currency (tier: strongly supported).

**Tag:** Cosmetic Customization

**Observations:** O22, O23

**Supporting observations:** O19, O24, O25, O27, O36, O41

**Confidence:** directly observed

**Role:** social, engagement
O23 states that frames appear to friends in the friends list and Steam Chat and that backgrounds are seen by other players who view the profile, and O22 shows the catalog browsed within the session (tier: directly observed).

**Rationale:** Exclusion conditions checked first: the item copy describes changes to how the profile, avatar, chat, and Steam Deck keyboard and startup sequence look, with no stated effect on capabilities, prices or outcomes (O22, O23) (tier: directly observed). The items are acquired content redeemed with points rather than built-in settings (O21, O22) (tier: directly observed). Steam defines alternative presentation states, previews an avatar frame on the user's own avatar, and describes an equipped state for backgrounds and game profiles (O23) (tier: directly observed). Showcase upgrades (O18) are kept out of this tag because they add display capacity rather than only changing appearance (tier: strongly supported).

**Variants present:** Profile cosmetic, through avatar frames, profile backgrounds and game profiles (O23) (tier: directly observed). Avatar cosmetic, through animated avatars (O22) (tier: directly observed). Emote cosmetic, through emoticons and animated stickers (O22) (tier: directly observed). Effect cosmetic, through chat effects (O22) (tier: directly observed). Composite cosmetic, through game profiles that equip several items and a theme together (O23) (tier: directly observed). Equipable cosmetic, through the stated equip behavior of backgrounds and game profiles (O23) (tier: directly observed). Context-specific cosmetic, through startup movies and virtual keyboard personalizations that apply to the Steam Deck or Big Picture mode (O22) (tier: directly observed).

**Variants not established:** Temporary, automatically applied and layered variants were not shown, and no item was equipped during the session (tier: directly observed).

**Alternative considered:** A functional variant, if an item changed what the profile can do rather than how it looks; the showcase upgrades in O18 are the nearest case and are kept out of this tag (tier: plausible). Equipping an item and viewing the resulting profile would confirm the purely presentational effect (tier: strongly supported).

**Tag:** Leveling

**Observations:** O16

**Supporting observations:** O17, O27

**Confidence:** strongly supported

**Role:** social, engagement
O27 shows the level displayed on the profile as others view it, and O17 ties badge activity inside the Points Shop to profile XP (tier: directly observed).

**Rationale:** Exclusion conditions checked first: the level is shown as a state of the user on the profile rather than as a purchased plan, a content unit or a points balance (O16) (tier: directly observed). Steam assigns the user a current level (O16) and states that badges contribute towards profile XP (O17), which converges on a level advanced by accumulated progression (tier: strongly supported). The ordered set of levels and the thresholds between them were not shown (tier: directly observed).

**Variants present:** XP-driven leveling, since the product states that badges contribute to profile XP alongside a displayed level (O16, O17) (tier: plausible).

**Variants not established:** Capped, demotion-enabled, multi-track and reward-bearing levels were not shown (tier: directly observed).

**Alternative considered:** A static profile label that does not change under a progression rule (tier: plausible). Seeing the level change after a badge is earned or upgraded would separate the two (tier: strongly supported).

**Tag:** Experience Points

**Observations:** O17

**Supporting observations:** O16, O27

**Confidence:** plausible

**Role:** engagement
O17 connects badges, including the seasonal badge upgraded with points, to profile XP within the Points Shop (tier: directly observed).

**Rationale:** Exclusion conditions checked first: profile XP is not presented as spendable, and no score or session-only use was shown (O17) (tier: directly observed). The product names profile XP and states that badges contribute towards it, and the profile displays a level (O16, O17) (tier: directly observed). The XP amount, the value each badge grants and the threshold it advances toward were not shown (tier: directly observed).

**Variants present:** Account XP, since the value is named as profile XP (O17) (tier: plausible).

**Variants not established:** Fixed or variable grants, rollover, threshold reset and caps were not shown (tier: directly observed).

**Alternative considered:** A badge count that the profile displays without accumulating quantified progression value (tier: plausible). Seeing an XP amount granted for a badge and a level change at a threshold would separate the two (tier: strongly supported).

**Tag:** Social Feed

**Observations:** O14

**Supporting observations:** O4, O32, O33

**Confidence:** directly observed

**Role:** engagement, social
O14 shows items browsed, liked and commented on within the News tab, attributed to identified developers, publishers, curators and Steam, with per-source muting (tier: directly observed).

**Rationale:** Exclusion conditions checked first: items come from more than one source, including Steam official news, curators and individual developers or publishers, so the feed is neither a single-publisher channel nor a personal history (O14) (tier: directly observed). Steam attributes items to those actors, lets the viewer mute a developer or publisher or hide a type of post, and presents dated items in a scrolling stream (O14) (tier: directly observed). The carousel describes the feed as customized based on the user's library (O4) (tier: directly observed).

**Variants present:** Publication feed, since items are published news posts (O14) (tier: directly observed). Mixed-content feed, since news, sales and events share the tab (O14) (tier: directly observed). Personalized social feed, since the product states customization by library and the viewer can mute sources (O4, O14) (tier: strongly supported).

**Variants not established:** Chronological or ranked ordering, continuous loading and real-time insertion were not established (tier: directly observed).

**Alternative considered:** A content recommendation feed without social attribution (tier: plausible). It is set aside because each item is attributed to a named developer, publisher, curator or Steam and carries likes and comments (O14) (tier: directly observed).

**Tag:** Community Space

**Observations:** O32, O33

**Supporting observations:** O14, O26

**Confidence:** strongly supported

**Role:** social, engagement
O33 shows a discussion attached to each news item with prompts to contribute, and O32 shows Broadcasts and Workshop surfacing what other users share (tier: directly observed).

**Rationale:** Exclusion conditions checked first: the discussion attached to a news item is not a two-person conversation or a one-off lobby, and the session showed no maintained membership or group-owned state for these areas, so the Group Membership and Clan / Guild siblings do not apply to them (O32, O33) (tier: strongly supported). Steam maintains discussions attached to news items with tabs for artwork, videos, news and guides, invites contributions through its empty state, and shows other users sharing broadcasts, artwork and screenshots (O32, O33) (tier: directly observed). No contribution was made during the session, and Discussions itself was not opened (tier: directly observed).

**Variants present:** Content-attached community space, through the discussion attached to each news item (O33) (tier: directly observed). Multi-format community space, through artwork, videos, news, guides, screenshots and broadcasts (O32, O33) (tier: directly observed).

**Variants not established:** Discussion forum structure, moderation rules and viewing or contribution restrictions were not shown (tier: directly observed).

**Alternative considered:** Social Feed alone, treating the comments as reactions within the feed rather than a persistent space (tier: plausible). The discussion opens as its own context with contribution tabs (O33), which is what the Community Space invariant requires, and opening Discussions and posting would confirm persistence across contributions (tier: strongly supported).

## Entries considered and not applied

- Hard Currency: Steam Points are granted on purchases of other goods rather than sold as a balance, so the payment does not create an intermediary between itself and its result, and the Steam Wallet is a euro-denominated stored monetary balance, which is commerce infrastructure (O21, O37) (tier: strongly supported).
- Spendable Credits and Tokens: Steam Points satisfy this parent entry, but the more specific Soft Currency applies and is reported instead, and the Steam Wallet is a real-currency balance, which the entry excludes (O21, O37) (tier: directly observed).
- Gifting: Community Awards direct a point-funded award to another user's content (O26), but the session shows only a visible award and a received count, not a usable benefit changing the recipient's balance, inventory, access or capacity, which the entry requires (tier: strongly supported).
- Progression Gate: Points Shop items for a game are conditioned on owning that game (O19), which is a purchase condition rather than a progression measure the product advances (tier: directly observed).
- Referral: Add Friends offers a friend code and an invite link (O29), but no reward conditioned on an invited person's action was shown (tier: directly observed).
- Clan / Guild: the Groups page (O31) showed no collective group-owned state and no group acting as a participant (tier: directly observed).
- Seasonal Progression Pass: the seasonal badge is tied to sale periods (O17, O41), but it is upgraded by spending points rather than advanced along a track of thresholds reached through activity, and no reward track was shown (tier: strongly supported).
- Shareable Win: the Share action produces a link to the discovery page (O35), not a product-composed representation of a recorded accomplishment (tier: directly observed).
- Energy: the discovery queue holds 12 titles (O11), but no capacity consumed by actions and restored over time was shown (tier: directly observed).
- Expert Guidance: How points work and its frequently asked questions (O21) explain a product feature rather than carry structured educational material about the user's underlying difficulty or skill (tier: directly observed).
- Profile Completion: the profile and account menu show counts of games, friends and created content (O27, O28), but no proportion of supplied attributes and no outstanding items are stated (tier: directly observed).
- Recommendation Queue: not a tag. The discovery queue (O11, O12) is merchandising, a personalised list of things to buy, in which nothing is withheld, nothing accumulates and no product state is produced by moving through it, and every commerce product carries one (tier: directly observed).
- Watched Item Change Alert: not a tag. Sale notifications on wishlisted games (O4, O13, O39) are a price-drop notification on a saved item, standard in commerce products, and a notification tactic rather than a designed experience pointing the user toward a behavior, on the same ground as review requests and permission primers (tier: directly observed).
- Opt-in Event Reminder: not a tag. The bell on an upcoming event (O40) is a calendar reminder for a sale, observed once and never followed to a delivered reminder, and it is a notification tactic on the same ground as review requests and permission primers (tier: directly observed).
- Group Membership: the session shows groups only as a surface that exists, a Groups page stating the account belongs to no group and a search by name (O28, O31), with no membership, no joining, no group state and nothing the entry's conditions can rest on (tier: directly observed). A plausible tag records thin evidence for a behaviour that is present, and here the behaviour itself is not established (tier: directly observed). A session in which a group is opened or joined and its membership, roles or shared state are visible would change the call (tier: strongly supported).

## Unresolved

**Badge attainment (O17, O27).** Steam displays badges on the profile and on a Badges page, and states that badges contribute to profile XP (tier: directly observed). Achievement cannot be assessed because no badge criterion was displayed and no badge was attained during the session, and the only badge whose acquisition was described, the seasonal badge, is upgraded by spending points rather than by satisfying a criterion (tier: directly observed). What remains locked is the attainment event: earning a badge through activity would show whether a criterion changes from unattained to attained (tier: strongly supported).

**Trading card crafting (O24).** The Points Shop copy states that Steam card crafting remains available for emoticons and backgrounds formerly tied to trading cards (tier: directly observed). The crafting surface was not reached, so whether Steam tracks member-level completeness of card sets, which Set Collection requires, is not established (tier: directly observed).

**Upgrade order for showcases and the seasonal badge (O17, O18).** Select showcases can be upgraded up to two times, and the seasonal badge is upgraded with points (tier: directly observed). No upgrade was redeemed, so whether each step is a separately acquired offer whose next step stays locked until the previous one is taken, which Purchase Ladder requires, lies behind a condition the session did not reach (tier: directly observed).

## Entries never observed

- Active Pass: no access withheld until the user performs an activity was shown (tier: directly observed).
- Boosters: no counted items expended inside an activity instance appeared (tier: directly observed).
- Challenge: no bounded objective instance was presented (tier: directly observed).
- Companion: no secondary entity acquired and developed separately from the account appeared (tier: directly observed).
- Comparative Rank: no ordered position of the user relative to others was displayed (tier: directly observed).
- Daily / Weekly Quests: no objectives issued on a daily or weekly schedule appeared (tier: directly observed).
- Daily Claim Pack: no single purchase paying out across recurring intervals was shown (tier: directly observed).
- Daily Login Rewards: no benefit for accessing the app during a daily window was shown (tier: directly observed).
- Earning Tasks: no catalogue of compensated tasks appeared (tier: directly observed).
- First-Purchase Bonus: no benefit tied to a first qualifying purchase was shown (tier: directly observed).
- Future Projection: no projected figure derived from the user's present position appeared (tier: directly observed).
- Leaderboard: no ordered list of users by a performance or activity measure appeared (tier: directly observed).
- Lives: no continuation units removed on failure appeared (tier: directly observed).
- Loot Box: no container or draw with undisclosed contents was shown (tier: directly observed).
- Milestone: no threshold recognized when reached was shown (tier: directly observed).
- Minigame: no self-contained game inside the app appeared (tier: directly observed).
- Passive Construction: no entity built or upgraded over time without repeated input appeared (tier: directly observed).
- Personal Data Reflection: playtime is shown in the Library and profile, but not as steps requiring a response from the user (tier: directly observed).
- Piggy Bank: no separate reserve of accumulating value appeared (tier: directly observed).
- Progression Fund: no reward track with a purchasable second lane appeared (tier: directly observed).
- Reward Multiplier: no stated modifier increasing an existing reward appeared (tier: directly observed).
- Rewarded Advertisement: no benefit conditioned on viewing an advertisement appeared (tier: directly observed).
- Season Content Pass: no entitlement to grouped season or event content was shown (tier: directly observed).
- Streak: no count of uninterrupted qualifying occurrences appeared (tier: directly observed).
- Variable Reward Outcome: no reward event with more than one possible result was shown (tier: directly observed).
- Variable Reward Schedule: no reward granted on an unpredictable schedule was shown (tier: directly observed).

# Pass three: proposed new tags

### Public Recognition Award

**Draft definition.** A public recognition award lets a user spend a held product balance to attach a visible award to another identified user's content or profile, displays that award to everyone who views the content, and keeps counts of the awards each account has given and received.

**Source observations:** O26.

**Conditions it appears to depend on:** A spendable balance, user-created content or profiles that other users view, and a display surface on that content (tier: strongly supported).

**Why it is not covered.** Gifting requires a usable benefit that changes the recipient's balance, inventory, access or capacity, and the recipient of an award receives recognition rather than anything usable, while Cosmetic Customization covers changing one's own presentation rather than marking someone else's content (tier: strongly supported).

**Recurrence elsewhere:** Recurs across forum and video platforms (tier: strongly supported, not derived from this session).

**Caveat.** This proposal is open. No award was given in the session, so the exchange is read from product copy, the Community awards section and the award summary count rather than from an act, and whether the sender's balance is reduced is unobserved (tier: directly observed). Two kinds of evidence would settle it: a session in which an award is purchased and given, showing the cost to the sender and the award appearing on the content, or a recipient surface showing whether anything usable arrives with the award (tier: strongly supported). If anything usable does arrive, Gifting applies and this proposal falls away (tier: strongly supported).

# Close: system view

Steam opens with account security before any browsing. The notification and camera permissions (O1, O5), the credential sign-in and email code (O2, O3), and the authenticator setup with its recovery code (O7) lead to a first landing on Steam Guard (O6), and only after that does the unguided Store become the user's first free choice (O8, O9) (tier: directly observed). The camera permission in O5 serves the QR sign-in that O7 sets up and returns to (tier: strongly supported).

The browsing path runs from the store home (O10) into the discovery queue (O11), whose follow, wishlist and ignore dispositions are recorded against the user (O12) and feed the Wishlist (O13) (tier: directly observed). Wishlisted games are the subject of sale notifications (O4, O39), which connects the saved list to later visits framed around prices and discounts (O38) (tier: strongly supported). Money enters through the Steam Wallet or card entry outside the App Store (O37) (tier: plausible, the Wallet copy names game purchases but no purchase was completed in the session).

Spending money on Steam is the stated source of Steam Points at a fixed rate per euro (O21), so the points economy depends on the purchase path in O37 and O38 (tier: directly observed). Points then flow into three sinks: cosmetic items (O22, O23), awards on other users' content (O26), and upgrades to the seasonal badge and profile showcases (O17, O18) (tier: directly observed). Part of the catalog is open only for games the account owns (O19), which ties the Points Shop back to the Library (O15), and bundle prices adjust for items already owned (O25) (tier: directly observed).

The profile collects outputs from several of these systems in one surface that other people view (O27) (tier: strongly supported). Cosmetic items are described as visible on the profile, in the friends list and in Steam Chat (O23), so their display depends on the social connections built through Add Friends and the friends list (O29, O30) (tier: strongly supported). Badges feed profile XP (O17), which sits beside the displayed level (O16), and recent activity with playtime draws on the Library (O15) (tier: strongly supported).

The News feed (O14) routes the user to discussions (O33), to developer store pages (O14) and to event reminders that can arrive by email or in the app (O40) (tier: directly observed). Empty community tabs ask the user to contribute (O33), community contribution is a stated source of points (O21), and awards spend points on contributions (O26), which links community content and the points economy as described in the product's copy (tier: plausible, no contribution or resulting grant was observed).

Sale periods organize Points Shop items and renew the seasonal badge (O41), linking the timing of return to the store's sale framing (O38) and to badge progression (O17) (tier: strongly supported). Two paths lead outside the app: Chat hands off to a separate app (O34), and Steam Deck and PC references point to other Steam surfaces (O36), while share and invite links carry content and invitations out (O35) (tier: directly observed).

Dependencies in summary: O21 depends on O37 and O38; O22 to O26 depend on O21; O19 depends on O15; O27 draws on O15, O16, O17 and O23; O39 depends on O1 and O13; O40 depends on O14 (tier: strongly supported).
