import type { Port } from "@/lib/ports/schema";

export const MarioAndLuigiBowsersInsideStory: Port = {
  schema: "port",
  id: "mario-and-luigi-bowsers-inside-story",
  title: "Mario & Luigi: Bowser's Inside Story",
  game: "Mario & Luigi: Bowser's Inside Story",
  developers: ["istornz"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/istornz/bowsers-inside-story-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo DS",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/69/Mario_%26_Luigi_3_NA_Cover.PNG",
    alt: "Mario & Luigi: Bowser's Inside Story (box art)",
    credit: "Wikipedia",
  },
  notes:
    "A work-in-progress matching decompilation of Mario & Luigi: Bowser's Inside Story (Nintendo DS).",
  notesEs:
    "Decompilación que coincide de Mario & Luigi: Bowser's Inside Story (Nintendo DS), en desarrollo.",
};
