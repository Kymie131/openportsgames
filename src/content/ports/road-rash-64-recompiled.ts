import type { Port } from "@/lib/ports/schema";

export const roadRash64Recompiled: Port = {
  schema: "port",
  id: "road-rash-64-recompiled",
  title: "Road Rash 64 Recompiled",
  game: "Road Rash 64",
  developers: ["Pacific Coast Power & Light"],
  publisher: "THQ",
  originalYear: 1999,
  genre: "racing",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: "1.3.1", date: "2026-09-19" },
  sources: ["https://github.com/linkssy2/RoadRash64Recompiled"],
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "60 FPS presentation with a 30-240 FPS slider",
    "Widescreen 16:9 and 21:9 support with draw distance slider",
    "Custom music rotation and 52 local achievements",
    "Split-screen and experimental online multiplayer",
  ],
  featuresEs: [
    "Presentación a 60 FPS con deslizador de 30-240 FPS",
    "Soporte panorámico 16:9 y 21:9 con deslizador de distancia de dibujado",
    "Rotación de música personalizada y 52 logros locales",
    "Pantalla dividida y multijugador en línea experimental",
  ],
  notes:
    "Native recompilation of Road Rash 64. The README discloses that AI was used extensively during development, including code changes, debugging and launcher artwork. Requires the player's own legally obtained ROM.",
  notesEs:
    "Recompilación nativa de Road Rash 64. El README declara que se usó IA de forma extensiva durante el desarrollo, incluidos cambios de código, depuración y arte del lanzador. Requiere la ROM obtenida legalmente por el jugador.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Road%20Rash%2064%20(USA).png",
    alt: "Road Rash 64 (box art)",
    credit: "Box art",
  },
};
