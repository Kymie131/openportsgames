import type { Port } from "@/lib/ports/schema";

export const winbackRecompiled: Port = {
  "schema": "port",
  "id": "winback-recompiled",
  "title": "WinBack Recompiled",
  "game": "WinBack: Covert Operations",
  "developers": [
    "RetroPulse03"
  ],
  "publisher": "Koei",
  "originalYear": 1999,
  "portType": "recompilation",
  "genre": "shooter",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "beta",
  "release": {
    "version": "0.2.2",
    "date": "2026-11-04"
  },
  "sources": [
    "https://github.com/RetroPulse03/WinBackRecomp"
  ],
  "license": {
    "spdx": "GPL-3.0"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-06",
  "originalSystems": [
    "Nintendo 64"
  ],
  "summary": "WinBack: Covert Operations is a 1999 third-person shooter developed and published by Koei for the Nintendo 64. A special forces team infiltrates a hijacked military facility.",
  "summaryEs": "WinBack: Covert Operations es un shooter en tercera persona de 1999 desarrollado y publicado por Koei para Nintendo 64. Un equipo de fuerzas especiales se infiltra en una instalación militar secuestrada.",
  "notes": "Native PC port of WinBack: Covert Operations (N64) via static recompilation. ROM not included; bring your own copy. Latest release: v0.2.2.",
  "notesEs": "Port nativo para PC de WinBack: Covert Operations (N64) mediante recompilación estática. No incluye la ROM; aporta tu propia copia. Última release: v0.2.2.",
  "features": [
    "Native Windows build.",
    "Static recompilation of the Nintendo 64 game.",
    "Requires your own N64 ROM."
  ],
  "featuresEs": [
    "Build nativa para Windows.",
    "Recompilación estática del juego de Nintendo 64.",
    "Necesita tu propia ROM de N64."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/RetroPulse03/WinBackRecomp/releases/download/v0.2.2/WinBackRecompiled-v0.2.2-Windows-x64.zip",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/winback-recompiled.png",
    alt: "WinBack: Covert Operations (Nintendo 64 box art)",
    credit: "Box art",
  },
};
