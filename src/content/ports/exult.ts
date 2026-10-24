import type { Port } from "@/lib/ports/schema";

export const exultPort: Port = {
  schema: "port",
  id: "exult",
  title: "Exult",
  game: "Ultima VII",
  developers: ["Exult Team"],
  publisher: "Origin Systems",
  originalYear: 1992,
  genre: "rpg",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/exult/exult"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystems: ["MS-DOS"],
  features: [
    "Supports both Ultima VII and Ultima VIII data sets",
    "Android build available",
    "Scripting support for new content",
  ],
  featuresEs: [
    "Compatible con los conjuntos de datos de Ultima VII y Ultima VIII",
    "Build disponible para Android",
    "Soporte de scripting para contenido nuevo",
  ],
  summary: "Ultima VIII: Pagan is a role-playing video game, released as the eighth part of the Ultima series. Released in 1994, it is a DOS-only title and is also the first game in the series to be rated M in North America. It was not as well-received as its predecessors, Ultima VII and Ultima VII Part Two: Serpent Isle.",
  summaryEs: "Ultima es una saga de videojuegos de rol para ordenador desarrollada por Origin Systems, Inc. Fue creada por Richard Garriot,. Muchos capítulos de la saga son considerados puntos de partida para otros juegos de su especie. En la actualidad, Electronic Arts mantiene los derechos sobre la franquicia del juego, habiendo sido una de las sagas más largas -si no la mayor-.",
  notes:
    "Open source engine for the Ultima VII and VIII games. Published GitHub releases are prereleases only, so no stable version is recorded.",
  notesEs:
    "Motor de código abierto para los juegos Ultima VII y VIII. Las releases de GitHub publicadas son solo versiones preliminares, así que no se registra una versión estable.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Ultima%20VII%20-%20Part%201%20-%20The%20Black%20Gate%20%2B%20Forge%20of%20Virtue.png",
    alt: "Ultima VII (box art)",
    credit: "Box art",
  },
};
