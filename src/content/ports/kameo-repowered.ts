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
  originalSystems: ["Xbox 360"],
  summary: "Kameo: Elements of Power is a 2005 action-adventure video game developed by Rare and published by Microsoft Game Studios. The player controls Kameo, a 16-year-old elf princess, who must travel across a fantasy land and its realms, rescuing her family while collecting Elemental Sprites and Warriors in a beat 'em up style combat system, in order to defeat the troll king Thorn and her treacherous sister Kalus. Kameo's ten elemental powers let her transform into creatures and use their varied abilities to solve combat-oriented puzzles and progress through the game's levels.",
  summaryEs: "Kameo: Elements of Power es un videojuego desarrollado por Rare y editado por Microsoft Game Studios de acción-aventura publicado el 2 de diciembre de 2005 para la consola Xbox 360.",
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
