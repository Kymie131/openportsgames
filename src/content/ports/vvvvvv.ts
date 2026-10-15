import type { Port } from "@/lib/ports/schema";

export const vvvvvv: Port = {
  schema: "port",
  id: "vvvvvv",
  title: "VVVVVV",
  game: "VVVVVV",
  developers: ["Terry Cavanagh"],
  publisher: "Nicalis",
  originalYear: 2010,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/TerryCavanagh/VVVVVV"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  notes:
    "Official open source release of VVVVVV, the gravity-flipping platformer by Terry Cavanagh. The source builds the full game, which you own.",
  notesEs:
    "Publicación oficial de código abierto de VVVVVV, el plataformas de gravedad invertida de Terry Cavanagh. El código compila el juego completo, que posees.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/5/52/VVVVVV_-_The_Tomb_of_Mad_Carew.png",
    alt: "VVVVVV (artwork)",
    credit: "Wikimedia Commons",
  },
};
