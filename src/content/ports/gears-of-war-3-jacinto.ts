import type { Port } from "@/lib/ports/schema";

export const gearsOfWar3Jacinto: Port = {
  schema: "port",
  id: "gears-of-war-3-jacinto",
  title: "Gears of War 3: Project Jacinto",
  game: "Gears of War 3",
  developers: ["xHeliosx"],
  publisher: "Microsoft Studios",
  originalYear: 2011,
  portType: "recompilation",
  genre: "shooter",
  openSource: false,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://www.nexusmods.com/gearsofwar3"],
  license: { spdx: "NOASSERTION", note: "no public repository or license" },
  verified: false,
  sourceVerified: false,
  originalSystem: "Xbox 360",
  warning:
    "This version was built from a leaked development build, not from your own copy of the game. Its legal situation differs from the rest of the catalog and it may be removed.",
  warningEs:
    "Esta versión se construyó a partir de una build de desarrollo filtrada, no de tu copia del juego. Su situación legal es distinta a la del resto del catálogo y puede ser retirada.",
  notes:
    "Project Jacinto brings the Xbox 360 version of Gears of War 3 to PC from a cancelled development build. The base port is shared through the community rather than a public repository, and this page collects the fixes and tools built around it.",
  notesEs:
    "Project Jacinto lleva la versión de Xbox 360 de Gears of War 3 a PC a partir de una build de desarrollo cancelada. El port base se comparte a través de la comunidad y no de un repositorio público, y esta página reúne los arreglos y herramientas creados a su alrededor.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/d/dc/Gears_of_War_3_box_artwork.png",
    alt: "Gears of War 3 (box art)",
    credit: "Wikipedia",
  },
};
