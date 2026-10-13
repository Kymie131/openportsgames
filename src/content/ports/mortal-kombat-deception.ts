import type { Port } from "@/lib/ports/schema";

export const MortalKombatDeception: Port = {
  schema: "port",
  id: "mortal-kombat-deception",
  title: "Mortal Kombat: Deception",
  game: "Mortal Kombat: Deception",
  developers: ["ShulkMaster"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/ShulkMaster/mk-deception"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/29/MK_Deception_Cover_Artwork.jpeg",
    alt: "Mortal Kombat: Deception (cover)",
    credit: "Wikipedia",
  },
};
