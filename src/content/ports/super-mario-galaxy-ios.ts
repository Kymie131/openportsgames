import type { Port } from "@/lib/ports/schema";

export const superMarioGalaxyIos: Port = {
  schema: "port",
  id: "super-mario-galaxy-ios",
  title: "GalaxyPad",
  game: "Super Mario Galaxy",
  developers: ["chrissotraidis"],
  publisher: "Nintendo",
  originalYear: 2007,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["ios", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/chrissotraidis/galaxypad"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii"],
  related: ["petari", "super-mario-galaxy-nebula", "super-mario-galaxy-android"],
  notes:
    "GalaxyPad: Super Mario Galaxy (Wii, 2007) native for iOS, iPadOS and macOS, with native ARM64 game code and a Metal renderer. Experimental preview. Latest release: v0.2.2.",
  notesEs:
    "GalaxyPad: Super Mario Galaxy (Wii, 2007) nativo para iOS, iPadOS y macOS, con código de juego ARM64 nativo y renderer Metal. Vista previa experimental. Última release: v0.2.2.",
};
