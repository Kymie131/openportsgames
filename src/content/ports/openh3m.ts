import type { Port } from "@/lib/ports/schema";

export const openh3m: Port = {
  schema: "port",
  id: "openh3m",
  title: "Spartan (Halo 3 Mythic)",
  game: "Halo 3: ODST",
  developers: ["GTTeancum"],
  publisher: "Microsoft Game Studios",
  originalYear: 2009,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/GTTeancum/OpenH3M"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-11",
  originalSystems: ["Xbox 360"],
  summary:
    "Halo 3: ODST is a 2009 first-person shooter developed by Bungie and published by Microsoft Game Studios. It follows a squad of Orbital Drop Shock Troopers during the Covenant invasion of New Mombasa and includes the full Halo 3 multiplayer suite on a second disc.",
  summaryEs:
    "Halo 3: ODST es un shooter en primera persona de 2009 desarrollado por Bungie y publicado por Microsoft Game Studios. Sigue a un escuadrón de tropas de asalto orbital durante la invasión Covenant de Nueva Mombasa e incluye todo el multijugador de Halo 3 en un segundo disco.",
  notes:
    "Spartan (formerly OpenH3M) is a native Windows x64 static recompilation of the Halo 3 Mythic multiplayer disc, built with ReXGlue. The current build is beta 0.8 and requires your own legally obtained disc files.",
  notesEs:
    "Spartan (antes OpenH3M) es una recompilación estática nativa para Windows x64 del disco multijugador Halo 3 Mythic, creada con ReXGlue. Requiere tus propios archivos del disco obtenidos legalmente.",
  downloads: [
    {
      label: "Windows (beta 0.8)",
      url: "https://github.com/GTTeancum/OpenH3M/releases/download/beta-0.8/OpenH3M-beta-0.8-win-x64.zip",
      size: "25.4 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/9/9a/Halo_3_ODST_Box_Art.png",
    alt: "Halo 3: ODST (box art)",
    credit: "Wikipedia",
  },
};
