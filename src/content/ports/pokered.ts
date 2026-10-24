import type { Port } from "@/lib/ports/schema";

export const pokered: Port = {
  schema: "port",
  id: "pokered",
  title: "Pokémon Red/Blue Disassembly",
  game: "Pokémon Red/Blue",
  developers: ["Game Freak"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/pret/pokered"],
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license in the repository",
  },
  verified: false,
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/wiki/pret/pokered/screenshots/town-map-ingame.png",
      alt: "The Town Map screen in Pokémon Red",
      credit: "pret/pokered wiki",
    },
  ],
  originalSystems: ["Game Boy"],
  summary: "Pokémon Red Version and Pokémon Blue Version are popular 1996 role-playing video games (RPGs) developed by Game Freak and published by Nintendo for the Game Boy. They are the first installments of the Pokémon video game series and were first released in Japan as Pocket Monsters Red and Pocket Monsters Green, followed by the special edition Pocket Monsters Blue later that year.",
  summaryEs: "Pokémon es una franquicia de medios que originalmente comenzó como un videojuego RPG, pero debido a su popularidad ha logrado expandirse a otros medios de entretenimiento como series de anime de televisión, películas, juegos de cartas, ropa, juguetes, peluches, entre otros, convirtiéndose en una marca que es reconocida en el mercado mundial. Las ventas de videojuegos hasta el 1 de diciembre de 2006 habían alcanzado una cantidad de 340 millones de ejemplares, logrando ocupar el segundo lugar de las sagas de videojuegos más vendidos de Nintendo.",
  notes:
    "Fully commented disassembly of the first generation Pokémon games that builds byte-perfect copies via rgbds. Produces the original Game Boy ROM rather than a native modern executable; the pairing projects in the pret organization power many quality-of-life remakes and hacks built from this source. The pret organization does not publish numbered releases; builds track the repository.",
  notesEs:
    "Decompilación totalmente comentada de los juegos Pokémon de primera generación que genera copias idénticas byte a byte con rgbds. Produce la ROM original de Game Boy en lugar de un ejecutable nativo moderno; los proyectos hermanos de la organización pret impulsan muchos remakes y hacks de calidad de vida construidos a partir de este código. La organización pret no publica releases numeradas; las builds siguen el repositorio.",
  installGuide: {
    steps: [
      "Own a copy of Pokémon Red or Blue for the Game Boy.",
      "Dump the original ROM from your cartridge with a tool you are legally entitled to use.",
      "Follow the build instructions to supply the base ROM and produce the playable ROM with rgbds.",
      "Run the built ROM on your own hardware or the emulator you hold the rights for.",
    ],
    stepsEs: [
      "Ten una copia de Pokémon Red o Blue para Game Boy.",
      "Vuelca la ROM original desde tu cartucho con una herramienta que tengas permiso legal de usar.",
      "Sigue las instrucciones de compilación para aportar la ROM base y generar la ROM jugable con rgbds.",
      "Ejecuta la ROM generada en tu propio hardware o en el emulador del que tengas los derechos.",
    ],
  },
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy/Named_Boxarts/Pokemon%20-%20Red%20Version%20(USA,%20Europe)%20(SGB%20Enhanced).png",
    alt: "Pokémon Red/Blue (cover)",
    credit: "Box art",
  },
};
