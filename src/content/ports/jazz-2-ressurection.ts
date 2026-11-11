import type { Port } from "@/lib/ports/schema";

export const jazz2Ressurection: Port = {
  schema: "port",
  id: "jazz-2-ressurection",
  title: "Jazz 2 Ressurection",
  game: "Jazz Jackrabbit 2",
  developers: ["deathkiller"],
  publisher: "Epic MegaGames",
  originalYear: 1998,
  portType: "source-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "3.9.0", date: "2026-10-17" },
  sources: ["https://github.com/deathkiller/jazz2"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  downloads: [
    {
      label: "Android",
      url: "https://github.com/deathkiller/jazz2/releases/download/3.9.0/Jazz2_3.9.0_Android.zip",
      size: "28.2 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/deathkiller/jazz2/releases/download/3.9.0/Jazz2_3.9.0_Linux.zip",
      size: "292.4 MB",
    },
    {
      label: "Macos",
      url: "https://github.com/deathkiller/jazz2/releases/download/3.9.0/Jazz2_3.9.0_MacOS.zip",
      size: "24.2 MB",
    },
    {
      label: "Android",
      url: "https://github.com/deathkiller/jazz2/releases/download/3.9.0/Jazz2_3.9.0_PSP.zip",
      size: "3.2 MB",
    },
    {
      label: "Switch",
      url: "https://github.com/deathkiller/jazz2/releases/download/3.9.0/Jazz2_3.9.0_Switch.zip",
      size: "5.5 MB",
    },
    {
      label: "Android",
      url: "https://github.com/deathkiller/jazz2/releases/download/3.9.0/Jazz2_3.9.0_UWP.zip",
      size: "4.2 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/f/f0/Jazz_Jackrabbit_2.PNG",
    alt: "Jazz Jackrabbit 2 (box art)",
    credit: "Wikipedia",
  },
  summary: "Jazz Jackrabbit 2 is a 1998 platform game produced by Epic MegaGames. It was released for Windows, and later for Macintosh. Like the first game, Jazz Jackrabbit, Jazz Jackrabbit 2 is a side-scrolling platform game but features additional multiplayer options, including the ability to play over a LAN or the Internet. The game was re-released on GOG.com along with the first game on November 30, 2017.",
  summaryEs: "Jazz Jackrabbit 2 es un videojuego de plataformas producido por Epic MegaGames, ahora conocido como Epic Games. Fue puesto en venta en 1998 para PC's que ejecuten Windows, y más tarde para los ordenadores Macintosh. Es la secuela de Jazz Jackrabbit.",
  notes: "Jazz Jackrabbit 2 (Epic MegaGames, 1998) for Android (source port). Latest release: 3.9.0. Needs your own copy of the game (Game Files).",
  notesEs: "Jazz Jackrabbit 2 (Epic MegaGames, 1998) para Android (port de código). Última release: 3.9.0. Necesita tu propia copia del juego.",
};
