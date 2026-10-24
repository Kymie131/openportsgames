import type { Port } from "@/lib/ports/schema";

export const ResidentEvilCodeVeronica: Port = {
  schema: "port",
  id: "resident-evil-code-veronica",
  title: "Resident Evil - Code: Veronica",
  game: "Resident Evil - Code: Veronica",
  developers: ["fmil95"],
  publisher: "Capcom",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/fmil95/recv-dc-decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/44/RECV_boxart.jpg",
    alt: "Resident Evil - Code: Veronica (box art)",
    credit: "Wikipedia",
  },
  summary: "Resident Evil – Code: Veronica is a 2000 survival horror video game developed and published by Capcom for the Dreamcast. It was the first Resident Evil game to debut on a platform other than PlayStation. The story takes place three months after the events of Resident Evil 2 (1998) and the concurrent destruction of Raccoon City as seen in Resident Evil 3: Nemesis (1999). It follows Claire Redfield and her brother Chris Redfield in their efforts to survive a viral outbreak at a remote prison island in the Southern Ocean and a research facility in Antarctica.",
  summaryEs: "Resident Evil - Code: Veronica, —cuyo título original es Biohazard - Code: Veronica es un videojuego de acción y aventura de terror y supervivencia del año 2000 desarrollado y publicado por Capcom y lanzado originalmente para la Dreamcast. Es la cuarta entrega principal de la serie Resident Evil y la tercera en debutar en una plataforma fuera de PlayStation ya que el primer Resident Evil salió también en Sega Saturn y el segundo en Nintendo 64.",
  notes:
    "Decompilation project of Resident Evil - Code: Veronica (DC) which aims to reconstruct the source code of the game.",
  notesEs:
    "Proyecto de decompilación de Resident Evil - Code: Veronica (DC) que busca reconstruir el código fuente.",
};
