import type { Port } from "@/lib/ports/schema";

export const Openmb: Port = {
  schema: "port",
  id: "openmb",
  title: "OpenMB",
  game: "OpenMB",
  developers: ["cookgreen"],
  publisher: "Unknown",
  originalYear: 2000,
  portType: "source-port",
  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/cookgreen/OpenMB"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystem: "Other",
  notes:
    "Open Source role-playing game engine for Taleworlds' Mount&Blade Series written in C# using Ogre3d Engine.",
  notesEs:
    "Motor de rol de código abierto para la saga Mount&Blade de Taleworlds, escrito en C# con Ogre3D.",
};
