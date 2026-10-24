import type { Port } from "@/lib/ports/schema";

export const gta2Re: Port = {
  schema: "port",
  id: "gta2-re",
  title: "GTA2 Re",
  game: "Grand Theft Auto 2",
  developers: ["CriminalRETeam"],
  publisher: "Rockstar Games",
  originalYear: 1999,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/CriminalRETeam/gta2_re"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Grand Theft Auto 2 is a 1999 action-adventure game developed by DMA Design and published by Rockstar Games. It is the sequel to 1997's Grand Theft Auto, and the second main entry in the Grand Theft Auto series. Set within a retrofuturistic metropolis known as \"Anywhere City\", the game focuses on players taking the role of a criminal as they roam an open world, conducting jobs for various crime syndicates and having free rein to do whatever they wish to achieve their goal. The intro involves live-action scenes filmed by Rockstar Games.",
  summaryEs: "Grand Theft Auto 2 es un videojuego de acción y aventura de mundo abierto desarrollado por DMA Design y distribuido por Rockstar Games. Es la secuela de Grand Theft Auto de 1997 y la tercera entrega de la serie Grand Theft Auto luego de Grand Theft Auto: London, ambientado en una metrópolis retrofuturista conocida como \"Anywhere City\", el juego se centra en que los jugadores asumen el papel de un criminal mientras de ambular por un mundo abierto, realizan trabajos para varios sindicatos del crimen y tienen rienda suelta para hacer lo que deseen para lograr su objetivo.",
  notes:
    "Reimplementation of Grand Theft Auto 2 (PC 10.5). It needs your own copy of the game files.",
  notesEs:
    "Reimplementación de Grand Theft Auto 2 (PC 10.5). Necesita tu propia copia de los archivos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2e/GTA2_Box_art.jpg",
    alt: "Grand Theft Auto 2 (cover)",
    credit: "Wikipedia",
  },
};
