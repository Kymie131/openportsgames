import type { Port } from "@/lib/ports/schema";

export const dkcRecompiled: Port = {
  schema: "port",
  id: "dkc-recompiled",
  title: "DKC 1/2/3 Recompiled",
  game: "Donkey Kong Country",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1994,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "macos"],
  status: "beta",
  release: { version: "0.0.17", date: "2026-09-19" },
  sources: [
    "https://github.com/elliotttate/DKC1Recomp",
    "https://github.com/elliotttate/DKC2Recomp",
    "https://github.com/elliotttate/DKC3Recomp",
  ],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystems: ["Super Nintendo"],
  features: [
    "Native widescreen presentation (16:10 and 16:9)",
    "Windows and macOS ARM64 builds with CRT shaders",
    "MSU-1 music packs and mod variants",
    "Co-op fixes for Donkey Kong Country 2",
  ],
  featuresEs: [
    "Presentación panorámica nativa (16:10 y 16:9)",
    "Builds para Windows y macOS ARM64 con shaders CRT",
    "Paquetes de música MSU-1 y variantes de mods",
    "Arreglos de cooperativo para Donkey Kong Country 2",
  ],
  summary: "Donkey Kong Country, known in Japan as Super Donkey Kong, is a 1994 platform game developed by Rare and published by Nintendo for the Super Nintendo Entertainment System (SNES). It follows the gorilla Donkey Kong and his nephew Diddy Kong as they set out to recover their stolen banana hoard from the crocodile King K. Rool and his army, the Kremlings. The player traverses 40 side-scrolling levels as they jump between platforms and avoid obstacles. They collect items, ride minecarts and animals, defeat enemies and bosses, and find secret bonus stages.",
  summaryEs: "Donkey Kong Country, conocido en Japón como Super Donkey Kong, es un videojuego de plataformas desarrollado por Rare y publicado por Nintendo para la Super Nintendo (SNES). Sigue al gorila Donkey Kong y su sobrino Diddy Kong, quienes se lanzan a la aventura para recuperar su alijo de plátanos robado por el cocodrilo King K. Rool y su ejército, los Kremlings. El jugador recorre cuarenta niveles de desplazamiento lateral mientras salta entre plataformas y evita obstáculos. Recoge objetos, monta en vagonetas y animales, derrota a enemigos y jefes, y encuentra fases de bonificación secretas.",
  notes:
    "Recompilation trilogy covering Donkey Kong Country, Donkey Kong Country 2: Diddy's Kong Quest and Donkey Kong Country 3: Dixie Kong's Double Trouble, each from its own repository. Requires the player's own legally dumped ROM per game.",
  notesEs:
    "Trilogía de recompilaciones que cubre Donkey Kong Country, Donkey Kong Country 2: Diddy's Kong Quest y Donkey Kong Country 3: Dixie Kong's Double Trouble, cada una desde su propio repositorio. Requiere la ROM de cada juego volcada legalmente por el propio jugador.",
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
