# Library Manifest — analysis re-verification working set

> **Read-only inventory.** Generated 15 Jun 2026 from `site/src/content/apps/*.json` (the converted, shipping content) joined to `sources/analyses/`. Nothing in the repo was modified. Replaces and extends the earlier missing-write-ups inventory; treat it as the single source of truth for what exists today.

## Totals

- **Apps in the library:** 31 — 25 published (public + subscriber) + 6 report-only.
- **Case-study breakdown pages that ship:** 25 (every published app; all carry a system map). Report-only apps render no page at all.
- **Relationships across the library:** 220 — **83 complete**, **32 stub**, **105 empty**.

## How to read this

- **Visibility** — `public` (free, on the site), `subscriber` (gated), `report-only` (in the data and the category reports, but never rendered as a page).
- **Breakdown page** — *Full* = ships a `/case-studies/<id>/` page with a system map and/or written mechanic breakdowns. *None* = report-only, no page. No published app is mechanics-only: all 25 carry a system map, so every published case-study page has breakdown substance even where individual write-ups are empty.
- **Write-up grade per relationship** — derived from the `writeup` object on each app→mechanic link:
  - **complete** = all four narrative parts present (`observed`, `noting`, `presented`, `findings`).
  - **stub** = a `writeup` object exists but one or more of those four parts is missing.
  - **empty** = `writeup` is `null`; only the depth grade and (sometimes) suggested screenshots exist.
- **Dates** — read from the metadata header *inside* each analysis file. Git last-commit date is a uniform 2026-06-11 for every analysis (one bulk import) and carries no per-file signal; the in-file `Last updated` is the only meaningful per-analysis date.

> ⚠️ **Scope note:** `gymverse.md` is the analysis flagged as containing fabricated detail. What depends on it today: the **Gymverse** subscriber case-study page (1 stub + 2 empty write-ups + a system map) and its 3 mechanic-example appearances. It holds no free slot and is not referenced by the homepage.

## Public — free, on the site (2 apps)

_Group write-up totals: 8 complete, 1 stub, 4 empty._

| App | id | Category | Page | Mechanics | C / S / E | Analysis | Updated |
|---|---|---|---|---|---|---|---|
| Strava | `strava` | Fitness | full | 8 | 6/0/2 | `strava.md` | 15 May 2026 |
| Uptime | `uptime` | Learning | full | 5 | 2/1/2 | `uptime.md` | 18 May 2026 |

<details><summary>Per-app relationship detail</summary>

#### Strava  ·  `strava`  · _permanent free_

- **Category:** Fitness  |  **Visibility:** public  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/strava.md`  |  **Analysis date:** 16–20 Apr 2026 (2 sessions)  |  **Last updated:** 15 May 2026
- **Relationships:** 8 — 6 complete, 0 stub, 2 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Achievements / Milestones | core | complete |
  | Challenges | core | complete |
  | Leaderboards | core | complete |
  | Social Feed | core | complete |
  | Streak / Streak Bonus | core | complete |
  | Community / Groups | supporting | complete |
  | Daily / Weekly Quests | supporting | empty |
  | XP / Leveling | shallow | empty |

#### Uptime  ·  `uptime`  · _permanent free_

- **Category:** Learning  |  **Visibility:** public  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/uptime.md`  |  **Analysis date:** 18 May 2026  |  **Last updated:** 18 May 2026
- **Relationships:** 5 — 2 complete, 1 stub, 2 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Streak / Streak Bonus | core | complete |
  | Achievements / Milestones | supporting | complete |
  | Daily Login Reward | shallow | empty |
  | Gifting | shallow | stub |
  | Set Collection / Completion | shallow | empty |

</details>

## Subscriber — gated (23 apps)

_Group write-up totals: 75 complete, 31 stub, 85 empty._

