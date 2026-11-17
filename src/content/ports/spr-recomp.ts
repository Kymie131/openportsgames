import type { Port } from "@/lib/ports/schema";

export const sprRecomp: Port = {
  schema: "port",
  id: "spr-recomp",
  title: "SPR Recomp (Splatoon Raiders)",
  game: "Splatoon Raiders",
  developers: ["Elie-0066"],
  publisher: "Nintendo",
  originalYear: 2026,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: "0.1.8", date: "2026-11-16" },
  sources: ["https://github.com/Elie-0066/SPR-Recomp-Project"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch 2"],
  summary:
    "Splatoon Raiders is a 2026 action game published by Nintendo for the Nintendo Switch 2, a spin-off of the Splatoon series.",
  summaryEs:
    "Splatoon Raiders es un juego de acción de 2026 publicado por Nintendo para Nintendo Switch 2, un spin-off de la serie Splatoon.",
  notes:
    "Native Windows recompilation of Splatoon Raiders with a Vulkan renderer. Ships no game files: you must supply your own copy.",
  notesEs:
    "Recompilación nativa para Windows de Splatoon Raiders con renderizador Vulkan. No incluye archivos del juego: debes aportar tu propia copia.",
  cover: {
    src: "https://openportsgames.com/covers/generated/splatoon-raiders.svg",
    alt: "Splatoon Raiders (generated cover)",
    credit: "OpenPortsGames",
  },
};
