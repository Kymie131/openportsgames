import type { Port } from "@/lib/ports/schema";

export const metroidPrimeHuntersRecompiled: Port = {
  schema: "port",
  id: "metroid-prime-hunters-recompiled",
  title: "Metroid Prime Hunters Recompiled",
  game: "Metroid Prime Hunters",
  developers: ["Nintendo Software Technology"],
  publisher: "Nintendo",
  originalYear: 2006,
  genre: "shooter",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.7.3-alpha", date: "2026-09-10" },
  sources: ["https://github.com/mstan/MetroidPrimeHuntersRecomp"],
  license: { spdx: "MIT" },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystems: ["Nintendo DS"],
  features: [
    "Windows and Linux (Steam Deck-ready AppImage) builds",
    "Dynamic widescreen plus 5:3, 2:1 and 21:9 modes",
    "Mouse/keyboard and remappable gamepad controls",
    "Experimental Wiimmfi online play",
  ],
  featuresEs: [
    "Builds para Windows y Linux (AppImage listo para Steam Deck)",
    "Panorámico dinámico más modos 5:3, 2:1 y 21:9",
    "Controles de ratón/teclado y mando reasignables",
    "Juego en línea experimental en Wiimmfi",
  ],
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/mstan/MetroidPrimeHuntersRecomp/main/docs/media/prime-hunters-video-preview.jpg",
      alt: "Metroid Prime Hunters gameplay frame from the project preview",
      credit: "Metroid Prime Hunters Recompiled",
    },
  ],
  summary: "Metroid Prime Hunters is a 2006 action-adventure game developed by Nintendo Software Technology and published by Nintendo for the Nintendo DS. It was released in North America in March 2006, with other territories later. The story takes place in between the events of Metroid Prime and Metroid Prime 2: Echoes. Players assume the role of series protagonist Samus Aran, who investigates a mysterious message that originated from the Alimbic Cluster and comes into contact with a legion of bounty hunters.",
  summaryEs: "Metroid Prime: Hunters es un videojuego de acción en primera persona para Nintendo DS y cuyos acontecimientos se dan entre Metroid Prime y Metroid Prime 2: Echoes. Fue desarrollado por Nintendo Software Technology, un equipo de desarrollo interno de Nintendo con base en Redmond, Washington. El juego fue lanzado el 20 de marzo de 2006 en Estados Unidos, y en mayo y junio en Europa y Japón, respectivamente.",
  notes:
    "Native recompilation of the Nintendo DS first-person shooter Metroid Prime Hunters, labeled by its author as a public alpha. Requires the player's own legally obtained copy of the game.",
  notesEs:
    "Recompilación nativa del shooter en primera persona Metroid Prime Hunters de Nintendo DS, calificada por su autor como alfa pública. Requiere la copia del juego obtenida legalmente por el jugador.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%20DS/Named_Boxarts/Metroid%20Prime%20-%20Hunters%20(Europe)%20(En,Fr,De,Es,It)%20(Rev%201).png",
    alt: "Metroid Prime Hunters (box art)",
    credit: "Box art",
  },
};
