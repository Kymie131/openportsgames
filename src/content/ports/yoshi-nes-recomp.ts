import type { Port } from "@/lib/ports/schema";

export const yoshiNesRecomp: Port = {
  schema: "port",
  id: "yoshi-nes-recomp",
  title: "YoshiNESRecomp",
  game: "Yoshi",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1991,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/YoshiNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Yoshi is a fictional character who appears in video games published by Nintendo. He was designed by Shigefumi Hino and first appeared in Super Mario World (1990) for the Super Nintendo Entertainment System as a rideable companion for Mario and Luigi. The character belongs to a species of dinosaur-like creatures, also called Yoshis, which are commonly depicted in different colors and are known for using their long tongues to eat enemies and produce eggs.",
  summaryEs: "Yoshi , es un dinosaurio híbrido antropomórfico perteneciente a la franquicia de Mario, el cual también cuenta con su propia serie de juegos.",
  notes:
    "Native recompilation of Yoshi (Nintendo Entertainment System). The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación nativa de Yoshi (Nintendo Entertainment System). El jugador aporta su propio material obtenido legalmente (ROM); el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Yoshi%20(USA).png",
    alt: "Yoshi (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Yoshi%20(USA).png",
      alt: "Yoshi (screenshot)",
      credit: "Libretro",
    },
  ],
};
