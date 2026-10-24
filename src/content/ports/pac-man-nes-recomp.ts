import type { Port } from "@/lib/ports/schema";

export const pacManNesRecomp: Port = {
  schema: "port",
  id: "pac-man-nes-recomp",
  title: "PacManRecomp",
  game: "Pac-Man",
  developers: ["Mr-Shizzy"],
  publisher: "Namco",
  originalYear: 1984,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Mr-Shizzy/PacManRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Pac-Man is a 1982 maze video game developed and published by Atari, Inc. for the Atari 2600 as a port of Namco's 1980 arcade game of the same name. The player controls the title character, who attempts to eat all of the wafers in a maze while avoiding four ghosts that pursue him. Eating flashing wafers at the corners of the screen causes the ghosts to temporarily turn blue and flee, allowing Pac-Man to eat them for bonus points. Once eaten, a ghost is reduced to a pair of eyes, which return to the center of the maze to be restored.",
  summaryEs: "En 1982, Atari Inc. lanzó una conversión de Pac-Man, el éxito de arcade perteneciente a Namco para su Atari 2600. Como en la versión original, el jugador controla al personaje principal con un joystick. El objetivo consiste en atravesar un laberinto comiendo todos los puntos que se encuentran en él mientras se evita a cuatro fantasmas.",
  notes:
    "Native recompilation of Pac-Man (Nintendo Entertainment System). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Pac-Man (Nintendo Entertainment System). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Pac-Man%20(USA)%20(Namco).png",
    alt: "Pac-Man (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Pac-Man%20(USA)%20(Namco).png",
      alt: "Pac-Man (screenshot)",
      credit: "Libretro",
    },
  ],
};
