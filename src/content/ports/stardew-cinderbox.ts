import type { Port } from "@/lib/ports/schema";

export const stardewCinderbox: Port = {
  schema: "port",
  id: "stardew-cinderbox",
  title: "Cinderbox (Stardew Valley)",
  game: "Stardew Valley",
  developers: ["Ekyso"],
  publisher: "ConcernedApe",
  originalYear: 2016,
  portType: "runtime-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Ekyso/Cinderbox"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Native Android launcher for the desktop version of Stardew Valley, distributed as Cinderbox. It requires your own copy of the game.",
  notesEs:
    "Lanzador nativo para Android de la versión de escritorio de Stardew Valley, distribuido como Cinderbox. Requiere tu propia copia del juego.",
};
