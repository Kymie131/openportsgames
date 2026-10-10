import type { Port } from "@/lib/ports/schema";

export const voyagerEliteForceAndroid: Port = {
  schema: "port",
  id: "voyager-elite-force-android",
  title: "Star Trek: Voyager - Elite Force (Android)",
  game: "Star Trek: Voyager - Elite Force",
  developers: ["imjustadudegamer"],
  publisher: "Activision",
  originalYear: 2000,
  portType: "source-port",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/imjustadudegamer/VoyagerSP-Android"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android single-player port of Star Trek: Voyager - Elite Force, built on idTech3/Quake3e with a Vulkan renderer. It needs the original game files.",
  notesEs:
    "Port a Android para un jugador de Star Trek: Voyager - Elite Force, construido sobre idTech3/Quake3e con renderizador Vulkan. Necesita los archivos del juego original.",
};
