import type { Port } from "@/lib/ports/schema";

export const actraiserRecomp: Port = {
  schema: "port",
  id: "actraiser-recomp",
  title: "ActRaiser Recompiled",
  game: "ActRaiser",
  developers: ["DerrickGold"],
  publisher: "Enix",
  originalYear: 1990,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/DerrickGold/ar-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Super Nintendo"],
  summary: "ActRaiser is a 1990 video game developed by Quintet and published by Enix for the Super Nintendo Entertainment System. It combines traditional side-scrolling platforming and sections with city building elements. A sequel, ActRaiser 2, was released for the Super NES in 1993. In 2007, ActRaiser became available on the Wii's Virtual Console download service in Europe, North America, and Japan. A version of the game was also released for European mobile phones in 2004. A remake, Actraiser Renaissance, was released for several platforms in 2021.",
  summaryEs: "Actraiser , publicado fuera de Japón con el título ActRaiser, es un videojuego de plataformas, construcción de ciudades, acción y simulación de dios desarrollado por Quintet en 1990 para la plataforma Super Famicom. El jugador controla a Dios con el fin de salvar al mundo de la dominación de \"El malvado\" mediante la purificación del suelo y el desarrollo de ciudades. Una secuela ActRaiser 2 fue desarrollada en 1993 para la misma plataforma. Una reedición en HD, llamado ActRaiser Renaissance , salió para múltiples plataformas el 2021.",
  notes:
    "Recompilation of ActRaiser (Super Nintendo) for Windows, Linux and macOS. It needs your own ROM of the game.",
  notesEs:
    "Recompilación de ActRaiser (Super Nintendo) para Windows, Linux y macOS. Necesita tu propia ROM del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/ActRaiser%20(Europe).png",
    alt: "ActRaiser (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/ActRaiser%20(Europe).png",
      alt: "ActRaiser (screenshot)",
      credit: "Libretro",
    },
  ],
};
