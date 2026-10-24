import type { Port } from "@/lib/ports/schema";

export const doom64ExPlus: Port = {
  schema: "port",
  id: "doom64-ex-plus",
  title: "Doom 64 EX Plus",
  game: "Doom 64",
  developers: ["atsb"],
  publisher: "Midway Games",
  originalYear: 1997,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "stable",
  release: { version: "5.2.0.0", date: "2025-10-20" },
  sources: ["https://github.com/atsb/Doom64EX-Plus"],
  license: {
    spdx: "NOASSERTION",
    note: "custom Limited Use Software License in COPYING",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["Nintendo 64"],
  features: [
    "Source-based Doom 64 expansion",
    "Rerelease of the original maps plus new content",
    "Modern lighting and widescreen support",
  ],
  featuresEs: [
    "Expansión de Doom 64 basada en código fuente",
    "Reedición de los mapas originales más contenido nuevo",
    "Iluminación moderna y soporte panorámico",
  ],
  summary: "Doom 64 is a 1997 first-person shooter game developed and published by Midway Games for the Nintendo 64. It is the second spin-off in id Software's Doom series after Final Doom (1996), and the fourth game in the series overall.",
  summaryEs: "Doom 64 es un videojuego de disparos en primera persona desarrollado y publicado por Midway Games para Nintendo 64 en 1997. Este videojuego pertenece a la serie de videojuegos de shooter en primera persona Doom. En un principio se lanzó exclusivamente para la Nintendo 64 pero se lanzó para PlayStation 4, Xbox One y PC y luego se relanzó para Nintendo Switch, como una mejora en varios aspectos a la versión original basada en las anteriores videoconsolas.",
  notes:
    "Complete source port of Doom 64. The project is archived on GitHub and its license is a custom Limited Use Software License, so the terms are not an OSI license. The upstream repository is archived (read-only).",
  notesEs:
    "Port de código fuente completo de Doom 64. El proyecto está archivado en GitHub y su licencia es una Limited Use Software License propia, por lo que sus términos no son una licencia OSI. El repositorio original está archivado (solo lectura).",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Doom%2064%20(USA).png",
    alt: "Doom 64 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Doom%2064%20(USA).png",
      alt: "Doom 64 (screenshot)",
      credit: "Libretro",
    },
  ],
};
