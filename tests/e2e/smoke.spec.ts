import { expect, test } from "@playwright/test";

const ROUTES = [
  { path: "/", heading: /OpenPortsGames/ },
  { path: "/ports", heading: /Catalog|Catálogo/ },
  { path: "/pc", heading: /PC/ },
  { path: "/android", heading: /Android/ },
  { path: "/testing", heading: /Testing|Pruebas/ },
  { path: "/guides", heading: /Guides|Guías/ },
  { path: "/submit", heading: /Submit|Enviar/ },
  { path: "/support", heading: /Support|Apoyo/ },
  { path: "/about", heading: /About|Acerca de/ },
  { path: "/legal", heading: /Legal/ },
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
  await page.goto("/ports/2ship2harkinian");
  await expect(page.locator("h1")).toHaveText("2 Ship 2 Harkinian");
  await expect(page.locator("h2", { hasText: /Where to get it|Dónde conseguirlo/ })).toBeVisible();
  await expect(page.locator('a[href^="https://github.com"]').first()).toBeVisible();
});

test("unknown path falls back to the custom 404", async ({ page }) => {
  await page.goto("/does-not-exist");
  await expect(page.locator("h1")).toHaveText(/Page not found|Página no encontrada/);
  await expect(page.locator('a[href="/ports/"]').first()).toBeVisible();
});

test("API endpoint is a versioned static snapshot", async ({ request }) => {
  const response = await request.get("/api/ports.json");
  expect(response.ok()).toBe(true);
  const payload = await response.json();
  expect(payload.schema).toBe("openportsgames/catalog");
  expect(payload.version).toBe(1);
  expect(payload.ports.length).toBeGreaterThanOrEqual(20);
  expect(Array.isArray(payload.tests)).toBe(true);
  expect(Array.isArray(payload.hardware)).toBe(true);
  expect(payload.ports[0]).toHaveProperty("id");
});

test("catalog search filters results", async ({ page }) => {
  await page.goto("/ports");
  const input = page.getByPlaceholder(/Search by port/);
  await input.fill("OpenLara");
  await expect(page.locator("article")).toHaveCount(1);
});