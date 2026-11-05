import type { Port } from "@/lib/ports/schema";

export const carnage3d: Port = {
  schema: "port",
  id: "carnage3d",
  title: "Carnage3D",
  game: "Grand Theft Auto",
  developers: ["codenamecpp"],
  publisher: "BMG Interactive",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "open-world",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/codenamecpp/carnage3d"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS", "Windows"],
  summary:
    "Grand Theft Auto is an action-adventure game developed by DMA Design and published by BMG Interactive in 1997. It follows a criminal rising through the underworld across three fictional cities.",
  summaryEs:
    "Grand Theft Auto es un juego de acción y aventura desarrollado por DMA Design y publicado por BMG Interactive en 1997. Sigue a un criminal que asciende en el hampa a través de tres ciudades ficticias.",
  cover: {
    src: "https://openportsgames.com/covers/generated/carnage3d.svg",
    alt: "Grand Theft Auto (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Carnage3D is an open-source reimplementation of Grand Theft Auto 1 with split-screen support. It requires the original game assets.",
  notesEs:
    "Carnage3D es una reimplementación de código abierto de Grand Theft Auto 1 con soporte de pantalla dividida. Requiere los recursos originales del juego.",
};
