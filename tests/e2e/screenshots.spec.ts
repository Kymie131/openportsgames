import { expect, test } from "@playwright/test";

/**
 * Regression guard for the screenshot crop bug: every frame must letterbox
 * non-16:9 captures with `object-fit: contain` instead of cropping them with
 * `object-cover`.
 */
test.describe("screenshot frames never crop", () => {
  const cases = [
    { path: "/ports/nxengine-evo", ratio: "4:3" },
    { path: "/ports/pokered", ratio: "10:9" },
  ];

  for (const { path, ratio } of cases) {
    test(`${ratio} capture on ${path} uses object-contain`, async ({ page }) => {
      await page.goto(path);
      const image = page.getByTestId("screenshot-image").first();
      await expect(image).toBeVisible();
      const objectFit = await image.evaluate((el) => getComputedStyle(el).objectFit);
      expect(objectFit).toBe("contain");
    });
  }

  test("catalog tile cover also uses object-contain", async ({ page }) => {
    await page.goto("/ports");
    const image = page.getByTestId("screenshot-image").first();
    await expect(image).toBeVisible();
    await expect
      .poll(() => image.evaluate((el) => getComputedStyle(el).objectFit))
      .toBe("contain");
  });
});
