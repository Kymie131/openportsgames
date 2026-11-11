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
  release: { version: "1.0.1", date: "2026-09-27" },
  sources: ["https://github.com/ThatGuyMcd/Rocket-R"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "Rocket: Robot on Wheels is a 1999 platform game developed by Sucker Punch Productions and published by Ubisoft for the Nintendo 64. In it, the player controls Rocket, the titular robot. Rocket: Robot on Wheels was the first game on a home console to use a realistic physics engine to drive the gameplay. The player can solve puzzles dealing with mass, inertia, friction, and other physical properties.",
  summaryEs: "Rocket: Robot on Wheels es un videojuego de plataformas para Nintendo 64, desarrollado por Sucker Punch Productions y publicado por Ubisoft, publicado en 1999. En el juego que jugar como Rocket, el título del robot, a pesar de que el título sólo tiene una rueda. Este fue el primer juego desarrollado por Sucker Punch, que más tarde desarrollar la serie Sly Cooper para Sony. Rocket también fue notable por su uso de un relativamente avanzado motor de física.",
  notes:
    "Native recompilation of Rocket: Robot on Wheels (Nintendo 64). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Rocket: Robot on Wheels (Nintendo 64). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  downloads: [
    {
      label: "Linux x64",
      url: "https://github.com/ThatGuyMcd/Rocket-R/releases/download/v.1.0.1/Rocket-R-1.0.1-Linux-x86_64-SteamDeck.tar.gz",
      size: "22.0 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/ThatGuyMcd/Rocket-R/releases/download/v.1.0.1/Rocket-R-1.0.1-Linux-x86_64.AppImage",
      size: "20.6 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/ThatGuyMcd/Rocket-R/releases/download/v.1.0.1/Rocket-R-1.0.1-Linux-x86_64-Portable.tar.gz",
      size: "20.2 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/ThatGuyMcd/Rocket-R/releases/download/v.1.0.1/Rocket-R-1.0.1-Linux-aarch64.AppImage",
      size: "19.9 MB",
    },
    {
      label: "Linux arm64",
      url: "https://github.com/ThatGuyMcd/Rocket-R/releases/download/v.1.0.1/Rocket-R-1.0.1-Linux-aarch64-Portable.tar.gz",
      size: "19.4 MB",
    },
  ],
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
