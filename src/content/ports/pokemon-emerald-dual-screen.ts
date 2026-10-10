import type { Port } from "@/lib/ports/schema";

export const pokemonEmeraldDualScreen: Port = {
  schema: "port",
  id: "pokemon-emerald-dual-screen",
  title: "Pokémon Emerald (Dual Screen)",
  game: "Pokémon Emerald",
  developers: ["Goldoire"],
  publisher: "Nintendo",
  originalYear: 2004,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Goldoire/pokeemerald-dualscreen"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Pokémon Emerald (GBA) with the gbarecomp framework. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Pokémon Emerald (GBA) con el framework gbarecomp. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Pokemon%20-%20Emerald%20Version%20(USA,%20Europe).png",
    alt: "Pokémon Emerald (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Pokemon%20-%20Emerald%20Version%20(USA,%20Europe).png",
      alt: "Pokémon Emerald (screenshot)",
      credit: "Libretro",
    },
  ],
};
