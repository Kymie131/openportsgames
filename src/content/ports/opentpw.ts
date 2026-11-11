import type { Port } from "@/lib/ports/schema";

export const Opentpw: Port = {
  schema: "port",
  id: "opentpw",
  title: "OpenTPW",  game: "Theme Park World",
  developers: ["OpenTPW"],  publisher: "Electronic Arts",  originalYear: 1999,
  portType: "reimplementation",  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenTPW/OpenTPW"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows", "PlayStation"],  summary: "Theme Park World (Sim Theme Park) is a 1999 construction and management simulation developed by Bullfrog Productions and published by Electronic Arts. Players build and run theme parks across several themed worlds.",  summaryEs: "Theme Park World (Sim Theme Park) es un simulador de construcción y gestión de 1999 desarrollado por Bullfrog Productions y publicado por Electronic Arts. El jugador construye y dirige parques temáticos en varios mundos.",  cover: {
    src: "https://openportsgames.com/covers/generated/opentpw.svg",
    alt: "OpenTPW (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "An open-source re-implementation of Bullfrog's Sim Theme Park / Theme Park World (1999).",
  notesEs:
    "Reimplementación de código abierto de Sim Theme Park / Theme Park World (1999) de Bullfrog.",
};
