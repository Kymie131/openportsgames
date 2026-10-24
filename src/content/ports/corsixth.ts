import type { Port } from "@/lib/ports/schema";

export const corsixth: Port = {
  schema: "port",
  id: "corsixth",
  title: "CorsixTH",
  game: "Theme Hospital",
  developers: ["Bullfrog Productions"],
  publisher: "Electronic Arts",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "0.70.1", date: "2026-08-28" },
  sources: ["https://github.com/CorsixTH/CorsixTH"],
  website: "https://corsixth.com/",
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-25",
  screenshots: [
    {
      src: "https://corsixth.com/media/screenshots/1.jpg",
      alt: "Theme Hospital gameplay rendered by CorsixTH",
      credit: "CorsixTH",
    },
    {
      src: "https://corsixth.com/media/screenshots/2.jpg",
      alt: "A hospital corridor in Theme Hospital running on CorsixTH",
      credit: "CorsixTH",
    },
  ],
  summary: "Theme Hospital is a business simulation game developed by Bullfrog Productions and published by Electronic Arts in 1997 for MS-DOS and Microsoft Windows compatible PCs in which players design and operate a privately owned hospital with the goal of curing patients of fictitious comical ailments. The game is the thematic successor to Theme Park, also produced by Bullfrog, and the second installment in their Theme series, and part of their Designer Series. The game is noted for its humour, and contains numerous references to pop culture.",
  summaryEs: "Theme Hospital es un videojuego de simulación desarrollado por Bullfrog Productions y publicado por Electronic Arts en 1997, en el cual el jugador diseña y opera un hospital. Como la mayoría de los juegos de Bullfrog Theme Hospital está impregnado de un excéntrico sentido del humor. Este juego es el sucesor espiritual de Theme Park, un juego también producido por Bullfrog.",
  notes:
    "Re-implementation of the Theme Hospital engine that loads the original game data. The free demo and the GOG release of the game are supported.",
  notesEs:
    "Reimplementación del motor de Theme Hospital que carga los datos del juego original. Se admiten tanto la demo gratuita como la versión de GOG del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/26/Theme_Hospital.front_cover.jpg",
    alt: "Theme Hospital (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS"],
};
