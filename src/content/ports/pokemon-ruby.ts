import type { Port } from "@/lib/ports/schema";

export const PokemonRuby: Port = {
  schema: "port",
  id: "pokemon-ruby",
  title: "Pokemon Ruby",
  game: "Pokemon Ruby",
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
  sources: ["https://github.com/pret/pokeruby"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
