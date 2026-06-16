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
        screenshots: z.array(z.string()),
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
    iconStripApps: z.array(z.string()),
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

// Category landing pages (/finance, /productivity, …). Each file supplies only
// the category-specific blocks; the shared blocks (the lens, the trust section,
// the call) live in the template and are inherited. A missing or malformed
// block fails the build here, before anything ships.
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
    // Exactly six — the section is "the six problems" by design.
    problems: z.array(z.object({ title: z.string(), body: z.string() })).length(6),
    report: z.object({
      eyebrow: z.string(),
      title: z.string(),
      body: z.string(),
      stats: z.array(z.object({ n: z.string(), l: z.string() })),
      // Lead magnet served as a static asset; the email gate is wired through
      // the /api/lead Cloudflare Function, never a mailto.
      fileHref: z.string(),
      fileLabel: z.string(),
    }),
  }),
});

export const collections = { apps, mechanics, settings, cheatsheets, glossary, categories };
