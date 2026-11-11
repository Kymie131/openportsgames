import type { Port } from "@/lib/ports/schema";

export const F15IiEnhanced: Port = {
  schema: "port",
  id: "f-15-ii-enhanced",
  title: "F-15 II Enhanced",  game: "F-15 Strike Eagle II",
  developers: ["neuviemeporte"],  publisher: "MicroProse",  originalYear: 1989,
  portType: "source-port",  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/neuviemeporte/f15se2-ex"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS"],  summary: "F-15 Strike Eagle II is a 1989 combat flight simulator developed and published by MicroProse. It puts the player in the cockpit of an F-15E Strike Eagle across campaigns in the Middle East and other conflicts.",  summaryEs: "F-15 Strike Eagle II es un simulador de vuelo de combate de 1989 desarrollado y publicado por MicroProse. Pone al jugador a los mandos de un F-15E Strike Eagle en campañas ambientadas en Oriente Medio y otros conflictos.",  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/24/Box_F15SE_500.jpg",
    alt: "F-15 Strike Eagle II (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Port of the reconstructed MS-DOS game F-15 Strike Eagle 2 to modern architectures, with bugfixes and enhancements.",
  notesEs:
    "Port del reconstruido F-15 Strike Eagle 2 (MS-DOS) a arquitecturas modernas, con correcciones y mejoras.",
};
