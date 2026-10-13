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
  originalSystem: "Xbox 360",
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