| App | id | Category | Page | Mechanics | C / S / E | Analysis | Updated |
|---|---|---|---|---|---|---|---|
| Calm | `calm` | Wellness | full | 5 | 3/0/2 | `calm.md` | 15 May 2026 |
| Canva | `canva` | Design | full | 4 | 3/0/1 | `canva.md` | 15 May 2026 |
| Capybara Go! | `capybara-go` | Roguelite | full | 14 | 12/0/2 | `capybara-go.md` | 15 May 2026 |
| Chrome Valley Customs | `chrome-valley-customs` | Puzzle / Meta | full | 9 | 2/1/6 | `chrome-valley-customs.md` | 19 May 2026 |
| Clash of Clans | `clash-of-clans` | Strategy | full | 12 | 0/2/10 | `clash-of-clans.md` | 20 May 2026 |
| FC Mobile | `fc-mobile` | Sports Game | full | 15 | 11/0/4 | `fc-mobile.md` | 15 May 2026 |
| FIFA Panini Collection | `fifa-panini-collection` | Sports / Collectibles | full | 5 | 4/1/0 | `fifa-panini-collection.md` | 15 May 2026 |
| FitOn | `fiton` | Fitness | full | 7 | 0/3/4 | `fiton.md` | 20 May 2026 |
| Fortune City | `fortune-city` | Finance | full | 10 | 4/4/2 | `fortune-city.md` | 17 May 2026 |
| Freeletics | `freeletics` | Fitness | full | 6 | 0/2/4 | `freeletics.md` | 20 May 2026 |
| Gymverse | `gymverse` | Fitness | full | 3 | 0/1/2 | `gymverse.md` | 20 May 2026 |
| Insight Timer | `insight-timer` | Wellness | full | 7 | 5/0/2 | `insight-timer.md` | 15 May 2026 |
| Ladder | `ladder` | Fitness | full | 7 | 0/4/3 | `ladder.md` | 19 May 2026 |
| Liftoff | `liftoff` | Fitness | full | 11 | 0/2/9 | `liftoff.md` | 20 May 2026 |
| Match Creek Motors | `match-creek-motors` | Puzzle / Meta | full | 8 | 0/4/4 | `match-creek-motors.md` | 19 May 2026 |
| PicsArt | `picsart` | Creative | full | 6 | 3/0/3 | `picsart.md` | 15 May 2026 |
| Royal Match | `royal-match` | Casual Game | full | 14 | 7/0/7 | `royal-match.md` | 15 May 2026 |
| Solitaire Grand Harvest | `solitaire-grand-harvest` | Casual Game | full | 10 | 5/0/5 | `solitaire-grand-harvest.md` | 15 May 2026 |
| Star Wars: Galaxy of Heroes | `swgoh` | Collectible RPG | full | 13 | 5/5/3 | `star-wars-swgoh.md` | 19 May 2026 |
| Steam (iOS) | `steam` | Gaming Platform | full | 6 | 3/0/3 | `steam.md` | 15 May 2026 |
| Subway Surfers | `subway-surfers` | Endless Runner | full | 11 | 4/2/5 | `subway-surfers.md` | 15 May 2026 |
| Tiimo | `tiimo` | Productivity | full | 5 | 2/0/3 | `tiimo.md` | 18 May 2026 |
| Wispr Flow | `wispr-flow` | Productivity | full | 3 | 2/0/1 | `wispr-flow.md` | 15 May 2026 |

<details><summary>Per-app relationship detail</summary>

#### Calm  ·  `calm`

- **Category:** Wellness  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/calm.md`  |  **Analysis date:** 20 Apr 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 5 — 3 complete, 0 stub, 2 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Streak / Streak Bonus | core | complete |
  | Daily Login Reward | supporting | complete |
  | Achievements / Milestones | shallow | empty |
  | Challenges | shallow | empty |
  | Gifting | shallow | complete |

#### Canva  ·  `canva`

- **Category:** Design  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/canva.md`  |  **Analysis date:** 25 Apr 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 4 — 3 complete, 0 stub, 1 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Achievements / Milestones | supporting | complete |
  | Credits / Tokens | supporting | complete |
  | Challenges | shallow | complete |
  | Variable Reward Schedule | shallow | empty |

#### Capybara Go!  ·  `capybara-go`

