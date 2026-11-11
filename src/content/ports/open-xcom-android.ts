import type { Port } from "@/lib/ports/schema";

export const openXcomAndroid: Port = {
  schema: "port",
  id: "open-xcom-android",
  title: "Open XCom Android",
  game: "XCom: UFO Defense",
  developers: ["sfalexrog"],
  publisher: "MicroProse",
  originalYear: 1994,
  portType: "source-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: "0.2", date: "2017-08-03" },
  sources: ["https://github.com/sfalexrog/openxcom-android"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "You are in control of X-COM: an organization formed by the world's governments to fight the ever-increasing alien menace.",
  summaryEs: "XCom: UFO Defense es un videojuego de estrategia publicado por 2K en 2008.",
  downloads: [
    {
      label: "Android APK",
      url: "https://github.com/sfalexrog/openxcom-android/releases/download/v0.2/OpenXcom-v1.0-g04ec4c6-arm64-v8a.apk",
      size: "5.5 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/sfalexrog/openxcom-android/releases/download/v0.2/OpenXcom-v1.0-g04ec4c6-armeabi-v7a.apk",
      size: "5.3 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/sfalexrog/openxcom-android/releases/download/v0.2/OpenXcom-v1.0-g04ec4c6-armeabi.apk",
      size: "5.3 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/sfalexrog/openxcom-android/releases/download/v0.2/OpenXcom-v1.0-g04ec4c6-x86.apk",
      size: "5.8 MB",
    },
    {
      label: "Android APK",
      url: "https://github.com/sfalexrog/openxcom-android/releases/download/v0.2/OpenXcom-v1.0-g04ec4c6-x86_64.apk",
      size: "5.7 MB",
    },
  ],
  cover: {
    src: "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/7760/header.jpg?t=1571243544",
    alt: "XCom: UFO Defense (Steam header)",
    credit: "Steam",
  },
  notes: "XCom: UFO Defense (MicroProse, 1994) for Android (source port). Latest release: v0.2. Needs your own copy of the game (Game Files).",
  notesEs: "XCom: UFO Defense (MicroProse, 1994) para Android (port de código). Última release: v0.2. Necesita tu propia copia del juego.",
};
