import type { Port } from "@/lib/ports/schema";

export const yakuzaDeadSoulsRecomp: Port = {
  schema: "port",
  id: "yakuza-dead-souls-recomp",
  title: "Yakuza: Dead Souls Recompiled",
  game: "Yakuza: Dead Souls",
  developers: ["canersaka"],
  publisher: "Sega",
  originalYear: 2011,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/canersaka/Yakuza-Dead-Souls-Recompiled"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 3"],
  notes:
    "Static recompilation of Yakuza: Dead Souls (PlayStation 3) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Yakuza: Dead Souls (PlayStation 3) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e5/Yakuza-dead-souls-ps3-cover-1.jpg",
    alt: "Yakuza: Dead Souls (cover)",
    credit: "Wikipedia",
  },
};
