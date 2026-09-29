# FIFA Panini Collection

**Teaser:** FIFA Panini Collection states every guest limit as an exact number next to what registering would unlock, before asking the user to choose.

FIFA Panini Collection digitizes sticker collecting for the FIFA World Cup 2026: packs opened from a held count reveal players that get glued into an album with one slot per player, duplicates go to a swap stack, and a Coca-Cola partnership runs through scanning, the packs and a whole badge category. A guest can play with reduced daily allowances before registering through a FIFA.com account unlocks the full set of packs, swap requests and challenges. A $2 deluxe pack and two purchase-count rewards are the only paid routes, both converging on a keepsake album sold outside the app, and the whole collection is available only until 30 September 2026.

---

## System view

This is a medium system. Its spine is the pack: every source of stickers in the app, whether scanning, a daily claim, sign-up or a challenge reward, arrives as an unopened pack in one held count, and opening one is the only way stickers reach the album. A daily allowance sits between the held count and the album, capping only how many packs can be opened rather than how many can be held, and registering through a FIFA.com account raises every one of the app's allowances at once rather than unlocking separate features one at a time.

---

## Mechanics

### Loot Box

**Implementation summary:** Packs held as a count resolve into different players on opening, and a $2 deluxe pack guarantees categories of stickers without naming them.

**What was observed:** FIFA Panini Collection holds packs as a count the user opens by swiping, and different openings produce different players. A $2 deluxe pack promises nine missing cosmic stickers, one missing poster sticker, and ten regular stickers that can include duplicates, without naming which stickers these will be.

**How it is presented:** Regular packs sit on the Open packs item as a running count, opened one at a time. The deluxe pack is promoted through a home screen banner and a dedicated offer screen stating its guaranteed categories before purchase.

**What is worth noting:** FIFA Panini Collection guarantees the deluxe pack's categories rather than its contents; missing items are promised within those categories without saying which ones, so the same uncertainty running through the free packs also runs through the paid one.

**Key findings:**

- Regular packs are held as a count and opened one at a time, each producing different players.
- The deluxe pack costs $2 and promises nine missing cosmic stickers, one missing poster sticker and ten regular stickers.
- Deluxe pack copy guarantees categories, not which specific stickers will be received.
- No purchase was made, so the deluxe pack's actual resolved contents aren't part of this record.

**Screenshots needed:** opening a regular pack and its revealed stickers; the deluxe pack offer screen stating its guaranteed categories.

### Energy

**Implementation summary:** A daily allowance limits how many packs can be opened, one for a guest and four registered, with a separate, less-established limit on open swap requests.

**What was observed:** FIFA Panini Collection blocks further pack opening once the day's allowance is used, one opening for a guest and four for a registered account, stating a wait of about 15 hours before the next opening. Held packs beyond that allowance simply wait; opening is the only thing capped. The swap area separately states a cap on how many swap requests can run at once, one for a guest and three for a registered account.

**How it is presented:** The opening block appears as a message the moment the allowance runs out, naming the wait and inviting the user to complete their account for a higher daily limit. The swap cap appears as a banner in the swap area stating the same guest-versus-registered contrast.

**What is worth noting:** FIFA Panini Collection states the swap-request cap in the same guest-versus-registered terms as the opening allowance, but only the opening allowance's return is actually shown; whether a swap slot frees up when a request is matched or withdrawn isn't something this write-up can describe.

**Key findings:**

- Pack opening is capped at one per day for a guest and four for a registered account.
- The block message states a wait of about 15 hours rather than a clock time.
- Holding packs isn't capped, only opening them; packs can accumulate across days.
- A separate, stated cap of one open swap request for a guest and three for a registered account exists in the swap area.

**Screenshots needed:** the pack-opening limit message stating the wait; the swap area banner stating its request cap.

### Set Collection

**Implementation summary:** An album with one slot per player tracks completion as a percentage, with duplicates routed to a swap stack instead.

**What was observed:** FIFA Panini Collection gives every player a slot in a virtual album, filled only once its sticker is glued in; unglued stickers carry a red star. The public profile reports album completion as a percentage, alongside the number of stickers collected and cosmic stickers glued. Completing 100% of the album promises a personalized recap animation, marked as coming soon, and gluing every cosmic sticker unlocks a full discount coupon on a digital keepsake album sold outside the app.

