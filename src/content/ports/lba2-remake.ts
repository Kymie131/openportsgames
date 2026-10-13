import type { Port } from "@/lib/ports/schema";

export const lba2Remake: Port = {
  schema: "port",
  id: "lba2-remake",
  title: "LBA2 Remake",
  game: "Little Big Adventure 2",
  developers: ["LBALab"],
  publisher: "Electronic Arts",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/LBALab/lba2remake"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Microsoft Windows",
  notes:
    "Reimplementation of Little Big Adventure 2 (Twinsen's Odyssey) that runs the original game assets.",
  notesEs:
    "Reimplementación de Little Big Adventure 2 (Twinsen's Odyssey) que ejecuta los recursos del juego original.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/22/Little_Big_Adventure_2_cover.jpg",
    alt: "Little Big Adventure 2 (cover)",
    credit: "Wikipedia",
  },
};
