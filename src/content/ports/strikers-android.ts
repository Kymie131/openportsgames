import type { Port } from "@/lib/ports/schema";

export const strikersAndroid: Port = {
  schema: "port",
  id: "strikers-android",
  title: "Super Mario Strikers (Android)",
  game: "Super Mario Strikers",
  developers: ["luisxl15"],
  publisher: "Nintendo",
  originalYear: 2005,
  portType: "runtime-port",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/luisxl15/Strikers-Android-Port"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["GameCube"],
  summary: "Super Mario Strikers, is a 2005 sports video game developed by Next Level Games and published by Nintendo for the GameCube. The game was released in Europe on November 18, 2005, North America on December 5, 2005, Japan on January 19, 2006, and Australia on April 6, 2006. The game's developers had worked on NHL Hitz Pro before development of Strikers, which served as an influence for the fast-paced and physical nature of the game. This was also the last Mario game to be released on the GameCube in Japan and North America.",
  summaryEs: "Super Mario Strikers , conocido como Mario Smash Football en Europa y Australia, es un videojuego de fútbol sala desarrollado por Next Level Games para la consola Nintendo GameCube. El juego fue inicialmente lanzado para Europa y Estados Unidos a finales de 2005, y en Japón y Australia a inicios de 2006. La secuela del juego, titulada como Mario Strikers: Charged Football, fue también desarrollada por Next Level Games, pero para la consola Wii.",
  notes:
    "Community Android port of Super Mario Strikers (GameCube). It needs the game itself and its files.",
  notesEs:
    "Port comunitario para Android de Super Mario Strikers (GameCube). Necesita el propio juego y sus archivos.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Super%20Mario%20Strikers%20(Japan).png",
    alt: "Super Mario Strikers (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Snaps/Super%20Mario%20Strikers%20(Japan).png",
      alt: "Super Mario Strikers (screenshot)",
      credit: "Libretro",
    },
  ],
};
