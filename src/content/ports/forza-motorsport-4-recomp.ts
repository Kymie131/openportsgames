import type { Port } from "@/lib/ports/schema";

export const forzaMotorsport4Recomp: Port = {
  schema: "port",
  id: "forza-motorsport-4-recomp",
  title: "Forza Motorsport 4 Recompiled",
  game: "Forza Motorsport 4",
  developers: ["Alexbeav"],
  publisher: "Microsoft Studios",
  originalYear: 2011,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Alexbeav/fm4-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Forza Motorsport 4 (Xbox 360) to native Windows via ReXGlue. You supply the game files.",
  notesEs:
    "Recompilación de Forza Motorsport 4 (Xbox 360) a Windows nativo mediante ReXGlue. Tú aportas los archivos.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f1/Forza_Motorsport_4_cover.jpg",
    alt: "Forza Motorsport 4 (box art)",
    credit: "Wikipedia",
  },
};
