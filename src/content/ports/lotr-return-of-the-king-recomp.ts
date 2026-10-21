import type { Port } from "@/lib/ports/schema";

export const lotrReturnOfTheKingRecomp: Port = {
  schema: "port",
  id: "lotr-return-of-the-king-recomp",
  title: "The Lord of the Rings: The Return of the King (PC)",
  game: "The Lord of the Rings: The Return of the King",
  developers: ["Shagg88"],
  publisher: "Electronic Arts",
  originalYear: 2003,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.1.3", date: "2026-10-20" },
  sources: ["https://github.com/Shagg88/Athelas"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox"],
  related: ["lotr-two-towers-recomp"],
  notes:
    "The Xbox version of The Return of the King (EA, 2003) rebuilt for Windows by the Athelas launcher. No game files are included, so you need your own disc.",
  notesEs:
    "La versión de Xbox de El Retorno del Rey (EA, 2003) reconstruida para Windows con el lanzador Athelas. No incluye archivos del juego: necesitas tu propio disco.",
};
