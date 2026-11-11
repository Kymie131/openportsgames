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
    "version": null,
    "date": null
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
  "wip": true,
  "originalSystems": [
    "Super Nintendo"
  ],
  "summary": "Chrono Trigger is a 1995 role-playing game developed and published by Square for the Super Nintendo. A group of adventurers travels through time to prevent a global catastrophe.",
  "summaryEs": "Chrono Trigger es un videojuego de rol de 1995 desarrollado y publicado por Square para Super Nintendo. Un grupo de aventureros viaja en el tiempo para evitar una catástrofe global.",
  "notes": "Chrono Trigger reimplemented as a native PC game in C, with optional widescreen and 60+ fps. The project publishes source only (latest tag: v0.19.0-preview); there are no prebuilt binaries, so you must build it and provide your own ROM.",
  "notesEs": "Chrono Trigger reimplementado como juego nativo para PC en C, con pantalla ancha opcional y más de 60 fps. El proyecto solo publica código (última etiqueta: v0.19.0-preview); no hay binarios, así que debes compilarlo y aportar tu propia ROM.",
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
  "cover": {
    "src": "https://openportsgames.com/covers/generated/chrono-trigger-belthasar.svg",
    "alt": "Chrono Trigger (generated cover)",
    "credit": "OpenPortsGames"
  }
};
