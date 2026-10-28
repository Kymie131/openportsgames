import type { Port } from "@/lib/ports/schema";

export const fheroes2: Port = {
  schema: "port",
  id: "fheroes2",
  title: "fheroes2",
  game: "Heroes of Might and Magic II",
  developers: ["fheroes2 Team"],
  publisher: "New World Computing",
  originalYear: 1996,
  genre: "strategy",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/ihhub/fheroes2"],
  website: "https://ihhub.github.io/fheroes2/",
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS", "Windows"],
  features: [
    "Open-source engine recreation for Heroes II",
    "High resolutions and UI improvements",
    "Supports original game data files",
    "Cross-platform builds including Android",
  ],
  featuresEs: [
    "Recreación de código abierto del motor de Heroes II",
    "Resoluciones altas y mejoras de interfaz",
    "Compatible con archivos originales del juego",
    "Disponible en múltiples plataformas, incluyendo Android",
  ],
  notes:
    "Requires original Heroes of Might and Magic II game data. Provides engine improvements and modern ports.",
  notesEs:
    "Requiere los archivos originales de Heroes of Might and Magic II. Ofrece mejoras de motor y ports modernos.",
  cover: {
    src: "https://cdn2.steamgriddb.com/grid/0a0b8f6deb28c7d1638e472e2158f58b.png",
    alt: "Heroes of Might and Magic II",
    credit: "SteamGridDB",
  },
};
