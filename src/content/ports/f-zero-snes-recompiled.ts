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
  originalSystem: "Super Nintendo",
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
  notes:
    "Native recompilation of the Super Nintendo classic F-Zero. Requires the player's own legally dumped F-Zero ROM; the port also supports optional BS F-Zero Deluxe content and MSU-1 music expansions.",
  notesEs:
    "Recompilación nativa del clásico de Super Nintendo F-Zero. Requiere la ROM de F-Zero volcada legalmente por el jugador; el port también admite contenido opcional de BS F-Zero Deluxe y expansiones musicales MSU-1.",
};
