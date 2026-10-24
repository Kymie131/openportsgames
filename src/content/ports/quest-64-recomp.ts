import type { Port } from "@/lib/ports/schema";

export const quest64Recomp: Port = {
  schema: "port",
  id: "quest-64-recomp",
  title: "Quest 64 Recompiled",
  game: "Quest 64",
  developers: ["Nintendo"],
  publisher: "Nintendo",
  originalYear: 1998,
  genre: "action-adventure",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.1", date: "2026-01-11" },
  sources: ["https://github.com/Rainchus/Quest64-Recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystems: ["Nintendo 64"],
  features: ["Widescreen and ultrawide support", "Mod support"],
  featuresEs: ["Soporte panorámico y ultrapanorámico", "Soporte de mods"],
  requirements: {
    minimum: "x86-64 CPU with SSE4.1, such as an Intel Core 2 Penryn or newer",
  },
  summary: "Quest 64 is a role-playing video game (RPG) developed by Imagineer for the Nintendo 64. It was released in North America in June 1998 by THQ, Europe in September 1998 by Konami and Japan in July 1999 by Imagineer. It is the first role-playing video game released for the system in North America.",
  summaryEs: "Holy Magic Century lanzado como Quest 64 es un RPG de acción controlando un único personaje desarrollado por Imagineer y distribuido por THQ. Fue lanzado para Nintendo 64 en 1998 en Norteamérica y Europa, y Japón en 1999 bajo el título Eltale Monsters. El lanzamiento fue bastante ignorado debido principalmente al lanzamiento cercano de The Legend of Zelda: Ocarina of Time. La historia del juego ocurre en un mundo de fantasía donde el personaje controlado por el jugador es un aprendiz de mago llamado Ayron.",
  notes:
    "Recompilation of Quest 64 that requires the 1.0 North American release of the game. Only a Windows executable is published so far, with other systems announced. Very wide aspect ratios can show animation artifacts at the screen edges.",
  notesEs:
    "Recompilación de Quest 64 que requiere la versión 1.0 norteamericana del juego. Por ahora solo se publica un ejecutable para Windows, con otros sistemas anunciados. Las relaciones de aspecto muy anchas pueden mostrar artefactos de animación en los bordes de la pantalla.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Quest%2064%20(USA).png",
    alt: "Quest 64 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Quest%2064%20(USA).png",
      alt: "Quest 64 (screenshot)",
      credit: "Libretro",
    },
  ],
};
