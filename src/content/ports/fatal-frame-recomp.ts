import type { Port } from "@/lib/ports/schema";

export const fatalFrameRecomp: Port = {
  schema: "port",
  id: "fatal-frame-recomp",
  title: "Fatal Frame (MikuPan)",
  game: "Fatal Frame",
  developers: ["Mikompilation"],
  publisher: "Tecmo",
  originalYear: 2001,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Mikompilation/MikuPan"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "PlayStation 2",
  notes:
    "Static recompilation of Fatal Frame (PlayStation 2) with ReXGlue. It requires your own game data.",
  notesEs:
    "Recompilación estática de Fatal Frame (PlayStation 2) con ReXGlue. Requiere tus propios datos del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/b/b7/Fatal_Frame_Coverart.png",
    alt: "Fatal Frame (box art)",
    credit: "Wikipedia",
  },
};
