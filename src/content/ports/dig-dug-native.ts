import type { Port } from "@/lib/ports/schema";

export const digDugNative: Port = {
  "schema": "port",
  "id": "dig-dug-native",
  "title": "Dig Dug (Native Port)",
  "game": "Dig Dug",
  "developers": [
    "TekRantGaming"
  ],
  "publisher": "Namco",
  "originalYear": 1982,
  "portType": "reimplementation",
  "genre": "action-adventure",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "beta",
  "release": {
    "version": "1.1.0",
    "date": "2026-10-01"
  },
  "sources": [
    "https://github.com/TekRantGaming/digdug-native"
  ],
  "license": {
    "spdx": "NOASSERTION",
    "note": "no SPDX license in the repository"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-05",
  "originalSystems": [
    "Arcade"
  ],
  "summary": "Dig Dug is a 1982 arcade game developed and published by Namco. Players dig through underground tunnels and defeat enemies with a pump or by dropping rocks on them.",
  "summaryEs": "Dig Dug es un juego de arcade de 1982 desarrollado y publicado por Namco. Los jugadores cavan túneles subterráneos y derrotan enemigos con una bomba de aire o dejando caer rocas sobre ellos.",
  "notes": "Native Windows and Linux port of Dig Dug (arcade), with controller support, widescreen fill and an in-game menu. It needs your own ROM; no game files are included. Latest release: v1.1.0.",
  "notesEs": "Port nativo para Windows y Linux de Dig Dug (arcade), con soporte de mando, relleno de pantalla ancha y menú en el juego. Necesita tu propia ROM; no incluye archivos del juego. Última release: v1.1.0.",
  "features": [
    "Native Windows and Linux builds.",
    "Controller support and widescreen fill.",
    "Requires your own arcade ROM."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux.",
    "Soporte de mando y pantalla ancha.",
    "Necesita tu propia ROM de arcade."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/TekRantGaming/digdug-native/releases/download/v1.1.0/DigDug-windows-x64.zip",
    },
    {
      "label": "Linux",
      "url": "https://github.com/TekRantGaming/digdug-native/releases/download/v1.1.0/DigDug-x86_64.AppImage",
    },
  ],
  "cover": {
    "src": "https://openportsgames.com/covers/generated/dig-dug-native.svg",
    "alt": "Dig Dug (generated cover)",
    "credit": "OpenPortsGames"
  }
};
