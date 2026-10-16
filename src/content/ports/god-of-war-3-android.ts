import type { Port } from "@/lib/ports/schema";

export const godOfWar3Android: Port = {
  schema: "port",
  id: "god-of-war-3-android",
  title: "God of War III Remastered (Android)",
  game: "God of War III Remastered",
  developers: ["zFitness"],
  publisher: "Sony Interactive Entertainment",
  originalYear: 2015,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/zFitness/gow3_android"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["PlayStation 4"],
  related: ["god-of-war-3-recomp"],
  notes:
    "Native Android (ARM64) port of God of War III Remastered (PS4), powered by FEXCore, Vulkan/Turnip and a game-specific runtime. Work in progress; you need your own copy of the game. Latest release: v2.1.6-android4 (APK).",
  notesEs:
    "Port nativo para Android (ARM64) de God of War III Remastered (PS4), con FEXCore, Vulkan/Turnip y un runtime específico del juego. En desarrollo; necesitas tu propia copia del juego. Última release: v2.1.6-android4 (APK).",
};
