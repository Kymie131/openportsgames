import type { Port } from "@/lib/ports/schema";

export const Zeldawwhdrecompandroid: Port = {
  schema: "port",
  id: "zeldawwhdrecompandroid",
  title: "ZeldaWWHDRecompAndroid (Enhanced)",
  game: "The Legend of Zelda: The Wind Waker HD",
  developers: ["SSunnKing"],
  publisher: "Nintendo",
  originalYear: 2013,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/SSunnKing/ZeldaWWHDRecompAndroid---ENHANCED"],
  license: { spdx: "MPL-2.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Wii U"],
  related: ["wind-waker-hd-recomp", "wind-waker-recomp", "switch-waker-hd"],
  notes:
    "Wind Waker HD recompiled for Android (native ARM + Vulkan, no emulator), enhanced: native widescreen, fixed shadows, pinch-to-zoom camera, phone-made touch controls with in-game icons, 60 fps interpolation and performance work. Bring your own game dump.",
  notesEs:
    "Wind Waker HD recompilado para Android (ARM nativo + Vulkan, sin emulador), con panorámico nativo, sombras corregidas, 60 fps interpolados y más. Aporta tu propio volcado del juego.",
};
