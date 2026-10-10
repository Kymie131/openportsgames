import type { Port } from "@/lib/ports/schema";

export const celesteAndroid: Port = {
  schema: "port",
  id: "celeste-android",
  title: "Celeste (Android)",
  game: "Celeste",
  developers: ["BelmanteGu"],
  publisher: "Maddy Makes Games",
  originalYear: 2018,
  portType: "runtime-port",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/BelmanteGu/CelesteAndroid"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Native Android port of Celeste that runs your own PC copy, built with .NET, FNA and SDL3 and rendered with Vulkan. It includes a launcher to import the game.",
  notesEs:
    "Port nativo para Android de Celeste que ejecuta tu propia copia de PC, construido con .NET, FNA y SDL3 y renderizado con Vulkan. Incluye un lanzador para importar el juego.",
};
