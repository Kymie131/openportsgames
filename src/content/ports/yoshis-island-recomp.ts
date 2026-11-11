import type { Port } from "@/lib/ports/schema";

export const yoshisIslandRecomp: Port = {
  "schema": "port",
  "id": "yoshis-island-recomp",
  "title": "Yoshi's Island Recomp",
  "game": "Super Mario World 2: Yoshi's Island",
  "developers": [
    "mpolizel"
  ],
  "publisher": "Nintendo",
  "originalYear": 1995,
  "portType": "recompilation",
  "genre": "platformer",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "alpha",
  "release": {
    "version": "0.1.2",
    "date": "2026-11-06"
  },
  "sources": [
    "https://github.com/mpolizel/SMW2Recomp"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Super Nintendo"
  ],
  "summary": "Super Mario World 2: Yoshi's Island is a 1995 platform game developed and published by Nintendo for the Super Nintendo. Yoshi carries Baby Mario through a hand-drawn world to rescue Baby Luigi.",
  "summaryEs": "Super Mario World 2: Yoshi's Island es un videojuego de plataformas de 1995 desarrollado y publicado por Nintendo para Super Nintendo. Yoshi lleva a Baby Mario por un mundo dibujado a mano para rescatar a Baby Luigi.",
  "notes": "Native recompilation of Super Mario World 2: Yoshi's Island (SNES) for Windows. Bring your own ROM; no game data is included. Latest release: v0.1.2.",
  "notesEs": "Recompilación nativa de Super Mario World 2: Yoshi's Island (SNES) para Windows. Aporta tu propia ROM; no incluye datos del juego. Última release: v0.1.2.",
  "features": [
    "Native Windows build.",
    "Static recompilation of the SNES game.",
    "Requires your own SNES ROM."
  ],
  "featuresEs": [
    "Build nativa para Windows.",
    "Recompilación estática del juego de SNES.",
    "Necesita tu propia ROM de SNES."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/mpolizel/SMW2Recomp/releases/download/v0.1.2/yoshisisland-0.1.2-windows-x64.zip",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/yoshis-island-recomp.jpg",
    alt: "Super Mario World 2: Yoshi's Island (Super Nintendo box art)",
    credit: "Wikipedia",
  },
};
