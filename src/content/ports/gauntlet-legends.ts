import type { Port } from "@/lib/ports/schema";

export const GauntletLegends: Port = {
  schema: "port",
  id: "gauntlet-legends",
  title: "Gauntlet Legends",
  game: "Gauntlet Legends",
  developers: ["Drahsid"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Drahsid/gauntlet-legends"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
};
