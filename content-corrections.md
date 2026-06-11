# Content Corrections Addendum

*GameBiz Consulting, June 2026. This addendum extends the migration brief. Apply it during the content conversion (Stage 1 onward). Every app analysis has now been audited against the library data; these are the confirmed corrections. The original analysis files in /sources/analyses/ are the evidence layer and the final authority on what was observed.*

## 1. The analyses join the repository

The /sources/analyses/ folder contains the original analysis markdown file for each of the 25 apps, plus the analysis prompt that produced them. These are source material, never deployed. Future app imports will arrive as files in this same format.

## 2. Add a depth field to every app-mechanic relationship

Each relationship gets a depth value: `core`, `supporting`, `shallow`, or `unusual`, imported from the analysis files (each observed mechanic carries its grade in the section heading). Depth is recorded for everything; how each depth level displays is governed by the design templates (core and supporting prominent, shallow quiet).

## 3. Rebuild the app-mechanic relationships from the analyses

The relationship set for each app is the union of:

(a) every mechanic with an observed section in the app's analysis file, with its depth, and
(b) the following relationships whose evidence lives outside a dedicated section but is documented in the analysis and has an existing write-up. Preserve their write-ups and assign these depths:

- gifting → royal-match (supporting; evidence in the teams section: life sharing, card requests)
- gifting → clash-of-clans (supporting; evidence in the clans section: troop and spell donation; no write-up yet, add to the to-write list)
- set-collection → subway-surfers (shallow; Collections tab locked at multiplier 7, character item gathering)
- first-purchase-bonus → fc-mobile (supporting; 2x first top-up tiers in the monetization table)
- first-purchase-bonus → capybara-go (supporting; first top-up doubles gems in the monetization table)
- cosmetics → capybara-go (shallow; cosmetic frames and items as event rewards)
- credits-tokens → canva (supporting), → steam (supporting), → picsart (supporting); write-ups exist for all three

MINUS the confirmed drop list (no evidence or contradicted by the analyses; delete the relationships and any orphaned references):

- energy-lives → solitaire-grand-harvest (the analysis explicitly rejects the mapping; move the write-up's material on depletion-triggered purchase offers into the case study's monetization narrative before deleting the relationship)
- streak → freeletics
- daily-login-reward → fiton
- daily-login-reward → clash-of-clans
- limited-time-events → strava
- challenges → clash-of-clans
- xp-leveling → gymverse
- credits-tokens → liftoff
- ads → chrome-valley-customs
- ads → match-creek-motors
- gifting → star-wars-swgoh

Ruling for Strava: its clubs are community-groups, not clans-guilds. Keep the existing community-groups relationship and write-up; do not add clans-guilds. (The analysis file classifies clubs as clans-guilds; this ruling overrides it, and the analysis prompt has been updated so future analyses follow it.)

## 4. Three new library mechanics

Add to the mechanics library: `hard-currency`, `soft-currency` (Monetization), and `passive-construction-meta` (Retention). Their definitions come from the updated analysis prompt in /sources/. Seed their app relationships from the analyses:

- passive-construction-meta: clash-of-clans (core), chrome-valley-customs (core), match-creek-motors (core)
- hard-currency and soft-currency: harvest the relationships from the "Unrecognized mechanics" sections of the analysis files, where each currency observation is documented per app with its evidence

The three new mechanic pages render with the definition plus whatever computed example relationships exist; their long-form write-ups join the to-write list. The mechanics count shown anywhere on the site must be computed, never hardcoded, so 22 becoming 25 happens by itself.

## 5. The to-write list grows

Add to the existing to-write list from Stage 0: the gifting → clash-of-clans write-up, and the mechanic-page write-ups for the three new mechanics.

## Working rule

Where this addendum and the old data.js disagree, this addendum wins. Where this addendum is silent, the analyses win. If a conflict appears that neither covers, ask before deciding.
