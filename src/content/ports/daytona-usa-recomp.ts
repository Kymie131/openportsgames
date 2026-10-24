import type { Port } from "@/lib/ports/schema";

export const daytonaUsaRecomp: Port = {
  schema: "port",
  id: "daytona-usa-recomp",
  title: "Daytona USA Recompiled",
  game: "Daytona USA",
  developers: ["Subarasheese"],
  publisher: "Sega",
  originalYear: 1993,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Subarasheese/daytona-xbla-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Daytona USA is a 1994 racing game developed by Sega AM2 and published by Sega for arcades. Inspired by the popularity of the NASCAR motor racing series in the United States, it has players race stock cars on one of three courses. It was the first game released on the Sega Model 2 arcade system board.",
  summaryEs: "Daytona USA es un videojuego de carreras desarrollado por Sega AM2 y publicado por Sega en el año 1994. En principio el juego fue desarrollado para máquinas recreativas y posteriormente fue portado a Sega Saturn, Sega Dreamcast, Windows y finalmente a Xbox Live y PlayStation Network.",
  notes:
    "Daytona USA (Xbox 360 / XBLA, 2011) recompiled with ReXGlue. The README lists Windows and Linux builds.",
  notesEs:
    "Recompilación de Daytona USA (Xbox 360 / XBLA, 2011) con ReXGlue. El README indica builds para Windows y Linux.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c2/Daytona_USA_arcade_flyer.jpg",
    alt: "Daytona USA (box art)",
    credit: "Wikipedia",
  },
};
