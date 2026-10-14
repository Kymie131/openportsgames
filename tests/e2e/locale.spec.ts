import { expect, test } from "@playwright/test";

test("language switcher changes the URL to the other locale", async ({ page }) => {
  await page.goto("/en/guides/");
  await expect(page.locator("h1")).toHaveText("Guides");
  await expect(page.locator("html")).toHaveAttribute("lang", "en");

  await page.getByRole("link", { name: "es", exact: true }).click();
  await expect(page).toHaveURL(/\/es\/guides\/$/);
  await expect(page.locator("h1")).toHaveText("Guías");
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
});

test("switching back returns to the English URL", async ({ page }) => {
  await page.goto("/es/ports/");
  await expect(page.locator("h1")).toHaveText("Catálogo");

  await page.getByRole("link", { name: "en", exact: true }).click();
  await expect(page).toHaveURL(/\/en\/ports\/$/);
  await expect(page.locator("h1")).toHaveText("Catalog");
});

test("the /es/ HTML already contains Spanish text", async ({ page }) => {
  await page.goto("/es/guides/");
  await expect(page.locator("html")).toHaveAttribute("lang", "es");
  await expect(page.locator("h1")).toHaveText("Guías");
});

test("hreflang alternates are reciprocal between es and en", async ({ page }) => {
  const languagesOf = async (url: string) => {
    await page.goto(url);
    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll('link[rel="alternate"]')).map((el) => ({
        hreflang: el.getAttribute("hreflang"),
        href: el.getAttribute("href"),
      })),
    );
    return Object.fromEntries(links.map((l) => [l.hreflang, l.href])) as Record<string, string>;
  };

  const en = await languagesOf("/en/guides/");
  const es = await languagesOf("/es/guides/");

  expect(en.es).toContain("/es/guides/");
  expect(es.en).toContain("/en/guides/");
  expect(en.es).toBe(es.es);
  expect(en.en).toBe(es.en);
  expect(en["x-default"]).toContain("/en/guides/");
});
