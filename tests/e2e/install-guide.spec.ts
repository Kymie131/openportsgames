import { expect, test } from "@playwright/test";

test("port detail shows the installation guide with its steps", async ({ page }) => {
  await page.goto("/ports/sm64ex");
  await expect(page.locator("h2", { hasText: "Installation guide" })).toBeVisible();
  const steps = page.locator("section h2 >> xpath=following-sibling::ol").first().locator("li");
  await expect(steps).toHaveCount(4);
  await expect(steps.first()).toContainText("Super Mario 64");
});

test("spanish locale renders the hand-written translated steps", async ({ page }) => {
  await page.addInitScript(() => window.localStorage.setItem("opg-locale", "es"));
  await page.goto("/ports/sm64ex");
  await expect(page.locator("h2", { hasText: "Guía de instalación" })).toBeVisible();
  const firstStep = page
    .locator("section h2 >> xpath=following-sibling::ol")
    .first()
    .locator("li")
    .first();
  await expect(firstStep).toContainText("Ten una copia");
});
