import type { Port } from "@/lib/ports/schema";

export const agentUnderFireRecomp: Port = {
  schema: "port",
  id: "007-agent-under-fire-recomp",
  title: "007: Agent Under Fire Recomp",
  game: "007: Agent Under Fire",
  developers: ["hk21x"],
  publisher: "Electronic Arts",
  originalYear: 2001,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.0.1", date: "2026-11-03" },
  sources: ["https://github.com/hk21x/007-agentunderfire-recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-02",
  originalSystems: ["Xbox"],
  summary:
    "James Bond 007: Agent Under Fire is a 2001 first-person shooter developed by EA Redwood Shores and published by Electronic Arts. Released for the Xbox, PlayStation 2 and GameCube, it mixes on-foot missions, driving levels and rail-shooting sequences.",
  summaryEs:
    "James Bond 007: Agent Under Fire es un shooter en primera persona de 2001 desarrollado por EA Redwood Shores y publicado por Electronic Arts. Lanzado para Xbox, PlayStation 2 y GameCube, mezcla misiones a pie, niveles de conducción y secuencias de disparo sobre raíles.",
  notes:
    "Static recompilation of the original Xbox version for Windows. Version 1.0.1 covers on-foot missions, driving levels and mounted guns in English, French and German, with USA and European discs supported. The launcher builds the game from your own disc image or folder, and needs a Direct3D 12 or 11 GPU. Not every later mission has been played through and multiplayer is untested. No game assets are included.",
  notesEs:
    "Recompilación estática de la versión original de Xbox para Windows. La versión 1.0.1 cubre misiones a pie, niveles de conducción y ametralladoras montadas en inglés, francés y alemán, con discos estadounidenses y europeos compatibles. El lanzador compila el juego a partir de tu propia imagen de disco o carpeta y necesita una GPU con Direct3D 12 u 11. No se han completado todas las misiones finales y el multijugador no está probado. No incluye recursos del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/hk21x/007-agentunderfire-recomp/releases/download/v1.0.2/AgentUnderFireLauncher.exe",
      size: "2.4 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/89/James_Bond_007_-_Agent_Under_Fire_Coverart.png",
    alt: "007: Agent Under Fire (box art)",
    credit: "Wikipedia",
  },
};
