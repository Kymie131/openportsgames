import type { Port } from "@/lib/ports/schema";

export const DigimonRumbleArena: Port = {
  schema: "port",
  id: "digimon-rumble-arena",
  title: "Digimon Rumble Arena",
  game: "Digimon Rumble Arena",
  developers: ["ReGame-Labs"],
  publisher: "Bandai",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ReGame-Labs/dtbe_decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/56/Digimon_Rumble_Arena_cover.png",
    alt: "Digimon Rumble Arena (cover)",
    credit: "Wikipedia",
  },
  summary: "Digimon Rumble Arena is a 2001 fighting video game developed and published by Bandai. It is part of a video game series connected to the Digimon franchise and showcases the titular creatures within the context of a fighting video game. The player controls one of several Digimon and engages in combat with other Digimon within a variety of settings. Apart from the central fighting gameplay, a trio of mini-games are available upon the single-player campaign's completion.",
  summaryEs: "Digimon Rumble Arena es un videojuego crossover perteneciente al género de lucha desarrollado y publicado por Bandai en asociación con Hudson Soft para la consola de videojuegos PlayStation. Fue lanzado en Japón el 6 de diciembre de 2001 y en América del Norte el 24 de febrero de 2002. Los jugadores pueden elegir entre un máximo de 24 Digimon de entre los personajes de las épocas de las series de Digimon Adventure y Digimon Tamers, como Terriermon, Agumon, Gatomon, y Renamon.",
  notes:
    "Digimon Rumble Arena (Digimon Tamers: Battle Evolution, PS1, Japan) matching decompilation.",
  notesEs: "Decompilación que coincide de Digimon Rumble Arena (Digimon Tamers, PS1, Japón).",
};
