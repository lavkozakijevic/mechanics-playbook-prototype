import { defineConfig, sessionDrivers } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";
import cloudflare from "@astrojs/cloudflare";
import fs from "node:fs";
import path from "node:path";

// The production domain is set when Cloudflare is pointed at the new build
// (Stage 2 sign-off). Until then the env var or placeholder keeps sitemap
// generation working on previews.
const site = process.env.SITE_URL || "https://mechanics-playbook.pages.dev";

// Case study and system pages for apps that are not free are rendered on request
// (never written to a file), so the sitemap integration cannot see them. Their
// gate pages are still real pages (indexable after launch, with only public text),
// so they are listed here from the content. Section pages of a locked app redirect
// to the summary page and are not listed. Report-only apps are never listed.
function lockedAppPages() {
  const dir = path.resolve("./src/content/apps");
  if (!fs.existsSync(dir)) return [];
  const pages = [];
  for (const f of fs.readdirSync(dir).filter((n) => n.endsWith(".json")).sort()) {
    const app = JSON.parse(fs.readFileSync(path.join(dir, f), "utf8"));
    if (app.visibility !== "subscriber") continue;
    pages.push(new URL(`/case-studies/${app.id}/`, site).href);
    if (app.system) pages.push(new URL(`/systems/${app.id}/`, site).href);
  }
  return pages;
}

// Output stays static: every page is pre-built exactly as before. The adapter
// only matters for routes that opt out with `export const prerender = false`
// (login, the sign-in callback, sign-out, /api/auth/me, /api/lead), which run
// in a Cloudflare Worker.
//
// Three adapter defaults are switched off because nothing here uses them:
//  - prerenderEnvironment "node": pre-built pages render in Node at build
//    time, as they always have. The default (workerd) would change what
//    process.env and Node APIs mean for pages like src/lib/preview.ts.
//  - session: Astro's own sessions are unused (auth cookies are Supabase's,
//    set in src/lib/auth-server.ts); the adapter would otherwise add a
//    Cloudflare KV binding that gets auto-provisioned on deploy.
//  - imageService "passthrough": no page uses astro:assets, and the default
//    would add a Cloudflare Images binding.
// The adapter sets a Rollup banner (globalThis.process ??= {} ...) meant for the
// Worker bundle, and it also ends up at the top of every browser bundle, where
// it would define a global `process` on every page. Browser bundles must stay
// as they were, so it is removed from the client environment only.
const ADAPTER_PROCESS_BANNER = "globalThis.process ??= {}; globalThis.process.env ??= {};";
const stripProcessBannerFromClient = {
  name: "strip-adapter-process-banner-from-client",
  applyToEnvironment: (environment) => environment.name === "client",
  renderChunk(code) {
    return code.includes(ADAPTER_PROCESS_BANNER)
      ? { code: code.split(ADAPTER_PROCESS_BANNER).join(""), map: null }
      : null;
  },
};

export default defineConfig({
  site,
  adapter: cloudflare({
    prerenderEnvironment: "node",
    imageService: "passthrough",
  }),
  session: { driver: sessionDrivers.null() },
  // The sign-in and checkout pages render on request and are not pages to
  // list: they only ever serve a signed-in visitor or a one-time link.
  integrations: [react(), sitemap({ filter: (page) => !/^\/(auth|checkout)\//.test(new URL(page).pathname), customPages: lockedAppPages() })],
  vite: { plugins: [stripProcessBannerFromClient] },
});
