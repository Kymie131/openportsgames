import { readFileSync } from "node:fs";
import { expect, test } from "@playwright/test";

const paypalUrl = /NEXT_PUBLIC_SUPPORT_PAYPAL_URL=(.*)/
  .exec(readFileSync(".env.local", "utf8"))?.[1]
  ?.trim();

test("home hero links to the catalog", async ({ page }) => {
  await page.goto("/");
  await expect(page.locator("h1")).toHaveText("OpenPortsGames");
  await expect(page.getByRole("link", { name: "Browse the catalog" })).toHaveAttribute(
    "href",
    "/ports/",
  );
});

test("home shows a computed Latest releases section before Featured", async ({ page }) => {
  await page.goto("/");
  const latest = page.locator("#latest-heading");
  const featured = page.locator("#featured-heading");
  await expect(latest).toBeVisible();
  await expect(featured).toBeVisible();
  await expect(latest).toHaveText(/Latest releases|Últimas versiones/);
  // Latest must appear above the manually curated Featured section.
  const order = await page
    .locator("h2")
    .evaluateAll((nodes) => nodes.map((n) => n.id).filter(Boolean));
  expect(order.indexOf("latest-heading")).toBeLessThan(order.indexOf("featured-heading"));
  const latestSection = page.locator('section[aria-labelledby="latest-heading"]');
  await expect(latestSection.locator("article")).toHaveCount(6);
});

test("home hero donate CTA is always visible and points to PayPal when configured", async ({
  page,
}) => {
  await page.goto("/");
  const donate = page.getByRole("link", { name: "Donate with PayPal" });
  await expect(donate).toBeVisible();
  if (paypalUrl) {
    await expect(donate).toHaveAttribute("href", paypalUrl);
    await expect(donate).toHaveAttribute("rel", /noopener/);
  } else {
    await expect(donate).toHaveAttribute("href", "/support");
  }
});
