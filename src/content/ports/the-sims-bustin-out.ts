import type { Port } from "@/lib/ports/schema";

export const TheSimsBustinOut: Port = {
  schema: "port",
  id: "the-sims-bustin-out",
  title: "The Sims: Bustin' Out",
  game: "The Sims: Bustin' Out",
  developers: ["SimsAdvanceRet"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SimsAdvanceRet/BustinOutGBADecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/37/Bustingoutbox.jpg",
    alt: "The Sims: Bustin' Out (box art)",
    credit: "Wikipedia",
  },
  summary: "The Sims Bustin' Out is a 2003 social simulation video game developed by Maxis and published by Electronic Arts for the Game Boy Advance, GameCube, PlayStation 2 and Xbox, with a port for the N-Gage following in 2004. It is the second title in The Sims console series, and the first title not to be concurrently released for Microsoft Windows.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "A WIP disassembly/decompilation project of The Sims: Bustin' Out on the Game Boy Advance.",
  notesEs:
    "Proyecto de desensamblado/decompilación de The Sims: Bustin' Out para Game Boy Advance, en desarrollo.",
};
