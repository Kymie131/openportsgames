import type { Port } from "@/lib/ports/schema";

export const openLara: Port = {
  schema: "port",
  id: "open-lara",
  title: "OpenLara",
  game: "Tomb Raider",
  developers: ["Core Design"],
  publisher: "Eidos Interactive",
  originalYear: 1996,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/XProger/OpenLara"],
  website: "https://xproger.info/projects/OpenLara/",
  license: {
    spdx: "BSD-2-Clause",
  },
  aiDisclosure: false,
  verified: false,
  notes:
    "Reverse-engineered engine for the original Tomb Raider. No numbered releases; builds track the repository. Requires Tomb Raider 1 data files (legally obtained).",
  installGuide: {
    steps: [
      "Own Tomb Raider 1, from the original PC release or a storefront re-release.",
      "Install the original game so its data files are on your machine.",
      "Use the project's official extraction or conversion tooling on your original install to prepare the data.",
      "Place the prepared data in the OpenLara data folder and run the executable.",
    ],
    stepsEs: [
      "Ten una copia de Tomb Raider 1, de la versión original de PC o de una reedición de tienda digital.",
      "Instala el juego original para que sus archivos de datos queden en tu equipo.",
      "Usa la herramienta oficial de extracción o conversión del proyecto sobre tu instalación original para preparar los datos.",
      "Coloca los datos preparados en la carpeta de datos de OpenLara y ejecuta el binario.",
    ],
  },
};