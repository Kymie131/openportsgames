import type { Port } from "@/lib/ports/schema";

export const PokemonPinball: Port = {
  schema: "port",
  id: "pokemon-pinball",
  title: "Pokemon Pinball",
  game: "Pokemon Pinball",
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
  sources: ["https://github.com/pret/pokepinball"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
