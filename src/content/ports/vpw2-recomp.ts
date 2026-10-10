import type { Port } from "@/lib/ports/schema";

export const vpw2Recomp: Port = {
  schema: "port",
  id: "vpw2-recomp",
  title: "Virtual Pro Wrestling 2",
  game: "Virtual Pro Wrestling 2",
  developers: ["jessetbh"],
  publisher: "Asmik Ace",
  originalYear: 2000,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jessetbh/VPW2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Virtual Pro Wrestling 2 (N64) with N64Recomp and the RT64 renderer. It requires a copy of the game.",
  notesEs:
    "Recompilación estática de Virtual Pro Wrestling 2 (N64) con N64Recomp y el renderizador RT64. Requiere una copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Virtual%20Pro%20Wrestling%202%20-%20Oudou%20Keishou%20(Japan).png",
    alt: "Virtual Pro Wrestling 2 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Virtual%20Pro%20Wrestling%202%20-%20Oudou%20Keishou%20(Japan).png",
      alt: "Virtual Pro Wrestling 2 (screenshot)",
      credit: "Libretro",
    },
  ],
};
