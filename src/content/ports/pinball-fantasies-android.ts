import type { Port } from "@/lib/ports/schema";

export const pinballFantasiesAndroid: Port = {
  schema: "port",
  id: "pinball-fantasies-android",
  title: "Pinball Fantasies (Android)",
  game: "Pinball Fantasies",
  developers: ["wootbeer"],
  publisher: "21st Century Entertainment",
  originalYear: 1992,
  portType: "source-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/wootbeer/pbfandroid"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "MS-DOS",
  notes:
    "Decompilation and source port of the DOS pinball game Pinball Fantasies for Android, with touch controls. It requires the original game files.",
  notesEs:
    "Decompilación y source port para Android del pinball de DOS Pinball Fantasies, con controles táctiles. Requiere los archivos del juego original.",
};
