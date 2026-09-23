import type { Port } from "@/lib/ports/schema";

export const twoShip: Port = {
  schema: "port",
  id: "2ship2harkinian",
  title: "2 Ship 2 Harkinian",
  game: "The Legend of Zelda: Majora's Mask",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "5.0.1", date: "2026-09-18" },
  sources: ["https://github.com/HarbourMasters/2ship2harkinian"],
  website: "https://www.harbourmasters.org/game/2ship2harkinian",
  license: {
    spdx: "CC0-1.0",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Native port of Majora's Mask from the decompilation project. Requires the original North American Majora's Mask N64 ROM (legally obtained).",
};