import type { Port } from "@/lib/ports/schema";

export const dinosaurPlanetRecomp: Port = {
  schema: "port",
  id: "dinosaur-planet-recomp",
  title: "Dinosaur Planet Recompiled",
  game: "Dinosaur Planet",
  developers: ["Rare"],
  publisher: "Rare",
  originalYear: 2000,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.3.0", date: "2026-05-31" },
  sources: ["https://github.com/DinosaurPlanetRecomp/dino-recomp"],
  discord: "https://discord.gg/SUrA4aV7UW",
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Nintendo 64",
  features: ["Configurable window size, including a 4:3 aspect ratio option"],
  featuresEs: ["Tamaño de ventana configurable, incluida una opción de relación de aspecto 4:3"],
  notes:
    "Static recompilation of the unreleased 2000 Dinosaur Planet prototype by Rare. The original game was never commercially released, so this entry documents a prototype rather than a shipped title; the original prototype build is required to play.",
  notesEs:
    "Recompilación estática del prototipo inédito Dinosaur Planet (Rare, 2000). El juego original nunca se lanzó comercialmente, así que esta ficha documenta un prototipo y no un título publicado; se necesita la build original del prototipo para jugar.",
};
