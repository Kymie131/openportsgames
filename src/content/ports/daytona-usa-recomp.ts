import type { Port } from "@/lib/ports/schema";

export const daytonaUsaRecomp: Port = {
  schema: "port",
  id: "daytona-usa-recomp",
  title: "Daytona USA Recompiled",
  game: "Daytona USA",
  developers: ["Subarasheese"],
  publisher: "Sega",
  originalYear: 1993,
  portType: "recompilation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Subarasheese/daytona-xbla-recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of the Xbox Live Arcade release of Daytona USA to native Windows and Linux. It requires your own copy of the game.",
  notesEs:
    "Recompilación de la versión de Daytona USA para Xbox Live Arcade a ejecutables nativos de Windows y Linux. Requiere tu propia copia del juego.",
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/c/c2/Daytona_USA_arcade_flyer.jpg",
    alt: "Daytona USA (box art)",
    credit: "Wikipedia",
  },
};
