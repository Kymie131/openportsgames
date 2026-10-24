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
  originalSystems: ["Game Boy Advance"],
  summary: "Pokémon Ruby Version and Pokémon Sapphire Version are 2002 role-playing video games developed by Game Freak for the Game Boy Advance. Although the games were published by Nintendo internationally in 2003, The Pokémon Company published them in Japan in late 2002, making them the first mainline games to have this distinction, as well as the second games to have it overall, after Pokémon Card GB2: Great Rocket-Dan Sanjō! They are the first installments in the third generation, or the \"advanced generation\", of the Pokémon video game series, and in turn the Pokémon media franchise.",
  summaryEs: "Pokemon Ruby es un videojuego de rol publicado por Nintendo en 2002.",
  notes:
    "Static recompilation of Pokémon Ruby (GBA) with the gbarecomp framework. It requires the original game.",
  notesEs:
    "Recompilación estática de Pokémon Ruby (GBA) con el framework gbarecomp. Requiere el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Pokemon%20-%20Ruby%20Version%20(USA).png",
    alt: "Pokémon Ruby (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Pokemon%20-%20Ruby%20Version%20(USA).png",
      alt: "Pokémon Ruby (screenshot)",
      credit: "Libretro",
    },
  ],
};
