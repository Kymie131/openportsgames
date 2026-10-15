import type { Port } from "@/lib/ports/schema";

export const TheUrbzSimsInTheCity: Port = {
  schema: "port",
  id: "the-urbz-sims-in-the-city",
  title: "The Urbz: Sims in the City",
  game: "The Urbz: Sims in the City",
  developers: ["SimsAdvanceRet"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SimsAdvanceRet/UrbzGBADecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9e/The_Urbz_-_Sims_in_the_City_Coverart.png",
    alt: "The Urbz: Sims in the City (box art)",
    credit: "Wikipedia",
  },
  notes:
    "A WIP disassembly/decompilation project of The Urbz: Sims in the City on the Game Boy Advance.",
  notesEs:
    "Proyecto de desensamblado/decompilación de The Urbz: Sims in the City para Game Boy Advance, en desarrollo.",
};
