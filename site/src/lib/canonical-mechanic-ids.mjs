/**
 * Bridges a mechanics-library entry name (as it appears in an app analysis's
 * "**Tag:** Name" line, or a v3 reviewed heading) onto this site's own
 * mechanic id. This is the single source of truth for that mapping —
 * sources/taxonomy-map.md records the full reasoning per entry, including
 * which of these were forced by real analysis usage versus reasoned out from
 * the library entry's own definition, and the five site mechanics that still
 * fuse two or three library entries under the site's older taxonomy
 * ("achievements" was a sixth until Clash of Clans and Tiimo each applied
 * Achievement and Milestone as separate v4.1 tags, clearing the split
 * condition on 13 Sep 2026 — it split into achievement and milestone, two
 * clean one-to-one mappings, the same way xp-leveling split earlier).
 *
 * Plain .mjs with no astro:content dependency so both the Node conversion
 * script (convert-content.mjs) and the Astro/TS template layer (v41.ts,
 * lib/props.ts) import the same map rather than each guessing at an id from
 * the name — the mismatch between the two guesses is exactly what produced
 * mismatched chips and a missing system-map node on Cleo's summary page
 * (spec review, 11 Sep 2026).
 *
 * The first 11 entries below were built incrementally, one at a time, as a
 * reviewed analysis actually used that heading. The rest were filled in on
 * 11 Sep 2026 to cover all 36 entries in the mechanics library up front, so
 * a future analysis naming any of them resolves instead of throwing.
 */
export const CANONICAL_MECHANIC_IDS = {
  "Streak": "streak",
  "Challenge": "challenges",
  "Social Feed": "social-feed",
  "Leaderboard": "leaderboards",
  // This library carries one ranking entry; the analysis separates the ordered
  // list from the user's own standing. Both are written up under leaderboards.
  "Comparative Rank": "leaderboards",
  // Split 13 Sep 2026 (sources/taxonomy-map.md): Clash of Clans and Tiimo
  // each apply Achievement and Milestone as separate, independently
  // evidenced v4.1 tags, clearing the split condition. Each now resolves to
  // its own site mechanic rather than both collapsing onto "achievements".
  "Milestone": "milestone",
  "Achievement": "achievement",
  "Boosters": "boosters",
  "Group Membership": "community-groups",
  // Wakeout's analysis classifies Wake Out Watts as "Experience Points",
  // which is now this entry's own site mechanic directly — no translation
  // needed since xp-leveling split into experience-points and leveling on
  // 13 Sep 2026 (sources/taxonomy-map.md), once Capybara Go and Clash of
  // Clans each applied Experience Points and Leveling as distinct tags.
  "Experience Points": "experience-points",
  // Retired from the mechanics library and moved to the archive on 13 Sep
  // 2026. No longer an approved entry, and no analysis will apply it going
  // forward, so this null is now permanent rather than the provisional,
  // Wakeout-specific carve-out it started as (that earlier reasoning — the
  // partner cross-promotions and subscription upsell this name was written
  // for aren't ad units under the content rules — no longer matters, since
  // the entry itself is gone). "ads" below now maps only to Rewarded
  // Advertisement and is no longer a merged mechanic. Strava's analysis,
  // still in the old (v3) format, carries an active Advertisement Exposure
  // tag applied under the entry before its retirement; that tag now
  // resolves to nothing, which is correct, and resolves itself once Strava
  // is re-run under the current (v4.1) model. See "Note on Advertisement
  // Exposure" in sources/taxonomy-map.md.
  "Advertisement Exposure": null,
  "Daily / Weekly Quests": "daily-weekly-quests",

  // New entry, 15 Sep 2026, from the Wakeout analysis.
  "Active Pass": "active-pass",

  // Filled in 11 Sep 2026 to cover the remaining 25 library entries (see the
  // note above the first entry). None of these have been forced by a real
  // analysis heading yet — sources/taxonomy-map.md marks them "inferred".
  "Clan / Guild": "clans-guilds",
  "Commitment": "commitment",
  "Community Space": "community-groups", // merges with Group Membership above
  "Companion": "companion",
  "Cosmetic Customization": "cosmetics",
  "Daily Claim Pack": "monthly-card", // renamed and widened from Monthly Reward Card, 11 Sep 2026
  "Daily Login Rewards": "daily-login-reward",
  "Earning Tasks": "earning-tasks",
  "Energy": "energy-lives", // merges with Lives below
  "Expert Guidance": "expert-guidance",
  "First-Purchase Bonus": "first-purchase-bonus",
  "Gifting": "gifting",
  "Hard Currency": "hard-currency",
  "Leveling": "leveling",
  "Lives": "energy-lives", // merges with Energy above
  "Loot Box": "loot-box",
  "Minigame": "minigame",
  "Passive Construction": "passive-construction",
  "Personal Data Reflection": "personal-data-reflection",
  "Future Projection": "future-projection",
  "Piggy Bank": "piggy-bank",
  "Profile Completion": "profile-completion",
  "Progression Fund": "progression-fund",
  "Progression Gate": "progression-gate",
  "Purchase Ladder": "purchase-ladder",
  // Renamed from Referral Boost and widened, 14 Sep 2026: the invariant is now
  // a reward conditional on a completion event by an introduced person, with
  // the payout form (an enhancement, a separable credit, product currency, or
  // ordinary money) as a variant rather than part of the definition. dave.md
  // still applies the old name, so it has to keep resolving alongside the new
  // one rather than being replaced by it.
  "Referral Boost": "referral-boost",
  "Referral": "referral-boost",
  "Reviews and Ratings": "reviews-and-ratings",
  "Reward Multiplier": "reward-multiplier",
  "Rewarded Advertisement": "ads", // the only entry mapping to "ads" since Advertisement Exposure's retirement, 13 Sep 2026
  "Season Content Pass": "season-pass", // merges with Seasonal Progression Pass below
  "Seasonal Progression Pass": "season-pass", // merges with Season Content Pass above
  "Set Collection": "set-collection",
  "Shareable Win": "shareable-win",
  "Soft Currency": "soft-currency",
  "Spendable Credits and Tokens": "credits-tokens",
  "Variable Reward Outcome": "variable-reward", // site displays the shorter "Variable Reward"; library keeps the fuller name (same pattern as Cosmetics / Credits-Tokens)
};

/**
 * Resolves a library entry name onto a site mechanic id: the one place this
 * decision is made, reused everywhere a tag or heading name needs to become
 * a site id, so a name can't resolve one way in one template and a different
 * way in another. Returns null when the name is known to have no site
 * mechanic (an explicit null above). Falls back to a kebab-cased guess only
 * for a name the map doesn't recognize at all — every real applied tag name
 * should already be one of the keys above, so this fallback exists for
 * safety (an unreleased proposed-tag name, a typo), not as the primary path.
 */
export function resolveMechanicId(name) {
  if (Object.prototype.hasOwnProperty.call(CANONICAL_MECHANIC_IDS, name)) {
    return CANONICAL_MECHANIC_IDS[name];
  }
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
