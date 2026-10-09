import type { Port } from "@/lib/ports/schema";

export const unciv: Port = {
  schema: "port",
  id: "unciv",
  title: "Unciv",
  game: "Civilization V",
  developers: ["yairm210"],
  publisher: "2K Games",
  originalYear: 2010,
  portType: "reimplementation",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android", "ios"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/yairm210/Unciv"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Open-source remake of Civilization V for Android and desktop, also available on iOS. It is a turn-based strategy game that does not use the original game's assets.",
  notesEs:
    "Remake libre de Civilization V para Android y escritorio, también disponible en iOS. Es un juego de estrategia por turnos que no usa los recursos del juego original.",
};
