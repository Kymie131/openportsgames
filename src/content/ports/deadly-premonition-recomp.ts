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
    "Recompiled Deadly Premonition (Xbox 360) to run natively on Windows through ReXGlue. Own the game to play.",
  notesEs:
    "Recompilado Deadly Premonition (Xbox 360) para ejecutarse de forma nativa en Windows con ReXGlue. Necesitas el juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c5/Deadly_Premonition_cover_art.jpg",
    alt: "Deadly Premonition (box art)",
    credit: "Wikipedia",
  },
};
