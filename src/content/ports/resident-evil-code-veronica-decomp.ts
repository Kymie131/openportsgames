import type { Port } from "@/lib/ports/schema";

export const residentEvilCodeVeronicaDecomp: Port = {
  schema: "port",
  id: "resident-evil-code-veronica-decomp",
  title: "Resident Evil: Code Veronica X Decompilation",
  game: "Resident Evil: Code Veronica X",
  developers: ["AshfordFamily"],
  publisher: "Capcom",
  originalYear: 2000,
  portType: "decompilation",
  type: "decomp-in-progress",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/AshfordFamily/recvx-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Dreamcast",
  notes:
    "Completed decompilation of Resident Evil: Code Veronica X. A research codebase; it requires game files from a copy you own.",
  notesEs:
    "Decompilación completada de Resident Evil: Code Veronica X. Código de investigación; requiere archivos del juego de una copia que poseas.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/44/RECV_boxart.jpg",
    alt: "Resident Evil: Code Veronica X (cover)",
    credit: "Wikipedia",
  },
};
