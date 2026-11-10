import type { Port } from "@/lib/ports/schema";

export const opengp: Port = {
  "schema": "port",
  "id": "opengp",
  "title": "OpenGP",
  "game": "Mario Kart Arcade GP",
  "developers": [
    "OpenGP-dev"
  ],
  "publisher": "Nintendo",
  "originalYear": 2005,
  "portType": "recompilation",
  "genre": "racing",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux",
    "macos"
  ],
  "status": "beta",
  "release": {
    "version": "1.0.3",
    "date": "2026-11-07"
  },
  "sources": [
    "https://github.com/OpenGP-dev/OpenGP"
  ],
  "license": {
    "spdx": "GPL-3.0"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Arcade"
  ],
  "summary": "Mario Kart Arcade GP is a 2005 arcade racing game developed by Namco and published by Nintendo. It brings Mario Kart to arcades with a camera and card features.",
  "summaryEs": "Mario Kart Arcade GP es un juego de carreras de arcade de 2005 desarrollado por Namco y publicado por Nintendo. Lleva Mario Kart a los salones recreativos con cámara y tarjetas.",
  "notes": "Native PC port of Mario Kart Arcade GP and GP 2 by static recompilation, with Windows, Linux and macOS builds. It builds the games from your own disc images; no game data is included. Latest release: v1.0.3.",
  "notesEs": "Port nativo para PC de Mario Kart Arcade GP y GP 2 mediante recompilación estática, con builds para Windows, Linux y macOS. Compila los juegos desde tus propias imágenes de disco; no incluye datos del juego. Última release: v1.0.3.",
  "features": [
    "Native Windows, Linux and macOS builds.",
    "Includes Mario Kart Arcade GP and GP 2.",
    "Requires your own arcade disc images."
  ],
  "featuresEs": [
    "Builds nativas para Windows, Linux y macOS.",
    "Incluye Mario Kart Arcade GP y GP 2.",
    "Necesita tus propias imágenes de disco de arcade."
  ],
  "downloads": [
    {
      "label": "Windows x64",
      "url": "https://github.com/OpenGP-dev/OpenGP/releases/download/v1.0.3/OpenGP-1.0.3-windows-x64.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux x64",
      "url": "https://github.com/OpenGP-dev/OpenGP/releases/download/v1.0.3/OpenGP-1.0.3-linux-x64.tar.gz",
      "note": "Linux · x64"
    },
    {
      "label": "macOS arm64",
      "url": "https://github.com/OpenGP-dev/OpenGP/releases/download/v1.0.3/OpenGP-1.0.3-macos-arm64.tar.gz",
      "note": "macOS · Apple Silicon"
    }
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/opengp.jpg",
    alt: "Mario Kart Arcade GP (Arcade art)",
    credit: "Wikipedia",
  },
};