- **Category:** Roguelite  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/capybara-go.md`  |  **Analysis date:** 12–15 May 2026 (3 sessions)  |  **Last updated:** 15 May 2026
- **Relationships:** 14 — 12 complete, 0 stub, 2 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Energy / Lives | core | complete |
  | Variable Reward Schedule | core | complete |
  | XP / Leveling | core | complete |
  | Achievements / Milestones | supporting | complete |
  | Ads | supporting | complete |
  | Daily / Weekly Quests | supporting | complete |
  | Daily Login Reward | supporting | complete |
  | First-Purchase Bonus | supporting | complete |
  | Leaderboards | supporting | complete |
  | Limited-Time Events | supporting | empty |
  | Season Pass / Battle Pass | supporting | complete |
  | Soft Currency | supporting | empty |
  | Clans / Guilds | shallow | complete |
  | Cosmetics | shallow | complete |

#### Chrome Valley Customs  ·  `chrome-valley-customs`

- **Category:** Puzzle / Meta  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/chrome-valley-customs.md`  |  **Analysis date:** 03 Mar 2026  |  **Last updated:** 19 May 2026
- **Relationships:** 9 — 2 complete, 1 stub, 6 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Energy / Lives | core | complete |
  | Passive Construction Meta | core | empty |
  | Variable Reward Schedule | core | stub |
  | Cosmetics | supporting | empty |
  | Daily / Weekly Quests | supporting | empty |
  | Leaderboards | supporting | empty |
  | Limited-Time Events | supporting | complete |
  | Soft Currency | supporting | empty |
  | Achievements / Milestones | shallow | empty |

#### Clash of Clans  ·  `clash-of-clans`

- **Category:** Strategy  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/clash-of-clans.md`  |  **Analysis date:** 02–03 Apr 2026 (4 sessions)  |  **Last updated:** 20 May 2026
- **Relationships:** 12 — 0 complete, 2 stub, 10 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Clans / Guilds | core | stub |
  | Passive Construction Meta | core | empty |
  | Achievements / Milestones | supporting | stub |
  | Daily / Weekly Quests | supporting | empty |
  | Gifting | supporting | empty |
  | Hard Currency | supporting | empty |
  | Leaderboards | supporting | empty |
  | Limited-Time Events | supporting | empty |
  | Soft Currency | supporting | empty |
  | Variable Reward Schedule | supporting | empty |
  | XP / Leveling | supporting | empty |
  | Cosmetics | shallow | empty |

#### FC Mobile  ·  `fc-mobile`

- **Category:** Sports Game  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/fc-mobile.md`  |  **Analysis date:** 06 Apr – 15 May 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 15 — 11 complete, 0 stub, 4 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Daily / Weekly Quests | core | complete |
  | Daily Login Reward | core | complete |
  | Limited-Time Events | core | complete |
  | Monthly Card | core | complete |
  | Season Pass / Battle Pass | core | complete |
  | Variable Reward Schedule | core | complete |
  | Achievements / Milestones | supporting | empty |
  | Ads | supporting | complete |
  | Clans / Guilds | supporting | complete |
  | First-Purchase Bonus | supporting | complete |
  | Hard Currency | supporting | empty |
  | Leaderboards | supporting | complete |
  | Set Collection / Completion | supporting | empty |
  | Soft Currency | supporting | empty |
  | XP / Leveling | supporting | complete |

#### FIFA Panini Collection  ·  `fifa-panini-collection`

- **Category:** Sports / Collectibles  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/fifa-panini-collection.md`  |  **Analysis date:** 15 May 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 5 — 4 complete, 1 stub, 0 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Set Collection / Completion | core | complete |
  | Achievements / Milestones | supporting | stub |
  | Challenges | supporting | complete |
  | Daily Login Reward | supporting | complete |
  | Clans / Guilds | shallow | complete |

#### FitOn  ·  `fiton`

- **Category:** Fitness  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/fiton.md`  |  **Analysis date:** 25 Feb 2026  |  **Last updated:** 20 May 2026
- **Relationships:** 7 — 0 complete, 3 stub, 4 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Achievements / Milestones | core | stub |
  | Community / Groups | core | stub |
  | Limited-Time Events | supporting | empty |
  | Social Feed | supporting | empty |
  | Streak / Streak Bonus | supporting | stub |
  | Challenges | shallow | empty |
  | Daily / Weekly Quests | shallow | empty |

#### Fortune City  ·  `fortune-city`

- **Category:** Finance  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/fortune-city.md`  |  **Analysis date:** 13–17 May 2026 (2 sessions)  |  **Last updated:** 17 May 2026
- **Relationships:** 10 — 4 complete, 4 stub, 2 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Achievements / Milestones | core | complete |
  | Ads | core | complete |
  | Daily Login Reward | core | complete |
  | Passive Construction Meta | core | empty |
  | Daily / Weekly Quests | supporting | complete |
  | Soft Currency | supporting | empty |
  | Variable Reward Schedule | supporting | stub |
  | XP / Leveling | supporting | stub |
  | Clans / Guilds | shallow | stub |
  | Set Collection / Completion | shallow | stub |

#### Freeletics  ·  `freeletics`

- **Category:** Fitness  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/freeletics.md`  |  **Analysis date:** 25 Feb 2026  |  **Last updated:** 20 May 2026
- **Relationships:** 6 — 0 complete, 2 stub, 4 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Achievements / Milestones | supporting | stub |
  | Challenges | supporting | stub |
  | Leaderboards | supporting | empty |
  | Social Feed | supporting | empty |
  | Daily / Weekly Quests | shallow | empty |
  | XP / Leveling | shallow | empty |

