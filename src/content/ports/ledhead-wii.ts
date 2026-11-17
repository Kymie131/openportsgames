import type { Port } from "@/lib/ports/schema";

export const ledheadWii: Port = {
  schema: "port",
  id: "ledhead-wii",
  title: "LedHEAD (Wii)",
  game: "LedHEAD",
  developers: ["nebiun"],
  publisher: "Peter Hirschberg",
  originalYear: 2001,
  portType: "source-port",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["wii"],
  status: "beta",
  release: { version: "1.2", date: "2022-01-30" },
  sources: ["https://github.com/nebiun/ledHeadWii"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "LedHEAD is a 2001 handheld LED game simulation by Peter Hirschberg. It recreates the look and feel of classic LED handhelds with simple, timing-based challenges.",
  summaryEs: "LedHEAD es una simulación de juego LED portátil de 2001 creada por Peter Hirschberg. Recrea el aspecto de las clásicas consolas LED con desafíos sencillos basados en el tiempo.",  downloads: [
    {
      label: "Wii",
      url: "https://github.com/nebiun/ledHeadWii/releases/download/1.2/ledHeadWii_1.2.zip",
      size: "1.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/ledhead.svg",
    alt: "LedHEAD (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "LedHEAD (Peter Hirschberg, 2001) running on Wii through source port. Latest release: 1.2. You need your own copy of the game.",
  notesEs: "LedHEAD (Peter Hirschberg, 2001) en Wii mediante port de código. Última release: 1.2. Necesitas tu propia copia del juego.",
};
