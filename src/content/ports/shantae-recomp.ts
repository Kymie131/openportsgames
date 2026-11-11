import type { Port } from "@/lib/ports/schema";

export const shantaeRecomp: Port = {
  schema: "port",
  id: "shantae-recomp",
  title: "Shantae Recompiled",
  game: "Shantae",
  developers: ["vibecodekun"],
  publisher: "WayForward",
  originalYear: 2002,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.2.0", date: "2026-10-22" },
  sources: ["https://github.com/vibecodekun/shantaerecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Game Boy Color"],
  summary: "Shantae is a series of platform video games developed by American independent video game developer and publisher WayForward. The eponymous heroine of the series was created by Erin Bozon, while the games were created by her husband Matt Bozon. The series began in 2002 with the original Shantae, and currently consists of six games, with a seventh in development.",
  summaryEs: "Shantae es una serie de videojuegos de plataformas desarrollados por WayForward. La heroína epónima de la serie, una medio genio, fue creada por Erin Bozon, mientras que los juegos fueron creados a partir de este personaje por su esposo Matt Bozon. La serie consta de seis juegos: Shantae (2002), Shantae: Risky's Revenge (2010), Shantae and the Pirate's Curse (2014), Shantae: Half-Genie Hero (2016), Shantae and the Seven Sirens (2019) y Shantae Advance: Risky Revolution (2025).",
  notes:
    "Static recompilation of Shantae (Game Boy Color) for Windows and Linux, with an expanded view, no slowdown, rewind and shader presets. It needs your own ROM.",
  notesEs:
    "Recompilación estática de Shantae (Game Boy Color) para Windows y Linux, con vista ampliada, sin ralentización, rebobinado y preajustes de shaders. Necesita tu propia ROM.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/vibecodekun/shantaerecomp/releases/download/v0.2.0/shantae-recomp-0.2.0-linux-aarch64.tar.gz",
      size: "67.9 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/vibecodekun/shantaerecomp/releases/download/v0.2.0/shantae-recomp-0.2.0-linux-x86_64.tar.gz",
      size: "68.7 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/vibecodekun/shantaerecomp/releases/download/v0.2.0/shantae-recomp-0.2.0-windows-arm64.zip",
      size: "75.3 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/vibecodekun/shantaerecomp/releases/download/v0.2.0/shantae-recomp-0.2.0-windows-x64.zip",
      size: "81.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/vibecodekun/shantaerecomp/releases/download/v0.2.0/shantae-recomp-0.2.0-windows-x86.zip",
      size: "80.0 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/vibecodekun/shantaerecomp/releases/download/v0.2.0/Shantae_Recomp-0.2.0-aarch64.AppImage",
      size: "65.2 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Boxarts/Shantae%20(USA).png",
    alt: "Shantae (box art)",
    credit: "Box art",
  },
  screenshots: [
    {
      src: "https://thumbnails.libretro.com/Nintendo%20-%20Game%20Boy%20Color/Named_Snaps/Shantae%20(USA).png",
      alt: "Shantae (screenshot)",
      credit: "Libretro",
    },
  ],
};
