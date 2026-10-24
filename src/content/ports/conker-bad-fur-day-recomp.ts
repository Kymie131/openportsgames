import type { Port } from "@/lib/ports/schema";

export const conkerBadFurDayRecomp: Port = {
  schema: "port",
  id: "conker-bad-fur-day-recomp",
  title: "Conker's Bad Fur Day Recompiled",
  game: "Conker's Bad Fur Day",
  developers: ["Rare"],
  publisher: "Rare",
  originalYear: 2001,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.1.6", date: "2026-10-13" },
  sources: ["https://github.com/sciaschi/CBFD-Recompiled"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-10-14",
  originalSystems: ["Nintendo 64"],
  features: [
    "RT64 renderer with higher resolutions, widescreen and anti-aliasing",
    "High frame-rate presentation",
    "Remappable controller and keyboard controls with rumble",
    "Mod support through .nrm function patches and hooks",
  ],
  featuresEs: [
    "Renderizador RT64 con resoluciones mayores, panorámico y antialiasing",
    "Presentación a framerate alto",
    "Controles de mando y teclado reasignables con vibración",
    "Soporte de mods mediante parches de función .nrm y hooks",
  ],
  summary: "Conker's Bad Fur Day is a 2001 platform game developed by Rare for the Nintendo 64. It is the second installment in the Conker series, after Conker's Pocket Tales (1999). The game follows Conker, a greedy, hard-drinking red squirrel who must return home to his girlfriend, Berri, after an evening of heavily drinking at the local pub. Most of the game requires the player to complete a linear sequence of challenges that involve jumping over obstacles, solving puzzles, and fighting enemies. In the multiplayer mode, up to four players can compete against each other in seven different game types.",
  summaryEs: "Conker's Bad Fur Day es un videojuego de plataformas de 2001 desarrollado y publicado por Rare para Nintendo 64. La historia sigue a Conker, una ardilla roja codiciosa y alcohólica que debe regresar a su casa con su novia Berry. La mayor parte del juego requiere que el jugador complete una secuencia lineal de desafíos que implican saltar obstáculos, resolver acertijos y luchar contra enemigos. También se incluye un modo multijugador en el que hasta cuatro jugadores pueden competir entre sí en siete tipos de juegos diferentes.",
  notes:
    "Static recompilation of Conker's Bad Fur Day (N64, USA) with N64Recomp, starting from the mkst decompilation. Playable from start to finish, with full audio (voice acting included), bundled mods (skip intro, skip any cutscene and cheats) and texture packs.",
  notesEs:
    "Recompilación estática de Conker's Bad Fur Day (N64, USA) con N64Recomp, partiendo de la decompilación de mkst. Jugable de principio a fin, con audio completo (incluidas las voces), mods incluidos (saltar intro, saltar cinemáticas y trucos) y texture packs.",
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/abb979d7-24a5-44f8-98d3-088ba2054a74",
      alt: "image",
      credit: "sciaschi",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Conker's%20Bad%20Fur%20Day%20(Europe).png",
    alt: "Conker's Bad Fur Day (box art)",
    credit: "Box art",
  },
};
