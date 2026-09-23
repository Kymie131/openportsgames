import type { Port } from "@/lib/ports/schema";

export const eduke32: Port = {
  schema: "port",
  id: "eduke32",
  title: "EDuke32",
  game: "Duke Nukem 3D",
  developers: ["3D Realms"],
  publisher: "FormGen",
  originalYear: 1996,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://www.eduke32.com/"],
  docs: "https://wiki.eduke32.com/",
  license: {
    spdx: "GPL-2.0",
    note: "dual-licensed: GNU GPL v2 and the Build Engine license",
  },
  aiDisclosure: false,
  verified: false,
  notes:
    "Native source port of Duke Nukem 3D (also runs Shadow Warrior via VoidSW). Distributed as rolling builds from the official site; requires Duke Nukem 3D gamedata.",
  installGuide: {
    steps: [
      "Own Duke Nukem 3D, the Atomic Edition is the most complete.",
      "Copy the game data files (DUKE3D.GRP and the .CON files) from your install into the eduke32 folder.",
      "Run eduke32 or the mapster editor; the game data is read from the same folder.",
    ],
    stepsEs: [
      "Ten una copia de Duke Nukem 3D; la Atomic Edition es la más completa.",
      "Copia los archivos de datos del juego (DUKE3D.GRP y los archivos .CON) desde tu instalación a la carpeta de eduke32.",
      "Ejecuta eduke32 o el editor mapster; los datos del juego se leen desde la misma carpeta.",
    ],
  },
};