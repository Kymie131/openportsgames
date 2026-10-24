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
  originalSystems: ["Windows"],
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
  summary: "The Simpsons: Hit & Run is a 2003 action-adventure game developed by Radical Entertainment and published by Vivendi Universal Games. It is based on the American animated television series The Simpsons, and is the 22nd installment in The Simpsons series of video games.",
  summaryEs: "The Simpsons: Hit & Run es un videojuego de carreras y acción-aventura basado en la serie animada estadounidense Los Simpson. Desarrollado por Radical Entertainment, editado por Fox Interactive y distribuido por Vivendi Games en Norteamérica y por Sierra Entertainment en el resto del mundo. Salió a la venta en 2003 para GameCube, PlayStation 2, Xbox y Microsoft Windows. Los guionistas del programa hicieron la historia y los diálogos, y los actores habituales proporcionaron las voces de los personajes.",
  notes:
    "Open source reimplementation of The Simpsons: Hit & Run in modern C++ and modern OpenGL. It needs the original game assets.",
  notesEs:
    "Reimplementación de código abierto de The Simpsons: Hit & Run en C++ moderno y OpenGL moderno. Necesita los recursos del juego original.",
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
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5f/The_Simpsons_Hit_and_Run_cover.png",
    alt: "The Simpsons: Hit & Run (box art)",
    credit: "Wikipedia",
  },
};
