import type { Port } from "@/lib/ports/schema";

export const fable2Recomp: Port = {
  schema: "port",
  id: "fable-2-recomp",
  title: "Fable II Recompiled",
  game: "Fable II",
  developers: ["himdo"],
  publisher: "Microsoft Game Studios",
  originalYear: 2008,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/himdo/Fable-2-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  summary: "Fable II is a 2008 action role-playing video game developed by Lionhead Studios and published by Microsoft Game Studios for Xbox 360. The game is the second installment in the Fable game series, and the sequel to 2004's Fable. The story takes place within the fictional land of Albion, 500 years after the first game. Players assume the role of a young hero who is destined to stop a former ruler turned madman from destroying the world. The game features several prominent actors portraying major characters in the game, including Zoë Wanamaker, Ron Glass and Stephen Fry.",
  summaryEs: "Fable II es un videojuego de rol de acción para la videoconsola Xbox 360, lanzado el 21 de octubre del 2008 y desarrollado por Lionhead Studios y publicado por Microsoft Game Studios. Se trata de una secuela a Fable (Xbox) y Fable: The Lost Chapters (PC).",
  notes:
    "Recompilation of Fable II (Xbox 360) with the ReXGlue SDK. An optional Windows launcher sets resolution, internal render scale, filtering, VSync and the FPS cap (30/60/120 and uncapped), with keyboard and mouse. A second recompilation project exists in parallel.",
  notesEs:
    "Recompilación de Fable II (Xbox 360) con el SDK ReXGlue. Un lanzador opcional para Windows ajusta resolución, escalado interno, filtrado, VSync y el límite de FPS (30/60/120 y sin tope), con teclado y ratón. Existe un segundo proyecto de recompilación en paralelo.",
  aiDisclosure: {
    source: "https://github.com/himdo/Fable-2-Recomp#readme",
    quote: "This project was made using Qwen3.8 27b.",
  },
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Fable_II_cover_%28cropped%29.png",
    alt: "Fable II (box art)",
    credit: "Wikipedia",
  },
};
