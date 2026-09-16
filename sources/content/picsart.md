# PicsArt

**Teaser:** PicsArt asks for payment at two different moments inside the same editor: before an AI result exists, and after a tool has already been tried.

PicsArt is a photo and video editing app organized around one editor loop: pick media, apply a tool, save or export. A row of AI tools inside the editor draws on a credit balance that renews weekly for free or expands through a Pro or Plus subscription, and PicsArt places a purchase request at two different points inside that same editor rather than one. Alongside the editor, a community layer runs challenges with a countdown, a separate voting stage, and a persisted winners' history, plus creator profiles, joinable Spaces and a Discover feed of other people's work. Challenge prizes pay out in the same credits the editor spends, tying the community layer back into the paid economy.

---

## System view

PicsArt is a medium system. Its spine is the AI-and-credit editing loop: opening the editor and asking for an AI result is what the free credit balance, the Pro and Plus subscriptions, and the two in-editor paywalls all hang from. A separate community layer of challenges, voting, creator profiles and Spaces runs alongside that spine and periodically pays back into the same credit balance through challenge prizes.

---

## Mechanics

### Challenge

**Implementation summary:** PicsArt runs bounded photo and video challenges with a minute-level countdown, a three-entry cap, a separate voting stage, and a persisted top-ten winners history.

**What was observed:** PicsArt opens a dedicated challenges area from a cup icon in the navigation bar, split into active challenges, a voting stage and a history of past challenges. Each active challenge states its name, a countdown running down to the minute, and a prize, either a credit amount or a place in a winners' gallery. Entry is capped at three original submissions per user, and every submission is visible to other participants, 92 on one challenge at the time. A separate voting stage lets a user browse submissions and vote for more than one, with support shown after voting but no running vote count displayed anywhere. Concluded challenges move into a history that ranks winners from first to tenth place, and opening a winning entry shows its comments, its post date and how many hearts it received. Spaces, PicsArt's user-run interest groups, can also run their own challenges alongside PicsArt's own.

**How it is presented:** The challenges tab sits behind the cup-shaped navigation icon, with active challenges, voting and history as three separate sections. A challenge's own screen carries its countdown, rules, prize and entry control together, and a share control sends out a link to the challenge itself.

**What is worth noting:** Prizes take two distinct forms inside the same mechanic, credits for some challenges and gallery placement for others, so the reward a user is chasing changes challenge to challenge even though the entry, voting and history structure stays the same. How winners are actually chosen is never stated on screen: the sequence of an entry stage, a separate voting stage, and a placed history points toward votes deciding placement, but editorial selection informed by votes would produce the exact same three screens.

**Key findings:**

- Active challenges state a name, a countdown to the minute, and a prize of either credits or gallery placement.
- Entries are capped at three original submissions per challenge.
- A separate voting stage lets a user support more than one submission, with no vote count shown.
- Concluded challenges persist in a history ranking winners from first to tenth place.
- Space owners can run their own challenges alongside PicsArt's own.

**Screenshots needed:** the active challenges list with countdown and prize, and the challenge history screen showing ranked winners.

### Leaderboard

**Implementation summary:** PicsArt's only ranking is the first-to-tenth winners list attached to each concluded challenge, with no stated measure behind the order.

**What was observed:** PicsArt's challenge history lists winners of past challenges in order from first to tenth place. Opening a winning entry shows its comments, its post date, and the number of hearts it received, but nothing on screen states what decided the order. Neither browsing submissions nor voting on a challenge in progress shows a running vote count to anyone.

**How it is presented:** The ranking appears only inside challenge history, reached from the same cup-icon area as active challenges and voting, with each past challenge opening its own first-to-tenth list.

**What is worth noting:** The ordering itself is stated plainly, first through tenth, but PicsArt never states what produces it. The three-stage structure, entry, then voting with rewards shown, then a placed history, points toward votes deciding the order, but the same three screens would look identical if PicsArt selected winners editorially and framed the result the same way.

**Key findings:**

- Challenge history ranks winners in order from first to tenth place.
- A winning entry shows its comments, post date and heart count.
- No running vote count is shown anywhere during voting.
- What decides placement is never stated on screen.

**Screenshots needed:** the challenge history list ranking winners first to tenth, and an opened winning entry showing its comments and hearts.

