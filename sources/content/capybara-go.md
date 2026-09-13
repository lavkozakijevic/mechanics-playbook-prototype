# Capybara Go!

**Teaser:** A capybara that keeps its gold when it dies: every run rebuilds a slightly stronger one, and almost every later system sells a faster way to do that again.

Capybara Go! is a roguelite idle RPG in which a capybara auto-battles through numbered days on a procedurally generated run, stopping only for narrative choices and skill picks, until it either survives to the chapter's day threshold or is defeated. Between runs, the gold and materials a run produces buy permanent talent levels, equipment, and companion pets that carry into the next attempt, so even a defeat leaves the next run stronger than the last. The game unlocks entire feature systems, chests, tasks, funds, guilds, events, in a long staggered sequence gated behind chapter clears and survival milestones, so the visible surface of the game keeps growing for weeks after install. Nearly every one of those later systems, once unlocked, sells a way to get more out of runs the player is already making.

---

## System view

Capybara Go! is a complex system. Energy-gated runs sit at its center, and nearly everything else, talents, equipment, pets, funds, events, tasks, ads, exists either to convert what a run produces into permanent strength for the next one, or to sell a faster way to get that output. The spine is the decision to start a run: it costs energy, it is the only action that produces gold, materials, and drops, and every currency, reward track, and purchase in the game ultimately points back at it.

---

## Mechanics

### Challenge

**What was observed:** Capybara Go organizes both its main run and its Tower Challenge floors as bounded attempts with a stated success condition. A chapter run ends when the capybara is defeated or survives to the chapter's day threshold, sixty days for Chapter 1, and clearing it grants gold and moves the capybara into a new area, while a defeat instead records the days survived and the longest run reached. Tower Challenge floors work the same way at a smaller scale: entering a floor costs one ticket, victory shows a reward pop-up and a button that starts the next floor immediately, and each floor's enemies grow stronger than the last. Clearing ten floors of a tower triggers its own congratulations screen and a separate reward chest.

**How it is presented:** The chapter target is never stated up front; Capybara Go drops the player into day one with no goal or run-length screen, and the day threshold only becomes visible once a run has ended. Tower floors are shown as a vertical ladder with a bar running from floor one to floor ten and a clear-reward chest waiting at the top.

**What is worth noting:** Capybara Go withholds the chapter's actual length until after the first run ends in defeat, so the very first attempt has no way to gauge how close it came. Framing that loss as reaching "day 40 of 60" only becomes possible in hindsight, once a clear or another defeat reveals the target.

**Key findings:**

- Chapter 1 requires surviving 60 days; the first run ended in defeat at day 40 with no stated target beforehand.
- Tower Challenge floors consume one ticket each and get harder floor over floor.
- Clearing floor ten of a tower produces its own congratulations screen and reward chest, on top of each floor's own payout.
- A defeated run and a cleared run produce different end screens: one records a personal best, the other grants gold and advances the map.

**Screenshots needed:** the day-one run screen with no stated goal, the defeat screen showing days survived, and the Tower floor ladder with its floor-ten clear chest.

### Companion

**What was observed:** Pets are a persistent roster the capybara sends into battle. Capybara Go hatches them from eggs, bought with gems or watched ads, or awards them from events and the sign-in event, and holds them in a pet list separate from the character. Only one battle position is open at first, with a second stated to unlock at level four, and a pet swiped into that position fights alongside the capybara in runs and raids. Each pet carries its own level, battle skills that unlock as it levels, and a growth path that consumes further copies of the same pet plus pet food; a synthesis screen also promises to convert surplus pet fragments into a new pet, though none were held to test it.

**How it is presented:** Pets unlock through the same feature pop-up and pointer-guidance sequence Capybara Go uses for every other system, arriving once the second chapter clears. The pets screen shows the roster and the open and locked battle positions; hatching happens from a separate screen offering an ad-watch or two gem-priced options.

**What is worth noting:** Capybara Go never shows a battle in which a pet's contribution to the outcome is visible on its own, so a player has no way to judge whether one pet is worth developing over another. The level-four condition for opening the second battle position is stated without saying which level it refers to, character or pet, which leaves the roster's growth path partly opaque even to an attentive player.

**Key findings:**

- Three battle positions exist in total; one is open, two are locked, and the next opens at level four.
- Eggs are hatched by watching three ads or by paying 300 or 600 gems.
- Growing a pet consumes further copies of the same pet plus pet food, and surplus fragments are meant to synthesize into a new pet.
- Pets fight alongside the capybara in both runs and raids.
- The sign-in event's best reward is a named pet, not a currency grant.

**Screenshots needed:** the pets roster screen with its open and locked positions, and the egg-hatching screen showing the ad and gem options together.

### Daily / Weekly Quests

**What was observed:** Once the tasks section unlocks, Capybara Go runs two parallel objective tracks. Daily tasks ask for specific actions, a Black Market purchase, opening three chests, clearing a stage, entering the Arena, and completing them advances a daily reward track with its own claimable prizes. Those same daily completions also count toward a separate weekly track with its own levels to reach before the week ends.

**How it is presented:** The tasks screen sits behind the sidebar's hamburger menu and separates completed tasks from open ones, with a toggle switching between the daily and weekly views and a countdown to the next reset.

**What is worth noting:** The daily task list can include an objective the player cannot yet complete, entering the Arena, since Arena itself unlocks two chapters later than tasks do. Capybara Go points its return mechanic at features the player hasn't reached yet as readily as at ones already available.

**Key findings:**

- Tasks unlock only with the third chapter, not with the rest of the mid-game feature set.
- Daily completions feed both a daily reward track and a separate weekly track.
- One daily task, entering the Arena, cannot be completed until a later chapter unlocks that feature.
- The daily list carries its own reset countdown.

**Screenshots needed:** the tasks screen with the daily and weekly toggle and reset countdown visible.

### Daily Claim Pack

**What was observed:** Capybara Go sells two shapes of the same pattern, a single purchase that pays out across a run of days rather than all at once. The Monthly Card and Automine Card each cost a flat price and release a fixed daily amount, gems, energy, or pickaxes, for thirty days after purchase, on top of a one-time grant delivered immediately. A smaller 3-Day Deluxe Pack does the same over three days: its listing names a different reward for day one, day two, and day three, including a cosmetic item on day two, rather than handing over everything at once.

**How it is presented:** The Monthly and Lifetime cards sit together in the Privilege Card section alongside a locked Automine Card that only becomes purchasable once its own feature unlocks. The 3-Day Deluxe Pack instead appears as a triggered offer after a long run ends, and is also parked permanently under the home screen's Newbie Gifts button.

**What is worth noting:** Capybara Go frames its shortest version of this pattern, the three-day pack, as a countdown-priced offer right after a big personal-best run, while its longest version, the thirty-day cards, sits in a section the player has to seek out. The same mechanic gets an urgent framing in one place and a routine one in the other.

**Key findings:**

- The Monthly Card costs $4.99 for thirty days of daily gems and other benefits, plus an immediate gem grant.
- The Automine Card follows the same thirty-day shape but pays out in pickaxes and can't be bought until its own feature unlocks.
- The 3-Day Deluxe Pack costs $0.99 and lists a different reward for each of its three days, including a cosmetic on day two.
- None of the three has been purchased, so the day-by-day claim sequence itself isn't confirmed.

**Screenshots needed:** the Privilege Card screen showing the Monthly, Lifetime, and locked Automine cards together, and the 3-Day Deluxe Pack's day-by-day listing.

### Daily Login Rewards

**What was observed:** Capybara Go runs a seven-day sign-in event once the second chapter clears, handing out a different reward for each day up to a named pet on day seven. Separately, several surfaces offer a smaller reward simply for opening them once within the current day: a free pack in the Pack Shop, a daily benefit in the Privilege Card section, a free energy claim, and a daily gift inside the Seven-Day Carnival.

