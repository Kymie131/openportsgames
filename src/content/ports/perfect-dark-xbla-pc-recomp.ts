import type { Port } from "@/lib/ports/schema";

export const perfectDarkXblaPcRecomp: Port = {
  schema: "port",
  id: "perfect-dark-xbla-pc-recomp",
  title: "Perfect Dark XBLA PC Recomp",
  game: "Perfect Dark (2010)",
  developers: ["CaiusCodes"],
  publisher: "Microsoft Game Studios",
  originalYear: 2010,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.9.1", date: "2026-11-06" },
  sources: ["https://github.com/CaiusCodes/Perfect-Dark-XBLA-PC-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox 360"],
  summary:
    "Perfect Dark is a 2010 Xbox Live Arcade remaster of Rare's 2000 Nintendo 64 first-person shooter. Agent Joanna Dark uncovers a conspiracy between the Carrington Institute and dataDyne.",
  summaryEs:
    "Perfect Dark es una remasterización de 2010 para Xbox Live Arcade del shooter de Nintendo 64 de Rare de 2000. La agente Joanna Dark descubre una conspiración entre el Instituto Carrington y dataDyne.",
  notes:
    "Native Windows PC recompilation of the Xbox 360/XBLA remaster using ReXGlue. It requires your own copy of the game.",
  notesEs:
    "Recompilación nativa para Windows de la remasterización de Xbox 360/XBLA usando ReXGlue. Requiere tu propia copia del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/CaiusCodes/Perfect-Dark-XBLA-PC-Recomp/releases/download/v0.9.1a/Perfect-Dark-XBLA-PC-Recomp-v0.9.1a.zip",
      size: "23.9 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/e/e8/Perfect_Dark_XBLA_cover.jpg",
    alt: "Perfect Dark (Xbox Live Arcade box art)",
    credit: "Wikipedia",
  },
};
