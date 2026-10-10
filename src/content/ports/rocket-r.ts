import type { Port } from "@/lib/ports/schema";

export const rocketR: Port = {
  schema: "port",
  id: "rocket-r",
  title: "Rocket-R",
  game: "Rocket: Robot on Wheels",
  developers: ["ThatGuyMcd"],
  publisher: "Ubisoft",
  originalYear: 1999,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ThatGuyMcd/Rocket-R"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  notes:
    "Native recompilation of Rocket: Robot on Wheels (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Rocket: Robot on Wheels (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Rocket%20-%20Robot%20on%20Wheels%20(USA).png",
    alt: "Rocket: Robot on Wheels (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Rocket%20-%20Robot%20on%20Wheels%20(USA).png",
      alt: "Rocket: Robot on Wheels (screenshot)",
      credit: "Libretro",
    },
  ],
};
