import type { Port } from "@/lib/ports/schema";

export const tonyHawksProject8Recomp: Port = {
  schema: "port",
  id: "tony-hawks-project-8-recomp",
  title: "Tony Hawk's Project 8 Recompiled",
  game: "Tony Hawk's Project 8",
  developers: ["theokyr"],
  publisher: "Activision",
  originalYear: 2006,
  portType: "recompilation",
  genre: "sports",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/theokyr/Project8Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Tony Hawk's Project 8 is a 2006 skateboarding video game and the eighth installment in the Tony Hawk's series. It was developed by Neversoft and published by Activision in November 2006 for the PlayStation 2, Xbox, Xbox 360, PlayStation 3, and PlayStation Portable. The game complements the release of Tony Hawk's Downhill Jam, which was conversely available on Nintendo systems along with the PlayStation 2 respectively. It received mostly positive reviews.",
  summaryEs: "Tony Hawk's Project 8 es la octava entrega de la saga de videojuegos Tony Hawk's. Fue lanzado para las consolas de Sony y Microsoft de la sexta generación y las de séptima generación el 7 de noviembre de 2006. Es completamente diferente a su homólogo Tony Hawk's Downhill Jam. El nombre \"Project 8\" se refiere a que es el octavo juego de la franquicia, así como la competición \"Project 8\" que está incluida en historia del juego.",
  notes:
    "A ReXGlue-based static recompilation of Tony Hawk's Project 8 (Xbox 360). Requires your own copy.",
  notesEs:
    "Recompilación estática de Tony Hawk's Project 8 (Xbox 360) basada en ReXGlue. Requiere tu propia copia.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8c/Tony_Hawk%27s_Project_8_cover.jpg",
    alt: "Tony Hawk's Project 8 (box art)",
    credit: "Wikipedia",
  },
};
