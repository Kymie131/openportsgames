import type { Port } from "@/lib/ports/schema";

export const starship: Port = {
  schema: "port",
  id: "starship",
  title: "Starship",
  game: "Star Fox 64",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1997,
  genre: "shooter",
  openSource: true,
  portType: "decompilation",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "2.0.0", date: "2025-05-25" },
  sources: ["https://github.com/HarbourMasters/Starship"],
  license: { spdx: "CC0-1.0" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "Built-in asset generation from US, JP and EU ROMs",
    "Event hook system for modding plus cheats",
    "5.1 surround sound support",
  ],
  notes:
    "Native PC port of Star Fox 64 from the decompilation, by the HarbourMasters team. Uses the game's data from a legally obtained North American, Japanese or European ROM; the launcher extracts the required assets from the user's own copy.",
};