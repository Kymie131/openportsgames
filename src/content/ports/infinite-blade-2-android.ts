import type { Port } from "@/lib/ports/schema";

export const infiniteBlade2Android: Port = {
  schema: "port",
  id: "infinite-blade-2-android",
  title: "Infinite Blade II (Android)",
  game: "Infinite Blade II",
  developers: ["jelqedagain"],
  publisher: "Infinite Blade",
  originalYear: 2019,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/jelqedagain/ib-2-3-android"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Other"],
  summary: "Infinite Blade II is a 2019 mobile action role-playing game developed by Infinite Blade. It continues the hack-and-slash series with combo combat and gear progression.",
  summaryEs: "Infinite Blade II es un videojuego de rol de acción móvil de 2019 desarrollado por Infinite Blade. Continúa la serie de hack and slash con combos y progresión de equipo.",  downloads: [
    {
      label: "Android",
      url: "https://github.com/jelqedagain/ib-2-3-android/releases/download/ib3/ib3-android-1.9.5.apk",
      size: "1.8 MB",
    },
    {
      label: "Android",
      url: "https://github.com/jelqedagain/ib-2-3-android/releases/download/ib3/ib3-android-1.9.7.1.apk",
      size: "1.8 MB",
    },
    {
      label: "Android",
      url: "https://github.com/jelqedagain/ib-2-3-android/releases/download/ib3/ib3-android-1.9.7.apk",
      size: "1.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/infinite-blade-ii.svg",
    alt: "Infinite Blade II (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Infinite Blade II (Infinite Blade, 2019) for Android (source port). Latest release: ib3. Needs your own copy of the game.",
  notesEs: "Infinite Blade II (Infinite Blade, 2019) para Android (port de código). Última release: ib3. Necesita tu propia copia del juego.",
};
