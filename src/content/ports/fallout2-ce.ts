import type { Port } from "@/lib/ports/schema";

export const fallout2Ce: Port = {
  schema: "port",
  id: "fallout2-ce",
  title: "Fallout 2 Community Edition",
  game: "Fallout 2",
  developers: ["Interplay Productions"],
  publisher: "Interplay Productions",
  originalYear: 1998,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.3.0", date: "2024-04-21" },
  sources: ["https://github.com/alexbatalov/fallout2-ce"],
  license: {
    spdx: "NOASSERTION",
    note: "project states it derives from a public domain release of the Fallout source",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  summary: "Fallout 2: A Post Nuclear Role Playing Game is a 1998 role-playing video game developed by Black Isle Studios and published by Interplay Productions. It is a sequel to Fallout (1997), featuring similar graphics and game mechanics. The game's story takes place in 2241, roughly 80 years after the events of Fallout and 164 years after the atomic war which reduced the vast majority of the world to a nuclear wasteland.",
  summaryEs: "Fallout 2 es un videojuego de rol, originalmente para PC, perteneciente a la saga de Fallout y desarrollado por Black Isle Studios, fue publicado por Interplay el 30 de septiembre de 1998. Se trata de un título de rol postapocalíptico como todos los de la saga Fallout. El juego toma lugar en el año 2241, 80 años luego de los sucesos de Fallout. Cuenta la historia del descendiente del héroe de la primera entrega, el cual emprende una búsqueda para salvar su tribu del hambre y los efectos de los Baldíos, para esto debe conseguir el G.E.C.K.",
  notes:
    "Community engine for Fallout 2 rebuilt for modern operating systems. Requires the original Fallout 2 game files.",
  notesEs:
    "Motor comunitario de Fallout 2 adaptado a sistemas operativos modernos. Requiere los archivos del juego original de Fallout 2.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c3/PC_Game_Fallout_2.jpg",
    alt: "Fallout 2 (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["Windows"],
};
