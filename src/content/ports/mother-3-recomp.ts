import type { Port } from "@/lib/ports/schema";

export const mother3Recomp: Port = {
  schema: "port",
  id: "mother-3-recomp",
  title: "Mother 3 Recompiled",
  game: "Mother 3",
  developers: ["agray0425"],
  publisher: "Nintendo",
  originalYear: 2006,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/agray0425/Mother3Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  summary: "Mother 3 is a 2006 role-playing video game developed by Brownie Brown and HAL Laboratory and published by Nintendo for the Game Boy Advance. It is the third and final entry in the Mother series. The game follows Lucas, a young boy with psychic abilities, and a party of characters as they attempt to prevent a mysterious invading army from corrupting and destroying the world.",
  summaryEs: "Mother 3 es un videojuego del género RPG para Game Boy Advance, desarrollado por HAL Laboratory y Brownie Brown, publicado por Nintendo y lanzado sólo en Japón. Es el tercer y último juego en la serie de videojuegos Mother. Fue lanzado en Japón el 20 de abril del 2006. El juego sigue a Lucas, un joven con habilidades psíquicas, y a un grupo de personajes que intentan evitar que un misterioso ejército invasor corrompa y destruya el mundo.",
  notes:
    "Static recompilation of Mother 3 (Game Boy Advance) for Windows. It needs your own copy of the game.",
  notesEs:
    "Recompilación estática de Mother 3 (Game Boy Advance) para Windows. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Advance/Named_Boxarts/Mother%203%20(Japan)%20%5BT-En%20by%20Chewy,%20Jeffman%20and%20Tomato%5D.png",
    alt: "Mother 3 (box art)",
    credit: "Box art",
  },
};
