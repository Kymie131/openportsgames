import type { Port } from "@/lib/ports/schema";

export const taradino: Port = {
  schema: "port",
  id: "taradino",
  title: "Taradino",
  game: "Rise of the Triad",
  developers: ["fabiangreffrath"],
  publisher: "Apogee Software",
  originalYear: 1995,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/fabiangreffrath/taradino"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary:
    "Rise of the Triad is a first-person shooter developed by Apogee Software and released in 1995. It is known for its fast movement, exaggerated weapons and multiplayer modes.",
  summaryEs:
    "Rise of the Triad es un shooter en primera persona desarrollado por Apogee Software y publicado en 1995. Es conocido por su movimiento rápido, sus armas exageradas y sus modos multijugador.",
  cover: {
    src: "https://openportsgames.com/covers/generated/taradino.svg",
    alt: "Rise of the Triad (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Taradino is an SDL2 source port of Rise of the Triad for modern operating systems. It requires the original game data.",
  notesEs:
    "Taradino es un port del código fuente de Rise of the Triad a SDL2 para sistemas operativos modernos. Requiere los datos originales del juego.",
};
