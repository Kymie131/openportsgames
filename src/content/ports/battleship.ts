import type { Port } from "@/lib/ports/schema";

export const battleship: Port = {
  schema: "port",
  id: "battleship",
  title: "BattleShip",
  game: "Super Smash Bros.",
  developers: ["JRickey"],
  publisher: "Nintendo",
  originalYear: 1999,
  portType: "decompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/JRickey/BattleShip"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Super Smash Bros. is a series of platform fighting video games published by Nintendo. Created by Masahiro Sakurai, the Super Smash Bros. series is a crossover featuring many characters from other video game series created by Nintendo and other developers. Its gameplay is distinct from traditional fighting games, with players aiming to knock each other off stages after accumulating damage with numerous attacks. The games have also featured a variety of side modes, including single-player story modes.",
  summaryEs: "Super Smash Bros. es una serie de videojuegos de lucha, creada por Masahiro Sakurai, quien dirigió todos los juegos, y distribuida por Nintendo, el cual presenta personajes invitados de franquicias establecidas en Nintendo y otras compañías de videojuegos y ha vendido en total más de 71 millones de unidades. La serie es conocida por su objetivo de jugabilidad único, que difiere de los juegos de pelea tradicionales, en donde el objetivo es aumentar contadores de daño y derribar a los oponentes del escenario en lugar de agotar las barras de salud.",
  notes:
    "PC port of Super Smash Bros. (N64) for the USA and Japanese releases, built on the ssb-decomp-re decompilation with libultraship. It runs on Windows, Linux, macOS and Android, and adds widescreen, texture packs, C mods and competitive options.",
  notesEs:
    "Port a PC de Super Smash Bros. (N64) para las versiones USA y japonesa, sobre la decompilación ssb-decomp-re con libultraship. Corre en Windows, Linux, macOS y Android, y añade widescreen, packs de texturas, mods en C y opciones competitivas.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Super%20Smash%20Bros.%20(USA).png",
    alt: "Super Smash Bros. (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Super%20Smash%20Bros.%20(USA).png",
      alt: "Super Smash Bros. (screenshot)",
      credit: "Libretro",
    },
  ],
};
