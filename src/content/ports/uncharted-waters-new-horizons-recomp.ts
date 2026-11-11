import type { Port } from "@/lib/ports/schema";

export const unchartedWatersNewHorizonsRecomp: Port = {
  schema: "port",
  id: "uncharted-waters-new-horizons-recomp",
  title: "Uncharted Waters: New Horizons (Recomp)",
  game: "Uncharted Waters: New Horizons",
  developers: ["Junior-Jones"],
  publisher: "Koei",
  originalYear: 1994,
  portType: "recompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.0.0", date: "2026-11-03" },
  sources: [
    "https://github.com/Junior-Jones/Uncharted-Waters-New-Horizons-SNES-Static-Recomp",
  ],
  license: { spdx: "Zlib" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Super Nintendo"],
  summary:
    "Uncharted Waters: New Horizons is a 1994 seafaring simulation and role-playing game by Koei for the Super Nintendo. Players choose a captain and explore, trade and fight across the Age of Discovery.",
  summaryEs:
    "Uncharted Waters: New Horizons es un juego de simulación marítima y rol de 1994 de Koei para Super Nintendo. El jugador elige un capitán y explora, comercia y combate durante la Era de los Descubrimientos.",
  notes:
    "Static recompilation of the SNES game for Windows 10 and 11. The ROM is not included; you must supply your own copy.",
  notesEs:
    "Recompilación estática del juego de SNES para Windows 10 y 11. No incluye la ROM; debes aportar tu propia copia.",
  downloads: [
    {
      label: "Windows x64",
      url: "https://github.com/Junior-Jones/Uncharted-Waters-New-Horizons-SNES-Static-Recomp/releases/download/v1.0.0/Uncharted-Waters-New-Horizons-1.0.0-Windows-x64.zip",
      size: "9.8 MB",
    },
    {
      label: "Source code",
      url: "https://github.com/Junior-Jones/Uncharted-Waters-New-Horizons-SNES-Static-Recomp/releases/download/v1.0.0/Uncharted-Waters-New-Horizons-1.0.0-Source.zip",
      size: "44 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Super%20Nintendo%20Entertainment%20System/Named_Boxarts/Daikoukai%20Jidai%20II%20(Japan).png",
    alt: "Uncharted Waters: New Horizons (box art)",
    credit: "libretro",
  },
};
