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
  summary: "The Sims Online was a 2002 massively multiplayer online game (MMO) developed by Maxis and published by Electronic Arts (EA) for Microsoft Windows. The game was a subscription-based online multiplayer version of the 2000 Maxis game The Sims, in which players could interact with others on virtual user-made lots, buy and customise properties, and make in-game money by taking on jobs.",
  summaryEs: "Los Sims Online es un juego en línea desarrollado por Maxis y distribuido por Electronic Arts.",
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
