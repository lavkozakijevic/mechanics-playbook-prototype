/**
 * The site mechanics currently fusing two entries from the 37-entry
 * mechanics library under the site's older, coarser taxonomy
 * (sources/taxonomy-map.md has the full mapping and the per-merge split
 * condition), held back from getting their own reference page until the
 * fusion actually splits (see "The merge-split procedure" in
 * sources/repo-notes.md). "ads" was a fifth until Advertisement Exposure
 * was retired from the library on 13 Sep 2026; "xp-leveling" was a sixth
 * until Capybara Go and Clash of Clans each applied Experience Points and
 * Leveling as distinct v4.1 tags; "achievements" was a seventh until Clash
 * of Clans and Tiimo each applied Achievement and Milestone as distinct
 * v4.1 tags; "variable-reward" was an eighth until Capybara Go and FC
 * Mobile each applied Loot Box and Variable Reward Outcome as distinct
 * v4.1 tags, splitting into "loot-box" (new id) and "variable-reward"
 * (kept, renamed from Variable Reward Schedule to Variable Reward), with
 * the third fused entry, Variable Reward Schedule, retired rather than
 * carried forward since no app under the current model has ever applied
 * it; "leaderboards" was a ninth until FC Mobile, Royal Match and Strava
 * each applied Leaderboard and Comparative Rank as distinct v4.1 tags,
 * splitting into "leaderboard" (kept name, new id) and "standing" (new id
 * — Comparative Rank isn't a smaller leaderboard, it states a position
 * with no list behind it, so it needed a name that stands on its own
 * rather than reading as leaderboard's lesser half); "community-groups"
 * was a tenth until Insight Timer and Ladder each applied Community Space
 * and Group Membership as distinct v4.1 tags, splitting into
 * "community-space" and "group-membership" (both new ids). Each split
 * came out of this set as clean one-to-one mappings.
 *
 * Plain .mjs with no astro:content dependency, the same reason
 * canonical-mechanic-ids.mjs is plain .mjs: both the Node conversion
 * script (convert-content.mjs, which reports each remaining merge's live
 * split status on every build) and the Astro/TS template layer
 * (content.ts's mechanicHref, mechanics/[id].astro's getStaticPaths) need
 * to read the same set rather than each keeping their own copy.
 *
 * Publishing a held-back id's page would assert a taxonomy the library has
 * already moved past, which has nothing to do with subscriptions — so this
 * is deliberately not a visibility distinction. It's unconditional:
 * independent of each mechanic's own declared visibility and independent
 * of REVIEW_WINDOW_OPEN. mechanics/[id].astro excludes these ids from
 * getStaticPaths directly against this set — the page simply does not
 * exist until the merge splits, in either window state.
 *
 * This list itself is not derived — it's an editorial fact (these ids are
 * currently fused; that changes only when someone executes a split and
 * removes an id below) — but everything about *how close* each remaining
 * one is to splitting is: convert-content.mjs computes that from this set
 * plus CANONICAL_MECHANIC_IDS plus every v4.1 app's own applied tags, and
 * prints it on every build. Nothing hand-maintained records which apps
 * carry which side; that's exactly the record that went stale twice.
 */
export const HELD_BACK_MECHANIC_IDS = new Set([
  "energy-lives", "season-pass",
]);
