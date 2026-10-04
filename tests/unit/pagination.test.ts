import { describe, expect, it } from "vitest";
import { catalogStateToParams, paginate, pageWindow, parseCatalogState } from "@/lib/ports/catalog";

const items = Array.from({ length: 150 }, (_, i) => i + 1);

describe("paginate", () => {
  it("slices the first page to the fixed size", () => {
    const result = paginate(items, 1, 30);
    expect(result.items).toHaveLength(30);
    expect(result.items[0]).toBe(1);
    expect(result.items[29]).toBe(30);
    expect(result.page).toBe(1);
    expect(result.pageCount).toBe(5);
    expect(result.from).toBe(1);
    expect(result.to).toBe(30);
    expect(result.total).toBe(150);
  });

  it("slices a middle page and reports its range", () => {
    const result = paginate(items, 2, 30);
    expect(result.items[0]).toBe(31);
    expect(result.items).toHaveLength(30);
    expect(result.from).toBe(31);
    expect(result.to).toBe(60);
  });

  it("keeps the final page short", () => {
    const result = paginate(items, 5, 30);
    expect(result.items[0]).toBe(121);
    expect(result.items).toHaveLength(30);
    expect(result.to).toBe(150);
  });

  it("clamps a page above the range to the last one", () => {
    const result = paginate(items, 99, 30);
    expect(result.page).toBe(5);
    expect(result.from).toBe(121);
    expect(result.to).toBe(150);
  });

  it("clamps zero and negative pages to the first one", () => {
    expect(paginate(items, 0, 30).page).toBe(1);
    expect(paginate(items, -4, 30).page).toBe(1);
  });

  it("handles a single result", () => {
    const result = paginate([42], 1, 30);
    expect(result.pageCount).toBe(1);
    expect(result.from).toBe(1);
    expect(result.to).toBe(1);
    expect(result.items).toEqual([42]);
  });

  it("handles an empty list as one empty page", () => {
    const result = paginate([], 1, 30);
    expect(result.items).toEqual([]);
    expect(result.page).toBe(1);
    expect(result.pageCount).toBe(1);
    expect(result.from).toBe(0);
    expect(result.to).toBe(0);
  });
});

describe("pageWindow", () => {
  it("lists every page when there are few", () => {
    expect(pageWindow(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(pageWindow(3, 5)).toEqual([1, 2, 3, 4, 5]);
  });

  it("collapses the middle with ellipses around the current page", () => {
    expect(pageWindow(1, 12)).toEqual([1, 2, "…", 12]);
    expect(pageWindow(6, 12)).toEqual([1, "…", 5, 6, 7, "…", 12]);
    expect(pageWindow(12, 12)).toEqual([1, "…", 11, 12]);
  });
});

describe("page query parameter", () => {
  it("defaults to page 1 and omits the parameter when serialized", () => {
    const parsed = parseCatalogState(new URLSearchParams());
    expect(parsed.page).toBe(1);
    expect(catalogStateToParams(parsed).has("page")).toBe(false);
  });

  it("round-trips a page number and ignores invalid values", () => {
    expect(parseCatalogState(new URLSearchParams("page=3")).page).toBe(3);
    expect(parseCatalogState(new URLSearchParams("page=0")).page).toBe(1);
    expect(parseCatalogState(new URLSearchParams("page=abc")).page).toBe(1);

    const params = catalogStateToParams({ ...parseCatalogState(new URLSearchParams()), page: 4 });
    expect(params.get("page")).toBe("4");
  });
});
