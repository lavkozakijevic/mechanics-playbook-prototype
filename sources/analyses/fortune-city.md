# Fortune City

**ID:** fortune-city
**Category:** Finance / Personal Budgeting
**Type:** App
**Platform analyzed:** iOS
**Analysis date:** 13 May 2026 (Session 1), 17 May 2026 (Session 2)
**Last updated:** 15 Jun 2026
**Session state:** Session 1 — first install, onboarding through full feature exploration. Session 2 — returning user after several days, second play session.

---

## Overview

Fortune City is a personal expense-tracking app published by Sparkful, gamified as a city-building simulation. Each expense the user records becomes a building in a floating island city. Citizens are recruited, assigned jobs in buildings, and generate coins over time. The gamification layer — city building, citizens, achievements, challenges, coins — is designed to motivate daily expense logging as a habit. The app operates on a freemium model with a Sparkful subscription ($69.99/year) unlocking advanced finance features (budgeting, trend analysis, expense review) while the city-building core remains free. It is one of four apps in the Sparkful ecosystem (alongside Plant Nanny, Walker, Book Morning, To Do Adventure).

---

## First impression

Onboarding begins with a welcome screen: "In this town every expense can become a building." The first interaction is recording an expense — the user enters an amount and selects a category (food, drinks, transportation, shopping, entertainment, housing, electronics, medical, miscellaneous, or income). The first transaction immediately becomes a building in the city ("your first building — your transaction has become a drinks building"). After recording one expense, the app shows a preview of what a fuller city looks like, then prompts for notification opt-in ("every night at 10 you'll be reminded to record your expenses — choose the best time for you") and a login/backup step (skippable). The onboarding ends with a city management guide popup — not a static tutorial but a bulletin board mission the player must find in the city.

There is no quiz, no paywall at first entry, and no long onboarding sequence. The core loop is demonstrated in under 60 seconds.

---

## Core activity

Users record real-world expenses (amounts and categories) in the app. Each expense generates a building of the corresponding type in the city. The city is managed between expense entries: citizens are recruited from visiting characters, assigned jobs in buildings, and generate coins passively. Coins fund city hall upgrades (finance, economy, livelihood levels) that unlock new storage capacity, vehicles, and VIP citizens. Buildings of the same type and level can be merged to produce a higher-level building. Daily bulletin board missions and citizen classified quests provide short-term tasks that reward diamonds (premium currency) and coins.

---

## Mechanics observed

### Achievements (`achievements`) · Core

**What was observed:**
A dedicated achievements system with 100 named achievements organized into themed groups, accessible via the hamburger menu → Your City → Achievements tab. Two achievements were completed by the end of Session 1.

**Achievement groups and examples observed:**

