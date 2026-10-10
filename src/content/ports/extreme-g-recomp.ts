import type { Port } from "@/lib/ports/schema";

export const extremeGRecomp: Port = {
  schema: "port",
  id: "extreme-g-recomp",
  title: "Extreme-G Recompiled",
  game: "Extreme-G",
  developers: ["sp00nznet"],
  publisher: "Acclaim Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/extremeg"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Static recompilation of Extreme-G (Nintendo 64) to a native PC executable. It needs the original game and ships no assets.",
  notesEs:
    "Recompilación estática de Extreme-G (Nintendo 64) a un ejecutable nativo para PC. Necesita el juego original y no incluye recursos.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Extreme-G%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Extreme-G (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Extreme-G%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "Extreme-G (screenshot)",
      credit: "Libretro",
    },
  ],
};
