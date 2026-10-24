import type { Port } from "@/lib/ports/schema";

export const trxPort: Port = {
  schema: "port",
  id: "trx",
  title: "TRX",
  game: "Tomb Raider I-III",
  developers: ["TRX Team"],
  publisher: "Core Design",
  originalYear: 1996,
  genre: "action-adventure",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.11.1", date: "2026-09-22" },
  sources: ["https://github.com/LostArtefacts/TRX"],
  website: "https://lostartefacts.dev/",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["MS-DOS"],
  features: [
    "Cross-platform desktop builds",
    "Modern renderer and audio",
    "Scripting and level editing support",
  ],
  featuresEs: [
    "Builds de escritorio multiplataforma",
    "Renderizado y audio modernos",
    "Soporte de scripting y edición de niveles",
  ],
  summary: "Tomb Raider III is an action-adventure video game developed by Core Design and published by Eidos Interactive. It was first released for PlayStation and Microsoft Windows in 1998, and for Mac OS in 1999. It is the third title in the Tomb Raider series, following Tomb Raider II (1997). The story follows archaeologist-adventurer Lara Croft as she embarks upon a quest to recover four pieces of a meteorite that are scattered across the world.",
  summaryEs: "Tomb Raider III es un videojuego de acción y aventura de disparos en tercera persona desarrollado por Core Design y distribuido por Eidos Interactive. Fue lanzado para las plataformas PlayStation y Microsoft Windows en 1998. Tomb Raider III es el tercer título de la serie Tomb Raider y una secuela de Tomb Raider II. La historia del juego sigue la arqueóloga y aventurera Lara Croft mientras se embarca en una búsqueda para recuperar cuatro piezas de un meteorito que están esparcidas por todo el mundo.",
  notes:
    "Engine reimplementation covering the classic Tomb Raider games. Original game assets are not distributed.",
  notesEs:
    "Reimplementación del motor que cubre los Tomb Raider clásicos. Los recursos del juego original no se distribuyen.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/LostArtefacts/TRX/master/docs/showcase/skybox.jpg",
      alt: "Tomb Raider with an improved skybox in TRX",
      credit: "LostArtefacts",
    },
    {
      src: "https://raw.githubusercontent.com/LostArtefacts/TRX/master/docs/showcase/braid.jpg",
      alt: "Lara in TRX",
      credit: "LostArtefacts",
    },
    {
      src: "https://raw.githubusercontent.com/LostArtefacts/TRX/master/docs/showcase/3d_pickups.jpg",
      alt: "3D pickups in TRX",
      credit: "LostArtefacts",
    },
    {
      src: "https://raw.githubusercontent.com/LostArtefacts/TRX/master/docs/showcase/photo_mode.webp",
      alt: "Photo mode in TRX",
      credit: "LostArtefacts",
    },
    {
      src: "https://raw.githubusercontent.com/LostArtefacts/TRX/master/docs/showcase/compass_stats.jpg",
      alt: "Compass and stats in TRX",
      credit: "LostArtefacts",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/69/Tomb_Raider_%281996%29.png",
    alt: "Tomb Raider I-III (cover)",
    credit: "Wikipedia",
  },
};