**How it is presented:** Dragging a sticker toward the album opens it at the matching player's page, with a plus button over the empty slot. Completion figures sit on the public profile; the two completion rewards are listed on a dedicated Collection rewards page.

**What is worth noting:** FIFA Panini Collection recognizes completion at more than one level at once, the whole album and the cosmic-sticker subset separately, each with its own named reward, rather than treating the album as a single finish line.

**Key findings:**

- Each player has a slot filled only when the matching sticker is glued in.
- Unglued stickers are marked with a red star.
- The public profile states album completion as a percentage alongside stickers collected and cosmic stickers glued.
- Completing 100% of the album promises a recap animation marked coming soon; gluing every cosmic sticker unlocks a full discount coupon on an outside keepsake album.

**Screenshots needed:** the album showing a red-starred unglued sticker beside a filled slot; the Collection rewards page listing both completion rewards.

### Achievement

**Implementation summary:** A tiered badge page names criteria across collecting, swapping, challenges and scanning, each in three named tiers, with no badge attained in this analysis.

**What was observed:** The last page of the digital album lists achievement badge categories, each in three tiers: album progress, teams completed, challenges completed, team captains, swaps, previous World Cup winners, and Coca-Cola items scanned. The public profile carries its own achievements section, reading no achievements yet for an unregistered guest.

**How it is presented:** The badge page sits as the final page of the album, reached by scrolling past every country's stickers. Each category names its three tiers directly; no reward is listed against any of them.

**What is worth noting:** FIFA Panini Collection folds a sponsor's own product into the same badge system as the collecting and swapping it otherwise recognizes, naming Coca-Cola items scanned as one of seven tiered categories rather than treating it separately.

**Key findings:**

- Achievement badges span seven categories, each with three named tiers.
- Categories include album progress, teams completed, challenges completed, captains, swaps, past World Cup winners and Coca-Cola items scanned.
- No reward is listed against any individual badge.
- No badge was attained during this analysis.

**Screenshots needed:** the achievement page listing its seven tiered categories.

### Challenge

**Implementation summary:** Three numbered challenges each state a target, a reward and an end date, with two already expired and the third counting down two days.

**What was observed:** FIFA Panini Collection lists three numbered challenges with a stated success condition and reward each. The first two, tied to the hosting countries and the reigning champion team, are marked expired. The third, collecting ten team captains, shows zero of ten progress and two days remaining, and requires tapping a participate button before it counts.

**How it is presented:** Challenges sit on their own screen reached from the bottom navigation, each showing its target, reward and remaining time or expired state together. Expired challenges stay listed rather than disappearing.

**What is worth noting:** FIFA Panini Collection keeps expired challenges visible alongside the active one, so a user opening the screen sees what was missed as clearly as what's still open.

**Key findings:**

- Three numbered challenges are listed, each with its own success condition and reward.
- Two of the three are marked expired.
- The active challenge shows zero of ten progress with two days remaining.
- A participate button must be tapped before progress on a challenge counts.

**Screenshots needed:** the challenges screen showing an expired challenge beside the active one with its countdown.

### Group Membership

**Implementation summary:** A named team of up to ten friends, joined by ID and password, unlocks a team-only swap request type and shows each member's own completion.

**What was observed:** FIFA Panini Collection lets a registered user create or join a team of up to ten friends using a team ID and password. Creating one sets a name, password and slogan; the team page shows the ID, the slogan, the password, and controls to leave the team, invite friends and view member completion.

**How it is presented:** My team opens directly to team creation or joining for a user with no team yet. Once formed, the team page lists these controls together, with member completion shown per member rather than as a combined figure.

**What is worth noting:** FIFA Panini Collection's team carries no total, level or reward of its own; what it adds is a private swap scope and a view of what each individual friend has completed, not a shared state the team holds together.

**Key findings:**

- Teams hold up to ten friends, joined by ID and password.
- Creating a team sets a name, password and slogan.
- Member completion is shown per member, not as a combined team figure.
- No team total, level or reward is shown.

**Screenshots needed:** the team page showing its ID, slogan and member controls.

### Purchase Ladder

**Implementation summary:** Two rewards sit at fixed counts of deluxe packs purchased, both positions and their contents shown before any purchase is made.

**What was observed:** FIFA Panini Collection states two rewards tied to a running count of deluxe packs purchased: printed sticker copies at 20 packs, and a discount coupon on a keepsake album at 25. The offer screen shows the count starting at zero, with both rewards and their thresholds visible from the outset.

