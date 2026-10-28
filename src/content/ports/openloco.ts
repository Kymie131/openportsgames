import type { Port } from "@/lib/ports/schema";

export const openLoco: Port = {
  schema: "port",
  id: "openloco",
  title: "OpenLoco",
  game: "Chris Sawyer's Locomotion",
  developers: ["OpenLoco Team"],
  publisher: "Atari",
  originalYear: 2004,
  genre: "simulation",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "linux"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenLoco/OpenLoco"],
  website: "https://openloco.io/",
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  features: [
    "Open-source reimplementation of Transport Tycoon successor",
    "Modern UI enhancements and bug fixes",
    "Cross-platform support",
  ],
  featuresEs: [
    "Reimplementación de código abierto del sucesor de Transport Tycoon",
    "Mejoras de interfaz y correcciones de errores",
    "Soporte multiplataforma",
  ],
  notes:
    "Reimplementation of Chris Sawyer's Locomotion requiring original game data files.",
  notesEs:
    "Reimplementación de Chris Sawyer's Locomotion que requiere los archivos originales del juego.",
  cover: {
    src: "https://raw.githubusercontent.com/OpenLoco/OpenLoco/master/resources/logo.png",
    alt: "OpenLoco",
    credit: "OpenLoco Team",
  },
};
