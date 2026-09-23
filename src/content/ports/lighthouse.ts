import type { Port } from "@/lib/ports/schema";

export const lighthouse: Port = {
  schema: "port",
  id: "lighthouse",
  title: "Lighthouse",
  game: "Banjo-Kazooie",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1998,
  genre: "platformer",
  openSource: true,
  portType: "decompilation",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.1.0", date: "2026-08-17" },
  sources: ["https://github.com/HarbourMasters/Lighthouse"],
  license: { spdx: "CC0-1.0" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "ROM and hack extraction sped up by up to 95%",
    "Presets menu and romhack support",
    "Save editor and improved widescreen support",
  ],
  notes:
    "Native PC port of Banjo-Kazooie for the libultraship engine, by the HarbourMasters team. Requires the player's own legally obtained Banjo-Kazooie ROM; the launcher extracts the game data from it.",
};
