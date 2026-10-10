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
  originalSystem: "MS-DOS",
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