**How it is presented:** The sign-in event lives in the sidebar's Login section, unlocked only after the second chapter clears. The free daily claims are scattered across several unrelated screens, each with its own countdown to the next available claim.

**What is worth noting:** None of Capybara Go's daily-claim surfaces require anything from the player beyond opening the screen and tapping claim, no purchase, no task, no prior entitlement, which puts them in the plainest form this mechanic can take. The sign-in event is the one exception with any structure at all, a fixed seven-day list rather than a repeating claim.

**Key findings:**

- The sign-in event's day one reward is fifty gems, claimable immediately, rising to a named mythic pet on day seven.
- The sign-in event does not exist until the second chapter is cleared.
- Free daily claims appear in at least four separate places: the Pack Shop, the Privilege Card section, the energy refill screen, and the Carnival.
- Each free claim surface carries its own countdown to the next available claim.

**Screenshots needed:** the seven-day sign-in event showing all seven rewards, and the Privilege Card's daily benefit with its end-of-day countdown.

### Energy

**What was observed:** Every run costs energy, capped at thirty and spent five at a time, and every secondary mode, Tower Challenge, the two raids, Phantom Sword Island, draws on its own separate ticket instead. Energy refills through regeneration, a free daily claim, watching ads, or paying gems, and any energy that regenerates past the cap isn't lost: Capybara Go reissues it through the mailbox as claimable parcels good for six days. Mode tickets refill through rewards, ads, and packs, with no stated cap or regeneration rate of their own.

**How it is presented:** Energy sits permanently in the home screen's top bar with a countdown to the next point, and tapping it opens every refill option on one screen. Overflow energy shows up as mail from an in-universe association rather than as a silent loss; mode tickets are only visible on the screen for the mode they unlock.

**What is worth noting:** Capybara Go's overflow-to-mail treatment inverts the usual effect of an attempt cap: instead of a returning player finding regeneration wasted while away, the game hands them a stockpile waiting to be claimed, in one case worth close to fifty runs at once. A returning player is set up to catch up quickly rather than fall further behind.

**Key findings:**

- Energy caps at thirty, costs five per run, and refills by regeneration, a free daily pack, ads, or ninety gems.
- Overflow energy above the cap is reissued through mail rather than lost, claimable for six days.
- Tower Challenge, the two raids, and Phantom Sword Island each draw on a separate ticket rather than shared energy.
- Running out of raid tickets offers up to two ad views as a refill, one ticket per ad.

**Screenshots needed:** the energy refill overlay showing all four paths at once, and the mailbox showing overflow-stamina parcels with their six-day claim window.

### Experience Points

**What was observed:** Inside a run, Capybara Go accumulates experience from combat and narrative events, and reaching a threshold opens a full-screen skill choice. One run showed at least five level-ups by its later days, with experience awarded in varying amounts, from ten points for a minor event up to a hundred for a big win.

**How it is presented:** Experience isn't shown as a running number the player watches climb; it surfaces only at the moment a level-up screen interrupts the run to offer a skill choice.

**What is worth noting:** Capybara Go never states what threshold triggers the next level, so a player can only infer pace from how often skill screens appear, not from a visible bar.

**Key findings:**

- Experience is awarded by both events and battles within a run, from ten up to a hundred points at a time.
- At least five level-ups occurred within a single run.
- No experience threshold values are ever stated to the player.

**Screenshots needed:** a level-up skill choice screen showing the experience gained leading up to it.

### First-Purchase Bonus

**What was observed:** Every individual gem package in Top Up carries its own first-purchase bonus, doubling the amount of gems delivered the first time that specific package is bought.

**How it is presented:** The bonus is attached directly to each gem package's listing in Top Up, rather than to the store as a whole or to a single featured starter offer.

**What is worth noting:** Because the bonus is scoped to each package rather than to one first purchase overall, Capybara Go effectively runs a separate first-purchase incentive for every gem package size, rather than spending the incentive once.

**Key findings:**

- Every gem package in Top Up carries its own first-purchase bonus.
- The bonus doubles the gem amount delivered on that package's first purchase.
- The bonus is scoped per package, not once across the whole store.

**Screenshots needed:** the Top Up screen showing a gem package's price alongside its first-purchase bonus labeling.

### Hard Currency

**What was observed:** Gems are Capybara Go's primary paid currency, sold directly in Top Up and included in most packs, and spent on chest opens, egg hatches, and energy refills across the game. Gold coins are also sold for money, bundled into packs like the Chapter 1 Pack, in addition to being earned through play.

**How it is presented:** Gem prices appear directly on the surfaces that spend them, energy refills, chest opens, egg hatches, rather than requiring a trip to the store first.

**What is worth noting:** Because gold is both earned freely from ordinary runs and sold directly in packs, Capybara Go blurs the line between its two currencies more than most games in the library: the same balance that funds routine talent upgrades can also be bought outright.

**Key findings:**

- Gems are sold directly in Top Up and bundled into nearly every purchasable pack.
- Gold coins, normally earned from runs, are also sold directly in several packs.
- Gem prices are shown on the spending surface itself: 90 for an energy refill, 80 for a chest open, 300 or 600 for an egg hatch.
- No gem purchase or gem spend takes place; the game's own prices are shown but not exercised firsthand.

**Screenshots needed:** the Top Up screen showing gem package pricing, and a spending surface showing its gem price in place.

### Leaderboard

**What was observed:** Capybara Go runs three separate ranking surfaces. A Ranking screen orders all players by their longest survived run and shows the user's own position among them. A Tower Challenge leaderboard separately orders players by highest floor reached. Two time-limited pet events each carry their own leaderboard with reward bands running from first place down to a shared band covering positions 101 through 9,999.

**How it is presented:** The main Ranking screen sits in the sidebar and is available from the very start, before any chapter is cleared. The Tower leaderboard lives inside the Tower Challenge screen, and the event leaderboards live inside their own event screens.

**What is worth noting:** Capybara Go's pet-event leaderboards reward everyone from position 101 to position 9,999, not only top finishers, which turns simple participation into a rewarded outcome rather than reserving the payout for players who actually rank well.

**Key findings:**

- The main Ranking screen orders players by longest run and was available before any chapter was cleared.
- The user's position on the main Ranking screen was 3,092nd.
- The Tower Challenge leaderboard orders players by highest floor reached.
- Two pet events each carry a separate leaderboard with a shared reward band covering positions 101 through 9,999.

**Screenshots needed:** the main Ranking screen showing the ordered list and the user's own position, and a pet event leaderboard showing its reward bands.

### Leveling

**What was observed:** Capybara Go layers several separate leveling states on top of each other. The character's in-run level resets every run. Talents carry a level raised by spending gold that persists across runs. A rank title, Apprentice through Elite Legacy, advances on a points bar shown on the player's profile icon, and moving up a rank grants a direct stat boost. Equipment carries a level out of ten raised through enhancement, and pets level up through duplicates and food.

**How it is presented:** The in-run level appears as a skill-choice interruption mid-run. The talent level and rank title live on the talents screen, with an "Evolution Tree" preview showing the full rank ladder. Equipment and pet levels are shown on their own detail screens.

**What is worth noting:** Capybara Go's persistent rank title is the one leveling state visible outside its own screen, shown permanently on the profile icon, which makes it function as a public identity marker rather than a private progress number the way the in-run level or an equipment level does.

**Key findings:**

- The in-run level resets every run; talent levels, the rank title, equipment levels, and pet levels all persist.
- Advancing from Apprentice to Apprentice 2 granted a direct stat increase.
- Equipment levels are capped at ten per item.
- Pets are levelled by consuming duplicate copies of themselves plus pet food.
- The rank title is shown on the profile icon on the home screen at all times.

