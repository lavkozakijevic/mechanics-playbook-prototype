/**
 * Maps content collection entries onto the prop shapes the converted design
 * templates expect. All presentation decisions that bridge v44 content and
 * the design templates live here, in one reviewable place.
 */
import type { CollectionEntry } from "astro:content";
import { CAT_LABEL, formatDate, numberWord, playerChip, titleCase, mechanicHref } from "./content";
import { kebabId } from "./v41";
import { resolveMechanicId } from "./canonical-mechanic-ids.mjs";
import { EXAMPLE_EXCLUDED } from "./example-excluded.mjs";

type App = CollectionEntry<"apps">["data"];
type Mechanic = CollectionEntry<"mechanics">["data"];
export type MechanicsById = Map<string, Mechanic>;

const DEPTH_ORDER: Record<string, number> = { core: 0, unusual: 1, supporting: 2, shallow: 3 };

export function initials(name: string) {
  const words = name.replace(/[^a-zA-Z ]/g, "").split(" ").filter(Boolean);
  return (words.length >= 2 ? words[0][0] + words[1][0] : (words[0] ?? "??").slice(0, 2)).toUpperCase();
}

function sortedRelationships(app: App) {
  return [...app.mechanics].sort((a, b) => (DEPTH_ORDER[a.depth] ?? 9) - (DEPTH_ORDER[b.depth] ?? 9));
}

function firstSentence(s: string) {
  return s.split(/(?<=\.)\s/)[0].replace(/\.$/, "");
}

// ------------------------------------------------------- case study detail
function hasWriteup(w: App["mechanics"][number]["writeup"]) {
  return !!(w && w.observed?.trim() && w.noting?.trim() && w.presented?.trim() && w.findings?.[0]?.trim());
}

export function caseStudyProps(app: App, byId: MechanicsById) {
  const rels = sortedRelationships(app).filter((r) => hasWriteup(r.writeup));
  const sys = app.system;
  return {
    name: app.name,
    category: app.category,
    iconSrc: app.icon,
    iconInitials: initials(app.name),
    overview: app.summary,
    mechanicsHeading: `${numberWord(rels.length)} mechanics carry the loop`,
    mechanics: rels.map((r) => {
      const m = byId.get(r.id)!;
      return {
        id: r.id,
        cat: m.cat,
        name: m.name,
        href: mechanicHref(r.id, m.visibility),
        depth: r.depth,
        observed: r.writeup?.observed,
        presented: r.writeup?.presented,
        noting: r.writeup?.noting,
        findings: r.writeup?.findings ?? [],
        shots: r.screenshots.length
          ? r.screenshots.map((s) => ({ image: s.src, label: s.caption ?? undefined }))
          : r.suggestedShots.map((label) => ({ label })),
        shotsAreImages: r.screenshots.length > 0,
      };
    }),
    loopParagraphs: sys ? [sys.loop] : [],
    connections: (sys?.connections ?? []).map((c) => ({
      a: byId.get(c.from)?.name ?? c.from,
      b: byId.get(c.to)?.name ?? c.to,
      desc: `${c.desc} ${c.effect}`.trim(),
      label: c.title,
    })),
    insight: sys ? { observation: sys.keyInsight, works: sys.whatMakesItWork } : null,
    takeaways: null, // v44 has no takeaways list; section renders only when present
  };
}

// ---------------------------------------------------------- mechanic detail
export function mechanicDetailProps(mech: Mechanic) {
  return {
    n: Number(mech.n),
    name: mech.name,
    category: mech.cat,
    categoryLabel: CAT_LABEL[mech.cat],
    definition: mech.tagline,
    bestFor: (mech.players ?? []).map(playerChip),
    context: (mech.context ?? []).map(titleCase),
    drivers: (mech.sdt ?? []).map(titleCase),
    how: mech.desc,
    // The design's sample uses a per-mechanic headline; v44 has none, so the
    // first sentence of the psychology principle serves until copy exists.
    howTitle: mech.principle ? firstSentence(mech.principle) : mech.name,
    principle: mech.principle,
    watch: mech.warn,
    variants: (mech.variants ?? []).map((v) => {
      const i = v.indexOf(", ");
      return i > 0 ? { name: v.slice(0, i), desc: v.slice(i + 2) } : { name: v, desc: "" };
    }),
    variantsTitle: `${numberWord((mech.variants ?? []).length)} ways to build it`,
    lifecycle: mech.lifecycle,
    // href is resolved downstream (mechanics/[id].astro) via mechanicHref(),
    // once the paired mechanic's own visibility is known.
    pairedWith: (mech.paired ?? []).map((id) => ({ id })),
    playerTypes: (mech.players ?? []).map(playerChip),
  };
}

