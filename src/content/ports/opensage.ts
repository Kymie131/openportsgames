import type { Port } from "@/lib/ports/schema";

export const opensage: Port = {
  schema: "port",
  id: "opensage",
  title: "OpenSAGE",
  game: "Command & Conquer: Generals",
  developers: ["Electronic Arts"],
  publisher: "Electronic Arts",
  originalYear: 2003,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenSAGE/OpenSAGE"],
  discord: "https://discord.gg/G2FhZUT",
  website: "https://opensage.github.io",
  license: {
    spdx: "GPL-3.0",
    note: "Code is GPL-3.0; game data stays under EA rights.",
  },
  verified: false,
  notes:
    "Reimplementation of the SAGE engine behind Command & Conquer: Generals and Zero Hour, written in C#. Windows is the primary target and no tagged releases exist yet.",
  notesEs:
    "Reimplementación del motor SAGE de Command & Conquer: Generals y Zero Hour, escrita en C#. Windows es el destino principal y aún no existen releases etiquetadas.",
};
