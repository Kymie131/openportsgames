import type { Port } from "@/lib/ports/schema";

export const flowPs3Recomp: Port = {
  schema: "port",
  id: "flow-ps3-recomp",
  title: "flOw - Static Recompilation",
  game: "flOw",
  developers: ["sp00nznet"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2007,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/flow"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation 3",
  notes:
    "Native recompilation of flOw (PlayStation 3). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de flOw (PlayStation 3). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/cf/Flow_logo.jpg",
    alt: "flOw (box art)",
    credit: "Wikipedia",
  },
};
