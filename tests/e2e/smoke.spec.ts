import { expect, test } from "@playwright/test";

const ROUTES = [
  { path: "/en/", heading: /OpenPortsGames/ },
  { path: "/en/ports/", heading: /Catalog|Catálogo/ },
  { path: "/en/pc/", heading: /PC/ },
  { path: "/en/android/", heading: /Android/ },
  { path: "/en/emulators/", heading: /Emulators|Emuladores/ },
  { path: "/en/testing/", heading: /Testing|Pruebas/ },
  { path: "/en/guides/", heading: /Guides|Guías/ },
  { path: "/en/submit/", heading: /Submit|Enviar/ },
  { path: "/en/support/", heading: /Support|Apoyo/ },
  { path: "/en/about/", heading: /About|Acerca de/ },
  { path: "/en/legal/", heading: /Legal/ },
];

test.describe("main routes", () => {
  for (const route of ROUTES) {
    test(`${route.path} renders shell, heading and footer`, async ({ page }) => {
      await page.goto(route.path);
      await expect(page.getByRole("banner")).toBeVisible();
      await expect(page.locator("h1")).toHaveText(route.heading);
      await expect(page.locator("footer")).toBeVisible();
    });
  }
});

test("port detail renders a full entry", async ({ page }) => {
  await page.goto("/en/ports/2ship2harkinian");
  await expect(page.locator("h1")).toHaveText("2 Ship 2 Harkinian");
  await expect(page.locator("h2", { hasText: /Where to get it|Dónde conseguirlo/ })).toBeVisible();
  await expect(page.locator('a[href^="https://github.com"]').first()).toBeVisible();
});

test("unknown path falls back to the custom 404 with language links", async ({ page }) => {
  await page.goto("/does-not-exist");
  await expect(page.locator("h1")).toHaveText(/Page not found|Página no encontrada/);
  await expect(page.locator('a[href="/en/"]').first()).toBeVisible();
  await expect(page.locator('a[href="/es/"]').first()).toBeVisible();
});

test("API endpoint is a versioned static snapshot", async ({ request }) => {
  const response = await request.get("/api/ports.json");
  expect(response.ok()).toBe(true);
  const payload = await response.json();
  expect(payload.schema).toBe("openportsgames/catalog");
  expect(payload.version).toBe(2);
  expect(payload.ports.length).toBeGreaterThanOrEqual(20);
  expect(Array.isArray(payload.tests)).toBe(true);
  expect(Array.isArray(payload.hardware)).toBe(true);
  expect(payload.ports[0]).toHaveProperty("id");
});

test("catalog search filters results", async ({ page }) => {
  await page.goto("/en/ports/");
  // "Pinyon Shift" is unique to the Forza Horizon port; broader terms like
  // "Tomb Raider" now fuzzy-match several titles.
  const input = page.locator("main").getByPlaceholder(/Search by port/);
  await input.fill("Pinyon Shift");
  await expect(page.locator("article")).toHaveCount(1);
});
