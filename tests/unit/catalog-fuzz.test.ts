import { describe, expect, it } from "vitest";
import { ports } from "@/lib/ports";
import {
  MAX_QUERY_LENGTH,
  applyCatalog,
  buildIndex,
  defaultCatalogState,
  parseCatalogState,
  type CatalogState,
} from "@/lib/ports/catalog";

const index = buildIndex(ports);
const ALPHABET = "abcdefghijklmnopqrstuvwxyz0123456789";

/**
 * Deterministic PRNG (mulberry32) so the fuzz cases are reproducible across
 * runs instead of relying on Math.random.
 */
function mulberry32(seed: number) {
  return () => {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function randomQuery(length: number, spaces: boolean, rand: () => number): string {
  let out = "";
  for (let i = 0; i < length; i++) {
    out += spaces && i % 6 === 0 ? " " : ALPHABET[Math.floor(rand() * ALPHABET.length)];
  }
  return out;
}

function state(query: string): CatalogState {
  return { ...defaultCatalogState, query };
}

describe("catalog fuzz", () => {
  it("never throws for adversarial queries up to 100k characters", () => {
    const rand = mulberry32(42);
    for (const length of [1, 10, 47, 199, 200, 201, 1_000, 100_000]) {
      for (const spaces of [false, true]) {
        const query = randomQuery(length, spaces, rand);
        const { results, total } = applyCatalog(ports, index, state(query));
        expect(results.length).toBe(total);
        expect(Array.isArray(results)).toBe(true);
      }
    }
  });

  it("returns zero results when a non-empty query matches nothing", () => {
    const { results, total } = applyCatalog(ports, index, state("qqqq zz9x wqm3 fvjj cccc"));
    expect(total).toBe(0);
    expect(results).toEqual([]);
  });

  it("returns the full catalog when the query trims to empty", () => {
    const { total } = applyCatalog(ports, index, state("     "));
    expect(total).toBe(ports.length);
  });

  it("matches nothing for the maxed-out single-token query", () => {
    const { total } = applyCatalog(ports, index, state("x".repeat(MAX_QUERY_LENGTH)));
    expect(total).toBe(0);
  });

  it("caps the query length in parseCatalogState", () => {
    const params = new URLSearchParams();
    params.set("q", "x".repeat(10_000));
    expect(parseCatalogState(params).query).toBe("x".repeat(MAX_QUERY_LENGTH));
  });

  it("caps the query length inside applyCatalog regardless of the URL round-trip", () => {
    const full = "zelda harkinian 7f".repeat(40);
    const capped = full.slice(0, MAX_QUERY_LENGTH);
    const throughCatalog = applyCatalog(ports, index, state(full));
    const direct = applyCatalog(ports, index, state(capped));
    expect(throughCatalog.results.map((port) => port.id)).toEqual(
      direct.results.map((port) => port.id),
    );
    expect(throughCatalog.total).toBe(direct.total);
  });
});