**How it is presented:** The purchase count and both reward positions sit together on the deluxe pack offer screen, visible before a single pack is bought.

**What is worth noting:** FIFA Panini Collection reveals the full reward sequence and its thresholds up front rather than surfacing the next reward only as the count approaches it.

**Key findings:**

- Two rewards sit at 20 and 25 deluxe packs purchased.
- The purchase count and both thresholds are shown from zero, before any purchase.
- The reward at 20 packs is printed sticker copies; at 25, a discount coupon on an outside keepsake album.
- FIFA Panini Collection doesn't state whether packs obtained another way count toward either threshold.

**Screenshots needed:** the deluxe pack offer screen showing the purchase count and both reward positions.

### Daily Login Rewards

**Implementation summary:** A free pack is available once a day for a tap, with no task attached, though its own reset was never actually seen resetting.

**What was observed:** FIFA Panini Collection offers a "Get a free pack" control that grants a pack on a single tap, identified as the daily free pack promised on the account choice screen, one per day for a guest and two for a registered account.

**How it is presented:** The control sits in the promo code area of the home screen, requiring only a tap to claim.

**What is worth noting:** FIFA Panini Collection's account choice screen states the daily grant up front, in the same breath as every other allowance difference between a guest and a registered account, so the free pack reads as part of the same tiered package rather than a separate mechanic.

**Key findings:**

- A free pack is claimed with a single tap, no task required.
- The account choice screen states one free pack a day for a guest and two for a registered account.
- FIFA Panini Collection doesn't show the daily grant actually resetting.
- The claimed pack still counts against the same daily opening allowance as any other pack.

**Screenshots needed:** the "Get a free pack" control in the promo code area.

---

## Onboarding and first run

FIFA Panini Collection asks for tracking and notification permissions before offering a choice between playing as a guest and registering through a FIFA account. This section covers that opening sequence through to the first unguided home screen.

### O1. Privacy notice first

On opening, FIFA Panini Collection shows a privacy notice stating that it values the user's privacy and, with trusted partners, collects certain personal data for a more personalized experience, with a link to read more and a Let's start button. The screen carries illustrations of Canada, Mexico and the United States, the tournament's three host countries, alongside three mascots. No decline option is described; tapping Let's start is the only route forward shown.

### O2. Tracking and privacy prompts

After Let's start, FIFA Panini Collection requests permission to track the user's activity across other companies' apps and websites, using the name FIFA Panini, followed by a privacy settings pop-up. FIFA Panini Collection doesn't state what was chosen on either prompt.

### O3. Sticker download screen

The app shows a downloading stickers state, then a screen showing the album with stickers outside it and two buttons, Resume your game and Start playing.

### O4. Guest versus account choice

After Start playing, FIFA Panini Collection presents a screen headed to unlock the full experience by connecting an account, with two options side by side. Connecting with FIFA for free lists starting with three packs, two free packs every day, opening four packs a day, creating three swap requests, participating in challenges, promo codes and forming a collector's team. Being a guest lists starting with one pack, one free pack a day, opening one pack a day and creating one swap request, with challenges, promo codes and the collector's team all left off that list. Every allowance on this screen is stated as a number before the user chooses.

### O5. Guest setup

Choosing to play as a guest opens a welcome screen asking for a country of residence. The notification permission request follows this screen.

### O6. First home screen

The guest arrives on a home screen with a stadium background and five main items: Scan content, My stickers, My album, Open packs and Promo code, with Challenges, Swap area, My team and More in the bottom navigation. A banner promotes the deluxe pack's exclusive poster stickers. No tutorial or guided step runs between the guest setup and this screen. More opens a menu listing the public profile, collection rewards, prizes, rules, sharing, account settings, FAQs, completing the account, terms, privacy, accessibility and credits.

---

## Core loop and automation

Opening a pack is the one action every source of stickers in FIFA Panini Collection leads to. This section covers pack opening, the daily limit on it, and how a sticker moves from a pack into the album or a swap request.

### O7. Opening a pack

The Open packs item states how many unopened packs the user holds. Tapping it opens a pack, swiped open, revealing stickers of album players with a control to share them. Different openings produce different players, and a pack granted by scanning wasn't opened at the moment of the scan, only showing up later in the Open packs count.

