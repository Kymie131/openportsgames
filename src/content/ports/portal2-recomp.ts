import type { Port } from "@/lib/ports/schema";

export const portal2Recomp: Port = {
  "schema": "port",
  "id": "portal2-recomp",
  "title": "Portal 2 Recomp",
  "game": "Portal 2",
  "developers": [
    "kanapitsas"
  ],
  "publisher": "Valve",
  "originalYear": 2011,
  "portType": "recompilation",
  "genre": "puzzle",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "macos"
  ],
  "status": "beta",
  "release": {
    "version": "0.3.1",
    "date": "2026-11-08"
  },
  "sources": [
    "https://github.com/kanapitsas/portal2-recomp"
  ],
  "license": {
    "spdx": "GPL-3.0"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Macintosh"
  ],
  "summary": "Portal 2 is a 2011 puzzle-platform game developed and published by Valve. Chell and GLaDOS return in a new Aperture Science test facility with co-op modes.",
  "summaryEs": "Portal 2 es un videojuego de puzles y plataformas de 2011 desarrollado y publicado por Valve. Chell y GLaDOS regresan en unas nuevas instalaciones de Aperture Science con modos cooperativos.",
  "notes": "Portal 2 and Half-Life 2 statically recompiled from their Linux x86 binaries to native ARM64 for macOS and iPhone. Bring your own copy of the games; no game data is included. Latest release: v0.3.1.",
  "notesEs": "Portal 2 y Half-Life 2 recompilados estáticamente desde sus binarios Linux x86 a ARM64 nativo para macOS y iPhone. Aporta tu propia copia de los juegos; no incluye datos del juego. Última release: v0.3.1.",
  "features": [
    "Native macOS ARM64 build.",
    "Includes Portal 2 and Half-Life 2.",
    "Static recompilation from Linux binaries.",
    "Requires your own game copies."
  ],
  "featuresEs": [
    "Build nativa para macOS ARM64.",
    "Incluye Portal 2 y Half-Life 2.",
    "Recompilación estática desde binarios de Linux.",
    "Necesita tus propias copias de los juegos."
  ],
  "downloads": [
    {
      "label": "Macos",
      "url": "https://github.com/kanapitsas/portal2-recomp/releases/download/v0.3.1/Natif-Installer-v0.3.1.zip",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/portal2-recomp.jpg",
    alt: "Portal 2 (Macintosh box art)",
    credit: "Box art",
  },
};
