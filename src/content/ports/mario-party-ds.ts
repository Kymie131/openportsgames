import type { Port } from "@/lib/ports/schema";

export const MarioPartyDs: Port = {
  schema: "port",
  id: "mario-party-ds",
  title: "Mario Party DS",
  game: "Mario Party DS",
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
  sources: ["https://github.com/mariopartyrd/mariopartyDS"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo DS",
};
