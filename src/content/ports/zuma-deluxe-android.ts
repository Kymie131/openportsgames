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
  originalSystem: "Microsoft Windows",
  notes:
    "Unofficial Android build of Zuma Deluxe. It is distributed as an APK and needs the original game assets.",
  notesEs:
    "Build no oficial para Android de Zuma Deluxe. Se distribuye como APK y necesita los recursos del juego original.",
};
