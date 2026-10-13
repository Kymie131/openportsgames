import type { Port } from "@/lib/ports/schema";

export const HarvestMassiveEncounter: Port = {
  schema: "port",
  id: "harvest-massive-encounter",
  title: "Harvest: Massive Encounter",
  game: "Harvest: Massive Encounter",
  developers: ["banteg"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/banteg/harvest"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
