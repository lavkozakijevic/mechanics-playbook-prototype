/**
 * Bridges a mechanics-library entry name (as it appears in an app analysis's
 * "**Tag:** Name" line, or a v3 reviewed heading) onto this site's own
 * mechanic id. This is the single source of truth for that mapping —
 * sources/taxonomy-map.md records the full reasoning per entry, including
 * which of these were forced by real analysis usage versus reasoned out from
 * the library entry's own definition, and the eight site mechanics that fuse
 * two or three library entries under the site's older taxonomy.
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
  // This library's entry is "Achievements / Milestones" and covers both.
  "Milestone": "achievements",
  "Achievement": "achievements",
  "Group Membership": "community-groups",
  // Wakeout's analysis classifies Wake Out Watts as "Experience Points"; this
  // library's equivalent entry is "XP / Leveling".
  "Experience Points": "xp-leveling",
  // Partner cross-promotion (Runna, Apple Fitness+, partner-named challenges)
  // and the app's own subscription upsell are not published as an advertising
  // or monetization mechanic: the content rules limit advertising coverage to
  // actual ad units (rewarded video, interstitial, banner, offerwall), and none
  // were observed. The partnerships are described inside the challenge write-up.
  // This is Wakeout's own ruling, not a statement that Advertisement Exposure
  // has no site mechanic in general — in general it merges into "ads" below,
  // alongside Rewarded Advertisement. Left as null here rather than "ads" so
  // this pass doesn't change Wakeout's build output as a side effect; a
  // future app whose analysis observes generic ad exposure will need this
  // revisited, since as written it resolves to "not published," not to "ads".
  "Advertisement Exposure": null,
  "Daily / Weekly Quests": "daily-weekly-quests",

  // Filled in 11 Sep 2026 to cover the remaining 25 library entries (see the
  // note above the first entry). None of these have been forced by a real
  // analysis heading yet — sources/taxonomy-map.md marks them "inferred".
  "Clan / Guild": "clans-guilds",
  "Community Space": "community-groups", // merges with Group Membership above
  "Companion": "companion",
  "Cosmetic Customization": "cosmetics",
  "Daily Claim Pack": "monthly-card", // renamed and widened from Monthly Reward Card, 11 Sep 2026
  "Daily Login Rewards": "daily-login-reward",
  "Earning Tasks": "earning-tasks",
  "Energy": "energy-lives", // merges with Lives below
  "First-Purchase Bonus": "first-purchase-bonus",
  "Gifting": "gifting",
  "Hard Currency": "hard-currency",
  "Leveling": "xp-leveling", // merges with Experience Points above
  "Lives": "energy-lives", // merges with Energy above
  "Loot Box": "variable-reward", // merges with Variable Reward Schedule/Outcome below
  "Passive Construction": "passive-construction",
  "Personal Data Reflection": "personal-data-reflection",
  "Piggy Bank": "piggy-bank",
  "Progression Fund": "progression-fund",
  "Referral Boost": "referral-boost",
  "Rewarded Advertisement": "ads", // merges with Advertisement Exposure above
  "Season Content Pass": "season-pass", // merges with Seasonal Progression Pass below
  "Seasonal Progression Pass": "season-pass", // merges with Season Content Pass above
  "Set Collection": "set-collection",
  "Soft Currency": "soft-currency",
  "Spendable Credits and Tokens": "credits-tokens",
  "Variable Reward Outcome": "variable-reward", // merges with Variable Reward Schedule and Loot Box
  "Variable Reward Schedule": "variable-reward", // merges with Variable Reward Outcome and Loot Box
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
