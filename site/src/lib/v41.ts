import type { CollectionEntry } from "astro:content";
import { V41_SECTIONS } from "./v41-sections.mjs";

type App = CollectionEntry<"apps">["data"];
type Observation = NonNullable<App["observations"]>[number];
type Mechanic = CollectionEntry<"mechanics">["data"];

export { V41_SECTIONS };

/** Tag names are display names ("Piggy Bank"); mechanic ids are kebab-case
 *  ("piggy-bank"). Every existing mechanic entry already follows this
 *  convention, so deriving the id this way and looking it up is enough to
 *  link a chip — when nothing matches, the caller renders the chip unlinked
 *  rather than guessing or 404ing (Earning Tasks and Referral Boost have no
 *  reference page yet; that's content work, tracked separately). */
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

/** id -> {name, section} for every observation in the app, so a
 *  cross-reference (stored as a raw id) can be rendered as the target
 *  observation's title, linking to its one canonical location: its section
 *  page. Built once per page render, not per observation. */
export function crossRefLookup(app: App): Map<string, { name: string; section: string }> {
  const map = new Map<string, { name: string; section: string }>();
  for (const o of app.observations ?? []) map.set(o.id, { name: o.name, section: o.section });
  return map;
}

export interface TagBlock {
  name: string;
  mechanicId: string;
  mechanic: Mechanic | null;
  observations: Observation[];
}

/** One block per applied tag, each carrying every observation in the app
 *  that carries it, in the app's section order (spec §2.1 item 2, §3.5).
 *  "Applied" needs no extra filtering here — the publishing bar (spec §1.3)
 *  is already enforced at parse time, so anything present in an
 *  observation's `tags` is already index-ready. Block order follows each
 *  tag's first appearance across the app's observations. */
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
  return order.map((name) => {
    const mechanicId = kebabId(name);
    return { name, mechanicId, mechanic: mechanicsById.get(mechanicId) ?? null, observations: byName.get(name)! };
  });
}
