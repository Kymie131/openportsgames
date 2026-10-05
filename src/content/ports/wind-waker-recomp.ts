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
  originalSystem: "GameCube",
  notes:
    "Static recompilation of The Legend of Zelda: The Wind Waker (GameCube) to a native app. The player supplies their own legally obtained disc image; the repository ships no game content.",
  notesEs:
    "Recompilación estática de The Legend of Zelda: The Wind Waker (GameCube) a una app nativa. El jugador aporta su propia imagen de disco obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20GameCube/Named_Boxarts/Legend%20of%20Zelda%2C%20The%20-%20The%20Wind%20Waker%20(USA).png",
    alt: "The Legend of Zelda: The Wind Waker (box art)",
    credit: "Box art",
  },
};
