import type { Port } from "@/lib/ports/schema";

export const drMarioNesRecomp: Port = {
  schema: "port",
  id: "dr-mario-nes-recomp",
  title: "DrMarioNesRecomp",
  game: "Dr. Mario",
  developers: ["mstan"],
  publisher: "Nintendo",
  originalYear: 1990,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/mstan/DrMarioNesRecomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Nintendo Entertainment System"],
  summary: "Dr. Mario is a 1990 puzzle video game developed and published by Nintendo for the Nintendo Entertainment System and Game Boy. A spin-off of the Mario series, it is a falling block puzzle game in which the player's objective is to destroy the viruses populating the on-screen playing field by using colored capsules that are automatically tossed into the field by Dr. Mario. The player manipulates the falling capsules, to align the same colors, which destroys viruses. The player progresses through the game by eliminating all the viruses on the screen in each level.",
  summaryEs: "Dr. Mario es un videojuego de lógica desarrollado por Nintendo publicado en el año 1990. Se lanzó para los sistemas NES, Game Boy y sistemas recreativos renombrada como Vs. Dr. Mario.",
  notes:
    "Static recompilation of Dr. Mario (NES) with the NESRecomp framework. Playable: title screen, options menu and 1-player mode, with separate builds for the USA (Rev 1) and European ROMs.",
  notesEs:
    "Recompilación estática de Dr. Mario (NES) con el framework NESRecomp. Jugable: pantalla de título, menú de opciones y el modo de un jugador, con builds separadas para la ROM USA (Rev 1) y la europea.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Boxarts/Dr.%20Mario%20(USA)%20(Beta).png",
    alt: "Dr. Mario (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20Entertainment%20System/Named_Snaps/Dr.%20Mario%20(USA)%20(Beta).png",
      alt: "Dr. Mario (screenshot)",
      credit: "Libretro",
    },
  ],
};
