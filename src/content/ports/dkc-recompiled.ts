import type { Port } from "@/lib/ports/schema";

export const dkcRecompiled: Port = {
  schema: "port",
  id: "dkc-recompiled",
  title: "DKC1Recomp",
  game: "Donkey Kong Country",
  developers: ["elliotttate"],
  publisher: "Nintendo",
  originalYear: 1994,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "macos"],
  status: "beta",
  release: { version: "0.0.17", date: "2026-09-19" },
  sources: ["https://github.com/elliotttate/DKC1Recomp"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystems: ["Super Nintendo"],
  features: [
    "Native widescreen presentation (16:10 and 16:9)",
    "Windows and macOS ARM64 builds with CRT shaders",
    "MSU-1 music packs and mod variants",
  ],
  featuresEs: [
    "Presentación panorámica nativa (16:10 y 16:9)",
    "Builds para Windows y macOS ARM64 con shaders CRT",
    "Paquetes de música MSU-1 y variantes de mods",
  ],
  notes:
    "Static recompilation of Donkey Kong Country (SNES) with snesrecomp. Donkey Kong Country 2 and 3 have their own entries (dkc2-recomp, dkc3-recomp). Requires the player's own legally dumped ROM.",
  notesEs:
    "Recompilación estática de Donkey Kong Country (SNES) con snesrecomp. Donkey Kong Country 2 y 3 tienen sus propias fichas (dkc2-recomp, dkc3-recomp). Requiere la ROM volcada legalmente por el propio jugador.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Donkey%20Kong%20Country%20(USA).png",
    alt: "Donkey Kong Country (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Donkey%20Kong%20Country%20(USA).png",
      alt: "Donkey Kong Country (screenshot)",
      credit: "Libretro",
    },
  ],
};
