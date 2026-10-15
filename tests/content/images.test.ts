import { describe, expect, it } from "vitest";
import { ports } from "@/lib/ports";
import { IMAGE_HOST_WHITELIST, imageHost, isAllowedImageUrl } from "@/lib/ports/images";

function imageUrls(): { port: string; url: string }[] {
  const out: { port: string; url: string }[] = [];
  for (const port of ports) {
    if (port.cover) out.push({ port: port.id, url: port.cover.src });
    for (const shot of port.screenshots ?? []) out.push({ port: port.id, url: shot.src });
  }
  return out;
}

describe("catalog images", () => {
  it("uses only https image URLs", () => {
    for (const { port, url } of imageUrls()) {
      expect(url, port).toMatch(/^https:\/\//);
    }
  });

  it("keeps every image host on the whitelist", () => {
    const offenders = imageUrls()
      .filter(({ url }) => !isAllowedImageUrl(url))
      .map(({ port, url }) => `${port}: ${url}`);
    expect(offenders, `off-whitelist image hosts:\n${offenders.join("\n")}`).toEqual([]);
  });

  it("declares a well-formed host whitelist", () => {
    for (const host of IMAGE_HOST_WHITELIST) {
      expect(host).toMatch(/^[a-z0-9.-]+\.[a-z]{2,}$/);
    }
    // No "www." entry that duplicates a bare entry.
    const bare = IMAGE_HOST_WHITELIST.map((h) => h.replace(/^www\./, ""));
    expect(new Set(bare).size).toBe(bare.length);
  });

  it("resolves a host for every image URL", () => {
    for (const { port, url } of imageUrls()) {
      expect(imageHost(url), `${port}: ${url}`).not.toBeNull();
    }
  });
});
