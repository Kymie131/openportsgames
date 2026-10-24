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
  wip: true,
  originalSystems: ["GameCube"],
  summary: "Pikmin is a real-time strategy and puzzle video game series created by Shigeru Miyamoto, and developed and published by Nintendo. The games focus on directing a legion of plant-like creatures called Pikmin to collect items by destroying the area around them, avoiding hazards, and fighting fauna that are hazardous to both the player character and the Pikmin.",
  summaryEs: "Pikmin es una serie de videojuegos creada por Shigeru Miyamoto, lanzada por primera vez en Nintendo GameCube; en la que el protagonista es un astronauta que deberá dirigir sus propios escuadrones de Pikmin, unas criaturas diminutas que le ayudarán a superar una serie de problemas. Los personajes protagónicos de la serie, Capitán Olimar y Luis están probablemente basados en Mario y Luigi, los emblemas de la compañía Nintendo.",
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
