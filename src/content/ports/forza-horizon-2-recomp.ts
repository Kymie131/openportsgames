import type { Port } from "@/lib/ports/schema";

export const forzaHorizon2Recomp: Port = {
  schema: "port",
  id: "forza-horizon-2-recomp",
  title: "Forza Horizon 2 Recompiled",
  game: "Forza Horizon 2",
  developers: ["fabioap-cpu"],
  publisher: "Microsoft Studios",
  originalYear: 2014,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/fabioap-cpu/Forza-Horizon-2-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Forza Horizon 2 is a 2014 racing video game developed for Microsoft's Xbox One and Xbox 360 consoles. It is the sequel to 2012's Forza Horizon, the seventh instalment in the Forza series, and the series' first multi-console instalment. The Xbox One version of the game was developed by Playground Games, the team behind the original Forza Horizon, while Sumo Digital developed the version for Xbox 360, with Forza series developer Turn 10 Studios supporting both builds. The Xbox 360 version is also the final Forza game released for the platform.",
  summaryEs: "Forza Horizon 2 es un videojuego de carreras de ruta abierta, secuela del aclamado videojuego de 2012, Forza Horizon. La versión para la Xbox 360 está desarrollada por Sumo Digital y la edición para la Xbox One está producida por Playground Games. Lanzado oficialmente el 30 de septiembre de 2014, dos semanas antes se presentaría una demo y la versión de preventa.",
  notes:
    "Static recompilation of Forza Horizon 2 (Xbox 360) for Windows. It needs your own game data.",
  notesEs:
    "Recompilación estática de Forza Horizon 2 (Xbox 360) para Windows. Necesita tus propios datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2e/Forza_Horizon_2_Cover_Art.png",
    alt: "Forza Horizon 2 (cover)",
    credit: "Wikipedia",
  },
};
