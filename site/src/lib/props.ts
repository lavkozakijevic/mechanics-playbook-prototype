/**
 * Maps content collection entries onto the prop shapes the converted design
 * templates expect. All presentation decisions that bridge v44 content and
 * the design templates live here, in one reviewable place.
 */
import type { CollectionEntry } from "astro:content";
import { CAT_LABEL, formatDate, numberWord, playerChip, titleCase } from "./content";

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
export function caseStudyProps(app: App, byId: MechanicsById) {
  const rels = sortedRelationships(app);
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
        href: `/mechanics/${r.id}/`,
        depth: r.depth,
        observed: r.writeup?.observed,
        presented: r.writeup?.presented,
        noting: r.writeup?.noting,
        findings: r.writeup?.findings ?? [],
        shots: r.screenshots.length ? r.screenshots : r.suggestedShots,
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
    pairedWith: (mech.paired ?? []).map((id) => ({ id, href: `/mechanics/${id}/` })),
    playerTypes: (mech.players ?? []).map(playerChip),
  };
}

export function mechanicStudies(mechanicId: string, apps: App[]) {
  return apps
    .filter((a) => a.mechanics.some((m) => m.id === mechanicId))
    .map((a) => {
      const rel = a.mechanics.find((m) => m.id === mechanicId)!;
      const w = rel.writeup;
      return {
        app: a.name,
        cat: a.category,
        href: `/case-studies/${a.id}/`,
        depth: rel.depth,
        screens: [],
        body: w ? [w.observed ?? "", w.noting ?? "", w.presented ?? "", w.findings?.[0] ?? ""] : null,
      };
    });
}

// ----------------------------------------------------------- system detail
export function dominantCategory(app: App, byId: MechanicsById): string {
  const tally: Record<string, number> = {};
  for (const r of app.mechanics) {
    if (r.depth !== "core") continue;
    const cat = byId.get(r.id)?.cat;
    if (cat) tally[cat] = (tally[cat] ?? 0) + 1;
  }
  return Object.entries(tally).sort((a, b) => b[1] - a[1])[0]?.[0] ?? "retention";
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
    nodes: sys.nodes.map((n) => ({
      id: n.id,
      label: byId.get(n.id)?.name ?? n.id,
      category: byId.get(n.id)?.cat ?? "retention",
      x: n.x,
      y: n.y,
      href: `/mechanics/${n.id}/`,
      description: roleById.get(n.id) ?? "",
    })),
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
    mechanicsList: sys.roles.map((r) => ({
      id: r.id,
      name: byId.get(r.id)?.name ?? r.id,
      cat: byId.get(r.id)?.cat ?? "retention",
      description: r.role,
      href: `/mechanics/${r.id}/`,
    })),
  };
}

// ------------------------------------------------------------- index cards
export function appCard(app: App, byId?: MechanicsById) {
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
    desc: app.summary,
    mechanicCount: app.mechanics.length,
    date: formatDate(app.analysisDate),
    href: `/case-studies/${app.id}/`,
    iconSrc: app.icon,
    iconInitials: initials(app.name),
    free: app.visibility === "public",
    locked: app.visibility === "subscriber",
  };
}

export function mechanicCard(mech: Mechanic, exampleCount: number) {
  return {
    id: mech.id,
    n: mech.n,
    category: mech.cat,
    name: mech.name,
    definition: mech.tagline,
    contextTags: (mech.context ?? []).map(titleCase),
    players: mech.players ?? [],
    exampleCount,
    locked: mech.visibility !== "public",
    href: `/mechanics/${mech.id}/`,
  };
}
