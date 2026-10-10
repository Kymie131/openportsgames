import type { Port } from "@/lib/ports/schema";

export const hollowKnightAndroid: Port = {
  schema: "port",
  id: "hollow-knight-android",
  title: "Hollow Knight (Android)",
  game: "Hollow Knight",
  developers: ["igawa6"],
  publisher: "Team Cherry",
  originalYear: 2017,
  portType: "runtime-port",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/igawa6/dualsouls"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Unofficial Android port of Hollow Knight with dual-screen support, aimed at handhelds. It needs your own copy of the game.",
  notesEs:
    "Port no oficial para Android de Hollow Knight con soporte de doble pantalla, pensado para consolas portátiles. Necesita tu propia copia del juego.",
};
