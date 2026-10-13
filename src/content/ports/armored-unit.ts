import type { Port } from "@/lib/ports/schema";

export const ArmoredUnit: Port = {
  schema: "port",
  id: "armored-unit",
  title: "Armored Unit",
  game: "Armored Unit",
  developers: ["Normmatt"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Normmatt/unarmoredunit"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
