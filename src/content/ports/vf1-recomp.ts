import type { Port } from "@/lib/ports/schema";

export const Vf1Recomp: Port = {
  schema: "port",
  id: "vf1-recomp",
  title: "Vf1 recomp",  game: "Virtua Fighter",
  developers: ["mr-finster"],  publisher: "Sega",  originalYear: 1993,
  portType: "recompilation",  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.7.0", date: "2026-11-10" },
  sources: ["https://github.com/mr-finster/vf1-recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Arcade"],  summary: "Virtua Fighter is a 1993 arcade fighting game developed by Sega AM2 and published by Sega. It was the first 3D fighting game, using polygonal fighters and a ring-out system.",  summaryEs: "Virtua Fighter es un juego de lucha de arcade de 1993 desarrollado por Sega AM2 y publicado por Sega. Fue el primer juego de lucha en 3D, con luchadores poligonales y un sistema de salida del ring.",  downloads: [
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
