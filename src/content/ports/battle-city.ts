import type { Port } from "@/lib/ports/schema";

export const BattleCity: Port = {
  schema: "port",
  id: "battle-city",
  title: "Battle City",
  game: "Battle City",
  developers: ["vgrichina"],
  publisher: "Unknown",
  originalYear: 1985,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/vgrichina/battlecity"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo Entertainment System",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/48/Battle_City_NES_cover.jpg",
    alt: "Battle City (cover)",
    credit: "Wikipedia",
  },
  notes:
    "Reverse engineering Battle City (Famicom, 1985) — annotated 6502 disassembly + browser reimplementation.",
  notesEs:
    "Ingeniería inversa de Battle City (Famicom, 1985): desensamblado 6502 anotado y reimplementación para navegador.",
};
