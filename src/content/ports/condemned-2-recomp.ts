import type { Port } from "@/lib/ports/schema";

export const condemned2Recomp: Port = {
  schema: "port",
  id: "condemned-2-recomp",
  title: "Condemned 2 Recompiled",
  game: "Condemned 2: Bloodshot",
  developers: ["psxrestore"],
  publisher: "Sega",
  originalYear: 2008,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/psxrestore/Condemned2Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Static recompilation of Condemned 2: Bloodshot (Xbox 360) with ReXGlue, with mouse look and graphics settings. Playable start to finish, still with rough edges.",
  notesEs:
    "Recompilación estática de Condemned 2: Bloodshot (Xbox 360) con ReXGlue, con ratón y ajustes gráficos. Jugable de principio a fin, todavía con bordes por pulir.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/42/Condemned_2_Bloodshot.jpg",
    alt: "Condemned 2: Bloodshot (box art)",
    credit: "Wikipedia",
  },
};
