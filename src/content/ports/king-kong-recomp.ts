import type { Port } from "@/lib/ports/schema";

export const kingKongRecomp: Port = {
  schema: "port",
  id: "king-kong-recomp",
  title: "King Kong Recompiled",
  game: "Peter Jackson's King Kong",
  developers: ["TekRantGaming"],
  publisher: "Ubisoft",
  originalYear: 2005,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TekRantGaming/king-kong-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "King Kong, also referred to simply as Kong, is a fictional monster, a giant gorilla who has appeared in various media since 1933. The character has become an international pop culture icon, appearing in several movies, comics, videogames and television shows. His first appearance was in the novelization of the 1933 film King Kong from RKO Pictures, with the film premiering a little over two months later.",
  summaryEs: "Peter Jackson's King Kong: The Official Game Of The Movie es un videojuego multiplataformas desarrollado y publicado por Ubisoft, basado en la película King Kong del mismo año. Es una colaboración entre el director de la película Peter Jackson y el famoso a diseñador y programador de juegos Michel Ancel, hecho notable tal asociación en dos mundos como el videojuego y el cine.",
  notes:
    "Static recompilation of Peter Jackson's King Kong (the official game of the movie) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de King Kong de Peter Jackson (el videojuego oficial de la película) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Peter%20Jackson's%20King%20Kong%20-%20The%20Official%20Game%20of%20the%20Movie%20(Europe,%20Australia)%20(En,Fr,De,Es,It,Nl,Sv,No,Da,Fi).png",
    alt: "Peter Jackson's King Kong (box art)",
    credit: "Box art",
  },
};
