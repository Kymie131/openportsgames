import type { Port } from "@/lib/ports/schema";

export const dkcRecompiled: Port = {
  schema: "port",
  id: "dkc-recompiled",
  title: "DKC 1/2/3 Recompiled",
  game: "Donkey Kong Country",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1994,
  genre: "platformer",
  openSource: true,
  portType: "recompilation",
  platforms: ["windows", "macos"],
  status: "beta",
  release: { version: "0.0.17", date: "2026-09-19" },
  sources: [
    "https://github.com/elliotttate/DKC1Recomp",
    "https://github.com/elliotttate/DKC2Recomp",
    "https://github.com/elliotttate/DKC3Recomp",
  ],
  license: { spdx: "MIT" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Super Nintendo",
  features: [
    "Native widescreen presentation (16:10 and 16:9)",
    "Windows and macOS ARM64 builds with CRT shaders",
    "MSU-1 music packs and mod variants",
    "Co-op fixes for Donkey Kong Country 2",
  ],
  notes:
    "Recompilation trilogy covering Donkey Kong Country, Donkey Kong Country 2: Diddy's Kong Quest and Donkey Kong Country 3: Dixie Kong's Double Trouble, each from its own repository. Requires the player's own legally dumped ROM per game.",
};