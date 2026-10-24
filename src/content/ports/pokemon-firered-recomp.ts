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
  originalSystems: ["Game Boy Advance"],
  summary: "Pokémon FireRed Version and Pokémon LeafGreen Version are 2004 remakes of the 1996 role-playing video games Pokémon Red and Green. They were developed by Game Freak and published by The Pokémon Company and Nintendo for the Game Boy Advance. FireRed and LeafGreen were first released in Japan in January 2004 and was released in the same year as FireRed and LeafGreen versions in North America and Europe in September and October 2004, respectively.",
  summaryEs: "Pokemon FireRed es un videojuego de rol publicado por Nintendo en 2004.",
  notes:
    "Static recompilation of Pokémon FireRed (GBA) with the gbarecomp framework. It requires the game itself.",
  notesEs:
    "Recompilación estática de Pokémon FireRed (GBA) con el framework gbarecomp. Requiere el propio juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Pokemon%20-%20FireRed%20Version%20(USA).png",
    alt: "Pokémon FireRed (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Pokemon%20-%20FireRed%20Version%20(USA).png",
      alt: "Pokémon FireRed (screenshot)",
      credit: "Libretro",
    },
  ],
};
