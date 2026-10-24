import type { Port } from "@/lib/ports/schema";

export const theFifthElementRecomp: Port = {
  schema: "port",
  id: "the-fifth-element-recomp",
  title: "The Fifth Element Recompiled",
  game: "The Fifth Element",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1998,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/the-fifth-element-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "The Fifth Element is a 1997 English-language French science fiction-action film conceived and directed by Luc Besson, and co-written by Besson and Robert Mark Kamen. It stars Bruce Willis, Milla Jovovich, Gary Oldman, Ian Holm, and Chris Tucker. Primarily set in the 23rd century, the plot involves the survival of planet Earth, which becomes the responsibility of Korben Dallas (Willis), a taxi driver and former special forces major, after a young woman named Leeloo (Jovovich) falls into his cab.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "Recompilation of The Fifth Element (PS1, Europe SCES-01285) with PSXRecomp and the recomp-ui launcher. You bring your disc and a European SCPH-5502/5552 BIOS, and the wizard compiles the game on your machine. For now it is the 0.1.0 release candidate, with gameplay not closed.",
  notesEs:
    "Recompilación de The Fifth Element (PS1, Europa SCES-01285) con PSXRecomp y el lanzador recomp-ui. Aportas tu disco y una BIOS europea SCPH-5502/5552, y el asistente compila el juego en tu equipo. Por ahora es la candidata 0.1.0, con el gameplay sin cerrar.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8f/The_Fifth_Element%2C_video_game_cover_for_Playstation.jpg",
    alt: "The Fifth Element (box art)",
    credit: "Wikipedia",
  },
};
