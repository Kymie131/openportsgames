import type { Port } from "@/lib/ports/schema";

export const openomf: Port = {
  schema: "port",
  id: "openomf",
  title: "OpenOMF",
  game: "One Must Fall 2097",
  developers: ["omf2097"],
  publisher: "Epic MegaGames",
  originalYear: 1994,
  portType: "reimplementation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.8.6", date: "2026-07-05" },
  sources: ["https://github.com/omf2097/openomf"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  summary:
    "One Must Fall 2097 is a fighting game developed by Diversions Entertainment and published by Epic MegaGames in 1994. Pilots control giant robots in a futuristic tournament.",
  summaryEs:
    "One Must Fall 2097 es un juego de lucha desarrollado por Diversions Entertainment y publicado por Epic MegaGames en 1994. Los pilotos controlan robots gigantes en un torneo futurista.",
  cover: {
    src: "https://openportsgames.com/covers/generated/openomf.svg",
    alt: "One Must Fall 2097 (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "OpenOMF is an open-source remake of One Must Fall 2097 with online multiplayer and modern platform support. It needs the original game data.",
  notesEs:
    "OpenOMF es un remake de código abierto de One Must Fall 2097 con multijugador en línea y soporte para plataformas modernas. Necesita los datos originales del juego.",
};
