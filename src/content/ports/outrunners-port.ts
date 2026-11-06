import type { Port } from "@/lib/ports/schema";

export const outrunnersPort: Port = {
  "schema": "port",
  "id": "outrunners-port",
  "title": "OutRunners Port",
  "game": "OutRunners",
  "developers": [
    "cheviman"
  ],
  "publisher": "Sega",
  "originalYear": 1992,
  "portType": "decompilation",
  "genre": "racing",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux",
    "macos"
  ],
  "status": "stable",
  "release": {
    "version": "1.1.3",
    "date": "2026-11-06"
  },
  "sources": [
    "https://github.com/cheviman/outrunners-port"
  ],
  "license": {
    "spdx": "BSD-3-Clause"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-06",
  "originalSystems": [
    "Arcade"
  ],
  "summary": "OutRunners is a 1992 arcade racing game developed and published by Sega. It is a two-player-capable sequel to OutRun with multiple routes and cars.",
  "summaryEs": "OutRunners es un juego de carreras de arcade de 1992 desarrollado y publicado por Sega. Es una secuela de OutRun para dos jugadores con múltiples rutas y coches.",
  "notes": "Native PC and console port of OutRunners built on the verified C decompilation, with Windows, Linux and macOS builds. Bring your own arcade ROM; no game data is included. Latest release: v1.1.3.",
  "notesEs": "Port nativo para PC y consolas de OutRunners construido sobre la descompilación en C verificada, con builds para Windows, Linux y macOS. Aporta tu propia ROM de arcade; no incluye datos del juego. Última release: v1.1.3.",
  "features": [
    "Native Windows, Linux and macOS builds.",
    "Built on the verified C decompilation.",
    "Requires your own arcade ROM."
  ],
  "featuresEs": [
    "Builds nativas para Windows, Linux y macOS.",
    "Construido sobre la descompilación en C verificada.",
    "Necesita tu propia ROM de arcade."
  ],
  "downloads": [
    {
      "label": "Windows x64",
      "url": "https://github.com/cheviman/outrunners-port/releases/download/v1.1.3/outrunners-windows-x64.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux x64",
      "url": "https://github.com/cheviman/outrunners-port/releases/download/v1.1.3/outrunners-linux-x64.tar.gz",
      "note": "Linux · x64"
    },
    {
      "label": "macOS universal",
      "url": "https://github.com/cheviman/outrunners-port/releases/download/v1.1.3/outrunners-macos-universal.zip",
      "note": "macOS · universal"
    }
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/generated/outrunners-port.svg",
    "alt": "OutRunners (generated cover)",
    "credit": "OpenPortsGames"
  }
};
