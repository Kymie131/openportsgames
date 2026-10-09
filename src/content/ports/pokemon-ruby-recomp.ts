import type { Port } from "@/lib/ports/schema";

export const pokemonRubyRecomp: Port = {
  schema: "port",
  id: "pokemon-ruby-recomp",
  title: "Pokémon Ruby Recompiled",
  game: "Pokémon Ruby",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 2003,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/RubySapphireRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Pokémon Ruby (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Pokémon Ruby (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
};
