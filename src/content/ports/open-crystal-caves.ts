import type { Port } from "@/lib/ports/schema";

export const openCrystalCaves: Port = {
  schema: "port",
  id: "open-crystal-caves",
  title: "OpenCrystalCaves",
  game: "Crystal Caves",
  developers: ["OpenCrystalCaves"],
  publisher: "Apogee Software",
  originalYear: 1991,
  portType: "reimplementation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenCrystalCaves/OpenCrystalCaves"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  notes:
    "Unofficial open-source engine reimplementation of Crystal Caves (MS-DOS). It needs your own copy of the game.",
  notesEs:
    "Reimplementación no oficial de código abierto del motor de Crystal Caves (MS-DOS). Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/cf/Crystal_Caves_CD_Cover.jpg",
    alt: "Crystal Caves (cover)",
    credit: "Wikipedia",
  },
};
