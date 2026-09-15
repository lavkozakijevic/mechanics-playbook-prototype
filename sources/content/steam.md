# Steam

**Teaser:** Steam turns money already spent on games into a second currency that buys cosmetics, praise for other players and profile status, no separate purchase required.

Steam on iOS is a companion app for an existing account rather than a fresh signup, and its design is organized around Steam Points, a currency the account earns automatically from purchases already made elsewhere on the platform. Points get spent on cosmetics, on recognizing other users' content and on upgrading a profile level built from badges, all without a separate purchase decision. A single security-first onboarding chain, credential sign-in, an emailed code and an authenticator setup with a hand-copied recovery code, runs before the Store becomes the user's first unguided choice. From there the app runs a browsing loop through the Store, a Discovery Queue and a Wishlist, alongside a News feed, a community hub and a Points Shop that ties nearly everything else together.

---

## System view

Steam is a medium complexity system organized around Steam Points, a currency earned automatically at a fixed rate for every euro spent on the platform and spent nowhere near the purchase that created it. Points flow into three separate outlets: cosmetic items for the user's own profile, awards placed on other users' content, and upgrades to a profile level built from badges, while a separate News feed and community hub run their own return loop alongside the points economy rather than through it.

---

## Mechanics

### Soft Currency

**Implementation summary:** Steam Points accrue automatically at 117 per euro spent anywhere on the platform, arriving as a rebate on purchases the user already made.

**What was observed:** Steam Points are earned by shopping on the platform, at a stated rate of 117 points per euro spent on any game, DLC, hardware, application, soundtrack or in-game item, or by contributing to the Steam community, though how that second path converts into points is never stated. The balance is spent across a wide Points Shop catalogue, on Community Awards placed on other users' content, and on upgrades to the seasonal badge and profile showcases. Redeemed items are described as the user's to keep forever, not tradable or marketable, with no stated expiry. Bundle pricing discounts the points cost of buying several items together and waives the cost of anything already owned.

**How it is presented:** The Points Shop leads with a How points work explainer and FAQ, and every item page shows the current points balance next to the item itself. A My points history section and a My award summary section keep a running account of the balance and the awards given and received. The shop is framed as open all year round rather than as a limited window.

**What is worth noting:** The spend and the purchase that funded it are separated in time and in place: the user pays for a game thinking about the game, and the points show up later inside an entirely different shop. Steam names two earning paths, purchases and community contribution, but only describes the mechanics of one of them. Nowhere does Steam offer to sell points directly for money, keeping the currency one step removed from a straight in-app purchase.

**Key findings:**

- Points accrue at a stated 117 per euro spent on games, DLC, hardware, applications, soundtracks or in-game items.
- Steam names community contribution as a second earning path without describing how it converts to points.
- Points fund cosmetics, Community Awards and badge or showcase upgrades, with no option to buy points directly for money.
- Redeemed items are described as permanent, non-tradable and non-marketable.
- My points history and My award summary give the account a standing record of its balance and its awards.

**Screenshots needed:** the Points Shop home with the points balance and the How points work explainer.

### Cosmetic Customization

**Implementation summary:** Steam sells profile frames, backgrounds, chat effects and full game profile themes for points, all purely visual and visible to other players.

**What was observed:** The Points Shop catalogue covers avatar frames, profile backgrounds, chat effects, emoticons, animated stickers and full game profile bundles, priced roughly 1,000 to 5,000 points each. A game profile bundles several exclusive items and a theme together, equipping all of them at once except the animated avatar. Some items, including keyboard and startup movie personalizations, apply only to the Steam Deck's virtual keyboard and startup sequence or to Big Picture mode. Some Points Shop items are available only for games the account already owns, and bundle prices exclude anything already owned while discounting the rest by a stated 10%.

**How it is presented:** An item's own page previews it before purchase, showing an avatar frame on the user's own avatar or opening a game profile's characters and animations in a separate tab. Frame copy states frames appear on the profile and community pages and to friends in the friends list and in Steam Chat while the user is online. Background copy states an equipped background is visible to anyone who views the profile.

