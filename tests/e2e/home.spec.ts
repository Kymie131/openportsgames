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

test("home hero donate CTA follows the PayPal configuration", async ({ page }) => {
  await page.goto("/");
  const donate = page.getByRole("link", { name: "Donate with PayPal" });
  await expect(donate).toHaveCount(paypalUrl ? 1 : 0);
  if (paypalUrl) {
    await expect(donate).toHaveAttribute("href", paypalUrl);
    await expect(donate).toHaveAttribute("rel", /noopener/);
  }
});