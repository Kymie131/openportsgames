import type { Port } from "@/lib/ports/schema";

export const knackPc: Port = {
  "schema": "port",
  "id": "knack-pc",
  "title": "Knack (PC)",
  "game": "Knack",
  "developers": [
    "AbdelmoumenDeghbouche"
  ],
  "publisher": "Sony Computer Entertainment",
  "originalYear": 2013,
  "portType": "runtime-port",
  "genre": "platformer",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "beta",
  "release": {
    "version": "0.1.10",
    "date": "2026-11-04"
  },
  "sources": [
    "https://github.com/AbdelmoumenDeghbouche/knack_pc"
  ],
  "license": {
    "spdx": "GPL-2.0"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-05",
  "originalSystems": [
    "PlayStation 4"
  ],
  "summary": "Knack is a 2013 platformer developed by SCE Japan Studio and published by Sony Computer Entertainment for PlayStation 4. It follows a small robot with the power to absorb relics and grow.",
  "summaryEs": "Knack es un juego de plataformas de 2013 desarrollado por SCE Japan Studio y publicado por Sony Computer Entertainment para PlayStation 4. Sigue a un pequeño robot con el poder de absorber reliquias y crecer.",
  "notes": "Native PC port of Knack (PS4) with the game's x86-64 code, a PS4 runtime and the shadPS4 Vulkan video core. Windows and Linux builds; requires your own game files. Latest release: v0.1.10.",
  "notesEs": "Port nativo para PC de Knack (PS4) con el código x86-64 del juego, un runtime de PS4 y el núcleo de vídeo Vulkan de shadPS4. Builds para Windows y Linux; necesita tus propios archivos del juego. Última release: v0.1.10.",
  "features": [
    "Native x86-64 execution with a PS4 runtime and Vulkan video core.",
    "Windows and Linux builds.",
    "Requires your own PS4 game files."
  ],
  "featuresEs": [
    "Ejecución nativa x86-64 con runtime de PS4 y núcleo de vídeo Vulkan.",
    "Builds para Windows y Linux.",
    "Necesita tus propios archivos de PS4."
  ],
  "downloads": [
    {
      "label": "Windows x86_64",
      "url": "https://github.com/AbdelmoumenDeghbouche/knack_pc/releases/download/v0.1.10/knack-windows.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux x86_64",
      "url": "https://github.com/AbdelmoumenDeghbouche/knack_pc/releases/download/v0.1.10/knack-x86_64.AppImage",
      "note": "Linux · AppImage"
    }
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/generated/knack-pc.svg",
    "alt": "Knack (generated cover)",
    "credit": "OpenPortsGames"
  }
};
