import type { Port } from "@/lib/ports/schema";

export const superMarioBrosNesRecomp: Port = {
  schema: "port",
  id: "super-mario-bros-nes-recomp",
  title: "SuperMarioBrosRecomp",
  game: "Super Mario Bros.",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1985,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/SuperMarioBrosNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Super Mario Bros. is a 1985 platform game developed and published by Nintendo for the Nintendo Entertainment System (NES). Directed and produced by Shigeru Miyamoto, it is the successor to the 1983 arcade game Mario Bros. and the first game in the Super Mario series. Players control Mario, or his brother Luigi in the multiplayer mode, to traverse the Mushroom Kingdom to rescue Princess Toadstool from King Koopa. They traverse side-scrolling stages while avoiding hazards such as enemies and pits and collecting power-ups such as the Super Mushroom, Fire Flower, and Starman.",
  summaryEs: "Super Mario Bros. es un videojuego de plataformas desarrollado y publicado por Nintendo para la Nintendo Entertainment System (NES). Dirigido y producido por Shigeru Miyamoto, es la secuela del arcade Mario Bros. de 1983 y el primero de la serie Super Mario. Los jugadores controlan a Mario, o a su hermano Luigi en el modo multijugador, para atravesar el Reino Champiñón y rescatar a la princesa Toadstool del rey Koopa —más tarde llamado Bowser—.",
  notes:
    "Native recompilation of Super Mario Bros. (NES). The player supplies their own legally obtained ROM; the repository ships no game content. An earlier fork by TechnicallyComputers exists; this is the repository listed here.",
  notesEs:
    "Recompilación nativa de Super Mario Bros. (NES). El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego. Existe un fork anterior de TechnicallyComputers; este es el repositorio listado aquí.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Mario%20Bros.%20(World).png",
    alt: "Super Mario Bros. (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Super%20Mario%20Bros.%20(World).png",
      alt: "Super Mario Bros. (screenshot)",
      credit: "Libretro",
    },
  ],
};