**What is worth noting:** Ownership gates a slice of the cosmetics catalogue behind owning the related game, tying a spending surface that is otherwise open to everyone back to the core commerce catalogue. And a mobile app carries cosmetic categories, Steam Deck keyboards and startup movies, built for a device it isn't running on.

**Key findings:**

- Item prices in the Points Shop run roughly 1,000 to 5,000 points.
- Frames and backgrounds are stated to be visible to friends, in Steam Chat, and to anyone viewing the profile.
- Some Points Shop items are available only for games the account already owns.
- Bundles waive the price of items already owned and price the rest at a stated 10% discount versus buying them individually.
- Keyboard and startup movie personalizations apply to the Steam Deck or Big Picture mode, not to the mobile app itself.

**Screenshots needed:** an item preview screen for an avatar frame or a game profile bundle.

### Leveling

**Implementation summary:** A profile level is shown to every visitor, built from badge activity, with the actual rule advancing it never disclosed.

**What was observed:** Steam displays a current level on the user's own profile and shows the same level on the profile as viewed by anyone else, next to badges, games count, last online time and the videos, reviews, artwork, guides, workshop items and screenshots the user has created. Steam states that badges, including a seasonal badge upgraded by spending points, count toward the value behind that level.

**How it is presented:** The level sits on the profile as one status item among several, shown identically to the account owner and to a visitor. The rule advancing it from one number to the next is never shown or stated.

**What is worth noting:** Leveling here draws on a currency-funded action, spending points to upgrade the seasonal badge, as one of its inputs, so the points economy folds back into a public status display rather than staying purely activity-driven.

**Key findings:**

- A current level is displayed on the user's own profile and on the profile as seen by other users.
- Steam states that badges, including the points-upgraded seasonal badge, count toward the value behind that level.
- The threshold or rule advancing the level is not disclosed.
- The level appears alongside badges, games count and created content on the public profile view.

**Screenshots needed:** the profile page as viewed by another user, showing the level and badges.

### Social Feed

**Implementation summary:** A News tab blends official Steam news, curator posts and individual developer updates into one muteable, per-source feed.

**What was observed:** The News tab carries items attributed to named developers, publishers, curators and Steam itself, each of which can be liked and commented on. Users can mute an individual source or hide a category of post rather than muting the feed altogether. The onboarding carousel states that the feed is customized based on the account's game library.

**How it is presented:** Items appear as a scrolling stream mixing news, sale information and event listings, each carrying the name of who posted it and controls to mute that specific source.

**What is worth noting:** Muting operates per named source rather than as a single feed-wide toggle, so a user can quiet one developer or publisher without leaving the feed. Commenting on an item does not stay inline, it opens into its own separate discussion space.

**Key findings:**

- News items are attributed to named developers, publishers, curators or Steam itself.
- Users can mute an individual source or hide a category of post.
- The onboarding carousel states the feed is customized based on the account's game library.
- The feed mixes news, sale information and event listings in the same stream.

**Screenshots needed:** the News tab showing multiple attributed sources and a mute control.

### Community Space

**Implementation summary:** Every news item opens its own discussion space, and the community hub's empty states turn silence into a direct invitation to post.

**What was observed:** The Community section of the app opens into Community Home, which surfaces community-wide activity, Broadcasts, which shows other users sharing broadcasts, artwork and screenshots, and Workshop, which surfaces community-made items. Commenting on a news item opens that item's own discussion, organized into tabs for artwork, videos, news and guides. An empty tab in that discussion reads "No more content. So sad." followed by an invitation to help by sharing a screenshot, making a video or starting a discussion.

**How it is presented:** The discussion opens as its own space once a comment is made on a news item, separate from the feed item that led to it, with its own set of content tabs.

**What is worth noting:** The empty state is written to solicit one of three specific actions rather than simply stating there's nothing there, turning an empty content tab into a direct pitch for a contribution.

**Key findings:**

