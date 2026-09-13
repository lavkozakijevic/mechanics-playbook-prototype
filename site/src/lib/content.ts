import { getCollection, type CollectionEntry } from "astro:content";

/**
 * Report-only content must never appear in the built output (migration brief).
 * Every page queries through these helpers; nothing reads the raw collections.
 */
export async function publishedApps(): Promise<CollectionEntry<"apps">[]> {
  return (await getCollection("apps")).filter((a) => a.data.visibility !== "report-only");
}

export async function publishedMechanics(): Promise<CollectionEntry<"mechanics">[]> {
  const all = await getCollection("mechanics");
  return all
    .filter((m) => m.data.visibility !== "report-only")
    .sort((a, b) => a.data.n.localeCompare(b.data.n));
}

/** Apps that use a mechanic — computed, never stored twice. Not currently
 *  called from anywhere (kept for the mechanics index rebuild, spec §3);
 *  guarded the same as mechanics/index.astro's count() since v4.1 apps carry
 *  no `mechanics` array. */
export async function appsUsingMechanic(mechanicId: string) {
  const apps = await publishedApps();
  return apps.filter((a) => (a.data.mechanics ?? []).some((m) => m.id === mechanicId));
}

export const CAT_LABEL: Record<string, string> = {
  retention: "Retention",
  monetization: "Monetization",
  social: "Social",
};

/** The six site mechanics that fuse two or three entries from the 36-entry
 *  mechanics library under the site's older, coarser taxonomy
 *  (sources/taxonomy-map.md has the full mapping, the per-merge split
 *  condition, and which apps currently carry each one). "ads" was a seventh
 *  until Advertisement Exposure was retired from the library on 13 Sep
 *  2026, and "xp-leveling" was an eighth until Capybara Go and Clash of
 *  Clans each applied Experience Points and Leveling as distinct v4.1 tags,
 *  clearing the split condition the same day — it split into two clean
 *  one-to-one mappings, experience-points and leveling, and both came out
 *  of this set.
 *
 *  Publishing one of their pages would assert a taxonomy the library has
 *  already moved past, which has nothing to do with subscriptions — so this
 *  is deliberately not a visibility distinction. It's unconditional:
 *  independent of each mechanic's own declared visibility (all six are
 *  declared "public", same as everything else) and independent of
 *  REVIEW_WINDOW_OPEN. A "subscriber" declaration would make the page
 *  locked rather than absent once the review window closes, and a
 *  subscriber could then read a page that isn't supposed to exist yet
 *  (owner ruling, 11 Sep 2026). mechanics/[id].astro excludes these ids from
 *  getStaticPaths directly against this set — the page simply does not
 *  exist until the merge splits, in either window state. */
export const HELD_BACK_MECHANIC_IDS = new Set([
  "achievements", "leaderboards", "community-groups",
  "energy-lives", "season-pass", "variable-reward",
]);

/** A mechanic's href, or null if there is nothing to link to — the single
 *  place this decision is made, reused everywhere a mechanic gets linked
 *  (case study relationships, paired-mechanic sidebars, mechanic cards,
 *  system-map nodes) so a held-back id can't be missed in one spot and
 *  linked from another. A held-back mechanic (HELD_BACK_MECHANIC_IDS above)
 *  renders unlinked regardless of its own declared visibility, since it has
 *  no page and subscribing wouldn't produce one. Anything else follows the
 *  ordinary rule: public mechanics link directly, a genuinely non-public one
 *  (no current example, but the mechanism exists) routes to /subscribe/. */
export function mechanicHref(id: string, visibility: string): string | null {
  if (HELD_BACK_MECHANIC_IDS.has(id)) return null;
  return visibility === "public" ? `/mechanics/${id}/` : "/subscribe/";
}

const PLAYER_COLOR: Record<string, string> = {
  achiever: "var(--cat-retention)",
  explorer: "var(--cat-monetization)",
  socializer: "var(--cat-social)",
  competitor: "var(--red-600)",
};

export function playerChip(p: string) {
  return { label: p.charAt(0).toUpperCase() + p.slice(1), color: PLAYER_COLOR[p] ?? "var(--ink-500)" };
}

export function titleCase(s: string) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

export function formatDate(iso: string | null): string {
  if (!iso) return "";
  return new Date(iso + "T00:00:00Z").toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
    timeZone: "UTC",
  });
}

// For "YYYY-MM" month/year fields (spec review, 11 Sep 2026's "As observed"),
// not a full date — "2024-10" -> "October 2024".
export function formatMonthYear(iso: string | undefined): string {
  if (!iso) return "";
  return new Date(iso + "-01T00:00:00Z").toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

const WORDS = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
export function numberWord(n: number): string {
  return WORDS[n] ?? String(n);
}

export async function publishedCheatsheets() {
  const all = await getCollection("cheatsheets");
  return all
    .filter((c) => c.data.visibility !== "report-only")
    .sort((a, b) => a.data.title.localeCompare(b.data.title));
}

export async function publishedGlossary() {
  const all = await getCollection("glossary");
  return all
    .filter((g) => g.data.visibility !== "report-only")
    .sort((a, b) => a.data.term.localeCompare(b.data.term));
}

export async function publishedShortcasts() {
  const all = await getCollection("shortcasts");
  return all
    .filter((s) => s.data.visibility !== "report-only")
    .sort((a, b) => {
      const ao = a.data.order ?? 0;
      const bo = b.data.order ?? 0;
      if (ao !== bo) return bo - ao;
      return (b.data.date ?? "").localeCompare(a.data.date ?? "");
    });
}

/** Latest content date across apps — powers "last updated" in chrome. */
export async function lastUpdated(): Promise<string | null> {
  const apps = await publishedApps();
  const dates = apps.map((a) => a.data.lastUpdated).filter(Boolean) as string[];
  return dates.sort().at(-1) ?? null;
}
