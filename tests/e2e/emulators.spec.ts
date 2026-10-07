import { expect, test } from "@playwright/test";

test.describe("emulators section", () => {
  test("lists generations and drills into a console's emulators", async ({ page }) => {
    await page.goto("/emulators");
    await expect(page.locator("h1")).toHaveText(/Emulators|Emuladores/);

    // Pick the fifth generation.
    await page.getByRole("button", { name: /Fifth generation|Quinta generación/ }).click();
    await expect(page).toHaveURL(/gen=gen-5/);
    await expect(page.locator("h1")).toHaveText(/Fifth generation|Quinta generación/);

    // Pick the PlayStation.
    await page.getByRole("button", { name: /PlayStation\b.*Sony/ }).click();
    await expect(page).toHaveURL(/console=playstation/);
    await expect(page.locator("h1")).toHaveText("PlayStation");
    await expect(page.getByText(/Best compatibility|Mejor compatibilidad/)).toBeVisible();
    await expect(page.getByText("DuckStation")).toBeVisible();
  });

  test("a console with no emulator shows the empty state", async ({ page }) => {
    await page.goto("/emulators?gen=gen-9&console=playstation-5");
    await expect(page.getByText(/No public emulator yet|Aún sin emulador público/)).toBeVisible();
  });
});
