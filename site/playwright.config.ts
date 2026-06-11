import { defineConfig } from "@playwright/test";

/**
 * Smoke tests run against the built site (dist/), served by `astro preview`.
 * Run `npm run build` first — CI does this automatically.
 */
export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? "github" : "list",
  use: {
    baseURL: "http://localhost:4321",
  },
  webServer: {
    command: "npm run preview",
    url: "http://localhost:4321",
    reuseExistingServer: !process.env.CI,
    timeout: 30_000,
  },
});
