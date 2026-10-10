import type { Port } from "@/lib/ports/schema";

export const martianGothicRecomp: Port = {
  schema: "port",
  id: "martian-gothic-recomp",
  title: "Martian Gothic: Unification Recompiled",
  game: "Martian Gothic: Unification",
  developers: ["alexbeavs"],
  publisher: "TalonSoft",
  originalYear: 2000,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/martian-gothic-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Bare recompilation of Martian Gothic: Unification (PlayStation) built with the PSXRecomp toolkit and recomp-ui. It ships no game content and needs your own disc plus a BIOS.",
  notesEs:
    "Recompilación básica de Martian Gothic: Unification (PlayStation) construida con el kit PSXRecomp y recomp-ui. No incluye contenido del juego y necesita tu propio disco y una BIOS.",
};
