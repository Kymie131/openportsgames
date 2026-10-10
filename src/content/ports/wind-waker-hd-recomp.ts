import type { Port } from "@/lib/ports/schema";

export const windWakerHdRecomp: Port = {
  schema: "port",
  id: "wind-waker-hd-recomp",
  title: "The Wind Waker HD Recompiled",
  game: "The Legend of Zelda: The Wind Waker HD",
  developers: ["ZeldaWWHDRecomp"],
  publisher: "Nintendo",
  originalYear: 2013,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["macos"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ZeldaWWHDRecomp/ZeldaWWHDRecomp"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  originalSystem: "Wii U",
  notes:
    "Recompilation of The Legend of Zelda: The Wind Waker HD (Wii U) that currently targets macOS. It needs your own game data.",
  notesEs:
    "Recompilación de The Legend of Zelda: The Wind Waker HD (Wii U) que por ahora apunta a macOS. Necesita tus propios datos del juego.",
};
