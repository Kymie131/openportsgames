import type { Port } from "@/lib/ports/schema";

export const primerecomp: Port = {
  "schema": "port",
  "id": "primerecomp",
  "title": "PrimeRecomp",
  "game": "Metroid Prime Remastered",
  "developers": [
    "gminustwo"
  ],
  "publisher": "Nintendo",
  "originalYear": 2023,
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
    "version": "0.0.9",
    "date": "2026-11-09"
  },
  "sources": [
    "https://github.com/gminustwo/primerecomp"
  ],
  "license": {
    "spdx": "NOASSERTION",
    "note": "no SPDX license in the repository"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Nintendo Switch"
  ],
  "summary": "Metroid Prime Remastered is a 2023 remaster of the 2002 action-adventure game developed by Retro Studios and published by Nintendo. Samus explores Tallon IV in first person.",
  "summaryEs": "Metroid Prime Remastered es la remasterización de 2023 del videojuego de acción y aventura de 2002 desarrollado por Retro Studios y publicado por Nintendo. Samus explora Tallon IV en primera persona.",
  "notes": "Native recompilation of Metroid Prime Remastered for Windows, Linux, macOS and Android. Bring your own game files; no game data is included. Latest release: v0.0.9.",
  "notesEs": "Recompilación nativa de Metroid Prime Remastered para Windows, Linux, macOS y Android. Aporta tus propios archivos del juego; no incluye datos del juego. Última release: v0.0.9.",
  "features": [
    "Native Windows, Linux, macOS and Android builds.",
    "Remastered Switch version recompiled.",
    "Requires your own game files."
  ],
  "featuresEs": [
    "Builds nativas para Windows, Linux, macOS y Android.",
    "Versión remasterizada de Switch recompilada.",
    "Necesita tus propios archivos del juego."
  ],
  "downloads": [
    {
      "label": "Windows x64",
      "url": "https://github.com/gminustwo/primerecomp/releases/download/v0.0.9/PrimeRecomp-v0.0.9-windows.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux x86_64 AppImage",
      "url": "https://github.com/gminustwo/primerecomp/releases/download/v0.0.9/PrimeRecomp-v0.0.9-linux-x86_64.AppImage",
      "note": "Linux · AppImage"
    },
    {
      "label": "macOS",
      "url": "https://github.com/gminustwo/primerecomp/releases/download/v0.0.9/PrimeRecomp-v0.0.9-macOS.dmg",
      "note": "macOS · DMG"
    },
    {
      "label": "Android",
      "url": "https://github.com/gminustwo/primerecomp/releases/download/v0.0.9/PrimeRecomp-v0.0.9-android.apk",
      "note": "Android · APK"
    }
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/primerecomp.jpg",
    alt: "Metroid Prime Remastered (Nintendo Switch box art)",
    credit: "Wikipedia",
  },
};
