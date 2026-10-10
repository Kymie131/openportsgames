import type { Port } from "@/lib/ports/schema";

export const burnoutRevengeRecomp: Port = {
  schema: "port",
  id: "burnout-revenge-recomp",
  title: "Burnout Revenge Recompiled",
  game: "Burnout Revenge",
  developers: ["shipa-2"],
  publisher: "Electronic Arts",
  originalYear: 2005,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/shipa-2/Xerenge"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of Burnout Revenge (Xbox 360) to native Windows and Linux. It requires your own copy of the game.",
  notesEs:
    "Recompilación de Burnout Revenge (Xbox 360) a Windows y Linux nativos. Requiere tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/cb/Revenge_boxart.jpg",
    alt: "Burnout Revenge (box art)",
    credit: "Wikipedia",
  },
};
