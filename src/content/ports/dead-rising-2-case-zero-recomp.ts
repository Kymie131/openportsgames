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
  release: { version: null, date: null },
  sources: ["https://github.com/wivi514/Dead_Rising_2_Case_Zero_Xenon_Recomp"],
  license: { spdx: "PolyForm-Noncommercial-1.0.0", note: "PolyForm Noncommercial 1.0.0" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Native port of Dead Rising 2: Case Zero (Xbox 360) with XenonRecomp and XenosRecomp, on a purpose-built engine with a Vulkan renderer and real XMA audio. Fully playable start to finish, with online co-op, the level cap raised to 50 and a 60 fps mode.",
  notesEs:
    "Port nativo de Dead Rising 2: Case Zero (Xbox 360) con XenonRecomp y XenosRecomp, sobre un motor propio con renderizador Vulkan y audio XMA real. Completamente jugable de principio a fin, con cooperativo online, límite de nivel subido a 50 y modo de 60 fps.",
};
