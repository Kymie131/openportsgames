import type { Port } from "@/lib/ports/schema";

export const Freeft: Port = {
  schema: "port",
  id: "freeft",
  title: "FreeFT",  game: "Fallout Tactics: Brotherhood of Steel",
  developers: ["nadult"],  publisher: "Interplay Entertainment",  originalYear: 2001,
  portType: "source-port",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/nadult/FreeFT"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Fallout Tactics: Brotherhood of Steel is a 2001 tactical role-playing game developed by Micro Forté and published by Interplay Entertainment. A Brotherhood squad fights across the post-nuclear Midwest in turn-based or real-time combat.",  summaryEs: "Fallout Tactics: Brotherhood of Steel es un juego de rol táctico de 2001 desarrollado por Micro Forté y publicado por Interplay Entertainment. Un escuadrón de la Hermandad lucha por el Medio Oeste postnuclear en combate por turnos o en tiempo real.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/nadult/FreeFT/releases/download/linux-deps-1/mpg123_1.31.2.zip",
      size: "483 KB",
    },
    {
      label: "Windows",
      url: "https://github.com/nadult/FreeFT/releases/download/linux-deps-1/libzip_1.11.4.zip",
      size: "97 KB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/freeft.svg",
    alt: "FreeFT (generated cover)",
    credit: "OpenPortsGames",
  },
  notes: "Isometric action game engine.",
  notesEs: "Motor de juego de acción isométrico.",
};