#### Gymverse  ·  `gymverse`

- **Category:** Fitness  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/gymverse.md`  |  **Analysis date:** 25 Feb 2026  |  **Last updated:** 20 May 2026
- **Relationships:** 3 — 0 complete, 1 stub, 2 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Achievements / Milestones | core | empty |
  | Streak / Streak Bonus | core | stub |
  | Daily / Weekly Quests | supporting | empty |

#### Insight Timer  ·  `insight-timer`

- **Category:** Wellness  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/insight-timer.md`  |  **Analysis date:** 20 Apr 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 7 — 5 complete, 0 stub, 2 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Streak / Streak Bonus | core | complete |
  | Achievements / Milestones | supporting | complete |
  | Challenges | supporting | complete |
  | Community / Groups | supporting | complete |
  | Daily Login Reward | supporting | empty |
  | Social Feed | shallow | complete |
  | XP / Leveling | shallow | empty |

#### Ladder  ·  `ladder`

- **Category:** Fitness  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/ladder.md`  |  **Analysis date:** 24 Feb 2026  |  **Last updated:** 19 May 2026
- **Relationships:** 7 — 0 complete, 4 stub, 3 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Challenges | core | stub |
  | Community / Groups | core | stub |
  | Streak / Streak Bonus | core | stub |
  | Achievements / Milestones | supporting | stub |
  | Social Feed | supporting | empty |
  | Daily / Weekly Quests | shallow | empty |
  | Gifting | shallow | empty |

#### Liftoff  ·  `liftoff`

- **Category:** Fitness  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/liftoff.md`  |  **Analysis date:** 24 Feb 2026  |  **Last updated:** 20 May 2026
- **Relationships:** 11 — 0 complete, 2 stub, 9 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Leaderboards | core | empty |
  | XP / Leveling | core | stub |
  | Achievements / Milestones | supporting | empty |
  | Cosmetics | supporting | empty |
  | Daily / Weekly Quests | supporting | empty |
  | Hard Currency | supporting | empty |
  | Social Feed | supporting | empty |
  | Soft Currency | supporting | empty |
  | Variable Reward Schedule | supporting | empty |
  | Challenges | shallow | empty |
  | Streak / Streak Bonus | shallow | stub |

#### Match Creek Motors  ·  `match-creek-motors`

- **Category:** Puzzle / Meta  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/match-creek-motors.md`  |  **Analysis date:** 05 Mar 2026  |  **Last updated:** 19 May 2026
- **Relationships:** 8 — 0 complete, 4 stub, 4 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Passive Construction Meta | core | empty |
  | Achievements / Milestones | supporting | stub |
  | Energy / Lives | supporting | stub |
  | Leaderboards | supporting | stub |
  | Soft Currency | supporting | empty |
  | Variable Reward Schedule | supporting | stub |
  | Daily / Weekly Quests | shallow | empty |
  | Limited-Time Events | shallow | empty |

#### PicsArt  ·  `picsart`

- **Category:** Creative  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/picsart.md`  |  **Analysis date:** 26 Apr 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 6 — 3 complete, 0 stub, 3 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Challenges | core | complete |
  | Social Feed | core | complete |
  | Community / Groups | supporting | empty |
  | Credits / Tokens | supporting | complete |
  | Achievements / Milestones | shallow | empty |
  | Cosmetics | shallow | empty |

#### Royal Match  ·  `royal-match`

