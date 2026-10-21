import { describe, expect, it } from "vitest";
import { getImageHosts, ports } from "@/lib/ports";

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
    const counts = new Map<string, number>();
    const add = (url: string) => {
      const host = new URL(url).host;
      counts.set(host, (counts.get(host) ?? 0) + 1);
    };
    for (const port of ports) {
      for (const shot of port.screenshots ?? []) add(shot.src);
      if (port.cover) add(port.cover.src);
    }
    const busiest = [...counts.entries()].sort((a, b) => b[1] - a[1])[0]?.[0];
    expect(getImageHosts(1)[0]).toBe(busiest);
  });
});
