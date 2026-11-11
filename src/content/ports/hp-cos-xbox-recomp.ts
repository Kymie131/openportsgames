import type { Port } from "@/lib/ports/schema";

export const hpCosXboxRecomp: Port = {
  schema: "port",
  id: "hp-cos-xbox-recomp",
  title: "Harry Potter and the Chamber of Secrets (Xbox)",
  game: "Harry Potter and the Chamber of Secrets",
  developers: ["MiddleDucky"],
  publisher: "EA Games",
  originalYear: 2002,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.3.2", date: "2026-11-05" },
  sources: ["https://github.com/MiddleDucky/HP-COS-Xbox-Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox"],
  summary:
    "Harry Potter and the Chamber of Secrets is a 2002 action-adventure game based on the second Harry Potter novel. The Xbox version follows Harry through Hogwarts as he investigates the opening of the Chamber of Secrets.",
  summaryEs:
    "Harry Potter y la Cámara Secreta es un juego de acción y aventura de 2002 basado en la segunda novela de Harry Potter. La versión de Xbox sigue a Harry por Hogwarts mientras investiga la apertura de la Cámara Secreta.",
  notes:
    "Recompilation of the Xbox version for Windows. It requires your own copy of the game.",
  notesEs:
    "Recompilación de la versión de Xbox para Windows. Requiere tu propia copia del juego.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/MiddleDucky/HP-COS-Xbox-Recomp/releases/download/v0.3.2/hpcos_v0.3.2_windows.zip",
      size: "16.1 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9c/Harry_Potter_and_the_Chamber_of_Secrets_Coverart.png",
    alt: "Harry Potter and the Chamber of Secrets (box art)",
    credit: "Wikipedia",
  },
};
