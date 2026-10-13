import type { Port } from "@/lib/ports/schema";

export const hagi: Port = {
  schema: "port",
  id: "hagi",
  title: "Hagi (GameCube/Wii Emulator)",
  game: "Hagi",
  developers: ["GRAnimated"],
  publisher: "GRAnimated",
  originalYear: 2023,
  portType: "decompilation",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/GRAnimated/Hagi"],
  license: { spdx: "NOASSERTION" },
  verified: false,
  sourceVerified: true,
  originalSystem: "GameCube",
  notes:
    "Decompilation of the Hagi GameCube and Wii emulator bundled with Super Mario 3D All-Stars. It is an emulator, not a game.",
  notesEs:
    "Decompilación del emulador Hagi de GameCube y Wii incluido en Super Mario 3D All-Stars. Es un emulador, no un juego.",
};
