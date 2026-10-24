import type { Port } from "@/lib/ports/schema";

export const zumaDeluxeAndroid: Port = {
  schema: "port",
  id: "zuma-deluxe-android",
  title: "Zuma Deluxe (Android)",
  game: "Zuma Deluxe",
  developers: ["astola-studio"],
  publisher: "PopCap Games",
  originalYear: 2003,
  portType: "runtime-port",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/astola-studio/ZumaDeluxeAndroid"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystems: ["Windows"],
  summary: "Deep in the jungle lie hidden temples bursting with traps and trickery, and it's up to you to uncover their treasures. Fire magical balls from your stone frog idol to make matches of three or more and clear the deadly chain before it reaches the golden skull.",
  summaryEs: "Zuma Deluxe es un videojuego de puzles publicado por PopCap Games, Inc. en 2006.",
  notes:
    "Unofficial Android build of Zuma Deluxe. It is distributed as an APK and needs the original game assets.",
  notesEs:
    "Build no oficial para Android de Zuma Deluxe. Se distribuye como APK y necesita los recursos del juego original.",
  cover: {
    src: "https://cdn.cloudflare.steamstatic.com/steam/apps/3330/header.jpg",
    alt: "Zuma Deluxe (cover)",
    credit: "Steam",
  },
};
