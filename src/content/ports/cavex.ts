import type { Port } from "@/lib/ports/schema";

export const cavex: Port = {
  schema: "port",
  id: "cavex",
  title: "CaveX",
  game: "CaveX",
  developers: ["xtreme8000"],
  publisher: "xtreme8000",
  originalYear: 2025,
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
  originalSystems: ["Unknown"],
  summary: "CaveX is a simulation game published by xtreme8000, released in 2025.",
  summaryEs: "CaveX es un videojuego de simulaci�n publicado por xtreme8000, lanzado en 2025.",
  summaryGenerated: true,
  notes:
    "CaveX is a Wii homebrew recreation of Minecraft Beta 1.7.3 with world generation, crafting and survival. It runs on original hardware and in emulators.",
  notesEs:
    "CaveX es una recreación homebrew de Minecraft Beta 1.7.3 para Wii, con generación de mundo, crafteo y supervivencia. Funciona en hardware real y en emuladores.",
};
