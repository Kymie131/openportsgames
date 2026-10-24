import type { Port } from "@/lib/ports/schema";

export const gumshoeNesRecomp: Port = {
  schema: "port",
  id: "gumshoe-nes-recomp",
  title: "GumshoeNESRecomp",
  game: "Gumshoe",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1986,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/GumshoeNESRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Gumshoe is a light gun shooter video game developed and published by Nintendo for the VS. System arcade hardware and the Nintendo Entertainment System console. It was released in 1986 in North America and in 1988 in Europe. It was not released in Japan, which is unusual for a Nintendo game. It was designed by Yoshio Sakamoto.",
  summaryEs: "Gumshoe es un videojuego de disparos con pistola de luz desarrollado y publicado por Nintendo para el hardware arcade VS. System y la consola Nintendo Entertainment System. Fue lanzado en 1986 en Norteamérica y en 1988 en Europa. Algo inusual para un juego de Nintendo es que no se lanzó en Japón. El juego fue diseñado por Yoshio Sakamoto.",
  notes:
    "Static recompilation of Gumshoe (NES) with the NESRecomp framework. Playable end-to-end with the Zapper on the mouse; one known cosmetic bug remains in the corner timer and shot counter.",
  notesEs:
    "Recompilación estática de Gumshoe (NES) con el framework NESRecomp. Jugable de principio a fin con el Zapper en el ratón; queda un fallo cosmético conocido en el marcador de tiempo y disparos de la esquina.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Gumshoe%20(USA%2C%20Europe).png",
    alt: "Gumshoe (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Gumshoe%20(USA,%20Europe).png",
      alt: "Gumshoe (screenshot)",
      credit: "Libretro",
    },
  ],
};
