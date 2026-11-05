import type { Port } from "@/lib/ports/schema";

export const gunstarHeroesRecomp: Port = {
  "schema": "port",
  "id": "gunstar-heroes-recomp",
  "title": "Gunstar Heroes Recomp",
  "game": "Gunstar Heroes",
  "developers": [
    "1nputs"
  ],
  "publisher": "Sega",
  "originalYear": 1993,
  "portType": "recompilation",
  "genre": "shooter",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux",
    "macos"
  ],
  "status": "beta",
  "release": {
    "version": "0.2.2",
    "date": "2026-10-21"
  },
  "sources": [
    "https://github.com/1nputs/gunstars"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-05",
  "originalSystems": [
    "Sega Mega Drive / Genesis"
  ],
  "summary": "Gunstar Heroes is a 1993 run-and-gun game developed by Treasure and published by Sega for the Mega Drive/Genesis. It is known for its fast action, combinable weapons and cooperative play.",
  "summaryEs": "Gunstar Heroes es un juego run-and-gun de 1993 desarrollado por Treasure y publicado por Sega para Mega Drive/Genesis. Es conocido por su acción rápida, armas combinables y juego cooperativo.",
  "notes": "Recompilation of Gunstar Heroes (Genesis) for Windows, Linux and macOS. It needs your own ROM; no game files are included. Latest release: v0.2.2.",
  "notesEs": "Recompilación de Gunstar Heroes (Genesis) para Windows, Linux y macOS. Necesita tu propia ROM; no incluye archivos del juego. Última release: v0.2.2.",
  "features": [
    "Windows, Linux and macOS builds.",
    "Native recompilation of the Genesis game.",
    "Bring your own ROM."
  ],
  "featuresEs": [
    "Builds para Windows, Linux y macOS.",
    "Recompilación nativa del juego de Genesis.",
    "Aporta tu propia ROM."
  ],
  "downloads": [
    {
      "label": "Windows x86_64",
      "url": "https://github.com/1nputs/gunstars/releases/download/v0.2.2/gunstars-0.2.2-windows-x64.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux x86_64",
      "url": "https://github.com/1nputs/gunstars/releases/download/v0.2.2/gunstars-0.2.2-linux-x64.tar.gz",
      "note": "Linux · x64"
    },
    {
      "label": "macOS universal",
      "url": "https://github.com/1nputs/gunstars/releases/download/v0.2.2/gunstars-0.2.2-macos-universal.zip",
      "note": "macOS · universal"
    }
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/generated/gunstar-heroes-recomp.svg",
    "alt": "Gunstar Heroes (generated cover)",
    "credit": "OpenPortsGames"
  }
};