**Screenshots needed:** the talents screen showing the rank progress bar and current rank, and the Evolution Tree preview showing the full rank ladder.

### Loot Box

**What was observed:** Capybara Go gates several containers behind a cost paid before the result is known. The Adventure Supply Crate opens free once and then costs gems or ad views; the Limited Secret Chest costs gems per pull and discloses exact probabilities down to a fraction of a percent for its rarest result, alongside a guarantee after a stated number of pulls. Egg hatches, priced in gems, work the same way.

**How it is presented:** Chest odds are disclosed behind a tappable button rather than shown by default, and the guaranteed-pull mechanic is described without explaining exactly what triggers it.

**What is worth noting:** The Limited Secret Chest is the highest-stakes draw disclosed anywhere in the game, at under one percent for its best result, and it's also the one Capybara Go discloses in the most exact detail, down to hundredths of a percent, putting its most precise disclosure on its least likely outcome.

**Key findings:**

- The Limited Secret Chest costs 320 gems per pull, or 2,980 for ten, with its rarest result disclosed at 0.65 percent.
- The Adventure Supply Crate opens free once, then costs 80 gems or three ad views.
- Egg hatches cost 300 or 600 gems, or three ad views.
- A pity mechanic guarantees a result after a stated number of pulls on more than one chest type.

**Screenshots needed:** the Limited Secret Chest's probability disclosure screen, and the Adventure Supply Crate showing its free, gem, and ad-view options together.

### Milestone

**What was observed:** Capybara Go treats several separate progress points as milestones. Reaching ten combined talent points grants a coin reward; reaching twenty grants a named badge. Clearing a Tower Challenge tier produces a congratulations message and its own reward chest on top of per-floor rewards. Clearing a chapter or crossing a stated survival-day threshold unlocks whichever feature is gated behind it.

**How it is presented:** Each milestone response takes a different form: a coin grant on the talents screen, a congratulations pop-up on the Tower screen, and a feature-unlock pop-up with pointer guidance on the home screen.

**What is worth noting:** Capybara Go's chapter and survival-day milestones do more than pay out: crossing one changes what the player can access at all, which makes ordinary survival the gate for most of the game's later content rather than a separate achievement system doing that job.

**Key findings:**

- Reaching ten combined talent points pays 720 gold coins; twenty points grants a named badge.
- Clearing Tower of Explorers floor ten produced its own congratulations screen and reward chest.
- Clearing a chapter or a stated survival-day count is what unlocks most later features.
- No single screen records milestones as a list separate from their individual rewards or unlocks.

**Screenshots needed:** the talents progress bar showing its milestone rewards, and a chapter-clear feature-unlock pop-up.

### Progression Fund

**What was observed:** Capybara Go's Growth Fund section lists six funds, each attaching a free reward lane and a larger purchased lane to a different measure the player is already advancing: talent level, Tower Challenge floors, Dungeon Dive floors, hard-mode story progress, guru tickets used, and mythic treasures collected. None of the six carries a countdown timer. Each fund states its price, its per-position rewards in both lanes, and the total the purchased lane pays out across the track.

**How it is presented:** All six sit together under one Growth Fund entry on the sidebar, each with its own screen, price, and total, and every fund appears marked inactive with its rewards locked.

**What is worth noting:** None of the six funds states a consistent multiplier between its free and paid lanes, the ratio and totals vary fund to fund, so a player comparing them has to work out each one's value individually rather than applying one rule of thumb across all six.

**Key findings:**

- Six separate funds run in parallel, each tied to a different existing progress measure.
- None of the six carries an end timer, unlike the Battle Pass shown in the same section.
- Prices range from $9.99 to $29.99, and stated totals range from 125 legendary keys to nearly 75,000 gems.
- All six were shown marked inactive with every reward locked, and none is shown advancing.

**Screenshots needed:** the Growth Fund section listing all six funds together, and one fund's detail screen showing its free and paid lanes side by side.

### Rewarded Advertisement

**What was observed:** Capybara Go offers a rewarded ad in place of currency at several points: energy refills, opening the Adventure and Hero supply crates, hatching pet eggs, restoring dragon tickets, and getting gold in the Black Market. Every one of those ad prompts also displays the Ad-Free Card offer directly beneath it.

**How it is presented:** Each ad offer opens the same watch-or-cancel prompt, and the Ad-Free Card banner sits immediately below it every time, regardless of which reward the ad is attached to.

**What is worth noting:** Placing the permanent ad-removal offer beneath every single rewarded ad, rather than only in a settings menu, means Capybara Go pitches that purchase repeatedly across the whole game rather than treating it as a one-time upsell.

**Key findings:**

- Rewarded ads substitute for currency at energy refills, both supply crates, pet egg hatches, dragon tickets, and Black Market gold.
- The Ad-Free Card offer appears beneath every one of those ad prompts.
- Ad offers carry daily limits, shown as a remaining-chances count.
- In one instance a chest opened despite the ad appearing not to play.

**Screenshots needed:** a rewarded-ad prompt with the Ad-Free Card offer shown directly beneath it.

### Seasonal Progression Pass

**What was observed:** Capybara Go runs several time-bounded reward tracks alongside its untimed funds. The Battle Pass carries a named season, thirty ordered reward positions, a free lane paying one item per position against a paid lane paying two, and an end time measured in days. The Seven-Day Carnival runs a point bar with chest rewards at fixed thresholds, fed by a list of daily tasks tied to a specific day of the event. Two further events, Pet Auspice and Stage Growth, run five days each and pay out at cumulative thresholds of eggs opened, each with its own leaderboard. A separate Main Quest Fund also states an end time on top of the fund structure it otherwise shares with the untimed funds, and the daily and weekly task tracks described elsewhere carry a comparable reset-bound reward shape of their own.

**How it is presented:** The Battle Pass, the Carnival, and the pet events each occupy their own dedicated screen, each showing its own countdown prominently. The Main Quest Fund sits inside the same Growth Fund section as the six untimed funds, distinguished mainly by the end time printed on its own card.

**What is worth noting:** Capybara Go doesn't state whether the Main Quest Fund's countdown closes the whole reward track or only the window in which the paid lane can be bought, which leaves open whether it belongs with the Battle Pass's seasonal shape or with the untimed funds sitting next to it on the same screen.

**Key findings:**

- The Battle Pass runs a 1:2 free-to-paid reward ratio across thirty positions with a stated end time of fifteen days.
- The Seven-Day Carnival's activity-point bar pays out at 30, 60, 90, and 120 points, fed by day-specific tasks running through twelve stages.
- Pet Auspice and Stage Growth each run five days with cumulative egg-opening thresholds and their own leaderboards.
- The Main Quest Fund states an end time of eight days without clarifying whether that closes the track or only the purchase window.

**Screenshots needed:** the Battle Pass screen showing its season name, countdown, and reward ratio, and the Seven-Day Carnival's activity bar with its day-by-day task list.

### Soft Currency

**What was observed:** Gold coins are Capybara Go's main earned currency, paid out from runs, battles, chapter clears, and Tower floors, and spent on talent upgrades. Gems, while primarily sold for money, are also granted free through the daily pack, the sign-in event, and the carnival's daily gift.

**How it is presented:** Gold appears as a running balance on the home screen's top bar, rising after every run and falling as it's spent on talents.

**What is worth noting:** Because gems are earned free through several small recurring grants while also being sold directly, Capybara Go runs its primary paid currency through the same earn-and-spend loop as its purely earned one, rather than keeping the two visibly separate.

**Key findings:**

