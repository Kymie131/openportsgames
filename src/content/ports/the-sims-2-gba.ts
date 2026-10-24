import type { Port } from "@/lib/ports/schema";

export const TheSims2Gba: Port = {
  schema: "port",
  id: "the-sims-2-gba",
  title: "The Sims 2 (GBA)",
  game: "The Sims 2 (GBA)",
  developers: ["SimsAdvanceRet"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SimsAdvanceRet/S2GBADecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  summary: "The Sims is a series of life simulation video games developed by Maxis and published by Electronic Arts (EA). The franchise has sold nearly 200 million copies worldwide, and is one of the best-selling video game series of all time. It is also part of the larger Sim series, started by SimCity in 1989.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  cover: {
    src: "https://openportsgames.com/covers/generated/the-sims-2-gba.svg",
    alt: "The Sims 2 (GBA) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "A WIP disassembly/decompilation project of The Sims 2 on the Game Boy Advance.",
  notesEs:
    "Proyecto de desensamblado/decompilación de The Sims 2 para Game Boy Advance, en desarrollo.",
};
