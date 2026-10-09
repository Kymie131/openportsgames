import type { Port } from "@/lib/ports/schema";

export const fearEffectRecomp: Port = {
  schema: "port",
  id: "fear-effect-recomp",
  title: "Fear Effect Recompiled",
  game: "Fear Effect",
  developers: ["alexbeavs"],
  publisher: "Eidos Interactive",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/fear-effect-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Fear Effect (PS1, USA SLUS-00920) with PSXRecomp and the recomp-ui launcher. You bring your own disc and a European SCPH-5502/5552 BIOS; the game is generated and compiled on your machine. A 0.1.0 release candidate with gameplay not yet validated.",
  notesEs:
    "Recompilación de Fear Effect (PS1, USA SLUS-00920) con PSXRecomp y el lanzador recomp-ui. Aportas tu propio disco y una BIOS europea SCPH-5502/5552; el juego se genera y compila en tu equipo. Candidata 0.1.0 con el gameplay aún sin validar.",
};
