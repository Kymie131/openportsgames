import type { Port } from "@/lib/ports/schema";

export const ChibiRobo: Port = {
  schema: "port",
  id: "chibi-robo",
  title: "Chibi-Robo!",
  game: "Chibi-Robo!",
  developers: ["eavpsp"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/eavpsp/cbr_decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
