import { defineConfig } from "@playwright/test";

/**
 * Smoke tests run against the static export served locally.
 * Browsers: use PLAYWRIGHT_CHANNEL (e.g. "msedge") since Playwright's own
 * chromium is not installed by default; CI does not run these specs.
 */
export default defineConfig({
  testDir: "tests/e2e",
  timeout: 30_000,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"]],
  use: {
    baseURL: "http://localhost:4173",
    channel: process.env.PLAYWRIGHT_CHANNEL || undefined,
    screenshot: "only-on-failure",
  },
  webServer: {
    command: "npm run build && node scripts/serve-static.mjs",
    url: "http://localhost:4173",
    reuseExistingServer: false,
    timeout: 240_000,
  },
});
