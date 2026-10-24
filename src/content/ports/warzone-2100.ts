import type { Port } from "@/lib/ports/schema";

export const warzone2100: Port = {
  schema: "port",
  id: "warzone-2100",
  title: "Warzone 2100",
  game: "Warzone 2100",
  developers: ["Warzone 2100 Project"],
  publisher: "Eidos Interactive",
  originalYear: 1999,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "open",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/Warzone2100/warzone2100"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Warzone 2100 is an open-source real-time strategy and real-time tactics hybrid computer game, originally developed by Pumpkin Studios and published by Eidos Interactive. It was originally released in 1999 for Microsoft Windows and PlayStation, and is now also available for macOS, FreeBSD, AmigaOS 4, AROS, MorphOS, Linux, NetBSD and OpenBSD.",
  summaryEs: "Warzone 2100 es un juego para computador híbrido de estrategia en tiempo real y tácticas en tiempo real, desarrollado por Pumpkin Studios y publicado por Eidos Interactive. El juego destaca por varios aspectos dentro de su género: incluye varias tecnologías de radar, se enfoca mucho en la artillería y tecnología anti-baterías, y diseño de vehículos personalizados. Inicialmente fue desarrollado en 1999 para Microsoft Windows y PlayStation.",
  notes:
    "Open-source continuation of the real-time strategy game Warzone 2100, released by Eidos in 2004. Free and self-contained.",
  notesEs:
    "Continuación de código abierto del juego de estrategia en tiempo real Warzone 2100, liberado por Eidos en 2004. Gratis y autónomo.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/0/01/Warzone_2100_cover.png",
    alt: "Warzone 2100 (cover)",
    credit: "Wikipedia",
  },
};
