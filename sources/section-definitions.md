# The nine sections: reference definitions

The canonical copy of these definitions lives in `app-analysis-prompt-v4.1.md`, outside this repo. This file is the reference for work done here — if the two ever disagree, the external copy governs.

Each definition says what the section is, what does not belong, and the boundary that decides a contested case. The test throughout: a reader browsing one section across every app should be reading about the same thing every time.

---

## 1. Onboarding and first run

**What it is:** everything from first launch to the first moment the user acts without being led. Store listing, permissions, consent, account creation, identity checks, any connection the product requires before it works, guided tutorials, and the first screen the user faces on their own.

**What does not belong:** anything encountered after that point, even if it's the user's first time seeing it. A feature unlocking in week two is not onboarding.

**The boundary:** the cut is the end of guidance, not the end of setup. If the product is still telling the user what to do next, it is still onboarding.

---

## 2. Core loop and automation

**What it is:** the repeating unit of activity the product exists for, and anything that advances without the user acting. What the user does again and again, what the product does on its own between those times, and the rules governing both.

**What does not belong:** setup steps, even functional ones. The product's full functional surface is not the core loop.

**Fixed placement:** rate limiters belong here, not in Access and eligibility. Energy, builder slots, tickets and cooldowns govern how often the loop can run, which makes them part of the loop's rules.

---

## 3. Goals and progression

**What it is:** every state that advances and persists. Levels, tiers, ranks, experience, skill trees, upgrade paths, completion tracks, achievement structures, and any target the user works toward over time.

**What does not belong:** a feature just because it happens to share a name with this section. The section is about advancement, whatever the product calls it.

**Fixed placement:** leaderboards do not belong here. They go in Social.

---

## 4. Access and eligibility

**What it is:** what determines whether a user can reach something at all. Conditions on the user (qualification, verification, jurisdiction, account state) and conditions on the content (level gates, prerequisites, unlocks, purchases required for access).

**What does not belong:** rate limiters. Energy, tickets, builder slots and cooldowns govern how often, not whether, and they go in Core loop and automation.

**The boundary:** if the answer changes what a user is permitted to reach, it belongs here. If it changes how often they can do something they are already permitted to do, it belongs in Core loop.

---

## 5. Economy and resources

**What it is:** everything the product treats as a held or earned quantity, and the routes that produce and consume it. Currencies, points, materials, balances, storage limits, conversion rates, and every faucet and sink.

**What does not belong:** the product paying the user real value for work done. That is an earning surface, not an economy, and it belongs in Core loop and automation — the cross-app pattern is a library tag's job, not a section's (see the sections-versus-tags rule below).

**The boundary:** a savings or accumulation tool with no target belongs in Core loop, since setting it up is a thing the product repeatedly asks the user to do; with a target, it belongs in Goals and progression. Judged per case.

---

## 6. Social

**What it is:** anything involving another identified person. Other users, groups, messaging, comparison against named others, transfers between people, and shared state.

**Fixed placement:** leaderboards always belong here. A tier the user advances through alone is progression; a list positioning them against named others is social.

**Empty is a finding**, not a gap to fill.

---

## 7. Reach beyond the app

**What it is:** anything that connects the user to something outside this product. Referrals and invitations, links out to other properties, cross-product identity and account linking, external content, surveys, and requests to act on another platform.

**What does not belong:** app-store review prompts. Those are a return-and-rating tactic aimed at the store listing — they go to Return triggers.

**The boundary:** does this take the user outside the product, or bring someone else in? Both are reach. Whether the business calls it growth is not the analyst's problem.

---

## 8. Monetization

**What it is:** everything the product charges for and how it presents those charges. Prices, fees, subscriptions, packs, offers, stores, what changes after a purchase, what a purchase unlocks, and the framing around all of it.

**What does not belong:** the user's own financial products, where the product's business is finance. That is the product's service, not monetization, and belongs in Core loop.

**The boundary:** is this the product taking money from the user, or is this the product's service?

---

## 9. Return triggers

**What it is:** everything designed to bring the user back. Notifications and the permission requests around them, scheduled events, countdowns, expiries, streak pressure, sign-in rewards, absence summaries, and anything the product does to make the next visit happen.

**Fixed placement:** rating prompts always belong here. They target the moment of return and the store listing.

---

## The three fixed placements

- Leaderboards → Social, always.
- Rating prompts → Return triggers, always.
- Rate limiters (energy, builder slots, tickets, cooldowns) → Core loop and automation, always.

## Two general rules

**Sections versus tags.** If a section is being invented to hold a cross-app pattern, the question is whether that pattern should be a library tag instead. A section organises observations within one app; a tag carries a pattern across apps. Material that recurs across products belongs to a tag, not to a section built to hold it.

**What an observation is about, not what it mentions.** The fixed placements above resolve what an observation is about, not what it names in passing. An observation whose subject is a leaderboard goes to Social; an observation about a timed event that happens to carry a leaderboard stays where its subject sits. An observation whose subject is the connection outward goes to Reach beyond the app; an observation about a feature that happens to offer an outward link stays with its subject. "Never executed" is not the test: these analyses record what the product does, not what a session reached, so a route that exists is a route whether or not anyone walked it. Making execution the test would classify identical products differently depending on how far a walkthrough got.
