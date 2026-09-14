import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";
import { V41_SECTIONS } from "./lib/v41-sections.mjs";

const visibility = z.enum(["public", "subscriber", "report-only"]);

const writeup = z
  .object({
    observed: z.string().optional(),
    presented: z.string().optional(),
    noting: z.string().optional(),
    findings: z.array(z.string()).optional(),
  })
  .nullable();

// v4.1 content model (appservatory spec §1). An app carries either the v3
// shape (`mechanics`, depth-graded) or the v4.1 shape (`observations`,
// `systemView`, `proposedTags`), selected by `contentFormat`. Both sets of
// fields are optional so neither format is forced to populate the other's.
const observationTag = z.object({
  name: z.string(),
  // The weakest confidence among the blocks that contributed to this tag —
  // see `confidences` below for all of them. A single block's confidence
  // when there's only one, same as before this field existed.
  confidence: z.string(),
  // Every contributing block's own confidence, verbatim, not collapsed into
  // the single `confidence` value above (spec review, 11 Sep 2026 — a tag
  // can carry more than one block, e.g. Capybara Go's Daily Login Rewards,
  // Energy, Leaderboard; consolidating them must not hide how confident the
  // weakest one actually was).
  confidences: z.array(z.string()),
  // Carried for future review even though nothing renders it yet (spec
  // review, 9 Sep 2026): re-deriving this from 40 analysis files later would
  // mean re-parsing all of them, so it comes along now. When a tag has more
  // than one contributing block, each block's own paragraph is joined here
  // rather than one being discarded.
  rationale: z.string(),
  alternativeConsidered: z.string(),
  // What this mechanic does in this app: engagement, retention, monetization
  // or social (spec review, 11 Sep 2026). Data, not copy — no template
  // renders it. Optional since older analyses (e.g. Dave) predate the field.
  // When a tag has more than one contributing block and they agree, this is
  // that shared value; when they disagree, both are kept, joined with " | "
  // rather than one being picked arbitrarily, and the disagreement is warned
  // about at conversion time so it gets resolved in the source analysis.
  role: z.string().optional(),
});

// Derived from the single source of truth in v41-sections.mjs rather than
// hand-copied here — two independently maintained copies of the same list
// is exactly how they drift, which is what this replaces: this array used
// to be its own hand-typed literal, kept in sync with v41-sections.mjs by
// hand rather than by construction. The `as` assertion only tells
// TypeScript the array is non-empty, which z.enum requires syntactically;
// the values themselves still come from the one shared source at runtime.
const V41_SECTION_SLUGS = V41_SECTIONS.map((s) => s.slug) as [string, ...string[]];

const observation = z.object({
  id: z.string(),
  name: z.string(),
  section: z.enum(V41_SECTION_SLUGS),
  observed: z.string(),
  detail: z.array(z.string()),
  // No longer sourced (spec §1.7 review, 9 Sep 2026): the analysis file is
  // now read only for applied tags and header dates, and tier annotations
  // live nowhere else. Optional rather than removed, in case tiers get a
  // home again later.
  evidence: z.enum(["directly observed", "strongly supported", "plausible", "unresolved"]).optional(),
  // Publishing bar (spec §1.3) is enforced at parse time: a tag below
  // strongly-supported/confirmed never reaches this array at all.
  tags: z.array(observationTag),
  // Other observations this one points to, by id. Rendered as the titles of
  // the observations they point to at template time, never as codes.
  crossRefs: z.array(z.string()),
  screenshots: z.array(z.object({ src: z.string(), caption: z.string().nullable() })),
});

