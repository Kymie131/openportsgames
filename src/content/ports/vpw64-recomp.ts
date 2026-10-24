import type { Port } from "@/lib/ports/schema";

export const vpw64Recomp: Port = {
  schema: "port",
  id: "vpw64-recomp",
  title: "Virtual Pro Wrestling 64",
  game: "Virtual Pro Wrestling 64",
  developers: ["jessetbh"],
  publisher: "Asmik Ace",
  originalYear: 1997,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jessetbh/VPW64Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Virtual Pro Wrestling 64 is a professional wrestling video game released in 1997 on the Nintendo 64 and the second game in the Virtual Pro Wrestling series. The game is a sequel to the original Virtual Pro Wrestling released in 1996 exclusively for the PlayStation. The game was only released in Japan, and is the Japanese counterpart to WCW vs. nWo: World Tour.",
  summaryEs: "Virtual Pro Wrestling 64 es un videojuego de lucha publicado por Asmik Ace Entertainment en 1997.",
  notes:
    "Static recompilation of Virtual Pro Wrestling 64 (N64) with N64Recomp and the RT64 renderer. It requires the original game.",
  notesEs:
    "Recompilación estática de Virtual Pro Wrestling 64 (N64) con N64Recomp y el renderizador RT64. Requiere el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Virtual%20Pro%20Wrestling%2064%20(Japan).png",
    alt: "Virtual Pro Wrestling 64 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Virtual%20Pro%20Wrestling%2064%20(Japan).png",
      alt: "Virtual Pro Wrestling 64 (screenshot)",
      credit: "Libretro",
    },
  ],
};
