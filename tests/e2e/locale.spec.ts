import { expect, test } from "@playwright/test";

test("language switcher flips UI text to Spanish and persists", async ({ page }) => {
  await page.goto("/guides");
  await expect(page.locator("h1")).toHaveText("Guides");

  await page.getByRole("button", { name: "es", exact: true }).click();
  await expect(page.locator("h1")).toHaveText("Guías");
  await expect(page.getByRole("button", { name: "es", exact: true })).toHaveAttribute(
    "aria-pressed",
    "true",
  );

  await page.reload();
  await expect(page.locator("h1")).toHaveText("Guías");
});

test("flagship catalog page renders translated filter labels in Spanish", async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem("opg-locale", "es"));
  await page.goto("/ports");
  await expect(page.locator("h1")).toHaveText("Catálogo");
  await expect(page.getByPlaceholder("Busca por port, juego o desarrollador…")).toBeVisible();
});
