import type { Port } from "@/lib/ports/schema";

export const perfectDarkDabsMod: Port = {
  schema: "port",
  id: "perfect-dark-dabs-mod",
  title: "Dab's Mod",
  game: "Perfect Dark",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 2000,
  genre: "shooter",
  openSource: true,
  portType: "decompilation",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "3.8.0", date: "2026-09-17" },
  sources: ["https://github.com/DabDavis/perfect-dark-dabs-mod"],
  license: { spdx: "MIT" },
  aiDisclosure: true,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "Jump, combat roll, melee combos and third-person camera",
    "Combat Simulator raised to 80 simulants",
    "GE-X Plus GoldenEye remake loading from your ROM",
    "One-key bug reporting from the game",
  ],
  notes:
    "Community decompilation of Perfect Dark with extended mod features, published as 'Dab's Mod'. The repository ships a CLAUDE.md and CLAUDE notes, documenting AI-assisted development. Requires the player's own legally obtained Perfect Dark ROM.",
};
