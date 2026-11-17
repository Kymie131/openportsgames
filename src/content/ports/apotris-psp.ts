import type { Port } from "@/lib/ports/schema";

export const apotrisPsp: Port = {
  schema: "port",
  id: "apotris-psp",
  title: "Apotris (PSP)",
  game: "Apotris",
  developers: ["dadcapgamer"],
  publisher: "Akouzoukos",
  originalYear: 2022,
  portType: "source-port",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: "4.1.0-psp1", date: "2026-10-09" },
  sources: ["https://github.com/dadcapgamer/apotrisPSP"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Game Boy Advance"],
  summary: "Apotris is a 2022 homebrew falling-block puzzle game developed by Akouzoukos for the Game Boy Advance. It follows modern Tetris rules with holds, ghost pieces and 7-bag randomization.",
  summaryEs: "Apotris es un juego de puzles de bloques de 2022 creado por Akouzoukos para Game Boy Advance. Sigue las reglas modernas de Tetris con reserva, pieza fantasma y aleatorización de bolsa de 7.",  downloads: [
    {
      label: "Psp",
      url: "https://github.com/dadcapgamer/apotrisPSP/releases/download/v4.1.0-psp1/apotrisPSP-v4.1.0-psp1.zip",
      size: "4.1 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/apotris.svg",
    alt: "Apotris (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Apotris (Akouzoukos, 2021) running on PlayStation Portable through source port. Latest release: v4.1.0-psp1. You need your own copy of the game.",
  notesEs: "Apotris (Akouzoukos, 2021) en PlayStation Portable mediante port de código. Última release: v4.1.0-psp1. Necesitas tu propia copia del juego.",
};
