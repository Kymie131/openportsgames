import type { Port } from "@/lib/ports/schema";

export const Xoreos: Port = {
  schema: "port",
  id: "xoreos",
  title: "Xoreos",  game: "Neverwinter Nights",
  developers: ["xoreos"],  publisher: "Infogrames",  originalYear: 2002,
  portType: "reimplementation",  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.0.6", date: "2020-08-03" },
  sources: ["https://github.com/xoreos/xoreos"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Neverwinter Nights is a 2002 role-playing game developed by BioWare and published by Infogrames. Set in the Forgotten Realms, it combines a single-player campaign with a powerful module creator and online play.",  summaryEs: "Neverwinter Nights es un juego de rol de 2002 desarrollado por BioWare y publicado por Infogrames. Ambientado en los Reinos Olvidados, combina una campaña para un jugador con un potente creador de módulos y juego en línea.",  downloads: [
    {
      label: "Linux",
      url: "https://github.com/xoreos/xoreos/releases/download/v0.0.6/xoreos-0.0.6-linux32.tar.gz",
      size: "16.6 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/xoreos/xoreos/releases/download/v0.0.6/xoreos-0.0.6-linux64.tar.gz",
      size: "16.5 MB",
    },
    {
      label: "Windows x86",
      url: "https://github.com/xoreos/xoreos/releases/download/v0.0.6/xoreos-0.0.6-win32.zip",
      size: "9.1 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/xoreos/xoreos/releases/download/v0.0.6/xoreos-0.0.6-win64.zip",
      size: "8.5 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/xoreos.svg",
    alt: "xoreos (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "A reimplementation of BioWare's Aurora engine (and derivatives). Pre-pre-alpha :P.",
  notesEs: "Una reimplementación del motor Aurora de BioWare (y derivados). Pre-pre-alpha :P.",
};
