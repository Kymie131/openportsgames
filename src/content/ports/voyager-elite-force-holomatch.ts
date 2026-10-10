import type { Port } from "@/lib/ports/schema";

export const voyagerEliteForceHolomatch: Port = {
  schema: "port",
  id: "voyager-elite-force-holomatch",
  title: "Star Trek: Voyager - Elite Force Holomatch",
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
  sources: ["https://github.com/imjustadudegamer/VoyagerHM-Android"],
  license: { spdx: "GPL-2.0" },
  verified: false,
  originalSystem: "Microsoft Windows",
  notes:
    "Android port of the Holomatch multiplayer of Star Trek: Voyager - Elite Force, with Vulkan, touch controls and gamepad support. It needs the original game files.",
  notesEs:
    "Port a Android del multijugador Holomatch de Star Trek: Voyager - Elite Force, con Vulkan, controles táctiles y mando. Necesita los archivos del juego original.",
};
