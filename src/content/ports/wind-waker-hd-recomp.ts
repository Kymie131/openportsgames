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
  release: { version: "0.5.1", date: "2026-11-06" },
  sources: ["https://github.com/ZeldaWWHDRecomp/ZeldaWWHDRecomp"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  originalSystems: ["Wii U"],
  summary: "The Legend of Zelda: The Wind Waker is a 2002 action-adventure game developed and published by Nintendo for the GameCube. An installment in The Legend of Zelda series, it was released in Japan on December 13, 2002, in North America on March 23, 2003, and in Europe on May 2, 2003.",
  summaryEs: "The Legend of Zelda: The Wind Waker HD es un videojuego de acción y aventura publicado por Nintendo en 2013.",
  notes:
    "Recompilation of The Legend of Zelda: The Wind Waker HD (Wii U) that currently targets macOS. It needs your own game data.",
  notesEs:
    "Recompilación de The Legend of Zelda: The Wind Waker HD (Wii U) que por ahora apunta a macOS. Necesita tus propios datos del juego.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/ZeldaWWHDRecomp/ZeldaWWHDRecomp/releases/download/v0.5.1/WindWakerHD-v0.5.1-android-arm64.apk",
      size: "148.3 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/ZeldaWWHDRecomp/ZeldaWWHDRecomp/releases/download/v0.5.1/WindWakerHD-v0.5.1-android-x86_64.apk",
      size: "151.3 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/ZeldaWWHDRecomp/ZeldaWWHDRecomp/releases/download/v0.5.1/WindWakerHD-v0.5.1-linux-aarch64.AppImage",
      size: "120.5 MB",
    },
    {
      label: "WindWakerHD-v0.5.1-linux-aarch64",
      url: "https://github.com/ZeldaWWHDRecomp/ZeldaWWHDRecomp/releases/download/v0.5.1/WindWakerHD-v0.5.1-linux-aarch64.zip",
      size: "141.9 MB",
    },
    {
      label: "Linux AppImage",
      url: "https://github.com/ZeldaWWHDRecomp/ZeldaWWHDRecomp/releases/download/v0.5.1/WindWakerHD-v0.5.1-linux-x86_64.AppImage",
      size: "119.2 MB",
    },
    {
      label: "WindWakerHD-v0.5.1-linux-x86_64",
      url: "https://github.com/ZeldaWWHDRecomp/ZeldaWWHDRecomp/releases/download/v0.5.1/WindWakerHD-v0.5.1-linux-x86_64.zip",
      size: "139.1 MB",
    },
  ],
  cover: {
    src: "https://thumbnails.libretro.com/Nintendo%20-%20Wii%20U/Named_Boxarts/Legend%20of%20Zelda,%20The%20-%20The%20Wind%20Waker%20HD%20(USA,%20Asia)%20(En,Fr,Es).png",
    alt: "The Legend of Zelda: The Wind Waker HD (cover)",
    credit: "Box art",
  },
};
