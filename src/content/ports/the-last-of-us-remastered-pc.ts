import type { Port } from "@/lib/ports/schema";

export const theLastOfUsRemasteredPc: Port = {
  schema: "port",
  id: "the-last-of-us-remastered-pc",
  title: "The Last of Us Remastered (PC port)",
  game: "The Last of Us Remastered",
  developers: ["ravencaio"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2014,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.1.5", date: "2026-11-03" },
  sources: ["https://github.com/ravencaio/tlou-remastered-pc"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-03",
  originalSystems: ["PlayStation 4"],
  summary:
    "The Last of Us Remastered is the 2014 PlayStation 4 remaster of Naughty Dog's 2013 action-adventure game. Set twenty years after a fungal outbreak collapses civilization, it follows smuggler Joel and teenager Ellie across the post-apocalyptic United States.",
  summaryEs:
    "The Last of Us Remastered es la remasterización de 2014 para PlayStation 4 del videojuego de acción y aventura de Naughty Dog lanzado en 2013. Veinte años después de que un brote fúngico colapse la civilización, sigue al contrabandista Joel y a la adolescente Ellie por Estados Unidos.",
  notes:
    "Native Windows port of the PS4 version (CUSA00552 with update 1.11). The game's own x86-64 code runs on a custom runtime with reimplemented PS4 libraries and a Vulkan renderer based on shadPS4. Version 0.1.5; reported playable from start to finish with one crash along the way. Requires your own dumped PS4 copy, a CPU with AVX, a Vulkan 1.3 GPU and about 6 GB of free RAM. No game files are included.",
  notesEs:
    "Port nativo para Windows de la versión de PS4 (CUSA00552 con la actualización 1.11). El código x86-64 del juego corre sobre un runtime propio con librerías de PS4 reimplementadas y un renderizador Vulkan basado en shadPS4. Versión 0.1.5; se reporta jugable de principio a fin con un cierre inesperado en el camino. Requiere tu propia copia volcada de PS4, una CPU con AVX, una GPU con Vulkan 1.3 y unos 6 GB de RAM libre. No incluye archivos del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/ravencaio/tlou-remastered-pc/releases/download/v0.1.8/TLOU-Remastered-windows.zip",
      size: "74.2 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/46/Video_Game_Cover_-_The_Last_of_Us.jpg",
    alt: "The Last of Us (box art)",
    credit: "Wikipedia",
  },
  requirements: {
    minimum: "Windows 10/11 64-bit, CPU with AVX, Vulkan 1.3 GPU, 6 GB RAM",
  },
};
