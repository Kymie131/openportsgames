import type { Port } from "@/lib/ports/schema";

export const goemon64RecompiledAndroid: Port = {
  schema: "port",
  id: "goemon-64-recompiled-android",
  title: "Goemon 64 Recompiled (Android)",
  game: "Mystical Ninja Starring Goemon",
  developers: ["ogdanimal"],
  publisher: "Konami",
  originalYear: 1997,
  portType: "recompilation",
  genre: "action-adventure",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/ogdanimal/Goemon64Recomp-Android"],
  license: { spdx: "GPL-3.0" },
  verified: false,
  sourceVerified: true,
  originalSystems: ["Nintendo 64"],
  related: ["goemon-64-recompiled"],
  notes:
    "Android port of Goemon 64: Recompiled: plays Mystical Ninja Starring Goemon (Nintendo 64) natively on phone or handheld, using RT64 for Vulkan rendering. Packaging/port layer on top of the upstream recompilation (built on N64: Recompiled). The APK does not include the game; you need your own ROM. Latest release: v1.0.8 (APK).",
  notesEs:
    "Port Android de Goemon 64: Recompiled: juega a Mystical Ninja Starring Goemon (Nintendo 64) de forma nativa en móvil o handheld, con render RT64 Vulkan. Capa de empaquetado sobre la recompilación original (built on N64: Recompiled). El APK no incluye el juego; necesitas tu propia ROM. Última release: v1.0.8 (APK).",
};
