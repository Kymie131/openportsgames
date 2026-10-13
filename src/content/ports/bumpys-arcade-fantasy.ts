import type { Port } from "@/lib/ports/schema";

export const BumpysArcadeFantasy: Port = {
  schema: "port",
  id: "bumpys-arcade-fantasy",
  title: "Bumpy's Arcade Fantasy",
  game: "Bumpy's Arcade Fantasy",
  developers: ["GeReV"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/GeReV/bumpy-reverse"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Arcade",
};
