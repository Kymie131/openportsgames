import type { Port } from "@/lib/ports/schema";

export const PokemonPuzzleLeague: Port = {
  schema: "port",
  id: "pokemon-puzzle-league",
  title: "Pokemon Puzzle League",
  game: "Pokemon Puzzle League",
  developers: ["AngheloAlf"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/AngheloAlf/puzzleleague64"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
