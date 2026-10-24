import type { Port } from "@/lib/ports/schema";

export const RatchetAndClankPal: Port = {
  schema: "port",
  id: "ratchet-and-clank-pal",
  title: "Ratchet & Clank (PAL)",
  game: "Ratchet & Clank (PAL)",
  developers: ["OpenRAC"],
  publisher: "Unknown",
  originalYear: 2002,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenRAC/rac1-decomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  wip: true,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  summary: "Ratchet & Clank is a series of action-adventure platform and third-person shooter video games created and developed by Insomniac Games and published by Sony Interactive Entertainment as a flagship title for Sony's PlayStation 2. High Impact Games developed two installments for the PlayStation Portable while other studios were involved in remasters and ports.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  notes:
    "A work-in-progress matching decompilation of the original Ratchet & Clank (2002) for PlayStation 2 (SCES_509.16, PAL v2.00). Focuses on reconstructing clean, idiomatic C/C++ source code identical to the retail executable, paving the way for native PC re-implementation and game preservation.",
  notesEs:
    "Decompilación que coincide del Ratchet & Clank original (2002) para PlayStation 2 (SCES_509.16, PAL v2.00), en desarrollo. Se centra en reconstruir código C/C++ idiomático idéntico al ejecutable comercial, allanando el camino a un port nativo.",
};
