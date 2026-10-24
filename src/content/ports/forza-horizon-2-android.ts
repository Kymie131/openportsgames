import type { Port } from "@/lib/ports/schema";

export const forzaHorizon2Android: Port = {
  schema: "port",
  id: "forza-horizon-2-android",
  title: "FH2 Recompiled",
  game: "Forza Horizon 2",
  developers: ["Gabrick75"],
  publisher: "Xbox Game Studios",
  originalYear: 2014,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Gabrick75/fh2-recompiled"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  related: ["forza-horizon-2-recomp"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2e/Forza_Horizon_2_Cover_Art.png",
    alt: "Forza Horizon 2 (box art)",
    credit: "Wikipedia",
  },
  summary: "Forza Horizon 2 is a 2014 racing video game developed for Microsoft's Xbox One and Xbox 360 consoles. It is the sequel to 2012's Forza Horizon, the seventh instalment in the Forza series, and the series' first multi-console instalment. The Xbox One version of the game was developed by Playground Games, the team behind the original Forza Horizon, while Sumo Digital developed the version for Xbox 360, with Forza series developer Turn 10 Studios supporting both builds. The Xbox 360 version is also the final Forza game released for the platform.",
  summaryEs: "Forza Horizon 2 es un videojuego de carreras de ruta abierta, secuela del aclamado videojuego de 2012, Forza Horizon. La versión para la Xbox 360 está desarrollada por Sumo Digital y la edición para la Xbox One está producida por Playground Games. Lanzado oficialmente el 30 de septiembre de 2014, dos semanas antes se presentaría una demo y la versión de preventa.",
  notes:
    "Unofficial static recompilation of Forza Horizon 2 (Xbox 360, 2014) for Android and Linux. It ships no game files and does nothing without files extracted from your own legally obtained copy. Non-commercial fan project, not affiliated with Microsoft/Xbox Game Studios/Playground Games/Turn 10.",
  notesEs:
    "Recompilación estática no oficial de Forza Horizon 2 (Xbox 360, 2014) para Android y Linux. No incluye archivos del juego y no sirve sin los archivos extraídos de tu propia copia legal. Proyecto fan no comercial, sin afiliación con Microsoft/Xbox Game Studios/Playground Games/Turn 10.",
};
