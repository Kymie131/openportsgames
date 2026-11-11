import type { Port } from "@/lib/ports/schema";

export const eaSportsUfc3Pc: Port = {
  schema: "port",
  id: "ea-sports-ufc-3-pc",
  title: "EA Sports UFC 3 (PC)",
  game: "EA Sports UFC 3",
  developers: ["GNSB"],
  publisher: "EA Vancouver",
  originalYear: 2018,
  portType: "runtime-port",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.1.14", date: "2026-10-21" },
  sources: ["https://github.com/GNSB/UFC-3-PS4-PORT-LINUX-WINDOWS"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-05",
  originalSystems: ["PlayStation 4"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/fc/EA_Sports_UFC_3_Official_Boxart.jpg",
    alt: "EA Sports UFC 3 (box art)",
    credit: "Wikipedia",
  },
  summary: "EA Sports UFC 3 is a mixed martial arts fighting video game developed by EA Canada and published by EA Sports. \"The Notorious\" Conor McGregor, one of the previous cover fighters of EA Sports UFC 2, returned as the official cover fighter of the game. Serving as the sequel to 2014's EA Sports UFC and 2016's EA Sports UFC 2, it was released on February 2, 2018, for PlayStation 4 and Xbox One. A sequel, EA Sports UFC 4, was released on August 14, 2020.",
  summaryEs: "EA Sports UFC 3 es un videojuego de artes marciales mixtas desarrollado por EA Canada y distribuido por EA Sports para PlayStation 4 y Xbox One. Se basa en la marca Ultimate Fighting Championship (UFC) y fue lanzado el 2 de febrero de 2018 a nivel mundial.",
  notes: "EA Sports UFC 3 (EA Vancouver, 2018) running on Windows and Linux through a runtime layer, using the SacredFire/bbport runtime and a shadPS4-derived Vulkan renderer. Latest release: ufc3-v0.1.14. You need your own copy of the game; no game files are included.",
  notesEs: "EA Sports UFC 3 (EA Vancouver, 2018) en Windows y Linux mediante capa de ejecución, usando el runtime SacredFire/bbport y un renderizador Vulkan derivado de shadPS4. Última release: ufc3-v0.1.14. Necesitas tu propia copia del juego; no incluye archivos del juego.",
  features: [
    "Native Windows and Linux builds.",
    "SacredFire/bbport runtime with a Vulkan renderer.",
    "Requires your own PS4 game files.",
  ],
  featuresEs: [
    "Builds nativas para Windows y Linux.",
    "Runtime SacredFire/bbport con renderizador Vulkan.",
    "Necesita tus propios archivos de PS4.",
  ],
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/GNSB/UFC-3-PS4-PORT-LINUX-WINDOWS/releases/download/ufc3-v0.1.14/UFC3Native-ufc3-v0.1.14-windows-x86_64.zip",
    },
    {
      label: "Linux x64",
      url: "https://github.com/GNSB/UFC-3-PS4-PORT-LINUX-WINDOWS/releases/download/ufc3-v0.1.14/UFC3Native-ufc3-v0.1.14-linux-x86_64.tar.gz",
    },
    {
      label: "Linux x64",
      url: "https://github.com/GNSB/UFC-3-PS4-PORT-LINUX-WINDOWS/releases/download/ufc3-v0.1.14/UFC3Native-ufc3-v0.1.14-x86_64.AppImage",
    },
  ],
};
