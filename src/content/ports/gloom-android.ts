import type { Port } from "@/lib/ports/schema";

export const gloomAndroid: Port = {
  schema: "port",
  id: "gloom-android",
  title: "ZGloom (Gloom)",
  game: "Gloom",
  developers: ["Andiweli"],
  publisher: "Guildhall",
  originalYear: 1995,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/Andiweli/ZGloom-Android"],
  license: { spdx: "NOASSERTION", note: "no SPDX license in the repository" },
  verified: false,
  originalSystem: "MS-DOS / Amiga",
  notes:
    "Modern source port of the Amiga FPS Gloom with an improved renderer, focused on Android. It needs the original game data.",
  notesEs:
    "Source port moderno del FPS de Amiga Gloom con un renderizador mejorado, centrado en Android. Necesita los datos del juego original.",
};
