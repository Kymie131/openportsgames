import type { Port } from "@/lib/ports/schema";

export const daggerfallUnity: Port = {
  schema: "port",
  id: "daggerfall-unity",
  title: "Daggerfall Unity",
  game: "The Elder Scrolls II: Daggerfall",
  developers: ["Bethesda Softworks"],
  publisher: "Bethesda Softworks",
  originalYear: 1996,
  portType: "reimplementation",
  genre: "rpg",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.1.1-cve-2025", date: "2025-10-05" },
  sources: ["https://github.com/Interkarma/daggerfall-unity"],
  website: "https://www.dfworkshop.net/",
  docs: "https://github.com/Interkarma/daggerfall-unity/wiki",
  license: {
    spdx: "MIT",
    note: "game assets remain under their original license",
  },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-19",
  notes:
    "Open source recreation of Daggerfall on the Unity engine, now free to play for everyone. The Daggerfall Unity Installer bundles the required game data.",
};