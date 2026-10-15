import type { Port } from "@/lib/ports/schema";

export const rogueSquadronDecomp: Port = {
  schema: "port",
  id: "rogue-squadron-decomp",
  title: "Star Wars: Rogue Squadron Decompilation",
  game: "Star Wars: Rogue Squadron",
  developers: ["Tmcg2"],
  publisher: "LucasArts",
  originalYear: 1998,
  portType: "decompilation",
  type: "decomp-in-progress",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Tmcg2/rogue_squadron64"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  notes:
    "Decompilation of Star Wars: Rogue Squadron for the Nintendo 64. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Star Wars: Rogue Squadron para Nintendo 64. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b6/Star-wars-rogue-squadron.jpg",
    alt: "Star Wars: Rogue Squadron (cover)",
    credit: "Wikipedia",
  },
};
