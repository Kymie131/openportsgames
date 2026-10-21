import type { Port } from "@/lib/ports/schema";

export const freeSO: Port = {
  schema: "port",
  id: "free-so",
  title: "FreeSO",
  game: "The Sims Online",
  developers: ["riperiperi"],
  publisher: "Electronic Arts",
  originalYear: 2002,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/riperiperi/FreeSO"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  notes:
    "Open-source reimplementation of The Sims Online that runs the original game data. It needs your own copy of the game.",
  notesEs:
    "Reimplementación de código abierto de The Sims Online que ejecuta los datos del juego original. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/db/The_Sims_Online_Cover.jpg",
    alt: "The Sims Online (cover)",
    credit: "Wikipedia",
  },
};
