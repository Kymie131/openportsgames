import type { Port } from "@/lib/ports/schema";

export const superKawaiBreakupSim3ds: Port = {
  schema: "port",
  id: "super-kawai-breakup-sim-3ds",
  title: "Super Kawai Breakup Sim (3DS)",
  game: "Super Kawai Breakup Sim",
  developers: ["Dangerbites"],
  publisher: "Dangerbites",
  originalYear: 2020,
  portType: "source-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["3ds"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Dangerbites/BreakupSimulator3DS"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 3DS"],
  summary: "Super Kawai Breakup Sim (3DS) is a 2020 homebrew simulation game for the Nintendo 3DS, developed by Dangerbites.",
  summaryEs: "Super Kawai Breakup Sim (3DS) es un juego de simulación homebrew de 2020 para Nintendo 3DS, desarrollado por Dangerbites.",  downloads: [
    {
      label: "3ds",
      url: "https://github.com/Dangerbites/BreakupSimulator3DS/releases/download/Major/BreakupSimulator3DS.zip",
      size: "29.6 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/super-kawai-breakup-sim.svg",
    alt: "Super Kawai Breakup Sim (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Super Kawai Breakup Sim (Fan game, 2020) running on Nintendo 3DS through source port. Latest release: Major. You need your own copy of the game.",
  notesEs: "Super Kawai Breakup Sim (Fan game, 2020) en Nintendo 3DS mediante port de código. Última release: Major. Necesitas tu propia copia del juego.",
};
