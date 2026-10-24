import type { Port } from "@/lib/ports/schema";

export const doa3Recomp: Port = {
  schema: "port",
  id: "doa3-recomp",
  title: "Dead or Alive 3 Recompiled",
  game: "Dead or Alive 3",
  developers: ["parkerallan"],
  publisher: "Tecmo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/parkerallan/doa3-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox"],
  summary: "Dead or Alive 3 is a 2001 fighting game developed by Team Ninja and published by Tecmo for the Xbox console as one of its launch titles. It is the third main entry in the Dead or Alive fighting series following Dead or Alive 2 (1999). Dead or Alive 3 improved upon the gameplay and graphics in beautiful detail compared to that of its predecessors. The game's story focuses on DOATEC's attempt to create the ultimate human weapon through their Omega Project by capturing the Mugen Tenshin Ninja Clan's Hajin Mon leader, Genra, and transforming him into an evil superhuman called Omega.",
  summaryEs: "Dead or Alive 3 es un videojuego de lucha de 2001 desarrollado por Team Ninja y publicado por Tecmo exclusivamente para la consola Xbox como uno de sus títulos de lanzamiento. Es la tercera entrada principal en la serie de lucha Dead or Alive. Dead or Alive 3 mejoró la jugabilidad y los gráficos con un detalle superior en comparación con sus predecesores.",
  notes:
    "Static recompilation of Dead or Alive 3 (Xbox) with ReXGlue. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Dead or Alive 3 (Xbox) con ReXGlue. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Boxarts/Dead%20or%20Alive%203%20(USA).png",
    alt: "Dead or Alive 3 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Microsoft%20-%20Xbox/Named_Snaps/Dead%20or%20Alive%203%20(USA).png",
      alt: "Dead or Alive 3 (screenshot)",
      credit: "Libretro",
    },
  ],
};
