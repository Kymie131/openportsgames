import { describe, expect, it } from "vitest";
import { SITE_NAME, absoluteUrl, getSiteUrl } from "@/lib/site";

describe("site metadata", () => {
  it("exposes the site name", () => {
    expect(SITE_NAME).toBe("OpenPortsGames");
  });

  it("normalizes a trailing slash out of the base URL", () => {
    expect(getSiteUrl()).not.toMatch(/\/$/);
  });

  it("builds absolute URLs from the base", () => {
    const url = absoluteUrl("/ports");
    expect(url.startsWith("http")).toBe(true);
    expect(url.endsWith("/ports")).toBe(true);
  });

  it("adds a leading slash when the path is missing one", () => {
    expect(absoluteUrl("ports").endsWith("/ports")).toBe(true);
  });
});
