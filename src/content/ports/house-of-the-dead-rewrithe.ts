import type { Port } from "@/lib/ports/schema";

export const houseOfTheDeadRewrithe: Port = {
  schema: "port",
  id: "house-of-the-dead-rewrithe",
  title: "The House of the Dead: ReWrithe",
  game: "The House of the Dead",
  developers: ["TawhidI-602"],
  publisher: "Sega",
  originalYear: 1996,
  portType: "reimplementation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "beta",
  release: { version: "1.1.0", date: "2026-11-03" },
  sources: ["https://github.com/TawhidI-602/The-House-of-the-Dead-ReWrithe"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  sourceVerified: true,
  addedAt: "2026-11-02",
  originalSystems: ["Arcade"],
  summary:
    "The House of the Dead is a 1996 light-gun arcade shooter developed and published by Sega. Two agents investigate a mansion overrun by creatures created by the mad scientist Curien, shooting through hordes of zombies and mutants.",
  summaryEs:
    "The House of the Dead es un shooter de pistola de luz de 1996 desarrollado y publicado por Sega. Dos agentes investigan una mansión invadida por criaturas creadas por el científico loco Curien, disparando contra hordas de zombis y mutantes.",
  notes:
    "C++ rewrite that merges the Sega Model 2 Revision A arcade original with the 1998 PC port, choosing the better version system by system and allowing either set of models and textures. Version 1.1.0 plays every chapter from start to finish. Requires your own MAME hotd ROM set (Revision A) and your own installed 1998 PC version; a setup script builds the playable executable. The Windows x64 package is the current release; Linux and macOS builds are documented. No game data is included.",
  notesEs:
    "Reescritura en C++ que combina el original arcade de Sega Model 2 Revisión A con el port de PC de 1998, eligiendo la mejor versión sistema a sistema y permitiendo usar cualquiera de los dos conjuntos de modelos y texturas. La versión 1.1.0 permite jugar todos los capítulos de principio a fin. Requiere tu propio set de ROMs hotd de MAME (Revisión A) y tu propia instalación del juego de PC de 1998; un script de configuración compila el ejecutable jugable. El paquete actual es para Windows x64; las builds de Linux y macOS están documentadas. No incluye datos del juego.",
  warning: "Contains flashing lights and horror violence.",
  warningEs: "Contiene luces intermitentes y violencia de terror.",
  downloads: [
    {
      label: "macOS",
      url: "https://github.com/TawhidI-602/The-House-of-the-Dead-ReWrithe/releases/download/v1.3.1/hotd-rewrithe-v1.3.1-macos-universal.zip",
      size: "28.5 MB",
    },
    {
      label: "Windows",
      url: "https://github.com/TawhidI-602/The-House-of-the-Dead-ReWrithe/releases/download/v1.3.1/hotd-rewrithe-v1.3.1-win64.zip",
      size: "25.3 MB",
    },
    {
      label: "Linux",
      url: "https://github.com/TawhidI-602/The-House-of-the-Dead-ReWrithe/releases/download/v1.3.1/hotd-rewrithe-v1.3.1-linux-x86_64.tar.gz",
      size: "24.9 MB",
    },
  ],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/2/2a/House_of_the_Dead_arcade_flyer.jpg",
    alt: "The House of the Dead (arcade flyer)",
    credit: "Wikipedia",
  },
};
