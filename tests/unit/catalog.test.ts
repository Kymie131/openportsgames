import { describe, expect, it } from "vitest";
import { ports } from "@/lib/ports";
import { applyCatalog, buildIndex, type CatalogState } from "@/lib/ports/catalog";

const index = buildIndex(ports);

function state(overrides: Partial<CatalogState>): CatalogState {
  return { query: "", platform: "all", status: "all", state: "all", sort: "title", ...overrides };
}

describe("applyCatalog", () => {
  it("returns every port with default state", () => {
    const { results, total } = applyCatalog(ports, index, state({}));
    expect(total).toBe(ports.length);
    expect(results.length).toBe(ports.length);
  });

  it("filters by full-text query", () => {
    const { results } = applyCatalog(ports, index, state({ query: "harkinian" }));
    const ids = results.map((port) => port.id);
    expect(ids).toContain("2ship2harkinian");
    expect(ids).toContain("ship-of-harkinian");
  });

  it("scopes the platform filter to the current view", () => {
    const androidPorts = ports.filter((port) => port.platforms.includes("android"));
    const { results } = applyCatalog(ports, index, state({ platform: "all" }), "android");
    expect(results.length).toBe(androidPorts.length);
    for (const port of results) {
      expect(port.platforms).toContain("android");
    }
  });

  it("filters by status", () => {
    const { results } = applyCatalog(ports, index, state({ status: "beta" }));
    expect(results.length).toBeGreaterThan(0);
    for (const port of results) {
      expect(port.status).toBe("beta");
    }
  });

  it("filters by verification state", () => {
    const { results } = applyCatalog(ports, index, state({ state: "verified" }));
    expect(results.length).toBeGreaterThan(0);
    for (const port of results) {
      expect(port.verified).toBe(true);
    }
  });

  it("sorts newest releases first and keeps undated ports last", () => {
    const { results } = applyCatalog(ports, index, state({ sort: "newest" }));
    const dated = results.filter((port) => port.release.date);
    const dates = dated.map((port) => port.release.date);
    expect(dates).toEqual([...dates].sort().reverse());
    const undated = results.filter((port) => !port.release.date);
    expect(undated.length).toBe(results.length - dated.length);
  });

  it("clamps out-of-scope platforms to all", () => {
    const { results } = applyCatalog(ports, index, state({ platform: "android" }), "pc");
    expect(results.length).toBe(ports.length);
  });

  it("combines query and filters", () => {
    const { results } = applyCatalog(
      ports,
      index,
      state({ query: "quake", state: "verified" }),
    );
    expect(results.length).toBeGreaterThan(0);
    for (const port of results) {
      expect(port.verified).toBe(true);
    }
  });
});