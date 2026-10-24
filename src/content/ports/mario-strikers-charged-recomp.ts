import type { Port } from "@/lib/ports/schema";

export const marioStrikersChargedRecomp: Port = {
  schema: "port",
  id: "mario-strikers-charged-recomp",
  title: "Mario Strikers Charged Recompiled",
  game: "Mario Strikers Charged",
  developers: ["yannicksuter"],
  publisher: "Nintendo",
  originalYear: 2007,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/previouslevelgames/recharged"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  summary: "Mario Strikers Charged as is a 2007 sports video game developed by Next Level Games and published by Nintendo for the Wii. It is the sequel to Super Mario Strikers for the GameCube.",
  summaryEs: "Mario Strikers Charged es un videojuego de fútbol desarrollado por Next Level Games y publicado por Nintendo para la consola Wii. Llegó al mercado el 25 de mayo de 2007 en Europa, el 30 de julio de 2007 en Norteamérica y el 20 de septiembre de 2007 en Japón. Es el segundo juego de la saga Mario Strikers, teniendo la misma temática que su predecesor Super Mario Strikers con algunas modificaciones en la jugabilidad.",
  notes:
    "Mario Strikers Charged (Wii) ported to PC, macOS and Linux from its decompilation. It needs your own copy of the game.",
  notesEs:
    "Mario Strikers Charged (Wii) portado a PC, macOS y Linux desde su decompilación. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Wii/Named_Boxarts/Mario%20Strikers%20Charged%20(USA)%20(En,Fr,Es)%20(Rev%201).png",
    alt: "Mario Strikers Charged (box art)",
    credit: "Box art",
  },
};