### Social Feed

**Implementation summary:** Every item in PicsArt's Discover feed carries a Try control that opens the exact tool or effect used to make it, applied to the viewer's own material.

**What was observed:** PicsArt's Discover section opens on a For You feed, described as never-ending, made up of images and videos from other creators. Every item shows a before and after and carries a Try control letting the user apply the same tool, effect or generation to their own material. The notification list surfaces activity from accounts the user follows alongside PicsArt's own posts. Explore adds an AI Vibe section where pressing and holding an item reveals the prompt used to create it, which the user can edit, like, or add to a collection.

**How it is presented:** Discover and Explore are separate tabs in the main navigation. Feed items carry the Try control directly on the item rather than behind a menu, and AI Vibe's prompt disclosure appears only on a press and hold rather than at a glance.

**What is worth noting:** The feed is built to be acted on rather than only viewed. A Try control on every item turns each post into an entry point for the specific tool that produced it, and AI Vibe goes further by showing the exact prompt behind someone else's generation rather than only the result. Neither the ordering rule for the For You feed nor what Try actually opens is named.

**Key findings:**

- The For You feed is described as never-ending and made up of other creators' images and videos.
- Every feed item carries a Try control and a before-and-after view.
- Followed accounts' activity appears in the notification list.
- AI Vibe discloses the prompt behind another creator's generation and lets the viewer edit it.

**Screenshots needed:** a Discover feed item showing its Try control and before-and-after, and an AI Vibe item with its disclosed prompt.

### Group Membership

**Implementation summary:** PicsArt's Spaces are joinable, owner-run groups with their own rules and bookmarked tools, but nothing changes for a user once they actually join one.

**What was observed:** PicsArt's Explore area lists Spaces, each gathering a particular kind of creation under an owner who created it. Every Space carries its own stated rules and a set of bookmarked tools, and a Space owner can start a challenge inside their Space in addition to PicsArt's own challenges. A user can join a Space, share it, and leave it, and a Space's content and rules can be seen before joining.

**How it is presented:** Spaces sit inside Explore alongside categories, brand content and templates, each with its own join and leave controls and a challenge shown alongside PicsArt's own challenges.

**What is worth noting:** PicsArt shows everything a Space offers, its content, its rules, its challenges, before asking anyone to join it. Membership is tracked through join and leave rather than left open to anyone, and Spaces are run by identified owners rather than the product itself, but what that membership actually changes, whether feed content, posting rights or notifications, is never stated.

**Key findings:**

- Spaces are owned and created by users, each with its own stated rules.
- A Space owner can run a challenge inside their own Space.
- Joining and leaving a Space are both single controls.
- A Space's content and rules can be seen before joining.

**Screenshots needed:** the Explore list of Spaces, and a single Space showing its rules, bookmarked tools and join control.

### Soft Currency

**Implementation summary:** PicsArt prices each AI tool's specific output in credits drawn from a weekly-renewing free balance, letting the user choose which result to spend on rather than draining a shared capacity.

**What was observed:** PicsArt shows a credit balance on the user's profile, 5 credits on a free account, and a credits screen explains that the plan includes weekly credits that renew every six days. The same screen prices each kind of AI result separately: one credit for an AI sticker, two for tools like AI logo generator or AI writer, three for any filter, four for tools like AI background or AI image editor, and fifty for an AI avatar. Add-on credits are named separately as not expiring, distinct from the renewing weekly allowance. Challenges also pay their prizes in credits, and the challenge and subscription copy both frame credits as what makes generative AI tools accessible.

**How it is presented:** The balance sits on the profile screen and opens into a dedicated credits screen from Learn more, which lists every tool's price in one table. The same figure reappears as the prize amount on challenge cards.

**What is worth noting:** PicsArt's credits behave as a currency spent across differently priced results rather than as a depleting capacity for repeated use of one tool. Each AI tool carries its own fixed price, from one credit to fifty, so the balance is something the user allocates among several possible outputs rather than a meter that runs out the more a single feature is used. Nothing in the credits screen or the AI panel ties a credit cost to attempts, retries or time; it is tied to which specific tool and result the user chooses. That is what separates this from an Energy system: PicsArt sells priced results to pick among, not a capacity that depletes with use.

