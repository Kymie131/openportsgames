import type { Port } from "@/lib/ports/schema";

export const AnimalForestE: Port = {
  schema: "port",
  id: "animal-forest-e",
  title: "Animal Forest e+",
  game: "Animal Forest e+",
  developers: ["ACreTeam"],
  publisher: "Nintendo",
  originalYear: 2003,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ACreTeam/afe-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo GameCube"],
  summary:
    "Animal Forest e+ is a 2003 life simulation game developed and published by Nintendo for the GameCube. An expanded version of Animal Forest, it adds new villagers, items and connectivity features to the real-time village life of the series.",
  summaryEs:
    "Animal Forest e+ es un videojuego de simulación social de 2003 desarrollado y publicado por Nintendo para GameCube. Una versión ampliada de Animal Forest que añade nuevos vecinos, objetos y funciones de conectividad a la vida del pueblo en tiempo real de la serie.",
  cover: {
    src: "https://openportsgames.com/covers/generated/animal-forest-e.svg",
    alt: "Animal Forest e+ (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Decompilation of Animal Forest e+ (JP).",
  notesEs: "Decompilación de Animal Forest e+ (JP).",
};