- Community Home, Broadcasts and Workshop each surface user-generated content: broadcasts, artwork and screenshots.
- Discussions attached to a news item carry separate tabs for artwork, videos, news and guides.
- An empty content tab is paired with prompts to share a screenshot, post a video or start a discussion.
- Discussions and Market are listed in the Community navigation.

**Screenshots needed:** an empty-state discussion tab showing the contribution prompt.

---

## Onboarding and first run

Steam requires an existing account rather than a fresh signup, and moves through permission prompts, an email verification code and an authenticator setup before any unguided browsing begins.

### O1. Notification permission at launch

On first launch, before sign-in or any other screen, Steam asks for permission to send notifications, stating that notifications may include alerts, sounds and icon badges and that the choice can be changed later in Settings.

- Steam asks before offering any explanation of what its notifications will contain.

### O2. Steam-only sign-in

Sign-in accepts only an existing Steam account name and password, with no other option offered, and greets a returning account with "Welcome back to Steam."

### O3. Email verification code

Signing in also requires a five-character code Steam sends to the account's email address, and entering it produces the welcome-back screen. Getting the code means leaving the app to check email.

### O4. Post-sign-in feature carousel

After signing in, a three-screen carousel walks through changes before ending on a Done button: customizing notifications, with example notifications shown for a wishlisted game on sale, a friend request and a new game available to download; using the camera to scan a QR code for sign-in or to confirm a sign-in with one touch; and a list of further changes covering trade confirmation improvements, a new library view, support for multiple accounts, a news feed customized to the user's library, account notifications and store browsing improvements.

### O5. Camera permission mid-carousel

Partway through the carousel, Steam asks for camera access, stated as enabling QR code sign-in, with no screen announcing the request beforehand.

### O6. Landing on Steam Guard

After the carousel, Steam opens on the Steam Guard tab rather than the Store or Library, stating that adding an authenticator protects the account and speeds up sign-in through QR codes or one-touch approval. The bottom navigation holds Store, News, Steam Guard and Notifications, alongside a separate hamburger menu.

### O7. Setting up the authenticator

Adding an authenticator asks for a phone number, then requires confirming that number through a link sent by email before Steam sends a code. Steam Guard then shows a recovery code, described as needed if the account, device or app access is ever lost, that has to be copied down by hand rather than tapped to copy. Finishing the setup opens the camera rather than the Store or Library.

### O8. No guided tour

Steam gives no walkthrough of its areas once the authenticator setup finishes, leaving the Store as the first surface the user opens unaided.

---

## Core loop and automation

Steam's navigation surfaces the Store, News, Steam Guard and Notifications in the bottom bar, with Points Shop, Discovery Queue, Wallet, Community and Chat tucked inside a hamburger menu.

### O9. Navigation structure

The hamburger menu holds a Store dropdown, Store Home, Specials, New Releases, Discovery Queue, Points Shop, Wishlist and Wallet, then News, Steam Guard and Notifications, then Confirmations, Library, Community and Chat. Community opens its own dropdown of Community Home, Discussions, Market, Broadcasts and Workshop. The account menu sits behind an avatar in the top right corner.

### O10. Store home

The Store tab opens with a search bar, Wishlist and Wallet buttons, and Browse, Recommendations, Categories, Ways to Play and Special Sections menus. Its home feed runs through Featured and Recommended, discounts and events, category browsing, recommendations based on games the user plays or has played, the Discovery Queue, new releases, specials, free games, tag browsing, community recommendations, New and Trending, Top Sellers, Popular Upcoming, and games under €10, closing with an invitation to keep scrolling for more. A three-dots menu offers Share, producing a link to the Steam discovery page, and Refresh.

### O11. Discovery Queue

The Discovery Queue surfaces one recommended game at a time, with a Next in queue control to move forward, and holds 12 titles the user can move back and forward through.

### O12. Discovery Queue explainer

Steam describes the Discovery Queue as a mix of new, top-selling and similar titles to what the user already plays, and directs the user to follow, wishlist or ignore each title from its own page, or jump to the next one. The Discovery Queue page itself keeps a record of titles followed, wishlisted and ignored.

