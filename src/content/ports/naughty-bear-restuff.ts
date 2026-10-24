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
  originalSystems: ["Xbox 360"],
  summary: "Naughty Bear is a 2010 action-adventure video game developed by Canadian studio Artificial Mind and Movement and released by Italian publisher 505 Games for the PlayStation 3, Xbox 360, and iOS. The game is set on the fictional Perfection Island in the 1980s, where sentient teddy bears live in harmony. Naughty Bear is a shabby teddy bear who is rude, which earns him disdain from other bears, and starts a vengeful rampage against them when he is shunned from a birthday party. The game received mixed reviews from critics.",
  summaryEs: "Naughty Bear es un videojuego de acción y aventura publicado por 505 Games en 2010.",
  notes:
    "Native recompilation of Naughty Bear (Xbox 360). The player supplies their own legally obtained disc dump; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Naughty Bear (Xbox 360). El jugador aporta su propio material obtenido legalmente (volcado del disco); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/0f/Naughty_Bear.jpg",
    alt: "Naughty Bear (box art)",
    credit: "Wikipedia",
  },
};
