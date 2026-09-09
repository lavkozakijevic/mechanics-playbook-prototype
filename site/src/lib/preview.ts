/**
 * Build-time-only preview override for reading gated (subscriber) content
 * locally before authentication exists. Off by default. See the plan this
 * was agreed against: it must fail closed, never affect a normal build, and
 * never be reachable from a production build.
 *
 * This is read once, here, at build time in Node — never from client-side
 * code (nothing here is imported by a React island or any browser-executed
 * file), so nothing about it can leak into a shipped JS bundle. It uses
 * `process.env` rather than `import.meta.env` deliberately: Vite only
 * auto-inlines `import.meta.env.*` into client bundles for PUBLIC_/VITE_-
 * prefixed names, but plain `process.env` lookups in Astro frontmatter never
 * reach the browser at all, by construction.
 *
 * Two independent conditions both have to hold for this to be true:
 *  1. An exact, deliberate opt-in value (not just "set to anything"), so a
 *     stray env var left in a shared shell profile can't trigger it.
 *  2. None of the CI/hosting markers below are present. This repo deploys
 *     via Cloudflare Pages' own git integration (no wrangler-deploy step
 *     exists anywhere in it) — that build container always sets CI and
 *     CF_PAGES, so even a mistaken opt-in in a hosting dashboard is inert
 *     there. GITHUB_ACTIONS/VERCEL/NETLIFY are included for defense in
 *     depth; naming more markers only ever narrows when this can be true.
 *
 * If either condition fails, this is false and every page behaves exactly
 * as if this module didn't exist.
 */
const CI_MARKERS = ["CI", "CF_PAGES", "GITHUB_ACTIONS", "VERCEL", "NETLIFY"];

export const PREVIEW_UNLOCK: boolean =
  process.env.PREVIEW_UNLOCK_LOCAL === "unlock-for-local-preview-only" &&
  !CI_MARKERS.some((k) => process.env[k]);