// Moved to example-excluded.mjs (30 Sep 2026) so it can be shared with
// tests/smoke.spec.ts without pulling astro:content into a plain test run;
// re-exported here so existing imports of it from this module keep working.
export { EXAMPLE_EXCLUDED };

// An example may render only when its write-up carries what the two-line
// card shows (voice rewrite, 30 Sep 2026): the implementation summary as the
// headline, and a standout line under it. "Standout" prefers the new
// shape's What stands out and falls back to the old shape's What is worth
// noting (`noting`) while the sweep runs — the two hold the same role, a
// product person's takeaway, so the card reads the same regardless of which
// shape the app's own content file is still on. Typed loosely (not
// App["mechanics"][number]["writeup"] specifically) so the same check
// covers both v3's writeup and a v4.1 app's composed mechanicWriteup.
// Once every app is on the new shape, drop the `noting` fallback.
function exampleComplete(
  w: { summary?: string; whatStandsOut?: string; noting?: string } | null | undefined
) {
  return !!(w && w.summary?.trim() && (w.whatStandsOut?.trim() || w.noting?.trim()));
}

// The one thing that differs between a v3 relationship and a v4.1 tag: where
// the four-part write-up and the screenshots come from. v3 carries both on
// the app's own `mechanics[]` relationship; v4.1 has no `mechanics` array at
// all — the relationship is an observation's tag (matched by kebabId, same
// as everywhere else v4.1 tags get resolved), and the write-up is the
// composed mechanicWriteups entry rather than a RICH_DESCRIPTIONS writeup.
// v4.1 has no per-relationship screenshots yet (spec §6.2: re-keying is
// separate work), so it always falls through to the blank-slot padding below.
function mechanicRelationship(a: App, mechanicId: string) {
  if (a.contentFormat === "v4.1") {
    const tagName = (a.observations ?? [])
      .flatMap((o) => o.tags)
      .find((t) => kebabId(t.name) === mechanicId)?.name;
    if (!tagName) return null;
    const writeup = a.mechanicWriteups?.find((w) => w.name === tagName) ?? null;
    return { writeup, screenshots: [] as { src: string; caption: string | null }[], suggestedShots: [] as string[], depth: undefined as string | undefined };
  }
  const rel = a.mechanics.find((m) => m.id === mechanicId);
  return rel ? { writeup: rel.writeup, screenshots: rel.screenshots, suggestedShots: rel.suggestedShots, depth: rel.depth } : null;
}

