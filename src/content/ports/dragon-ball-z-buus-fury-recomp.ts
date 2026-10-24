import type { Port } from "@/lib/ports/schema";

export const dragonBallZBuusFuryRecomp: Port = {
  schema: "port",
  id: "dragon-ball-z-buus-fury-recomp",
  title: "Dragon Ball Z: Buu's Fury",
  game: "Dragon Ball Z: Buu's Fury",
  developers: ["mstan"],
  publisher: "Atari",
  originalYear: 2004,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/DragonBallZBuusFuryRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Game Boy Advance"],
  summary: "Dragon Ball Z: Buu's Fury is a 2004 action role-playing video game based on the anime Dragon Ball Z, developed by Webfoot Technologies and Published by Atari. It is the sequel to Dragon Ball Z: The Legacy of Goku II, and the third game in the Dragon Ball Z: The Legacy of Goku series. It was released on September 14, 2004 in North America.",
  summaryEs: "Dragon Ball Z: Buu's Fury es la secuela de Atari de mayor venta en Dragon Ball Z: El Legado de Goku II para Game Boy Advance. Este es el tercer juego de la \"trilogía de El legado de Goku\", a pesar de que no lleva el nombre de los 2 anteriores es una secuela directa. El juego es estilo RPG donde tienes que subir de nivel y puedes ponerte accesorios que mejoran tu rendimiento",
  notes:
    "Static recompilation of Dragon Ball Z: Buu's Fury (GBA) with the gbarecomp framework. It requires your own game data.",
  notesEs:
    "Recompilación estática de Dragon Ball Z: Buu's Fury (GBA) con el framework gbarecomp. Requiere tus propios datos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Dragon%20Ball%20Z%20-%20Buu's%20Fury%20(USA).png",
    alt: "Dragon Ball Z: Buu's Fury (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Dragon%20Ball%20Z%20-%20Buu's%20Fury%20(USA).png",
      alt: "Dragon Ball Z: Buu's Fury (screenshot)",
      credit: "Libretro",
    },
  ],
};
