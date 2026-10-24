import type { Port } from "@/lib/ports/schema";

export const wildArmsRecomp: Port = {
  schema: "port",
  id: "wild-arms-recomp",
  title: "Wild Arms Recompiled",
  game: "Wild Arms",
  developers: ["alexbeavs"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1996,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/wild-arms-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "Wild Arms is a role-playing video game developed by Media.Vision and published by Sony Computer Entertainment for the PlayStation. The game was released in Japan in 1996, in North America in 1997, and in Europe in 1998. It utilizes 2D computer graphics for navigating the world and setting, while battle sequences are rendered in 3D.",
  summaryEs: "Wild Arms Es un videojuego de rol con una temática Wéstern desarrollado por la compañía Japonesa Media.Vision. Originalmente lanzado en Japón en 1996 para la consola PlayStation, más tarde fue traducido y lanzado en América del Norte en 1997 y en Europa en 1998 por Sony Computer Entertainment. Es notable no solo por ser uno de los primeros videojuegos de rol para la PlayStation, sino también por ser uno de pocos para ambientados en el Viejo Oeste. El juego presenta gráficas en 2D para las secuencias normales, mientras que las secuencias de batalla son mostradas en 3D.",
  notes:
    "Recompilation of Wild Arms (PS1, USA SCUS-94608) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de Wild Arms (PS1, USA SCUS-94608) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Boxarts/Wild%20Arms%20(Europe).png",
    alt: "Wild Arms (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation/Named_Snaps/Wild%20Arms%20(Europe).png",
      alt: "Wild Arms (screenshot)",
      credit: "Libretro",
    },
  ],
};
