import type { Port } from "@/lib/ports/schema";

export const SpaceStation14: Port = {
  schema: "port",
  id: "space-station-14",
  title: "Space Station 14",
  game: "Space Station 14",
  developers: ["space-wizards"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/space-wizards/space-station-14"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/1255460/header.jpg",
    alt: "Space Station 14 (cover art)",
    credit: "Steam",
  },
  summary: "Space Station 14, commonly abbreviated SS14, is a free and open-source multiplayer role-playing game developed by Space Wizards Federation, a community of volunteers. A remake and modernisation of Space Station 13, it combines the operation of a space station with environmental hazards, sabotage and conflict between players. Participants assume occupations or antagonistic roles, with the events of each round emerging from their actions and interactions with the station's systems.",
  summaryEs: "Space Station 14 es un videojuego de acción y aventura.",
  notes:
    "A multiplayer game about paranoia and chaos on a space station. Remake of the cult-classic Space Station 13.",
  notesEs:
    "Juego multijugador sobre paranoia y caos en una estación espacial. Remake del clásico de culto Space Station 13.",
};
