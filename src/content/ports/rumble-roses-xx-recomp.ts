import type { Port } from "@/lib/ports/schema";

export const rumbleRosesXxRecomp: Port = {
  schema: "port",
  id: "rumble-roses-xx-recomp",
  title: "Rumble Roses XX Recompiled",
  game: "Rumble Roses XX",
  developers: ["Revan67"],
  publisher: "Konami",
  originalYear: 2006,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Revan67/RumbleRosesXX-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Rumble Roses XX is a professional wrestling fighting game developed by Yuke's for the Xbox 360 as the sequel to the 2004 PlayStation 2 game Rumble Roses. The game was released by Konami in 2006.",
  summaryEs: "Rumble Roses XX es un videojuego de lucha lucha libre femenina del 2006, exclusivamente para la Xbox 360. Fue desarrollado por Konami y YUKE's Future Media Creators.",
  notes:
    "Recompilation of Rumble Roses XX (Xbox 360) for Windows. It needs the original game and does not bundle any content.",
  notesEs:
    "Recompilación de Rumble Roses XX (Xbox 360) para Windows. Necesita el juego original y no incluye ningún contenido.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/1a/Rumble_Roses_XX.jpg",
    alt: "Rumble Roses XX (box art)",
    credit: "Wikipedia",
  },
};
