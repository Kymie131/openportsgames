import { describe, expect, it } from "vitest";
import { ports, relatedPorts } from "@/lib/ports";

describe("related ports", () => {
  it("points only at existing ports and never at itself", () => {
    const ids = new Set(ports.map((port) => port.id));
    for (const port of ports) {
      for (const related of port.related ?? []) {
        expect(ids.has(related), `${port.id} -> ${related}`).toBe(true);
        expect(related, `${port.id} lists itself`).not.toBe(port.id);
      }
    }
  });

  it("resolves every declared relation through the helper", () => {
    for (const port of ports) {
      const resolved = new Set(relatedPorts(port.id).map((entry) => entry.id));
      for (const related of port.related ?? []) {
        expect(resolved.has(related), `${port.id} -> ${related}`).toBe(true);
      }
    }
  });
});
