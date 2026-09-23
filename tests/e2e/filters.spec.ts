import { expect, test } from "@playwright/test";

test.describe("catalog filters", () => {
  test("multi-select chips drive the URL with repeated params", async ({ page }) => {
    await page.goto("/ports");
    await expect(page.locator("h1")).toHaveText("Catalog");

    await page.getByRole("button", { name: "Linux", exact: true }).click();
    await expect(page).toHaveURL(/platform=linux/);

    await page.getByRole("button", { name: "Windows", exact: true }).click();
    await expect(page).toHaveURL(/platform=(linux|windows).*platform=(linux|windows)/);
    await expect(page).toHaveURL(/platform=linux/);
    await expect(page).toHaveURL(/platform=windows/);
  });

  test("filters persist between sessions and are re-applied on a clean URL", async ({ page }) => {
    await page.goto("/ports");
    await page.getByRole("button", { name: "Linux", exact: true }).click();
    await expect(page).toHaveURL(/platform=linux/);

    const stored = await page.evaluate(() => localStorage.getItem("opg-catalog-filters"));
    expect(stored).toContain('"platform"');
    expect(stored).toContain("linux");

    await page.goto("/ports");
    await expect(page).toHaveURL(/platform=linux/);
  });

  test("clear filters resets the URL and the stored set", async ({ page }) => {
    await page.goto("/ports");
    await page.getByRole("button", { name: "Linux", exact: true }).click();
    await expect(page).toHaveURL(/platform=linux/);

    await page.getByRole("button", { name: "Clear filters" }).click();
    await expect(page).toHaveURL(/\/ports\/?$/);
    const stored = await page.evaluate(() => localStorage.getItem("opg-catalog-filters"));
    expect(stored).toBeNull();
  });

  test("sort writes a single param", async ({ page }) => {
    await page.goto("/ports");
    await page.getByLabel("Sort").selectOption("Newest");
    await expect(page).toHaveURL(/sort=newest/);
  });

  test("mobile: the panel opens in a drawer and applies live", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 700 });
    await page.goto("/ports");

    await page.getByRole("button", { name: /Filters/ }).click();
    const drawer = page.getByRole("dialog");
    await expect(drawer).toBeVisible();

    await drawer.getByRole("button", { name: "Linux", exact: true }).click();
    await expect(page).toHaveURL(/platform=linux/);

    await drawer.getByRole("button", { name: /See .+ results/ }).click();
    await expect(drawer).not.toBeVisible();
  });
});
