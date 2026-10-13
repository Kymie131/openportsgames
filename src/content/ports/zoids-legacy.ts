import type { Port } from "@/lib/ports/schema";

export const ZoidsLegacy: Port = {
  schema: "port",
  id: "zoids-legacy",
  title: "Zoids Legacy",
  game: "Zoids Legacy",
  developers: ["jmacato"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/jmacato/ZoidsLegacyDecomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
};
