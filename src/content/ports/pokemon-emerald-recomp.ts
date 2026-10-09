import type { Port } from "@/lib/ports/schema";

export const pokemonEmeraldRecomp: Port = {
  schema: "port",
  id: "pokemon-emerald-recomp",
  title: "Pokémon Emerald Recompiled",
  game: "Pokémon Emerald",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 2004,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/EmeraldRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Pokémon Emerald (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Pokémon Emerald (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
};
