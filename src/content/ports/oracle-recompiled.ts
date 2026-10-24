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
  wip: true,
  originalSystems: ["Game Boy","Game Boy Color"],
  summary: "The Legend of Zelda is a video game series created by Japanese game designers Shigeru Miyamoto and Takashi Tezuka. It is primarily developed and published by Nintendo, but some installments and re-releases have been outsourced to Flagship, Grezzo, and Tantalus Media.",
  summaryEs: "The Legend of Zelda es una serie de videojuegos de acción-aventura creada por los diseñadores japoneses Shigeru Miyamoto y Takashi Tezuka, y desarrollada por Nintendo, empresa que también se encarga de su distribución internacional. Su trama por lo general describe las heroicas aventuras del joven guerrero Link, que debe enfrentarse a peligros y resolver acertijos para ayudar a la Princesa Zelda a derrotar a Ganondorf y salvar su hogar, el reino de Hyrule.",
  notes:
    "Work-in-progress static recompilation of the two Oracle Zelda games for the Game Boy Color to native apps. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación estática en desarrollo de los dos juegos Oracle de Zelda para Game Boy Color a apps nativas. El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20Oracle%20of%20Ages%20(Europe)%20(En%2CFr%2CDe%2CEs%2CIt).png",
    alt: "The Legend of Zelda: Oracle of Ages / Oracle of Seasons (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Snaps/Legend%20of%20Zelda,%20The%20-%20Oracle%20of%20Ages%20(Europe)%20(En,Fr,De,Es,It).png",
      alt: "The Legend of Zelda: Oracle of Ages / Oracle of Seasons (screenshot)",
      credit: "Libretro",
    },
  ],
};