### O8. Daily opening limit

As a guest, after opening one pack, FIFA Panini Collection blocks the next with a message stating a guest can open only one pack a day, that 15 hours remain, and inviting the user to complete their account to open more. After registering, the same block appeared after four openings, stating the daily limit had been reached. The allowance limits opening only; held packs beyond it simply wait.

### O9. Gluing stickers in

My stickers shows the user's stickers in stacks, with instructions to move stickers between stacks, glue new ones into the album or swap them with other players. A red star marks each sticker not yet in the album. Dragging a sticker toward the album opens it at the matching player's page, with a plus button placing it on tap. Dragging a sticker to the swap stack instead makes it available for a swap request.

### O10. Swap request cap

In the swap area, a guest sees a banner stating that a guest can create only a single swap request, and that completing the account allows up to three running at a time. After registration, two further slots for creating swap requests appear. The cap counts requests running at a time, a limit on concurrent open requests rather than a daily one. Dragging an offered sticker back to My stickers disables its swap request.

### O11. Rules and FAQ

The Rules page presents the game as FIFA Panini Collection, powered by The Coca-Cola Company, a web and mobile application enhancing FIFA World Cup 26 based on the classic sticker album, available on Google Play and the App Store. It lists topics covering getting started, extra packs, opening packs, managing sticker stacks and albums, swapping, challenges, achievements, cosmic stickers, the dream team and support, with an FAQ reachable from inside the app. The contents of each topic aren't read out.

---

## Goals and progression

FIFA Panini Collection tracks the album's own completion alongside a separate badge page and a set of time-limited challenges. This section covers all three.

### O12. The album itself

My album opens the virtual album, browsable by swiping or by a country-searchable index. Each player has a slot for their country, filled only when glued. The public profile reports album completion as a percentage, the number of stickers collected and the number of glued cosmic stickers. Cosmic stickers are holographic versions of regular stickers that glue into the same slot. The album includes poster pages for the hosting cities, and its index includes a Dream Team entry, with the achievements page as its last page.

### O13. Collection rewards

The Collection rewards page lists four rewards. Two are tied to the album: completing 100% gives a personalized recap animation marked coming soon, and gluing every cosmic sticker gives a full discount coupon on a digital keepsake album. The other two are tied to deluxe pack purchases. No partial-completion reward is listed.

### O14. Achievement badges

The album's last page is headed to collect stickers and earn badges, listing seven categories each with three tiers: album progress, teams completed, challenges completed, team captains, swaps, previous World Cup winners, and Coca-Cola items scanned. The public profile carries its own achievements section, reading no big achievements yet for the guest. No reward is listed against any individual badge, and none was attained in this analysis.

### O15. The three challenges

After registration, the Challenges screen reads that completing challenges earns rewards, and shows three numbered challenges. The first, on the hosting countries, rewarded the official mascots and is marked expired. The second rewarded a digital power pack for collecting five stickers of the last World Cup's winning team, also expired. The third, on team captains, rewards a Panini logo sticker for ten captains, shows zero of ten progress and two days remaining. A sticker must be in the album and clicked to count toward this challenge, and a participate button must be tapped to join. Expired challenges stay listed. The account screens describe challenges as weekly; guests can't open the Challenges screen at all, meeting a registration prompt instead.

---

## Access and eligibility

A guest's limits, the features locked behind registration, and what registering through FIFA.com actually asks for all sit in this section.

### O16. Locked-feature prompts

As a guest, tapping My team, Challenges or the promo code entry opens a prompt to register. Tapping to get the deluxe pack opens a pop-up stating that completing the account unlocks all features. Held packs beyond the guest's daily allowance can't be opened, with the same message directing the user to complete their account. Each prompt appears at the moment the guest tries to use the locked feature, and can be closed to return to the home screen.

### O17. Complete-account benefits

Continuing from the deluxe pack pop-up opens a screen titled completing the account to unlock the full game experience, listing three additional free packs per FIFA account, promo codes, weekly challenges, forming a collector's team, and more benefits, with buttons for an existing account or registering. Complete account is also a permanent entry in the More menu.

### O18. Owned-sticker details

Tapping a player in the album shows details only for players whose sticker the user has: name, sticker, date of birth, height, weight, position and current club, with a share control. For one player, Irving Lozano, a button under the stats opens two historic stickers from previous competitions. FIFA Panini Collection doesn't establish whether every player has historic stickers available the same way.

