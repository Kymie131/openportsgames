import type { Port } from "@/lib/ports/schema";

export const shipOfHarkinian: Port = {
  schema: "port",
  id: "ship-of-harkinian",
  title: "Ship of Harkinian",
  game: "The Legend of Zelda: Ocarina of Time",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1998,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: "9.2.3", date: "2026-04-14" },
  sources: ["https://github.com/HarbourMasters/Shipwright"],
  website: "https://www.harbourmasters.org/game/ship-of-harkinian",
  docs: "https://wiki.shipofharkinian.com",
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Native port of Ocarina of Time from the decompilation project. Requires the original North American Ocarina of Time N64 ROM (legally obtained).",
};