import { describe, expect, it } from "vitest";
import { ports } from "@/lib/ports";
import { originalSystemsById } from "@/content/ports/meta";

/**
 * `meta.ts` (`originalSystemsById`) is the runtime source of truth: the app and
 * the catalog read systems from there, never from the per-port field. The
 * per-port `originalSystems` is documentation kept next to each entry, so this
 * test fails if the two ever drift apart.
 */
describe("originalSystems consistency", () => {
  it("every port declares the same originalSystems as meta.ts", () => {
    for (const port of ports) {
      const meta = originalSystemsById[port.id];
      expect(meta, `${port.id}: missing key in meta.ts`).toBeDefined();
      expect(port.originalSystems, `${port.id}: missing originalSystems in port file`).toBeDefined();
      expect([...(port.originalSystems ?? [])].sort(), port.id).toEqual([...(meta ?? [])].sort());
    }
  });

  it("meta.ts has no key that does not correspond to a port", () => {
    const ids = new Set(ports.map((port) => port.id));
    for (const id of Object.keys(originalSystemsById)) {
      expect(ids.has(id), `${id}: key in meta.ts without a matching port`).toBe(true);
    }
  });
});
