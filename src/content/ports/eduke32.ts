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
  verified: false,
  screenshots: [
    {
      src: "https://www.eduke32.com/images/shots/polymer.jpg",
      alt: "The Polymer renderer showing glowing effects in a Duke Nukem 3D level",
      credit: "EDuke32",
    },
    {
      src: "https://www.eduke32.com/images/shots/polymer2.jpg",
      alt: "Per-pixel dynamic lighting and real-time shadows via Polymer",
      credit: "EDuke32",
    },
    {
      src: "https://www.eduke32.com/images/shots/duke3d_2.jpg",
      alt: "The Hollywood Holocaust level with classic textures in EDuke32",
      credit: "EDuke32",
    },
    {
      src: "https://www.eduke32.com/images/shots/duke3d_3.jpg",
      alt: "Duke trading blows with pig cops in an EDuke32 game",
      credit: "EDuke32",
    },
  ],
  summary: "Duke Nukem 3D is a 1996 first-person shooter game developed by 3D Realms and published by FormGen for MS-DOS. It is a sequel to the platform games Duke Nukem and Duke Nukem II, published by 3D Realms.",
  summaryEs: "Duke Nukem 3D es un videojuego de disparos en primera persona en 3D, desarrollado y distribuido por 3D Realms en 1996. Es la continuación de dos videojuegos de plataformas anteriores, Duke Nukem y Duke Nukem II. Posee una expansión llamada Duke Nukem 3D: Atomic Edition.",
  notes:
    "Native source port of Duke Nukem 3D (also runs Shadow Warrior via VoidSW). Distributed as rolling builds from the official site; requires Duke Nukem 3D gamedata.",
  notesEs:
    "Port de código fuente nativo de Duke Nukem 3D (también ejecuta Shadow Warrior mediante VoidSW). Se distribuye como builds continuas desde el sitio oficial; requiere los datos de Duke Nukem 3D.",
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
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/61/Duke_Nukem_3D_Coverart.png",
    alt: "Duke Nukem 3D (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS"],
};
