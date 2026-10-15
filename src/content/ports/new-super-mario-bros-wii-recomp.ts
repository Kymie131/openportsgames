import type { Port } from "@/lib/ports/schema";

export const newSuperMarioBrosWiiRecomp: Port = {
  schema: "port",
  id: "new-super-mario-bros-wii-recomp",
  title: "New Super Mario Bros. Wii Recompiled",
  game: "New Super Mario Bros. Wii",
  developers: ["WitherBlitz"],
  publisher: "Nintendo",
  originalYear: 2009,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/WitherBlitz/NSMB-Wii-Multiplayer-Recompilation"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  notes:
    "Static recompilation of New Super Mario Bros. Wii built on WiiCompiled, running natively on Windows and Android, with multiplayer. It needs your own game data.",
  notesEs:
    "Recompilación estática de New Super Mario Bros. Wii construida sobre WiiCompiled, que corre de forma nativa en Windows y Android, con multijugador. Necesita tus propios datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/8f/NewSuperMarioBrosWiiBoxart.png",
    alt: "New Super Mario Bros. Wii (cover)",
    credit: "Wikipedia",
  },
};
