import { expect, test } from "@playwright/test";

test.describe("emulators section", () => {
  test("lists generations and drills into a console's emulators", async ({ page }) => {
    await page.goto("/en/emulators");
    await expect(page.locator("h1")).toHaveText(/Emulators|Emuladores/);

    // The cards are real links, so the view must change together with the URL:
    // before the fix the URL moved but the page stayed on the generation list.
    await page.locator('a[href*="gen=gen-5"]').first().click();
    await expect(page).toHaveURL(/gen=gen-5/);
    await expect(page.locator("h1")).toHaveText(/Fifth generation|Quinta generación/);

    await page.locator('a[href*="console=playstation"]').first().click();
    await expect(page).toHaveURL(/console=playstation/);
    await expect(page.locator("h1")).toHaveText("PlayStation");
    await expect(page.getByText(/Best compatibility|Mejor compatibilidad/)).toBeVisible();
    await expect(page.getByText("DuckStation")).toBeVisible();
  });

  test("PS5 lists its experimental emulators", async ({ page }) => {
    await page.goto("/en/emulators?gen=gen-9&console=playstation-5");
    await expect(page.getByRole("heading", { name: "SharpEmu" })).toBeVisible();
    await expect(page.getByRole("heading", { name: "KytyPS5" })).toBeVisible();
  });

  test("a console with no emulator shows the empty state", async ({ page }) => {
    await page.goto("/en/emulators?gen=gen-9&console=xbox-series");
    await expect(page.getByText(/No public emulator yet|Aún sin emulador público/)).toBeVisible();
  });
});

test.describe("console homebrew section", () => {
  test("the index links to a real page per console", async ({ page }) => {
    await page.goto("/en/console");
    await expect(page.locator("h1")).toHaveText(/Console homebrew|Homebrew para consolas/);
    await page.locator('a[href*="/en/console/playstation-2"]').first().click();
    await expect(page).toHaveURL(/\/en\/console\/playstation-2\/$/);
    await expect(page.locator("h1")).toHaveText("PlayStation 2");
    await expect(
      page.getByRole("heading", { name: /Builds that run on this console|Builds que funcionan/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Community ports of its games|Ports de la comunidad/ }),
    ).toBeVisible();
    await expect(
      page.getByRole("heading", { name: /Where the community publishes it|Dónde lo publica/ }),
    ).toBeVisible();
  });

  test("the Spanish index keeps working", async ({ page }) => {
    await page.goto("/es/console");
    await expect(page.locator("h1")).toHaveText("Homebrew para consolas");
    await page.locator('a[href*="/es/console/playstation-portable"]').first().click();
    await expect(page).toHaveURL(/\/es\/console\/playstation-portable\/$/);
    await expect(page.locator("h1")).toHaveText("PlayStation Portable");
    await expect(page.locator("text=github.com").first()).toBeVisible();
  });
});
