import type { Port } from "@/lib/ports/schema";

export const oracleRecompiled: Port = {
  schema: "port",
  id: "oracle-recompiled",
  title: "Oracle of Ages & Oracle of Seasons - Static Recompilation",
  game: "The Legend of Zelda: Oracle of Ages / Oracle of Seasons",
  developers: ["sp00nznet"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/oracle-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Game Boy / Game Boy Color",
  notes:
    "Work-in-progress static recompilation of the two Oracle Zelda games for the Game Boy Color to native apps. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación estática en desarrollo de los dos juegos Oracle de Zelda para Game Boy Color a apps nativas. El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Oracle%20of%20Ages%20(Europe)%20(En%2CFr%2CDe%2CEs%2CIt).png",
    alt: "The Legend of Zelda: Oracle of Ages / Oracle of Seasons (box art)",
    credit: "Box art",
  },
};
