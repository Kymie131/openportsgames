import type { Port } from "@/lib/ports/schema";

export const sonicAdvanceRecomp: Port = {
  schema: "port",
  id: "sonic-advance-recomp",
  title: "Sonic Advance Recompiled",
  game: "Sonic Advance",
  developers: ["smiluredev"],
  publisher: "Sega",
  originalYear: 2001,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/smiluredev/SonicAdvanceRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
  notes:
    "Static recompilation of Sonic Advance (Game Boy Advance) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Sonic Advance (Game Boy Advance) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Sonic%20Advance%20(USA)%20(En,Ja).png",
    alt: "Sonic Advance (box art)",
    credit: "Box art",
  },
};
