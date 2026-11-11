import type { Port } from "@/lib/ports/schema";

export const knackIiPc: Port = {
  "schema": "port",
  "id": "knack-ii-pc",
  "title": "Knack II (PC)",
  "game": "Knack II",
  "developers": [
    "Japan Studio"
  ],
  "publisher": "Sony Interactive Entertainment",
  "originalYear": 2017,
  "portType": "recompilation",
  "genre": "action-adventure",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "beta",
  "release": {
    "version": "0.18.3",
    "date": "2026-11-10"
  },
  "sources": [
    "https://github.com/Hyant4/Knack-II-pc-port"
  ],
  "license": {
    "spdx": "NOASSERTION",
    "note": "license not declared"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-10",
  "originalSystems": [
    "PlayStation 4"
  ],
  "summary": "Knack II is a 2017 action adventure game by Japan Studio, published by Sony Interactive Entertainment. This native port runs the game on PC or console hardware without an emulator.",
  "summaryEs": "Knack II es un videojuego de action adventure de 2017 de Japan Studio, publicado por Sony Interactive Entertainment. Este port nativo ejecuta el juego en PC o consola sin emulador.",
  "notes": "Native recompilation of Knack II. Bring your own game files; no game data is included. Latest release: knack2-Version-0.18.3.",
  "notesEs": "Recompilación nativa de Knack II. Aporta tus propios archivos del juego; no incluye datos del juego. Última release: knack2-Version-0.18.3.",
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
      "url": "https://github.com/Hyant4/Knack-II-pc-port/releases/download/knack2-Version-0.18.3/Knack-II-Windows-x64-V0.18.3.zip",
    },
    {
      "label": "Linux",
      "url": "https://github.com/Hyant4/Knack-II-pc-port/releases/download/knack2-Version-0.18.3/Knack-II-x86_64-0.18.3.AppImage",
    },
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/boxart/knack-ii-pc.jpg",
    "alt": "Knack II (PlayStation 4 box art)",
    "credit": "Wikipedia"
  }
};
