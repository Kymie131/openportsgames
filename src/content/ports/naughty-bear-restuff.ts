import type { Port } from "@/lib/ports/schema";

export const naughtyBearRestuff: Port = {
  schema: "port",
  id: "naughty-bear-restuff",
  title: "Naughty Bear ReStuff",
  game: "Naughty Bear",
  developers: ["MaxDeadBear"],
  publisher: "505 Games",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/MaxDeadBear/NaughtyBear_ReStuff"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native recompilation of Naughty Bear (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Naughty Bear (Xbox 360). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
};
