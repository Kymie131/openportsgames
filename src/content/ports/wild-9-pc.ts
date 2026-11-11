import type { Port } from "@/lib/ports/schema";

export const wild9Pc: Port = {
  schema: "port",
  id: "wild-9-pc",
  title: "Wild 9 (PC)",
  game: "Wild 9",
  developers: ["plinkr"],
  publisher: "Interplay Entertainment",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.1.9", date: "2026-11-01" },
  sources: ["https://github.com/plinkr/Wild9Recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/plinkr/Wild9Recomp/releases/download/v0.1.9/wild9-0.1.9-windows-x64.zip",
      size: "13.2 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/a4/Wild_9_Coverart.png",
    alt: "Wild 9 (box art)",
    credit: "Wikipedia",
  },
  summary: "Wild 9 is a 2.5D platform video game for the PlayStation. The game was designed by David Perry, developed by Shiny Entertainment, and published by Interplay Productions, all of whom were involved in Earthworm Jim series of video games. The game was released in North America and Europe in September 1998.",
  summaryEs: "Wild 9 es un videojuego de acción y aventura publicado por Interplay Entertainment en 1998.",
  notes: "Wild 9 (Interplay Entertainment, 1998) running on Windows through static recompilation. Latest release: v0.1.7. You need your own copy of the game.",
  notesEs: "Wild 9 (Interplay Entertainment, 1998) en Windows mediante recompilación estática. Última release: v0.1.7. Necesitas tu propia copia del juego.",
};
