import type { Port } from "@/lib/ports/schema";

export const NewPlayControlPikmin: Port = {
  schema: "port",
  id: "new-play-control-pikmin",
  title: "New Play Control! Pikmin",
  game: "New Play Control! Pikmin",
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
  sources: ["https://github.com/projectPiki/pik1wii"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/13/Pikmin_cover_art.jpg",
    alt: "New Play Control! Pikmin (cover)",
    credit: "Wikipedia",
  },
  notes:
    "A decompilation of New Play Control! Pikmin 1 (USA) brought to you by fans of the series.",
  notesEs: "Una decompilación de New Play Control! Pikmin 1 (USA) hecha por fans de la saga.",
};