**Key findings:**

- A free profile holds 5 credits that renew weekly, on a six-day cycle.
- Individual AI results are priced separately, from 1 credit for an AI sticker up to 50 for an AI avatar.
- Add-on credits are described as not expiring, distinct from the renewing weekly allowance.
- Challenges pay prizes in the same credits, as much as 50 for a single win.

**Screenshots needed:** the profile screen showing the credit balance, and the credits screen listing per-tool prices.

### Hard Currency

**Implementation summary:** The only way to raise PicsArt's credit balance beyond its weekly free allowance is buying a Pro or Plus subscription, sold explicitly in terms of credits rather than tools.

**What was observed:** The Get more control on the credits screen opens only a choice between Pro and Plus, with no way to buy credits on their own. The plan comparison lists AI generation credits up to 200 on Plus and up to 500 on Pro, alongside separate cloud storage and device allowances. The paywall reached from the Generate button is headed around getting more credits and states that access can be cancelled any time before the next renewal.

**How it is presented:** The upgrade path from Get more, from the Generate paywall, and from Try Pro all lead to the same Pro and Plus comparison, each naming credits as part of what a subscription buys.

**What is worth noting:** PicsArt sells the same subscription two different ways depending on where the offer appears. The Try Pro entry point on the home screen frames the purchase around tools and content, while the paywall reached by pressing Generate on an AI model frames the identical purchase around credits. Both open the same Pro and Plus choice, so the difference is in what each entry point calls the thing being bought, not in what is actually offered.

**Key findings:**

- No standalone credit purchase exists; only Pro and Plus subscriptions add to the balance.
- Plus lists up to 200 AI generation credits and Pro up to 500.
- The Generate paywall names credits as the benefit; the Try Pro paywall names tools and content.
- Cancellation is stated as available any time before the next renewal.

**Screenshots needed:** the Get more pop-up offering Pro or Plus, and the plan comparison table showing credit allowances.

---

## Onboarding and first run

PicsArt asks for tracking permission before sign-in, then places its steepest paywall directly after sign-in, before any onboarding question or tool is seen.

### O1. Editor's Choice claim

The loading screen states that PicsArt is an Editor's Choice app, appearing before any sign-in or permission step.

### O2. Tracking permission request

The first request PicsArt makes as it loads asks to allow tracking across other companies' apps and websites, appearing before the sign-in screen. The answer given to this request is not stated.

### O3. Sign-in screen

The sign-in screen shows a scrolling image carousel and a claim of over 150 million creators worldwide, offering Continue with Apple, Google, Facebook, Snapchat, or email or username. No route into the app without choosing one of these options appears on this screen. Four of the five options sign in through an account held on another platform.

### O4. First paywall after sign-in

Straight after sign-in, PicsArt shows a paywall promising better designs in less time and free AI tools, offering a yearly plan at $1.61 a week ($83.99 total) and a weekly plan at $11.99. A free trial toggle, off by default, is available only on the yearly plan; turning it on changes the button to start a 3-day free trial. Only the Pro plan appears on this paywall, not the cheaper Plus plan. The close control is a red X set inside an image in the top left corner. Closing the paywall leads directly into the onboarding questions. A later paywall reached from inside the app has an easier-to-see close control.

### O5. Comfort-level question

Onboarding opens by asking the user's comfort level with editing apps, offering three answers, and states that the flow can be skipped at any time. Each answer pairs with an illustration that changes when tapped: a small plant that turns into fluffy earrings for the newest answer, and a lit light bulb that turns into a porcelain cup while the button changes color for the middle answer. Whether the chosen answer changes anything later in the product is not stated.

### O6. Purpose and creation questions

The next screen asks what brings the user to PicsArt, noting that the answer helps prioritize relevant tools, with options including business, side hustle, full-time job, fun, artistic expression, hobby, and school or university, allowing more than one choice. A following screen asks what the user plans to create, with options including memes, video editing, scrapbooking, collages, photo touch-ups, selfie editing, school projects, fan art, drawings, and social media content, also allowing more than one choice. Whether any later screen reflects these answers is not stated.

### O7. Attribution question

