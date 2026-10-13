import type { Port } from "@/lib/ports/schema";

export const TheUrbzSimsInTheCity: Port = {
  schema: "port",
  id: "the-urbz-sims-in-the-city",
  title: "The Urbz: Sims in the City",
  game: "The Urbz: Sims in the City",
  developers: ["SimsAdvanceRet"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SimsAdvanceRet/UrbzGBADecomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
};
