import type { Port } from "@/lib/ports/schema";

export const riiablo: Port = {
  schema: "port",
  id: "riiablo",
  title: "Riiablo",
  game: "Diablo II",
  developers: ["collinsmith"],
  publisher: "Blizzard Entertainment",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/collinsmith/riiablo"],
  license: { spdx: "Apache-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Microsoft Windows",
  notes:
    "Open-source reimplementation of Diablo II written in Java (LibGDX) that runs the original game data. It needs your own copy of the game.",
  notesEs:
    "Reimplementación de código abierto de Diablo II escrita en Java (LibGDX) que ejecuta los datos del juego original. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d5/Diablo_II_Coverart.png",
    alt: "Diablo II (cover)",
    credit: "Wikipedia",
  },
};