The last onboarding screen asks where the user heard about PicsArt, offering options including YouTube, friends and family, AI assistants, Bing, TV, Facebook, Instagram, TikTok, Google, events, billboards, and other, with no follow-up question before entering the app.

### O8. First home screen

The first screen after onboarding carries a bottom navigation bar with a cup icon, a plus icon, a folder icon, and a profile icon, plus a search button and a Try Pro button in the top right. The cup icon opens the challenges area. A Discover section, also part of the navigation bar, is not named on this first screen but appears later, so the navigation likely carries more entries than what's visible here.

---

## Core loop and automation

PicsArt's core loop runs through the Create surface into the image editor, with an AI panel, a save and export menu, and a growing files area layered on top.

### O9. Create surface layout

The Create surface splits into photos, videos, print, and draw and color. The photos view lists remove background, add text, remove, effects, freestyle, blemish and collage, then AI tools, trending backgrounds, trending videos, shared albums and retouching tools. The videos view lists AI tools, AI video generator, AI video editor, AI video avatar, create slideshow, camera, blooper and remove, followed by templates, video cutouts, viral dances, trending videos and Cartoonify. The print view lists invitations, graduation, wedding, custom T-shirt, tote bags, templates by size and type, popular collage picks, a year-in-review feature, trending items, documents, Instagram story and business card designs. The draw and color view offers creating a drawing plus trending backgrounds and patterns. A large button reads "Edit an image or video." AI tools appear under both the photos and videos views.

### O10. Starting an edit

Tapping the main edit button opens a photo library access request, after which a photo is chosen. PicsArt then offers free backgrounds, including a telescope skyscape set and a galaxy wallpaper. Choosing the galaxy wallpaper opened it on its own rather than applying it to the chosen photo.

### O11. Editor save and export menu

The editor carries an AI button, save, export, and a three-line menu offering copy as, move to, share with, and copy link. Saving confirms the image was saved as a JPEG and offers further options to share, print, share on PicsArt, share in a message, share in spaces, or see more. Export opens the same sharing options. A row of editing tools runs along the bottom of the editor. Sharing on PicsArt or in spaces keeps the work inside the product, while print, message and the other routes send it outside.

### O12. AI panel and model selector

Tapping AI in the editor opens a panel showing popular requests, tappable options, an edit route, and a prompt field, with popular requests shown before the user writes anything. A settings control lists the available models: Nano Banana, Seedream, Nano Banana 2, Flux 2 Pro, Nano Banana Pro, Flux Max, Flux 2 Flex and GPT Image 1.5.

### O13. Recent projects row

Once a creation has begun, recent projects appear at the very top of the Create surface, a row not present in the surface's initial layout.

### O14. Files area

The folder icon in the navigation opens the user's files, albums, folders, projects and photos, with controls to create a new folder or upload.

### O15. Settings and defaults

Settings list subscriptions, contacts, language, notifications, content, image export resolution with high, medium and low options, web cache, iCloud sync, enabling editing history, upload, contact support, help center, and a do-not-sell-or-share-my-personal-information control. iCloud sync is off by default. The profile editing screen allows changing name and username.

---

## Goals and progression

PicsArt's only progression measure is a profile completion percentage with no stated path to finishing it.

### O16. Profile completion percentage

The profile editing screen states the profile is 50% complete without naming what needs to be done to complete it. Whether reaching 100% produces any message, marker or change is not stated.

---

## Access and eligibility

PicsArt gates its editor at two different points, a photo library permission at the start of an edit and a purchase request placed at two separate moments depending on the tool.

### O17. Photo library access

Starting an edit asks for photo library access, offering to limit access or choose specific photos rather than requiring full access. When entering a challenge without full gallery access, PicsArt shows a prompt to give access to more photos, which opens device settings to grant it.

### O18. Remove tool trial

The Remove tool in the editor's tool row carries a Pro marker. Tapping it shows how the tool works and lets the user try it on something they want to erase, with Cancel and Apply controls. Tapping Apply opens a pop-up to purchase Pro, and the changes can be discarded instead. The purchase request appears at Apply rather than when the tool is opened. Whether an unpaid result can be kept in any other form, such as with a watermark, is not stated.

### O19. AI model paywall at Generate

