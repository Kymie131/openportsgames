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
  originalSystem: "PlayStation",
  notes:
    "Recompilation of The Fifth Element (PS1, Europe SCES-01285) with PSXRecomp and the recomp-ui launcher. You bring your disc and a European SCPH-5502/5552 BIOS, and the wizard compiles the game on your machine. For now it is the 0.1.0 release candidate, with gameplay not closed.",
  notesEs:
    "Recompilación de The Fifth Element (PS1, Europa SCES-01285) con PSXRecomp y el lanzador recomp-ui. Aportas tu disco y una BIOS europea SCPH-5502/5552, y el asistente compila el juego en tu equipo. Por ahora es la candidata 0.1.0, con el gameplay sin cerrar.",
};
