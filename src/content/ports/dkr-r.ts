import type { Port } from "@/lib/ports/schema";

export const dkrR: Port = {
  schema: "port",
  id: "dkr-r",
  title: "DKR-R",
  game: "Diddy Kong Racing",
  developers: ["Rare"],
  publisher: "Nintendo",
  originalYear: 1997,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.0.4", date: "2026-09-03" },
  sources: ["https://github.com/ThatGuyMcd/DKR-R"],
  license: { spdx: "MIT" },
  aiDisclosure: false,
  verified: true,
  verifiedAt: "2026-09-22",
  originalSystem: "Nintendo 64",
  features: [
    "Online multiplayer with cooperative Adventure mode",
    "Rumble Pak and Memory Pak controls via launcher options",
    "SDL3 audio/input backend with an automatic fallback",
  ],
  notes:
    "Native port of Diddy Kong Racing created through static recompilation of the Nintendo 64 binary, with releases for Windows, Linux and macOS (the macOS build is a community fork linked from each release). Requires the game dump from a cartridge or ROM you own. Version 1.0.4 is the latest tagged release.",
};
