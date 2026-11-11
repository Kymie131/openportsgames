import type { Port } from "@/lib/ports/schema";

export const monsterHunterGenerationsUltimateRecomp: Port = {
  schema: "port",
  id: "monster-hunter-generations-ultimate-recomp",
  title: "Monster Hunter Generations Ultimate (MHGU Recomp)",
  game: "Monster Hunter Generations Ultimate",
  developers: ["morerokk"],
  publisher: "Capcom",
  originalYear: 2017,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "android"],
  status: "stable",
  release: { version: "0.14.0", date: "2026-11-03" },
  sources: ["https://github.com/morerokk/MHGURecomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-02",
  originalSystems: ["Nintendo Switch"],
  summary:
    "Monster Hunter Generations Ultimate is a 2017 action role-playing game developed and published by Capcom for the Nintendo Switch, released worldwide in 2018. An expanded version of Monster Hunter Generations, it adds new hunting styles, monsters and the Valstrax flagship.",
  summaryEs:
    "Monster Hunter Generations Ultimate es un juego de rol y acción de 2017 desarrollado y publicado por Capcom para Nintendo Switch, lanzado mundialmente en 2018. Es una versión ampliada de Monster Hunter Generations que añade nuevos estilos de caza, monstruos y al monstruo insignia Valstrax.",
  notes:
    "Static recompilation of the Switch version 1.4.0 for Windows, Linux and Android. Version 0.14.0 includes Vulkan rendering, resolution, anti-aliasing and supersampling options, ultrawide support, a 30 to 240 fps cap, controller support, experimental mouse and keyboard, multiplayer extras and mod support. Requires your own copy of Monster Hunter Generations Ultimate with the 1.4.0 update, dumped from your own console. No game files, keys or firmware are included.",
  notesEs:
    "Recompilación estática de la versión 1.4.0 de Switch para Windows, Linux y Android. La versión 0.14.0 incluye renderizado Vulkan, opciones de resolución, antialiasing y supersampling, soporte ultrapanorámico, límite de 30 a 240 fps, compatibilidad con mandos, ratón y teclado experimentales, extras multijugador y soporte de mods. Requiere tu propia copia de Monster Hunter Generations Ultimate con la actualización 1.4.0, volcada desde tu consola. No incluye archivos del juego, claves ni firmware.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/morerokk/MHGURecomp/releases/download/0.16.1/Android-MHGURecomp.0.16.1.apk",
      size: "131.5 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/morerokk/MHGURecomp/releases/download/0.16.1/Linux-MHGURecomp.0.16.1.tar.gz",
      size: "41.6 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/morerokk/MHGURecomp/releases/download/0.16.1/Windows-MHGURecomp.0.16.1.zip",
      size: "41.3 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/23/Monster_hunter_generations_cover_art.jpg",
    alt: "Monster Hunter Generations (box art)",
    credit: "Wikipedia",
  },
};
