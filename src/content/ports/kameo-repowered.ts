import type { Port } from "@/lib/ports/schema";

export const kameoRepowered: Port = {
  schema: "port",
  id: "kameo-repowered",
  title: "Kameo: RePowered",
  game: "Kameo: Elements of Power",
  developers: ["birabittoh"],
  publisher: "Microsoft Game Studios",
  originalYear: 2005,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/birabittoh/KameoRePowered"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Kameo: Elements of Power (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Kameo: Elements of Power (Xbox 360). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/0f/Kameocover.jpg",
    alt: "Kameo: Elements of Power (box art)",
    credit: "Wikipedia",
  },
};
