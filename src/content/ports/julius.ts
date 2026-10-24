import type { Port } from "@/lib/ports/schema";

export const julius: Port = {
  schema: "port",
  id: "julius",
  title: "Julius",
  game: "Caesar III",
  developers: ["Impressions Games"],
  publisher: "Sierra On-Line",
  originalYear: 1998,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "1.8.0", date: "2025-07-31" },
  sources: ["https://github.com/bvschaik/julius"],
  license: { spdx: "AGPL-3.0" },
  verified: true,
  verifiedAt: "2026-09-25",
  summary: "Caesar III is a city-building game released on September 30, 1998, for Microsoft Windows and Mac OS, developed by Impressions Games and published by Sierra On-Line. It is the third installment of the Caesar series of games and is part of Sierra's City Building series. Players assume the role of a provincial governor to build thriving cities across the Roman Empire, in which they must ensure their citizens have their needs met, and deal with various disasters, angry gods and hostile enemies.",
  summaryEs: "Caesar III es un juego de ordenador desarrollado por Impressions Games y distribuido por Sierra Entertainment; es el tercer título de la saga de juegos Caesar, concretamente de la serie de juegos de Sierra City Building Series y se lanzó al mercado en 1998.",
  notes:
    "Open-source re-implementation of Caesar III that runs with the original game files. On top of the stable releases, the project publishes continuous (weekly) builds.",
  notesEs:
    "Reimplementación de código abierto de Caesar III que funciona con los archivos del juego original. Además de las releases estables, el proyecto publica builds continuas (semanales).",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/56/Caeser_III_Coverart.jpg",
    alt: "Caesar III (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["Windows"],
};
