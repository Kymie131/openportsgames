import { describe, expect, it } from "vitest";
import { ports } from "@/lib/ports";

describe("localized port copy", () => {
  it("requires notesEs whenever notes is present", () => {
    const missing = ports
      .filter((port) => port.notes !== undefined && port.notesEs === undefined)
      .map((port) => port.id);
    expect(missing, `ports missing notesEs: ${missing.join(", ")}`).toEqual([]);
  });

  it("keeps notesEs a close translation in length", () => {
    for (const port of ports) {
      if (port.notes && port.notesEs) {
        expect(port.notesEs.length, port.id).toBeGreaterThan(port.notes.length * 0.6);
        expect(port.notesEs.length, port.id).toBeLessThan(port.notes.length * 1.6);
      }
    }
  });

  it("requires featuresEs to mirror features when both are present", () => {
    for (const port of ports) {
      if (port.featuresEs) {
        expect(port.features, port.id).toBeDefined();
        expect(port.featuresEs.length, port.id).toBe(port.features?.length);
      }
    }
  });
});
