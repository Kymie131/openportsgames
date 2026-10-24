import type { Port } from "@/lib/ports/schema";

export const wwfNoMercyRecomp: Port = {
  schema: "port",
  id: "wwf-no-mercy-recomp",
  title: "WWF No Mercy",
  game: "WWF No Mercy",
  developers: ["jessetbh"],
  publisher: "THQ",
  originalYear: 2000,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jessetbh/WWFNoMercyRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  summary: "WWF No Mercy is a professional wrestling video game released in 2000 by THQ for the Nintendo 64. It is based on the World Wrestling Federation and is named after the WWF's annual event of the same name. Developed by Asmik Ace Entertainment and AKI Corporation, No Mercy is the last in a series of Nintendo 64 wrestling games from the companies that started with WCW vs. nWo: World Tour.",
  summaryEs: "WWF No Mercy es un videojuego de lucha libre profesional publicado en 2000 en la consola Nintendo 64, desarrollado por Asmik Ace Entertainment y AKI Corporation y publicado por THQ. Está basado en la World Wrestling Federation y lleva el nombre del evento anual del mismo nombre. No Mercy es el sucesor de WWF WWF WrestleMania 2000 de 1999. No Mercy fue bien recibido por los jugadores y críticos por igual.",
  notes:
    "Static recompilation of WWF No Mercy (N64) with N64Recomp and the RT64 renderer. It requires the original game.",
  notesEs:
    "Recompilación estática de WWF No Mercy (N64) con N64Recomp y el renderizador RT64. Requiere el juego original.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/WWF%20No%20Mercy%20(Europe)%20(Rev%201).png",
    alt: "WWF No Mercy (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/WWF%20No%20Mercy%20(Europe)%20(Rev%201).png",
      alt: "WWF No Mercy (screenshot)",
      credit: "Libretro",
    },
  ],
};
