import type { Port } from "@/lib/ports/schema";

export const DukeNukem64: Port = {
  schema: "port",
  id: "duke-nukem-64",
  title: "Duke Nukem 64",
  game: "Duke Nukem 64",
  developers: ["NBlood"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/NBlood/Duke64-RE"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/61/Duke_Nukem_3D_Coverart.png",
    alt: "Duke Nukem 64 (cover)",
    credit: "Wikipedia",
  },
};
