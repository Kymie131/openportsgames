import type { Port } from "@/lib/ports/schema";

export const project1944Recomp: Port = {
  schema: "port",
  id: "project-1944-recomp",
  title: "Call of Duty 3: Project 1944",
  game: "Call of Duty 3",
  developers: ["zenit2893-cmyk"],
  publisher: "Activision",
  originalYear: 2006,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/zenit2893-cmyk/project-1944"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "A separate recompilation of Call of Duty 3 (Xbox 360) by another developer. It builds for Windows and needs your own copy of the game.",
  notesEs:
    "Una recompilación distinta de Call of Duty 3 (Xbox 360) hecha por otro desarrollador. Compila para Windows y necesita tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/51/Call_of_Duty_3_Game_Cover.jpg",
    alt: "Call of Duty 3 (box art)",
    credit: "Wikipedia",
  },
};
