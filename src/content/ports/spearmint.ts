import type { Port } from "@/lib/ports/schema";

export const Spearmint: Port = {
  schema: "port",
  id: "spearmint",
  title: "Spearmint",
  game: "spearmint",
  developers: ["clover-moe"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/clover-moe/spearmint"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/commons/0/05/Minze.jpg?utm_source=en.wikipedia.org&utm_campaign=api&utm_content=original",
    alt: "spearmint (cover)",
    credit: "Wikipedia",
  },
  notes:
    "Spearmint — an updated id Tech 3 engine for continuing the classics and creating new games.",
  notesEs:
    "Spearmint: un motor id Tech 3 actualizado para continuar los clásicos y crear juegos nuevos.",
};
