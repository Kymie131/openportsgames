import { z } from "zod";
import { hardware, ports, testRecordsValidated } from "./index";
import { hardwareSchema, portSchema, testRecordSchema } from "./schema";

/** Versioned JSON payload of the full catalog (see docs/API.md). */
export const catalogApiSchema = z.object({
  schema: z.literal("openportsgames/catalog"),
  version: z.literal(2),
  generatedAt: z.string().regex(/^\d{4}-\d{2}-\d{2}$/, "expected YYYY-MM-DD"),
  site: z.string().url(),
  ports: z.array(portSchema),
  hardware: z.array(hardwareSchema),
  tests: z.array(testRecordSchema),
});

export type CatalogApi = z.infer<typeof catalogApiSchema>;

export function buildCatalogJson(siteUrl: string, now: Date = new Date()): CatalogApi {
  return {
    schema: "openportsgames/catalog",
    version: 2,
    generatedAt: now.toISOString().slice(0, 10),
    site: siteUrl,
    ports: [...ports],
    hardware: [...hardware],
    tests: [...testRecordsValidated],
  };
}
