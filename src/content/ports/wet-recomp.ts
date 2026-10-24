import type { Port } from "@/lib/ports/schema";

export const wetRecomp: Port = {
  schema: "port",
  id: "wet-recomp",
  title: "WetRecomp",
  game: "Wet",
  developers: ["nikolaygorb"],
  publisher: "Bethesda Softworks",
  originalYear: 2009,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/nikolaygorb/WetRecomp"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Wet is a 2009 third-person shooter action game, developed by Artificial Mind & Movement and published by Bethesda Softworks for the PlayStation 3 and Xbox 360. A PlayStation Portable version was planned, but ultimately cancelled.",
  summaryEs: "WET es un videojuego de acción y disparos en tercera persona programado por la empresa Artificial Mind and Movement y publicado por Bethesda Softworks para las consolas PlayStation 3 y Xbox 360. Fue puesto a la venta en América del Norte el 15 de septiembre de 2009 y en Europa el 18 de septiembre de 2009. Una versión para Japón salió al mercado el 17 de septiembre de 2009.",
  notes:
    "Static recompilation of WET (2009, Xbox 360) with the ReXGlue SDK. Fully playable: video, audio, gameplay, achievements and progression.",
  notesEs:
    "Recompilación estática de WET (2009, Xbox 360) con el SDK ReXGlue. Completamente jugable: vídeo, audio, gameplay, logros y progresión.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/98/Wet_game.jpg",
    alt: "Wet (box art)",
    credit: "Wikipedia",
  },
};
