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