- Gold is earned from runs, battles, chapter clears, and Tower floors, and spent on talent upgrades.
- Gems are granted free through the daily pack, sign-in event, and carnival gift, in addition to being sold.

**Screenshots needed:** the home screen top bar showing the gold balance alongside the gem balance.

### Variable Reward Outcome

**What was observed:** Capybara Go resolves many smaller moments without asking for anything up front. Level-up screens offer three skills drawn from a changing pool, with no cost to see the options before picking one. A recurring wheel at a narrative event landed on a losing outcome that reduced the character's health in one run and a favorable outcome in another. Golden chests dropped by strong enemies open with a tap for no cost and offer a further skill choice. Day-to-day events during a run resolve differently between separate playthroughs of the same early days, including outcomes framed as good or bad luck.

**How it is presented:** These moments are woven directly into the run itself, a full-screen skill choice, a narrative event with a spin, a chest that appears after a tough fight, rather than being offered from a separate store screen.

**What is worth noting:** The narrative wheel is the only variable outcome anywhere in the game that includes a losing result: it can reduce the character's health rather than only paying out something of low value.

**Key findings:**

- Level-up skill choices are drawn from a changing pool and cost nothing to view before picking.
- A narrative-event wheel produced a health-reducing result in one run and a favorable one in another.
- Golden chests from strong enemies open free and include a skill choice.
- The same early days of separate runs produced different events and outcomes.

**Screenshots needed:** the narrative-event wheel showing its losing segment, and a level-up screen showing the three skill options.

---

## Onboarding and first run

Capybara Go!'s first minutes run without any explanation: a stack of permission prompts, a long asset download, and then a single uninterrupted run before anything else in the app becomes visible. This section covers that opening sequence and the pop-up-and-pointer pattern the app repeats every time a new feature unlocks afterward.

### O1. Launch permissions and download

On first launch, Capybara Go asks to send notifications while its loading screen displays, then asks to track activity across other apps and websites while it checks for updates. It downloads roughly 86 megabytes of assets, takes noticeable time doing so, and its loading screen carries leftover artwork from a past Lunar New Year event. Both permission prompts appear before any gameplay, and a login step follows before the app opens into a run.

- The asset download is stated as 86 megabytes.
- The app version is spoken as "1812" at the login step.
- Both permission prompts appear before any gameplay.

### O2. A run with no explanation

Capybara Go places the player directly into a run once loading finishes: the capybara walks along a path while the screen shows a day track, character stats, and a message for day one. No tutorial, stated goal, or run length appears before or during this first run, which plays out for almost 20 minutes before any other part of the app becomes visible. A settings button sits at the top left, and the day track shows markers for day 1, 8, 9, and 25 without explaining what they mean. The lower half of the screen shows experience, level 1, 400 health points, 100 attack, and 25 defense. The day one message states that humans and beasts have attacked the homeland and the character has set out alone to fight back.

- The first run lasted almost 20 minutes before it ended.
- Day markers shown are 1, 8, 9, and 25, with no stated meaning.
- Starting stats are 400 health, 100 attack, 25 defense at level 1.

### O3. Pop-ups with pointer guidance

When the player returns to the home screen after the first run, Capybara Go shows a feature-unlock pop-up followed by an animated finger pointing at the new entry, and locks the rest of the home screen while that pointer is active. The same pattern repeats for every later feature: the shop, equipment, Newbie Gifts, and later, events, Tower Challenge, and pets, each followed by its own pointing finger. Three buttons beside the main Adventure button start out locked. The equipment unlock doesn't force the player to leave the store, and the Newbie Gifts unlock opens a chest pop-up stated to last seven more days, with a once-a-day dismiss option.

- Three buttons beside the Adventure button are shown locked at first.
- The equip unlock does not force navigation away from the store.
- The Newbie Gifts event is stated to last seven more days.

### O4. The home screen after the first run

Capybara Go's home screen shows the capybara on a labeled map, a record of the longest run survived, and a top bar with the player's title, username, a sword icon showing a number the app never explains, energy, gems, and gold coins. A hamburger menu sits at the left, a chest labeled with a day count sits above the start button, and a large Adventure button anchors the bottom of the screen. Exclamation marks appear on several icons at once: the menu, the energy counter, the avatar, and the chest. Starting a run costs energy.

- The sword icon shows a value of 1578 that cannot be tapped and is never explained.
- Energy shown is 26 of 30 with a countdown.
- Starting a run costs 5 energy.

### O5. A lock message that came too late

Tapping the gem balance on the home screen tells the player that gems unlock after surviving 39 days in Chapter 1 and gold unlocks after clearing Chapter 2, even though the first run had already survived 40 days, past the stated condition. Returning to the home screen right afterward triggers the shop's own unlock pop-up, guiding the player to a free equipment crate on their first visit.

- The stated gem-unlock condition is surviving 39 days in Chapter 1.
- The first run had already survived 40 days when this message appeared.
- The first shop visit is guided directly to a free equipment crate.

### O6. A pop-up with a daily dismissal

Reopening Capybara Go later shows an empty "game notice updates" screen followed by the same chest pop-up seen at first unlock, again offering a dismiss option limited to the current day. The pop-up states that the chest guarantees current rate-up equipment and that 180 pulls allow a selection.

- The dismiss option's wording limits suppression to the current day only.
- The chest is stated to guarantee a rate-up selection after 180 pulls.

### O7. Exclamation-mark badges everywhere

Capybara Go places exclamation marks on the menu button, the energy counter, the avatar, the home screen chest, talents, and other entries throughout the app. On talents, the badge appears while the player holds enough coins to upgrade something. On the profile, it leads to a prompt to link an external account. Equipment items separately show an arrow when enhancement materials are available.

- The talent badge appears while the player holds enough coins to upgrade.
- The profile badge leads to an account-link prompt.
- Equipment shows a separate arrow indicator when enhancement materials are available.

---

## Core loop and automation

Capybara Go!'s core loop runs day by day inside a run: the app resolves one event after another until a battle interrupts it, and each level gained during that run opens a skill choice. This section covers how a run advances, how battles and elite fights resolve, the secondary attempt-based modes that open once early chapters clear, the energy and ticket limits that govern how often any of it can be run, and the daily and weekly tasks built around it.

### O8. Advancing a run day by day

Capybara Go advances a run one day at a time: the player taps to move forward, and each day resolves a text event with an outcome, a stat change, an experience or gold grant, a health change, or a battle. Before a battle, the advance button changes to a battle button. The app supplies no autoplay for moving between days. Early events include an abandoned chest, a caterpillar encounter, an escape from a stalking beast, a damaged sword, and a music box that lowers maximum health under a "bad luck" framing. Some event text recurs across separate runs and within the same run, while the order of events differs from one run to the next, and the rule that decides which event appears on a given day is never explained.

- Events in the first run's early days include an abandoned chest, a caterpillar encounter, and a health-lowering music box.
- A second run showed a different event order from the first, including a goblin exchange and a legendary drake sighting.
- Some event text recurs across and within runs.
- The rule selecting each day's event is never stated.

### O9. Automatic battles

Battles in Capybara Go run without any input from the player: the capybara and its enemy trade hits over a series of rounds until one side wins. A first battle against a necromancer ran fifteen rounds and paid out experience and gold. Enemies grow stronger as a run continues, a later goblin carries far more health than an early one, and the character's health bar flashes once it drops below a fifth. One battle ended immediately with an instant kill.

- The first necromancer battle ran 15 rounds and granted 53 experience and 46 gold.
- The health indicator flashes at 19 percent health.
- One battle ended immediately with an instant kill.

### O10. Level-up skill choices

