import type { Port } from "@/lib/ports/schema";

export const xash3d: Port = {
  schema: "port",
  id: "xash3d-fwgs",
  title: "Xash3D FWGS",
  game: "Half-Life",
  developers: ["Valve Corporation"],
  publisher: "Sierra On-Line",
  originalYear: 1998,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  platforms: ["windows", "linux", "android"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/FWGS/xash3d-fwgs"],
  discord: "https://xash.su/discord/",
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  verified: false,
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/FWGS/xash3d-fwgs/master/Documentation/images/example1.jpg",
      alt: "Xash3D touch buttons shown per game mode using flag 8 and flag 16",
      credit: "Xash3D FWGS",
    },
    {
      src: "https://raw.githubusercontent.com/FWGS/xash3d-fwgs/master/Documentation/images/example2.jpg",
      alt: "Console output listing every button in the standard touch.cfg file",
      credit: "Xash3D FWGS",
    },
    {
      src: "https://raw.githubusercontent.com/FWGS/xash3d-fwgs/master/Documentation/images/example3.jpg",
      alt: "Touch attack button recolored to translucent orange by touch_setcolor",
      credit: "Xash3D FWGS",
    },
    {
      src: "https://raw.githubusercontent.com/FWGS/xash3d-fwgs/master/Documentation/images/example4.jpg",
      alt: "A new touch button added with a custom icon via the lastinv command",
      credit: "Xash3D FWGS",
    },
    {
      src: "https://raw.githubusercontent.com/FWGS/xash3d-fwgs/master/Documentation/images/example5.jpg",
      alt: "The custom touch button as displayed in the touch layout editor",
      credit: "Xash3D FWGS",
    },
    {
      src: "https://raw.githubusercontent.com/FWGS/xash3d-fwgs/master/Documentation/images/editor.jpg",
      alt: "The Xash3D FWGS touch controls layout editor window",
      credit: "Xash3D FWGS",
    },
  ],
  notes:
    "Open source reimplementation of the Half-Life engine, including a working Android build. Uses rolling 'continuous' releases. Requires the original Half-Life game files.",
  notesEs:
    "Reimplementación de código abierto del motor de Half-Life, con build funcional para Android. Usa releases continuas 'continuous'. Requiere los archivos del juego original de Half-Life.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/fa/Half-Life_Cover_Art.jpg",
    alt: "Half-Life (box art)",
    credit: "Wikipedia",
  },
};
