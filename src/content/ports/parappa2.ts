import type { Port } from "@/lib/ports/schema";

export const parappa2: Port = {
  schema: "port",
  id: "parappa2",
  title: "PaRappa the Rapper 2 Decompilation",
  game: "PaRappa the Rapper 2",
  developers: ["parappadev"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2001,
  portType: "decompilation",
  genre: "music",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/parappadev/parappa2"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "PaRappa the Rapper 2 is a 2001 rhythm video game developed by NanaOn-Sha and published by Sony Computer Entertainment for the PlayStation 2. It is the third and most recent title in the PaRappa the Rapper series, following Um Jammer Lammy. The game was made available for the PlayStation 4 through the PlayStation Network in December 2015.",
  summaryEs: "PaRappa the Rapper 2 es un videojuego musical publicado por Sony Computer Entertainment y desarrollado por NanaOn-Sha para PlayStation 2, lanzado el 30 de agosto de 2001 en Japón y el 12 de octubre de 2001 en Europa. El juego es el tercer título de la serie PaRappa the Rapper después de Um Jammer Lammy. El 14 de diciembre de 2015, el juego estuvo disponible para PlayStation 4 a través de PlayStation Network.",
  notes:
    "Decompilation of PaRappa the Rapper 2 for the PlayStation 2. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de PaRappa the Rapper 2 para PlayStation 2. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/db/PaRappa_the_Rapper_2_Coverart.png",
    alt: "PaRappa the Rapper 2 (cover)",
    credit: "Wikipedia",
  },
};
