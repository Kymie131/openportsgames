import type { Port } from "@/lib/ports/schema";

export const renut: Port = {
  schema: "port",
  id: "renut",
  title: "reNut",
  game: "Banjo-Kazooie: Nuts & Bolts",
  developers: ["masterspike52"],
  publisher: "Microsoft Game Studios",
  originalYear: 2008,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/masterspike52/reNut"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Banjo-Kazooie: Nuts & Bolts (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Banjo-Kazooie: Nuts & Bolts (Xbox 360). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/63/Banjo-Kazooie_Nuts_%26_Bolts_Game_Cover.jpg",
    alt: "Banjo-Kazooie: Nuts & Bolts (box art)",
    credit: "Wikipedia",
  },
};
