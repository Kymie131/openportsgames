import type { Port } from "@/lib/ports/schema";

export const spiderManEdgeOfTimeRecomp: Port = {
  schema: "port",
  id: "spider-man-edge-of-time-recomp",
  title: "EdgeOfTimeRecompiled",
  game: "Spider-Man: Edge of Time",
  developers: ["goliathret"],
  publisher: "Activision",
  originalYear: 2011,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/goliathret/EdgeOfTimeRecomp"],
  license: { spdx: "BSD-3-Clause" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Spider-Man: Edge of Time is a 2011 action-adventure video game based on the Marvel Comics superhero Spider-Man, developed by Beenox and published by Activision for the PlayStation 3, Xbox 360, Wii, and Nintendo 3DS. A Nintendo DS version was also developed by Other Ocean Interactive and features several alterations. The game was directed by Gérard Lehiany and Ramiro Belanger and is a standalone sequel to 2010's Spider-Man: Shattered Dimensions.",
  summaryEs: "Spider-Man: Edge of Time es un videojuego desarrollado por Activision, Beenox, basado en el superhéroe Spider-Man. El juego fue dirigido por Gerard Lehiany. La historia, escrita por Peter David, Ramiro Belanger y Gérard Lehiany, implica tanto a Peter Parker, el Spider-Man original, y Miguel O'Hara, alias Spider-Man 2099. La jugabilidad contiene un sistema \"causa y efecto\" en el que las acciones de un Spider-Man afectarán al otro y viceversa. Fue lanzado el 4 de octubre de 2011 en Norteamérica, el 14 de octubre de 2011 en Europa y el 26 de octubre de 2011 en Australasia.",
  notes:
    "Native recompilation of Spider-Man: Edge of Time (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Spider-Man: Edge of Time (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/df/Spider-Man_Edge_of_Time.jpg",
    alt: "Spider-Man: Edge of Time (box art)",
    credit: "Wikipedia",
  },
};
