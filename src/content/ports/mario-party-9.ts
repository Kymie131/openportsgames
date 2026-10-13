import type { Port } from "@/lib/ports/schema";

export const MarioParty9: Port = {
  schema: "port",
  id: "mario-party-9",
  title: "Mario Party 9",
  game: "Mario Party 9",
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
  sources: ["https://github.com/mariopartyrd/marioparty9"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
