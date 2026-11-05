import { existsSync, readFileSync } from "node:fs";
import { expect, test } from "@playwright/test";

const paypalUrl = existsSync(".env.local")
  ? /NEXT_PUBLIC_SUPPORT_PAYPAL_URL=(.*)/
      .exec(readFileSync(".env.local", "utf8"))?.[1]
      ?.trim()
  : undefined;

test("home hero links to the catalog", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.locator("h1")).toHaveText("OpenPortsGames");
  await expect(page.getByText("Old games. New machines.")).toBeVisible();
  await expect(page.getByRole("link", { name: "Browse the catalog" })).toHaveAttribute(
    "href",
    "/en/ports/",
  );
});

test("home showcase switches between new, updated and featured ports", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.locator("#showcase-heading")).toHaveText("Fresh from the scene");

  const newTab = page.getByRole("tab", { name: "New" });
  const updatedTab = page.getByRole("tab", { name: "Updated" });
  await expect(newTab).toHaveAttribute("aria-selected", "true");

  await updatedTab.click();
  await expect(updatedTab).toHaveAttribute("aria-selected", "true");
  await expect(page.getByRole("tabpanel")).toBeVisible();
});

test("home console shelf links to real console hubs", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.locator('a[href="/en/console/nintendo-64/"]').first()).toBeVisible();
  await expect(page.locator('a[href="/en/console/playstation-2/"]').first()).toBeVisible();
});

test("home hero donate CTA is always visible and points to PayPal when configured", async ({
  page,
}) => {
  await page.goto("/en/");
  const donate = page.getByRole("link", { name: "Donate with PayPal" });
  await expect(donate).toBeVisible();
  if (paypalUrl) {
    await expect(donate).toHaveAttribute("href", paypalUrl);
    await expect(donate).toHaveAttribute("rel", /noopener/);
  } else {
    await expect(donate).toHaveAttribute("href", "/en/support/");
  }
});
