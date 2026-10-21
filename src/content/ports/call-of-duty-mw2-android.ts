import type { Port } from "@/lib/ports/schema";

export const callOfDutyMw2Android: Port = {
  schema: "port",
  id: "call-of-duty-mw2-android",
  title: "Call of Duty: Modern Warfare 2 (Android)",
  game: "Call of Duty: Modern Warfare 2",
  developers: ["OpenPort-Labs"],
  publisher: "Activision",
  originalYear: 2009,
  portType: "recompilation",
  genre: "shooter",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android", "linux", "windows"],
  status: "alpha",
  release: { version: null, date: null },
  sources: ["https://github.com/OpenPort-Labs/mw2-android"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Xbox 360"],
  related: ["call-of-duty-mw2-recomp"],
  cover: {
    src: "https://upload.wikimedia.org/wikipedia/en/5/52/Call_of_Duty_Modern_Warfare_2_%282009%29_cover.png",
    alt: "Call of Duty: Modern Warfare 2 (box art)",
    credit: "Wikipedia",
  },
  notes:
    "Call of Duty: Modern Warfare 2 (2009, Xbox 360) recompiled ahead-of-time into native code for Android (ARM64), Linux and Windows (x86-64), with Vulkan rendering, touchscreen and controller input. Not an emulator; it requires user-supplied game files. Experimental. Latest release: v0.0.2 (APK).",
  notesEs:
    "Call of Duty: Modern Warfare 2 (2009, Xbox 360) recompilado ahead-of-time a código nativo para Android (ARM64), Linux y Windows (x86-64), con render Vulkan y controles táctiles y de mando. No es un emulador; requiere archivos del juego aportados por el usuario. Experimental. Última release: v0.0.2 (APK).",
};
