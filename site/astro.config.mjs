import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// The production domain is set when Cloudflare is pointed at the new build
// (Stage 2 sign-off). Until then the env var or placeholder keeps sitemap
// generation working on previews.
const site = process.env.SITE_URL || "https://mechanics-playbook.pages.dev";

export default defineConfig({
  site,
  integrations: [react(), sitemap()],
});
