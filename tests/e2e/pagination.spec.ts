import { expect, test } from "@playwright/test";

test.describe("catalog pagination", () => {
  test("moves to the next page, updates the URL and the range label", async ({ page }) => {
    await page.goto("/ports");
    await expect(page.getByText(/Showing 1–30 of \d+ ports/)).toBeVisible();

    await page.getByRole("button", { name: "Next" }).click();
    await expect(page).toHaveURL(/[?&]page=2/);
    await expect(page.getByText(/Showing 31–60 of \d+ ports/)).toBeVisible();
    await expect(page.getByRole("button", { name: "Go to page 2" })).toHaveAttribute(
      "aria-current",
      "page",
    );
  });

  test("changing a filter resets to the first page", async ({ page }) => {
    await page.goto("/ports?page=2");
    await expect(page.getByText(/Showing 31–60 of \d+ ports/)).toBeVisible();
    await page.getByRole("button", { name: "Android" }).click();
    await expect(page).not.toHaveURL(/page=2/);
    await expect(page.getByText(/Showing 1–/)).toBeVisible();
  });
});
