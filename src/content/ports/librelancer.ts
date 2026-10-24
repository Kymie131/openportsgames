import type { Port } from "@/lib/ports/schema";

export const librelancer: Port = {
  schema: "port",
  id: "librelancer",
  title: "Librelancer",
  game: "Freelancer",
  developers: ["Librelancer Contributors"],
  publisher: "Microsoft",
  originalYear: 2003,
  genre: "open-world",
  openSource: true,
  portType: "reimplementation",
  platforms: ["windows"],
  status: "beta",
  release: { version: "2025.11", date: "2025-11-07" },
  sources: ["https://github.com/Librelancer/Librelancer"],
  discord: "https://discord.gg/QW2vzxx",
  website: "https://librelancer.net",
  license: {
    spdx: "MIT",
    note: "MIT per the LICENSE file; the GitHub license field reports NOASSERTION",
  },
  verified: true,
  verifiedAt: "2026-10-01",
  originalSystems: ["Windows"],
  features: ["Reimplementation of the Freelancer engine", "Cross-platform C++ codebase"],
  featuresEs: ["Reimplementación del motor de Freelancer", "Base de código C++ multiplataforma"],
  summary: "Freelancer is a 2003 space trading and combat simulation video game developed by Digital Anvil and published by Microsoft Game Studios. It is a chronological sequel to Digital Anvil's Starlancer, a combat flight simulator released in 2000. The game was initially announced by Chris Roberts in 1999, and following many production schedule mishaps and a buyout of Digital Anvil by Microsoft, it was eventually released in March 2003.",
  summaryEs: "Freelancer es un videojuego de simulación espacial desarrollado por Digital Anvil y publicado por Microsoft. Originalmente el juego fue anunciado por Chris Roberts en 1997, pero siguiendo cambios en el cronograma de desarrollo y la posterior compra de Digital Anvil por Microsoft, fue finalmente lanzado en marzo de 2003.",
  notes:
    "Engine reimplementation for Freelancer. The repository ships an MIT LICENSE file even though the GitHub license field reports NOASSERTION. The upstream repository is archived (read-only).",
  notesEs:
    "Reimplementación del motor de Freelancer. El repositorio incluye un archivo LICENSE MIT aunque el campo de licencia de GitHub informa NOASSERTION. El repositorio original está archivado (solo lectura).",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/4/4d/Fl_box.jpg",
    alt: "Freelancer (box art)",
    credit: "Wikipedia",
  },
};
