import type { Port } from "@/lib/ports/schema";

export const icoPc: Port = {
  schema: "port",
  id: "ico-pc",
  title: "ICO PC",
  game: "Ico",
  developers: ["nathanialf"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2001,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/nathanialf/ico-pc"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Ico is a 2001 action-adventure video game by Sony Computer Entertainment for the PlayStation 2. It was first released in September and December 2001 for North America and Japan, respectively, with a March 2002 release for Europe. It was first re-released in Europe with its spiritual successor, Shadow of the Colossus, in 2006. A high-definition remaster, included in the Ico & Shadow of the Colossus Collection, was released for PlayStation 3 in 2011. The story follows Ico and Yorda as they escape an abandoned castle to save each other from being sacrificed.",
  summaryEs: "Ico es un videojuego de aventura-puzles para PlayStation 2 publicado a finales del año 2001 por Sony Computer Entertainment. La dirección del proyecto y el desarrollo del mismo corrieron a cargo de Fumito Ueda, quien quería crear un juego de estilo minimalista alrededor del concepto «chico conoce chica». Aunque fue originalmente planeado para la PlayStation, los cuatro años que duró su desarrollo causaron el cambio de plataforma.",
  notes:
    "Native port of Ico built from the PlayStation 2 decompilation, for Windows, Linux, macOS and Android. It needs your own copy of the game.",
  notesEs:
    "Port nativo de Ico construido a partir de la decompilación de PlayStation 2, para Windows, Linux, macOS y Android. Necesita tu propia copia del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Sony%20-%20PlayStation%202/Named_Boxarts/Ico%20(Europe)%20(En,Fr,De,Es,It).png",
    alt: "Ico (box art)",
    credit: "Box art",
  },
};
