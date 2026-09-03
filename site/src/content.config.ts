import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const visibility = z.enum(["public", "subscriber", "report-only"]);

const writeup = z
  .object({
    observed: z.string().optional(),
    presented: z.string().optional(),
    noting: z.string().optional(),
    findings: z.array(z.string()).optional(),
  })
  .nullable();

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
    summary: z.string(),
    icon: z.string().nullable(),
    heroImage: z.string().nullable(),
    mechanics: z.array(
      z.object({
        id: z.string(),
        depth: z.enum(["core", "supporting", "shallow", "unusual"]),
        provisionalDepth: z.boolean().optional(),
        note: z.string().optional(),
        writeup,
        screenshots: z.array(z.object({ src: z.string(), caption: z.string().nullable() })),
        suggestedShots: z.array(z.string()),
      })
    ),
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
// category-specific blocks; the shared blocks ("what access includes", the
// access/pricing band, the stance band) are hardcoded in CategoryLanding.astro
// so a new category is still just one content file. A malformed block fails
// the build here, before anything ships.
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
      kicker: z.string(),
      headline: z.string(),
      sub: z.string(),
    }),
    // Small caption above the hero's logo carousel and a stats line below it.
    // The stats themselves (app / category / weekly counts) are computed live
    // in the template from the published collections, never hand-typed here.
    logoStrip: z.object({ label: z.string() }).optional(),
    // "The six problems" — a section heading plus exactly six items. Each
    // names one real mechanic and one real app with a complete write-up, so
    // the "In the library" link always lands on substantive content.
    problems: z.object({
      kicker: z.string(),
      title: z.string(),
      items: z
        .array(
          z.object({
            title: z.string(),
            lead: z.string(),
            body: z.string(),
            mechanicId: z.string(),
            appId: z.string(),
          })
        )
        .length(6),
    }),
    // "Why every category" — the cross-category argument, in this category's
    // own words (it names a specific rival category, e.g. "a banking app").
    whyEveryCategory: z.object({
      kicker: z.string(),
      headline: z.string(),
      body: z.string(),
    }),
    // The one open, no-email sample case study for this category. Must be a
    // published app with a complete write-up; ideally public so the link
    // never lands on the paywall, though the case study route gates cleanly
    // either way.
    sample: z.object({ appId: z.string() }),
    // The newsletter / free-report capture (section 8, the only form on the
    // page). The report URL is derived at runtime: /{slug}/report.
    newsletter: z.object({
      eyebrow: z.string(),
      title: z.string(),
      body: z.string(),
      // Optional report cover image shown beside the capture form.
      imageHref: z.string().optional(),
    }),
    // Optional logo cards for the hero carousel (finance, etc.)
    heroApps: z.array(z.object({ id: z.string(), name: z.string() })).optional(),
  }),
});

export const collections = { apps, mechanics, settings, cheatsheets, glossary, categories, shortcasts };
