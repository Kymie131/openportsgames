import type { Port } from "@/lib/ports/schema";

export const openapoc: Port = {
  schema: "port",
  id: "openapoc",
  title: "OpenApoc",
  game: "X-COM: Apocalypse",
  developers: ["MicroProse"],
  publisher: "MicroProse",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "2026.4.8", date: "2026-04-10" },
  sources: ["https://github.com/openApoc/OpenApoc"],
  discord: "https://discord.gg/f8Rayre",
  license: {
    spdx: "GPL-3.0",
  },
  verified: false,
  summary: "X-COM: Apocalypse is a 1997 science fiction tactical strategy video game developed by Mythos Games and published by MicroProse for DOS. It is the third installment in the X-COM series, following Terror from the Deep. Set 50 years after the second campaign, the game takes place primarily within the futuristic megalopolis of Mega-Primus.",
  summaryEs: "X-COM: Apocalypse es el tercero en la serie de videojuegos X-COM. Desarrollado por Mythos Games y distribuido por Microprose, fue publicado en 1997 para DOS y Microsoft Windows.",
  notes:
    "Open-source reimplementation of the X-COM: Apocalypse engine, written in C++ with SDL2. Requires the original game files to run.",
  notesEs:
    "Reimplementación de código abierto del motor de X-COM: Apocalypse, escrita en C++ con SDL2. Requiere los archivos del juego original para funcionar.",
  screenshots: [
    {
      src: "https://i.imgur.com/XxudxVj.jpg",
      alt: "openApoc screenshot",
      credit: "openApoc",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/05/XCom_Apoc.jpg",
    alt: "X-COM: Apocalypse (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS","Windows"],
};
