import type { Port } from "@/lib/ports/schema";

export const gen2recomp: Port = {
  schema: "port",
  id: "gen2recomp",
  title: "Gen2Recomp (Pokémon Gold)",
  game: "Pokémon Gold",
  developers: ["UNDERdecoded"],
  publisher: "Nintendo",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android", "ios"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/UNDERdecoded/Gen2Recomped"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Game Boy / Game Boy Color",
  notes:
    "Recompilation project for the second-generation Pokémon games, forked from Gen1Recomp. It runs on desktop and Android with your own game data.",
  notesEs:
    "Proyecto de recompilación de los Pokémon de segunda generación, derivado de Gen1Recomp. Funciona en escritorio y Android con tus propios datos del juego.",
};
