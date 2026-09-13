/**
 * The nine fixed sections of the v4.1 content model (appservatory spec §1.2),
 * in their fixed order. Single source of truth: imported by both
 * convert-content.mjs (a plain Node script) and the Astro/template layer, so
 * the slug list and its order can't drift between the two.
 */
export const V41_SECTIONS = [
  { slug: "onboarding", name: "Onboarding and first run" },
  { slug: "core-loop", name: "Core loop and automation" },
  { slug: "goals", name: "Goals and progression" },
  { slug: "access", name: "Access and eligibility" },
  { slug: "economy", name: "Economy and resources" },
  { slug: "social", name: "Social" },
  { slug: "reach", name: "Reach beyond the app" },
  { slug: "monetization", name: "Monetization" },
  { slug: "returns", name: "Return triggers" },
];
