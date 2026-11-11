import type { Port } from "@/lib/ports/schema";

export const katawaShoujoGba: Port = {
  schema: "port",
  id: "katawa-shoujo-gba",
  title: "Katawa Shoujo (GBA)",
  game: "Katawa Shoujo",
  developers: ["neparij"],
  publisher: "Four Leaf Studios",
  originalYear: 2012,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["gba"],
  status: "beta",
  release: { version: "0.4.11-workflow", date: "2025-08-31" },
  sources: ["https://github.com/neparij/katawa-shoujo-agb"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  downloads: [
    {
      label: "Gba",
      url: "https://github.com/neparij/katawa-shoujo-agb/releases/download/v0.4.11-workflow/katawa.0.4.11-85dd94a-html5.zip",
      size: "21.2 MB",
    },
  ],
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/3068300/header.jpg",
    alt: "Katawa Shoujo (cover art)",
    credit: "Steam",
  },
  summary: "Katawa Shoujo is a romantic visual novel set in the fictional Japanese Yamaku High School for disabled children. Hisao's congenital heart defect forces him to move to a new school. Despite his difficulties, Hisao is able to find friends—and perhaps love, if he plays his cards right.",
  summaryEs: "Katawa Shoujo es un videojuego de acción y aventura publicado por Four Leaf Studios en 2024.",
  notes: "Katawa Shoujo (Four Leaf Studios, 2012) running on gba through source port. Latest release: v0.4.11-workflow. You need your own copy of the game.",
  notesEs: "Katawa Shoujo (Four Leaf Studios, 2012) en gba mediante port de código. Última release: v0.4.11-workflow. Necesitas tu propia copia del juego.",
};
