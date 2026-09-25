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
  screenshots: [
    {
      src: "https://camo.githubusercontent.com/db56dc171bebade2b99e6d4b21a199fe153f17e053df44e46a04f667f34af3fb/687474703a2f2f7870726f6765722e696e666f2f70726f6a656374732f4f70656e4c6172612f73686f74732f776174657266616c6c2e6a7067",
      alt: "OpenLara rendering a waterfall area in Tomb Raider",
      credit: "OpenLara",
    },
    {
      src: "https://camo.githubusercontent.com/5f8a037fe13708a06b03f320eceb5381a61d2773de02bdaa32c61c98753161f4/687474703a2f2f7870726f6765722e696e666f2f70726f6a656374732f4f70656e4c6172612f73686f74732f7472335f74656d706c652e6a7067",
      alt: "OpenLara rendering the temple environment of Tomb Raider 3",
      credit: "OpenLara",
    },
  ],
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
