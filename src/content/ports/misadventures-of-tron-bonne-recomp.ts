import type { Port } from "@/lib/ports/schema";

export const misadventuresOfTronBonneRecomp: Port = {
  schema: "port",
  id: "misadventures-of-tron-bonne-recomp",
  title: "The Misadventures of Tron Bonne Recompiled",
  game: "The Misadventures of Tron Bonne",
  developers: ["alexbeavs"],
  publisher: "Capcom",
  originalYear: 1999,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/misadventures-of-tron-bonne-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["PlayStation"],
  summary: "The Misadventures of Tron Bonne is a 1999 action-adventure game developed and published by Capcom for the PlayStation. Released in Japan in 1999 and in North America and Europe in 2000, the game is part of the Mega Man Legends series, and is also a prequel and spin-off of the first Legends game. Rather than focusing on the heroic protagonists of the series, the game follows series antihero Tron Bonne, sister of the criminal Bonne family of air pirates. The Japanese version included PocketStation support, whereas the North American and European version did not.",
  summaryEs: "The Misadventures of Tron Bonne es un videojuego de acción y aventura publicado por Capcom en 1999.",
  notes:
    "Recompilation of The Misadventures of Tron Bonne (PS1, Europe SLES-02795) with PSXRecomp. The releases are build-it-yourself kits: you supply your disc and a compatible BIOS, and the game is generated and compiled on your machine. It is the framework's base recompilation, with no per-game enhancements.",
  notesEs:
    "Recompilación de The Misadventures of Tron Bonne (PS1, Europe SLES-02795) con PSXRecomp. Las releases son kits de compilación propia: aportas tu disco y una BIOS compatible, y el juego se genera y compila en tu equipo. Es la recompilación base del framework, sin mejoras por juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c3/Misadvbox.jpg",
    alt: "The Misadventures of Tron Bonne (box art)",
    credit: "Wikipedia",
  },
};