- **Category:** Casual Game  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/royal-match.md`  |  **Analysis date:** 03 Apr 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 14 — 7 complete, 0 stub, 7 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Clans / Guilds | core | complete |
  | Energy / Lives | core | complete |
  | Limited-Time Events | core | complete |
  | Passive Construction Meta | core | empty |
  | Season Pass / Battle Pass | core | complete |
  | Achievements / Milestones | supporting | empty |
  | Gifting | supporting | complete |
  | Hard Currency | supporting | empty |
  | Leaderboards | supporting | empty |
  | Set Collection / Completion | supporting | complete |
  | Soft Currency | supporting | empty |
  | Variable Reward Schedule | supporting | complete |
  | Cosmetics | shallow | empty |
  | Daily Login Reward | shallow | empty |

#### Solitaire Grand Harvest  ·  `solitaire-grand-harvest`

- **Category:** Casual Game  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/solitaire-grand-harvest.md`  |  **Analysis date:** 03 Apr 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 10 — 5 complete, 0 stub, 5 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Daily Login Reward | core | complete |
  | Limited-Time Events | core | complete |
  | Piggy Bank | core | complete |
  | Variable Reward Schedule | core | complete |
  | Hard Currency | supporting | empty |
  | Season Pass / Battle Pass | supporting | empty |
  | Set Collection / Completion | supporting | complete |
  | Soft Currency | supporting | empty |
  | XP / Leveling | supporting | empty |
  | Achievements / Milestones | shallow | empty |

#### Star Wars: Galaxy of Heroes  ·  `swgoh`

- **Category:** Collectible RPG  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/star-wars-swgoh.md`  |  **Analysis date:** 05–06 Apr 2026 (3 sessions)  |  **Last updated:** 19 May 2026
- **Relationships:** 13 — 5 complete, 5 stub, 3 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Daily / Weekly Quests | core | complete |
  | Daily Login Reward | core | complete |
  | Energy / Lives | core | stub |
  | Season Pass / Battle Pass | core | complete |
  | Set Collection / Completion | core | complete |
  | Variable Reward Schedule | core | complete |
  | Achievements / Milestones | supporting | stub |
  | Clans / Guilds | supporting | stub |
  | Hard Currency | supporting | empty |
  | Leaderboards | supporting | stub |
  | Limited-Time Events | supporting | stub |
  | Soft Currency | supporting | empty |
  | Social Feed | shallow | empty |

#### Steam (iOS)  ·  `steam`

- **Category:** Gaming Platform  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/steam.md`  |  **Analysis date:** 11 May 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 6 — 3 complete, 0 stub, 3 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Cosmetics | core | complete |
  | Achievements / Milestones | supporting | complete |
  | Credits / Tokens | supporting | complete |
  | Hard Currency | supporting | empty |
  | Community / Groups | shallow | empty |
  | Variable Reward Schedule | shallow | empty |

#### Subway Surfers  ·  `subway-surfers`

- **Category:** Endless Runner  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/subway-surfers.md`  |  **Analysis date:** 07 May 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 11 — 4 complete, 2 stub, 5 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Ads | core | complete |
  | Cosmetics | core | complete |
  | Daily / Weekly Quests | core | empty |
  | Daily Login Reward | core | complete |
  | Achievements / Milestones | supporting | stub |
  | Hard Currency | supporting | empty |
  | Leaderboards | supporting | empty |
  | Limited-Time Events | supporting | empty |
  | Soft Currency | supporting | empty |
  | Variable Reward Schedule | supporting | complete |
  | Set Collection / Completion | shallow | stub |

#### Tiimo  ·  `tiimo`

- **Category:** Productivity  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/tiimo.md`  |  **Analysis date:** 18 May 2026  |  **Last updated:** 18 May 2026
- **Relationships:** 5 — 2 complete, 0 stub, 3 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Achievements / Milestones | core | complete |
  | Streak / Streak Bonus | core | complete |
  | Challenges | shallow | empty |
  | Daily Login Reward | shallow | empty |
  | XP / Leveling | shallow | empty |

#### Wispr Flow  ·  `wispr-flow`

- **Category:** Productivity  |  **Visibility:** subscriber  |  **Breakdown page:** Full breakdown  |  **System map:** yes
- **Analysis file:** `sources/analyses/wispr-flow.md`  |  **Analysis date:** 26 Apr 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 3 — 2 complete, 0 stub, 1 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Achievements / Milestones | supporting | complete |
  | Streak / Streak Bonus | supporting | complete |
  | Gifting | shallow | empty |

</details>

## Report-only — not rendered (6 apps)

_Group write-up totals: 0 complete, 0 stub, 16 empty._

