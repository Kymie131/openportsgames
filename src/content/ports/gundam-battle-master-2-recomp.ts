import type { Port } from "@/lib/ports/schema";

export const gundamBattleMaster2Recomp: Port = {
  schema: "port",
  id: "gundam-battle-master-2-recomp",
  title: "Gundam: The Battle Master 2 Recompiled",
  game: "Gundam: The Battle Master 2",
  developers: ["omegakatana92"],
  publisher: "Bandai",
  originalYear: 1997,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/omegakatana92/GundamBattleMaster2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of Gundam: The Battle Master 2 (PS1) in progress with PSXRecomp. It requires your own disc and boots with OpenBIOS; the project is still under development.",
  notesEs:
    "Recompilación en progreso de Gundam: The Battle Master 2 (PS1) con PSXRecomp. Requiere tu propio disco y arranca con OpenBIOS; el proyecto sigue en desarrollo.",
};
