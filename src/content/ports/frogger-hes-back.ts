import type { Port } from "@/lib/ports/schema";

export const FroggerHesBack: Port = {
  schema: "port",
  id: "frogger-hes-back",
  title: "Frogger: He's Back!",
  game: "Frogger: He's Back!",
  developers: ["HighwayFrogs"],
  publisher: "Unknown",
  originalYear: 1997,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/HighwayFrogs/frogger-psx"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Frogger is a 1981 action video game developed by Konami and published by Sega for arcades. It was released in North America by Sega/Gremlin. The object of the game is to direct five frogs to their homes by dodging traffic on a busy road, then crossing a river by jumping on floating logs, turtles, and alligators.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "A compileable setup of Frogger 1997 for the Sony PlayStation. A perfect byte-match to the retail version.",
  notesEs:
    "Montaje compilable de Frogger (1997) para Sony PlayStation. Coincidencia exacta byte a byte con la versión comercial.",
};