Every model listed in the AI panel is marked premium. Pressing Generate opens a paywall rather than producing a result, with no way to preview what the AI result would look like without paying. The credits screen states that some advanced AI models unlock only after a trial with a paid plan. A profile with five credits available at the time makes it unclear whether Generate was blocked because the chosen model is premium or because credits were insufficient. Within the editor, PicsArt places its purchase request at two different points: on the AI models it appears at Generate, before any result exists, and on the Remove tool it appears at Apply, after the tool has already been tried.

---

## Economy and resources

PicsArt's economy is a single credit balance, priced separately against each AI tool and topped up only through a subscription.

### O20. Credit balance and renewal

PicsArt's profile shows 5 credits available on a free account, and a dedicated credits screen restates the same balance out of 5 and states that the plan's weekly credits renew in 6 days. Add-on credits are described as not expiring, unlike the renewing weekly allowance. The same screen frames credits as what makes generative AI tools accessible to everyone. Whether unused weekly credits carry over at renewal, and how add-on credits are actually obtained, are left unclear.

### O21. Per-tool credit pricing

The credits screen lists a separate price for each kind of result: one credit for an AI sticker, two credits for tools including AI logo generator, AI writer, AI image generator, AI expand, AI replace, mockup generator, assets genie, AI hairstyle and AI Polaroid effects, three credits for any filter, four credits for tools including AI background, GPT image generator, AI video avatar, AI try-on and AI image editor, fifty credits for an AI avatar, and twenty or more credits for a Motion Studio AI video. Costs span from 1 to 50 credits across these tools, so the same balance is spent unevenly depending on which result is chosen. Whether completing a generation reduces the displayed balance is not stated.

### O22. Getting more credits

A Get more control on the credits screen opens a choice between Pro and Plus rather than any way to buy credits on their own, and no separate credit purchase appeared anywhere else in the app either. Each plan option carries its own Learn more link into the full plan comparison.

### O23. Free storage allowance

The profile shows cloud storage used against a 100 MB allowance on the free account. Larger storage allowances appear only on the paid plans.

---

## Social

PicsArt's social layer runs on challenges with voting and a winners' history, creator profiles and following, joinable Spaces, and a feed built from other people's work.

### O24. Challenges tab

The cup icon in PicsArt's navigation bar opens a challenges area split into active challenges, voting, and history. Active challenge cards state a name, time remaining and a prize, for example a challenge with four days left offering 50 credits, and another whose reward is a place in the winners' gallery instead. Three challenges were open at once, and three more were open for voting at the same time. Prizes take two forms across the challenges seen: credits, and placement in a winners' gallery.

### O25. Challenge detail screen

A photography challenge showed a countdown running down to the minute, an about section, and rules capping entries at three original photos per user, alongside instructions to keep submissions natural and to share only original work. Every other participant's submissions are visible, 92 at the time on one challenge. A share control sends out a link to the challenge, and a participate control opens photo selection to enter. Other active challenges offering credits follow the same layout of submissions, rules and an about section.

### O26. Voting on submissions

The voting section lists challenges open for votes with their time remaining and rewards. Scrolling through submissions and tapping vote marks that entry as voted, and more than one submission can be voted for in the same challenge. No vote count is shown while voting or while browsing submissions. A submission can be shared directly or used to open its creator's profile.

### O27. Challenge history and rankings

Challenge history lists winners of past challenges ranked from first to tenth place. Opening a winning entry shows its comments, its post date, and the number of hearts it received. What specifically decides the ranking is not stated anywhere on screen.

### O28. Creator profiles and following

A creator's profile shows their name, posts, stickers and collections, along with follower, following and post counts. Following and unfollowing are each a single tap, and a profile can be shared directly. A separate discover-creators list surfaces further creators with a follow button next to each one.

### O29. Public and private collections

Users can build collections and set each one public or private. An empty collection states that it holds no assets yet, and other creators' collections are visible from their profiles. Items seen in the AI Vibe view can be added to a collection from there.

### O30. Discover feed and Try control

Discover opens on a For You feed, described as never-ending, of images and videos made by other people. Every item shows a before and after and carries a Try control that lets the user apply the same effect, whether a video generator, a remix or another tool, to their own material. What Try actually opens, and whether it draws on credits or requires a subscription, is left unclear, and so is the rule that orders the feed.

### O31. Explore and AI Vibe

