import type { Port } from "@/lib/ports/schema";

export const wipeoutPhantomEdition: Port = {
  schema: "port",
  id: "wipeout-phantom-edition",
  title: "WipeOut Phantom Edition",
  game: "WipeOut",
  developers: ["Psygnosis"],
  publisher: "Psygnosis",
  originalYear: 1995,
  portType: "source-port",
  genre: "racing",
  openSource: false,
  platforms: ["windows"],
  status: "beta",
  release: { version: "1.2.256", date: "2024-02-17" },
  sources: ["https://github.com/wipeout-phantom-edition/wipeout-phantom-edition"],
  license: {
    spdx: "NOASSERTION",
    note: "no license file published with the project",
  },
  verified: true,
  verifiedAt: "2026-09-30",
  originalSystem: "PlayStation",
  features: [
    "Uncapped frame rate decoupled from the simulation",
    "Widescreen and high resolution rendering options",
    "Automatic data extraction from a PlayStation disc image",
  ],
  featuresEs: [
    "Framerate sin límite desacoplado de la simulación",
    "Opciones de renderizado panorámico y de alta resolución",
    "Extracción automática de datos desde una imagen de disco de PlayStation",
  ],
  notes:
    "Source port of the PlayStation WipeOut that follows the original more closely than the 1996 PC release. Binaries only, the repository holds the readme and screenshots. Needs the USA PlayStation data.",
  notesEs:
    "Port de código fuente del WipeOut de PlayStation que sigue más de cerca al original que la versión de PC de 1996. Solo binarios; el repositorio contiene el readme y las capturas. Necesita los datos de la versión USA de PlayStation.",
  screenshots: [
    {
      src: "https://raw.githubusercontent.com/wipeout-phantom-edition/wipeout-phantom-edition/main/images/screenshot02.png",
      alt: "Racing in WipeOut Phantom Edition",
      credit: "WipeOut Phantom Edition",
    },
    {
      src: "https://raw.githubusercontent.com/wipeout-phantom-edition/wipeout-phantom-edition/main/images/screenshot03.png",
      alt: "Track view in WipeOut Phantom Edition",
      credit: "WipeOut Phantom Edition",
    },
    {
      src: "https://raw.githubusercontent.com/wipeout-phantom-edition/wipeout-phantom-edition/main/images/screenshot04.png",
      alt: "Race in WipeOut Phantom Edition",
      credit: "WipeOut Phantom Edition",
    },
    {
      src: "https://raw.githubusercontent.com/wipeout-phantom-edition/wipeout-phantom-edition/main/images/screenshot05.png",
      alt: "Wide track in WipeOut Phantom Edition",
      credit: "WipeOut Phantom Edition",
    },
    {
      src: "https://raw.githubusercontent.com/wipeout-phantom-edition/wipeout-phantom-edition/main/images/screenshot06.png",
      alt: "Cockpit view in WipeOut Phantom Edition",
      credit: "Wipeout Phantom Edition",
    },
  ],
};
