import type { Port } from "@/lib/ports/schema";

export const residentEvilCodeVeronicaXHdPc: Port = {
  schema: "port",
  id: "resident-evil-code-veronica-x-hd-pc",
  title: "Resident Evil Code: Veronica X HD (PC recomp)",
  game: "Resident Evil Code: Veronica X",
  developers: ["kastieloficial"],
  publisher: "Capcom",
  originalYear: 2011,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "stable",
  release: { version: "1.1.12", date: "2026-11-01" },
  sources: ["https://github.com/kastieloficial/RE-Code-Veronica-PS3-HD-Recomp-PC"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-03",
  originalSystems: ["PlayStation 3"],
  summary:
    "Resident Evil Code: Veronica X is the 2011 PlayStation 3 HD release of Capcom's 2000 survival horror game. It follows Claire Redfield as she escapes a prison island and searches for her brother Chris, and includes the additional scenes and boss fight added to the X version.",
  summaryEs:
    "Resident Evil Code: Veronica X es la versión HD de 2011 para PlayStation 3 del juego de terror y supervivencia de Capcom lanzado en 2000. Sigue a Claire Redfield mientras escapa de una isla prisión y busca a su hermano Chris, e incluye las escenas y el jefe adicionales de la versión X.",
  notes:
    "Static recompilation of the PS3 HD release, running natively on Windows. Version 1.1.12 adds optional modern controls modelled on the Resident Evil HD remasters, plus a speedrun timer, room selection and save-anywhere. The launcher supports the EU, Japanese and US PSN releases. Requires your own PS3 copy; the included Veronica PKG Extractor prepares it, and extraction with RPCS3 also works. No game data is included.",
  notesEs:
    "Recompilación estática de la versión HD de PS3, ejecutada de forma nativa en Windows. La versión 1.1.12 añade controles modernos opcionales inspirados en los remaster HD de Resident Evil, además de temporizador de speedrun, selección de sala y guardado en cualquier momento. El lanzador admite las versiones PSN europea, japonesa y estadounidense. Requiere tu propia copia de PS3; el extractor de PKG incluido la prepara y también funciona la extracción con RPCS3. No incluye datos del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/kastieloficial/RE-Code-Veronica-PS3-HD-Recomp-PC/releases/download/v1.5.3/CodeVeronica-PC-v1.5.3.zip",
      size: "303.5 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/44/RECV_boxart.jpg",
    alt: "Resident Evil: Code Veronica X (box art)",
    credit: "Wikipedia",
  },
  related: ["resident-evil-code-veronica-decomp", "resident-evil-code-veronica-recomp"],
};
