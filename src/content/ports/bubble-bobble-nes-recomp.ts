import type { Port } from "@/lib/ports/schema";

export const bubbleBobbleNesRecomp: Port = {
  schema: "port",
  id: "bubble-bobble-nes-recomp",
  title: "Bubble Bobble Recompiled",
  game: "Bubble Bobble",
  developers: ["Junior-Jones"],
  publisher: "Taito",
  originalYear: 1986,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Junior-Jones/Bubble-Bobble-NES-Static-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo Entertainment System",
  notes:
    "Static recompilation of Bubble Bobble (NES) for Windows 10 and 11. The ROM is not included, so you need your own copy.",
  notesEs:
    "Recompilación estática de Bubble Bobble (NES) para Windows 10 y 11. No incluye la ROM, así que necesitas tu propia copia.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Bubble%20Bobble%20(Europe)%20(Virtual%20Console).png",
    alt: "Bubble Bobble (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Bubble%20Bobble%20(Europe)%20(Virtual%20Console).png",
      alt: "Bubble Bobble (screenshot)",
      credit: "Libretro",
    },
  ],
};
