import type { Port } from "@/lib/ports/schema";

export const MarioParty2: Port = {
  schema: "port",
  id: "mario-party-2",
  title: "Mario Party 2",
  game: "Mario Party 2",
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
  sources: ["https://github.com/mariopartyrd/marioparty2"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
};
