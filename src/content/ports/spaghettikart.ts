import type { Port } from "@/lib/ports/schema";

export const spaghettiKart: Port = {
  schema: "port",
  id: "spaghettikart",
  title: "SpaghettiKart",
  game: "Mario Kart 64",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1996,
  genre: "racing",
  openSource: true,
  portType: "decompilation",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.0.0", date: "2026-02-25" },
  sources: ["https://github.com/HarbourMasters/SpaghettiKart"],
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "Custom track system with new render layers and finish lines",
    "Frame interpolation and up to 400% internal resolution",
    "New audio driver and macOS universal builds",
  ],
  notes:
    "Native port of Mario Kart 64 from the decompilation, by the HarbourMasters team. Requires a legally obtained North American or European Mario Kart 64 ROM; the game's data is extracted from the player's own copy.",
};