// What a mechanic page gives away about each app that uses it (gating, 1 Oct
// 2026, replacing the old "first example open, the rest locked" rule):
//   a FREE app (strava, the rotating free slot) keeps its full sample: the
//   headline, What stands out and the screenshot area, since its case study is
//   public anyway;
//   any other app shows its name and the write-up headline, with a link to its
//   case study (which is a gate for a visitor without access), and nothing else:
//   no What stands out, no screenshots. The headline is the one-sentence
//   implementation summary, the same line the mechanics library already shows on
//   every card. The order is the caller's, as before.
export function mechanicStudies(mechanicId: string, apps: App[]) {
  return apps
    .filter((a) => !EXAMPLE_EXCLUDED.has(a.id))
    .map((a) => ({ a, rel: mechanicRelationship(a, mechanicId) }))
    .filter((x): x is { a: App; rel: NonNullable<ReturnType<typeof mechanicRelationship>> } => x.rel !== null)
    .filter((x) => exampleComplete(x.rel.writeup))
    .map(({ a, rel }) => {
      const w = rel.writeup!;
      const free = a.visibility === "public";
      return {
        app: a.name,
        cat: a.category,
        locked: !free,
        href: `/case-studies/${a.id}/`,
        depth: rel.depth,
        // Every free example shows a screenshot area (owner ruling, 11 Jun
        // 2026): real screenshots and suggested-shot captions both flex the
        // count above two, with blank placeholders padding examples where the
        // analysis has neither. A locked app's example shows no screenshots.
        shots: !free
          ? []
          : (() => {
              if (rel.screenshots.length > 0) {
                return rel.screenshots.map((s) => ({ image: s.src, label: s.caption ?? undefined }));
              }
              const slots: { image?: string; label?: string }[] = [
                ...rel.suggestedShots.map((label) => ({ label })),
              ];
              while (slots.length < 2) slots.push({});
              return slots;
            })(),
        // The headline is public for every app; What stands out is the free
        // apps' alone.
        headline: w.summary ?? "",
        narrative: free ? { headline: w.summary ?? "", standout: w.whatStandsOut || w.noting || "" } : null,
      };
    });
}

// ----------------------------------------------------------- system detail
export function dominantCategory(app: App, byId: MechanicsById): string {
  const tally: Record<string, number> = {};
  // v4.1 apps carry no `mechanics` array (same gap appCard() above already
  // handles) — tally categories from applied tags instead. There's no v3
  // "depth" concept here, so every applied tag counts equally rather than
  // only "core" ones.
  if (app.contentFormat === "v4.1") {
    const seen = new Set<string>();
    for (const o of app.observations ?? []) {
      for (const t of o.tags) {
        if (seen.has(t.name)) continue;
        seen.add(t.name);
        const cat = byId.get(kebabId(t.name))?.cat;
        if (cat) tally[cat] = (tally[cat] ?? 0) + 1;
      }
    }
  } else {
    for (const r of app.mechanics) {
      if (r.depth !== "core") continue;
      const cat = byId.get(r.id)?.cat;
      if (cat) tally[cat] = (tally[cat] ?? 0) + 1;
    }
  }
  return Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "retention";
}

// A v4.1 node/list-item id may have no entry in the mechanics collection yet
// (a tag with no reference page written — spec review, 11 Sep 2026 gap,
// tracked separately). Falls back to the composed mechanic block's own name
// rather than the raw kebab-case id, and to a neutral, honest "uncategorized"
// rather than guessing a real category or defaulting to "retention".
function resolveMechanicNode(app: App, byId: MechanicsById, id: string) {
  const m = byId.get(id);
  // Matches a writeup's raw tag name against this already-resolved site id
  // the same way tagBlocks() resolves the other direction: through the
  // canonical map first, kebabId() only as its fallback (spec review, 11 Sep
  // 2026 — see canonical-mechanic-ids.mjs for why a bare kebabId() match
  // isn't reliable here either).
  const writeup =
    app.contentFormat === "v4.1"
      ? app.mechanicWriteups?.find((w) => (resolveMechanicId(w.name) ?? kebabId(w.name)) === id)
      : undefined;
  return {
    name: m?.name ?? writeup?.name ?? id,
    cat: m?.cat ?? (writeup ? "neutral" : "retention"),
    // The other two branches are pre-existing and untouched: a v4.1 tag with
    // a composed block but no mechanics-collection entry at all renders
    // unlinked too ("#"); one with neither falls back to /subscribe/.
    href: m ? mechanicHref(id, m.visibility) : writeup ? "#" : "/subscribe/",
  };
}

