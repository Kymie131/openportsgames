import type { Port } from "@/lib/ports/schema";

export const spyro3Decomp: Port = {
  schema: "port",
  id: "spyro-3-decomp",
  title: "Spyro: Year of the Dragon Decompilation",
  game: "Spyro: Year of the Dragon",
  developers: ["TheMobyCollective"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/TheMobyCollective/spyro-3"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Spyro: Year of the Dragon is a 2000 platform game developed by Insomniac Games and published by Sony Computer Entertainment for the PlayStation. The third installment in the Spyro series, Year of the Dragon follows the adventures of the titular purple dragon. After an evil sorceress steals magical dragon eggs from the land of the dragons, Spyro travels to the \"Forgotten Realms\" to retrieve them. Players travel across different worlds gathering gems and eggs, defeating enemies, and playing minigames.",
  summaryEs: "Spyro: El año del dragón es el tercer y último videojuego de la serie Spyro the Dragon, desarrollado por Insomniac Games, siendo también el último título de la serie publicado para la videoconsola PlayStation. Se lanzó el 11 de octubre de 2000 en Norteamérica, el 25 de octubre en el Reino Unido y el 10 de noviembre en el resto de Europa.",
  notes:
    "Decompilation of Spyro: Year of the Dragon for the PlayStation. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación de Spyro: Year of the Dragon para PlayStation. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/54/Spyro-year_of_the_dragon.png",
    alt: "Spyro: Year of the Dragon (cover)",
    credit: "Wikipedia",
  },
};
