import type { Port } from "@/lib/ports/schema";

export const PokemonBattleRevolution: Port = {
  schema: "port",
  id: "pokemon-battle-revolution",
  title: "Pokemon Battle Revolution",
  game: "Pokemon Battle Revolution",
  developers: ["bgsamm"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/bgsamm/pbr-dtk"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
