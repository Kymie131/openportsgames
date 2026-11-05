import type { Port } from "@/lib/ports/schema";

export const wipeoutOmegaPc: Port = {
  "schema": "port",
  "id": "wipeout-omega-pc",
  "title": "WipEout Omega Collection (PC)",
  "game": "WipEout Omega Collection",
  "developers": [
    "AbdelmoumenDeghbouche"
  ],
  "publisher": "Sony Interactive Entertainment",
  "originalYear": 2017,
  "portType": "runtime-port",
  "genre": "racing",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "beta",
  "release": {
    "version": "0.2.59",
    "date": "2026-11-04"
  },
  "sources": [
    "https://github.com/AbdelmoumenDeghbouche/wipeout_pc"
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
  "summary": "WipEout Omega Collection is a 2017 racing game developed by Clever Beans, EPOS Game Studios and XDev and published by Sony Interactive Entertainment for PlayStation 4. It bundles remastered WipEout HD, Fury and 2048 content with anti-gravity racing and a 60 fps target.",
  "summaryEs": "WipEout Omega Collection es un juego de carreras de 2017 desarrollado por Clever Beans, EPOS Game Studios y XDev y publicado por Sony Interactive Entertainment para PlayStation 4. Reúne contenido remasterizado de WipEout HD, Fury y 2048 con carreras antigravedad y objetivo de 60 fps.",
  "notes": "Native PC port of WipEout Omega Collection (PS4) with the game's x86-64 code on the CPU, a PS4 runtime and the shadPS4 Vulkan video core. Windows and Linux builds are available; you need your own game files. Latest release: windows-v0.2.59.",
  "notesEs": "Port nativo para PC de WipEout Omega Collection (PS4) con el código x86-64 del juego en la CPU, un runtime de PS4 y el núcleo de vídeo Vulkan de shadPS4. Hay builds para Windows y Linux; necesitas tus propios archivos del juego. Última release: windows-v0.2.59.",
  "features": [
    "Native x86-64 execution with a PS4 runtime and Vulkan video core.",
    "Windows and Linux builds.",
    "Active development; requires your own PS4 game files."
  ],
  "featuresEs": [
    "Ejecución nativa x86-64 con runtime de PS4 y núcleo de vídeo Vulkan.",
    "Builds para Windows y Linux.",
    "En desarrollo activo; necesita tus propios archivos de PS4."
  ],
  "downloads": [
    {
      "label": "Windows x86_64",
      "url": "https://github.com/AbdelmoumenDeghbouche/wipeout_pc/releases/download/windows-v0.2.59/wipeout-windows.zip",
      "note": "Windows · x64"
    },
    {
      "label": "Linux x86_64",
      "url": "https://github.com/AbdelmoumenDeghbouche/wipeout_pc/releases/download/windows-v0.2.59/wipeout-x86_64.AppImage",
      "note": "Linux · AppImage"
    }
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/generated/wipeout-omega-pc.svg",
    "alt": "WipEout Omega Collection (generated cover)",
    "credit": "OpenPortsGames"
  }
};
