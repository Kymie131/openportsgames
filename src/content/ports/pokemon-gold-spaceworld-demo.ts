import type { Port } from "@/lib/ports/schema";

export const PokemonGoldSpaceworldDemo: Port = {
  schema: "port",
  id: "pokemon-gold-spaceworld-demo",
  title: "Pokemon Gold SpaceWorld Demo",
  game: "Pokemon Gold SpaceWorld Demo",
  developers: ["pret"],
  publisher: "Unknown",
  originalYear: 1997,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/pret/pokegold-spaceworld"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
