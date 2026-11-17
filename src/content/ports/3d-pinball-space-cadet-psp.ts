import type { Port } from "@/lib/ports/schema";

export const _3dPinballSpaceCadetPsp: Port = {
  schema: "port",
  id: "3d-pinball-space-cadet-psp",
  title: "3D Pinball: Space Cadet (PSP)",
  game: "3D Pinball for Windows – Space Cadet",
  developers: ["kira97-fdroid"],
  publisher: "Microsoft",
  originalYear: 1995,
  portType: "source-port",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: "1.0.2", date: "2026-09-16" },
  sources: ["https://github.com/kira97-fdroid/SpaceCadetPinball-PSP"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  summary:
    "3D Pinball for Windows – Space Cadet is a 1995 pinball game developed by Cinematronics and bundled with Microsoft Windows. It simulates a space-themed table with missions, ramps and high-score chasing.",
  summaryEs:
    "3D Pinball for Windows – Space Cadet es un juego de pinball de 1995 desarrollado por Cinematronics e incluido con Microsoft Windows. Simula una mesa ambientada en el espacio con misiones, rampas y puntuaciones altas.",
  cover: {
    src: "https://openportsgames.com/covers/generated/3d-pinball-for-windows.svg",
    alt: "3D Pinball for Windows – Space Cadet (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "3D Pinball for Windows (Microsoft, 1995) running on PlayStation Portable through source port. Latest release: v1.0.2. You need your own copy of the game.",
  notesEs: "3D Pinball for Windows (Microsoft, 1995) en PlayStation Portable mediante port de código. Última release: v1.0.2. Necesitas tu propia copia del juego.",
};