| App | id | Category | Page | Mechanics | C / S / E | Analysis | Updated |
|---|---|---|---|---|---|---|---|
| Acorns | `acorns` | Finance / Micro-investing | none | 6 | 0/0/6 | `acorns.md` | 04 Jun 2026 |
| Cleo | `cleo` | Finance / AI Budgeting | none | 6 | 0/0/6 | `cleo.md` | 04 Jun 2026 |
| Dave | `dave` | Finance / Neo-bank + Cash Advance | none | 3 | 0/0/3 | `dave.md` | 04 Jun 2026 |
| George App (Erste Bank Serbia) | `george-app-erste-serbia` | Banking / Finance | none | 0 | 0/0/0 | `george-erste-bank.md` | 15 May 2026 |
| Orbit | `orbit` | Finance / Subscription Management | none | 0 | 0/0/0 | `orbit.md` | 04 Jun 2026 |
| Starling Bank | `starling-bank` | Finance / Banking (Neo-bank) | none | 1 | 0/0/1 | `starling-bank.md` | 04 Jun 2026 |

<details><summary>Per-app relationship detail</summary>

#### Acorns  ·  `acorns`

- **Category:** Finance / Micro-investing  |  **Visibility:** report-only  |  **Breakdown page:** None (report-only)  |  **System map:** no
- **Analysis file:** `sources/analyses/acorns.md`  |  **Analysis date:** 02 Jun 2026  |  **Last updated:** 04 Jun 2026
- **Relationships:** 6 — 0 complete, 0 stub, 6 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Piggy Bank | core | empty |
  | Soft Currency | supporting | empty |
  | Achievements / Milestones | shallow | empty |
  | Daily / Weekly Quests | shallow | empty |
  | Set Collection / Completion | shallow | empty |
  | Variable Reward Schedule | shallow | empty |

#### Cleo  ·  `cleo`

- **Category:** Finance / AI Budgeting  |  **Visibility:** report-only  |  **Breakdown page:** None (report-only)  |  **System map:** no
- **Analysis file:** `sources/analyses/cleo.md`  |  **Analysis date:** 04 Jun 2026  |  **Last updated:** 04 Jun 2026
- **Relationships:** 6 — 0 complete, 0 stub, 6 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Challenges | supporting | empty |
  | Daily / Weekly Quests | supporting | empty |
  | Streak / Streak Bonus | supporting | empty |
  | Achievements / Milestones | shallow | empty |
  | Gifting | shallow | empty |
  | Variable Reward Schedule | shallow | empty |

#### Dave  ·  `dave`

- **Category:** Finance / Neo-bank + Cash Advance  |  **Visibility:** report-only  |  **Breakdown page:** None (report-only)  |  **System map:** no
- **Analysis file:** `sources/analyses/dave.md`  |  **Analysis date:** 03 Jun 2026  |  **Last updated:** 04 Jun 2026
- **Relationships:** 3 — 0 complete, 0 stub, 3 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Piggy Bank | supporting | empty |
  | Gifting | shallow | empty |
  | Variable Reward Schedule | shallow | empty |

#### George App (Erste Bank Serbia)  ·  `george-app-erste-serbia`

- **Category:** Banking / Finance  |  **Visibility:** report-only  |  **Breakdown page:** None (report-only)  |  **System map:** no
- **Analysis file:** `sources/analyses/george-erste-bank.md`  |  **Analysis date:** 13 May 2026  |  **Last updated:** 15 May 2026
- **Relationships:** 0 — 0 complete, 0 stub, 0 empty

  _No mechanics mapped._

#### Orbit  ·  `orbit`

- **Category:** Finance / Subscription Management  |  **Visibility:** report-only  |  **Breakdown page:** None (report-only)  |  **System map:** no
- **Analysis file:** `sources/analyses/orbit.md`  |  **Analysis date:** 04 Jun 2026  |  **Last updated:** 04 Jun 2026
- **Relationships:** 0 — 0 complete, 0 stub, 0 empty

  _No mechanics mapped._

#### Starling Bank  ·  `starling-bank`

- **Category:** Finance / Banking (Neo-bank)  |  **Visibility:** report-only  |  **Breakdown page:** None (report-only)  |  **System map:** no
- **Analysis file:** `sources/analyses/starling-bank.md`  |  **Analysis date:** 02 Jun 2026  |  **Last updated:** 04 Jun 2026
- **Relationships:** 1 — 0 complete, 0 stub, 1 empty

  | Mechanic | Depth | Write-up |
  |---|---|---|
  | Gifting | shallow | empty |

</details>
