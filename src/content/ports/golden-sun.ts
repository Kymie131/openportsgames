import type { Port } from "@/lib/ports/schema";

export const GoldenSun: Port = {
  schema: "port",
  id: "golden-sun",
  title: "Golden Sun",
  game: "Golden Sun",
  developers: ["PascalPixel"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/PascalPixel/alchemy"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
};
