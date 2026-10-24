import type { Port } from "@/lib/ports/schema";

export const infiniteUndiscoveryRecomp: Port = {
  schema: "port",
  id: "infinite-undiscovery-recomp",
  title: "Infinite Undiscovery Recompiled",
  game: "Infinite Undiscovery",
  developers: ["doc-haz"],
  publisher: "Square Enix",
  originalYear: 2008,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/doc-haz/infinite-undiscovery-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Infinite Undiscovery is a 2008 action role-playing game developed by Microsoft Game Studios Japan and tri-Ace and published by Square Enix for the Xbox 360. It tells the story of the main character Capell and his journey to sever the chains that are holding the moon, with the help of the Liberation Force. The game received mixed to positive reviews from critics.",
  summaryEs: "Infinite Undiscovery es un videojuego de rol de acción de 2008 desarrollado por Microsoft Game Studios Japan y tri-Ace, y publicado por Square Enix para Xbox 360. Narra la historia del protagonista, Capell, y su viaje para romper las cadenas que mantienen sujeta a la Luna, con la ayuda de la Fuerza de Liberación. El juego recibió críticas entre mixtas y positivas.",
  notes:
    "Recompilation of Infinite Undiscovery (Xbox 360) to a native Windows executable. It does not include the game.",
  notesEs:
    "Recompilación de Infinite Undiscovery (Xbox 360) a un ejecutable nativo para Windows. No incluye el juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/46/InfiniteUndiscoveryBoxart.jpg",
    alt: "Infinite Undiscovery (box art)",
    credit: "Wikipedia",
  },
};
