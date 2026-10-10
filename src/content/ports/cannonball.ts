import type { Port } from "@/lib/ports/schema";

export const cannonball: Port = {
  schema: "port",
  id: "cannonball",
  title: "CannonBall",
  game: "OutRun",
  developers: ["djyt"],
  publisher: "Sega",
  originalYear: 1986,
  portType: "reimplementation",
  genre: "racing",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos"],
  status: "stable",
  release: { version: null, date: null },
  sources: ["https://github.com/djyt/cannonball"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Arcade",
  notes:
    "CannonBall is an enhanced OutRun engine that runs the arcade game with 60 FPS, widescreen and new tracks. It needs the original OutRun ROM and builds for Windows, Linux and macOS.",
  notesEs:
    "CannonBall es un motor mejorado de OutRun que ejecuta el juego arcade con 60 FPS, widescreen y pistas nuevas. Necesita la ROM original de OutRun y compila para Windows, Linux y macOS.",
};
