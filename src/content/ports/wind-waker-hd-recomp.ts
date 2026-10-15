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
  originalSystems: ["Wii U"],
  notes:
    "Recompilation of The Legend of Zelda: The Wind Waker HD (Wii U) that currently targets macOS. It needs your own game data.",
  notesEs:
    "Recompilación de The Legend of Zelda: The Wind Waker HD (Wii U) que por ahora apunta a macOS. Necesita tus propios datos del juego.",
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Wii%20U/Named_Boxarts/Legend%20of%20Zelda,%20The%20-%20The%20Wind%20Waker%20HD%20(USA,%20Asia)%20(En,Fr,Es).png",
    alt: "The Legend of Zelda: The Wind Waker HD (cover)",
    credit: "Box art",
  },
};
