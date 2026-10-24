import type { Port } from "@/lib/ports/schema";

export const RaceIntoSpace: Port = {
  schema: "port",
  id: "race-into-space",
  title: "Race into Space",
  game: "Race into Space",
  developers: ["raceintospace"],
  publisher: "Unknown",
  originalYear: 1993,
  portType: "source-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/raceintospace/raceintospace"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Unknown"],
  summary: "Race into Space is a action-adventure game.",
  summaryEs: "Race into Space es un videojuego de acción y aventura.",
  notes:
    "This is the GitHub home of Race Into Space, the computer version of the Liftoff! board game by Fritz Bronner. It was developed by Strategic Visions and published by Interplay as a disk-based game in 1993 and a CD-ROM in 1994. It was open-sourced in 2005 and a number of improvements have been made over the original.",
  notesEs:
    "Race Into Space es la versión para ordenador del juego de mesa Liftoff! de Fritz Bronner, desarrollado por Strategic Visions y publicado por Interplay como juego en disco en 1993 y en CD-ROM en 1994. Se liberó como código abierto en 2005 y ha recibido varias mejoras desde entonces.",
};
