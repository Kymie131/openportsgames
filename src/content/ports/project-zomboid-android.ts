import type { Port } from "@/lib/ports/schema";

export const projectZomboidAndroid: Port = {
  schema: "port",
  id: "project-zomboid-android",
  title: "Project Zomboid (Android)",
  game: "Project Zomboid",
  developers: ["udarmolota"],
  publisher: "The Indie Stone",
  originalYear: 2013,
  portType: "runtime-port",
  genre: "simulation",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/udarmolota/zomdroid"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Unofficial Android launcher for Project Zomboid. It needs a purchased copy of the desktop game and its files.",
  notesEs:
    "Lanzador no oficial para Android de Project Zomboid. Necesita una copia comprada del juego de escritorio y sus archivos.",
};
