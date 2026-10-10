import type { Port } from "@/lib/ports/schema";

export const chaotixRecompiled: Port = {
  schema: "port",
  id: "chaotix-recompiled",
  title: "Knuckles' Chaotix (Chaotix Recompiled)",
  game: "Knuckles' Chaotix",
  developers: ["YuutaTsubasa"],
  publisher: "Sega",
  originalYear: 1995,
  portType: "recompilation",
  genre: "platformer",
  openSource: true,
  originalGameLicense: "proprietary",
  platforms: ["windows", "linux", "macos", "android"],
  status: "beta",
  release: { version: null, date: null },
  sources: ["https://github.com/YuutaTsubasa/ChaotixRecompiled"],
  license: { spdx: "MIT" },
  verified: false,
  originalSystem: "Sega 32X",
  notes:
    "Static recompilation of Knuckles' Chaotix (Sega 32X) to native C++, with true widescreen. It builds for Windows, Linux, macOS and Android and requires your own ROM.",
  notesEs:
    "Recompilación estática de Knuckles' Chaotix (Sega 32X) a C++ nativo, con widescreen real. Compila para Windows, Linux, macOS y Android y requiere tu propia ROM.",
  cover: {
    src: "https://thumbnails.libretro.com/Sega%20-%2032X/Named_Boxarts/Knuckles'%20Chaotix%20(Europe).png",
    alt: "Knuckles' Chaotix (box art)",
    credit: "Box art",
  },
};
