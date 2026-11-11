import type { Port } from "@/lib/ports/schema";

export const metroidSamusReturnsPc: Port = {
  "schema": "port",
  "id": "metroid-samus-returns-pc",
  "title": "Metroid: Samus Returns PC",
  "game": "Metroid: Samus Returns",
  "developers": [
    "MercurySteam"
  ],
  "publisher": "Nintendo",
  "originalYear": 2017,
  "portType": "recompilation",
  "genre": "action-adventure",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux",
    "macos",
    "android"
  ],
  "status": "beta",
  "release": {
    "version": "2.0.6",
    "date": "2026-11-10"
  },
  "sources": [
    "https://github.com/gminustwo/msr2ds"
  ],
  "license": {
    "spdx": "NOASSERTION",
    "note": "license not declared"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-10",
  "originalSystems": [
    "Nintendo 3DS"
  ],
  "summary": "Metroid: Samus Returns is a 2017 action adventure game by MercurySteam, published by Nintendo. This native port runs the game on PC or console hardware without an emulator.",
  "summaryEs": "Metroid: Samus Returns es un videojuego de action adventure de 2017 de MercurySteam, publicado por Nintendo. Este port nativo ejecuta el juego en PC o consola sin emulador.",
  "notes": "Native recompilation of Metroid: Samus Returns. Bring your own game files; no game data is included. Latest release: v2.0.6.",
  "notesEs": "Recompilación nativa de Metroid: Samus Returns. Aporta tus propios archivos del juego; no incluye datos del juego. Última release: v2.0.6.",
  "features": [
    "Native port.",
    "No emulator required.",
    "Requires your own game files."
  ],
  "featuresEs": [
    "Port nativo.",
    "No requiere emulador.",
    "Necesita tus propios archivos del juego."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/gminustwo/msr2ds/releases/download/v2.0.6/msr2ds-2.0.6-windows-x64.zip",
    },
    {
      "label": "Linux",
      "url": "https://github.com/gminustwo/msr2ds/releases/download/v2.0.6/msr2ds-2.0.6-x86_64.AppImage",
    },
    {
      "label": "macOS",
      "url": "https://github.com/gminustwo/msr2ds/releases/download/v2.0.6/msr2ds-2.0.6-macos-arm64.zip",
    },
    {
      "label": "Android",
      "url": "https://github.com/gminustwo/msr2ds/releases/download/v2.0.6/msr2ds-2.0.6-android-arm64.apk",
    },
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/generated/metroid-samus-returns-pc.svg",
    "alt": "Metroid: Samus Returns (Nintendo 3DS box art)",
    "credit": "OpenPortsGames"
  }
};
