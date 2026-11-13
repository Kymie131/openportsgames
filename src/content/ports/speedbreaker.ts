import type { Port } from "@/lib/ports/schema";

export const Speedbreaker: Port = {
  schema: "port",
  id: "speedbreaker",
  title: "SpeedBreaker",  game: "Need for Speed: Most Wanted (2005)",
  developers: ["SpeedBreakerProject"],  publisher: "Electronic Arts",  originalYear: 2005,
  portType: "recompilation",  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "0.2.4", date: "2026-11-07" },
  sources: ["https://github.com/SpeedBreakerProject/speedbreaker"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Xbox 360"],  summary: "Need for Speed: Most Wanted is a 2005 racing game developed by EA Black Box and published by Electronic Arts. The player races through Rockport to climb the Blacklist and evade the police.",  summaryEs: "Need for Speed: Most Wanted es un juego de carreras de 2005 desarrollado por EA Black Box y publicado por Electronic Arts. El jugador recorre Rockport para escalar la Lista Negra y escapar de la policía.",  downloads: [
    {
      label: "macOS",
      url: "https://github.com/SpeedBreakerProject/speedbreaker/releases/download/v0.2.4/SpeedBreaker-macos.dmg",
      size: "30.7 MB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/speedbreaker.svg",
    alt: "SpeedBreaker (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Unofficial static recompilation of the Xbox 360 version of Need for Speed: Most Wanted (2005): a native port for Steam Deck, Steam Machine, Steam Frame, Linux and Mac (iPhone/iPad: sideload the experimental IPA or build it yourself). Bring your own disc: no game files included. Not affiliated with EA or Valve.",
  notesEs:
    "Recompilación estática no oficial de la versión de Xbox 360 de Need for Speed: Most Wanted (2005): port nativo para Steam Deck, Linux y Mac. Aporta tu propio disco: no incluye archivos del juego.",
};
