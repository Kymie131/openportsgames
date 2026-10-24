import type { Port } from "@/lib/ports/schema";

export const warioland4: Port = {
  schema: "port",
  id: "warioland4",
  title: "Wario Land 4 Decompilation",
  game: "Wario Land 4",
  developers: ["TsilaAllaoui"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/TsilaAllaoui/warioland4"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  summary: "Wario Land 4 is a 2001 platform game developed by Nintendo R&D1 and published by Nintendo for the Game Boy Advance. It is the fourth installment in the Wario Land subseries of the Wario series. It was released in Japan in August 2001 and November 2001 internationally. In the game, Wario has to gather four treasures to unlock a pyramid and save Princess Shokora from the Golden Diva. The game received acclaim for its graphics and gameplay.",
  summaryEs: "Wario Land 4 es un videojuego de plataformas de Wario desarrollado por Nintendo R&D1 para Game Boy Advance. Llegó al mercado en agosto de 2001 en Japón, en octubre de 2001 en Estados Unidos y en noviembre del mismo año en Europa. Más tarde, en 2004, también llegó al mercado en China.",
  notes:
    "Clean-room decompilation of Wario Land 4 for the Game Boy Advance. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación limpia de Wario Land 4 para Game Boy Advance. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9a/Wario_Land_4_NA_Box_Art.png",
    alt: "Wario Land 4 (cover)",
    credit: "Wikipedia",
  },
};
