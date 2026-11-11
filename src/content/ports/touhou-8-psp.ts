import type { Port } from "@/lib/ports/schema";

export const touhou8Psp: Port = {
  schema: "port",
  id: "touhou-8-psp",
  title: "Touhou 8 (PSP)",
  game: "Touhou 8: Imperishable Night",
  developers: ["kan8223-dotcom"],
  publisher: "Team Shanghai Alice",
  originalYear: 2004,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: "0.4.1", date: "2026-09-28" },
  sources: ["https://github.com/kan8223-dotcom/th08-psp-native"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary: "Touhou Eiyashou ~ Imperishable Night. is a 2004 vertical bullet hell scrolling shoot 'em up video game developed by Team Shanghai Alice. It is the eighth game in the Touhou Project series, and the third main Touhou Project game to be released specifically for the Windows operating system.",
  summaryEs: "El término null, nulo o nil es a menudo utilizado en la computación para hacer referencia a la nada. Su significado y uso varía según el lenguaje de programación.",
  downloads: [
    {
      label: "LICENSES-v0.4.1",
      url: "https://github.com/kan8223-dotcom/th08-psp-native/releases/download/v0.4.1/LICENSES-v0.4.1.zip",
      size: "56 KB",
    },
    {
      label: "TH08PSP-Go-v0.4.1-scarletfix",
      url: "https://github.com/kan8223-dotcom/th08-psp-native/releases/download/v0.4.1/TH08PSP-Go-v0.4.1-scarletfix.zip",
      size: "5.9 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/touhou-8-imperishable-night.svg",
    alt: "Touhou 8: Imperishable Night (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Touhou 8: Imperishable Night (Team Shanghai Alice, 2004) running on PlayStation Portable through source port. Latest release: v0.4.1. You need your own copy of the game.",
  notesEs: "Touhou 8: Imperishable Night (Team Shanghai Alice, 2004) en PlayStation Portable mediante port de código. Última release: v0.4.1. Necesitas tu propia copia del juego.",
};
