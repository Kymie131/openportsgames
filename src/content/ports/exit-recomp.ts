import type { Port } from "@/lib/ports/schema";

export const exitRecomp: Port = {
  schema: "port",
  id: "exit-recomp",
  title: "EXIT Recompiled",
  game: "EXIT",
  developers: ["FluffyQuack"],
  publisher: "Taito",
  originalYear: 2008,
  portType: "recompilation",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/FluffyQuack/ReXGlue-EXIT"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of EXIT (Xbox 360) with ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática de EXIT (Xbox 360) con ReXGlue. Requiere tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/11/Exit-cover.jpg",
    alt: "EXIT (box art)",
    credit: "Wikipedia",
  },
};
