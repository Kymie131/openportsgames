import type { Port } from "@/lib/ports/schema";

export const nuggetDoom: Port = {
  schema: "port",
  id: "nugget-doom",
  title: "Nugget Doom",
  game: "Doom",
  developers: ["MrAlaux"],
  publisher: "id Software",
  originalYear: 1993,
  genre: "shooter",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "6.0.1", date: "2026-09-09" },
  sources: ["https://github.com/MrAlaux/Nugget-Doom"],
  license: { spdx: "GPL-2.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystem: "MS-DOS",
  features: [
    "Modern renderer with shadows and reflections",
    "Extensive modding and scripting support",
  ],
  featuresEs: [
    "Renderizador moderno con sombras y reflejos",
    "Amplio soporte de modding y scripting",
  ],
  notes: "Cross-platform Doom source port with a modern renderer and a focus on extensibility.",
  notesEs:
    "Port de código fuente de Doom multiplataforma con un renderizador moderno y enfoque en la extensibilidad.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/MrAlaux/Nugget-Doom/master/data/nugget-doom.png",
      alt: "Nugget Doom Icon",
      credit: "MrAlaux",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/57/Doom_cover_art.jpg",
    alt: "Doom (box art)",
    credit: "Wikipedia",
  },
};
