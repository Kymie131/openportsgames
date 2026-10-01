import type { Port } from "@/lib/ports/schema";

export const vanillaConquer: Port = {
  schema: "port",
  id: "vanilla-conquer",
  title: "Vanilla Conquer",
  game: "Command & Conquer",
  developers: ["The Assembly Armada"],
  publisher: "Westwood Studios",
  originalYear: 1995,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TheAssemblyArmada/Vanilla-Conquer"],
  discord: "https://discord.gg/UnWK2Tw",
  license: {
    spdx: "NOASSERTION",
    note: "project-specific license terms, not an OSI license",
  },
  verified: false,
  originalSystem: "MS-DOS",
  notes:
    "Engine reimplementation for the original Command & Conquer. The single GitHub release is a prerelease.",
};
