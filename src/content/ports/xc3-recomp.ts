import type { Port } from "@/lib/ports/schema";

export const xc3Recomp: Port = {
  schema: "port",
  id: "xc3-recomp",
  title: "XC3 Recomp",
  game: "Xenoblade Chronicles 3",
  developers: ["jmars125"],
  publisher: "Nintendo",
  originalYear: 2022,
  portType: "recompilation",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: "0.2.16", date: "2026-11-16" },
  sources: ["https://github.com/jmars125/xc3-recomp"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-16",
  originalSystems: ["Nintendo Switch"],
  summary:
    "Xenoblade Chronicles 3 is a 2022 action role-playing game developed by Monolith Soft and published by Nintendo for the Nintendo Switch. It follows Noah and Mio, soldiers from two warring nations, as they join forces against a common enemy.",
  summaryEs:
    "Xenoblade Chronicles 3 es un videojuego de rol de acción de 2022 desarrollado por Monolith Soft y publicado por Nintendo para Nintendo Switch. Sigue a Noah y Mio, soldados de dos naciones en guerra, que unen fuerzas contra un enemigo común.",
  notes:
    "Native Windows recompilation of Xenoblade Chronicles 3 (base game plus 2.2.1 update). Ships no game files: you must supply your own copy.",
  notesEs:
    "Recompilación nativa para Windows de Xenoblade Chronicles 3 (juego base y actualización 2.2.1). No incluye archivos del juego: debes aportar tu propia copia.",
  cover: {
    src: "https://openportsgames.com/covers/generated/xenoblade-chronicles-3.svg",
    alt: "Xenoblade Chronicles 3 (generated cover)",
    credit: "OpenPortsGames",
  },
};
