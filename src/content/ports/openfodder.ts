import type { Port } from "@/lib/ports/schema";

export const openFodder: Port = {
  schema: "port",
  id: "openfodder",
  title: "OpenFodder",
  game: "Cannon Fodder",
  developers: ["OpenFodder Team"],
  publisher: "Virgin Interactive",
  originalYear: 1993,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows"],
  status: "beta",
  release: { version: "2.0.0", date: "2025-12-16" },
  sources: ["https://github.com/OpenFodder/openfodder"],
  discord: "https://discord.gg/4mX2wFM",
  license: { spdx: "GPL-3.0" },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["MS-DOS"],
  summary: "Cannon Fodder is a 1993 shoot 'em up video game developed by Sensible Software and published by Virgin Interactive Entertainment for the Amiga. Virgin later ported the game to MS-DOS, Atari ST, Acorn Archimedes, Atari Jaguar, Mega Drive, Super NES and 3DO. The game is military-themed and based on shooting action with squad-based tactics. The player directs troops through numerous missions, battling enemy infantry, vehicles, and installations.",
  summaryEs: "Cannon Fodder es un videojuego de estrategia publicado por Virgin Interactive en 1993.",
  notes:
    "Engine reimplementation for the Cannon Fodder series, supporting several of the original titles.",
  notesEs:
    "Reimplementación del motor de la saga Cannon Fodder, compatible con varios de los títulos originales.",
  screenshots: [
    {
      src: "https://user-images.githubusercontent.com/1327406/49718991-f1bd6e00-fcaf-11e8-88e3-68136828c2d1.png",
      alt: "image",
      credit: "OpenFodder",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/5e/Cannon_fodder_box_art.jpg",
    alt: "Cannon Fodder (box art)",
    credit: "Wikipedia",
  },
};
