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
  release: { version: null, date: null },
  sources: ["https://github.com/TekRantGaming/simpsons-wrestling-recompiled"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "PlayStation",
  notes:
    "The Simpsons Wrestling (PS1, USA) recompiled for Windows and Linux with psxrecomp and the TRG Launcher: 16:9, HD, 60 FPS, skip intro, everything unlocked. Bring your own disc.",
  notesEs:
    "The Simpsons Wrestling (PS1, USA) recompilado para Windows y Linux con psxrecomp y el lanzador TRG: 16:9, HD, 60 FPS, intro omitida y todo desbloqueado.",
};
