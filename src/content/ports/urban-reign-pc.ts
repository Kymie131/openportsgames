import type { Port } from "@/lib/ports/schema";

export const urbanReignPc: Port = {
  schema: "port",
  id: "urban-reign-pc",
  title: "Urban Reign (PC)",
  game: "Urban Reign",
  developers: ["thiagordsfx"],
  publisher: "Namco",
  originalYear: 2005,
  portType: "recompilation",
  genre: "fighting",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.4.1", date: "2026-10-29" },
  sources: ["https://github.com/thiagordsfx/urban-reign-recomp"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 2"],
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/thiagordsfx/urban-reign-recomp/releases/download/v1.4.1/urban-reign_1.4.1_amd64.deb",
      size: "21.8 MB",
    },
    {
      label: "UrbanReignPC-1.4.1-linux-x86_64",
      url: "https://github.com/thiagordsfx/urban-reign-recomp/releases/download/v1.4.1/UrbanReignPC-1.4.1-linux-x86_64.tar.gz",
      size: "31.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/thiagordsfx/urban-reign-recomp/releases/download/v1.4.1/UrbanReignPC-1.4.1.zip",
      size: "46.5 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/6/6d/Urb-cover.jpg",
    alt: "Urban Reign (box art)",
    credit: "Wikipedia",
  },
  summary: "Urban Reign is a beat 'em up game developed and published by Namco for the PlayStation 2. It features 60 player characters to accommodate its four-player multiplayer mode, two of which are Marshall Law and Paul Phoenix from Namco's Tekken series.",
  summaryEs: "Urban Reign es un videojuego de lucha, concretamente un Yo contra el barrio de la compañía Namco para PlayStation 2 creado en el 2005.",
  notes: "Urban Reign (Namco, 2005) running on Windows through static recompilation. Latest release: v1.3.0. You need your own copy of the game.",
  notesEs: "Urban Reign (Namco, 2005) en Windows mediante recompilación estática. Última release: v1.3.0. Necesitas tu propia copia del juego.",
};
