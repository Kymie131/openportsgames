import type { Port } from "@/lib/ports/schema";

export const ctrHighOctane: Port = {
  schema: "port",
  id: "ctr-high-octane",
  title: "Crash Team Racing: High Octane",
  game: "Crash Team Racing",
  developers: ["Rinnegatamante"],
  publisher: "Sony Computer Entertainment",
  originalYear: 1999,
  portType: "source-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psvita", "windows", "web"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Rinnegatamante/Crash-Team-Racing-High-Octane"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation"],
  notes:
    "Advanced source port of Crash Team Racing for PlayStation Vita, PC and the web, built on the CTR decompilation. Bring your own disc image.",
  notesEs:
    "Port avanzado del código fuente de Crash Team Racing para PlayStation Vita, PC y navegador, construido sobre la decompilación de CTR. Aporta tu propia imagen de disco.",
  cover: {
    src: "https://cdn2.steamgriddb.com/thumb/afa10814865d47b74741b44d8fcbb37b.jpg",
    alt: "Crash Team Racing (cover)",
    credit: "SteamGridDB",
  },
};
