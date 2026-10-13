import type { Port } from "@/lib/ports/schema";

export const PokemonGold: Port = {
  schema: "port",
  id: "pokemon-gold",
  title: "Pokemon Gold",
  game: "Pokemon Gold",
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
  sources: ["https://github.com/pret/pokegold"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
