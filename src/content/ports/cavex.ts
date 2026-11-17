import type { Port } from "@/lib/ports/schema";

export const cavex: Port = {
  schema: "port",
  id: "cavex",
  title: "CaveX",
  game: "Minecraft",
  developers: ["xtreme8000"],
  publisher: "Mojang Studios",
  originalYear: 2011,
  portType: "reimplementation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  category: "homebrew",
  platforms: ["wii"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/xtreme8000/CavEX"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "CaveX is a Wii homebrew reimplementation of Minecraft Beta 1.7.3, with world generation, crafting and survival. It runs on original Wii hardware and in emulators.",
  summaryEs: "CaveX es una reimplementación casera para Wii de Minecraft Beta 1.7.3, con generación de mundo, crafteo y supervivencia. Funciona en hardware real de Wii y en emuladores.",
  cover: {
    src: "https://openportsgames.com/covers/generated/cavex.svg",
    alt: "CaveX (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "CaveX is a Wii homebrew recreation of Minecraft Beta 1.7.3 with world generation, crafting and survival. It runs on original hardware and in emulators.",
  notesEs:
    "CaveX es una recreación homebrew de Minecraft Beta 1.7.3 para Wii, con generación de mundo, crafteo y supervivencia. Funciona en hardware real y en emuladores.",
};
