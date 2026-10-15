import { describe, expect, it } from "vitest";
import { getPorts } from "@/lib/ports";
import { PAGE_SIZE, browseCatalog, catalogPageCount, paginate } from "@/lib/ports/catalog";

const allPorts = getPorts();

describe("server-rendered catalog pages", () => {
  it("renders 48 ports per page", () => {
    expect(PAGE_SIZE).toBe(48);
  });

  it("browseCatalog returns games in title order within the scope", () => {
    const games = browseCatalog(allPorts, "all");
    expect(games.length).toBeGreaterThan(0);
    expect(games.every((port) => (port.kind ?? "game") === "game")).toBe(true);
    const titles = games.map((port) => port.title);
    expect(titles).toEqual([...titles].sort((a, b) => a.localeCompare(b)));
  });

  it("reports the page count as the ceiling of the scoped list", () => {
    for (const scope of ["all", "pc", "android"] as const) {
      const count = catalogPageCount(allPorts, scope);
      const expected = Math.max(1, Math.ceil(browseCatalog(allPorts, scope).length / PAGE_SIZE));
      expect(count, scope).toBe(expected);
      expect(count, scope).toBeGreaterThanOrEqual(1);
    }
  });

  it("splits every game across pages with no overlap and full coverage", () => {
    const games = browseCatalog(allPorts, "all");
    const pages = catalogPageCount(allPorts, "all");
    const seen = new Set<string>();
    for (let page = 1; page <= pages; page += 1) {
      const slice = paginate(games, page, PAGE_SIZE);
      const ids = slice.items.map((port) => port.id);
      for (const id of ids) {
        expect(seen.has(id), `duplicate ${id}`).toBe(false);
        seen.add(id);
      }
    }
    expect(seen.size).toBe(games.length);
  });
});
