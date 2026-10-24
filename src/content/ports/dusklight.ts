import type { Port } from "@/lib/ports/schema";

export const dusklight: Port = {
  schema: "port",
  id: "dusklight",
  title: "Dusklight",
  game: "The Legend of Zelda: Twilight Princess",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 2006,
  genre: "action-adventure",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: "2.0.3", date: "2026-09-30" },
  sources: ["https://github.com/TwilitRealm/dusklight"],
  website: "https://twilitrealm.dev",
  license: { spdx: "CC0-1.0" },
  verified: true,
  verifiedAt: "2026-09-25",
  screenshots: [
    {
      src: "https://twilitrealm.dev/_astro/shot-platform.Cp2I0l-W_1nEglP.webp",
      alt: "The hero crossing a platform in Dusklight's Twilight Princess reimplementation",
      credit: "Dusklight",
    },
  ],
  originalSystems: ["GameCube"],
  features: [
    "Full game playable from start to finish",
    "Official Windows, Linux, macOS and Android builds",
    "Community mod support",
  ],
  featuresEs: [
    "Juego completo jugable de principio a fin",
    "Builds oficiales para Windows, Linux, macOS y Android",
    "Soporte de mods de la comunidad",
  ],
  summary: "The Legend of Zelda: Twilight Princess is a 2006 action-adventure game developed and published by Nintendo for the GameCube and Wii. Originally planned for release exclusively on the GameCube in November 2005, Nintendo delayed the release to refine the game, add more content and port it to the Wii. The Wii version was a launch game in North America in November 2006 and in Japan, Europe and Australia the following month. The GameCube version was released in December 2006 as the final first-party game for the console.",
  summaryEs: "The Legend of Zelda: Twilight Princess es un videojuego de acción-aventura de 2006 desarrollado por la filial EAD y distribuido por Nintendo para las videoconsolas GameCube y Wii (2006). Es el decimotercer lanzamiento de la franquicia The Legend of Zelda y el undécimo juego de su línea principal.",
  notes:
    "From-scratch reimplementation of The Legend of Zelda: Twilight Princess that reads the game's assets from a legally dumped copy of the game disc. Ships official builds for every catalog platform, with the Android build compiled for ARM64; some platforms are supported on a best-effort basis.",
  notesEs:
    "Reimplementación desde cero de The Legend of Zelda: Twilight Princess que lee los recursos del juego de una copia volcada legalmente del disco. Ofrece builds oficiales para todas las plataformas del catálogo, con la de Android compilada para ARM64; algunas plataformas se soportan sin garantía.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/0e/The_Legend_of_Zelda_Twilight_Princess_Game_Cover.jpg",
    alt: "The Legend of Zelda: Twilight Princess (box art)",
    credit: "Wikipedia",
  },
};
