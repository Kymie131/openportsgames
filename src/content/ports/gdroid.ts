import type { Port } from "@/lib/ports/schema";

export const gdroid: Port = {
  schema: "port",
  id: "gdroid",
  title: "GDroid",
  game: "Garry's Mod",
  developers: ["tinsarfal"],
  publisher: "Facepunch Studios",
  originalYear: 2006,
  portType: "source-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "0.1.30", date: "2026-10-20" },
  sources: ["https://github.com/tinsarfal/GDroid"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/tinsarfal/GDroid/releases/download/0.1.30/GDroid-0.1.30-armv7.apk",
      size: "55.6 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/tinsarfal/GDroid/releases/download/0.1.30/GDroid-0.1.30.apk",
      size: "55.2 MB",
    },
  ],
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/4000/header.jpg",
    alt: "Garry's Mod (cover art)",
    credit: "Steam",
  },
  summary: "Garry's Mod is a physics sandbox. There aren't any predefined aims or goals. We give you the tools and leave you to play.",
  summaryEs: "Garry's Mod es un videojuego de simulación publicado por Valve en 2006.",
  notes: "Garry's Mod (Facepunch Studios, 2006) for Android (source port). Latest release: 0.1.29. Needs your own copy of the game.",
  notesEs: "Garry's Mod (Facepunch Studios, 2006) para Android (port de código). Última release: 0.1.29. Necesita tu propia copia del juego.",
};
