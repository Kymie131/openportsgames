import type { Port } from "@/lib/ports/schema";

export const freeserfNet: Port = {
  schema: "port",
  id: "freeserf-net",
  title: "Freeserf.net",
  game: "The Settlers",
  developers: ["Pyrdacor"],
  publisher: "Blue Byte",
  originalYear: 1993,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "2.2.11", date: "2026-10-20" },
  sources: ["https://github.com/Pyrdacor/freeserf.net"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Amiga", "MS-DOS"],
  summary:
    "The Settlers is a real-time strategy and city-building game developed and published by Blue Byte in 1993. Players expand a medieval settlement by managing resources, roads and military outposts.",
  summaryEs:
    "The Settlers es un juego de estrategia en tiempo real y construcción de ciudades desarrollado y publicado por Blue Byte en 1993. El jugador expande un asentamiento medieval gestionando recursos, caminos y puestos militares.",
  downloads: [
    {
      label: "macOS DMG",
      url: "https://github.com/Pyrdacor/freeserf.net/releases/download/v2.2.11/Freeserf.dmg",
      size: "144.5 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/Pyrdacor/freeserf.net/releases/download/v2.2.11/Freeserf.net-Linux.tar.gz",
      size: "81.0 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/Pyrdacor/freeserf.net/releases/download/v2.2.11/Freeserf.net-Windows.zip",
      size: "82.0 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/freeserf-net.svg",
    alt: "The Settlers (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Freeserf.net is an open-source Settlers 1 clone written in C#. It requires the original game data and supports local network multiplayer.",
  notesEs:
    "Freeserf.net es un clon de código abierto de Settlers 1 escrito en C#. Requiere los datos originales del juego y admite multijugador en red local.",
};
