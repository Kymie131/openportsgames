import type { Port } from "@/lib/ports/schema";

export const forecastChannel: Port = {
  schema: "port",
  kind: "system",
  id: "forecast-channel",
  title: "Forecast Channel",
  game: "Forecast Channel",
  developers: ["GuestDreemurr"],
  publisher: "Nintendo",
  originalYear: 2006,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/doldecomp/forecast"],
  license: { spdx: "CC0-1.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  summary: "Forecast Channel is a 2006 Wii system channel developed by Nintendo. It downloaded weather forecasts and maps for the console's location and displayed them from the Wii Menu.",
  summaryEs: "Forecast Channel es un canal de sistema de Wii de 2006 desarrollado por Nintendo. Descargaba previsiones meteorológicas y mapas de la ubicación de la consola y los mostraba desde el menú de Wii.",
  cover: {
    src: "https://openportsgames.com/covers/generated/forecast-channel.svg",
    alt: "Forecast Channel (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Decompilation of the Wii's Forecast Channel (USA/NTSC v7). It is system software, not a game. A research codebase; it requires files from a console you own.",
  notesEs:
    "Decompilación del canal de previsión del tiempo de Wii (USA/NTSC v7). Es software de sistema, no un juego. Código de investigación; requiere archivos de una consola que poseas.",
};
