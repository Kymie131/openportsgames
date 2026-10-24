import type { Port } from "@/lib/ports/schema";

export const dragonBallZBudokaiHd: Port = {
  schema: "port",
  id: "dragon-ball-z-budokai-hd",
  title: "Dragon Ball Z: Budokai HD",
  game: "Dragon Ball Z: Budokai HD Collection",
  developers: ["WistfulHopes"],
  publisher: "Bandai Namco",
  originalYear: 2012,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/WistfulHopes/DBZ1"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Dragon Ball Z: Budokai, known as in Japan as simply Dragon Ball Z, is a series of fighting video games based on the anime series Dragon Ball Z, itself part of the larger Dragon Ball franchise.",
  summaryEs: "Dragon Ball Z Budokai HD Collection es una recopilación remasterizada que contiene los títulos Dragon Ball Z Budokai y Dragon Ball Z Budokai 3 que aparecieron originalmente en PlayStation 2 en los años 2002 y 2004, respectivamente. Este recopilatorio está disponible para las consolas PlayStation 3 y Xbox 360, con los dos juegos remasterizados en alta definición a 720p y soporte para logros y trofeos.",
  notes:
    "ReXGlue static recompilation of Dragon Ball Z: Budokai HD Collection (Xbox 360) for Windows. Needs the original game files.",
  notesEs:
    "Recompilación estática con ReXGlue de Dragon Ball Z: Budokai HD Collection (Xbox 360) para Windows. Necesita los archivos originales.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/07/DBZ1%262.PNG",
    alt: "Dragon Ball Z: Budokai HD Collection (cover)",
    credit: "Wikipedia",
  },
};
