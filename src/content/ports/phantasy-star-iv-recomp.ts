import type { Port } from "@/lib/ports/schema";

export const phantasyStarIvRecomp: Port = {
  "schema": "port",
  "id": "phantasy-star-iv-recomp",
  "title": "Phantasy Star IV Recomp",
  "game": "Phantasy Star IV: The End of the Millennium",
  "developers": [
    "MotaviaWorks"
  ],
  "publisher": "Sega",
  "originalYear": 1993,
  "portType": "recompilation",
  "genre": "rpg",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux",
    "android"
  ],
  "status": "alpha",
  "release": {
    "version": "0.2.0-alpha",
    "date": "2026-11-09"
  },
  "sources": [
    "https://github.com/MotaviaWorks/PSIVRecomp"
  ],
  "license": {
    "spdx": "GPL-3.0"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Sega Mega Drive / Genesis"
  ],
  "summary": "Phantasy Star IV: The End of the Millennium is a 1993 role-playing game developed and published by Sega for the Mega Drive/Genesis. Chaz and his party fight to save Algol from the Profound Darkness.",
  "summaryEs": "Phantasy Star IV: The End of the Millennium es un videojuego de rol de 1993 desarrollado y publicado por Sega para Mega Drive/Genesis. Chaz y su grupo luchan para salvar Algol de la Oscuridad Profunda.",
  "notes": "Native port of Phantasy Star IV with the game's own code recompiled, plus widescreen, modern text and rewind. Bring your own ROM; no game data is included. Latest release: v0.2.0-alpha.",
  "notesEs": "Port nativo de Phantasy Star IV con el código del juego recompilado, además de pantalla ancha, texto moderno y rebobinado. Aporta tu propia ROM; no incluye datos del juego. Última release: v0.2.0-alpha.",
  "features": [
    "Native Windows, Linux and Android builds.",
    "Widescreen, modern text and rewind.",
    "Requires your own Genesis ROM."
  ],
  "featuresEs": [
    "Builds nativas para Windows, Linux y Android.",
    "Pantalla ancha, texto moderno y rebobinado.",
    "Necesita tu propia ROM de Genesis."
  ],
  "downloads": [
    {
      "label": "Windows x64",
      "url": "https://github.com/MotaviaWorks/PSIVRecomp/releases/download/v0.2.0-alpha/PSIV-Recomp-0.2.0-alpha-windows-x64.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux x86_64",
      "url": "https://github.com/MotaviaWorks/PSIVRecomp/releases/download/v0.2.0-alpha/PSIV-Recomp-0.2.0-alpha-linux-x86_64.tar.gz",
      "note": "Linux · x64"
    },
    {
      "label": "Android arm64",
      "url": "https://github.com/MotaviaWorks/PSIVRecomp/releases/download/v0.2.0-alpha/PSIV-Recomp-0.2.0-alpha-android-arm64.apk",
      "note": "Android · APK"
    }
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/generated/phantasy-star-iv-recomp.svg",
    "alt": "Phantasy Star IV: The End of the Millennium (generated cover)",
    "credit": "OpenPortsGames"
  }
};
