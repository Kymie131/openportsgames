import type { Port } from "@/lib/ports/schema";

export const mkwRecomp: Port = {
  schema: "port",
  id: "mkw-recomp",
  title: "Mario Kart World (mkw-recomp)",
  game: "Mario Kart World",
  developers: ["adriadam10"],
  publisher: "Nintendo",
  originalYear: 2025,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.1.13", date: "2026-11-16" },
  sources: ["https://github.com/adriadam10/mkw-recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch 2"],
  summary:
    "Mario Kart World is a 2025 kart racing game developed by Nintendo EPD and published by Nintendo for the Nintendo Switch 2. It introduces an open world, off-road techniques, an elimination rally mode and unlockable costumes, with races for up to 24 players.",
  summaryEs:
    "Mario Kart World es un juego de carreras de karts de 2025 desarrollado por Nintendo EPD y publicado por Nintendo para Nintendo Switch 2. Introduce un mundo abierto, técnicas todoterreno, un modo de rally eliminatorio y trajes desbloqueables, con carreras de hasta 24 jugadores.",
  notes:
    "Static recompilation of Mario Kart World 1.0.0 and 1.8.0 for Windows and Linux on ARM and x64. It ships no game files: you must supply your own copy.",
  notesEs:
    "Recompilación estática de Mario Kart World 1.0.0 y 1.8.0 para Windows y Linux en ARM y x64. No incluye archivos del juego: debes aportar tu propia copia.",
  related: ["mario-kart-world-switch2mac"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/65/Mario_Kart_World_Cover_Artwork.png",
    alt: "Mario Kart World (box art)",
    credit: "Wikipedia",
  },
};
