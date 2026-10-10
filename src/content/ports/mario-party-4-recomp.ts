import type { Port } from "@/lib/ports/schema";

export const marioParty4Recomp: Port = {
  schema: "port",
  id: "mario-party-4-recomp",
  title: "Mario Party 4 Recompiled",
  game: "Mario Party 4",
  developers: ["mariopartyrd"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mariopartyrd/marioparty4"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "GameCube",
  notes:
    "Static recompilation of Mario Party 4 (GameCube) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Mario Party 4 (GameCube) con ReXGlue. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Mario%20Party%204%20(Europe)%20(En,Fr,De,Es,It)%20(Rev%202).png",
    alt: "Mario Party 4 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Snaps/Mario%20Party%204%20(Europe)%20(En,Fr,De,Es,It)%20(Rev%202).png",
      alt: "Mario Party 4 (screenshot)",
      credit: "Libretro",
    },
  ],
};
