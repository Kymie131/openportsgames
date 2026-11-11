import type { Port } from "@/lib/ports/schema";

export const mgrNxDeko: Port = {
  schema: "port",
  id: "mgr-nx-deko",
  title: "Metal Gear Rising: Revengeance (Switch)",
  game: "Metal Gear Rising: Revengeance",
  developers: ["tuancapoo"],
  publisher: "Konami",
  originalYear: 2013,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["switch"],
  status: "beta",
  release: { version: "0.2.2", date: "2026-10-23" },
  sources: ["https://github.com/tuancapoo/mgr-nx-deko"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox 360"],
  summary:
    "Metal Gear Rising: Revengeance is a 2013 action game developed by PlatinumGames and published by Konami. Raiden, a cyborg ninja, fights private military companies across a near-future world in a fast, parry-driven combat system.",
  summaryEs:
    "Metal Gear Rising: Revengeance es un juego de acción de 2013 desarrollado por PlatinumGames y publicado por Konami. Raiden, un ninja cibernético, se enfrenta a compañías militares privadas con un combate rápido basado en paradas.",
  notes:
    "Unofficial native Nintendo Switch port of the Xbox 360 version, built with ReXGlue and Renut's renderer on deko3d. It requires your own copy of the game; no game files are included.",
  notesEs:
    "Port nativo no oficial para Nintendo Switch de la versión de Xbox 360, creado con ReXGlue y el renderizador de Renut sobre deko3d. Requiere tu propia copia del juego; no incluye archivos del juego.",
  downloads: [
    {
      label: "Switch",
      url: "https://github.com/tuancapoo/mgr-nx-deko/releases/download/v0.2.2/mgr.nro",
      size: "57.5 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/3/3b/Metal_Gear_Rising_Revengeance_box_artwork.jpg",
    alt: "Metal Gear Rising: Revengeance (box art)",
    credit: "Wikipedia",
  },
};
