import type { Port } from "@/lib/ports/schema";

export const starboundAndroid: Port = {
  schema: "port",
  id: "starbound-android",
  title: "OpenStarbound Mobile",
  game: "Starbound",
  developers: ["RohanBhattacharyya"],
  publisher: "Chucklefish",
  originalYear: 2016,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/RohanBhattacharyya/oSBM"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "You’ve fled your home, only to find yourself lost in space with a damaged ship. Your only option is to beam down to the planet below, repair your ship and set off to explore the universe...",
  summaryEs: "Starbound es un videojuego de acción y aventura publicado por Chucklefish en 2016.",
  notes:
    "OpenStarbound port to mobile devices, bringing the Starbound sandbox to Android. It needs the game itself.",
  notesEs:
    "Port de OpenStarbound a dispositivos móviles, que lleva el sandbox Starbound a Android. Necesita el propio juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/06/Starbound_Logo.png",
    alt: "Starbound (box art)",
    credit: "Wikipedia",
  },
};
