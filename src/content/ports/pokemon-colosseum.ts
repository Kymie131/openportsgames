import type { Port } from "@/lib/ports/schema";

export const PokemonColosseum: Port = {
  schema: "port",
  id: "pokemon-colosseum",
  title: "Pokemon Colosseum",
  game: "Pokemon Colosseum",
  developers: ["dougchansan"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/dougchansan/pkmn-colosseum"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
