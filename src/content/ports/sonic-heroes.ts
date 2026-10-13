import type { Port } from "@/lib/ports/schema";

export const SonicHeroes: Port = {
  schema: "port",
  id: "sonic-heroes",
  title: "Sonic Heroes",
  game: "Sonic Heroes",
  developers: ["Jovinull"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Jovinull/sonicheroes"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
};
