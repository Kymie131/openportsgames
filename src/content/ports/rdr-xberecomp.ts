import type { Port } from "@/lib/ports/schema";

export const rdrXberecomp: Port = {
  "schema": "port",
  "id": "rdr-xberecomp",
  "title": "Red Dead Revolver XBE Recomp",
  "game": "Red Dead Revolver",
  "developers": [
    "TGP482"
  ],
  "publisher": "Rockstar Games",
  "originalYear": 2004,
  "portType": "recompilation",
  "genre": "shooter",
  "openSource": true,
  "originalGameLicense": "proprietary",
  "platforms": [
    "windows"
  ],
  "status": "beta",
  "release": {
    "version": "1.0.0",
    "date": "2026-11-07"
  },
  "sources": [
    "https://github.com/TGP482/RDR-XBERecomp"
  ],
  "license": {
    "spdx": "NOASSERTION",
    "note": "no SPDX license in the repository"
  },
  "verified": false,
  "sourceVerified": true,
  "addedAt": "2026-11-09",
  "originalSystems": [
    "Xbox"
  ],
  "summary": "Red Dead Revolver is a 2004 third-person shooter developed by Rockstar San Diego and published by Rockstar Games. It follows bounty hunter Red Harlow in the Old West.",
  "summaryEs": "Red Dead Revolver es un shooter en tercera persona de 2004 desarrollado por Rockstar San Diego y publicado por Rockstar Games. Sigue al cazarrecompensas Red Harlow en el Viejo Oeste.",
  "notes": "Unofficial native PC port of the original Xbox version of Red Dead Revolver via static recompilation. Bring your own game files; no game data is included. Latest release: V1.",
  "notesEs": "Port nativo no oficial para PC de la versión original de Xbox de Red Dead Revolver mediante recompilación estática. Aporta tus propios archivos del juego; no incluye datos del juego. Última release: V1.",
  "features": [
    "Native Windows build.",
    "Static recompilation of the Xbox game.",
    "Requires your own Xbox game files."
  ],
  "featuresEs": [
    "Build nativa para Windows.",
    "Recompilación estática del juego de Xbox.",
    "Necesita tus propios archivos de Xbox."
  ],
  "downloads": [
    {
      "label": "Windows x64",
      "url": "https://github.com/TGP482/RDR-XBERecomp/releases/download/V1/RDR-XBERecomp.zip",
      "note": "Windows · x64"
    }
  ],
  cover: {
    src: "https://openportsgames.com/covers/boxart/rdr-xberecomp.png",
    alt: "Red Dead Revolver (Xbox box art)",
    credit: "Box art",
  },
};
