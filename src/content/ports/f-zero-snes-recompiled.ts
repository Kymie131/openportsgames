import type { Port } from "@/lib/ports/schema";

export const fZeroSnesRecompiled: Port = {
  schema: "port",
  id: "f-zero-snes-recompiled",
  title: "F-Zero SNES Recompiled",
  game: "F-Zero",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1990,
  genre: "racing",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.8.3", date: "2026-09-22" },
  sources: ["https://github.com/mstan/FZeroSNESRecomp"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-22",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/mstan/FZeroSNESRecomp/main/docs/screenshots/bs-forest-iii-race-21x9.png",
      alt: "The F-Zero pilot racing an X cockpit around Forest III in 21:9 ultrawide",
      credit: "F-Zero SNES Recompiled",
    },
    {
      src: "https://raw.githubusercontent.com/mstan/FZeroSNESRecomp/main/docs/screenshots/widescreen-title.png",
      alt: "The F-Zero title screen rendered in widescreen",
      credit: "F-Zero SNES Recompiled",
    },
    {
      src: "https://raw.githubusercontent.com/mstan/FZeroSNESRecomp/main/docs/screenshots/bs-blue-thunder.png",
      alt: "BS F-Zero Blue Thunder title screen, an exclusive race league",
      credit: "F-Zero SNES Recompiled",
    },
    {
      src: "https://raw.githubusercontent.com/mstan/FZeroSNESRecomp/main/docs/screenshots/bs-forest-iii-race.png",
      alt: "Racing on the Forest III course from BS F-Zero in 16:9",
      credit: "F-Zero SNES Recompiled",
    },
  ],
  originalSystems: ["Super Nintendo"],
  features: [
    "Widescreen up to 32:9 with optional HD Mode 7 rendering",
    "60-360 FPS high refresh rate presentation",
    "Save states with thumbnails and rewind",
    "CRT/LCD shaders and MSU-1 music packs",
  ],
  featuresEs: [
    "Panorámico de hasta 32:9 con renderizado HD Mode 7 opcional",
    "Presentación a 60-360 FPS de refresco alto",
    "Estados de guardado con miniaturas y rebobinado",
    "Shaders CRT/LCD y paquetes de música MSU-1",
  ],
  summary: "F-Zero is a 1990 racing game developed and published by Nintendo for the Super Nintendo Entertainment System (SNES). It was released in Japan on November 21, 1990, in North America in August 1991, and in Europe in 1992. F-Zero is the first game in the F-Zero series and was a launch game for the SNES. F-Zero has been rereleased for the Virtual Console and Nintendo Classics services on various Nintendo platforms, and as part of the Super NES Classic Edition in 2017.",
  summaryEs: "F-Zero es un videojuego de carreras futurístico desarrollado por Nintendo EAD y publicado por Nintendo para la consola Super Nintendo Entertainment System (SNES). El juego fue lanzado en Japón el 21 de noviembre de 1990, en Estados Unidos el 23 de agosto de 1991 y en Europa el 4 de junio de 1992. F-Zero es el primer título de la serie del mismo nombre y fue uno de los dos principales títulos de lanzamiento de la SNES en Japón, pero también estuvo acompañado de otros juegos durante el lanzamiento de la consola en Estados Unidos y Europa.",
  notes:
    "Native recompilation of the Super Nintendo classic F-Zero. Requires the player's own legally dumped F-Zero ROM; the port also supports optional BS F-Zero Deluxe content and MSU-1 music expansions.",
  notesEs:
    "Recompilación nativa del clásico de Super Nintendo F-Zero. Requiere la ROM de F-Zero volcada legalmente por el jugador; el port también admite contenido opcional de BS F-Zero Deluxe y expansiones musicales MSU-1.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/F-Zero%20(Europe).png",
    alt: "F-Zero (box art)",
    credit: "Box art",
  },
};
