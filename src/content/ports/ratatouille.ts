import type { Port } from "@/lib/ports/schema";

export const Ratatouille: Port = {
  schema: "port",
  id: "ratatouille",
  title: "Ratatouille",
  game: "Ratatouille",
  developers: ["ZounaModding"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ZounaModding/RatDecomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/3/37/Ratatouille_home_cooked.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "Ratatouille (cover)",
    credit: "Wikipedia",
  },
};
