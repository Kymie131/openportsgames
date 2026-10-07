import { describe, expect, it } from "vitest";
import { getImageHosts } from "@/lib/ports";

describe("getImageHosts", () => {
  it("returns a small, de-duplicated, ranked list of image hosts", () => {
    const hosts = getImageHosts(6);
    expect(hosts.length).toBeLessThanOrEqual(6);
    expect(hosts.length).toBeGreaterThan(0);
    expect(new Set(hosts).size).toBe(hosts.length);
    for (const host of hosts) {
      expect(host).not.toMatch(/^https?:/);
      expect(host).toMatch(/\.[a-z]{2,}$/i);
    }
  });

  it("puts the busiest host first", () => {
    const hosts = getImageHosts(1);
    expect(hosts[0]).toBe("thumbnails.libretro.com");
  });
});
