import type { Port } from "@/lib/ports/schema";

export const Emperorreborn: Port = {
  schema: "port",
  id: "emperorreborn",
  title: "EmperorReborn",  game: "Emperor: Battle for Dune",
  developers: ["azmawee"],  publisher: "Electronic Arts",  originalYear: 2001,
  portType: "source-port",  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "2.5", date: "2026-06-17" },
  sources: ["https://github.com/azmawee/EmperorReborn"],
  license: { spdx: "MIT-0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Emperor: Battle for Dune is a 2001 real-time strategy game developed by Westwood Studios and published by Electronic Arts. House Atreides, House Harkonnen and the Ordos fight for control of Arrakis after the Emperor is assassinated.",  summaryEs: "Emperor: Battle for Dune es un juego de estrategia en tiempo real de 2001 desarrollado por Westwood Studios y publicado por Electronic Arts. Las casas Atreides, Harkonnen y Ordos luchan por el control de Arrakis tras el asesinato del Emperador.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/azmawee/EmperorReborn/releases/download/v2.5/EmperorReborn-v2.5.zip",
      size: "372 KB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/emperorreborn.svg",
    alt: "EmperorReborn (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Play Emperor: Battle for Dune on Windows 10 and 11 with real 16:9 widescreen, fullscreen and working multiplayer. Free, open-source launcher and patcher for the Westwood Dune RTS.",
  notesEs:
    "Juega a Emperor: Battle for Dune en Windows 10 y 11 con 16:9 real, pantalla completa y multijugador funcional. Lanzador y parche de código abierto para el RTS Dune de Westwood.",
};