// One composed block per applied tag (spec §2.1): a written piece about that
// mechanic in this app, in four required parts, plus a note on which
// screenshots the block needs. Written from the observations carrying the
// tag, not a rendering of them — those stay in `observations` above for the
// tag index (spec §6.3) to use later. Joined to a tag by `name` matching the
// same display string in `observations[].tags[].name`.
//
// `summary` (added 16 Sep 2026, stage2-website-content.md amendment): one
// sentence under 25 words naming what this specific app does with the
// mechanic — not a definition of the mechanic and not a summary of the
// four parts below, what tells this app's implementation apart from every
// other app's on the mechanics index, which renders it as the card content
// (spec §3.5). Optional, not required like the four parts above: the nine
// existing v4.1 apps are being backfilled one at a time rather than all at
// once, and a future app re-run under an older prompt version shouldn't
// hard-fail the whole build over one missing sentence.
const mechanicWriteup = z.object({
  name: z.string(),
  summary: z.string().optional(),
  observed: z.string(),
  presented: z.string(),
  noting: z.string(),
  findings: z.array(z.string()),
  screenshotsNote: z.string(),
});

// Recorded per app, not rendered (spec §1.6) — input to library decisions,
// not published content.
const proposedTag = z.object({
  name: z.string(),
  sourceObservations: z.array(z.string()),
  draftDefinition: z.string(),
  conditions: z.string(),
  whyNotCovered: z.string(),
  recurrenceElsewhere: z.string(),
  caveat: z.string(),
});

const apps = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/apps" }),
  schema: z.object({
    id: z.string(),
    name: z.string(),
    category: z.string(),
    type: z.string(),
    visibility,
    analysisDate: z.string().nullable(),
    lastUpdated: z.string().nullable(),
    // v4.1-only header fields (spec review, 11 Sep 2026): "YYYY-MM", not a
    // full date — the analysis records only a month and year for when the
    // app was observed. appVersion is free text, null when the analysis
    // file's own "None" means no version was stated. Both optional since v3
    // apps carry neither.
    asObserved: z.string().optional(),
    appVersion: z.string().nullable().optional(),
    summary: z.string(),
    // One or two sentence index-card hook, distinct from the summary above.
    // Nullable: not every app (report-only, or awaiting a teaser) has one.
    teaser: z.string().nullable(),
    icon: z.string().nullable(),
    heroImage: z.string().nullable(),
    // "v3" (default, unset in existing files) or "v4.1". Distinguishes which
    // of the two field sets below is populated.
    contentFormat: z.enum(["v3", "v4.1"]).default("v3"),
    mechanics: z
      .array(
        z.object({
          id: z.string(),
          depth: z.enum(["core", "supporting", "shallow", "unusual"]),
          provisionalDepth: z.boolean().optional(),
          note: z.string().optional(),
          writeup,
          screenshots: z.array(z.object({ src: z.string(), caption: z.string().nullable() })),
          suggestedShots: z.array(z.string()),
        })
      )
      .optional(),
    observations: z.array(observation).optional(),
    // Narrative only, one string per paragraph — node positions and
    // connection pairs for the diagram still come from `system` below,
    // sourced from system.html (spec §1.5).
    systemView: z.array(z.string()).optional(),
    mechanicWriteups: z.array(mechanicWriteup).optional(),
    proposedTags: z.array(proposedTag).optional(),
    // Per-section authored copy (spec §2.1/§2.2), keyed by section slug.
    // sectionLeadIns may be incomplete while it's being written section by
    // section — validate-content.mjs warns rather than fails on a gap until
    // every non-empty section has one. sectionCards is the shorter one-line
    // blurb used on the summary page's section cards.
    // Plain string-keyed (not the section-slug enum): z.record with an enum
    // key type requires every enum member as a key, which defeats the point
    // of these being allowed to be partial while lead-ins are still being
    // written. Keys are validated against the slug list at render time.
    sectionLeadIns: z.record(z.string(), z.string()).optional(),
    sectionCards: z.record(z.string(), z.string()).optional(),
    system: z
      .object({
        tagline: z.string(),
        overview: z.string(),
        loop: z.string(),
        keyInsight: z.string(),
        whatMakesItWork: z.string(),
        roles: z.array(z.object({ id: z.string(), role: z.string() })),
        center: z.object({ x: z.number(), y: z.number(), label: z.string() }).nullable(),
        nodes: z.array(z.object({ id: z.string(), x: z.number(), y: z.number() })),
        connections: z.array(
          z.object({
            from: z.string(),
            to: z.string(),
            title: z.string(),
            desc: z.string(),
            effect: z.string(),
          })
        ),
      })
      .nullable(),
  }),
});

