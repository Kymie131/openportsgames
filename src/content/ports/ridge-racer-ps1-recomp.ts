import type { Port } from "@/lib/ports/schema";

export const ridgeRacerPs1Recomp: Port = {
  schema: "port",
  id: "ridge-racer-ps1-recomp",
  title: "Ridge Racer PS1 Recomp",
  game: "Ridge Racer",
  developers: ["RobGreenUK"],
  publisher: "Namco",
  originalYear: 1993,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/RobGreenUK/Ridge-Racer-PS1-Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Ridge Racer is a 1993 racing video game developed and published by Namco for arcades. It is the first installment in Namco's Ridge Racer series. It was released initially on the Namco System 22 arcade system board and ported to the PlayStation home console in 1994. Ridge Racer was notable for being the first arcade video game with 3D texture-mapped graphics, with its System 22 hardware capable of texture mapping and Gouraud shading.",
  summaryEs: "Ridge Racer es un videojuego de carreras desarrollado y publicado por Namco de 1993. Se lanzó inicialmente en la placa de sistema arcade Namco System 22 y se transfirió a la consola PlayStation en 1994. Es el primer título de la serie Ridge Racer lanzada para arcades y consolas domésticas. El objetivo es terminar en primer lugar en una serie de carreras. La versión de PlayStation es compatible con el controlador NeGcon de Namco.",
  notes:
    "Native recompilation of Ridge Racer (PlayStation). The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Ridge Racer (PlayStation). El jugador aporta su propio material obtenido legalmente (imagen de disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Ridge%20Racer%20(USA).png",
    alt: "Ridge Racer (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Ridge%20Racer%20(USA).png",
      alt: "Ridge Racer (screenshot)",
      credit: "Libretro",
    },
  ],
};
