import type { Port } from "@/lib/ports/schema";

export const chronoTriggerBelthasar: Port = {
  "schema": "port",
  "id": "chrono-trigger-belthasar",
  "title": "Belthasar",
  "game": "Chrono Trigger",
  "developers": [
    "TemplarServant"
  ],
  "publisher": "Square",
  "originalYear": 1995,
  "portType": "reimplementation",
  "genre": "rpg",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux",
    "android"
  ],
  "status": "beta",
  "release": {
    "version": "0.15.0-preview",
    "date": "2026-11-05"
  },
  "sources": [
    "https://github.com/TemplarServant/BelthasarProject"
  ],
  "license": {
    "spdx": "NOASSERTION",
    "note": "no SPDX license in the repository"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-05",
  "originalSystems": [
    "Super Nintendo"
  ],
  "summary": "Chrono Trigger is a 1995 role-playing game developed and published by Square for the Super Nintendo. A group of adventurers travels through time to prevent a global catastrophe.",
  "summaryEs": "Chrono Trigger es un videojuego de rol de 1995 desarrollado y publicado por Square para Super Nintendo. Un grupo de aventureros viaja en el tiempo para evitar una catástrofe global.",
  "notes": "Chrono Trigger reimplemented as a native PC game in C, with optional widescreen and 60+ fps. Windows, Linux and Android builds are available; it requires your own ROM and includes no game data. Latest release: v0.15.0-preview.",
  "notesEs": "Chrono Trigger reimplementado como juego nativo para PC en C, con pantalla ancha opcional y más de 60 fps. Hay builds para Windows, Linux y Android; requiere tu propia ROM y no incluye datos del juego. Última release: v0.15.0-preview.",
  "features": [
    "Native C reimplementation with optional widescreen.",
    "Optional 60+ fps.",
    "Requires your own SNES ROM."
  ],
  "featuresEs": [
    "Reimplementación nativa en C con pantalla ancha opcional.",
    "Más de 60 fps opcional.",
    "Necesita tu propia ROM de SNES."
  ],
  "downloads": [
    {
      "label": "Windows x64",
      "url": "https://github.com/TemplarServant/BelthasarProject/releases/download/v0.15.0-preview/Belthasar-v0.15.0-preview-windows-x64.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux x64",
      "url": "https://github.com/TemplarServant/BelthasarProject/releases/download/v0.15.0-preview/Belthasar-v0.15.0-preview-linux-x64.tar.gz",
      "note": "Linux · x64"
    },
    {
      "label": "Android",
      "url": "https://github.com/TemplarServant/BelthasarProject/releases/download/v0.15.0-preview/Belthasar-v0.15.0-preview-android.apk",
      "note": "Android · APK"
    }
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/generated/chrono-trigger-belthasar.svg",
    "alt": "Chrono Trigger (generated cover)",
    "credit": "OpenPortsGames"
  }
};
