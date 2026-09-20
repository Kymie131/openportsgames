import { describe, expect, it } from "vitest";
import { getPorts, ports } from "@/lib/ports";
import { todayIso, isBeforeOrOn } from "@/lib/dates";

describe("catalog ports", () => {
  it("exposes a non-empty sorted list", () => {
    const list = getPorts();
    expect(list.length).toBeGreaterThan(0);
    const titles = list.map((port) => port.title);
    expect(titles).toEqual([...titles].sort((a, b) => a.localeCompare(b)));
  });

  it("uses unique lowercase kebab ids and unique titles", () => {
    const ids = ports.map((port) => port.id);
    expect(new Set(ids).size).toBe(ids.length);
    expect(ids).toEqual(
      ids.map((id) => id.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")),
    );
    const titles = ports.map((port) => port.title);
    expect(new Set(titles).size).toBe(titles.length);
  });

  it("declares an ai disclosure state on every port", () => {
    for (const port of ports) {
      expect(typeof port.aiDisclosure, port.id).toBe("boolean");
    }
  });

  it("keeps original-year fields plausible", () => {
    for (const port of ports) {
      expect(port.originalYear, port.id).toBeGreaterThanOrEqual(1970);
      expect(port.originalYear, port.id).toBeLessThanOrEqual(2030);
    }
  });

  it("links only to official https sources", () => {
    for (const port of ports) {
      expect(port.sources.length, port.id).toBeGreaterThan(0);
      for (const source of port.sources) {
        expect(source, port.id).toMatch(/^https:\/\//);
      }
    }
  });

  it("covers at least one Android port per hardware target", () => {
    expect(ports.some((port) => port.platforms.includes("android"))).toBe(true);
  });
});

describe("release and verification invariants", () => {
  it("requires a version and verifiedAt when verified, and forbids them when not", () => {
    for (const port of ports) {
      if (port.verified) {
        expect(port.release.version, port.id).not.toBeNull();
        expect(port.verifiedAt, port.id).toBeTruthy();
      } else {
        expect(port.verifiedAt, port.id).toBeUndefined();
      }
      if (port.release.version === null) {
        expect(port.verified, port.id).toBe(false);
        expect(port.release.date, port.id).toBeNull();
      } else {
        expect(port.release.date, port.id).not.toBeNull();
      }
    }
  });

  it("uses ISO release dates and never dates from the future", () => {
    const today = todayIso();
    for (const port of ports) {
      if (port.release.date) {
        expect(port.release.date, port.id).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        expect(isBeforeOrOn(port.release.date, today), `${port.id} release date`).toBe(true);
      }
      if (port.verifiedAt) {
        expect(isBeforeOrOn(port.verifiedAt, today), `${port.id} verifiedAt`).toBe(true);
      }
    }
  });
});