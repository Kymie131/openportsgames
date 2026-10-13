import type { Port } from "@/lib/ports/schema";

export const HarryPotterAndThePrisonerOfAzkaban: Port = {
  schema: "port",
  id: "harry-potter-and-the-prisoner-of-azkaban",
  title: "Harry Potter and the Prisoner of Azkaban",
  game: "Harry Potter and the Prisoner of Azkaban",
  developers: ["holly-hacker"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/holly-hacker/hp3-gba-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Game Boy Advance",
};
