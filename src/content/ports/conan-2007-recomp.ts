import type { Port } from "@/lib/ports/schema";

export const conan2007Recomp: Port = {
  schema: "port",
  id: "conan-2007-recomp",
  title: "Conan (2007) Recompiled",
  game: "Conan",
  developers: ["crazyriddler"],
  publisher: "THQ",
  originalYear: 2007,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/crazyriddler/Conan2007Recomp"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Xbox 360",
  notes:
    "Recompilation of the 2007 Conan game (Xbox 360) to a native Windows executable. You must supply your own copy.",
  notesEs:
    "Recompilación del juego Conan de 2007 (Xbox 360) a un ejecutable nativo para Windows. Debes aportar tu propia copia.",
};
