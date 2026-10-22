import type { Port } from "@/lib/ports/schema";

export const ResidentEvilCodeVeronicaX: Port = {
  schema: "port",
  id: "resident-evil-code-veronica-x",
  title: "Resident Evil – Code: Veronica X",
  game: "Resident Evil – Code: Veronica X",
  developers: ["fmil95"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/fmil95/recvx-gc-decomp"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/44/RECV_boxart.jpg",
    alt: "Resident Evil – Code: Veronica X (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Decompilation project of Resident Evil - Code: Veronica X (GC) which aims to reconstruct the source code of the game.",
  notesEs:
    "Proyecto de decompilación de Resident Evil - Code: Veronica X (GC) que busca reconstruir el código fuente.",
};
