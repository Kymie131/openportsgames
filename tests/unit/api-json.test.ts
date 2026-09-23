import { describe, expect, it } from "vitest";
import { buildCatalogJson, catalogApiSchema } from "@/lib/ports/api-json";
import { getPorts, testRecordsValidated, hardware } from "@/lib/ports";

describe("catalog api payload", () => {
  it("is a versioned static snapshot including ports, hardware and tests", () => {
    const now = new Date("2026-09-19T12:00:00Z");
    const payload = buildCatalogJson("https://example.com", now);
    expect(catalogApiSchema.parse(payload)).toEqual(payload);
    expect(payload.schema).toBe("openportsgames/catalog");
    expect(payload.version).toBe(2);
    expect(payload.generatedAt).toBe("2026-09-19");
    expect(payload.site).toBe("https://example.com");
    expect(payload.ports).toHaveLength(getPorts().length);
    expect(payload.hardware).toHaveLength(hardware.length);
    expect(payload.tests).toHaveLength(testRecordsValidated.length);
    for (const port of payload.ports) {
      if ("rawUrl" in port) continue;
      expect(port.genre, port.id).toBeTruthy();
      expect(typeof port.openSource, port.id).toBe("boolean");
    }
  });

  it("lists every catalog port id in the payload", () => {
    const payload = buildCatalogJson("https://example.com");
    const ids = new Set(payload.ports.map((port) => port.id));
    for (const port of getPorts()) {
      expect(ids.has(port.id), port.id).toBe(true);
    }
  });
});
