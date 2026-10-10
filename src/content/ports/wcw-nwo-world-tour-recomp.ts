import type { Port } from "@/lib/ports/schema";

export const wcwNwoWorldTourRecomp: Port = {
  schema: "port",
  id: "wcw-nwo-world-tour-recomp",
  title: "WCW vs. nWo World Tour",
  game: "WCW vs. nWo World Tour",
  developers: ["jessetbh"],
  publisher: "THQ",
  originalYear: 1997,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jessetbh/WCWvsNWOWorldTourRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of WCW vs. nWo World Tour (N64) with N64Recomp and the RT64 renderer. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de WCW vs. nWo World Tour (N64) con N64Recomp y el renderizador RT64. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WCW%20vs.%20nWo%20-%20World%20Tour%20(Europe).png",
    alt: "WCW vs. nWo World Tour (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/WCW%20vs.%20nWo%20-%20World%20Tour%20(Europe).png",
      alt: "WCW vs. nWo World Tour (screenshot)",
      credit: "Libretro",
    },
  ],
};
