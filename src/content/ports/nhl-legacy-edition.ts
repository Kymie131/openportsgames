import type { Port } from "@/lib/ports/schema";

export const NhlLegacyEdition: Port = {
  schema: "port",
  id: "nhl-legacy-edition",
  title: "NHL: Legacy Edition",
  game: "NHL: Legacy Edition",
  developers: ["puckhead73"],
  publisher: "EA Sports",
  originalYear: 2015,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.6.0", date: "2026-07-22" },
  sources: ["https://github.com/puckhead73/nhl-legacy-recomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/puckhead73/nhl-legacy-recomp/releases/download/v0.6.0/nhl-legacy-recomp-0.6.0.zip",
      size: "100.7 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/81/NHL_16_cover.jpg",
    alt: "NHL: Legacy Edition (cover)",
    credit: "Wikipedia",
  },
  summary: "NHL: Legacy Edition is a action-adventure game published by EA Sports in 2015.",
  summaryEs: "NHL: Legacy Edition es un videojuego de acción y aventura publicado por EA Sports en 2015.",
  notes: "Static recompilation of NHL: Legacy Edition (Other).",
  notesEs: "Recompilación estática de NHL: Legacy Edition (Other).",
};