Explore invites the user into GenAI Studio, which turns an image into a video with its own effects, alongside popular categories, Spaces, marketing content like posters and logos, branded gaming content from Toca Boca, Fortnite, Free Fire and Roblox, printable and personal content, creators and templates. An AI Vibe section shows AI-generated items; pressing and holding one reveals the prompt behind it, which can be edited, liked, or added to a collection. Whether editing that prompt spends a credit is left unclear.

### O32. Spaces

Explore lists a large number of Spaces, each gathering a particular kind of creation under an owner who created it. A Space owner can start a challenge inside their own Space in addition to PicsArt's own challenges, and a Space challenge carries comments, likes and reactions. Every Space states its own rules and carries a set of bookmarked tools. A user can join a Space, share it, and leave it, and a Space's content and rules can be seen before joining. What joining actually changes, and whether joining requires approval, are left unclear.

---

## Reach beyond the app

PicsArt's routes outside the app cover a promoted sister app, invitations, per-project sharing with named people, and save and export destinations.

### O33. Sister app promotion

The draw and color view features a separate drawing app, PicsArt Color, with an install prompt describing it as a full drawing suite for beginners and professionals. The promotion sits inside the Create surface beside PicsArt's own drawing tools.

### O34. Invite friends and contacts

PicsArt offers to invite people by finding contacts or inviting friends directly by email, SMS or WhatsApp. Find contacts opens a system prompt asking to allow access to contacts. No reward for inviting is stated on the invite screen. Challenges, images and profiles can also be sent out as links through their own share controls.

### O35. Project sharing controls

The editor's share-with option lets the user invite new people by email, shows who already has access and their role, and sets general access to view or restricted, alongside a copy-link option. Access is set per project, with a general access level plus named people. Roles beyond view are not listed.

### O36. Save and export destinations

After saving, PicsArt offers to share the image, print it, send it in a message, or see more options, alongside sharing on PicsArt or in spaces. Export opens the same sharing options. Signing in through Apple, Google, Facebook or Snapchat links the PicsArt account to an identity held elsewhere.

---

## Monetization

PicsArt's Pro and Plus subscriptions are sold from at least three separate entry points, each framing the same purchase differently.

### O37. Try Pro paywall

The Try Pro button on the home screen opens the paywall again, this time with an easier-to-see close control. Its Pro tab promises increased access to AI-powered tools and premium content at the same prices as the first paywall. A Plus tab offers a starter set of premium tools not available on the free plan, at $1.25 a week yearly ($64.99 total) or $9.99 weekly, with the free trial available only on the yearly Plus plan. The Plus plan does not appear on the paywall shown right after sign-in. The Pro tab is shown first on opening. The same Pro and Plus pop-up also opens from Get more on the credits screen and from Apply on the Remove tool.

### O38. Plan comparison table

Opening Learn more on a plan shows a comparison of Free, Plus and Pro, with Pro highlighted. It lists AI generation credits up to 200 on Plus and 500 on Pro, cloud storage of 5 GB on Plus and 100 GB on Pro, and multi-device premium access on 2 devices for Free, 5 for Plus and 10 for Pro. Pro includes every tool. The period the 200 and 500 credit figures apply to is not stated. The free profile's own allowance is 100 MB of storage and 5 weekly credits.

### O39. Credit-framed Generate paywall

The paywall opened by pressing Generate is headed around getting more credits to use with generative AI tools, and states at the bottom that cancellation is available any time before the next renewal. Neither the paid plans nor the free trial option state that PicsArt will send a reminder before renewal, and the paywall does not ask whether the user wants to be notified. Its headline names credits, while the Try Pro paywall names access to tools and content instead.

---

## Return triggers

PicsArt's return machinery is limited to one in-app push prompt during export and the system notification permission reached from the notification bell.

### O40. Push prompt during export

While saving and exporting, PicsArt shows a pop-up promising to be first to try new features if push notifications are enabled, with a Stay updated button and an X. Tapping the X produces no stated effect.

### O41. Notification bell

A notification bell sits in the top right corner of Discover. Tapping it opens the system prompt asking whether PicsArt can send notifications. The notification list showed PicsArt's own posted replays alongside what followed accounts are doing. The response given to the system prompt is not stated.
