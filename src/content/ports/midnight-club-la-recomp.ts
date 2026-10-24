import type { Port } from "@/lib/ports/schema";

export const midnightClubLaRecomp: Port = {
  schema: "port",
  id: "midnight-club-la-recomp",
  title: "Midnight Club: Los Angeles Recompiled",
  game: "Midnight Club: Los Angeles",
  developers: ["holdmysocks"],
  publisher: "Rockstar Games",
  originalYear: 2008,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/holdmysocks/mcla-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Midnight Club: Los Angeles is a 2008 racing video game developed by Rockstar San Diego and published by Rockstar Games. It is the fourth installment in the Midnight Club series before it was discontinued in January 2010. The game features 43 cars and 3 motorcycles. The open world map of Los Angeles is the size of all three cities from Midnight Club 3: DUB Edition combined. After several delays, Midnight Club: Los Angeles was released in October 2008.",
  summaryEs: "Midnight Club: Los Angeles es un videojuego de carreras desarrollado por Rockstar San Diego y publicado por Rockstar Games. Es la cuarta entrega de la serie Midnight Club. El juego cuenta con 43 autos y 4 motocicletas. El mapa de mundo abierto de Los Ángeles es del tamaño de las tres ciudades de las entregas anteriores combinadas. Después de varios retrasos, Midnight Club: Los Angeles fue lanzado en octubre de 2008.",
  notes:
    "Static recompilation of Midnight Club: Los Angeles (Xbox 360) for PC and PS5. No game data included.",
  notesEs:
    "Recompilación estática de Midnight Club: Los Angeles (Xbox 360) para PC y PS5. No incluye datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/ea/Midnight_Club-Los_Angeles.jpg",
    alt: "Midnight Club: Los Angeles (box art)",
    credit: "Wikipedia",
  },
};
