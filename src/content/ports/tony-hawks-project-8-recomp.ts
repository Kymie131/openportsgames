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
  originalSystem: "Xbox 360",
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
