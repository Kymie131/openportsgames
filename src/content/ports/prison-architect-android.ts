import type { Port } from "@/lib/ports/schema";

export const prisonArchitectAndroid: Port = {
  schema: "port",
  id: "prison-architect-android",
  title: "Prison Architect (Android)",
  game: "Prison Architect",
  developers: ["udarmolota"],
  publisher: "Introversion Software",
  originalYear: 2015,
  portType: "runtime-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/udarmolota/pridroid"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android launcher for Prison Architect, based on the desktop game. It needs your own copy of the game files.",
  notesEs:
    "Lanzador para Android de Prison Architect, basado en el juego de escritorio. Necesita tu propia copia de los archivos del juego.",
};
