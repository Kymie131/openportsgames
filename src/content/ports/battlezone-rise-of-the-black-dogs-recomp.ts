import type { Port } from "@/lib/ports/schema";

export const battlezoneRiseOfTheBlackDogsRecomp: Port = {
  schema: "port",
  id: "battlezone-rise-of-the-black-dogs-recomp",
  title: "Battlezone: Rise of the Black Dogs (Recomp)",
  game: "Battlezone: Rise of the Black Dogs",
  developers: ["wootbeer"],
  publisher: "Crave Entertainment",
  originalYear: 2000,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/wootbeer/bzrecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Battlezone is a first-person shooter real-time strategy video game, developed and published by Activision. It was released for Microsoft Windows in 1998. Aside from the name and presence of tanks, this game bears little resemblance to the original arcade game of the same name. The game is a combination of a tank simulation game, a first-person shooter and a real-time strategy game.",
  summaryEs: "Battlezone: Rise of the Black Dogs es un videojuego de estrategia publicado por Crave Entertainment en 2000.",
  notes:
    "Native recompilation of Battlezone: Rise of the Black Dogs (Nintendo 64) with N64Recomp and RT64, released as beta for Windows and Linux. It needs the player's own legally obtained game dump and ships no game data.",
  notesEs:
    "Recompilación nativa de Battlezone: Rise of the Black Dogs (Nintendo 64) con N64Recomp y RT64, publicada como beta para Windows y Linux. Necesita el volcado del juego obtenido legalmente por el jugador y no incluye datos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Battlezone%20-%20Rise%20of%20the%20Black%20Dogs%20(USA).png",
    alt: "Battlezone: Rise of the Black Dogs (box art)",
    credit: "Box art",
  },
};
