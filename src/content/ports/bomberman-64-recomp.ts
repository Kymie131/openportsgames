import type { Port } from "@/lib/ports/schema";

export const bomberman64Recomp: Port = {
  schema: "port",
  id: "bomberman-64-recomp",
  title: "Bomberman 64: Recompiled",
  game: "Bomberman 64",
  developers: ["Hudson Soft"],
  publisher: "Hudson Soft",
  originalYear: 1996,
  genre: "action-adventure",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.0.0", date: "2026-03-22" },
  sources: ["https://github.com/RevoSucks/BM64Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  features: [
    "High framerate support",
    "Widescreen and ultrawide support",
    "Low input lag and instant load times",
    "Linux binary with documented Steam Deck support",
  ],
  featuresEs: [
    "Soporte de framerate alto",
    "Soporte panorámico y ultrapanorámico",
    "Baja latencia de entrada y tiempos de carga instantáneos",
    "Binario para Linux con soporte documentado para Steam Deck",
  ],
  notes:
    "Bomberman 64 rebuilt with N64: Recompiled. The repository and its releases contain no game assets, so the player must supply their own legally obtained game.",
  notesEs:
    "Bomberman 64 reconstruido con N64: Recompiled. El repositorio y sus releases no contienen recursos del juego, así que el jugador debe aportar su propio juego obtenido legalmente.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Bomberman%2064%20(USA).png",
    alt: "Bomberman 64 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Bomberman%2064%20(USA).png",
      alt: "Bomberman 64 (screenshot)",
      credit: "Libretro",
    },
  ],
};
