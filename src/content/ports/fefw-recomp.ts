import type { Port } from "@/lib/ports/schema";

export const fefwRecomp: Port = {
  schema: "port",
  id: "fefw-recomp",
  title: "fefw-recomp (Fortune's Weave)",
  game: "Fire Emblem: Fortune's Weave",
  developers: ["metrist38"],
  publisher: "Nintendo",
  originalYear: 2026,
  portType: "recompilation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.2.2", date: "2026-11-16" },
  sources: ["https://github.com/metrist38/fefw-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch 2"],
  summary:
    "Fire Emblem: Fortune's Weave is a 2026 tactical role-playing game published by Nintendo for the Nintendo Switch 2.",
  summaryEs:
    "Fire Emblem: Fortune's Weave es un videojuego de rol táctico de 2026 publicado por Nintendo para Nintendo Switch 2.",
  notes:
    "Native Windows recompilation of Fire Emblem: Fortune's Weave, with a Linux build. Ships no game files: you must supply your own copy.",
  notesEs:
    "Recompilación nativa para Windows de Fire Emblem: Fortune's Weave, con build para Linux. No incluye archivos del juego: debes aportar tu propia copia.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/a/af/Fire_Emblem_Fortune%27s_Weave_cover.jpg",
    alt: "Fire Emblem: Fortune's Weave (box art)",
    credit: "Wikipedia",
  },
};
