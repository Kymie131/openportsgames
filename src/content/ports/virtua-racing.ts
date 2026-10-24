import type { Port } from "@/lib/ports/schema";

export const VirtuaRacing: Port = {
  schema: "port",
  id: "virtua-racing",
  title: "Virtua Racing",
  game: "Virtua Racing",
  developers: ["matiaszanolli"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/matiaszanolli/sega-vr-disasm"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/12/Virtua_Racing_arcade_flyer.jpg",
    alt: "Virtua Racing (box art)",
    credit: "Wikipedia",
  },
  summary: "Virtua Racing (V.R.) is a 1992 Formula One racing video game developed by Sega AM2 and published by Sega for arcades. It was initially a proof-of-concept application for exercising the \"Model 1\", a new 3D graphics platform then under development. The results were so encouraging that Virtua Racing was fully developed into a standalone arcade title.",
  summaryEs: "Virtua Racing o también llamado V.R., es un videojuego arcade de Fórmula 1 que salió en recreativas en octubre de 1992, desarrollado por Sega-AM2 para su nueva placa \"Model 1\". Es el tercer juego de coches en usar entornos, personajes y automóviles totalmente poligonales. Virtua Racing también introdujo algo novedoso para aquel año, el \"V.R. View System\", que permitía al jugador elegir entre cuatro vistas diferentes. Este sistema también se usó en otros juegos de Sega como Daytona USA. Virtua Racing fue la primera recreativa que usó la relación de aspecto 16:9.",
  notes:
    "Complete static recompilation of Virtua Racing for the Sega 32X (optimization in progress).",
  notesEs:
    "Recompilación estática completa de Virtua Racing para Sega 32X (optimización en curso).",
};
