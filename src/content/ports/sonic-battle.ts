import type { Port } from "@/lib/ports/schema";

export const SonicBattle: Port = {
  schema: "port",
  id: "sonic-battle",
  title: "Sonic Battle",
  game: "Sonic Battle",
  developers: ["cypressru"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/cypressru/SonicBattleDecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
};