export function systemProps(app: App, byId: MechanicsById) {
  const sys = app.system!;
  const roleById = new Map(sys.roles.map((r) => [r.id, r.role]));
  const wmw = sys.whatMakesItWork;
  return {
    appName: app.name,
    appHref: `/case-studies/${app.id}/`,
    typeLabel: titleCase(app.type),
    domain: { label: app.category, cat: dominantCategory(app, byId) },
    overview: sys.overview,
    tagline: sys.tagline,
    keyInsight: sys.keyInsight,
    // v44 stores one paragraph; the template wants a headline + prose.
    // The first sentence serves as the headline until copy exists (flagged).
    whatMakesItWork: { title: firstSentence(wmw), paragraphs: [wmw] },
    nodes: sys.nodes.map((n) => {
      const r = resolveMechanicNode(app, byId, n.id);
      return { id: n.id, label: r.name, category: r.cat, x: n.x, y: n.y, href: r.href, description: roleById.get(n.id) ?? "" };
    }),
    // v44 connections carry no line type; "mechanic" is the neutral dashed
    // style. The modal preserves all three v44 text fields: title becomes the
    // heading, desc + effect together form the effect paragraph.
    connections: sys.connections.map((c) => ({
      from: c.from,
      to: c.to,
      type: "mechanic",
      name: c.title,
      effect: `${c.desc} ${c.effect}`.trim(),
    })),
    walkthroughParagraphs: [sys.loop],
    mechanicsList: sys.roles.map((r) => {
      const resolved = resolveMechanicNode(app, byId, r.id);
      return { id: r.id, name: resolved.name, cat: resolved.cat, description: r.role, href: resolved.href };
    }),
  };
}

// ------------------------------------------------------------- index cards
export function appCard(app: App, byId?: MechanicsById) {
  // v4.1 apps carry no `mechanics` array at all (observations + tags
  // replace it) — this card needs its own reading of "which mechanics does
  // this app use" rather than assuming the v3 shape.
  if (app.contentFormat === "v4.1") {
    const seen = new Set<string>();
    const tagNames: string[] = [];
    for (const o of app.observations ?? []) {
      for (const t of o.tags) {
        if (!seen.has(t.name)) {
          seen.add(t.name);
          tagNames.push(t.name);
        }
      }
    }
    return {
      tags: byId ? tagNames.slice(0, 4).map((name) => byId.get(kebabId(name))?.name ?? name) : undefined,
      id: app.id,
      name: app.name,
      category: app.category,
      desc: app.teaser ?? app.summary,
      mechanicCount: tagNames.length,
      date: formatDate(app.analysisDate),
      // The case study page itself renders the gate inline (spec §2.1), so
      // the card always links straight there regardless of visibility —
      // unlike the v3 pattern below, which redirects locked apps elsewhere.
      href: `/case-studies/${app.id}/`,
      iconSrc: app.icon,
      iconInitials: initials(app.name),
      free: app.visibility === "public",
      locked: app.visibility === "subscriber",
    };
  }

  const tags = byId
    ? sortedRelationships(app)
        .slice(0, 4)
        .map((r) => byId.get(r.id)?.name ?? r.id)
    : undefined;
  return {
    tags,
    id: app.id,
    name: app.name,
    category: app.category,
    // The index card shows the hook, not the full summary; the case study
    // page itself still reads app.summary directly, unchanged.
    desc: app.teaser ?? app.summary,
    mechanicCount: app.mechanics.length,
    date: formatDate(app.analysisDate),
    href: `/case-studies/${app.id}/`, // a locked one shows the gate there
    iconSrc: app.icon,
    iconInitials: initials(app.name),
    free: app.visibility === "public",
    locked: app.visibility === "subscriber",
  };
}

export function mechanicCard(mech: Mechanic, exampleCount: number) {
  const href = mechanicHref(mech.id, mech.visibility);
  return {
    id: mech.id,
    n: mech.n,
    category: mech.cat,
    name: mech.name,
    definition: mech.tagline,
    contextTags: (mech.context ?? []).map(titleCase),
    players: mech.players ?? [],
    exampleCount,
    // locked means "not clickable" — true for a held-back mechanic (no page
    // exists) exactly the same as for a genuinely non-public one (no page
    // yet), so the badge can't drift out of sync with the link.
    locked: !href,
    href,
  };
}