const mechanics = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/mechanics" }),
  schema: z.object({
    id: z.string(),
    n: z.string(),
    name: z.string(),
    cat: z.enum(["retention", "monetization", "social"]),
    tagline: z.string(),
    desc: z.string(),
    visibility,
    principle: z.string().optional(),
    players: z.array(z.string()).optional(),
    warn: z.string().optional(),
    variants: z.array(z.string()).optional(),
    lifecycle: z.string().optional(),
    paired: z.array(z.string()).optional(),
    context: z.array(z.string()).optional(),
    sdt: z.array(z.string()).optional(),
    toWrite: z.boolean().optional(),
  }),
});

const settings = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/settings" }),
  schema: z.object({
    id: z.string(),
    spotlightApp: z.string(),
    showcaseSystem: z.string(),
    featuredMechanics: z.array(z.string()),
    cheatsheetCount: z.number(),
    freeSystemApps: z.array(z.string()),
  }),
});

const cheatsheets = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/cheatsheets" }),
  schema: z.object({
    id: z.string(),
    n: z.number(),
    title: z.string(),
    desc: z.string(),
    mechanics: z.array(z.string()),
    apps: z.array(z.string()),
    steps: z.array(
      z.object({
        n: z.string(),
        heading: z.string(),
        body: z.string(),
        apps: z.array(z.string()),
      })
    ),
    visibility,
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/glossary" }),
  schema: z.object({
    id: z.string(),
    term: z.string(),
    def: z.string(),
    related: z.array(z.string()),
    visibility,
  }),
});

// Shortcasts: short (up to ~10 min) audio analyses of a single app. Authored
// directly as JSON (not generated from data.js). The mp3 lives under
// public/audio/ and is referenced by `audioSrc` (e.g. "/audio/strava.mp3").
const shortcasts = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/shortcasts" }),
  schema: z.object({
    id: z.string(),
    title: z.string(),
    // The app this episode analyses — free text label (e.g. "Strava").
    app: z.string().optional(),
    category: z.string().optional(),
    summary: z.string(),
    audioSrc: z.string(),
    // Human-readable running time shown before playback (e.g. "8:42").
    duration: z.string().optional(),
    date: z.string().nullable(),
    // Optional ordering key; higher sorts first. Defaults to date order.
    order: z.number().optional(),
    visibility,
  }),
});

// Category landing pages (/finance, /productivity, …). Each file supplies the
// category-specific blocks (hero copy, the three problem cards, the
// cross-category sentence, the hero logo set). Every other section (what you
// get, how it works, the email block, closing) is fixed copy shared across
// categories and hardcoded in CategoryLanding.astro, so a new category is
// still just one content file. A malformed block fails the build here,
// before anything ships.
const categories = defineCollection({
  loader: glob({ pattern: "*.json", base: "./src/content/categories" }),
  schema: z.object({
    slug: z.string(),
    name: z.string(),
    // Optional nav label/description and sort order for the "By industry" menu.
    navLabel: z.string().optional(),
    navDesc: z.string(),
    order: z.number().default(100),
    hero: z.object({
      headline: z.string(),
      sub: z.string(),
    }),
    // Exactly three problem cards: minimal icon, one line of text, no body copy.
    problemCards: z.array(z.object({ text: z.string() })).length(3),
    // The cross-category argument, in this category's own words (it names a
    // specific rival category, e.g. "other banks").
    crossCategory: z.object({ sentence: z.string() }),
    // Optional logo cards for the hero carousel (finance, etc.)
    heroApps: z.array(z.object({ id: z.string(), name: z.string() })).optional(),
    // Optional six-block "why it matters" grid (three columns by two rows),
    // category-specific since each block speaks to that category's own
    // product problems.
    whyItMatters: z
      .object({
        kicker: z.string(),
        title: z.string(),
        items: z.array(z.object({ title: z.string(), lead: z.string(), body: z.string() })).length(6),
      })
      .optional(),
  }),
});

export const collections = { apps, mechanics, settings, cheatsheets, glossary, categories, shortcasts };
