import type { Port } from "@/lib/ports/schema";

export const nelumbo: Port = {
  schema: "port",
  id: "nelumbo",
  title: "Lotus Trilogy",
  game: "Lotus Trilogy",
  developers: ["almost-there-games"],
  publisher: "Gremlin Graphics",
  originalYear: 1990,
  portType: "reimplementation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://almost-there-games.itch.io/nelumbo"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Amiga"],
  summary: "Lotus Trilogy is a reimplementation of the Lotus racing games (Esprit Turbo Challenge, Turbo Challenge 2 and Lotus III), originally published by Gremlin Graphics.",
  summaryEs: "Lotus Trilogy es una reimplementación de los juegos de carreras Lotus (Esprit Turbo Challenge, Turbo Challenge 2 y Lotus III), publicados originalmente por Gremlin Graphics.",
  notes:
    "Reimplementation of the Lotus racing trilogy (Lotus Esprit Turbo Challenge, Turbo Challenge 2 and Lotus III), distributed on itch.io.",
  notesEs:
    "Reimplementación de la trilogía de carreras Lotus (Lotus Esprit Turbo Challenge, Turbo Challenge 2 y Lotus III), distribuida en itch.io.",
  cover: {
    src: "https://cdn2.steamgriddb.com/thumb/15ff25fd515e3c151b797bcef1bf3fb9.jpg",
    alt: "Lotus Trilogy (cover)",
    credit: "SteamGridDB",
  },
};
