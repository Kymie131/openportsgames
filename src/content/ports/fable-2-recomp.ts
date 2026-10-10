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
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Fable II (Xbox 360) with the ReXGlue SDK. An optional Windows launcher sets resolution, internal render scale, filtering, VSync and the FPS cap (30/60/120 and uncapped), with keyboard and mouse. A second recompilation project exists in parallel.",
  notesEs:
    "Recompilación de Fable II (Xbox 360) con el SDK ReXGlue. Un lanzador opcional para Windows ajusta resolución, escalado interno, filtrado, VSync y el límite de FPS (30/60/120 y sin tope), con teclado y ratón. Existe un segundo proyecto de recompilación en paralelo.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Fable_II_cover_%28cropped%29.png",
    alt: "Fable II (box art)",
    credit: "Wikipedia",
  },
};
