import type { Port } from "@/lib/ports/schema";

export const NewPlayControlPikmin2: Port = {
  schema: "port",
  id: "new-play-control-pikmin-2",
  title: "New Play Control! Pikmin 2",
  game: "New Play Control! Pikmin 2",
  developers: ["projectPiki"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/projectPiki/pik2wii"],
  license: { spdx: "Unlicense" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/38/Pikmin_2_Case.jpg",
    alt: "New Play Control! Pikmin 2 (box art)",
    credit: "Wikipedia",
  },
  notes:
    "A decompilation of New Play Control! Pikmin 2 (USA) brought to you by fans of the series.",
  notesEs: "Una decompilación de New Play Control! Pikmin 2 (USA) hecha por fans de la saga.",
};
