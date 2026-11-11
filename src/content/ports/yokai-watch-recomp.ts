import type { Port } from "@/lib/ports/schema";

export const yokaiWatchRecomp: Port = {
  "schema": "port",
  "id": "yokai-watch-recomp",
  "title": "Yo-kai Watch Recomp",
  "game": "Yo-kai Watch",
  "developers": [
    "watchmakerers"
  ],
  "publisher": "Nintendo",
  "originalYear": 2013,
  "portType": "recompilation",
  "genre": "rpg",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux",
    "macos"
  ],
  "status": "beta",
  "release": {
    "version": "0.5.1",
    "date": "2026-11-09"
  },
  "sources": [
    "https://github.com/watchmakerers/clockwork"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Nintendo 3DS"
  ],
  "summary": "Yo-kai Watch is a 2013 role-playing game developed by Level-5 and published by Nintendo. A boy befriends invisible Yo-kai and solves problems around Springdale.",
  "summaryEs": "Yo-kai Watch es un videojuego de rol de 2013 desarrollado por Level-5 y publicado por Nintendo. Un niño se hace amigo de Yo-kai invisibles y resuelve problemas en Springdale.",
  "notes": "Native recompilation of Yo-kai Watch for Windows, Linux and macOS. Bring your own game files; no game data is included. Latest release: 0.5.1.",
  "notesEs": "Recompilación nativa de Yo-kai Watch para Windows, Linux y macOS. Aporta tus propios archivos; no incluye datos del juego. Última release: 0.5.1.",
  "features": [
    "Native Windows, Linux and macOS builds.",
    "Static recompilation of the 3DS game.",
    "Requires your own game files."
  ],
  "featuresEs": [
    "Builds nativas para Windows, Linux y macOS.",
    "Recompilación estática del juego de 3DS.",
    "Necesita tus propios archivos del juego."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/watchmakerers/clockwork/releases/download/0.5.1/clockwork-windows-x86_64.zip",
    },
    {
      "label": "Linux",
      "url": "https://github.com/watchmakerers/clockwork/releases/download/0.5.1/clockwork-linux-x86_64.tar.gz",
    },
    {
      "label": "macOS",
      "url": "https://github.com/watchmakerers/clockwork/releases/download/0.5.1/clockwork-macos-arm64.tar.gz",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/yokai-watch-recomp.png",
    alt: "Yo-kai Watch (Nintendo 3DS box art)",
    credit: "Box art",
  },
};
