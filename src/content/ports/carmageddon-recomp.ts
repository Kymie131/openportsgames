import type { Port } from "@/lib/ports/schema";

export const carmageddonRecomp: Port = {
  schema: "port",
  id: "carmageddon-recomp",
  title: "Carmageddon (Dethrace)",
  game: "Carmageddon",
  developers: ["dethrace-labs"],
  publisher: "Interplay Entertainment",
  originalYear: 1997,
  portType: "reimplementation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "0.10.1", date: "2026-02-22" },
  sources: ["https://github.com/dethrace-labs/dethrace"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["MS-DOS", "Windows"],
  summary: "Carmageddon is a vehicular combat video game released for PC in 1997. It was produced by Stainless Games and published by Interplay Productions and Sales Curve Interactive. It was ported to other platforms, and spawned a series.",
  summaryEs: "Carmageddon es un videojuego de combate en vehículos creado en 1997 que destacó por incluir una proporción importante de violencia en su modo de juego. El juego tiene como misión principal acabar la carrera o destrozar los coches de los contrarios, no obstante la matanza de peatones es un aliciente. En su época sufrió duras críticas que irónicamente lo llevaron a los primeros puestos de ventas. El juego fue producido por Stainless Software y publicado por Interplay y Sales Curve Interactive (SCi).",
  notes:
    "Reverse-engineered reimplementation of Carmageddon (1997) that runs the original game data on modern systems. It needs your own copy of the game.",
  notesEs:
    "Reimplementación por ingeniería inversa de Carmageddon (1997) que ejecuta los datos del juego original en sistemas modernos. Necesita tu propia copia del juego.",
  downloads: [
    {
      label: "Linux",
      url: "https://github.com/dethrace-labs/dethrace/releases/download/v0.10.1/dethrace-v0.10.1-linux-arm64.tar.gz",
      size: "5.3 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/dethrace-labs/dethrace/releases/download/v0.10.1/dethrace-v0.10.1-linux-x64.tar.gz",
      size: "5.2 MB",
    },
    {
      label: "macOS DMG",
      url: "https://github.com/dethrace-labs/dethrace/releases/download/v0.10.1/dethrace-v0.10.1-macos-arm64-x64.dmg",
      size: "3.0 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/dethrace-labs/dethrace/releases/download/v0.10.1/dethrace-v0.10.1-windows-x64.zip",
      size: "8.2 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/dethrace-labs/dethrace/releases/download/v0.10.1/dethrace-v0.10.1-windows-x86.zip",
      size: "7.8 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/1/16/Carmageddon_box.jpg",
    alt: "Carmageddon (cover)",
    credit: "Wikipedia",
  },
};