### O19. Availability end date

The screen reached by tapping to get new packs states that FIFA Panini Collection will be available until September 30, 2026. The statement applies to the whole collection, not to one offer. FIFA Panini Collection doesn't state what happens to the album and held packs after that date.

### O20. Account settings

Account settings and preferences offers language choice, the account state, audio settings, a route for sticker image problems including redownloading assets, competition and privacy preferences reached through a consent center, and a Manage Preferences button, which for the guest reported no preferences to manage.

---

## Economy and resources

FIFA Panini Collection holds two things: packs waiting to be opened, and the stickers those packs produce, split between the album and a swap stack. This section covers where packs come from and how stickers move once they're out.

### O21. Held packs and sources

FIFA Panini Collection holds unopened packs as a single count on the Open packs item. Packs enter that count from scanning the physical album, packs or a Coca-Cola can, the promo code area's free pack, and bonus packs granted on sign-up, with further sources listed as promo codes, QR codes, challenge rewards and deluxe pack purchases. Opening is the only way a pack leaves the count. The count can exceed the daily opening allowance, so packs wait unopened across days.

### O22. Sticker stacks

Stickers a user holds sit in stacks: new stickers, and a swap stack described for making swap requests. Moving a sticker between stacks is done by dragging. The home screen states how many stickers are new and how many are set aside for swapping. Regular stickers can be duplicates, and a swap request can specifically allow duplicates.

### O23. Sign-up bonus packs

On returning to the home screen after registration, FIFA Panini Collection shows a message thanking the user for signing up and granting bonus packs. The exact number isn't stated; the account screens promise three packs per FIFA account.

### O24. Promo code redemption

The promo code area of the home screen carries a control for getting a free pack. Activating a promo code requires registration. After registering, the route to new packs adds options to redeem a code or scan a QR code. FIFA Panini Collection doesn't state where codes and QR codes actually come from.

---

## Social

FIFA Panini Collection's social layer runs through a matched swap system and a private team of friends. This section covers both, along with the public profile and dream team each exposes.

### O25. Public swap requests

The swap area lets a user offer stickers from their swap stack in exchange for stickers they want, matched by the app rather than browsed by the user. A public request has two halves, what's offered and what's wanted, built by picking players from country lists, with an option to allow duplicates on the wanted side. A separate request type is scoped to a collector's team instead of the public pool, blocked for anyone not in a team. No match was found in this analysis, so the app's own next step once one is found wasn't shown.

### O26. The collector's team

A registered user can create or join a team of up to ten friends, using a team ID and password to join, or a name, password and slogan to create one. The team page shows the ID, the slogan, the password, and controls to leave, invite friends and view what each member has completed. No team total, level or reward is shown; teams are closed to guests.

### O27. The public profile

The public profile states a user's status, album completion percentage, cosmic stickers glued, stickers collected and swaps executed, with a share control. It also carries the dream team, an achievements section and a completed-challenges section. For an unregistered guest, achievements read no achievements yet and completed challenges read no challenges completed yet.

### O28. The dream team

The dream team lets a user fill goalkeeper, defender, midfielder and forward positions from their own glued stickers, changeable at any time, and the saved team appears on the public profile. Only glued stickers are eligible, and FIFA Panini Collection doesn't clearly show whether a player can be moved between positions once placed.

---

## Reach beyond the app

Scanning physical products, sharing controls placed on nearly every screen, and registering through a FIFA.com account are FIFA Panini Collection's three routes beyond its own screens. This section covers all three, along with the rewards that get fulfilled outside the app entirely.

### O29. Scanning the physical album

Scan content opens a screen inviting the user to unlock extra content with the camera, offering three buttons: scanning the FIFA World Cup album and packs, scanning Coca-Cola products, and scanning stickers from Coca-Cola. Choosing one requests camera access. Pointing the camera at the physical album shows a search state, then a check mark and an unlock free pack button; unlocking shows a congratulations message with the reward and a share control. The unlocked pack is added to held packs rather than opened immediately.

### O30. Scanning Coca-Cola products

