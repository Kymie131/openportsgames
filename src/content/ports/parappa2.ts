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
