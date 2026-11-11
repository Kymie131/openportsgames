import type { Port } from "@/lib/ports/schema";

export const F15Ii: Port = {
  schema: "port",
  id: "f-15-ii",
  title: "F-15 II",  game: "F-15 Strike Eagle II",
  developers: ["neuviemeporte"],  publisher: "MicroProse",  originalYear: 1989,
  portType: "source-port",  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.9.3", date: "2026-06-22" },
  sources: ["https://github.com/neuviemeporte/f15se2-re"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS"],  summary: "F-15 Strike Eagle II is a 1989 combat flight simulator developed and published by MicroProse. It puts the player in the cockpit of an F-15E Strike Eagle across campaigns in the Middle East and other conflicts.",  summaryEs: "F-15 Strike Eagle II es un simulador de vuelo de combate de 1989 desarrollado y publicado por MicroProse. Pone al jugador a los mandos de un F-15E Strike Eagle en campañas ambientadas en Oriente Medio y otros conflictos.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/neuviemeporte/f15se2-re/releases/download/v0.9.3/f15_se2-v0.9.3_noasm.zip",
      size: "106 KB",
    },
    {
      label: "Windows",
      url: "https://github.com/neuviemeporte/f15se2-re/releases/download/v0.9.3/f15_se2-v0.9.3.zip",
      size: "96 KB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/24/Box_F15SE_500.jpg",
    alt: "F-15 Strike Eagle II (box art)",
    credit: "Wikipedia",
  },
  notes: "Reconstructed source code for the Microprose game F-15 Strike Eagle 2 for MS-DOS.",
  notesEs: "Reconstrucción del código fuente de F-15 Strike Eagle 2 de MicroProse para MS-DOS.",
};
