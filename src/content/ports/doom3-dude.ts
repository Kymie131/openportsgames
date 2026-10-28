import type { Port } from "@/lib/ports/schema";

export const doom3Dude: Port = {
  schema: "port",
  id: "doom3-dude",
  title: "DUDE",
  game: "Doom 3",
  developers: ["id Software"],
  publisher: "Activision",
  originalYear: 2004,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.9.6", date: "2026-10-22" },
  sources: ["https://github.com/Inkub0/dude"],
  license: { spdx: "GPL-3.0-only" },
  verified: true,
  verifiedAt: "2026-10-27",
  originalSystems: ["Windows"],
  features: [
    "GL 3.3 and Vulkan backends with a legacy ARB path",
    "Ray-traced shadows, reflections and RTAO",
    "HDR, SSAO and FSR2 upscaling",
    "GPU tessellation and 60 FPS render interpolation",
  ],
  featuresEs: [
    "Backends GL 3.3 y Vulkan con una ruta ARB heredada",
    "Sombras, reflejos y RTAO con trazado de rayos",
    "HDR, SSAO y escalado FSR2",
    "Teselación por GPU e interpolación de renderizado a 60 FPS",
  ],
  summary: "Doom 3 is a 2004 first-person shooter survival horror game developed by id Software and published by Activision. It was originally released for Windows on August 3, 2004, before being adapted for Linux later that year, and ported by Aspyr Media for Mac OS X in 2005. Vicarious Visions ported the game to the Xbox, releasing it worldwide on April 4, 2005.",
  summaryEs: "Doom 3 es un videojuego de disparos en primera persona desarrollado por id Software y publicado por Activision. Existen versiones para Microsoft Windows, GNU/Linux, Mac OS X y para la videoconsola Xbox.",
  notes:
    "DUDE (Doom3 Unified Development Engine) updates the id Tech 4 Doom 3 engine with modern rendering, ray tracing and a Vulkan backend. The repository commits its tooling and discloses that development is AI-assisted. Requires the Doom 3 files the player owns.",
  notesEs:
    "DUDE (Doom3 Unified Development Engine) actualiza el motor Doom 3 de id Tech 4 con renderizado moderno, trazado de rayos y backend Vulkan. El repositorio publica su herramienta y declara que el desarrollo se apoya en IA. Requiere los archivos de Doom 3 que posea el jugador.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4e/Doom3box.jpg",
    alt: "Doom 3 (box art)",
    credit: "Wikipedia",
  },
};
