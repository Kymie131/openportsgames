import type { Port } from "@/lib/ports/schema";

export const topSpin4Recomp: Port = {
  schema: "port",
  id: "top-spin-4-recomp",
  title: "Top Spin 4 Recomp",
  game: "Top Spin 4",
  developers: ["shaneomac1337"],
  publisher: "2K Sports",
  originalYear: 2011,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.0.0", date: "2026-11-01" },
  sources: ["https://github.com/shaneomac1337/Top-Spin-4-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-02",
  originalSystems: ["Xbox 360"],
  summary:
    "Top Spin 4 is a 2011 tennis game developed by 2K Czech and published by 2K Sports for the PlayStation 3, Xbox 360 and Wii. It features a career mode, licensed players and venues, and the Top Spin Academy tutorial.",
  summaryEs:
    "Top Spin 4 es un juego de tenis de 2011 desarrollado por 2K Czech y publicado por 2K Sports para PlayStation 3, Xbox 360 y Wii. Incluye modo carrera, jugadores y pistas con licencia, y el tutorial Top Spin Academy.",
  notes:
    "Static recompilation of the Xbox 360 game to native x86-64 with ReXGlue. Version 1.0.0 translates the game's Direct3D 9 calls to Vulkan, with a Xenia-style Classic GPU path as a fallback. Exhibition singles and doubles, Career, Top Spin Academy, King of the Court, local multiplayer and saves work at 60 fps; online modes do not. Requires your own disc image and Title Update 1. Tested only on an AMD RX 7900 XT; NVIDIA, Intel and Steam Deck are untested. No game files are included.",
  notesEs:
    "Recompilación estática del juego de Xbox 360 a x86-64 nativo con ReXGlue. La versión 1.0.0 traduce las llamadas Direct3D 9 del juego a Vulkan, con una ruta gráfica Classic estilo Xenia como respaldo. Los partidos individuales y dobles, el modo carrera, Top Spin Academy, King of the Court, el multijugador local y las partidas guardadas funcionan a 60 fps; los modos online no. Requiere tu propia imagen de disco y la Title Update 1. Solo se ha probado en una AMD RX 7900 XT; NVIDIA, Intel y Steam Deck no están verificados. No incluye archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4d/Top_Spin_4_cover.jpg",
    alt: "Top Spin 4 (box art)",
    credit: "Wikipedia",
  },
};
