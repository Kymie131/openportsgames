import type { Port } from "@/lib/ports/schema";

export const aerogaugeRecomp: Port = {
  schema: "port",
  id: "aerogauge-recomp",
  title: "AeroGauge",
  game: "AeroGauge",
  developers: ["alondero"],
  publisher: "ASCII Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/alondero/aerogauge-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of AeroGauge (N64) with N64Recomp and the RT64 renderer. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de AeroGauge (N64) con N64Recomp y el renderizador RT64. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/AeroGauge%20(Europe)%20(En,Fr,De).png",
    alt: "AeroGauge (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/AeroGauge%20(Europe)%20(En,Fr,De).png",
      alt: "AeroGauge (screenshot)",
      credit: "Libretro",
    },
  ],
};
