import { describe, expect, it } from "vitest";
import { ports } from "@/lib/ports";
import {
  applyCatalog,
  availableSystems,
  buildIndex,
  catalogStateToParams,
  parseCatalogState,
  type CatalogState,
} from "@/lib/ports/catalog";

const index = buildIndex(ports);

function state(overrides: Partial<CatalogState>): CatalogState {
  return {
    query: "",
    platform: "all",
    status: "all",
    state: "all",
    technique: "all",
    system: "all",
    genre: "all",
    source: "all",
    ai: "all",
    tested: "all",
    sort: "title",
    ...overrides,
  };
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

  it("filters by technique", () => {
    const { results } = applyCatalog(ports, index, state({ technique: "recompilation" }));
    expect(results.length).toBeGreaterThan(0);
    for (const port of results) {
      expect(port.portType).toBe("recompilation");
    }
  });

  it("filters by genre", () => {
    const { results } = applyCatalog(ports, index, state({ genre: "platformer" }));
    expect(results.length).toBeGreaterThan(0);
    for (const port of results) {
      expect(port.genre).toBe("platformer");
    }
  });

  it("filters by original system label", () => {
    const systems: Record<string, string> = { "sm64ex": "Nintendo 64" };
    const { results } = applyCatalog(
      ports,
      index,
      state({ system: "Nintendo 64" }),
      "all",
      { originalSystems: systems },
    );
    for (const port of results) {
      expect(systems[port.id] ?? "").toBe("Nintendo 64");
    }
  });

  it("filters by open source flag", () => {
    const open = applyCatalog(ports, index, state({ source: "open" }));
    expect(open.results.length).toBe(ports.length);
    const closed = applyCatalog(ports, index, state({ source: "closed" }));
    expect(closed.results.length).toBe(0);
  });

  it("filters by AI disclosure", () => {
    const disclosed = ports.filter((port) => port.aiDisclosure);
    expect(disclosed.length).toBeGreaterThan(0);
    const { results } = applyCatalog(ports, index, state({ ai: "yes" }));
    expect(results.length).toBe(disclosed.length);
    for (const port of results) {
      expect(port.aiDisclosure).toBe(true);
    }
  });

  it("filters by latest test result using per-port test results", () => {
    const testResults: Record<string, "pass" | "fail"> = { "dusklight": "pass" };
    const passed = applyCatalog(ports, index, state({ tested: "pass" }), "all", { testResults });
    expect(passed.results.map((port) => port.id)).toEqual(["dusklight"]);
    const untested = applyCatalog(ports, index, state({ tested: "untested" }), "all", { testResults });
    expect(untested.results.some((port) => port.id === "dusklight")).toBe(false);
  });

  it("sorts by GitHub stars descending with title fallback", () => {
    const stars: Record<string, number> = { "openttd": 500, "openmw": 100 };
    const { results } = applyCatalog(ports, index, state({ sort: "stars" }), "all", { stars });
    const ranked = results.filter((port) => stars[port.id] !== undefined);
    expect(ranked.map((port) => port.id)).toEqual(["openttd", "openmw"]);
    const tail = results.slice(ranked.length);
    expect([...tail].sort((a, b) => a.title.localeCompare(b.title))).toEqual(tail);
  });

  it("sorts titles in descending order", () => {
    const { results } = applyCatalog(ports, index, state({ sort: "title-desc" }));
    const titles = results.map((port) => port.title);
    expect(titles).toEqual([...titles].sort((a, b) => b.localeCompare(a)));
  });

  it("lists unique original systems alphabetically", () => {
    const systems: Record<string, string> = {
      "sm64ex": "Nintendo 64",
      "ship-of-harkinian": "Nintendo 64",
      "openmw": "Personal computer",
    };
    expect(availableSystems(ports, systems)).toEqual(["Nintendo 64", "Personal computer"]);
  });

  it("round-trips URL params and drops empty or all values", () => {
    const params = parseCatalogState(
      new URLSearchParams("?q=zelda&platform=windows&status=beta&system=Nintendo+64&bogus=x"),
    );
    expect(params).toMatchObject({
      query: "zelda",
      platform: "windows",
      status: "beta",
      system: "Nintendo 64",
    });
    expect(params.sort).toBe("relevance");
    expect(params.genre).toBe("all");
    const serialized = catalogStateToParams(state({ sort: "relevance" })).toString();
    expect(serialized).toBe("");
    const nonDefault = catalogStateToParams(state({ sort: "stars", ai: "yes" })).toString();
    expect(nonDefault).toBe("ai=yes&sort=stars");
  });
});