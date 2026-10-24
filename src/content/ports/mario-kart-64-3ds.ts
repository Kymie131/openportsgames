import type { Port } from "@/lib/ports/schema";

export const marioKart643ds: Port = {
  schema: "port",
  id: "mario-kart-64-3ds",
  title: "Mario Kart 64 (3DS)",
  game: "Mario Kart 64",
  developers: ["EstebanPdN"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "decompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["3ds"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/EstebanPdN/mario-kart-64-3ds"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary: "Mario Kart 64 is a 1996 kart racing game for the Nintendo 64 (N64). Developed and published by Nintendo, it is the second installment in the Mario Kart series after 1992's Super Mario Kart. The game retains the gameplay of its predecessor: the player, controlling a Mario franchise character, races opponents around tracks based on locales from the Super Mario platform games. Tracks contain obstacles to slow the player down and item boxes which give the player power-ups to aid in their progress.",
  summaryEs: "Mario Kart 64 es un videojuego de carreras para la Nintendo 64 (N64). Desarrollado y publicado por Nintendo, es la segunda entrega de la serie Mario Kart tras Super Mario Kart de 1992. Conserva la mecánica de su predecesor: el jugador, que controla a un personaje de la franquicia Mario, compite contra sus rivales en circuitos basados en escenarios de los plataformas de Super Mario. Contienen obstáculos para frenarlo y cajas de objetos que le proporcionan potenciadores para ayudarle a avanzar.",
  notes:
    "Native Nintendo 3DS port built from the Mario Kart 64 decompilation. Requires your own ROM.",
  notesEs:
    "Port nativo para Nintendo 3DS construido desde la decompilación de Mario Kart 64. Requiere tu propia ROM.",
  cover: {
    src: "https://cdn2.steamgriddb.com/thumb/e5494d23b18b5c822bcaa9fe8fd077bf.jpg",
    alt: "Mario Kart 64 (cover)",
    credit: "SteamGridDB",
  },
};
