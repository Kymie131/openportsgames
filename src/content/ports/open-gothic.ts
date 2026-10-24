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
  originalSystems: ["Windows"],
  features: ["Modern renderer with dynamic lighting", "Cross-platform desktop builds"],
  featuresEs: [
    "Renderizador moderno con iluminación dinámica",
    "Builds de escritorio multiplataforma",
  ],
  summary: "Gothic II is a 2002 action role-playing game developed by Piranha Bytes for Microsoft Windows, and the sequel to Gothic. It was released for Microsoft Windows in 2002 in Germany, in 2003 in the rest of Europe and North America. A port titled Gothic II Complete Classic was released in 2023 and 2026 for Nintendo Switch, PlayStation 4, PlayStation 5, Xbox One and Xbox Series X/S.",
  summaryEs: "Gothic II es un videojuego perteneciente al género de rol, es la secuela de Gothic, Desarrollado por la empresa alemana Piranha Bytes. Fue lanzado por primera vez el 29 de noviembre del año 2002 en Alemania, y en América del Norte después de casi un año, el 28 de octubre de 2003. El juego fue publicado por JoWooD Entertainment y Atari.",
  notes:
    "Engine reimplementation for Gothic II. Published GitHub releases are prereleases only, so no stable version is recorded.",
  notesEs:
    "Reimplementación del motor de Gothic II. Las releases publicadas en GitHub son solo preliminares, así que no se registra versión estable.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/Try/OpenGothic/master/scr0.png",
      alt: "Gothic II running on OpenGothic",
      credit: "OpenGothic",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/de/Gothic2cover.png",
    alt: "Gothic II (box art)",
    credit: "Wikipedia",
  },
};