### O13. Wishlist

The Wishlist lists wishlisted games with a search by name or tag, filters, and sorting by rank, name, price, discount, date, top-selling, release date and review score, including a rank the user sets themselves.

### O14. News feed with per-source controls

The News tab offers Your news, Upcoming, Featured, Steam official news, Curators, Sales and Events, showing dated items with likes and comments. Each item can be hidden by type, or muted by developer or publisher, alongside links to that source's news hub or store page. Commenting opens the item's own discussion on Steam News.

### O15. Library

The Library lists owned games, sortable by recent activity, name or playtime.

---

## Goals and progression

Steam displays a profile level and badge collection, with a seasonal badge and showcase capacity both upgraded by spending points.

### O16. Profile level

Viewing the profile shows the user's level alongside their username, last online time and badges, without stating the rule for moving between levels.

### O17. Badges and the seasonal badge

A Badges page in the account menu shows the badges an account has collected. In the Points Shop, a seasonal badge can be upgraded by spending points, and Steam states that badges are shown on the profile and count toward profile XP. Steam tells users to check back during the summer and winter sales for a new seasonal badge.

### O18. Showcase upgrades

The Points Shop's profile showcases can be upgraded up to two times, adding room to display badges and artwork.

---

## Access and eligibility

A slice of the Points Shop catalogue is conditioned on owning the related game, and the account's security confirmations page sits empty.

### O19. Ownership-gated items

The Points Shop's From your games section shows items tied to games the account owns, and its copy states that points can be redeemed for a background or emoticon for an owned game.

### O20. Security confirmations

Confirmations, reached from the hamburger menu, states there are no confirmations at this time, and describes itself as where the user reviews and confirms security changes to the account.

---

## Economy and resources

Steam Points are the account's central resource, earned through purchases already made elsewhere in the app and spent across a wide catalogue of items, bundles and community awards.

### O21. Earning Steam Points

The Points Shop opens with an explanation that Steam Points are earned by shopping on Steam or by contributing to the Steam community, and can be spent on customizing the user's presence or on awarding other community members. Steam states a rate of 117 points for every euro spent on any game, DLC, hardware, application, soundtrack or in-game item. How community contribution converts into points is not stated. The Points Shop keeps a My points history section alongside the earning explanation.

### O22. Points Shop catalog

The Points Shop is organized into sections covering items from the user's own games, sale events, bundles, keyboards, startup movies, avatars, backgrounds, community awards, the seasonal badge, game profiles, profile showcases, animated stickers, chat effects and emoticons, alongside points history and an award summary. Its featured home leads with current sale items, then rows of profile backgrounds, past sale items, startup movies, game profiles, and items tied to specific games. Item prices run roughly 1,000 to 5,000 points. Keyboards and startup movies personalize the Steam Deck's virtual keyboard and startup sequence, or Big Picture mode. Steam frames the Points Shop as available all year round.

### O23. Item preview and equip

An item's own page shows the current points balance, the item name, and a preview, such as an avatar frame shown on the user's own avatar. Frame copy states frames appear on the profile and community pages and to friends in the friends list and in Steam Chat while the user is online. Background copy states an equipped background is visible to anyone who views the profile. A game profile is described as bundling exclusive items and a theme not available separately, with everything equipping on activation except the animated avatar, and its preview opens in a separate tab showing characters and animations.

### O24. Ownership rules

Steam states that Points Shop items are the user's to keep forever and are not marketable or tradable, with no stated expiry. It also states that emoticons and backgrounds once tied to trading cards can now be bought directly with points, and that card crafting remains available separately for those items.

### O25. Bundle pricing

The Bundles section groups items at a discount, stating that the user won't be charged for anything already owned. A named example, a Counter-Strike 2 item bundle, is priced 10% below buying its roughly 10 to 20 items individually, with the discount calculated only on the items the account doesn't already own.

---

## Social

Steam's social layer runs through the profile, the points economy and a set of community hub areas. Friends, groups and community content sit alongside a Community Awards system that spends the same points balance used to buy cosmetics.

