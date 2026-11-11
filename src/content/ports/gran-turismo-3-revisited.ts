import type { Port } from "@/lib/ports/schema";

export const granTurismo3Revisited: Port = {
  schema: "port",
  id: "gran-turismo-3-revisited",
  title: "GT3 Revisited",
  game: "Gran Turismo 3: A-Spec",
  developers: ["matt-pulsipher"],
  publisher: "Sony Computer Entertainment",
  originalYear: 2001,
  portType: "reimplementation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android", "ios"],
  status: "stable",
  release: { version: "0.6.0", date: "2026-11-01" },
  sources: ["https://github.com/matt-pulsipher/GT3-revisited"],
  license: { spdx: "MIT" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-02",
  originalSystems: ["PlayStation 2"],
  summary:
    "Gran Turismo 3: A-Spec is a 2001 racing game developed by Polyphony Digital and published by Sony Computer Entertainment for the PlayStation 2. It features more than 180 cars, rally and circuit events, and the Gran Turismo Mode career.",
  summaryEs:
    "Gran Turismo 3: A-Spec es un juego de carreras de 2001 desarrollado por Polyphony Digital y publicado por Sony Computer Entertainment para PlayStation 2. Incluye más de 180 coches, pruebas de rally y circuito, y el modo carrera Gran Turismo.",
  notes:
    "Open-source reimplementation of the Gran Turismo 3 A-Spec engine. Version 0.6.0 is playable from start to finish: GT Mode with dealers, tuning, licences and endurance races, Arcade with two-player split screen, replays, and the original movies and music. It reads assets directly from your own .iso or .chd disc image and adds online i.LINK battles for up to six players. Builds are provided for Windows, macOS, Linux, Android and Meta Quest; iOS builds from source. No game data is included.",
  notesEs:
    "Reimplementación de código abierto del motor de Gran Turismo 3 A-Spec. La versión 0.6.0 es jugable de principio a fin: modo GT con concesionarios, ajustes, licencias y resistencias, Arcade con pantalla dividida para dos jugadores, repeticiones y las películas y música originales. Lee los recursos directamente de tu propia imagen .iso o .chd y añade batallas i.LINK online para hasta seis jugadores. Hay builds para Windows, macOS, Linux, Android y Meta Quest; iOS se compila desde el código. No incluye datos del juego.",
  downloads: [
    {
      label: "Android",
      url: "https://github.com/matt-pulsipher/GT3-revisited/releases/download/v0.6.4/gt3r-android.apk",
      size: "23.7 MB",
    },
    {
      label: "Android",
      url: "https://github.com/matt-pulsipher/GT3-revisited/releases/download/v0.6.4/gt3r-quest.apk",
      size: "13.1 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/matt-pulsipher/GT3-revisited/releases/download/v0.6.4/gt3r-linux-x86_64.tar.gz",
      size: "10.3 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/matt-pulsipher/GT3-revisited/releases/download/v0.6.4/gt3r-windows-x64-vr.zip",
      size: "9.3 MB",
    },
    {
      label: "Windows x64",
      url: "https://github.com/matt-pulsipher/GT3-revisited/releases/download/v0.6.4/gt3r-windows-x64.zip",
      size: "8.5 MB",
    },
    {
      label: "macOS",
      url: "https://github.com/matt-pulsipher/GT3-revisited/releases/download/v0.6.4/gt3r-macos-arm64.zip",
      size: "7.7 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/8/83/Gran_Turismo_3_%28Original%29.jpg",
    alt: "Gran Turismo 3: A-Spec (box art)",
    credit: "Wikipedia",
  },
};
