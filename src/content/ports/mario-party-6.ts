import type { Port } from "@/lib/ports/schema";

export const MarioParty6: Port = {
  schema: "port",
  id: "mario-party-6",
  title: "Mario Party 6",
  game: "Mario Party 6",
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
  sources: ["https://github.com/mariopartyrd/marioparty6"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c6/Mario_Party_6_Coverart.png",
    alt: "Mario Party 6 (cover)",
    credit: "Wikipedia",
  },
};
