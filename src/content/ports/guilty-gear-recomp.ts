import type { Port } from "@/lib/ports/schema";

export const guiltyGearRecomp: Port = {
  schema: "port",
  id: "guilty-gear-recomp",
  title: "Guilty Gear Recompiled",
  game: "Guilty Gear",
  developers: ["omegakatana92"],
  publisher: "Arc System Works",
  originalYear: 1998,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/GuiltyGearRecomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Guilty Gear (PS1) under development with PSXRecomp. It ships a Windows launcher where you pick your own .cue and use either the bundled OpenBIOS or your own BIOS; the project is still a work in progress and not considered finished.",
  notesEs:
    "Recompilación en desarrollo de Guilty Gear (PS1) con PSXRecomp. Trae un lanzador para Windows donde eliges tu propio .cue y usas el OpenBIOS incluido o tu propia BIOS; el proyecto sigue en progreso y no se considera terminado.",
};
