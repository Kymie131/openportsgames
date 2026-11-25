import type { Port } from "@/lib/ports/schema";

export const ootPcRecomp: Port = {
  schema: "port",
  id: "oot-pc-recomp",
  title: "OOT PC Recomp",
  game: "The Legend of Zelda: Ocarina of Time",
  developers: ["Chiuauaa"],
  publisher: "Nintendo",
  originalYear: 2026,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Chiuauaa/oot-pc-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  wip: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch 2"],
  summary:
    "The Legend of Zelda: Ocarina of Time is the Switch 2 remake of the 1998 Nintendo 64 classic. Link travels through time to stop Ganondorf and save Hyrule.",
  summaryEs:
    "The Legend of Zelda: Ocarina of Time es el remake para Switch 2 del clásico de Nintendo 64 de 1998. Link viaja en el tiempo para detener a Ganondorf y salvar Hyrule.",
  notes:
    "Experimental Windows recompilation of the Ocarina of Time Switch 2 remake, forked from a Donkey Kong Bananza project. No public release yet.",
  notesEs:
    "Recompilación experimental para Windows del remake de Ocarina of Time de Switch 2, derivada de un proyecto de Donkey Kong Bananza. Aún sin release pública.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
    alt: "The Legend of Zelda: Ocarina of Time (box art)",
    credit: "Wikipedia",
  },
};
