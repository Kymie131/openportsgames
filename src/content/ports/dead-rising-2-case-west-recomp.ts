import type { Port } from "@/lib/ports/schema";

export const deadRising2CaseWestRecomp: Port = {
  schema: "port",
  id: "dead-rising-2-case-west-recomp",
  title: "Dead Rising 2: Case West Recompiled",
  game: "Dead Rising 2: Case West",
  developers: ["wivi514"],
  publisher: "Capcom",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "1.1.2", date: "2026-10-14" },
  sources: ["https://github.com/wivi514/Dead_Rising_2_Case_West_Xenon_Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Dead Rising 2: Case West is a action-adventure game in 2010.",
  summaryEs: "Dead Rising 2: Case West es un videojuego de acción y aventura en 2010.",
  downloads: [
    {
      label: "Linux AppImage",
      url: "https://github.com/wivi514/Dead_Rising_2_Case_West_Xenon_Recomp/releases/download/v1.1.2/CaseWestRecomp-linux-x86_64.AppImage",
      size: "29.1 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/wivi514/Dead_Rising_2_Case_West_Xenon_Recomp/releases/download/v1.1.2/CaseWestRecomp-macos-arm64.zip",
      size: "27.5 MB",
    },
    {
      label: "CaseWestRecomp-steamdeck-x86_64",
      url: "https://github.com/wivi514/Dead_Rising_2_Case_West_Xenon_Recomp/releases/download/v1.1.2/CaseWestRecomp-steamdeck-x86_64.tar.gz",
      size: "30.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/wivi514/Dead_Rising_2_Case_West_Xenon_Recomp/releases/download/v1.1.2/CaseWestRecomp-windows-x86_64.zip",
      size: "23.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/dead-rising-2-case-west.svg",
    alt: "Dead Rising 2: Case West (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Recompilation of Dead Rising 2: Case West (Xbox 360) to native Windows via ReXGlue. You supply the game files.",
  notesEs:
    "Recompilación de Dead Rising 2: Case West (Xbox 360) a Windows nativo mediante ReXGlue. Tú aportas los archivos.",
};
