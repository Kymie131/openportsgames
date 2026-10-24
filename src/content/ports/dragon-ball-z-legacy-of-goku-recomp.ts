import type { Port } from "@/lib/ports/schema";

export const dragonBallZLegacyOfGokuRecomp: Port = {
  schema: "port",
  id: "dragon-ball-z-legacy-of-goku-recomp",
  title: "Dragon Ball Z: The Legacy of Goku Recompiled",
  game: "Dragon Ball Z: The Legacy of Goku",
  developers: ["mstan"],
  publisher: "Bandai",
  originalYear: 2002,
  genre: "rpg",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.0.2", date: "2026-08-03" },
  sources: ["https://github.com/mstan/DragonBallZLegacyOfGokuRecomp"],
  license: {
    spdx: "NOASSERTION",
    note: "No project-wide license file detected in the repository.",
  },
  verified: false,
  originalSystems: ["Game Boy Advance"],
  features: [
    "Static recompilation of the GBA executable",
    "Experimental preview: byproduct of the gbarecomp framework",
  ],
  featuresEs: [
    "Recompilación estática del ejecutable de GBA",
    "Vista previa experimental: subproducto del marco gbarecomp",
  ],
  summary: "Dragon Ball Z: The Legacy of Goku is an action role-playing video game for the Game Boy Advance, based on the anime series Dragon Ball Z and part of the Dragon Ball video game series, developed by Webfoot Technologies and released in 2002. The first part of the trilogy of the same name, it was released in North America on May 14, 2002 and in Europe on October 4, 2002, published by Infogrames. In it the player, as the protagonist Goku, faces various missions and fights along the plot of the first three seasons of the series, up to the Frieza Saga.",
  summaryEs: "Dragon Ball Z: El legado de Goku es un videojuego de rol de acción para Game Boy Advance basado en la serie original Dragon Ball Z. El juego fue lanzado al mercado en Norteamérica el 14 de mayo de 2002 y en Europa el 4 de octubre del mismo año. En algunos emuladores, el juego era incompatible debido a problemas de hardware.",
  notes:
    "Experimental recompilation. The player supplies their own legally obtained ROM; the repository ships no game content.",
  notesEs:
    "Recompilación experimental. El jugador aporta su propia ROM obtenida legalmente; el repositorio no incluye contenido del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Dragon%20Ball%20Z%20-%20The%20Legacy%20of%20Goku%20(USA).png",
    alt: "Dragon Ball Z: The Legacy of Goku (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Snaps/Dragon%20Ball%20Z%20-%20The%20Legacy%20of%20Goku%20(USA).png",
      alt: "Dragon Ball Z: The Legacy of Goku (screenshot)",
      credit: "Libretro",
    },
  ],
};
