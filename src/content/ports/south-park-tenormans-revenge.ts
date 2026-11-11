import type { Port } from "@/lib/ports/schema";

export const southParkTenormansRevenge: Port = {
  schema: "port",
  id: "south-park-tenormans-revenge",
  title: "South Park: Tenorman's Revenge",
  game: "South Park: Tenorman's Revenge",
  developers: ["TekRantGaming"],
  publisher: "Microsoft Studios",
  originalYear: 2012,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.1.0", date: "2026-10-17" },
  sources: ["https://github.com/TekRantGaming/south-park-tenormans-revenge-recompiled"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox 360"],
  summary:
    "South Park: Tenorman's Revenge is a 2012 platform game developed by Other Ocean Interactive and published by Microsoft Studios. The boys travel through time to recover their Xbox hard drive from Scott Tenorman.",
  summaryEs:
    "South Park: Tenorman's Revenge es un juego de plataformas de 2012 desarrollado por Other Ocean Interactive y publicado por Microsoft Studios. Los chicos viajan en el tiempo para recuperar su disco duro de Xbox de Scott Tenorman.",
  notes:
    "Static recompilation of the Xbox Live Arcade game for Windows and Linux, using ReXGlue and the TRG launcher. It requires your own copy of the game.",
  notesEs:
    "Recompilación estática del juego de Xbox Live Arcade para Windows y Linux, con ReXGlue y el lanzador de TRG. Requiere tu propia copia del juego.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/TekRantGaming/south-park-tenormans-revenge-recompiled/releases/download/v0.1.0/SouthParkTR-v0.1.0-linux-x86_64.AppImage",
      size: "31.4 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/TekRantGaming/south-park-tenormans-revenge-recompiled/releases/download/v0.1.0/SouthParkTR-v0.1.0-windows-x64.zip",
      size: "18.8 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/19/SP_Tenormans_Revenge.jpg",
    alt: "South Park: Tenorman's Revenge (box art)",
    credit: "Wikipedia",
  },
};
