import type { Port } from "@/lib/ports/schema";

export const Maxr: Port = {
  schema: "port",
  id: "maxr",
  title: "Maxr",  game: "M.A.X.: Mechanized Assault & Exploration",
  developers: ["maxr-dot-org"],  publisher: "Interplay Entertainment",  originalYear: 1996,
  portType: "source-port",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.2.17", date: "2024-11-07" },
  sources: ["https://github.com/maxr-dot-org/maxr"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,  originalSystems: ["MS-DOS", "Windows"],  summary: "M.A.X.: Mechanized Assault & Exploration is a 1996 turn-based strategy game developed by Interplay Productions. Players build bases, research technology and command vehicles and infantry on alien planets.",  summaryEs: "M.A.X.: Mechanized Assault & Exploration es un juego de estrategia por turnos de 1996 desarrollado por Interplay Productions. El jugador construye bases, investiga tecnología y dirige vehículos e infantería en planetas alienígenas.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/maxr-dot-org/maxr/releases/download/release-0.2.17/maxr-0.2.17.exe",
      size: "17.8 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/maxr.svg",
    alt: "maxr (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "A turn based strategy game.",
  notesEs: "Un juego de estrategia por turnos.",
};
