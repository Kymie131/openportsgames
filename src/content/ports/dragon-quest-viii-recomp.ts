import type { Port } from "@/lib/ports/schema";

export const dragonQuestViiiRecomp: Port = {
  schema: "port",
  id: "dragon-quest-viii-recomp",
  title: "Dragon Quest VIII Recompiled",
  game: "Dragon Quest VIII",
  developers: ["Sinan-Karakaya"],
  publisher: "Square Enix",
  originalYear: 2004,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Sinan-Karakaya/DQ8-Recompiled"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Dragon Quest VIII: Journey of the Cursed King is a 2004 role-playing video game developed by Level-5 and published by Square Enix for the PlayStation 2. It was first released in Japan in November 2004, followed by North America in November 2005 and PAL regions in April 2006. It is the eighth installment of the Dragon Quest series and it is the first English version of a Dragon Quest game to drop the Dragon Warrior title.",
  summaryEs: "Dragon Quest VIII: El periplo del Rey Maldito es la octava entrega de la serie Dragon Quest. Fue desarrollado por el estudio Level-5, quien también trabajó en la serie de Dark Cloud para PlayStation 2. Yuji Horii supervisó el proyecto, mientras que Akira Toriyama diseñó los monstruos y personajes, y Koichi Sugiyama volvió a asumir el papel de compositor de la banda sonora. Una nueva edición para Nintendo 3DS fue lanzado en 2015 con dos personajes extra manejables, nuevos monstruos y una prolongación de la historia.",
  notes:
    "Static recompilation of Dragon Quest VIII: Journey of the Cursed King (PlayStation 2) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Dragon Quest VIII: El periplo del rey maldito (PlayStation 2) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Dragon%20Quest%20VIII%20-%20Journey%20of%20the%20Cursed%20King%20(USA).png",
    alt: "Dragon Quest VIII (box art)",
    credit: "Box art",
  },
};
