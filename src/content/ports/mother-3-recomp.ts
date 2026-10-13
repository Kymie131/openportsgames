import type { Port } from "@/lib/ports/schema";

export const mother3Recomp: Port = {
  schema: "port",
  id: "mother-3-recomp",
  title: "Mother 3 Recompiled",
  game: "Mother 3",
  developers: ["agray0425"],
  publisher: "Nintendo",
  originalYear: 2006,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/agray0425/Mother3Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Mother 3 (Game Boy Advance) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Mother 3 (Game Boy Advance) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Mother%203%20(Japan)%20%5BT-En%20by%20Chewy,%20Jeffman%20and%20Tomato%5D.png",
    alt: "Mother 3 (box art)",
    credit: "Box art",
  },
};
