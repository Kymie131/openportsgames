import type { Port } from "@/lib/ports/schema";

export const lookingGlassAlice: Port = {
  schema: "port",
  id: "looking-glass-alice",
  title: "LookingGlass (American McGee's Alice)",
  game: "American McGee's Alice",
  developers: ["skulitom"],
  publisher: "Electronic Arts",
  originalYear: 2000,
  portType: "reimplementation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/skulitom/LookingGlass"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Rust reimplementation of American McGee's Alice that runs the full campaign on Windows with controller support and modern display options. It is an experimental preview and needs your own game data.",
  notesEs:
    "Reimplementación en Rust de American McGee's Alice que ejecuta la campaña completa en Windows con soporte de mando y opciones de pantalla modernas. Es una preview experimental y necesita tus propios datos del juego.",
};