### O26. Community Awards

Steam explains that points can be spent to place a visible award on another user's review, profile, discussion board post or created content such as workshop items, screenshots or guides, framed as a way to recognize someone else's work. The Points Shop's award summary shows how many awards the account has given and how many it has received. Steam's own copy is inconsistent about where awards can go: one line states they cannot be placed on profiles or discussion board posts, while the rest of the explanation says they can. Steam does not state whether the recipient receives anything beyond the displayed award.

### O27. Profile as others see it

Viewing the profile the way another user would shows the username, level, last online time, badges, number of games, inventory, and the videos, reviews, artwork, guides, workshop items and screenshots the user has created, alongside recent activity and time played. Tapping the username opens a dropdown listing other aliases the account has used. Equipped frames and backgrounds are stated to appear on this page once equipped.

### O28. Account menu and My content

Tapping the avatar opens the account menu, showing the profile name, a View Profile button, counts of games and friends, an option to add funds to the wallet, and an Add Friends button. Below this, a My content list offers Friend activity, Friends, Groups, Screenshots, Videos, Badges and Inventory. Inventory shows the games currently on the account.

### O29. Add Friends

Add Friends shows the user's own friend code, with an invitation to enter someone else's code or send an invite link, plus a search option. No reward is stated for adding or inviting a friend.

### O30. Managing friends

The friends list offers options to add a friend or manage the existing list. Managing a friend lets the user remove or block them, or promote a friend to broadcast moderator, a role assigned from inside the friends list itself.

### O31. Groups

Steam's Groups page states that the account belongs to no group and offers a search for groups by name. How a group is joined, and what changes once a user is a member, are not stated.

### O32. Community hub

The Community section of the navigation opens into Community Home, which surfaces community-wide activity, Broadcasts, which shows other users sharing broadcasts, artwork and screenshots, and Workshop, which surfaces community-made items. Discussions and Market are listed in the same navigation.

### O33. Empty discussion prompts

Commenting on a news item opens that item's own discussion on Steam News, organized into tabs for artwork, videos, news and guides. An empty tab reads "No more content. So sad." followed by an invitation to help by sharing a screenshot, making a video or starting a discussion, turning an empty tab into three separate contribution actions.

---

## Reach beyond the app

Chat, PC and Steam Deck references, and share and invite links each carry the user outside the mobile app.

### O34. Chat handoff

Tapping Chat in the hamburger menu sends the user to the App Store to download Steam Chat as a separate app; chat isn't available inside Steam itself.

### O35. Share and invite links

The Store's three-dots menu shares a link to the Steam discovery page, and Add Friends offers a quick invite sent as a link.

### O36. PC and Steam Deck features

The onboarding carousel addresses the user as someone away from their PC, and the Points Shop offers Steam Deck virtual keyboard personalizations and startup movies for the Steam Deck or Big Picture mode.

---

## Monetization

Wallet funding happens outside the App Store, and price and discount framing runs through the Store's main surfaces.

### O37. Wallet funding

The Wallet screen lets the user add funds usable on any Steam purchase or in-game Steam transaction, stating that the user reviews the order before it's placed. Adding funds opens a card payment form outside the App Store.

### O38. Price and discount framing

The Store surfaces price and discount throughout: a discounts and events row, a Specials entry, sale events under Special Sections, a row of games under €10, and wishlist sorting by price and discount.

---

## Return triggers

Sale-related notifications, an event reminder bell and seasonal badge renewal tied to Summer and Winter Sales bring users back.

### O39. Notifications tab

The Notifications tab holds existing notifications, mostly related to game sales.

### O40. Event reminder bell

An upcoming event listed in Featured news carries a bell icon; tapping it opens a reminder setup that states when the event starts and offers delivery by email or by the app.

### O41. Sale-period items and badge renewal

The Points Shop groups items by sale period, showing past Spring and Winter Sale items, and its seasonal badge copy points users back to the summer and winter sales for a new badge, while the Points Shop overall stays open all year round.
