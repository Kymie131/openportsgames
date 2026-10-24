import type { Port } from "@/lib/ports/schema";

export const superBombermanRecomp: Port = {
  schema: "port",
  id: "super-bomberman-recomp",
  title: "Super Bomberman Recompiled",
  game: "Super Bomberman",
  developers: ["elliotttate"],
  publisher: "Hudson Soft",
  originalYear: 1993,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/elliotttate/BombermanRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Super Nintendo"],
  summary: "Super Bomberman is a 1993 action maze video game developed by Produce! and published by Hudson Soft for the Super Nintendo Entertainment System. Part of the Bomberman series, it is the first game in the series to retain the Bomberman title in Europe, instead of being renamed to Dynablaster or Eric and the Floaters.",
  summaryEs: "Super Bomberman es el primer videojuego en la serie de Bomberman en aparecer en la consola Super Nintendo. También es el primer juego con opción de jugar 4 jugadores simultáneamente en modo batalla.",
  notes:
    "Native recompilation of Super Bomberman (SNES) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación nativa de Super Bomberman (SNES) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Super%20Bomberman%20(USA).png",
    alt: "Super Bomberman (box art)",
    credit: "Box art",
  },
};
