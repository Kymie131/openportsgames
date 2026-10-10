import type { Port } from "@/lib/ports/schema";

export const timesplitters2Recomp: Port = {
  schema: "port",
  id: "timesplitters-2-recomp",
  title: "TimeSplitters 2 Recompiled",
  game: "TimeSplitters 2",
  developers: ["PortsDR"],
  publisher: "Eidos Interactive",
  originalYear: 2002,
  portType: "recompilation",
  genre: "shooter",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://portsdr.com/"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  originalSystem: "PlayStation 2",
  notes: "Community entry from PortsDR. No repository is public; the game is not included.",
  notesEs: "Entrada comunitaria de PortsDR. No hay repositorio público; el juego no se incluye.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6b/Timesplitters2.JPG",
    alt: "TimeSplitters 2 (box art)",
    credit: "Wikipedia",
  },
};
