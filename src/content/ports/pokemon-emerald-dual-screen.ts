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
  originalSystems: ["Game Boy Advance"],
  summary: "Pokémon Emerald Version is a 2004 role-playing video game developed by Game Freak and published by The Pokémon Company and Nintendo for the Game Boy Advance. It was first released in Japan in 2004, and was later released internationally in 2005. It is the fifth version, after both Pokémon Ruby and Sapphire and Pokémon FireRed and LeafGreen, and is the final game of the third generation of the Pokémon video game series.",
  summaryEs: "Pokémon Edición Rubí y Pokémon Edición Zafiro, conocidos en Japón como Pocket Monsters Ruby & Sapphire , son dos videojuegos del género RPG pertenecientes a la tercera generación de la saga Pokémon, y los primeros en su tipo lanzados para la consola portátil Game Boy Advance de Nintendo. Ambos, marcan el principio de la tercera generación de la serie, y se ambientan en una nueva región denominada Hoenn.",
  notes:
    "Static recompilation of Pokémon Emerald (GBA) with the gbarecomp framework. It requires the original game.",
  notesEs:
    "Recompilación estática de Pokémon Emerald (GBA) con el framework gbarecomp. Requiere el juego original.",
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
