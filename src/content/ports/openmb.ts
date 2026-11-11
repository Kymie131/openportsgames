import type { Port } from "@/lib/ports/schema";

export const Openmb: Port = {
  schema: "port",
  id: "openmb",
  title: "OpenMB",  game: "Mount & Blade",
  developers: ["cookgreen"],  publisher: "TaleWorlds Entertainment",  originalYear: 2008,
  portType: "source-port",  genre: "rpg",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "alpha",
  release: { version: "2.2.1", date: "2022-10-07" },
  sources: ["https://github.com/cookgreen/OpenMB"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,  originalSystems: ["Windows"],  summary: "Mount & Blade is a 2008 action role-playing game developed and published by TaleWorlds Entertainment. It combines mounted combat, army management and sandbox campaigns in the fictional land of Calradia.",  summaryEs: "Mount & Blade es un juego de rol y acción de 2008 desarrollado y publicado por TaleWorlds Entertainment. Combina combate a caballo, gestión de ejércitos y campañas sandbox en la tierra ficticia de Calradia.",  downloads: [
    {
      label: "Windows",
      url: "https://github.com/cookgreen/OpenMB/releases/download/googletransapi-2.2.1/GoogleTranslateAPI-2.2.1.7z",
      size: "205 KB",
    },
  ],
  cover: {
    src: "https://openportsgames.com/covers/generated/openmb.svg",
    alt: "OpenMB (generated cover)",
    credit: "OpenPortsGames",
  },
  notes:
    "Open Source role-playing game engine for Taleworlds' Mount&Blade Series written in C# using Ogre3d Engine.",
  notesEs:
    "Motor de rol de código abierto para la saga Mount&Blade de Taleworlds, escrito en C# con Ogre3D.",
};
