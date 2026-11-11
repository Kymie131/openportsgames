import type { Port } from "@/lib/ports/schema";

export const openRct2: Port = {
  schema: "port",
  id: "openrct2",
  title: "OpenRCT2",
  game: "RollerCoaster Tycoon 2",
  developers: ["Chris Sawyer Productions"],
  publisher: "Infogrames",
  originalYear: 2002,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "0.5.6", date: "2026-10-10" },
  sources: ["https://github.com/OpenRCT2/OpenRCT2"],
  website: "https://openrct2.org/",
  license: {
    spdx: "GPL-3.0",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  screenshots: [
    {
      src: "https://github.com/user-attachments/assets/fa893cc8-1484-4751-94be-4ead00a6c8f9",
      alt: "A park scene from the OpenRCT2 title sequence",
      credit: "OpenRCT2",
    },
  ],
  summary: "RollerCoaster Tycoon 2 is a 2002 construction and management simulation game developed by Chris Sawyer and published by Infogrames. Released for Windows as the sequel to RollerCoaster Tycoon, the game simulates the management of amusement parks.",
  summaryEs: "RollerCoaster Tycoon 2 es un videojuego de estrategia empresarial y construcción y gestión publicado el 15 de octubre de 2002. Fue desarrollado por el programador y diseñador Chris Sawyer, el grafista Simon Foster y el compositor Allister Brimble y publicado por Infogrames, más tarde conocida como Atari). franquicia estadounidense de parques temáticos. Una de las nuevas atracciones que incluía, es la Montaña rusa 4ª dimensión. Hubo dos expansiones para esta secuela: Wacky Worlds y Time Twister. Ambas incluían nuevos elementos, escenarios y atracciones.",
  notes:
    "Open source reimplementation of RollerCoaster Tycoon 2, expanding the original. Requires the original RCT2 game files.",
  notesEs:
    "Reimplementación de código abierto de RollerCoaster Tycoon 2 que amplía el original. Requiere los archivos del juego original de RCT2.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.5.7/OpenRCT2-v0.5.7-android.apk",
      size: "207.1 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.5.7/OpenRCT2-v0.5.7-Linux-bookworm-x86_64.tar.gz",
      size: "83.4 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.5.7/OpenRCT2-v0.5.7-Linux-noble-x86_64.tar.gz",
      size: "83.5 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.5.7/OpenRCT2-v0.5.7-Linux-resolute-x86_64.tar.gz",
      size: "83.9 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.5.7/OpenRCT2-v0.5.7-Linux-trixie-x86_64.tar.gz",
      size: "83.2 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/OpenRCT2/OpenRCT2/releases/download/v0.5.7/OpenRCT2-v0.5.7-linux-x86_64.AppImage",
      size: "98.5 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e4/RollerCoaster_Tycoon_2_%28boxart%29.jpg",
    alt: "RollerCoaster Tycoon 2 (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["Windows"],
};
