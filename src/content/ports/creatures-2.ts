import type { Port } from "@/lib/ports/schema";

export const Creatures2: Port = {
  schema: "port",
  id: "creatures-2",
  title: "Creatures 2",
  game: "Creatures 2",
  developers: ["adamcolquhoun"],
  publisher: "Mindscape",
  originalYear: 1998,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/adamcolquhoun/Creatures-2-Decompilation"],
  license: { spdx: "BSD-3-Clause" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/90/Creatures_2_1998_Windows_Cover_Art.jpg",
    alt: "Creatures 2 (cover)",
    credit: "Wikipedia",
  },
  summary: "Creatures 2 is the second game in the Creatures artificial life game series made by Creature Labs, and the sequel to the 1996 game Creatures. It features three species: the cute, dependent Norns, the cantankerous Grendels and the industrious Ettins. The game tries to simulate life, and includes a complex two-dimensional ecology of plants, animals and insects, which provide the environment for the three main species to live and develop in.",
  summaryEs: "Creatures 2 es un videojuego de acción y aventura publicado por Mindscape en 1998.",
  notes:
    "The goal of this project is to reverse engineer Creatures 2 reproducing the 1:1 source code.",
  notesEs: "El objetivo de este proyecto es reproducir el código fuente 1:1 de Creatures 2.",
};
