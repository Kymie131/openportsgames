import type { Port } from "@/lib/ports/schema";

export const EarthboundPhaseDistorter: Port = {
  schema: "port",
  id: "earthbound-phase-distorter",
  title: "EarthBound (Phase Distorter)",
  game: "EarthBound (Phase Distorter)",
  developers: ["TheRunaway5"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.5", date: "2026-10-19" },
  sources: ["https://github.com/TheRunaway5/Phase-Distorter"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "EarthBound, originally released in Japan as Mother 2: Gīgu no Gyakushū, is a 1994 role-playing video game developed by Ape Inc. and HAL Laboratory and published by Nintendo for the Super Nintendo Entertainment System. The second entry in the Mother series, it follows a young boy named Ness and his party of Paula, Jeff and Poo, as they travel the world to collect melodies from eight Sanctuaries to defeat the universal cosmic destroyer Giygas.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  downloads: [
    {
      label: "Phase-Distorter-0.5-launchers-multiarch",
      url: "https://github.com/TheRunaway5/Phase-Distorter/releases/download/0.5/Phase-Distorter-0.5-launchers-multiarch.zip",
      size: "35.9 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/TheRunaway5/Phase-Distorter/releases/download/0.5/Phase-Distorter-0.5-linux-x86_64.zip",
      size: "9.5 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/TheRunaway5/Phase-Distorter/releases/download/0.5/Phase-Distorter-0.5-macos-universal.zip",
      size: "12.7 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/TheRunaway5/Phase-Distorter/releases/download/0.5/Phase-Distorter-0.5-windows-x86_64.zip",
      size: "13.7 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/earthbound-phase-distorter.svg",
    alt: "EarthBound (Phase Distorter) (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "A Mother 2/EarthBound PC Port.",
  notesEs: "Un port para PC de Mother 2 / EarthBound.",
};
