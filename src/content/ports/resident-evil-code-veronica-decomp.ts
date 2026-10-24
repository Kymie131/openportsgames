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
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  wip: true,
  release: { version: null, date: null },
  sources: ["https://github.com/AshfordFamily/recvx-decomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Dreamcast"],
  summary: "Resident Evil – Code: Veronica is a 2000 survival horror video game developed and published by Capcom for the Dreamcast. It was the first Resident Evil game to debut on a platform other than PlayStation. The story takes place three months after the events of Resident Evil 2 (1998) and the concurrent destruction of Raccoon City as seen in Resident Evil 3: Nemesis (1999). It follows Claire Redfield and her brother Chris Redfield in their efforts to survive a viral outbreak at a remote prison island in the Southern Ocean and a research facility in Antarctica.",
  summaryEs: "Resident Evil - Code: Veronica, —cuyo título original es Biohazard - Code: Veronica es un videojuego de acción y aventura de terror y supervivencia del año 2000 desarrollado y publicado por Capcom y lanzado originalmente para la Dreamcast. Es la cuarta entrega principal de la serie Resident Evil y la tercera en debutar en una plataforma fuera de PlayStation ya que el primer Resident Evil salió también en Sega Saturn y el segundo en Nintendo 64.",
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
