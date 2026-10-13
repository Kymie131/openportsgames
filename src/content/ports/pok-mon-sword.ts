import type { Port } from "@/lib/ports/schema";

export const PokMonSword: Port = {
  schema: "port",
  id: "pok-mon-sword",
  title: "Pokémon Sword",
  game: "Pokémon Sword",
  developers: ["charlieduzstuf"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/charlieduzstuf/pokesword"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
