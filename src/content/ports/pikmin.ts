import type { Port } from "@/lib/ports/schema";

export const pikmin: Port = {
  schema: "port",
  id: "pikmin",
  title: "Pikmin Decompilation",
  game: "Pikmin",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "decompilation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/projectPiki/pikmin"],
  discord: "https://discord.gg/CWKqYMePX8",
  license: { spdx: "CC0-1.0" },
  verified: false,
  originalSystem: "Nintendo GameCube",
  notes:
    "Decompilation of Pikmin (GameCube) that aims to produce a playable native build from the original machine code. Work-in-progress with no tagged releases; requires a dump of the original game.",
  notesEs:
    "Decompilación de Pikmin (GameCube) que busca producir una build nativa jugable a partir del código máquina original. Trabajo en curso sin releases etiquetadas; requiere un volcado del juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Pikmin%20(USA).png",
    alt: "Pikmin (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Snaps/Pikmin%20(USA).png",
      alt: "Pikmin (screenshot)",
      credit: "Libretro",
    },
  ],
};
