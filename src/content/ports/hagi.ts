import type { Port } from "@/lib/ports/schema";

export const hagi: Port = {
  schema: "port",
  id: "hagi",
  title: "Hagi (GameCube/Wii Emulator)",
  game: "Hagi",
  developers: ["GRAnimated"],
  publisher: "GRAnimated",
  originalYear: 2023,
  portType: "decompilation",
  kind: "tool",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/GRAnimated/Hagi"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["GameCube"],
  summary: "Ianis Hagi is a Romanian professional footballer who plays as an attacking midfielder or a winger for Süper Lig club Alanyaspor and the Romania national team.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/b/b7/Ianis_Hagi_2015_%28cropped%29.JPG?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    alt: "Hagi (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Decompilation of the Hagi GameCube and Wii emulator bundled with Super Mario 3D All-Stars. It is an emulator, not a game.",
  notesEs:
    "Decompilación del emulador Hagi de GameCube y Wii incluido en Super Mario 3D All-Stars. Es un emulador, no un juego.",
};
