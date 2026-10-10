import type { Port } from "@/lib/ports/schema";

export const marioKart64Recomp: Port = {
  schema: "port",
  id: "mario-kart-64-recomp",
  title: "MarioKart 64: Recompiled",
  game: "Mario Kart 64",
  developers: ["sonicdcer"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sonicdcer/MarioKart64Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Mario Kart 64 (N64, USA) with N64Recomp and the RT64 renderer. It loads the assets from your own copy directly, with no separate extraction step, and adds widescreen, unlocked framerate and mod support.",
  notesEs:
    "Recompilación estática de Mario Kart 64 (N64, USA) con N64Recomp y el renderizador RT64. Carga los recursos de tu copia directamente, sin extracción aparte, y añade widescreen, framerate libre y soporte de mods.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Mario%20Kart%2064%20(USA).png",
    alt: "Mario Kart 64 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Mario%20Kart%2064%20(USA).png",
      alt: "Mario Kart 64 (screenshot)",
      credit: "Libretro",
    },
  ],
};