Scanning Coca-Cola products asks the user to place a special Coca-Cola bottle in front of the camera and tap unlock once recognized. A can was recognized and unlocked a free pack with a first-scan message; the same can was then not recognized again. A different can was recognized the same way, but unlocking then stated the day's bonus for that item had already been claimed. The third option, scanning a special sticker from Coca-Cola, wasn't tried. The Coca-Cola scan reward is limited per day, though FIFA Panini Collection doesn't settle whether the limit is one total or one per product type.

### O31. Coca-Cola branding

Coca-Cola appears on three of the home screen items, as an advertising display, a Coca-Cola stand, and surrounding the packs, and the rules describe the collection as powered by The Coca-Cola Company. No benefit is attached to viewing the branding itself.

### O32. FIFA.com registration

Register opens a FIFA.com login or sign-up screen stating that FIFA shares certain account information with Panini to operate the game and fulfil rewards, and that continuing links the FIFA.com account to FIFA Panini Collection. Continuing moves to the FIFA website. Sign-up runs three steps: date of birth, name, email, country, gender and communication language; a nickname seen by other users, a favourite team and consent to FIFA communication; then a password, followed by a registration code sent by email. No Google, Apple or other third-party sign-up route is offered on this screen. The verification email didn't arrive in this analysis; the link was reported expired, and creating the account again returned that the user already exists. The sign-in screen did offer a Google route, which was used to log in. Registration happened after the guest had already explored the home screen, scanned, opened a pack and created a swap request, not during first launch.

### O33. Post-login consent

After login, FIFA Panini Collection shows a preferences screen with two statements. The first, required, confirms having read and accepted the terms of the prize promotion Complete the FIFA Panini Collection. The second, optional, consents to Panini sharing gaming data with FIFA for linked features, analytics and personalized experiences, withdrawable at any time.

### O34. Share routes

Share controls appear on stickers revealed from a pack, the scan reward screen, a sticker's detail view, each challenge, the public profile, the dream team, the game itself, and the collector's team through Invite friends, sending a link through social media or messaging apps. No reward for sharing or inviting is stated anywhere in this analysis, and FIFA Panini Collection doesn't describe what a recipient of a shared sticker, challenge or profile actually sees.

### O35. Rewards redeemed outside

Several rewards are fulfilled outside the app: a code for ten printed copies of a MyPanini sticker ordered on an external website with shipping not included, and discount codes on the digital keepsake album secured in the Panini America Blockchain Hub. The 100%-completion recap animation is the only collection reward described as delivered inside the app itself.

---

## Monetization

A single $2 deluxe pack and two rewards tied to a running purchase count are FIFA Panini Collection's only paid routes.

### O36. The deluxe pack offer

The deluxe pack is promoted by a home screen banner and, for a registered user, a Buy deluxe pack banner under Open packs. The offer states it contains nine missing cosmic stickers, one missing poster sticker from the hosting cities' pages, and ten regular stickers that can include duplicates, priced at $2. The specific stickers aren't named before purchase; the copy guarantees categories and that the cosmic and poster stickers are ones the user is missing. For a guest, the banner leads to the registration prompt rather than the offer itself. No purchase was made, so the payment flow and opened contents weren't seen.

### O37. Purchase-count rewards

The deluxe pack screen states rewards for purchased deluxe packs, reading that zero have been purchased so far, and lists two: a coupon for ten printed copies of the user's MyPanini sticker, and a 50% discount coupon on the digital keepsake album. The Collection rewards page ties these to 20 and 25 deluxe packs respectively, while the Prizes page words the same conditions as obtaining rather than purchasing. The 25-pack reward is a 50% discount on the same keepsake album that gluing every cosmic sticker discounts by 100% instead. A running count of deluxe purchases is shown on the offer screen.

---

## Return triggers

A notification request arriving before the home screen, and a free pack claimed once a day, are FIFA Panini Collection's two return mechanisms.

### O38. Notification permission

After the guest enters a country of residence, FIFA Panini Collection requests permission to send notifications, arriving before the user reaches the home screen. The swap area states that a found match is announced by a notification on the main screen. FIFA Panini Collection doesn't state the user's answer or any notification received afterward.

### O39. The daily free pack

The promo code area of the home screen shows a control to get a free pack, and tapping it granted one, identified as the daily free pack promised on the account choice screen. The guest couldn't open the claimed pack because the day's opening allowance was already used. The claim requires only a tap, with no task attached. FIFA Panini Collection doesn't show the daily reset itself happening, or state whether an unclaimed day's pack carries over.
