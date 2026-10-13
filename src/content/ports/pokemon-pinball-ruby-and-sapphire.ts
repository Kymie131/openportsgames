import type { Port } from "@/lib/ports/schema";

export const PokemonPinballRubyAndSapphire: Port = {
  schema: "port",
  id: "pokemon-pinball-ruby-and-sapphire",
  title: "Pokemon Pinball Ruby & Sapphire",
  game: "Pokemon Pinball Ruby & Sapphire",
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
  sources: ["https://github.com/pret/pokepinballrs"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
