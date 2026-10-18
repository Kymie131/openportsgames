import type { Port } from "@/lib/ports/schema";

export const pspLatro: Port = {
  schema: "port",
  id: "psp-latro",
  title: "PSP-latro (Balatro for PSP)",
  game: "Balatro",
  developers: ["InternalRegister"],
  publisher: "Playstack",
  originalYear: 2024,
  portType: "source-port",
  genre: "puzzle",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/GreenNinja2525/PSP-latro"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Windows"],
  warning:
    "The original project was removed from GitHub after a DMCA takedown by Balatro's author. This fork only archives it and the port is limited: it is not the full game.",
  warningEs:
    "El proyecto original fue retirado de GitHub tras una reclamación DMCA del autor de Balatro. Este fork solo lo archiva y el port es limitado: no es el juego completo.",
  notes:
    "Limited fan-recreation of Balatro for the Sony PSP by InternalRegister, archived in this fork after the original repository was taken down. It requires files from your own copy of the game. Latest release: latest (2025-10-05).",
  notesEs:
    "Recreación limitada hecha por fans de Balatro para la PSP de Sony por InternalRegister, archivada en este fork después de que el repositorio original fuera retirado. Requiere archivos de tu propia copia del juego. Última release: latest (2025-10-05).",
};
