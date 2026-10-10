import type { Port } from "@/lib/ports/schema";

export const cncRenegade: Port = {
  schema: "port",
  id: "cnc-renegade",
  title: "Command & Conquer: Renegade (Source)",
  game: "Command & Conquer: Renegade",
  developers: ["Electronic Arts"],
  publisher: "Electronic Arts",
  originalYear: 2002,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/electronicarts/CnC_Renegade"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Official source release of Command & Conquer: Renegade published by EA. It can be built on Windows and uses the retail game assets.",
  notesEs:
    "Publicación oficial del código fuente de Command & Conquer: Renegade por parte de EA. Se puede compilar en Windows y usa los recursos del juego comercial.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/49/Cncren-cover.jpg",
    alt: "Command & Conquer: Renegade (box art)",
    credit: "Wikipedia",
  },
};