- **Great Habits (6 badges):** Consecutive days tracking — 1 day (Longest Consecutive Days), 3 days (Good Habit, 3 diamonds), 7 days (Getting There), 14 days (Perseverance), 30 days (Monthly Champion), 90 days (Quarterly Champion)
- **Mayor Certificates (5 badges):** The Mayor is Back (complete newbie tutorial), Making a Difference (build first building, 3 diamonds), Urban Renewal (merge first building, 3 diamonds), Diplomatic Envoy (have first friend), Good Neighbor (first time visiting a friend's city), Manager Certificate (complete the City Management Guide)
- **Chief Financial Officer (5 badges):** Finance Tracker; unlock all of Kashi's, Fisher's, Audi's, Yilty's, and Sir Fox's collections
- **City Prosperity (13 badges):** Prosperity reaches 10, 20, 30, 50, 100, 250, 500, and so on
- **Population Growth (7 badges):** Population reaches 3 (One Big Family), 5, 10, 20, 30, up to 1,000
- **Watch Ads to Help the Salesman (7 badges):** Help the salesman 5, 10, 50, 100, 500, 1,000 times — the final badge is "Charitable Superstar"
- **Foodie Paradise (4 badges):** Record 10 food expenses (first), up to 100 food expenses (Food Tycoon)
- **Beverage Bay (4 badges):** Record 10 to 100 drink expenses
- **Shopping Mecca (4 badges):** Record 10 to 100 shopping expenses, with named badges (Mad Shopper, Gold Digger)
- **Living Large, Medical Center, Traffic Hub, Holiday Resort, Grocery Shangri La, Electric Land:** All follow the same 10→100 expense-count structure with 3–4 named badges each
- **Fortune City (4 badges):** Record 10, 20, 50, 100 income receipts — "Financial Master" at 100
- **Coin Collector (8 badges):** Collect 1,000, up to 1,000,000 coins
- **City Photographer (3 badges):** Share photos with friends 5, 20, 50 times
- **Best Apps (3 badges):** Install Plant Nanny, To Do Adventure, and other Sparkful companion apps

Achievements pop up as overlay cards with the achievement name, badge, reward (diamonds), and a share button. Multiple achievements can trigger in quick succession after a single expense entry.

**How it is presented:**
Achievement popups appear automatically after triggering actions. The full achievement list is in Your City → Achievements. Achievements are browsable by group, with earned badges visually distinct from locked ones. The diamond reward appears on each achievement card.

**What is notable:**
The achievements system explicitly gamifies ad watching ("Help the salesman" achievements scale from 5 to 1,000 ad watches), companion app downloads (Best Apps), and social sharing (City Photographer). Achievements are the primary mechanism for earning free diamonds throughout the game. The 100-achievement count makes this the most expansive achievement system in the library.

**Screenshot suggestions:**

`[Achievements tab showing Great Habits group (1-day, 3-day, 7-day, 30-day, 90-day consecutive tracking badges) with earned badges lit and unearned grayed, diamond reward amounts visible]`
*Documents the consecutive-day achievement structure and the diamond rewards at each milestone.*

`[Achievement popup showing "Making a Difference — Build your first building — reward 3 diamonds" card with share button]`
*Documents the automatic popup trigger and reward at a Mayor Certificate milestone.*

---

### Ads (`ads`) · Core

**What was observed:**
Rewarded video ads and interstitial ads were both observed, with ad placements embedded across many surfaces:

**Rewarded ads:**
- Daily reward doubling: after claiming the daily login reward (16 coins on Day 1), a "watch an ad to double your reward" button appeared. Watching the ad doubled the coins to 32.
- Daily free diamonds (hamburger menu): a dedicated ad-watch button in the hamburger menu. Daily limit of 2 watches observed ("there are no free diamonds for today" message after watching 2). Each watch earns 1 diamond.
- Salesman character: a recurring street character who appears in the city with an ad bubble above his head. Watching an ad "helps" him, earns diamonds, and triggers a voiced thank-you with a personalized storyline (grandma found diamonds in the backyard, he's giving them to his best friend). The "Help the Salesman" achievement track (5 to 1,000 watches) directly incentivizes repeated engagement with this character.
- Merge buildings: free merge option available by watching an ad (3 free merges per day by ad watch, alternative is 50 coins per merge).
- Tracking permission: the Apple tracking permission dialog appeared specifically when the user tapped "watch an ad to double your reward" — not during onboarding or at app launch, but at the moment of ad interaction.

**Interstitial ads:**
- Appeared during shop browsing without user action: "an interstitial commercial has appeared — in the middle of, as I was analyzing the store and going through it."
- Appeared after completing a citizen classified mission: "we're getting served an interstitial ad after completing the second mission."
- "Please wait a moment" loading screens preceded interstitials, revealing that the game was loading the ad before serving it.
- No reward described for interstitials.

**Ad removal:**
The shop footer states: "Go ad free forever with any in app purchase — rewarded ads excluded." Any purchase — not just the subscription — removes interstitial ads. Rewarded ads remain available.

**How it is presented:**
The daily free diamond ad button is in the hamburger menu at the bottom of the screen. The salesman character is visible on the city map. The daily reward doubling ad appears as a button on the daily reward popup. The merge ad option appears on the merge confirmation screen. The hamburger menu newspaper section also contains an ad banner with "tap to get free diamonds by watching an ad."

**What is notable:**
The salesman character is the most narratively integrated ad placement in the library. Watching an ad produces a voiced character interaction: the salesman thanks the user, references a personal story (grandma, boss, diamonds), and delivers diamonds with a handoff framing. The ad is not framed as "watch this ad" — it is framed as "help the salesman," making the ad watch an act of in-game civic virtue. This is the only rewarded ad placement in the library that creates a recurring character relationship around the ad-watching action.

**Screenshot suggestions:**

`[Salesman character on city map with ad bubble above his head and "Working in sales is so stressful — can you help lighten my load?" dialogue]`
*Documents the narrative framing of the salesman rewarded ad character.*

`[Daily reward popup showing "Day 1 — Coins ×16 — Watch an ad to double your reward" alongside "Don't double" option]`
*Documents the daily reward doubling placement and the opt-out option.*

---

### Daily Login Reward (`daily-login-reward`) · Core

**What was observed:**
A 7-day daily reward calendar. On first open each day, a popup appears: "Daily Reward — Day 1 — Coins ×16 — Keep going — 6 more days to collect your special gift." Day 2 shows a question mark for the unknown reward. The Day 7 "special gift" is not disclosed upfront. A "watch an ad to double your reward" button accompanies the popup. "Don't double" is the alternative.

In Session 2 (returning after several days), the daily reward reset — the popup showed "Day 1" again rather than continuing the streak, confirming the calendar resets after a break or follows a new weekly cycle rather than a strict consecutive-day tracker.

**How it is presented:**
The popup appears automatically on app open before any other interaction. The calendar shows 7 days with a question mark on Day 2 and the "special gift" framing for Day 7. The only way to see Day 2's reward is to return the next day.

**What is notable:**
The Day 2 reward is hidden behind a question mark — a variable reward framing applied to the daily login calendar. Most daily login systems in the library show upcoming rewards in advance; Fortune City deliberately conceals them, adding uncertainty to the return incentive. The Session 2 reset to Day 1 suggests the calendar is event-based rather than strictly cumulative.

**Screenshot suggestions:**

`[Daily reward popup showing Day 1 coins reward, the 7-day strip with Day 2 as a question mark and Day 7 as a special gift, and the "watch an ad to double" / "don't double" split]`
*Documents the 7-day structure, the hidden Day 2 reward, and the integrated ad doubling mechanic.*

---

### Streak (`streak`) · Supporting

Write-up pending.

---

### Energy-Lives (`energy-lives`) · Supporting

Write-up pending.

---

### Cosmetics (`cosmetics`) · Supporting

Write-up pending.

---

### Set Collection (`set-collection`) · Supporting

**What was observed:**
City Council Members are five named characters (Kashi, Fisher, Audi, Yilty, Sir Fox) each with their own collection of items that unlock as the player progresses. Fisher is unlocked by tracking expenses for four consecutive days. Kashi's collection unlocks items "every week when you check categories." Each council member has a profile screen showing collection slots and an "unlock collections" button (which opens the paywall for premium slots).

VIP Citizens are 40 named characters unlocked by upgrading the City Hall's livelihood level. Their silhouettes are visible in the VIP Citizens tab but grayed out until earned.

Building types are organized into visual collection galleries (income, miscellaneous, food, drinks, transportation, shopping, entertainment, housing, medical, electronics, public construction, special) showing level 1 through 8 versions of each building type. Buildings the player has not yet constructed are shown as locked slots. Vehicles are similarly collected — a full vehicle gallery showing owned and unowned vehicles.

**How it is presented:**
Your City → Characters tab shows council members and VIP citizens. Your City → Buildings tab shows the building collection. Your City → Vehicles tab shows the vehicle collection. Council member collections are accessed by tapping the character's profile.

**What is notable:**
The four-day consecutive tracking requirement to unlock Fisher is the most gamified content gate in the app — a character is withheld specifically until the player has demonstrated four days of consistent expense logging, which is the core behavior the app is designed to build. The silhouette preview of Fisher ("don't you want to see how cute Fisher is?") is a deliberate visual tease that reveals the reward's existence while withholding its identity.

---

## Mechanics not observed

**Streak:** The consecutive-day tracking achievements (Great Habits group) function as streak milestones, but no explicit streak counter with a named current-day count and a break/reset alert was described as a home screen element. The consecutive tracking for Fisher's unlock is the closest functional equivalent.

**Energy-Lives:** No cap on the number of expense entries or city actions per time window was described beyond the 5-buildings-per-day limit (which is an input limit, not a regenerating attempt cap).

**Season Pass:** No dual-tier advancement track with free and paid tiers progressed through in-app actions was described. The Sparkful subscription is a content paywall rather than a progression track.

**Leaderboards:** A ranking tab requires login; its structure was not accessible.

---

## How mechanics connect

**Expense logging drives every mechanic.** Recording expenses produces buildings (construction meta), triggers achievements (first building, merge first building, 10 food expenses, etc.), advances council member unlocks (Fisher requires 4 consecutive days), generates coins for city hall upgrades, and contributes to prosperity score. The entire mechanic stack has one input: the user recording a real expense.

**Coins fund city upgrades, which unlock new content.** Coins are generated passively by citizens working in buildings and via daily login rewards and achievement rewards. They are spent on City Hall upgrades (Finance → more coin storage; Economy → vehicles; Livelihood → VIP citizens). More content unlocks create more engagement surface, which motivates more expense logging.

**Diamonds gate both premium items and ad engagement.** Diamonds are the premium currency earned through achievements, ad watching, and mission completion. They are spent on: inviting visiting citizens (1 diamond each), purchasing city themes (300 diamonds), Builder's Hub upgrades (500 diamonds), and premium store items. The salesman character, the achievement "Help the Salesman" track (1,000 watches = Charitable Superstar), and the free diamond ad button in the hamburger menu all funnel into diamond accumulation through ad watching.

**The Sparkful subscription gates analytical depth, not gamification.** Free-tier users have access to the full gamification layer (city building, citizens, achievements, daily rewards, quests, merging). The subscription gates the financial analysis tools (budget categories, trend reports, expense review, Fisher's full functionality, frequency challenge). This creates a product where gamification is always free and the actual financial intelligence is premium.

---

## Session rhythm

**Session trigger:** Daily reminder notification (set at onboarding at a user-chosen time, default 10 PM). The prompt is to record expenses at the end of the day.

**Session structure:** Open app → claim daily reward (and optionally double with ad) → record expenses from the day → watch city update with new buildings → recruit visiting citizens → assign jobs → complete bulletin board quests (find salesman, citizen classifieds) → collect coins from buildings → upgrade city hall if sufficient coins → close.

**Return pressure:** Daily reminder notification, daily reward calendar (7-day cycle), daily ad limit reset (2 free diamonds from hamburger, salesman), bulletin board quest cooldown (59 minutes for Level 1), citizen classified cooldown, coin collection from citizens (passive accumulation while away), Fisher unlock requiring 4 consecutive tracking days.

**Buildings-per-day limit:** The 5-buildings-per-day limit (Builder's Hub level 1) means recording more than 5 expenses in one day does not produce additional buildings — "everyday city builders convert your first five transactions to buildings, but you can still keep tracking after that." This creates a soft daily session ceiling for building rewards while allowing unlimited expense recording.

---

## Monetization observed

| Product | Price | What it delivers |
|---|---|---|
| Sparkful Subscription (annual) | $69.99/year ($5.89/month) — 14-day free trial | Advanced finance: budget categories, trend analysis, expense review (Fisher), frequency challenge, notifications at budget thresholds; also covers Plant Nanny, Walker, Book Morning, To Do Adventure |
| Sparkful Subscription (monthly) | $7.99/month — 7-day free trial | Same as annual; $5.89 vs $7.99 comparison shown |
| Pile of Diamonds | $1.99 | 150 diamonds |
| Pouch of Diamonds | $4.99 | 500 diamonds |
| Bucket of Diamonds | $19.99 | 2,500 diamonds |
| Box of Diamonds | $49.99 | 6,500 diamonds |
| Vaulted Diamonds | $99.99 | 14,000 diamonds |
| Accelerator Pack | Not stated | 500 diamonds, Level 2 Worker Hub, Level 2 Stonehenge |
| City Themes (individual) | 300 diamonds each | Named visual themes (Temple Palace, Taurus the Bull, Hanging Garden, etc.) |
| City Themes (subscriber-exclusive) | Subscription required | Moon Festival and other non-purchasable themes |
| Interstitial ad removal | Any purchase (excl. rewarded ads) | Removes all interstitial ads permanently; rewarded ads remain |
| Free diamonds (ad watch) | Free (2 per day limit) | 1 diamond per ad watch, up to 2 per day from hamburger menu |

---

## What stood out

1. **The salesman character is the most narratively integrated ad placement in the library.** The salesman is a recurring city character with a visible "sales counter" above his head. When the user taps him to watch an ad, he thanks them personally with a generated story (grandma's diamonds, boss's approval) and hands over diamonds with voiced dialogue. The 1,000-watch achievement track turns what would be an abstract ad metric into a civic relationship — the user is the mayor who keeps helping the overworked salesman. No other app in the library has turned ad watching into a character relationship.

2. **Fisher's unlock requires four consecutive days of expense tracking — and he's teased with a silhouette.** Fisher is shown in the council member screen as a visible but unidentified silhouette with the caption "don't you want to see how cute Fisher is?" The four-day consecutive tracking requirement directly conditions the app's most useful financial advisor character on demonstrating the core habit the app is designed to build.

3. **The gamification layer is entirely free; the financial intelligence is entirely paywalled.** Any user can build a city, recruit citizens, complete achievements, merge buildings, and earn diamonds indefinitely without paying. The subscription unlocks budget tracking, trend reports, expense review, and Fisher's analytical functionality — the actual personal finance tools. The app makes entertainment free and usefulness premium.

4. **Achievements explicitly incentivize installing other Sparkful apps and watching ads.** The "Best Apps" achievement group rewards downloading Plant Nanny, To Do Adventure, and other Sparkful titles. The "Watch Ads to Help the Salesman" achievement group scales from 5 to 1,000 watches. Both achievement groups use the library's own achievement system to drive behaviors that benefit the developer's business (cross-app install rates and ad revenue) rather than the user's financial health.

---

## Analysis notes

Two sessions across four days. Session 1 was a first-install session covering onboarding through the full app surface: city building, citizens, achievements, bulletin board, shop, themes, ranking, and Your City. Session 2 was a returning session after several days of no use, covering the daily reward reset, continuing expense logging, building merges, additional achievements, and the expense review flow. The Sparkful login was skipped in both sessions — the ranking tab, friend visit mechanic, and data backup features were therefore not accessible. The subscription was not purchased — advanced analytics features (budget categories, trend comparison, Fisher's full functions, frequency challenge) were seen only through paywall prompts. One UX issue noted: the rating request popup after Session 2 expense entry had no visible X button — the only way to dismiss it was tapping outside the popup area.

---

## Category context

Fortune City is explicitly positioned within the Sparkful app ecosystem alongside Plant Nanny (hydration tracking), Walker (step counting), Book Morning (alarm with stories), and To Do Adventure (task management). Each is a habit-building utility app with gamification. The subscription covers all five apps simultaneously — making Fortune City's paywall also a cross-app subscription pitch.

---

## Unrecognized mechanics

### `passive-construction-meta`
**What was observed:** Recorded expenses become buildings. Buildings produce coins passively while the app is closed (citizens work and earn coins per hour based on their productivity level and job assignment). Coins are spent on City Hall upgrades that unlock new building slots, vehicles, and VIP citizens. Buildings of the same type merge into higher-level versions. The city grows visually with each expense recorded, upgrade purchased, and merge completed. The city's appearance changes based on the theme purchased (Temple Palace, Moon Lake, etc.). This is the same mechanic flagged in the Royal Match analysis — a spend-currency-on-named-construction-tasks-to-visually-improve-a-space loop — with the critical difference that the currency here (expense records) is a real-world behavior rather than a game action.
**Why it maps to the flagged mechanic:** The passive-construction-meta mechanic (flagged in Royal Match analysis as worth adding to the library) is the organizing framework of the entire Fortune City experience. The distinctive implementation: the "currency" for construction is real-world expense logging rather than in-game currency earned through gameplay. This makes the construction meta a habit-building mechanism rather than an engagement mechanism.
**Worth adding to library:** Yes — confirm the addition flagged in the Royal Match analysis. Fortune City is a strong reference app for this mechanic given that the entire product is built around it.

### `companion-app-ecosystem`
**What was observed:** Fortune City is one of five apps in the Sparkful ecosystem: Plant Nanny (hydration), Walker (steps), Book Morning (alarm), To Do Adventure (task management), Fortune City (expense tracking). All five are listed in the Fortune City shop under "Fan Badges" with achievement badges for downloading each companion app. The Sparkful subscription covers all five apps. The paywall explicitly names all five apps and their benefits. In-app, the Best Apps achievement group directly rewards installing companion apps with diamonds (the premium currency used to hire citizens and purchase themes).
**Why it does not map to an existing mechanic:** Not `achievements` — the cross-app install incentive is a business model pattern, not a display mechanic. Not `gifting` — no item is transferred. This is a developer cross-promotion mechanic where the achievement system is explicitly used to drive downloads of companion apps, with premium in-game currency as the incentive. The subscription that covers all five apps creates a bundle incentive that compounds the cross-promotion.
**Worth adding to library:** Possibly — the pattern of using a single app's achievement system to incentivize downloads of companion apps from the same developer (with in-game currency rewards) is worth naming as a cross-promotion mechanic pattern, particularly for developers with multi-app ecosystems.

### `soft-currency` (Coins, Diamonds, Prosperity)
**What was observed:** Three distinct in-game resources. Coins: earned passively from citizen productivity and daily login rewards; spent on City Hall upgrades (1,350–1,500 coins per upgrade level) and building merges (50 coins per merge as an alternative to ad-watching). Diamonds: earned from achievements (3 diamonds each), ad watches (1 per ad, 2 per day from hamburger), mission completion (1–2 per quest); spent on citizen recruitment (1 diamond), city themes (300 diamonds), and Builder's Hub upgrades (500 diamonds). Prosperity: a cumulative score that increases with buildings, upgrades, and achievements; checked against achievement thresholds but not directly spendable.
**Why it does not map to an existing mechanic:** Not `hard-currency` — neither coins nor diamonds can be purchased directly with real money (diamonds can be purchased, but also earned freely through ads and achievements, making them a dual-nature currency). Prosperity is a pure accumulation metric with no spend mechanic. Flagged as a known library gap.
**Worth adding to library:** Flag against the known library gap. The dual-nature diamond (purchasable but also freely earnable through ads and achievements) is worth noting as a distinct variant.
