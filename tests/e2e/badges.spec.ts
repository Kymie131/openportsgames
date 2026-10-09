import { expect, test } from "@playwright/test";

test.describe("console logo badges", () => {
  test("detail hero shows the real console logo badge", async ({ page }) => {
    await page.goto("/ports/sm64ex");
    const badge = page.locator('figure img[src^="/logos/console/"]');
    await expect(badge).toHaveAttribute("src", "/logos/console/n64.png");
    await expect(page.locator('figure span[role="img"][aria-label="Nintendo 64"]')).toBeVisible();
  });

  test("a system without artwork shows no console logo image", async ({ page }) => {
    await page.goto("/ports/julius");
    const hero = page.locator("figure").first();
    await expect(hero).toBeVisible();
    await expect(hero.locator('img[src^="/logos/console/"]')).toHaveCount(0);
  });

  test("catalog tiles render the console logo in the art strip", async ({ page }) => {
    await page.goto("/ports");
    const tileLogo = page.locator('article img[src^="/logos/console/"]').first();
    await expect(tileLogo).toBeVisible();
  });

  test("logo assets are served", async ({ request }) => {
    const response = await request.get("/logos/console/n64.png");
    expect(response.status()).toBe(200);
  });
});
