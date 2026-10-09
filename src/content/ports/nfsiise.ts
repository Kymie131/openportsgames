import type { Port } from "@/lib/ports/schema";

export const nfsiise: Port = {
  schema: "port",
  id: "nfsiise",
  title: "NFSIISE",
  game: "Need for Speed II SE",
  developers: ["zaps166"],
  publisher: "Electronic Arts",
  originalYear: 1997,
  portType: "runtime-port",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/zaps166/NFSIISE"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Cross-platform wrapper that runs Need for Speed II SE with 3D acceleration and TCP networking, using the original game files. It builds for Windows, Linux, macOS and Android.",
  notesEs:
    "Envoltorio multiplataforma que ejecuta Need for Speed II SE con aceleración 3D y red TCP, usando los archivos del juego original. Compila para Windows, Linux, macOS y Android.",
};
