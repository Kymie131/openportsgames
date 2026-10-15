import type { Port } from "@/lib/ports/schema";

export const infiniteMario64Ever: Port = {
  schema: "port",
  id: "infinite-mario-64-ever",
  title: "Infinite Mario 64 (Ever)",
  game: "Super Mario 64",
  developers: ["Brawmario"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Brawmario/infinite-mario-64-ever"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
  notes:
    "Fork of Infinite Mario 64 (originally by TwilightPB), a Super Mario 64-based project. Requires your own copy of the game.",
  notesEs:
    "Bifurcación de Infinite Mario 64 (original de TwilightPB), un proyecto basado en Super Mario 64. Requiere tu propia copia del juego.",
  cover: {
    src: "https://img.itch.zone/aW1nLzE1MjEwNzc3LnBuZw==/original/EubFkM.png",
    alt: "Super Mario 64 (cover)",
    credit: "SteamGridDB",
  },
};
