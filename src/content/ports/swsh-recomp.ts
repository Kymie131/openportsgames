import type { Port } from "@/lib/ports/schema";

export const swshRecomp: Port = {
  schema: "port",
  id: "swsh-recomp",
  title: "SwSh Recomp",
  game: "Pokémon Sword and Shield",
  developers: ["raulzrrs"],
  publisher: "Nintendo",
  originalYear: 2019,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.3.0", date: "2026-11-15" },
  sources: ["https://github.com/raulzrrs/swsh-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch"],
  summary:
    "Pokémon Sword and Pokémon Shield are 2019 role-playing video games developed by Game Freak and published by The Pokémon Company and Nintendo for the Nintendo Switch console. They are the first instalments in the 8th generation of the Pokémon video game series. First teased at E3 2017 and announced in February 2019, the games were released on 15 November 2019.",
  summaryEs: "Pokémon Sword es un videojuego de rol publicado por Nintendo en 2019.",
  notes:
    "Native Windows recompilation of Pokémon Sword and Shield built on Let's Go Recomp. Ships no game files: you must supply your own copy.",
  notesEs:
    "Recompilación nativa para Windows de Pokémon Espada y Escudo basada en Let's Go Recomp. No incluye archivos del juego: debes aportar tu propia copia.",
  cover: {
    src: "https://openportsgames.com/covers/generated/pokemon-sword-and-shield.svg",
    alt: "Pokémon Sword and Shield (generated cover)",
    credit: "OpenPortsGames",
  },
};
