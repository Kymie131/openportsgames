import type { Port } from "@/lib/ports/schema";

export const pokemonPlatinumRecomp: Port = {
  schema: "port",
  id: "pokemon-platinum-recomp",
  title: "Pokémon Platinum Recompiled",
  game: "Pokémon Platinum",
  developers: ["cybervisi0n"],
  publisher: "Nintendo",
  originalYear: 2008,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/cybervisi0n/pokeplatinum"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo DS"],
  summary: "Pokémon Platinum Version is a 2008 role-playing video game developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo DS. The game is an enhanced version of the 2006 titles Pokémon Diamond and Pearl and is part of the fourth generation of the Pokémon video game series. It was released in Japan in September 2008 and internationally throughout 2009.",
  summaryEs: "Pokémon Platinum Version, conocido en Japón como Pocket Monsters Platina es un videojuego de rol perteneciente a la serie de videojuegos Pokémon. Se puede considerar como un remake de los juegos Pokémon Diamante y Perla, tal y como lo fue Pokémon Yellow para las versiones Rojo y Azul; Pokémon Cristal para las versiones Oro y Plata; y Pokémon Esmeralda para las versiones Rubí y Zafiro. Fue lanzado al mercado el 13 de septiembre de 2008 en Japón.",
  notes:
    "64-bit PC port of Pokémon Platinum based on the pret decompilation and the libntr suite. It needs a copy of the game.",
  notesEs:
    "Port para PC de 64 bits de Pokémon Platinum basado en la decompilación de pret y la suite libntr. Necesita una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20DS/Named_Boxarts/Pokemon%20-%20Platinum%20Version%20(USA).png",
    alt: "Pokémon Platinum (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20DS/Named_Snaps/Pokemon%20-%20Platinum%20Version%20(USA).png",
      alt: "Pokémon Platinum (screenshot)",
      credit: "Libretro",
    },
  ],
};
