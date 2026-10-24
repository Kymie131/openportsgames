import type { Port } from "@/lib/ports/schema";

export const issdNative: Port = {
  schema: "port",
  id: "issd-native",
  title: "ISS Deluxe (Native)",
  game: "International Superstar Soccer Deluxe",
  developers: ["sergiomanzur"],
  publisher: "Konami",
  originalYear: 1995,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/sergiomanzur/issd-native"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Super Nintendo"],
  summary: "International Superstar Soccer Deluxe, known as Jikkyou World Soccer 2: Fighting Eleven in Japan and also known as ISS Deluxe, is a 1995 football video game and the sequel to International Superstar Soccer developed and published by Konami. The Deluxe version was published first to the SNES in 1995, then the Mega Drive in 1996 and finally the PlayStation in 1997.",
  summaryEs: "International Superstar Soccer Deluxe es un videojuego de fútbol de la serie International Superstar Soccer creado por la compañía japonesa Konami Corporation. Este juego fue publicado en el año 1995. El juego goza de una perspectiva lateral, y fue distribuido en cartuchos de 32 megas para las plataformas SNES, Mega Drive y en formato CD-ROM para PlayStation.",
  notes:
    "Native recompilation project for International Superstar Soccer Deluxe (SNES), with an AI-assisted workflow. It targets Android and needs your own ROM.",
  notesEs:
    "Proyecto de recompilación nativa de International Superstar Soccer Deluxe (SNES), con un flujo asistido por IA. Apunta a Android y necesita tu propia ROM.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/International%20Superstar%20Soccer%20Deluxe%20(Europe).png",
    alt: "International Superstar Soccer Deluxe (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/International%20Superstar%20Soccer%20Deluxe%20(Europe).png",
      alt: "International Superstar Soccer Deluxe (screenshot)",
      credit: "Libretro",
    },
  ],
};