Experience from events and battles accumulates during a run, and crossing a level threshold opens a screen offering three skills to choose from. A single run showed level-ups running from level one through at least level six. Skill offers vary: two consecutive level-ups offered only top-tier skills, a later one offered only common ones, and some offers repeated skills seen earlier in the same run. Experience grants vary widely from one event to the next, and Capybara Go never states the point total needed to reach the next level.

- Level 2 and level 3 both offered only legendary skills.
- A later level-up offered only common skills.
- Experience grants include 10, 20, 30, 53, 64, and 100 points.
- No experience threshold value is ever stated.

### O11. Skill rarity and the skill book

Skills carry a rarity label, common, legendary, or a top mythic tier, shown in different colors, and a skill book button on the choice screen lists every skill learned so far in the current run. Mythic skills appeared only from the golden chests dropped by strong enemies, and the first level-up to mix rarities, offering two common skills alongside one legendary one, came from a specific narrative encounter.

- Legendary skills are shown in gold, common skills in purple.
- Mythic skills appeared only from golden chests.
- The first mixed-rarity offer came from the Gorgon event.

### O12. Chance events inside a run

Some narrative events offer the player a choice to gamble inside a run. One encounter offers to leave or to pray, warning that praying takes some luck, and praying spins a wheel whose results include a skill, experience, an attack boost, healing, a full heal, or a loss of fifteen percent health. The same event produced a losing spin in one run and a favorable one in another. A later encounter offered repeated spins that each cost a share of the character's health, with an option to decline and continue instead. Capybara Go never displays the luck value its own framing refers to.

- The Forest Maiden wheel includes a skill, 30 experience, attack up 10 percent, lose 15 percent health, heal 10 percent, and a full heal among its segments.
- The wheel produced a loss in run one and a favorable result in run two.
- A later heart-cost spin event offers repeated spins, each costing a share of health, with an option to decline.
- The luck value the event refers to is never shown on screen.

### O13. Trading a stat for a skill

Several events ask the player to give up part of the character's current run stats in exchange for a skill. One event costs either a max health or an attack percentage for a skill and a stated blessing. Another offers a pact costing a fixed amount of health for a combo skill, with the option to refuse and continue unharmed. A third asks whether the player accepts a cost to max health without stating what the reward will be beforehand.

- One event costs 7 percent max health or 7 percent attack for a skill.
- A demon pact costs 118 health points for a combo skill; refusing continues the run without a fight.
- A Gorgon event costs 5 percent max health without stating the reward beforehand.

### O14. Resting to recover health

Some days in a run offer recovery instead of an event or a fight. An unoccupied hut offers a choice between resting for a set health percentage or searching, which turned up a potion raising max health; the result of searching is not stated before the player chooses. A campsite offers only the rest option at a fixed recovery percentage.

- A hut's rest option restores 30 percent health.
- Searching at a hut found a potion raising max health by 15 percent, though the result isn't known before choosing.
- A campsite offers only rest, also at 30 percent.

### O15. Elite enemies and golden chests

Capybara Go announces an "Elite incoming" warning before unusually strong enemies. Defeating an elite drops a golden chest that restores a fifth of the character's health and offers a choice among three top-tier skills, opened with a single tap at no cost. One elite fight was immediately followed by a warning that a boss fight was coming, and the boss that followed ended the run.

- The werewolf elite granted 64 experience and 299 gold.
- Golden chests restore 20 percent health and offer a choice of three mythic skills.
- The necromancer following the swordsman elite ended run one.

### O16. How a run ends

When the character is defeated, Capybara Go shows a defeat screen naming the chapter, the days survived and the longest run reached, and grants a coin and energy payout regardless of the loss. The screen also states that gold funds talent upgrades and that further runs require energy. A second run reached a longer survival total than the first.

- Run one ended in defeat at day 40 with 1,300 coins granted.
- Run two reached day 59.
- The defeat screen states gold is used for talents and that adventures require energy.

### O17. What carries between runs

A new run starts over at level one with the same opening event as the first, but its starting stats, health, attack, and defense, are higher than the previous run's starting point once talents and equipment have been upgraded in between. Skills chosen during a run do not carry over and must be picked again from scratch in the next one.

- Run two begins again at day one with the same opening message.
- Higher starting stats at the second run come from talent and equipment upgrades made between runs.
- Skills gained during a run do not carry into the next one.

### O18. Battle speed lock and skip

Battle speed starts locked at its slowest setting, and attempting to raise it states that a faster speed unlocks only after clearing a chapter; a further speed tier unlocks after a later chapter. Tower Challenge instead offers a skip button for its battles, and the paid Monthly Card lists a battle speed multiplier among its benefits.

- Battle speed starts at x1 and states a chapter-clear requirement to raise it.
- A x2 speed tier becomes available after clearing a second chapter.
- The Monthly Card lists a 4x battle speed benefit.

### O19. In-run mini-games

Some runs include small games separate from the day-by-day event flow: a spin wheel described as having no losing outcome, offering either a small prize or a temporary power-up, and a card-matching game in which flipping three identical cards wins a small prize, a large prize, or gold. The first set of three matching cards decided the game's result.

- One mini-game wheel is described as having no possible loss.
- A card-flip game wins small treasure, big treasure, or gold.
- The first three matching cards flipped decide the result.

### O20. An unexplained revive

Facing an opponent that looked likely to win, the character was instead revived at full health and went on to win the fight. Capybara Go does not state what caused the revive, whether a skill, an item, or an allowance built into the run, and no cost or prompt accompanied it.

- The revive restored full health with no stated cost or prompt.
- Whether the revive came from a skill, an item, or a per-run allowance is not shown.

### O21. Surviving a chapter

Each chapter is played as a series of runs toward a stated survival target; clearing Chapter 1 requires surviving sixty days. Clearing a chapter grants gold, returns the player to the home screen, and opens a new area for the next chapter, while a defeated run instead records the days survived and the longest run reached. Capybara Go states that its hardest chapters unlock only after surviving a single day in Chapter 51.

- Chapter 1 requires surviving 60 days.
- Clearing a chapter grants gold and opens a new area.
- Hard chapters unlock after surviving one day in Chapter 51.

### O22. Tower Challenge floors

Tower Challenge presents a ladder of floors, each entered with one ticket and each stating its own reward. Winning a floor shows the reward and a button that starts the next floor immediately, and enemies grow considerably stronger floor over floor: an early floor's boss and a later tower's boss differ by more than double in displayed strength. Clearing the tenth floor of a tower triggers its own congratulations message and reward chest, separate from each floor's individual payout. A leaderboard tracks the highest floor reached across players, and an auto-advance option for floors stays locked until a much later chapter is cleared.

- The player held 10 tickets on first entry to Tower Challenge.
- An early tower boss shows roughly 7,600 strength; a later tower's boss shows roughly 18,000.
- Clearing floor 10 grants 600 gold coins, 5 equipment designs, and 10 challenge vouchers.
- Auto next level is locked until surviving one day in Chapter 20.

### O23. Raids with their own tickets

After the second chapter clears, two raid modes unlock, each gated by its own ticket type rather than energy. Running out of a raid's tickets offers watching an ad to restore one. Raid rewards include pet food, and pets fight alongside the character during raid battles.

- Two raid modes, Dragon's Lair and Celestial Tree, unlock after clearing Chapter 2.
- Running out of dragon tickets offers restoring one per ad, up to two per day.
- Raid rewards include pet food, and pets participate in raid battles.

### O24. Energy capacity and run cost

Capybara Go caps energy at 30 and shows it in the home screen's top bar with a countdown to the next point. Every run costs 5 energy, and the run-end screen itself states that further adventures require it. The regeneration rate behind that countdown is never stated outright.

- Energy caps at 30, shown with a countdown to the next point.
- Every run costs 5 energy.
- The regeneration rate itself is never stated.

### O25. Four ways to refill energy

