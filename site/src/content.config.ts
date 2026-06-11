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
  }),
});

export const collections = { apps, mechanics, settings };
