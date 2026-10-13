import type { Port } from "@/lib/ports/schema";

export const MarioParty8: Port = {
  schema: "port",
  id: "mario-party-8",
  title: "Mario Party 8",
  game: "Mario Party 8",
  developers: ["mariopartyrd"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/mariopartyrd/marioparty8"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b2/Mario_Party_8_NA_Box_Art.png",
    alt: "Mario Party 8 (cover)",
    credit: "Wikipedia",
  },
};
