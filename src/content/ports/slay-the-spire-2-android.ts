import type { Port } from "@/lib/ports/schema";

export const slayTheSpire2Android: Port = {
  schema: "port",
  id: "slay-the-spire-2-android",
  title: "Slay the Spire 2 (Android)",
  game: "Slay the Spire 2",
  developers: ["Ekyso"],
  publisher: "Mega Crit",
  originalYear: 2025,
  portType: "runtime-port",
  genre: "strategy",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/Ekyso/StS2-Launcher"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Unofficial Android launcher for Slay the Spire 2, still in alpha. It needs the original game.",
  notesEs:
    "Lanzador no oficial para Android de Slay the Spire 2, todavía en alfa. Necesita el juego original.",
};
