import type { Port } from "@/lib/ports/schema";

export const ridgeRacerRevolutionRecomp: Port = {
  schema: "port",
  id: "ridge-racer-revolution-recomp",
  title: "Ridge Racer Revolution PS1 Recomp",
  game: "Ridge Racer Revolution",
  developers: ["RobGreenUK"],
  publisher: "Namco",
  originalYear: 1995,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/RobGreenUK/Ridge-Racer-Revolution-PS1-Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Ridge Racer Revolution is a 1995 racing video game developed and published by Namco for the PlayStation. It is the sequel to the PlayStation version of Ridge Racer. Like the original Ridge Racer, the player races computer-controlled cars with the objective of winning a series of races, and supports Namco's NeGcon controller. Ridge Racer Revolution adds two hidden cars, and two-player support via the PlayStation Link cable, and took roughly the same time to develop as the first. The intention was to increase the depth and add features.",
  summaryEs: "Ridge Racer Revolution es un videojuego de carreras de arcade desarrollado y publicado por Namco para la PlayStation en 1995. Es la secuela de PlayStation de Ridge Racer. Al igual que el Ridge Racer original, el jugador corre autos controlados por computadora con el objetivo de ganar una serie de carreras, y es compatible con el controlador NeGcon de Namco. Ridge Racer Revolution agrega dos autos ocultos y soporte para dos jugadores a través del PlayStation Link Cable, y tomó aproximadamente el mismo tiempo para desarrollarse que el primero.",
  notes:
    "Native recompilation of Ridge Racer Revolution (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Ridge Racer Revolution (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Ridge%20Racer%20Revolution%20(USA).png",
    alt: "Ridge Racer Revolution (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Ridge%20Racer%20Revolution%20(USA).png",
      alt: "Ridge Racer Revolution (screenshot)",
      credit: "Libretro",
    },
  ],
};
