import type { Port } from "@/lib/ports/schema";

export const warcraftOrcsAndHumansAndroid: Port = {
  schema: "port",
  id: "warcraft-orcs-and-humans-android",
  title: "Stratagus (Warcraft: Orcs & Humans)",
  game: "Warcraft: Orcs & Humans",
  developers: ["drodin"],
  publisher: "Blizzard Entertainment",
  originalYear: 1994,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/drodin/Stratagus"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystems: ["MS-DOS"],
  summary: "Warcraft: Orcs & Humans is a real-time strategy game (RTS) developed and published by Blizzard Entertainment, and published by Interplay Productions in Europe. It was released for MS-DOS in North America on November 15, 1994, and for Mac OS in early 1996. The MS-DOS version was re-released by Sold-Out Software in 2002. It is the first game in the Warcraft fantasy game franchise.",
  summaryEs: "Warcraft: Orcs & Humans™ es un videojuego de estrategia creado por Blizzard Entertainment para PC. Es de los primeros juegos del género de estrategia en tiempo real o RTS. Warcraft: Orcs & Humans inicia la serie Warcraft y ocurre en un ambiente épico medieval donde los humanos del reino mítico de Azeroth enfrentan a los orcos invasores entre otras criaturas fantásticas.",
  notes:
    "Android port of the Stratagus real-time strategy engine, aimed at running Warcraft: Orcs & Humans. It needs the original game data files.",
  notesEs:
    "Port a Android del motor de estrategia en tiempo real Stratagus, orientado a ejecutar Warcraft: Orcs & Humans. Necesita los archivos de datos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9c/Warcraft_-_Orcs_%26_Humans_Coverart.png",
    alt: "Warcraft: Orcs & Humans (box art)",
    credit: "Wikipedia",
  },
};
