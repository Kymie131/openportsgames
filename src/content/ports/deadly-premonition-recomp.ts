import type { Port } from "@/lib/ports/schema";

export const deadlyPremonitionRecomp: Port = {
  schema: "port",
  id: "deadly-premonition-recomp",
  title: "Deadly Premonition Recompiled",
  game: "Deadly Premonition",
  developers: ["LittleBitUA"],
  publisher: "Ignition Entertainment",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/LittleBitUA/DPRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Deadly Premonition (Xbox 360) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de Deadly Premonition (Xbox 360) con ReXGlue. Requiere tu propia copia del juego.",
};
