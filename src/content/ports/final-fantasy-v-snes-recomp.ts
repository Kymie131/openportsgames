import type { Port } from "@/lib/ports/schema";

export const finalFantasyVSnesRecomp: Port = {
  schema: "port",
  id: "final-fantasy-v-snes-recomp",
  title: "Final Fantasy V Recompiled",
  game: "Final Fantasy V",
  developers: ["brainWave4"],
  publisher: "Square",
  originalYear: 1992,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/brainWave4/FinalFantasyVSNESRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Super Nintendo"],
  summary: "Final Fantasy V is a 1992 role-playing video game developed and published by Square for the Super Famicom. It is the fifth main installment of the Final Fantasy series. The game begins as a wanderer named Bartz investigates a fallen meteor. There, he encounters several characters, one of whom reveals the danger facing the four Crystals that control the world's elements. These Crystals act as a seal on Exdeath, an evil sorcerer. Bartz and his party must keep the Crystals from being exploited by Exdeath's influence and prevent his resurgence.",
  summaryEs: "Final Fantasy V es un videojuego de rol desarrollado y publicado por Squaresoft en 1992 que forma parte de la serie de videojuegos Final Fantasy. El juego salió solo en Japón para la Super Famicom, y fue portado por TOSE con pequeñas diferencias para Sony PlayStation y la Nintendo Game Boy Advance.",
  notes:
    "Static recompilation of Final Fantasy V (Super Nintendo) to a native executable. It requires your own ROM and ships no game data.",
  notesEs:
    "Recompilación estática de Final Fantasy V (Super Nintendo) a un ejecutable nativo. Requiere tu propia ROM y no incluye datos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Final%20Fantasy%20V%20(Japan).png",
    alt: "Final Fantasy V (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Snaps/Final%20Fantasy%20V%20(Japan).png",
      alt: "Final Fantasy V (screenshot)",
      credit: "Libretro",
    },
  ],
};
