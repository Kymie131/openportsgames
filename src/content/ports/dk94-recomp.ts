import type { Port } from "@/lib/ports/schema";

export const dk94Recomp: Port = {
  "schema": "port",
  "id": "dk94-recomp",
  "title": "DK94 Recomp",
  "game": "Donkey Kong",
  "developers": [
    "gnome41"
  ],
  "publisher": "Nintendo",
  "originalYear": 1994,
  "portType": "recompilation",
  "genre": "platformer",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows",
    "linux"
  ],
  "status": "beta",
  "release": {
    "version": "1.3.0",
    "date": "2026-10-27"
  },
  "sources": [
    "https://github.com/gnome41/DK94-SGB"
  ],
  "license": {
    "spdx": "MIT"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-06",
  "originalSystems": [
    "Game Boy"
  ],
  "summary": "Donkey Kong is a 1994 Game Boy puzzle-platform game developed by Nintendo R&D1 and Pax Softnica and published by Nintendo. It expands the arcade original into 101 levels with new mechanics.",
  "summaryEs": "Donkey Kong es un videojuego de plataformas y puzles de 1994 para Game Boy desarrollado por Nintendo R&D1 y Pax Softnica y publicado por Nintendo. Amplía el arcade original a 101 niveles con nuevas mecánicas.",
  "notes": "Unofficial static recompilation of Donkey Kong (Game Boy, 1994) for Windows and Linux, with Super Game Boy palettes, border, SNES sound and widescreen. No ROM or BIOS is included. Latest release: v1.3.0.",
  "notesEs": "Recompilación estática no oficial de Donkey Kong (Game Boy, 1994) para Windows y Linux, con paletas de Super Game Boy, borde, sonido de SNES y pantalla ancha. No incluye ROM ni BIOS. Última release: v1.3.0.",
  "features": [
    "Native Windows and Linux builds.",
    "Super Game Boy palettes, border and SNES sound.",
    "Widescreen support.",
    "Requires your own Game Boy ROM."
  ],
  "featuresEs": [
    "Builds nativas para Windows y Linux.",
    "Paletas, borde y sonido de Super Game Boy/SNES.",
    "Soporte de pantalla ancha.",
    "Necesita tu propia ROM de Game Boy."
  ],
  "downloads": [
    {
      "label": "Windows",
      "url": "https://github.com/gnome41/DK94-SGB/releases/download/v1.3.0/DK94-Recomp-1.3.0-windows-x64.zip",
    },
    {
      "label": "Linux",
      "url": "https://github.com/gnome41/DK94-SGB/releases/download/v1.3.0/DK94-Recomp-1.3.0-linux-x86_64.tar.gz",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/dk94-recomp.png",
    alt: "Donkey Kong (Game Boy box art)",
    credit: "Box art",
  },
};
