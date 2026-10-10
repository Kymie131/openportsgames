import type { Port } from "@/lib/ports/schema";

export const dragonBallRagingBlast2Recomp: Port = {
  schema: "port",
  id: "dragon-ball-raging-blast-2-recomp",
  title: "Dragon Ball: Raging Blast 2 Recompiled",
  game: "Dragon Ball: Raging Blast 2",
  developers: ["WistfulHopes"],
  publisher: "Bandai Namco",
  originalYear: 2010,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/WistfulHopes/RB2"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes: "Recompiled with the ReXGlue SDK.",
  notesEs: "Recompilado con el SDK ReXGlue.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6f/Raging_Blast_2.jpg",
    alt: "Dragon Ball: Raging Blast 2 (box art)",
    credit: "Wikipedia",
  },
};
