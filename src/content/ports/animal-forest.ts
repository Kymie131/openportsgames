import type { Port } from "@/lib/ports/schema";

export const AnimalForest: Port = {
  schema: "port",
  id: "animal-forest",
  title: "Animal Forest",
  game: "Animal Forest",
  developers: ["zeldaret"],
  publisher: "Nintendo",
  originalYear: 2001,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/zeldaret/af"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  summary:
    "Animal Forest is a 2001 life simulation game developed and published by Nintendo for the Nintendo 64. The player moves to a village of anthropomorphic animals, befriends the residents and pays off a house loan while the game runs in real time.",
  summaryEs:
    "Animal Forest es un videojuego de simulación social de 2001 desarrollado y publicado por Nintendo para Nintendo 64. El jugador se muda a un pueblo de animales antropomórficos, hace amistad con sus habitantes y paga la hipoteca de una casa mientras el juego avanza en tiempo real.",
  cover: {
    src: "https://openportsgames.com/covers/generated/animal-forest.svg",
    alt: "Animal Forest (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Decompilation of Animal Forest.",
  notesEs: "Decompilación de Animal Forest.",
};
