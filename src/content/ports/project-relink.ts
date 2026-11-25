import type { Port } from "@/lib/ports/schema";

export const projectRelink: Port = {
  schema: "port",
  id: "project-relink",
  title: "Project ReLink",
  game: "The Legend of Zelda: Ocarina of Time",
  developers: ["pixl27"],
  publisher: "Nintendo",
  originalYear: 2026,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "0.7.8", date: "2026-11-16" },
  sources: ["https://github.com/pixl27/ProjectReLink"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch 2"],
  summary:
    "The Legend of Zelda: Ocarina of Time is the Switch 2 remake of the 1998 Nintendo 64 classic. Link travels through time to stop Ganondorf and save Hyrule.",
  summaryEs:
    "The Legend of Zelda: Ocarina of Time es el remake para Switch 2 del clásico de Nintendo 64 de 1998. Link viaja en el tiempo para detener a Ganondorf y salvar Hyrule.",
  notes:
    "Native recompilation of the Ocarina of Time Nintendo Switch 2 remake for Windows. Project ReLink builds the game from your own copy; no game files are included.",
  notesEs:
    "Recompilación nativa del remake de Ocarina of Time para Nintendo Switch 2, para Windows. Project ReLink compila el juego desde tu propia copia; no incluye archivos del juego.",
  related: ["hookshot"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/57/The_Legend_of_Zelda_Ocarina_of_Time.jpg",
    alt: "The Legend of Zelda: Ocarina of Time (box art)",
    credit: "Wikipedia",
  },
};
