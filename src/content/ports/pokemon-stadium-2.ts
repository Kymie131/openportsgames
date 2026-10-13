import type { Port } from "@/lib/ports/schema";

export const PokemonStadium2: Port = {
  schema: "port",
  id: "pokemon-stadium-2",
  title: "Pokemon Stadium 2",
  game: "Pokemon Stadium 2",
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
  sources: ["https://github.com/pret/pokestadiumgs"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
