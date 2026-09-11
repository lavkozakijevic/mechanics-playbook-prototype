import type { CollectionEntry } from "astro:content";
import { V41_SECTIONS } from "./v41-sections.mjs";
import { resolveMechanicId } from "./canonical-mechanic-ids.mjs";

type App = CollectionEntry<"apps">["data"];
type Observation = NonNullable<App["observations"]>[number];
type Mechanic = CollectionEntry<"mechanics">["data"];

export { V41_SECTIONS };

/** Category color/label lookups — the same maps CaseStudyDetail.jsx defines
 *  locally (CAT_COLOR/CAT_LABEL), exported here so the v4.1 templates can
 *  reuse them for the same chips rather than redeclaring the values. "neutral"
 *  is added for a tag with no reference page yet (kebabId misses in
 *  mechanicsById) — v3 never has this case, since every mechanic there always
 *  has a known category; it borrows the neutral classification Tag.jsx
 *  already defines for exactly this "no specific category" situation. */
export const CAT_COLOR: Record<string, string> = {
  retention: "var(--cat-retention)",
  monetization: "var(--cat-monetization)",
  social: "var(--cat-social)",
  neutral: "var(--ink-500)",
};
export const CAT_LABEL: Record<string, string> = {
  retention: "Retention",
  monetization: "Monetization",
  social: "Social",
  neutral: "Uncategorized",
};

/** A plain kebab-casing of a name, with no awareness of the library-to-site
 *  mapping. Most mechanic ids happen to be their name kebab-cased ("Piggy
 *  Bank" -> "piggy-bank"), but not all of them are ("Challenge" -> the site's
 *  "challenges", not "challenge") — resolveMechanicId() (canonical-mechanic-
 *  ids.mjs) is the real name-to-id path and checks the canonical map first;
 *  this stays only as its fallback for a name the map doesn't recognize, and
 *  for callers that need a stable id-shaped string with no site mechanic
 *  behind it at all (spec review, 11 Sep 2026 — a naive kebabId() call used
 *  directly for chip resolution produced mismatched names and a missing
 *  system-map node on Cleo's summary page). */
export function kebabId(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function sectionName(slug: string): string {
  return V41_SECTIONS.find((s) => s.slug === slug)?.name ?? slug;
}

function sectionCounts(app: App): Map<string, number> {
  const counts = new Map<string, number>();
  for (const o of app.observations ?? []) counts.set(o.section, (counts.get(o.section) ?? 0) + 1);
  return counts;
}

/** Section slugs in fixed order, filtered to those an app actually has
 *  observations in (spec §2.2: one page per non-empty section). */
export function nonEmptySections(app: App): { slug: string; name: string; count: number }[] {
  const counts = sectionCounts(app);
  return V41_SECTIONS.filter((s) => counts.has(s.slug)).map((s) => ({ ...s, count: counts.get(s.slug)! }));
}

/** All nine sections, in fixed order, with a count (0 for empty ones) —
 *  spec §2.1 item 3, "the full record": every section renders as a card,
 *  including empty ones, which are shown unlinked rather than omitted. */
export function allSectionCounts(app: App): { slug: string; name: string; count: number }[] {
  const counts = sectionCounts(app);
  return V41_SECTIONS.map((s) => ({ ...s, count: counts.get(s.slug) ?? 0 }));
}

type MechanicWriteup = NonNullable<App["mechanicWriteups"]>[number];

export interface TagBlock {
  // The raw tag name as the analysis wrote it (a library entry name, e.g.
  // "Challenge") — kept only as the join key back onto mechanicWriteups,
  // which content files key by this same raw name. Never render this
  // directly; use displayName below, so a reader sees the site mechanic's
  // own name everywhere it resolves, not the library's name in one place and
  // the site's in another (spec review, 11 Sep 2026).
  name: string;
  // The name to show: the resolved site mechanic's own name when one
  // exists, falling back to the raw tag name only when nothing resolves.
  displayName: string;
  mechanicId: string;
  mechanic: Mechanic | null;
  // Kept as data for the tag index (spec §6.3) to use later — the summary
  // page no longer renders these directly, `writeup` below is what it reads.
  observations: Observation[];
  writeup: MechanicWriteup | null;
}

/** One block per applied tag (spec §2.1): the composed write-up plus every
 *  observation in the app that carries it, in the app's section order
 *  (spec §3.5, for the tag index). "Applied" needs no extra filtering here —
 *  the publishing bar (spec §1.3) is already enforced at parse time, so
 *  anything present in an observation's `tags` is already index-ready.
 *  Block order follows each tag's first appearance across the app's
 *  observations. `writeup` is null only if a tag's composed block is
 *  missing from the content file, which convert-content.mjs already treats
 *  as a build error — null here is a defensive fallback, not an expected
 *  state.
 *
 *  The tag name is resolved onto a site mechanic id through
 *  resolveMechanicId() (canonical-mechanic-ids.mjs), the same map a v3
 *  reviewed heading resolves through — not a raw kebabId() guess, which is
 *  what previously mismatched a mechanic id like "challenges" against a tag
 *  name like "Challenge" and left the chip uncategorized. kebabId() is only
 *  the fallback for a name resolveMechanicId() doesn't recognize at all. */
export function tagBlocks(app: App, mechanicsById: Map<string, Mechanic>): TagBlock[] {
  const order: string[] = [];
  const byName = new Map<string, Observation[]>();
  for (const o of app.observations ?? []) {
    for (const t of o.tags) {
      if (!byName.has(t.name)) {
        byName.set(t.name, []);
        order.push(t.name);
      }
      byName.get(t.name)!.push(o);
    }
  }
  const writeupsByName = new Map((app.mechanicWriteups ?? []).map((w) => [w.name, w]));
  const blocks = order.map((name) => {
    const canonicalId = resolveMechanicId(name);
    const mechanicId = canonicalId ?? kebabId(name);
    const mechanic = canonicalId ? mechanicsById.get(canonicalId) ?? null : null;
    return {
      name,
      displayName: mechanic?.name ?? name,
      mechanicId,
      mechanic,
      observations: byName.get(name)!,
      writeup: writeupsByName.get(name) ?? null,
    };
  });

  // Two different library entries can resolve to the same site mechanic —
  // the merged taxonomy surfacing (e.g. Loot Box and Variable Reward Outcome
  // both landing on variable-reward; see sources/taxonomy-map.md), not a
  // mistake to fold together. Each stays its own block, with its own name
  // and its own observations. What can't stay shared is the DOM anchor id:
  // two headings with the same id is invalid HTML and leaves an in-page link
  // pointing at whichever one the browser picks. Disambiguated here, on the
  // block's own tag name, only for the second and later block that collides
  // — the first keeps its plain id so the common, non-colliding case is
  // unaffected (spec review, 11 Sep 2026).
  const seen = new Map<string, number>();
  for (const block of blocks) {
    const count = (seen.get(block.mechanicId) ?? 0) + 1;
    seen.set(block.mechanicId, count);
    if (count > 1) block.mechanicId = `${block.mechanicId}--${kebabId(block.name)}`;
  }
  return blocks;
}
