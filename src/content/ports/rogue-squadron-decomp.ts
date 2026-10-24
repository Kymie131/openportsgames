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
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/Tmcg2/rogue_squadron64"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Star Wars: Rogue Squadron or Star Wars: Rogue Squadron 3D is an arcade-style flight action game co-developed by Factor 5 and LucasArts. The first of the Rogue Squadron trilogy, it was published by LucasArts and Nintendo and released for Microsoft Windows and Nintendo 64 in December 1998. The game's story was influenced by the Star Wars: X-wing – Rogue Squadron comics and is set in the fictional Star Wars galaxy, taking place primarily between events in the films Star Wars and The Empire Strikes Back.",
  summaryEs: "Star Wars: Rogue Squadron es un videojuego de acción y aventura publicado por Lucasfilm Games en 1998.",
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
