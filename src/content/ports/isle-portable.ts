import type { Port } from "@/lib/ports/schema";

export const islePortable: Port = {
  schema: "port",
  id: "isle-portable",
  title: "Isle Portable",
  game: "LEGO Island",
  developers: ["isle decomp community"],
  publisher: "Mindscape",
  originalYear: 1997,
  genre: "action-adventure",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos", "android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/isledecomp/isle-portable"],
  license: { spdx: "LGPL-3.0" },
  verified: false,
  originalSystems: ["Windows"],
  features: ["Cross-platform desktop builds", "Android build", "SDL2 backends"],
  featuresEs: ["Builds de escritorio multiplataforma", "Build para Android", "Backends SDL2"],
  summary: "Lego Island is a Lego-themed open world action-adventure game developed and published by Mindscape. It was released for Windows on September 26, 1997, as the second Lego video game overall and the first one outside Japan. In the \"proto-open world\" game, players explore the eponymous island as one of five unique minifigure characters, and can build vehicles and complete side quests; the game's main story involves Pepper Roni, a pizza delivery boy, and his efforts to stop an escaped prisoner known as the Brickster from destroying the island.",
  summaryEs: "Lego Island es un videojuego de acción y aventura de mundo abierto basado en Lego, desarrollado y publicado por Mindscape. Salió a la venta para Windows el 26 de septiembre de 1997, siendo el segundo juego de la franquicia y el primero fuera de Japón. En este «mundo abierto proto», los jugadores exploran la isla homónima en el papel de uno de los cinco personajes minifigura únicos, y pueden construir vehículos y completar misiones secundarias.",
  notes:
    "Source-based reimplementation of LEGO Island. The only GitHub release is a rolling continuous build rather than a numbered version.",
  notesEs:
    "Reimplementación basada en código fuente de LEGO Island. La única release de GitHub es una build continua y no una versión numerada.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a1/Lego-island.jpg",
    alt: "LEGO Island (box art)",
    credit: "Wikipedia",
  },
};
