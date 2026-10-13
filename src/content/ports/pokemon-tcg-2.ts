import type { Port } from "@/lib/ports/schema";

export const PokemonTcg2: Port = {
  schema: "port",
  id: "pokemon-tcg-2",
  title: "Pokemon TCG 2",
  game: "Pokemon TCG 2",
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
  sources: ["https://github.com/pret/poketcg2"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
