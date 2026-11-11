import type { Port } from "@/lib/ports/schema";

export const cookieClicker3ds: Port = {
  schema: "port",
  id: "cookie-clicker-3ds",
  title: "Cookie Clicker (3DS)",
  game: "Cookie Clicker",
  developers: ["GabrielRRussell"],
  publisher: "Orteil",
  originalYear: 2013,
  portType: "source-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["3ds"],
  status: "beta",
  release: { version: "1.6.0", date: "2017-06-16" },
  sources: ["https://github.com/GabrielRRussell/CookieCollector-3DS-"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Other"],
  downloads: [
    {
      label: "ExtractToRoot",
      url: "https://github.com/GabrielRRussell/CookieCollector-3DS-/releases/download/v1.6.0/ExtractToRoot.zip",
      size: "99 KB",
    },
  ],
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/1454400/header.jpg",
    alt: "Cookie Clicker (cover art)",
    credit: "Steam",
  },
  summary: "An idle game about making cookies! Originally released in 2013 on the web, and actively developed since then. This is the official version for Steam.",
  summaryEs: "Cookie Clicker es un videojuego de simulación publicado por Playsaurus en 2021.",
  notes: "Cookie Clicker (Orteil, 2013) running on Nintendo 3DS through source port. Latest release: v1.6.0. You need your own copy of the game.",
  notesEs: "Cookie Clicker (Orteil, 2013) en Nintendo 3DS mediante port de código. Última release: v1.6.0. Necesitas tu propia copia del juego.",
};
