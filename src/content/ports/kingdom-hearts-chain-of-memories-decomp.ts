import type { Port } from "@/lib/ports/schema";

export const kingdomHeartsChainOfMemoriesDecomp: Port = {
  schema: "port",
  id: "kingdom-hearts-chain-of-memories-decomp",
  title: "Kingdom Hearts: Chain of Memories Decompilation",
  game: "Kingdom Hearts: Chain of Memories",
  developers: ["Pheenoh"],
  publisher: "Square Enix",
  originalYear: 2004,
  portType: "decompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Pheenoh/khcom"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
  notes:
    "Decompilation of Kingdom Hearts: Chain of Memories (Game Boy Advance). A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Kingdom Hearts: Chain of Memories (Game Boy Advance). Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Kingdom%20Hearts%20-%20Chain%20of%20Memories%20(USA).png",
    alt: "Kingdom Hearts: Chain of Memories (box art)",
    credit: "Box art",
  },
};
