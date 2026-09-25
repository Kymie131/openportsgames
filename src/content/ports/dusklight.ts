import type { Port } from "@/lib/ports/schema";

export const dusklight: Port = {
  schema: "port",
  id: "dusklight",
  title: "Dusklight",
  game: "The Legend of Zelda: Twilight Princess",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 2006,
  genre: "action-adventure",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: "2.0.2", date: "2026-09-25" },
  sources: ["https://github.com/TwilitRealm/dusklight"],
  website: "https://twilitrealm.dev",
  license: { spdx: "CC0-1.0" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-25",
  screenshots: [
    {
      src: "https://twilitrealm.dev/_astro/shot-platform.Cp2I0l-W_1nEglP.webp",
      alt: "The hero crossing a platform in Dusklight's Twilight Princess reimplementation",
      credit: "Dusklight",
    },
  ],
  originalSystem: "GameCube",
  features: [
    "Full game playable from start to finish",
    "Official Windows, Linux, macOS and Android builds",
    "Community mod support",
  ],
  notes:
    "From-scratch reimplementation of The Legend of Zelda: Twilight Princess that reads the game's assets from a legally dumped copy of the game disc. Ships official builds for every catalog platform, with the Android build compiled for ARM64; some platforms are supported on a best-effort basis.",
};
