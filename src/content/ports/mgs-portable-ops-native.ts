import type { Port } from "@/lib/ports/schema";

export const mgsPortableOpsNative: Port = {
  "schema": "port",
  "id": "mgs-portable-ops-native",
  "title": "Metal Gear Solid: Portable Ops Native",
  "game": "Metal Gear Solid: Portable Ops",
  "developers": [
    "zexk"
  ],
  "publisher": "Konami",
  "originalYear": 2006,
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
    "version": "0.1.0-rc1",
    "date": "2026-11-08"
  },
  "sources": [
    "https://github.com/zexk/portable-ops-native"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "PlayStation Portable"
  ],
  "summary": "Metal Gear Solid: Portable Ops is a 2006 stealth action game developed by Kojima Productions and published by Konami for the PSP. Big Boss builds a resistance force in Colombia.",
  "summaryEs": "Metal Gear Solid: Portable Ops es un videojuego de acción y sigilo de 2006 desarrollado por Kojima Productions y publicado por Konami para PSP. Big Boss forma una fuerza de resistencia en Colombia.",
  "notes": "Native PC port of Metal Gear Solid: Portable Ops for Windows and Linux. Bring your own PSP game files; no game data is included. Latest release: v0.1.0-rc1.",
  "notesEs": "Port nativo para PC de Metal Gear Solid: Portable Ops para Windows y Linux. Aporta tus propios archivos de PSP; no incluye datos del juego. Última release: v0.1.0-rc1.",
  "features": [
    "Native Windows and Linux builds.",
    "Rebuilt from the PSP game.",
    "Requires your own PSP game files."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux.",
    "Reconstruido desde el juego de PSP.",
    "Necesita tus propios archivos de PSP."
  ],
  "downloads": [
    {
      "label": "Windows x64",
      "url": "https://github.com/zexk/portable-ops-native/releases/download/v0.1.0-rc1/PortableOpsNative-0.1.0-rc1-windows-x64.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux x86_64",
      "url": "https://github.com/zexk/portable-ops-native/releases/download/v0.1.0-rc1/portable-ops-native-0.1.0-rc1-linux-x86_64.tar.gz",
      "note": "Linux · x64"
    }
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/mgs-portable-ops-native.png",
    alt: "Metal Gear Solid: Portable Ops (PlayStation Portable box art)",
    credit: "Box art",
  },
};
