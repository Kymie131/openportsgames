import type { Port } from "@/lib/ports/schema";

export const openTtd: Port = {
  schema: "port",
  id: "openttd",
  title: "OpenTTD",
  game: "Transport Tycoon Deluxe",
  developers: ["Chris Sawyer"],
  publisher: "MicroProse",
  originalYear: 1994,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "15.3", date: "2026-04-04" },
  sources: ["https://github.com/OpenTTD/OpenTTD"],
  website: "https://www.openttd.org/",
  license: {
    spdx: "GPL-2.0-or-later",
    note: "repository metadata lists NOASSERTION; the project states GPL-2.0-or-later",
  },
  verified: true,
  verifiedAt: "2026-09-19",
  noOriginalGameRequired: true,
  screenshots: [
    {
      src: "https://www.openttd.org/screenshots/1.4-02-opengfx-1920x1200.png",
      alt: "The OpenTTD 1.4 title screen with the free OpenGFX graphics",
      credit: "OpenTTD",
    },
    {
      src: "https://www.openttd.org/screenshots/1.9-group-liveries.png",
      alt: "Company colours applied per train group showcase in OpenTTD 1.9",
      credit: "OpenTTD",
    },
    {
      src: "https://www.openttd.org/screenshots/1.4-cargodist.png",
      alt: "CargoDist routing cargo through rail, road and air connections",
      credit: "OpenTTD",
    },
    {
      src: "https://www.openttd.org/screenshots/1.9-industry_trams.png",
      alt: "A snowy industrial region crowded with industries and trams",
      credit: "OpenTTD",
    },
  ],
  summary: "Transport Tycoon is a business simulation game designed and programmed by Chris Sawyer for MS-DOS. It was published by MicroProse in November 1994. Using an isometric 2D view with graphics by Simon Foster, the player acts as a transport company owner, who competes against rival companies to make as much profit as possible by transporting passengers and various goods by road, rail, sea, and air.",
  summaryEs: "Transport Tycoon Deluxe es un videojuego de simulación publicado por MicroProse en 1994.",
  notes:
    "Open source simulation game based on Transport Tycoon Deluxe. Ships with the freely redistributable OpenGFX graphics, so no original game data is required.",
  notesEs:
    "Juego de simulación de código abierto basado en Transport Tycoon Deluxe. Incluye los gráficos OpenGFX de redistribución libre, así que no requiere datos del juego original.",
  installGuide: {
    steps: [
      "Install OpenTTD from the official site; the game runs out of the box with the free OpenGFX graphics.",
      "Optional: for the classic Transport Tycoon Deluxe look, point the graphics and sound settings at a copy of the original game data if you own it.",
      "Launch the game and start a new scenario; the original assets are used automatically when present.",
    ],
    stepsEs: [
      "Instala OpenTTD desde el sitio oficial; el juego funciona directamente con los gráficos libres OpenGFX.",
      "Opcional: para el aspecto clásico de Transport Tycoon Deluxe, señala en los ajustes de gráficos y sonido una copia de los datos originales del juego si la posees.",
      "Lanza el juego y comienza una nueva partida; los recursos originales se usan automáticamente cuando están presentes.",
    ],
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/7/7f/Transport_Tycoon_Coverart.jpg",
    alt: "Transport Tycoon Deluxe (box art)",
    credit: "Wikipedia",
  },
  originalSystems: ["MS-DOS","Amiga"],
};
