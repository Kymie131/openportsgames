import type { Port } from "@/lib/ports/schema";

export const sm64Psp: Port = {
  schema: "port",
  id: "sm64-psp",
  title: "Super Mario 64 (PSP)",
  game: "Super Mario 64",
  developers: ["JustKidding23"],
  publisher: "Nintendo",
  originalYear: 1996,
  portType: "decompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["psp"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/JustKidding23/SM64-PSP"],
  license: { spdx: "NOASSERTION", note: "license not declared in the repository" },
  verified: false,
  sourceVerified: true,
  wip: true,
  aiDisclosure: {
    source: "https://github.com/JustKidding23/SM64-PSP",
    quote: "Built with the use of AI (Claude).",
  },
  originalSystems: ["Nintendo 64"],
  related: ["sm64ex"],
  notes:
    "Super Mario 64 (Nintendo, 1996) running natively on PSP, based on the sm64-port decompilation. It requires your own ROM and includes no game data.",
  notesEs:
    "Super Mario 64 (Nintendo, 1996) en PSP de forma nativa, basado en la decompilación sm64-port. Requiere tu propia ROM y no incluye datos del juego.",
};
