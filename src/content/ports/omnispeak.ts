import type { Port } from "@/lib/ports/schema";

export const omnispeak: Port = {
  schema: "port",
  id: "omnispeak",
  title: "Omnispeak",
  game: "Commander Keen in Goodbye, Galaxy",
  developers: ["sulix"],
  publisher: "Apogee Software",
  originalYear: 1991,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.1", date: "2021-12-16" },
  sources: ["https://github.com/sulix/omnispeak"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary:
    "Commander Keen in Goodbye, Galaxy is a two-part episodic side-scrolling platform game developed by id Software and published by Apogee Software in 1991. It covers episodes 4 and 5 of the Commander Keen series.",
  summaryEs:
    "Commander Keen in Goodbye, Galaxy es un juego de plataformas episódico en desplazamiento lateral desarrollado por id Software y publicado por Apogee Software en 1991. Abarca los episodios 4 y 5 de la saga Commander Keen.",
  notes:
    "Open-source reimplementation of Commander Keen: Goodbye, Galaxy (Episodes 4-6) that runs the original game data. It needs your own copy of the games.",
  notesEs:
    "Reimplementación de código abierto de Commander Keen: Goodbye, Galaxy (episodios 4-6) que ejecuta los datos originales. Necesita tu propia copia de los juegos.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/ef/Commander_Keen_cover_art.jpeg",
    alt: "Commander Keen (cover)",
    credit: "Wikipedia",
  },
};
