import type { Port } from "@/lib/ports/schema";

export const openDune: Port = {
  schema: "port",
  id: "opendune",
  title: "OpenDUNE",
  game: "Dune II",
  developers: ["Westwood Studios"],
  publisher: "Virgin Interactive",
  originalYear: 1992,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "0.9", date: "2018-05-25" },
  sources: ["https://github.com/OpenDUNE/OpenDUNE"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-09-25",
  summary: "Dune II: The Building of a Dynasty is a 1992 real-time strategy game developed by Westwood Studios and published by Virgin Games. It serves as the sequel to Dune, which came out earlier that same year.",
  summaryEs: "Dune II: The Building of a Dynasty es un juego de estrategia en tiempo real desarrollado por Westwood Studios y publicado por Virgin Games en diciembre de 1992. Está basado en la película de David Lynch de 1984 Dune, una adaptación de la novela de ciencia ficción del mismo nombre escrita por Frank Herbert.",
  notes:
    "Open-source re-implementation of Dune II: The Building of a Dynasty. The original game data files are required to play.",
  notesEs:
    "Reimplementación de código abierto de Dune II: The Building of a Dynasty. Se requieren los archivos de datos del juego original para jugar.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/78/Dune2_BOD.jpg",
    alt: "Dune II (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS"],
};
