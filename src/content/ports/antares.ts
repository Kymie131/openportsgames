import type { Port } from "@/lib/ports/schema";

export const antares: Port = {
  schema: "port",
  id: "antares",
  title: "Antares",
  game: "Ares",
  developers: ["arescentral"],
  publisher: "Bungie",
  originalYear: 1998,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/arescentral/antares"],
  license: { spdx: "LGPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Macintosh"],
  summary:
    "Ares is a space strategy game developed and published by Bungie for the classic Mac OS in 1998. It combines empire management with real-time tactical combat as humanity fights for survival against alien fleets.",
  summaryEs:
    "Ares es un juego de estrategia espacial desarrollado y publicado por Bungie para el Mac OS clásico en 1998. Combina la gestión de un imperio con combate táctico en tiempo real mientras la humanidad lucha por sobrevivir frente a flotas alienígenas.",
  notes:
    "Antares is an open-source reimplementation of Bungie's Ares engine. It ships its own assets and runs natively on Linux and macOS.",
  notesEs:
    "Antares es una reimplementación de código abierto del motor de Ares de Bungie. Incluye sus propios recursos y funciona de forma nativa en Linux y macOS.",
};
