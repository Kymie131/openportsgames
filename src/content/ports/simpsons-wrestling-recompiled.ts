import type { Port } from "@/lib/ports/schema";

export const SimpsonsWrestlingRecompiled: Port = {
  schema: "port",
  id: "simpsons-wrestling-recompiled",
  title: "Simpsons Wrestling Recompiled",
  game: "Simpsons Wrestling Recompiled",
  developers: ["TekRantGaming"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "1.0.0", date: "2026-10-07" },
  sources: ["https://github.com/TekRantGaming/simpsons-wrestling-recompiled"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  summary: "Simpsons Wrestling Recompiled is a shooter game for PlayStation, released in 2000.",
  summaryEs: "Simpsons Wrestling Recompiled es un videojuego de disparos para PlayStation, lanzado en 2000.",
  summaryGenerated: true,
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/TekRantGaming/simpsons-wrestling-recompiled/releases/download/v1.0.0/SimpsonsWrestling-v1.0.0-windows-x64.zip",
      size: "14.9 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/TekRantGaming/simpsons-wrestling-recompiled/releases/download/v1.0.0/SimpsonsWrestling-v1.0.0-linux-x86_64.AppImage",
      size: "14.6 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/simpsons-wrestling-recompiled.svg",
    alt: "Simpsons Wrestling Recompiled (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "The Simpsons Wrestling (PS1, USA) recompiled for Windows and Linux with psxrecomp and the TRG Launcher: 16:9, HD, 60 FPS, skip intro, everything unlocked. Bring your own disc.",
  notesEs:
    "The Simpsons Wrestling (PS1, USA) recompilado para Windows y Linux con psxrecomp y el lanzador TRG: 16:9, HD, 60 FPS, intro omitida y todo desbloqueado.",
};
