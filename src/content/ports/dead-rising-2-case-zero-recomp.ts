import type { Port } from "@/lib/ports/schema";

export const deadRising2CaseZeroRecomp: Port = {
  schema: "port",
  id: "dead-rising-2-case-zero-recomp",
  title: "Dead Rising 2: Case Zero",
  game: "Dead Rising 2: Case Zero",
  developers: ["wivi514"],
  publisher: "Capcom",
  originalYear: 2010,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "1.1.3", date: "2026-10-14" },
  sources: ["https://github.com/wivi514/Dead_Rising_2_Case_Zero_Xenon_Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystems: ["Xbox 360"],
  summary: "Dead Rising 2: Case Zero is a action-adventure game in 2010.",
  summaryEs: "Dead Rising 2: Case Zero es un videojuego de acción y aventura en 2010.",
  downloads: [
    {
      label: "Linux AppImage",
      url: "https://github.com/wivi514/Dead_Rising_2_Case_Zero_Xenon_Recomp/releases/download/v1.1.3/CaseZeroRecomp-linux-x86_64.AppImage",
      size: "29.1 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/wivi514/Dead_Rising_2_Case_Zero_Xenon_Recomp/releases/download/v1.1.3/CaseZeroRecomp-macos-arm64.zip",
      size: "26.9 MB",
    },
    {
      label: "CaseZeroRecomp-steamdeck-x86_64",
      url: "https://github.com/wivi514/Dead_Rising_2_Case_Zero_Xenon_Recomp/releases/download/v1.1.3/CaseZeroRecomp-steamdeck-x86_64.tar.gz",
      size: "30.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/wivi514/Dead_Rising_2_Case_Zero_Xenon_Recomp/releases/download/v1.1.3/CaseZeroRecomp-windows-x86_64.zip",
      size: "23.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/dead-rising-2-case-zero.svg",
    alt: "Dead Rising 2: Case Zero (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Native port of Dead Rising 2: Case Zero (Xbox 360) with XenonRecomp and XenosRecomp, on a purpose-built engine with a Vulkan renderer and real XMA audio. Fully playable start to finish, with online co-op, the level cap raised to 50 and a 60 fps mode.",
  notesEs:
    "Port nativo de Dead Rising 2: Case Zero (Xbox 360) con XenonRecomp y XenosRecomp, sobre un motor propio con renderizador Vulkan y audio XMA real. Completamente jugable de principio a fin, con cooperativo online, límite de nivel subido a 50 y modo de 60 fps.",
};