Tapping the energy counter opens every refill option at once: watching an ad for 15 energy with a daily limit, paying 90 gems for 15 energy with a separate daily limit, or claiming a free daily pack of 10 energy that refreshes every 5 hours. A separate "purchase missed stamina" option shows zero remaining purchases without explaining what missed stamina refers to. The Monthly and Lifetime cards each list 50 energy as part of their daily collectible benefits.

- Watching an ad grants 15 energy, limited per day.
- Paying 90 gems grants 15 energy, limited separately per day.
- A free daily pack grants 10 energy and refreshes every 5 hours.
- A "purchase missed stamina" option shows zero remaining purchases.

### O26. Overflow energy arrives as mail

Once the first chapter clears, Capybara Go's mailbox starts receiving messages from an in-game association stating that stamina which overflowed past the cap during regeneration has been reissued, each with its own amount and a six-day claim window. Messages carry different ages, from two days old down to eighteen minutes, and claim-all and delete-all buttons handle them together. At one point the player held far more energy in these unclaimed messages than the cap itself allows.

- Overflow messages carry amounts such as 60 or 17 stamina, each with a six-day claim window.
- Message ages range from two days to eighteen minutes old.
- At one point 249 units of energy sat unclaimed in the inbox, well above the 30 cap.

### O27. Secondary modes use their own tickets

Tower Challenge, the two raid types, and Phantom Sword Island each draw on a separate ticket rather than shared energy. Every Tower Challenge attempt consumes one ticket, including one started immediately after a win, and running out of raid tickets offers restoring one per ad watched, up to two per day. A pack sold in the store includes one of each ticket type.

- Every Tower Challenge attempt, including one started right after a win, consumes one ticket.
- Running out of dragon tickets offers an ad-restore, up to two per day.
- The Dungeon Pack sells one of each ticket type for $0.99.

### O28. Daily and weekly tasks

Once available, Capybara Go's tasks screen splits into a daily section and a weekly section. Daily tasks ask for specific actions, a Black Market purchase, opening chests, clearing a stage, entering the Arena, and completing them advances a claimable daily reward track that also feeds a separate weekly track with its own levels to reach before the week resets. The daily list carries its own countdown.

- Daily tasks include a Black Market purchase, opening three chests, and clearing a stage.
- Daily completions also feed a separate weekly reward track.
- The daily list showed a reset countdown of about one hour.

---

## Goals and progression

Between runs, Capybara Go turns gold and materials into permanent strength: talent levels, a rank title, equipment, and pets. This section covers how each of those systems is unlocked, upgraded, and shown to the player.

### O29. Upgrading talents with gold

Capybara Go's Talents screen holds three stats, health, attack, and defense, each raised by spending gold coins. An attack upgrade costs 240 coins for 3 attack, a health upgrade adds 12 health, and a defense upgrade adds 1 defense, with costs rising as talents advance. The app's pointer guidance directs the first upgrade to attack, and tapping a talent without enough coins opens a gold-purchase offer instead.

- An attack upgrade costs 240 coins for 3 attack.
- A health upgrade adds 12 health; a defense upgrade adds 1 defense.
- Tapping a talent without enough coins opens a gold-purchase offer.

### O30. A talent progress bar with milestones

The talents screen shows a bar counting combined talent levels, paying 720 gold coins at 10 points and an Adventure Badge at 20. Reaching 10 points pays out close to what it cost to get there. The Adventure Badge itself was never reached, so what it does isn't shown.

- Reaching 10 combined talent points pays 720 gold coins.
- Reaching 20 points grants an Adventure Badge, not yet reached.
- The 720-coin reward roughly repays the coins spent reaching that point.

### O31. A rank title ladder

Capybara Go's profile shows the title "Apprentice" and a preview button opening a full ladder of ranks running from Apprentice through Adventurer, Elite, Master, Warrior, and Hero to Elite Legacy, each with its own point threshold. Reaching the second rank added a direct boost to attack, defense, and health. The app never names what unit the thresholds actually count, and the ladder sits on the talents screen, suggesting a tie to talent levels that the app doesn't state outright.

- The rank ladder runs Apprentice, Adventurer, Elite, Master, Warrior, Hero, Elite Legacy.
- Reaching Apprentice 2 added 12 attack, 1 defense, and 48 health.
- The unit counted toward rank thresholds is never named.

### O32. Equipment slots and enhancement

Capybara Go gives the character six equipment slots, one weapon, one armor, two rings, and two necklaces, each item showing a quality, a level out of 10, basic stats, and four further effects shown locked. Items can be equipped, enhanced, or quick-enhanced using power stones. Replacing an equipped item doesn't offer a side-by-side comparison with what's already worn, though items can be sorted by quality and a separate screen lists the character's overall stats.

- Six equipment slots exist: one weapon, one armor, two rings, two necklaces.
- The first crate item, a common Guardian's Ring, showed level 0 of 10, with attack 10, defense 3, and health 10.
- Replacing an item offers no side-by-side comparison with the currently equipped one.

### O33. Merging duplicate equipment

A workshop screen lets the player merge identical equipment items into a higher quality. Two additional copies of a given item are needed to raise it to the next tier, and the quality tiers run from common through great, rare, and epic up to S epic.

- Merging requires two further copies of an identical item.
- Quality tiers: common, great, rare, epic, S epic.

### O34. Unlocking and hatching pets

Pets unlock through their own feature pop-up once the player is far enough into the game. The pets screen shows three battle positions, one open and two locked, with the next stated to open at level four without saying which level it means. Eggs hatch through three routes: watching three ads, or paying 300 or 600 gems for larger quantities. Hatching by ad produced several pets in one sitting, and a hatched pet can be swiped into the open battle position to fight alongside the capybara.

- Three battle positions exist; one open, two locked, next opening at level 4.
- Egg hatch routes: three ads, 300 gems, or 600 gems for a larger batch.
- Ad-based hatching produced several pets, including a parrot, mushrooms, an onion, and a frog, in one sitting.

### O35. Growing and merging pets

Each pet Capybara Go grants carries its own level, battle skills that unlock at higher levels, and an upgrade bar. Growing a pet consumes further copies of the same pet plus pet food. A separate synthesis screen states that surplus pet fragments will combine into a new pet, though no fragments were held to test it. A full list shows every held pet alongside its battle skills.

- A sample pet, the Icewind Fox, is shown at level 1 with 400 health, 100 attack, and 25 defense.
- Growing a pet requires further copies of itself plus pet food.
- No fragments were held, so pet synthesis was not performed.

### O36. Losing routes back to upgrades

Losing a Tower Challenge floor shows a message telling the player to get stronger, with direct buttons to the Equip and Talents screens.

- The loss screen routes directly to Equip and Talents.

### O37. A locked preview of mounts and artifacts

Capybara Go's backpack, unlocked once the first chapter clears, previews a mount and an artifact the player doesn't yet hold: a mount adding damage and speed bonuses, and an artifact adding attack and suppression bonuses. Mounts unlock after a much later chapter, and artifacts later still.

- The previewed mount, Crocodile Overlord, lists a damage boost, damage reduction, and speed bonuses.
- The previewed artifact lists an attack boost and a suppression bonus.
- Mounts unlock after Chapter 4; artifacts after Chapter 6.

---

## Access and eligibility

Capybara Go gates nearly everything behind a long sequence of chapter and survival-day conditions. This section covers what each one unlocks.

### O38. A long chain of chapter gates

Capybara Go states each locked feature's unlock condition directly, almost always a chapter clear or a survival-day count in a named chapter. The backpack and mail open after the first chapter clears; pets after the second; collectibles after the third; mounts and artifacts after later chapters still. Tasks, the Black Market, and the sign-in event all open after the second chapter clears, while friends open after surviving a single day into it. Guilds, Tower Challenge auto-advance, faster battle speed, and a long list of further modes each carry their own stated chapter or survival-day condition, several of them far beyond anything reached so far.

