import type { Port } from "@/lib/ports/schema";

export const hookshot: Port = {
  "schema": "port",
  "id": "hookshot",
  "title": "Hookshot",
  "game": "The Legend of Zelda: Ocarina of Time",
  "developers": [
    "NotRexed"
  ],
  "publisher": "Nintendo",
  "originalYear": 2026,
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
    "version": "2.0.11",
    "date": "2026-11-09"
  },
  "sources": [
    "https://github.com/NotRexed/Hookshot"
  ],
  "license": {
    "spdx": "GPL-3.0"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Nintendo Switch 2"
  ],
  "summary": "The Legend of Zelda: Ocarina of Time is the Switch 2 remake of the 1998 Nintendo 64 classic. Link travels through time to stop Ganondorf and save Hyrule.",
  "summaryEs": "The Legend of Zelda: Ocarina of Time es el remake para Switch 2 del clásico de Nintendo 64 de 1998. Link viaja en el tiempo para detener a Ganondorf y salvar Hyrule.",
  "notes": "Native recompilation of the Ocarina of Time Nintendo Switch 2 remake for Windows and Linux. Hookshot builds the game from your own copy; no game files are included. Latest release: v2.0.11.",
  "notesEs": "Recompilación nativa del remake de Ocarina of Time para Nintendo Switch 2, para Windows y Linux. Hookshot compila el juego desde tu propia copia; no incluye archivos del juego. Última release: v2.0.11.",
  "features": [
    "Native Windows and Linux builds.",
    "Builds from your own Switch 2 game copy.",
    "No game files included."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux.",
    "Compila desde tu propia copia de Switch 2.",
    "No incluye archivos del juego."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/NotRexed/Hookshot/releases/download/v2.0.11/HookshotBuilder.exe",
    },
    {
      "label": "Linux",
      "url": "https://github.com/NotRexed/Hookshot/releases/download/v2.0.11/Hookshot-v2.0.11-x86_64.AppImage",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/hookshot.jpg",
    alt: "The Legend of Zelda: Ocarina of Time (Nintendo Switch 2 box art)",
    credit: "Box art",
  },
};
