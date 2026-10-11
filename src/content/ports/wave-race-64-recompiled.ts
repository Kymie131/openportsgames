import type { Port } from "@/lib/ports/schema";

export const waveRace64Recompiled: Port = {
  schema: "port",
  id: "wave-race-64-recompiled",
  title: "Wave Race 64 Recompiled",
  game: "Wave Race 64",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1996,
  genre: "racing",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "macos"],
  status: "beta",
  release: { version: "0.4.0-macos.3", date: "2026-09-07" },
  sources: ["https://github.com/elliotttate/wave-race-64-recomp"],
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "Windows x64 and Apple Silicon macOS builds",
    "Native D3D12 / Metal rendering with dynamic water",
    "High-definition texture mappings and re-recorded soundtrack",
    "Event-based controller haptics",
  ],
  featuresEs: [
    "Builds para Windows x64 y macOS Apple Silicon",
    "Renderizado nativo D3D12 / Metal con agua dinámica",
    "Mapeos de texturas en alta definición y banda sonora regrabada",
    "Respuesta háptica del mando basada en eventos",
  ],
  notes:
    "Native recompilation of Wave Race 64. The repository openly describes itself as an AI-coded port, which the catalog records as AI-assisted development. Requires the player's own legally obtained Wave Race 64 ROM.",
  notesEs:
    "Recompilación nativa de Wave Race 64. El repositorio se describe abiertamente como un port programado por IA, lo que el catálogo registra como desarrollo asistido por IA. Requiere la ROM de Wave Race 64 obtenida legalmente por el jugador.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Boxarts/Wave%20Race%2064%20-%20Kawasaki%20Jet%20Ski%20(USA).png",
    alt: "Wave Race 64 (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Nintendo%2064/Named_Snaps/Wave%20Race%2064%20-%20Kawasaki%20Jet%20Ski%20(USA).png",
      alt: "Wave Race 64 (screenshot)",
      credit: "Libretro",
    },
  ],
};
