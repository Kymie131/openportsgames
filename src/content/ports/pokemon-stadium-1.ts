import type { Port } from "@/lib/ports/schema";

export const PokemonStadium1: Port = {
  schema: "port",
  id: "pokemon-stadium-1",
  title: "Pokemon Stadium 1",
  game: "Pokemon Stadium 1",
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
  sources: ["https://github.com/pret/pokestadium"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
