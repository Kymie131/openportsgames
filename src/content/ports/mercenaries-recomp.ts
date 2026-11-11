import type { Port } from "@/lib/ports/schema";

export const mercenariesRecomp: Port = {
  schema: "port",
  id: "mercenaries-recomp",
  title: "Mercenaries Recompiled",
  game: "Mercenaries: Playground of Destruction",
  developers: ["KraftMacAndChee"],
  publisher: "LucasArts",
  originalYear: 2005,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.1.1", date: "2026-10-06" },
  sources: ["https://github.com/KraftMacAndChee/Mercenaries-Recompiled"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Mercenaries: Playground of Destruction is an action-adventure video game developed by Pandemic Studios and published by LucasArts for PlayStation 2 and Xbox. Additionally, the game can be purchased from the Xbox digital store and played on Xbox One and Xbox Series consoles through the Xbox backwards compatibility program.",
  summaryEs: "Mercenarios: El arte de la destrucción es un videojuego de acción en tercera persona ambientado en un imaginario golpe de Estado en Corea del Norte en septiembre de 2009. Fue sacado a la venta el 18 de febrero de 2005. Actualmente hay una secuela, titulada Mercenarios 2: World in Flames, ambientada en Venezuela.",
  notes:
    "Native recompilation of Mercenaries: Playground of Destruction (PlayStation 2) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación nativa de Mercenaries: Playground of Destruction (PlayStation 2) para Windows. Necesita tu propia copia del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/KraftMacAndChee/Mercenaries-Recompiled/releases/download/v1.1.1/Mercenaries.Recompiled.Public.1.1.1.zip",
      size: "25.3 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Mercenaries%20(USA).png",
    alt: "Mercenaries: Playground of Destruction (box art)",
    credit: "Box art",
  },
};
