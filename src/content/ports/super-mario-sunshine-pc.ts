import type { Port } from "@/lib/ports/schema";

export const superMarioSunshinePc: Port = {
  schema: "port",
  id: "super-mario-sunshine-pc",
  title: "Super Mario Sunshine (Native PC Port)",
  game: "Super Mario Sunshine",
  developers: ["TekRantGaming"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TekRantGaming/sms-pc-port"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "GameCube",
  notes:
    "Native port of Super Mario Sunshine (GameCube) built from its decompilation. It requires your own copy of the game.",
  notesEs:
    "Port nativo de Super Mario Sunshine (GameCube) construido a partir de su decompilación. Requiere tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Super%20Mario%20Sunshine%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Super Mario Sunshine (box art)",
    credit: "Box art",
  },
};
