import type { Port } from "@/lib/ports/schema";

export const twinE: Port = {
  schema: "port",
  id: "twin-e",
  title: "TwinEngine",
  game: "Little Big Adventure",
  developers: ["LBALab"],
  publisher: "Electronic Arts",
  originalYear: 1994,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/LBALab/twin-e"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS"],
  notes: "Open-source engine for Little Big Adventure that runs the original game assets.",
  notesEs:
    "Motor de código abierto para Little Big Adventure que ejecuta los recursos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/83/Little_Big_Adventure.jpg",
    alt: "Little Big Adventure (cover)",
    credit: "Wikipedia",
  },
};
