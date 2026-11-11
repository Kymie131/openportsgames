import type { Port } from "@/lib/ports/schema";

export const settlers2: Port = {
  schema: "port",
  id: "settlers-2",
  title: "Return to the Roots",
  game: "The Settlers II",
  developers: ["Return to the Roots community"],
  publisher: "Blue Byte",
  originalYear: 1996,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.9.5", date: "2022-02-28" },
  sources: ["https://github.com/Return-To-The-Roots/s25client"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["MS-DOS"],
  features: ["Cross-platform desktop builds", "Extended scenario and scripting support"],
  featuresEs: [
    "Builds de escritorio multiplataforma",
    "Soporte ampliado de escenarios y scripting",
  ],
  summary: "The Settlers II, originally released as The Settlers II: Veni, Vidi, Vici, is a 1996 city-building game with real-time strategy elements for MS-DOS, Mac OS, and Nintendo DS. Developed and published by Blue Byte Software, the DOS version was released in Germany in April 1996, and in the United Kingdom and North America in August. In December, Blue Byte released an expansion, The Settlers II Mission CD, featuring new single-player campaign missions, new maps for both single-player and multiplayer modes, and a map editor.",
  summaryEs: "The Settlers II: Veni, Vidi, Vici es un videojuego de estrategia en tiempo real para PC publicado en 1996 y desarrollado por Blue Byte. Fue considerado uno de los mejores y más populares de Europa, vendiendo más de un millón de copias.",
  notes: "Open source reimplementation of The Settlers II engine.",
  notesEs: "Reimplementación de código abierto del motor de The Settlers II.",
  cover: {
    src: "https://thumbnails.libretro.com/DOS/Named_Boxarts/Settlers%20II%2C%20The%20(Gold%20Edition)%20(1997).png",
    alt: "The Settlers II (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/DOS/Named_Snaps/Settlers%20II,%20The%20(Gold%20Edition)%20(1997).png",
      alt: "The Settlers II (screenshot)",
      credit: "Libretro",
    },
  ],
};
