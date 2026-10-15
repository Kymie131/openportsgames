import type { Port } from "@/lib/ports/schema";

export const GoldeneyePcPort: Port = {
  schema: "port",
  id: "goldeneye-pc-port",
  title: "GoldenEye PC Port",
  game: "GoldenEye PC Port",
  developers: ["jkdansereau"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "decompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/jkdansereau/goldeneye-pc-port"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Nintendo 64",
  notes:
    "GoldenEye 007 (N64, 1997) as a native PC game for Windows, Linux, Steam Deck and macOS. Built from the open decompilation, with widescreen, mouse and keyboard or controller, and split-screen. Not an emulator.",
  notesEs:
    "GoldenEye 007 (N64, 1997) como juego nativo de PC para Windows, Linux, Steam Deck y macOS. Hecho desde la decompilación abierta, con panorámico, ratón y teclado o mando, y pantalla dividida. No es un emulador.",
};
