import type { Port } from "@/lib/ports/schema";

export const ghostInTheShellRecomp: Port = {
  schema: "port",
  id: "ghost-in-the-shell-recomp",
  title: "Ghost in the Shell Recompiled",
  game: "Ghost in the Shell",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/ghost-in-the-shell-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Ghost in the Shell (PS1, Europe SCES-01050) with PSXRecomp and the recomp-ui launcher. It requires your own disc and a European SCPH-5502/5552 BIOS; the game is compiled on your machine. Release candidate 0.1.0, still without gameplay acceptance.",
  notesEs:
    "Recompilación de Ghost in the Shell (PS1, Europa SCES-01050) con PSXRecomp y el lanzador recomp-ui. Requiere tu propio disco y una BIOS europea SCPH-5502/5552; el juego se compila en tu máquina. Candidata 0.1.0, todavía sin aceptación de gameplay.",
};
