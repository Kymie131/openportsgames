import type { Port } from "@/lib/ports/schema";

export const gzselacoAndroidDualScreen: Port = {
  schema: "port",
  id: "gzselaco-android-dual-screen",
  title: "GZSelaco (Android)",
  game: "Selaco",
  developers: ["danillogical"],
  publisher: "Altered Orbit Studios",
  originalYear: 2024,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/danillogical/GZSelaco-android"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/1592280/header.jpg",
    alt: "Selaco (cover art)",
    credit: "Steam",
  },
  summary: "Selaco is a shooter game in 2024.",
  summaryEs: "Selaco es un videojuego de disparos en 2024.",
  notes:
    "Selaco (Altered Orbit Studios, 2024) for Android and macOS (source port). Latest release: v0.2.0. Needs your own copy of the game. A user reported a crash on a Samsung Galaxy S26 Ultra after the permissions prompt; the port targets Android handhelds and dual-screen devices and has not been validated on phones.",
  notesEs:
    "Selaco (Altered Orbit Studios, 2024) para Android y macOS (port de código). Última release: v0.2.0. Necesita tu propia copia del juego. Un usuario reportó un cierre inesperado en un Samsung Galaxy S26 Ultra tras el aviso de permisos; el port está pensado para handhelds Android y dispositivos de doble pantalla, y no se ha validado en teléfonos.",
};
