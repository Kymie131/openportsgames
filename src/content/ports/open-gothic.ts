import type { Port } from "@/lib/ports/schema";

export const openGothic: Port = {
  schema: "port",
  id: "open-gothic",
  title: "OpenGothic",
  game: "Gothic II",
  developers: ["Try Team"],
  publisher: "JoWooD Prod",
  originalYear: 2002,
  genre: "rpg",
  openSource: true,
  portType: "source-port",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Try/OpenGothic"],
  discord: "https://discord.gg/G9XvcFQnn6",
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Microsoft Windows",
  features: ["Modern renderer with dynamic lighting", "Cross-platform desktop builds"],
  featuresEs: [
    "Renderizador moderno con iluminación dinámica",
    "Builds de escritorio multiplataforma",
  ],
  notes:
    "Engine reimplementation for Gothic II. Published GitHub releases are prereleases only, so no stable version is recorded.",
  notesEs:
    "Reimplementación del motor de Gothic II. Las releases publicadas en GitHub son solo preliminares, así que no se registra versión estable.",
};
