import type { Port } from "@/lib/ports/schema";

export const ben10CosmicDestructionRecomp: Port = {
  schema: "port",
  id: "ben-10-cosmic-destruction-recomp",
  title: "Ben 10: Cosmic Destruction Recompiled",
  game: "Ben 10: Cosmic Destruction",
  developers: ["ExtremestoneGG"],
  publisher: "D3 Publisher",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.4.0-alpha.4", date: "2026-10-28" },
  sources: ["https://github.com/ExtremestoneGG/Cosmic-Recompi"],
  license: { spdx: "BSD-3-Clause" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-10-24",
  originalSystems: ["Xbox 360"],
  summary:
    "Ben 10: Cosmic Destruction is a 2010 action-adventure game developed by Papaya Studio and published by D3 Publisher. Ben travels the world to collect the pieces of the Potis Altiare and unlock his ultimate alien forms.",
  summaryEs:
    "Ben 10: Cosmic Destruction es un videojuego de acción y aventura de 2010 desarrollado por Papaya Studio y publicado por D3 Publisher. Ben recorre el mundo para reunir las piezas del Potis Altiare y desbloquear sus formas alienígenas definitivas.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/ExtremestoneGG/Cosmic-Recompi/releases/download/v0.4.0-alpha.4/CosmicRecomp-v0.4.0-alpha.4-win64.exe",
      size: "18.1 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/ben-10-cosmic-destruction.svg",
    alt: "Ben 10: Cosmic Destruction (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Experimental native Windows port of Ben 10: Cosmic Destruction via ReXGlue. Bring your own supported Xbox 360 copy.",
  notesEs: "Port nativo experimental para Windows de Ben 10: Cosmic Destruction con ReXGlue. Aporta tu copia compatible de Xbox 360.",
};