- Backpack and mail unlock after Chapter 1; pets after Chapter 2; collectibles after Chapter 3.
- Tasks, Black Market, and the sign-in event unlock after Chapter 2 clears; Friends after surviving one day in Chapter 2.
- Hard chapters unlock after surviving one day in Chapter 51.

---

## Economy and resources

Capybara Go runs an unusually large number of named currencies and materials, each earned and spent on a different part of the game, plus the chests and shops built around collecting and spending them. This section covers all of it.

### O39. Gold coins

Gold coins are earned inside runs, from events, battles, chests, chapter clears, and Tower floors, and are spent on talent upgrades and inside the Black Market. Gold is also sold directly for money in several packs.

- Gold is earned from runs, battles, chests, chapter clears, and Tower floors.
- The run one summary granted 1,300 coins, bringing the balance to 2,852.
- The Chapter 1 Pack includes 10,000 gold coins as part of its bundle.

### O40. Gems and jade stones

Capybara Go starts the player with 100 gems and grants more for free through the daily pack, the sign-in event, and the carnival's daily gift, while also selling them directly. Gem prices appear on energy refills, both equipment crates, the Limited Secret Chest, and pet egg hatches. Jade stones, a separate currency shown as green gems, are also sold directly, though no use for them appears anywhere else in the game.

- The player starts with 100 gems.
- Free gem grants come from the daily pack, sign-in event, and carnival gift.
- No gem purchase or gem spend takes place.
- Jade stones are sold directly, with no spending use shown anywhere.

### O41. Single-purpose materials

Beyond gold and gems, Capybara Go runs a long list of named, single-purpose resources, power stones for equipment enhancement, several kinds of keys for opening chests, equipment designs, pet food, gold horseshoes for mounts, divine hammers for artifacts, and tickets for each of its secondary modes, each named directly in pack descriptions alongside what it's used for.

- Power stones are earned from Tower floors and spent on equipment enhancement.
- Named single-purpose resources include legendary keys, gold horseshoes, divine hammers, and mode-specific tickets.
- Pack descriptions state each resource's use directly.

### O42. Equipment chests priced three ways

The Adventure Supply Crate opens free once and then costs 80 gems or three ad views, with roughly a 13.5-hour wait for the next free open, and states a guarantee of great-quality equipment within nine opens. The Hero Supply Crate opens with one ad view or a key and states a guarantee of epic equipment within ten opens; watching the ad opened it automatically in one instance and granted a rare item.

- The Adventure Supply Crate's free open recurs roughly every 13.5 hours.
- The Adventure Crate guarantees great equipment within nine opens; the Hero Crate guarantees epic within ten.
- Watching the Hero Crate's ad opened it automatically and granted a great Nomad Staff.

### O43. The Limited Secret Chest

Capybara Go's highest-priced chest costs 320 gems per pull or 2,980 for ten, and states a guarantee of epic equipment within 10 opens and a top-tier result within 60, with every guaranteed pull equally likely among the current rate-up set. A separate information button discloses exact odds without the guarantee applied: 0.65 percent for the top tier, down to 62.35 percent for the most common result. The rate-up set itself changes on its own countdown.

- The chest costs 320 gems per pull, or 2,980 gems for ten.
- Disclosed odds: S epic 0.65 percent, epic 3 percent, rare 9 percent, great 25 percent, common 62.35 percent.
- The rate-up item set changes on a separate countdown of roughly 13 hours 27 minutes.

### O44. The Black Market

Capybara Go's Black Market states it is open only for a limited window at a time and sells chests, power stones, keys, pet-related materials, and pet food for gold or other items, most limited to one purchase each. Gold itself can be obtained here by watching an ad or paying gems, and a guild tab requires guild membership to use.

- The Black Market states an open window as short as roughly one hour at a time.
- Gold can be obtained here by watching an ad or paying gems.
- A Guild tab within the Black Market requires guild membership.

### O45. A ticket-based pet shop

Inside the Timed Growth area, a separate Growth Shop exchanges tickets collected from pet events for specific pets, though the prices of individual pets aren't stated.

- The Growth Shop exchanges event tickets for pets.
- Individual pet prices in tickets are not stated.

---

## Social

Capybara Go's social surface is small: one ranking list available from the very start, and a handful of features still waiting behind later chapters. This section covers both.

### O46. The ranking list

Capybara Go's Ranking screen lists players in order by their longest survived run, alongside each player's current chapter, and is available before any chapter has been cleared. The player's own position showed as 3,092nd. Whether the list shows other players by name isn't stated.

- The Ranking screen orders players by longest survived run.
- The player's position was shown as 3,092nd.
- Ranking is available before any chapter is cleared.

### O47. Social features still locked

Friends, Guilds, and Arena all appear as locked entries with their own stated unlock conditions, and the Black Market's own guild tab likewise requires membership to use. No feature letting the player interact with another identified player is reachable yet.

- Friends, Guilds, and Arena all appear as locked entries with stated unlock conditions.
- No surface for interacting with another identified player is reachable yet.

---

## Reach beyond the app

Capybara Go's only feature that connects a user to something outside the app ties the game account to an external developer account.

### O48. Linking an external account

A badge on the profile leads to a prompt asking the player to link their game account to a Habby ID, which requires entering an email address and creating a separate account with the developer. This step is not completed here. The settings screen separately shows an account identifier alongside quality, language, and sound settings.

- Linking requires an email address and a separate Habby ID account.
- This step is not completed here.
- The settings screen shows an account identifier, quality, language, and sound settings.

---

## Monetization

This section covers Capybara Go's store: its four sections, its packs, and the ads, cards, and offers sold alongside them.

### O49. Store sections

The shop has four bottom tabs: Equipment Shop, Value Picks, Pack Shop, and Top Up, all visible together on first entry. On a later visit the shop opens directly on Top Up.

- The shop has four tabs: Equipment Shop, Value Picks, Pack Shop, Top Up.
- A later visit opened directly on the Top Up tab.

### O50. Value Picks packs

Value Picks lists four packs, each limited to one purchase and marked "10x value."

- Little Elf Pack 1: 360 gems, 5 little elves, 100 pet food for $2.99.
- Little Elf Pack 2: 600 gems, 10 elves, 30 pet eggs for $4.99.
- Equipment Enhance Pack 1: 1,200 gems, 40 equipment designs for $9.99.
- Equipment Enhance Pack 2: 3,600 gems, 120 equipment designs for $29.99.

### O51. Pack Shop daily, weekly, and monthly packs

Pack Shop groups packs into daily packs with a refresh time of about 13 hours, weekly packs, and monthly packs that refresh in 20 days. The daily section includes a free pack of 30 gems marked 8x value, claimable once per day. Purchase limits are one for daily packs, three for weekly packs, and three or ten for monthly packs.

- Daily packs include a free 30-gem pack and six paid packs from $0.99 to $9.99.
- Weekly packs range from $19.99 to $29.99, limited to three purchases each.
- Monthly packs range from $14.99 to $49.99, limited to three or ten purchases.
- Packs carry value labels of 8x, 3x, or 20x.

### O52. Top Up currency packages and first top-up bonus

Top Up sells jade stones and gems for money. Each gem package has its own name and carries a first top-up bonus that doubles the package amount.

- Jade stones are sold from 100 for $0.99 up to 10,000 for $99.99.
- Gems are sold from 120 for $0.99 up to 12,000 for $99.99.
- Each gem package carries its own first-purchase bonus, applied separately per package.

### O53. Chapter 1 Pack

