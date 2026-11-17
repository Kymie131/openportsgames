import type { Port } from "@/lib/ports/schema";

export const CtwNative: Port = {
  schema: "port",
  id: "ctw-native",
  title: "CTW-Native",
  game: "Grand Theft Auto: Chinatown Wars",
  developers: ["official-kryo-to"],
  publisher: "Rockstar Games",
  originalYear: 2009,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "alpha",
  release: { version: "0.5.0", date: "2026-11-01" },
  sources: ["https://github.com/official-kryo-to/ctw-native"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo DS", "PlayStation Portable"],
  summary:
    "Grand Theft Auto: Chinatown Wars is a 2009 action-adventure game developed by Rockstar Leeds and published by Rockstar Games. Originally released for the Nintendo DS and PlayStation Portable, it follows Huang Lee in Liberty City as he hunts for a stolen sword and gets caught in the drug trade.",
  summaryEs:
    "Grand Theft Auto: Chinatown Wars es un videojuego de acción y aventura de 2009 desarrollado por Rockstar Leeds y publicado por Rockstar Games. Lanzado originalmente para Nintendo DS y PlayStation Portable, sigue a Huang Lee en Liberty City mientras busca una espada robada y queda atrapado en el narcotráfico.",
  downloads: [
    {
      label: "Windows",
      url: "https://github.com/official-kryo-to/ctw-native/releases/download/v0.5.0/CTW-Native-Porter.exe",
      size: "18.8 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/official-kryo-to/ctw-native/releases/download/v0.5.0/CTW-Native-Linux-x86_64.tar.gz",
      size: "4.4 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/ctw-native.svg",
    alt: "Grand Theft Auto: Chinatown Wars (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Bringing GTA: Chinatown Wars to native PC with your own game files.",
  notesEs: "Lleva GTA: Chinatown Wars a PC nativo con tus propios archivos del juego.",
};
