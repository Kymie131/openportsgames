import { describe, expect, it } from "vitest";
import { dictionaries } from "@/lib/i18n/dictionaries";

const [en, es] = [dictionaries.en, dictionaries.es];

function leafPaths(value: unknown, path = ""): string[] {
  if (Array.isArray(value)) {
    return value.flatMap((item, index) => leafPaths(item, `${path}[${index}]`));
  }
  if (value && typeof value === "object") {
    return Object.entries(value).flatMap(([key, child]) =>
      leafPaths(child, path ? `${path}.${key}` : key),
    );
  }
  return [path];
}

function walkPairs(
  enNode: unknown,
  esNode: unknown,
  path: string,
  out: Array<{ path: string; en: unknown[]; es: unknown[] }>,
): void {
  const enIsArray = Array.isArray(enNode);
  const esIsArray = Array.isArray(esNode);
  if (enIsArray && esIsArray) {
    if (enNode.length !== esNode.length) {
      out.push({ path, en: enNode, es: esNode });
    }
    return;
  }
  if (enNode && esNode && typeof enNode === "object" && typeof esNode === "object") {
    for (const key of Object.keys(enNode)) {
      walkPairs(
        (enNode as Record<string, unknown>)[key],
        (esNode as Record<string, unknown>)[key],
        path ? `${path}.${key}` : key,
        out,
      );
    }
  }
}

describe("dictionary parity", () => {
  it("mirrors every en leaf path in es", () => {
    expect(leafPaths(es).sort()).toEqual(leafPaths(en).sort());
  });

  it("has no extra es keys beyond the en shape", () => {
    const enPaths = new Set(leafPaths(en));
    const extra = leafPaths(es).filter((path) => !enPaths.has(path));
    expect(extra).toEqual([]);
  });

  it("keeps parallel array items in lockstep between locales", () => {
    const mismatches: Array<{ path: string; en: unknown[]; es: unknown[] }> = [];
    walkPairs(en, es, "", mismatches);
    expect(mismatches).toEqual([]);
  });
});
