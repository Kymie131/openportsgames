import type { Port } from "@/lib/ports/schema";

export const redahm: Port = {
  schema: "port",
  id: "redahm",
  title: "reDAHM",
  game: "Destroy All Humans! Path of the Furon",
  developers: ["masterspike52"],
  publisher: "THQ",
  originalYear: 2008,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/masterspike52/reDAHM"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Destroy All Humans! Path of the Furon (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Destroy All Humans! Path of the Furon (Xbox 360). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/bb/Destroy_All_Humans%21_Path_of_the_Furon_cover.jpg",
    alt: "Destroy All Humans! Path of the Furon (box art)",
    credit: "Wikipedia",
  },
};
