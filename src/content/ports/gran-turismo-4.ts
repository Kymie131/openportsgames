import type { Port } from "@/lib/ports/schema";

export const GranTurismo4: Port = {
  schema: "port",
  id: "gran-turismo-4",
  title: "Gran Turismo 4",
  game: "Gran Turismo 4",
  developers: ["gustavocanepa"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/gustavocanepa/gt4-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation 2",
};
