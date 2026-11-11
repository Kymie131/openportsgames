import type { Port } from "@/lib/ports/schema";

export const whoppingRecompilationCollection: Port = {
  schema: "port",
  id: "whopping-recompilation-collection",
  title: "Whopping Recompilation Collection",
  game: "Sneak King / Big Bumpin' / PocketBike Racer",
  developers: ["TekRantGaming"],
  publisher: "King Games",
  originalYear: 2006,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "1.0.8", date: "2026-10-31" },
  sources: ["https://github.com/TekRantGaming/whopping-recompilation-collection"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox 360"],
  summary:
    "Sneak King, Big Bumpin' and PocketBike Racer are three 2006 promotional games published by King Games and sold at Burger King. They star the King mascot in stealth, bumper-car and pocket-bike challenges.",
  summaryEs:
    "Sneak King, Big Bumpin' y PocketBike Racer son tres juegos promocionales de 2006 publicados por King Games y vendidos en Burger King. Protagonizados por el Rey en desafíos de sigilo, coches de choque y minimotos.",
  notes:
    "Native PC ports of the three Xbox 360 games via static recompilation, bundled in one launcher. It requires your own copies of the games.",
  notesEs:
    "Ports nativos para PC de los tres juegos de Xbox 360 mediante recompilación estática, reunidos en un solo lanzador. Requiere tus propias copias de los juegos.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/TekRantGaming/whopping-recompilation-collection/releases/download/v1.0.8/WhoppingCollection-v1.0.8-windows-x64.zip",
      size: "46.9 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/TekRantGaming/whopping-recompilation-collection/releases/download/v1.0.8/WhoppingCollection-v1.0.8-linux-x86_64.AppImage",
      size: "35.4 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/da/Sneakkingbox.jpg",
    alt: "Sneak King (box art)",
    credit: "Wikipedia",
  },
};
