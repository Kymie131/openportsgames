import type { Port } from "@/lib/ports/schema";

export const sm64ex: Port = {
  schema: "port",
  id: "sm64ex",
  title: "sm64ex",
  game: "Super Mario 64",
  developers: ["Nintendo EAD"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/sm64pc/sm64ex"],
  license: {
    spdx: "NOASSERTION",
    note: "no SPDX license file in the repository",
  },
  aiDisclosure: false,
  verified: false,
  notes:
    "Native PC port from the Super Mario 64 decompilation. No numbered releases; builds track the repository. Requires a legally obtained North American Super Mario 64 ROM.",
  installGuide: {
    steps: [
      "Own a physical or digital copy of Super Mario 64; the build needs the original North American (U) ROM.",
      "Dump the ROM from your cartridge with a tool you are legally entitled to use.",
      "Rename the dump to baserom.us.z64 and place it in the project folder, or grab the prebuilt binaries from the project releases.",
      "Build with make (the tools are bundled) or launch the prebuilt executable directly.",
    ],
    stepsEs: [
      "Ten una copia física o digital de Super Mario 64; la compilación necesita la ROM americana (U) original.",
      "Vuelca la ROM desde tu cartucho con una herramienta que tengas permiso legal de usar.",
      "Renombra el volcado a baserom.us.z64 y colócalo en la carpeta del proyecto, o descarga los binarios precompilados de las publicaciones del proyecto.",
      "Compila con make (las herramientas van incluidas) o ejecuta directamente el binario precompilado.",
    ],
  },
};
