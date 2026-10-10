import type { Port } from "@/lib/ports/schema";

export const pokemonFireredRecomp: Port = {
  schema: "port",
  id: "pokemon-firered-recomp",
  title: "Pokémon FireRed Recompiled",
  game: "Pokémon FireRed",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 2004,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/FireRedLeafGreenRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Pokémon FireRed (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Pokémon FireRed (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Pokemon%20-%20FireRed%20Version%20(USA).png",
    alt: "Pokémon FireRed (box art)",
    credit: "Box art",
  },
};
