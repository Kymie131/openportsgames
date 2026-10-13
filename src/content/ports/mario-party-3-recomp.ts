import type { Port } from "@/lib/ports/schema";

export const marioParty3Recomp: Port = {
  schema: "port",
  id: "mario-party-3-recomp",
  title: "Mario Party 3 Recompiled",
  game: "Mario Party 3",
  developers: ["Rainchus"],
  publisher: "Nintendo",
  originalYear: 2000,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rainchus/MarioParty3-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Mario Party 3 (Nintendo 64) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Mario Party 3 (Nintendo 64) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mario%20Party%203%20(USA)%20(LodgeNet).png",
    alt: "Mario Party 3 (box art)",
    credit: "Box art",
  },
};
