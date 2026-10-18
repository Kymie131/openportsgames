import type { Port } from "@/lib/ports/schema";

export const forecastChannel: Port = {
  schema: "port",
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
  notes:
    "Decompilation of the Wii's Forecast Channel (USA/NTSC v7). It is system software, not a game. A research codebase; it requires files from a console you own.",
  notesEs:
    "Decompilación del canal de previsión del tiempo de Wii (USA/NTSC v7). Es software de sistema, no un juego. Código de investigación; requiere archivos de una consola que poseas.",
};
