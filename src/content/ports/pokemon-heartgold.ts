import type { Port } from "@/lib/ports/schema";

export const PokemonHeartgold: Port = {
  schema: "port",
  id: "pokemon-heartgold",
  title: "Pokemon HeartGold",
  game: "Pokemon HeartGold",
  developers: ["pret"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/pret/pokeheartgold"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
