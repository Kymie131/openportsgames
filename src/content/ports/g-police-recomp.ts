import type { Port } from "@/lib/ports/schema";

export const gPoliceRecomp: Port = {
  schema: "port",
  id: "g-police-recomp",
  title: "G-Police Recompiled",
  game: "G-Police",
  developers: ["alexbeavs"],
  publisher: "Psygnosis",
  originalYear: 1997,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/alexbeavs-ps1-ports/g-police-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation",
  notes:
    "Recompilation of G-Police (PS1, USA SLUS-00544) with PSXRecomp and the recomp-ui launcher. It needs your disc and a European SCPH-5502/5552 BIOS; the wizard handles generating and compiling. Release candidate 0.1.0, with gameplay validation still pending.",
  notesEs:
    "Recompilación de G-Police (PS1, USA SLUS-00544) con PSXRecomp y el lanzador recomp-ui. Necesita tu disco y una BIOS europea SCPH-5502/5552; el asistente se encarga de generar y compilar. Versión candidata 0.1.0, pendiente de validar el gameplay.",
};
