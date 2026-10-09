import type { Port } from "@/lib/ports/schema";

export const supermanReturnsRecomp: Port = {
  schema: "port",
  id: "superman-returns-recomp",
  title: "Superman Returns Recomp",
  game: "Superman Returns",
  developers: ["MrPowerUp82"],
  publisher: "Electronic Arts",
  originalYear: 2006,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/MrPowerUp82/superman_returns_recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Superman Returns (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Superman Returns (Xbox 360). El jugador aporta su propio material obtenido legalmente (disc dump); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c2/Superman_Returns_coverart.jpg",
    alt: "Superman Returns (box art)",
    credit: "Wikipedia",
  },
};
