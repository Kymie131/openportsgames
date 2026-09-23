import type { Port } from "@/lib/ports/schema";

export const openXcom: Port = {
  schema: "port",
  id: "openxcom",
  title: "OpenXcom",
  game: "X-COM: UFO Defense",
  developers: ["MicroProse"],
  publisher: "MicroProse",
  originalYear: 1994,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: "1.0", date: "2014-06-13" },
  sources: ["https://github.com/SupSuper/OpenXcom"],
  website: "https://openxcom.org/",
  license: {
    spdx: "GPL-3.0",
  },
  aiDisclosure: false,
  verified: false,
  notes:
    "Open source reimplementation of the original X-COM engine. The tagged v1.0 release is from 2014; current builds are distributed via openxcom.org. Requires original X-COM data.",
  installGuide: {
    steps: [
      "Own X-COM: UFO Defense (aka UFO: Enemy Unknown).",
      "Copy the UFO/ game data folder from your original install into the OpenXcom data directory.",
      "Install an OpenXcom build and let the game detect the data folder on first launch.",
      "Run OpenXcom; it rebuilds the original campaign with quality-of-life fixes.",
    ],
    stepsEs: [
      "Ten una copia de X-COM: UFO Defense (también conocido como UFO: Enemy Unknown).",
      "Copia la carpeta de datos del juego UFO/ desde tu instalación original al directorio de datos de OpenXcom.",
      "Instala una compilación de OpenXcom y deja que el juego detecte la carpeta de datos en el primer arranque.",
      "Ejecuta OpenXcom; reconstruye la campaña original con mejoras de calidad de vida.",
    ],
  },
};