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
  summary: "Crystal Caves is a side-scrolling platform game developed and published by Apogee Software for IBM PC compatibles. The game is divided into three episodes with the first distributed as shareware and the other two available for purchase. Designer Frank Maddin said the method worked \"pretty well\" for the time. Crystal Caves was inspired by the 1982 game Miner 2049er for Atari 8-bit computers.",
  summaryEs: "Crystal Caves es un videojuego de plataformas publicado por Apogee Software en 1991.",
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
