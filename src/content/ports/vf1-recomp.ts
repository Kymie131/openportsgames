import type { Port } from "@/lib/ports/schema";

export const Vf1Recomp: Port = {
  schema: "port",
  id: "vf1-recomp",
  title: "Vf1 recomp",
  game: "vf1 recomp",
  developers: ["mr-finster"],
  publisher: "Unknown",
  originalYear: 1993,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.7.0", date: "2026-11-10" },
  sources: ["https://github.com/mr-finster/vf1-recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "vf1 recomp is a shooter game, released in 1993.",
  summaryEs: "vf1 recomp es un videojuego de disparos, lanzado en 1993.",
  summaryGenerated: true,
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/mr-finster/vf1-recomp/releases/download/v1.7.0/VirtuaFighterRecomp-mac.zip",
      size: "10.1 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/mr-finster/vf1-recomp/releases/download/v1.7.0/VirtuaFighterRecomp-windows.zip",
      size: "7.5 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/mr-finster/vf1-recomp/releases/download/v1.7.0/VirtuaFighterRecomp-linux-arm64.tar.gz",
      size: "6.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/vf1-recomp.svg",
    alt: "vf1 recomp (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Virtua Fighter (Sega Model 1, 1993) statically recompiled for Mac, Windows and Steam Deck: up to 6x, widescreen, smooth 120 fps. Bring your own vf.zip.",
  notesEs:
    "Virtua Fighter (Sega Model 1, 1993) recompilado estáticamente para Mac, Windows y Steam Deck: hasta 6x, panorámico y 120 fps suaves. Aporta tu propio vf.zip.",
};
