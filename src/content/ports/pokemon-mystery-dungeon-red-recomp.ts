import type { Port } from "@/lib/ports/schema";

export const pokemonMysteryDungeonRedRecomp: Port = {
  schema: "port",
  id: "pokemon-mystery-dungeon-red-recomp",
  title: "Pokémon Mystery Dungeon: Red Rescue Team Recompiled",
  game: "Pokémon Mystery Dungeon: Red Rescue Team",
  developers: ["Asphaltian"],
  publisher: "Nintendo",
  originalYear: 2005,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Asphaltian/pmd-green"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Pokémon Mystery Dungeon: Red Rescue Team (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Pokémon Mystery Dungeon: Red Rescue Team (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
};
