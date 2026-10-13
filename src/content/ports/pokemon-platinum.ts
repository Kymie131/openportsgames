import type { Port } from "@/lib/ports/schema";

export const PokemonPlatinum: Port = {
  schema: "port",
  id: "pokemon-platinum",
  title: "Pokemon Platinum",
  game: "Pokemon Platinum",
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
  sources: ["https://github.com/pret/pokeplatinum"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
