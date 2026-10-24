import type { Port } from "@/lib/ports/schema";

export const vitaTetris: Port = {
  schema: "port",
  id: "vita-tetris",
  title: "Vita Tetris",
  game: "Vita Tetris",
  developers: ["m-bartlett"],
  publisher: "m-bartlett",
  originalYear: 2023,
  portType: "reimplementation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "open",
  category: "homebrew",
  platforms: ["psvita"],
  status: "stable",
  release: { version: "1.1", date: "2023-10-11" },
  sources: ["https://github.com/m-bartlett/vita-tetris"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Vita Tetris is a puzzle game published by m-bartlett, released in 2023.",
  summaryEs: "Vita Tetris es un videojuego de puzles publicado por m-bartlett, lanzado en 2023.",
  summaryGenerated: true,
  cover: {
    src: "https://openportsgames.com/covers/generated/vita-tetris.svg",
    alt: "Vita Tetris (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Vita Tetris is an open-source Tetris homebrew for PS Vita with 3D graphics rendered through vitaGL. It is free and does not need the original game.",
  notesEs:
    "Vita Tetris es un Tetris homebrew de código abierto para PS Vita con gráficos 3D renderizados mediante vitaGL. Es gratis y no necesita el juego original.",
};
