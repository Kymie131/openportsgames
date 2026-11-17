import type { Port } from "@/lib/ports/schema";

export const spaceAnimalsRecomp: Port = {
  schema: "port",
  id: "space-animals-recomp",
  title: "SpaceAnimalsRecomp (Star Fox)",
  game: "Star Fox",
  developers: ["SerenityG4K"],
  publisher: "Nintendo",
  originalYear: 2026,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.1.0", date: "2026-11-14" },
  sources: ["https://github.com/SerenityG4K/SpaceAnimalsRecomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch 2"],
  summary:
    "Star Fox is a 2026 rail shooter published by Nintendo for the Nintendo Switch 2, a new entry in the Star Fox series.",
  summaryEs:
    "Star Fox es un shooter sobre raíles de 2026 publicado por Nintendo para Nintendo Switch 2, una nueva entrega de la serie Star Fox.",
  notes:
    "Native Windows recompilation of Star Fox (Switch 2, update 2.0.0) with NVN translated to Vulkan. Ships no game files: you must supply your own copy.",
  notesEs:
    "Recompilación nativa para Windows de Star Fox (Switch 2, actualización 2.0.0) con NVN traducido a Vulkan. No incluye archivos del juego: debes aportar tu propia copia.",
  aiDisclosure: {
    source: "https://github.com/SerenityG4K/SpaceAnimalsRecomp",
    quote: "This project is made almost entirely with AI.",
  },
  cover: {
    src: "https://openportsgames.com/covers/generated/star-fox.svg",
    alt: "Star Fox (generated cover)",
    credit: "OpenPortsGames",
  },
};