The Equipment Shop offers a Chapter 1 Pack for $2.99, marked 10x value, containing 5 legendary keys, 150 power stones, 10,000 gold coins, and 100 gems. Tapping it opens the platform's payment sheet.

- The pack costs $2.99 and is marked 10x value.
- It contains 5 legendary keys, 150 power stones, 10,000 gold coins, and 100 gems.
- The pack states each item's intended use directly in its listing.

### O54. Rewarded ad prompts and Ad-Free Card cross-sell

Ads are offered in exchange for specific benefits: 15 energy, an Adventure Supply Crate open for three ads, a Hero Supply Crate open for one ad, pet egg hatches for three ads, dragon tickets, and Black Market gold. Each ad offer opens a prompt with cancel and watch options, and beneath it Capybara Go shows the Ad-Free Card offer for $9.99. A sidebar video entry showed no video available at one point.

- Ad offers carry daily limits, shown as a remaining-chances count.
- The Ad-Free Card offer, priced at $9.99, appears beneath every ad prompt.
- A sidebar "watch videos for rewards" entry showed no video available at one point.

### O55. Battle Pass

The Growth Fund screen features a Battle Pass, "Season 1: Bad Guys," with the text "complete daily tasks to gain pass experience" and an end time of 15 days 2 hours. It shows 30 reward positions, with a free lane holding one item per position and a Battle Pass lane holding two, and carries an inactive badge.

- The Battle Pass shows an end time of 15 days 2 hours.
- It lists 30 reward positions with a 1:2 free-to-paid ratio.
- The Battle Pass price is not stated anywhere.

### O56. Funds

Growth Fund lists several funds, each a reward track tied to progress in one part of the app, with a free reward lane and a larger fund reward lane unlocked by purchase. The Growth Fund button features the Battle Pass, Talent Fund, Tower Challenge Fund, and Dungeon Fund, all marked inactive, with further funds listed at the bottom of each fund screen. Only the Battle Pass and the Main Quest Fund show end timers.

- Six funds run alongside the Battle Pass: Talent, Tower Challenge, Dungeon, Main Quest, Adventure, Guru, and Mythic Treasure Funds.
- Prices range from $9.99 to $29.99; stated totals range from 125 legendary keys to nearly 75,000 gems.
- No fund states a consistent multiplier between its two lanes.
- Whether free-lane rewards can be claimed without purchasing the fund is not shown.

### O57. Privilege Card

Privilege Card opens with Daily Benefits, a daily reward claimable once per day, followed by a countdown to the end of the day after which it can be claimed again. Below it, an inactive Super Membership states that holding lifetime and monthly cards grants exclusive frames. The screen then lists four cards.

- The Ad-Free Card costs $9.99, granting 2,400 gems immediately and 50 gems collectible daily.
- The Monthly Card costs $4.99 for 30 days, granting 600 gems immediately and 50 energy plus 200 gems daily.
- The Lifetime Card costs $29.99, granting 3,600 gems immediately and 50 energy plus 200 gems daily for the card's lifetime.
- The Automine Card costs 1,200 gems and 40 pickaxes on purchase and cannot be bought until Goblin Miner unlocks.
- No card is purchased here.

### O58. Newbie Gifts 3-Day Deluxe Pack

When run two reached day 59, Capybara Go offered a 3-Day Deluxe Pack for $0.99. The pack lists rewards by day: day 1 a magic ring, 10 silver keys, 5,000 coins, and 120 gems; day 2 a cosmetic item and 10 silver keys; day 3 10 silver keys and 20,000 gold coins. The same offer opens from the Newbie Gifts button on the home screen.

- The pack costs $0.99 and lists a different reward for each of its three days.
- Day 2's reward is a cosmetic item for the character.
- Whether day 2 and day 3 rewards release automatically on those days isn't stated.

### O59. Triggered offers

After clearing Chapter 2, Capybara Go shows a Weapon Special Offer Pack pop-up with a purchase time of 2 hours 51 minutes, offering a choice of one of seven weapons plus 600 gems for $4.99. Tapping a talent without enough gold opens an item acquisition screen showing the current gold quantity, a Gold Supplies offer of 62,000 gold and 600 gems for $4.99, and alternative sources of Black Market purchase and travel.

- The Weapon Special Offer Pack carries a purchase window of 2 hours 51 minutes.
- It offers a choice of one of seven weapons plus 600 gems for $4.99.
- The Gold Supplies offer sells 62,000 gold and 600 gems for $4.99.

---

## Return triggers

Capybara Go surfaces countdowns almost everywhere, and times its biggest offers to specific moments rather than showing them all at once. This section covers the sign-in event, the timers that run across the rest of the app, and the two timed events that reward activity within their own multi-day windows.

### O60. The Seven-Day Sign-In Event

Once the second chapter clears, Capybara Go opens a seven-day sign-in event with a different reward for each day, from 50 gems on day one, claimable immediately, up to a named mythic pet and a chest on day seven. What happens after a missed day isn't shown, and which of two middle days holds a stated 100-gem reward isn't clear from the event's own listing.

- Day 1 grants 50 gems, claimable immediately; day 7 grants a mythic pet and an amethyst chest.
- The sign-in event does not appear until the second chapter is cleared.
- What happens after a missed day is not shown.

### O61. Countdowns across the app

Capybara Go runs countdowns on nearly every timed surface at once: energy regeneration, the free daily energy pack, the Pack Shop's daily and monthly refreshes, the Adventure Supply Crate's free open, the Limited Secret Chest's rate-up rotation, the Black Market's open window, the daily task reset, the Privilege Card's daily benefit, and the six-day window on overflow stamina mail. A notification permission is requested at first launch, though no notification arrives afterward.

- Countdowns appear on energy, the free daily pack, Pack Shop refreshes, the Adventure Crate, the Limited Secret Chest, the Black Market, daily tasks, and the Privilege Card.
- Overflow stamina mail carries its own six-day claim countdown.
- A notification permission is requested at launch, but no notification arrives afterward.

### O62. Stated end times across events and offers

Every time-limited surface in Capybara Go states its own end time or duration: seven days for Newbie Gifts, ten for the Carnival, fifteen days and two hours for the Battle Pass, eight days and two hours for the Main Quest Fund, five days each for the two pet events, under three hours for the Weapon Special Offer Pack, and a fixed calendar day for Goblin Miner's opening.

- Newbie Gifts: seven days. Seven-Day Carnival: ten days. Battle Pass: 15 days 2 hours.
- Main Quest Fund: 8 days 2 hours. Pet Auspice and Stage Growth: five days each.
- Weapon Special Offer Pack: 2 hours 51 minutes. Goblin Miner: opens on day seven of server opening.

### O63. The Seven-Day Carnival

A ten-day carnival event runs a point bar from 0 to 150 with chest rewards at fixed thresholds, fed by a list of tasks assigned to each of the event's days and covering actions like clearing a stage or opening chests. A separate pack tab offers a free daily gift alongside paid packs that change what they sell depending on the day.

- The carnival's activity bar runs from 0 to 150, with chest rewards at 30, 60, 90, and 120.
- Tasks are assigned per day across twelve stages.
- The pack tab's paid offerings change by day, equipment packs, pet packs, chest packs, and energy packs on different days.

### O64. Timed pet growth events

Two five-day events, Pet Auspice and Stage Growth, run pet-focused reward tracks. Pet Auspice pays out at cumulative thresholds of eggs opened, and both events carry their own leaderboard and ranking rewards, with Pet Auspice additionally offering a shop that exchanges event-specific tickets for pets.

- Pet Auspice pays out at 500, 1,000, 2,000, 3,000, and 4,000 cumulative eggs opened.
- Both events carry their own leaderboard and ranking rewards.
- Pet Auspice's Growth Shop exchanges event tickets for specific pets.

