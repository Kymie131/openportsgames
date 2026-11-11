import type { Port } from "@/lib/ports/schema";

export const Ultima7Decomp: Port = {
  schema: "port",
  id: "ultima-7-decomp",
  title: "Ultima 7 Decomp",  game: "Ultima VII: The Black Gate",
  developers: ["Kitrinx"],  publisher: "Origin Systems",  originalYear: 1992,
  portType: "decompilation",  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",  release: { version: "0.5.1", date: "2026-10-24" },
  sources: ["https://github.com/Kitrinx/Ultima7_Decomp"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS"],  summary: "Ultima VII: The Black Gate is a 1992 role-playing game developed and published by Origin Systems. The Avatar returns to Britannia to investigate a series of ritual murders and the activities of the Fellowship.",  summaryEs: "Ultima VII: The Black Gate es un juego de rol de 1992 desarrollado y publicado por Origin Systems. El Avatar regresa a Britannia para investigar una serie de asesinatos rituales y las actividades de la Fellowship.",  downloads: [
    {
      label: "macOS arm64",
      url: "https://github.com/Kitrinx/Ultima7_Decomp/releases/download/v0.5.1/ultima7-portable-v0.5.1-macos-arm64.dmg",
      size: "3.2 MB",
    },
    {
      label: "macOS arm64",
      url: "https://github.com/Kitrinx/Ultima7_Decomp/releases/download/v0.5.1/ultima7-modern-v0.5.1-macos-arm64.dmg",
      size: "2.2 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/Kitrinx/Ultima7_Decomp/releases/download/v0.5.1/ultima7-portable-v0.5.1-linux-x64.zip",
      size: "2.2 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/Kitrinx/Ultima7_Decomp/releases/download/v0.5.1/ultima7-portable-v0.5.1-windows-x64.zip",
      size: "1.7 MB",
    },
    {
      label: "Linux x64",
      url: "https://github.com/Kitrinx/Ultima7_Decomp/releases/download/v0.5.1/ultima7-modern-v0.5.1-linux-x64.zip",
      size: "1.5 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/Kitrinx/Ultima7_Decomp/releases/download/v0.5.1/ultima7-modern-v0.5.1-windows-x64.zip",
      size: "1.1 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/ultima-7-decomp.svg",
    alt: "Ultima 7 Decomp (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "This is a decompiled and byte-verified rebuild of Ultima 7.",
  notesEs: "Una reconstrucción decompilada y verificada byte a byte de Ultima 7.",
};
