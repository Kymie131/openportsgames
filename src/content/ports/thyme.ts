import type { Port } from "@/lib/ports/schema";

export const thymePort: Port = {
  schema: "port",
  id: "thyme",
  title: "Thyme",
  game: "Command & Conquer: Generals - Zero Hour",
  developers: ["The Assembly Armada"],
  publisher: "EA Pacific",
  originalYear: 2003,
  genre: "strategy",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/TheAssemblyArmada/Thyme"],
  discord: "https://discord.gg/UnWK2Tw",
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Engine reimplementation for Generals and Zero Hour. The single GitHub release is a prerelease, so no stable version is recorded.",
  screenshots: [
    {
      src: "https://github.com/TheAssemblyArmada/Thyme/workflows/windows/badge.svg",
      alt: "windows",
      credit: "TheAssemblyArmada",
    },
    {
      src: "https://github.com/TheAssemblyArmada/Thyme/workflows/linux/badge.svg",
      alt: "linux",
      credit: "TheAssemblyArmada",
    },
    {
      src: "https://codecov.io/gh/TheAssemblyArmada/Thyme/branch/develop/graph/badge.svg",
      alt: "codecov",
      credit: "TheAssemblyArmada",
    },
  ],
};
