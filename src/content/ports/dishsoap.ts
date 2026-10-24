import type { Port } from "@/lib/ports/schema";

export const dishsoap: Port = {
  schema: "port",
  id: "dishsoap",
  title: "DishSoap",
  game: "The Dishwasher: Dead Samurai",
  developers: ["Hdmaniak"],
  publisher: "Microsoft Game Studios",
  originalYear: 2009,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Hdmaniak/DishSoap"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "The Dishwasher: Dead Samurai is a beat 'em up game developed by independent software developer James Silva for the Xbox 360's Xbox Live Arcade service. A Windows port was announced, but a release date on Steam has not yet been set.",
  summaryEs: "The Dishwasher: Dead Samurai es un videojuego de acción y aventura publicado por Xbox Game Studios en 2009.",
  notes:
    "Community Android port of The Dishwasher: Dead Samurai (Xbox 360). It needs the original game.",
  notesEs:
    "Port comunitario para Android de The Dishwasher: Dead Samurai (Xbox 360). Necesita el juego original.",
  cover: {
    src: "https://raw.githubusercontent.com/Hdmaniak/DishSoap/refs/heads/master/docs/assets/icon-512.png",
    alt: "The Dishwasher: Dead Samurai (cover)",
    credit: "SteamGridDB",
  },
};
