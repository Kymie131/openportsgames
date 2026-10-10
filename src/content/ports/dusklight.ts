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
  release: { version: "2.0.2", date: "2026-09-25" },
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
  originalSystem: "GameCube",
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
