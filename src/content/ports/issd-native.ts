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
  originalSystem: "Super Nintendo",
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
