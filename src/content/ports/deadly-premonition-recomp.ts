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
  originalSystems: ["Xbox 360"],
  summary: "Deadly Premonition is a 2010 open world survival horror video game developed by Access Games. Set in the fictional rural American town of Greenvale, Washington, the story follows FBI Special Agent Francis York Morgan as he investigates the murder of an eighteen-year-old woman, which bears similarities to a series of murders across the country.",
  summaryEs: "Deadly Premonition es un videojuego de terror para las consolas Xbox 360 y PlayStation 3, perteneciente al género survival horror en mundo abierto.",
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
