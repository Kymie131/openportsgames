import type { Port } from "@/lib/ports/schema";

export const pinballFantasiesAndroid: Port = {
  schema: "port",
  id: "pinball-fantasies-android",
  title: "Pinball Fantasies (Android)",
  game: "Pinball Fantasies",
  developers: ["wootbeer"],
  publisher: "21st Century Entertainment",
  originalYear: 1992,
  portType: "source-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/wootbeer/pbfandroid"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["MS-DOS"],
  summary: "Pinball Fantasies is a 1992 pinball video game originally developed by Digital Illusions and published by 21st Century Entertainment in Europe for the Amiga home computers. It is the sequel to Pinball Dreams, which was released earlier in the same year on multiple platforms. In the game, players can choose between any of four available playfields, each of which have their own thematic and main objectives in order to obtain the highest score possible.",
  summaryEs: "Pinball Fantasies es un videojuego de pinball diseñado por Digital Illusions CE para el sistema Amiga, como una secuela a Pinball Dreams. Una futura secuela sería lanzada en 1995 llamada Pinball Illusions.",
  notes:
    "Decompilation and source port of the DOS pinball game Pinball Fantasies for Android, with touch controls. It requires the original game files.",
  notesEs:
    "Decompilación y source port para Android del pinball de DOS Pinball Fantasies, con controles táctiles. Requiere los archivos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/d9/Amiga_Pinball_Fantasies_cover_art.jpg",
    alt: "Pinball Fantasies (box art)",
    credit: "Wikipedia",
  },
};
