import type { Port } from "@/lib/ports/schema";

export const GauntletDarkLegacy: Port = {
  schema: "port",
  id: "gauntlet-dark-legacy",
  title: "Gauntlet Dark Legacy",
  game: "Gauntlet Dark Legacy",
  developers: ["sabishii-bit"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sabishii-bit/Gauntlet-Dark-Legacy-Decompilation"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
};
