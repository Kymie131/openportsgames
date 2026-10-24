import type { Port } from "@/lib/ports/schema";

export const windWakerRecomp: Port = {
  schema: "port",
  id: "wind-waker-recomp",
  title: "The Wind Waker - Static Recompilation",
  game: "The Legend of Zelda: The Wind Waker",
  developers: ["sp00nznet"],
  publisher: "Nintendo",
  originalYear: 2002,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/sp00nznet/ww"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["GameCube"],
  summary: "The Legend of Zelda: The Wind Waker is a 2002 action-adventure game developed and published by Nintendo for the GameCube. An installment in The Legend of Zelda series, it was released in Japan on December 13, 2002, in North America on March 23, 2003, and in Europe on May 2, 2003.",
  summaryEs: "The Legend of Zelda: The Wind Waker, conocido en Japón como Zelda no Densetsu: Kaze no Takuto , es un videojuego de acción-aventura de 2002 desarrollado por la filial EAD y distribuido por Nintendo para la videoconsola Nintendo GameCube. Es el décimo lanzamiento de la franquicia The Legend of Zelda y la precuela directa de The Legend of Zelda: Phantom Hourglass, de Nintendo DS.",
  notes:
    "Static recompilation of The Legend of Zelda: The Wind Waker (GameCube) to a native app. The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación estática de The Legend of Zelda: The Wind Waker (GameCube) a una app nativa. El jugador aporta su propia imagen de disco obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20The%20Wind%20Waker%20(USA).png",
    alt: "The Legend of Zelda: The Wind Waker (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Snaps/Legend%20of%20Zelda,%20The%20-%20The%20Wind%20Waker%20(USA).png",
      alt: "The Legend of Zelda: The Wind Waker (screenshot)",
      credit: "Libretro",
    },
  ],
};
