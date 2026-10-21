import type { Port } from "@/lib/ports/schema";

export const lotrTwoTowersRecomp: Port = {
  schema: "port",
  id: "lotr-two-towers-recomp",
  title: "The Lord of the Rings: The Two Towers (Xbox port)",
  game: "The Lord of the Rings: The Two Towers",
  developers: ["Shagg88"],
  publisher: "Electronic Arts",
  originalYear: 2002,
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
  related: ["lotr-return-of-the-king-recomp"],
  notes:
    "The Xbox version of The Two Towers (EA, 2002) rebuilt as a native Windows port and launched from Athelas. You need your own copy of the Xbox game.",
  notesEs:
    "La versión de Xbox de Las Dos Torres (EA, 2002) reconstruida como port nativo de Windows y lanzada desde Athelas. Necesitas tu propia copia del juego de Xbox.",
};
