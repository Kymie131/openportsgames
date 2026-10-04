import type { Port } from "@/lib/ports/schema";

export const donut: Port = {
  schema: "port",
  id: "donut",
  title: "donut",
  game: "The Simpsons: Hit & Run",
  developers: ["plowteam"],
  publisher: "Electronic Arts",
  originalYear: 2003,
  genre: "action-adventure",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/plowteam/donut"],
  discord: "https://discord.gg/U7jFGJKuW4",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  features: [
    "Open source reimplementation in modern C++",
    "Modern OpenGL renderer",
    "Requires original game assets supplied by the player",
  ],
  featuresEs: [
    "Reimplementación de código abierto en C++ moderno",
    "Renderizador OpenGL moderno",
    "Requiere recursos del juego original aportados por el jugador",
  ],
  notes:
    "Clean-room reimplementation of The Simpsons: Hit & Run. The player supplies their own legally obtained game assets; the repository ships no game content.",
  notesEs:
    "Reimplementación limpia de The Simpsons: Hit & Run. El jugador aporta sus propios recursos del juego obtenidos legalmente; el repositorio no incluye contenido del juego.",
  screenshots: [
    {
      src: "https://files.facepunch.com/Layla/2019/August/11/2019-08-09_22-12-28.png",
      alt: "Gameplay in donut",
      credit: "donut project",
    },
    {
      src: "https://files.facepunch.com/Layla/2019/August/11/2019-08-09_22-11-26.png",
      alt: "Exploring Springfield in donut",
      credit: "donut project",
    },
  ],
};
