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
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Spider-Man: Edge of Time (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Spider-Man: Edge of Time (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
};
